from core import *
def S(**k): return k

M = "m07"
module(M, 7, "Norms, score scales and her bell curve", "Week 2 · Numbers", "Week 2 (+ 9/2 lecture)",
       "Her score table and bell-curve slide are the numerical conventions for this course. Learn the scales, the band boundaries, percentiles, age equivalents and confidence intervals, and where the textbook disagrees.")
concept("m7-norms", M, "Normative data: what norms make possible")
concept("m7-scales", M, "Score scales: standard, scaled, z, stanine (means and SDs)")
concept("m7-bands", M, "Her bell-curve bands and boundary scores")
concept("m7-percentile", M, "Percentile rank: meaning and bell-curve anchors")
concept("m7-ae", M, "Age equivalents and what eligibility is based on")
concept("m7-ci", M, "Confidence intervals: meaning and levels")

section(M, S(h="Normative data (slide 16)",
    body=["Normative data = performance information collected from **a large group of individuals who represent the population for whom a test was designed**; their scores become the test's norms. Four reasons it matters: **allows comparison to peers; makes standardized scores possible; supports diagnostic and eligibility decisions; helps determine whether performance is 'typical'.**"],
    src=["W2:slide 16"]))

section(M, S(h="Her score table (slide 17)",
    table=dict(head=["Score type", "Mean", "SD", "Her example"], rows=[
        ["Standard score", "100", "15", "115 is 1 SD above average; 85 is 1 SD below. Most standardized tests use this metric."],
        ["Standard deviation", "N/A", "N/A", "With mean 100 and SD 15, scores from 85-115 fall within 1 SD of the mean."],
        ["Percentile rank", "50th", "N/A", "% of the norm group scoring AT OR BELOW a score. 75th = performed as well as or better than 75%."],
        ["Scaled score", "10", "3", "Used for subtests. 13 = 1 SD above; 7 = 1 SD below."],
        ["z score", "0", "1", "+2.0 = two SDs above; −1.0 = one SD below."],
        ["Stanine", "5", "2", "Nine categories. 5 = average; 7-9 = above average; 1-3 = below average."],
        ["Age equivalent", "N/A", "N/A", "Age at which the raw score is typical. Descriptive; NOT for eligibility or severity."]]),
    callouts=[dict(k="numbers", t="Same position, different scales: SS 85 = scaled 7 = z −1. SS 70 = scaled 4 = z −2. SS 115 = scaled 13 = z +1. Slide 21: standard scores, z scores, scaled scores and stanines all express the same underlying performance relative to a norm group.", ev="slide"),
              dict(k="conflict", t="Stanines 4 and 6 are not labeled on her slide (5 = average, 7-9 above, 1-3 below). The textbook says 54% of people score 4, 5 or 6. This lab does not key a band label for stanine 4 or 6.", ev="textbook")],
    src=["W2:slides 17, 21", "TB1:PDF p. 51"]))

section(M, S(h="The bell curve she showed (slide 18)",
    visual="bell",
    body=["Her slide 18 image labels the bands and anchors. This is the course's numerical convention for describing standard scores:"],
    table=dict(head=["Band on her slide", "Standard scores", "SD", "Percentile anchors"], rows=[
        ["Significantly below average", "below 70", "beyond −2 SD", "70 ≈ 2nd; 55 ≈ <0.1"],
        ["Below average", "70 to 85", "−2 to −1 SD", "85 ≈ 16th"],
        ["Average", "85 to 115", "−1 to +1 SD", "100 = 50th"],
        ["Above average", "115 to 130", "+1 to +2 SD", "115 ≈ 84th"],
        ["Significantly above average", "above 130", "beyond +2 SD", "130 ≈ 98th; 145 ≈ >99.9"]]),
    callouts=[dict(k="numbers", t="Boundary rules used in this lab: 85 and 115 are AVERAGE (slide 17: 'scores from 85-115 fall within 1 SD'; the textbook: average range 85-115, below 85 is below average, above 115 is above average). So 84 = below average, 116 = above average, 71 = below average, 69 = significantly below average.", ev="slide"),
              dict(k="conflict", t="Exactly 70 and exactly 130 sit ON the ±2 SD lines of her picture, and the slide does not say which band owns the line. The textbook says −2 SD is 'a standard score of 70 or below'. This lab never keys a band for exactly 70 or 130; know that they are the −2 SD and +2 SD points.", ev="slide"),
              dict(k="conflict", t="Second genuine conflict: the textbook (Ch. 1) says performance −1.5 to −2 SD below the mean is 'usually considered significantly below average' (−1.5 SD = SS 77.5, scaled 5.5). Her slide labels 70-85 'Below Average' and reserves 'Significantly Below Average' for below 70. For her class, the lab uses her slide's labels.", ev="textbook"),
              dict(k="lecture", t="9/2: 'Is he significantly below average, or is he just below average? Because those are two different' things. Where the patient lands relative to the norm is 'the important part from the diagnostic' standpoint.", ev="lecture")],
    src=["W2:slides 17-18", "L0902", "TB1:PDF p. 51"]))

