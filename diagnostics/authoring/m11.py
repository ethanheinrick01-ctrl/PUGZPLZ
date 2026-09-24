from core import *
def S(**k): return k

M = "m11"
module(M, 11, "The interview in practice: Assignment 1", "Week 4 · Mock interviews", "Week 4 (+ 9/14 lecture)",
       "Common intake questions, the 20-minute interview structure from her mock-interview handout, the Maya and Ethan Miller cases, ethnographic wording, and how to handle hard parent questions.")
concept("m11-questions", M, "Common intake interview questions (ethnographic mindset)")
concept("m11-structure", M, "The 20-minute interview: segments, open-then-specific, the 5-part summary")
concept("m11-cases", M, "The mock cases: what a 'not talking' toddler interview must cover")
concept("m11-skills", M, "Active listening, ethnographic wording, hard questions")

section(M, S(h="Common intake interview questions (Week 4, slide 3)",
    body=["**Maintain an ethnographic interview mindset.** General questions often relate to: the **primary concern**; **when** the behavior became a concern; **progression** of the behavior; **suspicions about the cause**; **change** in the behavior; **consistency** of the behavior; **responses to** the behavior; **attempts to improve** it; **involvement of other professionals**; **expectations** of the evaluation."],
    callouts=[dict(k="lecture", t="9/14 (going through an online case-history form): who lives in the household (a grandparent may be the afternoon caregiver you need to coach); language exposure; who referred; when the problem was first noticed (a year and a half of worry vs 'first noticed this week' changes the picture); whether the child is aware of the problem; what the family thinks caused it; family history (genetic component).", ev="lecture")],
    src=["W4:slide 3", "L0914"]))

section(M, S(h="The 20-minute mock interview (her handout)",
    visual="interview",
    table=dict(head=["Minutes", "Segment", "Examples of her questions"], rows=[
        ["0-2", "Introduction & rapport", "'Can you tell me a little about Ethan?' 'What brings you in for an evaluation today?' 'What are your biggest concerns?' Remember: start broad before moving to specific questions."],
        ["2-7", "Speech & communication concerns", "When first noticed? Who noticed? Which sounds or words? How well do you vs unfamiliar people understand him? Different in different situations? Frustration? School/friendships?"],
        ["7-11", "Language & social communication", "Receptive (understand, follow directions, questions/stories); expressive (wants/ideas, complete sentences, tell about events, vocabulary/word finding); social (interact with adults/children, conversations, friends)"],
        ["11-15", "Developmental, medical & hearing history", "Full-term? Pregnancy/delivery complications? Milestones? Loss of skills? Medical history; frequent ear infections; hearing tested; ear tubes; medications; previous evaluations and services"],
        ["15-18", "School, family & parent priorities", "Teacher report; IEP/school services; academic concerns; languages at home; family history of speech, language, hearing or learning difficulties; strengths; what would you most like to see improve?"],
        ["18-20", "Summarize & close", "'Let me make sure I understand...' Include: 1 primary concern, 2 when it began, 3 functional impact, 4 relevant developmental/medical/hearing history, 5 parent's priorities. Then: 'Did I summarize that accurately? Is there anything else...?'"]]),
    body=["Your role per the handout: you do **not** need to ask every question. **Prioritize** questions that help you understand the referral concern and determine what additional assessment may be needed. **Use open-ended questions first, then specific follow-ups.** Follow-up prompts: 'Can you give me an example?' 'How often does that happen?' 'What happens when he isn't understood?' 'What does his teacher report?'"],
    src=["MOCKX:pp. 1-6", "L0914"]))

section(M, S(h="The two cases",
    body=["**Examiner case (Group B): Ethan Miller**, 5 years 2 months, kindergarten; parent Sarah Miller. Your debrief recorded: intelligibility concern (/r/, /l/, /th/, e.g., 'wabbit'), teacher recommended evaluation; 4-5 ear infections ages 2-4 with PE tubes at 3, hearing later reported okay and a school screening passed; typical development; father had /r/ difficulty as a child; English at home; parents understand him almost always, others sometimes don't; parent priority: others understanding him, especially at school. Your follow-up plan: verify hearing/middle-ear status, speech sound testing plus connected speech, stimulability, oral mechanism exam, language screening, teacher input.",
          "**Parent role case: Maya Thompson**, 2 years 1 month; mother Jessica. Concern: 'Maya just isn't talking.' No consistent spoken words (occasional 'mama', 'uh-oh'); points, pulls, brings objects; frustration when not understood; understands more than she says (responds to name, one-step directions, familiar words); social and emerging pretend play; full term; sat ~6, crawled ~9, walked ~13 months; **two ear infections between 18 months and 2 years; hearing checked only at the pediatrician's office, never a full audiological evaluation**; cousin talked late; English at home.",
          "The handout's teaching point: **'a toddler who is \"not talking\" requires a broad communication history, not simply a list of vocabulary words.'** The parent was told not to volunteer information or rescue the examiner."],
    callouts=[dict(k="assignment", t="Assignment 1 (Mock Interviews) is on the syllabus for Week 4, and the syllabus says each exam focuses on completed material from class AND assignments.", ev="assignment")],
    src=["MOCKP:pp. 1-9", "DEBRIEF", "SYL"]))

