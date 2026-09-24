from core import *
def S(**k): return k

M = "m03"
module(M, 3, "The two ASHA videos: evidence-based assessment", "Week 1 · Flagged videos", "Week 1 Friday",
       "Both ASHA TLR Hub modules linked on her Week 1 'Videos' slide, which you saved as 'WILL BE ON EXAM'. Built from the caption files in your Week 1 Friday folder.")
concept("m3-eba", M, "Evidence-based assessment: definition and why it matters")
concept("m3-problems", M, "Four problems in current assessment practice (with the numbers)")
concept("m3-cases", M, "The two case studies (3-year-old; 75-year-old)")
concept("m3-questions", M, "The six decision questions for choosing a diagnostic test")
concept("m3-accuracy", M, "Diagnostic accuracy: index test, target disorder, reference standard")
concept("m3-validity-evidence", M, "Four kinds of evidence that a test measures the right skill")
concept("m3-sufficiency", M, "Sufficiency, converging evidence and confirmation bias; clinician and patient challenges")

section(M, S(h="Why these two videos matter",
    body=["Her Week 1 slide 13 ('Videos') links two ASHA TLR Hub modules: **Why We Need Evidence-Based Assessment** and **A Decision-Making Process for Selecting an Assessment Tool**. Your Test One folder holds a screenshot of that slide saved as 'WILL BE ON EXAM'. The caption files in your Week 1 Friday folder are the transcripts of those two modules (the speaker names and titles match), so this lab can teach them. The earlier lab marked the videos as missing.",
          "Captions are auto-generated. Names that came through garbled (the author of the 2021 decision-making process, the name of the bias procedure) are not used as answer keys."],
    callouts=[dict(k="flag", t="Your flag labels are your record of her emphasis. They do not reveal question wording or weighting.", ev="flag")],
    src=["W1:slide 13", "T1", "VA", "VB"]))

section(M, S(h="Video 1: Why we need evidence-based assessment",
    body=["**Definition.** Evidence-based assessment is a clinical decision-making process for determining an assessment approach that integrates the best available evidence from **scientific research**, **clinical practice experience**, and **client preferences and characteristics** (built on the E3BP definition). EBP includes assessment AND treatment, but clinicians tend to apply EBP thinking to treatment only.",
          "**Four problems** the speaker identifies: (1) **80.6%** of surveyed SLPs reported using **informal discussion with colleagues** to determine an assessment approach; (2) only **57%** report using **psychometrics** (validity, reliability, sensitivity, specificity) when selecting a test, with **availability and familiarity** the top two factors in test selection; (3) a **poor understanding of diagnostic accuracy** research; (4) **bias** in assessment (limits of standardized testing, over- and underestimation of performance, disproportionality data).",
          "**Solutions:** update instructional practices (connect the purpose of the assessment, emphasize validity, understand psychometrics); implement **decision-making processes**; use a structured process to evaluate, understand and mitigate bias."],
    table=dict(head=["Case", "First evaluation", "What was missed", "Second evaluation found", "Outcome"], rows=[
        ["3-year-old, primarily Spanish-speaking family, 2-word phrases", "Play-based, in Spanish; language samples; phonemic inventory. No hearing test (parents reported no hearing concerns); no oral mech exam (child ate well)", "Hearing screening and oral mechanism exam", "Failed hearing screen → audiology: moderate sensorineural hearing loss, hearing aids; motor coordination/sequencing issues on the oral mech exam", "A year of therapy with minimal progress; new plan (auditory-verbal + motor planning approaches) → progress almost immediately"],
        ["75-year-old man, severe demyelinating polyradiculoneuropathy, respiratory distress, ICU", "Bedside swallow evaluation: no issues; general diet and thin liquids; SLP signed off", "Chart review, interview, full oral mechanism exam, instrumental study", "Lingual fasciculations, mild dysarthria; videofluoroscopy showed aspiration of thin and mildly thick liquids", "Modified diet to reduce aspiration pneumonia risk"]]),
    callouts=[dict(k="numbers", t="80.6% informal discussion. 57% use psychometrics. Top two selection factors: availability and familiarity.", ev="video"),
              dict(k="lecture", t="The same message runs through her slides: Week 3 lists a hearing screening as a core component 'because hearing loss can mimic or compound speech-language difficulties', and she said on 9/9 'take that off the table'.", ev="lecture")],
    src=["VA:0:00-10:35", "W3A:slide 5", "L0909"]))

