from core import *
def S(**k): return k

M = "m16"
module(M, 16, "Observation, informal and dynamic assessment", "Week 5 · Methods", "Week 5 (+ 9/21 lecture)",
       "Three ways to gather information beyond standardized tests, and the question each one answers.")
concept("m16-three", M, "Observation vs informal vs dynamic: the question each answers")
concept("m16-observe", M, "Clinical observation: where and what to look for")
concept("m16-dynamic", M, "Dynamic assessment: test-teach-retest and what it reveals")
concept("m16-informal", M, "Informal assessment: definition, examples, when it carries the whole evaluation")

section(M, S(h="Three methods, three questions (slides 2-3, 8)",
    visual="three",
    table=dict(head=["Approach", "Description (slide 3)", "The question (slide 8)", "Her narrative example"], rows=[
        ["Clinical observation", "Watching and listening to a client during natural or structured activities", "'What do I see/hear the client doing?'", "Watch the child during play: short utterances, rarely provides information about what happened"],
        ["Informal assessment", "Non-standardized tasks or measures designed by the clinician to examine a particular skill", "'What can the client do on this task?'", "Show a picture sequence and ask for the story; record grammar, vocabulary, story structure, sequencing"],
        ["Dynamic assessment", "A process of assessing AND teaching to see how the client responds to support", "'What happens when I teach/support the client, and can they use what they learned?'", "Independent story → teach a framework (character → setting → problem → action → outcome) with modeling and cues → retell a NEW story and see if the strategy transfers"]]),
    src=["W5:slides 2-3, 8"]))

section(M, S(h="Clinical observation (slide 4)",
    body=["Where: during conversation; during play; in the classroom; **during a standardized assessment**; while interacting with family members; during structured activities.",
          "What: how the person **initiates** communication; **eye contact and joint attention**; **turn-taking**; **use of gestures**; **speech intelligibility**; **voice quality**; **fluency**; how they **respond to questions**; whether they **need repetition or cues**; **communication breakdowns and how they repair them**."],
    callouts=[dict(k="lecture", t="9/21: observation starts as the client walks in (posture, breathing, how the parent responds). She noted children under 3 are much more likely not to perform on demand.", ev="lecture")],
    src=["W5:slide 4", "L0921"]))

section(M, S(h="Dynamic assessment (slides 5-6)",
    body=["Goes a step further than 'Can the client do this?' It typically uses **test-teach-retest**: **Test** (e.g., produce a new sound without assistance) → **Teach** (instruction, modeling, cues, feedback, practice) → **Retest** (more accurate, particularly **with reduced support**?). The clinician is interested in **responsiveness to intervention**.",
          "Useful for understanding: **learning potential**; **what types of cues are effective**; **how much support the client needs**; **whether difficulties relate to lack of experience versus difficulty learning the skill**; how the client responds to instruction."],
    callouts=[dict(k="textbook", t="Textbook: the teaching phase is a mediated learning experience (MLE); DA is a primary method for differentiating disorder from difference in multicultural clients. Her Week 3 slide: no improvement → more likely language impairment.", ev="textbook"),
              dict(k="gonsoulin", t="COMD 4382 record: 'LSA is true EXCEPT: it is a dynamic assessment.' A sample is informal/formative, not dynamic, because there is no teaching phase. Historical item.", ev="historical")],
    src=["W5:slides 5-6", "TB1:PDF pp. 46-47", "W3B:slide 11", "CODEX:section 4"]))

section(M, S(h="Informal assessment (slides 7, 10)",
    body=["A **non-standardized** activity to gather information about a specific skill; it doesn't necessarily have standardized procedures, norms or scores. **Unlike simply observing, the clinician usually sets up a task and collects information.** Language examples: name pictures; describe a picture; follow increasingly complex directions; retell a short story; answer questions about a conversation or passage. Speech sound example: a clinician-made word list with particular sounds, recording which are correct.",
          "Slide 10: for clients who **do not match the normative profiles** of available standardized tests, **the entire assessment can be based on informal measures**. **Reliability and validity of the findings depend on the clinician's level of expertise and how representative the language data are.**"],
    src=["W5:slides 7, 10"]))

