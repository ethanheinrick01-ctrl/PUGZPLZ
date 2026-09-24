"""Extra browser checks: localhost operation, keyboard-only practice, diagram enlarge, print CSS.
Run: python3 tests/e2e_extra.py"""
import json, pathlib, subprocess, sys, time
from playwright.sync_api import sync_playwright
ROOT = pathlib.Path(__file__).resolve().parent.parent
R = []
def ok(n, c, d=""):
    R.append((n, bool(c), d)); print(("PASS " if c else "FAIL ") + n + (" :: " + str(d) if d and not c else ""))

srv = subprocess.Popen([sys.executable, "-m", "http.server", "8765", "--bind", "127.0.0.1"], cwd=ROOT, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
time.sleep(1)
try:
    with sync_playwright() as p:
        br = p.chromium.launch()
        ctx = br.new_context(viewport={"width": 1280, "height": 900}); pg = ctx.new_page()
        errs, ext = [], []
        pg.on("console", lambda m: errs.append(m.text) if m.type == "error" else None)
        pg.on("pageerror", lambda e: errs.append(str(e)))
        pg.on("request", lambda r: ext.append(r.url) if not r.url.startswith("http://127.0.0.1:8765") else None)
        pg.goto("http://127.0.0.1:8765/index.html"); pg.wait_for_selector("h1")
        for r in ["#/guide/m07", "#/practice", "#/exams", "#/tools", "#/sources", "#/progress"]:
            pg.goto("http://127.0.0.1:8765/index.html" + r); pg.wait_for_timeout(60)
        ok("localhost: pages render without console errors", not errs, errs[:3])
        ok("localhost: no requests leave the local server", not ext, ext[:3])

        # keyboard-only practice on a multiple-choice item
        pg.goto("http://127.0.0.1:8765/index.html#/practice")
        pg.evaluate("localStorage.clear()"); pg.reload(); pg.wait_for_selector("h1")
        pg.focus('[data-act="pq"][data-q="mixed"]'); pg.keyboard.press("Enter"); pg.wait_for_selector("article.q")
        tries = 0
        while pg.locator("article.q").get_attribute("data-item") and pg.evaluate("id => window.DX_DATA.items.find(i=>i.id===id).type", pg.locator("article.q").get_attribute("data-item")) not in ("mc", "tf") and tries < 30:
            pg.click('[data-act="skip"]'); tries += 1
        iid = pg.locator("article.q").get_attribute("data-item")
        it = pg.evaluate("id => window.DX_DATA.items.find(i=>i.id===id)", iid)
        first = pg.locator('article.q input[type=radio]').first
        first.focus(); pg.keyboard.press("Space")
        # arrow to the keyed option
        target = str(it["answer"]).lower() if it["type"] == "tf" else str(it["answer"])
        for _ in range(8):
            if pg.evaluate("() => document.activeElement && document.activeElement.value") == target: break
            pg.keyboard.press("ArrowDown")
        pg.keyboard.press("Tab")  # to Low
        pg.keyboard.press("Tab"); pg.keyboard.press("Enter")  # Medium
        pg.keyboard.press("Tab"); pg.keyboard.press("Tab"); pg.keyboard.press("Tab")
        ok("keyboard: Check enabled after answer + confidence", not pg.locator('[data-act="check"]').is_disabled())
        pg.locator('[data-act="check"]').focus(); pg.keyboard.press("Enter")
        v = pg.locator(".verdict").inner_text()
        ok("keyboard-only answer graded correct", v.startswith("Correct"), v)
        ok("focus moves to the verdict after checking", pg.evaluate("document.activeElement.classList.contains('verdict')"))
        pg.keyboard.press("Tab"); pg.keyboard.press("Tab"); pg.keyboard.press("Tab")

        # diagram enlarge
        pg.goto("http://127.0.0.1:8765/index.html#/guide/m14")
        pg.click('[data-act="zoom"][data-viz="oral"]'); pg.wait_for_selector(".zoomview svg")
        ok("diagram enlarges in a dialog", pg.locator(".zoomview svg.oral").count() == 1)
        pg.keyboard.press("Escape"); ok("Escape closes the dialog", not pg.locator("#modal.show").count())
        ok("every guide visual has a what-to-notice caption", pg.evaluate("[...document.querySelectorAll('.sec figure.vizwrap')].every(f=>f.querySelector('figcaption'))"))

        # print stylesheet hides chrome
        pg.emulate_media(media="print")
        ok("print view hides navigation and buttons", pg.evaluate("getComputedStyle(document.querySelector('.top')).display") == "none")
        pg.pdf(path=str(ROOT / "tests" / "out" / "module14_print.pdf")) if False else None
        br.close()
finally:
    srv.terminate()
fails = [r for r in R if not r[1]]
print(f"\n{len(R) - len(fails)}/{len(R)} extra checks passed")
(ROOT / "tests" / "out" / "e2e_extra_results.json").write_text(json.dumps([{"check": a, "pass": b, "detail": str(c)} for a, b, c in R], indent=1))
sys.exit(1 if fails else 0)
