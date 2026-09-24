from core import *
def S(**k): return k

M = "m02"
module(M, 2, "Foundational integrity, EBP, ethics and HIPAA", "Week 1 · Standards", "Week 1",
       "The four features of a good assessment (the slide you flagged 'WILL BE ON TEST ONE'), the EBP triangle and four steps, ASHA's competence rule, HIPAA, and Week 1's cultural considerations.")
concept("m2-integrity", M, "Foundational integrity: the four features of a good assessment")
concept("m2-ebp", M, "EBP: three components and four steps")
concept("m2-ethics", M, "Ethics: assess only within competence; EBP as a core standard")
concept("m2-hipaa", M, "HIPAA: purpose, PHI, rules, who must follow")
concept("m2-culture", M, "Difference vs disorder in Week 1: linguistic and cultural factors")

section(M, S(h="Foundational Integrity (Week 1, slide 7)",
    body=["**A good assessment is:**"],
    bullets=["**Thorough**: as much relevant information as possible.",
             "**Uses a variety of assessment methods**: interview, case history, observations, and formal and informal testing measures.",
             "**Evidence based**: rely on valid and reliable assessment approaches.",
             "**Tailored to the individual client**: appropriate for the client's age, gender, skill levels and ethnocultural background."],
    callouts=[dict(k="flag", t="Your Test One folder contains a screenshot of this slide saved as 'WILL BE ON TEST ONE'. That is your record of her emphasis; it does not say how it will be worded.", ev="flag"),
              dict(k="trap", t="Each feature has a specific sub-bullet. Swap them and you get a classic sibling-swap item: e.g., 'Evidence based: appropriate for age, gender and ethnocultural background' pairs the wrong sub-bullet.", ev="inference")],
    src=["W1:slide 7", "T1"]))

section(M, S(h="Evidence-based practice (slides 8-10)",
    visual="ebp",
    body=["Slide 8 (an image of ASHA's EBP page) defines EBP as the integration of three components: **clinical expertise/expert opinion** (knowledge, judgment and critical reasoning from training and professional experience), **evidence, external and internal** (scientific literature = external; data and observations collected on your individual client = internal), and **client/patient/caregiver perspectives** (personal and cultural circumstances, values, priorities, expectations).",
          "Slide 9 gives ASHA's four steps: **1 Frame your clinical question → 2 Gather evidence → 3 Assess the evidence → 4 Make your clinical decision.**",
          "Slide 10 (Ethics): ASHA's Scope of Practice and Code of Ethics require that professionals only engage in assessment **within their competence**, based on education, training and experience. ASHA's position: EBP is a **core professional standard**; assessment must be informed by the best available evidence, the clinician's expertise, and the client's perspective."],
    callouts=[dict(k="numbers", t="3 components, 4 steps. 'Internal evidence' = data from YOUR client. That word is an easy swap target.", ev="slide"),
              dict(k="gonsoulin", t="COMD 4382 record: 'Which is NOT a component of EBP?' appeared on her practice exam (the joke distractor 'Tick-Tock advice from Dr. Syntax'). Historical, not a forecast.", ev="historical")],
    src=["W1:slides 8-10", "CODEX:section 4 T1"]))

section(M, S(h="HIPAA (slide 11 table)",
    table=dict(head=["Topic", "On her slide"], rows=[
        ["Stands for", "Health Insurance Portability and Accountability Act of 1996"],
        ["Primary purpose", "Protects the privacy and security of individuals' health information"],
        ["PHI", "Medical records, diagnoses, treatment and insurance information, names, birth dates, other identifying health information"],
        ["Patient rights", "Access records, request corrections, learn how information is used and shared"],
        ["Who must follow", "Health care providers, health plans, health care clearinghouses, business associates"],
        ["Privacy Rule", "National standards for protecting health information and limiting unnecessary disclosures"],
        ["Security Rule", "Safeguards to protect ELECTRONIC protected health information (e-PHI)"],
        ["Compliance examples", "Secure storage; proper authorization before disclosure; discuss only with authorized individuals"]]),
    callouts=[dict(k="trap", t="Privacy Rule vs Security Rule is a sibling pair. The Security Rule is the one tied to electronic PHI.", ev="inference"),
              dict(k="textbook", t="Textbook adds: school SLPs are generally not HIPAA-covered entities (FERPA provides similar protections), with exceptions; covered clinicians need an NPI and must give clients the privacy policy.", ev="textbook")],
    src=["W1:slide 11", "TB1:PDF pp. 39-40"]))

