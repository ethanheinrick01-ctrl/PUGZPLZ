from core import *

P = "mockA"
# ======================= MOCK A : 20 T/F =======================
tf("xa-tf-01", "m1-process", "On her Assessment Process Framework, observation is its own stage that comes before the assessment stage in which formal and informal measures are administered.", True,
   "False edit: move observation after analysis.", "Seven stages in order.", "Slide 6: Referral & Review → Case History & Interview → Observation → Assessment → Analysis → Diagnosis → Report.", ["W1:slide 6"], style=("sequence",), pool=P)
tf("xa-tf-02", "m2-integrity", "A good assessment is evidence based, meaning it is appropriate for the client's age, gender, skill level and ethnocultural background.", False,
   "Evidence based = rely on valid and reliable approaches. Age/gender/skill/ethnocultural background = TAILORED to the individual client.", "Which parent owns this sub-bullet?", "Slide 7 sibling swap.", ["W1:slide 7"], style=("sibling",), pool=P)
tf("xa-tf-03", "m2-hipaa", "HIPAA's Security Rule requires safeguards to protect electronic protected health information.", True,
   "False edit: attribute this to the Privacy Rule.", "Privacy vs Security.", "Slide 11.", ["W1:slide 11"], style=("sibling",), pool=P)
tf("xa-tf-04", "m3-problems", "In the ASHA video, 80.6% of surveyed SLPs reported using psychometric properties to select an assessment approach.", False,
   "80.6% reported using INFORMAL DISCUSSION WITH COLLEAGUES; only 57% reported using psychometrics.", "Two percentages; which is which?", "VA 1:30-2:25.", ["VA:1:30-2:25"], ev="video", style=("number", "sibling"), pool=P)
tf("xa-tf-05", "m3-questions", "The first question in the video's decision-making process asks whether the test can be used for diagnosis, and the test manual is the most likely place to find its purpose.", True,
   "False edit: 'the first question asks whether the norm sample reflects the client'.", "Purpose comes first.", "VB 2:21-7:10.", ["VB:2:21-7:10"], ev="video", pool=P)
tf("xa-tf-06", "m5-accmod", "Allowing a client to respond in a different format than the test requires is an accommodation because it improves access.", False,
   "It is a MODIFICATION on her slide; it changes the standardized task.", "Slide 7's modification list.", "Slide 7.", ["W2:slide 7"], style=("sibling",), pool=P)
tf("xa-tf-07", "m6-adjusted", "Adjusted age is primarily used for premature infants, and using it helps avoid over-identifying delays.", True,
   "False edit: 'helps identify more delays'.", "Slide 10.", "Slide 10.", ["W2:slide 10"], pool=P)
tf("xa-tf-08", "m6-basal", "A ceiling is the point at which the examiner can assume the examinee would have answered all easier items correctly.", False,
   "That is the BASAL. The ceiling is where you assume the examinee would miss increasingly difficult items.", "Start confidence vs stop point.", "Slide 13.", ["W2:slide 13"], style=("sibling",), pool=P)
tf("xa-tf-09", "m7-scales", "A z score of −1.0 means the score is one standard deviation below average.", True,
   "False edit: 'one percentile below average'.", "z mean 0, SD 1.", "Slide 17.", ["W2:slide 17"], style=("number",), pool=P)
tf("xa-tf-10", "m7-bands", "On her bell curve, a standard score of 82 falls in the average range because it is within 1.5 SD of the mean.", False,
   "82 is BELOW AVERAGE on her slide (70-85). Average is 85-115, within 1 SD.", "Is 82 inside 85-115?", "Slides 17-18.", ["W2:slides 17-18"], style=("number", "therefore"), pool=P)
tf("xa-tf-11", "m7-ci", "A 99% confidence interval is the most conservative and has the widest range.", True,
   "False edit: 'narrowest'.", "Slide 20 table.", "Slide 20.", ["W2:slide 20"], style=("number",), pool=P)
tf("xa-tf-12", "m8-sensspec", "A test with low sensitivity is more likely to miss a disorder that is actually present.", True,
   "False edit swaps in 'low specificity'.", "Sensitivity catches the disordered.", "Slides 23-24; textbook Ch. 1.", ["W2:slides 23-24", "TB1:PDF p. 42"], pool=P)