section(M, S(h="Percentiles, age equivalents and eligibility (slides 17, 21)",
    bullets=["Percentile rank = percentage of the norm group scoring **at or below** a score. It is not percent correct.",
             "**Percentile ranks are often easiest for parents and clients to understand.**",
             "Standard deviations help clinicians determine how far a score is from average.",
             "**Age equivalents** should be interpreted cautiously; they do not represent overall ability and often overstate or understate performance. They should not be used to determine eligibility or severity.",
             "**Most eligibility decisions** in clinical and educational settings are based on **standard scores and standard deviations**, not age equivalents."],
    callouts=[dict(k="lecture", t="9/2: our field is moving away from age equivalents, though you will still see them on tests; they don't always capture the skill, and they won't qualify a child or satisfy insurance.", ev="lecture")],
    src=["W2:slides 17, 21", "L0902"]))

section(M, S(h="Confidence intervals (slides 19-20)",
    body=["A **confidence interval** is a range of scores around the obtained score that reflects the possibility of **measurement error**. If the same person took the test multiple times, the score might vary slightly. Why they matter: no test score is perfectly 'exact'; a more accurate picture of ability; better clinical decisions; supports evidence-based assessment."],
    table=dict(head=["Confidence level", "Her slide"], rows=[
        ["68%", "Less conservative, narrower range"], ["90%", "Commonly reported"],
        ["95%", "Most commonly used clinically"], ["99%", "Most conservative, widest range"]]),
    callouts=[dict(k="numbers", t="As confidence INCREASES, the interval gets WIDER (more certainty that the true score is inside).", ev="slide"),
              dict(k="conflict", t="Course wording vs psychometrics: her slide 19 says 'Confidence intervals increase the reliability of the test' (she said it in the 9/2 lecture too, and the textbook uses the same sentence). Technically an interval expresses measurement error; it does not change a test's reliability coefficient. If the exam quotes the slide sentence, her source says True. Know both.", ev="slide"),
              dict(k="textbook", t="Textbook: CIs are especially useful for borderline scores; reporting a range can place a client in the below-average range and help justify therapy when other data agree.", ev="textbook")],
    src=["W2:slides 19-20", "L0902", "TB1:PDF pp. 51-52"]))

# ---------------- items ----------------
mc("m7-norm-01", "m7-norms",
   "All of the following are reasons normative data matter on her slide EXCEPT:",
   [("They guarantee that the test is valid for every client", "Correct answer. Norms don't guarantee validity; whether the norm group represents the client is a separate question."),
    ("They allow comparison to peers", "Listed."),
    ("They make standardized scores possible", "Listed."),
    ("They support diagnostic and eligibility decisions", "Listed.")],
   0, "Four boxes on slide 16. Which option overclaims?", "Slide 16. The ASHA video adds: ask whether the normative sample reflects the person being tested.", ["W2:slide 16", "VB:32:11-32:52"], style=("negative",))

