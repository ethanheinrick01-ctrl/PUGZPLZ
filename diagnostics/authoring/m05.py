from core import *
def S(**k): return k

M = "m05"
module(M, 5, "Assessment methods and the rules of standardized testing", "Week 2 · Methods", "Week 2",
       "The five assessment methods, what goes under each, why you read the manual first, and the accommodation-vs-modification line.")
concept("m5-methods", M, "Purpose of assessment and the five methods")
concept("m5-manual", M, "Before any standardized test: read the manual")
concept("m5-accmod", M, "Accommodation vs modification")
concept("m5-normcrit", M, "Norm-referenced vs criterion-referenced tests")

section(M, S(h="Purpose and the five methods",
    body=["Slide 2: the purpose of an assessment is **to draw a conclusion about an individual's communicative abilities**; there are many different paths.",
          "Slide 3 names **five methods**: information from clients and others; observation; speech-language analysis; dynamic assessment; standardized assessments."],
    table=dict(head=["Method", "What she lists under it (slide 4)"], rows=[
        ["Information from clients and others", "Case history forms; questionnaires and inventories; rating scales; checklists; interviews (traditional and ethnographic)"],
        ["Observations", "Naturalistic; systematic observation and contextual analysis; simulated observations and structured play"],
        ["Speech-language sample", "(analysis of connected speech/language)"],
        ["Dynamic assessment", "(test-teach-retest; Week 5)"],
        ["Standardized tests", "Norm-referenced tests; criterion-referenced tests"]]),
    callouts=[dict(k="textbook", t="Textbook Ch. 1: a traditional interview is controlled by the clinician; an ethnographic interview is guided by the clinician but controlled, in part, by the informant. Questionnaires need simple answers; inventories are more detailed.", ev="textbook")],
    src=["W2:slides 2-4", "TB1:PDF pp. 43-44"]))

section(M, S(h="Before administering any standardized test",
    body=["Slide 5 (the STOP sign): **READ THE ACCOMPANYING MANUAL.** Know the **purpose** of the test, the **population** for whom it is designed, **review psychometric properties**, and **learn how to administer it correctly**.",
          "Slide 6 lists the steps of administering and interpreting: accommodations and modifications; determining chronological age; basals and ceilings; obtaining a raw score; normative data; understanding normed scores; confidence intervals."],
    callouts=[dict(k="lecture", t="9/2 (Assessment Detective walk-through): she had you check the manual for purpose, content, norms (size, geographic locations, SES), reliability, clear instructions, scoring procedures and conversion tables. Your PPVT-5 submission applied the same checklist.", ev="lecture")],
    src=["W2:slides 5-6", "L0902", "AD", "PPVT"]))

section(M, S(h="Accommodation vs modification (slides 7-8)",
    visual="accmod",
    table=dict(head=["", "Accommodation", "Modification"], rows=[
        ["Changes", "HOW the test is administered", "WHAT is being measured (or the protocol enough to break norm comparison)"],
        ["Standard scores", "Generally remain valid", "May become invalid"],
        ["Examples", "Breaks, quiet room, assistive devices (hearing aids/FM), enlarged stimuli", "Extra cues/prompts not in the manual, repeating items when not allowed, altered instructions, translated items, a different response format"],
        ["Construct", "Does not alter the construct", "Alters the construct or administration protocol"]]),
    body=["Her examples: a student with a hearing impairment takes the CELF in a quiet room wearing hearing aids; items, instructions and scoring unchanged → **accommodation**. On an articulation test the examiner says 'Remember your /r/ sound' when the manual does not allow cues → **modification**."],
    callouts=[dict(k="textbook", t="Textbook lists 'allow extra time on timed tests' as a modification. Breaks are her accommodation example. Keep 'break between items' and 'more time on a timed item' apart.", ev="textbook"),
              dict(k="trap", t="Allowing responses in a different format than the test requires = modification (slide 7), even though it sounds like access.", ev="slide")],
    src=["W2:slides 7-8", "TB1:PDF p. 48"]))

