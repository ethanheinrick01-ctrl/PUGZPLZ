from core import *
def S(**k): return k

M = "m14"
module(M, 14, "OPE video II: tongue, teeth, palate, DDK, documentation", "Week 4 · Assigned video", "Week 4 Friday (discussed 9/21)",
       "Tongue assessment and the TRMR, occlusion classes and bite terms, hard palate and rugae, soft palate and tonsils, the submucous cleft triad, DDK interpretation, and turning observations into clinical interpretations.")
concept("m14-tongue", M, "Tongue: rest, mobility, scalloping, TRMR, posterior tie")
concept("m14-teeth", M, "Occlusion (Class I/II/III) and bite terms")
concept("m14-palate", M, "Hard palate, rugae, soft palate and tonsils")
concept("m14-smc", M, "Submucous cleft: the triad and what it means")
concept("m14-ddk", M, "DDK interpretation: AMR vs SMR patterns")
concept("m14-document", M, "Structure → function: documentation and referrals")
concept("m14-diagram", M, "Visual identification: oral structures")

section(M, S(h="Tongue and the TRMR",
    visual="oral",
    body=["At rest: size, texture, **scalloping** on the lateral borders (from a narrow palate with the tongue pushing against the teeth, or from jaw clenching), and resting posture (tip on the alveolar ridge, or low and forward?). Mobility: up to the alveolar ridge and down; lateralize; reach back molars; retract; cup; suction to the roof of the mouth; rapid alternating movements. Look for symmetry, range, speed, grading, and **tongue-jaw dissociation**.",
          "**Tongue range of motion ratio (TRMR)** (designed by 'Dr. Zagi' (as captioned) of the Breathe Institute) measures FUNCTION, not frenum appearance: measure maximal interincisal opening with the tongue down, then the opening with the tongue tip on 'the spot'; **(tongue-up opening ÷ maximum opening) × 100**."],
    table=dict(head=["TRMR", "Presenter's category"], rows=[[">80%", "Typical tongue mobility"], ["50-80%", "Mild restriction"], ["<50%", "Moderate to severe restriction"]]),
    callouts=[dict(k="numbers", t="Example: 24 mm tongue-up ÷ 40 mm max × 100 = 60% → mild. 18 ÷ 40 × 100 = 45% → moderate-severe. Exactly 80% or 50% is not assigned by the presenter's wording (>80, 50-80, <50 puts 80 and 50 in 'mild').", ev="video"),
              dict(k="source", t="Posterior tongue tie: the person CAN stick the tongue out but CANNOT elevate it, so it is often missed ('they can stick their tongue out, they're fine'). Without elevation the tongue can't spread the palate → narrow, vaulted palate and poor rest posture.", ev="video")],
    src=["OPE:52:27-54:52"]))

section(M, S(h="Dentition and occlusion",
    visual="occlusion",
    body=["Reference point: the **upper and lower FIRST MOLARS**. **Class I** (normal): the cusp of the upper first molar fits into the groove of the lower first molar. **Class II** (often called an 'overbite', retrognathic): the upper first molar sits FORWARD relative to the lower; the lower jaw appears retruded, the upper teeth protruded. **Class III**: the upper first molar sits BEHIND the lower; the lower jaw appears prominent/protruded."],
    table=dict(head=["Term", "Meaning in the video"], rows=[
        ["Open bite", "Top and bottom teeth don't come together (often front or lateral; tongue thrust, thumb sucking, pacifier)"],
        ["Overjet", "HORIZONTAL distance between upper and lower front teeth is too great ('bucky beaver teeth'; what people often call an overbite)"],
        ["Overbite", "Top teeth come too far down over the bottom teeth: VERTICAL overlap"],
        ["Crossbite", "Part of the upper teeth sits inside the lower teeth; unilateral, bilateral or anterior"]]),
    src=["OPE:54:40-58:07"]))