mc("m16-t-01", "m16-three",
   "'What happens when I teach/support the client, and can they use what they learned?' is the defining question of:",
   [("Dynamic assessment", "Correct."), ("Informal assessment", "'What can the client do on this task?'"),
    ("Clinical observation", "'What do I see/hear the client doing?'"), ("Norm-referenced testing", "How does the client compare to peers.")],
   0, "Teaching is the tell.", "Slide 8.", ["W5:slide 8"], style=("sibling",))

sort("m16-t-02", "m16-three",
   "Sort each scenario by method.",
   ["Clinical observation", "Informal assessment", "Dynamic assessment"],
   [("You watch the child during play and notice short utterances", "Clinical observation"),
    ("You notice how a client repairs a breakdown while talking with his mother", "Clinical observation"),
    ("You show a picture sequence and record the child's story grammar and sequencing", "Informal assessment"),
    ("You make a word list with /s/ in several positions and record correct productions", "Informal assessment"),
    ("You teach a story framework with modeling and cues, then have the child retell a new story", "Dynamic assessment"),
    ("You teach a new sound with cues and feedback, then retest with reduced support", "Dynamic assessment")],
   "Watching / setting up a task / teaching then retesting.", "Slides 3, 5, 7, 8.", ["W5:slides 3, 5, 7, 8"])

tf("m16-t-03", "m16-three",
   "Informal assessment differs from clinical observation because the clinician usually sets up a task and collects information about the client's performance.",
   True, "False edit: 'because informal assessment includes a teaching phase' (that's DA).", "Slide 7.", "Slide 7: 'Unlike simply observing, the clinician usually sets up a task...'", ["W5:slide 7"], style=("sibling",))

mc("m16-o-01", "m16-observe",
   "Which is NOT a setting her slide lists for clinical observation?",
   [("Only in completely unstructured natural settings", "Correct answer (the false restriction). Her list includes a standardized assessment and structured activities."),
    ("During a standardized assessment", "Listed."), ("While interacting with family members", "Listed."), ("In the classroom", "Listed.")],
   0, "Her list includes structured contexts.", "Slide 4.", ["W5:slide 4"], style=("negative", "absolute"))

multi("m16-o-02", "m16-observe",
   "Select ALL things her slide says to look at during clinical observation.",
   [("Communication breakdowns and how they repair them", "Listed."), ("Whether they need repetition or cues", "Listed."),
    ("Eye contact and joint attention", "Listed."), ("How the person initiates communication", "Listed."),
    ("The client's standard score relative to peers", "Not an observation.")],
   [0, 1, 2, 3], "Ten look-fors on slide 4.", "Slide 4.", ["W5:slide 4"], style=("classify",))

mc("m16-d-01", "m16-dynamic",
   "All of the following are things dynamic assessment is particularly useful for understanding on her slide EXCEPT:",
   [("How the client's score compares with same-age peers", "Correct answer. That is norm-referenced comparison."),
    ("What types of cues are effective", "Listed."), ("How much support the client needs", "Listed."),
    ("Whether difficulties relate to lack of experience versus difficulty learning the skill", "Listed.")],
   0, "DA is about learning, not ranking.", "Slide 6.", ["W5:slide 6"], style=("negative",))

order("m16-d-02", "m16-dynamic",
   "Order her dynamic-assessment example for a new speech sound.",
   ["Test: ask the child to produce the sound without assistance", "Teach: instruction, modeling, cues, feedback, practice", "Retest: see whether production improves, particularly with reduced support"],
   "Test, teach, retest.", "Slide 5.", ["W5:slide 5"])

tf("m16-d-03", "m16-dynamic",
   "In dynamic assessment, the clinician is interested in the person's responsiveness to intervention.",
   True, "False edit: '...only in the unaided pretest score'.", "Slide 5 last line.", "Slide 5.", ["W5:slide 5"])

mc("m16-d-04", "m16-dynamic",
   "During the retest phase of her example, what makes the result most informative?",
   [("Seeing whether the child produces the sound more accurately with REDUCED support", "Correct: 'particularly with reduced support'."),
    ("Supplying the correct model before every attempt", "Full support hides independent learning."),
    ("Using the same items as the pretest only", "Her narrative example retells a NEW story to check transfer."),
    ("Timing the retest", "Not the stated feature.")],
   0, "Can they use it on their own?", "Slides 5 and 8.", ["W5:slides 5, 8"], style=("scenario",))

