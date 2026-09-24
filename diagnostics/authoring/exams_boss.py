from core import *

# ============================ BOSS A ============================
P = "bossA"
case("case-maya", "Case 1 · 'She just isn't talking'",
     "Jessica Thompson brings Maya (2 years, 1 month; born full term) for a speech-language evaluation. Opening concern: 'Maya just isn't talking. She makes sounds, but she doesn't really say words.' You have 20 minutes for the parent interview before direct assessment. (Adapted from her Group B parent handout; facts are only revealed if you ask.)",
     ["MOCKP:pp. 1-9", "MOCKX:pp. 1-6"])

mc("ba-maya-01", "m11-structure", "Which opening question best follows her handout's guidance?",
   [("'Can you tell me a little about Maya and what brings you in today?'", "Correct: open-ended, starts broad."),
    ("'How many words does Maya say?'", "Specific before broad; the handout says start broad."),
    ("'Has Maya had her hearing tested?'", "Important later (11-15 min), not the opener."),
    ("'Was Maya born premature?'", "Specific history question; later.")],
   0, "Start broad before specific.", "Handout 0-2 minutes: 'Can you tell me a little about...?' 'What brings you in...?' Remember: start broad before moving to specific questions.", ["MOCKX:p. 1"], ev="assignment", style=("scenario",), pool=P, case="case-maya")
multi("ba-maya-02", "m11-cases", "The parent reveals only what you ask. Select ALL areas the handout expects an examiner to explore for a toddler who is 'not talking.'",
   [("Gestures and nonverbal communication", "Expected (pointing, bringing objects)."), ("Receptive language", "Expected (understands more than she says)."),
    ("Hearing history", "Expected (two ear infections; no full audiological evaluation)."), ("Play and social communication", "Expected."),
    ("A complete list of every word she has ever said", "The handout's point: a broad history, 'not simply a list of vocabulary words'.")],
   [0, 1, 2, 3], "Broad communication history.", "Parent handout Role-Play Rule and 'information the examiner should ideally discover' checklist.", ["MOCKP:pp. 8-9"], ev="assignment", style=("integrate",), pool=P, case="case-maya")
mc("ba-maya-03", "m9-components", "You learn Maya had two ear infections between 18 months and 2 years and has only been screened at the pediatrician's office. What is the most defensible next step?",
   [("Recommend a comprehensive audiological evaluation, since hearing loss can mimic or compound speech-language difficulties", "Correct."),
    ("Diagnose a conductive hearing loss from the history", "SLPs do not diagnose hearing loss."),
    ("Ignore it because she turns when called", "Reassuring but not a substitute for evaluation."),
    ("Delay all speech-language assessment until age 3", "Not supported.")],
   0, "Week 3 core components + the ASHA video case.", "W3A slide 5; ASHA video's 3-year-old (failed screen → moderate SNHL); textbook Ch. 4: refer.", ["W3A:slide 5", "VA:5:15-7:22", "TB4:PDF p. 154"], style=("integrate",), pool=P, case="case-maya")
tf("ba-maya-04", "m6-adjusted", "Because Maya is under 3, you should calculate an adjusted age for her before comparing her to norms.", False,
   "Adjusted age applies to children born PREMATURELY. Maya was born full term, so there is no prematurity to subtract.", "Premature?", "W2 slides 10-11; parent handout: full-term birth.", ["W2:slides 10-11", "MOCKP:p. 5"], style=("therefore", "scenario"), pool=P, case="case-maya")
mc("ba-maya-05", "m16-dynamic", "During play you model a sign for 'more' with cues, then later offer a new chance to request without a model. Which method is this?",
   [("Dynamic assessment", "Correct: test, teach with support, then see if she uses it with reduced support."), ("Clinical observation", "No teaching during observation."),
    ("Informal assessment", "Informal sets up a task but doesn't include teaching."), ("Norm-referenced testing", "No norms here.")],
   0, "Teaching then retesting.", "W5 slides 5, 8.", ["W5:slides 5, 8"], style=("scenario",), pool=P, case="case-maya")