section(M, S(h="Video 2: A decision-making process for selecting a diagnostic test",
    visual="decision",
    body=["A decision-making process is a systematic, step-by-step guide that organizes information and alternatives. The general cycle: identify the decision → gather information → identify alternatives → weigh evidence → choose → take action → **review the decision** (which restarts the cycle).",
          "For choosing a test to inform a **diagnosis**, the flowchart asks six questions. A 'no' on any of the first five means find another test."],
    table=dict(head=["#", "Question", "What you check"], rows=[
        ["1", "Can I use this test for diagnosis?", "Purpose. The manual is the most likely place to find it. A screening test used for diagnosis is not a valid use; a manual stating a different purpose means it is not valid for yours."],
        ["2", "Is there acceptable evidence of diagnostic accuracy?", "Group differences, sensitivity/specificity, and the diagnostic system behind them."],
        ["3", "Does the normative sample reflect the person being tested?", "Representation in the standardization sample (for language: age, sex, language, dialect)."],
        ["4", "Does the test accurately measure the skill(s) relevant to the diagnosis?", "Four kinds of evidence: content, response process, relations with other variables, internal structure."],
        ["5", "Does the test consistently measure the person's ability?", "Administration consistency and reliability evidence: test-retest, alternate/parallel forms, interrater, internal consistency, standard error of measurement."],
        ["6", "Is this test sufficient for diagnostic decision-making?", "Need for converging evidence; guard against confirmation bias."]]),
    src=["VB:0:00-7:10", "VB:46:54-48:24"]))

section(M, S(h="Diagnostic accuracy, as the video teaches it",
    body=["A **diagnostic system** has three parts: the **index test** (the test under evaluation), the **target disorder**, and the **gold/reference standard**. A diagnostic accuracy study asks how well the index test identifies the presence and absence of the target disorder.",
          "**Sensitivity** = ability of the index test to identify the PRESENCE of the disorder; **specificity** = ability to identify its ABSENCE. You want both high. A statistically significant difference between control and disordered groups shows the test is sensitive 'to some degree' but is not the same as reporting sensitivity and specificity.",
          "Red flags when judging a study: the index test is **part of the reference standard battery** (no independent check); different reference standards for the disordered and control groups (a reporting standards document says all participants must have the same reference standard, to avoid bias); an ambiguous target-disorder definition.",
          "**Sensitive and specific to WHAT?** The digit-triplets-in-noise test showed 91% sensitivity and 93% specificity, but for **elevated pure-tone thresholds**, not for a speech-recognition-in-noise disorder. Accuracy values do not transfer to a different target disorder. In the same table, the bilateral pure-tone average detected only **28%** of people with a speech-recognition-in-noise disorder; the HINT composite showed 88% sensitivity / 77% specificity."],
    callouts=[dict(k="textbook", t="Textbook Ch. 1 adds a benchmark: sufficient sensitivity and specificity are typically defined as .80 (80%) or higher.", ev="textbook")],
    src=["VB:7:52-31:24", "TB1:PDF p. 42"]))

section(M, S(h="Does it measure the right skill? Four kinds of evidence",
    table=dict(head=["Evidence", "Meaning in the video", "Example"], rows=[
        ["Content", "Items reviewed by content experts; all relevant domains covered (also called judgment validity)", "Experts confirm a language test assesses language, not speech"],
        ["Response process", "How the person answers must fit the skill measured", "Pointing is not an accurate response manner for speech or expressive language, but can be appropriate for receptive language"],
        ["Relations with other variables", "Strong correlation with tests of the same skill; weak with unrelated skills", "Receptive test A vs receptive test B: strong; vs a fine motor test: weak; vs speech sound production: may be moderate if the test requires spoken responses"],
        ["Structure", "Factor analysis / structural equation modeling: as many factors as skills claimed", "Receptive vocabulary: one factor; phonological awareness: multiple factors"]]),
    src=["VB:32:52-40:38"]))