section(M, S(h="Hard palate, rugae, soft palate, tonsils",
    body=["Hard palate: shape and height (narrow, wide, shallow, vaulted); width relative to the tongue; integrity (clefts, fistulas, lesions); symmetry; rugae. Functional check: can the tongue reach the alveolar ridge/palate, suction, manipulate a bolus; /t, d, n, l/. A narrow or high-arched palate can restrict tongue movement and increase anterior tongue thrust. Pictures shown: **torus palatinus** (bony protuberance: 'we are not worried about that'), a narrow vaulted palate ('chicken or egg': thumb sucking/pacifier vs tongue tie), defined rugae, a fistula.",
          "**Rugae:** children show defined rugae; in adults with proper tongue rest posture the area behind the upper teeth should feel smooth. Defined rugae in an adult suggest the tongue isn't elevating there.",
          "Soft palate (velum): resting height and symmetry; scarring; sustained vowel 'ah'; elevation to the posterior pharyngeal wall. Reduced or asymmetrical elevation → hypernasality, nasal emission, weak pressure for plosives, compromised swallowing. Adequate isolated elevation but inconsistency in connected speech → coordination or fatigue.",
          "Tonsils should sit just within the tonsil pillars, not 'kissing'. Use a **grading system** so you can compare later (e.g., 'used to be a 2, now a 4'). If you cannot see the soft palate at all, suspect airway obstruction."],
    callouts=[dict(k="textbook", t="Textbook disagrees in emphasis about rugae: it links prominent rugae to a narrow/low palate, a large tongue, and tongue thrust. Both sources connect rugae to tongue-palate relationships.", ev="textbook")],
    src=["OPE:58:07-1:07:37", "TB6:PDF p. 182"]))

section(M, S(h="Submucous cleft palate",
    body=["Often missed because **the mucosa is intact**. The **classic triad**: (1) **bifid (split) uvula**; (2) **zona pellucida**, a translucent midline zone in the soft palate; (3) a **palpable notch or groove at the posterior hard palate**. These indicate possible VPI: hypernasality, nasal emission, compensatory articulation (glottal stops, pharyngeal substitutions).",
          "**A bifid uvula alone is not diagnostic**; two or more markers increase suspicion, and consistent hypernasality or nasal emission supports it. **Therapy alone cannot correct anatomical deficits**; refer to craniofacial/ENT (and feeding/nutrition if needed)."],
    callouts=[dict(k="textbook", t="Textbook color cue: a whitish color along the border of the hard and soft palate is a symptom of a submucosal cleft.", ev="textbook")],
    src=["OPE:1:07:37-1:10:23", "TB6:PDF p. 181"]))

section(M, S(h="DDK interpretation",
    visual="ddk",
    body=["DDK gives insight into motor planning, coordination and neuromuscular integrity, **not just speed**: observe accuracy, rhythm, consistency and coordination in addition to rate.",
          "**AMR** (alternating motion rate): repeat one syllable quickly on one breath (puh-puh, tuh-tuh, kuh-kuh): bilabial (p), alveolar (t) and posterior (k) control. **SMR** (sequential motion rate): repeat puh-tuh-kuh; children can say 'buttercup'."],
    table=dict(head=["Pattern", "Presenter's interpretation"], rows=[
        ["Slow, imprecise AMRs AND SMRs", "Possible dysarthria or weakness"],
        ["Adequate AMRs but poor SMRs", "Motor planning / sequencing (programming) deficit; may be childhood apraxia of speech"],
        ["Irregular rhythm or breakdown with fatigue", "Neuromuscular involvement"],
        ["Equal stress or segmentation", "Impaired temporal coordination"]]),
    callouts=[dict(k="source", t="Referrals: neurology (new, progressive or asymmetrical deficits); OT/PT (global motor coordination or tone); further motor speech evaluation to differentiate dysarthria from apraxia.", ev="video")],
    src=["OPE:1:10:23-1:15:07"]))

