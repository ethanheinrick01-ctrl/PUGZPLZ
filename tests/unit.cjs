// Unit tests: conventions (incl. every boundary), grading, mastery, retries, mocks, persistence, import/export.
const assert = require('assert');
const fs = require('fs'), path = require('path');
const { loadLab } = require('./load.cjs');
let pass = 0, fail = 0;
function t(name, fn) { try { fn(); pass++; console.log('  ok  ' + name); } catch (e) { fail++; console.log('  FAIL ' + name + '\n       ' + e.message); } }

let { L } = loadLab();
const C = L.conv;

console.log('Conventions');
t('adopted degree boundaries', () => {
  const exp = { '-10': 'wnl', 0: 'wnl', 25: 'wnl', 30: 'mild', 35: 'mild', 40: 'mild', 45: 'moderate', 55: 'moderate', 60: 'modsev', 70: 'modsev', 75: 'severe', 90: 'severe', 95: 'profound', 120: 'profound', 90.3: 'profound', 91.7: 'profound' };
  Object.keys(exp).forEach(k => assert.strictEqual(C.degree(+k).key, exp[k], k + ' -> ' + C.degree(+k).key));
});
t('gaps are undefined, never silently classified', () => {
  [26, 28.3, 29, 41, 43.3, 44, 56, 58.3, 59, 71, 73.3, 74].forEach(v => { assert.strictEqual(C.degree(v).key, null, String(v)); assert.ok(C.degree(v).gap); });
});
t('superseded table only used for trap text', () => {
  assert.strictEqual(C.supersededLabel(60), 'Moderate'); assert.ok(/Slight-mild/.test(C.supersededLabel(25)));
});
t('PTA = 500/1000/2000', () => { assert.strictEqual(C.pta({ 250: 90, 500: 40, 1000: 50, 2000: 60, 4000: 90 }), 50); assert.strictEqual(C.pta({ 500: 25, 1000: 30, 2000: 30 }), 28.3); });
t('type classifier', () => {
  assert.strictEqual(C.typeOf({ 500: 50, 1000: 50, 2000: 50, 4000: 50 }, { 500: 5, 1000: 10, 2000: 10, 4000: 5 }), 'conductive');
  assert.strictEqual(C.typeOf({ 500: 50, 1000: 55, 2000: 60, 4000: 65 }, { 500: 50, 1000: 50, 2000: 60, 4000: 65 }), 'sensorineural');
  assert.strictEqual(C.typeOf({ 500: 60, 1000: 60, 2000: 60, 4000: 65 }, { 500: 30, 1000: 35, 2000: 35, 4000: 40 }), 'mixed');
  assert.strictEqual(C.typeOf({ 500: 10, 1000: 15, 2000: 20, 4000: 25 }, {}), 'normal');
});
t('WRS categories avoid endpoints', () => { assert.strictEqual(C.wrsCategory(92), 'wnl'); assert.strictEqual(C.wrsCategory(88), 'slight'); assert.strictEqual(C.wrsCategory(64), 'moderate'); assert.strictEqual(C.wrsCategory(56), 'poor'); assert.strictEqual(C.wrsCategory(48), 'verypoor'); [90, 75, 60, 50].forEach(v => assert.strictEqual(C.wrsCategory(v), null)); });
t('reflex SL categories, 60-69 undefined', () => { assert.strictEqual(C.reflexCategory(C.reflexSL(95, 40)), 'reduced'); assert.strictEqual(C.reflexCategory(85), 'normal'); assert.strictEqual(C.reflexCategory(105), 'elevated'); assert.strictEqual(C.reflexCategory(65), null); });
t('tymp classifier agrees under both norm sets', () => {
  assert.strictEqual(C.tympType({ peak: false, ecv: 3.0, age: 'child' }), 'B-large');
  assert.strictEqual(C.tympType({ peak: false, ecv: 0.6, age: 'child' }), 'B-normal');
  assert.strictEqual(C.tympType({ peak: false, ecv: 0.1, age: 'child' }), 'B-small');
  assert.strictEqual(C.tympType({ peak: true, pc: 0.6, pressure: -250, ecv: 0.6, age: 'child' }), 'C');
  assert.strictEqual(C.tympType({ peak: true, pc: 0.6, pressure: -150, ecv: 0.6, age: 'child' }), null, '-150 is disputed between norm sets');
  assert.strictEqual(C.tympType({ peak: true, pc: 0.12, pressure: 0, ecv: 0.6, age: 'child' }), 'As');
});
t('count-the-dots reproduces the class example (21 and 46)', () => {
  const X = { 250: 10, 500: 20, 750: 40, 1000: 50, 2000: 60, 3000: 70, 4000: 80, 8000: 80 }, O = { 250: 10, 500: 20, 1000: 30, 2000: 40, 4000: 50, 8000: 62 };
  assert.ok(Math.abs(C.countDots(X) - 21) <= 1, 'X=' + C.countDots(X)); assert.strictEqual(C.countDots(O), 46); assert.strictEqual(L.DOTS.length, 100);
});