mc("ba-maya-06", "m16-observe", "While Maya plays, you note she brings her mother a book to share and looks between the book and her mother. Which look-for from her Week 5 slide is this?",
   [("Eye contact and joint attention", "Correct."), ("Voice quality", "No."), ("Fluency", "No."), ("Communication repair", "No breakdown occurred.")],
   0, "Sharing attention on an object.", "W5 slide 4.", ["W5:slide 4"], style=("scenario",), pool=P, case="case-maya")
order("ba-maya-07", "m11-structure", "Order the five elements of your closing summary as listed on her handout.",
   ["Primary concern", "When the concern began", "Functional impact", "Relevant developmental/medical/hearing history", "Parent's priorities"],
   "Concern → onset → impact → history → priorities.", "Handout 18-20 minutes.", ["MOCKX:p. 5"], ev="assignment", pool=P, case="case-maya")
mc("ba-maya-08", "m9-interview", "Research she cited on 9/9 bears on a 2-year-old who won't perform in the clinic. Which statement reflects it?",
   [("For young children, parent-reported information is often more accurate than what you see in the clinic", "Correct."),
    ("Parent report should be discarded if the child won't perform", "Opposite."), ("Only standardized scores count for toddlers", "No."), ("Toddlers perform best with unfamiliar adults", "Opposite.")],
   0, "Birth to three.", "9/9 lecture (partly garbled captions; the claim was legible).", ["L0909"], ev="lecture", pool=P, case="case-maya")

case("case-report", "Case 2 · The score report",
     "Jordan, 8 years 4 months, third grade. Teacher reports trouble following multi-step directions. Results: a comprehensive language test core standard score 76 (95% CI 70-82); receptive subtest scaled score 6; expressive subtest scaled score 5; age equivalent 6;2. A receptive vocabulary test standard score 88. Parent asks, 'So is he behind?'",
     ["W2:slides 16-21", "W3A:slides 13-18"])
hotspot("ba-rep-01", "m7-bands", "Click the band on her bell curve for Jordan's core standard score of 76.", "bell", "below",
   "Between 70 and 85.", "76 is Below Average on her slide (70-85). The textbook's −1.5 SD cutoff (77.5) would call it 'significantly below average'; for her class use the slide.",
   ["W2:slide 18", "TB1:PDF p. 51"], style=("visual", "integrate"), pool=P, case="case-report", zone_why={"sigbelow": "Below 70 only."})
num("ba-rep-02", "m7-scales", "Convert Jordan's expressive scaled score of 5 to a z score (round to 2 decimals) and to a standard score (round to the nearest whole number).",
   [("z score", "", -1.67, 0.01), ("Standard score", "", 75, 0.5)], "(5 − 10) ÷ 3.", "z = −5/3 = −1.67; standard = 100 − 1.667 × 15 = 75.", ["W2:slide 17"], pool=P, case="case-report")
mc("ba-rep-03", "m7-ae", "The parent latches onto 'age equivalent 6;2.' According to her slides, what should you base any eligibility discussion on instead?",
   [("Standard scores and standard deviations", "Correct."), ("The age equivalent, since it is easiest to understand", "Percentiles are easiest to explain; AEs shouldn't set eligibility or severity."),
    ("The raw score", "Must be converted."), ("The receptive vocabulary score alone", "One measure; and not the eligibility metric type issue.")],
   0, "Slide 21.", "W2 slides 17, 21.", ["W2:slides 17, 21"], style=("integrate",), pool=P, case="case-report")
