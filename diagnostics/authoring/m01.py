from core import *

def S(**k): return k

M = "m01"
module(M, 1, "Assessment is a clinical argument", "Week 1 · Framework", "Week 1 (+ lectures 9/9, 9/11)",
       "What an assessment is for, the seven-stage process on her Week 1 slide, and what to do when your data disagree.")
concept("m1-reasoning", M, "Clinical reasoning: what she says the course is really about")
concept("m1-process", M, "The assessment process framework (7 stages, in order)")
concept("m1-conflict", M, "Conflicting results: clinical judgment and 'further testing is warranted'")

section(M, S(h="The one sentence she built the course on",
    body=["Her Week 1 'Why and How' slide names the single most important thing to learn: **clinical reasoning**, the ability to gather information from multiple sources, interpret it critically, and make informed decisions about a person's communication abilities. The slide adds: assessment is not simply administering tests; it is using evidence to answer a clinical question.",
          "The slide then lists what a clinician who 'thinks like a clinician' can do: ask the right questions, select appropriate methods, integrate information from interviews, observations, records and testing, recognize limitations of the data, and develop evidence-based recommendations. A student who memorizes test names but cannot interpret findings 'will struggle as a clinician.'"],
    callouts=[dict(k="source", t="4756 WEEK 1 slides 4-5. Slide 5 restates it: assessment is a comprehensive process of collecting information and using clinical reasoning to make informed decisions.", ev="slide"),
              dict(k="trap", t="Watch for statements that shrink assessment to 'giving a test' or 'getting a score'. On her slides those are the wrong half of a contrast.", ev="inference")],
    src=["W1:slides 4-5"]))

section(M, S(h="The seven-stage process (Week 1, slide 6)",
    visual="process",
    table=dict(head=["#", "Stage", "What happens"], rows=[
        ["1", "Referral & Review", "Identify the reason for the evaluation; review records, reports, background."],
        ["2", "Case History & Interview", "Gather information from client, family, teachers or caregivers: concerns, development, medical history, daily functioning."],
        ["3", "Observation", "Observe communication in natural or structured settings: strengths and concerns."],
        ["4", "Assessment", "Administer formal and informal measures: standardized tests, language samples, dynamic assessment, oral mechanism exam."],
        ["5", "Analysis & Interpretation", "Integrate testing, observations, interviews and records to determine abilities and needs."],
        ["6", "Diagnosis & Recommendations", "Decide whether a disorder is present; develop evidence-based recommendations or referrals."],
        ["7", "Report & Results Conference", "Document findings in a professional report and communicate results to the client, family and/or team."]]),
    callouts=[dict(k="numbers", t="Seven stages. Observation is its own stage BEFORE formal/informal assessment on this slide. Analysis comes BEFORE diagnosis; the report and results conference come last.", ev="slide"),
              dict(k="lecture", t="9/9 lecture: case history and interview 'are kind of occurring at the same time' in practice; sometimes history arrives before the visit through intake forms or chart review.", ev="lecture")],
    src=["W1:slide 6", "L0909"]))

section(M, S(h="When the data disagree",
    body=["She spent real class time on this (9/9 and 9/11). If a standardized test comes out in the normal range but your observations and informal measures show a problem, you have conflicting results. Her words: 'You always go with your clinical judgment.' She described pulling another test, and justifying therapy to insurance with the informal and observational results, which she called just as clinically relevant as the standardized score.",
          "On 9/11 she asked: when the standardized results and your clinical observations don't match, are you forced into making a diagnosis? 'No, you're not. Ethically, you say that... further testing is warranted.' She added that this may mean you did not prepare the assessment appropriately.",
          "She also said a formal measure supersedes informal ones in one situation: when a standardized score is required for qualification (eligibility)."],
    callouts=[dict(k="gonsoulin", t="Historical pattern (COMD 4382 record): she tested 'a failed screen means disorder' and similar over-conclusions as FALSE. The current-course analog is 'one score settles it'. That is a documented style of item, not a prediction of a specific question.", ev="historical"),
              dict(k="source", t="Lecture transcripts are auto-captioned and partly garbled. Only statements that are legible and repeated are used as answer evidence here.", ev="lecture")],
    src=["L0909", "L0911", "W3A:slide 13"]))

