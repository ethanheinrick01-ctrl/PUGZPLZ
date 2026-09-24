/* COMD 4756 Diagnostics Lab v2 - UI. Offline, framework-free, file:// safe. */
(function () {
  "use strict";
  const D = window.DX_DATA, REV = window.DX_DATA_REV, E = window.DXE, V = window.DXV;
  const app = document.getElementById("app");
  if (!D || !E || !V) { app.innerHTML = "<p class='err'>The lab's data files did not load. Keep the folder structure intact (index.html next to assets/ and data/).</p>"; return; }

  /* ================= data indexes ================= */
  const ITEMS = {}; D.items.forEach(i => { ITEMS[i.id] = i; });
  const MODS = {}; D.modules.forEach(m => { MODS[m.id] = m; });
  const EXAMS = {}; D.exams.forEach(x => { EXAMS[x.id] = x; });
  const CONC = D.concepts;
  const PRACTICE = D.items.filter(i => i.pool === "practice");
  const KEY = "comd4756-lab-v2", BACKUP_SCHEMA = "comd4756-lab-v2-backup", V1_BACKUP = "comd4756-progress-backup-v1";
  const V1_LABELS = {
    "dx-week-1-drill": "Week 1 · Mixed retrieval", "dx-week-2-drill": "Week 2 · Mixed retrieval", "dx-week-3-drill": "Week 3 · Mixed retrieval",
    "dx-week-4-drill": "Week 4 · Mixed retrieval", "dx-week-5-drill": "Week 5 · Mixed retrieval", "dx-boss-40": "Boss Drill · Mixed 40",
    "dx-procedure-drill": "Procedure Drill · Work the numbers", "dx-mock-40-a": "Practice Exam A · 100 points (v1)", "dx-mock-40-b": "Practice Exam B · 100 points (v1)"
  };
  const EV_LABEL = { slide: "Her slides", lecture: "Her lecture", video: "Assigned video", assignment: "Her handout / assignment", textbook: "Textbook",
    historical: "Prior course (historical)", inference: "Lab inference", flag: "Your Test One flag", admin: "Syllabus" };
  const CALLOUT = { source: "Source", trap: "Trap to watch", numbers: "Numbers", lecture: "From her lecture", gonsoulin: "How she frames it",
    flag: "Your Test One flag", textbook: "Textbook adds", conflict: "Conflict: flagged, not reconciled", assignment: "From the assignment" };
  const STATUS_LABEL = { new: "Not started", learning: "Learning", review: "Needs review", misconception: "Misconception", provisional: "v1 mastered · confirm once", mastered: "Mastered" };

  /* ================= helpers ================= */
  const esc = s => String(s == null ? "" : s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const md = s => esc(s).replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
  const nowISO = () => new Date().toISOString();
  const fmtDate = iso => { try { return new Date(iso).toLocaleString([], { dateStyle: "medium", timeStyle: "short" }); } catch (e) { return iso || ""; } };
  const mmss = s => { s = Math.max(0, Math.round(s)); return Math.floor(s / 60) + ":" + String(s % 60).padStart(2, "0"); };
  const srcText = src => (src || []).map(x => { const S = D.sources[x.s]; return esc(S ? S.label : x.s) + (x.loc ? " · " + esc(x.loc) : ""); }).join("; ");
  const evBadge = ev => `<span class="ev ev-${esc(ev)}">${esc(EV_LABEL[ev] || ev)}</span>`;
  const pct = (a, b) => b ? Math.round(100 * a / b) : 0;
  const letter = i => "ABCDEFGH"[i];
  const seed = () => (Math.random() * 2 ** 31) | 0;

  /* ================= storage ================= */
  let S, storageOK = true, flash = null;
  function fresh() {
    return { schema: KEY, version: 1, created: nowISO(), updated: nowISO(), dataRev: REV, items: {}, concepts: {}, modules: {},
             exams: {}, practice: null, settings: { theme: "dark" }, legacy: null, log: [] };
  }
  function sanitize(o) {
    const f = fresh();
    if (!o || typeof o !== "object" || o.schema !== KEY) return f;
    const obj = x => (x && typeof x === "object" && !Array.isArray(x)) ? x : {};
    f.created = typeof o.created === "string" ? o.created : f.created;
    f.items = obj(o.items); f.modules = obj(o.modules); f.exams = obj(o.exams); f.settings = Object.assign(f.settings, obj(o.settings));
    f.concepts = {};
    for (const [k, v] of Object.entries(obj(o.concepts))) if (CONC[k] && v && typeof v === "object") f.concepts[k] = Object.assign(E.emptyConcept(), v, { roots: Array.isArray(v.roots) ? v.roots : [] });
    for (const [k, v] of Object.entries(f.exams)) {
      if (!EXAMS[k] || !v || typeof v !== "object") { delete f.exams[k]; continue; }
      v.attempts = Array.isArray(v.attempts) ? v.attempts : [];
      if (v.active && (!Array.isArray(v.active.order) || !v.active.order.every(id => ITEMS[id]))) v.active = null;
    }
    f.practice = o.practice && Array.isArray(o.practice.queue) && o.practice.queue.every(q => q && ITEMS[q.id]) ? o.practice : null;
    f.legacy = o.legacy && typeof o.legacy === "object" ? o.legacy : null;
    f.log = Array.isArray(o.log) ? o.log.slice(-1500) : [];
    f.dataRev = o.dataRev || REV;
    return f;
  }
  function readV1Raw() {
    const raw = {};
    for (const k of Object.values(E.V1_KEYS)) { try { raw[k] = localStorage.getItem(k); } catch (e) { raw[k] = null; } }
    return raw;
  }
  function applyLegacy(raw, source) {
    const summary = E.readV1(raw);
    if (!summary.found) return false;
    const m = E.migrateV1(summary, S.concepts, CONC);
    S.concepts = m.concepts;
    S.legacy = { checked: true, at: nowISO(), source, raw, summary, provisional: m.provisional };
    return true;
  }
  function load() {
    try {
      const raw = localStorage.getItem(KEY);
      S = raw ? sanitize(JSON.parse(raw)) : fresh();
    } catch (e) { storageOK = false; S = fresh(); }
    if (!S.legacy) {
      try { if (applyLegacy(readV1Raw(), "this browser")) flash = "Found progress from the original lab (v1). It was carried over as history and provisional mastery; the old records were left untouched."; else S.legacy = { checked: true, at: nowISO(), none: true }; }
      catch (e) { /* storage blocked */ }
      save();
    }
  }
  function save() {
    S.updated = nowISO();
    try { localStorage.setItem(KEY, JSON.stringify(S)); storageOK = true; }
    catch (e) { storageOK = false; }
  }

  /* ================= progress recording ================= */
  function record(itemId, ok, conf, src) {
    const it = ITEMS[itemId]; if (!it || it.type === "teach") return;
    const t = nowISO();
    const h = S.items[itemId] || { n: 0, ok: 0 };
    h.n += 1; if (ok) h.ok += 1; h.lastOk = ok; h.lastConf = conf; h.at = t;
    S.items[itemId] = h;
    S.concepts[it.concept] = E.applyAttempt(S.concepts[it.concept], itemId, ok, conf, t);
    S.log.push({ id: itemId, ok, conf, src, t });
    if (S.log.length > 1500) S.log = S.log.slice(-1500);
  }
  const cstat = cid => E.conceptStatus(S.concepts[cid]);
  function moduleMastery(m) { const n = m.concepts.length, k = m.concepts.filter(c => cstat(c) === "mastered").length; return { n, k }; }
  function totals() {
    const ids = Object.keys(CONC), by = {};
    ids.forEach(c => { const s = cstat(c); by[s] = (by[s] || 0) + 1; });
    return { n: ids.length, by };
  }

  /* ================= router ================= */
  const NAV = [["", "Home"], ["guide", "Guide"], ["practice", "Practice"], ["exams", "Exams"], ["review", "Review"], ["tools", "Tools"], ["sources", "Sources"], ["progress", "Progress"]];
  function route() {
    const parts = (location.hash.replace(/^#\/?/, "") || "").split("/").filter(Boolean);
    const top = parts[0] || "";
    stopTimer();
    document.querySelectorAll(".nav a").forEach(a => a.classList.toggle("on", a.dataset.r === top || (top === "exam" && a.dataset.r === "exams") || (top === "results" && a.dataset.r === "exams")));
    const views = { "": vHome, guide: vGuide, practice: vPractice, exams: vExams, exam: vExam, results: vResults, review: vReview, tools: vTools, sources: vSources, progress: vProgress };
    (views[top] || vHome)(parts.slice(1));
    if (flash) { showToast(flash); flash = null; }
    if (!storageOK) showToast("This browser is blocking storage, so progress will not survive a reload. Use Export on the Progress page to keep it.", true);
    const h1 = app.querySelector("h1"); if (h1 && !app.dataset.keepFocus) { h1.setAttribute("tabindex", "-1"); h1.focus({ preventScroll: true }); }
    delete app.dataset.keepFocus;
    window.scrollTo(0, 0);
  }
  const go = h => { if (location.hash === h) route(); else location.hash = h; };
  function showToast(msg, warn) {
    const t = document.getElementById("toast");
    t.textContent = msg; t.className = "toast show" + (warn ? " warn" : "");
    clearTimeout(showToast._t); showToast._t = setTimeout(() => { t.className = "toast"; }, 6500);
  }
  function modal(html, buttons) {
    return new Promise(res => {
      const m = document.getElementById("modal");
      m.innerHTML = `<div class="mbox" role="dialog" aria-modal="true" aria-labelledby="mtitle">${html}<div class="mbtns">${buttons.map((b, i) => `<button class="btn ${b.cls || ""}" data-i="${i}">${esc(b.label)}</button>`).join("")}</div></div>`;
      m.classList.add("show");
      const done = i => { m.classList.remove("show"); m.innerHTML = ""; document.removeEventListener("keydown", onk); res(i); };
      const onk = e => { if (e.key === "Escape") done(-1); };
      document.addEventListener("keydown", onk);
      m.querySelectorAll("button[data-i]").forEach(b => b.addEventListener("click", () => done(+b.dataset.i)));
      const first = m.querySelector("button[data-i]"); if (first) first.focus();
    });
  }

  /* ================= HOME ================= */
  function vHome() {
    const T = totals(), pr = S.practice, act = Object.entries(S.exams).filter(([, v]) => v.active);
    const bests = D.exams.map(x => { const a = (S.exams[x.id] || {}).attempts || []; if (!a.length) return null; const b = a.reduce((p, c) => c.pct > p.pct ? c : p); return `${esc(x.title)}: best ${x.weights ? b.points + "/" + b.max : b.pct + "%"}`; }).filter(Boolean);
    const due = Object.keys(CONC).filter(c => ["misconception", "review"].includes(cstat(c))).length;
    app.innerHTML = `
    <section class="hero"><p class="kicker">COMD 4756 · Diagnostics · Dr. Courtney Gonsoulin · Fall 2026</p>
      <h1>Diagnostics Study Lab <span class="ver">v2</span></h1>
      <p class="lede">Weeks 1-5 of her course, rebuilt from her slides, lectures, handouts, assigned videos and the textbook. Every claim carries its source and evidence class. No predicted questions, no invented weighting.</p></section>
    <div class="grid3">
      <div class="card stat"><b>${T.by.mastered || 0}<small>/${T.n}</small></b><span>concepts mastered</span></div>
      <div class="card stat"><b>${due}</b><span>concepts need review${T.by.misconception ? ` (${T.by.misconception} misconception${T.by.misconception > 1 ? "s" : ""})` : ""}</span></div>
      <div class="card stat"><b>${Object.keys(S.items).length}<small>/${D.items.filter(i => i.type !== "teach").length}</small></b><span>questions attempted</span></div>
    </div>
    ${pr || act.length ? `<div class="card resume"><h2>Pick up where you stopped</h2>
      ${pr ? `<p>Practice: ${esc(pr.label)} · item ${Math.min(pr.pos + 1, pr.queue.length)} of ${pr.queue.length}</p><a class="btn primary" href="#/practice/run">Resume practice</a>` : ""}
      ${act.map(([id, v]) => `<p>${esc(EXAMS[id].title)} in progress · ${Object.keys(v.active.answers).filter(k => E.isAnswered(ITEMS[k], v.active.answers[k])).length}/${v.active.order.length} answered</p><a class="btn primary" href="#/exam/${id}">Resume exam</a>`).join("")}
    </div>` : ""}
    <div class="grid2">
      <a class="card link" href="#/guide"><h3>1 · Learn</h3><p>18 modules in her order. Tables, diagrams, conflicts flagged where sources disagree.</p></a>
      <a class="card link" href="#/practice"><h3>2 · Practice</h3><p>Rate your confidence, check, get the why for right and tempting answers. Misses come back.</p></a>
      <a class="card link" href="#/exams"><h3>3 · Test yourself</h3><p>Two 40-question practice exams (100 points) and two case-based Boss drills. Immediate feedback on each question; your first checked answer stays scored.</p></a>
      <a class="card link" href="#/review"><h3>4 · Repair</h3><p>Every missed concept, sorted by how badly it is broken. Drill exactly those.</p></a>
    </div>
    ${bests.length ? `<p class="muted">${bests.join(" · ")}</p>` : ""}
    <details class="card rules"><summary><h2>How the lab keeps score</h2></summary>
      <ul>
        <li><b>Confidence first.</b> Pick Low, Medium or High before you check. Using a hint records the answer as Low.</li>
        <li><b>Mastery</b> = two correct answers in a row on two different questions for that concept, the latest at Medium or High. One wrong answer resets it.</li>
        <li><b>Misconception</b> = wrong at High confidence. It stays flagged until you re-master the concept.</li>
        <li><b>Misses return</b> after two other questions; low-confidence correct answers return after four.</li>
        <li><b>Exams</b> show correctness and explanations on each question. Unrated exam answers count as Medium confidence toward mastery.</li>
        <li><b>Evidence classes</b>: ${Object.entries(EV_LABEL).filter(([k]) => k !== "admin").map(([k]) => evBadge(k)).join(" ")}</li>
      </ul></details>`;
  }

  /* ================= GUIDE ================= */
  function vGuide(p) {
    if (p[0] && MODS[p[0]]) return vModule(MODS[p[0]]);
    app.innerHTML = `<h1>Guide</h1><p class="lede">Modules follow her weeks. Read, then practice the module; mastery bars fill from your answers, not from reading.</p>
      <div class="mods">${D.modules.map(m => { const mm = moduleMastery(m); return `
        <a class="card mod link" href="#/guide/${m.id}"><span class="num">${m.number}</span><div><p class="kicker">${esc(m.kicker)}</p><h3>${esc(m.title)}</h3>
        <p>${esc(m.summary)}</p><div class="bar" aria-label="${mm.k} of ${mm.n} concepts mastered"><i style="width:${pct(mm.k, mm.n)}%"></i></div><small>${mm.k}/${mm.n} concepts mastered</small></div></a>`; }).join("")}</div>`;
  }
  function renderTable(t) {
    return `<div class="tablewrap"><table><thead><tr>${t.head.map(h => `<th>${md(h)}</th>`).join("")}</tr></thead><tbody>${t.rows.map(r => `<tr>${r.map((c, i) => `<td${i === 0 ? ' class="rh"' : ""}>${md(c)}</td>`).join("")}</tr>`).join("")}</tbody></table></div>`;
  }
  function vModule(m) {
    const idx = D.modules.indexOf(m), next = D.modules[idx + 1], prev = D.modules[idx - 1];
    S.modules[m.id] = Object.assign({ opened: nowISO() }, S.modules[m.id] || {}, { lastOpened: nowISO() }); save();
    app.innerHTML = `<nav class="crumbs"><a href="#/guide">Guide</a> › Module ${m.number}</nav>
      <header class="modhead"><p class="kicker">${esc(m.kicker)} · ${esc(m.week)}</p><h1>${m.number}. ${esc(m.title)}</h1><p class="lede">${esc(m.summary)}</p>
      <div class="chips">${m.concepts.map(c => `<span class="chip st-${cstat(c)}" title="${esc(STATUS_LABEL[cstat(c)])}">${esc(CONC[c].label)}</span>`).join("")}</div></header>
      ${m.sections.map((s, i) => `<section class="sec" id="s${i}"><h2>${md(s.h)}</h2>
        ${(s.body || []).map(b => `<p>${md(b)}</p>`).join("")}
        ${s.bullets ? `<ul>${s.bullets.map(b => `<li>${md(b)}</li>`).join("")}</ul>` : ""}
        ${s.table ? renderTable(s.table) : ""}
        ${s.visual ? V.render(s.visual, { mode: "guide" }) : ""}
        ${(s.callouts || []).map(c => `<aside class="callout k-${esc(c.k)}"><p class="ch">${esc(CALLOUT[c.k] || c.k)} ${evBadge(c.ev)}</p><p>${md(c.t)}</p></aside>`).join("")}
        ${s.src && s.src.length ? `<p class="src">Source: ${s.src.map(x => { const [sid, loc] = x.includes(":") ? [x.split(":")[0], x.slice(x.indexOf(":") + 1)] : [x, ""]; const S0 = D.sources[sid.trim()]; return esc(S0 ? S0.label : x) + (loc ? " · " + esc(loc.trim()) : ""); }).join("; ")}</p>` : ""}
      </section>`).join("")}
      <div class="card endmod"><h2>Now prove it</h2><p>${PRACTICE.filter(i => i.module === m.id).length} practice questions cover this module.</p>
        <button class="btn primary" data-act="practice-module" data-m="${m.id}">Practice module ${m.number}</button>
        <div class="pager">${prev ? `<a href="#/guide/${prev.id}">← ${prev.number}. ${esc(prev.title)}</a>` : "<span></span>"}${next ? `<a href="#/guide/${next.id}">${next.number}. ${esc(next.title)} →</a>` : ""}</div></div>`;
  }

  /* ================= item rendering (shared) ================= */
  // ctx: {name, resp, view, reveal:boolean, g (grade result), exam:boolean}
  function itemHTML(it, ctx) {
    const r = ctx.resp || {}, rv = ctx.reveal, name = ctx.name;
    let h = `<div class="stem">${md(it.stem)}</div>`;
    switch (it.type) {
      case "mc": {
        h += `<div class="opts" role="radiogroup" aria-label="Answer choices">` + ctx.view.opt.map((oi, k) => {
          const o = it.options[oi], chosen = r.choice === oi, key = oi === it.answer;
          const cls = ["opt", chosen ? "chosen" : "", rv && key ? "key" : "", rv && chosen && !key ? "wrong" : ""].join(" ");
          return `<label class="${cls}"><input type="radio" name="${name}" value="${oi}" ${chosen ? "checked" : ""} ${rv ? "disabled" : ""} data-in="mc"><span class="lt">${letter(k)}</span><span class="ot">${md(o.t)}</span>
            ${rv && (chosen || key || ctx.allWhy) ? `<span class="why">${key ? "Correct. " : chosen ? "Your pick. " : ""}${md(o.why)}</span>` : ""}</label>`;
        }).join("") + `</div>`;
        break;
      }
      case "tf": {
        h += `<div class="opts tf" role="radiogroup" aria-label="True or false">` + [true, false].map(v => {
          const chosen = r.choice === v, key = it.answer === v;
          return `<label class="opt ${chosen ? "chosen" : ""} ${rv && key ? "key" : ""} ${rv && chosen && !key ? "wrong" : ""}"><input type="radio" name="${name}" value="${v}" ${chosen ? "checked" : ""} ${rv ? "disabled" : ""} data-in="tf"><span class="ot">${v ? "True" : "False"}</span></label>`;
        }).join("") + `</div>`;
        if (rv) h += `<p class="fix"><b>${it.answer ? "Why it is true / the tempting false version:" : "Corrected statement:"}</b> ${md(it.fix)}</p>`;
        break;
      }
      case "multi": {
        const ch = r.choices || [];
        h += `<p class="inst">Select all that apply.</p><div class="opts">` + ctx.view.opt.map((oi, k) => {
          const o = it.options[oi], chosen = ch.includes(oi), key = it.answer.includes(oi);
          const mark = rv ? (key && chosen ? "key" : key ? "missed" : chosen ? "wrong" : "") : "";
          return `<label class="opt ${chosen ? "chosen" : ""} ${mark}"><input type="checkbox" name="${name}" value="${oi}" ${chosen ? "checked" : ""} ${rv ? "disabled" : ""} data-in="multi"><span class="lt">${letter(k)}</span><span class="ot">${md(o.t)}</span>
            ${rv ? `<span class="why">${key ? (chosen ? "Belongs; you chose it. " : "Belongs; you missed it. ") : (chosen ? "Does not belong. " : "")}${md(o.why)}</span>` : ""}</label>`;
        }).join("") + `</div>`;
        break;
      }
      case "order": {
        const seq = r.seq || ctx.view.opt;
        h += `<p class="inst">Put these in order (first at top). Use the arrows.</p><ol class="ordl">` + seq.map((si, k) => {
          const st = rv ? (si === k ? "key" : "wrong") : "";
          return `<li class="${st}"><span class="ot">${md(it.steps[si])}</span>${rv ? (si === k ? "" : `<span class="why">Belongs at position ${si + 1}</span>`) : `<span class="mv"><button class="ic" data-act="mv" data-k="${k}" data-d="-1" aria-label="Move up" ${k === 0 ? "disabled" : ""}>▲</button><button class="ic" data-act="mv" data-k="${k}" data-d="1" aria-label="Move down" ${k === seq.length - 1 ? "disabled" : ""}>▼</button></span>`}</li>`;
        }).join("") + `</ol>` + (!rv && !r.seq ? `<button class="btn small" data-act="lock-order">Keep this order</button>` : "");
        if (rv) h += `<p class="fix"><b>Correct order:</b> ${it.steps.map((s, i) => `${i + 1}. ${md(s)}`).join(" → ")}</p>`;
        break;
      }
      case "match": {
        const map = r.map || {};
        h += `<p class="inst">Match each item on the left.</p><div class="pairs">` + it.pairs.map((p, i) => {
          const st = rv ? (map[i] === i ? "key" : "wrong") : "";
          return `<div class="pair ${st}"><span class="pl">${md(p[0])}</span><select data-in="match" data-i="${i}" ${rv ? "disabled" : ""} aria-label="Match for ${esc(p[0])}"><option value="">Choose…</option>${ctx.view.right.map(ri => `<option value="${ri}" ${map[i] === ri ? "selected" : ""}>${esc(it.pairs[ri][1])}</option>`).join("")}</select>${rv && map[i] !== i ? `<span class="why">Correct: ${md(p[1])}</span>` : ""}</div>`;
        }).join("") + `</div>`;
        break;
      }
      case "sort": {
        const map = r.map || {};
        h += `<p class="inst">Sort each item into a group.</p><div class="pairs">` + ctx.view.opt.map(ii => {
          const x = it.items[ii], st = rv ? (map[ii] === x[1] ? "key" : "wrong") : "";
          return `<div class="pair ${st}"><span class="pl">${md(x[0])}</span><select data-in="sort" data-i="${ii}" ${rv ? "disabled" : ""} aria-label="Group for ${esc(x[0])}"><option value="">Choose…</option>${it.groups.map(g => `<option ${map[ii] === g ? "selected" : ""}>${esc(g)}</option>`).join("")}</select>${rv && map[ii] !== x[1] ? `<span class="why">Correct: ${esc(x[1])}</span>` : ""}</div>`;
        }).join("") + `</div>`;
        break;
      }
      case "num": {
        const vals = r.vals || [];
        h += `<div class="nums">` + it.fields.map((f, i) => {
          const st = rv ? (ctx.g && ctx.g.parts && ctx.g.parts[i] ? "key" : "wrong") : "";
          return `<label class="numf ${st}"><span>${esc(f.label)}</span><input type="text" inputmode="decimal" autocomplete="off" data-in="num" data-i="${i}" value="${esc(vals[i] || "")}" ${rv ? "disabled" : ""}>${f.unit ? `<em>${esc(f.unit)}</em>` : ""}${rv ? `<span class="why">Answer: ${f.answer}${f.tol ? " (±" + f.tol + ")" : ""}</span>` : ""}</label>`;
        }).join("") + `</div>`;
        if (it.caCheck && rv) {
          const a = it.caCheck.thirty, c = it.caCheck.calendar;
          if (a.join() !== c.join()) h += `<p class="fix">Calendar-month borrowing would give ${c[0]};${c[1]}.${c[2]}. The item states the 30-day convention.</p>`;
        }
        break;
      }
      case "hotspot": {
        h += `<p class="inst">Click or tap the region. Keyboard: Tab to a region, Enter to select.</p>` +
          V.render(it.visual, { mode: "hotspot", selected: r.zone, view: ctx.view, reveal: rv ? { answer: it.answer, chosen: r.zone } : null }) +
          `<p class="selnote" aria-live="polite">${r.zone ? "Selected: " + esc(rv ? zoneName(it, r.zone) : "region " + zoneIndex(it, r.zone, ctx.view)) : "No region selected"}</p>`;
        if (rv && r.zone && r.zone !== it.answer && it.zoneWhy && it.zoneWhy[r.zone]) h += `<p class="fix"><b>Why not ${esc(zoneName(it, r.zone))}:</b> ${md(it.zoneWhy[r.zone])}</p>`;
        if (rv) h += `<p class="fix"><b>Answer:</b> ${esc(zoneName(it, it.answer))}</p>`;
        break;
      }
      case "teach": {
        h += `<textarea data-in="teach" rows="5" placeholder="Explain it as if to a classmate, then reveal the rubric.">${esc(r.text || "")}</textarea>`;
        if (r.shown || rv) h += `<ul class="rubric">${it.rubric.map(x => `<li>${md(x)}</li>`).join("")}</ul>`;
        break;
      }
    }
    return h;
  }
  function zoneName(it, z) {
    if (it.visual === "bell") return (V.BANDS.find(b => b[0] === z) || [z, 0, 0, z])[3];
    if (it.visual === "oral") return (V.ORAL.find(o => o[0] === z) || [z, z])[1];
    if (it.visual === "occlusion") return { c1: "Class I", c2: "Class II", c3: "Class III" }[z] || z;
    return z;
  }
  function zoneIndex(it, z, view) {
    if (it.visual === "bell") return V.BANDS.findIndex(b => b[0] === z) + 1;
    if (it.visual === "oral") return V.ORAL.findIndex(o => o[0] === z) + 1;
    if (it.visual === "occlusion") return "ABC"[((view && view.panels) || ["c1", "c2", "c3"]).indexOf(z)];
    return z;
  }
  function explainHTML(it, g) {
    return `<div class="explain"><p>${md(it.explain)}</p><p class="src">${evBadge(it.ev)} ${srcText(it.src)}</p></div>`;
  }
  // Update a response object from an input event. Returns true if a re-render is needed.
  function applyInput(it, resp, el) {
    const k = el.dataset.in;
    if (k === "mc") resp.choice = +el.value;
    else if (k === "tf") resp.choice = el.value === "true";
    else if (k === "multi") { const s = new Set(resp.choices || []); el.checked ? s.add(+el.value) : s.delete(+el.value); resp.choices = [...s].sort((a, b) => a - b); }
    else if (k === "match") { resp.map = resp.map || {}; if (el.value === "") delete resp.map[el.dataset.i]; else resp.map[el.dataset.i] = +el.value; }
    else if (k === "sort") { resp.map = resp.map || {}; if (el.value === "") delete resp.map[el.dataset.i]; else resp.map[el.dataset.i] = el.value; }
    else if (k === "num") { resp.vals = resp.vals || it.fields.map(() => ""); resp.vals[+el.dataset.i] = el.value; }
    else if (k === "teach") resp.text = el.value;
    return false;
  }
  function markChosen(container, el) {
    if (el.type === "radio") container.querySelectorAll(`input[name="${el.name}"]`).forEach(x => x.closest(".opt").classList.toggle("chosen", x.checked));
    if (el.type === "checkbox") el.closest(".opt").classList.toggle("chosen", el.checked);
  }

  /* ================= PRACTICE ================= */
  function startPractice(label, items, size, includeTeach) {
    let pool = items.filter(i => i.type !== "teach");
    const plan = E.planSession(pool, { size: size || 20, history: Object.fromEntries(Object.entries(S.items).map(([k, v]) => [k, { lastOk: v.lastOk }])) });
    if (includeTeach) items.filter(i => i.type === "teach").slice(0, 1).forEach(t => plan.push({ id: t.id, rep: 0 }));
    if (!plan.length) { showToast("No questions match that choice yet."); return; }
    const views = {}; plan.forEach(q => { views[q.id] = E.makeView(ITEMS[q.id]); });
    S.practice = { label, queue: plan, pos: 0, views, cur: null, log: [], startedAt: nowISO() };
    save(); go("#/practice/run");
  }
  function vPractice(p) {
    if (p[0] === "run") return vPracticeRun();
    const pr = S.practice;
    const weak = Object.keys(CONC).filter(c => ["misconception", "review", "learning", "provisional"].includes(cstat(c)));
    app.innerHTML = `<h1>Practice</h1><p class="lede">Retrieval with feedback. Choose a scope; the queue interleaves concepts and puts questions you have missed or not seen first.</p>
    ${pr ? `<div class="card resume"><p>Session in progress: <b>${esc(pr.label)}</b> · item ${Math.min(pr.pos + 1, pr.queue.length)} of ${pr.queue.length}</p><a class="btn primary" href="#/practice/run">Resume</a> <button class="btn" data-act="end-practice">End it</button></div>` : ""}
    <div class="card"><h2>Quick starts</h2><div class="btnrow">
      <button class="btn primary" data-act="pq" data-q="mixed">Mixed · all modules</button>
      <button class="btn" data-act="pq" data-q="weak" ${weak.length ? "" : "disabled"}>Weak spots (${weak.length} concepts)</button>
      <button class="btn" data-act="pq" data-q="unseen">Unseen questions</button>
      <button class="btn" data-act="pq" data-q="numbers">Numbers drill</button>
      <button class="btn" data-act="pq" data-q="visual">Visual ID drill</button>
    </div>
    <label class="inline">Session length <select id="psize"><option>10</option><option selected>20</option><option>30</option><option>50</option></select></label></div>
    <div class="card"><h2>By module</h2><form id="pmods" class="modpick">${D.modules.map(m => { const mm = moduleMastery(m); return `<label><input type="checkbox" value="${m.id}"> <span>${m.number}. ${esc(m.title)}</span> <small>${mm.k}/${mm.n}</small></label>`; }).join("")}</form>
      <button class="btn primary" data-act="pmods">Start with selected modules</button></div>`;
  }
  function quickItems(q) {
    if (q === "mixed") return ["Mixed · all modules", PRACTICE];
    if (q === "weak") { const set = new Set(Object.keys(CONC).filter(c => ["misconception", "review", "learning", "provisional"].includes(cstat(c)))); return ["Weak spots", PRACTICE.filter(i => set.has(i.concept))]; }
    if (q === "unseen") return ["Unseen questions", PRACTICE.filter(i => !S.items[i.id])];
    if (q === "numbers") return ["Numbers drill", PRACTICE.filter(i => i.type === "num" || i.module === "m18" || i.concept === "m7-bands")];
    if (q === "visual") return ["Visual ID drill", PRACTICE.filter(i => i.type === "hotspot")];
    return ["Practice", PRACTICE];
  }
  function vPracticeRun() {
    const pr = S.practice;
    if (!pr) return go("#/practice");
    if (pr.pos >= pr.queue.length) return practiceSummary();
    const q = pr.queue[pr.pos], it = ITEMS[q.id];
    if (!pr.views[q.id]) pr.views[q.id] = E.makeView(it);
    pr.cur = pr.cur && pr.cur.id === q.id && pr.cur.pos === pr.pos ? pr.cur : { id: q.id, pos: pr.pos, resp: {}, conf: null, hint: false, checked: false };
    const c = pr.cur, g = c.checked ? E.grade(it, c.resp) : null;
    const caseHTML = it.case && D.cases[it.case] ? `<details class="case" open><summary>${esc(D.cases[it.case].title)}</summary><p>${md(D.cases[it.case].text)}</p></details>` : "";
    app.innerHTML = `<nav class="crumbs"><a href="#/practice">Practice</a> › ${esc(pr.label)}</nav>
    <div class="runhead"><span>Item ${pr.pos + 1} of ${pr.queue.length}${q.rep ? ` · <b class="rep">returning miss</b>` : ""}</span><div class="bar"><i style="width:${pct(pr.pos, pr.queue.length)}%"></i></div></div>
    <article class="q card" data-item="${it.id}">
      <p class="qmeta"><a href="#/guide/${it.module}">Module ${MODS[it.module].number}</a> · ${esc(CONC[it.concept].label)} <span class="chip st-${cstat(it.concept)}">${esc(STATUS_LABEL[cstat(it.concept)])}</span></p>
      <h1 class="sr">Practice question</h1>
      ${caseHTML}
      <div class="qbody">${itemHTML(it, { name: "pq", resp: c.resp, view: pr.views[q.id], reveal: c.checked, g, allWhy: c.checked })}</div>
      ${!c.checked && it.type !== "teach" ? `
        <div class="conf" role="radiogroup" aria-label="Confidence"><span>Confidence</span>${["low", "medium", "high"].map(v => `<button class="seg ${c.conf === v ? "on" : ""}" data-act="conf" data-v="${v}" aria-pressed="${c.conf === v}" ${c.hint && v !== "low" ? "disabled" : ""}>${v[0].toUpperCase() + v.slice(1)}</button>`).join("")}</div>
        ${c.hint ? `<p class="hint">Hint: ${md(it.hint)}</p>` : `<button class="btn ghost small" data-act="hint">Show hint (records as Low)</button>`}
        <div class="btnrow"><button class="btn primary" data-act="check" ${E.isAnswered(it, c.resp) && c.conf ? "" : "disabled"}>Check</button><button class="btn ghost" data-act="skip">Skip</button></div>
        <p class="muted small">${!E.isAnswered(it, c.resp) ? "Answer first." : !c.conf ? "Pick your confidence to enable Check." : "Enter also checks."}</p>` : ""}
      ${!c.checked && it.type === "teach" ? `<div class="btnrow">${c.resp.shown ? ["got", "partial", "missed"].map(v => `<button class="btn" data-act="teach-rate" data-v="${v}">${{ got: "Hit every point", partial: "Partly", missed: "Missed it" }[v]}</button>`).join("") : `<button class="btn primary" data-act="teach-show">Reveal rubric</button>`}</div><p class="muted small">Teach-back is self-rated and does not change mastery.</p>` : ""}
      ${c.checked ? `<div class="verdict ${it.type === "teach" ? "neutral" : g.ok ? "ok" : "no"}" role="status">${it.type === "teach" ? "Self-rated: " + esc(c.resp.self) : g.ok ? "Correct" : "Not quite"}${c.requeued ? ` <small>· this question returns after ${c.requeued} others</small>` : ""}${c.becameMastered ? ` <small>· concept mastered</small>` : ""}${c.flaggedMis ? ` <small>· flagged as a misconception (wrong at high confidence)</small>` : ""}</div>
        ${explainHTML(it, g)}
        <div class="btnrow"><button class="btn primary" data-act="next">Next →</button></div>` : ""}
    </article>`;
  }
  function practiceCheck() {
    const pr = S.practice, c = pr.cur, it = ITEMS[c.id], q = pr.queue[pr.pos];
    if (!E.isAnswered(it, c.resp) || !c.conf) return;
    const g = E.grade(it, c.resp), conf = c.hint ? "low" : c.conf;
    const before = cstat(it.concept);
    record(it.id, g.ok, conf, "practice");
    const after = cstat(it.concept);
    const rq = E.requeue(pr.queue, pr.pos, q, g.ok, conf);
    pr.queue = rq.queue;
    c.checked = true; c.requeued = rq.inserted >= 0 ? rq.inserted - pr.pos - 1 : 0;
    c.becameMastered = before !== "mastered" && after === "mastered";
    c.flaggedMis = after === "misconception" && before !== "misconception";
    pr.log.push({ id: it.id, ok: g.ok, conf, rep: q.rep || 0 });
    save(); app.dataset.keepFocus = "1"; vPracticeRun();
    const v = app.querySelector(".verdict"); if (v) { v.setAttribute("tabindex", "-1"); v.focus(); }
  }
  function practiceSummary() {
    const pr = S.practice, first = pr.log.filter(x => !x.rep), ok = first.filter(x => x.ok).length;
    const concepts = [...new Set(pr.log.map(x => ITEMS[x.id].concept))];
    const missed = [...new Set(pr.log.filter(x => !x.ok).map(x => x.id))];
    app.innerHTML = `<h1>Session complete</h1>
      <div class="grid3"><div class="card stat"><b>${ok}<small>/${first.length}</small></b><span>right on first try</span></div>
      <div class="card stat"><b>${pr.log.length - first.length}</b><span>returning misses answered</span></div>
      <div class="card stat"><b>${concepts.filter(c => cstat(c) === "mastered").length}<small>/${concepts.length}</small></b><span>concepts touched now mastered</span></div></div>
      <div class="card"><h2>Concepts in this session</h2><ul class="clist">${concepts.map(c => `<li><span class="chip st-${cstat(c)}">${esc(STATUS_LABEL[cstat(c)])}</span> ${esc(CONC[c].label)}</li>`).join("")}</ul>
      <div class="btnrow">${missed.length ? `<button class="btn primary" data-act="redo-missed">Drill the ${missed.length} missed question${missed.length > 1 ? "s" : ""} again</button>` : ""}<button class="btn" data-act="end-practice">Done</button></div></div>`;
    app.dataset.missed = JSON.stringify(missed);
  }

  /* ================= EXAMS ================= */
  const examBlurb = x => x.blurb.replace(/Feedback (?:is )?withheld until you submit\./g, "Feedback appears after each answer.");
  function vExams() {
    app.innerHTML = `<h1>Exams</h1><p class="lede">Timed practice with immediate feedback on each question. The practice exams copy the <b>historical</b> COMD 4382 Test 2 shape (20 T/F × 2 + 20 MC × 3 = 100) from her prior course. That shape is a training format, not a claim about this course's exams, which the package does not describe.</p>
      <div class="grid2">${D.exams.map(x => { const e = S.exams[x.id] || {}, a = e.attempts || []; const best = a.length ? a.reduce((p, c) => c.pct > p.pct ? c : p) : null; return `
      <div class="card exam"><p class="kicker">${x.kind === "mock" ? "Practice exam · 40 questions · 100 points" : "Boss drill · 25 case questions"} · ${x.minutes} min</p><h2>${esc(x.title)}</h2><p>${esc(examBlurb(x))}</p>
        <p class="muted">${a.length ? `${a.length} attempt${a.length > 1 ? "s" : ""} · best ${x.weights ? best.points + "/" + best.max : best.pct + "%"} · last ${fmtDate(a[a.length - 1].at)}` : "Not attempted"}</p>
        <div class="btnrow">${e.active ? `<a class="btn primary" href="#/exam/${x.id}">Resume</a><button class="btn ghost" data-act="discard-exam" data-x="${x.id}">Discard attempt</button>` : `<button class="btn primary" data-act="start-exam" data-x="${x.id}">${a.length ? "Retake" : "Start"}</button>`}
        ${a.length ? `<a class="btn" href="#/results/${x.id}/${a.length - 1}">Last results</a>` : ""}</div>
        ${a.length && !e.active ? `<p class="muted small">Retakes reuse the same 40 questions with new option order. Scores on a retake overstate readiness.</p>` : ""}</div>`; }).join("")}</div>`;
  }
  function startExam(id) {
    const x = EXAMS[id];
    let order;
    if (x.kind === "mock") {
      const tf = x.items.filter(i => ITEMS[i].type === "tf"), mc = x.items.filter(i => ITEMS[i].type !== "tf");
      order = E.shuffle(tf).concat(E.shuffle(mc));
    } else {
      const cases = []; x.items.forEach(i => { const c = ITEMS[i].case || ""; if (!cases.includes(c)) cases.push(c); });
      order = cases.flatMap(c => x.items.filter(i => (ITEMS[i].case || "") === c));
    }
    const views = {}; order.forEach(i => { views[i] = E.makeView(ITEMS[i]); });
    S.exams[id] = S.exams[id] || { attempts: [] };
    S.exams[id].active = { order, views, answers: {}, conf: {}, flags: {}, checked: {}, recorded: {}, idx: 0, startedAt: nowISO(), elapsed: 0 };
    save(); go("#/exam/" + id);
  }
  let timerH = null;
  function stopTimer() { if (timerH) { clearInterval(timerH); timerH = null; } }
  function vExam(p) {
    const x = EXAMS[p[0]]; if (!x) return go("#/exams");
    const e = S.exams[x.id]; if (!e || !e.active) return go("#/exams");
    const A = e.active, id = A.order[A.idx], it = ITEMS[id];
    A.checked = A.checked || {}; A.recorded = A.recorded || {};
    const checked = !!A.checked[id], grade = checked ? E.grade(it, A.answers[id]) : null;
    const answered = A.order.filter(i => E.isAnswered(ITEMS[i], A.answers[i])).length;
    const caseObj = it.case && D.cases[it.case];
    app.innerHTML = `<div class="examhead"><div><p class="kicker">${esc(x.title)}</p><h1 class="h1s">Question ${A.idx + 1} of ${A.order.length}</h1></div>
      <div class="timer" id="timer" aria-live="off"></div></div>
      <div class="navgrid" aria-label="Question navigator">${A.order.map((i, k) => `<button class="nq ${k === A.idx ? "cur" : ""} ${E.isAnswered(ITEMS[i], A.answers[i]) ? "ans" : ""} ${A.flags[i] ? "flg" : ""}" data-act="goq" data-k="${k}" aria-label="Question ${k + 1}${E.isAnswered(ITEMS[i], A.answers[i]) ? ", answered" : ""}${A.flags[i] ? ", flagged" : ""}">${k + 1}</button>`).join("")}</div>
      <p class="muted small">${answered}/${A.order.length} answered · ${Object.values(A.flags).filter(Boolean).length} flagged · ${x.weights ? "T/F 2 pts, MC 3 pts" : "scored by accuracy"}</p>
      <article class="q card" data-item="${id}">
        ${caseObj ? `<details class="case" ${A.caseClosed ? "" : "open"}><summary>Case: ${esc(caseObj.title)}</summary><p>${md(caseObj.text)}</p></details>` : ""}
        <p class="qmeta">${it.type === "tf" ? "True / False · 2 points" : x.weights ? "Multiple choice · 3 points" : esc(it.type === "mc" ? "Multiple choice" : it.type === "multi" ? "Select all" : it.type === "num" ? "Calculation" : it.type === "order" ? "Sequence" : it.type === "hotspot" ? "Visual" : it.type)}</p>
        <div class="qbody">${itemHTML(it, { name: "xq", resp: A.answers[id], view: A.views[id], reveal: checked, g: grade, allWhy: true, exam: true })}</div>
        ${checked ? `<div class="verdict ${grade.ok ? "ok" : "no"}" role="status">${grade.ok ? "Correct" : "Not quite"} · first response saved</div>${explainHTML(it, grade)}` : `<div class="btnrow"><button class="btn primary" data-act="check-exam" ${E.isAnswered(it, A.answers[id]) ? "" : "disabled"}>Check answer</button><span class="small muted">Choose a single answer for immediate feedback; finish all parts before checking other questions.</span></div>`}
        <div class="conf small" role="radiogroup" aria-label="Confidence (optional)"><span>Confidence (optional)</span>${["low", "medium", "high"].map(v => `<button class="seg ${A.conf[id] === v ? "on" : ""}" data-act="xconf" data-v="${v}" ${checked ? "disabled" : ""} aria-pressed="${A.conf[id] === v}">${v[0].toUpperCase() + v.slice(1)}</button>`).join("")}</div>
        <div class="btnrow spread"><button class="btn" data-act="prevq" ${A.idx === 0 ? "disabled" : ""}>← Previous</button>
          <button class="btn ghost ${A.flags[id] ? "on" : ""}" data-act="flag" aria-pressed="${!!A.flags[id]}">${A.flags[id] ? "Flagged" : "Flag for review"}</button>
          ${A.idx < A.order.length - 1 ? `<button class="btn primary" data-act="nextq">Next →</button>` : `<button class="btn primary" data-act="submit-exam">Review & submit</button>`}</div>
      </article>
      <div class="btnrow"><button class="btn" data-act="submit-exam">Submit exam</button><a class="btn ghost" href="#/exams">Leave (saved)</a></div>`;
    const tick = () => {
      const el = document.getElementById("timer"); if (!el) return stopTimer();
      const rem = x.minutes * 60 - A.elapsed;
      el.textContent = rem >= 0 ? mmss(rem) + " left" : "Time up · +" + mmss(-rem);
      el.classList.toggle("over", rem < 0); el.classList.toggle("low", rem >= 0 && rem < 300);
    };
    tick();
    timerH = setInterval(() => { if (document.visibilityState === "visible") { A.elapsed += 1; if (A.elapsed % 5 === 0) save(); tick(); } }, 1000);
  }
  function checkExamAnswer() {
    const cx = currentCtx();
    if (!cx || cx.kind !== "x" || cx.locked || !E.isAnswered(cx.it, cx.resp)) return false;
    const A = cx.exam.active, id = cx.it.id;
    A.checked = A.checked || {}; A.recorded = A.recorded || {};
    A.checked[id] = true;
    if (!A.recorded[id]) {
      record(id, E.grade(cx.it, cx.resp).ok, A.conf[id] || "medium", cx.x.id);
      A.recorded[id] = true;
    }
    save(); rerender();
    const verdict = app.querySelector(".verdict");
    if (verdict) { verdict.setAttribute("tabindex", "-1"); verdict.focus({ preventScroll: true }); }
    return true;
  }
  async function submitExam(id) {
    const x = EXAMS[id], A = S.exams[id].active;
    const un = A.order.filter(i => !E.isAnswered(ITEMS[i], A.answers[i])).length, fl = Object.values(A.flags).filter(Boolean).length;
    const ch = await modal(`<h2 id="mtitle">Submit ${esc(x.title)}?</h2><p>${un ? `<b>${un} unanswered</b> (scored as wrong). ` : "All questions answered. "}${fl ? `${fl} flagged.` : ""}</p><p>Submitting saves your final score and question review. Unanswered questions count as wrong. Corrections are also available on each question while you work.</p>`,
      [{ label: "Submit", cls: "primary" }, { label: "Keep working" }]);
    if (ch !== 0) return;
    const sc = E.scoreExam({ items: A.order, weights: x.weights }, ITEMS, A.answers);
    // Answered questions count toward mastery (unrated = medium). Blanks are scored wrong but are not treated as retrieval evidence.
    for (const iid of A.order) if (E.isAnswered(ITEMS[iid], A.answers[iid]) && !(A.recorded || {})[iid]) record(iid, E.grade(ITEMS[iid], A.answers[iid]).ok, A.conf[iid] || "medium", id);
    const attempt = { at: nowISO(), startedAt: A.startedAt, elapsed: A.elapsed, points: sc.points, max: sc.max, pct: sc.pct, correct: sc.correct, total: sc.total,
                      order: A.order, views: A.views, answers: A.answers, conf: A.conf, flags: A.flags, dataRev: REV };
    const e = S.exams[id]; e.attempts.push(attempt); if (e.attempts.length > 25) e.attempts = e.attempts.slice(-25);
    e.active = null; save(); stopTimer();
    go("#/results/" + id + "/" + (e.attempts.length - 1));
  }
  function vResults(p) {
    const x = EXAMS[p[0]], e = x && S.exams[x.id], a = e && e.attempts[+p[1]];
    if (!a) return go("#/exams");
    const sc = E.scoreExam({ items: a.order, weights: x.weights }, ITEMS, a.answers);
    const filt = app.dataset.rfilter || "missed";
    const byType = {}; sc.per.forEach(r => { const t = ITEMS[r.id].type === "tf" ? "tf" : "other"; byType[t] = byType[t] || { n: 0, ok: 0, pts: 0, max: 0 }; byType[t].n++; if (r.ok) byType[t].ok++; byType[t].pts += r.pts; byType[t].max += r.max; });
    const conc = Object.entries(sc.byConcept).filter(([, v]) => v.missed.length).sort((u, v) => v[1].missed.length - u[1].missed.length);
    const rows = sc.per.map((r, k) => ({ r, k })).filter(({ r }) => filt === "all" || (filt === "missed" && !r.ok) || (filt === "flagged" && a.flags[r.id]));
    app.innerHTML = `<nav class="crumbs"><a href="#/exams">Exams</a> › Results</nav><h1>${esc(x.title)} · results</h1>
      <p class="muted">${fmtDate(a.at)} · time used ${mmss(a.elapsed)}${a.elapsed > x.minutes * 60 ? " (over the " + x.minutes + "-minute limit)" : ""}${a.dataRev !== REV ? " · taken on an earlier content revision" : ""}</p>
      <div class="grid3"><div class="card stat big"><b>${x.weights ? sc.points + "<small>/" + sc.max + "</small>" : sc.pct + "<small>%</small>"}</b><span>${x.weights ? "points" : "accuracy"} · ${sc.correct}/${sc.total} correct</span></div>
      ${x.weights ? `<div class="card stat"><b>${byType.tf ? byType.tf.ok : 0}<small>/${byType.tf ? byType.tf.n : 0}</small></b><span>True/False · ${byType.tf ? byType.tf.pts : 0} pts</span></div><div class="card stat"><b>${byType.other ? byType.other.ok : 0}<small>/${byType.other ? byType.other.n : 0}</small></b><span>Multiple choice · ${byType.other ? byType.other.pts : 0} pts</span></div>` : `<div class="card stat"><b>${conc.length}</b><span>concepts with misses</span></div>`}</div>
      ${conc.length ? `<div class="card"><h2>Repair by concept</h2><div class="tablewrap"><table><thead><tr><th>Concept</th><th>Missed</th><th>Now</th><th></th></tr></thead><tbody>${conc.map(([c, v]) => `<tr><td>${esc(CONC[c].label)}</td><td>${v.missed.length}/${v.n}</td><td><span class="chip st-${cstat(c)}">${esc(STATUS_LABEL[cstat(c)])}</span></td><td><a href="#/guide/${CONC[c].module}">Reread</a></td></tr>`).join("")}</tbody></table></div>
        <button class="btn primary" data-act="drill-concepts" data-c="${esc(conc.map(([c]) => c).join(","))}">Drill these ${conc.length} concepts (practice bank)</button></div>` : `<div class="card"><p>No misses. The concepts still need practice-bank evidence for mastery on distinct questions.</p></div>`}
      <div class="card"><h2>Question review</h2><div class="seggroup" role="tablist">${["missed", "flagged", "all"].map(f => `<button class="seg ${filt === f ? "on" : ""}" data-act="rfilter" data-f="${f}">${f[0].toUpperCase() + f.slice(1)}</button>`).join("")}</div>
      ${rows.length ? rows.map(({ r, k }) => { const it = ITEMS[r.id], g = E.grade(it, a.answers[r.id]); const cs = it.case && D.cases[it.case]; return `
        <article class="rev ${r.ok ? "ok" : "no"}"><p class="qmeta">Q${k + 1} · ${r.ok ? "Correct" : r.answered ? "Wrong" : "Unanswered"} · ${r.pts}/${r.max} · ${esc(CONC[it.concept].label)}${a.flags[r.id] ? " · flagged" : ""}${a.conf[r.id] ? " · confidence " + a.conf[r.id] : ""}</p>
        ${cs ? `<p class="muted small">Case: ${esc(cs.title)}</p>` : ""}
        ${itemHTML(it, { name: "r" + k, resp: a.answers[r.id] || {}, view: a.views[r.id], reveal: true, g, allWhy: false })}${explainHTML(it, g)}</article>`; }).join("") : `<p class="muted">Nothing in this filter.</p>`}</div>
      <div class="btnrow"><button class="btn primary" data-act="start-exam" data-x="${x.id}">Retake</button><a class="btn" href="#/exams">All exams</a></div>`;
  }

  /* ================= REVIEW ================= */
  function vReview() {
    const groups = ["misconception", "review", "provisional", "learning", "new", "mastered"];
    const byS = {}; Object.keys(CONC).forEach(c => { (byS[cstat(c)] = byS[cstat(c)] || []).push(c); });
    const due = (byS.misconception || []).concat(byS.review || []);
    app.innerHTML = `<h1>Review & repair</h1><p class="lede">Concepts sorted by what is broken. Misconceptions first: you were sure, and wrong.</p>
      <div class="btnrow"><button class="btn primary" data-act="drill-concepts" data-c="${due.join(",")}" ${due.length ? "" : "disabled"}>Drill everything due (${due.length})</button><button class="btn" data-act="drill-selected">Drill selected</button></div>
      <form id="revform">${groups.filter(g => byS[g]).map(g => `<div class="card"><h2><span class="chip st-${g}">${esc(STATUS_LABEL[g])}</span> ${byS[g].length}</h2>
        <ul class="clist">${byS[g].map(c => { const cs = S.concepts[c] || {}; return `<li><label><input type="checkbox" value="${c}" ${["misconception", "review"].includes(g) ? "checked" : ""}> ${esc(CONC[c].label)}</label> <small class="muted">M${MODS[CONC[c].module].number}${cs.attempts ? ` · ${cs.correct}/${cs.attempts} correct · streak ${cs.streak}` : ""}</small> <a href="#/guide/${CONC[c].module}">reread</a></li>`; }).join("")}</ul></div>`).join("")}</form>`;
  }

  /* ================= TOOLS ================= */
  function vTools() {
    app.innerHTML = `<h1>Tools</h1><p class="lede">Calculators that follow her conventions. Use them to check your hand work, not to replace it on the test.</p>
    <div class="card tool" id="t-bell"><h2>Score explorer</h2><div class="row"><label>Score <input id="tb-v" type="text" inputmode="decimal" value="78"></label>
      <label>Scale <select id="tb-s"><option value="standard">Standard (100/15)</option><option value="scaled">Scaled (10/3)</option><option value="z">z (0/1)</option><option value="stanine">Stanine (5/2)</option></select></label></div>
      <div id="tb-out" aria-live="polite"></div><div id="tb-viz"></div>
      <p class="src">${evBadge("slide")} Week 2 slides 17-18 (bands, anchors). Percentile is the normal-curve approximation; a real test's norm table rules.</p></div>
    <div class="card tool"><h2>Chronological age</h2><div class="row"><label>Date of birth <input id="ca-b" type="date" value="2019-08-20"></label><label>Test date <input id="ca-t" type="date" value="2026-03-05"></label></div>
      <div id="ca-out" aria-live="polite"></div><p class="src">${evBadge("textbook")} Textbook: borrow 30 or 31 days depending on the month. ${evBadge("historical")} Her COMD 4382 key borrowed 30. Current slides do not specify; state your convention.</p></div>
    <div class="card tool"><h2>Adjusted age (prematurity)</h2><div class="row"><label>Chronological age (months) <input id="aa-c" type="text" inputmode="decimal" value="8"></label><label>Weeks premature <input id="aa-w" type="text" inputmode="decimal" value="8"></label></div>
      <div id="aa-out" aria-live="polite"></div><p class="src">${evBadge("slide")} Week 2 CA slides (8 weeks early = 2 months). ${evBadge("textbook")} Generally not adjusted past about age 3. Weeks → months here uses 4 weeks per month, matching her example.</p></div>
    <div class="card tool"><h2>Speech rate</h2><div class="row"><label>Words <input id="wr-w" type="text" inputmode="decimal" value="220"></label><label>Seconds <input id="wr-s" type="text" inputmode="decimal" value="100"></label></div>
      <div id="wr-out" aria-live="polite"></div><p class="src">${evBadge("slide")} Week 4: words ÷ seconds × 60 = words per minute.</p></div>
    <div class="card tool"><h2>TRMR</h2><div class="row"><label>Opening with tongue tip up (mm) <input id="tr-u" type="text" inputmode="decimal" value="18"></label><label>Maximum opening (mm) <input id="tr-m" type="text" inputmode="decimal" value="40"></label></div>
      <div id="tr-out" aria-live="polite"></div><p class="src">${evBadge("video")} Assigned OPE video presenter: &gt;80% typical, 50-80% mild, &lt;50% moderate-severe restriction.</p></div>`;
    const num = id => E.parseNum(document.getElementById(id).value);
    const upd = () => {
      const v = num("tb-v"), sc = document.getElementById("tb-s").value, out = document.getElementById("tb-out");
      if (!isFinite(v)) { out.innerHTML = `<p class="warn">Enter a number.</p>`; document.getElementById("tb-viz").innerHTML = ""; }
      else {
        const ss = E.convert(v, sc, "standard"), z = E.convert(v, sc, "z"), b = E.band(Math.round(ss * 1000) / 1000);
        const pr = E.normCdf(z) * 100;
        out.innerHTML = `<p><b>${E.BAND_LABEL[b] || "?"}</b></p><p>Standard ${+ss.toFixed(2)} · z ${+z.toFixed(2)} · scaled ${+E.convert(v, sc, "scaled").toFixed(2)} · stanine position ${+E.convert(v, sc, "stanine").toFixed(2)} · ≈ ${pr < 1 ? pr.toFixed(2) : Math.round(pr)}th percentile</p>
          ${sc === "stanine" && (v === 4 || v === 6) ? `<p class="warn">Her slide labels stanine 5 average, 7-9 above and 1-3 below; 4 and 6 are not labeled (textbook: 4-6 holds 54%). Flagged, not keyed.</p>` : ""}
          ${!Number.isInteger(ss) && Math.abs(ss - Math.round(ss)) > 1e-9 ? `<p class="muted small">Band uses the exact converted value.</p>` : ""}`;
        const x = 40 + (Math.max(40, Math.min(160, ss)) - 40) * 5;
        document.getElementById("tb-viz").innerHTML = V.render("bell", { mode: "guide", zoom: false, selected: /edge/.test(b) ? null : b }).replace("</svg>", `<line x1="${x}" y1="18" x2="${x}" y2="214" class="marker"/></svg>`);
      }
      const bd = document.getElementById("ca-b").value.split("-").map(Number), td = document.getElementById("ca-t").value.split("-").map(Number);
      const co = document.getElementById("ca-out");
      if (bd.length === 3 && td.length === 3 && bd.every(isFinite) && td.every(isFinite) && document.getElementById("ca-b").value && document.getElementById("ca-t").value) {
        if (new Date(document.getElementById("ca-t").value) < new Date(document.getElementById("ca-b").value)) co.innerHTML = `<p class="warn">Test date is before birth date.</p>`;
        else { const a = E.chronAge(bd, td, 30), c = E.chronAge(bd, td, "calendar"); const same = a.y === c.y && a.m === c.m && a.d === c.d;
          co.innerHTML = `<p>30-day borrowing: <b>${E.fmtAge(a)}</b></p><p>Calendar borrowing: <b>${E.fmtAge(c)}</b></p><p class="${same ? "muted" : "warn"}">${same ? "Both conventions agree for these dates." : "The conventions disagree here. Say which one you used."}</p><p class="muted small">Steps: ${a.steps.length ? esc(a.steps.join("; ")) : "no borrowing needed"}</p>`; }
      } else co.innerHTML = `<p class="warn">Enter both dates.</p>`;
      const ac = num("aa-c"), aw = num("aa-w"), ao = document.getElementById("aa-out");
      ao.innerHTML = isFinite(ac) && isFinite(aw) ? `<p>Adjusted age ≈ <b>${+(ac - aw / 4).toFixed(2)} months</b> (${ac} − ${aw}/4)</p>${ac > 36 ? `<p class="warn">Past about 36 months the textbook says adjustment is generally not used.</p>` : ""}` : `<p class="warn">Enter numbers.</p>`;
      const w = num("wr-w"), s = num("wr-s"), wo = document.getElementById("wr-out");
      wo.innerHTML = isFinite(w) && isFinite(s) && s > 0 ? `<p><b>${+(w / s * 60).toFixed(1)} wpm</b> (${w} ÷ ${s} × 60)</p>` : `<p class="warn">Enter words and a positive number of seconds.</p>`;
      const u = num("tr-u"), mx = num("tr-m"), to = document.getElementById("tr-out");
      if (isFinite(u) && isFinite(mx) && mx > 0) { const r = u / mx * 100; to.innerHTML = `<p><b>${+r.toFixed(1)}%</b> · ${r > 80 ? "typical tongue mobility" : r >= 50 ? "mild restriction" : "moderate to severe restriction"}</p>${r === 80 || r === 50 ? `<p class="muted small">Exactly on a cut line: the presenter's ranges put 80 in 50-80 (mild) and 50 in 50-80.</p>` : ""}`; }
      else to.innerHTML = `<p class="warn">Enter both openings (maximum &gt; 0).</p>`;
    };
    app.querySelectorAll(".tool input, .tool select").forEach(el => el.addEventListener("input", upd));
    upd();
  }

  /* ================= SOURCES ================= */
  function vSources() {
    const cites = {}; D.items.forEach(i => (i.src || []).forEach(s => { cites[s.s] = (cites[s.s] || 0) + 1; }));
    const conflicts = []; D.modules.forEach(m => m.sections.forEach(s => (s.callouts || []).forEach(c => { if (c.k === "conflict") conflicts.push({ m, s, c }); })));
    app.innerHTML = `<h1>Sources & conventions</h1><p class="lede">What the lab is built from, how each claim is labeled, and where the sources disagree.</p>
    <div class="card"><h2>Numerical conventions used everywhere</h2><div class="tablewrap"><table><thead><tr><th>Topic</th><th>Convention in this lab</th><th>Basis</th></tr></thead><tbody>
      <tr><td>Standard score</td><td>Mean 100, SD 15. Average 85-115 inclusive; below average 70-84; significantly below &lt;70; above 116-129; significantly above &gt;130</td><td>Week 2 slides 17-18 (bell-curve image); textbook</td></tr>
      <tr><td>Exactly 70 and 130</td><td>Not assigned to a band; never keyed</td><td>Slide image draws the line without assigning the endpoint</td></tr>
      <tr><td>Scaled / z / stanine</td><td>10/3 · 0/1 · 5/2</td><td>Week 2 slides; textbook</td></tr>
      <tr><td>Percentile anchors</td><td>70≈2nd, 85≈16th, 100=50th, 115≈84th, 130≈98th; "at or below"</td><td>Week 2 slide 18 image</td></tr>
      <tr><td>Confidence intervals</td><td>68% narrower · 90% commonly reported · 95% most used clinically · 99% widest</td><td>Week 2 slides; textbook</td></tr>
      <tr><td>Chronological age</td><td>Items state the convention; 30-day borrow when they differ</td><td>Textbook (30 or 31) vs her COMD 4382 key (30): flagged</td></tr>
      <tr><td>Sample length</td><td>50-100 utterances minimum</td><td>Week 4 slide; textbook ch. 6 (50-100, up to 200)</td></tr>
      <tr><td>DDK</td><td>Method 2 more common; 20 reps per syllable; 10 reps puh-tuh-kuh</td><td>Week 4 slides 6-7</td></tr>
      <tr><td>TRMR</td><td>&gt;80% typical · 50-80% mild · &lt;50% moderate-severe</td><td>Assigned OPE video presenter</td></tr>
      <tr><td>Sensitivity / specificity</td><td>.80 or higher typically sufficient</td><td>Textbook</td></tr>
    </tbody></table></div>
    <p class="muted small">No hearing-loss degree table is used: none appears in this course's package, so none was imported from other courses or generic audiology ranges.</p></div>
    <div class="card"><h2>Flagged conflicts (${conflicts.length})</h2><ul class="conf-list">${conflicts.map(({ m, s, c }) => `<li><a href="#/guide/${m.id}">M${m.number} · ${md(s.h)}</a><p>${md(c.t)}</p></li>`).join("")}</ul></div>
    <div class="card"><h2>Evidence classes</h2><ul class="evlist">${Object.entries(EV_LABEL).filter(([k]) => k !== "admin").map(([k, v]) => `<li>${evBadge(k)} ${{ slide: "Stated on her current-course slides.", lecture: "Said in her recorded lectures (auto-captions; wording can be garbled).", video: "Assigned video content (ASHA TLR videos, OPE video).", assignment: "Her handouts and your submitted assignments.", textbook: "Shipley & McAfee 7e, the assigned text.", historical: "Her prior course (COMD 4382): format and habits, not this course's content.", inference: "The lab's reasoning, labeled so you can discount it.", flag: "Your own Test One screenshot labels: your record of emphasis, not her wording." }[k]}</li>`).join("")}</ul></div>
    <div class="card"><h2>Source files (${Object.keys(D.sources).length})</h2><div class="tablewrap"><table><thead><tr><th>ID</th><th>Source</th><th>Kind</th><th>Questions citing</th></tr></thead><tbody>
      ${Object.entries(D.sources).map(([k, s]) => `<tr><td>${esc(k)}</td><td>${esc(s.label)}<br><small class="muted">${esc(s.path)}</small></td><td>${esc(s.kind)}</td><td>${cites[k] || 0}</td></tr>`).join("")}</tbody></table></div></div>`;
  }

  /* ================= PROGRESS ================= */
  function vProgress() {
    const T = totals(), L = S.legacy && S.legacy.summary;
    app.innerHTML = `<h1>Progress</h1>
    <div class="grid3">${["mastered", "provisional", "misconception", "review", "learning", "new"].map(k => `<div class="card stat"><b>${T.by[k] || 0}</b><span><span class="chip st-${k}">${esc(STATUS_LABEL[k])}</span></span></div>`).join("")}</div>
    <div class="card"><h2>By module</h2><div class="tablewrap"><table><thead><tr><th>Module</th><th>Mastered</th><th>Attempted questions</th></tr></thead><tbody>
      ${D.modules.map(m => { const mm = moduleMastery(m), its = PRACTICE.filter(i => i.module === m.id); return `<tr><td><a href="#/guide/${m.id}">${m.number}. ${esc(m.title)}</a></td><td><div class="bar sm"><i style="width:${pct(mm.k, mm.n)}%"></i></div>${mm.k}/${mm.n}</td><td>${its.filter(i => S.items[i.id]).length}/${its.length}</td></tr>`; }).join("")}</tbody></table></div></div>
    <div class="card"><h2>Exam history</h2>${D.exams.some(x => (S.exams[x.id] || {}).attempts && S.exams[x.id].attempts.length) ? `<div class="tablewrap"><table><thead><tr><th>Exam</th><th>When</th><th>Score</th><th>Time</th><th></th></tr></thead><tbody>
      ${D.exams.flatMap(x => ((S.exams[x.id] || {}).attempts || []).map((a, k) => `<tr><td>${esc(x.title)}</td><td>${fmtDate(a.at)}</td><td>${x.weights ? a.points + "/" + a.max : a.pct + "%"} (${a.correct}/${a.total})</td><td>${mmss(a.elapsed)}</td><td><a href="#/results/${x.id}/${k}">Review</a></td></tr>`)).join("")}</tbody></table></div>` : `<p class="muted">No submitted exams yet.</p>`}</div>
    <div class="card"><h2>Original lab (v1) history</h2>${L ? `<p>Read ${fmtDate(S.legacy.at)} from ${esc(S.legacy.source || "")}. ${L.mastered.length} v1 concept${L.mastered.length === 1 ? "" : "s"} mastered → ${(S.legacy.provisional || []).length} v2 concept${(S.legacy.provisional || []).length === 1 ? "" : "s"} marked <span class="chip st-provisional">${STATUS_LABEL.provisional}</span>. One correct Medium/High answer confirms each.</p>
      ${Object.keys(L.quizBest).length ? `<div class="tablewrap"><table><thead><tr><th>v1 quiz</th><th>Best</th><th>When</th></tr></thead><tbody>${Object.entries(L.quizBest).map(([k, v]) => `<tr><td>${esc(V1_LABELS[k] || k)}</td><td>${v.weighted ? v.weighted.points + "/" + v.weighted.max + " pts" : ""} ${v.score != null ? v.score + "/" + v.total : ""}</td><td>${v.at ? fmtDate(v.at) : ""}</td></tr>`).join("")}</tbody></table></div>` : ""}
      <p class="muted small">v1 scores are shown as history only. v1 questions were rewritten, so v1 scores do not count toward v2 exams. The original records were never modified.</p>` : `<p class="muted">No v1 progress found in this browser.</p>`}
      <button class="btn small" data-act="rescan-v1">Re-scan this browser for v1 progress</button></div>
    <div class="card"><h2>Backup</h2><p>Progress lives in this browser only. Export regularly. Moving here from the offline lab or another browser? Export there, then import that backup here to restore your answers and unfinished sessions.</p>
      <div class="btnrow"><button class="btn primary" data-act="export">Export progress (.json)</button><button class="btn" data-act="import">Import progress…</button><input type="file" id="importf" accept="application/json,.json" hidden></div>
      <p class="muted small">Imports accept v2 backups and the original lab's backup file (schema comd4756-progress-backup-v1). Your current progress is saved aside first and can be restored.</p>
      ${hasPre() ? `<button class="btn small" data-act="undo-import">Restore progress from before the last import</button>` : ""}</div>
    <div class="card danger"><h2>Reset</h2><p>Clears v2 progress in this browser. v1 records are not touched.</p><button class="btn" data-act="reset">Reset v2 progress…</button></div>
    <p class="muted small">Content revision ${esc(REV)} · ${D.items.length} questions · ${Object.keys(CONC).length} concepts · storage ${storageOK ? "working" : "blocked"}</p>`;
  }
  function hasPre() { try { return !!localStorage.getItem(KEY + "-preimport"); } catch (e) { return false; } }
  function exportProgress() {
    save();
    const out = { schema: BACKUP_SCHEMA, version: 1, course: "COMD 4756", createdAt: nowISO(), dataRev: REV, state: S, v1Raw: readV1Raw() };
    const blob = new Blob([JSON.stringify(out, null, 1)], { type: "application/json" });
    const a = document.createElement("a"); a.href = URL.createObjectURL(blob); a.download = "comd4756-lab-v2-progress-" + nowISO().slice(0, 10) + ".json";
    document.body.appendChild(a); a.click(); a.remove(); setTimeout(() => URL.revokeObjectURL(a.href), 2000);
    showToast("Exported. Keep the file somewhere safe.");
  }
  async function importProgress(file) {
    try {
      if (file.size > 8 * 1024 * 1024) throw new Error("That file is too large to be a lab backup.");
      const data = JSON.parse(await file.text());
      let next;
      if (data && data.schema === BACKUP_SCHEMA) {
        if (!data.state || data.state.schema !== KEY) throw new Error("The backup's progress record is missing or invalid.");
        next = sanitize(data.state);
        if (data.v1Raw && !next.legacy) { const cur = S; S = next; applyLegacy(data.v1Raw, "imported backup"); next = S; S = cur; }
      } else if (data && data.schema === V1_BACKUP) {
        if (!data.storage || typeof data.storage !== "object" || Array.isArray(data.storage)) throw new Error("The v1 backup has no progress records.");
        for (const v of Object.values(data.storage)) if (!(v === null || typeof v === "string")) throw new Error("The v1 backup has invalid records.");
        const summary = E.readV1(data.storage); if (!summary.found) throw new Error("The v1 backup contains no progress.");
        next = sanitize(JSON.parse(JSON.stringify(S)));
        const cur = S; S = next; applyLegacy(data.storage, "imported v1 backup"); next = S; S = cur;
      } else throw new Error("Choose a progress backup exported from this lab (v2) or the original lab (v1).");
      const ch = await modal(`<h2 id="mtitle">Replace current progress?</h2><p>The import replaces this browser's v2 progress. Your current progress is kept aside and can be restored from this page.</p>`, [{ label: "Import", cls: "primary" }, { label: "Cancel" }]);
      if (ch !== 0) return;
      try { localStorage.setItem(KEY + "-preimport", JSON.stringify(S)); } catch (e) { /* ignore */ }
      S = next; save(); showToast("Progress imported."); route();
    } catch (err) { showToast(err instanceof SyntaxError ? "That file is not valid JSON." : err.message, true); }
  }

  /* ================= events ================= */
  function currentCtx() {
    const top = (location.hash.replace(/^#\/?/, "").split("/")[0]) || "";
    if (top === "practice" && S.practice && S.practice.cur) return { kind: "p", it: ITEMS[S.practice.cur.id], resp: S.practice.cur.resp, view: S.practice.views[S.practice.cur.id], locked: S.practice.cur.checked };
    if (top === "exam") { const id = location.hash.split("/")[2], e = S.exams[id]; if (e && e.active) { const iid = e.active.order[e.active.idx]; e.active.answers[iid] = e.active.answers[iid] || {}; return { kind: "x", it: ITEMS[iid], resp: e.active.answers[iid], view: e.active.views[iid], locked: !!(e.active.checked || {})[iid], exam: e, x: EXAMS[id] }; } }
    return null;
  }
  function rerender() { app.dataset.keepFocus = "1"; const y = window.scrollY; route(); window.scrollTo(0, y); }
  function refreshPracticeControls() {
    const c = S.practice && S.practice.cur; if (!c) return;
    const it = ITEMS[c.id], btn = app.querySelector('[data-act="check"]'), ok = E.isAnswered(it, c.resp) && c.conf;
    if (btn) btn.disabled = !ok;
    const note = btn && btn.parentElement.nextElementSibling;
    if (note) note.textContent = !E.isAnswered(it, c.resp) ? "Answer first." : !c.conf ? "Pick your confidence to enable Check." : "Enter also checks.";
  }
  function refreshNav() {
    const cx = currentCtx(); if (!cx || cx.kind !== "x") return;
    const A = cx.exam.active, k = A.idx, b = app.querySelector(`.nq[data-k="${k}"]`);
    if (b) b.classList.toggle("ans", E.isAnswered(cx.it, cx.resp));
    const check = app.querySelector('[data-act="check-exam"]');
    if (check) check.disabled = !E.isAnswered(cx.it, cx.resp);
  }
  app.addEventListener("change", e => {
    const el = e.target; if (!el.dataset || !el.dataset.in) return;
    const cx = currentCtx(); if (!cx || cx.locked) return;
    applyInput(cx.it, cx.resp, el); markChosen(app, el); save();
    if (cx.kind === "p") refreshPracticeControls();
    else if (["mc", "tf"].includes(cx.it.type)) checkExamAnswer();
    else refreshNav();
  });
  app.addEventListener("input", e => {
    const el = e.target; if (!el.dataset || !["num", "teach"].includes(el.dataset.in)) return;
    const cx = currentCtx(); if (!cx || cx.locked) return;
    applyInput(cx.it, cx.resp, el); save();
    if (cx.kind === "p") refreshPracticeControls(); else refreshNav();
  });
  function pickZone(z) {
    const cx = currentCtx(); if (!cx || cx.locked) return;
    cx.resp.zone = z; save(); if (cx.kind === "x") checkExamAnswer(); else rerender();
    const el = app.querySelector(`.zone[data-zone="${z}"]`); if (el) el.focus();
  }
  app.addEventListener("keydown", e => {
    const z = e.target.closest && e.target.closest(".zone");
    if (z && (e.key === "Enter" || e.key === " ") && app.querySelector(".q")) { e.preventDefault(); pickZone(z.dataset.zone); return; }
    if (e.key === "Enter" && !e.target.matches("textarea, button, a, select")) {
      const ch = app.querySelector('[data-act="check"]:not([disabled])'), nx = app.querySelector('[data-act="next"]');
      if (ch) { e.preventDefault(); practiceCheck(); } else if (nx) { e.preventDefault(); nx.click(); }
    }
  });
  app.addEventListener("click", async e => {
    const z = e.target.closest(".zone");
    if (z && app.querySelector(".q .qbody .vizwrap") && z.closest(".qbody")) { pickZone(z.dataset.zone); return; }
    const b = e.target.closest("[data-act]"); if (!b) return;
    const act = b.dataset.act, cx = currentCtx();
    switch (act) {
      case "practice-module": { const m = MODS[b.dataset.m]; startPractice("Module " + m.number + " · " + m.title, PRACTICE.filter(i => i.module === m.id), 20, true); break; }
      case "pq": { const [label, items] = quickItems(b.dataset.q); startPractice(label, items, +document.getElementById("psize").value); break; }
      case "pmods": { const ms = [...document.querySelectorAll("#pmods input:checked")].map(x => x.value); if (!ms.length) return showToast("Tick at least one module."); startPractice(ms.length === 1 ? "Module " + MODS[ms[0]].number + " · " + MODS[ms[0]].title : ms.length + " modules", PRACTICE.filter(i => ms.includes(i.module)), +document.getElementById("psize").value, ms.length === 1); break; }
      case "drill-concepts": { const cs = b.dataset.c.split(",").filter(c => CONC[c]); if (!cs.length) return; startPractice(cs.length === 1 ? CONC[cs[0]].label : "Repair · " + cs.length + " concepts", PRACTICE.filter(i => cs.includes(i.concept)), Math.max(10, Math.min(40, cs.length * 3))); break; }
      case "drill-selected": { const cs = [...document.querySelectorAll("#revform input:checked")].map(x => x.value); if (!cs.length) return showToast("Tick at least one concept."); startPractice("Repair · " + cs.length + " concepts", PRACTICE.filter(i => cs.includes(i.concept)), Math.max(10, Math.min(40, cs.length * 3))); break; }
      case "redo-missed": { const ids = JSON.parse(app.dataset.missed || "[]"); startPractice("Missed questions", ids.map(i => ITEMS[i]), ids.length); break; }
      case "end-practice": S.practice = null; save(); go("#/practice"); break;
      case "conf": if (cx && cx.kind === "p") { S.practice.cur.conf = b.dataset.v; save(); app.querySelectorAll('[data-act="conf"]').forEach(x => { const on = x.dataset.v === b.dataset.v; x.classList.toggle("on", on); x.setAttribute("aria-pressed", on); }); refreshPracticeControls(); } break;
      case "hint": S.practice.cur.hint = true; S.practice.cur.conf = "low"; save(); rerender(); break;
      case "check": practiceCheck(); break;
      case "skip": { const pr = S.practice; const q = pr.queue.splice(pr.pos, 1)[0]; pr.queue.push(q); pr.cur = null; save(); rerender(); break; }
      case "next": S.practice.pos += 1; S.practice.cur = null; save(); route(); break;
      case "teach-show": S.practice.cur.resp.shown = true; save(); rerender(); break;
      case "teach-rate": { const c = S.practice.cur; c.resp.self = b.dataset.v; c.checked = true; S.practice.log.push({ id: c.id, ok: b.dataset.v === "got", conf: "n/a", rep: 0, teach: true }); save(); rerender(); break; }
      case "mv": if (cx && !cx.locked) { const seq = (cx.resp.seq || cx.view.opt).slice(), k = +b.dataset.k, d = +b.dataset.d; [seq[k], seq[k + d]] = [seq[k + d], seq[k]]; cx.resp.seq = seq; save(); rerender(); const nb = app.querySelector(`[data-act="mv"][data-k="${k + d}"][data-d="${d}"]`) || app.querySelector(`[data-act="mv"][data-k="${k + d}"]`); if (nb) nb.focus(); } break;
      case "lock-order": if (cx && !cx.locked) { cx.resp.seq = cx.view.opt.slice(); save(); rerender(); } break;
      case "start-exam": {
        const id = b.dataset.x, e0 = S.exams[id];
        if (e0 && e0.active) { const ch = await modal(`<h2 id="mtitle">An attempt is in progress</h2><p>Resume it, or discard it and start fresh?</p>`, [{ label: "Resume", cls: "primary" }, { label: "Discard and restart" }, { label: "Cancel" }]); if (ch === 0) return go("#/exam/" + id); if (ch !== 1) return; }
        else { const x = EXAMS[id]; const ch = await modal(`<h2 id="mtitle">${esc(x.title)}</h2><p>${esc(examBlurb(x))}</p><p>${x.minutes} minutes. The clock runs only while this page is visible; you can leave and resume. Each answer is checked immediately. Multi-part answers use Check answer. Your first checked response stays scored.</p>`, [{ label: "Begin", cls: "primary" }, { label: "Cancel" }]); if (ch !== 0) return; }
        startExam(id); break;
      }
      case "discard-exam": { const ch = await modal(`<h2 id="mtitle">Discard this attempt?</h2><p>Answers in the unfinished attempt are deleted and nothing is scored.</p>`, [{ label: "Discard", cls: "primary" }, { label: "Cancel" }]); if (ch === 0) { S.exams[b.dataset.x].active = null; save(); route(); } break; }
      case "goq": case "prevq": case "nextq": if (cx && cx.kind === "x") { if (checkExamAnswer()) break; const A = cx.exam.active; A.idx = act === "goq" ? +b.dataset.k : A.idx + (act === "nextq" ? 1 : -1); A.idx = Math.max(0, Math.min(A.order.length - 1, A.idx)); save(); app.dataset.keepFocus = ""; route(); } break;
      case "flag": if (cx && cx.kind === "x") { const A = cx.exam.active, id = A.order[A.idx]; A.flags[id] = !A.flags[id]; save(); rerender(); } break;
      case "xconf": if (cx && cx.kind === "x" && !cx.locked) { const A = cx.exam.active, id = A.order[A.idx]; A.conf[id] = A.conf[id] === b.dataset.v ? undefined : b.dataset.v; save(); rerender(); } break;
      case "check-exam": checkExamAnswer(); break;
      case "submit-exam": if (cx && cx.kind === "x" && !checkExamAnswer()) submitExam(location.hash.split("/")[2]); break;
      case "rfilter": app.dataset.rfilter = b.dataset.f; rerender(); break;
      case "export": exportProgress(); break;
      case "import": { const f = document.getElementById("importf"); f.value = ""; f.onchange = () => { if (f.files[0]) importProgress(f.files[0]); }; f.click(); break; }
      case "undo-import": { try { const pre = localStorage.getItem(KEY + "-preimport"); if (pre) { S = sanitize(JSON.parse(pre)); localStorage.removeItem(KEY + "-preimport"); save(); showToast("Restored."); route(); } } catch (err) { showToast("Could not restore.", true); } break; }
      case "rescan-v1": { const raw = readV1Raw(); if (applyLegacy(raw, "this browser")) { save(); showToast("v1 progress read again."); } else showToast("No v1 progress in this browser."); route(); break; }
      case "reset": { const ch = await modal(`<h2 id="mtitle">Reset all v2 progress?</h2><p>Mastery, practice history and exam attempts in this browser are erased. Export first if you might want them.</p>`, [{ label: "Erase v2 progress", cls: "danger" }, { label: "Cancel" }]); if (ch === 0) { const theme = S.settings.theme; S = fresh(); S.legacy = { checked: true, at: nowISO(), none: true, resetAt: nowISO() }; S.settings.theme = theme; save(); showToast("v2 progress reset."); route(); } break; }
      case "zoom": { await modal(`<h2 id="mtitle" class="sr">Enlarged diagram</h2><div class="zoomview">${V.render(b.dataset.viz, { mode: "guide", zoom: false })}</div>`, [{ label: "Close", cls: "primary" }]); break; }
      case "theme": S.settings.theme = S.settings.theme === "light" ? "dark" : "light"; applyTheme(); save(); break;
    }
  });
  document.addEventListener("visibilitychange", () => { if (document.visibilityState === "hidden") save(); });
  window.addEventListener("pagehide", save);
  function applyTheme() { document.documentElement.dataset.theme = S.settings.theme === "light" ? "light" : "dark"; const t = document.getElementById("themebtn"); if (t) t.textContent = S.settings.theme === "light" ? "Dark" : "Light"; }

  /* ================= boot ================= */
  load();
  const nav = document.querySelector(".nav");
  nav.innerHTML = NAV.map(([r, l]) => `<a href="#/${r}" data-r="${r}">${l}</a>`).join("") + `<button id="themebtn" class="btn ghost small" data-act2="theme">Light</button>`;
  document.getElementById("themebtn").addEventListener("click", () => { S.settings.theme = S.settings.theme === "light" ? "dark" : "light"; applyTheme(); save(); });
  applyTheme();
  window.addEventListener("hashchange", route);
  route();
  window.__DX = { get state() { return S; }, ITEMS, EXAMS, save }; // test hook (read-only use)
})();