section(M, S(h="Norm-referenced vs criterion-referenced",
    body=["Both appear under Standardized Tests on slide 4. The textbook explains the contrast: a **norm-referenced** test answers 'How does my client compare to the average?' (always standardized); a **criterion-referenced** test answers 'How does my client's performance compare to an expected level of performance?' (used most often for neurogenic, fluency and voice disorders). 'Standardized' and 'norm-referenced' are not synonyms: any test can be standardized if administration and scoring are uniform."],
    callouts=[dict(k="gonsoulin", t="COMD 4382 record: norm vs criterion vs dynamic appeared as an EXCEPT item. Historical overlap only.", ev="historical")],
    src=["W2:slide 4", "TB1:PDF p. 47", "CODEX:section 9"]))

mc("m5-meth-01", "m5-methods",
   "According to her Week 2 slide, the purpose of an assessment is:",
   [("To draw a conclusion about an individual's communicative abilities", "Correct, verbatim."),
    ("To obtain a standard score for eligibility", "One possible use, not the stated purpose."),
    ("To compare a client with a normative sample", "That is what norm-referenced tests do, not the purpose of assessment itself."),
    ("To determine the client's therapy goals", "Goals come later from the findings.")],
   0, "Slide 2 answers its own question.", "Slide 2: 'To draw a conclusion about an individual's communicative abilities. Many different paths.'", ["W2:slide 2"], style=("definition",))

mc("m5-meth-02", "m5-methods",
   "On her slide, rating scales and checklists fall under which assessment method?",
   [("Information from clients and others", "Correct: case history forms, questionnaires/inventories, rating scales, checklists, interviews."),
    ("Observations", "Observation types are naturalistic, systematic/contextual analysis, simulated/structured play."),
    ("Standardized tests", "Standardized: norm- and criterion-referenced tests."),
    ("Dynamic assessment", "DA is test-teach-retest.")],
   0, "Who provides the information on a rating scale?", "Slide 4 structure.", ["W2:slide 4"], style=("classify",))

sort("m5-meth-03", "m5-methods",
   "Sort each item under the method where her slide places it.",
   ["Information from clients and others", "Observations", "Standardized tests"],
   [("Case history forms", "Information from clients and others"), ("Ethnographic interviews", "Information from clients and others"),
    ("Questionnaires and inventories", "Information from clients and others"),
    ("Systematic observation and contextual analysis", "Observations"), ("Simulated observations and structured play", "Observations"),
    ("Naturalistic", "Observations"),
    ("Norm-referenced tests", "Standardized tests"), ("Criterion-referenced tests", "Standardized tests")],
   "Three buckets from slide 4.", "Slide 4 lists these under the three headings.", ["W2:slide 4"])

tf("m5-meth-04", "m5-methods",
   "Her slide lists five assessment methods: information from clients and others, observation, speech-language analysis, dynamic assessment, and standardized assessments.",
   True, "A false version might swap in 'oral mechanism examination' as a sixth method.", "Count the SmartArt bars.", "Slide 3 shows five methods. Week 3 multicultural slide 9 repeats them.", ["W2:slide 3", "W3B:slide 9"])

mc("m5-man-01", "m5-manual",
   "Before administering any standardized test, her slide says to read the manual. Which is NOT one of the four things she lists to learn from it?",
   [("The age equivalent the client is expected to earn", "Correct answer. Not on the list (and age equivalents are cautioned against)."),
    ("Purpose of the test", "Listed."),
    ("Population for whom the test is designed", "Listed."),
    ("How to administer the test correctly", "Listed.")],
   0, "Four items: purpose, population, psychometrics, administration.", "Slide 5 SmartArt.", ["W2:slide 5"], style=("negative",))

tf("m5-man-02", "m5-manual",
   "Before administering ANY standardized test, you should read the accompanying manual.",
   True, "This is a true absolute; do not auto-mark 'any' as false.", "The STOP-sign slide.", "Slide 5: 'Before administering any standardized test… READ THE ACCOMPANYING MANUAL.'", ["W2:slide 5"], style=("absolute",))

