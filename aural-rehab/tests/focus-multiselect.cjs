const assert = require('node:assert/strict');
const {loadLab} = require('./load.cjs');

let {L, storage} = loadLab();
let X = L.exam2;
const D = L.EXAM2_DATA;
const groups = D.finalMocks.groups;
const concepts = [groups[0], groups[1]].map(g => D.topics.find(t => t.id === g.topics[0]).concepts[0]);
const old = X.start('focus-coverage', 'Saved coverage', groups[0].coverageItems.slice(0, 2));
X.draft(old, 1, 0);
const oldSnapshot = JSON.stringify(old);
const ids = concepts.flatMap(c => X.select(null, 2, false, [c]));
const available = new Set(X.pool().map(i => i.id));
const reserved = new Set(D.finalMocks.forms.flatMap(f => f.items));
assert.equal(ids.length, 4);
assert(ids.every(id => available.has(id) && !reserved.has(id)));
const run = X.start('topic', 'Selected concepts', ids, null, null, concepts);
assert.deepEqual(Array.from(run.conceptScope), concepts);
assert(run.tasks.every(t => concepts.includes(t.item.c)));
assert(concepts.every(c => run.tasks.filter(t => t.item.c === c).length === 2));

// A wrong last answer must not pad the retry with unrelated concepts.
run.cur = run.tasks.length - 1;
const last = run.tasks[run.cur];
assert(X.answer(run, run.cur, last.item.o.findIndex(o => !o.ok), 'h'));
assert(run.tasks.some(t => t.retry));
assert(run.tasks.every(t => concepts.includes(t.item.c)));
assert.equal(JSON.stringify(old), oldSnapshot, 'existing coverage run changed');

const id = run.id;
({L, storage} = loadLab({storage}));
X = L.exam2;
assert.deepEqual(Array.from(X.get(id).conceptScope), concepts, 'selection scope must survive reload');
assert.equal(JSON.stringify(X.get(old.id)), oldSnapshot, 'coverage draft must survive reload');
const exported = L.store.exportJSON();
const imported = loadLab();
assert(imported.L.store.importText(exported).ok);
assert.deepEqual(Array.from(imported.L.exam2.get(id).conceptScope), concepts, 'selection scope must survive export/import');
assert.equal(JSON.stringify(imported.L.exam2.get(old.id)), oldSnapshot);
console.log('PASS selected concepts, isolated retries, saved coverage, reload and import');