# ---------------- practice items ----------------
mc("m1-reas-01", "m1-reasoning",
   "According to her Week 1 slide, the single most important thing students should learn in this course is:",
   [("Clinical reasoning: gathering information from multiple sources, interpreting it critically, and making informed decisions", "Correct. This is the exact target named on the 'Why and How' slide."),
    ("How to administer and score the most widely used standardized tests", "Tempting because testing is a big part of the course, but the slide says assessment is 'not simply administering tests'."),
    ("The names and age ranges of the major language tests", "The slide specifically warns that a student who memorizes test names but cannot interpret findings will struggle."),
    ("How to write a professional diagnostic report", "Reports are a stage of the process (stage 7), not the single most important skill named on this slide.")],
   0, "Look for the phrase the slide puts in red: think like a ___.",
   "Slide 4 names clinical reasoning and defines it as gathering, interpreting and deciding. Testing, test names and reports are all parts of assessment, but none is the target she named.",
   ["W1:slide 4"], style=("definition",))

tf("m1-reas-02", "m1-reasoning",
   "Assessment is simply administering tests; clinical reasoning begins only after the test scores are obtained.",
   False, "Assessment is NOT simply administering tests; it is using evidence to answer a clinical question (reasoning runs through the whole process).",
   "The slide contrasts 'simply administering tests' with something else.",
   "Slide 4: 'Assessment is not simply administering tests; it is using evidence to answer a clinical question.' Reasoning starts at the referral question, not after scoring.",
   ["W1:slides 4-5"], style=("antonym",))

multi("m1-reas-03", "m1-reasoning",
   "Select ALL abilities the Week 1 slide lists for a student who is learning to 'think like a clinician.'",
   [("Ask the right questions", "Listed."),
    ("Select appropriate assessment methods", "Listed."),
    ("Recognize limitations of the data", "Listed; easy to forget because it sounds negative."),
    ("Develop evidence-based recommendations", "Listed."),
    ("Memorize the test battery for each disorder", "The slide uses memorizing test names as the counter-example.")],
   [0, 1, 2, 3], "Four of these appear in the slide's bullet list; one is the thing it warns against.",
   "The list: ask the right questions; select methods; integrate interviews, observations, records and testing; recognize limitations of the data; develop evidence-based recommendations.",
   ["W1:slide 4"], style=("classify",))

order("m1-proc-01", "m1-process",
   "Put the stages of her Assessment Process Framework in order.",
   ["Referral & Review", "Case History & Interview", "Observation", "Assessment", "Analysis & Interpretation",
    "Diagnosis & Recommendations", "Report & Results Conference"],
   "Referral starts it; the conference ends it. Where does watching the client fall relative to formal testing?",
   "Slide 6 lists seven stages in this order. Observation precedes the Assessment stage, and Analysis precedes Diagnosis.",
   ["W1:slide 6"])

mc("m1-proc-02", "m1-process",
   "Which pairing of a process stage and its activity is NOT correct on her slide?",
   [("Analysis & Interpretation: identify the reason for the evaluation and review background records", "Correct answer (the mismatch). Identifying the reason and reviewing records is Referral & Review, stage 1."),
    ("Observation: observe communication skills in natural or structured settings", "Matches slide 6."),
    ("Assessment: administer formal and informal measures, including oral mechanism examinations", "Matches slide 6; the OME is listed under Assessment."),
    ("Report & Results Conference: communicate results and recommendations to the client, family and/or team", "Matches slide 6.")],
   0, "Three of these are verbatim. Find the stage whose description belongs to a different stage.",
   "Stage 1 (Referral & Review) identifies the reason and reviews records. Analysis integrates information that has already been collected.",
   ["W1:slide 6"], style=("negative", "sibling"))

