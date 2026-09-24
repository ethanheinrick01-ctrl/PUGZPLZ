from core import *
def S(**k): return k

M = "m04"
module(M, 4, "Difference or disorder: multicultural assessment", "Week 3 · Multicultural", "Week 3 (+ 9/14 lecture)",
       "The Week 3 multicultural deck: your primary role, ASKED, ethnographic research, assessing CLD clients, dynamic assessment, test modifications, the disorder-vs-difference signs, and interpreters (BID).")
concept("m4-role", M, "Primary role, cultural communication differences, ethnographic research")
concept("m4-asked", M, "Cultural competence and the ASKED model")
concept("m4-cld", M, "Assessing CLD clients: both languages, language history, ALDeQ, five approaches")
concept("m4-da-std", M, "Dynamic assessment for CLD; how standardized tests get modified")
concept("m4-diff", M, "Disorder vs difference: the rule and the signs")
concept("m4-interp", M, "Interpreters vs translators; IDEA; selection; BID")

section(M, S(h="Your primary role and where cultural knowledge comes from",
    body=["Slide 2: your **primary role is to determine disorder or difference**; set aside biases and stereotypes; know cultural communication differences (social rules, customs, beliefs).",
          "Slide 3 lists what cultural groups may view differently: disability and intervention; a woman's role in society; familial authority; appropriate names and titles; case history and interview questions; traditional testing practices; individual achievement; the child's behavior; use of eye contact; time; expression of disapproval; personal space; small talk; mistrust of other cultural groups.",
          "Slide 4: speech characteristics vary; know typical patterns for the client's background (Speech Accent Archive, George Mason University; Multilingual Children's Speech, Charles Sturt University, Australia).",
          "Slide 5, **ethnographic research** (a method of becoming more culturally knowledgeable): attend cultural events; watch movies and TV from the client's cultural group; read literature from the group; watch culturally representative video; ask the client to share; interview community members; consult other professionals; read professional literature. The ethnographic interview approach supplements it."],
    callouts=[dict(k="lecture", t="9/14: she tied this to interviewing. Personal space varies by culture; if you stand closer than a family expects and they shut down, 'I would receive that as something disordered versus that might just culturally' be normal. She had the class rephrase badly worded questions (e.g., 'Does your child sit in front of a TV screen all day?' → 'How does your child spend screen time?').", ev="lecture")],
    src=["W3B:slides 2-5", "L0914"]))

section(M, S(h="Cultural competence: ASKED",
    visual="asked",
    body=["Slide 6: cultural competence enables clinicians to serve clients with knowledge, respect and dignity. It is an **ongoing process that requires self-assessment**. The conceptual model is **ASKED: Awareness, Skill, Knowledge, Encounters, Desire**. ASHA's Office of Multicultural Affairs (OMA) provides resources."],
    src=["W3B:slide 6"]))

section(M, S(h="Assessing CLD clients",
    body=["Slide 7: the assessment is **thorough, individualized, evidence-based**, and **assesses abilities in both languages**. Considerations: culturally appropriate materials; **test in one language at a time**; be prepared to modify the assessment plan; use an interpreter/translator if needed; be sensitive and respectful.",
          "Slide 8: **language history** is a necessary component (which languages, how frequently). Textbook forms: **Form 3-2 'Language History Survey for Children'** and **Form 3-3 '...for Adults'**. Be thoughtful about how the information is obtained.",
          "Slide 9, **five direct-assessment approaches**: information from clients and others; observations; speech-language sample analysis; dynamic assessment; standardized testing.",
          "Slide 10: parents or family members **may be the best source**. The **Alberta Language and Development Questionnaire (ALDeQ)** is a parent questionnaire for ages **4;5 to 7;5**, available online. Classroom teachers help for school-aged clients; interpreters/translators are good sources of information."],
    callouts=[dict(k="numbers", t="ALDeQ: parent questionnaire, ages 4;5-7;5. Textbook adds: norm-referenced; for children with 4-40 months of English exposure.", ev="slide")],
    src=["W3B:slides 7-10", "TB3:PDF pp. 112-113"]))

section(M, S(h="Dynamic assessment and standardized tests with CLD clients",
    body=["Slide 11: dynamic assessment is **widely recommended** for CLD clients. **Clients who do NOT demonstrate improvement are more likely to have a language impairment.**",
          "Slide 12: standardized tests are **often problematic** for CLD populations. Review materials first. Ways a test might be modified: **repeat or reword; add more trial questions; alter, rephrase or add test questions; score according to question intent; request clarifications.**"],
    callouts=[dict(k="conflict", t="Tension to keep straight: Week 2 calls extra cues, altered instructions and translation MODIFICATIONS that can invalidate standard scores. Week 3 lists modifications you might make for CLD clients. Both are true: the modification can make the testing more useful, and the resulting standard score may no longer be valid for norm comparison. Report it.", ev="inference")],
    src=["W3B:slides 11-12", "W2:slides 7-8"]))

