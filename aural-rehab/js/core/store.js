/* Persistence, export/import and legacy migration. One localStorage key, every access guarded. */
(function (root) {
  'use strict';
  var L = root.L = root.L || {};
  var KEY = 'comd4590-lab-v2';
  var LEGACY_KEYS = ['comd4590-study-lab-progress-v1', 'comd4590-guided-progress-v1', 'comd4590-lecture2-drill-v1'];
  var mem = null, storageOK = true, lastRaw = null, problem = '', corrupt = false, readOK = true, backupAttempted = false;

  function blank() {
    return { app: 'comd4590-lab', schema: 2, created: Date.now(), updated: Date.now(), attempts: [], mocks: [], mockActive: null, session: null,
      boss: {}, seenX: {}, guideRead: {}, teach: {}, legacy: null, settings: { includeHeld: false },
      masteryCredits: {}, masterySeeded: false, exam1: { runs: [], chapterRead: {}, lastRoute: 'exam1' } };
  }
  function storageProblem(action, e) {
    if (e && (e.name === 'QuotaExceededError' || e.code === 22 || e.code === 1014)) return 'Browser storage is full, so this tab cannot save new progress.';
    if (e && e.name === 'SecurityError') return 'This browser is blocking storage for this page, so this tab cannot save new progress.';
    return 'This browser could not ' + action + ' saved progress.';
  }
  function lsGet(k) {
    try {
      if (!root.localStorage) throw new Error('Storage unavailable');
      var v = root.localStorage.getItem(k); readOK = true; return v;
    } catch (e) { readOK = false; storageOK = false; problem = storageProblem('read', e); return null; }
  }
  function lsSet(k, v) {
    try { root.localStorage.setItem(k, v); return true; }
    catch (e) { storageOK = false; problem = storageProblem('write', e); return false; }
  }
  function lsDel(k) { try { root.localStorage.removeItem(k); } catch (e) { storageOK = false; problem = storageProblem('delete', e); } }

  function normalize(s) {
    var b = blank();
    if (!s || typeof s !== 'object') return b;
    for (var k in b) if (s[k] === undefined) s[k] = b[k];
    if (!Array.isArray(s.attempts)) s.attempts = [];
    if (!Array.isArray(s.mocks)) s.mocks = [];
    if (!s.settings || typeof s.settings !== 'object') s.settings = b.settings;
    if (!s.masteryCredits || typeof s.masteryCredits !== 'object' || Array.isArray(s.masteryCredits)) s.masteryCredits = {};
    s.masterySeeded = s.masterySeeded === true;
    if (!s.exam1 || typeof s.exam1 !== 'object') s.exam1 = b.exam1;
    if (!Array.isArray(s.exam1.runs)) s.exam1.runs = [];
    if (!s.exam1.chapterRead) s.exam1.chapterRead = {};
    // Boss runs saved before the early-exit fix have no completion flag and cannot be trusted as a best score.
    if (s.boss && typeof s.boss === 'object') Object.keys(s.boss).forEach(function (k) {
      var b = s.boss[k]; if (!b || !Array.isArray(b.runs)) return;
      b.runs.forEach(function (r) { if (r.complete === undefined) r.complete = null; });
      b.best = b.runs.reduce(function (m, r) { return r.complete === true && r.total ? Math.max(m, r.score / r.total) : m; }, 0);
    });
    s.schema = 2; s.app = 'comd4590-lab';
    return s;
  }
  function load() {
    if (mem) return mem;
    var raw = lsGet(KEY), s = null;
    lastRaw = raw;
    if (raw) { try { s = JSON.parse(raw); } catch (e) { s = null; corrupt = true; storageOK = false; problem = 'Saved data could not be read. The original data has been left untouched.'; } }
    mem = normalize(s);
    if (!raw) autoDetectLegacy(mem);
    return mem;
  }
  function save() {
    if (!mem) return false;
    if (corrupt) return false;
    var currentRaw = lsGet(KEY);
    if (!readOK) return false;
    if (currentRaw !== lastRaw) { storageOK = false; problem = 'Another tab changed this lab’s progress. Export this tab before reloading so neither set of work is lost.'; return false; }
    // Preserve the pre-extension record automatically before the first write by this release.
    if (lastRaw && !backupAttempted) {
      backupAttempted = true;
      var before = lsGet(KEY + '-before-exam1');
      if (!readOK) return false;
      // A full duplicate can exceed the browser quota. The unchanged original
      // remains in KEY, so a failed backup must not block the live save.
      if (!before) lsSet(KEY + '-before-exam1', lastRaw);
    }
    mem.updated = Date.now();
    var raw = JSON.stringify(mem), ok = lsSet(KEY, raw);
    if (ok) { lastRaw = raw; storageOK = true; problem = ''; }
    return ok;
  }
  function reset(keepLegacy) {
    var leg = keepLegacy && mem ? mem.legacy : null;
    mem = blank(); corrupt = false; lastRaw = lsGet(KEY); if (leg) mem.legacy = leg; save();
  }

  // ---------- Legacy migration (prior signal only; never mastery) ----------
  function addSignal(sig, concept, att, miss, masteredOld) {
    var c = L.legacyConcept ? L.legacyConcept(concept) : concept;
    if (!c) return;
    var s = sig[c] || (sig[c] = { att: 0, miss: 0, oldMastered: false });
    s.att += att || 0; s.miss += miss || 0; if (masteredOld) s.oldMastered = true;
  }
  function fromDrillStore(d, sig) { // lecture2 drill {records, concepts}
    var n = 0;
    if (d && d.records) Object.keys(d.records).forEach(function (rid) {
      var r = d.records[rid], cond = rid.split('-')[0];
      addSignal(sig, cond, r.attempts || 0, Math.max(0, (r.attempts || 0) - (r.correct || 0)), false); n++;
    });
    if (d && d.concepts) Object.keys(d.concepts).forEach(function (cid) { if (d.concepts[cid].mastered) addSignal(sig, cid, 0, 0, true); });
    return n;
  }
  function fromGuided(g, sig) { // v1 guided progress {concepts:{id:{attempts,correct,mastered}}}
    var n = 0;
    if (g && g.concepts) Object.keys(g.concepts).forEach(function (cid) {
      var r = g.concepts[cid]; addSignal(sig, cid, r.attempts || 0, Math.max(0, (r.attempts || 0) - (r.correct || 0)), !!r.mastered); n++;
    });
    return n;
  }
  function mergeLegacy(state, payload, label) {
    var sig = (state.legacy && state.legacy.signal) || {}, n = 0, quiz = (state.legacy && state.legacy.quizBest) || {};
    if (payload.drill) n += fromDrillStore(payload.drill, sig);
    if (payload.guided) n += fromGuided(payload.guided, sig);
    if (payload.quiz && typeof payload.quiz === 'object') Object.keys(payload.quiz).forEach(function (q) { quiz[q] = payload.quiz[q]; n++; });
    state.legacy = { imported: Date.now(), sources: ((state.legacy && state.legacy.sources) || []).concat([label]), signal: sig, quizBest: quiz };
    return n;
  }
  function autoDetectLegacy(state) {
    var payload = {}, found = false;
    LEGACY_KEYS.forEach(function (k, i) {
      var raw = lsGet(k); if (!raw) return;
      try { var v = JSON.parse(raw); found = true; if (i === 0) payload.quiz = v; if (i === 1) payload.guided = v; if (i === 2) payload.drill = v; } catch (e) { /* ignore */ }
    });
    if (found) mergeLegacy(state, payload, 'auto-detected v1 storage in this browser');
  }

  // ---------- Export / import ----------
  function exportJSON() {
    var s = load();
    return JSON.stringify({ app: 'comd4590-lab', schema: 2, exported: new Date().toISOString(), state: s }, null, 1);
  }
  function exportBefore() { var raw=lsGet(KEY+'-before-exam1'); if(!raw)return null;try{return JSON.stringify({app:'comd4590-lab',schema:2,exported:new Date().toISOString(),state:JSON.parse(raw)},null,1);}catch(e){return null;} }
  function mergeV2(into, from) {
    // Mastery is earned once. A backup/import must never revoke existing credit.
    Object.keys(from.masteryCredits || {}).forEach(function (c) {
      if (!L.CONCEPTS || !L.CONCEPTS[c]) return;
      if (from.masteryCredits[c] === 'earned' || !into.masteryCredits[c]) into.masteryCredits[c] = from.masteryCredits[c];
    });
    into.masterySeeded = into.masterySeeded || from.masterySeeded;
    var seen = {};
    into.attempts.forEach(function (a) { seen[a.i + '|' + a.t] = 1; });
    (from.attempts || []).forEach(function (a) { if (!seen[a.i + '|' + a.t]) { into.attempts.push(a); seen[a.i + '|' + a.t] = 1; } });
    into.attempts.sort(function (x, y) { return x.t - y.t; });
    var ms = {}; into.mocks.forEach(function (m) { ms[m.id] = 1; });
    (from.mocks || []).forEach(function (m) { if (!ms[m.id]) into.mocks.push(m); });
    into.mocks.sort(function (x, y) { return x.ts - y.ts; });
    Object.keys(from.boss || {}).forEach(function (b) {
      var a = into.boss[b] || { best: 0, runs: [] }, f = from.boss[b];
      var rs = {}; a.runs.forEach(function (r) { rs[r.ts] = 1; });
      (f.runs || []).forEach(function (r) { if (!rs[r.ts]) a.runs.push(r); });
      a.best = a.runs.reduce(function (m, r) { return r.complete === true && r.total ? Math.max(m, r.score / r.total) : m; }, 0); into.boss[b] = a;
    });
    ['seenX', 'guideRead', 'teach'].forEach(function (k) { Object.keys(from[k] || {}).forEach(function (x) { if (!into[k][x]) into[k][x] = from[k][x]; }); });
    if (from.legacy && !into.legacy) into.legacy = from.legacy;
    if (!into.session && from.session) into.session = from.session;
    if (!into.mockActive && from.mockActive) into.mockActive = from.mockActive;
    var ix = {}; into.exam1.runs.forEach(function(r,i){ ix[r.id] = i; });
    from.exam1.runs.forEach(function(r){
      if (ix[r.id] === undefined) { ix[r.id] = into.exam1.runs.length; into.exam1.runs.push(r); }
      else if ((r.updated || 0) > (into.exam1.runs[ix[r.id]].updated || 0)) into.exam1.runs[ix[r.id]] = r;
    });
    Object.keys(from.exam1.chapterRead || {}).forEach(function(k){into.exam1.chapterRead[k] = Math.max(into.exam1.chapterRead[k] || 0, from.exam1.chapterRead[k]);});
    if (!into.exam1.activeId && from.exam1.activeId) into.exam1.activeId = from.exam1.activeId;
  }
  // Returns {ok, kind, message}
  function importText(text) {
    var d;
    try { d = JSON.parse(text); } catch (e) { return { ok: false, message: 'That file is not valid JSON.' }; }
    var s = load();
    if (d && d.app === 'comd4590-lab' && d.schema === 2 && d.state) {
      // Freeze each side's already-earned mastery before histories are joined.
      if (L.engine && L.engine.seedMasteryCredits) L.engine.seedMasteryCredits(s);
      var incoming = normalize(d.state);
      if (L.engine && L.engine.seedMasteryCredits) L.engine.seedMasteryCredits(incoming);
      var before = s.attempts.length; mergeV2(s, incoming);
      if (L.engine && L.engine.captureMasteryCredits) L.engine.captureMasteryCredits(s);
      var saved = save();
      return { ok: saved, kind: 'v2', message: saved ? 'Merged progress: ' + (s.attempts.length - before) + ' new attempts, ' + s.exam1.runs.length + ' Exam 1 runs, and ' + s.mocks.length + ' original mock records. Unfinished work is included.' : problem };
    }
    if (d && d.schema === 'comd4590-progress-backup-v1' && d.storage) {
      var p = {};
      try { if (d.storage['comd4590-study-lab-progress-v1']) p.quiz = JSON.parse(d.storage['comd4590-study-lab-progress-v1']); } catch (e) { /* skip */ }
      try { if (d.storage['comd4590-guided-progress-v1']) p.guided = JSON.parse(d.storage['comd4590-guided-progress-v1']); } catch (e) { /* skip */ }
      try { if (d.storage['comd4590-lecture2-drill-v1']) p.drill = JSON.parse(d.storage['comd4590-lecture2-drill-v1']); } catch (e) { /* skip */ }
      var n = mergeLegacy(s, p, 'v1 full backup (' + (d.date || 'undated') + ')'); if (!save()) return { ok: false, message: problem };
      return { ok: true, kind: 'v1', message: 'Imported v1 backup as prior signal (' + n + ' records). Old mastery is shown for reference only; v2 mastery must be re-earned.' };
    }
    if (d && d.records && d.concepts) {
      var m = mergeLegacy(s, { drill: d }, 'Lecture 2 drill export'); if (!save()) return { ok: false, message: problem };
      return { ok: true, kind: 'drill', message: 'Imported Lecture 2 drill progress as prior signal (' + m + ' records). Missed conditions are queued for review.' };
    }
    if (d && d.concepts && d.modules) {
      var g = mergeLegacy(s, { guided: d }, 'v1 guided progress'); if (!save()) return { ok: false, message: problem };
      return { ok: true, kind: 'guided', message: 'Imported v1 guided progress as prior signal (' + g + ' concepts).' };
    }
    return { ok: false, message: 'Unrecognized file. Expected a v2 export, a v1 "comd4590-progress-backup-v1" backup, or a Lecture 2 drill export.' };
  }

  L.store = { KEY: KEY, load: load, save: save, reset: reset, exportJSON: exportJSON, exportBefore: exportBefore, importText: importText,
    ok: function () { return storageOK; }, problem: function () { return problem; }, _setMem: function (s) { mem = normalize(s); lastRaw = lsGet(KEY); }, _blank: blank, _lsDel: lsDel };
})(typeof window !== 'undefined' ? window : globalThis);
