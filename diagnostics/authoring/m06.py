from core import *
def S(**k): return k

M = "m06"
module(M, 6, "Age, basals, ceilings and the raw score", "Week 2 · Administration", "Week 2",
       "Chronological and adjusted age (including the borrowing-convention conflict), basal and ceiling rules, and why the raw score is the bridge to every other number.")
concept("m6-ca", M, "Chronological age: why it matters and how to compute it")
concept("m6-adjusted", M, "Adjusted (corrected) age for prematurity")
concept("m6-basal", M, "Basal and ceiling rules")
concept("m6-raw", M, "Raw score: the bridge to interpretation")

section(M, S(h="Chronological age",
    body=["Slide 9: determining CA is a critical step because scores must be compared with the **correct age-based normative group**. Her 'Clinical Bottom Line': **if the age is wrong, every age-based score derived from the test may also be wrong**, which can lead to incorrect clinical decisions.",
          "Slide 12 lists online calculators (SLP Chronological Age Calculator, which reports ages in SLP format like 6;4 = 6 years, 4 months; Home Speech Home; FreeSLP; WiseAgeCalc; Speech Therapist Tools).",
          "**Hand calculation.** Write the test date and birth date as year / month / day and subtract, days first. If the test day is smaller, borrow a month (add days, reduce the month by 1). If the month is then smaller, borrow a year (add 12 months, reduce the year by 1)."],
    visual="ca",
    callouts=[dict(k="conflict", t="GENUINE CONFLICT, not reconciled here. How many days does a borrowed month add? (1) Her COMD 4382 practice key used a fixed 30-day borrow; the codex verified one item where a 31-day borrow gave an answer that was not among the options (historical, her key). (2) The course textbook (Ch. 1) says borrow '30 or 31 days (based on number of days in month borrowed from)'. (3) Her current Week 2 slides give no borrowing rule and point to online calculators, which use real calendar days. Practice items in this lab either avoid day-borrowing or state the convention in the stem. If she gives a CA problem, ask which convention she wants, or look at whether only one answer choice is possible.", ev="historical"),
              dict(k="numbers", t="SLP notation: 6;4 = 6 years, 4 months. Full CA is years;months;days.", ev="slide")],
    src=["W2:slides 9, 12", "TB1:PDF p. 49", "CODEX:section 8"]))

section(M, S(h="Adjusted (corrected) age",
    body=["Slides 10-11: adjusted age is the age a child would be if born on the **due date**. Used mainly for **premature infants** (speech, language, feeding, early communication). Without it, a preterm infant compared to same-age peers may **appear delayed** when development is appropriate for the time they have had; using it helps **avoid over-identifying delays**.",
          "**Adjusted age = chronological age − weeks (or months) premature.** Her example: DOB January 1, 2026; due date March 1, 2026; born 8 weeks early. Assessed September 1, 2026: CA 8 months; prematurity 2 months (8 weeks); **adjusted age 6 months**."],
    callouts=[dict(k="textbook", t="Textbook: adjusted age becomes less relevant as a child grows and is generally not a consideration for children over age 3. It gives a similar example: a 10-month-old born 8 weeks early is developmentally more like an 8-month-old.", ev="textbook")],
    src=["W2:slides 10-11", "TB1:PDF p. 49"]))

section(M, S(h="Basals and ceilings (slides 13-14)",
    table=dict(head=["", "Basal", "Ceiling"], rows=[
        ["Definition", "Point at which you can assume the examinee would have answered all EASIER items correctly", "Point at which you can assume the examinee would miss increasingly DIFFICULT items"],
        ["Purpose", "Don't waste time on too-easy items; reduce fatigue and frustration; establish a starting point", "Don't administer too-difficult items; reduce stress and discouragement; save time; estimate highest level of performance"],
        ["Her examples", "Slide 13: 5 consecutive correct (credit all preceding items). Slide 14: 4 consecutive correct", "Slide 13: 5 consecutive incorrect (missed items 28-32 → stop). Slide 14: 4 consecutive incorrect"],
        ["Nickname (slide 14)", "'Start confidence'", "'Stop point'"]]),
    body=["Slide 14 clinical example: a 9-year-old answers items 10-13 correctly → **basal established**; continues testing; misses items 27-30 consecutively → **ceiling established**. The examiner credits all items below the basal, stops at the ceiling, and calculates the raw score using the manual. Together they find the client's **zone of performance**."],
    callouts=[dict(k="numbers", t="The counts are TEST-SPECIFIC. Her two examples use 5 and 4. Your PPVT-5 assignment found basal = 3 consecutive correct and ceiling = 6 consecutive incorrect for that test. Checked against Pearson's PPVT-5/EVT-3 'What's changed' sheet: 3 consecutive correct / 6 consecutive incorrect on continuous items (the PPVT-4 used 12-item sets). The slide numbers are examples, not PPVT-5 rules.", ev="assignment")],
    src=["W2:slides 13-14", "PPVT"]))