section(M, S(h="Disorder vs difference (slides 13-14)",
    table=dict(head=["", "Pattern"], rows=[
        ["Disorder", "Client demonstrates difficulties in ALL languages"],
        ["Difference", "Difficulties present in only ONE language"]]),
    bullets=["Signs indicative of disorder: difficulty learning both languages; atypical nonverbal communication; idiosyncratic communication errors; family history of language-learning disability; slower development; difficulty expressing basic needs; difficulty with peer interactions, asking/answering questions, conveying thoughts; tendency to repeat what is heard.",
             "A speech-language disorder in both languages warrants intervention.",
             "Elective therapy such as accent modification; the client may benefit from community programs."],
    callouts=[dict(k="trap", t="Antonym-flip target: 'difficulties in only one language = disorder'. Also: 'tendency to repeat what is heard' is on the DISORDER list.", ev="inference"),
              dict(k="gonsoulin", t="Her 4382 record included CLD assessment (disorder within difference; interpreters over family). Historical overlap only.", ev="historical")],
    src=["W3B:slides 13-14", "CODEX:section 9"]))

section(M, S(h="Interpreters, translators and BID (slides 15-16)",
    visual="bid",
    body=["**Interpreters translate spoken language; translators translate written text.** IDEA guidelines: clients/caregivers who use a language other than English must be provided services in their **primary language**.",
          "Select an interpreter/translator who: is proficient in English and the client's primary language; is experienced and trained in cross-cultural communication; has training and knowledge of issues relevant to SLP; will remain unbiased and confidential.",
          "**BID three-phase process (Langdon & Saenz, 2016):** **Briefing** (review agenda and purposes; discuss technical information; train the interpreter) → **Interaction** (introduce client to interpreter, **remain in the room and observe** the interpreter; **talk to the client, not the interpreter**; brief sentences, natural rate) → **Debriefing** (discuss difficulties and impressions; review assessment information; plan follow-up and provide additional training)."],
    src=["W3B:slides 15-16", "TB3:PDF pp. 115-116"]))

# ---------------- items ----------------
tf("m4-role-01", "m4-role",
   "According to the Week 3 multicultural deck, the clinician's primary role with a culturally and linguistically diverse client is to determine disorder or difference.",
   True, "A false version might say 'to determine the client's dominant language'.",
   "First SmartArt box on slide 2.", "Slide 2: 'Primary role to determine disorder or difference'.", ["W3B:slide 2"], style=("definition",))

mc("m4-role-02", "m4-role",
   "All of the following are ways to conduct ethnographic research listed on her slide EXCEPT:",
   [("Administer a standardized test normed on the client's cultural group", "Correct answer. Testing is direct assessment, not a listed ethnographic research method."),
    ("Attend cultural events", "Listed."),
    ("Interview members of the community", "Listed."),
    ("Watch movies and TV shows from the client's cultural group", "Listed.")],
   0, "Ethnographic research builds YOUR cultural knowledge.",
   "Slide 5 lists: attend cultural events; watch movies/TV; read literature; watch culturally representative video; ask client to share; interview community members; consult other professionals; read professional literature.",
   ["W3B:slide 5"], style=("negative",))

multi("m4-role-03", "m4-role",
   "Select ALL items her slide lists as areas where cultural groups may hold differing views.",
   [("Familial authority", "Listed."), ("Use of eye contact", "Listed."), ("Time", "Listed."), ("Traditional testing practices", "Listed."),
    ("Standard score cutoffs", "Not a cultural view on the list; a psychometric convention.")],
   [0, 1, 2, 3], "The list is about social rules and beliefs.",
   "Slide 3 lists 14 areas including familial authority, eye contact, time, traditional testing practices, personal space, small talk.",
   ["W3B:slide 3"], style=("classify",))

mc("m4-asked-01", "m4-asked",
   "In the ASKED model of cultural competence, the E stands for:",
   [("Encounters", "Correct: Awareness, Skill, Knowledge, Encounters, Desire."),
    ("Evidence", "Sibling term from EBP, not ASKED."),
    ("Ethnography", "Related topic on the same deck, but not the E."),
    ("Empathy", "Plausible-sounding, not on the slide.")],
   0, "A-S-K-E-D.", "Slide 6 SmartArt: Awareness, Skill, Knowledge, Encounters, Desire.", ["W3B:slide 6"], style=("definition",))