section(M, S(h="Form and function: documentation that interprets",
    body=["**Structure is the chicken (anatomy, alignment, integrity); function is the egg (movement, coordination, pressure, timing).** The key question is not 'what do I see?' but **'how does what I see impact what the client can do?'** A high narrow palate doesn't matter unless it restricts tongue movement, which then affects resonance or swallowing.",
          "Weak: 'high-arched palate.' Strong: 'high-arched narrow palate limiting tongue-palate contact, contributing to distorted alveolar sounds and reduced bolus control.' That is the difference between an **observation** and a **clinical interpretation**; other professionals need us to explain impact, not name anatomy."],
    src=["OPE:1:15:07-1:17:55"]))

# items
num("m14-tr-01", "m14-tongue",
   "TRMR: maximal interincisal opening with the tongue down = 40 mm; opening with the tongue tip on the spot = 18 mm. Compute the ratio.",
   [("TRMR", "%", 45, 0.5)],
   "(tongue-up ÷ maximum) × 100.", "18 ÷ 40 × 100 = 45% → below 50% = moderate-to-severe restriction in the presenter's categories.",
   ["OPE:52:27-54:08"], ev="video")

mc("m14-tr-02", "m14-tongue",
   "A client's TRMR is 65%. In the presenter's categories, this indicates:",
   [("Mild restriction", "Correct: 50-80%."), ("Typical tongue mobility", "Typical is greater than 80%."),
    ("Moderate to severe restriction", "Less than 50%."), ("A posterior tongue tie by definition", "TRMR categorizes mobility; it doesn't define tie location.")],
   0, ">80 / 50-80 / <50.", "OPE 53:16-54:08.", ["OPE:53:16-54:08"], ev="video", style=("number",))

mc("m14-tr-03", "m14-tongue",
   "Why are posterior tongue ties often missed, according to the video?",
   [("The person can stick the tongue out but cannot elevate it, and protrusion is taken as proof of normal mobility", "Correct."),
    ("They are visible only with a TRMR below 80%", "Not the reason given."),
    ("They occur only in adults", "Not stated."),
    ("They cause hypernasality that masks them", "Not stated.")],
   0, "Protrusion vs elevation.", "OPE 54:08-54:52.", ["OPE:54:08-54:52"], ev="video")

tf("m14-tr-04", "m14-tongue",
   "The TRMR evaluates how well the tongue moves, which the presenter considers more clinically meaningful than focusing on how the frenum looks.",
   True, "False edit: 'TRMR grades frenum appearance'.", "Function vs appearance.", "OPE 52:27-53:16.", ["OPE:52:27-53:16"], ev="video")

mc("m14-te-01", "m14-teeth",
   "Which molar relationship defines a Class II occlusion in the video?",
   [("The upper first molar sits forward relative to the lower first molar; the lower jaw appears retruded", "Correct."),
    ("The cusp of the upper first molar fits into the groove of the lower first molar", "Class I."),
    ("The upper first molar sits behind the lower first molar; the lower jaw appears prominent", "Class III."),
    ("The top and bottom front teeth don't come together", "Open bite.")],
   0, "Reference = first molars.", "OPE 55:39-56:37.", ["OPE:55:39-56:37"], ev="video", style=("sibling",))

tf("m14-te-02", "m14-teeth",
   "In the video, overjet is the vertical overlap of the upper front teeth over the lower front teeth.",
   False, "Overjet = HORIZONTAL distance; OVERBITE = vertical overlap.", "Jet = out; bite = down.", "OPE 56:37-57:27.", ["OPE:56:37-57:27"], ev="video", style=("sibling",))

hotspot("m14-te-03", "m14-teeth",
   "Click the panel that shows a Class III molar relationship.",
   "occlusion", "c3",
   "Where is the upper first molar relative to the lower?",
   "Class III: the upper first molar sits BEHIND the lower first molar, so the lower jaw looks protruded.",
   ["OPE:55:39-56:37"], ev="video", zone_why={"c1": "Class I: upper cusp in the lower groove.", "c2": "Class II: upper molar forward."})

