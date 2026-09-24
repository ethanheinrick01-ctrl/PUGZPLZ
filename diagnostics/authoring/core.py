"""Authoring core for the COMD 4756 Diagnostics Lab v2.

Every item is built through a constructor that validates shape, and the
compiler (build.py) re-validates the whole graph before emitting JS.
"""
import re

SOURCES = {
    # id: (label, archive path, kind)
    "W1": ("4756 WEEK 1 deck", "COURSE MATERIALS/WEEK 1/4756 WEEK 1 (1).pptx", "slide"),
    "W2": ("Week 2 deck (file named COMD 4751 WEEK 2)", "COURSE MATERIALS/WEEK 2/COMD 4751 WEEK 2.pptx", "slide"),
    "W3A": ("Week 3 Overview of a Complete Assessment deck", "COURSE MATERIALS/WEEK 3/4756 Week 3 Overview of Assessment.pptx", "slide"),
    "W3B": ("Week 3 Multicultural Considerations deck", "COURSE MATERIALS/WEEK 3/COMD 4751 WEEK 3.pptx", "slide"),
    "W4": ("Week 4 Common Assessment Procedures deck", "COURSE MATERIALS/WEEK 4/4756 common assessment procedures week4.pptx", "slide"),
    "W4OPE": ("Week 4 Friday assignment slide (OPE video)", "COURSE MATERIALS/WEEK 4/FRIDAY ASSIGNMENT/Oral Peripheral Exam Video.pptx", "slide"),
    "W5": ("Week 5 Observation / Informal / Dynamic deck", "COURSE MATERIALS/WEEK 5/COMD 4756 WEEK 5.pptx", "slide"),
    "W5V": ("Week 5 observation video links deck", "COURSE MATERIALS/WEEK 5/Observations comd 4756.pptx", "slide"),
    "L0902": ("Recorded lecture 9/2", "COURSE MATERIALS/RECORDED LECTURES/09:02:2026 .rtf", "lecture"),
    "L0909": ("Recorded lecture 9/9", "COURSE MATERIALS/RECORDED LECTURES/09:09:2026.rtf", "lecture"),
    "L0911": ("Recorded lecture 9/11", "COURSE MATERIALS/RECORDED LECTURES/09:11:2026.rtf", "lecture"),
    "L0914": ("Recorded lecture 9/14 (mock interview day)", "COURSE MATERIALS/RECORDED LECTURES/09:14:2026.rtf", "lecture"),
    "L0921": ("Recorded lecture 9/21", "COURSE MATERIALS/RECORDED LECTURES/09:21:2026.rtf", "lecture"),
    "VA": ("ASHA TLR video: Why We Need Evidence-Based Assessment (captions)", "COURSE MATERIALS/WEEK 1/Diagnostics Friday Class First Week/auto_generated_captions (1).vtt", "video"),
    "VB": ("ASHA TLR video: A Decision-Making Process for Selecting an Assessment Tool (captions)", "COURSE MATERIALS/WEEK 1/Diagnostics Friday Class First Week/auto_generated_captions.vtt", "video"),
    "T1": ("Test One flag screenshots (your labels)", "COURSE MATERIALS/TEST ONE/", "flag"),
    "OPE": ("Assigned OPE video transcript (Justine Sherman)", "COURSE MATERIALS/WEEK 4/FRIDAY ASSIGNMENT/VIDEO TRANSCRIPT.rtf", "video"),
    "MOCKX": ("Mock interview examiner handout (Group B)", "COURSE MATERIALS/WEEK 4/Mock_20Interview_20Group_20B_20Examiner.pdf", "assignment"),
    "MOCKP": ("Mock interview parent handout (Group B)", "COURSE MATERIALS/WEEK 4/Mock Interview Group B Parent.pdf", "assignment"),
    "DEBRIEF": ("Your Clinician/Parent Debrief submission", "COURSE MATERIALS/WEEK 4/TURN IN /Clinician_Parent Debrief .pdf", "assignment"),
    "AD": ("Assessment Detective activity instructions", "COURSE MATERIALS/WEEK 2/FRIDAY ASSIGNMENT/Assessment Detective Activity 2026 (1).docx", "assignment"),
    "PPVT": ("Your PPVT-5 Assessment Detective submission", "COURSE MATERIALS/WEEK 2/FRIDAY ASSIGNMENT/PPVT-5 Assessment Detective_Dissection (1).pdf", "assignment"),
    "SYL": ("COMD 4756 syllabus", "COURSE MATERIALS/SYLLABUS : ADMIN/COMD 4756 DX SYLLABUS UG.docx", "admin"),
    "TB1": ("Shipley & McAfee 7e, Ch. 1", "COURSE MATERIALS/TEXTBOOK/ (PDF pp. 28-55)", "textbook"),
    "TB2": ("Shipley & McAfee 7e, Ch. 2", "COURSE MATERIALS/TEXTBOOK/ (PDF pp. 60-105)", "textbook"),
    "TB3": ("Shipley & McAfee 7e, Ch. 3", "COURSE MATERIALS/TEXTBOOK/ (PDF pp. 106-143)", "textbook"),
    "TB4": ("Shipley & McAfee 7e, Ch. 4", "COURSE MATERIALS/TEXTBOOK/ (PDF pp. 144-155)", "textbook"),
    "TB6": ("Shipley & McAfee 7e, Ch. 6", "COURSE MATERIALS/TEXTBOOK/ (PDF pp. 178-191)", "textbook"),
    "CODEX": ("Gonsoulin codex (cleaned) - prior-course record", "STUDY LAB/source-materials/GONSOULIN_CODEX.md", "historical"),
    "DNA": ("Professor DNA Gonsoulin (COMD 4382)", "STUDY LAB/source-materials/PROFESSOR_DNA_GONSOULIN.md", "historical"),
}

