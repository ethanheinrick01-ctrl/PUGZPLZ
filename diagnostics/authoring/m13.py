from core import *
def S(**k): return k

M = "m13"
module(M, 13, "OPE video I: posture, movement, airway, rest", "Week 4 · Assigned video", "Week 4 Friday (discussed 9/21)",
       "Justine Sherman's oral peripheral exam, first half: why a thorough OPE matters, posture as the foundation, the four movement concepts, facial symmetry, airway and resonance, oral rest posture, jaw, cheeks and lips.")
concept("m13-why", M, "Why a thorough OPE matters; safety and tools")
concept("m13-four", M, "Stability, mobility, dissociation, grading")
concept("m13-posture", M, "Posture and facial symmetry (rest vs movement)")
concept("m13-airway", M, "Airway, nasal airflow and resonance")
concept("m13-rest", M, "Oral rest posture")
concept("m13-jawlips", M, "Jaw, cheeks and lips")

section(M, S(h="Why a thorough OPE matters",
    body=["Her Week 4 Friday slide assigned the video 'What SLPs Need to Know: How to Perform (And Interpret) a High-Quality Oral Peripheral Exam' (Justine Sherman, SLP) to discuss Monday; you discussed it on 9/21.",
          "The OPE looks at **structure, tone, symmetry, mobility, airway, sensory components, compensations and functional impact**. It helps identify structural and functional contributors to speech, feeding, resonance and airway issues, explain possible causes, individualize treatment, and know when and to whom to refer.",
          "**Teaching tip:** whenever therapy for speech, feeding or resonance isn't progressing as expected, **go back to your OPE first**.",
          "**Safety:** every OPE involves mucous membranes, so **standard precautions always apply** (hand hygiene, gloves, cleaning tools). **Tools:** a flashlight or headlamp (a poor light source leads to poor decisions); a tongue depressor is for **stabilization, not force**; a mirror helps check nasal airflow. If you can't see it clearly, don't guess."],
    callouts=[dict(k="lecture", t="9/21 class discussion picked up on posture affecting the oral pathway and airway, and on tongue-thrust/orofacial myofunctional patterns: braces can relapse if a lingual fronting (thrust) pattern isn't corrected, because we swallow thousands of times a day.", ev="lecture")],
    src=["W4OPE:slides 1-2", "OPE:0:07-4:05", "L0921"]))

section(M, S(h="Posture and the four movement concepts",
    visual="four",
    body=["Posture is **the foundation** of the orofacial mechanism. Observe it **at rest, not on command**, starting in the lobby: head stacked over shoulders or forward? shoulders rounded? trunk supported or collapsed? Upright posture supports breath support, jaw stability, oral rest posture and motor control. Slouched posture → reduced respiratory support, jaw instability, **low and forward tongue**, more compensation."],
    table=dict(head=["Concept", "Definition (video)", "What poor control looks like"], rows=[
        ["Stability", "Ability to maintain a controlled, supported position (jaw is a MOBILE STABILIZER for tongue and lips)", "Jaw sliding, biting or excessive movement to compensate"],
        ["Mobility", "Ability to move efficiently through range without restriction", "Reduced range of motion even when structures are anatomically normal; neck/shoulder tension"],
        ["Dissociation", "Ability to move one part independently of another", "Head moves during tongue tasks; jaw lifts during lip tasks; excessive mentalis activation"],
        ["Grading", "Control of speed, force and range of movement", "Overshooting, undershooting, 'all-or-nothing' movement"]]),
    callouts=[dict(k="source", t="Forward head posture is 'a key clinical clue': think airway and breathing (mouth breathing, low tongue rest, narrowed oral/pharyngeal space). Referrals when posture affects function: OT (core stability, sensory-motor integration), PT (alignment, movement efficiency), ENT/medical (airway).", ev="video")],
    src=["OPE:4:12-12:21"]))