section(M, S(h="Is it sufficient? Challenges to diagnostic accuracy",
    body=["Even an appropriate test may not be sufficient alone. Look for **converging evidence** (e.g., a perceptual motor-speech evaluation suggests lingual weakness, so do an oral mechanism exam to confirm). Watch **confirmation bias**: the adult-neurogenic saying 'by the time you give an aphasia test you already know someone has aphasia'.",
          "**Clinician / scientific-community challenges:** lacking or changing diagnostic classification schemes; skills needed to interpret responses (e.g., calibrated perceptual description of speech subsystems).",
          "**Patient challenges:** visual and hearing acuity, motor weakness, co-occurring communication disorders (don't blame language for unintelligibility caused by a motor speech disorder), fatigue, medication, test anxiety, premorbid ability (very high or low)."],
    src=["VB:41:57-46:54"]))

# ---------------- items ----------------
mc("m3-eba-01", "m3-eba",
   "In the ASHA video, evidence-based assessment integrates best available evidence from scientific research, clinical practice experience, and:",
   [("Client preferences and characteristics", "Correct."),
    ("Standardized normative data", "Norms are one kind of evidence, not the third element of the definition."),
    ("Colleague consensus about the best test", "Informal colleague discussion was presented as a PROBLEM (80.6%)."),
    ("Insurance and eligibility requirements", "Not part of the definition.")],
   0, "The definition parallels the three-part EBP definition from slide 8.",
   "EBA: a clinical decision-making process for determining an assessment approach that integrates research evidence, clinical practice experience, and client preferences and characteristics.",
   ["VA:0:35-1:21"], ev="video", style=("definition",))

tf("m3-eba-02", "m3-eba",
   "The video reports that clinicians tend to apply evidence-based thinking to assessment decisions but not to treatment decisions.",
   False, "Reversed. The speaker says SLPs tend to think of EBP for TREATMENT and not for assessment.",
   "Which half of EBP does the field neglect, according to the speaker?",
   "Speaker: EBP includes assessment and treatment, but SLPs tend to think of EBP for treatment and not assessment.",
   ["VA:1:04-1:30"], ev="video", style=("antonym",))

mc("m3-prob-01", "m3-problems",
   "According to the first ASHA video, 80.6% of surveyed SLPs reported using which method to determine an assessment approach?",
   [("Informal discussion with colleagues", "Correct."),
    ("Psychometric properties of the test", "Only 57% reported using psychometrics."),
    ("Published diagnostic accuracy studies", "Poor understanding of diagnostic accuracy research was named as a separate problem."),
    ("The test manual's stated purpose", "Not the reported 80.6% figure.")],
   0, "The statistic was presented as a problem, not a best practice.",
   "80.6% used informal discussion with colleagues; only 57% used psychometrics, and availability and familiarity were the top two test-selection factors.",
   ["VA:1:30-2:25"], ev="video", style=("number",))

mc("m3-prob-02", "m3-problems",
   "The video names the top two factors SLPs report using when selecting a test. They are:",
   [("Availability and familiarity", "Correct."),
    ("Validity and reliability", "These are psychometrics, which only 57% reported using."),
    ("Sensitivity and specificity", "Also psychometrics."),
    ("Cost and administration time", "Not the reported top two.")],
   0, "The answer is the reason the speaker calls it a problem.",
   "Availability and familiarity topped the list, while only 57% considered psychometrics.",
   ["VA:2:14-2:25"], ev="video", style=("number",))

multi("m3-prob-03", "m3-problems",
   "Select ALL problems with current assessment practice identified in the first video.",
   [("Over-reliance on informal discussion with colleagues", "Named."),
    ("Underuse of psychometrics in test selection", "Named."),
    ("Poor understanding of diagnostic accuracy research", "Named."),
    ("Bias in assessment", "Named."),
    ("Too many standardized tests given per client", "Not one of the four problems.")],
   [0, 1, 2, 3], "Four problems were summarized at the end of the video.",
   "Summary slide: over-reliance on informal discussion, underuse of psychometrics, poor understanding of diagnostic accuracy, bias.",
   ["VA:9:28-9:48"], ev="video", style=("classify",))

