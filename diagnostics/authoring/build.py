"""Compile authored content into the lab's data files and run structural validation.

Usage: python3 build.py [outdir]
"""
import json, sys, re, os, hashlib, collections
sys.path.insert(0, os.path.dirname(__file__))
import core
from core import ITEMS, MODULES, CONCEPTS, CASES, SOURCES, chron_age

MODS = ["m01", "m02", "m03", "m04", "m05", "m06", "m07", "m08", "m09", "m10", "m11", "m12", "m13", "m14", "m15", "m16", "m18"]
EXTRA = ["exams_a", "exams_b", "exams_boss", "exams"]
for m in MODS + EXTRA:
    if os.path.exists(os.path.join(os.path.dirname(__file__), m + ".py")):
        __import__(m)
import balance

errors, warnings = [], []
ids = collections.Counter(i["id"] for i in ITEMS)
for k, v in ids.items():
    if v > 1: errors.append("duplicate id " + k)

# ---- bell-curve classification used by the app (mirrored in JS) ----
def band(ss):
    if ss < 70: return "sigbelow"
    if ss == 70: return "edge-2"
    if ss < 85: return "below"
    if ss <= 115: return "average"
    if ss < 130: return "above"
    if ss == 130: return "edge+2"
    return "sigabove"

BOUNDARY = {69: "sigbelow", 70: "edge-2", 71: "below", 84: "below", 85: "average", 100: "average",
            115: "average", 116: "above", 129: "above", 130: "edge+2", 131: "sigabove", 64: "sigbelow", 78: "below", 122: "above"}
for s, b in BOUNDARY.items():
    if band(s) != b: errors.append("band(%s)=%s expected %s" % (s, band(s), b))

for it in ITEMS:
    t = it["type"]
    # hotspot bell items: recompute from the number in the stem
    if t == "hotspot" and it["visual"] == "bell":
        m = re.search(r"standard score of (\d+)", it["stem"])
        if not m: errors.append(it["id"] + " bell item without score"); continue
        b = band(int(m.group(1)))
        if b.startswith("edge"): errors.append(it["id"] + " keys an unassigned endpoint")
        elif b != it["answer"]: errors.append("%s key %s but band() says %s" % (it["id"], it["answer"], b))
    # CA items: recompute
    if t == "num" and len(it["fields"]) == 3 and it["fields"][0]["label"] == "Years":
        ms = re.findall(r"(January|February|March|April|May|June|July|August|September|October|November|December) (\d+), (\d{4})", it["stem"])
        months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
        if len(ms) != 2: errors.append(it["id"] + " CA stem dates"); continue
        dob = (int(ms[0][2]), months.index(ms[0][0]) + 1, int(ms[0][1]))
        doe = (int(ms[1][2]), months.index(ms[1][0]) + 1, int(ms[1][1]))
        a30, acal = chron_age(dob, doe, 30), chron_age(dob, doe, "calendar")
        key = tuple(f["answer"] for f in it["fields"])
        if "30-day" not in it["stem"] and a30 != acal:
            errors.append(it["id"] + " convention-sensitive CA without stated convention")
        if key != a30: errors.append("%s CA key %s != computed %s" % (it["id"], key, a30))
        it["caCheck"] = {"thirty": a30, "calendar": acal}
    if t == "mc":
        texts = [o["t"] for o in it["options"]]
        if len(set(texts)) != len(texts): errors.append(it["id"] + " duplicate options")
        lens = [len(x) for x in texts]
        if lens[it["answer"]] == max(lens) and max(lens) > 1.6 * sorted(lens)[-2]:
            warnings.append(it["id"] + " correct option much longer than others (cue risk)")

# bank-level length cue: expected accuracy of "always pick the longest option" must stay near chance
_n = _e = 0
for it in ITEMS:
    if it["type"] != "mc": continue
    L = [len(o["t"]) for o in it["options"]]; mx = max(L); ties = [i for i, x in enumerate(L) if x == mx]
    _n += 1; _e += (1 / len(ties)) if it["answer"] in ties else 0
LONGEST_RATE = _e / _n
if LONGEST_RATE > 0.35: errors.append("pick-the-longest strategy scores %.1f%% on MC (limit 35%%)" % (100 * LONGEST_RATE))

# T/F key balance per pool (an "always True" strategy should not pay)
for pool in ("practice", "mockA", "mockB"):
    tfs = [i for i in ITEMS if i["pool"] == pool and i["type"] == "tf"]
    share = sum(1 for i in tfs if i["answer"]) / len(tfs)
    if not 0.4 <= share <= 0.6: errors.append("%s T/F keys are %.0f%% True (limit 40-60%%)" % (pool, 100 * share))

# concept coverage: each concept needs >=2 distinct practice items unless teach-only
byc = collections.defaultdict(list)
for it in ITEMS:
    byc[it["concept"]].append(it)
for c in CONCEPTS:
    prac = [i for i in byc[c] if i["pool"] == "practice" and i["type"] != "teach"]
    if len(prac) < 2: errors.append("concept %s has %d practice items" % (c, len(prac)))

def emit(outdir):
    os.makedirs(outdir, exist_ok=True)
    data = dict(modules=MODULES, concepts=CONCEPTS, items=ITEMS, cases=CASES,
                sources={k: dict(label=v[0], path=v[1], kind=v[2]) for k, v in SOURCES.items()},
                exams=getattr(sys.modules.get("exams"), "EXAMS", []))
    js = "window.DX_DATA = " + json.dumps(data, ensure_ascii=False, indent=0) + ";\n"
    h = hashlib.sha256(js.encode()).hexdigest()[:12]
    js = js.replace("window.DX_DATA = ", "window.DX_DATA_REV = %s;\nwindow.DX_DATA = " % json.dumps(h), 1)
    with open(os.path.join(outdir, "data.js"), "w") as f:
        f.write(js)
    return h

if __name__ == "__main__":
    out = sys.argv[1] if len(sys.argv) > 1 else os.path.join(os.path.dirname(os.path.abspath(__file__)), "..", "data")
    cnt = collections.Counter((i["pool"], i["type"]) for i in ITEMS)
    print("items", len(ITEMS), "modules", len(MODULES), "concepts", len(CONCEPTS))
    print(sorted(cnt.items()))
    for w in warnings: print("WARN", w)
    for e in errors: print("ERROR", e)
    if errors: sys.exit(1)
    print("pick-longest MC rate %.1f%%" % (100 * LONGEST_RATE))
    print("rev", emit(out))
