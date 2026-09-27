/* Three original, fixed Exam 1 forms. Kept separate from L.ITEMS and chapter drills. */
(function(root){
'use strict';var L=root.L,D=L.EXAM1_DATA;
L.SOURCES['OM-L1']={t:'Lecture 1: current Overview of Audiologic Rehabilitation deck',f:'POWERPOINTS/LECTURE 1/Lecture 1 Student copy, Overview of Audiologic Rehab.pptx',tier:1,slide:true};
L.SOURCES['OM-L2']={t:'Lecture 2: Causes of Hearing Loss, completed 76-slide deck',f:'POWERPOINTS/LECTURE 2/LECTURE 2 Causes of HL Completed.pptx',tier:1,slide:true};
L.SOURCES['OM-L3F']={t:'Lecture 3: final classroom-corrected 82-slide deck',f:'POWERPOINTS/LECTURE 3/Lecture 3 Hearing Aids - Textbook Filled (12 unresolved).pptx',tier:1,slide:true};
L.SOURCES['OM-GUEST']={t:'Dr. Lee: first guest lecture, 2026',f:'POWERPOINTS/GUEST LECTURE 9:15 AND 9:17 /Peds AR Guest Lec 2026.pptx',tier:1,slide:true};
var label=L.srcLabel;L.srcLabel=function(code){var m=/^OM-(L1|L2|L3F|GUEST)-(\d+)$/.exec(code);return m?({'L1':'Lecture 1','L2':'Lecture 2 (completed)','L3F':'Lecture 3 (final)','GUEST':'Dr. Lee first lecture'}[m[1]]+' slide '+m[2]):label(code);};
D.originalForms=[
  {
    "name": "A",
    "seed": 927101,
    "objectives": [
      {
        "id": "om1.A.01",
        "chapter": "foundations",
        "c": "core-care",
        "t": "mc",
        "q": "A child can repeat a direction in quiet but has stopped joining group activities. Which CORE area captures the change in group involvement?",
        "o": [
          "Communication status",
          "Overall participation",
          "Related personal factors",
          "Environmental factors"
        ],
        "a": 1,
        "x": "Overall participation includes social and educational involvement. Repeating a direction is communication performance. Personal attributes belong under related factors, and the setting belongs under environmental factors.",
        "s": [
          "OM-L1-24",
          "OM-L1-25",
          "OM-L1-26",
          "OM-L1-27"
        ],
        "difficulty": "application",
        "family": "assessment distinction",
        "variant": "functional activity versus participation",
        "trapTargets": [
          "communication equals participation"
        ],
        "evidence": [
          "L1 slide 24",
          "L1 slide 25",
          "L1 slide 26",
          "L1 slide 27"
        ]
      },
      {
        "id": "om1.A.02",
        "chapter": "foundations",
        "c": "core-care",
        "t": "mc",
        "q": "An adolescent avoids wearing a working hearing aid because classmates might notice it. Which CARE component most directly addresses the stated barrier?",
        "o": [
          "Audibility and amplification",
          "Remediate communication activities",
          "Counseling and psychosocial",
          "Environmental coordination"
        ],
        "a": 2,
        "x": "The stated barrier is the adolescent’s attitude and acceptance, which counseling addresses. More gain does not address that concern. Communication training and changes to the setting may help other needs, but neither directly addresses this one.",
        "s": [
          "OM-L1-28",
          "OM-L1-29",
          "OM-L1-30",
          "OM-L1-31"
        ],
        "difficulty": "application",
        "family": "management selection",
        "variant": "acceptance despite device function",
        "trapTargets": [
          "all AR barriers require more amplification"
        ],
        "evidence": [
          "L1 slide 28",
          "L1 slide 29",
          "L1 slide 30",
          "L1 slide 31"
        ]
      },
      {
        "id": "om1.A.03",
        "chapter": "foundations",
        "c": "ar-definition",
        "t": "tf",
        "q": "A child’s hearing thresholds remain unchanged, but improved communication lets the child return to a favorite group activity. This can represent a successful AR outcome.",
        "a": true,
        "x": "AR aims to improve communication, activity and participation. Improvement does not require the underlying hearing thresholds to return to normal.",
        "s": [
          "OM-L1-3"
        ],
        "difficulty": "application",
        "family": "outcome implication",
        "variant": "stable sensitivity with improved participation",
        "trapTargets": [
          "rehabilitation must normalize thresholds"
        ],
        "evidence": [
          "L1 slide 3"
        ]
      },
      {
        "id": "om1.A.04",
        "chapter": "foundations",
        "c": "contemporary",
        "t": "mc",
        "q": "Two AR approaches have comparable research support. One fits the family’s goals and daily routine better. Which factor supports choosing that approach?",
        "o": [
          "The family’s goals and preferences",
          "The clinician’s prior experience",
          "The size of the published study",
          "The duration of the treatment"
        ],
        "a": 0,
        "x": "When research support is comparable, fit with patient goals and preferences is a relevant part of evidence-based practice. Clinical experience and the study evidence also matter, but neither by itself answers the stated difference between the two otherwise supported choices.",
        "s": [
          "OM-L1-34"
        ],
        "difficulty": "application",
        "family": "evidence-based decision",
        "variant": "equivalent evidence different preferences",
        "trapTargets": [
          "research alone determines care"
        ],
        "evidence": [
          "L1 slide 34"
        ]
      },
      {
        "id": "om1.A.05",
        "chapter": "audiograms",
        "c": "pta-degree",
        "t": "mc",
        "q": "AC thresholds are 35 dB HL at 500 Hz, 35 at 1000 Hz, 50 at 2000 Hz and 80 at 4000 Hz. Which value should be used for the three-frequency PTA?",
        "o": [
          "40 dB HL",
          "50 dB HL",
          "60 dB HL",
          "80 dB HL"
        ],
        "a": 0,
        "x": "PTA averages 500, 1000 and 2000 Hz: (35 + 35 + 50) / 3 = 40 dB HL. Including 4000 Hz, choosing the poorest threshold or rounding to a more severe category changes the prescribed calculation.",
        "s": [
          "OM-L1-16"
        ],
        "difficulty": "application",
        "family": "calculation and selection",
        "variant": "exclude severe high-frequency threshold",
        "trapTargets": [
          "PTA includes 4000 Hz",
          "poorest threshold determines PTA"
        ],
        "evidence": [
          "L1 slide 16"
        ]
      },
      {
        "id": "om1.A.06",
        "chapter": "audiograms",
        "c": "configuration",
        "t": "tf",
        "q": "Knowing that a hearing loss slopes toward the high frequencies is sufficient to classify its type as sensorineural.",
        "a": false,
        "x": "Sloping describes configuration, or shape across frequency. Type describes the location of the disorder and requires information about the conductive and sensorineural pathways. A shape alone does not establish type.",
        "s": [
          "OM-L1-17",
          "OM-L1-18"
        ],
        "difficulty": "application",
        "family": "classification distinction",
        "variant": "shape cannot locate lesion",
        "trapTargets": [
          "configuration establishes type"
        ],
        "evidence": [
          "L1 slide 17",
          "L1 slide 18"
        ]
      },
      {
        "id": "om1.A.07",
        "chapter": "heredity",
        "c": "inheritance",
        "t": "mc",
        "q": "For a particular recessive hearing-loss variant, a child inherits one affected allele and one normal allele. Which description follows the class model?",
        "o": [
          "Affected with the disorder",
          "Unaffected carrier",
          "Free of the variant",
          "Mitochondrial carrier"
        ],
        "a": 1,
        "x": "One affected recessive allele with one normal allele makes an unaffected carrier in the taught model. Two affected recessive alleles are needed for the disorder. The variant is still present, and recessive nuclear inheritance is not mitochondrial inheritance.",
        "s": [
          "OM-L2-15",
          "OM-L2-16"
        ],
        "difficulty": "application",
        "family": "inheritance interpretation",
        "variant": "child genotype rather than parental recurrence",
        "trapTargets": [
          "carrier equals affected",
          "unaffected means no variant"
        ],
        "evidence": [
          "L2 slide 15",
          "L2 slide 16"
        ]
      },
      {
        "id": "om1.A.08",
        "chapter": "heredity",
        "c": "inheritance",
        "t": "mc",
        "q": "A father is heterozygous for a dominant hearing-loss variant. The mother does not carry it. Their child inherits the father’s normal allele. Which conclusion fits this inheritance model?",
        "o": [
          "Affected heterozygote",
          "Unaffected recessive carrier",
          "Unaffected noncarrier",
          "Affected homozygote"
        ],
        "a": 2,
        "x": "The child received a normal allele from each parent and did not inherit this dominant variant. A heterozygote has one affected dominant allele; a homozygote has two identical alleles. The known transmitted alleles do not describe a hidden recessive carrier of this variant.",
        "s": [
          "OM-L2-12",
          "OM-L2-13"
        ],
        "difficulty": "application",
        "family": "inheritance interpretation",
        "variant": "known transmitted allele overrides family risk",
        "trapTargets": [
          "50 percent risk guarantees carrier status"
        ],
        "evidence": [
          "L2 slide 12",
          "L2 slide 13"
        ]
      },
      {
        "id": "om1.A.09",
        "chapter": "heredity",
        "c": "inheritance",
        "t": "tf",
        "q": "Both parents carry mitochondrial variants associated with hearing loss. Their child receives mitochondrial DNA from both parents.",
        "a": false,
        "x": "Mitochondrial DNA is inherited from the mother. A father’s mitochondrial variant does not become a second mitochondrial contribution to the child, even when both parents are affected.",
        "s": [
          "OM-L2-19"
        ],
        "difficulty": "application",
        "family": "transmission chain",
        "variant": "both parents affected without biparental mitochondrial inheritance",
        "trapTargets": [
          "half of nuclear genes means half of mitochondrial genes"
        ],
        "evidence": [
          "L2 slide 19"
        ]
      },
      {
        "id": "om1.A.10",
        "chapter": "heredity",
        "c": "endo-exo",
        "t": "mc",
        "q": "A hearing loss begins after spoken language is established. Testing identifies a hereditary cause. Which pair describes its onset and cause?",
        "o": [
          "Congenital and endogenous",
          "Acquired and exogenous",
          "Congenital and exogenous",
          "Acquired and endogenous"
        ],
        "a": 3,
        "x": "Acquired describes onset after speech and language development. Endogenous describes a hereditary or genetic cause. Onset and cause are separate classifications, so a later onset does not make a genetic loss exogenous.",
        "s": [
          "OM-L2-3",
          "OM-L2-4"
        ],
        "difficulty": "application",
        "family": "independent classifications",
        "variant": "later hereditary onset",
        "trapTargets": [
          "acquired equals environmental"
        ],
        "evidence": [
          "L2 slide 3",
          "L2 slide 4"
        ]
      },
      {
        "id": "om1.A.11",
        "chapter": "heredity",
        "c": "mondini",
        "t": "mc",
        "q": "Imaging shows a malformed, partly developed cochlea rather than complete absence of the labyrinth. Which description fits?",
        "o": [
          "Michel aplasia with a conductive loss",
          "Mondini dysplasia with a sensorineural loss",
          "Michel aplasia with a mixed loss",
          "Mondini dysplasia with a conductive loss"
        ],
        "a": 1,
        "x": "Mondini dysplasia describes a partially developed cochlea. Its cochlear involvement produces sensorineural hearing loss. Michel aplasia refers to complete labyrinthine and cochlear absence, not a partly formed structure.",
        "s": [
          "OM-L2-20"
        ],
        "difficulty": "application",
        "family": "anatomy and type",
        "variant": "partial versus absent inner-ear structure",
        "trapTargets": [
          "aplasia versus dysplasia",
          "malformation always conductive"
        ],
        "evidence": [
          "L2 slide 20"
        ]
      },
      {
        "id": "om1.A.12",
        "chapter": "heredity",
        "c": "connexin",
        "t": "mc",
        "q": "Which combination fits Connexin 26 hearing loss and explains why a severe loss can still have a favorable cochlear-implant outlook?",
        "o": [
          "Impaired potassium exchange with intact neural tissue",
          "Intact potassium exchange with deficient neural tissue",
          "Impaired potassium exchange with deficient neural tissue",
          "Intact potassium exchange with intact neural tissue"
        ],
        "a": 0,
        "x": "Connexin 26 affects the gap-junction proteins involved in potassium exchange in the organ of Corti. The lecture links favorable implant outcomes to intact underlying auditory neural tissue. The loss therefore does not require absent or deficient neural tissue.",
        "s": [
          "OM-L2-21",
          "OM-L2-22"
        ],
        "difficulty": "application",
        "family": "mechanism and prognosis",
        "variant": "combine site of dysfunction with preserved treatment substrate",
        "trapTargets": [
          "cochlear sensory loss equals neural destruction"
        ],
        "evidence": [
          "L2 slide 21",
          "L2 slide 22"
        ]
      },
      {
        "id": "om1.A.13",
        "chapter": "causes",
        "c": "anoxia",
        "t": "mc",
        "q": "A baby has a history of anoxia. Which AC pattern is consistent with the frequency pattern described in class?",
        "o": [
          "15 dB HL at 500 Hz and 75 at 4000 Hz",
          "75 dB HL at 500 Hz and 15 at 4000 Hz",
          "15 dB HL at 500 Hz and 15 at 4000 Hz",
          "75 dB HL at 500 Hz and 75 at 4000 Hz"
        ],
        "a": 0,
        "x": "The taught anoxia pattern preserves low-frequency hearing but has more severe high-frequency loss. The other options describe a rising loss, normal sensitivity at both frequencies, or a flat severe loss.",
        "s": [
          "OM-L2-34"
        ],
        "difficulty": "application",
        "family": "pattern interpretation",
        "variant": "numerical low versus high-frequency contrast",
        "trapTargets": [
          "response to low sounds excludes high-frequency loss"
        ],
        "evidence": [
          "L2 slide 34"
        ]
      },
      {
        "id": "om1.A.14",
        "chapter": "causes",
        "c": "cmv",
        "t": "tf",
        "q": "One child with CMV has stable unilateral SNHL and another has progressive bilateral SNHL. These different courses rule out CMV as the cause in one of them.",
        "a": false,
        "x": "CMV-related hearing loss can be unilateral or bilateral and stable, fluctuating or progressive. Different hearing profiles do not by themselves contradict the same infectious cause.",
        "s": [
          "OM-L2-26"
        ],
        "difficulty": "application",
        "family": "etiology consistency",
        "variant": "different patients same infection",
        "trapTargets": [
          "one cause requires identical course"
        ],
        "evidence": [
          "L2 slide 26"
        ]
      },
      {
        "id": "om1.A.15",
        "chapter": "causes",
        "c": "syphilis",
        "t": "mc",
        "q": "A child with congenital syphilis initially had normal hearing. Which later record fits its taught hearing-loss course?",
        "o": [
          "50 dB HL, then 30 dB HL",
          "30 dB HL, then 60 dB HL",
          "15 dB HL, then 15 dB HL",
          "60 dB HL, then 15 dB HL"
        ],
        "a": 1,
        "x": "The lecture describes late-onset, progressive SNHL. A change from 30 to 60 dB HL shows worsening sensitivity after onset. Falling thresholds represent improvement, while repeated normal thresholds show no measured loss.",
        "s": [
          "OM-L2-29"
        ],
        "difficulty": "application",
        "family": "course interpretation",
        "variant": "serial threshold progression",
        "trapTargets": [
          "higher dB threshold means better hearing"
        ],
        "evidence": [
          "L2 slide 29"
        ]
      },
      {
        "id": "om1.A.16",
        "chapter": "causes",
        "c": "bilirubin",
        "t": "mc",
        "q": "A premature infant develops hearing difficulty after bilirubin toxicity causes brain injury. Which hearing disorder is specifically associated with this complication in Lecture 2?",
        "o": [
          "Auditory neuropathy spectrum disorder",
          "Sensorineural loss confined to the cochlea",
          "Conductive loss from middle-ear disease",
          "Mixed loss from cochlear and middle-ear disease"
        ],
        "a": 0,
        "x": "Slide 39 specifically associates significant hyperbilirubinemia and kernicterus with ANSD. A cochlea-only label omits the named neural disorder. Conductive and mixed alternatives require a middle-ear component that the bilirubin complication does not establish.",
        "s": [
          "OM-L2-38",
          "OM-L2-39"
        ],
        "difficulty": "application",
        "family": "cause and disorder",
        "variant": "toxic neural complication",
        "trapTargets": [
          "all infant hearing losses are cochlear"
        ],
        "evidence": [
          "L2 slide 38",
          "L2 slide 39"
        ]
      },
      {
        "id": "om1.A.17",
        "chapter": "causes",
        "c": "rh",
        "t": "mc",
        "q": "RhoGAM is given after an Rh-negative mother delivers an Rh-positive infant. Which process does it prevent directly in the class explanation?",
        "o": [
          "Maternal antibody formation",
          "Fetal bilirubin accumulation",
          "Fetal red-cell production",
          "Maternal bilirubin detoxification"
        ],
        "a": 0,
        "x": "RhoGAM prevents the Rh-negative mother from forming antibodies against Rh-positive fetal blood. Phototherapy or exchange transfusion addresses excessive neonatal bilirubin. RhoGAM does not directly replace red-cell production or liver detoxification.",
        "s": [
          "OM-L2-32",
          "OM-L2-39"
        ],
        "difficulty": "application",
        "family": "prevention mechanism",
        "variant": "treatment distinguishes immune from infectious cause",
        "trapTargets": [
          "Rh disease is an infection"
        ],
        "evidence": [
          "L2 slide 32"
        ]
      },
      {
        "id": "om1.A.18",
        "chapter": "causes",
        "c": "postnatal-list",
        "t": "mc",
        "q": "A child has hearing loss after mumps and later receives an ototoxic drug. Both injuries are described as sensorineural. Which classification follows from those two causes alone?",
        "o": [
          "Conductive",
          "Mixed",
          "Sensorineural",
          "Normal"
        ],
        "a": 2,
        "x": "Two sensorineural causes still produce a sensorineural classification. Mixed loss requires a conductive component as well as a sensorineural component, not merely two causes. Lecture 2 includes both mumps and ototoxins among SNHL causes.",
        "s": [
          "OM-L2-37",
          "OM-L1-18"
        ],
        "difficulty": "application",
        "family": "combine causes",
        "variant": "two inner-ear causes do not imply mixed",
        "trapTargets": [
          "two causes equals mixed"
        ],
        "evidence": [
          "L2 slide 37",
          "L1 slide 18"
        ]
      },
      {
        "id": "om1.A.19",
        "chapter": "syndromes",
        "c": "apert",
        "t": "mc",
        "q": "A child with Apert syndrome has canal stenosis and malformed ossicles. Which finding would fit those abnormalities without additional inner-ear involvement?",
        "o": [
          "Elevated AC with normal BC",
          "Elevated AC and BC without a gap",
          "Normal AC with elevated BC",
          "Normal AC and BC without a gap"
        ],
        "a": 0,
        "x": "Canal and ossicular abnormalities impair sound conduction. With no inner-ear involvement, BC remains normal while AC is elevated. The other patterns suggest sensorineural loss, an inconsistent AC/BC relationship, or normal sensitivity.",
        "s": [
          "OM-L2-41",
          "OM-L1-18"
        ],
        "difficulty": "application",
        "family": "syndrome mechanism",
        "variant": "specific structures predict pathway findings",
        "trapTargets": [
          "syndrome label always means sensorineural"
        ],
        "evidence": [
          "L2 slide 41",
          "L1 slide 18"
        ]
      },
      {
        "id": "om1.A.20",
        "chapter": "syndromes",
        "c": "bor",
        "t": "tf",
        "q": "A child with branchio-oto-renal spectrum disorder can still have sensorineural hearing loss after a middle-ear problem is successfully treated.",
        "a": true,
        "x": "BOR can involve the external, middle and inner ear and can produce conductive, sensorineural or mixed loss. Removing a conductive problem does not establish that the cochlea is normal.",
        "s": [
          "OM-L2-43"
        ],
        "difficulty": "application",
        "family": "syndrome anatomy",
        "variant": "residual component after treatment",
        "trapTargets": [
          "treating one ear region removes every component"
        ],
        "evidence": [
          "L2 slide 43"
        ]
      },
      {
        "id": "om1.A.21",
        "chapter": "syndromes",
        "c": "charge",
        "t": "mc",
        "q": "A child has coloboma, choanal atresia and short, wide pinnae. Which additional finding helps explain why hearing loss in this syndrome is not limited to a conductive type?",
        "o": [
          "Reduced pinna cartilage",
          "Deficient auditory nerves",
          "Small or absent earlobes",
          "Eustachian tube dysfunction"
        ],
        "a": 1,
        "x": "These physical clues identify CHARGE. Absent or deficient auditory nerves can contribute a sensorineural component. Pinna and earlobe abnormalities are external, and Eustachian tube dysfunction is a middle-ear mechanism.",
        "s": [
          "OM-L2-45",
          "OM-L2-46"
        ],
        "difficulty": "application",
        "family": "syndrome cross-system reasoning",
        "variant": "nonconductive site among associated anomalies",
        "trapTargets": [
          "external ear appearance fully predicts type"
        ],
        "evidence": [
          "L2 slide 45",
          "L2 slide 46"
        ]
      },
      {
        "id": "om1.A.22",
        "chapter": "syndromes",
        "c": "fas",
        "t": "mc",
        "q": "A child with a smooth philtrum and thin upper lip has persistent listening difficulties after middle-ear disease resolves. Which other involvement is listed for this condition?",
        "o": [
          "Sensorineural or central hearing loss",
          "Thyroid goiter with high-frequency loss",
          "Retinal degeneration with deafness",
          "Renal malformation with hearing loss"
        ],
        "a": 0,
        "x": "The facial clues fit fetal alcohol syndrome. Although conductive loss from middle-ear disorders is emphasized, the slide also lists sensorineural and central hearing loss. Goiter points toward Pendred, progressive visual loss toward Usher, and renal involvement toward BOR.",
        "s": [
          "OM-L2-55",
          "OM-L2-72",
          "OM-L2-76",
          "OM-L2-43"
        ],
        "difficulty": "application",
        "family": "syndrome residual risk",
        "variant": "beyond primary conductive association",
        "trapTargets": [
          "common loss type is the only possible type"
        ],
        "evidence": [
          "L2 slide 55",
          "L2 slide 72",
          "L2 slide 76",
          "L2 slide 43"
        ]
      },
      {
        "id": "om1.A.23",
        "chapter": "syndromes",
        "c": "jbs",
        "t": "mc",
        "q": "Two children have congenital SNHL. One has hypoplastic rims of the nose. The other has a white forelock and different-colored irises. Which pair best matches them, in that order?",
        "o": [
          "Johanson-Blizzard and Waardenburg",
          "Waardenburg and Johanson-Blizzard",
          "Cornelia de Lange and Pendred",
          "Pendred and Cornelia de Lange"
        ],
        "a": 0,
        "x": "Hypoplasia of the nasal rims points toward Johanson-Blizzard. White forelock and iris pigment differences point toward Waardenburg. Cornelia de Lange emphasizes synophrys and growth deficits; Pendred emphasizes thyroid goiter and inner-ear anomalies.",
        "s": [
          "OM-L2-60",
          "OM-L2-74",
          "OM-L2-48",
          "OM-L2-76"
        ],
        "difficulty": "application",
        "family": "paired syndrome discrimination",
        "variant": "same hearing association different visible clue",
        "trapTargets": [
          "shared SNHL means same syndrome"
        ],
        "evidence": [
          "L2 slide 60",
          "L2 slide 74",
          "L2 slide 48",
          "L2 slide 76"
        ]
      },
      {
        "id": "om1.A.24",
        "chapter": "syndromes",
        "c": "pierre",
        "t": "mc",
        "q": "A child with Pierre Robin sequence is being evaluated for upper-airway obstruction. Which feature in the taught sequence most directly creates that concern?",
        "o": [
          "Abnormal tongue position",
          "Low-set external ears",
          "Atresia of the ear canal",
          "A small external pinna"
        ],
        "a": 0,
        "x": "The small lower jaw displaces the tongue and can obstruct the upper airway. Low-set ears, canal atresia and other ear anomalies relate to the ear findings, not the tongue-related airway obstruction.",
        "s": [
          "OM-L2-62",
          "OM-L2-63",
          "OM-L2-64"
        ],
        "difficulty": "application",
        "family": "developmental order",
        "variant": "functional implication of tongue displacement",
        "trapTargets": [
          "ear anomaly explains airway obstruction"
        ],
        "evidence": [
          "L2 slides62-64; T09082026 opening discussion explicitly explains tongue falling backward and airway obstruction."
        ]
      },
      {
        "id": "om1.A.25",
        "chapter": "syndromes",
        "c": "usher",
        "t": "tf",
        "q": "A child with Usher syndrome develops worse visual difficulty while aided speech understanding remains stable. The stable speech result rules out progression of the syndrome.",
        "a": false,
        "x": "Usher affects both hearing and vision. Stable aided speech understanding describes auditory benefit; it does not rule out progressive visual loss. The separate systems must be considered independently.",
        "s": [
          "OM-L2-72"
        ],
        "difficulty": "application",
        "family": "independent system implications",
        "variant": "stable auditory benefit with visual progression",
        "trapTargets": [
          "hearing treatment controls entire syndrome"
        ],
        "evidence": [
          "L2 slide 72"
        ]
      },
      {
        "id": "om1.A.26",
        "chapter": "syndromes",
        "c": "stickler",
        "t": "mc",
        "q": "A child with Stickler syndrome has AC thresholds of 50 dB HL and BC thresholds of 15 dB HL. Which associated finding most directly accounts for this conductive pattern?",
        "o": [
          "Cleft palate",
          "Severe myopia",
          "Retinal detachment",
          "Early-onset arthritis"
        ],
        "a": 0,
        "x": "Stickler can include CHL associated with cleft palate and facial anomalies. Normal BC with elevated AC supports that conductive component. Myopia, retinal detachment and early arthritis are other features of Stickler, but they do not directly explain an air-bone gap.",
        "s": [
          "OM-L2-65",
          "OM-L1-18"
        ],
        "difficulty": "application",
        "family": "syndrome exception reasoning",
        "variant": "same syndrome features discriminate mechanism of measured gap",
        "trapTargets": [
          "all features of syndrome explain conductive component"
        ],
        "evidence": [
          "L2 slide 65; L1 slide18; T09082026 discusses cleft-palate/Eustachian-tube association."
        ]
      },
      {
        "id": "om1.A.27",
        "chapter": "hearing-aids",
        "c": "ha-styles",
        "t": "mc",
        "q": "An aid has a small case behind the ear and a thin wire to a speaker in the ear canal. Which part can the clinic replace when that canal component fails?",
        "o": [
          "The RIC receiver",
          "The BTE ear hook",
          "The earmold vent",
          "The CIC shell"
        ],
        "a": 0,
        "x": "This is a receiver-in-canal device. The lecture notes that a damaged receiver can be replaced in house. A BTE ear hook carries sound into tubing, a vent is a passive passage, and a CIC shell describes a different style.",
        "s": [
          "OM-L3F-14",
          "OM-L3F-13",
          "OM-L3F-15",
          "OM-L3F-17"
        ],
        "difficulty": "application",
        "family": "hardware identification",
        "variant": "replacement inferred from actual construction",
        "trapTargets": [
          "wire confused with sound tubing"
        ],
        "evidence": [
          "L3F slide 14",
          "L3F slide 13",
          "L3F slide 15",
          "L3F slide 17"
        ]
      },
      {
        "id": "om1.A.28",
        "chapter": "hearing-aids",
        "c": "ha-components",
        "t": "mc",
        "q": "Software changes the frequency-specific gain while the microphone and receiver remain the same. Which component carries out the changed signal processing?",
        "o": [
          "Power supply",
          "Custom earmold",
          "Input microphone",
          "Digital processor"
        ],
        "a": 3,
        "x": "The digital processor manipulates the signal and amplifies it according to the fitting. The microphone converts the input, the battery supplies power, and the earmold channels sound rather than performing digital processing.",
        "s": [
          "OM-L3F-8",
          "OM-L3F-10",
          "OM-L3F-17",
          "OM-L3F-26"
        ],
        "difficulty": "application",
        "family": "component function in use",
        "variant": "programming change without hardware change",
        "trapTargets": [
          "sound input versus digital processing"
        ],
        "evidence": [
          "L3F slide 8",
          "L3F slide 10",
          "L3F slide 17",
          "L3F slide 26"
        ]
      },
      {
        "id": "om1.A.29",
        "chapter": "hearing-aids",
        "c": "quality-control",
        "t": "mc",
        "q": "A test-box input is 55 dB SPL and the hearing-aid output is 85 dB SPL. Which quantity is 30 dB?",
        "o": [
          "Maximum power output",
          "Gain",
          "Input level",
          "Output level"
        ],
        "a": 1,
        "x": "Gain is output minus input: 85 - 55 = 30 dB. Output is 85 and input is 55. MPO is assessed under the specified maximum-output test condition, not inferred from this ordinary difference.",
        "s": [
          "OM-L3F-21"
        ],
        "difficulty": "application",
        "family": "measurement interpretation",
        "variant": "computed difference versus absolute output",
        "trapTargets": [
          "gain equals output",
          "any loud output is MPO"
        ],
        "evidence": [
          "L3F slide 21"
        ]
      },
      {
        "id": "om1.A.30",
        "chapter": "hearing-aids",
        "c": "earmold",
        "t": "mc",
        "q": "An earmold vent is sealed during a fitting comparison. Which complaint is most likely to increase?",
        "o": [
          "A booming own voice",
          "Loss of sound from behind",
          "Wind noise outdoors",
          "Whistling from acoustic feedback"
        ],
        "a": 0,
        "x": "Closing the vent traps more of the wearer’s own low-frequency sound and can increase the occlusion complaint. A vent allows that sound to escape. Directional pickup concerns sound from different directions, wind noise concerns the microphone environment, and closing an acoustic leak does not create the same feedback pathway.",
        "s": [
          "OM-L3F-17",
          "OM-L3F-7"
        ],
        "difficulty": "application",
        "family": "hearing-aid acoustics",
        "variant": "predict the effect of sealing a vent",
        "trapTargets": [
          "confuse occlusion with acoustic feedback",
          "confuse earmold acoustics with directional pickup"
        ],
        "evidence": [
          "L3F slides17 and15 (occlusion linked note); slides53 and7 identify adjacent distractor mechanisms."
        ]
      },
      {
        "id": "om1.A.31",
        "chapter": "hearing-aids",
        "c": "fitting-selection",
        "t": "mc",
        "q": "Two devices have similar software features, but one cannot supply the gain required for a severe loss. Which factor should control selection first?",
        "o": [
          "Bluetooth connectivity",
          "Adaptive directionality",
          "Output capability",
          "Feedback-reduction processing"
        ],
        "a": 2,
        "x": "The loss’s gain and output requirements drive fitting selection. Bluetooth, directionality and feedback reduction can be valuable, but none substitutes for enough output to meet the loss. The lecture notes that severe or profound losses may require a larger device.",
        "s": [
          "OM-L3F-19"
        ],
        "difficulty": "application",
        "family": "selection tradeoff",
        "variant": "capacity before cosmetic preference",
        "trapTargets": [
          "features override gain requirements"
        ],
        "evidence": [
          "L3F slide 19"
        ]
      },
      {
        "id": "om1.A.32",
        "chapter": "children",
        "c": "peds-validation",
        "t": "mc",
        "q": "An infant’s follow-up plan includes ABR estimates, OAEs and real-ear measurements. Which question still needs a different source of evidence?",
        "o": [
          "How amplification helps the infant during daily routines",
          "How the aid’s output compares with prescribed targets",
          "Whether outer hair-cell responses are present",
          "What electrophysiologic thresholds are estimated"
        ],
        "a": 0,
        "x": "The plan covers physiologic assessment and hearing-aid verification. Caregiver observations or an appropriate caregiver questionnaire add validation of everyday benefit. ABR, OAEs and real-ear output answer the other questions but do not directly show daily-life benefit.",
        "s": [
          "OM-L3F-37",
          "OM-L3F-51",
          "OM-L3F-31",
          "OM-L3F-33"
        ],
        "difficulty": "application",
        "family": "identify a missing function in pediatric follow-up",
        "variant": "physiologic assessment and real-ear verification without daily-life benefit evidence",
        "trapTargets": [
          "verification or physiologic thresholds establish everyday benefit"
        ],
        "evidence": [
          "L3F37 pediatric assessment, real-ear verification and parent/caregiver validation; slides31/33/51 distinguish benefit measures."
        ]
      },
      {
        "id": "om1.A.33",
        "chapter": "children",
        "c": "child-hl-effects",
        "t": "mc",
        "q": "An infant’s aids meet prescribed targets, but the family uses them only during a short daily therapy visit. Which part of the fitting plan remains unfulfilled?",
        "o": [
          "Consistent auditory stimulation",
          "Frequency-specific gain targets",
          "Appropriate maximum output",
          "Electroacoustic quality control"
        ],
        "a": 0,
        "x": "An accurate fitting can supply input only while it is worn. The child needs consistent auditory stimulation during waking hours to support developing listening and language. Gain targets, output and device quality are technical fitting questions rather than the wearing opportunity described here.",
        "s": [
          "OM-L3F-37",
          "OM-L3F-41",
          "OM-L3F-42"
        ],
        "difficulty": "application",
        "family": "access versus device presence",
        "variant": "correct fitting with sparse exposure",
        "trapTargets": [
          "a fitted aid alone supplies ongoing brain input"
        ],
        "evidence": [
          "L3F slides37,41,42."
        ]
      },
      {
        "id": "om1.A.34",
        "chapter": "children",
        "c": "peds-bte",
        "t": "mc",
        "q": "For a child using a working BTE, which change is most directly managed by replacing the earmold while retaining the hearing aid?",
        "o": [
          "Growth of the external ear",
          "Progression of cochlear hearing loss",
          "A change in prescribed gain",
          "A change in listening program"
        ],
        "a": 0,
        "x": "A replaceable earmold accommodates growth while the functioning BTE remains in use. A progressive loss or a needed gain/program change calls for reassessment and programming, not merely a new physical fit.",
        "s": [
          "OM-L3F-45"
        ],
        "difficulty": "application",
        "family": "continuity of access",
        "variant": "separate physical growth from programming needs",
        "trapTargets": [
          "physical coupling versus changed prescription"
        ],
        "evidence": [
          "L3F slide 45"
        ]
      },
      {
        "id": "om1.A.35",
        "chapter": "children",
        "c": "child-hl-effects",
        "t": "mc",
        "q": "Two patients have comparable losses. One lost hearing before acquiring spoken language and the other after it was established. Which difference is central to the child’s need for early consistent amplification?",
        "o": [
          "Early loss can disrupt the acquisition of spoken language",
          "Early loss reduces the need for language intervention",
          "Acquired loss prevents use of established language skills",
          "Comparable thresholds predict comparable language effects"
        ],
        "a": 0,
        "x": "Loss before language is established can interfere with its acquisition because the developing brain is receiving incomplete auditory input. Established language can help someone with a later acquired loss. Equal thresholds therefore do not establish equal developmental effects.",
        "s": [
          "OM-L2-3",
          "OM-L3F-38",
          "OM-L3F-41",
          "OM-L3F-42"
        ],
        "difficulty": "application",
        "family": "developmental consequence",
        "variant": "same loss at different learning stages",
        "trapTargets": [
          "same degree means same intervention need"
        ],
        "evidence": [
          "L2 slide3; L3F slides38,41,42."
        ]
      },
      {
        "id": "om1.A.36",
        "chapter": "children",
        "c": "special-fittings",
        "t": "tf",
        "q": "A CROS microphone on the side with no functional hearing sends sound to the better ear rather than restoring hearing in the poorer ear.",
        "a": true,
        "x": "CROS routes sound from the nonfunctional side to the normal ear. It improves access to sounds approaching from that side but does not make the nonfunctional ear hear.",
        "s": [
          "OM-L3F-53"
        ],
        "difficulty": "application",
        "family": "routing implication",
        "variant": "access from a side versus hearing in that ear",
        "trapTargets": [
          "routing restores poorer cochlea"
        ],
        "evidence": [
          "L3F slide 53"
        ]
      },
      {
        "id": "om1.A.37",
        "chapter": "verification",
        "c": "verify-validate",
        "t": "mc",
        "q": "A hearing aid matches its simulated test-box response but differs from the intended response near a child’s eardrum. Which distinction explains why the test-box result did not settle the fitting?",
        "o": [
          "Average resonance versus the individual ear",
          "Unaided sensitivity versus aided word scores",
          "A caregiver rating versus a child’s self-report",
          "Conversational speech versus classroom noise"
        ],
        "a": 0,
        "x": "The test box relies on a simulated average resonant response, whereas probe-microphone measures sample the individual ear. Sensitivity versus recognition, different reporters and quiet versus noise are useful distinctions, but do not explain this test-box versus real-ear discrepancy.",
        "s": [
          "OM-L3F-31"
        ],
        "difficulty": "application",
        "family": "measurement disagreement",
        "variant": "average simulation versus actual ear",
        "trapTargets": [
          "coupler guarantees individual-ear output"
        ],
        "evidence": [
          "L3F slide 31"
        ]
      },
      {
        "id": "om1.A.38",
        "chapter": "verification",
        "c": "verify-validate",
        "t": "mc",
        "q": "A fitting meets its target for conversational speech but misses the soft-speech target. Which conclusion is supported?",
        "o": [
          "Verification is complete",
          "Targets apply only to conversation",
          "Verification shows an unresolved mismatch",
          "Validation must have failed"
        ],
        "a": 2,
        "x": "Targets are set for several speech input levels. Matching one level does not settle performance at another, so verification has found a remaining mismatch. Validation asks about the listener’s benefit and cannot be inferred from this finding alone.",
        "s": [
          "OM-L3F-26",
          "OM-L3F-32",
          "OM-L3F-33"
        ],
        "difficulty": "application",
        "family": "target comparison",
        "variant": "one matched level not all levels",
        "trapTargets": [
          "single input verifies whole fitting"
        ],
        "evidence": [
          "L3F slide 26",
          "L3F slide 32",
          "L3F slide 33"
        ]
      },
      {
        "id": "om1.A.39",
        "chapter": "verification",
        "c": "verify-validate",
        "t": "mc",
        "q": "A child improves on aided sentence testing and a parent reports easier conversation at home. What do these two findings provide?",
        "o": [
          "Two forms of validation evidence",
          "Two forms of test-box verification",
          "An output curve and an MPO",
          "A diagnosis and a gain target"
        ],
        "a": 0,
        "x": "Aided speech performance and daily-life reports both contribute to validation. They do not directly measure device output, gain or maximum power, and they do not substitute for diagnosis or prescriptive targets.",
        "s": [
          "OM-L3F-33"
        ],
        "difficulty": "application",
        "family": "classify converging evidence",
        "variant": "performance and reported benefit together",
        "trapTargets": [
          "objective speech test automatically means verification"
        ],
        "evidence": [
          "L3F slide 33"
        ]
      },
      {
        "id": "om1.A.40",
        "chapter": "verification",
        "c": "verify-validate",
        "t": "tf",
        "q": "After a programming change, improved real-ear output alone is enough to establish improved communication in the child’s daily life.",
        "a": false,
        "x": "Real-ear output verifies the change delivered by the hearing aid. Daily communication benefit requires validation, such as functional speech measures and caregiver reports. A verified change may not be validated by the listener.",
        "s": [
          "OM-L3F-31",
          "OM-L3F-33",
          "OM-L3F-34"
        ],
        "difficulty": "application",
        "family": "evidence limit",
        "variant": "technical improvement does not prove daily benefit",
        "trapTargets": [
          "verified output guarantees functional improvement"
        ],
        "evidence": [
          "L3F slide 31",
          "L3F slide 33",
          "L3F slide 34"
        ]
      },
      {
        "id": "om1.A.41",
        "chapter": "classroom",
        "c": "snr",
        "t": "mc",
        "q": "At a student’s seat, speech changes from 60 to 65 dB and background noise changes from 50 to 55 dB. How has SNR changed?",
        "o": [
          "It increased by 5 dB",
          "It decreased by 5 dB",
          "It stayed at +10 dB",
          "It stayed at -10 dB"
        ],
        "a": 2,
        "x": "The original SNR is 60 - 50 = +10 dB. The new SNR is 65 - 55 = +10 dB. Both signals became louder by the same amount, so the speech-to-noise advantage did not improve.",
        "s": [
          "OM-L3F-60"
        ],
        "difficulty": "application",
        "family": "compare acoustic conditions",
        "variant": "equal changes to signal and noise",
        "trapTargets": [
          "louder speech always improves SNR"
        ],
        "evidence": [
          "L3F slide 60"
        ]
      },
      {
        "id": "om1.A.42",
        "chapter": "classroom",
        "c": "reverberation",
        "t": "mc",
        "q": "A teacher stops speaking, but reflected speech energy continues in a classroom. Which change targets that lingering energy?",
        "o": [
          "Add sound-absorbing treatment",
          "Reduce ventilation-system noise",
          "Shorten the teacher-student distance",
          "Increase the direct speech level"
        ],
        "a": 0,
        "x": "Absorbing treatment targets reflections and shortens reverberation time. Reducing mechanical noise, sitting closer and raising direct speech may improve listening in other ways, but they do not directly remove the room’s lingering reflected energy.",
        "s": [
          "OM-L3F-61",
          "OM-L3F-64",
          "OM-L3F-65"
        ],
        "difficulty": "application",
        "family": "environmental intervention",
        "variant": "persisting reflected energy after source stops",
        "trapTargets": [
          "all acoustic problems solved by gain"
        ],
        "evidence": [
          "L3F slide 61",
          "L3F slide 64",
          "L3F slide 65"
        ]
      },
      {
        "id": "om1.A.43",
        "chapter": "classroom",
        "c": "rm-hat",
        "t": "mc",
        "q": "A teacher wearing a remote microphone walks to the back of the room. Which feature helps keep the child’s access to that teacher from depending on the teacher-child distance?",
        "o": [
          "Talker-microphone distance stays small",
          "Student-microphone distance stays small",
          "The room supplies more reflected speech",
          "The aid raises speech and noise equally"
        ],
        "a": 0,
        "x": "The microphone travels with and stays close to the talker, then transmits to the student’s receiver. The student need not remain close to the microphone. Extra reflected energy or equal amplification of speech and noise does not create the remote-microphone advantage.",
        "s": [
          "OM-L3F-68"
        ],
        "difficulty": "application",
        "family": "technology mechanism",
        "variant": "moving source while microphone stays close",
        "trapTargets": [
          "remote microphone changes room itself"
        ],
        "evidence": [
          "L3F slide 68"
        ]
      },
      {
        "id": "om1.A.44",
        "chapter": "classroom",
        "c": "hat-types",
        "t": "mc",
        "q": "An auditorium sends its audio through infrared transmitters. A listener has a telecoil hearing aid but no other receiver. Which addition matches the auditorium’s transmission?",
        "o": [
          "An infrared receiver",
          "An FM radio receiver",
          "A loop amplifier",
          "A remote microphone"
        ],
        "a": 0,
        "x": "Infrared systems transmit with light and require the matching receiving equipment. A telecoil responds to an electromagnetic loop, while FM/DM uses radio transmission. A remote microphone is an input device, not the receiver for this infrared system.",
        "s": [
          "OM-L3F-56"
        ],
        "difficulty": "application",
        "family": "match transmission to receiver",
        "variant": "incompatible existing input with light-based venue system",
        "trapTargets": [
          "wireless technologies are interchangeable",
          "telecoil receives infrared"
        ],
        "evidence": [
          "L3F slide 56"
        ]
      },
      {
        "id": "om1.A.45",
        "chapter": "outcomes",
        "c": "ald-assessment",
        "t": "mc",
        "q": "After an ALD is introduced, a teacher’s SIFTER ratings improve for attention and class participation. Pure-tone thresholds are unchanged. Which conclusion fits?",
        "o": [
          "Functional benefit is possible",
          "The SIFTER must be invalid",
          "Hearing sensitivity has improved",
          "Electroacoustic targets are verified"
        ],
        "a": 0,
        "x": "SIFTER tracks educational functioning before and after ALD use. Better participation can occur without a threshold change. Its ratings do not measure pure-tone sensitivity or hearing-aid electroacoustic output.",
        "s": [
          "OM-L3F-72",
          "OM-L3F-73"
        ],
        "difficulty": "application",
        "family": "outcome interpretation",
        "variant": "functional change despite stable sensitivity",
        "trapTargets": [
          "benefit requires threshold improvement"
        ],
        "evidence": [
          "L3F slide 72",
          "L3F slide 73"
        ]
      },
      {
        "id": "om1.A.46",
        "chapter": "outcomes",
        "c": "smart-goals",
        "t": "mc",
        "q": "The goal is independent troubleshooting in 4 of 5 trials within six weeks. At six weeks, the family completes 3 of 5 trials independently. Which part remains unmet?",
        "o": [
          "The performance criterion",
          "The time interval",
          "The observed behavior",
          "The stated setting"
        ],
        "a": 0,
        "x": "The deadline has arrived and troubleshooting was observed, but 3 of 5 independent trials is below the 4 of 5 criterion. Reporting that devices were generally used would not replace this specific skill measure.",
        "s": [
          "OM-L3F-80"
        ],
        "difficulty": "application",
        "family": "goal measurement",
        "variant": "observed performance against a stated criterion",
        "trapTargets": [
          "attempting skill equals meeting criterion"
        ],
        "evidence": [
          "L3F slide 80"
        ]
      },
      {
        "id": "om1.A.47",
        "chapter": "dots",
        "c": "sii-to-speech",
        "t": "mc",
        "q": "At the same speech level, the count-the-dots score increases from 38 to 62. Which statement is supported directly by that change?",
        "o": [
          "Speech audibility increased by 24 points",
          "Word recognition increased by 24 points",
          "Sentence recognition is now 62 percent",
          "Speech-in-noise performance is now 62 percent"
        ],
        "a": 0,
        "x": "The 100 weighted dots estimate audible speech information, so the change is 24 percentage points of estimated audibility. A word or sentence prediction requires the appropriate relationship curve. This quiet estimate is not a speech-in-noise score.",
        "s": [
          "KM",
          "DOTSA",
          "T0910",
          "E1"
        ],
        "difficulty": "application",
        "family": "audibility change interpretation",
        "variant": "difference score not recognition gain",
        "trapTargets": [
          "SII equals percent words correct",
          "quiet predicts noise"
        ],
        "evidence": [
          "KM",
          "DOTSA",
          "T0910",
          "E1"
        ]
      },
      {
        "id": "om1.A.48",
        "chapter": "dots",
        "c": "count-dots",
        "t": "tf",
        "q": "On the same count-the-dots chart at the same speech level, improving every plotted threshold cannot make previously audible dots become inaudible.",
        "a": true,
        "x": "Lower dB HL thresholds move the threshold line upward and make at least as many dots fall on or below it. With the same chart and speech level, already audible dots remain audible. This concerns audibility, not guaranteed speech-recognition improvement.",
        "s": [
          "KM",
          "DOTSA",
          "T0910",
          "E1"
        ],
        "difficulty": "application",
        "family": "graph direction implication",
        "variant": "monotonic audibility after threshold improvement",
        "trapTargets": [
          "lower thresholds mean less audibility"
        ],
        "evidence": [
          "KM",
          "DOTSA",
          "T0910",
          "E1"
        ]
      },
      {
        "id": "om1.A.49",
        "chapter": "guest",
        "c": "peds-context",
        "t": "mc",
        "q": "A referral says “poor classroom language,” but contains no hearing results. Which information does an audiologist add that complements the SLP’s language assessment?",
        "o": [
          "The child’s auditory access",
          "The child’s grammar score",
          "The child’s articulation pattern",
          "The child’s vocabulary score"
        ],
        "a": 0,
        "x": "Dr. Lee distinguishes the audiologist’s determination of auditory access and hearing status from the SLP’s evaluation of communication, language and speech. The findings should be combined to understand the child’s needs.",
        "s": [
          "OM-GUEST-3"
        ],
        "difficulty": "application",
        "family": "complementary professional roles",
        "variant": "missing hearing context in language referral",
        "trapTargets": [
          "language testing substitutes for auditory access"
        ],
        "evidence": [
          "GUEST slide 3"
        ]
      },
      {
        "id": "om1.A.50",
        "chapter": "guest",
        "c": "cross-check",
        "t": "mc",
        "q": "An infant gives inconsistent behavioral responses. Which measurement provides additional evidence about neural synchrony and helps estimate hearing sensitivity?",
        "o": [
          "Tympanometry",
          "Otoacoustic emissions",
          "Auditory brainstem response",
          "Case-history questionnaire"
        ],
        "a": 2,
        "x": "ABR measures synchronized neural responses and helps estimate sensitivity when behavioral results are unreliable. Tympanometry addresses middle-ear status, OAEs address outer hair-cell function, and case history supplies context rather than a physiologic threshold estimate.",
        "s": [
          "OM-GUEST-12",
          "OM-GUEST-16",
          "OM-GUEST-17"
        ],
        "difficulty": "application",
        "family": "test-purpose cross-check",
        "variant": "unreliable behavior requiring neural evidence",
        "trapTargets": [
          "every objective test estimates neural threshold"
        ],
        "evidence": [
          "GUEST slide 12",
          "GUEST slide 16",
          "GUEST slide 17"
        ]
      },
      {
        "id": "om1.A.51",
        "chapter": "guest",
        "c": "chl-peds",
        "t": "mc",
        "q": "A child hears less well during recurrent middle-ear fluid and improves between episodes. Which implication belongs in the communication plan?",
        "o": [
          "Access to speech may fluctuate",
          "The cochlea must be permanently damaged",
          "Hearing status is fixed after the first test",
          "Language concerns exclude a hearing problem"
        ],
        "a": 0,
        "x": "Dr. Lee emphasizes fluctuation with conductive loss and its effects on speech, language and listening. A changing middle-ear problem does not prove permanent cochlear damage, and a single result cannot describe every episode.",
        "s": [
          "OM-GUEST-18",
          "OM-GUEST-19"
        ],
        "difficulty": "application",
        "family": "functional implication",
        "variant": "changing middle-ear history across visits",
        "trapTargets": [
          "one test fixes long-term access"
        ],
        "evidence": [
          "GUEST slide 18",
          "GUEST slide 19"
        ]
      },
      {
        "id": "om1.A.52",
        "chapter": "guest",
        "c": "uni-bi",
        "t": "tf",
        "q": "A child with unilateral hearing loss who manages a quiet one-to-one conversation may still have difficulty when classmates speak from different locations.",
        "a": true,
        "x": "Unilateral hearing loss can cause difficulty localizing sound, hearing in noise and hearing from the poorer side. Success in a quiet single-talker setting does not establish normal function in a classroom.",
        "s": [
          "OM-GUEST-10"
        ],
        "difficulty": "application",
        "family": "transfer across environments",
        "variant": "quiet success versus distributed talkers",
        "trapTargets": [
          "good quiet performance guarantees classroom access"
        ],
        "evidence": [
          "GUEST slide 10"
        ]
      }
    ],
    "shorts": [
      {
        "id": "om1.A.w1",
        "chapter": "foundations",
        "c": "core-care",
        "q": "A family repeatedly misses the child’s AR sessions because reliable transportation is unavailable. The child benefits when the family can attend, and the family wants to continue. Identify the CORE area represented by this barrier, propose a matched CARE action, and describe one way to judge whether the action improves the rehabilitation process.",
        "rubric": [
          "Identify Environmental Factors in CORE, specifically access to services or systems. The stated barrier is transportation access, not a lack of family motivation.",
          "Propose environmental coordination such as arranging access support through the team, a patient navigator, or an appropriate telepractice option. Tie the action to reducing the transportation barrier.",
          "Track whether access improves, such as more consistent completed sessions, together with progress toward the child’s communication or participation goal. A device output measurement alone would not evaluate this change."
        ],
        "s": [
          "OM-L1-27",
          "OM-L1-31",
          "OM-L1-35"
        ],
        "evidence": [
          "L1 slides27,31,35. New case applies access barriers and support to CORE/CARE rather than duplicating objective A01 participation classification."
        ]
      },
      {
        "id": "om1.A.w2",
        "chapter": "classroom",
        "c": "rm-hat",
        "q": "A student hears the teacher well near the front of class but misses directions when the teacher moves away. The student’s hearing aids are working. Explain the likely listening barrier, recommend a device arrangement that addresses it, and describe how you would determine whether daily classroom listening improves.",
        "rubric": [
          "Identify distance as reducing the teacher’s direct speech level at the student, making access less favorable relative to background sound. Working hearing aids do not eliminate this barrier.",
          "Use a personal remote microphone with a microphone/transmitter near the teacher and a receiver delivering the voice to the student. Explain that the near-talker pickup reduces the effect of changing teacher-student distance.",
          "Compare functional listening before and after use with a relevant student/teacher tool such as LIFE-R, teacher SIFTER, and/or systematic observations of following directions. Device output alone is verification, not evidence of daily benefit."
        ],
        "s": [
          "OM-L3F-65",
          "OM-L3F-68",
          "OM-L3F-73",
          "OM-L3F-74",
          "OM-L3F-75",
          "OM-L3F-33"
        ],
        "evidence": [
          "L3F slides 65, 68, 73-75 and 33. Scenario isolates moving-talker distance rather than repeating the old three-barrier classroom essay."
        ]
      }
    ],
    "graphs": [
      {
        "seed": 9271000,
        "right": {
          "type": "conductive",
          "degree": "mild",
          "config": "flat"
        },
        "left": {
          "type": "sensorineural",
          "degree": "moderate",
          "config": "sloping"
        }
      },
      {
        "seed": 9271001,
        "right": {
          "type": "mixed",
          "degree": "modsev",
          "config": "flat"
        },
        "left": {
          "type": "sensorineural",
          "degree": "mild",
          "config": "cookie"
        }
      }
    ]
  },
  {
    "name": "B",
    "seed": 927102,
    "objectives": [
      {
        "id": "om1.B.01",
        "chapter": "foundations",
        "c": "core-care",
        "t": "mc",
        "q": "An AR assessment describes language skills, school participation and personal characteristics. It says nothing about available services or barriers. Which CORE component is missing?",
        "o": [
          "Communication status",
          "Overall participation variables",
          "Related personal factors",
          "Environmental factors"
        ],
        "a": 3,
        "x": "Services, systems, barriers and facilitators belong to environmental factors. The stated language, participation and personal information already address C, O and R, respectively. The missing environmental information is not replaced by a complete description of the child.",
        "s": [
          "OM-L1-24",
          "OM-L1-25",
          "OM-L1-26",
          "OM-L1-27"
        ],
        "difficulty": "application",
        "family": "audit assessment completeness",
        "variant": "Identify missing CORE domain",
        "trapTargets": [
          "personal profile substitutes for environment"
        ],
        "evidence": [
          "L1 slide 24",
          "L1 slide 25",
          "L1 slide 26",
          "L1 slide 27"
        ]
      },
      {
        "id": "om1.B.02",
        "chapter": "foundations",
        "c": "core-care",
        "t": "mc",
        "q": "An AR team changes how classmates include a child in group discussions. Which CARE component is most directly addressed?",
        "o": [
          "Counseling and psychosocial",
          "Audibility and amplification",
          "Remediate communication activities",
          "Environmental coordination"
        ],
        "a": 3,
        "x": "Environmental coordination includes communication partners and the social or educational situation. Counseling addresses acceptance and goals, amplification addresses devices, and remediation develops the person's communication tactics and auditory or visual skills.",
        "s": [
          "OM-L1-28",
          "OM-L1-29",
          "OM-L1-30",
          "OM-L1-31"
        ],
        "difficulty": "application",
        "family": "match intervention",
        "variant": "Change communication partners",
        "trapTargets": [
          "partner intervention versus individual training"
        ],
        "evidence": [
          "L1 slide 28",
          "L1 slide 29",
          "L1 slide 30",
          "L1 slide 31"
        ]
      },
      {
        "id": "om1.B.03",
        "chapter": "foundations",
        "c": "core-care",
        "t": "mc",
        "q": "Which pair keeps assessment and management in the correct order?",
        "o": [
          "Set communication goals, then record classroom noise",
          "Fit an alerting device, then assess communication",
          "Assess visual communication, then teach speechreading",
          "Train communication partners, then obtain self-report"
        ],
        "a": 2,
        "x": "Assessing visual communication belongs to CORE communication status. Auditory or visual training is CARE remediation. The other pairs put a management action before the stated assessment.",
        "s": [
          "OM-L1-24",
          "OM-L1-27",
          "OM-L1-28",
          "OM-L1-29",
          "OM-L1-30",
          "OM-L1-31"
        ],
        "difficulty": "application",
        "family": "sequence",
        "variant": "Classify paired assessment and action",
        "trapTargets": [
          "CORE CARE reversal"
        ],
        "evidence": [
          "L1 slide 24",
          "L1 slide 27",
          "L1 slide 28",
          "L1 slide 29",
          "L1 slide 30",
          "L1 slide 31"
        ]
      },
      {
        "id": "om1.B.04",
        "chapter": "foundations",
        "c": "ar-providers",
        "t": "tf",
        "q": "An educator of the deaf can have a major role in AR even when another professional manages the hearing-aid fitting.",
        "a": true,
        "x": "Lecture 1 identifies multidisciplinary AR and names the educator of the deaf among those who can assume a major role. A major AR role is not limited to the person providing amplification.",
        "s": [
          "OM-L1-11"
        ],
        "difficulty": "application",
        "family": "single assertion",
        "variant": "Major AR role distinct from fitting role",
        "trapTargets": [
          "AR leadership limited to device fitting"
        ],
        "evidence": [
          "L1 slide 11 SmartArt: several disciplines, not all aspects performed by one person; educator of the deaf can assume a major role."
        ]
      },
      {
        "id": "om1.B.05",
        "chapter": "audiograms",
        "c": "loss-type",
        "t": "mc",
        "q": "An ear was described as moderate, flat and conductive. AC thresholds stay the same, but BC thresholds are now elevated to match AC. Which descriptor must change?",
        "o": [
          "Moderate",
          "Flat",
          "Conductive",
          "All three"
        ],
        "a": 2,
        "x": "The new AC/BC relationship supports sensorineural loss. Degree and configuration remain unchanged because the air-conduction level and shape are unchanged. This assumes the new measurements are valid.",
        "s": [
          "OM-L1-16",
          "OM-L1-17",
          "OM-L1-18",
          "OM-GUEST-20",
          "OM-GUEST-25"
        ],
        "difficulty": "application",
        "family": "change one variable",
        "variant": "Only BC changes",
        "trapTargets": [
          "degree configuration type conflation"
        ],
        "evidence": [
          "L1 slide 16",
          "L1 slide 17",
          "L1 slide 18",
          "GUEST slide 20",
          "GUEST slide 25"
        ]
      },
      {
        "id": "om1.B.06",
        "chapter": "audiograms",
        "c": "loss-type",
        "t": "mc",
        "q": "An audiogram has a clear air-bone gap. What additional finding distinguishes conductive from mixed hearing loss?",
        "o": [
          "Whether bone thresholds are normal",
          "Whether air thresholds form a flat curve",
          "Whether the loss affects one or both ears",
          "Whether the PTA is greater than 55 dB HL"
        ],
        "a": 0,
        "x": "A gap shows a conductive component. Normal BC supports conductive loss; elevated BC shows an additional sensorineural component and therefore mixed loss. Configuration, laterality and the AC PTA do not by themselves settle that distinction.",
        "s": [
          "OM-L1-18",
          "OM-GUEST-20",
          "OM-GUEST-28",
          "OM-GUEST-30"
        ],
        "difficulty": "application",
        "family": "identify missing discriminator",
        "variant": "Gap known but BC level missing",
        "trapTargets": [
          "gap alone proves purely conductive loss"
        ],
        "evidence": [
          "L1 slide18 type; GUEST slide20 normalBC inCHL; slides28/30 elevatedBCwithgap inMHL."
        ]
      },
      {
        "id": "om1.B.07",
        "chapter": "heredity",
        "c": "inheritance",
        "t": "mc",
        "q": "For one autosomal-recessive variant, a parent with hearing loss has two altered copies. The other parent has two normal copies. What is expected for their children under this simple inheritance model?",
        "o": [
          "All affected by the recessive disorder",
          "All carriers, none affected by that variant",
          "Half affected and half noncarriers",
          "One-fourth affected and three-fourths noncarriers"
        ],
        "a": 1,
        "x": "Each child must receive an altered copy from the affected parent and a normal copy from the confirmed noncarrier. All are therefore carriers with one of each copy, not affected by that recessive variant. The 25% affected result applies to two carriers, and the 50% dominant example is a different cross.",
        "s": [
          "OM-L2-15",
          "OM-L2-16"
        ],
        "difficulty": "application",
        "family": "combine parental alleles",
        "variant": "Affected recessive parent crossed with confirmed noncarrier",
        "trapTargets": [
          "apply two-carrier risk to every recessive family"
        ],
        "evidence": [
          "L2 slides15-16: recessive expression requires two altered copies; a one-copy carrier is unaffected. The supplied parental genotypes determine the cross."
        ]
      },
      {
        "id": "om1.B.08",
        "chapter": "heredity",
        "c": "inheritance",
        "t": "mc",
        "q": "For a mitochondrial hearing-loss variant, which family branch directly traces the child's mitochondrial DNA?",
        "o": [
          "Mother and maternal grandmother",
          "Mother and maternal grandfather",
          "Father and paternal grandmother",
          "Father and paternal grandfather"
        ],
        "a": 0,
        "x": "A child receives mitochondrial DNA from the mother, who received hers from her mother. The other branches introduce a paternal transmission step, which is not the mitochondrial route taught. This traces origin, not certainty of hearing-loss expression.",
        "s": [
          "OM-L2-19"
        ],
        "difficulty": "application",
        "family": "trace inheritance",
        "variant": "Two-generation maternal line",
        "trapTargets": [
          "maternal grandfather versus grandmother"
        ],
        "evidence": [
          "L2 slide 19"
        ]
      },
      {
        "id": "om1.B.09",
        "chapter": "heredity",
        "c": "inheritance",
        "t": "tf",
        "q": "Under the autosomal-dominant model taught, an affected heterozygous parent gives a son and a daughter the same chance of inheriting the variant.",
        "a": true,
        "x": "Autosomal inheritance is not determined by the child's sex. With the other parent not carrying the variant, each child has a 50% chance in the model taught. The son-specific distinction belongs to the X-linked discussion, not autosomal dominance.",
        "s": [
          "OM-L2-12",
          "OM-L2-13",
          "OM-L2-18"
        ],
        "difficulty": "application",
        "family": "single assertion",
        "variant": "Autosomal risk compared by sex",
        "trapTargets": [
          "autosomal versus X-linked"
        ],
        "evidence": [
          "L2 slide 12",
          "L2 slide 13",
          "L2 slide 18"
        ]
      },
      {
        "id": "om1.B.10",
        "chapter": "heredity",
        "c": "endo-exo",
        "t": "mc",
        "q": "Two infants have hearing loss present at birth. One has a Connexin 26 variant; the other had a prenatal infection. Which classification can they share despite different causes?",
        "o": [
          "Endogenous cause",
          "Exogenous cause",
          "Congenital onset",
          "Acquired onset"
        ],
        "a": 2,
        "x": "Both have congenital onset. The Connexin cause is hereditary/endogenous, while infection is environmental/exogenous. Timing and cause are separate classifications; a congenital loss is not necessarily genetic.",
        "s": [
          "OM-L2-3",
          "OM-L2-4",
          "OM-L2-21",
          "OM-L2-24"
        ],
        "difficulty": "application",
        "family": "compare classifications",
        "variant": "Same timing different cause",
        "trapTargets": [
          "congenital equals genetic"
        ],
        "evidence": [
          "L2 slide 3",
          "L2 slide 4",
          "L2 slide 21",
          "L2 slide 24"
        ]
      },
      {
        "id": "om1.B.11",
        "chapter": "heredity",
        "c": "mondini",
        "t": "mc",
        "q": "Imaging shows a malformed, partially developed cochlea. Which finding would change the classification from Mondini dysplasia to Michel aplasia?",
        "o": [
          "A flat appearance of the cochlea",
          "Complete absence of labyrinthine structures",
          "A sensorineural hearing-loss component",
          "A variable degree of hearing loss"
        ],
        "a": 1,
        "x": "Michel aplasia is complete labyrinthine and cochlear aplasia. A partially developed, flattened cochlea fits Mondini dysplasia. Sensorineural loss and variable severity can accompany cochlear malformations and do not distinguish these two structural findings.",
        "s": [
          "OM-L2-20"
        ],
        "difficulty": "application",
        "family": "identify discriminator",
        "variant": "Partial versus absent development",
        "trapTargets": [
          "severity substitutes for anatomy"
        ],
        "evidence": [
          "L2 slide 20"
        ]
      },
      {
        "id": "om1.B.12",
        "chapter": "heredity",
        "c": "connexin",
        "t": "mc",
        "q": "A child with Connexin 26 hearing loss has no other medical problems. Which follow-up decision fits the lecture?",
        "o": [
          "Discharge once the genetic cause is known",
          "Monitor only if new physical signs appear",
          "Continue monitoring hearing thresholds",
          "Replace hearing tests with repeat gene tests"
        ],
        "a": 2,
        "x": "Connexin 26 loss can occur without other medical problems and can progress. A known genetic cause does not establish a stable hearing level. Waiting for physical signs or substituting gene testing would fail to measure that hearing change.",
        "s": [
          "OM-L2-21"
        ],
        "difficulty": "application",
        "family": "choose follow-up",
        "variant": "Known isolated genetic cause",
        "trapTargets": [
          "etiologic diagnosis replaces hearing surveillance"
        ],
        "evidence": [
          "L2 slide 21"
        ]
      },
      {
        "id": "om1.B.13",
        "chapter": "causes",
        "c": "cmv",
        "t": "mc",
        "q": "A mother reports no illness during pregnancy, but testing confirms CMV exposure. Which interpretation fits the lecture?",
        "o": [
          "Lack of symptoms does not exclude CMV infection",
          "Prenatal infection requires noticeable maternal symptoms",
          "Asymptomatic CMV is limited to postnatal transmission",
          "Maternal symptoms determine the child's loss severity"
        ],
        "a": 0,
        "x": "Adults with CMV are usually asymptomatic. Noticeable illness is therefore not required for infection or prenatal transmission. Maternal symptoms also do not determine the child's hearing-loss severity, which can vary from mild to profound. The other choices infer too much from symptoms.",
        "s": [
          "OM-L2-26",
          "OM-L2-27"
        ],
        "difficulty": "application",
        "family": "reconcile findings",
        "variant": "Asymptomatic mother with infection evidence",
        "trapTargets": [
          "absence of maternal symptoms excludes infection"
        ],
        "evidence": [
          "L2 slide 26",
          "L2 slide 27"
        ]
      },
      {
        "id": "om1.B.14",
        "chapter": "causes",
        "c": "syphilis",
        "t": "mc",
        "q": "A prenatal infection is treated with penicillin, yet the newborn shows no symptoms. Which later hearing pattern is specifically associated with this infection in Lecture 2?",
        "o": [
          "Late-onset progressive SNHL",
          "Stable congenital conductive loss",
          "Low-frequency conductive loss only",
          "Normal hearing once birth is symptom-free"
        ],
        "a": 0,
        "x": "Penicillin during pregnancy identifies the syphilis discussion. Many affected newborns are asymptomatic, and the associated hearing loss can be late-onset and progressive sensorineural loss. Neither symptom-free birth nor treatment history alone establishes a normal hearing outcome. The other loss descriptions are not the pattern taught.",
        "s": [
          "OM-L2-29"
        ],
        "difficulty": "application",
        "family": "identify linked consequence",
        "variant": "Treatment cue plus symptom-free newborn",
        "trapTargets": [
          "symptom-free birth excludes delayed loss"
        ],
        "evidence": [
          "L2 slide 29"
        ]
      },
      {
        "id": "om1.B.15",
        "chapter": "causes",
        "c": "rh",
        "t": "mc",
        "q": "A chart lists maternal RhoGAM and neonatal phototherapy. Which distinction is correct?",
        "o": [
          "Both prevent maternal antibody formation",
          "Both directly treat the infant's bilirubin level",
          "RhoGAM treats bilirubin and phototherapy prevents antibodies",
          "RhoGAM prevents antibodies and phototherapy treats jaundice"
        ],
        "a": 3,
        "x": "The Rh discussion places RhoGAM with prevention of maternal antibody formation. Phototherapy is a treatment for significant neonatal hyperbilirubinemia. They address different problems and are not interchangeable.",
        "s": [
          "OM-L2-32",
          "OM-L2-39"
        ],
        "difficulty": "application",
        "family": "compare treatment targets",
        "variant": "Two interventions in one record",
        "trapTargets": [
          "Rh prophylaxis versus bilirubin treatment"
        ],
        "evidence": [
          "L2 slide 32",
          "L2 slide 39"
        ]
      },
      {
        "id": "om1.B.16",
        "chapter": "causes",
        "c": "anoxia",
        "t": "mc",
        "q": "After anoxia around birth, a baby responds well to low-frequency sounds. Which part of hearing needs particular attention based on the pattern taught?",
        "o": [
          "High-frequency thresholds",
          "Low-frequency thresholds",
          "Speech-awareness threshold",
          "Middle-ear pressure"
        ],
        "a": 0,
        "x": "The anoxia slide describes near-normal low-frequency hearing with more severe high-frequency loss. High-frequency threshold information is therefore particularly important even if the baby responds to low-frequency sounds. More low-frequency testing or speech detection does not establish high-frequency sensitivity, and middle-ear pressure is not that sensitivity measurement.",
        "s": [
          "OM-L2-34"
        ],
        "difficulty": "application",
        "family": "choose missing evidence",
        "variant": "Preserved low-frequency response",
        "trapTargets": [
          "response to some sound means full access"
        ],
        "evidence": [
          "L2 slide 34"
        ]
      },
      {
        "id": "om1.B.17",
        "chapter": "causes",
        "c": "hemorrhage",
        "t": "tf",
        "q": "In the intracranial-hemorrhage classification, Grade I through Grade IV describes hemorrhage severity rather than audiometric degree of hearing loss.",
        "a": true,
        "x": "The grading on the slide describes severity of the brain or intracranial bleed. The associated hearing loss is listed as sensorineural, but the hemorrhage grade is not the mild-to-profound audiometric degree scale.",
        "s": [
          "OM-L2-35"
        ],
        "difficulty": "application",
        "family": "single assertion",
        "variant": "Separate two severity classifications",
        "trapTargets": [
          "hemorrhage grade equals hearing degree"
        ],
        "evidence": [
          "L2 slide 35"
        ]
      },
      {
        "id": "om1.B.18",
        "chapter": "causes",
        "c": "rubella",
        "t": "mc",
        "q": "Which pair of prenatal infections both has progressive sensorineural hearing loss listed in Lecture 2?",
        "o": [
          "Rubella and syphilis",
          "Toxoplasmosis and herpes simplex",
          "Syphilis and herpes simplex",
          "Rubella and toxoplasmosis"
        ],
        "a": 0,
        "x": "Rubella and syphilis are both specifically described as progressive SNHL. Toxoplasmosis is listed with profound SNHL and herpes simplex with SNHL, but those slides do not label their hearing loss progressive. This asks for the paired associations explicitly taught, not whether progression is biologically impossible in any other infection.",
        "s": [
          "OM-L2-25",
          "OM-L2-28",
          "OM-L2-29",
          "OM-L2-31"
        ],
        "difficulty": "recall",
        "family": "compare course associations",
        "variant": "Both causes carry explicit progression descriptor",
        "trapTargets": [
          "SNHL label guarantees a stated time course"
        ],
        "evidence": [
          "L2 slide25 rubella progressiveSNHL; slide29 syphilislateonsetprogressiveSNHL; slide28toxoprofoundsensorineural; slide31HSV sensorineural."
        ]
      },
      {
        "id": "om1.B.19",
        "chapter": "syndromes",
        "c": "down",
        "t": "mc",
        "q": "Which physical cluster most strongly supports Down syndrome?",
        "o": [
          "Flattened nose, protruding tongue and hypotonia",
          "Thin upper lip, flat philtrum and small stature",
          "Microphthalmia, preauricular tags and vertebral defects",
          "Small jaw, lower-eyelid defects and receding cheekbones"
        ],
        "a": 0,
        "x": "The completed Down syndrome slide lists a flattened nose, protruding tongue and hypotonia. The other clusters align with fetal alcohol syndrome, Goldenhar and Treacher Collins, respectively. Their overlapping ear or hearing findings do not make the physical constellations interchangeable.",
        "s": [
          "OM-L2-53",
          "OM-L2-55",
          "OM-L2-57",
          "OM-L2-67"
        ],
        "difficulty": "recall",
        "family": "physical-cluster classification",
        "variant": "Distinguish Down from craniofacial look-alikes",
        "trapTargets": [
          "hearing-loss overlap erases physical distinction"
        ],
        "evidence": [
          "L2 slide53 Downphysicalcharacteristics; slides55/57/67 comparatorfeatures."
        ]
      },
      {
        "id": "om1.B.20",
        "chapter": "syndromes",
        "c": "jbs",
        "t": "mc",
        "q": "Congenital SNHL and short stature are noted in a child. Which additional finding most strongly favors Johanson-Blizzard among these choices?",
        "o": [
          "White forelock",
          "Hypoplastic nasal rims",
          "Webbing of the neck",
          "Thyroid goiter"
        ],
        "a": 1,
        "x": "Hypoplasia of the nasal rims with short stature and congenital SNHL is the Johanson-Blizzard constellation. White forelock points toward Waardenburg, webbed neck toward Turner, and goiter toward Pendred.",
        "s": [
          "OM-L2-60",
          "OM-L2-70",
          "OM-L2-74",
          "OM-L2-76"
        ],
        "difficulty": "recall",
        "family": "identify discriminator",
        "variant": "Nasal clue among SNHL syndromes",
        "trapTargets": [
          "one shared hearing type identifies syndrome"
        ],
        "evidence": [
          "L2 slide 60",
          "L2 slide 70",
          "L2 slide 74",
          "L2 slide 76"
        ]
      },
      {
        "id": "om1.B.21",
        "chapter": "syndromes",
        "c": "stickler",
        "t": "mc",
        "q": "Both Usher and Stickler can involve hearing and vision. Which history favors Stickler?",
        "o": [
          "Congenital SNHL with progressive vision loss",
          "Cleft palate with early-onset arthritis",
          "Congenital SNHL without joint findings",
          "Increasing visual difficulty with congenital deafness"
        ],
        "a": 1,
        "x": "Early-onset arthritis, cleft palate and ocular abnormalities such as severe myopia or retinal detachment support Stickler. The congenital hearing loss plus progressive vision-loss descriptions fit Usher and do not supply the Stickler skeletal/orofacial discriminator.",
        "s": [
          "OM-L2-65",
          "OM-L2-72"
        ],
        "difficulty": "application",
        "family": "differentiate look-alikes",
        "variant": "Auditory visual overlap with skeletal discriminator",
        "trapTargets": [
          "all hearing-plus-vision syndromes are Usher"
        ],
        "evidence": [
          "L2 slide 65",
          "L2 slide 72"
        ]
      },
      {
        "id": "om1.B.22",
        "chapter": "syndromes",
        "c": "goldenhar",
        "t": "mc",
        "q": "A child has conductive hearing loss, preauricular tags and vertebral abnormalities. Which accompanying finding supports Goldenhar?",
        "o": [
          "Hypoplastic nasal rims",
          "Microphthalmia",
          "Progressive thyroid enlargement",
          "White forelock"
        ],
        "a": 1,
        "x": "Goldenhar includes microphthalmia, external/middle-ear anomalies, preauricular tags and vertebral abnormalities. Nasal-rim hypoplasia belongs to Johanson-Blizzard, goiter to Pendred and white forelock to Waardenburg.",
        "s": [
          "OM-L2-57",
          "OM-L2-60",
          "OM-L2-74",
          "OM-L2-76"
        ],
        "difficulty": "recall",
        "family": "complete clinical constellation",
        "variant": "Ocular plus vertebral ear findings",
        "trapTargets": [
          "tag alone identifies BOR"
        ],
        "evidence": [
          "L2 slide 57",
          "L2 slide 60",
          "L2 slide 74",
          "L2 slide 76"
        ]
      },
      {
        "id": "om1.B.23",
        "chapter": "syndromes",
        "c": "waardenburg",
        "t": "tf",
        "q": "A white forelock and different-colored irises point toward a syndrome whose characteristic hearing loss is conductive.",
        "a": false,
        "x": "These pigment findings point toward Waardenburg syndrome. Its characteristic hearing loss in the lecture is congenital sensorineural loss, described as nonprogressive. The conductive label is the incorrect part.",
        "s": [
          "OM-L2-74"
        ],
        "difficulty": "application",
        "family": "single assertion",
        "variant": "Pigment clues with reversed loss type",
        "trapTargets": [
          "physical recognition without loss association"
        ],
        "evidence": [
          "L2 slide 74"
        ]
      },
      {
        "id": "om1.B.24",
        "chapter": "syndromes",
        "c": "turner",
        "t": "mc",
        "q": "A girl has short stature, a webbed neck and a low hairline. Which hearing-loss association is listed for that syndrome?",
        "o": [
          "Conductive or sensorineural",
          "Conductive only",
          "Sensorineural only",
          "Central hearing loss only"
        ],
        "a": 0,
        "x": "The physical pattern supports Turner syndrome. The completed slide lists conductive or sensorineural loss, so either component is possible. The exclusive alternatives discard a type the slide explicitly allows, and central-only loss is not its stated association.",
        "s": [
          "OM-L2-70"
        ],
        "difficulty": "recall",
        "family": "clinical association",
        "variant": "Physical constellation to nonexclusive loss types",
        "trapTargets": [
          "forcing one loss type"
        ],
        "evidence": [
          "L2 slide 70"
        ]
      },
      {
        "id": "om1.B.25",
        "chapter": "syndromes",
        "c": "fas",
        "t": "tf",
        "q": "A sensorineural finding rules out fetal alcohol syndrome because its hearing loss is confined to the middle ear.",
        "a": false,
        "x": "The lecture emphasizes conductive loss secondary to middle-ear disorders but also allows sensorineural and central hearing loss. A sensorineural finding does not rule the syndrome out.",
        "s": [
          "OM-L2-55"
        ],
        "difficulty": "application",
        "family": "single assertion",
        "variant": "Predominant versus exclusive association",
        "trapTargets": [
          "primarily conductive means exclusively conductive"
        ],
        "evidence": [
          "L2 slide 55"
        ]
      },
      {
        "id": "om1.B.26",
        "chapter": "syndromes",
        "c": "bor",
        "t": "mc",
        "q": "A child has hearing loss, a neck branchial cleft and preauricular pits. Which additional assessment addresses a major nonauditory feature of the suspected syndrome?",
        "o": [
          "Thyroid evaluation",
          "Retinal evaluation",
          "Renal evaluation",
          "Hand-joint evaluation"
        ],
        "a": 2,
        "x": "This constellation suggests branchio-oto-renal spectrum disorder, which includes renal malformations as a major criterion. Thyroid goiter suggests Pendred, retinal problems suggest other syndromes such as Usher or Stickler, and joint findings favor Stickler.",
        "s": [
          "OM-L2-43",
          "OM-L2-65",
          "OM-L2-72",
          "OM-L2-76"
        ],
        "difficulty": "application",
        "family": "clinical next information",
        "variant": "Branchial ear findings to associated organ",
        "trapTargets": [
          "ear tag without systemic context"
        ],
        "evidence": [
          "L2 slide 43",
          "L2 slide 65",
          "L2 slide 72",
          "L2 slide 76"
        ]
      },
      {
        "id": "om1.B.27",
        "chapter": "hearing-aids",
        "c": "ha-components",
        "t": "mc",
        "q": "The microphone and processor are producing an amplified electrical signal, but its conversion to sound is failing. Which component performs the missing step?",
        "o": [
          "Battery",
          "Microphone",
          "Receiver",
          "Programming interface"
        ],
        "a": 2,
        "x": "The receiver converts the amplified electrical signal to acoustic output. The battery supplies power, the microphone begins the acoustic-to-electrical path, and the interface connects the aid to programming equipment.",
        "s": [
          "OM-L3F-5",
          "OM-L3F-9",
          "OM-L3F-10",
          "OM-L3F-24"
        ],
        "difficulty": "application",
        "family": "fault localization",
        "variant": "Signal exists before acoustic output",
        "trapTargets": [
          "receiver confused with input microphone"
        ],
        "evidence": [
          "L3F slide 5",
          "L3F slide 9",
          "L3F slide 10",
          "L3F slide 24"
        ]
      },
      {
        "id": "om1.B.28",
        "chapter": "hearing-aids",
        "c": "quality-control",
        "t": "mc",
        "q": "A technician is checking a hearing aid's OSPL90. Which test condition matches the definition taught?",
        "o": [
          "90 dB SPL input with the gain control full on",
          "90 dB HL input with the gain control full on",
          "60 dB SPL input with the gain control full on",
          "90 dB SPL input with the gain control at minimum"
        ],
        "a": 0,
        "x": "OSPL90 measures output with a 90 dB SPL input and the gain control in the full-on position. dB HL is the wrong input unit, 60 dB SPL is the wrong input level, and minimum gain is the wrong control setting.",
        "s": [
          "OM-L3F-21"
        ],
        "difficulty": "application",
        "family": "select measurement conditions",
        "variant": "Input unit level and gain-control protocol",
        "trapTargets": [
          "HL/SPL unit swap",
          "gain setting versus output level"
        ],
        "evidence": [
          "L3F slide21 explicitMPO/OSPL90 definition."
        ]
      },
      {
        "id": "om1.B.29",
        "chapter": "hearing-aids",
        "c": "programming",
        "t": "mc",
        "q": "NOAH and the manufacturer module are installed, but the computer has no link to the hearing aid. Which part completes the programming connection?",
        "o": [
          "A remote-microphone transmitter",
          "A NoahLink interface",
          "A real-ear probe tube",
          "An earmold sound bore"
        ],
        "a": 1,
        "x": "The interface connects the computer and hearing aid for programming. NoahLink is the connection shown in class. A remote microphone transmits listening audio, a probe tube measures output, and the earmold bore channels acoustic sound.",
        "s": [
          "OM-L3F-23",
          "OM-L3F-24",
          "OM-L3F-25"
        ],
        "difficulty": "application",
        "family": "identify missing fitting component",
        "variant": "Software present but hardware link absent",
        "trapTargets": [
          "listening accessory versus programming interface"
        ],
        "evidence": [
          "L3F slide 23",
          "L3F slide 24",
          "L3F slide 25"
        ]
      },
      {
        "id": "om1.B.30",
        "chapter": "hearing-aids",
        "c": "ha-styles",
        "t": "mc",
        "q": "Two aids sit behind the pinna. One sends an electrical signal down a thin wire; the other sends sound through earmold tubing. Which statement distinguishes them?",
        "o": [
          "The wire connects a RIC receiver in the canal",
          "The tubing places the BTE receiver in the canal",
          "Both place all electronics behind the ear",
          "Both carry an acoustic signal down the wire"
        ],
        "a": 0,
        "x": "A RIC places the receiver in the canal and connects it by a thin wire. A conventional BTE keeps the receiver behind the ear and channels its sound through the ear hook, tubing and earmold. The electrical and acoustic pathways are different.",
        "s": [
          "OM-L3F-13",
          "OM-L3F-14"
        ],
        "difficulty": "application",
        "family": "compare hardware",
        "variant": "Same external location different receiver position",
        "trapTargets": [
          "behind-ear appearance implies BTE"
        ],
        "evidence": [
          "L3F slide 13",
          "L3F slide 14"
        ]
      },
      {
        "id": "om1.B.31",
        "chapter": "hearing-aids",
        "c": "prescriptive",
        "t": "tf",
        "q": "The pediatric DSL fitting approach considers language learning when setting amplification for children.",
        "a": true,
        "x": "The lecture identifies a pediatric DSL version that considers language learning while seeking intelligibility and comfort. Children are developing language and need access to speech they have not already learned to fill in.",
        "s": [
          "OM-L3F-27"
        ],
        "difficulty": "recall",
        "family": "single assertion",
        "variant": "Developmental basis of prescription",
        "trapTargets": [
          "adult and child language needs identical"
        ],
        "evidence": [
          "L3F slide 27; T09102026 final discussion of NAL and pediatric DSL."
        ]
      },
      {
        "id": "om1.B.32",
        "chapter": "children",
        "c": "jcih",
        "t": "mc",
        "q": "An infant is screened at 1 month, diagnosed at 2 months and enrolled in intervention at 4 months. Which timeline has the program met?",
        "o": [
          "Both 1-3-6 and 1-2-3",
          "1-3-6 but not 1-2-3",
          "1-2-3 but not 1-3-6",
          "Neither 1-3-6 nor 1-2-3"
        ],
        "a": 1,
        "x": "All three steps meet the 1-3-6 deadlines. Intervention at four months misses the encouraged three-month intervention target in 1-2-3. The first two steps meet both sequences, but that does not make the whole faster sequence complete.",
        "s": [
          "OM-L3F-36"
        ],
        "difficulty": "application",
        "family": "audit timeline",
        "variant": "One step misses faster benchmark",
        "trapTargets": [
          "completing first two benchmarks completes all"
        ],
        "evidence": [
          "L3F slide 36"
        ]
      },
      {
        "id": "om1.B.33",
        "chapter": "children",
        "c": "peds-bte",
        "t": "mc",
        "q": "An infant needs a fitting that can accommodate repeated ear growth while keeping electronics out of the ear canal. Which combination meets both needs?",
        "o": [
          "BTE with a replaceable soft earmold",
          "RIC with a receiver in the canal",
          "CIC with a fixed custom shell",
          "Extended-wear aid near the eardrum"
        ],
        "a": 0,
        "x": "A BTE with a soft, replaceable earmold accommodates growth and keeps electronics outside the canal. A RIC places its receiver in the canal, a CIC places electronics in a custom canal shell, and an extended-wear aid sits deeply in the canal.",
        "s": [
          "OM-L3F-14",
          "OM-L3F-15",
          "OM-L3F-16",
          "OM-L3F-45"
        ],
        "difficulty": "application",
        "family": "fit to two constraints",
        "variant": "Growth plus electronics location",
        "trapTargets": [
          "smallest aid is best pediatric fit"
        ],
        "evidence": [
          "L3F slide 14",
          "L3F slide 15",
          "L3F slide 16",
          "L3F slide 45"
        ]
      },
      {
        "id": "om1.B.34",
        "chapter": "children",
        "c": "child-hl-effects",
        "t": "tf",
        "q": "A child who detects speech may still miss softer parts of the same speech signal.",
        "a": true,
        "x": "The hearing-loss effects slides explain that only parts of speech may reach the brain, softer sounds can be missed, and what is heard may be distorted. Detecting that someone spoke is not proof of access to every speech cue.",
        "s": [
          "OM-L3F-38",
          "OM-L3F-39"
        ],
        "difficulty": "application",
        "family": "single assertion",
        "variant": "Detection versus complete speech access",
        "trapTargets": [
          "audible whole message from any response"
        ],
        "evidence": [
          "L3F slide 38",
          "L3F slide 39"
        ]
      },
      {
        "id": "om1.B.35",
        "chapter": "children",
        "c": "peds-orientation",
        "t": "mc",
        "q": "At orientation, a parent says, \"I watched you change the battery, so I can do it.\" What best checks that the instruction worked?",
        "o": [
          "Observe the parent replace and close the battery",
          "Have the parent verbally outline the battery change",
          "Have the parent identify the correct battery package",
          "Have the parent direct the clinician through the change"
        ],
        "a": 0,
        "x": "Directly observing the parent perform the task establishes practical operation ability. Explaining, identifying packaging or directing someone else can show knowledge but cannot establish that the parent can manipulate the battery and compartment. The class emphasized performing operations in the office.",
        "s": [
          "OM-L3F-28",
          "OM-L3F-46"
        ],
        "difficulty": "application",
        "family": "verify taught skill",
        "variant": "Demonstration versus verbal assurance",
        "trapTargets": [
          "watching equals performing"
        ],
        "evidence": [
          "L3F slides 28 and 46 introduce orientation; T09222026 opening HIO-BASICS discussion explicitly requires performing battery change and insertion in office."
        ]
      },
      {
        "id": "om1.B.36",
        "chapter": "children",
        "c": "special-fittings",
        "t": "mc",
        "q": "A child with external-canal atresia uses a soft-band bone-conduction device. How does that device bypass the blocked route?",
        "o": [
          "It sends vibration through the skull",
          "It sends sound through an earmold tube",
          "It delivers electrical stimulation in the cochlea",
          "It routes microphone output to the opposite ear"
        ],
        "a": 0,
        "x": "A bone-conduction device delivers vibration through the skull, bypassing the obstructed air-conduction route. Earmold tubing is the BTE acoustic route, direct cochlear electrical stimulation describes a cochlear implant, and acoustic routing to the opposite ear describes CROS.",
        "s": [
          "OM-L3F-13",
          "OM-L3F-53",
          "OM-L3F-54",
          "OM-L3F-55"
        ],
        "difficulty": "application",
        "family": "explain device mechanism",
        "variant": "Device given infer bypass route",
        "trapTargets": [
          "bone vibration confused with air amplification"
        ],
        "evidence": [
          "L3F slide 54"
        ]
      },
      {
        "id": "om1.B.37",
        "chapter": "verification",
        "c": "verify-validate",
        "t": "mc",
        "q": "A clinician compares measured output for soft speech with the target for loud speech. What should be corrected first?",
        "o": [
          "Use the target for the same input level",
          "Replace the target with the unaided PTA",
          "Average the soft and loud targets",
          "Judge the trace from patient satisfaction"
        ],
        "a": 0,
        "x": "Verification compares output at a given input level with its corresponding target. Using the loud-speech target for soft input creates a mismatched comparison. PTA is not an output target, averaging discards level dependence, and satisfaction is validation rather than this output comparison.",
        "s": [
          "OM-L3F-26",
          "OM-L3F-32"
        ],
        "difficulty": "application",
        "family": "audit measurement",
        "variant": "Wrong input-level target comparison",
        "trapTargets": [
          "target independent of input level"
        ],
        "evidence": [
          "L3F slide 26",
          "L3F slide 32"
        ]
      },
      {
        "id": "om1.B.38",
        "chapter": "verification",
        "c": "verify-validate",
        "t": "tf",
        "q": "Two aids with the same test-box response can produce different output near two patients' eardrums.",
        "a": true,
        "x": "Test-box conditions simulate an average resonant response. Actual ear canals differ, so equal test-box responses do not guarantee equal in-ear output. Real-ear measurements sample the individual ear.",
        "s": [
          "OM-L3F-31"
        ],
        "difficulty": "application",
        "family": "single assertion",
        "variant": "Identical device response different ears",
        "trapTargets": [
          "test box equals individual ear"
        ],
        "evidence": [
          "L3F slide 31; T09222026 verification discussion emphasizes individual ear-canal size."
        ]
      },
      {
        "id": "om1.B.39",
        "chapter": "verification",
        "c": "verify-validate",
        "t": "mc",
        "q": "The clinician switches the fitting prescription from NAL-NL2 to DSL. Why may the desired target curves change before any hardware is replaced?",
        "o": [
          "The selected prescriptive algorithm changed",
          "The measured hearing thresholds necessarily changed",
          "The receiver's maximum output necessarily changed",
          "The test-box input level necessarily changed"
        ],
        "a": 0,
        "x": "The verification slide states that desired targets depend on the selected algorithm. Changing the algorithm can therefore change the target curves without any necessary change in measured thresholds, hardware output capacity or test-box input. Those are different fitting or measurement variables.",
        "s": [
          "OM-L3F-27",
          "OM-L3F-32"
        ],
        "difficulty": "application",
        "family": "identify governing variable",
        "variant": "Prescription changes target without hardware change",
        "trapTargets": [
          "style determines prescription"
        ],
        "evidence": [
          "L3F slide 27",
          "L3F slide 32"
        ]
      },
      {
        "id": "om1.B.40",
        "chapter": "verification",
        "c": "verify-validate",
        "t": "mc",
        "q": "A patient's main goal is understanding conversation in a noisy restaurant. Which result most directly evaluates that goal after fitting?",
        "o": [
          "Maximum hearing-aid output in a test box",
          "Aided speech understanding in background noise",
          "Probe-microphone output for a loud input",
          "Agreement between device gain and specifications"
        ],
        "a": 1,
        "x": "Aided speech testing in noise assesses functional speech understanding relevant to the goal and is validation. The other results assess device output or specifications. They matter for verification but do not directly show how the patient understands conversation in noise.",
        "s": [
          "OM-L3F-33",
          "OM-L3F-34"
        ],
        "difficulty": "application",
        "family": "match outcome to goal",
        "variant": "Real-life goal selects functional test",
        "trapTargets": [
          "verified output establishes communication success"
        ],
        "evidence": [
          "L3F slide 33",
          "L3F slide 34"
        ]
      },
      {
        "id": "om1.B.41",
        "chapter": "classroom",
        "c": "reverberation",
        "t": "mc",
        "q": "A classroom smaller than 10,000 ft³ has background noise of 40 dBA and RT of 0.4 seconds. Which judgment uses the two classroom standards taught correctly?",
        "o": [
          "Noise fails ANSI and RT meets ANSI only",
          "Noise meets ANSI and RT meets ANSI only",
          "Noise fails ANSI and RT meets both time targets",
          "Noise meets ANSI and RT exceeds both time targets"
        ],
        "a": 0,
        "x": "The small-room ANSI values are noise no higher than 35 dBA and RT no longer than 0.6 seconds. Noise of 40 exceeds its limit; RT of 0.4 meets the ANSI limit but exceeds the separate 0.3-second optimal speech-perception target. Each measure must be compared with the correct criterion.",
        "s": [
          "OM-L3F-62",
          "OM-L3F-66"
        ],
        "difficulty": "application",
        "family": "apply two acoustic criteria",
        "variant": "Noise fails ANSI while RT meets ANSI but not optimal",
        "trapTargets": [
          "0.3 and0.6 contexts swapped",
          "one compliant metric makes whole room compliant"
        ],
        "evidence": [
          "L3F slide62 optimal0.3seconds; slide66 small-room<=10,000ft3 ANSI<=35dBA and<=0.6s."
        ]
      },
      {
        "id": "om1.B.42",
        "chapter": "classroom",
        "c": "reverberation",
        "t": "mc",
        "q": "A quiet classroom still has speech sounds that overlap after the teacher stops talking. Which finding best explains that problem?",
        "o": [
          "A long reverberation time",
          "A low background-noise level",
          "A positive signal-to-noise ratio",
          "A short teacher-student distance"
        ],
        "a": 0,
        "x": "Reflections prolong sound and can overlap the direct speech signal, so long RT fits this complaint. Low noise, a positive SNR and short distance are generally favorable; they do not explain the prolonged sound after the source stops.",
        "s": [
          "OM-L3F-61",
          "OM-L3F-62"
        ],
        "difficulty": "application",
        "family": "identify controlling acoustic variable",
        "variant": "Quiet but prolonged sound",
        "trapTargets": [
          "quiet room has no acoustic barrier"
        ],
        "evidence": [
          "L3F slide 61",
          "L3F slide 62"
        ]
      },
      {
        "id": "om1.B.43",
        "chapter": "classroom",
        "c": "rm-hat",
        "t": "mc",
        "q": "A school wants the teacher's voice distributed throughout the room for all students. Which arrangement is the classroom audio distribution approach?",
        "o": [
          "Teacher microphone feeding room speakers",
          "Teacher microphone feeding one personal receiver",
          "Teacher microphone sending infrared to one headset",
          "Teacher microphone feeding wired headphones"
        ],
        "a": 0,
        "x": "CADS distributes the teacher's voice through classroom sound-field speakers. The other arrangements deliver the signal to an individual receiver, headset or headphones rather than distributing it throughout the room.",
        "s": [
          "OM-L3F-56",
          "OM-L3F-68",
          "OM-L3F-69"
        ],
        "difficulty": "application",
        "family": "select system for audience",
        "variant": "Whole-class distribution versus personal access",
        "trapTargets": [
          "CADS equals individual remote receiver"
        ],
        "evidence": [
          "L3F slide 68",
          "L3F slide 69"
        ]
      },
      {
        "id": "om1.B.44",
        "chapter": "classroom",
        "c": "rm-hat",
        "t": "mc",
        "q": "A child wears a personal FM/DM receiver, but the remote microphone is left beside the child during teaching. Which change most directly restores the intended distance advantage?",
        "o": [
          "Move the remote microphone to the teacher",
          "Move the child's receiver to the teacher",
          "Increase the hearing aid's overall gain",
          "Use the child's local microphone alone"
        ],
        "a": 0,
        "x": "The remote microphone needs to capture the teacher near the source. Moving the receiver away from the child reverses the intended arrangement. Raising overall gain or relying on the microphone at the child also captures the signal after room noise and distance have affected it.",
        "s": [
          "OM-L3F-65",
          "OM-L3F-68"
        ],
        "difficulty": "application",
        "family": "find setup error",
        "variant": "Correct hardware wrong microphone location",
        "trapTargets": [
          "remote hardware alone guarantees benefit"
        ],
        "evidence": [
          "L3F slide 65",
          "L3F slide 68"
        ]
      },
      {
        "id": "om1.B.45",
        "chapter": "outcomes",
        "c": "smart-goals",
        "t": "tf",
        "q": "A goal requiring independent troubleshooting in four of five trials is met when all four successful trials require step-by-step adult direction.",
        "a": false,
        "x": "The success count meets four of five, but repeated step-by-step direction does not meet independent performance. The goal must be judged using both the stated performance criterion and the allowed assistance, not the number alone.",
        "s": [
          "OM-L3F-80"
        ],
        "difficulty": "application",
        "family": "apply goal criterion",
        "variant": "Accuracy achieved independence missing",
        "trapTargets": [
          "count successes ignores assistance"
        ],
        "evidence": [
          "L3F slide 80"
        ]
      },
      {
        "id": "om1.B.46",
        "chapter": "outcomes",
        "c": "ald-assessment",
        "t": "mc",
        "q": "After ALD use, teacher SIFTER ratings improve, but the student still reports trouble hearing peers on LIFE-R. What is the most appropriate interpretation?",
        "o": [
          "The reports address different parts of function",
          "The student report invalidates the teacher report",
          "SIFTER proves all classroom listening has improved",
          "LIFE-R should be replaced by the device test box"
        ],
        "a": 0,
        "x": "SIFTER and LIFE-R address overlapping but different aspects of classroom performance and listening. The slides recommend combining tools with observations and other evidence. Improvement in one domain can coexist with an unresolved peer-listening problem; neither respondent automatically invalidates the other, and device output cannot replace functional reports.",
        "s": [
          "OM-L3F-72",
          "OM-L3F-73",
          "OM-L3F-74",
          "OM-L3F-75"
        ],
        "difficulty": "application",
        "family": "reconcile outcomes",
        "variant": "Educational improvement with residual listening issue",
        "trapTargets": [
          "one favorable score covers every domain"
        ],
        "evidence": [
          "L3F slide 72",
          "L3F slide 73",
          "L3F slide 74",
          "L3F slide 75"
        ]
      },
      {
        "id": "om1.B.47",
        "chapter": "dots",
        "c": "count-dots",
        "t": "mc",
        "q": "High-frequency thresholds improve while the 500/1000/2000-Hz PTA stays unchanged. Additional speech dots now fall on or below the threshold line. Which conclusion follows?",
        "o": [
          "The SII can increase despite an unchanged PTA",
          "The SII must stay fixed because the PTA did",
          "The word score must equal the number of new dots",
          "The dots above threshold become the audible ones"
        ],
        "a": 0,
        "x": "Count-the-dots uses the audible speech-weighted dots across frequencies, not just the three-frequency PTA. If more dots become audible, the SII estimate can rise even with an unchanged PTA. The dots are not a measured word score, and audible dots are on or below the line, not above it.",
        "s": [
          "KM",
          "DOTSA",
          "T0910"
        ],
        "difficulty": "application",
        "family": "reconcile measures",
        "variant": "High-frequency gain changes dots not PTA",
        "trapTargets": [
          "PTA fully determines audibility"
        ],
        "evidence": [
          "T09102026 count-the-dots demonstration: dots on or below threshold, high-frequency information weighting, and separate prediction curves; Killion and Mueller count-the-dots article/figure."
        ]
      },
      {
        "id": "om1.B.48",
        "chapter": "dots",
        "c": "sii-to-speech",
        "t": "mc",
        "q": "For one SII, a worksheet predicts 55% for isolated words and 90% for sentences. A student records 90% as the predicted isolated-word score. What was the error?",
        "o": [
          "Using the sentence curve for a different speech task",
          "Counting audible dots below the threshold line",
          "Using the same SII for both prediction curves",
          "Allowing context to affect the sentence estimate"
        ],
        "a": 0,
        "x": "Each speech task has its own relationship to SII. A sentence prediction cannot be substituted for the isolated-word prediction. One SII can validly be used with both curves, audible dots are counted on/below the threshold line, and sentence context is why predictions differ. The numbers here are supplied worksheet values, not claimed readings from an unseen graph.",
        "s": [
          "KM",
          "DOTSA",
          "T0910"
        ],
        "difficulty": "application",
        "family": "audit curve selection",
        "variant": "Task-specific predicted score swapped",
        "trapTargets": [
          "sentence prediction substitutes for word score"
        ],
        "evidence": [
          "T09102026 NU-6 word and sentence/spondee curves are interpreted separately for the same count. Supplied example scores avoid inventing a source-graph coordinate."
        ]
      },
      {
        "id": "om1.B.49",
        "chapter": "guest",
        "c": "tympanometry",
        "t": "mc",
        "q": "A referral includes normal tympanograms but no hearing thresholds. Which question remains unanswered by those tympanograms?",
        "o": [
          "How soft a sound the child can detect",
          "Whether middle-ear pressure is normal",
          "How the middle ear responds to pressure changes",
          "Whether the tympanogram has a normal peak"
        ],
        "a": 0,
        "x": "Tympanometry objectively measures middle-ear function using pressure variation. It is not a hearing test and does not determine hearing sensitivity. A normal tympanogram describes middle-ear pressure and response characteristics, not the softest sound the child detects.",
        "s": [
          "OM-GUEST-12",
          "OM-GUEST-14"
        ],
        "difficulty": "application",
        "family": "identify missing information",
        "variant": "Normal middle ear without sensitivity data",
        "trapTargets": [
          "normal tympanometry equals normal hearing"
        ],
        "evidence": [
          "GUEST slide 12",
          "GUEST slide 14"
        ]
      },
      {
        "id": "om1.B.50",
        "chapter": "guest",
        "c": "abr",
        "t": "mc",
        "q": "An ABR threshold estimate differs from a behavioral threshold. Which step follows the guest lecture's cross-check approach?",
        "o": [
          "Check the ABR stimulus and applicable corrections",
          "Average the two values for the final audiogram",
          "Replace the behavioral value with the raw ABR value",
          "Classify degree from whichever value is poorer"
        ],
        "a": 0,
        "x": "ABR interpretation must account for the stimulus, transducer, correction factors and physiologic limits. Investigate how the measures were obtained and why they differ. Averaging them, replacing one with a raw estimate, or choosing the poorer value without that review treats unlike measurements as interchangeable.",
        "s": [
          "OM-GUEST-12",
          "OM-GUEST-13",
          "OM-GUEST-16"
        ],
        "difficulty": "application",
        "family": "cross-check measurement",
        "variant": "Disagreement requires method context",
        "trapTargets": [
          "ABR number equals behavioral threshold"
        ],
        "evidence": [
          "GUEST slide 13",
          "GUEST slide 16"
        ]
      },
      {
        "id": "om1.B.51",
        "chapter": "guest",
        "c": "soundfield",
        "t": "mc",
        "q": "Sound-field testing was normal. Later insert-earphone testing shows hearing loss in one ear. Which explanation allows both results to be valid?",
        "o": [
          "The better ear drove the sound-field response",
          "The hearing loss necessarily developed between visits",
          "Both ears contributed equally to the first response",
          "The insert results must be discarded as inconsistent"
        ],
        "a": 0,
        "x": "Sound-field responses may be driven by the better ear. Normal sound-field results can therefore coexist with unilateral hearing loss on ear-specific testing. The sequence does not by itself prove a new loss, equal contribution from both ears, or invalid insert results.",
        "s": [
          "OM-GUEST-9"
        ],
        "difficulty": "application",
        "family": "reconcile serial tests",
        "variant": "Normal sound field then unilateral insert result",
        "trapTargets": [
          "new ear-specific finding must be new loss"
        ],
        "evidence": [
          "GUEST slide 9"
        ]
      },
      {
        "id": "om1.B.52",
        "chapter": "guest",
        "c": "cross-check",
        "t": "tf",
        "q": "A complete-looking audiogram still requires attention to response reliability before its thresholds guide intervention.",
        "a": true,
        "x": "The guest lecture places reliability among the initial interpretation checks. A fully drawn graph does not establish that its responses were dependable. Interpret the findings in clinical context and cross-check them before using them to guide decisions.",
        "s": [
          "OM-GUEST-5",
          "OM-GUEST-8",
          "OM-GUEST-12"
        ],
        "difficulty": "application",
        "family": "single assertion",
        "variant": "Graph completeness does not establish reliability",
        "trapTargets": [
          "complete plotted curve guarantees valid thresholds"
        ],
        "evidence": [
          "GUEST slide8 SmartArt startswithReliability good/fair/poor; slide5interpretationclinicalcontext; slide12crosscheck."
        ]
      }
    ],
    "shorts": [
      {
        "id": "om1.B.w1",
        "chapter": "verification",
        "c": "verify-validate",
        "q": "A child now follows classroom discussion more easily, but probe-microphone testing shows soft-speech output below the prescribed targets. Identify what each finding evaluates. State one fitting action and one functional measure to repeat after that action.",
        "rubric": [
          "Classroom improvement is validation of functional benefit; the probe-microphone result is verification showing that intended soft-speech output has not been delivered.",
          "Adjust the fitting for the relevant soft-speech inputs/frequencies, then remeasure output against the matching prescribed targets while retaining audibility and comfort.",
          "Repeat an appropriate functional measure such as student/teacher listening reports or aided speech testing in the relevant conditions to check benefit after the adjustment."
        ],
        "s": [
          "OM-L3F-26",
          "OM-L3F-31",
          "OM-L3F-32",
          "OM-L3F-33",
          "OM-L3F-34"
        ],
        "evidence": [
          "L3F slides 26,31-34; T09222026 distinguishes objective output from patient performance. Novel mismatch reverses the old short: functional improvement coexists with a verified output shortfall."
        ]
      },
      {
        "id": "om1.B.w2",
        "chapter": "children",
        "c": "listening-check",
        "q": "An infant wears BTE aids during waking hours. Today the caregiver hears weak, intermittent sound during the listening check and proposes leaving them on until next month's appointment. Give an immediate device-management response, a way to maintain auditory access if repair is needed, and the developmental reason to avoid that delay.",
        "rubric": [
          "Do not count a malfunctioning aid as useful wear. Check the battery/charge and sound pathway or connections, and obtain prompt audiology help if clear output cannot be restored.",
          "Arrange an appropriately fitted and verified loaner BTE on the infant's earmold while the usual aid is repaired, then confirm function with listening checks.",
          "The infant's auditory brain and language learning need consistent usable input from early life. A device that is merely on the ear but delivering poor output does not provide the intended access."
        ],
        "s": [
          "OM-L3F-41",
          "OM-L3F-42",
          "OM-L3F-45",
          "OM-L3F-46",
          "OM-L3F-47"
        ],
        "evidence": [
          "L3F slide46 linked notes specify malfunctioning aid exception; slides41-42 early auditory brain access; slide45 loaner on child earmold; slide47 listening-check demonstration. T09222026 daily listening checks and staged troubleshooting."
        ]
      }
    ],
    "graphs": [
      {
        "seed": 9271010,
        "right": {
          "type": "sensorineural",
          "degree": "moderate",
          "config": "rising"
        },
        "left": {
          "type": "conductive",
          "degree": "moderate",
          "config": "flat"
        }
      },
      {
        "seed": 9271011,
        "right": {
          "type": "sensorineural",
          "degree": "mild",
          "config": "sloping"
        },
        "left": {
          "type": "mixed",
          "degree": "modsev",
          "config": "sloping"
        }
      }
    ]
  },
  {
    "name": "C",
    "seed": 927103,
    "objectives": [
      {
        "id": "om1.C.01",
        "chapter": "foundations",
        "c": "core-care",
        "t": "mc",
        "q": "An AR report lists two findings: limited vocabulary and withdrawal from classroom discussions. Which CORE categories distinguish them?",
        "o": [
          "Communication status and overall participation",
          "Overall participation and related personal factors",
          "Environmental factors and communication status",
          "Related personal factors and environmental factors"
        ],
        "a": 0,
        "x": "Vocabulary belongs to the language portion of Communication status. Withdrawal from classroom discussions concerns educational/social participation. Personal factors include characteristics such as age and personality; environmental factors concern the surrounding services, barriers and acoustics.",
        "s": [
          "OM-L1-24",
          "OM-L1-25",
          "OM-L1-26",
          "OM-L1-27"
        ],
        "difficulty": "application",
        "family": "classify paired findings",
        "variant": "language versus participation in one report",
        "trapTargets": [
          "CORE category swap"
        ],
        "evidence": [
          "L1 slide 24",
          "L1 slide 25",
          "L1 slide 26",
          "L1 slide 27"
        ]
      },
      {
        "id": "om1.C.02",
        "chapter": "foundations",
        "c": "ar-definition",
        "t": "mc",
        "q": "A child now detects classroom speech with amplification but still avoids group activities. Which outcome is needed to meet the broader goal of AR?",
        "o": [
          "More participation with classmates",
          "More awareness of classroom sounds",
          "More accurate detection of speech sounds",
          "More audibility for soft speech"
        ],
        "a": 0,
        "x": "AR aims to enhance activities and participation. The remaining problem is avoidance of group activities, so the relevant outcome is participation with classmates. Sound awareness, speech detection and audibility support access but do not themselves show that the participation goal was met.",
        "s": [
          "OM-L1-3",
          "OM-L1-31"
        ],
        "difficulty": "application",
        "family": "reconcile access and function",
        "variant": "detection improves while participation remains restricted",
        "trapTargets": [
          "audibility equals full rehabilitation"
        ],
        "evidence": [
          "L1 slide 3",
          "L1 slide 31"
        ]
      },
      {
        "id": "om1.C.03",
        "chapter": "foundations",
        "c": "core-care",
        "t": "mc",
        "q": "Which CARE plan is filed under the wrong component?",
        "o": [
          "Counseling: discuss realistic expectations",
          "Audibility: fit an assistive listening device",
          "Remediation: practice visual communication cues",
          "Environment: measure unaided hearing thresholds"
        ],
        "a": 3,
        "x": "Measuring hearing thresholds is an assessment of communication status under CORE. CARE Environmental coordination changes situations or communication-partner support. Expectations, assistive listening and visual training fit the other three management entries.",
        "s": [
          "OM-L1-24",
          "OM-L1-28",
          "OM-L1-29",
          "OM-L1-30",
          "OM-L1-31"
        ],
        "difficulty": "application",
        "family": "identify incompatible classification",
        "variant": "three management actions versus an assessment action",
        "trapTargets": [
          "CORE versus CARE"
        ],
        "evidence": [
          "L1 slide 24",
          "L1 slide 28",
          "L1 slide 29",
          "L1 slide 30",
          "L1 slide 31"
        ]
      },
      {
        "id": "om1.C.04",
        "chapter": "foundations",
        "c": "core-care",
        "t": "tf",
        "q": "In CORE, a child’s age is a related personal factor even when it influences the choice of communication activities.",
        "a": true,
        "x": "Age is listed under Related personal factors. Its influence on a management choice does not move it into Communication status, Environmental factors or CARE. CORE records the relevant personal characteristic so the team can use it when planning.",
        "s": [
          "OM-L1-26"
        ],
        "difficulty": "comparison",
        "family": "classify a planning variable",
        "variant": "age affects intervention but remains a personal factor",
        "trapTargets": [
          "factor changes category when it affects another domain"
        ],
        "evidence": [
          "L1 slide26 CORE Related Personal Factors includes age."
        ]
      },
      {
        "id": "om1.C.05",
        "chapter": "audiograms",
        "c": "loss-type",
        "t": "mc",
        "q": "Two ears have flat AC thresholds of 35 dB HL. BC is 10 dB HL in one ear and 35 dB HL in the other. Which part of their descriptions differs?",
        "o": [
          "Type only",
          "Degree only",
          "Configuration only",
          "Degree and configuration"
        ],
        "a": 0,
        "x": "The AC levels give both ears the same mild degree and flat configuration. Normal BC with an air-bone gap is conductive, while elevated AC and BC together without a gap are sensorineural. Type changes even when AC degree and shape match.",
        "s": [
          "OM-L1-15",
          "OM-L1-16",
          "OM-L1-17",
          "OM-L1-18"
        ],
        "difficulty": "application",
        "family": "compare matched audiograms",
        "variant": "AC held constant while BC changes",
        "trapTargets": [
          "degree determines type",
          "configuration determines type"
        ],
        "evidence": [
          "L1 slide 15",
          "L1 slide 16",
          "L1 slide 17",
          "L1 slide 18"
        ]
      },
      {
        "id": "om1.C.06",
        "chapter": "audiograms",
        "c": "configuration",
        "t": "tf",
        "q": "A rising audiogram can have poorer low-frequency thresholds than high-frequency thresholds.",
        "a": true,
        "x": "Rising describes thresholds that improve toward the higher frequencies. Because larger dB HL numbers are poorer and are plotted lower, the curve rises as hearing improves. Configuration describes shape, not the site or degree of loss.",
        "s": [
          "OM-L1-17"
        ],
        "difficulty": "comparison",
        "family": "interpret audiogram orientation",
        "variant": "vertical axis and frequency direction",
        "trapTargets": [
          "rising means worsening at high frequencies"
        ],
        "evidence": [
          "L1 slide 17"
        ]
      },
      {
        "id": "om1.C.07",
        "chapter": "heredity",
        "c": "inheritance",
        "t": "mc",
        "q": "Family A has one heterozygous affected parent with an autosomal-dominant variant and one unaffected noncarrier parent. Family B has two unaffected carriers of the same recessive variant. Which comparison of affected-child risk is correct?",
        "o": [
          "A 50%, B 25%",
          "A 25%, B 50%",
          "A 50%, B 50%",
          "A 25%, B 25%"
        ],
        "a": 0,
        "x": "Under the simple models taught, A has a 50% risk and B has a 25% risk for each pregnancy. Thus A has twice the risk. An unaffected recessive carrier is not equivalent to an unaffected noncarrier in the dominant comparison.",
        "s": [
          "OM-L2-12",
          "OM-L2-13",
          "OM-L2-15",
          "OM-L2-16"
        ],
        "difficulty": "application",
        "family": "compare inheritance models",
        "variant": "compare risks rather than recall one pedigree percentage",
        "trapTargets": [
          "carrier versus affected",
          "dominant versus recessive probability"
        ],
        "evidence": [
          "L2 slide 12",
          "L2 slide 13",
          "L2 slide 15",
          "L2 slide 16"
        ]
      },
      {
        "id": "om1.C.08",
        "chapter": "heredity",
        "c": "inheritance",
        "t": "mc",
        "q": "In the recessive model taught, an unaffected child has two carrier parents. What does the unaffected status alone establish about the child’s inherited alleles?",
        "o": [
          "Zero or one problem allele",
          "Exactly one problem allele",
          "Two problem alleles",
          "No problem alleles"
        ],
        "a": 0,
        "x": "In the simplified recessive model, a child with two problem alleles is affected. An unaffected child can be a carrier with one problem allele or can have inherited two normal alleles. Hearing status alone cannot distinguish those two unaffected outcomes.",
        "s": [
          "OM-L2-15",
          "OM-L2-16"
        ],
        "difficulty": "application",
        "family": "identify a limit of phenotype information",
        "variant": "normal hearing cannot distinguish carrier from noncarrier",
        "trapTargets": [
          "normal hearing means no recessive allele"
        ],
        "evidence": [
          "L2 slide 15",
          "L2 slide 16"
        ]
      },
      {
        "id": "om1.C.09",
        "chapter": "heredity",
        "c": "inheritance",
        "t": "mc",
        "q": "A student says maternal mitochondrial inheritance means a child receives no genetic information from the father. What is the error?",
        "o": [
          "The maternal rule applies to mitochondrial DNA",
          "The father supplies mitochondrial DNA to sons",
          "Both parents supply equal mitochondrial shares",
          "Only mitochondrial DNA carries inherited information"
        ],
        "a": 0,
        "x": "Mitochondrial DNA follows the maternal route, but most human DNA is nuclear and a child also inherits genetic material from the father. The mitochondrial exception does not replace the usual two-parent contribution of nuclear chromosomes.",
        "s": [
          "OM-L2-11",
          "OM-L2-19"
        ],
        "difficulty": "application",
        "family": "restrict an inheritance rule to its correct domain",
        "variant": "mitochondrial maternal route wrongly generalized to all genes",
        "trapTargets": [
          "mitochondrial inheritance equals all inheritance"
        ],
        "evidence": [
          "L2 slide11 each parent contributes23 chromosomes; slide19 most DNA is nuclear and mitochondrial DNA is maternally inherited."
        ]
      },
      {
        "id": "om1.C.10",
        "chapter": "heredity",
        "c": "endo-exo",
        "t": "mc",
        "q": "One child develops genetic hearing loss after language is established. Another has infection-related hearing loss around birth. Which pair classifies their causes?",
        "o": [
          "First endogenous, second exogenous",
          "First exogenous, second endogenous",
          "Both endogenous",
          "Both exogenous"
        ],
        "a": 0,
        "x": "Endogenous identifies a hereditary/genetic source, not an age of onset. Exogenous identifies an external cause such as infection. Either category can produce congenital or acquired loss, so onset does not determine the source classification.",
        "s": [
          "OM-L2-3",
          "OM-L2-4"
        ],
        "difficulty": "application",
        "family": "separate causal and temporal categories",
        "variant": "genetic later onset versus infectious early onset",
        "trapTargets": [
          "congenital equals genetic",
          "acquired equals exogenous"
        ],
        "evidence": [
          "L2 slide 3",
          "L2 slide 4"
        ]
      },
      {
        "id": "om1.C.11",
        "chapter": "heredity",
        "c": "inheritance",
        "t": "mc",
        "q": "A father has unilateral hereditary loss and his child has bilateral hereditary loss. Testing finds the same autosomal-dominant variant. Which interpretation fits the characteristics taught?",
        "o": [
          "The different laterality can fit dominant loss",
          "Bilateral loss changes the pattern to recessive",
          "Unilateral loss excludes a hereditary cause",
          "Different laterality establishes separate exogenous causes"
        ],
        "a": 0,
        "x": "The dominant-loss slide lists unilateral or bilateral hearing loss and possible progression. Different laterality does not by itself contradict the same inherited cause, change an allele’s inheritance pattern or prove an external cause.",
        "s": [
          "OM-L2-12"
        ],
        "difficulty": "application",
        "family": "reconcile phenotype and inheritance",
        "variant": "same dominant variant with different laterality",
        "trapTargets": [
          "same inherited cause requires identical laterality"
        ],
        "evidence": [
          "L2 slide12 autosomal dominant characteristics include unilateral/bilateral loss and progression."
        ]
      },
      {
        "id": "om1.C.12",
        "chapter": "heredity",
        "c": "connexin",
        "t": "mc",
        "q": "A trainee rules out hereditary hearing loss because the child has no other medical problems. Which taught condition shows why that reasoning fails?",
        "o": [
          "Connexin 26 hearing loss",
          "Branchio-oto-renal syndrome",
          "CHARGE syndrome",
          "Usher syndrome"
        ],
        "a": 0,
        "x": "Connexin 26 hearing loss is a common nonsyndromic hereditary loss and may occur without other medical problems. BOR, CHARGE and Usher have associated non-auditory findings. Lack of a syndrome does not exclude a genetic cause.",
        "s": [
          "OM-L2-21",
          "OM-L2-43",
          "OM-L2-45",
          "OM-L2-72"
        ],
        "difficulty": "application",
        "family": "test a categorical exclusion",
        "variant": "isolated hearing loss still has a genetic explanation",
        "trapTargets": [
          "hereditary equals syndromic"
        ],
        "evidence": [
          "L2 slide 21",
          "L2 slide 43",
          "L2 slide 45",
          "L2 slide 72"
        ]
      },
      {
        "id": "om1.C.13",
        "chapter": "causes",
        "c": "syphilis",
        "t": "tf",
        "q": "A normal appearance at birth excludes syphilis as a cause of later progressive sensorineural hearing loss.",
        "a": false,
        "x": "Many infants with congenital syphilis are asymptomatic at birth. The taught hearing loss may have a late onset and progress, so absence of visible symptoms at birth does not exclude it.",
        "s": [
          "OM-L2-29"
        ],
        "difficulty": "comparison",
        "family": "test temporal overclaim",
        "variant": "no birth symptoms versus later progressive loss",
        "trapTargets": [
          "asymptomatic means uninfected"
        ],
        "evidence": [
          "L2 slide 29"
        ]
      },
      {
        "id": "om1.C.14",
        "chapter": "causes",
        "c": "cmv",
        "t": "mc",
        "q": "A CMV history documents exposure from the infected cervix during delivery and from infected breast milk later. How are those two routes classified, respectively?",
        "o": [
          "Perinatal and postnatal",
          "Prenatal and perinatal",
          "Postnatal and prenatal",
          "Prenatal and postnatal"
        ],
        "a": 0,
        "x": "Exposure at delivery through the infected cervix is perinatal; infected breast milk is a postnatal route. Prenatal CMV exposure occurs through the placenta. The same virus can be transmitted at different points relative to birth.",
        "s": [
          "OM-L2-26",
          "OM-L2-27"
        ],
        "difficulty": "application",
        "family": "correct route-time mismatch",
        "variant": "classify two CMV exposures within one history",
        "trapTargets": [
          "placental versus milk transmission"
        ],
        "evidence": [
          "L2 slide 26",
          "L2 slide 27"
        ]
      },
      {
        "id": "om1.C.15",
        "chapter": "causes",
        "c": "toxo",
        "t": "mc",
        "q": "Rubella and toxoplasmosis can both cause sensorineural hearing loss. Which comparison of their causes is correct?",
        "o": [
          "Only toxoplasmosis is viral",
          "Only rubella is viral",
          "Both are viral",
          "Neither is viral"
        ],
        "a": 1,
        "x": "Rubella is viral. Toxoplasmosis is parasitic. Sharing a sensorineural hearing-loss association does not place the two infections in the same pathogen category.",
        "s": [
          "OM-L2-25",
          "OM-L2-28"
        ],
        "difficulty": "application",
        "family": "separate shared outcome from etiology",
        "variant": "two infections assigned the same pathogen class",
        "trapTargets": [
          "same hearing effect equals same infectious class"
        ],
        "evidence": [
          "L2 slide 25",
          "L2 slide 28"
        ]
      },
      {
        "id": "om1.C.16",
        "chapter": "causes",
        "c": "bilirubin",
        "t": "mc",
        "q": "Two premature infants have different complications. One has intracranial bleeding; the other has brain injury from excessive bilirubin. Which term belongs to the second infant?",
        "o": [
          "Kernicterus",
          "Hydrocephalus",
          "Anoxia",
          "Intracranial hemorrhage"
        ],
        "a": 0,
        "x": "Kernicterus is brain damage from excessive bilirubin. Hydrocephalus is a complication named with intracranial hemorrhage; anoxia means insufficient oxygen. Prematurity can involve several risks, but the stated mechanism identifies this one.",
        "s": [
          "OM-L2-34",
          "OM-L2-35",
          "OM-L2-38",
          "OM-L2-39"
        ],
        "difficulty": "application",
        "family": "separate adjacent neonatal complications",
        "variant": "brain injury mechanisms contrasted",
        "trapTargets": [
          "hemorrhage versus bilirubin toxicity"
        ],
        "evidence": [
          "L2 slide 34",
          "L2 slide 35",
          "L2 slide 38",
          "L2 slide 39"
        ]
      },
      {
        "id": "om1.C.17",
        "chapter": "causes",
        "c": "anoxia",
        "t": "mc",
        "q": "After oxygen deprivation around birth, a child has near-normal low-frequency thresholds and poorer high-frequency thresholds. Which description conflicts with the taught anoxia pattern?",
        "o": [
          "The configuration is flat",
          "The loss may spare low frequencies",
          "The timing can be perinatal",
          "The cause is an external event"
        ],
        "a": 0,
        "x": "The taught pattern has normal lows with more severe high-frequency loss, so it is not flat. Oxygen deprivation is an exogenous event and may occur around birth. A response to low-frequency sounds would not erase the high-frequency loss.",
        "s": [
          "OM-L2-4",
          "OM-L2-5",
          "OM-L2-34"
        ],
        "difficulty": "application",
        "family": "identify inconsistent descriptor",
        "variant": "three supported statements and one shape mismatch",
        "trapTargets": [
          "flat substituted for high-frequency loss"
        ],
        "evidence": [
          "L2 slide 4",
          "L2 slide 5",
          "L2 slide 34"
        ]
      },
      {
        "id": "om1.C.18",
        "chapter": "causes",
        "c": "postnatal-list",
        "t": "mc",
        "q": "A child with medulloblastoma receives ototoxic chemotherapy. Which two entries in the taught postnatal-cause list correspond to those two separate concerns?",
        "o": [
          "Neoplasm and ototoxins",
          "Autoimmune disease and ototoxins",
          "Neoplasm and perilymph fistula",
          "Acoustic trauma and autoimmune disease"
        ],
        "a": 0,
        "x": "The list names medulloblastoma under neoplasm and chemotherapy under ototoxins. The record therefore raises those two concerns. It does not describe an autoimmune process, acoustic trauma or a perilymph fistula, and the question does not assign the actual hearing change to one cause without further evidence.",
        "s": [
          "OM-L2-37"
        ],
        "difficulty": "application",
        "family": "map coexisting risks to etiologic categories",
        "variant": "tumor and its medication are distinct concerns",
        "trapTargets": [
          "disease and treatment collapsed into one cause"
        ],
        "evidence": [
          "L2 slide37 postnatal list includes neoplasm: medulloblastoma and ototoxins/chemotherapy."
        ]
      },
      {
        "id": "om1.C.19",
        "chapter": "syndromes",
        "c": "charge",
        "t": "mc",
        "q": "A child has CHARGE. A note describes the “A” finding as closure of the external ear canal. What should that finding identify instead?",
        "o": [
          "Blocked nasal passages",
          "A cleft in the soft palate",
          "A malformed ossicular chain",
          "A deficient auditory nerve"
        ],
        "a": 0,
        "x": "The A stands for choanal atresia, meaning blocked nasal passages. Ear-canal, ossicular and auditory-nerve abnormalities can be relevant ear findings, but they are not what choanal atresia names.",
        "s": [
          "OM-L2-45",
          "OM-L2-46"
        ],
        "difficulty": "application",
        "family": "correct location-word substitution",
        "variant": "choanal atresia mislabeled as canal atresia",
        "trapTargets": [
          "nasal passage versus external ear canal"
        ],
        "evidence": [
          "L2 slide 45",
          "L2 slide 46"
        ]
      },
      {
        "id": "om1.C.20",
        "chapter": "syndromes",
        "c": "cdls",
        "t": "mc",
        "q": "Both Cornelia de Lange and fetal alcohol syndrome can involve poor growth. Which finding favors Cornelia de Lange in the course descriptions?",
        "o": [
          "Joined eyebrows",
          "A flat philtrum",
          "A thin upper lip",
          "Prenatal alcohol exposure"
        ],
        "a": 0,
        "x": "Synophrys, or joined eyebrows, is part of the Cornelia de Lange constellation with long eyelashes and slow growth. A flat philtrum, thin upper lip and prenatal alcohol exposure belong to the fetal alcohol pattern. Poor growth alone does not separate them.",
        "s": [
          "OM-L2-47",
          "OM-L2-48",
          "OM-L2-55"
        ],
        "difficulty": "application",
        "family": "distinguish physical look-alikes",
        "variant": "shared growth problem with distinguishing facial clue",
        "trapTargets": [
          "shared feature mistaken for unique hallmark"
        ],
        "evidence": [
          "L2 slide48 CdLS synophrys and growth; slide55 FAS philtrum, upper lip and maternal exposure."
        ]
      },
      {
        "id": "om1.C.21",
        "chapter": "syndromes",
        "c": "apert",
        "t": "mc",
        "q": "A child with Apert syndrome has fused fingers and conductive hearing loss. Which explanation connects the hearing finding to the syndrome?",
        "o": [
          "Canal or ossicular abnormalities",
          "Cochlear degeneration",
          "Auditory-nerve dyssynchrony",
          "Central auditory dysfunction"
        ],
        "a": 0,
        "x": "Canal stenosis/atresia, middle-ear disease and ossicular abnormalities explain the conductive association in Apert. Cochlear, neural and central disorders do not explain a mechanical conductive component. Syndactyly helps recognize the syndrome but is not the site of the hearing impairment.",
        "s": [
          "OM-L2-41"
        ],
        "difficulty": "application",
        "family": "connect hallmark to auditory mechanism",
        "variant": "physical identification clue versus transmission lesion",
        "trapTargets": [
          "visible hallmark mistaken for auditory lesion"
        ],
        "evidence": [
          "L2 slide 41"
        ]
      },
      {
        "id": "om1.C.22",
        "chapter": "syndromes",
        "c": "pendred",
        "t": "tf",
        "q": "Finding a thyroid goiter together with a Mondini deformity argues against Pendred syndrome.",
        "a": false,
        "x": "Both are listed with Pendred syndrome. The combination supports rather than opposes the taught pattern, which also includes progressive bilateral high-frequency sensorineural loss.",
        "s": [
          "OM-L2-76"
        ],
        "difficulty": "comparison",
        "family": "test consistency of a clinical constellation",
        "variant": "two corroborating Pendred findings mislabeled as contradictory",
        "trapTargets": [
          "supporting features treated as exclusions"
        ],
        "evidence": [
          "L2 slide76 goiter, Mondini deformity, enlarged vestibular aqueduct and progressive bilateral HF SNHL."
        ]
      },
      {
        "id": "om1.C.23",
        "chapter": "syndromes",
        "c": "treacher",
        "t": "mc",
        "q": "A child with Treacher Collins syndrome has elevated BC thresholds plus an air-bone gap. A trainee calls the loss purely conductive because the pinnae are malformed. Which correction is needed?",
        "o": [
          "Include the sensorineural component",
          "Remove the conductive component",
          "Use AC thresholds without BC",
          "Delay the type label until PTA is calculated"
        ],
        "a": 0,
        "x": "Elevated BC indicates an underlying sensorineural component, while the air-bone gap supplies the conductive component. That is mixed loss, which is among the types listed for Treacher Collins. Visible outer-ear abnormalities do not erase the BC evidence.",
        "s": [
          "OM-L2-67",
          "OM-L1-18"
        ],
        "difficulty": "application",
        "family": "reconcile visible anatomy with measured components",
        "variant": "pinna anomaly tempts conductive-only label despite BC evidence",
        "trapTargets": [
          "visible malformation overrides test evidence"
        ],
        "evidence": [
          "L2 slide67 lists CHL, mixed and SNHL; L1 slide18 loss type."
        ]
      },
      {
        "id": "om1.C.24",
        "chapter": "syndromes",
        "c": "waardenburg",
        "t": "mc",
        "q": "Two children have congenital sensorineural loss. One has differently colored irises and a white forelock; the other has progressive loss of vision. Which pairing fits?",
        "o": [
          "First Waardenburg, second Usher",
          "First Usher, second Waardenburg",
          "First Pendred, second Waardenburg",
          "First Waardenburg, second Pendred"
        ],
        "a": 0,
        "x": "Pigment differences and a white forelock identify Waardenburg. Congenital bilateral SNHL with progressive visual loss is the Usher association. Pendred is associated with thyroid goiter and inner-ear abnormalities rather than that progressive visual pattern.",
        "s": [
          "OM-L2-72",
          "OM-L2-74",
          "OM-L2-76"
        ],
        "difficulty": "application",
        "family": "contrast shared auditory finding with physical clue",
        "variant": "pigment changes versus progressive visual loss",
        "trapTargets": [
          "hearing type alone determines syndrome"
        ],
        "evidence": [
          "L2 slide 72",
          "L2 slide 74",
          "L2 slide 76"
        ]
      },
      {
        "id": "om1.C.25",
        "chapter": "syndromes",
        "c": "pierre",
        "t": "mc",
        "q": "A student describes Pierre Robin sequence as “cleft palate first, then tongue displacement, then a small lower jaw.” Which event should be first?",
        "o": [
          "Lower-jaw developmental defect",
          "Abnormal tongue placement",
          "Cleft-palate formation",
          "Conductive hearing loss"
        ],
        "a": 0,
        "x": "The slide sequence begins with the lower-jaw defect, followed by abnormal tongue placement and then cleft palate. Conductive hearing loss can accompany the condition but is not the initiating developmental event.",
        "s": [
          "OM-L2-62",
          "OM-L2-63",
          "OM-L2-64"
        ],
        "difficulty": "application",
        "family": "repair causal sequence",
        "variant": "reverse explanation corrected at initiating event",
        "trapTargets": [
          "downstream feature mistaken for initial event"
        ],
        "evidence": [
          "L2 slide 62",
          "L2 slide 63",
          "L2 slide 64"
        ]
      },
      {
        "id": "om1.C.26",
        "chapter": "syndromes",
        "c": "usher",
        "t": "mc",
        "q": "A child’s chart lists Usher syndrome. Which entry is inconsistent with the association emphasized in Lecture 2?",
        "o": [
          "Progressive visual loss",
          "Congenital bilateral SNHL",
          "Speech affected by hearing loss",
          "CHL confined to the middle ear"
        ],
        "a": 3,
        "x": "The slide emphasizes congenital bilateral sensorineural hearing loss, speech/language effects and progressive visual loss. A loss confined to middle-ear transmission is conductive and does not fit that auditory association.",
        "s": [
          "OM-L2-72"
        ],
        "difficulty": "application",
        "family": "identify an inconsistent associated feature",
        "variant": "otherwise coherent syndrome summary contains a borrowed hallmark",
        "trapTargets": [
          "conductive substituted for sensorineural association"
        ],
        "evidence": [
          "L2 slide72 auditory, visual and speech/language associations."
        ]
      },
      {
        "id": "om1.C.27",
        "chapter": "hearing-aids",
        "c": "ha-styles",
        "t": "mc",
        "q": "A wearer chooses an extended-wear aid placed deep in the canal. Which service expectation fits that choice?",
        "o": [
          "Audiologist removal for battery replacement",
          "User battery replacement behind the pinna",
          "In-house exchange of a RIC receiver wire",
          "Earmold replacement while the aid stays worn"
        ],
        "a": 0,
        "x": "Extended-wear devices are typically inserted and removed by the audiologist, and changing the battery requires removing the aid. Behind-the-pinna battery access, a RIC receiver wire and a conventional BTE earmold describe other device arrangements.",
        "s": [
          "OM-L3F-13",
          "OM-L3F-14",
          "OM-L3F-16"
        ],
        "difficulty": "application",
        "family": "infer management from hearing-aid style",
        "variant": "extended-wear service versus conventional aid access",
        "trapTargets": [
          "small styles share the same management requirements"
        ],
        "evidence": [
          "L3F slide16 extended-wear removal/insertion and battery replacement; slides13-14 contrasting BTE/RIC architecture."
        ]
      },
      {
        "id": "om1.C.28",
        "chapter": "hearing-aids",
        "c": "ha-components",
        "t": "mc",
        "q": "Which statement reverses the job of a hearing-aid component?",
        "o": [
          "The receiver turns sound into an electrical signal",
          "The amplifier modifies the electrical signal",
          "The battery supplies the device with power",
          "The processor can convert digital signals to analog"
        ],
        "a": 0,
        "x": "The receiver converts the amplified electrical signal back to acoustic output. Acoustic input is taken in by the microphone. Amplification, digital-to-analog conversion and battery power are assigned correctly in the other statements.",
        "s": [
          "OM-L3F-5",
          "OM-L3F-8",
          "OM-L3F-9",
          "OM-L3F-10"
        ],
        "difficulty": "application",
        "family": "find a reversed transduction",
        "variant": "three correct component statements and one reversed receiver",
        "trapTargets": [
          "input and output transducers swapped"
        ],
        "evidence": [
          "L3F slide 5",
          "L3F slide 8",
          "L3F slide 9",
          "L3F slide 10"
        ]
      },
      {
        "id": "om1.C.29",
        "chapter": "hearing-aids",
        "c": "quality-control",
        "t": "mc",
        "q": "An OSPL90 test uses a 90 dB SPL input with the gain control full on. Which quantity should the report identify as OSPL90?",
        "o": [
          "The maximum output in dB SPL",
          "Output minus input in dB",
          "The input level in dB SPL",
          "The patient’s threshold in dB HL"
        ],
        "a": 0,
        "x": "OSPL90 is the maximum sound pressure output under the stated 90 dB SPL input and full-on gain condition. Output minus input is gain. Neither the input level itself nor the patient’s hearing threshold is the device’s output limit.",
        "s": [
          "OM-L3F-21"
        ],
        "difficulty": "application",
        "family": "distinguish device-output metrics",
        "variant": "OSPL90 protocol given, identify reported quantity",
        "trapTargets": [
          "output limit versus gain difference",
          "input versus output"
        ],
        "evidence": [
          "L3F slide21 distinguishes gain and MPO/OSPL90."
        ]
      },
      {
        "id": "om1.C.30",
        "chapter": "hearing-aids",
        "c": "orientation",
        "t": "mc",
        "q": "During orientation a user can insert the aid and operate its controls, but cannot identify the whistling sound the clinician demonstrates. Which HIO-BASICS topic remains unaddressed?",
        "o": [
          "Acoustic feedback",
          "Instrument operation",
          "Insertion and removal",
          "Service and warranty"
        ],
        "a": 0,
        "x": "The whistling is acoustic feedback, the A in HIO-BASICS. The described insertion and operation skills have already been demonstrated. Service/warranty addresses repair arrangements, not recognizing the sound of feedback.",
        "s": [
          "OM-L3F-28",
          "T0910"
        ],
        "difficulty": "application",
        "family": "identify an orientation skill gap",
        "variant": "insertion and operation intact but feedback unrecognized",
        "trapTargets": [
          "successful operation means complete orientation"
        ],
        "evidence": [
          "L3F slide28 visible HIO-BASICS list; T0910 hearing-aid orientation discussion of feedback/whistling."
        ]
      },
      {
        "id": "om1.C.31",
        "chapter": "hearing-aids",
        "c": "programming",
        "t": "tf",
        "q": "Two users with different hearing-loss curves should receive identical gain targets if they use the same hearing-aid model.",
        "a": false,
        "x": "The audiologist enters the person’s hearing loss and generates targets that match that loss. The common device model does not replace individual programming, adjustment and verification at different input levels.",
        "s": [
          "OM-L3F-26",
          "OM-L3F-27"
        ],
        "difficulty": "comparison",
        "family": "test hardware-versus-prescription overclaim",
        "variant": "same hardware and different hearing curves",
        "trapTargets": [
          "device model fixes patient gain targets"
        ],
        "evidence": [
          "L3F slide 26",
          "L3F slide 27"
        ]
      },
      {
        "id": "om1.C.32",
        "chapter": "children",
        "c": "peds-orientation",
        "t": "mc",
        "q": "An infant’s hearing aids seem to work well at home. The family proposes returning only if a problem appears. Which follow-up plan matches the first two years of use taught in class?",
        "o": [
          "Scheduled visits about every 3 months",
          "Visits only after an obvious device failure",
          "One scheduled visit at the end of year 2",
          "Annual visits unless the hearing aid is lost"
        ],
        "a": 0,
        "x": "The lecture calls for short-interval follow-up, about every 3 months during the first 2 years. Apparent everyday success does not replace those scheduled checks. The other plans omit or substantially lengthen the taught follow-up schedule.",
        "s": [
          "OM-L3F-37",
          "OM-L3F-48"
        ],
        "difficulty": "application",
        "family": "select a monitoring plan despite apparent success",
        "variant": "symptom-triggered return versus scheduled pediatric follow-up",
        "trapTargets": [
          "no reported problem means no follow-up"
        ],
        "evidence": [
          "L3F slides37 and48 short-interval follow-up3months for first2years."
        ]
      },
      {
        "id": "om1.C.33",
        "chapter": "children",
        "c": "jcih",
        "t": "mc",
        "q": "A program already meets the 2007 JCIH 1-3-6 benchmarks. Under the 2019 accelerated targets taught, which part should move to 2 months?",
        "o": [
          "Diagnosis",
          "Screening",
          "Enrollment in intervention",
          "Routine device replacement"
        ],
        "a": 0,
        "x": "For programs meeting 1-3-6, the taught accelerated timeline is 1-2-3: screen by 1 month, diagnose by 2 months and intervene by 3 months. Device replacement is not one of these milestones.",
        "s": [
          "OM-L3F-36"
        ],
        "difficulty": "application",
        "family": "compare old and accelerated benchmarks",
        "variant": "identify the changed middle milestone",
        "trapTargets": [
          "screening versus diagnosis versus intervention"
        ],
        "evidence": [
          "L3F slide 36"
        ]
      },
      {
        "id": "om1.C.34",
        "chapter": "children",
        "c": "child-hl-effects",
        "t": "mc",
        "q": "A toddler was born with hearing loss and has not established spoken language. Which amplification goal fits that developmental situation?",
        "o": [
          "Support new language learning through auditory input",
          "Restore vocabulary acquired before the hearing loss",
          "Recover previously established listening patterns",
          "Preserve the spoken language learned before onset"
        ],
        "a": 0,
        "x": "This child needs access for skills still being developed. The lecture emphasizes brain stimulation and language learning from early auditory input. Restoring or preserving established pre-loss language describes a different starting point.",
        "s": [
          "OM-L1-4",
          "OM-L3F-41",
          "OM-L3F-42"
        ],
        "difficulty": "application",
        "family": "match a developmental starting point to the goal",
        "variant": "congenital loss before spoken language versus restoration goals",
        "trapTargets": [
          "habilitating new skills confused with restoring old ones"
        ],
        "evidence": [
          "L1 slide4 habilitation versus rehabilitation; L3F slides41-42 auditory brain development and language learning."
        ]
      },
      {
        "id": "om1.C.35",
        "chapter": "children",
        "c": "child-hl-effects",
        "t": "tf",
        "q": "The same background noise can disrupt speech access more for a child with hearing loss than for a child with normal hearing.",
        "a": true,
        "x": "The lecture explicitly states that noise causes much greater disruption for children with hearing loss. Equal noise levels do not imply equal listening difficulty across the two groups.",
        "s": [
          "OM-L3F-38",
          "OM-L3F-60"
        ],
        "difficulty": "comparison",
        "family": "compare vulnerability at the same exposure",
        "variant": "equal background noise across children with different hearing",
        "trapTargets": [
          "same noise means same effect"
        ],
        "evidence": [
          "L3F slide38 noise disruption in children with HL, slide60 higher SNR need."
        ]
      },
      {
        "id": "om1.C.36",
        "chapter": "children",
        "c": "peds-orientation",
        "t": "mc",
        "q": "A parent can change programs correctly but often stores the child’s hearing aids without cleaning or charging them. Which teaching goal directly addresses the remaining gap?",
        "o": [
          "Daily maintenance",
          "System troubleshooting",
          "Functional control use",
          "Consistent wearing time"
        ],
        "a": 0,
        "x": "Cleaning, storing and charging or replacing batteries are the daily maintenance goal. Troubleshooting concerns finding and resolving faults. Functional controls concern settings for listening situations, and wearing time concerns consistent use; none replaces the missing care routine.",
        "s": [
          "OM-L3F-79",
          "OM-L3F-80",
          "OM-L3F-81",
          "OM-L3F-82"
        ],
        "difficulty": "application",
        "family": "distinguish device-management skills",
        "variant": "program operation mastered but maintenance omitted",
        "trapTargets": [
          "functional controls versus routine care"
        ],
        "evidence": [
          "L3F slides79-82 separate consistent use, troubleshooting, maintenance and functional use goals."
        ]
      },
      {
        "id": "om1.C.37",
        "chapter": "verification",
        "c": "verify-validate",
        "t": "mc",
        "q": "Two identical aids pass the same test-box checks but produce different outputs in two children’s ears. Which measure decides what each child actually receives?",
        "o": [
          "Real-ear measurement",
          "Test-box frequency response",
          "SIFTER teacher ratings",
          "LIFE-R student ratings"
        ],
        "a": 0,
        "x": "Real-ear probe-microphone measurement records the actual output in that particular person’s ear. The test box relies on a simulated/average response. Manufacturer specifications do not establish individual in-ear output, and parent/teacher ratings address functional validation.",
        "s": [
          "OM-L3F-31"
        ],
        "difficulty": "application",
        "family": "reconcile simulator agreement and individual differences",
        "variant": "identical bench findings with unequal real-ear output",
        "trapTargets": [
          "test box equals individual ear"
        ],
        "evidence": [
          "L3F slide 31"
        ]
      },
      {
        "id": "om1.C.38",
        "chapter": "verification",
        "c": "verify-validate",
        "t": "mc",
        "q": "A child recognizes 90% of speech in quiet both unaided and aided, but improves in noise from 40% to 70% when aided. Which conclusion is supported?",
        "o": [
          "Benefit in noise",
          "Benefit only in quiet",
          "No benefit in either condition",
          "Benefit in both conditions"
        ],
        "a": 0,
        "x": "Validation can compare aided and unaided speech in quiet and noise. This child improved in noise even though the quiet score did not change. Speech scores assess performance, not whether electroacoustic output matches targets.",
        "s": [
          "OM-L3F-33",
          "OM-L3F-34"
        ],
        "difficulty": "application",
        "family": "interpret a two-condition outcome",
        "variant": "benefit occurs in one condition but not another",
        "trapTargets": [
          "quiet ceiling hides noise benefit",
          "validation mistaken for verification"
        ],
        "evidence": [
          "L3F slide 33",
          "L3F slide 34"
        ]
      },
      {
        "id": "om1.C.39",
        "chapter": "verification",
        "c": "verify-validate",
        "t": "tf",
        "q": "A positive report of everyday benefit establishes that the hearing aid matches its prescribed real-ear targets.",
        "a": false,
        "x": "Everyday benefit is validation. Target matching requires verification of the delivered output. The two questions complement each other; a favorable patient report does not measure real-ear output.",
        "s": [
          "OM-L3F-31",
          "OM-L3F-32",
          "OM-L3F-33"
        ],
        "difficulty": "comparison",
        "family": "reverse the verification-validation implication",
        "variant": "positive validation is not proof of prescribed output",
        "trapTargets": [
          "benefit guarantees target match"
        ],
        "evidence": [
          "L3F slide 31",
          "L3F slide 32",
          "L3F slide 33"
        ]
      },
      {
        "id": "om1.C.40",
        "chapter": "verification",
        "c": "verify-validate",
        "t": "mc",
        "q": "A new aid meets the manufacturer’s ANSI test-box specifications but misses the child’s prescribed real-ear targets. Which conclusion fits?",
        "o": [
          "Device quality control passed, but the fitting still needs adjustment",
          "Fitting verification passed, but device quality control failed",
          "Patient validation passed, so target differences can be ignored",
          "Device quality control failed because patient targets differ"
        ],
        "a": 0,
        "x": "Pre-fitting quality control checks the device against manufacturer specifications. Real-ear verification checks what the particular patient receives against intended targets. Passing the former does not establish the latter, and neither result by itself demonstrates daily-life benefit.",
        "s": [
          "OM-L3F-20",
          "OM-L3F-31",
          "OM-L3F-32"
        ],
        "difficulty": "application",
        "family": "separate bench quality control from prescription verification",
        "variant": "device passes specification but fails individual target",
        "trapTargets": [
          "manufacturer specification equals patient prescription"
        ],
        "evidence": [
          "L3F slide20 ANSI manufacturer quality-control checks; slides31-32 individualized verification."
        ]
      },
      {
        "id": "om1.C.41",
        "chapter": "classroom",
        "c": "snr",
        "t": "mc",
        "q": "At a student’s seat, the teacher is 55 dB and noise is 60 dB. To reach an SNR of +10 dB without changing the teacher’s level, what must happen to the noise?",
        "o": [
          "Decrease by 15 dB",
          "Decrease by 5 dB",
          "Increase by 10 dB",
          "Decrease by 10 dB"
        ],
        "a": 0,
        "x": "The required noise level is 55 − 10 = 45 dB. Starting from 60 dB, that requires a 15 dB reduction. A 5 dB decrease gives 0 dB SNR; a 10 dB decrease gives +5 dB; raising noise moves in the wrong direction.",
        "s": [
          "OM-L3F-60"
        ],
        "difficulty": "application",
        "family": "solve an intervention requirement",
        "variant": "derive noise reduction from present levels and target SNR",
        "trapTargets": [
          "current deficit mistaken for total required improvement"
        ],
        "evidence": [
          "L3F slide60 SNR is teacher signal minus noise; inverse calculation uses supplied target, not an assumed norm."
        ]
      },
      {
        "id": "om1.C.42",
        "chapter": "classroom",
        "c": "distance",
        "t": "mc",
        "q": "A student moves farther from a stationary teacher. The room and noise sources are unchanged. Which direct effect of distance explains why the teacher is harder to hear?",
        "o": [
          "Less of the teacher’s sound level reaches the student",
          "The room’s reverberation time becomes longer",
          "The teacher produces less sound at the source",
          "The noise sources produce more sound"
        ],
        "a": 0,
        "x": "The lecture states that the perceived teacher level falls as teacher-student distance increases. Moving the student does not itself change the teacher’s vocal output, the noise sources or the room’s reverberation time.",
        "s": [
          "OM-L3F-65"
        ],
        "difficulty": "application",
        "family": "isolate an environmental variable",
        "variant": "student moves while the room and sound sources remain fixed",
        "trapTargets": [
          "distance changes source level or room decay time"
        ],
        "evidence": [
          "L3F slide65 perceived conversational level falls as distance increases."
        ]
      },
      {
        "id": "om1.C.43",
        "chapter": "classroom",
        "c": "rm-hat",
        "t": "mc",
        "q": "A teacher changes from a system feeding ceiling speakers to one sending the voice directly to a student’s personal receiver. What changed?",
        "o": [
          "CADS to personal FM/DM",
          "Personal FM/DM to CADS",
          "FM to DM room distribution",
          "Personal FM/DM to a room loop"
        ],
        "a": 0,
        "x": "CADS distributes amplified speech through classroom speakers. A personal FM/DM system transmits the teacher’s microphone signal to the individual student’s receiver. The teacher remains the microphone/transmitter user and the student remains the receiver user.",
        "s": [
          "OM-L3F-68",
          "OM-L3F-69"
        ],
        "difficulty": "application",
        "family": "distinguish distribution architectures",
        "variant": "switch from shared speakers to personal receiver",
        "trapTargets": [
          "room distribution equals personal delivery"
        ],
        "evidence": [
          "L3F slide 68",
          "L3F slide 69"
        ]
      },
      {
        "id": "om1.C.44",
        "chapter": "classroom",
        "c": "hat-types",
        "t": "tf",
        "q": "Infrared and FM/DM systems both use radio-frequency transmission.",
        "a": false,
        "x": "FM/DM uses radio-frequency technology, while infrared carries the signal using light. Both can be wireless without using the same transmission medium.",
        "s": [
          "OM-L3F-56"
        ],
        "difficulty": "comparison",
        "family": "one-word transmission substitution",
        "variant": "wireless technologies with different physical carriers",
        "trapTargets": [
          "wireless always means radio"
        ],
        "evidence": [
          "L3F slide 56"
        ]
      },
      {
        "id": "om1.C.45",
        "chapter": "outcomes",
        "c": "ald-assessment",
        "t": "mc",
        "q": "After ALD use, a teacher’s SIFTER ratings improve but a parent’s CHAPS ratings are unchanged. What is the best interpretation?",
        "o": [
          "Benefit may vary by setting",
          "One form was scored incorrectly",
          "Both forms assess identical situations",
          "Home ratings override school ratings"
        ],
        "a": 0,
        "x": "SIFTER addresses school performance from the teacher’s perspective, whereas CHAPS can sample everyday listening outside school. Different contexts can show different outcomes. Compare the actual conditions and observations rather than assuming one report invalidates the other.",
        "s": [
          "OM-L3F-72",
          "OM-L3F-73",
          "OM-L3F-76",
          "OM-L3F-77"
        ],
        "difficulty": "application",
        "family": "reconcile outcome reports across environments",
        "variant": "school improvement and stable home ratings",
        "trapTargets": [
          "different contexts must have identical benefit"
        ],
        "evidence": [
          "L3F slide 72",
          "L3F slide 73",
          "L3F slide 76",
          "L3F slide 77"
        ]
      },
      {
        "id": "om1.C.46",
        "chapter": "outcomes",
        "c": "ald-assessment",
        "t": "mc",
        "q": "The teacher reports better classroom participation, but the student says group conversations remain difficult. Which tool can directly document the student’s own classroom listening experience?",
        "o": [
          "LIFE-R student version",
          "SIFTER teacher form",
          "CHAPS parent form",
          "Hearing-aid test-box analysis"
        ],
        "a": 0,
        "x": "LIFE-R includes a student self-report version about real classroom listening, including peers, noise and distance. SIFTER and the named CHAPS version use other respondents. A test box measures device output rather than the student’s experience.",
        "s": [
          "OM-L3F-74",
          "OM-L3F-75"
        ],
        "difficulty": "application",
        "family": "choose complementary respondent",
        "variant": "teacher reports improvement but student identifies residual difficulty",
        "trapTargets": [
          "teacher observation replaces student perspective"
        ],
        "evidence": [
          "L3F slide 74",
          "L3F slide 75"
        ]
      },
      {
        "id": "om1.C.47",
        "chapter": "dots",
        "c": "count-dots",
        "t": "mc",
        "q": "A student calculates SII by giving each frequency column equal weight, regardless of how many dots it contains. What feature of the count-the-dots method was lost?",
        "o": [
          "Speech-importance weighting across frequencies",
          "The right-versus-left ear symbol convention",
          "The average of the three PTA frequencies",
          "The difference between AC and BC thresholds"
        ],
        "a": 0,
        "x": "The dots are not evenly distributed because frequency regions contribute different amounts of speech information. Counting the weighted dots preserves that distribution; treating all frequency columns equally does not. Ear symbols, PTA and air-bone gaps answer different audiometric questions.",
        "s": [
          "KM",
          "T0910"
        ],
        "difficulty": "application",
        "family": "audit a scoring method",
        "variant": "equal-column averaging removes speech weighting",
        "trapTargets": [
          "frequency count equals speech-information weight"
        ],
        "evidence": [
          "Killion & Mueller2010 Figure2 unequal dot distribution; T0910 discussion of higher concentration in middle/high-frequency regions and unequal speech information."
        ]
      },
      {
        "id": "om1.C.48",
        "chapter": "dots",
        "c": "sii-to-speech",
        "t": "tf",
        "q": "A word score estimated from a count-the-dots curve should be labeled as predicted, even when it agrees with a measured speech score.",
        "a": true,
        "x": "The dots estimate audibility and the selected curve predicts speech performance in quiet. Agreement with measured testing does not change the origin of the estimate. The curve itself did not directly measure that listener’s word recognition or speech-in-noise performance.",
        "s": [
          "KM",
          "T0910"
        ],
        "difficulty": "comparison",
        "family": "distinguish prediction and observation",
        "variant": "agreement does not turn modeled output into a measured score",
        "trapTargets": [
          "prediction mislabeled as measurement"
        ],
        "evidence": [
          "Killion & Mueller 2010 Figure 2 (100 speech-weighted dots), Figure 4 (predicted speech scores); 9/10 transcript count on/below thresholds, quiet prediction is not measured understanding."
        ]
      },
      {
        "id": "om1.C.49",
        "chapter": "guest",
        "c": "abr",
        "t": "mc",
        "q": "A report copies an infant’s ABR threshold estimates into the chart and labels them “behavioral responses.” Which correction preserves what was actually measured?",
        "o": [
          "Electrophysiologic threshold estimates",
          "Observed pure-tone response levels",
          "Measured speech-recognition scores",
          "Outer-hair-cell function measures"
        ],
        "a": 0,
        "x": "ABR measures synchronous neural activity and can estimate sensitivity when reliable behavioral results are unavailable. It is not the child’s behavioral audiogram. Behavioral audiometry, speech testing and OAEs supply the other named information.",
        "s": [
          "OM-GUEST-12",
          "OM-GUEST-16",
          "OM-GUEST-17"
        ],
        "difficulty": "application",
        "family": "correct measurement provenance",
        "variant": "ABR estimate mistaken for behavioral observation",
        "trapTargets": [
          "ABR equals behavioral audiogram"
        ],
        "evidence": [
          "GUEST slide 12",
          "GUEST slide 16",
          "GUEST slide 17"
        ]
      },
      {
        "id": "om1.C.50",
        "chapter": "guest",
        "c": "soundfield",
        "t": "tf",
        "q": "Adding normal tympanograms to normal sound-field thresholds establishes normal hearing in both ears.",
        "a": false,
        "x": "Normal tympanograms describe middle-ear status, not hearing sensitivity. Sound-field thresholds are not ear-specific and may reflect the better ear. Combining those results still does not demonstrate normal sensitivity separately in each ear.",
        "s": [
          "OM-GUEST-9",
          "OM-GUEST-14"
        ],
        "difficulty": "comparison",
        "family": "combine two insufficient findings",
        "variant": "middle-ear and sound-field data still not ear-specific sensitivity",
        "trapTargets": [
          "two reassuring results prove normal bilateral hearing"
        ],
        "evidence": [
          "GUEST slide 9",
          "GUEST slide 14"
        ]
      },
      {
        "id": "om1.C.51",
        "chapter": "guest",
        "c": "peds-context",
        "t": "mc",
        "q": "Two children have the same mild thresholds, but one struggles with directions at school and the other does not. Which additional information is most useful for interpreting that difference?",
        "o": [
          "Communication history and listening demands",
          "Unaided degree and configuration alone",
          "Electroacoustic gain and maximum output",
          "The pure-tone average to another decimal"
        ],
        "a": 0,
        "x": "The guest lecture calls for communication/developmental context and everyday listening environments. Similar audiograms can have different functional consequences. More audiogram detail or device output data can contribute to an evaluation, but neither replaces the history and listening demands needed to understand the difference described.",
        "s": [
          "OM-GUEST-3",
          "OM-GUEST-5",
          "OM-GUEST-6",
          "OM-GUEST-8"
        ],
        "difficulty": "application",
        "family": "reconcile identical sensitivity and different function",
        "variant": "functional reports differ despite matched degree",
        "trapTargets": [
          "PTA alone determines needs"
        ],
        "evidence": [
          "GUEST slide 3",
          "GUEST slide 5",
          "GUEST slide 6",
          "GUEST slide 8"
        ]
      },
      {
        "id": "om1.C.52",
        "chapter": "guest",
        "c": "cross-check",
        "t": "mc",
        "q": "A battery includes OAEs and ABR, but the clinician still needs a direct measure of the child’s access to speech. Which addition supplies that different information?",
        "o": [
          "Speech testing",
          "Another OAE run",
          "Another ABR run",
          "A tympanogram"
        ],
        "a": 0,
        "x": "The guest’s cross-check table assigns functional access to speech to speech testing. Repeating OAEs adds outer-hair-cell information, repeating ABR adds neural response information, and tympanometry describes the middle ear. Those are useful cross-checks, but they do not substitute for the missing speech measure.",
        "s": [
          "OM-GUEST-12",
          "OM-GUEST-15",
          "OM-GUEST-16"
        ],
        "difficulty": "application",
        "family": "identify missing complementary evidence",
        "variant": "physiologic battery lacks direct speech measure",
        "trapTargets": [
          "objective measures substitute for speech performance"
        ],
        "evidence": [
          "GUEST slide12 cross-check table: speech testing functional speech access; OAE OHC, ABR neural, tymps ME."
        ]
      }
    ],
    "shorts": [
      {
        "id": "om1.C.w1",
        "chapter": "dots",
        "c": "sii-to-speech",
        "q": "A child’s aided count-the-dots score is 65%. The child repeats 85% of sentences in quiet but still misses group discussion in class. Explain whether the first two numbers conflict. Name one additional assessment and one classroom change that address the remaining difficulty.",
        "rubric": [
          "Identify 65% as estimated audibility of speech-weighted dots, not a direct word or sentence-recognition percentage. A measured 85% sentence score need not match that audibility estimate.",
          "Explain that quiet sentence performance does not establish performance in classroom noise. Assess speech in noise or use student/teacher LIFE-R with classroom observations to examine the reported difficulty.",
          "Choose a matched classroom step such as a properly placed remote microphone for the relevant talker/group, reduced competing noise, or reduced reflections, and explain how it addresses the listening barrier."
        ],
        "s": [
          "KM",
          "T0910",
          "OM-L3F-60",
          "OM-L3F-61",
          "OM-L3F-68",
          "OM-L3F-74"
        ],
        "evidence": [
          "Killion & Mueller 2010 Figure 4 and Figure 2; 9/10 transcript audible dots are not one-to-one with recognition and quiet estimates do not predict noise.",
          "L3F slides60,61,68,74; 9/24 transcript group tabletop microphones and student perspective."
        ]
      },
      {
        "id": "om1.C.w2",
        "chapter": "syndromes",
        "c": "syndromic-overview",
        "q": "Both children have malformed external ears and preauricular tags. Child A also has a lateral neck cyst and renal malformations. Child B has facial nerve paresis, a small eye and vertebral abnormalities. Identify the better-fitting syndrome for each child and contrast the hearing-loss associations taught.",
        "rubric": [
          "Identify Child A as branchio-oto-renal spectrum disorder, using the neck/branchial and renal findings rather than the shared ear tags alone.",
          "Identify Child B as Goldenhar syndrome, using the facial, eye and vertebral findings that distinguish this constellation.",
          "State that BOR can produce conductive, sensorineural or mixed loss, while conductive loss is the hearing association emphasized for Goldenhar in the course slide."
        ],
        "s": [
          "OM-L2-43",
          "OM-L2-57"
        ],
        "evidence": [
          "L2 slide43 BOR major criteria and CHL/SNHL/MHL.",
          "L2 slide57 Goldenhar facial paresis, microphthalmia, vertebral abnormalities and CHL."
        ]
      }
    ],
    "graphs": [
      {
        "seed": 9271020,
        "right": {
          "type": "mixed",
          "degree": "modsev",
          "config": "rising"
        },
        "left": {
          "type": "sensorineural",
          "degree": "moderate",
          "config": "cookie"
        }
      },
      {
        "seed": 9271021,
        "right": {
          "type": "conductive",
          "degree": "moderate",
          "config": "rising"
        },
        "left": {
          "type": "mixed",
          "degree": "modsev",
          "config": "flat"
        }
      }
    ]
  }
];
D.forms=D.originalForms.map(function(f){return {name:f.name,seed:f.seed};});
D.version='2026-09-27-original-mocks';
})(typeof window!=='undefined'?window:globalThis);