tf("m3-prob-04", "m3-problems",
   "The video reports that 80.6% of SLPs use psychometrics such as validity, reliability, sensitivity and specificity when selecting an assessment.",
   False, "Number swap: 57% use psychometrics. 80.6% is the figure for relying on informal discussion with colleagues.",
   "Two percentages appear in this video. Which goes with psychometrics?",
   "57% psychometrics; 80.6% informal discussion.", ["VA:1:55-2:25"], ev="video", style=("number",))

mc("m3-case-01", "m3-cases",
   "In the first case study (3-year-old from a primarily Spanish-speaking family), why was no hearing test done in the initial evaluation?",
   [("The parents reported no concerns about hearing", "Correct. The first team relied on parent report."),
    ("The child refused to participate in testing", "Not stated."),
    ("The evaluation was conducted in Spanish", "The evaluation was in Spanish, but that is not why hearing was skipped."),
    ("A pediatrician had already cleared the child's hearing", "Not stated.")],
   0, "The oral mech exam was skipped for a parallel reason (the child 'ate well').",
   "Parents reported no hearing concerns, so no hearing test; the child ate well, so no oral mechanism exam. The second evaluation found moderate sensorineural hearing loss and motor coordination/sequencing issues.",
   ["VA:5:15-6:42"], ev="video", style=("scenario",))

mc("m3-case-02", "m3-cases",
   "In the second evaluation of the 3-year-old, which findings changed the treatment plan?",
   [("A failed hearing screening leading to a diagnosis of moderate sensorineural hearing loss, plus motor coordination and sequencing issues on the oral mechanism exam", "Correct."),
    ("A standardized language test showing a severe receptive language disorder", "Not what the video reports."),
    ("Evidence that the child's difficulties were a dialect difference", "Not reported."),
    ("Aspiration on a videofluoroscopic swallow study", "That was the 75-year-old case.")],
   0, "The two skipped procedures from the first evaluation.",
   "Second evaluation: failed hearing screen → audiology → moderate SNHL, hearing aids; OME showed motor coordination/sequencing issues. New plan used auditory-verbal and motor-planning approaches; progress began almost immediately.",
   ["VA:6:00-7:22"], ev="video", style=("scenario", "integrate"))

tf("m3-case-03", "m3-cases",
   "In the adult case, the first bedside swallow evaluation found aspiration, so the SLP recommended a modified diet.",
   False, "The FIRST bedside evaluation noted no issues (general diet, thin liquids; SLP signed off). Aspiration was found later on videofluoroscopy, leading to a modified diet.",
   "What did the first evaluation miss?",
   "First evaluation: no issues noted, general diet and thin liquids. After transfer to neurology, a re-evaluation (chart review, interview, full OME: lingual fasciculations, mild dysarthria; videofluoroscopy: aspiration of thin and mildly thick liquids) led to a modified diet to reduce aspiration pneumonia risk.",
   ["VA:7:22-8:58"], ev="video", style=("antonym",))

order("m3-q-01", "m3-questions",
   "Put the six decision-making questions for choosing a diagnostic test in the video's order.",
   ["Can I use this test for diagnosis?",
    "Is there acceptable evidence of diagnostic accuracy?",
    "Does the normative sample reflect the person being tested?",
    "Does the test accurately measure the skills relevant to the diagnosis?",
    "Does the test consistently measure the person's ability?",
    "Is this test sufficient for diagnostic decision-making?"],
   "Purpose first; sufficiency last.",
   "Flowchart order from the video (repeated in its summary).", ["VB:2:21-4:34", "VB:46:54-48:24"], ev="video")

