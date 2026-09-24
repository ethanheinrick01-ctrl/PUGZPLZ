from core import *
def S(**k): return k

M = "m15"
module(M, 15, "DDK, sampling, rate, intelligibility, charting", "Week 4 · Procedures", "Week 4 (+ textbook Ch. 6)",
       "How to administer DDK (Method 2), what a speech-language sample is for and how long it should be, eliciting narratives and reading passages, calculating speech rate, what reduces intelligibility, syllable-by-syllable phrases and charting.")
concept("m15-ddkadmin", M, "DDK administration: AMR/SMR, Method 1 vs 2, 20 and 10 reps")
concept("m15-sample", M, "Speech-language sampling: purposes, length, strategies")
concept("m15-narrative", M, "Narratives, pictures, reading passages")
concept("m15-rate", M, "Speech rate: why and how (wpm)")
concept("m15-intel", M, "Intelligibility: what reduces it")
concept("m15-phrases", M, "Syllable-by-syllable phrases and charting behaviors")

section(M, S(h="DDK administration (slides 6-7)",
    body=["**AMR** = repetition of a single syllable; **SMR** = repetition of varying syllables. Measured two ways: **Method 1** counts syllables produced within a number of seconds; **Method 2** measures the seconds it takes to produce a number of syllables, and **Method 2 is more common**.",
          "**Method 2 steps:** instruct the client to repeat the target syllable; model the sequence; say **go** and start the stopwatch; say **stop** and stop the stopwatch **after 20 reps**; redo if the client stops or slows down; after assessing syllables independently, evaluate **10 reps of 'puh-tuh-kuh'**; record findings on the worksheet."],
    callouts=[dict(k="numbers", t="20 repetitions per single syllable; 10 repetitions of puh-tuh-kuh. Textbook: Form 6-2 is based on Fletcher (1972) with norms for ages 6-13; young children can say 'pattycake' or 'buttercup'; redo if they stop or intentionally slow down (not due to fatigue).", ev="slide")],
    src=["W4:slides 6-7", "TB6:PDF pp. 182-183"]))

section(M, S(h="Speech-language sampling (slides 8-9)",
    body=["Time-consuming but **worth the time and effort**. Purposes on her slide: identifying sound errors; determining eligibility; evaluating rate; assessing fluency; determining MLU; assessing imitation and comprehension; semantic, syntactic, morphological skills; narrative skills, vocal quality, resonance; pragmatic skills.",
          "Length: **long enough to obtain a representative sample: 50-100 minimum utterances.** Strategies: establish a positive relationship; minimize interruptions; **be willing to wait** for the client to talk; preselect materials and topics; vary subject matter; seek multiple environments; alter contexts; use a good-quality recorder; ask others to provide recorded samples; ask questions that elicit lengthier responses; make natural contributions; consider age and culture."],
    callouts=[dict(k="conflict", t="Sample-length numbers differ by source, so key to HER slide: Week 4 slide 9 = 50-100 minimum utterances. Textbook Ch. 6 = minimum 50-100 distinct utterances, continue to 200+ if possible; textbook Ch. 1 = 50-200. Her COMD 4382 record taught '100 complete and intelligible utterances' (historical, older course). For this course, 50-100 is the current slide value.", ev="slide")],
    src=["W4:slides 8-9", "TB6:PDF pp. 183-184", "TB1:PDF p. 45", "CODEX:section 9"]))

section(M, S(h="Conversation starters, pictures, narratives, reading passages (slides 10-11)",
    bullets=["Many clinicians **provide a model** (share a personal experience first). Stimulus questions: 'Do you have a pet? Tell me about it.' 'Have you ever been in an airport?' 'Ever gotten lost at the store?' 'What is your favorite food? How do you make it?'",
             "Pictures are often useful; use pictures that illustrate **a variety of activities** (textbook: pictures with little action or that elicit naming only are of little use).",
             "**Narratives**: the child must use rules of **cognitive organization and language sequencing**. Sources: retelling familiar stories; retelling a movie plot; wordless storybooks; wordless videos; sequencing picture cards.",
             "**Reading passages** allow observation of **articulation, voice, fluency, reading abilities**; compare oral reading with single-word/short-phrase utterances and conversational samples (Appendix 6-B). Textbook: the client cannot avoid challenging sounds or words in fixed text."],
    src=["W4:slides 10-11", "TB6:PDF pp. 184-186"]))

