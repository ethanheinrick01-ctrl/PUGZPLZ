/* Engine: item registry, grading, mastery, scheduling, sessions, mocks, boss drills. No DOM here. */
(function (root) {
  'use strict';
  var L = root.L = root.L || {};
  var U = L.util;
  var BOXES = [0, 1, 2, 4, 7];
  var PRACTICE_MODES = { practice: 1, review: 1, case: 1, boss: 1, drill: 1 };

  // ---------- Registry ----------
  var REG = {}, BY_CONCEPT = {}, CASE_OF = {};
  function norm(it, extra) {
    extra = extra || {};
    var o = U.clone(it);
    for (var k in extra) if (o[k] === undefined) o[k] = extra[k];
    var con = L.CONCEPTS[o.c];
    o.sec = o.sec || (con ? con.sec : 's1');
    var sec = L.SECTIONS.filter(function (s) { return s.id === o.sec; })[0];
    o.dom = o.dom || (sec ? sec.dom : 'ov');
    o.pool = o.pool || 'b';
    if (o.t === 'tf' && (!o.o || Array.isArray(o.o[0]))) {
      var w = o.w || ['', ''];
      o.o = [{ t: 'True', ok: o.a === true, w: w[0] }, { t: 'False', ok: o.a === false, w: w[1] }];
      o.fixedOrder = true;
    } else if (o.t === 'tf') { o.fixedOrder = true; } else if ((o.t === 'mc' || o.t === 'ms') && Array.isArray(o.o) && Array.isArray(o.o[0])) {
      var ans = Array.isArray(o.a) ? o.a : [o.a];
      o.o = o.o.map(function (c, i) { return { t: c[0], w: c[1] || '', ok: ans.indexOf(i) >= 0 }; });
    }
    return o;
  }
  function build() {
    REG = {}; BY_CONCEPT = {}; CASE_OF = {};
    (L.ITEMS || []).forEach(function (it) { var n = norm(it); REG[n.id] = n; });
    (L.CASES || []).forEach(function (cs) {
      cs.items.forEach(function (it, i) { var n = norm(it, { caseId: cs.id, caseIdx: i }); if (!n.dom || cs.dom) n.dom = cs.dom || n.dom; REG[n.id] = n; CASE_OF[n.id] = cs.id; });
    });
    Object.keys(REG).forEach(function (id) {
      var it = REG[id]; (BY_CONCEPT[it.c] = BY_CONCEPT[it.c] || []).push(id);
      (it.also || []).forEach(function (c) { (BY_CONCEPT[c] = BY_CONCEPT[c] || []).push(id); });
    });
  }
  // Which generators exercise which concepts
  var GEN_FOR = { 'degree-scale': ['degreeValue'], 'pta-degree': ['ptaDegree', 'ptaNumeric'], 'loss-type': ['typeAud'], configuration: ['configAud'],
    'audiogram-description': ['describe'], 'speech-audiometry': ['slCalc', 'ptaSrt', 'wrs'], 'reflex-sl': ['reflex'], tympanometry: ['tymp'], snr: ['snr'],
    'count-dots': ['dots'], 'sii-to-speech': ['dotsBand'], 'cross-check': ['crossCheck'] };

  function resolve(ref) { // ref: {id} or {gen, seed, opt}
    if (!ref) return null;
    if (ref.gen) { var g = L.gen.build(ref.gen, ref.seed, ref.opt); return norm(g); }
    return REG[ref.id] || null;
  }
  function refKey(ref) { return ref.gen ? 'g:' + ref.gen + ':' + ref.seed : ref.id; }
  function itemsFor(filter) { return Object.keys(REG).map(function (k) { return REG[k]; }).filter(filter); }

  // ---------- Grading ----------
  // response formats: mc/tf -> original option index; ms -> array of original indexes; num -> number;
  // match -> array (per left row) of chosen right text; order -> array of texts; parts -> array of chosen option strings; teach -> {self}
  function grade(it, r) {
    if (it.t === 'teach') return { ok: null, sc: null };
    if (r === undefined || r === null || r === '') return { ok: false, sc: 0, blank: true };
    switch (it.t) {
      case 'mc': case 'tf': return { ok: !!(it.o[r] && it.o[r].ok), sc: it.o[r] && it.o[r].ok ? 1 : 0 };
      case 'ms': {
        var sel = (Array.isArray(r) ? r : [r]).slice().sort(), want = [];
        it.o.forEach(function (c, i) { if (c.ok) want.push(i); });
        var hit = sel.filter(function (i) { return it.o[i] && it.o[i].ok; }).length, bad = sel.length - hit;
        var ok = hit === want.length && bad === 0;
        return { ok: ok, sc: ok ? 1 : Math.max(0, (hit - bad) / want.length) };
      }
      case 'num': { var v = parseFloat(r); if (isNaN(v)) return { ok: false, sc: 0, blank: true }; var okn = Math.abs(v - it.a) <= (it.tol || 0) + 1e-9; return { ok: okn, sc: okn ? 1 : 0 }; }
      case 'match': { var c = 0; it.pairs.forEach(function (p, i) { if (r[i] === p[1]) c++; }); return { ok: c === it.pairs.length, sc: c / it.pairs.length }; }
      case 'order': { var k = 0; it.seq.forEach(function (s, i) { if (r[i] === s) k++; }); return { ok: k === it.seq.length, sc: k / it.seq.length }; }
      case 'parts': { var m = 0; it.parts.forEach(function (p, i) { if (r[i] === p.a) m++; }); return { ok: m === it.parts.length, sc: m / it.parts.length }; }
    }
    return { ok: false, sc: 0 };
  }

  // ---------- Recording + mastery ----------
  function record(it, ref, r, conf, mode, assisted) {
    var s = L.store.load(), g = grade(it, r);
    if (it.t === 'teach') { s.teach[it.id] = { ts: Date.now(), self: r && r.self }; L.store.save(); return g; }
    var a = { i: ref ? refKey(ref) : it.id, c: it.c, ok: !!g.ok, sc: Math.round((g.sc || 0) * 100) / 100, cf: conf || 'm', m: mode || 'practice', t: Date.now() };
    if (assisted) a.h = 1;
    if (it.generated || (ref && ref.gen)) a.g = (ref && ref.gen) || (it.gen && it.gen.name);
    s.attempts.push(a);
    (it.also || []).forEach(function (c) { if (c !== it.c) s.attempts.push(Object.assign({}, a, { c: c, t: a.t + 1, dup: 1 })); });
    L.store.save();
    return g;
  }
  function conceptStats(state) {
    state = state || L.store.load();
    var out = {};
    Object.keys(L.CONCEPTS).forEach(function (c) { out[c] = { id: c, att: 0, ok: 0, hist: [], box: 0, last: 0, status: 'new', mockMiss: false, prior: null }; });
    state.attempts.forEach(function (a) {
      var st = out[a.c]; if (!st) return;
      // Keep pre-update mocks out of mastery: their saved rows include blanks and
      // assumed confidence. New, individually checked learning-mock rows count.
      if (a.m === 'mock') { return; }
      st.att++; if (a.ok) st.ok++;
      st.hist.push(a); st.last = a.t;
      if (a.ok) st.box = (a.cf === 'l' || a.h) ? Math.max(st.box, 1) : Math.min(st.box + 1, 4); else st.box = 0;
    });
    // mock misses newer than last practice attempt on that concept
    state.mocks.forEach(function (m) { (m.items || []).forEach(function (x) { var st = out[x.c]; if (st && !x.ok && m.ts > st.last) st.mockMiss = true; }); });
    if (state.mockActive && state.mockActive.immediateChecked) Object.keys(state.mockActive.immediateChecked).forEach(function(i){var m=state.mockActive,it=resolve(m.refs[i]),st=it&&out[it.c];if(st&&!m.immediateChecked[i].ok&&m.started>st.last)st.mockMiss=true;});
    if (state.exam1) (state.exam1.runs || []).forEach(function(run){run.tasks.forEach(function(t){var st=out[t.item.c];if(st&&t.checked&&t.grade&&!t.grade.ok&&(t.checkedAt||run.updated)>st.last)st.mockMiss=true;});});
    var today = U.todayKey();
    Object.keys(out).forEach(function (c) {
      var st = out[c], h = st.hist;
      if (state.legacy && state.legacy.signal && state.legacy.signal[c]) {
        var sg = state.legacy.signal[c];
        if (sg.miss > 0 && (!st.last || st.last < state.legacy.imported)) st.prior = sg;
      }
      if (!h.length) { st.status = 'new'; st.due = today; return; }
      var last = h[h.length - 1], prev = h[h.length - 2];
      var mastered = last.ok && prev && prev.ok && !last.h && !prev.h && refRoot(last.i) !== refRoot(prev.i) && (last.cf === 'm' || last.cf === 'h');
      if (!last.ok && last.cf === 'h') st.status = 'misconception';
      else if (!last.ok) st.status = 'shaky';
      else if (mastered) st.status = 'mastered';
      else st.status = 'learning';
      // a high-confidence miss stays flagged until two correct answers follow it
      if (st.status !== 'misconception') {
        for (var i = h.length - 1, correctRun = 0; i >= 0; i--) {
          if (h[i].ok) correctRun++; else { if (h[i].cf === 'h' && correctRun < 2) st.status = 'misconception'; break; }
        }
      }
      st.due = U.addDays(U.todayKey(new Date(st.last)), BOXES[st.box]);
    });
    return out;
  }
  function refRoot(key) { return key; } // generated items differ by seed => distinct instances; hand items by id

  // ---------- Review queue ----------
  var RANK = { misconception: 0, mock: 1, shaky: 2, due: 3, prior: 4, new: 5 };
  function reviewPlan(limit) {
    var st = conceptStats(), today = U.todayKey(), rows = [];
    Object.keys(st).forEach(function (c) {
      var s = st[c], why = null;
      if (!hasPracticeContent(c)) return;
      if (s.status === 'misconception') why = 'misconception';
      else if (s.mockMiss) why = 'mock';
      else if (s.status === 'shaky') why = 'shaky';
      else if (s.att && s.due <= today && s.status !== 'mastered') why = 'due';
      else if (s.status === 'mastered' && s.due <= today) why = 'due';
      else if (s.prior) why = 'prior';
      else if (!s.att) why = 'new';
      if (why) rows.push({ c: c, why: why, s: s });
    });
    rows.sort(function (a, b) { return RANK[a.why] - RANK[b.why] || (a.s.last || 0) - (b.s.last || 0); });
    return limit ? rows.slice(0, limit) : rows;
  }
  function hasPracticeContent(c) { return (BY_CONCEPT[c] || []).some(practiceEligible) || !!GEN_FOR[c]; }
  function practiceEligible(id) {
    var it = REG[id], s = L.store.load();
    if (!it || it.t === 'teach') return false;
    if (it.pool === 'x' && !s.seenX[id] && !s.settings.includeHeld) {
      var open = (BY_CONCEPT[it.c] || []).filter(function (key) {
        return REG[key] && REG[key].t !== 'teach' && REG[key].pool !== 'x' && !CASE_OF[key];
      });
      // A concept with only one regular question cannot meet the two-question mastery rule.
      // Release its alternate after the first graded attempt, while keeping other mock items held.
      if (open.length >= 2 || (GEN_FOR[it.c] || []).length || !s.attempts.some(function (a) { return a.c === it.c && a.m !== 'mock'; })) return false;
    }
    return true;
  }
  // choose one item ref for a concept, preferring unseen / previously missed / least recent
  function pickFor(c, exclude, rngSeed) {
    exclude = exclude || {};
    var s = L.store.load(), lastSeen = {}, lastOk = {};
    s.attempts.forEach(function (a) { lastSeen[a.i] = a.t; lastOk[a.i] = a.ok; });
    var ids = (BY_CONCEPT[c] || []).filter(function (id) { return practiceEligible(id) && !exclude[id] && !CASE_OF[id]; });
    var gens = GEN_FOR[c] || [];
    var cands = ids.map(function (id) { return { ref: { id: id }, score: (lastSeen[id] ? (lastOk[id] ? 3 : 1) : 0) * 1e13 + (lastSeen[id] || 0) + Math.random() * 1e6 }; });
    gens.forEach(function (g) { cands.push({ ref: { gen: g, seed: U.newSeed() }, score: 1.5e13 + Math.random() * 1e12 }); });
    if (!cands.length) { var caseIds = (BY_CONCEPT[c] || []).filter(function (id) { return !exclude[id] && CASE_OF[id]; }); if (caseIds.length) return { id: U.pick(Math.random, caseIds) }; return null; }
    cands.sort(function (a, b) { return a.score - b.score; });
    return cands[0].ref;
  }

  // ---------- Sessions (practice / review / drill / boss / case) ----------
  function newSession(mode, title, refs, opt) {
    opt = opt || {};
    var sess = { id: 'S' + Date.now(), mode: mode, title: title, queue: refs.map(function (r) { return { ref: r, retry: false }; }), idx: 0, results: [],
      retries: 0, started: Date.now(), bossId: opt.bossId || null, planned: refs.filter(function (r) { var it = resolve(r); return it && it.t !== 'teach'; }).length, caseId: opt.caseId || null, noRetry: !!opt.noRetry, orders: {} };
    var s = L.store.load(); s.session = sess; L.store.save();
    return sess;
  }
  function currentSession() { return L.store.load().session; }
  function endSession() { var s = L.store.load(); var sess = s.session; s.session = null; L.store.save(); return sess; }
  function answerInSession(response, conf, assisted) {
    var s = L.store.load(), sess = s.session; if (!sess) return null;
    var q = sess.queue[sess.idx], it = resolve(q.ref);
    if (q.grade) return { grade: q.grade, item: it };
    var g = record(it, q.ref, response, conf, sess.mode === 'boss' ? 'boss' : sess.mode, assisted);
    q.response = U.clone(response); q.grade = g; q.confidence = conf;
    sess = L.store.load().session; // record() saved; re-read same object
    sess.results.push({ key: refKey(q.ref), c: it.c, ok: g.ok, sc: g.sc, cf: conf, retry: q.retry, t: it.t });
    // adaptive retry: wrong -> after 2 intervening; low-confidence correct -> after 4
    if (!sess.noRetry && it.t !== 'teach' && (!g.ok || conf === 'l' || assisted)) {
      var gap = g.ok ? 4 : 2, again;
      if (q.ref.gen) again = { gen: q.ref.gen, seed: U.newSeed(), opt: q.ref.opt };
      else { var alt = pickFor(it.c, (function () { var e = {}; e[it.id] = 1; return e; })()); again = alt && !alt.gen && alt.id !== it.id ? alt : (alt && alt.gen ? alt : { id: it.id }); }
      var retriesOfThis = sess.queue.filter(function (x) { return x.retry && x.c === it.c; }).length;
      if (retriesOfThis < 2) { sess.queue.splice(Math.min(sess.idx + 1 + gap, sess.queue.length), 0, { ref: again, retry: true, c: it.c }); sess.retries++; }
    }
    L.store.save();
    return { grade: g, item: it };
  }
  function advance() { var s = L.store.load(); if (!s.session) return null; s.session.idx++; L.store.save(); return s.session; }

  function practiceRefs(opt) { // opt: {sec, concepts, n}
    var n = opt.n || 12, concepts = opt.concepts;
    if (!concepts) concepts = Object.keys(L.CONCEPTS).filter(function (c) { return (!opt.sec || L.CONCEPTS[c].sec === opt.sec) && hasPracticeContent(c); });
    var refs = [], used = {}, pool = U.shuffle(concepts);
    var i = 0, guard = 0;
    while (refs.length < n && guard < n * 6) {
      var c = pool[i % pool.length]; i++; guard++;
      var r = pickFor(c, used); if (!r) continue;
      var k = refKey(r); if (used[k]) continue; used[k] = 1; if (r.id) used[r.id] = 1;
      refs.push(r);
    }
    return refs;
  }
  function reviewRefs(n) {
    var plan = reviewPlan(), refs = [], used = {};
    for (var i = 0; i < plan.length && refs.length < (n || 15); i++) { var r = pickFor(plan[i].c, used); if (r) { used[refKey(r)] = 1; if (r.id) used[r.id] = 1; refs.push(r); } }
    return refs;
  }
  function caseRefs(caseId) { var cs = (L.CASES || []).filter(function (c) { return c.id === caseId; })[0]; return cs ? cs.items.map(function (it) { return { id: it.id }; }) : []; }
  function bossRefs(bossId) {
    var b = L.BOSSES.filter(function (x) { return x.id === bossId; })[0]; if (!b) return [];
    var refs = [];
    (b.cases || []).forEach(function (cid) { refs = refs.concat(caseRefs(cid)); });
    (b.concepts || []).forEach(function (c) {
      var ids = (BY_CONCEPT[c] || []).filter(function (id) { return !CASE_OF[id] && REG[id].t !== 'teach'; });
      U.shuffle(ids).slice(0, 2).forEach(function (id) { if (!refs.some(function (r) { return r.id === id; })) refs.push({ id: id }); });
    });
    (b.gens || []).forEach(function (g) { for (var i = 0; i < g[1]; i++) refs.push({ gen: g[0], seed: U.newSeed(), opt: g[2] }); });
    if (bossId === 'b4') {
      itemsFor(function (it) { return it.c === 'degree-scale' && !it.caseId && it.t !== 'teach'; }).forEach(function (it) { refs.push({ id: it.id }); });
    }
    // keep case items in their reading order; shuffle case blocks and loose items between them
    var blocks = [], cur = null;
    refs.forEach(function (r) { var cid = r.id && CASE_OF[r.id]; if (cid) { if (!cur || cur.cid !== cid) { cur = { cid: cid, refs: [] }; blocks.push(cur); } cur.refs.push(r); } else { cur = null; blocks.push({ cid: null, refs: [r] }); } });
    return U.shuffle(blocks).reduce(function (acc, bl) { return acc.concat(bl.refs); }, []);
  }
  // Boss score is always out of the full planned run: unanswered questions count as misses, and only a
  // completed run can set the best score (ending early can never record a perfect score).
  function bossResult(sess) {
    var first = sess.results.filter(function (r) { return !r.retry && r.t !== 'teach'; });
    var score = first.reduce(function (a, r) { return a + (r.ok ? 1 : 0); }, 0);
    var total = Math.max(sess.planned || 0, first.length);
    return { score: score, answered: first.length, total: total, complete: first.length >= total && total > 0 };
  }
  function finishBoss(sess) {
    var s = L.store.load(), r = bossResult(sess);
    var b = s.boss[sess.bossId] || { best: 0, runs: [] };
    b.runs.push({ ts: Date.now(), score: r.score, answered: r.answered, total: r.total, complete: r.complete });
    b.best = bestOf(b.runs);
    s.boss[sess.bossId] = b; L.store.save();
    return r;
  }
  function bestOf(runs) { return (runs || []).reduce(function (m, x) { return x.complete === true && x.total ? Math.max(m, x.score / x.total) : m; }, 0); }

  // ---------- Mock exams ----------
  var MOCK_GENS = { dx: [['ptaDegree', { boundary: true }], ['describe'], ['typeAud'], ['configAud'], ['tymp'], ['crossCheck'], ['degreeValue', { boundaryOnly: true }]], ha: [['snr'], ['dots'], ['dotsBand']], et: [], ov: [] };
  function mockEligible(it) { return it.t !== 'teach' && !it.caseId && !it.mockExclude && it.tier !== 3 && !it.found; }
  function buildMock(size) {
    var s = L.store.load(), share = size >= 70 ? 'share70' : 'share35';
    var inMock = {}; s.mocks.forEach(function (m) { (m.items || []).forEach(function (x) { inMock[x.id] = (inMock[x.id] || 0) + 1; }); });
    var lastSeen = {}; s.attempts.forEach(function (a) { lastSeen[a.i] = a.t; });
    var refs = [];
    // one case block (5-6 items) counted inside its domain
    var cs = U.pick(Math.random, L.CASES.filter(function (c) { return c.items.length <= 6; }));
    var caseItems = cs.items.map(function (it) { return { id: it.id }; });
    Object.keys(L.DOMAINS).forEach(function (dom) {
      var quota = L.DOMAINS[dom][share];
      if (cs.dom === dom) quota -= caseItems.length;
      var nGen = dom === 'dx' ? Math.round(quota * 0.35) : dom === 'ha' ? Math.min(3, Math.round(quota * 0.15)) : 0;
      var pool = itemsFor(function (it) { return it.dom === dom && mockEligible(it); });
      pool.sort(function (a, b) {
        var pa = (a.pool === 'x' ? 0 : 1) * 10 + (inMock[a.id] || 0) * 3 + (lastSeen[a.id] ? 1 : 0);
        var pb = (b.pool === 'x' ? 0 : 1) * 10 + (inMock[b.id] || 0) * 3 + (lastSeen[b.id] ? 1 : 0);
        return pa - pb || Math.random() - 0.5;
      });
      // spread across concepts: at most 2 hand items per concept in a 70, 1 in a 35
      var perC = {}, cap = size >= 70 ? 2 : 1, chosen = [];
      pool.forEach(function (it) { if (chosen.length >= quota - nGen) return; if ((perC[it.c] || 0) >= cap) return; perC[it.c] = (perC[it.c] || 0) + 1; chosen.push({ id: it.id }); });
      pool.forEach(function (it) { if (chosen.length >= quota - nGen) return; if (!chosen.some(function (r) { return r.id === it.id; })) chosen.push({ id: it.id }); });
      var gl = MOCK_GENS[dom];
      for (var i = 0; i < nGen && gl.length; i++) { var g = gl[i % gl.length]; chosen.push({ gen: g[0], seed: U.newSeed(), opt: g[1] }); }
      refs = refs.concat(chosen.map(function (r) { return { ref: r, dom: dom }; }));
    });
    refs = U.shuffle(refs).map(function (x) { return x.ref; });
    var at = Math.floor(refs.length * 0.6);
    refs = refs.slice(0, at).concat(caseItems).concat(refs.slice(at));
    var m = { id: 'M' + Date.now(), size: size, started: Date.now(), refs: refs, answers: {}, flags: {}, cur: 0, orders: {}, caseId: cs.id,
      masteryVersion: 1, recorded: {}, confidences: {} };
    s.mockActive = m; L.store.save();
    return m;
  }
  function submitMock() {
    var s = L.store.load(), m = s.mockActive; if (!m) return null;
    var items = [], score = 0, byDom = {}, byCon = {};
    m.refs.forEach(function (ref, i) {
      var it = resolve(ref), r = m.answers[i], g = grade(it, r);
      items.push({ id: refKey(ref), ref: ref, c: it.c, dom: it.dom, ok: !!g.ok, sc: g.sc || 0, r: r === undefined ? null : r, blank: r === undefined });
      if (g.ok) score++;
      var d = byDom[it.dom] || (byDom[it.dom] = { ok: 0, n: 0 }); d.n++; if (g.ok) d.ok++;
      var c = byCon[it.c] || (byCon[it.c] = { ok: 0, n: 0 }); c.n++; if (g.ok) c.ok++;
      if (ref.id && REG[ref.id] && REG[ref.id].pool === 'x') s.seenX[ref.id] = Date.now();
      if (m.recorded && m.recorded[i] === true) return;
      if (m.masteryVersion === 1 && r !== undefined && !(m.recorded && m.recorded[i])) {
        m.recorded[i] = true;
        record(it, ref, r, (m.confidences || {})[i] || 'm', 'learning-mock', false);
      } else if (m.masteryVersion !== 1 || (m.recorded && m.recorded[i] === 'legacy')) {
        // Old in-progress checks retain their original, mastery-neutral record.
        s.attempts.push({ i: refKey(ref), c: it.c, ok: !!g.ok, sc: g.sc || 0, cf: 'm', m: 'mock', t: Date.now() + i });
      }
    });
    var rec = { id: m.id, ts: Date.now(), started: m.started, size: m.size, score: score, total: m.refs.length, byDom: byDom, byCon: byCon, items: items, orders: m.orders, flags: m.flags, caseId: m.caseId };
    s.mocks.push(rec); s.mockActive = null; L.store.save();
    return rec;
  }

  L.engine = { build: build, resolve: resolve, refKey: refKey, grade: grade, record: record, conceptStats: conceptStats, reviewPlan: reviewPlan,
    pickFor: pickFor, newSession: newSession, currentSession: currentSession, endSession: endSession, answerInSession: answerInSession, advance: advance,
    practiceRefs: practiceRefs, reviewRefs: reviewRefs, caseRefs: caseRefs, bossRefs: bossRefs, finishBoss: finishBoss, bossResult: bossResult, bestOf: bestOf, buildMock: buildMock, submitMock: submitMock,
    itemsFor: itemsFor, REG: function () { return REG; }, BY_CONCEPT: function () { return BY_CONCEPT; }, GEN_FOR: GEN_FOR, hasPracticeContent: hasPracticeContent, CASE_OF: function () { return CASE_OF; } };
})(typeof window !== 'undefined' ? window : globalThis);