section(M, S(h="Raw score",
    body=["Slide 15: a raw score is the **total number of points earned** on a test according to the manual's scoring rules. It is **the bridge between test performance and interpretation**. If it is wrong because of administration or scoring errors, **every score derived from it may also be inaccurate**, potentially affecting diagnosis, eligibility and treatment planning."],
    callouts=[dict(k="gonsoulin", t="COMD 4382 record: 'Scoring the PPVT-5, first identify the raw score. Standard score requires raw score + chronological age.' Historical item, consistent with slides 9 and 15.", ev="historical"),
              dict(k="textbook", t="Textbook: raw scores alone are not diagnostically meaningful; they are converted to other metrics.", ev="textbook")],
    src=["W2:slide 15", "CODEX:section 4 T5", "TB1:PDF p. 50"]))

# ---------------- items ----------------
tf("m6-ca-01", "m6-ca",
   "If a client's chronological age is calculated incorrectly, every age-based score derived from the test may also be wrong.",
   True, "Tempting false version: 'only the age equivalent is affected'.", "Her 'Clinical Bottom Line'.", "Slide 9: CA is the foundation for accurate scoring and interpretation.", ["W2:slide 9"])

mc("m6-ca-02", "m6-ca",
   "Why does her slide call chronological age a critical step in administering standardized tests?",
   [("Test scores must be compared to the correct age-based normative group", "Correct."),
    ("It determines which basal rule the manual uses", "Start points can depend on age, but the slide's reason is normative comparison."),
    ("It is needed to calculate the raw score", "The raw score is points earned; CA is needed to convert it."),
    ("It replaces the need for adjusted age in older children", "Not the slide's reason.")],
   0, "Norms are organized by what?", "Slide 9.", ["W2:slide 9"])

num("m6-ca-03", "m6-ca",
   "No day-borrowing needed. Birth date: March 10, 2019. Test date: September 22, 2026. Compute chronological age.",
   [("Years", "y", 7, 0), ("Months", "m", 6, 0), ("Days", "d", 12, 0)],
   "22 − 10, 9 − 3, 2026 − 2019. No borrowing.",
   "Days 22 − 10 = 12; months 9 − 3 = 6; years 7. Convention does not matter when no borrowing is needed.",
   ["W2:slide 9", "TB1:PDF p. 49"])

num("m6-ca-04", "m6-ca",
   "Use a 30-day borrow (the convention in her COMD 4382 key). Birth date: July 18, 2019. Test date: February 9, 2026.",
   [("Years", "y", 6, 0), ("Months", "m", 6, 0), ("Days", "d", 21, 0)],
   "Borrow a month for the days (9 + 30), then a year for the months.",
   "Days: 9 + 30 − 18 = 21 (month drops to 1). Months: 1 + 12 − 7 = 6 (year drops to 2025). Years: 2025 − 2019 = 6. With a calendar borrow (January has 31 days) the day value would be 22; that is why the convention must be stated.",
   ["CODEX:section 8", "TB1:PDF p. 49"], ev="historical")

num("m6-ca-05", "m6-ca",
   "Month borrow only (no day borrow). Birth date: November 4, 2020. Test date: April 20, 2026.",
   [("Years", "y", 5, 0), ("Months", "m", 5, 0), ("Days", "d", 16, 0)],
   "Days first: 20 − 4. Then the months need a year borrow.",
   "Days 20 − 4 = 16. Months 4 < 11 → 4 + 12 − 11 = 5, year 2025. Years 2025 − 2020 = 5. No day borrow, so the 30/31 question never arises.",
   ["TB1:PDF p. 49", "W2:slide 9"])

