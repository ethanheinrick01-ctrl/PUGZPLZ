// Guards against the answer-position clues found in the September 25 screenshots.
// These mechanical checks supplement, rather than replace, source and clinical review.
const assert = require('node:assert/strict');
const {loadLab} = require('./load.cjs');
const {L} = loadLab();
const items = L.engine.itemsFor(() => true).filter(i => i.t === 'mc' && i.o.length >= 3);

function check(item) {
  const correct = item.o.findIndex(o => o.ok);
  assert.ok(correct >= 0, `${item.id}: missing key`);
  const answer = item.o[correct].t;
  const other = item.o.filter((_, n) => n !== correct).map(o => o.t);
  const longestDistractor = Math.max(...other.map(s => s.length));
  assert.ok(answer.length < 1.35 * longestDistractor,
    `${item.id}: answer length (${answer.length}) exposes key against ${longestDistractor}-character distractor`);
  assert.ok(!/[:;]/.test(answer) || other.some(s => /[:;]/.test(s)),
    `${item.id}: only the correct choice contains a colon or semicolon`);
  assert.equal(new Set(item.o.map(o => o.t.toLowerCase().trim())).size, item.o.length,
    `${item.id}: repeated answer choice`);
}
items.forEach(check);

let generated = 0;
for (const name of L.gen.list) {
  for (let seed = 1; seed <= 300; seed++) {
    const item = L.engine.resolve({gen:name, seed:seed*7919});
    if (item.t !== 'mc' || item.o.length < 3) continue;
    check(item);
    generated++;
  }
}

for (const id of ['s4.anox2', 's4.hem1']) {
  assert.ok(items.some(i => i.id === id), `${id}: screenshot question missing from quality review`);
}
console.log(`${items.length} authored and ${generated} generated multiple-choice questions passed answer-cue checks`);