mc("ba-rep-04", "m7-ci", "Jordan's 95% CI is 70-82. Which interpretation is consistent with her slides?",
   [("His true score is likely somewhere in 70-82; the whole range sits at or below the −1 SD line", "Correct: the interval reflects measurement error; 70-82 lies below 85."),
    ("His true score is exactly 76", "No score is perfectly exact."),
    ("A 90% CI would be wider than 70-82", "Lower confidence → narrower."),
    ("The CI proves he is significantly below average", "The range reaches the −2 SD point but lies mostly in the Below Average band.")],
   0, "What a CI means; higher confidence = wider.", "W2 slides 19-20, 18.", ["W2:slides 18-20"], style=("integrate", "number"), pool=P, case="case-report")
tf("ba-rep-05", "m9-formalinformal", "Jordan's receptive vocabulary score of 88 is average; therefore his teacher's report of trouble with multi-step directions is contradicted and can be set aside.", False,
   "An average single-word vocabulary score doesn't rule out difficulty with complex directions; her slide 13 says scores have limitations and informal measures fill the gaps.", "Split at 'therefore'.", "W3A slides 13-14.", ["W3A:slides 13-14"], style=("therefore", "integrate"), pool=P, case="case-report")
mc("ba-rep-06", "m7-percentile", "Which explanation to the parent best matches her guidance?",
   [("'Jordan's overall language score is around the 5th percentile: he scored as well as or better than about 5 of every 100 children his age.'", "Correct: percentiles are easiest for parents; SS 76 ≈ 5th percentile."),
    ("'Jordan functions like a 6-year-old.'", "Misuses the age equivalent."),
    ("'Jordan got 76% of the items right.'", "Confuses a standard score with percent correct."),
    ("'Jordan is 24 points behind.'", "Point difference means little to a parent and isn't her recommendation.")],
   0, "Percentiles for parents.", "W2 slide 21. (SS 76 is z ≈ −1.6, about the 5th percentile on a normal curve; her slide's anchors: 70 ≈ 2nd, 85 ≈ 16th.)", ["W2:slides 18, 21"], style=("scenario",), pool=P, case="case-report")
mc("ba-rep-07", "m10-report", "Where in the report does 'Receptive and expressive language skills are in the below-average range and affect his ability to follow multi-step classroom directions' belong?",
   [("Clinical impressions", "Correct: synthesis with severity and functional impact."), ("Assessment procedures", "Lists what was given."),
    ("Reason for referral", "Why the evaluation was requested."), ("Identifying information", "Name, DOB, referral source, credentials.")],
   0, "Severity + functional impact.", "W3A slide 18.", ["W3A:slide 18"], style=("integrate",), pool=P, case="case-report")

case("case-cld", "Case 3 · Two languages",
     "Ana, 6 years 0 months, recently arrived; Spanish at home, English at school for 5 months. Her teacher refers her because she 'barely talks in class'. An English-normed test places her far below average.",
     ["W3B:slides 2-16", "W1:slide 12"])
mc("ba-cld-01", "m4-cld", "What is the most important information to obtain first?",
   [("A language history: which languages, how often, and in what contexts", "Correct: a necessary component (Forms 3-2/3-3)."),
    ("A second English-only standardized test", "Adds English data, not the comparison you need."),
    ("Her age equivalent on the English test", "Not appropriate for decisions."),
    ("Her English percentile rank", "Same English-only problem.")],
   0, "Difference vs disorder needs both languages.", "W3B slides 7-8.", ["W3B:slides 7-8"], style=("scenario",), pool=P, case="case-cld")
tf("ba-cld-02", "m4-cld", "The ALDeQ parent questionnaire on her slide is designed for Ana's age.", True,
   "Ages 4;5-7;5; Ana is 6;0.", "Check the range.", "W3B slide 10.", ["W3B:slide 10"], style=("number",), pool=P, case="case-cld")
mc("ba-cld-03", "m4-da-std", "You teach Ana a new word-learning strategy with modeling and cues; she learns quickly and uses it with new words. According to her Week 3 slide, this result:",
   [("Points AWAY from language impairment (clients who do not improve are more likely to have impairment)", "Correct."),
    ("Confirms a language disorder", "Improvement argues against."), ("Is invalid because DA isn't used with CLD clients", "DA is widely recommended for CLD."),
    ("Replaces the need for a language history", "No.")],
   0, "Responsiveness to teaching.", "W3B slide 11; W5 slide 6 (experience vs difficulty learning).", ["W3B:slide 11", "W5:slide 6"], style=("integrate",), pool=P, case="case-cld")