tf("xa-tf-13", "m9-components", "Hearing loss can mimic or compound speech-language difficulties; therefore the SLP determines the degree of hearing loss during the speech-language evaluation.", False,
   "First half is true (her slide 5). Second half is false: the SLP screens or reviews recent audiological results and refers a failed screen to an audiologist; SLPs do not diagnose hearing loss (textbook Ch. 4).", "Split at 'therefore'.", "W3A slide 5; TB4.", ["W3A:slide 5", "TB4:PDF p. 154"], style=("therefore",), pool=P)
tf("xa-tf-14", "m9-history", "Information from other professionals is part of the case history, so it can replace the SLP's own direct testing.", False,
   "It is part of the case history but MAY LEAD TO A BIASED VIEW; she said you must do your own independent testing.", "Split at 'so'.", "Slide 8; 9/9 lecture.", ["W3A:slide 8", "L0909"], style=("therefore",), pool=P)
tf("xa-tf-15", "m10-report", "In her report framework, severity ratings belong in the clinical impressions section.", True,
   "False edit: 'results by domain'.", "Synthesis section.", "Slide 18.", ["W3A:slide 18"], style=("sibling",), pool=P)
tf("xa-tf-16", "m4-diff", "According to her slide, difficulties present in only one of a client's languages are a sign indicative of disorder.", False,
   "Difficulties in only ONE language indicate a DIFFERENCE; a disorder shows difficulties in ALL languages (e.g., difficulty learning both languages).", "Slide 13 definitions.", "Slide 13.", ["W3B:slide 13"], style=("antonym",), pool=P)
tf("xa-tf-17", "m4-interp", "During the interaction phase of BID, the clinician should leave the room so the interpreter can build rapport with the client.", False,
   "The clinician should REMAIN in the room and observe the interpreter.", "Interaction bullets.", "Slide 16.", ["W3B:slide 16"], style=("antonym",), pool=P)
tf("xa-tf-18", "m12-precautions", "Standard precautions are required across ALL settings.", True,
   "True absolute from her slide subtitle.", "Slide 2.", "Slide 2.", ["W4:slide 2"], style=("absolute",), pool=P)
tf("xa-tf-19", "m15-sample", "Her Week 4 slide states that a speech-language sample should contain 50-100 minimum utterances.", True,
   "False edit: 'exactly 100 complete and intelligible utterances' (older course number).", "Current slide.", "Slide 9.", ["W4:slide 9"], style=("number",), pool=P)
tf("xa-tf-20", "m16-dynamic", "Dynamic assessment asks, 'What can the client do on this task?'", False,
   "That is INFORMAL assessment. Dynamic asks, 'What happens when I teach/support the client, and can they use what they learned?'", "Slide 8 questions.", "Slide 8.", ["W5:slide 8"], style=("sibling",), pool=P)

# ======================= MOCK A : 20 MC =======================
mc("xa-mc-01", "m1-reasoning", "All of the following are listed on her 'Why and How' slide as part of learning to think like a clinician EXCEPT:",
   [("Memorizing the names of the major tests", "Correct answer. The slide uses test-name memorization as the counter-example."),
    ("Recognizing limitations of the data", "Listed."), ("Integrating interviews, observations, records and testing", "Listed."), ("Asking the right questions", "Listed.")],
   0, "Four skills and one warning.", "W1 slide 4.", ["W1:slide 4"], style=("negative",), pool=P)
mc("xa-mc-02", "m2-ebp", "Which step comes THIRD in ASHA's EBP process on her slide?",
   [("Assess the evidence", "Correct."), ("Gather evidence", "Second."), ("Make your clinical decision", "Fourth."), ("Frame your clinical question", "First.")],
   0, "Frame, gather, assess, decide.", "W1 slide 9.", ["W1:slide 9"], style=("sequence",), pool=P)
mc("xa-mc-03", "m3-cases", "In the ASHA video's adult case, what did the second, more thorough evaluation reveal?",
   [("Aspiration of thin and mildly thick liquids on videofluoroscopy", "Correct (plus lingual fasciculations and mild dysarthria)."),
    ("Moderate sensorineural hearing loss", "That was the 3-year-old."),
    ("No swallowing difficulty, confirming the bedside result", "The opposite."),
    ("A submucous cleft palate", "Not in this case.")],
   0, "The first evaluation said general diet and thin liquids.", "VA 7:22-8:58.", ["VA:7:22-8:58"], ev="video", style=("scenario",), pool=P)