section(M, S(h="Rate of speech (slide 12)",
    body=["Average rates vary. **The importance is NOT to compare with preestablished norms; it allows the clinician to evaluate the effect on the client's communicative abilities.**",
          "Record connected speech (**minimum of 1-2 minutes**). Four steps: **time the sample in seconds; count the words; divide words by seconds; multiply by 60 → wpm.** Textbook example: 60 words in 75 seconds → 0.8 × 60 = 48 wpm."],
    src=["W4:slide 12", "TB6:PDF pp. 186-187"]))

section(M, S(h="Intelligibility (slide 13)",
    body=["The sample must be **adequate and representative**; audio or video record it. Factors that can reduce intelligibility: number of phonemic errors; types of phonemic errors; vowel errors; fast rate; atypical prosody; length and complexity of utterances; insufficient vocal intensity; disfluencies; lack of paralinguistic cues; testing environment; client's lack of familiarity or fatigue; **clinician's ability to understand less intelligible speech or familiarity with the client**."],
    callouts=[dict(k="textbook", t="Textbook: omissions and additions generally reduce intelligibility more than substitutions or distortions; report intelligibility as approximate; compare word-by-word and utterance-by-utterance.", ev="textbook")],
    src=["W4:slide 13", "TB6:PDF pp. 187-188"]))

section(M, S(h="Syllable-by-syllable phrases and charting (slides 14-15)",
    body=["Verbal phrases as stimuli are useful for assessing many disorders. Clinical questions: can the client maintain appropriate **nasal resonance**? what **speech rate** is optimal? are there **syllable lengths at which articulation decreases**? Articulation, rate, prosody, inflection and intonation can be sampled with these lists.",
          "**Charting behaviors**: objectively scoring client responses; any behavior of interest can be tracked. Ways: note each time a behavior is exhibited; note instances of correct AND incorrect behaviors; note subtype or variance of a behavior. Forms 6-5 and 6-6."],
    callouts=[dict(k="textbook", t="Textbook: Form 6-5 charts up to 200 responses; Form 6-6 up to 100. Example: 7 of 10 correct = 70%.", ev="textbook")],
    src=["W4:slides 14-15", "TB6:PDF pp. 188-191"]))

mc("m15-dd-01", "m15-ddkadmin",
   "Which DDK measurement method does her slide mark as more common?",
   [("Method 2: measuring the seconds it takes to produce a number of syllables", "Correct."),
    ("Method 1: counting syllables produced within a number of seconds", "Listed, but not marked 'more common'."),
    ("Counting total words per minute", "That is speech rate."),
    ("Timing a 1-2 minute conversational sample", "Rate procedure.")],
   0, "Fixed count vs fixed time.", "Slide 6 lists 'More common' under Method 2; the textbook confirms: 'the latter [Method 2] is the more common method'.", ["W4:slide 6", "TB6:PDF pp. 182-183"], style=("sibling",))

tf("m15-dd-02", "m15-ddkadmin",
   "In Method 2 on her slide, you stop the stopwatch after 10 repetitions of each single syllable, then evaluate 20 repetitions of 'puh-tuh-kuh'.",
   False, "Reversed numbers: 20 reps of each single syllable; 10 reps of 'puh-tuh-kuh'.", "Which count goes with the sequence?", "Slide 7.", ["W4:slide 7"], style=("number",))

order("m15-dd-03", "m15-ddkadmin",
   "Order the Method 2 DDK steps from her slide.",
   ["Instruct client to repeat target syllable", "Model the sequence", "Say 'go' and start the stopwatch",
    "Say 'stop' and stop the stopwatch after 20 reps", "After single syllables, evaluate 10 reps of 'puh-tuh-kuh'", "Record findings on worksheet"],
   "Instruct → model → go → stop → sequence → record.", "Slide 7. (Redo if the client stops or slows down.)", ["W4:slide 7"])