mc("ba-cld-04", "m4-interp", "You need Ana's mother's account of her Spanish development during a meeting. You need:",
   [("An interpreter, briefed beforehand and observed during the interaction", "Correct: spoken language + BID."),
    ("A translator, because the meeting is formal", "Translators handle written text."),
    ("Ana herself to interpret", "Not a trained, unbiased interpreter."),
    ("No one; use an English-only case history form", "Doesn't obtain the information.")],
   0, "Spoken vs written; BID.", "W3B slides 15-16.", ["W3B:slides 15-16"], style=("integrate",), pool=P, case="case-cld")
multi("ba-cld-05", "m4-diff", "Which findings would move you TOWARD a disorder for Ana? Select ALL.",
   [("Difficulty in Spanish as well as English", "Disorder: difficulties in all languages."), ("Family history of language-learning disability", "Listed sign."),
    ("Difficulty expressing basic needs at home in Spanish", "Listed sign."), ("Limited English vocabulary after 5 months of exposure", "Consistent with difference/limited exposure."),
    ("Limited eye contact with the evaluator", "May reflect cultural norms (Week 1).")],
   [0, 1, 2], "All languages vs one.", "W3B slide 13; W1 slide 12.", ["W3B:slide 13", "W1:slide 12"], style=("integrate",), pool=P, case="case-cld")
tf("ba-cld-06", "m4-da-std", "If you translate the English test into Spanish on the spot, you may report its English standard scores as valid Spanish norms.", False,
   "Translation is a MODIFICATION (Week 2) that may invalidate the standard scores; describe the results, don't report the norms as valid.", "Week 2 + Week 3 together.", "W2 slides 7-8; W3B slide 12.", ["W2:slides 7-8", "W3B:slide 12"], style=("integrate",), pool=P, case="case-cld")

# ============================ BOSS B ============================
P = "bossB"
case("case-adult", "Case 4 · Bedside, then the full picture",
     "A 68-year-old man is admitted to acute care after a stroke. The physician asks whether he can safely eat. Later, an outpatient evaluation is requested because his family says his speech is 'slurred and tired'.",
     ["W3A:slide 4", "VA:7:22-8:58", "W4:slides 2-13"])
mc("bb-adu-01", "m9-setting", "In acute care, her slide says the evaluation is most likely to be:",
   [("Targeted and time-sensitive, e.g., a bedside swallowing screen", "Correct."), ("A full language battery before anything else", "Comprehensive comes once stable."),
    ("Curriculum-based sampling", "School."), ("A broad functional-outcomes battery", "Outpatient.")],
   0, "Hospital.", "W3A slide 4.", ["W3A:slide 4"], style=("scenario",), pool=P, case="case-adult")
tf("bb-adu-02", "m3-cases", "The ASHA video's adult case shows that a bedside swallow evaluation with no issues noted can still miss aspiration later found on instrumental assessment.", True,
   "First eval: no issues; later videofluoroscopy: aspiration.", "Adult case.", "VA 7:22-8:58.", ["VA:7:22-8:58"], ev="video", style=("integrate",), pool=P, case="case-adult")
mc("bb-adu-03", "m12-findings", "On the OME, his tongue deviates to the right on protrusion. The most likely side of weakness is:",
   [("Right", "Correct: the tongue deviates toward the weaker side on extension."), ("Left", "That would be the uvula logic reversed."),
    ("Neither; deviation is not meaningful", "Deviation may indicate neurological involvement."), ("Both sides equally", "Would not produce deviation.")],
   0, "Tongue → weaker side.", "TB6 p. 182.", ["TB6:PDF p. 182", "W4:slide 5"], ev="textbook", style=("scenario",), pool=P, case="case-adult")