section(M, S(h="How she wants you to talk to families (9/14)",
    bullets=["**Active listening**: focus on the speaker, eye contact, affirm, show you are present; positive affect; open-ended questions; follow-up questions.",
             "Avoid negative connotations: ask 'What changes have you observed since the stroke?' rather than a leading negative.",
             "**Ethnographic sensitivity**: rephrase questions that judge. She had the class fix poorly worded ones, e.g., 'Does your child sit in front of a TV screen all day?' and 'Why did you wait so long before you brought him in?' (instead: ask about screen time neutrally; thank them for coming and ask whether they had any apprehensions).",
             "When a parent asks 'what caused this?': it is often too complex to pin on one thing; look at the whole picture; show compassion ('Nobody knows that answer, but we're going to do all the things we need to do to help').",
             "Summarize at the end so the parent can correct your understanding."],
    src=["L0914"]))

multi("m11-q-01", "m11-questions",
   "Select ALL topics her Week 4 slide lists among common intake interview questions.",
   [("Suspicions about the cause", "Listed."), ("Consistency of the behavior", "Listed."), ("Attempts to improve the behavior", "Listed."),
    ("Expectations of the evaluation", "Listed."), ("The client's preferred standardized test", "Not listed.")],
   [0, 1, 2, 3], "Ten topics on slide 3; one option isn't a caregiver question at all.", "Slide 3 list.", ["W4:slide 3"], style=("classify",))

mc("m11-q-02", "m11-questions",
   "Her Week 4 intake-questions slide opens with which instruction?",
   [("Maintain an ethnographic interview mindset", "Correct."), ("Use a standardized interview protocol", "Not stated."),
    ("Ask yes/no questions to save time", "Contradicts open-ended guidance."), ("Interview the child before the caregiver", "Not stated.")],
   0, "First SmartArt box.", "Slide 3.", ["W4:slide 3"])

mc("m11-s-01", "m11-structure",
   "According to her mock-interview handout, how should you sequence your questions?",
   [("Start with open-ended questions, then ask specific follow-up questions", "Correct: 'Use open-ended questions first, then ask specific follow-up questions.' 'Start broad before moving to specific questions.'"),
    ("Start with specific yes/no questions, then open-ended questions", "Reversed."),
    ("Ask every question on the handout in order", "The handout says you do NOT need to ask every question; prioritize."),
    ("Start with medical history before the primary concern", "The concern comes first (0-7 minutes); history is 11-15.")],
   0, "Broad → specific.", "Examiner handout, 'Your Role' and 0-2 minute remember note.", ["MOCKX:p. 1"], ev="assignment", style=("sequence",))

order("m11-s-02", "m11-structure",
   "Order the segments of her 20-minute pediatric diagnostic interview simulation.",
   ["Introduction & rapport (0-2)", "Speech & communication concerns (2-7)", "Language & social communication (7-11)",
    "Developmental, medical & hearing history (11-15)", "School, family & parent priorities (15-18)", "Summarize & close (18-20)"],
   "Concern before history; priorities just before the summary.", "Examiner handout timing.", ["MOCKX:pp. 1-6"], ev="assignment")

multi("m11-s-03", "m11-structure",
   "Select ALL elements her handout says to include in the closing summary.",
   [("Primary concern", "Included."), ("When the concern began", "Included."), ("Functional impact", "Included."),
    ("Relevant developmental/medical/hearing history", "Included."), ("Parent's priorities", "Included."),
    ("The child's standard scores", "No testing has happened yet; not included.")],
   [0, 1, 2, 3, 4], "Five numbered items.", "Examiner handout, 18-20 minutes.", ["MOCKX:p. 5"], ev="assignment", style=("classify",))

mc("m11-s-04", "m11-structure",
   "Which follow-up prompt appears on her handout?",
   [("'Can you give me an example?'", "Correct."), ("'Don't you think he just needs more time?'", "Leading, and not on the handout."),
    ("'Is it your fault he isn't talking?'", "Judgmental."), ("'Which test would you like us to use?'", "Not on the handout.")],
   0, "Example / frequency / what happens / teacher report.", "Handout follow-up prompts.", ["MOCKX:p. 1"], ev="assignment")

