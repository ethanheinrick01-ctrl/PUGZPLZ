from core import *
def S(**k): return k

M = "m09"
module(M, 9, "Overview of a complete assessment", "Week 3 · Evaluation", "Week 3 (+ lectures 9/9, 9/11)",
       "Why quality matters, how setting shapes the evaluation, the core components (including the hearing screen), case history, intake interview phases, internal and external influences, direct assessment and play-based assessment, and why formal AND informal measures matter.")
concept("m9-quality", M, "Quality, 'more than a single score', PPP and the ICF")
concept("m9-setting", M, "How setting and population shape the evaluation")
concept("m9-components", M, "Core components of an evaluation")
concept("m9-history", M, "Case history: contents, uses, limits")
concept("m9-interview", M, "Interview skills and the three intake phases")
concept("m9-influences", M, "Internal vs external influences")
concept("m9-direct", M, "Direct assessment and play-based assessment")
concept("m9-formalinformal", M, "Why both formal and informal assessment matter; functional impact")

section(M, S(h="Quality and scope (slides 2-3)",
    body=["Slide 2: the **quality** of an evaluation determines everything that follows. A thorough assessment produces **specific, defensible goals** and a clear therapy trajectory; a weak one produces **vague objectives, slow progress, and documentation that falls apart under insurance review or IEP scrutiny**.",
          "Slide 3: an evaluation is **more than a single test score**: a comprehensive process to capture how a person communicates across real-life contexts, identify the **nature and severity** of any disorder, and lay the groundwork for treatment. **ASHA's Preferred Practice Patterns** (originally approved in **2004**, still current) align evaluation with the **WHO International Classification of Functioning, Disability and Health (ICF)**, so clinicians consider not just impairment-level data but how communication difficulties affect **participation in daily activities**."],
    callouts=[dict(k="lecture", t="9/9 example: a trial attorney with dysarthria after a stroke. The impairment may be mild, but its effect on his ability to be understood by a jury is a significant functional impact. That is the ICF lens.", ev="lecture")],
    src=["W3A:slides 2-3", "L0909"]))

section(M, S(h="Setting and population (slide 4)",
    table=dict(head=["Setting", "What the evaluation centers on"], rows=[
        ["School", "Whether communication difficulties ADVERSELY AFFECT EDUCATIONAL PERFORMANCE; curriculum-based language sampling and classroom observations alongside standardized testing"],
        ["Outpatient clinic", "A broader range of functional outcomes; a preschooler referred for articulation gets a very different battery than an adult assessed for aphasia after a neurological event"],
        ["Hospital / acute care", "More targeted and time-sensitive: a bedside swallowing screen or brief cognitive-linguistic assessment may take priority; comprehensive evaluation once the patient stabilizes"]]),
    callouts=[dict(k="lecture", t="9/9: after a stroke, doctors want to know if the patient is safe to swallow. The SLP does a bedside swallow screen (liquids, puree, a cracker); if it fails, further testing such as a modified barium swallow.", ev="lecture")],
    src=["W3A:slide 4", "L0909"]))

section(M, S(h="Core components (slide 5)",
    bullets=["Case history", "Interviews",
             "Direct assessment: oral motor examination; standardized (formal) testing; informal measures (language samples, dynamic assessment, narrative re-tell tasks); **hearing screening** (because hearing loss can mimic or compound speech-language difficulties, a screening is typically included or recent audiological results are reviewed); observations (eye contact, turn-taking, attention, frustration tolerance, self-correction patterns)",
             "Analysis of findings", "Writing reports", "Sharing findings"],
    callouts=[dict(k="lecture", t="9/9: kids who come in with a language delay may have a hearing loss, so 'take that off the table'. The textbook adds: an SLP screens; a client who fails is referred to an audiologist or other medical professional; SLPs do not diagnose hearing loss.", ev="lecture"),
              dict(k="source", t="Hearing-loss degree tables are NOT part of this lab. No Diagnostics slide, announcement or transcript in your package defines degree ranges, so the lab does not invent or import one.", ev="inference")],
    src=["W3A:slide 5", "L0909", "TB4:PDF pp. 153-154"]))