mc("m6-ca-06", "m6-ca",
   "Birth date: February 28, 2015. Test date: January 26, 2022. Her COMD 4382 practice key (30-day borrow) gave which age?",
   [("6 years, 10 months, 28 days", "Correct: 26 + 30 − 28 = 28; months 12 − 2 = 10 after borrowing (0 + 12 − 2); years 2021 − 2015 = 6."),
    ("6 years, 10 months, 29 days", "This is the calendar (31-day, December) borrow. The codex notes this value was not among her options."),
    ("6 years, 11 months, 28 days", "Forgets that borrowing days reduces the month."),
    ("7 years, 10 months, 28 days", "Forgets the year borrow.")],
   0, "Compute it both ways; the codex says only one appeared in her choices.",
   "This is the codex's verified historical item: her key = 6;10;28, which matches a 30-day borrow. Historical evidence of her convention in a prior course.",
   ["CODEX:section 8"], ev="historical", style=("procedure", "number"))

mc("m6-ca-07", "m6-ca",
   "When a day borrow is needed, what does the course textbook say to add to the day column?",
   [("30 or 31 days, based on the number of days in the month borrowed from", "Correct (Shipley & McAfee Ch. 1). This differs from the fixed 30 her 4382 key used."),
    ("Always 30 days", "That was her COMD 4382 key's convention, not the textbook rule."),
    ("Always 31 days", "Neither source says this."),
    ("28 days, to be conservative", "Not a rule in either source.")],
   0, "This is the conflict flagged in the guide.",
   "Textbook: borrow 30 or 31 days (based on number of days in month borrowed from). Her prior key: fixed 30. Current slides: no rule stated.",
   ["TB1:PDF p. 49", "CODEX:section 8"], ev="textbook", style=("number",))

num("m6-adj-01", "m6-adjusted",
   "A child born 12 weeks (3 months) early has a chronological age of 9 months. Using her formula, what is the adjusted age?",
   [("Adjusted age", "months", 6, 0)],
   "Adjusted = CA − prematurity.", "9 − 3 = 6 months.", ["W2:slide 11"])

mc("m6-adj-02", "m6-adjusted",
   "Her slide example: born January 1, 2026; due date March 1, 2026; assessed September 1, 2026. What is the adjusted age?",
   [("6 months", "Correct: CA 8 months − 2 months premature."),
    ("8 months", "That is the chronological age."),
    ("10 months", "Adds prematurity instead of subtracting."),
    ("2 months", "That is the amount of prematurity.")],
   0, "CA first, then subtract.", "Slide 11: CA 8 months; prematurity 2 months (8 weeks); adjusted age 6 months.", ["W2:slide 11"], style=("number",))

tf("m6-adj-03", "m6-adjusted",
   "Using adjusted age for a premature infant makes the infant more likely to be identified with a delay.",
   False, "The opposite: adjusted age compares the infant with developmentally matched peers and helps AVOID over-identifying delays (slide 10).", "Why correct for prematurity at all?", "Slide 10: using adjusted age helps make accurate comparisons and avoid over-identifying delays.", ["W2:slide 10"])

tf("m6-adj-04", "m6-adjusted",
   "Adjusted age is the age a child would be if born on the actual birth date rather than the due date.",
   False, "Reversed: the age the child would be if born on the DUE date rather than the actual birth date.",
   "Which date replaces which?", "Slide 10 definition.", ["W2:slide 10"], style=("antonym",))

mc("m6-bc-01", "m6-basal",
   "On her slide, a basal is:",
   [("The point at which the examiner can assume the examinee would have answered all easier items correctly", "Correct."),
    ("The point at which the examiner can assume the examinee would miss increasingly difficult items", "That is the ceiling."),
    ("The total number of points earned according to the manual", "Raw score."),
    ("The first item listed in the test booklet for every examinee", "Start points vary; the basal is a performance criterion.")],
   0, "'Start confidence'.", "Slide 13 definitions.", ["W2:slide 13"], style=("sibling",))