mc("m7-sc-01", "m7-scales",
   "On her score table, which scale has a mean of 10 and a standard deviation of 3?",
   [("Scaled score", "Correct; commonly used for subtests."),
    ("Stanine", "Stanine: mean 5, SD 2."),
    ("Standard score", "Standard: mean 100, SD 15."),
    ("z score", "z: mean 0, SD 1.")],
   0, "Subtest scores.", "Slide 17.", ["W2:slide 17"], style=("sibling", "number"))

mc("m7-sc-02", "m7-scales",
   "Which pairing of score type and mean/SD is NOT correct on her table?",
   [("Stanine: mean 5, SD 3", "Correct answer. Stanine SD is 2."),
    ("Standard score: mean 100, SD 15", "Correct pairing."),
    ("Scaled score: mean 10, SD 3", "Correct pairing."),
    ("z score: mean 0, SD 1", "Correct pairing.")],
   0, "Number mutation: one SD is swapped from a neighboring row.", "Slide 17.", ["W2:slide 17"], style=("negative", "number"))

tf("m7-sc-03", "m7-scales",
   "A scaled score of 12 is 1 SD above average and a scaled score of 8 is 1 SD below average.",
   False, "Scaled scores have SD 3: 13 is +1 SD and 7 is −1 SD. 12 and 8 would imply SD 2 (the stanine SD).", "Mean 10, SD 3.", "Slide 17 scaled-score row.", ["W2:slide 17"], style=("number",))

tf("m7-sc-04", "m7-scales",
   "Standard scores, z scores, scaled scores and stanines are all ways of expressing the same underlying performance relative to a norm group.",
   True, "Tempting false edit: add 'age equivalents' to the list.", "Slide 21, first box.", "Slide 21. Age equivalents are the one score she cautions against.", ["W2:slide 21"])

num("m7-sc-05", "m7-scales",
   "A child earns a standard score of 70 on a test with mean 100 and SD 15. Give the z score and the scaled score (mean 10, SD 3) at the same position.",
   [("z score", "", -2, 0), ("Scaled score", "", 4, 0)],
   "How many SDs below 100 is 70?", "(70 − 100) ÷ 15 = −2. Scaled: 10 + (−2 × 3) = 4.", ["W2:slide 17"])

num("m7-sc-06", "m7-scales",
   "A subtest scaled score is 16. What standard score (100/15) and z score occupy the same position?",
   [("Standard score", "", 130, 0), ("z score", "", 2, 0)],
   "(16 − 10) ÷ 3.", "+2 SD → 100 + 30 = 130; z = +2.", ["W2:slide 17"])

hotspot("m7-band-01", "m7-bands",
   "Click the band on her bell curve where a standard score of 78 falls.",
   "bell", "below",
   "Find 70 and 85 on the axis.",
   "78 is between 70 (−2 SD) and 85 (−1 SD): her slide labels that band 'Below Average'. (The textbook would call −1.5 SD and lower 'significantly below average'; for her class, use her slide.)",
   ["W2:slide 18"], style=("visual", "number"),
   zone_why={"sigbelow": "Significantly below average is below 70.", "average": "Average starts at 85.", "above": "Above 115.", "sigabove": "Above 130."})

hotspot("m7-band-02", "m7-bands",
   "Click the band where a standard score of 84 falls.",
   "bell", "below",
   "Is 84 inside or outside 85-115?",
   "84 is one point below the 85 line, so it is Below Average. 85 itself is in the average range (slide 17: 85-115 within 1 SD).",
   ["W2:slides 17-18", "TB1:PDF p. 51"], style=("visual", "number"),
   zone_why={"average": "85 is the lowest average score; 84 is outside.", "sigbelow": "Significantly below average is below 70."})

hotspot("m7-band-03", "m7-bands",
   "Click the band where a standard score of 115 falls.",
   "bell", "average",
   "Her slide 17 wording: scores from 85-115 fall within 1 SD.",
   "115 is exactly +1 SD. Her table says 85-115 fall within 1 SD of the mean, and the textbook calls 85-115 the average range (above 115 = above average). So 115 is Average; 116 would be Above Average. Her slide 18 picture labels above average '115 to 130', so the picture alone is ambiguous at 115; the lab keys the slide 17 wording (conflict note in this module).",
   ["W2:slides 17-18", "TB1:PDF p. 51"], style=("visual", "number"),
   zone_why={"above": "Above average begins above 115."})