console.log('Generators');
t('all generators build 300 seeds without error and with one keyed answer', () => {
  L.gen.list.forEach(n => { for (let s = 1; s <= 300; s++) { const it = L.engine.resolve({ gen: n, seed: s * 7919 }); if (it.o && (it.t === 'mc' || it.t === 'tf')) assert.strictEqual(it.o.filter(o => o.ok).length, 1, n + ' ' + s); } });
});
t('generated audiogram types match the classifier', () => {
  for (let s = 1; s <= 400; s++) {
    const it = L.gen.build('typeAud', s * 31 + 5); if (!it.media) continue;
    const side = it.media.spec.right ? 'right' : 'left', e = it.media.spec[side];
    const keyed = it.o.find(o => o.ok).t.toLowerCase(); assert.strictEqual(C.typeOf(e.ac, e.bc), keyed);
  }
});
t('generator is deterministic for a seed', () => { const a = JSON.stringify(L.gen.build('describe', 12345)), b = JSON.stringify(L.gen.build('describe', 12345)); assert.strictEqual(a, b); });

console.log('Grading');
const E = L.engine, REG = E.REG();
t('mc grading via original index', () => { const it = REG['s1.def1']; const k = it.o.findIndex(o => o.ok); assert.ok(E.grade(it, k).ok); assert.ok(!E.grade(it, (k + 1) % it.o.length).ok); });
t('ms needs exact set; partial credit reported', () => { const it = REG['s1.need3']; const want = it.o.map((o, i) => o.ok ? i : -1).filter(i => i >= 0); assert.ok(E.grade(it, want).ok); const g = E.grade(it, want.slice(0, 1)); assert.ok(!g.ok && g.sc > 0 && g.sc < 1); assert.ok(!E.grade(it, want.concat([it.o.findIndex(o => !o.ok)])).ok); });
t('tf grading', () => { const it = REG['s2.scale2']; assert.ok(E.grade(it, 1).ok); assert.ok(!E.grade(it, 0).ok); });
t('num tolerance', () => { const it = REG['s9.dots3']; assert.ok(E.grade(it, 22).ok); assert.ok(E.grade(it, 24).ok); assert.ok(!E.grade(it, 25).ok); assert.ok(E.grade(it, '').blank); });
t('match/order/parts', () => {
  const m = REG['s1.core2']; assert.ok(E.grade(m, m.pairs.map(p => p[1])).ok); assert.ok(!E.grade(m, m.pairs.map(p => p[1]).reverse()).ok);
  const o = REG['s5.pierre1']; assert.ok(E.grade(o, o.seq.slice()).ok); assert.ok(!E.grade(o, o.seq.slice().reverse()).ok);
  const p = REG['c7.1']; assert.ok(E.grade(p, ['Profound', 'Severe']).ok); const g = E.grade(p, ['Profound', 'Profound']); assert.ok(!g.ok && g.sc === 0.5);
});
t('case c7: 95 profound, 90 severe', () => { const p = REG['c7.1']; assert.strictEqual(p.parts[0].a, 'Profound'); assert.strictEqual(p.parts[1].a, 'Severe'); assert.strictEqual(C.pta(L.CASES.find(c => c.id === 'c7').media.spec.left.ac), 90); });

