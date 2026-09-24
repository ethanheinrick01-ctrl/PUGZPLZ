from core import *

P = "mockB"
# ======================= MOCK B : 20 T/F =======================
tf("xb-tf-01", "m1-reasoning", "According to her Week 1 slide, a student who can memorize test names but cannot interpret findings will struggle as a clinician.", True,
   "False edit: '...will succeed as long as the tests are administered correctly'.", "Slide 4.", "W1 slide 4.", ["W1:slide 4"], pool=P)
tf("xb-tf-02", "m2-ethics", "ASHA's Code of Ethics allows clinicians to assess outside their competence when no other clinician is available.", False,
   "Professionals should ONLY engage in assessment within their competence (education, training, experience).", "Slide 10.", "W1 slide 10.", ["W1:slide 10"], style=("antonym",), pool=P)
tf("xb-tf-03", "m2-ebp", "On the EBP slide, external evidence is information from the scientific literature, while internal evidence is data and observations collected on your individual client.", True,
   "False edit: swap external and internal.", "Slide 8.", "W1 slide 8.", ["W1:slide 8"], style=("sibling",), pool=P)
tf("xb-tf-04", "m3-accuracy", "The ASHA video warns that sensitivity and specificity values reported for one target disorder cannot be presumed to apply to a different target disorder.", True,
   "The digit-triplets example: great values, wrong target disorder.", "Sensitive and specific to what?", "VB 23:40-25:39, 30:38-32:11.", ["VB:23:40-25:39", "VB:30:38-32:11"], ev="video", pool=P)
tf("xb-tf-05", "m3-sufficiency", "According to the video, test anxiety and premorbid ability are clinician-related challenges to diagnostic accuracy.", False,
   "They are PATIENT-related challenges. Clinician/scientific-community challenges are changing classification schemes and the skills needed to interpret responses.", "Two categories.", "VB 43:19-46:03.", ["VB:43:19-46:03"], ev="video", style=("sibling",), pool=P)
tf("xb-tf-06", "m5-manual", "Before administering a standardized test, her slide says to review its psychometric properties and the population for whom it was designed.", True,
   "False edit: drop 'population' and add 'the client's age equivalent'.", "Slide 5.", "W2 slide 5.", ["W2:slide 5"], pool=P)
tf("xb-tf-07", "m6-ca", "Her Week 2 slides specify that a borrowed month always adds 31 days when calculating chronological age.", False,
   "Her current slides give NO borrowing rule (they point to calculators). The textbook says 30 or 31 by month; her 4382 key used 30.", "What do the current slides actually say?", "W2 slides 9-12; TB1 p. 49; codex s8.", ["W2:slides 9-12", "TB1:PDF p. 49", "CODEX:section 8"], style=("absolute", "number"), pool=P)
tf("xb-tf-08", "m6-basal", "Basal and ceiling rules help find the client's zone of performance while keeping the assessment efficient, standardized and valid.", True,
   "False edit: '...replace the need to calculate a raw score'.", "Slide 14 SmartArt.", "W2 slide 14.", ["W2:slide 14"], pool=P)
tf("xb-tf-09", "m7-scales", "According to her score table, stanines have a mean of 5 and a standard deviation of 3.", False,
   "Stanine SD is 2 (mean 5). SD 3 belongs to scaled scores (mean 10).", "Number swap from a neighboring row.", "W2 slide 17.", ["W2:slide 17"], style=("number", "sibling"), pool=P)
tf("xb-tf-10", "m7-ci", "According to her slide, a 90% confidence interval is most commonly used clinically.", False,
   "90% is 'commonly REPORTED'; 95% is 'most commonly used clinically'.", "Two 'commonly' labels.", "W2 slide 20.", ["W2:slide 20"], style=("number", "sibling"), pool=P)
tf("xb-tf-11", "m7-bands", "A standard score of 69 falls in the 'significantly below average' band on her bell curve.", True,
   "Boundary: 71 would be Below Average.", "Below 70?", "W2 slide 18.", ["W2:slide 18"], style=("number",), pool=P)
tf("xb-tf-12", "m9-quality", "Her slide says an evaluation should identify the nature and severity of any disorder, not just produce a single test score.", True,
   "False edit: '...identify the severity only'.", "Slide 3.", "W3A slide 3.", ["W3A:slide 3"], pool=P)