section(M, S(h="Facial symmetry: rest vs movement",
    body=["Assess the face **completely at rest** first (baseline tone and structure), then during intentional movement: smile, pucker, retract, alternate pucker/retract, tongue tasks with the face relaxed.",
          "**Asymmetry at rest that IMPROVES with movement** → often a structural difference or habitual resting pattern; motor control likely intact. **Asymmetry that APPEARS or WORSENS with movement** → concern for neuromuscular weakness or cranial nerve involvement, **especially cranial nerve VII**.",
          "**Asymmetry is not inherently pathological; the pattern matters.** Document the pattern and conditions: e.g., 'mild right-sided lip weakness observed during retraction tasks, increasing with sustained movement; symmetry improved at rest.'"],
    src=["OPE:11:19-17:13"]))

section(M, S(h="Airway and resonance",
    body=["Observe breathing at rest (mouth open/closed; nasal, oral or mixed; effort such as nasal flaring). Nasal breathing at rest is typical; **mouth breathing at rest often suggests obstruction or chronic congestion**.",
          "**Mirror, task 1:** under the nostrils during normal breathing: presence and symmetry of **fogging**; consistently reduced or absent fogging on one side suggests decreased airflow (turbinate hypertrophy, septal deviation, chronic inflammation). **Mirror, task 2:** during pressure-heavy NON-nasal sounds (/s/, /z/, p, b, t, d; 'big puppy'): nasal air escape is clinically meaningful because pressure sounds need oral airflow and velopharyngeal closure."],
    table=dict(head=["Finding", "Meaning", "Points toward"], rows=[
        ["Hyponasality", "Too little nasal resonance", "Obstruction (e.g., enlarged tonsils/adenoids when no congestion)"],
        ["Hypernasality", "Excessive nasal resonance", "Velopharyngeal dysfunction"],
        ["Nasal emission", "Air escaping through the nose on oral pressure sounds", "Possible VPI"],
        ["Cul-de-sac", "A mix; sounds muffled", "(briefly described)"],
        ["Intermittent congestion", "", "Allergies"],
        ["Consistent uni/bilateral obstruction", "", "Structural issue: turbinates, tonsils, adenoids"]]),
    callouts=[dict(k="source", t="Referrals: ENT, allergist, sleep medicine (sleep study for suspected apnea). As an orofacial myologist she sends a consistently hyponasal, obstructed client to ENT or an allergist BEFORE starting therapy, because proper rest posture (lips closed, nasal breathing) isn't possible otherwise.", ev="video")],
    src=["OPE:20:31-28:17"]))

section(M, S(h="Oral rest posture",
    body=["Rest posture shows how the system is organized most of the day. **Observe before any instruction**: once you cue 'close your mouth' or 'tongue up', you lose information about natural rest. Observe over time (lobby, transitions, while listening).",
          "Typical rest: **mouth closed, nasal breathing, tongue elevated in a gentle 'suction' on the palate with the tip on the 'spot' just behind the upper front teeth**, lips closed without strain, mentalis relaxed, jaw relaxed but supported, quiet efficient breathing.",
          "Atypical: open-mouth posture (nasal obstruction, low tone/postural support, or a long-standing habit such as pacifier or thumb sucking) → mouth breathing, dry mouth, more illness, non-restorative sleep; low forward tongue → less palatal stimulation, palate may narrow, airway compromised.",
          "Rest posture happens **20+ hours a day**, far more than a 30-minute session; therapy can't override inefficient rest posture if structural or airway barriers are present. **An atypical rest posture alone does not equal pathology**: can they achieve it with a cue, maintain it, and are there symptoms (snoring, mouth breathing, fatigue)?"],
    src=["OPE:28:17-33:38"]))

