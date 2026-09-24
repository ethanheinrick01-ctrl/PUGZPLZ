from core import *
def S(**k): return k

M = "m18"
module(M, 18, "Numbers workshop: her conventions under pressure", "Integrated · Procedures", "Weeks 2-4",
       "Every computed and classified number in the course, practiced at the boundaries: ages, score transfers, bell-curve bands, percentiles, rate, TRMR.")
concept("m18-ca", M, "Chronological age with borrowing (convention stated)")
concept("m18-transfer", M, "Transferring positions across scales")
concept("m18-boundary", M, "Band boundaries: 69/70/71, 84/85, 115/116, 129/130/131")
concept("m18-mixed", M, "Mixed procedures: rate, TRMR, adjusted age")

section(M, S(h="How this workshop uses her conventions",
    body=["All band labels come from her Week 2 bell-curve slide; all scales from her slide 17 table. Where the course sources disagree (CA borrow days; −1.5 SD 'significantly below' in the textbook; exact 70/130), the item states the convention or avoids the ambiguous value. Use the Tools tab to check any number against the same functions the answer keys use."],
    callouts=[dict(k="numbers", t="Transfer rule: z = (score − mean) ÷ SD, then new score = new mean + z × new SD. Standard 100/15; scaled 10/3; z 0/1; stanine 5/2.", ev="slide")],
    src=["W2:slides 17-18"]))

num("m18-ca-01", "m18-ca",
   "Use a 30-day borrow. Birth date: October 25, 2018. Test date: March 12, 2026.",
   [("Years", "y", 7, 0), ("Months", "m", 4, 0), ("Days", "d", 17, 0)],
   "Borrow for days (12 + 30), then borrow a year for months.",
   "Days: 12 + 30 − 25 = 17 (month 3 → 2). Months: 2 + 12 − 10 = 4 (year 2026 → 2025). Years: 2025 − 2018 = 7. A calendar borrow from February 2026 (28 days) would give 15 days: this is why the convention must be named.",
   ["CODEX:section 8", "TB1:PDF p. 49"], ev="historical")

num("m18-ca-02", "m18-ca",
   "No borrowing needed. Birth date: January 3, 2021. Test date: August 29, 2026.",
   [("Years", "y", 5, 0), ("Months", "m", 7, 0), ("Days", "d", 26, 0)],
   "Straight subtraction.", "29 − 3 = 26; 8 − 1 = 7; 2026 − 2021 = 5.", ["W2:slide 9"])

num("m18-ca-03", "m18-ca",
   "Use a 30-day borrow. Birth date: May 30, 2017. Test date: June 2, 2026.",
   [("Years", "y", 9, 0), ("Months", "m", 0, 0), ("Days", "d", 2, 0)],
   "Days: 2 < 30, borrow. Then months: 5 vs 5.",
   "Days: 2 + 30 − 30 = 2 (month 6 → 5). Months: 5 − 5 = 0. Years: 2026 − 2017 = 9. (Calendar borrow from May's 31 days gives 3 days.)",
   ["CODEX:section 8", "TB1:PDF p. 49"], ev="historical")

tf("m18-ca-04", "m18-ca",
   "When you borrow days from the month column, the month value drops by one before you subtract the birth month.",
   True, "Forgetting this produces an age one month too old (a common error).", "Borrowing isn't free.", "Textbook Ch. 1 procedure; codex 'Domino Box' trap (a CA error cascades into every score).", ["TB1:PDF p. 49", "CODEX:section 6"], ev="textbook", style=("procedure",))

num("m18-tr-01", "m18-transfer",
   "A scaled score of 7 sits at what standard score and z score?",
   [("Standard score", "", 85, 0), ("z score", "", -1, 0)], "(7 − 10) ÷ 3.", "−1 SD → 85; z = −1.", ["W2:slide 17"])

num("m18-tr-02", "m18-transfer",
   "A z score of +1.5 corresponds to what standard score (100/15)? Give the exact value (decimals allowed).",
   [("Standard score", "", 122.5, 0)], "100 + 1.5 × 15.", "100 + 22.5 = 122.5 (Above Average band on her slide).", ["W2:slide 17"])

num("m18-tr-03", "m18-transfer",
   "The textbook notes that −1.5 SD corresponds to which standard score and which scaled score?",
   [("Standard score", "", 77.5, 0), ("Scaled score", "", 5.5, 0)], "100 − 22.5; 10 − 4.5.", "77.5 and 5.5 (textbook Ch. 1). On her bell curve, 77.5 falls in 'Below Average'.", ["TB1:PDF p. 51", "W2:slide 18"], ev="textbook")