section(M, S(h="Case history (slides 6-8)",
    body=["The case history influences the **choice of assessment tools and strategies** and enhances understanding of the disorder. It records past and present concerns. Histories: **developmental, medical, family, professional evaluations, occupational, educational, sociological**. It provides a **starting point** for assessment but **may be limited due to potential problems** (e.g., an informant who cannot report accurately).",
          "Slide 8: **allergy awareness** (important if allergens could be used during assessment or treatment). **Information from other professionals** (SLPs, audiologists, doctors, teachers, psychologists, OT/PT, counselors) **may lead to a biased view** of the client's condition."],
    callouts=[dict(k="lecture", t="9/9: you can agree or disagree with another professional's report, but 'you have to do your own independent testing'. Case history and interview often happen at the same time; intake forms or chart review may arrive before the visit.", ev="lecture"),
              dict(k="lecture", t="9/14: why developmental milestones matter: if motor milestones were on time but speech/language were late, that points to a speech-language issue; if everything is delayed, think broader and early intervention (under 36 months). Pneumonia history can be a red flag for aspiration.", ev="lecture")],
    src=["W3A:slides 6-8", "L0909", "L0914"]))

section(M, S(h="Interviews (slides 9-10)",
    visual="intake",
    body=["To conduct effective interviews: **use open-ended questions** to encourage detailed responses; **listen actively and take detailed notes**; **clarify inconsistencies** or unclear information; **be sensitive** to concerns and emotions.",
          "Intake interview phases: **Opening** (introductions; purpose of meeting; structure of meeting) → **Body** (major content areas) → **Closing** (summarize major points)."],
    callouts=[dict(k="lecture", t="9/9: she introduces herself, explains they'll talk first and then do testing, covers history in the body, and closes by summarizing and saying what comes next. Research she cited: for young children (birth to 3), parent-reported information is often more accurate than what you see in the clinic, since toddlers often won't perform on the spot.", ev="lecture")],
    src=["W3A:slides 9-10", "L0909"]))

section(M, S(h="Internal and external influences (slide 11)",
    table=dict(head=["Internal (physical and mental limitations)", "External (can influence the assessment)"], rows=[
        ["Cognition and communication", "Family environment"], ["Motor abilities and strength", "Linguistic factors"], ["Hearing and visual acuity", "Cultural influences"]]),
    src=["W3A:slide 11"]))

section(M, S(h="Direct assessment and play-based assessment (slide 12)",
    bullets=["Multiple approaches will be employed.", "**The more direct assessment information the clinician obtains, the stronger the conclusions will be.**",
             "Choose approaches that will validly and reliably assess behaviors of concern.", "Apply modifications **when necessary**.", "Account for cultural-linguistic factors.",
             "**Play-based assessment**: use of toys and activities; following the child's lead; **suitable for children with limited English proficiency**."],
    callouts=[dict(k="lecture", t="9/11: play-based assessment lets you observe how a child interacts without interfering; she described warming up a reluctant child with play before formal testing.", ev="lecture")],
    src=["W3A:slide 12", "L0911"]))

section(M, S(h="Formal AND informal (slides 13-14)",
    body=["Standardized scores have well-documented limitations: **a child might score in the average range on a vocabulary test yet struggle to hold a conversation with peers**; **an adult recovering from a stroke might perform poorly on a timed naming task yet communicate effectively using compensatory strategies**.",
          "**ASHA's Scope of Practice (2016)** explicitly recommends **multiple data sources**; **ASHA's Medical Review Guidelines** say to **avoid basing a diagnosis on a single standardized score**. Informal measures fill the gaps by showing how communication functions in everyday situations.",
          "Slide 14 asks two questions of your reports: do they describe the **functional communication impact, not just test scores**? Are you connecting findings to **real, observable communication demands** (ordering at a restaurant, following multi-step classroom directions)? Functional impact strengthens eligibility decisions and justifies services to insurance payers."],
    src=["W3A:slides 13-14", "L0911"]))

