from core import *
def S(**k): return k

M = "m12"
module(M, 12, "Standard precautions and the orofacial examination", "Week 4 · Procedures", "Week 4 (+ textbook Ch. 6, 9/21 lecture)",
       "CDC standard precautions, the tools you need vs may need for an orofacial exam, and how to interpret the twelve findings on her slide.")
concept("m12-precautions", M, "Standard precautions")
concept("m12-tools", M, "Orofacial exam purpose and tools (need vs may need)")
concept("m12-findings", M, "Interpreting orofacial findings")

section(M, S(h="Standard precautions (slide 2)",
    body=["**Required across all settings.** CDC standard precautions apply to all health care settings. Most relevant for SLPs: **proper hand hygiene; PPE; respiratory hygiene; appropriate client placement; clean and disinfect the environment.**"],
    callouts=[dict(k="source", t="The assigned OPE video: every oral peripheral exam involves mucous membranes, so standard precautions always apply regardless of the diagnosis (hand hygiene, gloves, cleaning tools between clients).", ev="video")],
    src=["W4:slide 2", "OPE:2:45-3:41", "TB6:PDF p. 179"]))

section(M, S(h="Orofacial examination (slide 4)",
    table=dict(head=["Purpose", "Clinician WILL need", "MAY need"], rows=[
        ["Identify or rule out structural or functional factors", "Disposable gloves; flashlight; tongue depressor", "Bite block; cotton gauze; applicator stick; mouth swab; stopwatch; mirror"]]),
    callouts=[dict(k="lecture", t="9/21: she classified the oral mechanism exam as an INFORMAL measure, because it is not standardized and has no psychometric foundation behind it.", ev="lecture"),
              dict(k="trap", t="Stopwatch and mirror are 'may need' on her slide even though DDK timing and nasal-airflow checks use them.", ev="slide")],
    src=["W4:slide 4", "L0921"]))

section(M, S(h="Interpreting the orofacial exam (slide 5 + textbook meanings)",
    table=dict(head=["Finding on her slide", "What the textbook says it may indicate"], rows=[
        ["Abnormal color of tongue, palate, pharynx", "Grayish: muscular paresis/paralysis. Bluish: excessive vascularity or bleeding. Whitish along the hard/soft palate border: submucosal cleft. Dark or translucent on the hard palate: fistula or cleft. Dark spots: possible oral cancer."],
        ["Abnormal height or width of palatal arch", "Wide/high: difficulty with palatal-lingual sounds; low/narrow with a large tongue: consonant distortions"],
        ["Asymmetry of face or palate", "Often neurological impairment or muscle weakness"],
        ["Deviation of tongue or uvula", "Tongue deviates TOWARD the WEAKER side on extension; uvula deviates TOWARD the STRONGER side on phonation"],
        ["Enlarged tonsils", "Often no effect on speech; sometimes affects health, resonance, hearing; forward tongue carriage"],
        ["Missing teeth", "May impair articulation; usually temporary"],
        ["Mouth breathing", "Possible restricted nasal passage; persistent + hyponasal → otolaryngologist referral; linked with anterior tongue rest posture"],
        ["Poor intraoral pressure", "Air from the lips: labial weakness. Air through the nose: velopharyngeal inadequacy (insufficiency = structural; incompetence = functional)"],
        ["Prominent rugae", "Narrow/low palate, large tongue relative to palate; associated with tongue thrust"],
        ["Short lingual frenulum", "May cause infant feeding problems; rarely an articulation disorder except in severe cases"],
        ["Weak, asymmetrical, absent gag reflex", "Possible velopharyngeal weakness/neurological impairment; some people with normal muscles have no gag"],
        ["Weakness of lips, tongue, jaw", "Common with neurological impairment (aphasia, dysarthria or both may be present)"]]),
    callouts=[dict(k="conflict", t="Tongue-tie emphasis differs between sources. The textbook says a short lingual frenulum is rarely associated with an articulation disorder except in severe cases; the OPE presenter stresses judging restriction by FUNCTION (elevation), not appearance. Both agree that appearance alone doesn't settle it.", ev="textbook")],
    src=["W4:slide 5", "TB6:PDF pp. 181-182", "OPE:52:27-54:52"]))

tf("m12-p-01", "m12-precautions",
   "CDC standard precautions apply to all health care settings.",
   True, "True absolute: 'required across all settings'. A false edit: 'only in medical settings'.", "Slide 2 subtitle.", "Slide 2.", ["W4:slide 2"], style=("absolute",))

mc("m12-p-02", "m12-precautions",
   "Which is NOT one of the precautions her slide lists as most relevant for SLPs?",
   [("Sterilizing the room with UV light between every client", "Correct answer. Not on the list."),
    ("Respiratory hygiene", "Listed."), ("Appropriate client placement", "Listed."), ("Clean and disinfect environment", "Listed.")],
   0, "Five: hand hygiene, PPE, respiratory hygiene, client placement, clean/disinfect.", "Slide 2.", ["W4:slide 2"], style=("negative",))

