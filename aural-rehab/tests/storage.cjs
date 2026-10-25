const assert = require('node:assert/strict');
const { loadLab } = require('./load.cjs');

function quotaError() { const error = new Error('quota'); error.name = 'QuotaExceededError'; return error; }

{
  const existing = { app: 'comd4590-lab', schema: 2, attempts: [{ i: 'prior', c: 'degree-scale', ok: true, t: 1 }] };
  const key = 'comd4590-lab-v2', storage = { [key]: JSON.stringify(existing) };
  const { L } = loadLab({ storage }), state = L.store.load(), originalSet = globalThis.localStorage.setItem;
  state.attempts.push({ i: 'new', c: 'degree-scale', ok: true, t: 2 });
  globalThis.localStorage.setItem = (k, v) => {
    if (k === key + '-before-exam1') throw quotaError();
    originalSet(k, v);
  };
  assert.equal(L.store.save(), true, 'a failed duplicate backup must not block the primary save');
  assert.equal(L.store.ok(), true);
  assert.equal(JSON.parse(storage[key]).attempts.length, 2);
  assert.equal(storage[key + '-before-exam1'], undefined);
}

{
  const key = 'comd4590-lab-v2', storage = { [key]: JSON.stringify({ app: 'comd4590-lab', schema: 2, attempts: [] }) };
  const { L } = loadLab({ storage }), state = L.store.load(), original = storage[key], originalSet = globalThis.localStorage.setItem;
  state.attempts.push({ i: 'unsaved', c: 'degree-scale', ok: true, t: 3 });
  globalThis.localStorage.setItem = (k, v) => {
    if (k === key) throw quotaError();
    originalSet(k, v);
  };
  assert.equal(L.store.save(), false);
  assert.match(L.store.problem(), /storage is full/);
  assert.equal(storage[key], original, 'a failed primary write must not alter saved data');
  assert.match(L.store.exportJSON(), /unsaved/, 'export retains the current in-memory work');
}

{
  const { L } = loadLab();
  globalThis.localStorage.getItem = () => { const e = new Error('denied'); e.name = 'SecurityError'; throw e; };
  L.store.load();
  assert.equal(L.store.ok(), false);
  assert.match(L.store.problem(), /blocking storage/);
  assert.equal(L.store.save(), false);
  assert.match(L.store.problem(), /blocking storage/, 'a read failure must not masquerade as a competing tab');
}

console.log('PASS storage diagnostics and guarded saves');

// Aural, Diagnostics, astronomy and geology share the hosted origin's quota.
// Simulate an existing history with only a few hundred characters free.
{
  const key = 'comd4590-lab-v2';
  const { L } = loadLab();
  const history = L.store.load();
  history.attempts = Array.from({ length: 1000 }, (_, n) => ({
    i: 'saved-' + n, c: 'degree-scale', ok: n % 2 === 0, t: n, cf: 'h', m: 'practice'
  }));
  L.store.save();
  const original = JSON.stringify(history), storage = { [key]: original };
  const env = loadLab({ storage }), state = env.L.store.load(), set = globalThis.localStorage.setItem;
  const quota = original.length + 300;
  globalThis.localStorage.setItem = (k, v) => {
    const used = Object.entries(storage).reduce((n, [name, value]) => n + (name === k ? 0 : value.length), 0);
    if (used + v.length > quota) throw quotaError();
    set(k, v);
  };
  const X = env.L.exam2;
  const run = X.start('topic', 'Quota regression', X.select('ci-signal', 8));
  const task = run.tasks[0];
  X.answer(run, 0, task.item.o.findIndex(o => o.ok), 'h');
  X.draft(run, 1, 1); run.cur = 1; run.tasks[1].flag = true;
  X.state().notes['ci-signal'] = { text: 'A saved note 🦻 with Unicode and a draft.', updated: 1 };
  X.touch(run);
  assert.equal(env.L.store.ok(), true, env.L.store.problem());
  assert(storage[key].startsWith('comd4590-lz16-v1:'));
  assert(storage[key].length < original.length / 2, 'compression creates meaningful room without truncating history');
  const expected = JSON.parse(env.L.store.exportJSON()).state;
  const reloaded = loadLab({ storage });
  assert.deepEqual(reloaded.L.store.load(), expected, 'refresh restores every field from compressed storage');
  assert.equal(reloaded.L.store.load().attempts.length, 1001);
  assert.equal(reloaded.L.exam2.get(run.id).tasks[0].checked, true);
  assert.equal(reloaded.L.exam2.get(run.id).tasks[1].response, 1);
  assert.equal(reloaded.L.exam2.get(run.id).cur, 1);
  assert.equal(reloaded.L.store.importText(JSON.stringify({ app: 'comd4590-lab', schema: 2, state: expected })).ok, true);
  assert.equal(reloaded.L.store.load().attempts.length, 1001, 'repeated import keeps first answers and deduplicates attempts');
  const compressed = storage[key];
  const backupEnv = loadLab({ storage: { [key]: compressed } });
  backupEnv.L.store.load(); backupEnv.L.store.save();
  assert.deepEqual(JSON.parse(backupEnv.L.store.exportBeforeExam2()).state, JSON.parse(reloaded.L.store.exportJSON()).state, 'compressed recovery copies export ordinary JSON');
  console.log('PASS full-origin quota, lossless compressed refresh, first answers, drafts, flags, notes, recovery exports and imports');
}