console.log('Mastery and scheduling');
({ L } = loadLab());
const E2 = L.engine, S2 = L.store, R2 = E2.REG();
function rightAnswer(it) { return it.t === 'ms' ? it.o.map((o, j) => o.ok ? j : -1).filter(j => j >= 0) : it.o ? it.o.findIndex(o => o.ok) : it.t === 'num' ? it.a : it.t === 'match' ? it.pairs.map(p => p[1]) : it.t === 'order' ? it.seq.slice() : it.t === 'parts' ? it.parts.map(p => p.a) : null; }
function answer(id, ok, conf, mode) { const it = R2[id]; const k = it.o ? it.o.findIndex(o => ok ? o.ok : !o.ok) : null; return E2.record(it, { id }, k, conf, mode || 'practice'); }
t('two correct on two different items at medium+ = mastered', () => {
  answer('s4.cmv1', true, 'm'); let st = E2.conceptStats(); assert.strictEqual(st.cmv.status, 'learning');
  answer('s4.cmv3', true, 'h'); st = E2.conceptStats(); assert.strictEqual(st.cmv.status, 'mastered');
});
t('same item twice does not master', () => { answer('s4.toxo1', true, 'm'); answer('s4.toxo1', true, 'm'); assert.notStrictEqual(E2.conceptStats().toxo.status, 'mastered'); });
t('sparse concepts can reach a second practice question after one attempt', () => {
  const b = loadLab(), e = b.L.engine, r = e.REG();
  for (const c of ['ar-providers', 'consequences', 'timing', 'listening-check']) {
    const first = e.practiceRefs({ concepts: [c], n: 2 });
    assert.ok(first.length >= 1, c + ' has an accessible question');
    const it = e.resolve(first[0]);
    e.record(it, first[0], rightAnswer(it), 'm', 'practice');
    const next = e.practiceRefs({ concepts: [c], n: 2 });
    assert.strictEqual(next.length, 2, c + ' needs a second question for mastery');
    assert.notStrictEqual(e.refKey(next[0]), e.refKey(next[1]));
  }
  assert.ok(!e.practiceRefs({ concepts: ['contemporary'], n: 3 }).some(x => x.id === 's1.cont3'), 'unneeded mock item stays held');
  assert.ok(r['s6.uni2'], 'unilateral impact has a second standalone question');
});
t('low-confidence latest answer blocks mastery', () => { answer('s4.hsv1', true, 'm'); answer('s4.syph1', true, 'm'); answer('s4.hiv1', true, 'l'); const st = E2.conceptStats(); assert.strictEqual(st.hiv.status, 'learning'); });
t('high-confidence miss = misconception until two correct follow', () => {
  answer('s4.rh1', false, 'h'); assert.strictEqual(E2.conceptStats().rh.status, 'misconception');
  answer('s4.rh2', true, 'm'); assert.strictEqual(E2.conceptStats().rh.status, 'misconception');
  answer('s4.rh1', true, 'm'); assert.strictEqual(E2.conceptStats().rh.status, 'mastered');
});
t('any miss resets mastery', () => { answer('s4.cmv4', false, 'm'); assert.strictEqual(E2.conceptStats().cmv.status, 'shaky'); });
t('hint-assisted correct answers do not master', () => { E2.record(R2['s5.crou1'], { id: 's5.crou1' }, R2['s5.crou1'].o.findIndex(o => o.ok), 'h', 'practice', true); const k = R2['s5.apert1'].o.findIndex(o => o.ok); E2.record(R2['s5.apert1'], { id: 's5.apert1' }, k, 'h'); answer('s5.apert2', true, 'h'); assert.strictEqual(E2.conceptStats().apert.status, 'mastered'); E2.record(R2['s5.crou1'], { id: 's5.crou1' }, R2['s5.crou1'].o.findIndex(o => o.ok), 'h', 'practice', true); assert.notStrictEqual(E2.conceptStats().crouzon.status, 'mastered'); });
t('teach-back never counts', () => { const before = S2.load().attempts.length; E2.record(R2['s1.tb1'], { id: 's1.tb1' }, { self: 'got' }, null); assert.strictEqual(S2.load().attempts.length, before); });
t('mock answers do not change mastery but flag review', () => {
  answer('s4.anox1', true, 'm'); answer('s4.anox2', true, 'm');
  assert.strictEqual(E2.conceptStats().anoxia.status, 'mastered');
  const s = S2.load(); s.mocks.push({ id: 'Mx', ts: Date.now() + 5, items: [{ id: 's4.anox1', c: 'anoxia', ok: false }], byDom: {}, byCon: {} });
  const st = E2.conceptStats(); assert.strictEqual(st.anoxia.status, 'mastered'); assert.strictEqual(st.anoxia.mockMiss, true);
  assert.strictEqual(E2.reviewPlan().find(r => r.c === 'anoxia').why, 'mock');
});
t('review order: misconception first', () => { answer('s5.usher1'.replace('usher1', 'ush1'), false, 'h'); const plan = E2.reviewPlan(); assert.strictEqual(plan[0].why, 'misconception'); });