# ---------------- items ----------------
tf("m9-q-01", "m9-quality",
   "According to her slide, a weak evaluation produces vague objectives, slow progress and documentation that falls apart under insurance review or IEP scrutiny.",
   True, "False edit: attribute 'specific, defensible goals' to the weak evaluation.", "Slide 2 contrasts thorough vs weak.", "Slide 2.", ["W3A:slide 2"])

mc("m9-q-02", "m9-quality",
   "ASHA's Preferred Practice Patterns align the evaluation process with which framework?",
   [("The WHO International Classification of Functioning, Disability and Health (ICF)", "Correct."),
    ("The IDEA eligibility framework", "Not on the slide."),
    ("The ASKED model", "ASKED is cultural competence."),
    ("The BID process", "BID is for interpreters.")],
   0, "Functioning and participation.", "Slide 3: PPP (2004, still current) align with the WHO ICF, so clinicians consider participation in daily activities.", ["W3A:slide 3"], style=("definition",))

mc("m9-q-03", "m9-quality",
   "Her slide says ASHA's Preferred Practice Patterns were originally approved in:",
   [("2004", "Correct."), ("2016", "2016 is the Scope of Practice year cited on slide 13."), ("1996", "HIPAA's year."), ("2021", "Not on the slide.")],
   0, "Three different years appear across her decks.", "Slide 3: originally approved in 2004 and still current.", ["W3A:slide 3", "W3A:slide 13"], style=("number",))

mc("m9-set-01", "m9-setting",
   "In school-based practice, her slide says an evaluation often centers on:",
   [("Whether a student's communication difficulties adversely affect educational performance", "Correct."),
    ("Whether the student is safe to swallow", "Acute-care focus."),
    ("A broader range of functional outcomes", "Outpatient-clinic focus."),
    ("A brief cognitive-linguistic screen until the student stabilizes", "Hospital focus.")],
   0, "The school's question is educational.", "Slide 4.", ["W3A:slide 4"], style=("classify",))

mc("m9-set-02", "m9-setting",
   "Which setting description is NOT correct according to her slide?",
   [("Hospital/acute care: comprehensive evaluations are completed first, before any targeted screen", "Correct answer. Acute care is targeted and time-sensitive; comprehensive evaluation comes once the patient stabilizes."),
    ("School: curriculum-based language sampling and classroom observations alongside standardized testing", "Correct description."),
    ("Outpatient: a preschooler referred for articulation undergoes a very different battery than an adult with aphasia", "Correct description."),
    ("Acute care: a bedside swallowing screen may take priority", "Correct description.")],
   0, "Sequence in the hospital.", "Slide 4.", ["W3A:slide 4"], style=("negative", "sequence"))

mc("m9-comp-01", "m9-components",
   "Why does her slide say a hearing screening is typically included in a speech-language evaluation?",
   [("Hearing loss can mimic or compound speech-language difficulties", "Correct, verbatim reason."),
    ("SLPs diagnose the degree of hearing loss during evaluations", "SLPs screen and refer; they do not diagnose hearing loss (textbook)."),
    ("Insurance requires a hearing test for every evaluation", "Not stated."),
    ("A failed screening confirms a speech sound disorder", "A failed screen means refer.")],
   0, "Parenthetical on slide 5.", "Slide 5 hearing screening bullet; the ASHA video's 3-year-old case shows the cost of skipping it.", ["W3A:slide 5", "VA:5:15-7:22"])

tf("m9-comp-02", "m9-components",
   "If a client fails a hearing screening during a speech-language evaluation, the SLP should refer the client to an audiologist or other medical professional for further evaluation.",
   True, "False edit: 'the SLP diagnoses the type and degree of loss'.", "Screen vs diagnose.", "Textbook Ch. 4: SLPs are not qualified to evaluate hearing beyond a basic screening; a failed screen → referral. The ASHA video case: failed screen → audiology.", ["TB4:PDF p. 154", "VA:6:42"], ev="textbook")

