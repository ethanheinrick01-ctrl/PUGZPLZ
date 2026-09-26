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