console.log('Sessions');
t('wrong answer inserts a retry two items later; low-confidence correct four later', () => {
  const refs = E2.practiceRefs({ sec: 's1', n: 8 }); E2.newSession('practice', 't', refs);
  let sess = E2.currentSession(); const it = E2.resolve(sess.queue[0].ref);
  const wrong = it.t === 'ms' ? [it.o.findIndex(o => !o.ok)] : it.o ? it.o.findIndex(o => !o.ok) : it.t === 'num' ? it.a + 999 : it.t === 'match' ? it.pairs.map(() => 'x') : it.t === 'order' ? it.seq.slice().reverse() : it.t === 'parts' ? it.parts.map(() => 'x') : 'x';
  E2.answerInSession(wrong, 'm'); sess = E2.currentSession();
  assert.strictEqual(sess.queue.length, 9); assert.ok(sess.queue[3].retry, 'retry at idx 3');
  E2.advance(); sess = E2.currentSession(); const it2 = E2.resolve(sess.queue[1].ref);
  const right = rightAnswer(it2);
  E2.answerInSession(right, 'l'); sess = E2.currentSession(); assert.strictEqual(sess.queue.length, 10); assert.ok(sess.queue[6].retry, 'low-conf retry at idx 6');
  E2.endSession();
});
t('boss run has 25+ items and keeps case items in order', () => {
  L.BOSSES.forEach(b => { const refs = E2.bossRefs(b.id); assert.ok(refs.length >= 25, b.id + ' has ' + refs.length);
    const ids = refs.filter(r => r.id).map(r => r.id); L.CASES.forEach(cs => { const pos = cs.items.map(it => ids.indexOf(it.id)).filter(p => p >= 0); for (let i = 1; i < pos.length; i++) assert.ok(pos[i] === pos[i - 1] + 1, 'case ' + cs.id + ' split in ' + b.id); }); });
});

t('boss ended early never records a perfect best; full run does', () => {
  const refs = E2.bossRefs('b4'); E2.newSession('boss', 'B', refs, { noRetry: true, bossId: 'b4' });
  for (let i = 0; i < 3; i++) { const it = E2.resolve(E2.currentSession().queue[E2.currentSession().idx].ref); E2.answerInSession(rightAnswer(it), 'h'); E2.advance(); }
  let r = E2.finishBoss(E2.endSession());
  assert.strictEqual(r.complete, false); assert.strictEqual(r.total, refs.filter(x => E2.resolve(x).t !== 'teach').length); assert.strictEqual(r.score, 3);
  assert.strictEqual(S2.load().boss.b4.best, 0, 'early exit sets no best');
  E2.newSession('boss', 'B', refs, { noRetry: true, bossId: 'b4' });
  while (E2.currentSession().idx < E2.currentSession().queue.length) { const it = E2.resolve(E2.currentSession().queue[E2.currentSession().idx].ref); E2.answerInSession(rightAnswer(it), 'h'); E2.advance(); }
  r = E2.finishBoss(E2.endSession()); assert.strictEqual(r.complete, true); assert.strictEqual(S2.load().boss.b4.best, 1);
});
t('old boss runs without a completion flag are not trusted', () => {
  const s = S2.load(); s.boss.b9 = { best: 1, runs: [{ ts: 1, score: 3, total: 3 }] }; S2._setMem(JSON.parse(JSON.stringify(s)));
  assert.strictEqual(S2.load().boss.b9.best, 0); assert.strictEqual(S2.load().boss.b9.runs[0].complete, null);
});
console.log('Mock exam');
t('70-item mock: size, domain mix, one case block, no refresher items', () => {
  const m = E2.buildMock(70); assert.strictEqual(m.refs.length, 70);
  const items = m.refs.map(E2.resolve); const dom = {}; items.forEach(it => { dom[it.dom] = (dom[it.dom] || 0) + 1; });
  assert.deepStrictEqual(dom, { ov: 10, et: 18, dx: 21, ha: 21 });
  assert.ok(!items.some(it => !it.caseId && (it.tier === 3 || it.t === 'teach' || it.mockExclude)), 'no 4190/teach items outside the case block');
  const cs = L.CASES.find(c => c.id === m.caseId); const ids = m.refs.map(r => r.id); const pos = cs.items.map(it => ids.indexOf(it.id)); pos.forEach((p, i) => assert.ok(p >= 0 && (i === 0 || p === pos[i - 1] + 1)));
});
t('original mock finalizes aggregate on submit; blanks count wrong; held items unlock', () => {
  const s = S2.load(), m = s.mockActive; const before = s.attempts.length;
  m.refs.forEach((ref, i) => { if (i % 2 === 0) { const it = E2.resolve(ref); m.answers[i] = it.t === 'ms' ? it.o.map((o, j) => o.ok ? j : -1).filter(j => j >= 0) : it.o ? it.o.findIndex(o => o.ok) : it.t === 'num' ? it.a : it.t === 'match' ? it.pairs.map(p => p[1]) : it.t === 'order' ? it.seq : it.t === 'parts' ? it.parts.map(p => p.a) : null; } });
  assert.strictEqual(S2.load().attempts.length, before, 'no attempts recorded before submit');
  const rec = E2.submitMock(); assert.strictEqual(rec.total, 70); assert.strictEqual(rec.score, 35);
  assert.ok(rec.items.filter(x => x.blank).every(x => !x.ok)); assert.strictEqual(S2.load().mockActive, null);
  const heldInMock = rec.items.filter(x => x.ref.id && R2[x.ref.id] && R2[x.ref.id].pool === 'x'); heldInMock.forEach(x => assert.ok(S2.load().seenX[x.ref.id]));
});
t('35-item mock domain mix', () => { const m = E2.buildMock(35); const dom = {}; m.refs.map(E2.resolve).forEach(it => { dom[it.dom] = (dom[it.dom] || 0) + 1; }); assert.deepStrictEqual(dom, { ov: 5, et: 9, dx: 11, ha: 10 }); S2.load().mockActive = null; });
t('second mock favors unseen held items', () => { const s = S2.load(); const m1 = s.mocks[0]; const m = E2.buildMock(70); const overlap = m.refs.filter(r => r.id && m1.items.some(x => x.id === r.id)).length; assert.ok(overlap < 45, 'overlap ' + overlap); s.mockActive = null; });