EV = {"slide", "lecture", "video", "assignment", "textbook", "historical", "inference"}
STYLES = {"negative", "sibling", "therefore", "absolute", "scenario", "number", "antonym",
          "procedure", "definition", "sequence", "classify", "integrate", "visual"}
POOLS = {"practice", "mockA", "mockB", "bossA", "bossB"}

MODULES = []   # filled by content files: dict(id,title,...)
CONCEPTS = {}  # id -> dict(module,label)
ITEMS = []
CASES = {}     # boss case vignettes id -> dict(title, text, src)

def module(mid, number, title, kicker, week, summary):
    MODULES.append(dict(id=mid, number=number, title=title, kicker=kicker, week=week,
                        summary=summary, sections=[], concepts=[]))
    return MODULES[-1]

def concept(cid, mid, label):
    assert cid not in CONCEPTS, cid
    CONCEPTS[cid] = dict(id=cid, module=mid, label=label)
    for m in MODULES:
        if m["id"] == mid:
            m["concepts"].append(cid)
            break
    else:
        raise ValueError("module missing for concept " + cid)

def section(mid, sec):
    for m in MODULES:
        if m["id"] == mid:
            m["sections"].append(sec)
            return
    raise ValueError(mid)

def _src(src):
    out = []
    for s in src:
        sid, loc = (s.split(":", 1) + [""])[:2] if ":" in s else (s, "")
        sid = sid.strip(); loc = loc.strip()
        assert sid in SOURCES, "unknown source " + sid
        out.append({"s": sid, "loc": loc})
    return out

def _common(iid, concept_id, pool, stem, hint, explain, src, ev, style, case=None):
    assert re.match(r"^[a-z0-9][a-z0-9-]+$", iid), iid
    assert concept_id in CONCEPTS, "unknown concept %s in %s" % (concept_id, iid)
    assert pool in POOLS, pool
    assert ev in EV, (iid, ev)
    for st in style:
        assert st in STYLES, (iid, st)
    assert stem and hint and explain, iid
    return dict(id=iid, concept=concept_id, module=CONCEPTS[concept_id]["module"], pool=pool,
                stem=stem, hint=hint, explain=explain, src=_src(src), ev=ev, style=list(style),
                case=case)

def mc(iid, c, stem, options, answer, hint, explain, src, ev="slide", style=(), pool="practice", case=None):
    """options: list of (text, why). answer: index of correct option."""
    it = _common(iid, c, pool, stem, hint, explain, src, ev, style, case)
    assert 3 <= len(options) <= 5, iid
    assert 0 <= answer < len(options), iid
    for o in options:
        assert isinstance(o, tuple) and len(o) == 2 and o[0] and o[1], (iid, o)
    it.update(type="mc", options=[{"t": t, "why": w} for t, w in options], answer=answer)
    if "negative" in style:
        assert re.search(r"\b(NOT|EXCEPT|LEAST|FALSE)\b", stem), iid + " negative stem needs capital negator"
    ITEMS.append(it); return it