section(M, S(h="Jaw, cheeks and lips",
    table=dict(head=["Structure", "Tasks / observations", "Key interpretations"], rows=[
        ["Jaw", "Rest; open/close slowly; open wide and hold; side to side; then conversation, DDK, reading/counting", "Oral placement therapy triangle: jaw, lips, tongue, and JAW ALWAYS COMES FIRST. Deviation toward one side often reflects weakness or restriction on that side. Improves with cueing/postural support → habitual/compensatory; persists → true weakness. Pain, clicking, restricted range → structural, refer. Stable at first but deteriorates → reduced endurance."],
        ["Cheeks (buccal)", "Fullness vs flattening; puff cheeks; hold air in one cheek; maintain against gentle external pressure; speech; feeding", "Weak buccal tone → food pocketing in the lateral sulci, inefficient chewing/clearing, distorted pressure consonants. Check buccal frenula. Refer ENT/dentistry (tethered tissue), OT, feeding specialist."],
        ["Lips", "Rest seal and labial frenula; pucker, smile, alternate; 'oo'/'ee'; straw, cup, spoon", "Hyperactive MENTALIS (chin muscle) pushing the lower lip up = compensation for poor lip closure by the ORBICULARIS ORIS. Flaccid lips → drooling, reduced pressure; hypertonic lips limit movement; asymmetry → possible neuromotor involvement."]]),
    callouts=[dict(k="source", t="Q&A: asked whether large jaw movement is typical under age five, the presenter said she did not know the exact answer, but assumed excessive jaw sliding should not be seen even at 5. Do not treat that as an age norm.", ev="video")],
    src=["OPE:33:38-52:27"]))

# items
tf("m13-why-01", "m13-why",
   "The presenter's teaching tip is that when speech, feeding or resonance therapy isn't progressing as expected, the first place to go back to is the OPE.",
   True, "False edit: 'the first place to go back to is the standardized test'.", "Her 'teaching tip' near the start.", "OPE 2:45.", ["OPE:1:48-2:45"], ev="video")

mc("m13-why-02", "m13-why",
   "According to the video, what is the tongue depressor for during an OPE?",
   [("Stabilization, not force", "Correct."), ("Forcing the tongue into position to test strength", "The video explicitly says not force."),
    ("Measuring the palate height", "Not stated."), ("Checking nasal airflow", "That is the mirror.")],
   0, "'For ___, not ___.'", "OPE 3:41.", ["OPE:3:41"], ev="video")

tf("m13-why-03", "m13-why",
   "Because an OPE involves mucous membranes, standard precautions apply only when the client has a known infectious diagnosis.",
   False, "Standard precautions ALWAYS apply regardless of the diagnosis.", "'Regardless of the diagnosis.'", "OPE 2:45-3:41; Week 4 slide 2: required across all settings.", ["OPE:2:45-3:41", "W4:slide 2"], ev="video", style=("antonym",))

match("m13-four-01", "m13-four",
   "Match each movement concept to its definition from the video.",
   [("Stability", "Maintain a controlled, supported position"), ("Mobility", "Move efficiently through range without restriction"),
    ("Dissociation", "Move one part independently of another"), ("Grading", "Control speed, force and range of movement")],
   "Hold / move through range / independent / control.", "OPE 5:40-9:24.", ["OPE:5:40-9:24"], ev="video")

mc("m13-four-02", "m13-four",
   "A client moves the head side to side whenever asked to lateralize the tongue. Which concept is most directly impaired?",
   [("Dissociation", "Correct: the tongue cannot move independently of the head."),
    ("Mobility", "The tongue does move; range is not the stated problem."),
    ("Grading", "Grading concerns speed/force/range control."),
    ("Stability", "Stability is holding a controlled position.")],
   0, "Independence.", "The video lists head movement during tongue tasks as a sign of poor dissociation.", ["OPE:7:34-8:32"], ev="video", style=("scenario",))

mc("m13-four-03", "m13-four",
   "The video calls the jaw a 'mobile stabilizer.' For which structures?",
   [("The tongue and the lips", "Correct."), ("The velum and the pharynx", "Not stated."),
    ("The larynx and the hyoid", "Not stated."), ("The cheeks and the teeth", "Not stated.")],
   0, "Jaw, lips, tongue triangle.", "OPE 5:40-6:40 and 33:38.", ["OPE:5:40-6:40", "OPE:33:38"], ev="video")

tf("m13-four-04", "m13-four",
   "In the video, overshooting, undershooting or all-or-nothing movements are red flags for poor dissociation.",
   False, "Those are red flags for poor GRADING (control of speed, force, range). Dissociation is moving one part independently of another.", "Control of speed, force, range.", "OPE 8:32-9:24.", ["OPE:8:32-9:24"], ev="video", style=("sibling",))