mc("xa-mc-04", "m3-accuracy", "According to the video, which situation is NOT appropriate in a diagnostic accuracy study?",
   [("The index test is included in the reference standard test battery", "Correct answer."),
    ("The target disorder has an unambiguous definition", "Desirable."),
    ("All participants receive the same reference standard", "Desirable."),
    ("The diagnostic system is described clearly enough to replicate", "Desirable.")],
   0, "Can a test check itself?", "VB 13:14-15:26.", ["VB:13:14-15:26"], ev="video", style=("negative",), pool=P)
mc("xa-mc-05", "m5-methods", "Naturalistic observation, systematic observation and contextual analysis, and simulated observations and structured play are all types of:",
   [("Observation", "Correct."), ("Information from clients and others", "Forms, questionnaires, scales, checklists, interviews."),
    ("Dynamic assessment", "Test-teach-retest."), ("Criterion-referenced testing", "A standardized test type.")],
   0, "Slide 4 sub-bullets.", "W2 slide 4.", ["W2:slide 4"], style=("classify",), pool=P)
mc("xa-mc-06", "m5-accmod", "All of the following are MODIFICATIONS on her slide EXCEPT:",
   [("Enlarging stimulus materials for a student with a visual impairment", "Correct answer. That is her accommodation example."),
    ("Giving additional prompts not specified in the manual", "Modification."),
    ("Repeating items when the manual does not allow repetition", "Modification."),
    ("Translating an English-standardized test into Spanish", "Modification.")],
   0, "How vs what.", "W2 slide 7.", ["W2:slide 7"], style=("negative", "classify"), pool=P)
mc("xa-mc-07", "m6-raw", "According to her slide, why is an accurate raw score critical?",
   [("Every score derived from it may be inaccurate if it is wrong", "Correct."), ("It is the score used for eligibility decisions", "Eligibility uses standard scores and SDs."),
    ("It is easiest for parents to understand", "Percentiles are."), ("It sets the basal for the next test", "No.")],
   0, "The bridge.", "W2 slide 15.", ["W2:slide 15"], pool=P)
mc("xa-mc-08", "m7-percentile", "On her bell-curve slide, a standard score of 115 corresponds to approximately which percentile?",
   [("84th", "Correct."), ("98th", "130."), ("50th", "100."), ("16th", "85.")],
   0, "+1 SD.", "W2 slide 18.", ["W2:slide 18"], style=("number",), pool=P)
mc("xa-mc-09", "m7-ae", "All of the following statements about age equivalents are consistent with her slides EXCEPT:",
   [("They are an appropriate basis for eligibility decisions", "Correct answer. Eligibility is based on standard scores and SDs."),
    ("They indicate the age at which the raw score is typical", "Consistent."), ("They should be interpreted cautiously", "Consistent."),
    ("They may overstate or understate performance", "Consistent.")],
   0, "Slides 17 and 21.", "W2 slides 17, 21.", ["W2:slides 17, 21"], style=("negative",), pool=P)
mc("xa-mc-10", "m7-bands", "Using her bell-curve labels, which standard score is described as 'above average' but NOT 'significantly above average'?",
   [("124", "Correct: between 115 and 130."), ("112", "Average."), ("134", "Significantly above average."), ("86", "Average.")],
   0, "115 < score < 130.", "W2 slide 18.", ["W2:slide 18"], style=("number",), pool=P)
mc("xa-mc-11", "m8-six", "Which pairing of property and bottom-line question is NOT correct?",
   [("Reliability: 'Is it measuring the right thing?'", "Correct answer. That is validity's question."),
    ("Standardization: 'Was it given the same way to everyone?'", "Correct pairing."),
    ("Specificity: 'Can it rule out a problem when it's absent?'", "Correct pairing."),
    ("Bias: 'Is it fair?'", "Correct pairing.")],
   0, "Slide 24.", "W2 slide 24.", ["W2:slide 24"], style=("negative", "sibling"), pool=P)
mc("xa-mc-12", "m9-setting", "A patient had a stroke yesterday and the physician wants to know if he is safe to eat. Based on her slide, the evaluation will most likely be:",
   [("Targeted and time-sensitive, such as a bedside swallowing screen", "Correct: acute care."),
    ("A comprehensive battery completed before any screening", "Comprehensive comes once the patient stabilizes."),
    ("Curriculum-based language sampling", "School."), ("A broad functional-outcomes battery", "Outpatient.")],
   0, "Hospital.", "W3A slide 4; 9/9 lecture.", ["W3A:slide 4", "L0909"], style=("scenario",), pool=P)