console.log('Persistence, export, import');
t('state survives reload (same storage)', () => {
  const env = loadLab(); const n0 = env.L.store.load().attempts.length; env.L.engine.record(env.L.engine.REG()['s1.def1'], { id: 's1.def1' }, 0, 'm');
  const raw = env.storage[env.L.store.KEY]; assert.ok(raw && JSON.parse(raw).attempts.length === n0 + 1);
});
t('v2 export -> import into fresh storage merges without duplicates', () => {
  const a = loadLab(); a.L.engine.record(a.L.engine.REG()['s1.def2'], { id: 's1.def2' }, 0, 'h'); const txt = a.L.store.exportJSON();
  const b = loadLab(); let r = b.L.store.importText(txt); assert.ok(r.ok && r.kind === 'v2', r.message); const n = b.L.store.load().attempts.length; assert.ok(n >= 1);
  r = b.L.store.importText(txt); assert.strictEqual(b.L.store.load().attempts.length, n, 'no duplicates on re-import');
});
t('Lecture 2 drill backup imports as prior signal only', () => {
  const b = loadLab(); const txt = JSON.stringify({ records: { 'fas-photo': { attempts: 4, correct: 2 }, 'mondini-description': { attempts: 5, correct: 2 } }, concepts: { fas: { mastered: true }, mondini: { mastered: false } } });
  const r = b.L.store.importText(txt); assert.ok(r.ok && r.kind === 'drill', r.message);
  const st = b.L.engine.conceptStats(); assert.ok(st.fas.prior && st.fas.prior.miss >= 2, 'fas prior'); assert.strictEqual(st.fas.status, 'new', 'no mastery granted');
  assert.ok(st.mondini.prior && st.mondini.prior.miss >= 2); assert.ok(b.L.engine.reviewPlan().some(p => p.c === 'fas' && p.why === 'prior'));
});
t('v1 full-backup schema imports', () => {
  const b = loadLab(); const payload = { schema: 'comd4590-progress-backup-v1', date: '2026-09-21', storage: { 'comd4590-guided-progress-v1': JSON.stringify({ concepts: { 'e1-snr': { attempts: 3, correct: 1, mastered: false } }, modules: {} }), 'comd4590-study-lab-progress-v1': JSON.stringify({ 'mock-1': { score: 50, total: 70 } }) } };
  const r = b.L.store.importText(JSON.stringify(payload)); assert.ok(r.ok && r.kind === 'v1', r.message); assert.strictEqual(b.L.engine.conceptStats().snr.prior.miss, 2);
});
t('garbage import is rejected cleanly', () => { const b = loadLab(); assert.ok(!b.L.store.importText('{nope').ok); assert.ok(!b.L.store.importText('{"a":1}').ok); });
t('blocked storage does not throw', () => { const b = loadLab({ noStorage: true }); b.L.engine.record(b.L.engine.REG()['s1.def1'], { id: 's1.def1' }, 0, 'm'); assert.strictEqual(b.L.store.ok(), false); });

console.log('\n' + pass + ' passed, ' + fail + ' failed');
process.exit(fail ? 1 : 0);
