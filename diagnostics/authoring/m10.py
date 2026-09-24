from core import *
def S(**k): return k

M = "m10"
module(M, 10, "Analyze, diagnose, report, share", "Week 3 · Conclusions", "Week 3 (+ 9/11 lecture)",
       "Assimilating findings in the context of the case history, the three possible outcomes, what a treatment plan contains, the seven report sections, the results conference, and electronic sharing (EMR vs EHR).")
concept("m10-analyze", M, "Assimilate and analyze findings in light of the case history")
concept("m10-outcomes", M, "Diagnosis vs treatment plan; the three outcome scenarios")
concept("m10-report", M, "The seven report sections")
concept("m10-share", M, "Sharing findings; electronic sharing; EMR vs EHR")

section(M, S(h="Assimilate and analyze (slides 15-16)",
    body=["Slide 15 'deep analysis' feeds: make diagnosis, determine progress, recommend a treatment plan, establish realistic goals. Consider client input; score standardized tests; analyze speech-language samples; analyze results of dynamic assessment; analyze observations; consider influences that will contribute to **prognosis**.",
          "Slide 16: often **the most time-consuming** portion of the assessment. Findings should always be considered in the context of the **case history**, which helps you interpret results in light of medical, developmental and educational history, identify potential underlying causes, and develop a more accurate diagnosis. Her chain: **Case history: hearing loss → Assessment results: speech sound disorder → Diagnosis: SSD secondary to hearing loss → Treatment plan: SSD therapy and auditory rehabilitation.**"],
    callouts=[dict(k="lecture", t="9/11: analysis looks for trends where different measures support one another; the same analysis is used for annual re-evaluations to determine progress. Her example of prognosis: a child who was typical until an abusive head injury.", ev="lecture")],
    src=["W3A:slides 15-16", "L0911"]))

section(M, S(h="Diagnosis and recommendations (slide 17)",
    body=["The goal of assessment. Outcomes typically fall into one of **three scenarios**: (1) a communicative disorder is diagnosed and a treatment plan recommended; (2) a disorder is diagnosed, a treatment plan recommended, **and further testing recommended**; (3) the client performs **within normal limits**.",
          "**Diagnosis → clinical label. Treatment plan → intervention strategy.** Elements of a treatment plan: **frequency, duration of sessions, environment, goals.**"],
    callouts=[dict(k="textbook", t="Textbook: scenarios one and two are the most common outcomes; with scenario three, follow-up or referral may or may not be recommended.", ev="textbook")],
    src=["W3A:slide 17", "TB2:PDF pp. 65-66"]))

section(M, S(h="Diagnostic report (slide 18)",
    table=dict(head=["Section", "Contents"], rows=[
        ["Identifying information", "Client name, date of birth, date of evaluation, referral source, clinician's credentials"],
        ["Reason for referral", "Concise statement of why the evaluation was requested and by whom"],
        ["Background and history", "Developmental, medical, educational, social history from interviews, records, prior reports"],
        ["Assessment procedures", "List of all formal tests, informal measures, observations, language samples"],
        ["Results by domain", "Findings by communication area with quantitative data AND qualitative descriptions"],
        ["Clinical impressions", "Synthesis into a cohesive profile, including severity ratings and functional impact statements"],
        ["Recommendations", "Therapy recommendations, referrals, frequency and duration, accommodations or home strategies"]]),
    callouts=[dict(k="trap", t="Severity ratings live in Clinical Impressions, not Results by domain. Frequency and duration live in Recommendations.", ev="slide")],
    src=["W3A:slide 18"]))

section(M, S(h="Sharing findings (slides 19-20)",
    bullets=["Share with the client, caregiver and others involved in care, in an information-sharing meeting (online, in person, phone).",
             "Review the written report; use **jargon-free language**, illustrations, charts, diagrams.",
             "Sensitivity to feelings; allow time to process; **emphasize the client's strengths**; ask questions that let the client/caregiver participate; **end by discussing next steps**.",
             "Electronic sharing is the **most efficient** method. Emailing reports: **PHI and privacy are an ethical and legal priority**.",
             "**EMRs** are digital versions of a client's medical records; **EHRs** are similar, but records can be **shared by professionals across health care organizations**."],
    src=["W3A:slides 19-20"]))

mc("m10-an-01", "m10-analyze",
   "Her slide calls which portion of the assessment 'often the most time-consuming'?",
   [("Assimilating and analyzing findings", "Correct."), ("Obtaining the case history", "Not the slide's claim."),
    ("Administering standardized tests", "Not the slide's claim."), ("Writing the recommendations", "Not the slide's claim.")],
   0, "Slide 16, first line.", "Slide 16. (Week 4 separately calls speech-language SAMPLING time-consuming but worth it.)", ["W3A:slide 16", "W4:slide 8"], style=("sibling",))

order("m10-an-02", "m10-analyze",
   "Rebuild her slide's analysis chain in order.",
   ["Case history: hearing loss", "Assessment results: speech sound disorder", "Diagnosis: SSD secondary to hearing loss", "Treatment plan: SSD therapy and auditory rehabilitation"],
   "History → results → diagnosis → plan.", "Slide 16 SmartArt.", ["W3A:slide 16"])