mc("m14-pa-01", "m14-palate",
   "In an adult, the presenter says well-defined rugae behind the upper teeth suggest:",
   [("The tongue is not habitually elevating to that area", "Correct: with proper tongue rest posture, the area should feel smooth in adults."),
    ("A submucous cleft", "Not the rugae interpretation."),
    ("Normal adult anatomy", "She says defined rugae are expected in children; adults with proper rest posture should be smooth."),
    ("A torus palatinus", "A torus is a bony protuberance.")],
   0, "Children vs adults.", "OPE 1:02:03-1:02:54.", ["OPE:1:02:03-1:02:54"], ev="video", style=("scenario",))

mc("m14-pa-02", "m14-palate",
   "Which palate finding did the presenter say 'we are not worried about'?",
   [("Torus palatinus", "Correct (in her example)."), ("A fistula", "A red flag."),
    ("A narrow, vaulted palate", "Linked to tongue posture and habits."), ("A cleft", "Red flag.")],
   0, "A bony protuberance.", "OPE 1:01:04-1:02:03. This is about her example, not a blanket rule for every client.", ["OPE:1:01:04-1:02:03"], ev="video")

tf("m14-pa-03", "m14-palate",
   "Tonsils in the video should be slightly visible within the tonsil pillars rather than 'kissing,' and a grading system helps document change over time.",
   True, "False edit: 'kissing tonsils are the typical appearance'.", "Her 'used to be a 2, now a 4' example.", "OPE 1:06:41-1:07:37.", ["OPE:1:06:41-1:07:37"], ev="video")

multi("m14-smc-01", "m14-smc",
   "Select ALL markers of the classic submucous cleft triad.",
   [("Bifid uvula", "Marker 1."), ("Zona pellucida (translucent midline zone of the soft palate)", "Marker 2."),
    ("Palpable notch at the posterior hard palate", "Marker 3."), ("Enlarged tonsils", "Not part of the triad."),
    ("Prominent rugae", "Not part of the triad.")],
   [0, 1, 2], "Uvula, soft-palate midline, posterior hard palate.", "OPE 1:07:37-1:08:33.", ["OPE:1:07:37-1:08:33"], ev="video", style=("classify",))

tf("m14-smc-02", "m14-smc",
   "A bifid uvula alone is diagnostic of a submucous cleft palate.",
   False, "A bifid uvula alone is NOT diagnostic; two or more markers increase suspicion, and functional signs support it.", "Count the markers.", "OPE 1:09:24-1:10:23.", ["OPE:1:09:24-1:10:23"], ev="video", style=("absolute",))

mc("m14-smc-03", "m14-smc",
   "Why is a submucous cleft often missed?",
   [("The mucosa over the defect is intact", "Correct."), ("It causes no speech symptoms", "It can cause hypernasality, nasal emission, compensatory articulation."),
    ("It is visible only on X-ray", "The triad can be observed/palpated during an OPE."), ("It occurs only with a cleft lip", "Not stated.")],
   0, "'Submucous' = under the mucosa.", "OPE 1:07:37.", ["OPE:1:07:37"], ev="video")

tf("m14-smc-04", "m14-smc",
   "According to the video, speech therapy alone can correct the anatomical deficit of a submucous cleft palate.",
   False, "Therapy alone CAN'T correct anatomical deficits; surgical/structural evaluation is essential (refer craniofacial/ENT).", "Structure vs function.", "OPE 1:09:24.", ["OPE:1:09:24"], ev="video", style=("antonym",))

hotspot("m14-dia-01", "m14-diagram",
   "Click the structure where a zona pellucida (translucent midline zone) would be observed.",
   "oral", "softpalate",
   "It is part of the submucous cleft triad, in the velum.",
   "The zona pellucida is a translucent midline zone of the SOFT palate. The bifid uvula and the posterior hard-palate notch are the other two markers.",
   ["OPE:1:08:33"], ev="video", zone_why={"uvula": "The uvula shows the bifid marker, not the translucent zone.", "hardpalate": "The hard palate holds the posterior notch.", "rugae": "Rugae are ridges behind the upper teeth."})

