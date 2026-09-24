// Node unit tests for assets/engine.js and the built data. Run: node tests/engine.test.js
const assert = require("assert");
const path = require("path");
const E = require(path.join(__dirname, "..", "assets", "engine.js"));
global.window = {}; require(path.join(__dirname, "..", "data", "data.js"));
const D = window.DX_DATA, ITEMS = Object.fromEntries(D.items.map(i => [i.id, i]));
let n = 0; const t = (name, f) => { f(); n++; };

t("band boundaries", () => {
  const exp = { 55: "sigbelow", 69: "sigbelow", 70: "edge-2", 71: "below", 78: "below", 84: "below", 85: "average", 100: "average",
    115: "average", 116: "above", 122: "above", 129: "above", 130: "edge+2", 131: "sigabove", 145: "sigabove" };
  for (const [k, v] of Object.entries(exp)) assert.strictEqual(E.band(+k), v, "band " + k);
  assert.strictEqual(E.band(84.9), "below"); assert.strictEqual(E.band(115.1), "above"); assert.strictEqual(E.band(NaN), null);
});
t("scale conversions", () => {
  assert.strictEqual(E.convert(85, "standard", "z"), -1); assert.strictEqual(E.convert(4, "scaled", "standard"), 70);
  assert.strictEqual(E.convert(13, "scaled", "standard"), 115); assert.strictEqual(E.convert(-2, "z", "scaled"), 4);
  assert.strictEqual(E.convert(7, "stanine", "z"), 1);
  assert.ok(Math.abs(E.normCdf(-1) - 0.1587) < 0.001 && Math.abs(E.normCdf(2) - 0.9772) < 0.001);
});
t("chronological age", () => {
  let a = E.chronAge([2019, 8, 20], [2026, 3, 5], 30); assert.deepStrictEqual([a.y, a.m, a.d], [6, 6, 15]);
  a = E.chronAge([2019, 8, 20], [2026, 3, 5], "calendar"); assert.deepStrictEqual([a.y, a.m, a.d], [6, 6, 13]); // Feb 2026 = 28
  a = E.chronAge([2018, 1, 10], [2025, 3, 25], 30); assert.deepStrictEqual([a.y, a.m, a.d], [7, 2, 15]); // no borrow
  a = E.chronAge([2016, 12, 31], [2025, 1, 1], "calendar"); assert.deepStrictEqual([a.y, a.m, a.d], [8, 0, 1]); // Dec borrowed from prior year (31)
  a = E.chronAge([2016, 12, 31], [2025, 1, 1], 30); assert.deepStrictEqual([a.y, a.m, a.d], [8, 0, -1 + 1]); // 1+30-31=0
  assert.strictEqual(E.daysInMonth(2024, 2), 29);
});
t("CA items: key equals 30-day computation; convention stated when they differ", () => {
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  let checked = 0;
  for (const it of D.items) if (it.type === "num" && it.fields.length === 3 && it.fields[0].label === "Years") {
    const ms = [...it.stem.matchAll(/(January|February|March|April|May|June|July|August|September|October|November|December) (\d+), (\d{4})/g)];
    assert.strictEqual(ms.length, 2, it.id);
    const dob = [+ms[0][3], months.indexOf(ms[0][1]) + 1, +ms[0][2]], doe = [+ms[1][3], months.indexOf(ms[1][1]) + 1, +ms[1][2]];
    const a = E.chronAge(dob, doe, 30), c = E.chronAge(dob, doe, "calendar");
    assert.deepStrictEqual(it.fields.map(f => f.answer), [a.y, a.m, a.d], it.id);
    if (a.d !== c.d || a.m !== c.m) assert.ok(/30-day/.test(it.stem), it.id + " must state the convention");
    checked++;
  }
  assert.ok(checked >= 5, "found CA items: " + checked);
});
t("bell hotspot items keyed by band()", () => {
  for (const it of D.items) if (it.type === "hotspot" && it.visual === "bell") {
    const ss = +it.stem.match(/score of (\d+)/)[1];
    assert.strictEqual(E.band(ss), it.answer, it.id); assert.ok(!/edge/.test(it.answer));
  }
});
t("grading: every type, correct and incorrect", () => {
  const byType = {}; D.items.forEach(i => { (byType[i.type] = byType[i.type] || []).push(i); });
  for (const it of D.items) {
    let good, bad;
    switch (it.type) {
      case "mc": good = { choice: it.answer }; bad = { choice: (it.answer + 1) % it.options.length }; break;
      case "tf": good = { choice: it.answer }; bad = { choice: !it.answer }; break;
      case "multi": good = { choices: it.answer.slice().reverse() }; bad = { choices: it.answer.slice(1).length ? it.answer.slice(1) : [...Array(it.options.length).keys()] }; break;
      case "order": good = { seq: it.steps.map((_, i) => i) }; bad = { seq: it.steps.map((_, i) => i).reverse() }; break;
      case "match": good = { map: Object.fromEntries(it.pairs.map((_, i) => [i, i])) }; bad = { map: Object.fromEntries(it.pairs.map((_, i) => [i, (i + 1) % it.pairs.length])) }; break;
      case "sort": good = { map: Object.fromEntries(it.items.map((x, i) => [i, x[1]])) }; bad = { map: Object.fromEntries(it.items.map((x, i) => [i, it.groups.find(g => g !== x[1])])) }; break;
      case "num": good = { vals: it.fields.map(f => String(f.answer)) }; bad = { vals: it.fields.map(f => String(f.answer + 1 + (f.tol || 0))) }; break;
      case "hotspot": good = { zone: it.answer }; bad = { zone: it.answer === "average" ? "below" : "average" }; break;
      case "teach": continue;
    }
    assert.strictEqual(E.grade(it, good).ok, true, it.id + " good");
    assert.strictEqual(E.grade(it, bad).ok, false, it.id + " bad");
    assert.strictEqual(E.grade(it, {}).answered, false, it.id + " empty");
  }
  // numeric parsing: unicode minus, comma decimal, percent
  const num = D.items.find(i => i.type === "num" && i.fields.some(f => f.answer < 0));
  if (num) assert.ok(E.grade(num, { vals: num.fields.map(f => String(f.answer).replace("-", "−")) }).ok);
  assert.strictEqual(E.parseNum("45%"), 45); assert.strictEqual(E.parseNum("5,5"), 5.5); assert.ok(isNaN(E.parseNum("4 5"))); assert.ok(isNaN(E.parseNum("")));
});
t("views shuffle but grading uses original indices", () => {
  const it = D.items.find(i => i.type === "mc"); const r = E.rng(7);
  for (let k = 0; k < 20; k++) { const v = E.makeView(it, r); assert.deepStrictEqual(v.opt.slice().sort(), it.options.map((_, i) => i)); }
  const o = D.items.find(i => i.type === "order"); for (let k = 0; k < 20; k++) assert.ok(!E.makeView(o, r).opt.every((x, i) => x === i));
});
t("mastery rule", () => {
  let c = E.applyAttempt(null, "a", true, "high"); assert.ok(!c.mastered);
  c = E.applyAttempt(c, "a", true, "high"); assert.ok(!c.mastered, "same root twice is not mastery");
  c = E.applyAttempt(c, "b", true, "low"); assert.ok(!c.mastered && c.needsReview, "latest low blocks mastery");
  c = E.applyAttempt(c, "c", true, "medium"); assert.ok(c.mastered);
  c = E.applyAttempt(c, "d", false, "high"); assert.ok(!c.mastered && c.misconception && c.streak === 0);
  assert.strictEqual(E.conceptStatus(c), "misconception");
  c = E.applyAttempt(c, "e", true, "medium"); c = E.applyAttempt(c, "f", true, "high"); assert.ok(c.mastered && !c.misconception);
  let w = E.applyAttempt(null, "a", false, "medium"); assert.ok(!w.misconception && w.needsReview);
  let v = Object.assign(E.emptyConcept(), { v1: true }); assert.strictEqual(E.conceptStatus(v), "provisional");
  v = E.applyAttempt(v, "a", true, "low"); assert.ok(!v.mastered && v.v1, "low conf does not confirm v1");
  v = E.applyAttempt(v, "b", true, "medium"); assert.ok(v.mastered && !v.v1, "one medium confirms v1");
  let v2 = E.applyAttempt(Object.assign(E.emptyConcept(), { v1: true }), "a", false, "low"); assert.ok(!v2.v1 && !v2.mastered);
});
t("requeue gaps", () => {
  const q = [{ id: "a" }, { id: "b" }, { id: "c" }, { id: "d" }, { id: "e" }, { id: "f" }];
  let r = E.requeue(q, 0, q[0], false, "high"); assert.strictEqual(r.inserted, 3); assert.strictEqual(r.queue[3].id, "a"); assert.strictEqual(r.queue[3].rep, 1);
  r = E.requeue(q, 0, q[0], true, "low"); assert.strictEqual(r.inserted, 5);
  r = E.requeue(q, 0, q[0], true, "medium"); assert.strictEqual(r.inserted, -1);
  r = E.requeue(q, 4, q[4], false, "low"); assert.strictEqual(r.inserted, 6, "appends when fewer than 2 remain");
  r = E.requeue(q, 0, { id: "a", rep: 2 }, false, "low"); assert.strictEqual(r.inserted, -1, "repeat cap");
});
t("planSession interleaves and respects size", () => {
  const items = D.items.filter(i => i.pool === "practice" && i.type !== "teach");
  const p = E.planSession(items, { size: 20, rng: E.rng(3) });
  assert.strictEqual(p.length, 20); assert.strictEqual(new Set(p.map(x => x.id)).size, 20);
  const cs = p.map(x => ITEMS[x.id].concept); let adj = 0; for (let i = 1; i < cs.length; i++) if (cs[i] === cs[i - 1]) adj++;
  assert.ok(adj <= 2, "interleaving");
});
t("exam scoring weights and shape", () => {
  for (const x of D.exams) {
    const its = x.items.map(i => ITEMS[i]);
    assert.strictEqual(new Set(x.items).size, x.items.length);
    if (x.kind === "mock") {
      assert.strictEqual(its.length, 40); assert.strictEqual(its.filter(i => i.type === "tf").length, 20); assert.strictEqual(its.filter(i => i.type === "mc").length, 20);
      const all = Object.fromEntries(its.map(i => [i.id, { choice: i.answer }]));
      let s = E.scoreExam(x, ITEMS, all); assert.strictEqual(s.points, 100); assert.strictEqual(s.max, 100);
      const miss1tf = Object.assign({}, all); const tf = its.find(i => i.type === "tf"); miss1tf[tf.id] = { choice: !tf.answer };
      assert.strictEqual(E.scoreExam(x, ITEMS, miss1tf).points, 98);
      const mc = its.find(i => i.type === "mc"); delete miss1tf[mc.id];
      s = E.scoreExam(x, ITEMS, miss1tf); assert.strictEqual(s.points, 95); assert.strictEqual(s.correct, 38);
      assert.strictEqual(E.scoreExam(x, ITEMS, {}).points, 0);
    } else {
      assert.strictEqual(its.length, 25); assert.ok(its.every(i => i.case && D.cases[i.case]));
      assert.strictEqual(E.scoreExam(x, ITEMS, {}).pct, 0);
    }
  }
  const pools = D.exams.flatMap(x => x.items); assert.strictEqual(new Set(pools).size, pools.length, "no overlap between forms");
  for (const id of pools) assert.notStrictEqual(ITEMS[id].pool, "practice", "exam items unseen in practice");
});
t("v1 migration", () => {
  const raw = { "comd4756-guided-progress-v1": JSON.stringify({ concepts: { "age": { mastered: true }, "bid": { mastered: true, misconception: false }, "norms": { mastered: false, misconception: true }, "bogus": { mastered: true } }, modules: { "dx-ddk": { completed: true } } }),
    "comd4756-study-lab-progress-v1": JSON.stringify({ "dx-mock-40-a": { score: 30, total: 40, weightedBest: { points: 78, totalPoints: 100 } } }) };
  const s = E.readV1(raw); assert.ok(s.found); assert.deepStrictEqual(s.mastered.sort(), ["age", "bid", "bogus"]); assert.strictEqual(s.quizBest["dx-mock-40-a"].weighted.points, 78);
  const known = Object.fromEntries(Object.keys(D.concepts).map(k => [k, 1]));
  const m = E.migrateV1(s, { "m6-ca": { attempts: 3, mastered: false } }, known);
  assert.ok(!m.concepts["m6-ca"].v1, "v2 evidence wins"); assert.ok(m.concepts["m6-adjusted"].v1 && m.concepts["m4-interp"].v1);
  assert.ok(!E.readV1({ "comd4756-guided-progress-v1": "{bad json" }).found);
  for (const [k, v] of Object.entries(E.V1_MAP)) for (const c of v) assert.ok(D.concepts[c], k + " -> " + c);
});
t("data integrity", () => {
  for (const it of D.items) {
    assert.ok(D.concepts[it.concept], it.id); assert.ok(it.src.length, it.id + " cites a source");
    for (const s of it.src) assert.ok(D.sources[s.s], it.id + " source " + s.s);
    if (it.type === "mc") assert.ok(it.options.every(o => o.why), it.id);
    if (it.type === "hotspot") assert.ok(["bell", "oral", "occlusion"].includes(it.visual));
  }
  const vis = new Set(D.modules.flatMap(m => m.sections.map(s => s.visual).filter(Boolean)));
  assert.strictEqual(vis.size, 17);
});
console.log("engine tests passed:", n);