multi("m9-comp-03", "m9-components",
   "Select ALL behaviors her Week 3 slide lists as observations that add depth no single test can capture.",
   [("Eye contact", "Listed."), ("Turn-taking", "Listed."), ("Frustration tolerance", "Listed."), ("Self-correction patterns", "Listed."),
    ("Raw score on the vocabulary subtest", "A test result, not an observation.")],
   [0, 1, 2, 3], "Five observations are listed (attention is the fifth).", "Slide 5: eye contact, turn-taking, attention, frustration tolerance, self-correction patterns.", ["W3A:slide 5"], style=("classify",))

mc("m9-hist-01", "m9-history",
   "Her slide warns that information from other professionals:",
   [("May lead to a biased view of the client's condition", "Correct."),
    ("Should replace direct assessment when it is recent", "She said you must do your own independent testing."),
    ("Is not part of the case history", "It is listed under case history (cont.)."),
    ("Is protected health information that cannot be requested", "Not stated; HIPAA governs how it is shared, not whether it can be used.")],
   0, "Slide 8, second box.", "Slide 8; 9/9 lecture: agree or disagree, but do your own independent testing.", ["W3A:slide 8", "L0909"])

mc("m9-hist-02", "m9-history",
   "All of the following are histories listed on her case-history slide EXCEPT:",
   [("Psychometric", "Correct answer. Not a history on the list."),
    ("Occupational", "Listed."), ("Sociological", "Listed."), ("Professional evaluations", "Listed.")],
   0, "Developmental, medical, family, professional evaluations, occupational, educational, sociological.", "Slide 7.", ["W3A:slide 7"], style=("negative",))

tf("m9-hist-03", "m9-history",
   "A case history provides a starting point for assessment but may be limited due to potential problems.",
   True, "False edit: 'is always accurate because it comes from the family'.", "Slide 7, last two lines.", "Slide 7. On 9/9 she gave the example of an adult with cognitive deficits who cannot report accurately.", ["W3A:slide 7", "L0909"])

tf("m9-hist-04", "m9-history",
   "Allergy awareness belongs in the case history because allergens may be used during assessment or treatment.",
   True, "False edit: '...because allergies cause speech-language disorders'.", "Slide 8, first box.", "Slide 8.", ["W3A:slide 8"])

order("m9-int-01", "m9-interview",
   "Order the three phases of an intake interview and match the task that begins each.",
   ["Opening phase: introductions, purpose and structure of the meeting", "Body of the interview: major content areas", "Closing phase: summarize major points"],
   "Hello, content, summary.", "Slide 10 SmartArt.", ["W3A:slide 10"])

mc("m9-int-02", "m9-interview",
   "In which intake phase do you explain the purpose and structure of the meeting?",
   [("Opening phase", "Correct."), ("Body of the interview", "Major content areas."), ("Closing phase", "Summarize major points."), ("Debriefing", "BID phase for interpreters.")],
   0, "Before the content.", "Slide 10.", ["W3A:slide 10"], style=("sibling",))

mc("m9-int-03", "m9-interview",
   "All of the following are strategies her slide lists for effective interviews EXCEPT:",
   [("Use closed yes/no questions first to keep caregivers on topic", "Correct answer. The slide says open-ended questions."),
    ("Listen actively and take detailed notes", "Listed."), ("Clarify any inconsistencies or unclear information", "Listed."),
    ("Be sensitive to the client's and caregiver's concerns and emotions", "Listed.")],
   0, "Four strategies on slide 9.", "Slide 9. The mock-interview handout: open-ended questions first, then specific follow-ups. Her 4382 record: 'ask closed-ended questions' was keyed as a counseling strategy NOT to use (historical).", ["W3A:slide 9", "MOCKX:p. 1", "CODEX:section 4"], style=("negative",))

sort("m9-inf-01", "m9-influences",
   "Sort each influence as internal or external.",
   ["Internal", "External"],
   [("Hearing and visual acuity", "Internal"), ("Motor abilities and strength", "Internal"), ("Cognition and communication", "Internal"),
    ("Family environment", "External"), ("Linguistic factors", "External"), ("Cultural influences", "External")],
   "Inside the person vs around the person.", "Slide 11.", ["W3A:slide 11"])