mc("m3-q-02", "m3-questions",
   "An SLP plans to diagnose a language disorder with a test whose manual states its purpose is screening. Which decision question has already failed?",
   [("Can I use this test for diagnosis?", "Correct. Using a screening tool for diagnosis is the wrong purpose and therefore not a valid use."),
    ("Does the normative sample reflect the person being tested?", "Representation is question 3; the problem here is purpose."),
    ("Does the test consistently measure the person's ability?", "Reliability is question 5."),
    ("Is this test sufficient for diagnostic decision-making?", "Sufficiency is the last check; the test fails at step 1.")],
   0, "The manual's stated purpose answers question 1.",
   "The video: if you use a screening assessment for diagnosis, that is not a valid use; the manual is the most likely place to find the purpose.",
   ["VB:4:34-7:52"], ev="video", style=("scenario",))

mc("m3-q-03", "m3-questions",
   "Test-retest, alternate/parallel forms, interrater reliability, internal consistency and standard error of measurement are evidence for which decision question?",
   [("Does the test consistently measure the person's ability?", "Correct: consistency = reliability."),
    ("Does the test accurately measure the skills relevant to the diagnosis?", "That question uses content, response process, relations and structure evidence."),
    ("Is there acceptable evidence of diagnostic accuracy?", "Diagnostic accuracy uses sensitivity/specificity and group differences."),
    ("Does the normative sample reflect the person being tested?", "Representation in the standardization sample.")],
   0, "Consistency is a synonym the video uses for one psychometric property.",
   "Question 5 (consistency) lists administration properties and reliability types including SEM.",
   ["VB:40:38-41:19"], ev="video", style=("sibling",))

tf("m3-q-04", "m3-questions",
   "If a test passes the first five decision questions, the video says it can be used as the sole basis for a diagnosis.",
   False, "Even then, you must still ask the sixth question: is the test SUFFICIENT, or is converging evidence needed?",
   "There is one more question after the fifth.",
   "The final question asks whether you can solely rely on the assessment or need additional assessments or probes.",
   ["VB:4:34-5:29", "VB:41:57-43:19"], ev="video", style=("absolute",))

mc("m3-acc-01", "m3-accuracy",
   "The video's 'diagnostic system' consists of the index test, the target disorder, and the:",
   [("Gold/reference standard", "Correct."),
    ("Normative sample", "Normative sample is decision question 3, not part of the diagnostic system."),
    ("Confidence interval", "Not part of the diagnostic system."),
    ("Cutoff score only", "Cutoffs matter, but the third component named is the reference standard.")],
   0, "Accuracy is judged against something.",
   "Diagnostic system = index test (test under evaluation) + target disorder + gold or reference standard.",
   ["VB:9:35-10:24"], ev="video", style=("definition",))

mc("m3-acc-02", "m3-accuracy",
   "A digit-triplets-in-noise test shows 91% sensitivity and 93% specificity. Why does the video warn against calling it a great test for speech-recognition-in-noise disorder?",
   [("Those values were for a different target disorder (elevated pure-tone thresholds)", "Correct. Sensitive and specific to WHAT?"),
    ("The values are below the typical 80% benchmark", "91% and 93% exceed it."),
    ("It did not report group differences, so the values are invalid", "Missing group differences does not invalidate reported sensitivity/specificity; the issue is the target disorder."),
    ("Specificity higher than sensitivity means the test over-identifies", "Higher specificity means fewer false positives, not over-identification; and that is not the video's point.")],
   0, "Look at the target disorder column.",
   "Accuracy values belong to a diagnostic system. You may not presume sensitivity and specificity for one target disorder apply to a different disorder.",
   ["VB:23:40-25:39", "VB:30:38-32:11"], ev="video", style=("scenario",))

tf("m3-acc-03", "m3-accuracy",
   "According to the video, it is appropriate for the index test to be included in the reference standard test battery because this confirms the index test's results.",
   False, "It is NOT appropriate: including the index test in the reference battery removes independent verification.",
   "Can a test verify itself?",
   "The speaker calls this condition 'not appropriate', noting some published studies have it.",
   ["VB:13:14-15:26"], ev="video", style=("antonym",))

mc("m3-acc-04", "m3-accuracy",
   "The video defines specificity as the ability of the index test to:",
   [("Determine the absence of the disorder", "Correct."),
    ("Determine the presence of the disorder", "That is sensitivity."),
    ("Produce the same score on repeated administration", "Reliability."),
    ("Measure only one skill", "Structure / construct question.")],
   0, "Presence vs absence.",
   "Sensitivity: presence. Specificity: absence. Her Week 2 slide says the same: specific = correctly identifies individuals who do NOT have the condition.",
   ["VB:9:35-10:24", "W2:slides 23-24"], ev="video", style=("sibling",))