mc("xa-mc-13", "m9-interview", "All of the following belong to the OPENING phase of an intake interview EXCEPT:",
   [("Summarizing the major points discussed", "Correct answer. That is the closing phase."),
    ("Introductions", "Opening."), ("Purpose of the meeting", "Opening."), ("Structure of the meeting", "Opening.")],
   0, "Slide 10.", "W3A slide 10.", ["W3A:slide 10"], style=("negative", "sequence"), pool=P)
mc("xa-mc-14", "m10-outcomes", "Which is NOT one of the three outcome scenarios on her slide?",
   [("No diagnosis is made and the case is closed without regard to findings", "Correct answer. Not a scenario."),
    ("Disorder diagnosed, treatment plan recommended", "Scenario."), ("Disorder diagnosed, treatment plan and further testing recommended", "Scenario."),
    ("Client performs within normal limits", "Scenario.")],
   0, "Three scenarios.", "W3A slide 17.", ["W3A:slide 17"], style=("negative",), pool=P)
mc("xa-mc-15", "m4-cld", "Which of the following is NOT one of the five direct-assessment approaches on her multicultural slide?",
   [("Oral mechanism examination", "Correct answer. It is a component of direct assessment on another slide, not one of the five approaches."),
    ("Dynamic assessment", "Approach."), ("Speech-language sample analysis", "Approach."), ("Information from clients and others", "Approach.")],
   0, "Five approaches = the five methods.", "W3B slide 9.", ["W3B:slide 9"], style=("negative", "sibling"), pool=P)
mc("xa-mc-16", "m11-structure", "In her 20-minute interview handout, which topic is scheduled for minutes 11-15?",
   [("Developmental, medical and hearing history", "Correct."), ("Speech and communication concerns", "2-7."),
    ("School, family and parent priorities", "15-18."), ("Summarize and close", "18-20.")],
   0, "History after the concern.", "MOCKX timing.", ["MOCKX:pp. 1-6"], ev="assignment", style=("sequence",), pool=P)
mc("xa-mc-17", "m12-tools", "Which tool is on her 'may need' list for an orofacial examination rather than the 'will need' list?",
   [("Bite block", "Correct."), ("Disposable gloves", "Will need."), ("Flashlight", "Will need."), ("Tongue depressor", "Will need.")],
   0, "Three 'will need' items.", "W4 slide 4.", ["W4:slide 4"], style=("sibling",), pool=P)
mc("xa-mc-18", "m13-four", "Asked to hold his jaw still, slightly open, with no tongue or lip movement, a client's jaw drifts and slides side to side. Range of opening is full. Which concept is most directly weak?",
   [("Stability", "Correct: the jaw can't hold a controlled position (it is a mobile stabilizer)."), ("Mobility", "Full range is present."),
    ("Grading", "Grading is control of speed/force/range."), ("Dissociation", "Dissociation is moving one part while another stays still; here nothing else is moving, so the jaw is failing simply to hold position.")],
   0, "Holding position vs moving through range.", "OPE 5:40-6:40: stability = maintaining a controlled, supported position; poor stability shows as sliding, biting, excessive jaw movement. (Revised after the blind audit: the earlier version, jaw sliding whenever the tongue moved, was also a dissociation sign.)", ["OPE:5:40-6:40"], ev="video", style=("scenario",), pool=P)
mc("xa-mc-19", "m15-intel", "All of the following are factors on her slide that can reduce intelligibility EXCEPT:",
   [("A representative, recorded sample", "Correct answer. That is a requirement for a valid rating, not a factor that reduces intelligibility."),
    ("Atypical prosody", "Factor."), ("Insufficient vocal intensity", "Factor."), ("Length and complexity of utterances", "Factor.")],
   0, "One option is a method requirement.", "W4 slide 13.", ["W4:slide 13"], style=("negative",), pool=P)
mc("xa-mc-20", "m16-informal", "According to her Week 5 slide, the reliability and validity of informal assessment findings depend on:",
   [("The clinician's expertise and how representative the data are", "Correct."), ("The test publisher's norms", "Informal measures lack norms."),
    ("Whether a teaching phase was included", "That defines DA."), ("The number of standardized tests also given", "Not stated.")],
   0, "Slide 10.", "W5 slide 10.", ["W5:slide 10"], pool=P)
