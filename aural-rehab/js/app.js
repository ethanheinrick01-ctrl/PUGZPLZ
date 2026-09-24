/* COMD 4590 Study Lab v2: router and pages. */
(function (root) {
  'use strict';
  var L = root.L, U = L.util, E = L.engine, S = L.store, esc = U.esc, IU = L.itemUI;
  var main, EXAM_DATE = '2026-09-29';
  var STATUS_LABEL = { mastered: 'Mastered', learning: 'Learning', shaky: 'Missed last time', misconception: 'High-confidence miss', new: 'Not started' };
  var WHY_LABEL = { misconception: 'High-confidence miss', mock: 'Missed on a mock', shaky: 'Missed last time', due: 'Due for spaced review', prior: 'Old-lab miss (prior signal)', new: 'Not started' };

  function $(s, r) { return (r || document).querySelector(s); }
  function toast(msg) { var t = U.el('div', { class: 'toast', role: 'status' }, esc(msg)); document.body.appendChild(t); setTimeout(function () { t.remove(); }, 3200); }
  function setNav(route) { document.querySelectorAll('nav.main a').forEach(function (a) { a.classList.toggle('on', a.getAttribute('data-r') === route); }); }
  function secById(id) { return L.SECTIONS.filter(function (s) { return s.id === id; })[0]; }
  function daysToExam() { return U.daysBetween(U.todayKey(), EXAM_DATE); }
  function storageBanner() { return S.ok() ? '' : '<div class="warnbox"><b>Browser storage is blocked.</b> You can study, but progress will not survive a reload. Use Data &gt; Export before closing.</div>'; }

  // ---------------- Router ----------------
  function route() {
    var h = (location.hash || '#home').slice(1).split('/'), r = h[0] || 'home';
    setNav(r);
    document.onkeydown = null;
    main.innerHTML = '';
    window.scrollTo(0, 0);
    var pages = { exam1: function(args){L.exam1UI.render(main,args);}, home: pHome, guide: pGuide, practice: pPractice, session: pSession, review: pReview, cases: pCases, boss: pBoss, mock: pMock, progress: pProgress, data: pData, sources: pSources, sutherland: pProf };
    (pages[r] || pHome)(h.slice(1));
    main.focus({ preventScroll: true });
  }
  function go(h) { if (location.hash === '#' + h) route(); else location.hash = h; }

  // ---------------- Home ----------------
  function pHome() {
    var st = E.conceptStats(), s = S.load(), ids = Object.keys(st).filter(E.hasPracticeContent);
    var mastered = ids.filter(function (c) { return st[c].status === 'mastered'; }).length;
    var mis = ids.filter(function (c) { return st[c].status === 'misconception'; }).length;
    var plan = E.reviewPlan(), due = plan.filter(function (p) { return p.why !== 'new'; }).length;
    var lastMock = s.mocks[s.mocks.length - 1], sess = s.session, d = daysToExam();
    var h = [storageBanner()];
    h.push('<div class="spread"><div><h1>COMD 4590 Exam 1 lab</h1><p class="muted">Dr. Sutherland, Aural Rehabilitation. Exam 1 is scheduled for Tue 9/29 (syllabus)' + (d >= 0 ? ': <b>' + d + ' day' + (d === 1 ? '' : 's') + '</b> out.' : '.') + '</p></div></div>');
    h.push('<div class="lich">Apprentice. Ninety decibels is severe. Not profound. Say it until your bones hum it back. Everything else in here is built on that and on her slides, nothing I dreamed up about what she will ask.</div>');
    h.push('<div class="card"><h2>Exam 1 · September 24 update</h2><p>Twelve focused chapters, completed Lecture 3, and 52 objective + two audiogram + two written learning mocks. Immediate feedback on every question, autosave and a dedicated miss queue.</p><a class="btn pri" href="#exam1">Enter Exam 1</a></div>');
    h.push('<div class="grid g4">');
    h.push('<div class="tile"><b>' + mastered + '/' + ids.length + '</b><span>concepts mastered (honest rule)</span></div>');
    h.push('<div class="tile"><b>' + due + '</b><span>concepts queued for review</span></div>');
    h.push('<div class="tile"><b>' + mis + '</b><span>high-confidence misses open</span></div>');
    h.push('<div class="tile"><b>' + (lastMock ? U.pct(lastMock.score, lastMock.total) + '%' : '-') + '</b><span>' + (lastMock ? 'last mock (' + lastMock.total + ' items)' : 'no mock yet') + '</span></div>');
    h.push('</div>');
    h.push('<div class="row" style="margin:14px 0">');
    if (sess) h.push('<a class="btn good" href="#session">Resume: ' + esc(sess.title) + ' (' + Math.min(sess.idx + 1, sess.queue.length) + '/' + sess.queue.length + ')</a>');
    if (s.mockActive) h.push('<a class="btn warn" href="#mock/take">Resume mock in progress</a>');
    h.push('<button class="btn pri" id="goReview">Smart review (' + Math.min(15, plan.length) + ')</button><a class="btn" href="#mock">Mock exam</a><a class="btn" href="#boss">Boss drills</a><a class="btn" href="#guide/s2">Degree scale</a></div>');
    h.push('<h2>Sections</h2><p class="small muted">Each fraction counts mastered concepts, not completed practice runs. A concept needs two correct, unhinted answers on different questions; the latest must be medium or high confidence. A miss can lower the count. See Progress for each concept\'s status.</p><div class="grid g3">');
    L.SECTIONS.forEach(function (sec) {
      var cs = Object.keys(L.CONCEPTS).filter(function (c) { return L.CONCEPTS[c].sec === sec.id && E.hasPracticeContent(c); });
      var m = cs.filter(function (c) { return st[c].status === 'mastered'; }).length;
      h.push('<div class="card flat"><div class="spread"><b>' + sec.n + '. ' + esc(sec.title) + '</b><span class="badge">' + m + '/' + cs.length + '</span></div><p class="small muted">' + esc(sec.src) + '</p><div class="progress"><i style="width:' + U.pct(m, cs.length) + '%"></i></div><div class="row"><a class="btn" href="#guide/' + sec.id + '">Study</a><button class="btn" data-prac="' + sec.id + '">Practice</button></div></div>');
    });
    h.push('</div>');
    if (s.legacy) h.push('<p class="small muted" style="margin-top:14px">Imported old-lab progress (' + esc(s.legacy.sources.join('; ')) + ') is used only to push previously missed topics up the review queue. It never counts as v2 mastery.</p>');
    main.innerHTML = h.join('');
    $('#goReview').onclick = startReview;
    main.querySelectorAll('[data-prac]').forEach(function (b) { b.onclick = function () { startPractice({ sec: b.getAttribute('data-prac'), n: 12 }, 'Practice: ' + secById(b.getAttribute('data-prac')).title); }; });
  }

  // ---------------- Guide ----------------
  function pGuide(args) {
    var id = args[0];
    if (!id) {
      var h = ['<h1>Study guide</h1><p class="muted">Every card cites its source. Badges: <span class="badge tier1">Course source</span> <span class="badge tier2">Ethan report</span> <span class="badge tier3">Prior course (4190)</span> <span class="badge tier4">Lab reasoning</span>. Red boxes flag source conflicts; the lab never scores the contested wording.</p><div class="grid g3">'];
      L.SECTIONS.forEach(function (s) { h.push('<a class="card flat" style="text-decoration:none;color:inherit" href="#guide/' + s.id + '"><b>' + s.n + '. ' + esc(s.title) + '</b><p class="small muted">' + esc(s.src) + '</p></a>'); });
      h.push('<a class="card flat" style="text-decoration:none;color:inherit" href="#sutherland"><b>How Sutherland tests (evidence only)</b><p class="small muted">Direct statements, Ethan\'s reports, 4190 history, and the lab\'s own design choices, kept apart.</p></a></div>');
      main.innerHTML = h.join(''); return;
    }
    var sec = secById(id); if (!sec) return go('guide');
    var cards = L.GUIDE[id] || [], s = S.load();
    var hh = ['<div class="guide"><div class="spread"><h1>' + sec.n + '. ' + esc(sec.title) + '</h1><div class="row"><button class="btn pri" id="pracSec">Practice this section</button></div></div><p class="muted">' + esc(sec.src) + '</p>'];
    if (id === 's2') hh.push('<div class="media" style="margin-bottom:12px">' + L.svg.audiogram({ title: 'Example: right mixed loss, left sensorineural loss', right: { ac: { 250: 45, 500: 50, 1000: 55, 2000: 60, 4000: 65, 8000: 70 }, bc: { 500: 25, 1000: 30, 2000: 35, 4000: 40 }, bcMasked: true }, left: { ac: { 250: 20, 500: 25, 1000: 30, 2000: 40, 4000: 55, 8000: 60 }, bc: { 500: 25, 1000: 30, 2000: 35, 4000: 50 } } }) + '<p class="small muted">Right PTA (50+55+60)/3 = 55, moderate (top of 45-55); BC 25-40 + gap = mixed. Left PTA (25+30+40)/3 = 31.7, mild; BC tracks AC = sensorineural, sloping.</p></div>');
    if (id === 's7') hh.push('<div class="media">' + L.svg.bte(true) + '</div>');
    if (id === 's9') hh.push('<div class="media">' + L.svg.dotsChart({}) + '</div>');
    cards.forEach(function (c) {
      hh.push('<div class="card" id="' + c.id + '"><div class="spread"><h3 style="margin:0">' + esc(c.h) + '</h3><span>' + IU.tierBadge(c.tier) + '</span></div>' + c.html);
      if (c.traps && c.traps.length) hh.push('<div class="traps"><b>Tempting mistakes</b><ul>' + c.traps.map(function (t) { return '<li>' + esc(t) + '</li>'; }).join('') + '</ul></div>');
      if (c.conflict) hh.push('<div class="conflict"><b>Flagged in the sources</b><br>' + c.conflict + '</div>');
      hh.push('<div class="spread" style="margin-top:8px"><div>' + IU.srcChips(c.src) + '</div>' + (c.c && c.c.length ? '<button class="btn" data-cc="' + c.c.join(',') + '">Practice these</button>' : '') + '</div></div>');
    });
    hh.push('</div>');
    main.innerHTML = hh.join('');
    cards.forEach(function (c) { s.guideRead[c.id] = s.guideRead[c.id] || Date.now(); }); S.save();
    $('#pracSec').onclick = function () { startPractice({ sec: id, n: 12 }, 'Practice: ' + sec.title); };
    main.querySelectorAll('[data-cc]').forEach(function (b) { b.onclick = function () { var cs = b.getAttribute('data-cc').split(',').filter(E.hasPracticeContent); if (!cs.length) return toast('No practice items for this card.'); startPractice({ concepts: cs, n: Math.min(10, cs.length * 3) }, 'Practice: ' + b.closest('.card').querySelector('h3').textContent); }; });
  }

  // ---------------- Practice setup ----------------
  function pPractice() {
    var st = E.conceptStats();
    var h = ['<h1>Practice</h1><p class="muted">Wrong answers come back after two other questions; low-confidence correct answers come back after four. Generated items use fresh numbers every time.</p>'];
    h.push('<div class="card"><h3>Quick start</h3><div class="row"><button class="btn pri" data-q="mixed">Mixed (all sections, 20)</button><button class="btn" data-q="numbers">Audiogram + numbers (15)</button><button class="btn" data-q="photos">Syndrome photo ID (12)</button><button class="btn" data-q="guest">Guest lecture (15)</button></div></div>');
    h.push('<div class="card"><h3>Build your own</h3><div class="formrow"><label for="nq">Number of questions</label><select id="nq"><option>10</option><option selected>15</option><option>20</option><option>30</option></select></div>');
    h.push('<div class="formrow"><label>Include held-back mock items</label><label style="min-width:0"><input type="checkbox" id="inclHeld"' + (S.load().settings.includeHeld ? ' checked' : '') + '> Yes (makes mocks less fresh)</label></div>');
    L.SECTIONS.forEach(function (sec) {
      var cs = Object.keys(L.CONCEPTS).filter(function (c) { return L.CONCEPTS[c].sec === sec.id && E.hasPracticeContent(c); });
      h.push('<details><summary>' + sec.n + '. ' + esc(sec.title) + ' <span class="muted small">(' + cs.length + ' concepts)</span></summary><div class="grid g2" style="margin:8px 0">');
      cs.forEach(function (c) { h.push('<label class="small"><input type="checkbox" class="cc" value="' + c + '"> ' + esc(L.CONCEPTS[c].name) + ' <span class="badge st-' + st[c].status + '">' + STATUS_LABEL[st[c].status] + '</span></label>'); });
      h.push('</div></details>');
    });
    h.push('<div class="row" style="margin-top:10px"><button class="btn pri" id="goCustom">Start with selected concepts</button></div></div>');
    main.innerHTML = h.join('');
    $('#inclHeld').onchange = function () { S.load().settings.includeHeld = this.checked; S.save(); };
    main.querySelectorAll('[data-q]').forEach(function (b) {
      b.onclick = function () {
        var q = b.getAttribute('data-q');
        if (q === 'mixed') startPractice({ n: 20 }, 'Mixed practice');
        if (q === 'numbers') startPractice({ sec: 's2', n: 15 }, 'Audiogram + numbers');
        if (q === 'photos') startPractice({ concepts: ['syndrome-photo'], n: 12 }, 'Syndrome photo ID');
        if (q === 'guest') startPractice({ sec: 's6', n: 15 }, 'Guest lecture');
      };
    });
    $('#goCustom').onclick = function () {
      var cs = [].slice.call(main.querySelectorAll('.cc:checked')).map(function (x) { return x.value; });
      if (!cs.length) return toast('Pick at least one concept.');
      startPractice({ concepts: cs, n: +$('#nq').value }, 'Custom practice');
    };
  }
  function startPractice(opt, title) {
    if (opt.concepts && opt.concepts.length === 1 && opt.concepts[0] === 'syndrome-photo') {
      var ids = E.itemsFor(function (it) { return it.c === 'syndrome-photo' && (it.pool === 'b' || S.load().seenX[it.id] || S.load().settings.includeHeld); }).map(function (it) { return { id: it.id }; });
      E.newSession('practice', title, U.shuffle(ids).slice(0, opt.n)); return go('session');
    }
    var refs = E.practiceRefs(opt);
    if (!refs.length) return toast('Nothing to practice here yet.');
    E.newSession('practice', title, refs); go('session');
  }
  function startReview() {
    var refs = E.reviewRefs(15); if (!refs.length) return toast('Review queue is empty.');
    E.newSession('review', 'Smart review', refs); go('session');
  }

  // ---------------- Session runner (practice, review, case, boss) ----------------
  function pSession() {
    var sess = E.currentSession();
    if (!sess) { main.innerHTML = '<div class="card"><p>No active session.</p><a class="btn pri" href="#practice">Start practicing</a></div>'; return; }
    if (sess.idx >= sess.queue.length) return sessionSummary(sess);
    var q = sess.queue[sess.idx], it = E.resolve(q.ref), key = E.refKey(q.ref);
    if (!it) { E.advance(); return pSession(); }
    var done = sess.results.length, firsts = sess.results.filter(function (r) { return !r.retry; });
    var h = ['<div class="item"><div class="spread"><div><b>' + esc(sess.title) + '</b> <span class="muted small">' + (sess.idx + 1) + ' of ' + sess.queue.length + (sess.retries ? ' (incl. ' + sess.retries + ' retries)' : '') + '</span></div><div class="row"><span class="small muted">' + firsts.filter(function (r) { return r.ok; }).length + '/' + firsts.length + ' first-try</span><button class="btn ghost" id="endS">End</button></div></div>'];
    h.push('<div class="progress"><i style="width:' + U.pct(sess.idx, sess.queue.length) + '%"></i></div></div><div id="host"></div><div class="item row" id="nextRow" style="margin-top:10px"></div>');
    main.innerHTML = h.join('');
    var host = $('#host');
    if (!sess.orders[key + ':' + sess.idx]) { sess.orders[key + ':' + sess.idx] = IU.makeOrder(it); S.save(); }
    var order = sess.orders[key + ':' + sess.idx];
    var secName = (secById(it.sec) || {}).short || '';
    var header = (q.retry ? '<span class="badge tier3">retry</span> ' : '') + esc(secName);
    var headerAfter = (q.retry ? '<span class="badge tier3">retry</span> ' : '') + esc(secName) + ' &middot; ' + esc((L.CONCEPTS[it.c] || {}).name || '');
    var immediate = it.t === 'mc' || it.t === 'tf';
    if (immediate && !q.grade) { host.insertAdjacentHTML('beforebegin', '<div class="item"><label>Confidence before answering <select id="sessionConfidence"><option value="l">Low / guessing</option><option value="m" selected>Medium</option><option value="h">High</option></select></label></div>'); $('#sessionConfidence').value=q.confidence||'m';$('#sessionConfidence').onchange=function(){q.confidence=this.value;S.save();}; }
    function showNext() { var nr=$('#nextRow');nr.innerHTML='';var nb=U.el('button',{class:'btn pri',id:'nextBtn'},'Next &#8594;');nb.onclick=function(){E.advance();pSession();};nr.appendChild(nb);nr.appendChild(U.el('span',{class:'small muted'},'Press <kbd>Enter</kbd> for next'));document.onkeydown=function(e){if(e.key==='Enter'&&!/INPUT|TEXTAREA|SELECT/.test(e.target.tagName)){e.preventDefault();nb.click();}}; }
    var ui = IU.render(host, it, {
      mode: 'practice', order: order, header: header, noHint: sess.mode === 'boss', response: q.response, locked: !!q.grade, graded: q.grade, immediateSingle: immediate,
      getConfidence: function(){return $('#sessionConfidence')?$('#sessionConfidence').value:'m';},
      assisted: !!q.assisted, onHint: function(){q.assisted=true;S.save();},
      onChange: function(resp){q.response=resp===undefined?null:U.clone(resp);S.save();},
      onSubmit: function (resp, conf, assisted) {
        var res = E.answerInSession(resp, conf, assisted);
        if (it.t === 'teach') { E.advance(); return pSession(); }
        IU.render(host, it, { mode: 'practice', order: order, header: headerAfter, response: resp, locked: true, graded: res.grade });
        if ($('#sessionConfidence')) $('#sessionConfidence').disabled = true;
        showNext();
      }
    });
    document.onkeydown = function (e) { if (host._keys && !/INPUT|TEXTAREA|SELECT/.test(e.target.tagName)) host._keys(e); };
    if (q.grade) showNext();
    $('#endS').onclick = function () { if (confirm('End this session? Answers so far are already saved.')) { var s2 = E.endSession(); if (s2 && s2.mode === 'boss') E.finishBoss(s2); sessionSummary(s2, true); } };
  }
  function sessionSummary(sess, ended) {
    if (!ended) { E.endSession(); }
    var first = sess.results.filter(function (r) { return !r.retry && r.t !== 'teach'; });
    var ok = first.filter(function (r) { return r.ok; }).length;
    var missed = U.uniq(sess.results.filter(function (r) { return !r.ok && r.t !== 'teach'; }).map(function (r) { return r.c; }));
    var hiMiss = sess.results.filter(function (r) { return !r.ok && r.cf === 'h'; }).length;
    var h = ['<div class="item card"><h1>' + esc(sess.title) + ': done</h1>'];
    if (sess.mode === 'boss') {
      var b = L.BOSSES.filter(function (x) { return x.id === sess.bossId; })[0], pass = b ? b.pass : 0.8;
      var br = ended ? E.bossResult(sess) : E.finishBoss(sess), sc = br.total ? br.score / br.total : 0;
      if (!br.complete) {
        h.push('<p style="font-size:1.2rem"><b>' + br.score + '/' + br.total + '</b> (' + Math.round(sc * 100) + '%) <span class="badge st-shaky">Run ended early</span></p>');
        h.push('<p class="muted">You answered ' + br.answered + ' of ' + br.total + '. Unanswered questions count as misses, and an unfinished run never sets your best score. Your answers still count toward concept progress.</p>');
        h.push('<div class="lich">You walked away from the fight. The boss does not care how well the first few swings landed. Finish a full run.</div>');
      } else {
        h.push('<p style="font-size:1.2rem"><b>' + br.score + '/' + br.total + '</b> first-try (' + Math.round(sc * 100) + '%). ' + (sc >= pass ? '<span class="badge st-mastered">Boss defeated</span>' : '<span class="badge st-shaky">Boss survives (needs ' + Math.round(pass * 100) + '%)</span>') + '</p>');
        h.push('<div class="lich">' + (sc >= pass ? 'Adequate. Do not let it go to your skull; run it again tomorrow with fresh numbers.' : 'It ate you. Good. Now you know where the teeth are. Drill the misses below, then come back.') + '</div>');
      }
    } else h.push('<p style="font-size:1.2rem"><b>' + ok + '/' + first.length + '</b> correct on the first try; ' + sess.retries + ' retries.</p>');
    if (hiMiss) h.push('<p class="muted">' + hiMiss + ' high-confidence miss' + (hiMiss > 1 ? 'es' : '') + ': those concepts stay flagged until you get them right twice.</p>');
    if (missed.length) h.push('<h3>Concepts to revisit</h3><ul>' + missed.map(function (c) { var sec = L.CONCEPTS[c] && L.CONCEPTS[c].sec; return '<li>' + esc((L.CONCEPTS[c] || {}).name || c) + ' <a href="#guide/' + sec + '">guide</a></li>'; }).join('') + '</ul>');
    h.push('<div class="row">' + (missed.length ? '<button class="btn pri" id="drillMiss">Drill these now</button>' : '') + '<button class="btn" id="goRev">Smart review</button><a class="btn" href="#home">Home</a></div></div>');
    main.innerHTML = h.join('');
    if ($('#drillMiss')) $('#drillMiss').onclick = function () { startPractice({ concepts: missed.filter(E.hasPracticeContent), n: Math.max(6, missed.length * 2) }, 'Drill: missed concepts'); };
    $('#goRev').onclick = startReview;
  }

  // ---------------- Review ----------------
  function pReview() {
    var plan = E.reviewPlan(), h = ['<h1>Smart review</h1><p class="muted">Order: high-confidence misses, then mock misses, then last-time misses, then spaced reviews (1, 2, 4, 7 days), then old-lab misses, then untouched concepts.</p>'];
    h.push('<div class="row" style="margin-bottom:12px"><button class="btn pri" id="goR">Start review (15)</button></div>');
    if (!plan.length) h.push('<p>Nothing queued. Go take a mock and give me something to punish.</p>');
    else h.push('<table class="stat"><tr><th>Concept</th><th>Section</th><th>Why</th><th>Attempts</th></tr>' + plan.slice(0, 60).map(function (p) { var sec = secById(L.CONCEPTS[p.c].sec); return '<tr><td>' + esc(L.CONCEPTS[p.c].name) + '</td><td class="small">' + sec.n + '. ' + esc(sec.short) + '</td><td><span class="badge ' + (p.why === 'misconception' ? 'st-misconception' : p.why === 'mock' || p.why === 'shaky' ? 'st-shaky' : '') + '">' + WHY_LABEL[p.why] + '</span></td><td>' + p.s.att + '</td></tr>'; }).join('') + '</table>');
    main.innerHTML = h.join('');
    $('#goR').onclick = startReview;
  }

  // ---------------- Cases ----------------
  function pCases() {
    var h = ['<h1>Case blocks</h1><p class="muted">History, data, then linked questions in reading order. Built from lecture content; not claimed to be real exam cases.</p><div class="grid g2">'];
    L.CASES.forEach(function (cs) {
      h.push('<div class="card flat"><b>' + esc(cs.title) + '</b><p class="small muted">' + cs.items.length + ' questions; ' + esc(L.DOMAINS[cs.dom].name) + '</p><div>' + IU.srcChips(cs.src) + '</div><div class="row" style="margin-top:8px"><button class="btn pri" data-case="' + cs.id + '">Work the case</button></div></div>');
    });
    h.push('</div>'); main.innerHTML = h.join('');
    main.querySelectorAll('[data-case]').forEach(function (b) { b.onclick = function () { var cs = L.CASES.filter(function (c) { return c.id === b.getAttribute('data-case'); })[0]; E.newSession('case', 'Case: ' + cs.title, E.caseRefs(cs.id), { noRetry: true, caseId: cs.id }); go('session'); }; });
  }

  // ---------------- Boss ----------------
  function pBoss() {
    var s = S.load(), h = ['<h1>Boss drills</h1><p class="muted">Long integration runs (25+ questions). Feedback after each question, no retries inside the run, pass mark shown. Scores count toward concept mastery.</p><div class="grid g2">'];
    L.BOSSES.forEach(function (b) {
      var rec = s.boss[b.id], n = E.bossRefs(b.id).length, full = rec ? rec.runs.filter(function (r) { return r.complete === true; }).length : 0;
      h.push('<div class="card flat"><div class="spread"><b>' + esc(b.title) + '</b><span class="badge">' + n + ' Qs</span></div><p class="small muted">' + esc(b.blurb) + '</p><p class="small">Pass: ' + Math.round(b.pass * 100) + '%. Best: ' + (rec ? Math.round(rec.best * 100) + '% over ' + rec.runs.length + ' run' + (rec.runs.length > 1 ? 's' : '') : 'not attempted') + '</p><button class="btn pri" data-boss="' + b.id + '">Fight</button></div>');
    });
    h.push('</div>'); main.innerHTML = h.join('');
    main.querySelectorAll('[data-boss]').forEach(function (btn) { btn.onclick = function () { var b = L.BOSSES.filter(function (x) { return x.id === btn.getAttribute('data-boss'); })[0]; E.newSession('boss', 'Boss: ' + b.title, E.bossRefs(b.id), { noRetry: true, bossId: b.id }); go('session'); }; });
  }

  // ---------------- Mock ----------------
  function pMock(args) {
    var s = S.load();
    if (args[0] === 'take' && s.mockActive) return mockTake();
    if (args[0] === 'result') return mockResult(args[1]);
    var h = ['<h1>Mock exam</h1>'];
    h.push('<div class="card"><p><b>For the September 24 announced format, use <a href="#exam1/mocks">Exam 1 full learning mocks</a>.</b> These older 35/70-question sets remain available. Feedback now appears on each question: a single-choice selection checks immediately; multi-part/numeric answers have a Check now button. First checked responses lock. Unanswered questions count as wrong; mocks do not grant mastery.</p>');
    h.push('<p class="small muted">Design choices (not predictions): lengths of 70 and 35 mirror the 4190 final count and a half-length drill. Domain mix follows syllabus class days: overview ~15%, etiology ~25%, diagnostic interpretation ~30%, hearing aids/HAT ~30%. Items held back from practice appear here first; about a third of diagnostic items are freshly generated audiograms and tymps; one linked case block is included. Prior-course (4190) refresher items are excluded.</p>');
    if (s.mockActive) h.push('<div class="row"><a class="btn warn" href="#mock/take">Resume mock in progress (' + Object.keys(s.mockActive.answers).length + '/' + s.mockActive.refs.length + ' answered)</a><button class="btn bad" id="abandon">Abandon it</button></div>');
    else h.push('<div class="row"><button class="btn pri" data-size="70">Start 70-question mock</button><button class="btn" data-size="35">Start 35-question mock</button></div>');
    h.push('</div>');
    if (s.mocks.length) {
      h.push('<h2>History</h2><table class="stat"><tr><th>Date</th><th>Score</th><th>Overview</th><th>Etiology</th><th>Diagnostic</th><th>HA/HAT</th><th></th></tr>');
      s.mocks.slice().reverse().forEach(function (m) {
        var d = function (k) { var x = m.byDom[k]; return x ? x.ok + '/' + x.n : '-'; };
        h.push('<tr><td>' + new Date(m.ts).toLocaleString() + '</td><td><b>' + m.score + '/' + m.total + '</b> (' + U.pct(m.score, m.total) + '%)</td><td>' + d('ov') + '</td><td>' + d('et') + '</td><td>' + d('dx') + '</td><td>' + d('ha') + '</td><td><a href="#mock/result/' + m.id + '">Review</a></td></tr>');
      });
      h.push('</table>');
    }
    main.innerHTML = h.join('');
    main.querySelectorAll('[data-size]').forEach(function (b) { b.onclick = function () { E.buildMock(+b.getAttribute('data-size')); go('mock/take'); }; });
    if ($('#abandon')) $('#abandon').onclick = function () { if (confirm('Abandon this mock? Nothing will be recorded.')) { S.load().mockActive = null; S.save(); route(); } };
  }
  function mockTake() {
    var s = S.load(), m = s.mockActive;
    var i = m.cur, ref = m.refs[i], it = E.resolve(ref);
    if (!m.orders[i]) { m.orders[i] = IU.makeOrder(it); S.save(); }
    var answered = Object.keys(m.answers).length;
    var h = ['<div class="item"><div class="spread"><b>Mock exam (' + m.refs.length + ')</b><span class="small muted">' + answered + ' answered; ' + Object.keys(m.flags).filter(function (k) { return m.flags[k]; }).length + ' flagged; started ' + new Date(m.started).toLocaleTimeString() + '</span></div>'];
    h.push('<div class="navgrid" id="ng"></div></div><div id="host"></div>');
    h.push('<div class="item spread" style="margin-top:10px"><div class="row"><button class="btn" id="prev">&#8592; Prev</button><button class="btn" id="next">Next &#8594;</button><button class="btn warn" id="flag">' + (m.flags[i] ? 'Unflag' : 'Flag') + '</button><button class="btn ghost" id="clear">Clear answer</button></div><button class="btn good" id="submit">Submit exam</button></div>');
    main.innerHTML = h.join('');
    var ng = $('#ng');
    m.refs.forEach(function (_, k) {
      var b = U.el('button', { type: 'button', class: (m.answers[k] !== undefined ? 'ans ' : '') + (k === i ? 'cur ' : '') + (m.flags[k] ? 'flag' : ''), 'aria-label': 'Question ' + (k + 1) }, String(k + 1));
      b.onclick = function () { m.cur = k; S.save(); mockTake(); }; ng.appendChild(b);
    });
    m.immediateChecked = m.immediateChecked || {};
    function checkNow() { if (m.immediateChecked[i] || m.answers[i] === undefined) return; m.immediateChecked[i] = E.grade(it, m.answers[i]); S.save(); mockTake(); }
    IU.render($('#host'), it, { mode: 'mock', order: m.orders[i], header: 'Question ' + (i + 1) + ' of ' + m.refs.length, response: m.answers[i], locked: !!m.immediateChecked[i], graded: m.immediateChecked[i],
      onChange: function (r) { var empty = r === undefined || r === '' || (Array.isArray(r) && (!r.length || (it.t !== 'order' && r.every(function (x) { return x === ''; })))); if (empty) delete m.answers[i]; else m.answers[i] = r; S.save(); var nb = ng.children[i]; if (nb) nb.classList.toggle('ans', !empty); if (!empty && (it.t === 'mc' || it.t === 'tf')) checkNow(); } });
    if (!m.immediateChecked[i] && (it.t !== 'mc' && it.t !== 'tf' || m.answers[i] !== undefined)) { var check = U.el('button', {class:'btn pri'}, 'Check this answer now'); check.onclick = checkNow; $('#host').appendChild(check); }
    $('#prev').disabled = i === 0; $('#next').disabled = i === m.refs.length - 1;
    $('#prev').onclick = function () { m.cur = i - 1; S.save(); mockTake(); };
    $('#next').onclick = function () { m.cur = i + 1; S.save(); mockTake(); };
    $('#flag').onclick = function () { m.flags[i] = !m.flags[i]; S.save(); mockTake(); };
    $('#clear').onclick = function () { delete m.answers[i]; S.save(); mockTake(); };
    $('#clear').disabled = !!m.immediateChecked[i];
    $('#submit').onclick = function () {
      var un = m.refs.length - Object.keys(m.answers).length;
      if (!confirm(un ? un + ' question(s) unanswered will count as wrong. Submit now?' : 'Submit the exam and see results?')) return;
      var rec = E.submitMock(); go('mock/result/' + rec.id);
    };
  }
  function mockResult(id) {
    var s = S.load(), m = s.mocks.filter(function (x) { return x.id === id; })[0];
    if (!m) return go('mock');
    var h = ['<div class="item"><h1>Mock results: ' + m.score + '/' + m.total + ' (' + U.pct(m.score, m.total) + '%)</h1><p class="muted">' + new Date(m.ts).toLocaleString() + '; ' + Math.round((m.ts - m.started) / 60000) + ' min. This score describes this practice set only; it is not a forecast of the real exam.</p>'];
    h.push('<div class="card"><h3>By domain</h3><div class="bars">' + Object.keys(L.DOMAINS).map(function (k) { var x = m.byDom[k] || { ok: 0, n: 0 }; return '<div class="barrow"><span>' + esc(L.DOMAINS[k].name) + '</span><div class="b"><i style="width:' + U.pct(x.ok, x.n) + '%"></i></div><span>' + x.ok + '/' + x.n + '</span></div>'; }).join('') + '</div></div>');
    var weak = Object.keys(m.byCon).filter(function (c) { return m.byCon[c].ok < m.byCon[c].n; });
    h.push('<div class="card"><h3>Remediation</h3>' + (weak.length ? '<p>Missed concepts (' + weak.length + '): ' + weak.map(function (c) { return esc((L.CONCEPTS[c] || {}).name || c); }).join('; ') + '.</p><div class="row"><button class="btn pri" id="remed">Drill missed concepts</button><a class="btn" href="#review">See review queue</a></div>' : '<p>Nothing missed. Suspicious. Take the 70.</p>') + '</div>');
    h.push('<h2>Question review</h2><div class="navgrid" id="rg"></div><div id="rhost"></div></div>');
    main.innerHTML = h.join('');
    if ($('#remed')) $('#remed').onclick = function () { startPractice({ concepts: weak.filter(E.hasPracticeContent), n: Math.min(30, Math.max(10, weak.length * 2)) }, 'Mock remediation'); };
    var rg = $('#rg'), rhost = $('#rhost');
    function show(k) {
      var x = m.items[k], it = E.resolve(x.ref);
      [].forEach.call(rg.children, function (b, j) { b.classList.toggle('cur', j === k); });
      IU.render(rhost, it, { mode: 'review', order: m.orders[k], header: 'Question ' + (k + 1) + (m.flags[k] ? ' (flagged)' : ''), response: x.r === null ? undefined : x.r, locked: true, graded: { ok: x.ok, sc: x.sc, blank: x.blank } });
    }
    m.items.forEach(function (x, k) { var b = U.el('button', { type: 'button', class: x.ok ? 'r-ok' : 'r-no' }, String(k + 1)); b.onclick = function () { show(k); }; rg.appendChild(b); });
    var firstMiss = m.items.findIndex(function (x) { return !x.ok; }); show(firstMiss >= 0 ? firstMiss : 0);
  }

  // ---------------- Progress ----------------
  function pProgress() {
    var st = E.conceptStats(), s = S.load();
    var h = ['<h1>Progress</h1><p class="muted">Mastered = your last two graded answers on the concept were correct, on two different questions, and the latest was locked at medium or high confidence. Any miss resets it. Teach-backs and mock answers never count toward mastery.</p>'];
    // calibration
    var cal = { l: [0, 0], m: [0, 0], h: [0, 0] };
    s.attempts.forEach(function (a) { if (a.m !== 'mock' && cal[a.cf]) { cal[a.cf][1]++; if (a.ok) cal[a.cf][0]++; } });
    h.push('<div class="card"><h3>Confidence calibration</h3><div class="bars">' + [['l', 'Low'], ['m', 'Medium'], ['h', 'High']].map(function (x) { var c = cal[x[0]]; return '<div class="barrow"><span>' + x[1] + ' confidence</span><div class="b"><i style="width:' + U.pct(c[0], c[1]) + '%"></i></div><span>' + (c[1] ? U.pct(c[0], c[1]) + '% (' + c[1] + ')' : '-') + '</span></div>'; }).join('') + '</div><p class="small muted">Well calibrated = high-confidence accuracy near 100%. A high-confidence miss is a misconception: dangerous on an exam because you will not second-guess it.</p></div>');
    L.SECTIONS.forEach(function (sec) {
      var cs = Object.keys(L.CONCEPTS).filter(function (c) { return L.CONCEPTS[c].sec === sec.id && E.hasPracticeContent(c); });
      h.push('<h2>' + sec.n + '. ' + esc(sec.title) + '</h2><table class="stat"><tr><th>Concept</th><th>Status</th><th>Accuracy</th><th>Next review</th></tr>');
      cs.forEach(function (c) { var x = st[c]; h.push('<tr><td>' + esc(L.CONCEPTS[c].name) + (x.prior ? ' <span class="badge" title="Old lab: ' + x.prior.miss + ' misses in ' + x.prior.att + ' attempts">old-lab miss</span>' : '') + (x.mockMiss ? ' <span class="badge st-shaky">mock miss</span>' : '') + '</td><td><span class="badge st-' + x.status + '">' + STATUS_LABEL[x.status] + '</span></td><td>' + (x.att ? x.ok + '/' + x.att : '-') + '</td><td class="small">' + (x.att ? x.due : '-') + '</td></tr>'); });
      h.push('</table>');
    });
    var bk = Object.keys(s.boss);
    if (bk.length) { h.push('<h2>Boss history</h2><table class="stat"><tr><th>Boss</th><th>Best full run</th><th>Runs</th></tr>'); bk.forEach(function (k) { var b = L.BOSSES.filter(function (x) { return x.id === k; })[0]; h.push('<tr><td>' + esc(b ? b.title : k) + '</td><td>' + Math.round(s.boss[k].best * 100) + '%</td><td>' + s.boss[k].runs.map(function (r) { return r.score + '/' + r.total + (r.complete === true ? '' : r.complete === false ? ' (ended early)' : ' (old run, not verified)'); }).join(', ') + '</td></tr>'); }); h.push('</table>'); }
    main.innerHTML = h.join('');
  }

  // ---------------- Data ----------------
  function pData() {
    var s = S.load();
    var h = ['<h1>Data: export, import, reset</h1>', storageBanner()];
    h.push('<div class="card"><h3>Export</h3><p>Downloads all progress: attempts, original mocks, Boss runs, Exam 1 runs, written drafts, flags, question position and imported prior signal. Closing the tab or browser retains saved work in the same browser profile at the same address. Another device, browser, folder or site may have separate storage: export/import transfers your progress. Keep a downloaded backup before clearing browser data or switching devices; private-browsing data is temporary.</p><div class="row"><button class="btn pri" id="exp">Download progress file</button><button class="btn" id="expCopy">Copy to clipboard</button>'+(S.exportBefore()?'<button class="btn" id="expBefore">Download pre-update recovery copy</button>':'')+'</div></div>');
    h.push('<div class="card"><h3>Import</h3><p>Accepts: a v2 export (merged, duplicates skipped); a v1 full backup (<code>comd4590-progress-backup-v1</code>); or the Lecture 2 drill export (<code>{records, concepts}</code>, e.g. <code>pathology-progress-backup-2026-09-21.json</code>). v1 data becomes a <b>prior signal</b> that pushes previously missed topics up the review queue; it never grants v2 mastery because v1 counted post-feedback confidence and some v1 answer keys were wrong.</p><div class="formrow"><input type="file" id="file" accept=".json,application/json"></div><details><summary>Or paste JSON</summary><textarea id="paste"></textarea><button class="btn" id="pasteGo">Import pasted JSON</button></details><p id="impMsg" class="small"></p></div>');
    h.push('<div class="card"><h3>Reset</h3><p class="muted">Deletes all v2 progress in this browser. Export first.</p><button class="btn bad" id="reset">Reset all progress</button></div>');
    h.push('<p class="small muted">Storage key: <code>' + S.KEY + '</code>. Attempts stored: ' + s.attempts.length + '. Mocks: ' + s.mocks.length + '.</p>');
    main.innerHTML = h.join('');
    $('#exp').onclick = function () {
      var blob = new Blob([S.exportJSON()], { type: 'application/json' }), url = URL.createObjectURL(blob), a = document.createElement('a');
      a.href = url; a.download = 'comd4590-lab-v2-progress-' + U.todayKey() + '.json'; document.body.appendChild(a); a.click(); a.remove(); setTimeout(function () { URL.revokeObjectURL(url); }, 1500);
    };
    $('#expCopy').onclick = function () { try { navigator.clipboard.writeText(S.exportJSON()).then(function () { toast('Copied.'); }, function () { toast('Clipboard blocked; use Download.'); }); } catch (e) { toast('Clipboard blocked; use Download.'); } };
    if ($('#expBefore')) $('#expBefore').onclick = function () { var blob=new Blob([S.exportBefore()],{type:'application/json'}),url=URL.createObjectURL(blob),a=document.createElement('a');a.href=url;a.download='comd4590-before-exam1-progress.json';document.body.appendChild(a);a.click();a.remove();setTimeout(function(){URL.revokeObjectURL(url);},1500); };
    function doImport(txt) { var r = S.importText(txt); $('#impMsg').textContent = r.message; $('#impMsg').style.color = r.ok ? 'var(--ok)' : 'var(--bad)'; }
    $('#file').onchange = function () { var f = this.files[0]; if (!f) return; var rd = new FileReader(); rd.onload = function () { doImport(rd.result); }; rd.readAsText(f); };
    $('#pasteGo').onclick = function () { doImport($('#paste').value); };
    $('#reset').onclick = function () { if (confirm('Delete ALL v2 progress in this browser? This cannot be undone.') && confirm('Really? Export first if you want a copy.')) { S.reset(false); toast('Progress reset.'); route(); } };
  }

  // ---------------- Sources + professor evidence ----------------
  function pSources() {
    var h = ['<h1>Sources and coverage</h1><p class="muted">Full ledger: <code>docs/SOURCE_COVERAGE_LEDGER.md</code>. Every item cites a source code; hover a chip for the file.</p><table class="stat"><tr><th>Code</th><th>Source</th><th>Tier</th><th>Items citing</th></tr>'];
    var counts = {}; E.itemsFor(function () { return true; }).forEach(function (it) { (it.s || []).forEach(function (c) { var b = L.srcBase(c); if (b) counts[b] = (counts[b] || 0) + 1; }); });
    Object.keys(L.SOURCES).forEach(function (k) { var s = L.SOURCES[k]; h.push('<tr><td><code>' + k + '</code></td><td>' + esc(s.t) + '<br><span class="tiny muted">' + esc(s.f) + '</span></td><td>' + IU.tierBadge(s.tier) + '</td><td>' + (counts[k] || 0) + '</td></tr>'); });
    h.push('</table>');
    main.innerHTML = h.join('');
  }
  function pProf() {
    var P = L.PROF, h = ['<h1>' + esc(P.title) + '</h1><div class="card"><b>Current Exam 1 scope:</b> the September 24 announcement now controls the <a href="#exam1">Exam 1 environment</a>. The historical style notes below remain background; their older mock lengths and exclusions do not override that announcement.</div><p class="muted">Historical evidence and lab design choices are distinguished below.</p>'];
    P.tiers.forEach(function (t) { h.push('<div class="card"><div class="spread"><h3 style="margin:0">' + esc(t.name) + '</h3>' + IU.tierBadge(t.tier) + '</div><ul>' + t.items.map(function (x) { return '<li>' + esc(x) + '</li>'; }).join('') + '</ul></div>'); });
    main.innerHTML = h.join('');
  }

  // ---------------- Boot ----------------
  function boot() {
    main = $('#main');
    E.build();
    S.load();
    if (!location.hash && S.load().exam1 && S.load().exam1.lastRoute) root.history.replaceState(null, '', '#' + S.load().exam1.lastRoute);
    window.addEventListener('hashchange', route);
    route();
  }
  L.app = { boot: boot, route: route, go: go };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot); else boot();
})(window);