mc("bb-adu-04", "m14-ddk", "His AMRs and SMRs are both slow and imprecise. According to the OPE video, this pattern suggests:",
   [("Possible dysarthria or weakness", "Correct."), ("Motor planning deficit", "That is adequate AMRs with poor SMRs."),
    ("Typical aging", "Not the interpretation."), ("A submucous cleft", "Unrelated.")],
   0, "Both tasks impaired.", "OPE 1:12:19-1:13:12.", ["OPE:1:12:19-1:13:12"], ev="video", style=("scenario",), pool=P, case="case-adult")
num("bb-adu-05", "m15-rate", "His 90-second reading sample contains 135 words. Compute his rate.", [("Rate", "wpm", 90, 0)],
   "Words ÷ seconds × 60.", "135 ÷ 90 = 1.5 × 60 = 90 wpm. Her slide: the point is how rate affects his communication, not a norm comparison.", ["W4:slide 12"], pool=P, case="case-adult")
multi("bb-adu-06", "m15-intel", "Which of these are on her slide's list of factors that can reduce intelligibility? Select ALL.",
   [("Level of fatigue", "Listed."), ("Insufficient vocal intensity", "Listed."), ("Length and complexity of utterances", "Listed."),
    ("Atypical prosody", "Listed."), ("Frequent gestures that support his spoken message", "Gestures HELP; her slide lists the LACK of paralinguistic cues as the factor that reduces intelligibility.")],
   [0, 1, 2, 3], "One option helps rather than hurts.", "W4 slide 13. Fatigue is the one most tied to time in session; all four are on her list.", ["W4:slide 13"], style=("integrate",), pool=P, case="case-adult")
mc("bb-adu-07", "m3-sufficiency", "A perceptual motor-speech assessment suggests lingual weakness. What does the ASHA decision-making video recommend next?",
   [("Seek converging evidence, e.g., an oral mechanism exam to confirm weakness", "Correct: the video's own example."),
    ("Diagnose from the perceptual evaluation alone", "Sufficiency question: one test may not be enough."),
    ("Stop, because the test passed questions 1-5", "Question 6 still applies."),
    ("Give an aphasia test to confirm", "Confirmation bias warning.")],
   0, "Question 6.", "VB 41:57-43:19.", ["VB:41:57-43:19"], ev="video", style=("integrate",), pool=P, case="case-adult")

case("case-select", "Case 5 · Choosing the test",
     "You must diagnose (or rule out) a language disorder in a 4-year-old who speaks African American English. A colleague suggests the test 'everybody uses'. You check its manual.",
     ["VB:2:21-48:24", "VA:1:30-2:25"])
mc("bb-sel-01", "m3-problems", "Choosing the test 'everybody uses' reflects which problem named in the first ASHA video?",
   [("Selecting tests by availability, familiarity and informal colleague discussion", "Correct."), ("Too much reliance on psychometrics", "The opposite problem."),
    ("Overuse of dynamic assessment", "Not named."), ("Excessive use of reference standards", "Not named.")],
   0, "80.6% / top two factors.", "VA 1:30-2:25.", ["VA:1:30-2:25"], ev="video", style=("integrate",), pool=P, case="case-select")
mc("bb-sel-02", "m3-questions", "The manual says the test's purpose is screening. Per the video, what now?",
   [("It is not a valid tool for diagnosis; find another test", "Correct: question 1 fails."), ("Use it but lower the cutoff", "Still the wrong purpose."),
    ("Use it if the norms include AAE speakers", "Norms are question 3; purpose already failed."), ("Use it with a 99% CI", "Irrelevant.")],
   0, "Purpose first.", "VB 4:34-7:52.", ["VB:4:34-7:52"], ev="video", style=("scenario",), pool=P, case="case-select")