mc("m13-pos-01", "m13-posture",
   "Facial asymmetry is present at rest but IMPROVES with movement. According to the video, this more often points to:",
   [("A structural difference or habitual resting pattern, with motor control likely intact", "Correct."),
    ("Cranial nerve VII weakness", "That concern goes with asymmetry that appears or WORSENS with movement."),
    ("A submucous cleft", "Unrelated."),
    ("Normal development requiring no documentation", "Still document the pattern.")],
   0, "Rest vs movement.", "OPE 12:21-13:22.", ["OPE:12:21-13:22"], ev="video", style=("scenario", "sibling"))

tf("m13-pos-02", "m13-posture",
   "Asymmetry that appears or worsens with movement raises concern for neuromuscular weakness or cranial nerve involvement, especially cranial nerve XII.",
   False, "The presenter names cranial nerve VII (facial) for facial asymmetry under movement, not XII (hypoglossal).", "Which cranial nerve controls facial muscles?", "OPE 13:22.", ["OPE:13:22"], ev="video", style=("number",))

tf("m13-pos-03", "m13-posture",
   "The video teaches that facial asymmetry is inherently pathological.",
   False, "Asymmetry is NOT inherently pathological; the pattern (and context) matters.", "'Context is everything.'", "OPE 15:12-16:15.", ["OPE:15:12-16:15"], ev="video", style=("absolute",))

mc("m13-pos-04", "m13-posture",
   "When the presenter sees forward head posture, what does she immediately think about?",
   [("Airway and breathing patterns", "Correct."), ("Hearing loss", "Not stated."),
    ("Cranial nerve XII damage", "Not stated."), ("Dental malocclusion only", "Not her first thought.")],
   0, "'A key clinical clue.'", "OPE 9:24-10:20: forward head posture correlates with mouth breathing, low tongue rest, narrowed oral/pharyngeal space.", ["OPE:9:24-10:20"], ev="video")

mc("m13-air-01", "m13-airway",
   "During the video, the audience was asked: if you hear hyponasality, is it more likely obstruction or velopharyngeal dysfunction?",
   [("Obstruction", "Correct."), ("Velopharyngeal dysfunction", "That goes with hypernasality/nasal emission."),
    ("Neither; hyponasality is always normal", "No."), ("Cranial nerve VII weakness", "Unrelated.")],
   0, "Too LITTLE nasal resonance.", "OPE 25:28.", ["OPE:23:29-25:28"], ev="video", style=("sibling",))

mc("m13-air-02", "m13-airway",
   "Which task does the presenter use to check for nasal air ESCAPE (possible VPI)?",
   [("Pressure-heavy non-nasal sounds (/s/, /z/, repeated p/b/t/d, 'big puppy') while watching and listening for air from the nose", "Correct: pressure sounds need oral airflow and velopharyngeal closure."),
    ("Holding the mirror under the nostrils during quiet nasal breathing", "That checks presence and symmetry of nasal airflow (fogging)."),
    ("Having the client look in the mirror while smiling", "Symmetry task, not airflow."),
    ("Placing the mirror on the tongue during 'ah'", "Not described.")],
   0, "Escape shows up when the mouth needs pressure.", "OPE 22:33-24:28: the mirror under the nostrils during normal breathing checks presence and symmetry of fogging (airflow); nasal air escape is checked with pressure sounds, listening for turbulence. (Revised after the blind audit: the video does not pair the mirror with the pressure-sound task.)", ["OPE:22:33-24:28"], ev="video", style=("sibling",))

match("m13-air-03", "m13-airway",
   "Match each finding to what the video says it points toward.",
   [("Intermittent congestion", "Allergies"), ("Consistent unilateral or bilateral obstruction", "Structural issue (turbinates, tonsils, adenoids)"),
    ("Nasal emission during pressure sounds", "Possible VPI"), ("Hyponasality without congestion", "Enlarged tonsils or adenoids")],
   "'Important clinical distinctions' list.", "OPE 25:28-26:24.", ["OPE:25:28-26:24"], ev="video")