tf("xb-tf-13", "m9-direct", "Play-based assessment on her slide requires the clinician to direct each activity rather than follow the child's lead.", False,
   "Play-based assessment FOLLOWS the child's lead.", "Slide 12.", "W3A slide 12.", ["W3A:slide 12"], style=("antonym",), pool=P)
tf("xb-tf-14", "m10-share", "When sharing findings, her slide recommends emphasizing the client's strengths and ending by discussing next steps.", True,
   "False edit: 'beginning with next steps'.", "Slide 19.", "W3A slide 19.", ["W3A:slide 19"], pool=P)
tf("xb-tf-15", "m4-asked", "In the ASKED model, the K stands for Knowledge and the D stands for Diagnosis.", False,
   "K = Knowledge, but D = DESIRE.", "A-S-K-E-D.", "W3B slide 6.", ["W3B:slide 6"], style=("sibling",), pool=P)
tf("xb-tf-16", "m4-da-std", "Her slide lists 'score according to question intent' as one way a standardized test might be modified for a CLD client.", True,
   "False edit: 'score according to the original norms'.", "Slide 12.", "W3B slide 12.", ["W3B:slide 12"], pool=P)
tf("xb-tf-17", "m11-cases", "In the mock parent case, Maya had her hearing checked by an audiologist after her ear infections.", False,
   "Her hearing was checked only at the PEDIATRICIAN'S office; she has never had a full audiological evaluation.", "Parent handout hearing history.", "MOCKP.", ["MOCKP:pp. 5-8"], ev="assignment", style=("scenario",), pool=P)
tf("xb-tf-18", "m14-smc", "According to the video, two or more submucous cleft markers increase suspicion, and consistent hypernasality or nasal emission supports the diagnosis.", True,
   "False edit: 'a bifid uvula alone is diagnostic'.", "OPE 1:09:24.", "OPE.", ["OPE:1:09:24-1:10:23"], ev="video", pool=P)
tf("xb-tf-19", "m15-ddkadmin", "In DDK Method 1, the clinician measures the seconds it takes to produce a set number of syllables.", False,
   "That is METHOD 2 (the more common one). Method 1 counts syllables produced within a number of seconds.", "Fixed time vs fixed count.", "W4 slide 6.", ["W4:slide 6"], style=("sibling",), pool=P)
tf("xb-tf-20", "m17-levels", "On her narrative table, inferences, motivations and causal relationships are examined at the microstructure level.", False,
   "They are HIGHER-LEVEL LANGUAGE. Microstructure = grammar, vocabulary, syntax, cohesion.", "Slide 15.", "W5 slide 15.", ["W5:slide 15"], style=("sibling",), pool=P)

# ======================= MOCK B : 20 MC =======================
mc("xb-mc-01", "m1-conflict", "Standardized results and clinical observations conflict. According to her 9/11 lecture, which statement is NOT accurate?",
   [("You are required to make a diagnosis from the standardized score", "Correct answer. She said you are not forced; further testing is warranted."),
    ("You may state that further testing is warranted", "Accurate."), ("The conflict may mean the assessment wasn't prepared appropriately", "She said this."),
    ("Clinical judgment guides the next step", "Accurate (9/9).")],
   0, "Are you forced?", "9/11, 9/9 lectures.", ["L0911", "L0909"], ev="lecture", style=("negative",), pool=P)
mc("xb-mc-02", "m2-culture", "Her Week 1 slide's central question about cultural and linguistic factors is:",
   [("Is this pattern a difference resulting from language or culture, or evidence of an underlying disorder?", "Correct."),
    ("Which standardized test has the largest normative sample?", "Not the slide's question."),
    ("Does the client speak English well enough to be tested?", "Not the slide's framing."),
    ("Is an interpreter available in the client's primary language?", "A linguistic factor, not the central question.")],
   0, "Difference vs disorder.", "W1 slide 12.", ["W1:slide 12"], pool=P)
mc("xb-mc-03", "m3-validity-evidence", "All of the following are among the four kinds of evidence the video uses to judge whether a test measures the skills relevant to a diagnosis EXCEPT:",
   [("Test-retest reliability", "Correct answer. Reliability answers the NEXT question (does it measure consistently?)."),
    ("Content", "One of the four."), ("Response process", "One of the four."), ("Relations with other variables", "One of the four.")],
   0, "Accuracy of measurement vs consistency.", "VB 32:52-41:19.", ["VB:32:52-41:19"], ev="video", style=("negative", "sibling"), pool=P)
