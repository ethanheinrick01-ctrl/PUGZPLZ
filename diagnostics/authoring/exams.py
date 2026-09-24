from core import ITEMS

def ids(pool): return [i["id"] for i in ITEMS if i["pool"] == pool]

EXAMS = [
  dict(id="mock-a", kind="mock", title="Practice Exam A", minutes=50,
       blurb="40 unseen questions in the historical COMD 4382 Test 2 shape: 20 T/F × 2 + 20 MC × 3 = 100. Feedback is withheld until you submit.",
       items=ids("mockA"), weights={"tf": 2, "mc": 3}),
  dict(id="mock-b", kind="mock", title="Practice Exam B", minutes=50,
       blurb="A second, non-overlapping 40-question form in the same historical shape. Feedback withheld until you submit.",
       items=ids("mockB"), weights={"tf": 2, "mc": 3}),
  dict(id="boss-a", kind="boss", title="Boss Drill I · Children and families", minutes=45,
       blurb="Three cases (a toddler who isn't talking, a score report, a bilingual referral). Apply and integrate; feedback after you submit.",
       items=ids("bossA"), weights=None),
  dict(id="boss-b", kind="boss", title="Boss Drill II · Tools, bodies and decisions", minutes=45,
       blurb="Three cases (acute-care adult, choosing a diagnostic test, a kindergartener with /r/ errors). Feedback after you submit.",
       items=ids("bossB"), weights=None),
]