def tf(iid, c, statement, answer, fix, hint, explain, src, ev="slide", style=(), pool="practice", case=None):
    """fix: for False items the corrected wording; for True items what a tempting false version would change."""
    it = _common(iid, c, pool, statement, hint, explain, src, ev, style, case)
    assert isinstance(answer, bool)
    assert fix, iid
    it.update(type="tf", answer=answer, fix=fix)
    ITEMS.append(it); return it

def multi(iid, c, stem, options, answers, hint, explain, src, ev="slide", style=(), pool="practice", case=None):
    it = _common(iid, c, pool, stem, hint, explain, src, ev, style, case)
    assert all(0 <= a < len(options) for a in answers) and len(answers) >= 1, iid
    it.update(type="multi", options=[{"t": t, "why": w} for t, w in options], answer=sorted(answers))
    ITEMS.append(it); return it

def order(iid, c, stem, steps, hint, explain, src, ev="slide", style=("sequence",), pool="practice", case=None):
    it = _common(iid, c, pool, stem, hint, explain, src, ev, style, case)
    assert len(steps) >= 3, iid
    it.update(type="order", steps=list(steps))
    ITEMS.append(it); return it

def match(iid, c, stem, pairs, hint, explain, src, ev="slide", style=("classify",), pool="practice", case=None):
    it = _common(iid, c, pool, stem, hint, explain, src, ev, style, case)
    assert len(pairs) >= 3, iid
    it.update(type="match", pairs=[list(p) for p in pairs])
    ITEMS.append(it); return it

def sort(iid, c, stem, groups, items, hint, explain, src, ev="slide", style=("classify",), pool="practice", case=None):
    it = _common(iid, c, pool, stem, hint, explain, src, ev, style, case)
    for t, g in items:
        assert g in groups, (iid, g)
    it.update(type="sort", groups=list(groups), items=[list(x) for x in items])
    ITEMS.append(it); return it

def num(iid, c, stem, fields, hint, explain, src, ev="slide", style=("procedure",), pool="practice", case=None):
    """fields: list of (label, unit, answer, tolerance)."""
    it = _common(iid, c, pool, stem, hint, explain, src, ev, style, case)
    it.update(type="num", fields=[{"label": l, "unit": u, "answer": a, "tol": t} for l, u, a, t in fields])
    ITEMS.append(it); return it

def hotspot(iid, c, stem, visual, zone, hint, explain, src, ev="slide", style=("visual",), pool="practice",
            zone_why=None, case=None, params=None):
    it = _common(iid, c, pool, stem, hint, explain, src, ev, style, case)
    it.update(type="hotspot", visual=visual, answer=zone, zoneWhy=zone_why or {}, params=params or {})
    ITEMS.append(it); return it

def teach(iid, c, prompt, rubric, src, ev="slide", pool="practice"):
    it = _common(iid, c, pool, prompt, "Say it aloud before revealing the rubric.",
                 "Self-rate against each rubric point. The app does not grade prose.", src, ev, ())
    it.update(type="teach", rubric=list(rubric))
    ITEMS.append(it); return it

def case(cid, title, text, src):
    CASES[cid] = dict(id=cid, title=title, text=text, src=_src(src))

import calendar as _cal
def chron_age(dob, doe, borrow=30):
    """dob/doe: (y,m,d). borrow=30 -> fixed 30-day borrow (Gonsoulin 4382 key);
    borrow='calendar' -> days in the month preceding the test month (textbook: 30 or 31 by month borrowed from)."""
    (by, bm, bd), (ty, tm, td) = dob, doe
    y, m, d = ty, tm, td
    if d < bd:
        if borrow == 30:
            add = 30
        else:
            pm, py = (m - 1, y) if m > 1 else (12, y - 1)
            add = _cal.monthrange(py, pm)[1]
        d += add; m -= 1
    if m < bm:
        m += 12; y -= 1
    return (y - by, m - bm, d - bd)
