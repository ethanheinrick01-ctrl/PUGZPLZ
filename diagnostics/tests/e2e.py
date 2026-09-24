"""Real-browser end-to-end tests (Playwright + Chromium, file:// URL, no server).
Run: python3 tests/e2e.py   (writes screenshots to tests/out/)"""
import json, os, re, sys, pathlib
from playwright.sync_api import sync_playwright

ROOT = pathlib.Path(__file__).resolve().parent.parent
URL = (ROOT / "index.html").as_uri()
OUT = ROOT / "tests" / "out"; OUT.mkdir(parents=True, exist_ok=True)
RESULTS = []
def ok(name, cond, detail=""):
    RESULTS.append((name, bool(cond), detail))
    print(("PASS " if cond else "FAIL ") + name + (" :: " + str(detail) if detail and not cond else ""))

def new_ctx(browser, **kw):
    ctx = browser.new_context(accept_downloads=True, **kw)
    ext = []
    def router(route):
        if route.request.url.startswith("file:"): route.continue_()
        else: ext.append(route.request.url); route.abort()
    ctx.route("**/*", router)
    ctx._ext = ext
    return ctx

def watch(page):
    errs = []
    page.on("console", lambda m: errs.append(m.text) if m.type == "error" else None)
    page.on("pageerror", lambda e: errs.append("pageerror " + str(e)))
    return errs

def state(page): return page.evaluate("JSON.parse(localStorage.getItem('comd4756-lab-v2'))")
def item(page, iid): return page.evaluate("id => window.DX_DATA.items.find(i => i.id === id)", iid)

def answer(page, correct=True):
    """Answer the question shown in .q article through the UI. Returns (item id, type)."""
    art = page.locator("article.q")
    iid = art.get_attribute("data-item"); it = item(page, iid); t = it["type"]
    q = page.locator("article.q .qbody")
    if t == "mc":
        v = it["answer"] if correct else (it["answer"] + 1) % len(it["options"])
        q.locator(f'input[data-in="mc"][value="{v}"]').check()
    elif t == "tf":
        v = it["answer"] if correct else (not it["answer"])
        q.locator(f'input[data-in="tf"][value="{"true" if v else "false"}"]').check()
    elif t == "multi":
        want = it["answer"] if correct else (it["answer"][1:] or [i for i in range(len(it["options"])) if i not in it["answer"]][:1])
        for v in want: q.locator(f'input[data-in="multi"][value="{v}"]').check()
    elif t == "order":
        if correct:
            for _ in range(60):
                texts = [x.strip() for x in q.locator(".ordl li .ot").all_inner_texts()]
                seq = [next(i for i, s in enumerate(it["steps"]) if re.sub(r"\*\*", "", s).strip() == tx) for tx in texts]
                bad = next((k for k in range(len(seq) - 1) if seq[k] > seq[k + 1]), None)
                if bad is None:
                    if q.locator('[data-act="lock-order"]').count(): q.locator('[data-act="lock-order"]').click()
                    break
                q.locator(f'[data-act="mv"][data-k="{bad}"][data-d="1"]').click()
                q = page.locator("article.q .qbody")
        else:
            q.locator('[data-act="lock-order"]').click()
    elif t == "match":
        n = len(it["pairs"])
        for i in range(n): q.locator(f'select[data-in="match"][data-i="{i}"]').select_option(str(i if correct else (i + 1) % n))
    elif t == "sort":
        for i, (txt, g) in enumerate(it["items"]):
            gg = g if correct else next(x for x in it["groups"] if x != g)
            q.locator(f'select[data-in="sort"][data-i="{i}"]').select_option(label=gg)
    elif t == "num":
        for i, f in enumerate(it["fields"]):
            v = f["answer"] if correct else f["answer"] + 1 + (f["tol"] or 0)
            q.locator(f'input[data-in="num"][data-i="{i}"]').fill(str(v))
    elif t == "hotspot":
        z = it["answer"] if correct else ("average" if it["answer"] != "average" and it["visual"] == "bell" else ("c1" if it["visual"] == "occlusion" and it["answer"] != "c1" else ("tongue" if it["visual"] == "oral" and it["answer"] != "tongue" else ("below" if it["visual"] == "bell" else "c2"))))
        loc = page.locator(f'article.q .zone[data-zone="{z}"]').first
        if it["visual"] == "oral": loc.dispatch_event("click")
        else: loc.click()
    elif t == "teach":
        q.locator("textarea").fill("teach-back attempt")
    return iid, t