mc("bb-sel-03", "m3-questions", "A second test is designed for diagnosis, but its normative sample includes few speakers of the child's dialect. Which decision question is at risk?",
   [("Does the normative sample reflect the person being tested?", "Correct."), ("Can I use the test for diagnosis?", "Passed (diagnostic purpose)."),
    ("Does the test consistently measure ability?", "Reliability."), ("Is there acceptable diagnostic accuracy?", "Separate question.")],
   0, "Representation.", "VB 32:11-32:52; W1 slide 12 (dialect features).", ["VB:32:11-32:52", "W1:slide 12"], ev="video", style=("integrate",), pool=P, case="case-select")
mc("bb-sel-04", "m8-sensspec", "A third test reports sensitivity 72% and specificity 90% for language disorder. Which concern follows?",
   [("Sensitivity is below the ~80% benchmark, so it may miss children who have the disorder", "Correct."),
    ("Specificity is too low, so it over-identifies", "90% specificity is strong."),
    ("Both values are acceptable, so no concern", "72% is below .80."),
    ("The test is unreliable", "Reliability isn't reported here.")],
   0, "Textbook .80 benchmark; direction.", "TB1 p. 42; W2 slides 23-24.", ["TB1:PDF p. 42", "W2:slides 23-24"], ev="textbook", style=("number", "integrate"), pool=P, case="case-select")
mc("bb-sel-05", "m3-validity-evidence", "An expressive language test lets the child respond by pointing to pictures. Which evidence is weakest?",
   [("Response process", "Correct: pointing is not an accurate response manner for expressive language."), ("Content", "Not the issue described."),
    ("Structure", "Factor analysis."), ("Relations with other variables", "Correlations.")],
   0, "How the child answers.", "VB 34:39-35:27.", ["VB:34:39-35:27"], ev="video", style=("scenario",), pool=P, case="case-select")
tf("bb-sel-06", "m3-sufficiency", "Once an appropriate, accurate, well-normed and reliable test is found, the video says you should still ask whether it is sufficient alone or whether converging evidence is needed.", True,
   "Question 6.", "Sufficiency.", "VB 41:57-43:19.", ["VB:41:57-43:19"], ev="video", pool=P, case="case-select")
mc("bb-sel-07", "m2-ebp", "Which EBP component is served by asking the family what matters most to them before choosing the battery?",
   [("Client/patient/caregiver perspectives", "Correct."), ("External evidence", "Research literature."),
    ("Internal evidence", "Data from the client."), ("Clinical expertise", "Your training and judgment.")],
   0, "Triangle corner.", "W1 slide 8.", ["W1:slide 8"], style=("integrate",), pool=P, case="case-select")

case("case-ethan", "Case 6 · 'Wabbit'",
     "Ethan Miller, kindergarten. Mother reports he is hard for others to understand (/r/, /l/, /th/; 'wabbit' for 'rabbit'). 4-5 ear infections ages 2-4; PE tubes at 3; passed a school hearing screening this year. Birth date: July 26, 2021. Evaluation date: October 5, 2026.",
     ["DEBRIEF", "MOCKX:p. 1"])
num("bb-eth-01", "m18-ca", "Use a 30-day borrow. Birth date: July 26, 2021. Test date: October 5, 2026. Compute chronological age.",
   [("Years", "y", 5, 0), ("Months", "m", 2, 0), ("Days", "d", 9, 0)],
   "Borrow for days, then months need no year borrow.", "Days 5 + 30 − 26 = 9 (month 10 → 9). Months 9 − 7 = 2. Years 2026 − 2021 = 5 → 5;2;9 (the handout's '5 years, 2 months'). A calendar borrow from September (30 days) gives the same answer here.",
   ["W2:slide 9", "CODEX:section 8"], style=("procedure", "integrate"), pool=P, case="case-ethan")