mc("m6-bc-02", "m6-basal",
   "A test's ceiling is 4 consecutive incorrect responses. A 9-year-old answers items 10-13 correctly, continues, and misses items 27-30. What does the examiner do?",
   [("Credit all items below the basal, stop testing at the ceiling, and calculate the raw score using the manual", "Correct, her slide 14 steps."),
    ("Continue to item 35 to confirm the ceiling", "The ceiling is established after 4 consecutive misses in this example."),
    ("Administer items 1-9 to confirm the basal", "Items below the basal are credited without administration."),
    ("Stop at item 13 because the basal is established", "The basal is a starting point, not a stopping point.")],
   0, "Her slide lists three things the examiner does.", "Slide 14 clinical example.", ["W2:slide 14"], style=("scenario", "procedure"))

tf("m6-bc-03", "m6-basal",
   "Every standardized language test establishes a basal after exactly five consecutive correct responses.",
   False, "Basal and ceiling criteria are test-specific (her two examples use 5 and 4; PPVT-5 uses 3 correct / 6 incorrect).",
   "Her own slides use two different numbers.", "Slides 13-14 give different example criteria; the manual defines them.", ["W2:slides 13-14", "PPVT"], style=("absolute", "number"))

mc("m6-bc-04", "m6-basal",
   "All of the following are purposes of a ceiling on her slide EXCEPT:",
   [("Allows the examiner to credit easier items without administering them", "Correct answer. That is the basal's purpose."),
    ("Prevents administering items that are too difficult", "Ceiling purpose."),
    ("Reduces unnecessary stress and discouragement", "Ceiling purpose."),
    ("Helps obtain an accurate estimate of the client's highest level of performance", "Ceiling purpose.")],
   0, "One option belongs to the sibling rule.", "Slide 13 purposes.", ["W2:slide 13"], style=("negative", "sibling"))

mc("m6-bc-05", "m6-basal",
   "In your PPVT-5 Assessment Detective assignment, what basal and ceiling rules did you find for that test?",
   [("Basal 3 consecutive correct; ceiling 6 consecutive incorrect", "Correct, per your submission's sources."),
    ("Basal 5 consecutive correct; ceiling 5 consecutive incorrect", "Her slide 13 example, not the PPVT-5."),
    ("Basal 4 consecutive correct; ceiling 4 consecutive incorrect", "Her slide 14 example, not the PPVT-5."),
    ("Basal 6 consecutive correct; ceiling 3 consecutive incorrect", "Reversed.")],
   0, "Assignment content is exam content per the syllabus.", "Your PPVT-5 submission: basal 3 correct, ceiling 6 incorrect (Pearson sources). The syllabus says exams cover completed class material and assignments.", ["PPVT", "SYL"], ev="assignment", style=("number",))

mc("m6-raw-01", "m6-raw",
   "Her slide calls the raw score 'the bridge' between:",
   [("Test performance and interpretation", "Correct."),
    ("The basal and the ceiling", "Those define the administered range."),
    ("The standard score and the percentile rank", "Both are derived FROM the raw score."),
    ("Chronological age and adjusted age", "Unrelated.")],
   0, "Every derived score comes from it.", "Slide 15.", ["W2:slide 15"])

tf("m6-raw-02", "m6-raw",
   "An administration or scoring error that changes the raw score can make every score derived from it inaccurate, affecting diagnosis, eligibility and treatment planning.",
   True, "False version: 'derived scores correct for raw-score errors'.", "Slide 15 SmartArt, second box.", "Slide 15.", ["W2:slide 15"])

mc("m6-raw-03", "m6-raw",
   "To obtain a standard score from a standardized test, which two pieces of information do you need?",
   [("The raw score and the chronological age", "Correct: the raw score is converted using the age-based norms."),
    ("The percentile rank and the confidence interval", "Both are derived after conversion."),
    ("The basal and the age equivalent", "Not the conversion inputs."),
    ("The scaled score and the stanine", "Derived scores.")],
   0, "Slides 9 and 15 together.", "CA selects the correct normative group; the raw score is looked up in that group's table. This was also a COMD 4382 practice item (historical).", ["W2:slides 9, 15", "CODEX:section 4 T5"], style=("procedure",))