tf("m3-acc-05", "m3-accuracy",
   "In the video's example, every participant in a diagnostic accuracy study should be classified using the same reference standard, to avoid bias.",
   True, "The flawed study used SLP/teacher referral for the SLI group and classroom-teacher report for the TD group.",
   "Two groups, two different reference standards: acceptable or not?",
   "The speaker cites a reporting-standards document: all subjects in control and disorder groups must have the same reference standard test.",
   ["VB:27:45-29:54"], ev="video")

match("m3-val-01", "m3-validity-evidence",
   "Match each kind of evidence (does the test measure the right skill?) to its example from the video.",
   [("Content", "Experts confirm the items assess language, not speech, and cover all domains"),
    ("Response process", "Pointing is fine for receptive language but not for expressive language"),
    ("Relations with other variables", "Strong correlation with another receptive test; weak with a fine motor test"),
    ("Structure", "Factor analysis shows one factor for receptive vocabulary")],
   "Content = experts; response = how they answer; relations = correlations; structure = factors.",
   "The four kinds of evidence for question 4, with the video's own examples.", ["VB:32:52-40:38"], ev="video")

mc("m3-val-02", "m3-validity-evidence",
   "A receptive language test requires the child to answer every item by speaking. According to the video, which kind of evidence is most in question?",
   [("Response process", "Correct. The response manner must align with the skill measured; speaking may pull expressive/speech skills into a receptive score."),
    ("Content", "Content concerns item coverage reviewed by experts."),
    ("Internal structure", "Structure concerns factor analysis."),
    ("Test-retest reliability", "Consistency is a different question.")],
   0, "How the person answers.",
   "The video contrasts pointing (appropriate for receptive) with speaking; it also notes speech production may correlate with a receptive test that requires spoken answers.",
   ["VB:34:39-38:12"], ev="video", style=("scenario",))

mc("m3-suf-01", "m3-sufficiency",
   "All of the following are PATIENT-related challenges to diagnostic accuracy named in the video EXCEPT:",
   [("Changing diagnostic classification schemes", "Correct answer. That is a clinician/scientific-community challenge."),
    ("Visual or hearing acuity and motor weakness", "Patient challenge."),
    ("Co-occurring communication disorders", "Patient challenge."),
    ("Fatigue, medication and test anxiety", "Patient challenge.")],
   0, "The video sorts challenges into two categories.",
   "Clinician/scientific community: lack of agreed or changing classification schemes; skills needed to interpret responses. Patient: acuity, motor weakness, co-occurring disorders, fatigue, medication, anxiety, premorbid ability.",
   ["VB:43:19-46:03"], ev="video", style=("negative", "sibling"))

tf("m3-suf-02", "m3-sufficiency",
   "Looking only for information that supports what you already suspect is confirmation bias, which the video says to guard against when judging whether a test is sufficient.",
   True, "A false version might call it 'converging evidence'. Converging evidence is the remedy, not the bias.",
   "Two terms appear together in the sufficiency section.",
   "Sufficiency: evaluate the need for convergent evidence and be mindful of confirmation bias (don't anchor or ignore other signs).",
   ["VB:41:57-43:19"], ev="video", style=("sibling",))

teach("m3-teach-01", "m3-cases",
   "Using the 3-year-old case from the ASHA video, explain how skipping two routine components of an evaluation cost the child a year, and connect it to her Week 3 'core components' slide.",
   ["Names both skipped procedures: hearing screening and oral mechanism exam, and why they were skipped (parent report).",
    "States what the second evaluation found: moderate sensorineural hearing loss; motor coordination/sequencing issues.",
    "Connects to Week 3: hearing screening is a core component because hearing loss can mimic or compound speech-language difficulty.",
    "States the principle: limited evidence was treated as sufficient; a comprehensive assessment changes the treatment plan."],
   ["VA:5:15-7:22", "W3A:slide 5"], ev="video")