mc("bb-eth-02", "m9-components", "Which component should you verify rather than assume, given his ear history?",
   [("Current hearing and middle-ear status (screen or review recent audiological results)", "Correct."), ("His age equivalent in articulation", "Not a component, and discouraged."),
    ("His reading level", "Not indicated."), ("A swallowing study", "No swallowing concern.")],
   0, "Week 3 core components.", "W3A slide 5; your debrief plan.", ["W3A:slide 5", "DEBRIEF"], style=("integrate",), pool=P, case="case-ethan")
mc("bb-eth-03", "m16-dynamic", "You model /r/ with cues and feedback, then check whether he can produce it in new words with less support. This is best described as:",
   [("Dynamic assessment (stimulability-type probing)", "Correct: test-teach-retest; your debrief called it stimulability."),
    ("Informal assessment without teaching", "There IS teaching."), ("Norm-referenced testing", "No norms."), ("Case history", "No.")],
   0, "Teaching phase.", "W5 slides 5-6; your debrief.", ["W5:slides 5-6", "DEBRIEF"], style=("scenario",), pool=P, case="case-ethan")
mc("bb-eth-04", "m15-intel", "His parents understand him almost always; unfamiliar listeners often don't. Which factor from her slide explains the gap?",
   [("Listener familiarity with the client", "Correct."), ("Number of utterances collected", "Not the stated difference."),
    ("DDK rate", "Not an intelligibility factor on the list."), ("Test-retest reliability", "Psychometric property.")],
   0, "Same child, different listeners.", "W4 slide 13.", ["W4:slide 13"], style=("scenario",), pool=P, case="case-ethan")
mc("bb-eth-05", "m14-document", "Which OME note best meets the OPE video's documentation standard if you find reduced tongue-tip elevation?",
   [("Reduced tongue-tip elevation with jaw compensation during elevation tasks; limits alveolar contact for /l/; further assessment of speech impact needed", "Correct: finding + condition + functional effect + next step."),
    ("Tongue restriction noted", "Too vague."), ("Tongue WNL", "Inaccurate."), ("Suspected tongue tie; refer for surgery", "Jumps to a conclusion without function.")],
   0, "Observation vs interpretation.", "OPE 1:15:07-1:17:55.", ["OPE:1:15:07-1:17:55"], ev="video", style=("integrate",), pool=P, case="case-ethan")
mc("bb-eth-06", "m9-formalinformal", "Which report statement best meets her slide 14 standard of describing functional impact?",
   [("Speech sound errors reduce his intelligibility to teachers and classmates, limiting classroom participation", "Correct: functional impact tied to real communication demands."),
    ("Standard score of 78 on the articulation test", "Score only."), ("He produced /w/ for /r/ in 12 of 15 words", "Performance data, not functional impact."),
    ("Mother reports concern", "History, not impact.")],
   0, "Real, observable demands.", "W3A slide 14.", ["W3A:slide 14"], style=("integrate",), pool=P, case="case-ethan")
tf("bb-eth-07", "m11-skills", "When closing the interview with Ethan's mother, you should summarize her concerns and ask whether you got them right before the evaluation begins.", True,
   "Handout 18-20 minutes.", "Summarize & close.", "MOCKX p. 5.", ["MOCKX:p. 5", "W3A:slide 10"], ev="assignment", pool=P, case="case-ethan")

# ---- extensions to reach 25+ per Boss ----
P = "bossA"
mc("ba-rep-08", "m6-raw", "You discover the examiner forgot to credit the items below Jordan's basal. Which value is wrong FIRST?",
   [("The raw score", "Correct: basal credit is part of the raw total; everything derived from it inherits the error."),
    ("The standard score", "Wrong too, but only because it is converted from the raw score."),
    ("The percentile rank", "Derived later."), ("The confidence interval", "Built around the derived score.")],
   0, "The bridge.", "W2 slides 14-15.", ["W2:slides 14-15"], style=("procedure", "integrate"), pool=P, case="case-report")