mc("m1-proc-03", "m1-process",
   "On the framework slide, the oral mechanism examination is listed under which stage?",
   [("Assessment", "Correct: 'Administer appropriate formal and informal measures, such as standardized tests, language samples, dynamic assessment, and oral mechanism examinations.'"),
    ("Observation", "Observation is watching communication in natural or structured settings; the OME is administered."),
    ("Case History & Interview", "History gathers reported information; the OME is direct examination."),
    ("Analysis & Interpretation", "Analysis integrates results; it does not administer measures.")],
   0, "Which stage 'administers' measures?",
   "Slide 6 groups standardized tests, language samples, dynamic assessment and oral mechanism exams under Assessment. On 9/21 she also called the OME an informal measure because it is not standardized.",
   ["W1:slide 6", "L0921"], style=("classify",))

tf("m1-proc-04", "m1-process",
   "On her framework, diagnosis and recommendations come before analysis and interpretation.",
   False, "Analysis & Interpretation (stage 5) comes BEFORE Diagnosis & Recommendations (stage 6).",
   "You cannot decide whether a disorder is present before integrating the findings.",
   "Stage 5 integrates the evidence; stage 6 uses it to decide on a diagnosis and recommendations.",
   ["W1:slide 6"], style=("sequence", "sibling"))

mc("m1-conf-01", "m1-conflict",
   "A child's standardized language score is within normal limits, but your observations and informal measures show clear difficulty. What did she say you are obligated to do?",
   [("You are not forced into a diagnosis; state that further testing is warranted and use clinical judgment", "Correct. 9/11: 'Are you forced into making the diagnosis if your data is conflicting? No... further testing is warranted.'"),
    ("Report the child as within normal limits because the standardized score supersedes informal data", "She said a formal score supersedes only when it is required for qualification; conflicting data call for more investigation, not automatic dismissal."),
    ("Diagnose a disorder based on the informal measures and disregard the standardized score", "Ignoring one data source is not integration; she recommended further testing and judgment, not discarding evidence."),
    ("Average the standardized and informal results to produce one severity rating", "Informal findings are not on a score scale that can be averaged with a standard score.")],
   0, "She answered this exact question in class on 9/11.",
   "Conflicting results mean the evidence is not yet sufficient. She taught that you may state further testing is warranted and rely on clinical judgment; on 9/9 she described pulling another test and defending therapy with informal and observational data.",
   ["L0911", "L0909"], ev="lecture", style=("scenario",))

tf("m1-conf-02", "m1-conflict",
   "According to her lecture, informal measures and observations can be as clinically relevant as a standardized score when justifying a recommendation for therapy.",
   True, "A tempting false version: 'Insurance can only be answered with standardized scores, so informal findings cannot support therapy.'",
   "Think of her insurance example on 9/9.",
   "On 9/9 she described insurance denying coverage because testing was normal and answered: provide the informal assessment results. Informal and observational data were 'just as clinically relevant'. (She did note that standardized scores govern when a score is required for qualification.)",
   ["L0909", "L0911"], ev="lecture")

mc("m1-conf-03", "m1-conflict",
   "In her 9/11 lecture, when did she say a formal (standardized) measure can supersede informal measures?",
   [("When a standardized score is required for the client to qualify for services", "Correct. She named qualification/eligibility as the situation where the formal score takes priority."),
    ("Whenever the formal and informal results disagree", "No; for disagreement she said further testing is warranted."),
    ("When the client is from a culturally and linguistically diverse background", "The opposite concern: standardized tests are often problematic for CLD clients (Week 3 multicultural deck)."),
    ("When the informal measure took longer to administer", "Time is not a criterion she gave.")],
   0, "Eligibility systems often demand a number.",
   "Her one stated exception was eligibility: some settings require a standardized score to qualify. This matches Week 2 slide 21: most eligibility decisions are based on standard scores and standard deviations.",
   ["L0911", "W2:slide 21"], ev="lecture")

teach("m1-teach-01", "m1-conflict",
   "Explain to a classmate what you would do and say when a child scores in the average range on a standardized vocabulary test but struggles to hold a conversation with peers.",
   ["Names the conflict: the score and functional observations disagree.",
    "States you are not forced to diagnose from one score; further testing or other measures are warranted.",
    "Uses informal measures/observation as legitimate evidence (her insurance example).",
    "Connects the recommendation to functional impact (Week 3: scores don't explain classroom or social impact)."],
   ["L0911", "L0909", "W3A:slides 13-14"], ev="lecture")
