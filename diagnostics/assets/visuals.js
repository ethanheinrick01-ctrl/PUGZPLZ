/* Visuals: SVG/HTML diagram builders. Pure string output; styled by styles.css.
   render(id, opts) opts: {mode:"guide"|"hotspot", selected, reveal:{answer, chosen}, view} */
(function (root) {
  "use strict";
  const E = root.DXE;
  const esc = s => String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  function zoneAttrs(id, label, opts, idx) {
    const cls = ["zone"];
    if (opts.selected === id) cls.push("sel");
    if (opts.reveal) {
      if (id === opts.reveal.answer) cls.push("key");
      else if (id === opts.reveal.chosen) cls.push("wrong");
    }
    const aria = opts.mode === "hotspot" && !opts.reveal ? "Region " + (idx + 1) : label;
    return `class="${cls.join(" ")}" data-zone="${id}" tabindex="0" role="button" aria-pressed="${opts.selected === id}" aria-label="${esc(aria)}"`;
  }

  /* ---------------- Bell curve ---------------- */
  const X = ss => 40 + (ss - 40) * 5;           // SS 40..160 -> x 40..640
  function curveY(ss) { const z = (ss - 100) / 15; return 210 - 165 * Math.exp(-z * z / 2); }
  function curvePath(a, b, close) {
    let d = "";
    for (let s = a; s <= b + 1e-9; s += 0.5) d += (d ? " L" : "M") + X(s).toFixed(1) + " " + curveY(s).toFixed(1);
    if (close) d += ` L${X(b)} 210 L${X(a)} 210 Z`;
    return d;
  }
  const BANDS = [
    ["sigbelow", 40, 70, "Significantly below average", "< 70"],
    ["below", 70, 85, "Below average", "70-84"],
    ["average", 85, 115, "Average", "85-115"],
    ["above", 115, 130, "Above average", "116-129"],
    ["sigabove", 130, 160, "Significantly above average", "> 130"]
  ];
  function bell(opts) {
    const guide = opts.mode !== "hotspot";
    let s = `<svg class="viz bell" viewBox="0 0 680 ${guide ? 330 : 290}" role="img" aria-label="Bell curve with standard score bands">`;
    BANDS.forEach(([id, a, b, label], i) => {
      s += `<g ${zoneAttrs(id, label, opts, i)}><rect x="${X(a)}" y="20" width="${X(b) - X(a)}" height="190" class="zhit"/>` +
           `<path d="${curvePath(a, b, true)}" class="zfill b-${id}"/></g>`;
    });
    s += `<path d="${curvePath(40, 160)}" class="curve"/>`;
    s += `<line x1="40" y1="210" x2="640" y2="210" class="axis"/>`;
    for (const v of [55, 70, 85, 100, 115, 130, 145]) {
      const major = v >= 70 && v <= 130 && v !== 100;
      s += `<line x1="${X(v)}" y1="${major ? 30 : 200}" x2="${X(v)}" y2="214" class="${major ? "cut" : "tick"}"/>`;
      s += `<text x="${X(v)}" y="230" class="lab">${v}</text>`;
    }
    s += `<text x="20" y="230" class="lab small ta-start">SS</text>`;
    const sd = ["-3", "-2", "-1", "0", "+1", "+2", "+3"];
    [55, 70, 85, 100, 115, 130, 145].forEach((v, i) => { s += `<text x="${X(v)}" y="248" class="lab small">${sd[i]} SD</text>`; });
    const sc = { 70: 4, 85: 7, 100: 10, 115: 13, 130: 16 };
    const pr = { 70: "2nd", 85: "16th", 100: "50th", 115: "84th", 130: "98th" };
    for (const v of [70, 85, 100, 115, 130]) {
      s += `<text x="${X(v)}" y="266" class="lab small">scaled ${sc[v]}</text>`;
      s += `<text x="${X(v)}" y="284" class="lab small">${pr[v]} %ile</text>`;
    }
    if (guide) {
      BANDS.forEach(([id, a, b, label, rng]) => {
        const cx = (X(a) + X(b)) / 2, words = label.replace("average", "avg").split(" ");
        s += `<text x="${cx}" y="306" class="lab band-t">${esc(words.length > 2 ? "Sig. " + words.slice(1).join(" ") : label.replace("average", "avg"))}</text>`;
        s += `<text x="${cx}" y="322" class="lab small">${rng}</text>`;
      });
    }
    return s + "</svg>";
  }

  /* ---------------- Oral cavity (frontal, mouth open) ---------------- */
  const ORAL = [
    ["teeth", "Teeth"], ["alveolar", "Alveolar ridge"], ["hardpalate", "Hard palate"], ["rugae", "Rugae"],
    ["softpalate", "Soft palate (velum)"], ["uvula", "Uvula"], ["tonsil", "Tonsils (between the faucial pillars)"], ["tongue", "Tongue"]
  ];
  function oral(opts) {
    const guide = opts.mode !== "hotspot";
    const Z = (id, i, inner) => `<g ${zoneAttrs(id, ORAL.find(z => z[0] === id)[1], opts, i)}>${inner}</g>`;
    let s = `<svg class="viz oral ${guide ? "wide" : ""}" viewBox="0 0 ${guide ? 560 : 420} 380" role="img" aria-label="Oral cavity, frontal view with mouth open">`;
    s += `<ellipse cx="210" cy="190" rx="190" ry="172" class="lip"/><ellipse cx="210" cy="190" rx="165" ry="150" class="cavity"/>`;
    // hard palate dome
    s += Z("hardpalate", 2, `<path d="M70 150 Q70 70 210 62 Q350 70 350 150 L350 172 Q210 160 70 172 Z" class="tissue palate"/>`);
    // alveolar ridge band just behind upper teeth
    s += Z("alveolar", 1, `<path d="M92 100 Q210 62 328 100 L318 114 Q210 82 102 114 Z" class="tissue ridge"/>`);
    // rugae ridges
    let rug = `<path d="M150 112 Q210 92 270 112 L262 148 Q210 136 158 148 Z" class="zhit2"/>`;
    for (let k = 0; k < 4; k++) { const y = 118 + k * 8; rug += `<path d="M${160 + k * 4} ${y} q12 -5 24 0 t24 0 t24 0 t24 0" class="rugae"/>`; }
    s += Z("rugae", 3, rug);
    // soft palate arch
    s += Z("softpalate", 4, `<path d="M80 172 Q210 160 340 172 L338 230 Q300 196 262 200 Q236 202 222 214 L198 214 Q184 202 158 200 Q120 196 82 230 Z" class="tissue velum"/>`);
    // pharynx
    s += `<path d="M140 212 Q210 196 280 212 L292 280 Q210 300 128 280 Z" class="pharynx"/>`;
    // tonsils
    s += Z("tonsil", 6, `<ellipse cx="128" cy="246" rx="22" ry="32" class="tissue tonsil"/><ellipse cx="292" cy="246" rx="22" ry="32" class="tissue tonsil"/>`);
    // uvula
    s += Z("uvula", 5, `<path d="M198 212 Q196 244 210 256 Q224 244 222 212 Z" class="tissue uvula"/>`);
    // tongue
    s += Z("tongue", 7, `<path d="M72 300 Q90 256 210 262 Q330 256 348 300 Q300 338 210 336 Q120 338 72 300 Z" class="tissue tongue"/><path d="M210 272 L210 322" class="midline"/>`);
    // teeth rows
    let t = "";
    for (let k = 0; k < 12; k++) {
      const a = Math.PI * (0.17 + 0.66 * k / 11), cx = 210 - 150 * Math.cos(a), cy = 118 - 62 * Math.sin(a);
      t += `<rect x="${(cx - 10).toFixed(1)}" y="${(cy - 12).toFixed(1)}" width="20" height="22" rx="5" class="tooth"/>`;
      const ly = 298 + 34 * Math.sin(a);
      t += `<rect x="${(cx - 10).toFixed(1)}" y="${(ly - 8).toFixed(1)}" width="20" height="20" rx="5" class="tooth"/>`;
    }
    s += Z("teeth", 0, t);
    if (guide) {
      const L = [["Teeth", 318, 92], ["Alveolar ridge", 290, 104], ["Rugae", 250, 124], ["Hard palate", 320, 150], ["Soft palate", 318, 196],
                 ["Uvula", 214, 244], ["Tonsil", 298, 250], ["Tongue", 280, 300]];
      L.forEach(([n, x, y], k) => { const ly = 60 + k * 38; s += `<path d="M${x} ${y} L430 ${ly} L444 ${ly}" class="leader"/><circle cx="${x}" cy="${y}" r="3" class="ldot"/><text x="450" y="${ly + 4}" class="lab callout ta-start">${n}</text>`; });
    }
    return s + "</svg>";
  }

  /* ---------------- Molar occlusion (side view; front of mouth to the left) ---------------- */
  function molar(x, y, up) {
    // crown with two cusps; up=true => lower molar (cusps point up)
    const w = 70, h = 44, dir = up ? -1 : 1;
    const base = y, tip = y + dir * h;
    return `<path d="M${x} ${base} L${x} ${tip - dir * 16} Q${x + w * 0.25} ${tip + dir * 14} ${x + w * 0.5} ${tip - dir * 16} Q${x + w * 0.75} ${tip + dir * 14} ${x + w} ${tip - dir * 16} L${x + w} ${base} Z" class="molar"/>`;
  }
  const OCC = { c1: 0, c2: -26, c3: 26 }; // upper molar shift relative to lower (negative = toward front/left)
  function occlusion(opts) {
    const guide = opts.mode !== "hotspot";
    const order = (opts.view && opts.view.panels) || ["c1", "c2", "c3"];
    const names = { c1: "Class I", c2: "Class II", c3: "Class III" };
    let s = `<svg class="viz occ" viewBox="0 0 660 230" role="img" aria-label="Three first-molar relationships">`;
    order.forEach((id, i) => {
      const ox = 20 + i * 215, lx = ox + 60, ux = lx + 18 + OCC[id]; // upper cusp (ux+17) sits over lower groove (lx+35) in Class I
      let g = `<rect x="${ox}" y="10" width="200" height="200" rx="12" class="panel"/>`;
      g += `<text x="${ox + 14}" y="34" class="lab ta-start">${guide || opts.reveal ? names[id] : "Panel " + "ABC"[i]}</text>`;
      g += `<text x="${ox + 14}" y="198" class="lab small ta-start">← front of mouth</text>`;
      g += `<text x="${ox + 186}" y="62" class="lab small ta-end">upper 1st molar</text>`;
      g += `<text x="${ox + 186}" y="178" class="lab small ta-end">lower 1st molar</text>`;
      g += molar(ux, 70, false) + molar(lx, 160, true);
      g += `<line x1="${ux + 17}" y1="70" x2="${ux + 17}" y2="118" class="cusp"/><circle cx="${ux + 17}" cy="114" r="3" class="cuspdot"/>`;
      g += `<line x1="${lx + 35}" y1="160" x2="${lx + 35}" y2="126" class="groove"/>`;
      s += `<g ${zoneAttrs(id, names[id], opts, i)}>${g}</g>`;
    });
    return s + `</svg><p class="viz-note">Dot = cusp of the upper first molar; dashed line = groove of the lower first molar. Schematic, not to scale.</p>`;
  }

  /* ---------------- Sensitivity / specificity 2x2 ---------------- */
  function sensspec() {
    return `<div class="viz grid22" role="img" aria-label="Two by two table for sensitivity and specificity">
      <div></div><div class="h">Disorder truly PRESENT</div><div class="h">Disorder truly ABSENT</div>
      <div class="h">Test says disorder</div><div class="c good">True positive</div><div class="c bad">False positive<small>typical child flagged = over-identification</small></div>
      <div class="h">Test says typical</div><div class="c bad">False negative<small>disorder missed = under-identification</small></div><div class="c good">True negative</div>
      <div></div><div class="f">Sensitivity = TP ÷ (TP + FN)<small>of those WITH it, % caught</small></div><div class="f">Specificity = TN ÷ (TN + FP)<small>of those WITHOUT it, % cleared</small></div>
    </div><p class="viz-note">Read down a column: fix the true status first. Textbook benchmark: .80 or higher.</p>`;
  }

  /* ---------------- CA worked example ---------------- */
  function ca() {
    const doe = [2026, 3, 5], dob = [2019, 8, 20];
    const a30 = E.chronAge(dob, doe, 30), ac = E.chronAge(dob, doe, "calendar");
    return `<div class="viz ca-grid" role="img" aria-label="Worked chronological age example">
      <div></div><div class="h">Year</div><div class="h">Month</div><div class="h">Day</div>
      <div class="h">Test date</div><div>2026 → <b>2025</b></div><div>3 → 2 → <b>14</b></div><div>5 → <b>35</b></div>
      <div class="h">Birth date</div><div>− 2019</div><div>− 8</div><div>− 20</div>
      <div class="h">Age</div><div class="r">${a30.y}</div><div class="r">${a30.m}</div><div class="r">${a30.d}</div>
    </div>
    <p class="viz-note">Days first: 5 &lt; 20, so borrow a month (+30 days, 3 → 2). Months: 2 &lt; 8, so borrow a year (+12 months, 2026 → 2025).
    30-day convention: <b>${a30.y};${a30.m}.${a30.d}</b>. Calendar convention (February 2026 has 28 days): <b>${ac.y};${ac.m}.${ac.d}</b>. Same child, two answers: state your convention.</p>`;
  }

  /* ---------------- DDK ---------------- */
  function ddk() {
    return `<div class="viz ddk">
      <div class="card2"><h5>AMR · one syllable</h5><p class="mono">puh-puh-puh… · tuh-tuh-tuh… · kuh-kuh-kuh…</p><p>Method 2: time <b>20 reps</b> of each.</p><p class="small">Bilabial, alveolar, posterior control.</p></div>
      <div class="card2"><h5>SMR · sequence</h5><p class="mono">puh-tuh-kuh ×10</p><p>Method 2: time <b>10 reps</b>. Children: “buttercup”, “pattycake”.</p><p class="small">Sequencing and coordination.</p></div>
      <div class="card2 wide"><h5>Two ways to measure</h5><p><b>Method 1</b>: count syllables in a set number of seconds. <b>Method 2</b> (more common): time how long a set number of syllables takes.</p>
      <p class="small">Adequate AMR + poor SMR → motor planning/sequencing. Slow, imprecise AMR <i>and</i> SMR → possible dysarthria/weakness.</p></div></div>`;
  }

  /* ---------------- flow/diagram helpers ---------------- */
  const flow = (steps, cls) => `<ol class="viz flow ${cls || ""}">${steps.map(s => `<li>${s}</li>`).join("")}</ol>`;
  const V = {
    bell, oral, occlusion, sensspec, ca, ddk,
    process: () => flow(["Referral &amp; Review", "Case History &amp; Interview", "Observation", "Assessment", "Analysis &amp; Interpretation", "Diagnosis &amp; Recommendations", "Report &amp; Results Conference"], "seven") +
      `<p class="viz-note">Her Week 1 slide 6 order. Stages 5-6 are where the clinical reasoning happens; 7 is how it reaches the family.</p>`,
    ebp: () => `<div class="viz venn" role="img" aria-label="Three components of EBP">
        <div class="v v1">Clinical expertise<small>knowledge, judgment, reasoning</small></div>
        <div class="v v2">Evidence<small>external (literature) + internal (your client's data)</small></div>
        <div class="v v3">Client / patient / caregiver perspectives<small>values, priorities, culture</small></div></div>` +
      flow(["Frame your clinical question", "Gather evidence", "Assess the evidence", "Make your clinical decision"], "four-steps"),
    decision: () => `<ol class="viz dflow">${["Can I use this test for diagnosis?", "Acceptable evidence of diagnostic accuracy?", "Does the normative sample reflect this person?", "Does it accurately measure the relevant skill(s)?", "Does it measure the ability consistently?"]
        .map(q => `<li><span>${q}</span><em>No → find another test</em></li>`).join("")}<li class="last"><span>Is this test sufficient for the diagnostic decision?</span><em>No → add converging evidence</em></li></ol>`,
    asked: () => `<div class="viz acro">${[["A", "Awareness"], ["S", "Skill"], ["K", "Knowledge"], ["E", "Encounters"], ["D", "Desire"]].map(([l, w]) => `<div><b>${l}</b><span>${w}</span></div>`).join("")}</div><p class="viz-note">Cultural competence is an ongoing process that requires self-assessment (Week 3 slide 6).</p>`,
    bid: () => `<div class="viz phases">
        <div><h5>Briefing</h5><ul><li>Review agenda and purposes</li><li>Discuss technical information</li><li>Train the interpreter</li></ul></div>
        <div><h5>Interaction</h5><ul><li>Introduce client to interpreter</li><li>Remain in the room and observe</li><li>Talk to the client, not the interpreter</li><li>Brief sentences, natural rate</li></ul></div>
        <div><h5>Debriefing</h5><ul><li>Discuss difficulties and impressions</li><li>Review assessment information</li><li>Plan next steps</li></ul></div></div>`,
    accmod: () => `<div class="viz scale2"><div class="l"><h5>Accommodation</h5><p>Changes <b>HOW</b> it is given</p><p class="small">Quiet room, breaks, hearing aids/FM, enlarged stimuli</p><p class="tag ok">Standard scores generally valid</p></div>
        <div class="r"><h5>Modification</h5><p>Changes <b>WHAT</b> is measured or the protocol</p><p class="small">Unallowed cues, repeating items when not allowed, translated items, new response format</p><p class="tag no">Standard scores may be invalid</p></div></div>`,
    intake: () => flow(["<b>Opening</b><small>introductions · purpose · structure</small>", "<b>Body</b><small>major content areas</small>", "<b>Closing</b><small>summarize major points</small>"], "three-phase"),
    interview: () => `<div class="viz timeline">${[["0-2", "Intro &amp; rapport"], ["2-7", "Speech &amp; communication"], ["7-11", "Language &amp; social"], ["11-15", "Developmental, medical, hearing"], ["15-18", "School, family, priorities"], ["18-20", "Summarize &amp; close"]]
        .map(([t, l]) => `<div style="flex:${parseInt(t.split("-")[1]) - parseInt(t)}"><b>${t}</b><span>${l}</span></div>`).join("")}</div><p class="viz-note">Open-ended first, then specific follow-ups. Width = minutes on her handout.</p>`,
    four: () => `<div class="viz quad">${[["Stability", "hold a controlled, supported position", "jaw = mobile stabilizer"], ["Mobility", "move through range without restriction", "range"], ["Dissociation", "move one part independently", "jaw vs tongue vs lips"], ["Grading", "control speed, force, range", "no over/undershoot"]]
        .map(([h, d, k]) => `<div><h5>${h}</h5><p>${d}</p><small>${k}</small></div>`).join("")}</div>`,
    three: () => `<div class="viz lenses">
        <div><h5>Clinical observation</h5><p>“What do I see/hear the client doing?”</p></div>
        <div><h5>Informal assessment</h5><p>“What can the client do on this task?”</p></div>
        <div><h5>Dynamic assessment</h5><p>“What happens when I teach/support, and can they use it?”</p><small>test → teach → retest</small></div></div>`,
    levels: () => `<div class="viz nest"><div class="n3"><span>Higher-level language: inferences, motivations, cause, perspective</span>
        <div class="n1"><span>Macrostructure: setting, problem, goal, attempts, consequence, resolution</span>
        <div class="n2"><span>Microstructure: grammar, vocabulary, syntax, cohesion</span></div></div></div></div>
        <p class="viz-note">First check comprehension (literal, then inferential), then analyze the retell at each level.</p>`
  };

  const NOTICE = {
    process: "Seven stages in her order. Analysis comes before diagnosis; the report and results conference close the loop.",
    ebp: "Three components (top) feed four steps (bottom). 'Evidence' has two halves: external literature and internal client data.",
    decision: "Five 'no' exits send you to another test; the sixth question asks whether one good test is enough.",
    asked: "Five letters, and the model is ongoing: self-assessment never finishes.",
    bid: "Who does what, when. The trap: during interaction you talk to the CLIENT, and you stay in the room.",
    accmod: "The dividing line is whether the construct or protocol changes, not whether the client needed help.",
    ca: "Days first, then months, then years. The 30-day and calendar conventions can disagree by a day or two.",
    bell: "Dashed lines at 70, 85, 115, 130. Her slide 17 wording makes 85 and 115 average; 70 and 130 sit exactly on lines the slide does not assign.",
    sensspec: "Read DOWN a column: sensitivity lives among people who truly have the disorder, specificity among those who do not.",
    intake: "Opening sets purpose and structure; the body covers content; closing summarizes.",
    interview: "Width equals minutes on her handout. Broad first, specific follow-ups after.",
    four: "Four different questions about movement: hold it, move it, isolate it, control it.",
    oral: "Rugae sit just behind the alveolar ridge on the front of the hard palate; the soft palate ends in the uvula; tonsils sit on the sides of the throat.",
    occlusion: "Watch where the upper molar's cusp (dot) sits relative to the lower molar's groove (dashed): on it, in front of it, or behind it.",
    ddk: "AMR = one syllable repeated; SMR = a sequence. Method 2 times a fixed count and is more common.",
    three: "Each method answers a different question. Dynamic assessment is the only one that teaches during the assessment.",
    levels: "Microstructure lives inside macrostructure; higher-level language asks why events connect."
  };
  function render(id, opts) {
    opts = opts || {};
    const f = V[id];
    if (!f) return "";
    const guide = opts.mode !== "hotspot";
    return `<figure class="vizwrap" data-viz="${id}">${f(opts)}${guide && NOTICE[id] ? `<figcaption><b>What to notice:</b> ${NOTICE[id]}</figcaption>` : ""}${guide && opts.zoom !== false ? `<button class="btn ghost small zoombtn" data-act="zoom" data-viz="${id}">Enlarge</button>` : ""}</figure>`;
  }
  root.DXV = { render, has: id => !!V[id], ORAL, BANDS };
})(typeof self !== "undefined" ? self : this);