tf("m9-inf-02", "m9-influences",
   "Hearing and visual acuity are external influences on communication, alongside cultural factors.",
   False, "Hearing and visual acuity are INTERNAL influences; cultural influences are external.", "Sibling-swap across the two lists.", "Slide 11.", ["W3A:slide 11"], style=("sibling",))

tf("m9-dir-01", "m9-direct",
   "The more direct assessment information the clinician obtains, the stronger the conclusions will be.",
   True, "False edit: 'the fewer measures, the stronger'.", "Slide 12, second box.", "Slide 12.", ["W3A:slide 12"])

mc("m9-dir-02", "m9-direct",
   "Which feature of play-based assessment is listed on her slide?",
   [("Suitable for children with limited English proficiency", "Correct."),
    ("Requires a standardized protocol for toy presentation", "Not listed; it follows the child's lead."),
    ("Replaces the need for a case history", "Not stated."),
    ("Is used only with children who have no spoken language", "Not stated.")],
   0, "Three bullets: toys/activities, following the child's lead, and one about language.", "Slide 12 play-based bullets.", ["W3A:slide 12"])

mc("m9-dir-03", "m9-direct",
   "Her slide says to apply modifications:",
   [("When necessary", "Correct."), ("Whenever they increase the client's score", "Not the criterion."),
    ("Never, because they invalidate standard scores", "Too absolute; the slide allows them when necessary (and Week 3 lists CLD modifications)."),
    ("Only with interpreters present", "Not stated.")],
   0, "Two words.", "Slide 12: 'Apply modifications when necessary'.", ["W3A:slide 12", "W3B:slide 12"], style=("absolute",))

mc("m9-fi-01", "m9-formalinformal",
   "According to her slide, ASHA's Medical Review Guidelines reinforce that clinicians should:",
   [("Avoid basing a diagnosis on a single standardized score", "Correct."),
    ("Use only standardized scores for diagnosis to satisfy payers", "Opposite."),
    ("Use informal measures only when standardized tests are unavailable", "Not stated."),
    ("Report age equivalents for insurance", "Not stated.")],
   0, "Slide 13.", "Slide 13: ASHA's Scope of Practice (2016) recommends multiple data sources; the Medical Review Guidelines say avoid basing a diagnosis on a single standardized score.", ["W3A:slide 13"])

mc("m9-fi-02", "m9-formalinformal",
   "Which example does her slide use to show a limitation of standardized scores?",
   [("An adult recovering from a stroke performs poorly on a timed naming task yet communicates effectively using compensatory strategies", "Correct, one of her two examples."),
    ("A child scores below average on a vocabulary test and struggles with peer conversation", "Scores and function agree here; her example has an AVERAGE vocabulary score with conversation difficulty."),
    ("A bilingual child scores low on an English-only test", "A valid concern from Week 3, but not the slide 13 example."),
    ("A client's score changes on retest", "Reliability, not the slide's point.")],
   0, "Her examples show the score and real function DISAGREEING.", "Slide 13's two examples.", ["W3A:slide 13"], style=("scenario",))

tf("m9-fi-03", "m9-formalinformal",
   "A child who scores in the average range on a vocabulary test does not have communication difficulties; therefore informal conversation measures are unnecessary.",
   False, "A child might score in the average range on a vocabulary test YET struggle to hold a conversation with peers; informal measures fill that gap.",
   "Test the first half against her slide 13 example.", "Slide 13.", ["W3A:slide 13"], style=("therefore",))

mc("m9-fi-04", "m9-formalinformal",
   "Which report statement best reflects the functional-impact question on her slide 14?",
   [("Difficulty following multi-step classroom directions limits his participation in independent seatwork", "Correct: ties findings to an observable communication demand."),
    ("Receptive language standard score = 79", "A score, not functional impact."),
    ("He scored at the 8th percentile", "A score."),
    ("He was cooperative throughout testing", "An observation of behavior, not functional impact.")],
   0, "Her examples: ordering at a restaurant; following multi-step classroom directions.", "Slide 14: describe functional communication impact, not just test scores; connect findings to real, observable demands.", ["W3A:slide 14"], style=("scenario",))