mc("m15-dd-04", "m15-ddkadmin",
   "During Method 2 timing, a client stops partway through the repetitions. Her slide says to:",
   [("Redo the sequence", "Correct: 'Redo the sequence if client stops or slows down'."),
    ("Record the time up to the stop", "Not per the slide."), ("Switch to Method 1", "Not stated."), ("Count it as a fatigue finding and move on", "The textbook adds 'not due to fatigue' for intentional slowing; stopping → redo.")],
   0, "One line on slide 7.", "Slide 7.", ["W4:slide 7", "TB6:PDF p. 183"])

tf("m15-dd-05", "m15-ddkadmin",
   "Alternating motion rate (AMR) is the repetition of varying syllables, such as 'puh-tuh-kuh'.",
   False, "AMR = repetition of a SINGLE syllable; SMR = repetition of VARYING syllables such as puh-tuh-kuh.", "Alternating vs sequential.", "Slide 6.", ["W4:slide 6"], style=("sibling",))

mc("m15-sa-01", "m15-sample",
   "According to her Week 4 slide, how long should a speech-language sample be?",
   [("Long enough to be representative: 50-100 minimum utterances", "Correct, her slide."),
    ("Exactly 100 complete and intelligible utterances", "Her COMD 4382 number (historical), not the current slide."),
    ("At least 200 utterances", "Textbook says continue to 200+ IF POSSIBLE; not her minimum."),
    ("1-2 minutes of connected speech", "That is the speech-RATE sample length.")],
   0, "Current slide beats older course numbers.", "Week 4 slide 9: 50-100 minimum utterances.", ["W4:slide 9", "CODEX:section 9"], style=("number",))

multi("m15-sa-02", "m15-sample",
   "Select ALL purposes of speech-language sampling listed on her slide.",
   [("Determining eligibility", "Listed."), ("Determining MLU", "Listed."), ("Assessing pragmatic skills", "Listed."),
    ("Evaluating rate of speech", "Listed."), ("Establishing a basal", "Basals are for standardized tests.")],
   [0, 1, 2, 3], "Nine purposes; one option belongs to standardized test administration.", "Slide 8.", ["W4:slide 8"], style=("classify",))

mc("m15-sa-03", "m15-sample",
   "Which is NOT a strategy her slide lists for collecting a speech-language sample?",
   [("Fill silences quickly so the client stays engaged", "Correct answer. The slide says be willing to WAIT for the client to talk."),
    ("Seek out multiple environments", "Listed."), ("Ask others to provide recorded samples", "Listed."), ("Make natural contributions to the conversation", "Listed.")],
   0, "One option contradicts a listed strategy.", "Slide 9; textbook: 'Do not talk to fill the silence.'", ["W4:slide 9", "TB6:PDF p. 184"], style=("negative", "antonym"))

tf("m15-sa-04", "m15-sample",
   "Her slide describes speech-language sampling as time-consuming but worth the time and effort.",
   True, "False edit: '...too time-consuming for most evaluations'.", "Slide 8 first box.", "Slide 8.", ["W4:slide 8"])

mc("m15-na-01", "m15-narrative",
   "According to her slide, narratives require the child to use rules of:",
   [("Cognitive organization and language sequencing", "Correct."), ("Phonological awareness and decoding", "Reading passages involve reading; not the narrative definition."),
    ("Turn-taking and topic maintenance", "Pragmatics; not the stated narrative demand."), ("Morphology and syntax only", "Too narrow.")],
   0, "Beginning, middle, end.", "Slide 11.", ["W4:slide 11"], style=("definition",))

mc("m15-na-02", "m15-narrative",
   "Reading passages on her slide allow observation of all of the following EXCEPT:",
   [("Receptive vocabulary norms", "Correct answer. Not listed."), ("Articulation", "Listed."), ("Voice and fluency", "Listed."), ("Reading abilities", "Listed.")],
   0, "Articulation, voice, fluency, reading abilities.", "Slide 11.", ["W4:slide 11"], style=("negative",))

multi("m15-na-03", "m15-narrative",
   "Select ALL sources for obtaining narratives on her slide.",
   [("Wordless storybooks", "Listed."), ("Retelling the plot of a movie", "Listed."), ("Sequencing picture cards", "Listed."),
    ("Wordless videos", "Listed."), ("Picture-naming test plates", "Naming-only pictures are of little use for samples (textbook).")],
   [0, 1, 2, 3], "Five sources on the slide (retelling familiar stories is the fifth).", "Slide 11.", ["W4:slide 11"], style=("classify",))