tf("m4-asked-02", "m4-asked",
   "Cultural competence is a skill set that is completed once a clinician finishes a multicultural training course.",
   False, "Cultural competence is an ONGOING process that requires self-assessment.",
   "Is it an endpoint or a process?", "Slide 6: 'Ongoing process that requires self-assessment'.", ["W3B:slide 6"], style=("antonym",))

mc("m4-cld-01", "m4-cld",
   "The Alberta Language and Development Questionnaire (ALDeQ) on her slide is best described as:",
   [("A parent questionnaire designed for ages 4;5 to 7;5", "Correct."),
    ("A standardized bilingual language test designed for ages 2;6 to 90+", "2;6-90+ is the PPVT-5 range from your Assessment Detective work; the ALDeQ is a parent questionnaire."),
    ("A teacher rating scale designed for ages 4;5 to 7;5", "Right ages, wrong informant."),
    ("A parent questionnaire designed for ages 2;5 to 4;5", "Number mutation.")],
   0, "Who fills it out, and for what ages?",
   "Slide 10: ALDeQ, parent questionnaire, designed for ages 4;5 to 7;5, available online.",
   ["W3B:slide 10", "TB3:PDF p. 113"], style=("number", "sibling"))

mc("m4-cld-02", "m4-cld",
   "Which consideration for assessing CLD clients is listed on her slide?",
   [("Test in one language at a time", "Correct."),
    ("Mix both languages within each test item to maximize the child's score", "Contradicts 'test in one language at a time'."),
    ("Use only nonverbal tests to avoid language bias", "Not on the slide; she says assess abilities in both languages."),
    ("Rely on family members as interpreters whenever possible", "The slide says use an interpreter/translator if needed; slide 15 gives professional selection criteria.")],
   0, "One-language-at-a-time is on the list.",
   "Slide 7 considerations: culturally appropriate materials, test in one language at a time, be prepared to modify the plan, interpreter/translator if needed, be sensitive and respectful.",
   ["W3B:slide 7"])

tf("m4-cld-03", "m4-cld",
   "Her slide states that parents or family members may be the best source of information when assessing a CLD client.",
   True, "Tempting false version: 'classroom teachers are always the best source'. Teachers are 'helpful' for school-aged clients.",
   "Slide 10, first bullet.", "Slide 10: 'Parents or family members may be the best source'.", ["W3B:slide 10"])

mc("m4-cld-04", "m4-cld",
   "Form 3-2 and Form 3-3, cited on her Week 3 slide, are:",
   [("Language history surveys (children and adults)", "Correct."),
    ("Case history forms for speech sound disorders", "Not these forms."),
    ("Release of information forms", "That is Form 1-1 in the textbook."),
    ("Interpreter training checklists", "Not these forms.")],
   0, "Slide 8 is titled 'Language History'.", "Form 3-2 'Language History Survey for Children'; Form 3-3 '... for Adults'.", ["W3B:slide 8"], style=("number",))

mc("m4-da-01", "m4-da-std",
   "According to her slide, in dynamic assessment with a CLD client, which result points MORE toward language impairment?",
   [("The client does not demonstrate improvement after teaching", "Correct. 'Clients who do not demonstrate improvement more likely to have language impairment.'"),
    ("The client improves quickly after brief teaching", "Quick improvement suggests lack of experience rather than impairment."),
    ("The client scores low on the pretest", "A low pretest alone is exactly what DA is designed not to over-interpret."),
    ("The client needs an interpreter for the pretest", "Interpreter need is not evidence of impairment.")],
   0, "Dynamic assessment looks at response to teaching.",
   "Slide 11: DA is widely recommended for CLD clients; those who do not show improvement are more likely to have language impairment. Week 5 adds that DA helps separate lack of experience from difficulty learning.",
   ["W3B:slide 11", "W5:slide 6"], style=("scenario",))

tf("m4-da-02", "m4-da-std",
   "Clients who do not demonstrate improvement during dynamic assessment are less likely to have a language impairment.",
   False, "They are MORE likely to have a language impairment.", "One-word flip.", "Slide 11 verbatim says 'more likely'.", ["W3B:slide 11"], style=("antonym",))

mc("m4-std-01", "m4-da-std",
   "Which is NOT on her list of ways a standardized test might be modified for a CLD client?",
   [("Translate the test and report the original English norms as valid", "Correct answer. Not on the list, and Week 2 says translated items may invalidate standard scores."),
    ("Repeat or reword", "Listed."),
    ("Score according to question intent", "Listed."),
    ("Add more trial questions", "Listed.")],
   0, "The slide lists five modifications. Which option adds a claim about norms?",
   "Slide 12: repeat or reword; add more trial questions; alter, rephrase, add test questions; score according to question intent; request clarifications.",
   ["W3B:slide 12", "W2:slides 7-8"], style=("negative",))