def practice_step(page, correct=True, conf="medium"):
    iid, t = answer(page, correct)
    if t == "teach":
        page.click('[data-act="teach-show"]'); page.click(f'[data-act="teach-rate"][data-v="{"got" if correct else "missed"}"]')
        v = page.locator(".verdict").inner_text()
        page.click('[data-act="next"]'); return iid, t, v
    page.click(f'[data-act="conf"][data-v="{conf}"]')
    page.click('[data-act="check"]')
    v = page.locator(".verdict").inner_text()
    return iid, t, v

def main():
    with sync_playwright() as p:
        br = p.chromium.launch()
        # ------------------------------------------------------------ fresh load + navigation
        ctx = new_ctx(br, viewport={"width": 1280, "height": 900}); pg = ctx.new_page(); errs = watch(pg)
        pg.goto(URL); pg.wait_for_selector("h1")
        ok("home renders", "Diagnostics Study Lab" in pg.inner_text("h1"))
        for r, h in [("guide", "Guide"), ("practice", "Practice"), ("exams", "Exams"), ("review", "Review"), ("tools", "Tools"), ("sources", "Sources"), ("progress", "Progress")]:
            pg.click(f'.nav a[data-r="{r}"]'); pg.wait_for_timeout(80)
            ok(f"nav → {r}", h.lower() in pg.inner_text("h1").lower(), pg.inner_text("h1"))
        pg.goto(URL + "#/guide"); n_mod = pg.locator(".mod").count(); ok("18 modules listed", n_mod == 18, n_mod)
        for m in range(1, 19):
            mid = "m%02d" % m
            pg.goto(URL + "#/guide/" + mid); pg.wait_for_timeout(30)
            ok(f"module {mid} renders sections", pg.locator(".sec").count() >= (1 if mid == "m18" else 3))
        viz = pg.evaluate("[...new Set(window.DX_DATA.modules.flatMap(m=>m.sections.map(s=>s.visual).filter(Boolean)))]")
        rendered = 0
        for m in pg.evaluate("window.DX_DATA.modules.map(m=>m.id)"):
            pg.goto(URL + "#/guide/" + m); rendered += pg.locator("figure.vizwrap").count()
        ok("all 17 section visuals render", rendered == len(viz) == 17, (rendered, len(viz)))
        pg.goto(URL + "#/guide/nope"); ok("unknown module falls back to guide list", pg.locator(".mod").count() == 18)

        # ------------------------------------------------------------ practice: correct path, mastery, requeue
        pg.goto(URL + "#/guide/m07"); pg.click('[data-act="practice-module"]'); pg.wait_for_selector("article.q")
        disabled = pg.locator('[data-act="check"]').is_disabled()
        ok("Check disabled before answer + confidence", disabled)
        types_ok, types_bad = set(), set()
        iid, t, v = practice_step(pg, True, "high"); types_ok.add(t)
        ok("practice correct → 'Correct' verdict", v.startswith("Correct"), v)
        ok("explanation + source shown after check", pg.locator(".explain .src").count() == 1)
        pg.click('[data-act="next"]')
        iid2, t2, v2 = practice_step(pg, False, "high"); types_bad.add(t2)
        ok("practice wrong → 'Not quite' + requeue notice", v2.startswith("Not quite") and "returns after 2" in v2, v2)
        st = state(pg); c2 = item(pg, iid2)["concept"]
        ok("high-confidence miss flags misconception", st["concepts"][c2]["misconception"] is True)
        ok("attempt logged", st["items"][iid2]["n"] == 1 and st["items"][iid2]["lastOk"] is False)
        q = st["practice"]["queue"]; pos = st["practice"]["pos"]
        ok("missed item re-inserted after exactly 2 others", q[pos + 3]["id"] == iid2 and q[pos + 3]["rep"] == 1, [x["id"] for x in q[pos:pos + 4]])
        pg.click('[data-act="next"]')
        # Mastery: answer everything correctly until the session ends
        seen = 0
        while pg.locator("article.q").count() and seen < 80:
            _, tt, vv = practice_step(pg, True, "medium"); types_ok.add(tt); seen += 1
            if tt != "teach": pg.click('[data-act="next"]')
        ok("practice session reaches summary", "Session complete" in pg.inner_text("h1"))
        st = state(pg)
        mastered = [c for c, v in st["concepts"].items() if v.get("mastered")]
        ok("concepts mastered after 2+ distinct correct answers", len(mastered) >= 3, mastered)
        ok("misconception cleared by re-mastery", not st["concepts"][c2]["misconception"] or not st["concepts"][c2]["mastered"])
        # persistence across reload
        pg.reload(); pg.goto(URL + "#/progress")
        ok("mastery persists after reload", state(pg)["concepts"][mastered[0]]["mastered"] is True)
        pg.goto(URL + "#/practice"); pg.click('[data-act="end-practice"]') if pg.locator('[data-act="end-practice"]').count() else None

        # ------------------------------------------------------------ grading coverage for every type through the UI
        def drill(label_act, n, correct):
            pg.goto(URL + "#/practice"); pg.select_option("#psize", "50"); pg.click(label_act); pg.wait_for_selector("article.q")
            got = []
            for _ in range(n):
                if not pg.locator("article.q").count(): break
                iid_, tt, vv = practice_step(pg, correct, "medium")
                exp = ("Self-rated" if tt == "teach" else ("Correct" if correct else "Not quite"))
                got.append((tt, vv.startswith(exp), iid_))
                if tt != "teach": pg.click('[data-act="next"]')
            pg.goto(URL + "#/practice"); pg.click('[data-act="end-practice"]')
            return got
        allres = []
        allres += drill('[data-act="pq"][data-q="visual"]', 13, True)
        allres += drill('[data-act="pq"][data-q="visual"]', 5, False)
        allres += drill('[data-act="pq"][data-q="numbers"]', 12, True)
        allres += drill('[data-act="pq"][data-q="numbers"]', 6, False)
        # modules with order/match/sort/multi
        for mods, correct in [(["m01", "m02", "m04", "m05", "m08", "m09", "m13", "m15", "m16"], True), (["m01", "m02", "m04", "m05", "m08", "m09", "m13", "m15", "m16"], False)]:
            pg.goto(URL + "#/practice"); pg.select_option("#psize", "50")
            for m in mods: pg.check(f'#pmods input[value="{m}"]')
            pg.click('[data-act="pmods"]'); pg.wait_for_selector("article.q")
            for _ in range(50):
                if not pg.locator("article.q").count(): break
                iid_, tt, vv = practice_step(pg, correct, "medium")
                allres.append((tt, vv.startswith("Correct" if correct else "Not quite"), iid_))
                if tt != "teach": pg.click('[data-act="next"]')
            pg.goto(URL + "#/practice"); pg.click('[data-act="end-practice"]')
        bad = [r for r in allres if not r[1]]
        ok("UI grading matches key for every answered item", not bad, bad[:5])
        covered = {}
        for tt, _, _ in allres: covered[tt] = covered.get(tt, 0) + 1
        ok("grading exercised for all 8 graded types", all(k in covered for k in ["mc", "tf", "multi", "order", "match", "sort", "num", "hotspot"]), covered)

        # keyboard hotspot
        pg.goto(URL + "#/practice"); pg.click('[data-act="pq"][data-q="visual"]'); pg.wait_for_selector("article.q")
        z = pg.locator("article.q .zone").first; z.focus(); pg.keyboard.press("Enter"); pg.wait_for_timeout(50)
        ok("hotspot selectable by keyboard", state(pg)["practice"]["cur"]["resp"].get("zone") is not None)
        # hint forces low confidence
        pg.click('[data-act="hint"]'); ok("hint locks confidence to Low", state(pg)["practice"]["cur"]["conf"] == "low" and pg.locator('[data-act="conf"][data-v="high"]').is_disabled())
        pg.goto(URL + "#/practice"); pg.click('[data-act="end-practice"]')

        # ------------------------------------------------------------ mock exam: withheld feedback, resume, scoring
        pg.goto(URL + "#/exams"); pg.click('[data-act="start-exam"][data-x="mock-a"]'); pg.click(".mbox .btn.primary"); pg.wait_for_selector(".navgrid")
        order = state(pg)["exams"]["mock-a"]["active"]["order"]
        ok("mock starts with 20 T/F then 20 MC", [item(pg, i)["type"] for i in order] == ["tf"] * 20 + ["mc"] * 20)
        plan = {}
        for k in range(40):
            iid = pg.locator("article.q").get_attribute("data-item")
            if k in (5, 25): pass  # leave blank
            else:
                correct = (k % 4 != 0)
                answer(pg, correct); plan[iid] = correct
            html = pg.inner_html("main")
            if k < 3:
                ok(f"no feedback leaks during exam (q{k+1})", not re.search(r'class="[^"]*\b(verdict|why|explain|key|wrong)\b', html))
            if k == 10: pg.click('[data-act="flag"]')
            if k == 12:
                pg.reload(); pg.wait_for_selector(".navgrid")
                ok("exam resumes at same question after reload", pg.locator("article.q").get_attribute("data-item") == iid)
                ok("answers survive reload", len(state(pg)["exams"]["mock-a"]["active"]["answers"]) >= 12)
            if k < 39: pg.click('[data-act="nextq"]')
        pg.click('[data-act="goq"][data-k="3"]'); ok("navigator jumps", pg.inner_text("h1").startswith("Question 4"))
        pg.click('[data-act="xconf"][data-v="high"]')
        t0 = pg.inner_text("#timer"); pg.wait_for_timeout(2300); t1 = pg.inner_text("#timer")
        ok("timer counts down while visible", t0 != t1 and "left" in t1, (t0, t1))
        pg.click('.btnrow > [data-act="submit-exam"]'); ok("submit asks for confirmation (in-page)", "unanswered" in pg.inner_text(".mbox"))
        pg.click(".mbox .btn.primary"); pg.wait_for_selector(".stat.big")
        exp = sum((2 if item(pg, i)["type"] == "tf" else 3) for i, c in plan.items() if c)
        shown = pg.inner_text(".stat.big b")
        ok("mock score equals independent computation", shown.replace("\n", "").startswith(f"{exp}/100"), (shown, exp))
        ok("results show why for the chosen and correct options", pg.locator(".rev .why").count() > 0 and pg.locator(".rev .explain").count() > 0)
        ok("repair-by-concept table present", pg.locator('[data-act="drill-concepts"]').count() == 1)
        st = state(pg)
        ok("exam answers counted toward concept history", any(v.get("src") == "mock-a" for v in st["log"]))
        ok("blank answers not logged as attempts", sum(1 for v in st["log"] if v.get("src") == "mock-a") == 38)
        pg.click('[data-act="rfilter"][data-f="flagged"]'); ok("flagged filter shows flagged item", pg.locator(".rev").count() == 1)
        pg.click('[data-act="drill-concepts"]'); pg.wait_for_selector("article.q"); ok("remediation drill starts from results", "Repair" in pg.inner_text(".crumbs"))
        pg.goto(URL + "#/practice"); pg.click('[data-act="end-practice"]')
        # retake
        pg.goto(URL + "#/exams"); pg.click('[data-act="start-exam"][data-x="mock-a"]'); pg.click(".mbox .btn.primary"); pg.wait_for_selector(".navgrid")
        for k in range(40):
            answer(pg, True)
            if k < 39: pg.click('[data-act="nextq"]')
        pg.click('.btnrow > [data-act="submit-exam"]'); pg.click(".mbox .btn.primary"); pg.wait_for_selector(".stat.big")
        ok("retake: perfect run scores 100/100", pg.inner_text(".stat.big b").replace("\n", "").startswith("100/100"))
        ok("retake stored as second attempt", len(state(pg)["exams"]["mock-a"]["attempts"]) == 2)
        # boss drill
        pg.goto(URL + "#/exams"); pg.click('[data-act="start-exam"][data-x="boss-b"]'); pg.click(".mbox .btn.primary"); pg.wait_for_selector(".navgrid")
        ok("boss shows case vignette", pg.locator("details.case").count() == 1)
        right = 0
        for k in range(25):
            c = k % 5 != 0; answer(pg, c); right += c
            if k < 24: pg.click('[data-act="nextq"]')
        pg.click('.btnrow > [data-act="submit-exam"]'); pg.click(".mbox .btn.primary"); pg.wait_for_selector(".stat.big")
        ok("boss accuracy matches", pg.inner_text(".stat.big b").replace("\n", "").startswith(f"{round(1000*right/25)/10:g}%"), (pg.inner_text(".stat.big b"), right))
        # discard in-progress
        pg.goto(URL + "#/exams"); pg.click('[data-act="start-exam"][data-x="mock-b"]'); pg.click(".mbox .btn.primary"); pg.wait_for_selector(".navgrid"); answer(pg, True)
        pg.goto(URL + "#/exams"); pg.click('[data-act="discard-exam"][data-x="mock-b"]'); pg.click(".mbox .btn.primary")
        ok("discard clears active attempt without scoring", state(pg)["exams"]["mock-b"]["active"] is None and not state(pg)["exams"]["mock-b"]["attempts"])

        # ------------------------------------------------------------ review page
        pg.goto(URL + "#/review"); ok("review lists concepts by status", pg.locator("#revform .card").count() >= 2)

        # ------------------------------------------------------------ tools: boundary tests through the UI
        pg.goto(URL + "#/tools")
        expect = {"69": "Significantly below", "70": "Exactly 70", "71": "Below average", "84": "Below average", "85": "Average", "115": "Average",
                  "116": "Above average", "129": "Above average", "130": "Exactly 130", "131": "Significantly above"}
        badb = []
        for v, lab in expect.items():
            pg.fill("#tb-v", v); txt = pg.inner_text("#tb-out b")
            if not txt.startswith(lab): badb.append((v, txt))
        ok("score explorer boundaries 69/70/71/84/85/115/116/129/130/131", not badb, badb)
        pg.select_option("#tb-s", "scaled"); pg.fill("#tb-v", "4"); ok("scaled 4 = SS 70 edge", pg.inner_text("#tb-out b").startswith("Exactly 70"))
        pg.select_option("#tb-s", "standard")
        pg.fill("#ca-b", "2019-08-20"); pg.fill("#ca-t", "2026-03-05")
        ca = pg.inner_text("#ca-out"); ok("CA tool shows both conventions", "6;6.15" in ca and "6;6.13" in ca and "disagree" in ca, ca)
        pg.fill("#wr-w", "220"); pg.fill("#wr-s", "100"); ok("wpm tool", "132 wpm" in pg.inner_text("#wr-out"))
        pg.fill("#tr-u", "18"); pg.fill("#tr-m", "40"); ok("TRMR tool", "45%" in pg.inner_text("#tr-out") and "moderate" in pg.inner_text("#tr-out"))

        # ------------------------------------------------------------ export / reset / import
        pg.goto(URL + "#/progress")
        with pg.expect_download() as dl: pg.click('[data-act="export"]')
        path = OUT / "export.json"; dl.value.save_as(path)
        data = json.loads(path.read_text())
        ok("export file has v2 schema + state", data["schema"] == "comd4756-lab-v2-backup" and data["state"]["schema"] == "comd4756-lab-v2")
        before = state(pg)
        pg.click('[data-act="reset"]'); pg.click(".mbox .btn.danger")
        ok("reset clears progress", not state(pg)["concepts"] and not state(pg)["exams"])
        pg.set_input_files("#importf", str(path)) if False else None
        pg.evaluate("document.getElementById('importf').onchange = null")
        with pg.expect_file_chooser() as fc: pg.click('[data-act="import"]')
        fc.value.set_files(str(path)); pg.click(".mbox .btn.primary"); pg.wait_for_timeout(200)
        after = state(pg)
        ok("import restores concepts and exam attempts", after["concepts"] == before["concepts"] and len(after["exams"]["mock-a"]["attempts"]) == 2)
        ok("pre-import snapshot kept", pg.evaluate("!!localStorage.getItem('comd4756-lab-v2-preimport')"))
        bad_file = OUT / "bad.json"; bad_file.write_text('{"schema":"something-else"}')
        with pg.expect_file_chooser() as fc: pg.click('[data-act="import"]')
        fc.value.set_files(str(bad_file)); pg.wait_for_timeout(150)
        ok("invalid backup rejected with message", "Choose a progress backup" in pg.inner_text("#toast") and state(pg)["concepts"] == before["concepts"])
        # v1 backup import
        v1b = OUT / "v1backup.json"
        v1b.write_text(json.dumps({"schema": "comd4756-progress-backup-v1", "course": "COMD 4756", "storage": {
            "comd4756-guided-progress-v1": json.dumps({"concepts": {"sensitivity-specificity": {"mastered": True}, "speech-rate": {"mastered": True}}, "modules": {}}),
            "comd4756-study-lab-progress-v1": json.dumps({"dx-mock-40-b": {"score": 33, "total": 40, "weightedBest": {"points": 84, "totalPoints": 100}}})}}))
        pg.click('[data-act="reset"]'); pg.click(".mbox .btn.danger")
        with pg.expect_file_chooser() as fc: pg.click('[data-act="import"]')
        fc.value.set_files(str(v1b)); pg.click(".mbox .btn.primary"); pg.wait_for_timeout(200)
        st = state(pg)
        ok("v1 backup import → provisional concepts", st["concepts"].get("m8-sensspec", {}).get("v1") and st["concepts"].get("m15-rate", {}).get("v1"))
        ok("v1 quiz history displayed", "84/100" in pg.inner_text("main"))
        ok("no console errors in main session", not errs, errs[:5])
        ok("no network requests leave file://", not ctx._ext, ctx._ext[:5])
        ctx.close()

        # ------------------------------------------------------------ v1 in-browser migration (same origin keys)
        ctx = new_ctx(br, viewport={"width": 1280, "height": 900})
        ctx.add_init_script("""if (!sessionStorage.getItem('seeded')) { sessionStorage.setItem('seeded','1');
          localStorage.setItem('comd4756-guided-progress-v1', JSON.stringify({concepts:{age:{mastered:true, attempts:3}, bid:{mastered:true}, norms:{misconception:true}}, modules:{'dx-ddk':{completed:true}}}));
          localStorage.setItem('comd4756-study-lab-progress-v1', JSON.stringify({'dx-week-2-drill':{score:30,total:39}})); }""")
        pg = ctx.new_page(); errs = watch(pg); pg.goto(URL); pg.wait_for_selector("h1")
        st = state(pg)
        ok("v1 keys detected on first load", st["legacy"] and st["legacy"]["summary"]["found"])
        ok("v1 mastered → provisional v2 concepts", all(st["concepts"][c]["v1"] for c in ["m6-ca", "m6-adjusted", "m4-interp"]))
        ok("v1 records left untouched", pg.evaluate("JSON.parse(localStorage.getItem('comd4756-guided-progress-v1')).concepts.age.mastered === true"))
        pg.goto(URL + "#/progress"); ok("v1 history shown on Progress", "Week 2 · Mixed retrieval" in pg.inner_text("main"))
        with pg.expect_download() as dl: pg.click('[data-act="export"]')
        p2 = OUT / "export_v1ctx.json"; dl.value.save_as(p2); d2 = json.loads(p2.read_text())
        ok("export includes raw v1 keys", "comd4756-guided-progress-v1" in d2["v1Raw"] and d2["v1Raw"]["comd4756-guided-progress-v1"])
        # confirm once
        pg.evaluate("""() => { const s = window.__DX.state; }""")
        pg.goto(URL + "#/practice"); pg.select_option("#psize", "10")
        pg.check('#pmods input[value="m06"]'); pg.click('[data-act="pmods"]'); pg.wait_for_selector("article.q")
        confirmed = False
        for _ in range(10):
            if not pg.locator("article.q").count(): break
            iid, tt, _ = practice_step(pg, True, "medium")
            if tt != "teach": pg.click('[data-act="next"]')
            if item(pg, iid)["concept"] in ("m6-ca", "m6-adjusted") and state(pg)["concepts"][item(pg, iid)["concept"]]["mastered"]:
                confirmed = True; break
        ok("provisional concept confirmed by one correct medium answer", confirmed)
        ok("no console errors (migration context)", not errs, errs[:5])
        ctx.close()

        # ------------------------------------------------------------ responsive + theme + screenshots
        for w, h in [(390, 844), (768, 1024), (1440, 900)]:
            ctx = new_ctx(br, viewport={"width": w, "height": h}); pg = ctx.new_page(); errs = watch(pg)
            for r in ["", "guide/m07", "guide/m14", "practice", "exams", "tools", "sources", "progress"]:
                pg.goto(URL + "#/" + r); pg.wait_for_timeout(60)
                over = pg.evaluate("document.documentElement.scrollWidth - window.innerWidth")
                ok(f"no horizontal overflow {w}px #{r or 'home'}", over <= 1, over)
                if r in ("", "guide/m14", "tools"): pg.screenshot(path=str(OUT / f"{w}_{(r or 'home').replace('/', '_')}.png"), full_page=(w == 390 and r == ""))
            pg.goto(URL + "#/exams"); pg.click('[data-act="start-exam"][data-x="boss-a"]'); pg.click(".mbox .btn.primary"); pg.wait_for_selector(".navgrid")
            over = pg.evaluate("document.documentElement.scrollWidth - window.innerWidth"); ok(f"exam view fits {w}px", over <= 1, over)
            pg.screenshot(path=str(OUT / f"{w}_exam.png"))
            pg.goto(URL + "#/practice"); pg.click('[data-act="pq"][data-q="visual"]'); pg.wait_for_selector("article.q")
            answer(pg, False); pg.click('[data-act="conf"][data-v="high"]'); pg.click('[data-act="check"]')
            over = pg.evaluate("document.documentElement.scrollWidth - window.innerWidth"); ok(f"practice feedback fits {w}px", over <= 1, over)
            pg.screenshot(path=str(OUT / f"{w}_practice_feedback.png"), full_page=True)
            if w == 390:
                pg.click("#themebtn"); pg.reload(); pg.wait_for_selector("h1")
                ok("light theme persists across reload", pg.evaluate("document.documentElement.dataset.theme") == "light")
                pg.screenshot(path=str(OUT / "390_light_practice.png"), full_page=True)
            ok(f"no console errors at {w}px", not errs, errs[:3])
            ok(f"no external requests at {w}px", not ctx._ext, ctx._ext[:3])
            ctx.close()

        # ------------------------------------------------------------ storage blocked
        ctx = new_ctx(br); ctx.add_init_script("Object.defineProperty(window, 'localStorage', { get() { throw new Error('blocked'); } });")
        pg = ctx.new_page(); errs = watch(pg); pg.goto(URL); pg.wait_for_selector("h1")
        ok("app still runs with storage blocked + warns", "blocking storage" in pg.inner_text("#toast"))
        ok("no uncaught errors with storage blocked", not [e for e in errs if "pageerror" in e], errs[:3])
        ctx.close()
        br.close()
    fails = [r for r in RESULTS if not r[1]]
    print(f"\n{len(RESULTS) - len(fails)}/{len(RESULTS)} checks passed")
    (OUT / "e2e_results.json").write_text(json.dumps([{"check": a, "pass": b, "detail": str(c)} for a, b, c in RESULTS], indent=1))
    sys.exit(1 if fails else 0)

if __name__ == "__main__":
    main()
