// Content validator: structure, keys, sources, media, conventions. Exit code 1 on any error.
const fs = require('fs'), path = require('path');
const { loadLab } = require('./load.cjs');
const { L, ROOT } = loadLab();
const E = L.engine, C = L.conv;
const errors = [], warns = [];
const err = (id, m) => errors.push(id + ': ' + m), warn = (id, m) => warns.push(id + ': ' + m);

const raw = (L.ITEMS || []).concat(...(L.CASES || []).map(c => c.items));
const ids = {};
raw.forEach(it => { if (ids[it.id]) err(it.id, 'duplicate id'); ids[it.id] = 1; });
const REG = E.REG();
const TYPES = ['mc', 'ms', 'tf', 'num', 'match', 'order', 'parts', 'teach'];
Object.values(REG).forEach(it => {
  if (!TYPES.includes(it.t)) err(it.id, 'bad type ' + it.t);
  if (!L.CONCEPTS[it.c]) err(it.id, 'unknown concept ' + it.c);
  if (!it.q) err(it.id, 'no prompt');
  if (!it.s || !it.s.length) err(it.id, 'no sources');
  (it.s || []).forEach(c => { if (!L.srcBase(c)) err(it.id, 'unknown source code ' + c); });
  if (![1, 2, 3, 4].includes(it.tier)) err(it.id, 'missing tier');
  if (it.t === 'mc' || it.t === 'tf' || it.t === 'ms') {
    const oks = it.o.filter(o => o.ok).length;
    if ((it.t === 'mc' || it.t === 'tf') && oks !== 1) err(it.id, 'single-answer item has ' + oks + ' keyed options');
    if (it.t === 'ms' && oks < 1) err(it.id, 'select-all has no keyed options');
    const texts = it.o.map(o => o.t.toLowerCase());
    if (new Set(texts).size !== texts.length) err(it.id, 'duplicate option text');
    if (it.t !== 'tf' && it.o.length < 3) warn(it.id, 'fewer than 3 options');
    if (it.t === 'mc') it.o.forEach(o => { if (!o.ok && !o.w) warn(it.id, 'distractor without rationale: ' + o.t); });
    if (it.t === 'ms' && oks === it.o.length) warn(it.id, 'select-all where every option is correct');
  }
  if (it.t === 'num' && typeof it.a !== 'number') err(it.id, 'numeric without number key');
  if (it.t === 'match') { const r = it.pairs.map(p => p[1]); if (new Set(r).size !== r.length) err(it.id, 'duplicate match targets'); if (it.pairs.length < 3) warn(it.id, 'short match'); }
  if (it.t === 'order' && it.seq.length < 3) err(it.id, 'order needs 3+');
  if (it.t === 'parts') it.parts.forEach(p => { if (!p.options.includes(p.a)) err(it.id, 'part key not in options: ' + p.label); });
  if (it.media && it.media.kind === 'img' && !fs.existsSync(path.join(ROOT, it.media.src))) err(it.id, 'missing image ' + it.media.src);
  if (it.img && /apert|crouzon|treacher|waardenburg|down|goldenhar|stickler|pierre|charge|syndactyly|forelock|philtrum/i.test(it.q)) err(it.id, 'photo prompt leaks a clue');
  if (/—/.test(JSON.stringify(it))) err(it.id, 'contains an em-dash');
});
// Convention guards: no text anywhere may call 90 profound or put 60-70 under "moderate" as the adopted label.
const allText = JSON.stringify(raw) + JSON.stringify(L.GUIDE) + JSON.stringify(L.CASES);
if (/\b90\s*(dB HL)?\s*(=|is|:)\s*profound/i.test(allText)) err('text', '90 described as profound');
if (/—/.test(JSON.stringify(L.GUIDE) + JSON.stringify(L.PROF))) err('guide', 'contains an em-dash');