mc("m10-an-03", "m10-analyze",
   "Using her example, a child with a history of hearing loss shows a speech sound disorder on testing. Which diagnosis statement fits her slide?",
   [("Speech sound disorder secondary to hearing loss", "Correct: the history explains a potential underlying cause."),
    ("Hearing loss secondary to speech sound disorder", "Reverses cause and effect."),
    ("Speech sound disorder; hearing history not relevant to diagnosis", "The slide says findings must be considered in the context of the case history."),
    ("Within normal limits pending audiology", "Not her example's outcome.")],
   0, "Which condition explains which?", "Slide 16.", ["W3A:slide 16"], style=("scenario",))

tf("m10-an-04", "m10-analyze",
   "According to her slide, assessment findings should always be considered within the context of the client's case history.",
   True, "True absolute. A false edit would make it 'only when results are unclear'.", "Slide 16 wording uses 'always'.", "Slide 16.", ["W3A:slide 16"], style=("absolute",))

mc("m10-out-01", "m10-outcomes",
   "Which is NOT one of the elements of a treatment plan on her slide?",
   [("Clinical impressions", "Correct answer. Impressions are a report section."),
    ("Frequency", "Element."), ("Duration of sessions", "Element."), ("Environment", "Element.")],
   0, "Four elements: frequency, duration, environment, goals.", "Slide 17.", ["W3A:slide 17"], style=("negative",))

mc("m10-out-02", "m10-outcomes",
   "On her slide, 'diagnosis' is to 'clinical label' as 'treatment plan' is to:",
   [("Intervention strategy", "Correct."), ("Prognosis", "Prognosis is considered during analysis."),
    ("Recommendations section", "The plan is written there, but the slide's pairing is 'intervention strategy'."), ("Functional impact", "Not the pairing.")],
   0, "Slide 17 arrows.", "Slide 17: Diagnosis → clinical label; Treatment plan → intervention strategy.", ["W3A:slide 17"], style=("definition",))

multi("m10-out-03", "m10-outcomes",
   "Select ALL outcome scenarios listed on her slide.",
   [("Disorder diagnosed, treatment plan recommended", "Listed."),
    ("Disorder diagnosed, treatment plan recommended, further testing recommended", "Listed."),
    ("Client performs within normal limits", "Listed."),
    ("Client performs within normal limits, so the case history is discarded", "Not listed; nothing is discarded.")],
   [0, 1, 2], "Three scenarios.", "Slide 17.", ["W3A:slide 17"], style=("classify",))

mc("m10-rep-01", "m10-report",
   "Severity ratings and functional impact statements belong in which report section?",
   [("Clinical impressions", "Correct: 'a synthesis of all results into a cohesive profile, including severity ratings and functional impact statements'."),
    ("Results by domain", "Results by domain gives quantitative data and qualitative descriptions per area."),
    ("Assessment procedures", "Lists the tests and measures used."),
    ("Recommendations", "Services, referrals, frequency, duration, strategies.")],
   0, "Synthesis section.", "Slide 18.", ["W3A:slide 18"], style=("sibling",))

match("m10-rep-02", "m10-report",
   "Match each report content to its section.",
   [("Referral source and clinician's credentials", "Identifying information"),
    ("Why the evaluation was requested and by whom", "Reason for referral"),
    ("List of all formal tests, informal measures, observations and samples", "Assessment procedures"),
    ("Frequency and duration of services; home strategies", "Recommendations")],
   "Note where the referral SOURCE goes vs the referral REASON.", "Slide 18: referral source is listed under Identifying information.", ["W3A:slide 18"])

tf("m10-rep-03", "m10-report",
   "The results-by-domain section should include quantitative data only; qualitative descriptions belong elsewhere in the report.",
   False, "Slide 18: results by domain include BOTH quantitative data and qualitative descriptions.", "Slide 18 wording.", "Slide 18.", ["W3A:slide 18"])

mc("m10-sh-01", "m10-share",
   "All of the following are recommendations for sharing assessment findings on her slide EXCEPT:",
   [("Begin with next steps so caregivers know the plan before hearing results", "Correct answer. The slide says END by discussing next steps."),
    ("Use jargon-free language, illustrations, charts and diagrams", "Listed."),
    ("Emphasize the client's strengths", "Listed."),
    ("Allow time to process", "Listed.")],
   0, "Sequence trap.", "Slide 19.", ["W3A:slide 19"], style=("negative", "sequence"))

mc("m10-sh-02", "m10-share",
   "According to her slide, what distinguishes an EHR from an EMR?",
   [("EHR records can be shared by professionals across health care organizations", "Correct."),
    ("EHRs are paper records; EMRs are digital", "Both are digital."),
    ("EMRs are exempt from HIPAA", "No."),
    ("EHRs contain only billing information", "No.")],
   0, "Sibling pair on slide 20.", "Slide 20: EMRs are digital versions of a client's medical records; EHRs are similar, and records can be shared across organizations.", ["W3A:slide 20"], style=("sibling",))

tf("m10-sh-03", "m10-share",
   "Her slide calls electronic sharing the most efficient method, and states that when sending reports by email, PHI and client privacy are an ethical and legal priority.",
   True, "False edit: 'email is exempt from privacy rules because it is efficient'.", "Slide 20.", "Slide 20.", ["W3A:slide 20", "W1:slide 11"])
