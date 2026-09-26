// Regression checks for a reflex-SL seed that previously had no keyed answer.
const assert = require('assert');
const { loadLab } = require('./load.cjs');

let { L, storage } = loadLab();
let E = L.engine;

const legacy = E.resolve({ gen: 'reflex', seed: 4 });
assert.strictEqual(legacy.q, 'Right ipsilateral reflex at 1000 Hz is obtained at <b>125 dB HL</b>. Right AC threshold at 1000 Hz is <b>60 dB HL</b>.');
assert.strictEqual(legacy.parts[0].a, '65 dB SL');
assert.strictEqual(legacy.parts[1].a, 'Unclassified (60-69 dB SL)');
assert.ok(legacy.parts[1].options.includes(legacy.parts[1].a));
assert.strictEqual(E.grade(legacy, ['65 dB SL', legacy.parts[1].a]).sc, 1);
assert.strictEqual(E.grade(legacy, ['65 dB SL', 'Reduced SL (<60 dB SL), consistent with cochlear loss']).sc, 0.5);

// A stored generator ref must still reconstruct the same stem and an old answer.
E.newSession('practice', 'Existing reflex question', [{ gen: 'reflex', seed: 4 }]);
const oldResponse = ['65 dB SL', 'Reduced SL (<60 dB SL), consistent with cochlear loss'];
L.store.load().session.queue[0].response = oldResponse;
L.store.save();
({ L } = loadLab({ storage }));
E = L.engine;
assert.deepStrictEqual(L.store.load().session.queue[0].response, oldResponse);
assert.strictEqual(E.resolve(L.store.load().session.queue[0].ref).q, legacy.q);

const valid = E.resolve({ gen: 'reflex', seed: 1 });
assert.strictEqual(valid.q, 'Right ipsilateral reflex at 1000 Hz is obtained at <b>125 dB HL</b>. Right AC threshold at 1000 Hz is <b>40 dB HL</b>.');
assert.deepStrictEqual(valid.parts.map(p => p.a), ['85 dB SL', 'Normal (70-100 dB SL)']);
assert.strictEqual(valid.reflexUnclassified, false);

for (let seed = 1; seed <= 10000; seed++) {
  const item = E.resolve({ gen: 'reflex', seed });
  item.parts.forEach(part => assert.ok(part.options.includes(part.a), 'missing answer for seed ' + seed));
  assert.ok(item.parts[1].a, 'undefined interpretation for seed ' + seed);
}

// New practice refs reject the legacy gap seeds without modifying old refs.
const seeds = [4, 1, 4, 2];
L.util.newSeed = () => seeds.shift() || 3;
const refs = E.practiceRefs({ concepts: ['reflex-sl'], n: 2 });
assert.deepStrictEqual(refs.map(r => r.seed), [1, 2]);
assert.ok(refs.every(r => !E.resolve(r).reflexUnclassified));

({ L } = loadLab());
E = L.engine;
const retrySeeds = [4, 2];
L.util.newSeed = () => retrySeeds.shift() || 3;
E.newSession('practice', 'Reflex retry', [{ gen: 'reflex', seed: 1 }]);
E.answerInSession(['wrong', 'wrong'], 'm');
const retry = E.currentSession().queue.find(q => q.retry);
assert.ok(retry, 'a wrong answer gets a retry');
assert.strictEqual(retry.ref.seed, 2, 'the retry skips the undefined 65 dB SL seed');

console.log('Reflex generator and legacy-session regression checks passed.');