hotspot("m7-band-04", "m7-bands",
   "Click the band where a standard score of 64 falls.",
   "bell", "sigbelow",
   "More than 2 SD below the mean?",
   "64 is below 70 (−2 SD), which her slide labels Significantly Below Average.",
   ["W2:slide 18"], style=("visual", "number"),
   zone_why={"below": "Below average is 70-85; 64 is under 70."})

hotspot("m7-band-05", "m7-bands",
   "Click the band where a standard score of 122 falls.",
   "bell", "above",
   "Between +1 and +2 SD?",
   "122 is between 115 and 130: Above Average on her slide.",
   ["W2:slide 18"], style=("visual", "number"),
   zone_why={"average": "Average ends at 115.", "sigabove": "Significantly above begins above 130."})

mc("m7-band-06", "m7-bands",
   "Using her bell-curve slide, which standard score is the ONLY one in the 'Significantly Below Average' band?",
   [("69", "Correct: below 70."),
    ("71", "Between 70 and 85: Below Average."),
    ("78", "Below Average on her slide (the textbook's −1.5 SD cutoff would differ)."),
    ("84", "Below Average; 85 is the start of average.")],
   0, "Her line between the two lower bands is at 70.", "Her slide 18 places the 'Significantly Below Average' label below the 70 (−2 SD) line.", ["W2:slide 18"], style=("number",))

tf("m7-band-07", "m7-bands",
   "On her bell curve, a standard score of 85 is in the average range.",
   True, "False version: '85 is below average'. 84 is below average.", "Slide 17: scores from 85-115 fall within 1 SD.", "85 is the −1 SD point and her table places 85-115 within 1 SD of the mean.", ["W2:slide 17"], style=("number",))

mc("m7-band-08", "m7-bands",
   "Two children score 72 and 66. In her class's terms, how should they be described?",
   [("72 is below average; 66 is significantly below average", "Correct: 70 separates the two bands."),
    ("Both are significantly below average", "72 is above 70."),
    ("Both are below average", "66 is under 70."),
    ("72 is average; 66 is below average", "Average starts at 85.")],
   0, "Place each on the axis: 70 is the line.", "Her 9/2 distinction: significantly below average vs just below average are two different things; slide 18 draws the line at 70 (−2 SD). The textbook's −1.5 SD rule (77.5) would call 72 significantly below; the stem asks for her class's terms, so use the slide.", ["W2:slide 18", "L0902"], style=("scenario", "number"))

mc("m7-pr-01", "m7-percentile",
   "A student scores at the 75th percentile. According to her slide, this means the student:",
   [("Performed as well as or better than 75% of the norm group", "Correct, her wording."),
    ("Answered 75% of the items correctly", "Percent correct is not percentile rank."),
    ("Scored better than 25% of the norm group", "Reverses the comparison."),
    ("Scored 75 points on the standard-score scale", "Different scale entirely.")],
   0, "At or below.", "Slide 17: percentile rank = percentage of individuals in the norm group who scored at or below a person's score.", ["W2:slide 17"], style=("definition",))

mc("m7-pr-02", "m7-percentile",
   "On her bell-curve image, a standard score of 85 corresponds to approximately which percentile rank?",
   [("16th", "Correct."), ("2nd", "That is 70."), ("50th", "That is 100."), ("84th", "That is 115.")],
   0, "One SD below the mean.", "Slide 18 axis: 70 ≈ 2, 85 ≈ 16, 100 = 50, 115 ≈ 84, 130 ≈ 98.", ["W2:slide 18"], style=("number",))

tf("m7-pr-03", "m7-percentile",
   "Percentile ranks are often the easiest scores for parents and clients to understand.",
   True, "False version names standard scores or age equivalents instead.", "Slide 21 box 2.", "Slide 21.", ["W2:slide 21"])