mc("m11-c-01", "m11-cases",
   "In the Maya case, which history item should most clearly lead the examiner to recommend further hearing assessment?",
   [("Two ear infections between 18 months and 2 years, with hearing checked only at the pediatrician's office and no full audiological evaluation", "Correct. Hearing loss can mimic or compound speech-language difficulties; this child has never had a comprehensive audiological evaluation."),
    ("She walked at about 13 months", "Within typical motor timing on the handout; not a hearing flag."),
    ("An older cousin did not talk much until about age 3", "Family history is relevant, but it is not a hearing item."),
    ("She reacts to sounds and usually turns when called", "Reassuring, but it does not substitute for a full evaluation.")],
   0, "Which information did the parent say to reveal ONLY if asked?", "The parent handout marks hearing history as 'only provide this information if the examiner asks', and the checklist includes 'has not had a comprehensive audiological evaluation.' Week 3 slide 5 and the ASHA video case show why.", ["MOCKP:pp. 5-8", "W3A:slide 5", "VA:5:15-7:22"], ev="assignment", style=("scenario", "integrate"))

tf("m11-c-02", "m11-cases",
   "The mock-interview materials teach that a toddler who is 'not talking' requires a broad communication history, not simply a list of vocabulary words.",
   True, "False edit: '...requires a vocabulary checklist rather than a history'.", "The parent handout's role-play rule states the goal.", "Parent handout, Role-Play Rule.", ["MOCKP:p. 9"], ev="assignment")

mc("m11-c-03", "m11-cases",
   "The parent handout tells the role-player what to do if the examiner never asks about hearing. What is it?",
   [("Do not volunteer it; the goal is for the examiner to practice asking", "Correct: 'Do not rescue the examiner.'"),
    ("Mention it during the closing summary", "The handout says not to use the summary to supply missed topics."),
    ("Hand the examiner the parent sheet", "Not allowed."),
    ("Stop the interview and remind the examiner", "Not allowed.")],
   0, "'Do not rescue.'", "Parent handout Role-Play Rule.", ["MOCKP:p. 9"], ev="assignment")

mc("m11-c-04", "m11-cases",
   "In your Ethan Miller interview (5;2, intelligibility concern with /r/, /l/, /th/), which additional information did your debrief say you would want first, given his history?",
   [("Verification of his current hearing and middle-ear status, given repeated ear infections and PE tubes", "Correct: your debrief listed this first."),
    ("A cognitive test to rule out intellectual disability", "Not suggested by his history."),
    ("An age-equivalent score for articulation", "AEs are cautioned against; not in your plan."),
    ("A swallowing evaluation", "No feeding or swallowing concerns reported.")],
   0, "Ear history.", "Your debrief: verify hearing/middle-ear status; then speech sound testing, connected speech, stimulability, oral mechanism exam, language screening, teacher input.", ["DEBRIEF"], ev="assignment", style=("scenario",))

mc("m11-k-01", "m11-skills",
   "A parent asks, 'What caused my child's delay?' Based on her 9/14 lecture, which response fits best?",
   [("Explain that it is often too complex to pin on one thing, look at the whole picture, and respond with compassion", "Correct, her described approach."),
    ("Name the most likely single cause so the parent has closure", "She warned against pinning it on one thing."),
    ("Tell the parent that the cause is unknowable and move on to testing", "Dismissive; she emphasized compassion."),
    ("Refer the question to the child's pediatrician without comment", "Not what she described.")],
   0, "Compassion plus honesty.", "9/14 lecture on hard questions from parents.", ["L0914"], ev="lecture", style=("scenario",))

mc("m11-k-02", "m11-skills",
   "Which rewrite of 'Why did you wait so long to bring him in?' best reflects the ethnographic sensitivity she taught?",
   [("'Thank you for coming in today. Were there any concerns or apprehensions about having him evaluated?'", "Correct: neutral, respectful, invites the family's perspective."),
    ("'Most parents bring children in much earlier; what happened?'", "Still judgmental."),
    ("'Did you know early intervention is more effective?'", "Implies blame."),
    ("'Who decided to wait?'", "Assigns fault.")],
   0, "Remove the judgment, keep the information goal.", "9/14: she had the class rephrase this exact question; the example given was thanking the family and asking about apprehensions.", ["L0914"], ev="lecture")

tf("m11-k-03", "m11-skills",
   "Active listening, as she described it, includes focusing on the speaker, eye contact and affirming, so the caregiver knows you are listening.",
   True, "False edit: 'Active listening means typing notes continuously without looking up.'", "9/14 description.", "9/14 lecture. Slide 9 (Week 3) also says listen actively and take detailed notes.", ["L0914", "W3A:slide 9"], ev="lecture")