tf("ba-rep-09", "m7-scales", "Jordan's receptive subtest scaled score of 6 and expressive scaled score of 5 are both more than 1 SD below the subtest mean.", True,
   "Scaled mean 10, SD 3: 1 SD below = 7. Both 6 and 5 are below 7.", "Where is −1 SD on the scaled scale?", "W2 slide 17.", ["W2:slide 17"], style=("number",), pool=P, case="case-report")
mc("ba-cld-07", "m4-cld", "Which of the following is NOT one of the considerations her slide lists for assessing a CLD client like Ana?",
   [("Rely on English norms because instruction is in English", "Correct answer. Not on the list; standardized tests are often problematic for CLD populations."),
    ("Assess abilities in both languages", "Listed."), ("Be sensitive and respectful", "Listed."), ("Use culturally appropriate materials", "Listed.")],
   0, "Slide 7.", "W3B slides 7, 12.", ["W3B:slides 7, 12"], style=("negative",), pool=P, case="case-cld")
mc("ba-cld-08", "m4-role", "Ana's family is reluctant to discuss her early development. Which approach best matches her 9/14 teaching and Week 3 slides?",
   [("Use an ethnographic, non-judgmental approach and be thoughtful about how information is obtained", "Correct."),
    ("Tell the family the evaluation can't proceed without full answers", "Coercive; not her approach."),
    ("Assume the history is typical and skip it", "Language history is a necessary component."),
    ("Ask the classroom teacher to fill in the family's history", "Teachers help with school information, not family history.")],
   0, "Ethnographic mindset.", "W3B slide 8 ('be thoughtful about how the information is obtained'); W4 slide 3; 9/14 lecture.", ["W3B:slide 8", "W4:slide 3", "L0914"], style=("scenario",), pool=P, case="case-cld")

P = "bossB"
tf("bb-adu-08", "m12-precautions", "Because the bedside screen is brief and informal, standard precautions such as hand hygiene and gloves are optional.", False,
   "Standard precautions are required across ALL settings; every oral exam involves mucous membranes.", "True absolute on her slide.", "W4 slide 2; OPE 2:45.", ["W4:slide 2", "OPE:2:45-3:41"], style=("therefore",), pool=P, case="case-adult")
mc("bb-adu-09", "m13-airway", "During /s/ and 'big puppy', you hear nasal turbulence and see air escaping from his nose. What does this indicate per the OPE video?",
   [("Nasal air escape on pressure sounds: possible VPI", "Correct."), ("Normal nasal breathing", "Quiet nasal breathing is checked with the mirror at rest, not with pressure sounds."),
    ("Hyponasality from obstruction", "Obstruction reduces nasal airflow."), ("Poor lip seal", "Air through the lips, not the nose.")],
   0, "Pressure sounds need oral airflow.", "OPE 22:33-25:28: nasal emission during pressure sounds could point toward possible VPI.", ["OPE:23:29-25:28"], ev="video", style=("scenario",), pool=P, case="case-adult")
mc("bb-sel-08", "m3-accuracy", "A study used SLP referral as the reference standard for the disordered group and teacher report for the typical group. What is the problem?",
   [("Different reference standards for the two groups introduce bias", "Correct: all subjects must have the same reference standard."),
    ("The index test was not described", "Not stated in the scenario."),
    ("Teacher report cannot be a reference standard in any study", "The problem is using DIFFERENT standards across groups."),
    ("The sample was too small", "Not stated.")],
   0, "Same standard for everyone.", "VB 27:45-29:54.", ["VB:27:45-29:54"], ev="video", style=("scenario",), pool=P, case="case-select")
mc("bb-sel-09", "m5-accmod", "The child needs frequent breaks due to attention difficulties. If the manual permits them and nothing else changes, this is:",
   [("An accommodation; standard scores generally remain valid", "Correct."), ("A modification; norms are now invalid", "Breaks are her accommodation example."),
    ("Dynamic assessment", "No teaching."), ("A reason to switch to a screening test", "Unrelated.")],
   0, "How vs what.", "W2 slides 7-8.", ["W2:slides 7-8"], style=("scenario",), pool=P, case="case-select")