mc("m5-acc-01", "m5-accmod",
   "A student with a hearing impairment takes the CELF in a quiet room wearing hearing aids. Items, instructions and scoring are unchanged. This is:",
   [("An accommodation, because the construct being measured has not changed", "Correct, her slide example."),
    ("A modification, because the testing environment was changed", "Changing HOW (environment) is accommodation; modification changes WHAT."),
    ("A modification, because hearing aids change how the student perceives the items", "Assistive devices are listed accommodations."),
    ("Neither, because hearing aids are always required during testing", "Not the classification question.")],
   0, "How vs what.", "Slide 7 accommodation example.", ["W2:slide 7"], style=("scenario", "sibling"))

mc("m5-acc-02", "m5-accmod",
   "All of the following are MODIFICATIONS on her slide EXCEPT:",
   [("Providing frequent breaks for a child with ADHD", "Correct answer. Breaks are an accommodation example."),
    ("Giving additional cues or prompts not specified in the manual", "Modification."),
    ("Allowing responses in a different format than the test requires", "Modification."),
    ("Translating a test standardized in English into another language", "Modification.")],
   0, "Which one changes access without changing the task?", "Slide 7 lists breaks, quiet room, hearing aids/FM, enlarged stimuli as accommodations.", ["W2:slide 7"], style=("negative",))

tf("m5-acc-03", "m5-accmod",
   "An accommodation changes what is being measured, so standard scores may become invalid.",
   False, "That describes a MODIFICATION. An accommodation changes HOW the test is administered; standard scores generally remain valid.",
   "Slide 8 table: which column?", "Slide 8 contrast table.", ["W2:slide 8"], style=("sibling", "antonym"))

tf("m5-acc-04", "m5-accmod",
   "During an articulation test, saying 'Remember your /r/ sound' when the manual does not allow cues is a modification that may invalidate the standardized score.",
   True, "False version would call it an accommodation because the items stayed the same.", "Her own modification example.", "Slide 7 modification example.", ["W2:slide 7"])

sort("m5-acc-05", "m5-accmod",
   "Classify each change.",
   ["Accommodation", "Modification"],
   [("Testing in a quiet room with reduced distractions", "Accommodation"), ("Enlarging stimulus materials for a student with a visual impairment", "Accommodation"),
    ("Using an FM system during testing", "Accommodation"),
    ("Repeating test items when the manual does not allow repetition", "Modification"),
    ("Allowing responses in a different format than the test requires", "Modification"),
    ("Translating an English-standardized test", "Modification")],
   "Does the construct or protocol change?", "Slide 7 lists each example in its column.", ["W2:slides 7-8"])

mc("m5-acc-06", "m5-accmod",
   "What is the deciding question when classifying a change to a standardized test as an accommodation or a modification?",
   [("Does it change what is measured or the standardized protocol, or only how the test is accessed?", "Correct: 'Does not alter the construct' vs 'Alters the construct or administration protocol'."),
    ("Does it raise the client's score?", "Both kinds can raise scores; that is not the rule."),
    ("Was it done for a client with a documented disability?", "Disability status does not decide it; the change itself does."),
    ("Is it listed in the client's IEP?", "Not the criterion on the slide.")],
   0, "Bottom row of the slide 8 table.", "Construct/protocol preserved → accommodation; altered → modification.", ["W2:slide 8"])

mc("m5-nc-01", "m5-normcrit",
   "Which question does a criterion-referenced test answer?",
   [("How does my client's performance compare to an expected level of performance?", "Correct (textbook wording)."),
    ("How does my client compare to the average of same-age peers?", "Norm-referenced."),
    ("How does my client respond to teaching?", "Dynamic assessment."),
    ("How consistent are my client's scores across administrations?", "Reliability.")],
   0, "Criterion = a standard of performance.", "Textbook Ch. 1: norm-referenced compares to the average; criterion-referenced compares to a predefined criterion.", ["TB1:PDF p. 47", "W2:slide 4"], ev="textbook", style=("sibling",))

tf("m5-nc-02", "m5-normcrit",
   "Standardized and norm-referenced mean the same thing.",
   False, "They are not synonyms: norm-referenced tests are always standardized, but criterion-referenced tests can also be standardized.",
   "Her slide lists two kinds of standardized tests.", "Slide 4 places both norm- and criterion-referenced under Standardized tests; the textbook states the terms are not synonymous.", ["W2:slide 4", "TB1:PDF p. 47"], ev="textbook", style=("sibling",))