mc("m13-rest-01", "m13-rest",
   "Why does the presenter observe oral rest posture BEFORE giving any instruction?",
   [("Cueing ('close your mouth', 'tongue up') removes the information about natural resting posture", "Correct."),
    ("Instructions are prohibited during an OPE", "Not stated."),
    ("Rest posture can only be seen in the lobby", "She observes throughout the exam."),
    ("Clients refuse tasks after instructions", "Not stated.")],
   0, "What do you lose when you cue?", "OPE 29:06.", ["OPE:28:17-29:06"], ev="video")

tf("m13-rest-02", "m13-rest",
   "In typical oral rest posture per the video, the tongue rests low and forward behind the lower front teeth.",
   False, "Typical: tongue ELEVATED in a gentle suction on the palate, tip on the 'spot' just behind the UPPER front teeth. Low and forward is atypical.",
   "Where is 'the spot'?", "OPE 29:56.", ["OPE:29:06-29:56"], ev="video", style=("antonym",))

tf("m13-rest-03", "m13-rest",
   "According to the video, an atypical rest posture by itself does not equal pathology.",
   True, "False edit: 'always requires orthodontic referral'.", "'Context is key.'", "OPE 31:50-32:44.", ["OPE:31:50-32:44"], ev="video")

mc("m13-rest-04", "m13-rest",
   "The presenter contrasts rest posture happening '20-plus hours a day' with what?",
   [("A 30-minute therapy session", "Correct: rest posture is far more impactful than what we do in a 30-minute session."),
    ("An 8-hour school day", "Not her comparison."),
    ("A 60-minute evaluation", "Not her comparison."),
    ("A night's sleep", "Not her comparison.")],
   0, "Session length.", "OPE 31:50.", ["OPE:30:52-31:50"], ev="video", style=("number",))

mc("m13-jl-01", "m13-jawlips",
   "In the oral placement therapy triangle the presenter describes, which structure 'always comes first'?",
   [("Jaw", "Correct: jaw, lips, tongue; jaw always comes first."), ("Tongue", "Last in the triangle."),
    ("Lips", "Second."), ("Velum", "Not in the triangle.")],
   0, "The mobile stabilizer.", "OPE 33:38.", ["OPE:33:38"], ev="video")

mc("m13-jl-02", "m13-jawlips",
   "A client's jaw control improves significantly with cueing or postural support. According to the video, the pattern is more likely:",
   [("Habitual or compensatory", "Correct. Instability that persists despite cueing suggests true weakness."),
    ("True weakness", "That is the pattern that PERSISTS despite cueing."),
    ("A structural TMJ problem", "Pain, clicking or restricted range suggest structural."),
    ("Normal for all ages", "Not the interpretation.")],
   0, "Response to support.", "OPE 37:25-38:29 'important clinical distinctions': improves with support → habitual/compensatory; persists despite cueing → true weakness or reduced motor control. Caption note: the auto-caption reads 'improves significantly WITHOUT queuing', which contradicts the next sentence; the contrast only makes sense as 'with cueing'.", ["OPE:37:25-38:29"], ev="video", style=("sibling",))

mc("m13-jl-03", "m13-jawlips",
   "A hyperactive chin muscle pushes the lower lip up to achieve closure. Which muscles does the video name?",
   [("Mentalis (hyperactive) compensating for the orbicularis oris", "Correct."),
    ("Orbicularis oris compensating for the mentalis", "Reversed."),
    ("Masseter compensating for the buccinator", "Not described here."),
    ("Buccinator compensating for the mentalis", "Not described.")],
   0, "Chin muscle vs the muscle around the lips.", "OPE 48:04.", ["OPE:47:16-48:04"], ev="video", style=("sibling",))

mc("m13-jl-04", "m13-jawlips",
   "Food residue collecting in the lateral sulci during feeding most directly suggests weakness of the:",
   [("Buccal (cheek) mechanism", "Correct: weak buccal tone affects bolus control; residue in the lateral sulci."),
    ("Soft palate", "Velar problems affect resonance/nasal regurgitation."),
    ("Lips", "Lips relate to anterior spillage/drooling."),
    ("Jaw only", "Not the described sign.")],
   0, "Where are the lateral sulci?", "OPE 42:20 cheeks section.", ["OPE:41:30-43:16"], ev="video", style=("scenario",))