mc("xb-mc-04", "m3-eba", "All of the following are solutions proposed in the first ASHA video EXCEPT:",
   [("Relying on the most familiar and available tests", "Correct answer. Availability and familiarity were described as the PROBLEM."),
    ("Updating instructional practices", "Solution."), ("Implementing decision-making processes", "Solution."),
    ("Using a structured process to evaluate and mitigate bias", "Solution.")],
   0, "Which option restates a problem?", "VA 3:03-4:30.", ["VA:3:03-4:30"], ev="video", style=("negative",), pool=P)
mc("xb-mc-05", "m5-normcrit", "Which assessment would most directly answer 'How does my client compare to the average?'",
   [("A norm-referenced standardized test", "Correct."), ("A criterion-referenced test", "Compares to an expected level of performance."),
    ("Dynamic assessment", "Responsiveness to teaching."), ("A rating scale completed by a teacher", "Information from others.")],
   0, "'Average' implies a norm group.", "Textbook Ch. 1; W2 slide 4.", ["TB1:PDF p. 47", "W2:slide 4"], ev="textbook", style=("sibling",), pool=P)
mc("xb-mc-06", "m6-adjusted", "A child born 8 weeks early is assessed at a chronological age of 11 months. Using her slide's method, the adjusted age is:",
   [("9 months", "Correct: 11 − 2."), ("11 months", "Chronological age."), ("13 months", "Adds instead of subtracts."), ("3 months", "11 − 8 treats weeks as months.")],
   0, "8 weeks = 2 months on her slide.", "W2 slide 11.", ["W2:slide 11"], style=("number",), pool=P)
mc("xb-mc-07", "m7-scales", "Which score has the SAME position as a standard score of 85?",
   [("Scaled score 7", "Correct: both −1 SD."), ("Scaled score 8.5", "Not a slide value; −0.5 SD."), ("z score −1.5", "−1.5 SD = 77.5."), ("Stanine 1", "Far below.")],
   0, "−1 SD on each scale.", "W2 slide 17.", ["W2:slide 17"], style=("number",), pool=P)
mc("xb-mc-08", "m7-ae", "According to her slide, which score type is described as descriptive and should NOT be used to determine eligibility or severity?",
   [("Age equivalent", "Correct."), ("Standard score", "Used for eligibility."), ("Percentile rank", "Easiest for parents; not flagged this way."), ("z score", "Same underlying performance.")],
   0, "Slide 17 last row.", "W2 slide 17.", ["W2:slide 17"], pool=P)
mc("xb-mc-09", "m7-percentile", "A parent asks what the 16th percentile means. Using her slide's definition, which explanation is accurate?",
   [("Your child scored as well as or better than about 16% of same-age peers in the norm group", "Correct: 'at or below'."),
    ("Your child got 16% of the items right", "Percent correct is not percentile rank."),
    ("Your child scored better than 84% of peers", "Reverses the direction."),
    ("Your child is 16 points below average", "Not a point difference.")],
   0, "At or below.", "W2 slides 17, 21.", ["W2:slides 17, 21"], style=("scenario",), pool=P)
mc("xb-mc-10", "m8-sensspec", "A screening tool flags many typically developing children as having a disorder. Which property is most likely LOW?",
   [("Specificity", "Correct: low specificity → false positives (over-identification)."), ("Sensitivity", "Low sensitivity would miss disordered children."),
    ("Reliability", "Not indicated."), ("Standardization", "Not indicated.")],
   0, "Who is being mislabeled?", "W2 slides 23-24; TB1 p. 42.", ["W2:slides 23-24", "TB1:PDF p. 42"], style=("scenario",), pool=P)
mc("xb-mc-11", "m9-influences", "All of the following are INTERNAL influences on her slide EXCEPT:",
   [("Linguistic factors", "Correct answer. External."), ("Cognition and communication", "Internal."), ("Motor abilities and strength", "Internal."), ("Hearing and visual acuity", "Internal.")],
   0, "Inside vs around the person.", "W3A slide 11.", ["W3A:slide 11"], style=("negative",), pool=P)