// Case audiograms: degree items must use defined, non-gap PTAs; plotted patterns must match declared types.
(L.CASES || []).forEach(cs => {
  const m = cs.media;
  if (m && m.kind === 'audiogram') ['right', 'left'].forEach(side => {
    const e = m.spec[side]; if (!e) return;
    const p = C.pta(e.ac);
    if (p !== null && C.degree(p).key === null) err(cs.id, side + ' PTA ' + p + ' falls in a scale gap');
    Object.keys(e.bc || {}).forEach(f => { if (e.bc[f] > e.ac[f]) err(cs.id, side + ' BC poorer than AC at ' + f); });
  });
  cs.items.forEach(it => (it.parts || []).forEach(pt => {
    if (/Degree/.test(pt.label)) { const want = pt.a; const lbl = pt.why.match(/= (\d+(\.\d+)?) dB HL/); if (lbl) { const v = parseFloat(lbl[1]); if (C.degree(v).label !== want) err(it.id, 'degree key ' + want + ' != scale ' + C.degree(v).label + ' for ' + v); } }
  }));
});
// Type declarations in cases vs conventions
const typeChecks = { c1: ['right', 'conductive'], c2: ['right', 'sensorineural'], c3: ['right', 'conductive'], c4: ['right', 'sensorineural'], c8: ['right', 'mixed'] };
Object.keys(typeChecks).forEach(cid => {
  const cs = L.CASES.find(c => c.id === cid), [side, t] = typeChecks[cid], e = cs.media.spec[side];
  const got = C.typeOf(e.ac, e.bc); if (got !== t) err(cid, 'type check expected ' + t + ' got ' + got);
});
// Skill rule: every mastery-eligible concept has at least two distinct graded item roots (or a generator)
const BY = E.BY_CONCEPT();
Object.keys(L.CONCEPTS).forEach(c => { const n = (BY[c] || []).filter(id => REG[id].t !== 'teach').length; if (n < 2 && !E.GEN_FOR[c]) err(c, 'fewer than two graded item roots (' + n + ')'); });
// Every concept has something to practice
Object.keys(L.CONCEPTS).forEach(c => { if (!E.hasPracticeContent(c)) warn(c, 'concept has no practice items'); });
// Generators: never emit a gap PTA in a degree-keyed item; cover all boundaries
const seen = new Set();
for (let s = 1; s <= 3000; s++) {
  for (const g of ['ptaDegree', 'describe', 'degreeValue']) {
    const it = L.gen.build(g, s * 104729 + 7, g === 'degreeValue' ? { boundaryOnly: s % 2 === 0 } : { boundary: s % 2 === 0 });
    if (it.t === 'parts') it.parts.forEach(pt => { if (/Degree/.test(pt.label)) { const v = it.pta; if (typeof v !== 'number') err(it.id, 'no pta field'); if (C.degree(v).key === null) err(it.id, 'generated gap PTA ' + v); if (C.degree(v).label !== pt.a) err(it.id, 'generated degree key mismatch ' + v); seen.add(v); } });
    if (it.gen && it.gen.name === 'degreeValue') { const v = +it.q.match(/<b>(\d+) dB HL<\/b>/)[1]; seen.add(v); const k = it.o.find(o => o.ok).t; if (k !== C.degree(v).label) err(it.id, 'degreeValue key mismatch'); }
  }
}
[25, 30, 40, 45, 55, 60, 70, 75, 90, 95].forEach(b => { if (!seen.has(b)) err('generators', 'boundary ' + b + ' never generated'); });

const counts = {}; Object.values(REG).forEach(it => { counts[it.t] = (counts[it.t] || 0) + 1; });
const bySec = {}; Object.values(REG).forEach(it => { bySec[it.sec] = (bySec[it.sec] || 0) + 1; });
const pool = { b: 0, x: 0 }; Object.values(REG).forEach(it => { pool[it.pool] = (pool[it.pool] || 0) + 1; });
console.log('Items:', Object.keys(REG).length, 'by type', JSON.stringify(counts));
console.log('By section', JSON.stringify(bySec), 'pool', JSON.stringify(pool), 'cases', L.CASES.length, 'concepts', Object.keys(L.CONCEPTS).length);
console.log('Boundary values generated:', [...seen].filter(v => [25, 30, 40, 45, 55, 60, 70, 75, 90, 95].includes(v)).sort((a, b) => a - b).join(','));
if (warns.length) console.log('WARNINGS (' + warns.length + '):\n  ' + warns.join('\n  '));
if (errors.length) { console.log('ERRORS (' + errors.length + '):\n  ' + errors.join('\n  ')); process.exit(1); }
console.log('Content validation: PASS');