section(M, S(h="Cultural and linguistic considerations (slide 12)",
    body=["The guiding question on the slide: **'Is this individual's communication pattern a difference resulting from language or culture, or is it evidence of an underlying disorder?'**",
          "Linguistic factors: primary language at home and elsewhere; whether standardized tests are available for that population; whether an interpreter is needed. Example: a child omitting certain English grammatical markers may be showing dialect features, not a language disorder.",
          "Cultural influences: social rules in the client's community that may influence testing. Example: limited eye contact may reflect cultural norms rather than poor social communication skills."],
    src=["W1:slide 12"]))

# ---------------- items ----------------
mc("m2-int-01", "m2-integrity",
   "On the Foundational Integrity slide, 'rely on valid and reliable assessment approaches' is the sub-point for which feature of a good assessment?",
   [("Evidence based", "Correct. Evidence based → valid and reliable approaches."),
    ("Thorough", "Thorough → as much relevant information as possible."),
    ("Uses a variety of assessment methods", "Variety → interview, case history, observations, formal and informal measures."),
    ("Tailored to the individual client", "Tailored → appropriate for age, gender, skill levels and ethnocultural background.")],
   0, "Match the sub-bullet to its parent. Validity and reliability are psychometric evidence.",
   "Each of the four features has one sub-point. Evidence based is defined by valid and reliable approaches.",
   ["W1:slide 7", "T1"], style=("sibling",))

mc("m2-int-02", "m2-integrity",
   "All of the following are features of a good assessment on her Foundational Integrity slide EXCEPT:",
   [("Standardized: the same battery administered in the same order to every client", "Correct answer. 'Standardized' is a psychometric principle (Week 2), not one of the four features, and a fixed battery for all clients contradicts 'tailored'."),
    ("Thorough", "One of the four."),
    ("Uses a variety of assessment methods", "One of the four."),
    ("Tailored to the individual client", "One of the four.")],
   0, "Four features: thorough, variety, evidence based, tailored. Which option is a real term from a DIFFERENT slide?",
   "The slide's four features are thorough, variety of methods, evidence based, tailored. Standardization belongs to the Week 2 psychometric principles.",
   ["W1:slide 7", "W2:slide 23"], style=("negative", "sibling"))

tf("m2-int-03", "m2-integrity",
   "A good assessment is tailored to the individual client, meaning it is appropriate for the client's age, gender, skill levels and ethnocultural background.",
   True, "A tempting false version swaps the parent: 'A good assessment is thorough, meaning it is appropriate for age, gender...'",
   "Is this the sub-bullet that belongs to 'tailored'?",
   "Verbatim pairing from slide 7.", ["W1:slide 7"], style=("definition",))

tf("m2-int-04", "m2-integrity",
   "A good assessment is thorough, meaning it uses a variety of methods such as interview, case history, observations and formal and informal testing.",
   False, "Thorough = as much relevant information as possible. The interview/case history/observation/formal and informal list defines 'uses a variety of assessment methods'.",
   "Two features share a nearby idea. Which one owns the list of methods?",
   "Sibling swap: the methods list belongs to 'variety of assessment methods'; 'thorough' is 'as much relevant information as possible'.",
   ["W1:slide 7"], style=("sibling",))

match("m2-int-05", "m2-integrity",
   "Match each feature of a good assessment to its sub-point.",
   [("Thorough", "As much relevant information as possible"),
    ("Uses a variety of assessment methods", "Interview, case history, observations, formal and informal measures"),
    ("Evidence based", "Valid and reliable approaches"),
    ("Tailored to the individual client", "Appropriate for age, gender, skill level and ethnocultural background")],
   "Every sub-point is unique to one feature.", "Slide 7 verbatim structure.", ["W1:slide 7", "T1"])