mc("m18-tr-04", "m18-transfer",
   "Which set lists the SAME position on three scales?",
   [("Standard 130, scaled 16, z +2", "Correct: all +2 SD."), ("Standard 130, scaled 13, z +2", "Scaled 13 is +1 SD."),
    ("Standard 115, scaled 16, z +1", "Scaled 16 is +2 SD."), ("Standard 70, scaled 7, z −2", "Scaled 7 is −1 SD.")],
   0, "Convert each to z.", "Slide 17 scales.", ["W2:slide 17"], style=("number",))

hotspot("m18-bd-01", "m18-boundary",
   "Click the band for a standard score of 116.", "bell", "above",
   "Average ends at 115.", "116 is above 115 → Above Average (textbook: above 115 is above average; her slide: 115-130 band).",
   ["W2:slides 17-18", "TB1:PDF p. 51"], zone_why={"average": "115 is the top of average; 116 is past it."})

hotspot("m18-bd-02", "m18-boundary",
   "Click the band for a standard score of 71.", "bell", "below",
   "Just above the −2 SD line.", "71 is above 70 → Below Average (70-85 band) on her slide. The textbook's −1.5 SD rule would say significantly below; conflict flagged in Module 7.", ["W2:slide 18"],
   zone_why={"sigbelow": "Significantly below is under 70."})

hotspot("m18-bd-03", "m18-boundary",
   "Click the band for a standard score of 131.", "bell", "sigabove",
   "Past +2 SD?", "131 is above 130 → Significantly Above Average.", ["W2:slide 18"], zone_why={"above": "Above average is 115-130."})

hotspot("m18-bd-04", "m18-boundary",
   "Click the band for a standard score of 85.", "bell", "average",
   "Slide 17 wording.", "85-115 fall within 1 SD of the mean → 85 is Average. 84 would be Below Average. Her slide 18 picture draws a line at 85 and labels below average '70 to 85'; the slide 17 wording and the textbook settle 85 as average (see the conflict note in Module 7).", ["W2:slide 17"],
   zone_why={"below": "85 is the bottom of the average range, not below it."})

mc("m18-bd-05", "m18-boundary",
   "Which statement about the score of exactly 70 is supported by her slides?",
   [("It is the −2 SD point on her bell curve (≈ 2nd percentile)", "Correct. Her picture draws the band line there without saying which band owns 70."),
    ("It is definitively 'Below Average' on her slide", "The slide doesn't assign the endpoint."),
    ("It is definitively 'Significantly Below Average' on her slide", "The slide doesn't assign the endpoint (the textbook says −2 SD is '70 or below')."),
    ("It is 1 SD below the mean", "That is 85.")],
   0, "Only one option claims what the slide actually shows.", "Slide 18 marks 70 as −2 SD and the 2nd percentile.", ["W2:slide 18", "TB1:PDF p. 51"], style=("number",))

num("m18-mx-01", "m18-mixed",
   "A client reads a passage of 210 words in 70 seconds. Rate?", [("Rate", "wpm", 180, 0)], "Words ÷ seconds × 60.", "210 ÷ 70 = 3 × 60 = 180 wpm.", ["W4:slide 12"])

num("m18-mx-02", "m18-mixed",
   "TRMR: max opening 45 mm; tongue-up opening 36 mm.", [("TRMR", "%", 80, 0.5)], "(36 ÷ 45) × 100.",
   "36 ÷ 45 × 100 = 80%. The presenter's categories are >80 typical, 50-80 mild, <50 moderate-severe, so exactly 80% falls in 'mild' by her wording.", ["OPE:53:16-54:08"], ev="video")

num("m18-mx-03", "m18-mixed",
   "A baby born 6 weeks early is 7 months old (chronological). Treat 4 weeks as 1 month, as her slide did. Adjusted age in months (decimals allowed)?",
   [("Adjusted age", "months", 5.5, 0)], "6 weeks = 1.5 months.", "7 − 1.5 = 5.5 months (her slide: 8 weeks = 2 months).", ["W2:slide 11"])

mc("m18-mx-04", "m18-mixed",
   "In Method 2 DDK on her slide, how many total syllables does the client produce for 10 repetitions of 'puh-tuh-kuh'?",
   [("30", "Correct: 3 syllables × 10 reps."), ("10", "10 repetitions, but each has 3 syllables."), ("20", "20 reps is the single-syllable count."), ("60", "Double-counts.")],
   0, "Count syllables per repetition.", "Slide 7: 10 reps of puh-tuh-kuh.", ["W4:slide 7"], style=("number",))