num("m15-ra-01", "m15-rate",
   "A 2-minute (120-second) conversational sample contains 264 words. What is the speech rate?",
   [("Rate", "wpm", 132, 0)], "Words ÷ seconds × 60.", "264 ÷ 120 = 2.2 words/second × 60 = 132 wpm.", ["W4:slide 12"])

num("m15-ra-02", "m15-rate",
   "Textbook example: 60 words in 75 seconds. Compute wpm.", [("Rate", "wpm", 48, 0)],
   "60 ÷ 75 first.", "60 ÷ 75 = 0.8 × 60 = 48 wpm.", ["TB6:PDF p. 187"], ev="textbook")

mc("m15-ra-03", "m15-rate",
   "Why does her slide say we evaluate rate of speech?",
   [("To evaluate the rate's effect on the client's communicative abilities, not to compare with preestablished norms", "Correct."),
    ("To compare the client with age norms for eligibility", "The slide says the importance is NOT comparison with norms."),
    ("To determine MLU", "Different measure."), ("To establish a DDK baseline", "Different task.")],
   0, "Her slide says what the importance is NOT.", "Slide 12.", ["W4:slide 12"], style=("antonym",))

tf("m15-ra-04", "m15-rate",
   "To determine speech rate, her slide says to record a connected-speech sample of 50-100 utterances.",
   False, "Rate: a sample of at least 1-2 minutes (slide 12). 50-100 utterances is the language-sample size number.", "Slide 12.", "Slide 12: minimum of 1-2 minutes.", ["W4:slide 12"], style=("number",))

order("m15-ra-05", "m15-rate",
   "Order the four steps to determine speech rate.",
   ["Time the sample in seconds", "Count number of words produced", "Divide number of words by number of seconds", "Multiply by 60 to convert to wpm"],
   "Seconds, words, divide, ×60.", "Slide 12.", ["W4:slide 12"])

mc("m15-in-01", "m15-intel",
   "All of the following can reduce intelligibility on her slide EXCEPT:",
   [("Use of gestures and other paralinguistic cues", "Correct answer. LACK of paralinguistic cues reduces intelligibility; gestures help."),
    ("Vowel errors", "Listed."), ("Fast rate of speech", "Listed."), ("Client's lack of familiarity or level of fatigue", "Listed.")],
   0, "Read each option's direction carefully.", "Slide 13 lists 'lack of paralinguistic cues'.", ["W4:slide 13"], style=("negative", "antonym"))

tf("m15-in-02", "m15-intel",
   "The clinician's familiarity with the client can affect intelligibility judgments.",
   True, "False edit: 'Intelligibility is a fixed property of the speaker, independent of the listener'.", "Last bullet of slide 13.", "Slide 13.", ["W4:slide 13"])

mc("m15-in-03", "m15-intel",
   "According to the textbook, which error types generally reduce intelligibility MORE?",
   [("Omissions and additions", "Correct, compared with substitutions or distortions."),
    ("Substitutions and distortions", "Reversed."), ("Vowel prolongations", "Not the comparison."), ("Distortions only", "No.")],
   0, "Missing or extra sounds.", "Textbook Ch. 6.", ["TB6:PDF p. 187"], ev="textbook", style=("sibling",))

mc("m15-ph-01", "m15-phrases",
   "Which clinical question do syllable-by-syllable stimulus phrases help answer on her slide?",
   [("Are there specific syllable lengths at which articulation decreases?", "Correct."),
    ("What is the client's standard score?", "No."), ("How many utterances are in the sample?", "No."), ("Which language is dominant?", "No.")],
   0, "Increasing length.", "Slide 14 questions.", ["W4:slide 14"])

multi("m15-ph-02", "m15-phrases",
   "Select ALL ways to chart behaviors on her slide.",
   [("Note each time the behavior is exhibited", "Listed."), ("Note instances of correct and incorrect behaviors", "Listed."),
    ("Note subtype or variance of behavior", "Listed."), ("Convert every behavior to a standard score", "Not listed.")],
   [0, 1, 2], "Three ways.", "Slide 15.", ["W4:slide 15"], style=("classify",))