tf("m4-diff-01", "m4-diff",
   "In her framework, a client who demonstrates difficulties in only one language shows a disorder, while difficulties in all languages indicate a difference.",
   False, "Reversed. Disorder: difficulties in ALL languages. Difference: difficulties in only ONE language.",
   "Swap check.", "Slide 13 definitions.", ["W3B:slide 13"], style=("antonym",))

mc("m4-diff-02", "m4-diff",
   "All of the following are signs indicative of disorder on her slide EXCEPT:",
   [("Difficulty only with vocabulary in the newer language", "Correct answer. Difficulty limited to one language points to difference."),
    ("Tendency to repeat what is heard", "Listed sign."),
    ("Family history of language-learning disability", "Listed sign."),
    ("Atypical nonverbal communication", "Listed sign.")],
   0, "Ask which option applies to only one language.",
   "Slide 13 signs: difficulty learning both languages, atypical nonverbal communication, idiosyncratic errors, family history of language-learning disability, slower development, difficulty expressing basic needs, difficulty with peer interaction/questions/conveying thoughts, tendency to repeat what is heard.",
   ["W3B:slide 13"], style=("negative",))

mc("m4-diff-03", "m4-diff",
   "Per her slide, accent modification for a client with no speech-language disorder is best described as:",
   [("Elective therapy", "Correct."),
    ("Intervention warranted by a disorder", "Warranted intervention is for a disorder in both languages."),
    ("A modification that invalidates standardized scores", "Wrong sense of 'modification'."),
    ("A required IDEA service", "Not stated.")],
   0, "Slide 14 contrasts two kinds of service.", "Slide 14: disorder in both languages warrants intervention; elective therapy, such as accent modification; community programs.", ["W3B:slide 14"], style=("sibling",))

tf("m4-diff-04", "m4-diff",
   "Her slide says a speech-language difficulty needs to appear in only one of a client's languages to warrant intervention.",
   False, "Her slide: a disorder that appears in BOTH languages warrants intervention. Difficulty in only the newer language points toward difference.", "How many languages?", "Slide 14 first bullet.", ["W3B:slide 14"])

mc("m4-int-01", "m4-interp",
   "Which statement about interpreters and translators matches her slide?",
   [("Interpreters translate spoken language; translators translate written text", "Correct."),
    ("Interpreters translate written text; translators translate spoken language", "Reversed."),
    ("Interpreters and translators are interchangeable terms", "The slide separates them."),
    ("Translators must remain in the room during the assessment interaction", "BID says the CLINICIAN remains in the room to observe the interpreter.")],
   0, "Spoken vs written.", "Slide 15 opening bullets.", ["W3B:slide 15"], style=("sibling",))

mc("m4-int-02", "m4-interp",
   "During the INTERACTION phase of BID, which action is NOT recommended on her slide?",
   [("Direct your questions to the interpreter so the interpreter can relay them", "Correct answer. The slide says talk to the client, not the interpreter."),
    ("Remain in the room and observe the interpreter", "Recommended."),
    ("Use brief sentences at a natural rate", "Recommended."),
    ("Introduce the client to the interpreter", "Recommended.")],
   0, "Who do you look at and speak to?", "Slide 16 interaction bullets.", ["W3B:slide 16"], style=("negative",))

sort("m4-int-03", "m4-interp",
   "Sort each action into its BID phase.",
   ["Briefing", "Interaction", "Debriefing"],
   [("Train the interpreter", "Briefing"), ("Discuss technical information", "Briefing"),
    ("Talk to the client, not the interpreter", "Interaction"), ("Remain in the room and observe the interpreter", "Interaction"),
    ("Discuss difficulties and impressions", "Debriefing"), ("Plan a follow-up meeting and provide additional training", "Debriefing")],
   "Before, during, after.", "Slide 16 (Langdon & Saenz, 2016).", ["W3B:slide 16"])

tf("m4-int-04", "m4-interp",
   "Under IDEA guidelines on her slide, clients or caregivers who use a language other than English must be provided services in their primary language.",
   True, "A false version: '...must be provided services in English with a translator'.", "Slide 15 bullet 3.", "Slide 15: IDEA guidelines.", ["W3B:slide 15"])

multi("m4-int-05", "m4-interp",
   "Select ALL qualities her slide lists for selecting an interpreter/translator.",
   [("Proficient in English and the client's primary language", "Listed."),
    ("Experienced and trained in cross-cultural communication", "Listed."),
    ("Has training and knowledge of issues relevant to SLP", "Listed."),
    ("Will remain unbiased and confidential", "Listed."),
    ("Is a family member the client already trusts", "Not listed; the list emphasizes training and impartiality.")],
   [0, 1, 2, 3], "Four criteria on the slide.", "Slide 15 selection guidelines.", ["W3B:slide 15"], style=("classify",))