mc("m12-t-01", "m12-tools",
   "According to her slide, which tools will the clinician NEED (not just 'may need') for an orofacial examination?",
   [("Disposable gloves, flashlight, tongue depressor", "Correct."),
    ("Gloves, stopwatch, mirror", "Stopwatch and mirror are 'may need'."),
    ("Flashlight, bite block, mouth swab", "Bite block and mouth swab are 'may need'."),
    ("Tongue depressor, cotton gauze, applicator stick", "Gauze and applicator stick are 'may need'.")],
   0, "Three 'will need' items.", "Slide 4.", ["W4:slide 4"], style=("classify", "sibling"))

tf("m12-t-02", "m12-tools",
   "The purpose of the orofacial examination on her slide is to identify or rule out structural or functional factors.",
   True, "False edit: 'to diagnose the communication disorder'.", "Slide 4 first box.", "Slide 4.", ["W4:slide 4"])

mc("m12-t-03", "m12-tools",
   "In her 9/21 lecture, why did she classify the oral mechanism examination as an informal measure?",
   [("It is not standardized and has no psychometric foundation", "Correct."),
    ("It is done only during observation", "It is administered, not just observed."),
    ("It takes less than five minutes", "Time is irrelevant."),
    ("It is performed by an assistant", "Not stated.")],
   0, "What do standardized tests have that the OME lacks?", "9/21 lecture.", ["L0921"], ev="lecture")

mc("m12-f-01", "m12-findings",
   "On tongue extension, a client's tongue deviates to the left. According to the textbook's interpretation, this suggests:",
   [("Weakness on the left side", "Correct: the tongue deviates toward the weaker side because the weaker half cannot match the stronger half's extension."),
    ("Weakness on the right side", "Reversed; that is the uvula rule (uvula deviates toward the STRONGER side on phonation)."),
    ("A submucous cleft", "Not a deviation finding."),
    ("A normal variant requiring no follow-up", "Deviation may indicate neurological involvement.")],
   0, "Tongue → weaker. Uvula → stronger.", "Textbook Ch. 6 interpretation of 'Deviation of tongue or uvula' (on her slide 5 list).", ["W4:slide 5", "TB6:PDF p. 182"], ev="textbook", style=("scenario",))

tf("m12-f-02", "m12-findings",
   "During phonation, the uvula deviates toward the weaker side.",
   False, "The uvula deviates toward the STRONGER side on phonation (the stronger palatal muscles pull it). It is the TONGUE that deviates toward the weaker side on extension.",
   "Two structures, opposite rules.", "Textbook Ch. 6.", ["TB6:PDF p. 182"], ev="textbook", style=("sibling", "antonym"))

mc("m12-f-03", "m12-findings",
   "During a pressure task, air escapes through the client's nose. Which interpretation fits the textbook?",
   [("Velopharyngeal inadequacy", "Correct. (Air escaping through the lips would suggest labial weakness.)"),
    ("Labial weakness", "That is air escaping from the lips."),
    ("Enlarged tonsils", "Not the interpretation of nasal air escape."),
    ("Short lingual frenulum", "Unrelated.")],
   0, "Where did the air go?", "Textbook Ch. 6 'Poor intraoral pressure'.", ["W4:slide 5", "TB6:PDF p. 182"], ev="textbook", style=("scenario",))

multi("m12-f-04", "m12-findings",
   "Select ALL findings on her 'Interpreting the Orofacial Examination' slide.",
   [("Prominent rugae", "Listed."), ("Short lingual frenulum", "Listed."), ("Mouth breathing", "Listed."),
    ("Weak, asymmetrical, absent gag reflex", "Listed."), ("Elevated pure-tone thresholds", "An audiological finding, not an orofacial one.")],
   [0, 1, 2, 3], "Twelve orofacial findings on slide 5.", "Slide 5 list.", ["W4:slide 5"], style=("classify",))

mc("m12-f-05", "m12-findings",
   "A client has persistent mouth breathing and hyponasal speech. What does the textbook recommend?",
   [("Referral to an otolaryngologist", "Correct."), ("Immediate articulation therapy", "Addresses neither the airway nor the cause."),
    ("A standardized language test", "Unrelated."), ("No action; mouth breathing is typical", "Persistent mouth breathing with hyponasality warrants referral.")],
   0, "Airway obstruction → which specialist?", "Textbook Ch. 6 'Mouth breathing'. The OPE video likewise refers persistent obstruction/hyponasality to ENT or an allergist before therapy.", ["TB6:PDF p. 182", "OPE:27:31-28:17"], ev="textbook", style=("scenario",))