mc("m16-i-01", "m16-informal",
   "According to her slide, when can the ENTIRE assessment be based on informal measures?",
   [("When the client does not match the normative profiles for available standardized tests", "Correct."),
    ("When the clinician prefers not to use standardized tests", "Not the stated condition."),
    ("Whenever eligibility requires a standard score", "Opposite: eligibility often requires standard scores."),
    ("Only for adults with aphasia", "Not stated.")],
   0, "Norms that don't fit.", "Slide 10.", ["W5:slide 10"])

tf("m16-i-02", "m16-informal",
   "The reliability and validity of informal findings depend on the clinician's level of expertise and how representative the language data are.",
   True, "False edit: '...are guaranteed because the task is clinician-designed'.", "Slide 10, second box.", "Slide 10.", ["W5:slide 10"])

mc("m16-i-03", "m16-informal",
   "A clinician creates a list of words containing /r/ and records which ones the child produces correctly, with no teaching. This is:",
   [("Informal assessment", "Correct: her slide 7 speech-sound example."),
    ("Dynamic assessment", "No teaching phase."), ("Standardized articulation testing", "Clinician-made, no norms."), ("Clinical observation only", "The clinician set up a task.")],
   0, "Clinician-made task, no teaching.", "Slide 7.", ["W5:slide 7"], style=("scenario",))

M = "m17"
module(M, 17, "Language sample analysis and narratives", "Week 5 · Analysis", "Week 5 (deck continuation beyond 9/21 discussion)",
       "What to note in a language sample, semantic analysis, narrative comprehension (literal vs inferential), and the three narrative levels.")
concept("m17-lsa", M, "Language sample analysis: collecting and features")
concept("m17-semantic", M, "Assessment of semantic skills")
concept("m17-narcomp", M, "Narrative comprehension")
concept("m17-levels", M, "Macrostructure vs microstructure vs higher-level language")

section(M, S(h="Language sample analysis (slide 11)",
    bullets=["Collect a representative sample based on real conversation; collect multiple samples; vary contexts and activities; ask others to interact with the child; record for later analysis.",
             "Observe: **form** of language; understanding **semantic intent**; language **use**; **rate** of speaking; **sequencing**.",
             "Computerized tools help analyze samples efficiently: **CLAN** and **SALT**."],
    callouts=[dict(k="source", t="Scope note: the 9/21 transcript covers observation; slides 11-17 of the Week 5 deck may not have been lectured yet. They are deck content, taught here, but her classroom emphasis on them is unconfirmed.", ev="inference")],
    src=["W5:slide 11"]))

section(M, S(h="Semantic skills (slide 12)",
    bullets=["Number of different words", "Unusual use of words", "Incorrect word substitutions", "Overgeneralizations or undergeneralizations",
             "Frequent use of empty words", "Word-finding problems", "Types of words", "Excessive use of pronouns", "Frequent use of routinized expressions"],
    src=["W5:slide 12"]))

section(M, S(h="Narratives (slides 13-16)",
    body=["The ability to tell or retell a story reveals a lot about language; narrative assessment can be part of spoken and/or written language assessment.",
          "**First determine whether the client understands the story.** Can they identify characters, setting, the problem or initiating event, important actions/events, the outcome/resolution; answer **literal** questions; answer **inferential** questions; identify the main idea; explain why events happened; predict what might happen next; retell the story? Example: after a story about a boy who loses his dog, ask 'Why did the boy go looking for his dog?'"],
    visual="levels",
    table=dict(head=["Level", "What you examine", "Examples"], rows=[
        ["Macrostructure", "Organization/content of the story", "Setting, problem, goal, attempts, consequence, resolution"],
        ["Microstructure", "Language inside the story", "Grammar, vocabulary, syntax, cohesion"],
        ["Higher-level language", "Meaning beyond individual sentences", "Inferences, motivations, causal relationships, perspective-taking"]]),
    callouts=[dict(k="numbers", t="Slide 16 macrostructure checklist: character, setting, initiating event/problem, goal, attempts, consequences, resolution, ending.", ev="slide")],
    src=["W5:slides 13-16"]))

