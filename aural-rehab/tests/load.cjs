// Loads the lab's browser scripts into Node (no DOM) for unit tests and content validation.
const path = require('path');
const fs = require('fs');
const ROOT = path.join(__dirname, '..');
function loadLab(opts) {
  opts = opts || {};
  // fresh global namespace each call
  delete globalThis.L;
  const store = opts.storage || {};
  globalThis.localStorage = opts.noStorage ? undefined : {
    getItem: k => (k in store ? store[k] : null), setItem: (k, v) => { store[k] = String(v); }, removeItem: k => { delete store[k]; }
  };
  const html = fs.readFileSync(path.join(ROOT, 'index.html'), 'utf8');
  const srcs = [...html.matchAll(/<script src="([^"]+)"/g)].map(m => m[1].split('?')[0]).filter(s => !s.endsWith('app.js') && !s.includes('/ui/'));
  for (const s of srcs) {
    const code = fs.readFileSync(path.join(ROOT, s), 'utf8');
    // eslint-disable-next-line no-new-func
    new Function('window', code)(undefined);
  }
  globalThis.L.engine.build();
  return { L: globalThis.L, storage: store, ROOT };
}
module.exports = { loadLab, ROOT };