hotspot("m14-dia-02", "m14-diagram",
   "Click the rugae.",
   "oral", "rugae",
   "Ridges just behind the upper front teeth.",
   "Rugae are the ridges on the anterior hard palate behind the upper front teeth. Defined rugae in an adult suggest the tongue isn't elevating there (presenter's observation).",
   ["OPE:1:02:03", "TB6:PDF p. 181"], ev="video", zone_why={"hardpalate": "Rugae sit on the front of the hard palate; click the ridged area.", "alveolar": "Close: the alveolar ridge is just behind the teeth; the rugae are the ridges behind it."})

hotspot("m14-dia-03", "m14-diagram",
   "Click where you would look to see whether a client's tonsils are 'kissing'.",
   "oral", "tonsil",
   "Between the pillars at the back of the mouth.",
   "The palatine tonsils sit between the faucial pillars; the video grades them and flags 'kissing' tonsils.",
   ["OPE:1:06:41"], ev="video")

mc("m14-ddk-01", "m14-ddk",
   "A child produces AMRs adequately but SMRs poorly. According to the video, this pattern suggests:",
   [("A motor planning/sequencing deficit (possibly childhood apraxia of speech)", "Correct."),
    ("Dysarthria or weakness", "That is slow, imprecise AMRs AND SMRs."),
    ("Neuromuscular involvement with fatigue", "Irregular rhythm or breakdown with fatigue."),
    ("Normal development", "The discrepancy is the red flag.")],
   0, "One task is fine; the sequencing one isn't.", "OPE 1:11:20-1:13:12.", ["OPE:1:11:20-1:13:12"], ev="video", style=("scenario",))

tf("m14-ddk-02", "m14-ddk",
   "The video says DDK tasks give insight into motor planning, coordination and neuromuscular integrity, not just speed.",
   True, "False edit: 'DDK measures speed only'.", "Accuracy, rhythm, consistency, coordination.", "OPE 1:10:23-1:11:20.", ["OPE:1:10:23-1:11:20"], ev="video")

match("m14-ddk-03", "m14-ddk",
   "Match each DDK pattern to the presenter's interpretation.",
   [("Slow, imprecise AMRs and SMRs", "Possible dysarthria or weakness"),
    ("Adequate AMRs, poor SMRs", "Motor planning or sequencing deficit"),
    ("Irregular rhythm or fatigue breakdown", "Neuromuscular involvement"),
    ("Equal stress or segmentation", "Impaired temporal coordination")],
   "Four patterns from the interpretation slide.", "OPE 1:12:19-1:13:12.", ["OPE:1:12:19-1:13:12"], ev="video")

mc("m14-doc-01", "m14-document",
   "Which documentation best reflects the video's 'clinical interpretation' standard?",
   [("High-arched narrow palate limiting tongue-palate contact, contributing to distorted alveolar sounds and reduced bolus control", "Correct: structure → function → impact."),
    ("High-arched palate noted", "Names anatomy only (an observation)."),
    ("Palate abnormal; refer", "Vague."),
    ("Palate WNL except for high arch", "Doesn't explain impact.")],
   0, "Observation vs interpretation.", "OPE 1:16:05-1:16:58.", ["OPE:1:16:05-1:16:58"], ev="video")

tf("m14-doc-02", "m14-document",
   "In the video's chicken-and-egg analogy, structure is the egg and function is the chicken.",
   False, "Structure = the CHICKEN (anatomy, alignment, integrity); function = the EGG (movement, coordination, pressure, timing).", "Swap check.", "OPE 1:15:07.", ["OPE:1:15:07"], ev="video", style=("sibling",))