mc("m2-ebp-01", "m2-ebp",
   "On the EBP slide, data and observations collected on YOUR individual client are called:",
   [("Internal evidence", "Correct. External = scientific literature; internal = data from your individual client."),
    ("External evidence", "External evidence is the scientific literature."),
    ("Clinical expertise", "Expertise is the clinician's knowledge, judgment and reasoning from training and experience."),
    ("Client perspectives", "Perspectives are the client's circumstances, values, priorities and expectations.")],
   0, "The Evidence corner of the triangle has two kinds.",
   "Slide 8: evidence is 'the best available information gathered from the scientific literature (external evidence) and from data and observations collected on your individual client (internal evidence)'.",
   ["W1:slide 8"], style=("sibling", "definition"))

order("m2-ebp-02", "m2-ebp",
   "Order ASHA's four EBP steps as shown on her slide.",
   ["Frame your clinical question", "Gather evidence", "Assess the evidence", "Make your clinical decision"],
   "Question first, decision last.", "Slide 9 shows the four numbered steps in this order.", ["W1:slide 9"])

mc("m2-ebp-03", "m2-ebp",
   "Which is NOT one of the three components of EBP on her slide?",
   [("Standardized test norms", "Correct answer. Norms can be part of evidence, but they are not one of the three named components."),
    ("Clinical expertise/expert opinion", "Component."),
    ("Evidence (external and internal)", "Component."),
    ("Client/patient/caregiver perspectives", "Component.")],
   0, "Triangle corners: expertise, evidence, perspectives.",
   "EBP integrates clinical expertise, evidence (external and internal), and client/patient/caregiver perspectives.",
   ["W1:slide 8"], style=("negative",))

tf("m2-ebp-04", "m2-ebp",
   "In the EBP framework, 'assess the evidence' is the step that comes immediately before 'gather evidence.'",
   False, "Gather evidence (step 2) comes before Assess the evidence (step 3).",
   "You cannot appraise what you have not collected.", "Order: frame → gather → assess → decide.", ["W1:slide 9"], style=("sequence",))

mc("m2-eth-01", "m2-ethics",
   "According to her Ethics slide, ASHA's Scope of Practice and Code of Ethics require that professionals engage in assessment only:",
   [("Within their competence, based on education, training and experience", "Correct, verbatim idea from slide 10."),
    ("With standardized tests normed on the client's population", "A good goal, but not the requirement stated on the Ethics slide."),
    ("After obtaining a physician's referral", "Not stated on the slide."),
    ("When the client's insurance has authorized the evaluation", "Not stated on the slide.")],
   0, "The limit is about the clinician, not the test.",
   "Slide 10: only engage in assessment within competence, based on education, training and experience; and EBP is a core professional standard.",
   ["W1:slide 10"])

tf("m2-eth-02", "m2-ethics",
   "ASHA's position is that evidence-based practice is a core professional standard, so assessment must be informed by the best available evidence, the clinician's expertise and the client's perspective.",
   True, "A false version would drop one of the three (e.g., 'evidence and expertise, not the client's perspective').",
   "Count the three inputs.", "Slide 10 states EBP is a core professional standard and names all three inputs.", ["W1:slide 10"])

mc("m2-hip-01", "m2-hipaa",
   "Which HIPAA element on her table specifically requires safeguards for ELECTRONIC protected health information?",
   [("The Security Rule", "Correct: 'Requires safeguards to protect electronic protected health information (e-PHI).'"),
    ("The Privacy Rule", "The Privacy Rule sets national standards for protecting health information and limiting unnecessary disclosures in general."),
    ("Patient rights", "Rights to access, correct and learn how information is used."),
    ("Business associate requirements", "Business associates are among who must follow HIPAA; not the e-PHI rule.")],
   0, "Privacy and Security are siblings. One is about all PHI; one is about e-PHI.",
   "Slide 11 separates the Privacy Rule (standards, limit unnecessary disclosures) from the Security Rule (safeguards for e-PHI).",
   ["W1:slide 11"], style=("sibling",))