tf("m7-ae-01", "m7-ae",
   "An age equivalent indicates the age at which the obtained raw score is typical, and it may be used to determine eligibility and severity.",
   False, "Age equivalents are descriptive and should NOT be used to determine eligibility or severity.",
   "Split the statement at 'and'.", "Slide 17 AE row; slide 21: eligibility is based on standard scores and SDs.", ["W2:slides 17, 21"], style=("therefore", "antonym"))

mc("m7-ae-02", "m7-ae",
   "A 10-year-old earns an age equivalent of 8 years, 6 months. What does her slide say this means?",
   [("The child performed similarly to the average 8.5-year-old in the norm sample", "Correct, her example."),
    ("The child functions like an 8.5-year-old in all areas", "AEs do not represent overall ability."),
    ("The child qualifies for services because the score is 18 months below age", "AEs should not determine eligibility."),
    ("The child is 1.5 SD below the mean", "AEs are not on the SD scale.")],
   0, "Her own example.", "Slide 17 AE example.", ["W2:slide 17"], style=("scenario",))

mc("m7-ae-03", "m7-ae",
   "According to her slide, most eligibility decisions in clinical and educational settings are based on:",
   [("Standard scores and standard deviations", "Correct."),
    ("Age equivalents", "Explicitly contrasted."),
    ("Percentile ranks explained to parents", "Percentiles are easiest to explain, not the eligibility basis."),
    ("Raw scores", "Raw scores must be converted.")],
   0, "Slide 21, last box.", "Slide 21.", ["W2:slide 21"])

mc("m7-ci-01", "m7-ci",
   "Which confidence level does her slide describe as 'most commonly used clinically'?",
   [("95%", "Correct."), ("90%", "Commonly REPORTED."), ("68%", "Less conservative, narrower."), ("99%", "Most conservative, widest.")],
   0, "Two levels have 'commonly' in their descriptions. Read closely.", "Slide 20 table.", ["W2:slide 20"], style=("number", "sibling"))

tf("m7-ci-02", "m7-ci",
   "As the confidence level increases, the confidence interval becomes narrower.",
   False, "As confidence increases, the interval becomes WIDER.", "99% = widest.", "Slide 20: as confidence increases, the interval becomes wider because we want greater certainty that the true score falls within the range.", ["W2:slide 20"], style=("antonym",))

mc("m7-ci-03", "m7-ci",
   "A confidence interval on her slide reflects:",
   [("The possibility of measurement error around the obtained score", "Correct."),
    ("The range of ages covered by the norms", "Not a CI."),
    ("The difference between the basal and ceiling items", "Not a CI."),
    ("The percentage of the norm group scoring below the client", "Percentile rank.")],
   0, "No score is perfectly exact.", "Slide 19 definition.", ["W2:slide 19"], style=("definition",))

tf("m7-ci-04", "m7-ci",
   "Her Week 2 slide states that confidence intervals increase the reliability of the test.",
   True, "This is her slide's (and the textbook's) exact sentence, so on her exam a verbatim version would be keyed True. Psychometric caveat: a CI expresses measurement error; it does not change the test's reliability coefficient.",
   "This asks what the slide states.",
   "Slide 19's last line and the 9/2 lecture say this. The lab keys the course wording and flags the technical caveat in the guide.",
   ["W2:slide 19", "L0902", "TB1:PDF p. 51"])

sort("m7-ci-05", "m7-ci",
   "Sort each confidence level to its description on her slide.",
   ["Narrower, less conservative", "Commonly reported", "Most commonly used clinically", "Widest, most conservative"],
   [("68%", "Narrower, less conservative"), ("90%", "Commonly reported"), ("95%", "Most commonly used clinically"), ("99%", "Widest, most conservative")],
   "One level per bucket.", "Slide 20 table.", ["W2:slide 20"])

tf("m7-norm-02", "m7-norms",
   "Normative data are the performance information collected from a large group of individuals who represent the population for whom a test was designed.",
   True, "False edit: '...collected from the individual client over repeated sessions' (that would be internal evidence).", "Slide 16 definition.", "Slide 16.", ["W2:slide 16"], style=("definition",))