multi("m17-l-01", "m17-lsa",
   "Select ALL features her slide says to observe in a language sample.",
   [("Form of language", "Listed."), ("Understanding semantic intent", "Listed."), ("Language use", "Listed."), ("Sequencing", "Listed."),
    ("Percentile rank", "Not a sample feature.")],
   [0, 1, 2, 3], "Five features (rate of speaking is the fifth).", "Slide 11.", ["W5:slide 11"], style=("classify",))

mc("m17-l-02", "m17-lsa",
   "Which computerized tools does her slide name for analyzing language samples?",
   [("CLAN and SALT", "Correct."), ("CELF and PPVT", "Standardized tests."), ("ALDeQ and ASKED", "A questionnaire and a model."), ("EMR and EHR", "Record systems.")],
   0, "Two acronyms on slide 11.", "Slide 11.", ["W5:slide 11"])

mc("m17-s-01", "m17-semantic",
   "A child repeatedly says 'that thing' and 'stuff' when a specific word is needed. Which semantic feature from her slide is this?",
   [("Frequent use of empty words", "Correct."), ("Overgeneralization", "Using a word too broadly (e.g., all animals = 'dog')."),
    ("Excessive use of pronouns", "Close cousin, but 'thing/stuff' are empty words."), ("Routinized expressions", "Memorized phrases.")],
   0, "Words with no specific content.", "Slide 12.", ["W5:slide 12"], style=("scenario", "sibling"))

mc("m17-s-02", "m17-semantic",
   "All of the following are on her semantic-skills slide EXCEPT:",
   [("Omission of past-tense -ed", "Correct answer. A morphological (form) feature, not semantic."),
    ("Word-finding problems", "Listed."), ("Number of different words", "Listed."), ("Incorrect word substitutions", "Listed.")],
   0, "Meaning vs grammar.", "Slide 12.", ["W5:slide 12"], style=("negative", "sibling"))

mc("m17-n-01", "m17-narcomp",
   "Her slide says the FIRST step in narrative assessment is to:",
   [("Determine whether the client understands the story", "Correct."), ("Count the number of different words", "Semantic analysis."),
    ("Score microstructure", "Comes after comprehension."), ("Teach a story framework", "That is dynamic assessment.")],
   0, "Slide 14 opening.", "Slide 14: 'First determine whether the client understands the story.'", ["W5:slide 14"], style=("sequence",))

mc("m17-n-02", "m17-narcomp",
   "After a story about a boy who loses his dog, 'Why did the boy go looking for his dog?' is her example of which kind of question?",
   [("A question requiring the child to explain why events happened (beyond just naming events)", "Correct: explaining why events happened is on her comprehension list, and it moves toward inference."),
    ("A setting question", "Where/when."), ("A character-identification question", "Who."), ("A prediction question", "What might happen next.")],
   0, "Why.", "Slide 14 example.", ["W5:slide 14"], style=("scenario",))

sort("m17-v-01", "m17-levels",
   "Sort each observation into the narrative level her slide assigns.",
   ["Macrostructure", "Microstructure", "Higher-level language"],
   [("Includes setting, problem and resolution", "Macrostructure"), ("Describes attempts and consequences", "Macrostructure"),
    ("Uses varied vocabulary and correct grammar", "Microstructure"), ("Uses cohesive ties across sentences", "Microstructure"),
    ("Explains a character's motivation", "Higher-level language"), ("Takes another character's perspective", "Higher-level language")],
   "Organization / language inside / meaning beyond.", "Slide 15 table.", ["W5:slide 15"])

tf("m17-v-02", "m17-levels",
   "On her slide, cohesion is a macrostructure feature.",
   False, "Cohesion is MICROSTRUCTURE (grammar, vocabulary, syntax, cohesion).", "Language inside the story.", "Slide 15.", ["W5:slide 15"], style=("sibling",))

mc("m17-v-03", "m17-levels",
   "A child's retell has grammatical sentences but leaves out the problem and resolution. Which level is weakest?",
   [("Macrostructure", "Correct."), ("Microstructure", "The grammar is intact."), ("Higher-level language", "Not the stated gap."), ("Semantic intent", "Not a narrative level on the slide.")],
   0, "Story elements.", "Slides 15-16.", ["W5:slides 15-16"], style=("scenario",))