mc("m2-hip-02", "m2-hipaa",
   "According to her HIPAA table, all of the following must follow HIPAA EXCEPT:",
   [("Every school-based SLP, regardless of setting", "Correct answer. Her table lists providers, health plans, clearinghouses and business associates; the textbook notes school SLPs are generally not covered entities (FERPA applies), with exceptions."),
    ("Health care providers", "Listed."),
    ("Health plans", "Listed."),
    ("Business associates", "Listed.")],
   0, "Four groups are on the slide. Which option overgeneralizes?",
   "Who must follow: health care providers, health plans, health care clearinghouses, business associates. The textbook (Ch. 1) adds that educational-setting SLPs are generally not HIPAA covered entities.",
   ["W1:slide 11", "TB1:PDF p. 39"], style=("negative", "absolute"))

tf("m2-hip-03", "m2-hipaa",
   "HIPAA stands for the Health Insurance Portability and Accountability Act of 1996, and its primary purpose is to protect the privacy and security of individuals' health information.",
   True, "Watch for a false version that changes 'Portability' to 'Privacy' or the year.",
   "Check each word of the name.", "Slide 11 row 1 and row 2.", ["W1:slide 11"], style=("definition",))

multi("m2-hip-04", "m2-hipaa",
   "Select ALL items her slide lists as protected health information (PHI).",
   [("Diagnoses", "Listed."), ("Insurance information", "Listed."), ("Birth dates", "Listed."), ("Names", "Listed."),
    ("A de-identified statistic about all clients seen this year", "Not identifying health information about an individual.")],
   [0, 1, 2, 3], "PHI identifies a person or their health information.",
   "PHI on slide 11: medical records, diagnoses, treatment information, insurance information, names, birth dates, and other identifying health information.",
   ["W1:slide 11"], style=("classify",))

mc("m2-cul-01", "m2-culture",
   "During an assessment, a child makes limited eye contact. Using the Week 1 slide, which interpretation is most defensible before any other evidence is gathered?",
   [("It may reflect cultural norms rather than poor social communication skills", "Correct, this is the slide's own example."),
    ("It indicates a social communication disorder that should be listed in the diagnosis", "One behavior cannot establish a disorder; the slide gives this as a possible cultural difference."),
    ("It shows the standardized test was modified and the scores are invalid", "Eye contact is not an administration change."),
    ("It means an interpreter is required for the rest of the session", "Interpreter need is a linguistic question, not answered by eye contact.")],
   0, "Her slide gives this exact example under Cultural Influences.",
   "Slide 12: limited eye contact during an assessment may reflect cultural norms rather than poor social communication skills.",
   ["W1:slide 12"], style=("scenario",))

tf("m2-cul-02", "m2-culture",
   "A child who omits certain English grammatical markers is demonstrating a language disorder; therefore dialect does not need to be considered.",
   False, "The omission MAY reflect features of the child's dialect rather than a language disorder; dialect must be considered.",
   "Split at 'therefore' and test the first half against the slide example.",
   "Slide 12's linguistic example says omitted English grammatical markers may be dialect features rather than a disorder.",
   ["W1:slide 12"], style=("therefore",))

mc("m2-cul-03", "m2-culture",
   "Which question does her slide list as a LINGUISTIC factor rather than a cultural influence?",
   [("Are standardized tests available for that population?", "Correct. Linguistic factors: primary language, availability of standardized tests for the population, need for an interpreter."),
    ("Are there social rules in the client's cultural community that may influence testing?", "This is the Cultural Influences question."),
    ("Does limited eye contact reflect community norms?", "Cultural influence example."),
    ("How does the family view disability and intervention?", "Cultural (also on the Week 3 cultural differences list).")],
   0, "Language-based questions vs social-rule questions.",
   "Slide 12 lists three linguistic questions: primary language at home and elsewhere, availability of standardized tests for that population, need for an interpreter.",
   ["W1:slide 12", "W3B:slide 3"], style=("classify",))