mc("xb-mc-12", "m9-formalinformal", "Her slide cites ASHA's Scope of Practice from which year as explicitly recommending multiple data sources?",
   [("2016", "Correct."), ("2004", "Preferred Practice Patterns."), ("1996", "HIPAA."), ("2021", "Not on her slide.")],
   0, "Three years across the decks.", "W3A slide 13.", ["W3A:slide 13"], style=("number",), pool=P)
mc("xb-mc-13", "m10-report", "Which content does NOT belong in the Identifying Information section of her report framework?",
   [("A concise statement of why the evaluation was requested", "Correct answer. That is Reason for Referral."),
    ("Date of evaluation", "Identifying info."), ("Referral source", "Identifying info."), ("The clinician's credentials", "Identifying info.")],
   0, "Source vs reason.", "W3A slide 18.", ["W3A:slide 18"], style=("negative", "sibling"), pool=P)
mc("xb-mc-14", "m4-cld", "All of the following are considerations for assessing CLD clients on her slide EXCEPT:",
   [("Test in both languages within the same item to save time", "Correct answer. The slide says test in one language at a time."),
    ("Use culturally appropriate materials", "Listed."), ("Be prepared to modify the assessment plan", "Listed."), ("Use an interpreter/translator if needed", "Listed.")],
   0, "One language at a time.", "W3B slide 7.", ["W3B:slide 7"], style=("negative",), pool=P)
mc("xb-mc-15", "m11-questions", "Which intake question topic is NOT on her Week 4 slide?",
   [("The client's preferred reinforcement schedule", "Correct answer. Not listed."), ("Progression of the behavior", "Listed."),
    ("Responses to the behavior", "Listed."), ("Involvement of other professionals", "Listed.")],
   0, "Ten topics.", "W4 slide 3.", ["W4:slide 3"], style=("negative",), pool=P)
mc("xb-mc-16", "m12-findings", "A client shows asymmetry of the face and palate. Her slide lists this as a finding; the textbook says it is often associated with:",
   [("Neurological impairment or muscle weakness", "Correct."), ("A submucous cleft", "Different sign (whitish border)."), ("Tongue thrust", "Associated with prominent rugae."), ("Normal variation needing no follow-up", "Not the textbook interpretation.")],
   0, "Textbook Ch. 6.", "W4 slide 5; TB6 p. 182.", ["W4:slide 5", "TB6:PDF p. 182"], ev="textbook", pool=P)
mc("xb-mc-17", "m13-airway", "Which finding does the video associate with INTERMITTENT congestion?",
   [("Allergies", "Correct."), ("Enlarged turbinates, tonsils or adenoids", "Consistent obstruction → structural."), ("VPI", "Nasal emission on pressure sounds."), ("Cranial nerve VII weakness", "Unrelated.")],
   0, "Comes and goes.", "OPE 25:28-26:24.", ["OPE:25:28-26:24"], ev="video", style=("sibling",), pool=P)
mc("xb-mc-18", "m14-tongue", "All of the following are true of the TRMR as presented in the video EXCEPT:",
   [("It grades the frenum by its appearance", "Correct answer. It measures FUNCTION (movement), not appearance."),
    ("It divides tongue-up opening by maximum opening and multiplies by 100", "True."), ("Greater than 80% indicates typical mobility", "True."),
    ("Less than 50% indicates moderate to severe restriction", "True.")],
   0, "Function vs appearance.", "OPE 52:27-54:08.", ["OPE:52:27-54:08"], ev="video", style=("negative",), pool=P)
mc("xb-mc-19", "m15-narrative", "Her slide says reading passages allow the clinician to compare oral reading results with:",
   [("Single-word or short-phrase utterances and conversational speech samples", "Correct."), ("The client's standardized vocabulary score", "Not stated."),
    ("DDK rates", "Not stated."), ("Norms for words per minute", "Rate isn't compared to norms per her slide.")],
   0, "Slide 11.", "W4 slide 11.", ["W4:slide 11"], pool=P)
mc("xb-mc-20", "m16-observe", "Which is NOT on her Week 5 list of what to look at during clinical observation?",
   [("The client's raw score on each subtest", "Correct answer."), ("Voice quality", "Listed."), ("Use of gestures", "Listed."), ("Turn-taking", "Listed.")],
   0, "Observation look-fors are behaviors.", "W5 slide 4.", ["W5:slide 4"], style=("negative",), pool=P)
