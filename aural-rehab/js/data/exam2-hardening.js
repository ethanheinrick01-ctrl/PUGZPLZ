/* Revised Exam 2 practice. Original roots and all saved versions remain valid. */
(function(root){
'use strict';
var L=root.L,D=L.EXAM2_DATA,version='20261028-hardened-1';
var patches={
  "e2.mastery.ci-mechanism.02": {
    "t": "mc",
    "o": [
      [
        "Acoustic amplification versus bone vibration",
        ""
      ],
      [
        "Acoustic amplification versus electrical stimulation",
        ""
      ],
      [
        "Electrical stimulation versus acoustic amplification",
        ""
      ],
      [
        "Bone vibration versus electrical stimulation",
        ""
      ]
    ],
    "a": 1
  },
  "e2.mastery.ci-mechanism.03": {
    "q": "A child gains limited speech access from appropriate amplification because inner-ear transduction is damaged. What does the CI change?",
    "x": "The CI bypasses damaged sensory transduction and electrically stimulates nerve fibers. Acoustic amplification and routing sound to the other ear describe different mechanisms.",
    "t": "mc",
    "o": [
      [
        "Increase hair-cell motion with stronger acoustic input",
        ""
      ],
      [
        "Bypass damaged transduction and stimulate nerve fibers",
        ""
      ],
      [
        "Route the acoustic signal to the opposite cochlea",
        ""
      ]
    ],
    "a": 1
  },
  "e2.mastery.ci-mechanism.04": {
    "q": "Which hearing-loss profile best matches the mechanism and candidacy rationale taught for a CI?",
    "s": [
      "ARL4-2",
      "ARL4-11"
    ],
    "t": "mc",
    "o": [
      [
        "Sensorineural loss with limited aided benefit",
        ""
      ],
      [
        "Conductive loss with preserved cochlear function",
        ""
      ],
      [
        "Temporary loss from middle-ear effusion",
        ""
      ],
      [
        "External-ear blockage with normal bone thresholds",
        ""
      ]
    ],
    "a": 0
  },
  "e2.mastery.ci-mechanism.06": {
    "q": "Which stage does CI electrical stimulation bypass, rather than perform through the usual biological mechanism?",
    "x": "Electrical stimulation substitutes for damaged inner-ear sensory transduction. The nerve must still carry information centrally, the brain must interpret it, and the processor must encode input.",
    "t": "mc",
    "o": [
      [
        "Sensory transduction in the damaged inner ear",
        ""
      ],
      [
        "Neural transmission from the nerve to the brain",
        ""
      ],
      [
        "Interpretation of the incoming signal by the brain",
        ""
      ],
      [
        "Digital encoding within the external processor",
        ""
      ]
    ],
    "a": 0
  },
  "e2.mastery.ci-access.01": {
    "t": "mc",
    "o": [
      [
        "Lower unaided thresholds and restore hair-cell activity",
        ""
      ],
      [
        "Provide useful hearing and improve communication",
        ""
      ],
      [
        "Restore typical acoustic processing throughout the ear",
        ""
      ]
    ],
    "a": 1
  },
  "e2.mastery.ci-access.03": {
    "q": "Two children use the same CI model but achieve different speech-understanding scores. Which inference is supported?",
    "x": "Benefit varies across recipients. Shared hardware does not equate their auditory histories, development or rehabilitation.",
    "s": [
      "ARL4-34",
      "ARL4-36"
    ],
    "t": "mc",
    "o": [
      [
        "Matched electrode counts predict matched speech scores",
        ""
      ],
      [
        "Matching aided thresholds implies matching language skills",
        ""
      ],
      [
        "Device identity alone does not determine benefit",
        ""
      ]
    ],
    "a": 2
  },
  "e2.mastery.ci-access.04": {
    "q": "Aided speech tests improve after implantation. Which additional observation best tests whether this benefit carries into daily life?",
    "x": "Functional use in everyday communication supplements controlled speech testing. Hardware function, wound healing and unaided sensitivity answer different questions.",
    "s": [
      "ARL4-18",
      "ARL4-21",
      "ARL4-33"
    ],
    "t": "mc",
    "o": [
      [
        "The number of working electrodes",
        ""
      ],
      [
        "The child’s change in everyday communication",
        ""
      ],
      [
        "The surgical wound-healing interval",
        ""
      ],
      [
        "The unaided low-frequency threshold",
        ""
      ]
    ],
    "a": 1
  },
  "e2.mastery.ci-access.05": {
    "q": "At first activation, a child says voices sound robotic. What does this report establish?",
    "x": "The lecture describes robotic or cartoon-like sound at activation. A sound-quality report is not a speech score or threshold measurement.",
    "t": "mc",
    "o": [
      [
        "An initial sound quality described at activation",
        ""
      ],
      [
        "A measurement of the child’s speech recognition",
        ""
      ],
      [
        "Evidence that aided detection has returned to baseline",
        ""
      ]
    ],
    "a": 0
  },
  "e2.mastery.ci-access.06": {
    "t": "mc",
    "o": [
      [
        "Lower aided sound-field detection thresholds",
        ""
      ],
      [
        "More consistent responses to sound onset",
        ""
      ],
      [
        "More comfortable loudness after programming",
        ""
      ],
      [
        "More accurate recognition of spoken messages",
        ""
      ]
    ],
    "a": 3
  },
  "e2.mastery.ci-components.03": {
    "t": "mc",
    "o": [
      [
        "External sound processor",
        ""
      ],
      [
        "External transmitting coil",
        ""
      ],
      [
        "Internal receiver",
        ""
      ]
    ],
    "a": 2
  },
  "e2.mastery.ci-sequence.03": {
    "t": "mc",
    "o": [
      [
        "The sound processor for recoding",
        ""
      ],
      [
        "The receiver for pulse generation",
        ""
      ],
      [
        "The brain for interpretation",
        ""
      ]
    ],
    "a": 2
  },
  "e2.mastery.ci-sequence.05": {
    "q": "What crosses the external-to-internal boundary in the course’s CI pathway?",
    "x": "The transmitter sends the digital signal through the skin to the receiver. The receiver then converts it into pulses for the array.",
    "t": "mc",
    "o": [
      [
        "Digital code passes from transmitter to receiver",
        ""
      ],
      [
        "Electrical pulses pass from processor to array",
        ""
      ],
      [
        "Acoustic pressure passes from microphone to receiver",
        ""
      ]
    ],
    "a": 0
  },
  "e2.mastery.ci-sequence.06": {
    "q": "Which sequence lists three connected CI stages in reverse signal order?",
    "x": "The signal proceeds processor → transmitter → receiver. Receiver → transmitter → processor reverses that section of the pathway.",
    "t": "mc",
    "o": [
      [
        "Receiver → transmitter → processor",
        ""
      ],
      [
        "Processor → transmitter → receiver",
        ""
      ],
      [
        "Receiver → array → nerve",
        ""
      ],
      [
        "Microphone → processor → transmitter",
        ""
      ]
    ],
    "a": 0
  },
  "e2.mastery.ci-history.03": {
    "q": "Which contributor implanted the 1972 wearable single-electrode device described in the lecture?",
    "t": "mc",
    "o": [
      [
        "Donald Eddington",
        ""
      ],
      [
        "William House",
        ""
      ],
      [
        "Graeme Clark",
        ""
      ]
    ],
    "a": 1
  },
  "e2.mastery.ci-history.05": {
    "t": "mc",
    "o": [
      [
        "1985",
        ""
      ],
      [
        "1981",
        ""
      ],
      [
        "1991",
        ""
      ]
    ],
    "a": 0
  },
  "e2.ci-age-groups.1": {
    "t": "mc",
    "o": [
      [
        "Bilateral profound SNHL",
        ""
      ],
      [
        "Bilateral severe-to-profound SNHL",
        ""
      ],
      [
        "Unilateral profound SNHL",
        ""
      ]
    ],
    "a": 0
  },
  "e2.mastery.ci-team-decision.01": {
    "t": "mc",
    "o": [
      [
        "Unaided sensitivity, imaging and language score",
        ""
      ],
      [
        "Aided detection, device choice and surgical date",
        ""
      ],
      [
        "Hearing loss, aided benefit and team findings",
        ""
      ]
    ],
    "a": 2
  },
  "e2.mastery.ci-team-decision.02": {
    "q": "A child meets the course audiometric criteria but has not had medical review. What remains necessary?",
    "t": "mc",
    "o": [
      [
        "Schedule activation based on the qualifying audiogram",
        ""
      ],
      [
        "Use family motivation as a proxy for medical suitability",
        ""
      ],
      [
        "Complete the medical portion of the candidacy evaluation",
        ""
      ],
      [
        "Use the aided score to infer suitability for surgery",
        ""
      ]
    ],
    "a": 2
  },
  "e2.mastery.ci-team-decision.03": {
    "t": "mc",
    "o": [
      [
        "They inform participation and rehabilitation planning",
        ""
      ],
      [
        "They supply an estimate of aided speech recognition",
        ""
      ],
      [
        "They establish the anatomical feasibility of insertion",
        ""
      ]
    ],
    "a": 0
  },
  "e2.mastery.ci-team-decision.04": {
    "q": "Which information is the SLP particularly positioned to add to the shared candidacy decision?",
    "x": "SLP observations document auditory, speech and language development. Electrical programming and imaging provide different team evidence.",
    "t": "mc",
    "o": [
      [
        "Confirmation of electrode function during surgery",
        ""
      ],
      [
        "Evidence of functional progress with hearing technology",
        ""
      ],
      [
        "Determination of the best electrical stimulation levels",
        ""
      ],
      [
        "Assessment of cochlear anatomy before insertion",
        ""
      ]
    ],
    "a": 1
  },
  "e2.mastery.ci-team-decision.05": {
    "q": "A family describes poor daily listening despite measurable aided detection. Which combination best investigates this discrepancy?",
    "x": "Aided testing measures performance with amplification; functional reports describe meaningful use in daily life. Both contribute to candidacy evidence.",
    "s": [
      "ARL4-18",
      "ARL4-21"
    ],
    "t": "mc",
    "o": [
      [
        "Aided behavioral testing with functional reports",
        ""
      ],
      [
        "Unaided thresholds with a repeat unaided audiogram",
        ""
      ],
      [
        "A device specification sheet with an age-based norm",
        ""
      ]
    ],
    "a": 0
  },
  "e2.mastery.ci-team-decision.06": {
    "q": "Aided benefit is evaluated after the hearing aids have been appropriately fitted.",
    "x": "Appropriate fitting is needed to interpret limited hearing-aid benefit; poor performance with underfit devices is not an adequate comparison.",
    "s": [
      "ARL4-11",
      "ARL4-18"
    ],
    "t": "tf",
    "a": true
  },
  "e2.mastery.ci-age-groups.01": {
    "t": "mc",
    "o": [
      [
        "Profound unilateral rather than bilateral SNHL",
        ""
      ],
      [
        "Severe-to-profound rather than profound bilateral SNHL",
        ""
      ],
      [
        "Severe bilateral rather than profound unilateral SNHL",
        ""
      ]
    ],
    "a": 1
  },
  "e2.mastery.ci-age-groups.02": {
    "q": "Which result matches both the task and the inclusive score boundary on the older-child slide?",
    "x": "Slide 14 specifies ≤30% open-set word recognition in the best-aided condition. Unaided scores, closed sets and sentence tests are not interchangeable with that named criterion.",
    "t": "mc",
    "o": [
      [
        "30% unaided words",
        ""
      ],
      [
        "30% best-aided open-set words",
        ""
      ],
      [
        "30% best-aided closed-set words",
        ""
      ],
      [
        "30% best-aided sentence recognition",
        ""
      ]
    ],
    "a": 1
  },
  "e2.mastery.ci-age-groups.03": {
    "t": "mc",
    "o": [
      [
        "An adult aided speech-recognition requirement",
        ""
      ],
      [
        "An older-child open-set word-score requirement",
        ""
      ],
      [
        "A young-child auditory-development requirement",
        ""
      ]
    ],
    "a": 2
  },
  "e2.mastery.ci-age-groups.04": {
    "q": "Which test setup matches the older-child slide’s word-recognition criterion?",
    "t": "mc",
    "o": [
      [
        "Best aided, without a supplied response list",
        ""
      ],
      [
        "Unaided, without a supplied response list",
        ""
      ],
      [
        "Best aided, choosing from familiar pictures",
        ""
      ],
      [
        "Unaided, choosing from familiar pictures",
        ""
      ]
    ],
    "a": 0
  },
  "e2.mastery.ci-age-groups.05": {
    "t": "mc",
    "o": [
      [
        "Moderate-to-profound lows, severe-to-profound mids/highs",
        ""
      ],
      [
        "Severe-to-profound lows, moderate-to-profound mids/highs",
        ""
      ],
      [
        "Profound lows, moderate-to-severe mids/highs",
        ""
      ]
    ],
    "a": 0
  },
  "e2.mastery.ci-ssd-units.03": {
    "q": "An SSD slide lists an aided word score with dB HL units, and the supplied guest source gives a different cutoff. What percentage can be treated as confirmed from that slide entry?",
    "x": "The unit error and conflicting source values leave the word-score cutoff unresolved. Correct units do not establish which percentage the instructor intended.",
    "t": "mc",
    "o": [
      [
        "30% is confirmed",
        ""
      ],
      [
        "5% is confirmed",
        ""
      ],
      [
        "It is unresolved",
        ""
      ]
    ],
    "a": 2
  },
  "e2.mastery.ci-ssd-units.04": {
    "t": "mc",
    "o": [
      [
        "Mild-to-moderate hearing loss",
        ""
      ],
      [
        "Normal-to-near-normal hearing",
        ""
      ],
      [
        "Severe-to-profound hearing loss",
        ""
      ],
      [
        "Any degree of loss with useful amplification",
        ""
      ]
    ],
    "a": 1
  },
  "e2.mastery.ci-ssd-units.06": {
    "t": "mc",
    "o": [
      [
        "90 dB HL describes recognition; 10% describes sensitivity",
        ""
      ],
      [
        "90 dB HL describes sensitivity; 10% describes recognition",
        ""
      ],
      [
        "Both describe sensitivity under different aided conditions",
        ""
      ],
      [
        "Both describe recognition with different response formats",
        ""
      ]
    ],
    "a": 1
  },
  "e2.mastery.ci-referral.01": {
    "t": "mc",
    "o": [
      [
        "Select an implant from the behavior alone",
        ""
      ],
      [
        "Defer review until an open-set score is feasible",
        ""
      ],
      [
        "Investigate hearing access and developmental progress",
        ""
      ]
    ],
    "a": 2
  },
  "e2.mastery.ci-referral.03": {
    "t": "mc",
    "o": [
      [
        "Investigate access and progress with current technology",
        ""
      ],
      [
        "Use visual success as evidence of sufficient auditory access",
        ""
      ],
      [
        "Use aided detection alone to judge communication benefit",
        ""
      ]
    ],
    "a": 0
  },
  "e2.mastery.ci-referral.04": {
    "t": "mc",
    "o": [
      [
        "Occasional unfamiliar-word errors with steady progress",
        ""
      ],
      [
        "Increasing visual dependence in quiet with fatigue",
        ""
      ],
      [
        "Difficulty in noise with reliable access in quiet",
        ""
      ],
      [
        "A new remote microphone with improving class participation",
        ""
      ]
    ],
    "a": 1
  },
  "e2.mastery.ci-referral.05": {
    "t": "mc",
    "o": [
      [
        "Refer with documentation of aided developmental progress",
        ""
      ],
      [
        "Repeat the same therapy until open-set testing is feasible",
        ""
      ],
      [
        "Refer only after independently confirming surgical eligibility",
        ""
      ]
    ],
    "a": 0
  },
  "e2.mastery.ci-referral.06": {
    "q": "Increasing reliance on visual cues in quiet can support a CI referral even with appropriately fitted hearing technology.",
    "x": "The school-age referral slide includes increased visual or remote-microphone dependence in quiet. Referral initiates a fuller evaluation; it does not establish eligibility.",
    "s": [
      "ARL4-17"
    ],
    "t": "tf",
    "a": true
  },
  "e2.mastery.ci-testing.02": {
    "q": "A low aided score will be used to judge hearing-aid benefit. Which prerequisite makes that interpretation defensible?",
    "x": "The evaluation specifies appropriately fitted hearing aids. Repeating unaided thresholds or choosing a manufacturer does not establish that the aided test used appropriate amplification.",
    "t": "mc",
    "o": [
      [
        "Unaided thresholds measured twice",
        ""
      ],
      [
        "The family’s preferred device program",
        ""
      ],
      [
        "Appropriately verified hearing-aid fitting",
        ""
      ],
      [
        "A completed implant manufacturer comparison",
        ""
      ]
    ],
    "a": 2
  },
  "e2.mastery.ci-testing.04": {
    "t": "mc",
    "o": [
      [
        "The unattempted words should be scored as detection failures",
        ""
      ],
      [
        "The response task exceeds the child’s developmental abilities",
        ""
      ],
      [
        "The result should be converted into an unaided threshold",
        ""
      ],
      [
        "The parent’s estimate should replace the missing test score",
        ""
      ]
    ],
    "a": 1
  },
  "e2.mastery.ci-testing.06": {
    "t": "mc",
    "o": [
      [
        "The two measures directly establish everyday language use",
        ""
      ],
      [
        "The electrophysiological result supplies an open-set word score",
        ""
      ],
      [
        "The measures provide complementary threshold evidence",
        ""
      ],
      [
        "The behavioral result determines the number of working electrodes",
        ""
      ]
    ],
    "a": 2
  },
  "e2.mastery.ci-open-closed.01": {
    "t": "mc",
    "o": [
      [
        "Sound discrimination",
        ""
      ],
      [
        "Closed-set identification",
        ""
      ],
      [
        "Open-set recognition",
        ""
      ]
    ],
    "a": 2
  },
  "e2.mastery.ci-open-closed.02": {
    "t": "mc",
    "o": [
      [
        "The listener selects among known alternatives",
        ""
      ],
      [
        "The words are presented at a higher sensation level",
        ""
      ],
      [
        "The examiner presents the words using a recording",
        ""
      ],
      [
        "The listener responds under quieter acoustic conditions",
        ""
      ]
    ],
    "a": 0
  },
  "e2.mastery.ci-open-closed.05": {
    "t": "mc",
    "o": [
      [
        "Support from a constrained response set",
        ""
      ],
      [
        "Support from a louder presentation level",
        ""
      ],
      [
        "Support from a slower presentation rate",
        ""
      ]
    ],
    "a": 0
  },
  "e2.mastery.ci-functional.01": {
    "t": "mc",
    "o": [
      [
        "IT-MAIS with 35 questions",
        ""
      ],
      [
        "Little Ears with 35 questions",
        ""
      ],
      [
        "MAIS with 35 questions",
        ""
      ]
    ],
    "a": 1,
    "q": "Which measure and parent-question count match the course slide?"
  },
  "e2.mastery.ci-functional.03": {
    "t": "mc",
    "o": [
      [
        "Aided detection sensitivity",
        ""
      ],
      [
        "Everyday use of auditory information",
        ""
      ],
      [
        "Open-set word-recognition accuracy",
        ""
      ]
    ],
    "a": 1
  },
  "e2.mastery.ci-functional.04": {
    "t": "mc",
    "o": [
      [
        "They establish the child’s aided detection thresholds",
        ""
      ],
      [
        "They substitute for the unaided behavioral audiogram",
        ""
      ],
      [
        "They verify the electrical output of the electrode array",
        ""
      ],
      [
        "They document development relevant to candidacy",
        ""
      ]
    ],
    "a": 3
  },
  "e2.mastery.ci-functional.05": {
    "q": "Which pair contributes reports of functional benefit rather than a direct recognition test or anatomical image?",
    "t": "mc",
    "o": [
      [
        "LNT and MLNT",
        ""
      ],
      [
        "MRI and CT",
        ""
      ],
      [
        "PEACH and ELF",
        ""
      ]
    ],
    "a": 2
  },
  "e2.mastery.ci-functional.06": {
    "t": "mc",
    "o": [
      [
        "Prioritize the threshold because it directly measures communication",
        ""
      ],
      [
        "Assess everyday benefit separately from aided detection",
        ""
      ],
      [
        "Interpret the home report as an estimate of unaided sensitivity",
        ""
      ],
      [
        "Use the report to infer the electrical map without further testing",
        ""
      ]
    ],
    "a": 1
  },
  "e2.mastery.ci-counseling.01": {
    "t": "mc",
    "o": [
      [
        "Hearing thresholds provide the main guide to language prognosis",
        ""
      ],
      [
        "Activation establishes the child’s final speech-understanding level",
        ""
      ],
      [
        "Rehabilitation and follow-up continue after implantation",
        ""
      ]
    ],
    "a": 2
  },
  "e2.mastery.ci-counseling.02": {
    "t": "mc",
    "o": [
      [
        "To plan supports consistent with family needs and goals",
        ""
      ],
      [
        "To select the electrode insertion depth before imaging",
        ""
      ],
      [
        "To infer the appropriate electrical map from language preference",
        ""
      ]
    ],
    "a": 0
  },
  "e2.mastery.ci-counseling.03": {
    "t": "mc",
    "o": [
      [
        "Best-aided word recognition",
        ""
      ],
      [
        "Functional auditory milestones",
        ""
      ],
      [
        "Coexisting medical conditions",
        ""
      ]
    ],
    "a": 2
  },
  "e2.mastery.ci-counseling.04": {
    "t": "mc",
    "o": [
      [
        "Meaningful Auditory Integration Scale and Little Ears",
        ""
      ],
      [
        "Auditory brainstem response and auditory steady-state response",
        ""
      ],
      [
        "Multisyllabic Lexical Neighborhood Test and Pediatric AzBio",
        ""
      ],
      [
        "Guide By Your Side and Louisiana Hands and Voices",
        ""
      ]
    ],
    "a": 3
  },
  "e2.mastery.ci-counseling.05": {
    "t": "mc",
    "o": [
      [
        "Device maintenance and annual mapping alone",
        ""
      ],
      [
        "Therapy, family support and local programs",
        ""
      ],
      [
        "Aided thresholds as the measure of support needs",
        ""
      ]
    ],
    "a": 1
  },
  "e2.mastery.ci-roles.01": {
    "t": "mc",
    "o": [
      [
        "Surgeon",
        ""
      ],
      [
        "Audiologist",
        ""
      ],
      [
        "SLP",
        ""
      ]
    ],
    "a": 0
  },
  "e2.mastery.ci-roles.02": {
    "t": "mc",
    "o": [
      [
        "Surgeon",
        ""
      ],
      [
        "Audiologist",
        ""
      ],
      [
        "SLP",
        ""
      ],
      [
        "Patient navigator",
        ""
      ]
    ],
    "a": 1
  },
  "e2.mastery.ci-roles.03": {
    "t": "mc",
    "o": [
      [
        "Adjust stimulation for comfortable loudness",
        ""
      ],
      [
        "Monitor speech-language development in therapy",
        ""
      ],
      [
        "Perform implantation and manage medical aspects",
        ""
      ]
    ],
    "a": 2
  },
  "e2.mastery.ci-roles.04": {
    "t": "mc",
    "o": [
      [
        "Interpreting the imaging for electrode placement",
        ""
      ],
      [
        "Selecting electrical levels from aided thresholds",
        ""
      ],
      [
        "Documenting listening across everyday routines",
        ""
      ],
      [
        "Determining surgical readiness from the audiogram",
        ""
      ]
    ],
    "a": 2
  },
  "e2.mastery.ci-activation.01": {
    "t": "mc",
    "o": [
      [
        "Support the child without inferring a final outcome",
        ""
      ],
      [
        "Use the initial reaction to select a language prognosis",
        ""
      ],
      [
        "Treat an emotional response as a speech-recognition result",
        ""
      ]
    ],
    "a": 0
  },
  "e2.mastery.ci-activation.03": {
    "q": "The implanted array has been checked during surgery. Two to four weeks later, which distinct stage is scheduled in Sutherland’s example?",
    "x": "Telemetry is intraoperative verification; initial activation is a later visit. The supplied slide places activation 2–4 weeks after surgery.",
    "s": [
      "ARL4-30",
      "ARL4-31"
    ],
    "t": "mc",
    "o": [
      [
        "Intraoperative telemetry",
        ""
      ],
      [
        "Initial activation",
        ""
      ],
      [
        "Annual follow-up mapping",
        ""
      ]
    ],
    "a": 1
  },
  "e2.mastery.ci-activation.04": {
    "t": "mc",
    "o": [
      [
        "Determine candidacy from unaided thresholds",
        ""
      ],
      [
        "Select the surgical electrode insertion depth",
        ""
      ],
      [
        "Introduce progressive maps and review accessories",
        ""
      ],
      [
        "Obtain preoperative anatomical imaging",
        ""
      ]
    ],
    "a": 2
  },
  "e2.mastery.ci-activation.05": {
    "q": "A family is prepared for surgery and follow-up but expects voices to sound natural at switch-on. Which activation-specific counseling point was missed?",
    "x": "The activation slide describes initially unfamiliar voices, including robotic or cartoon-like sound quality. Preparation for surgery and later follow-up does not replace discussing this first-listening experience.",
    "t": "mc",
    "o": [
      [
        "Explaining initial unfamiliar sound quality",
        ""
      ],
      [
        "Explaining long-term device follow-up visits",
        ""
      ],
      [
        "Explaining intraoperative telemetry procedures",
        ""
      ]
    ],
    "a": 0,
    "s": [
      "ARL4-31"
    ]
  },
  "e2.mastery.ci-mapping.02": {
    "t": "mc",
    "o": [
      [
        "Increase training demands before reviewing loudness",
        ""
      ],
      [
        "Use the detection threshold to retain the current map",
        ""
      ],
      [
        "Substitute an unaided test for the comfort report",
        ""
      ],
      [
        "Review stimulation levels and functional responses",
        ""
      ]
    ],
    "a": 3
  },
  "e2.mastery.ci-mapping.03": {
    "t": "mc",
    "o": [
      [
        "To evaluate electrical integrity during implantation",
        ""
      ],
      [
        "To assess aided thresholds and speech discrimination",
        ""
      ],
      [
        "To estimate the child’s unaided threshold configuration",
        ""
      ]
    ],
    "a": 1
  },
  "e2.mastery.ci-mapping.04": {
    "q": "Which distinction separates mapping from implantation?",
    "x": "Mapping adjusts the implant’s programming. Implantation is the surgical placement of the device, including the electrode array.",
    "t": "mc",
    "o": [
      [
        "Programming stimulation versus placing the array",
        ""
      ],
      [
        "Measuring aided thresholds versus testing speech",
        ""
      ],
      [
        "Assessing functional benefit versus fitting a hearing aid",
        ""
      ],
      [
        "Selecting a device versus counseling about outcomes",
        ""
      ]
    ],
    "a": 0
  },
  "e2.mastery.ci-outcomes.03": {
    "t": "mc",
    "o": [
      [
        "Auditory history, anatomy and rehabilitation also differ",
        ""
      ],
      [
        "Age at onset and age at implantation measure the same factor",
        ""
      ],
      [
        "Matching implant ages establishes equal duration of deprivation",
        ""
      ]
    ],
    "a": 0
  },
  "e2.mastery.ci-outcomes.04": {
    "q": "Which detail substitutes a different outcome for the one in the cited “up to 80%” finding?",
    "x": "The slide names receptive vocabulary at school entry in children implanted before 12 months. Expressive grammar is a different outcome; the percentage cannot be transferred to it.",
    "t": "mc",
    "o": [
      [
        "Receptive vocabulary within the normal range",
        ""
      ],
      [
        "Expressive grammar within the normal range",
        ""
      ],
      [
        "The outcome measured at school entry",
        ""
      ],
      [
        "Children implanted before twelve months",
        ""
      ]
    ],
    "a": 1
  },
  "e2.mastery.ci-two-ears.01": {
    "t": "mc",
    "o": [
      [
        "Monaural",
        ""
      ],
      [
        "Bilateral",
        ""
      ],
      [
        "Bimodal",
        ""
      ]
    ],
    "a": 1
  },
  "e2.mastery.ci-two-ears.03": {
    "t": "mc",
    "o": [
      [
        "Improved thresholds in the unaided ear",
        ""
      ],
      [
        "Improved localization of a sound source",
        ""
      ],
      [
        "Improved transmission through the middle ear",
        ""
      ]
    ],
    "a": 1
  },
  "e2.mastery.ci-two-ears.04": {
    "t": "mc",
    "o": [
      [
        "Binaural describes two-ear hearing; bimodal specifies a CI–HA combination",
        ""
      ],
      [
        "Binaural specifies two CIs; bimodal describes any two-ear arrangement",
        ""
      ],
      [
        "Binaural specifies two hearing aids; bimodal specifies two CIs",
        ""
      ],
      [
        "Binaural describes one functioning ear; bimodal describes two ears",
        ""
      ]
    ],
    "a": 0
  },
  "e2.brain-function.1": {
    "t": "mc",
    "o": [
      [
        "Detecting the presence of an auditory signal",
        ""
      ],
      [
        "Using sound meaningfully in the brain",
        ""
      ],
      [
        "Converting sound into neural activity",
        ""
      ]
    ],
    "a": 1
  },
  "e2.mastery.brain-function.02": {
    "t": "mc",
    "o": [
      [
        "They supply input that the brain must interpret",
        ""
      ],
      [
        "They determine meaning before neural transmission",
        ""
      ],
      [
        "They establish comprehension once sound is detected",
        ""
      ],
      [
        "They select phonetic categories before central processing",
        ""
      ]
    ],
    "a": 0
  },
  "e2.mastery.brain-function.03": {
    "t": "mc",
    "o": [
      [
        "Integration of sound with purposeful behavior",
        ""
      ],
      [
        "Measurement of sensitivity to the alarm’s frequency",
        ""
      ],
      [
        "Discrimination between two matched alarm signals",
        ""
      ]
    ],
    "a": 0
  },
  "e2.mastery.brain-function.04": {
    "q": "Which order matches the lecture’s four tasks of auditory function?",
    "x": "Input is collected, converted into neural responses, sent to the appropriate brain areas, then processed meaningfully.",
    "t": "mc",
    "o": [
      [
        "Pick up → change → send → process",
        ""
      ],
      [
        "Pick up → send → change → process",
        ""
      ],
      [
        "Change → pick up → send → process",
        ""
      ],
      [
        "Pick up → process → change → send",
        ""
      ]
    ],
    "a": 0
  },
  "e2.mastery.brain-function.05": {
    "t": "mc",
    "o": [
      [
        "Accurate discrimination of speech sounds",
        ""
      ],
      [
        "Consistent attention to spoken messages",
        ""
      ],
      [
        "Reliable access to auditory input",
        ""
      ]
    ],
    "a": 2
  },
  "e2.brain-timeline.1": {
    "t": "mc",
    "o": [
      [
        "About 20 weeks",
        ""
      ],
      [
        "About 12 weeks",
        ""
      ],
      [
        "About 32 weeks",
        ""
      ]
    ],
    "a": 0
  },
  "e2.mastery.brain-timeline.01": {
    "t": "mc",
    "o": [
      [
        "Cochlear function makes auditory input possible in utero",
        ""
      ],
      [
        "First-year phonetic tuning is completed before birth",
        ""
      ],
      [
        "Neural sound processing begins at the first spoken word",
        ""
      ]
    ],
    "a": 0
  },
  "e2.mastery.brain-timeline.02": {
    "t": "mc",
    "o": [
      [
        "About ten weeks",
        ""
      ],
      [
        "About twenty weeks",
        ""
      ],
      [
        "About thirty weeks",
        ""
      ],
      [
        "About forty weeks",
        ""
      ]
    ],
    "a": 1
  },
  "e2.mastery.brain-timeline.03": {
    "q": "Which relation between experience and development is described by first-year functional reorganization?",
    "x": "Exposure to daily languages tunes phonetic categories during the first year. This is distinct from prenatal auditory access and later literacy.",
    "t": "mc",
    "o": [
      [
        "Daily language experience tunes phonetic categories",
        ""
      ],
      [
        "Initial word production creates prenatal sound access",
        ""
      ],
      [
        "Written-word experience establishes neonatal vowel contrasts",
        ""
      ]
    ],
    "a": 0
  },
  "e2.mastery.brain-timeline.04": {
    "t": "mc",
    "o": [
      [
        "Recognition of a familiar written word",
        ""
      ],
      [
        "Comprehension of a novel spoken direction",
        ""
      ],
      [
        "Production of a first meaningful word",
        ""
      ],
      [
        "Discrimination of familiar-language vowel patterns",
        ""
      ]
    ],
    "a": 3
  },
  "e2.mastery.brain-timeline.05": {
    "t": "mc",
    "o": [
      [
        "Sensitivity to them increases alongside daily-language contrasts",
        ""
      ],
      [
        "Sensitivity to them becomes relatively attenuated",
        ""
      ],
      [
        "They replace the contrasts that occur in daily input",
        ""
      ]
    ],
    "a": 1
  },
  "e2.mastery.brain-plasticity.02": {
    "t": "mc",
    "o": [
      [
        "The first twelve months",
        ""
      ],
      [
        "The first three and a half years",
        ""
      ],
      [
        "The first six and a half years",
        ""
      ],
      [
        "The first ten years",
        ""
      ]
    ],
    "a": 1
  },
  "e2.mastery.brain-plasticity.03": {
    "t": "mc",
    "o": [
      [
        "It supplies auditory input during initial neural organization",
        ""
      ],
      [
        "It restores cochlear structure through repeated stimulation",
        ""
      ],
      [
        "It completes auditory-language learning at device activation",
        ""
      ]
    ],
    "a": 0
  },
  "e2.mastery.brain-plasticity.04": {
    "t": "mc",
    "o": [
      [
        "Developmental synchrony sets the quantity of auditory input",
        ""
      ],
      [
        "Neural organization is complete before meaningful sound access",
        ""
      ],
      [
        "Available stimulation influences neural functional development",
        ""
      ],
      [
        "Calendar age provides the same auditory experience as device use",
        ""
      ]
    ],
    "a": 2
  },
  "e2.mastery.brain-plasticity.05": {
    "x": "The early period is one of greater plasticity. A later start neither erases the missed experience nor establishes that learning cannot occur.",
    "t": "mc",
    "o": [
      [
        "Use chronological age alone to set auditory expectations",
        ""
      ],
      [
        "Treat the early-plasticity period as irrelevant to the history",
        ""
      ],
      [
        "Plan support while accounting for delayed auditory access",
        ""
      ]
    ],
    "a": 2
  },
  "e2.mastery.brain-plasticity.06": {
    "t": "mc",
    "o": [
      [
        "The audiogram improves because cortical pathways regrow hair cells",
        ""
      ],
      [
        "Early input reaches a brain that is organizing its auditory pathways",
        ""
      ],
      [
        "Activation supplies the phonetic categories needed for first words",
        ""
      ],
      [
        "Auditory stimulation affects the device but not neural organization",
        ""
      ]
    ],
    "a": 1
  },
  "e2.brain-cross-modal.1": {
    "x": "Visual or tactile recruitment of an auditory cortical area crosses sensory modalities. Phonetic tuning concerns distinctions within experienced speech; synchrony concerns developmental timing.",
    "t": "mc",
    "o": [
      [
        "Language-specific phonetic tuning",
        ""
      ],
      [
        "Cross-modal reorganization",
        ""
      ],
      [
        "Developmental synchrony",
        ""
      ]
    ],
    "a": 1
  },
  "e2.brain-cross-modal.2": {
    "x": "Heschl’s gyrus is the cortical location identified on the slide. The cochlear nucleus, inferior colliculus and medial geniculate body are other auditory-pathway structures, not this cortical region."
  },
  "e2.mastery.brain-cross-modal.01": {
    "t": "mc",
    "o": [
      [
        "A change in which sensory input recruits an area",
        ""
      ],
      [
        "A change in which speech contrast an infant discriminates",
        ""
      ],
      [
        "A change in the acoustic gain delivered by a hearing device",
        ""
      ]
    ],
    "a": 0
  },
  "e2.mastery.brain-cross-modal.02": {
    "t": "mc",
    "o": [
      [
        "Learning a second spoken language",
        ""
      ],
      [
        "Adapting to a new talker’s accent",
        ""
      ],
      [
        "Selecting a softer processor program",
        ""
      ],
      [
        "Deprivation of auditory stimulation",
        ""
      ]
    ],
    "a": 3
  },
  "e2.mastery.brain-cross-modal.04": {
    "t": "mc",
    "o": [
      [
        "It is altered encoding in the external speech processor",
        ""
      ],
      [
        "It is altered sensory recruitment of a cortical region",
        ""
      ],
      [
        "It is restored sensory transduction in the cochlea",
        ""
      ],
      [
        "It is changed mechanical transmission through the ossicles",
        ""
      ]
    ],
    "a": 1
  },
  "e2.mastery.brain-cross-modal.05": {
    "q": "Which intervention rationale follows from the lecture’s cross-modal explanation?",
    "x": "Input influences how developing cortical areas are used. This supports timely auditory access; it does not justify withholding visual communication or requiring hair-cell repair first.",
    "t": "mc",
    "o": [
      [
        "Restore typical cochlear transduction before fitting technology",
        ""
      ],
      [
        "Delay auditory input until visual processing is established",
        ""
      ],
      [
        "Provide auditory stimulation while sensory organization develops",
        ""
      ]
    ],
    "a": 2
  },
  "e2.mastery.brain-cross-modal.06": {
    "q": "Cross-modal reorganization is the tuning of phonetic distinctions within the language heard daily.",
    "x": "Daily-language phonetic tuning is functional reorganization within speech processing. Cross-modal reorganization involves recruitment by another sensory modality, such as vision or touch.",
    "s": [
      "ARL5-10",
      "ARL5-16"
    ],
    "t": "tf",
    "a": false
  },
  "e2.mastery.brain-synchrony.01": {
    "t": "mc",
    "o": [
      [
        "Auditory targets are chosen solely from time since activation",
        ""
      ],
      [
        "Skills develop near their biologically expected ages",
        ""
      ],
      [
        "All language goals are postponed until detection is mastered",
        ""
      ]
    ],
    "a": 1
  },
  "e2.mastery.brain-synchrony.02": {
    "t": "mc",
    "o": [
      [
        "Delayed audition → later access → automatic language catch-up",
        ""
      ],
      [
        "Delayed audition → matched listening age → typical chronological development",
        ""
      ],
      [
        "Delayed audition → delayed language → a remedial paradigm",
        ""
      ],
      [
        "Delayed audition → typical language timing → a developmental paradigm",
        ""
      ]
    ],
    "a": 2
  },
  "e2.mastery.brain-synchrony.03": {
    "t": "mc",
    "o": [
      [
        "Closing a gap that has accumulated over several years",
        ""
      ],
      [
        "Reacquiring skills lost after a prolonged access problem",
        ""
      ],
      [
        "Supporting new skills near their expected emergence",
        ""
      ]
    ],
    "a": 2
  },
  "e2.mastery.brain-synchrony.04": {
    "t": "mc",
    "o": [
      [
        "Their language input determines the implant’s pulse settings",
        ""
      ],
      [
        "Their observations establish cochlear anatomy for the team",
        ""
      ],
      [
        "Their reports substitute for checking aided access",
        ""
      ],
      [
        "Their interactions shape the child’s daily language input",
        ""
      ]
    ],
    "a": 3
  },
  "e2.mastery.brain-synchrony.05": {
    "t": "mc",
    "o": [
      [
        "Check input quality and coach daily language interactions",
        ""
      ],
      [
        "Use sound detection to infer adequate speech detail",
        ""
      ],
      [
        "Increase verbal complexity before examining access",
        ""
      ]
    ],
    "a": 0
  },
  "e2.mastery.brain-synchrony.06": {
    "q": "A remedial paradigm addresses a developmental gap that has already emerged.",
    "x": "The lecture contrasts supporting skills at age-appropriate times with responding to delays in auditory and language development.",
    "t": "tf",
    "a": true
  },
  "e2.listening-attention.1": {
    "t": "mc",
    "o": [
      [
        "Detection versus sound identification",
        ""
      ],
      [
        "Discrimination versus comprehension",
        ""
      ],
      [
        "Auditory access versus attention to sound",
        ""
      ]
    ],
    "a": 2
  },
  "e2.mastery.listening-attention.01": {
    "t": "mc",
    "o": [
      [
        "Awareness that a sound occurred",
        ""
      ],
      [
        "Physical access to speech information",
        ""
      ],
      [
        "Conscious attention to auditory input",
        ""
      ]
    ],
    "a": 2
  },
  "e2.mastery.listening-attention.02": {
    "t": "mc",
    "o": [
      [
        "Directing attention before presenting the message",
        ""
      ],
      [
        "Providing the meaning of the upcoming spoken instruction",
        ""
      ],
      [
        "Establishing access to previously inaudible speech bands",
        ""
      ],
      [
        "Demonstrating comprehension before the instruction occurred",
        ""
      ]
    ],
    "a": 0
  },
  "e2.mastery.listening-attention.04": {
    "q": "An infant’s experience tunes distinctions among the speech sounds heard daily. Which stage of the listening-experience sequence does this most directly describe?",
    "x": "Phonetic categories organize speech-sound contrasts. Lexical-semantic use concerns word meanings; reading and higher-order language are later uses.",
    "s": [
      "ARL5-10",
      "ARL5-19"
    ],
    "t": "mc",
    "o": [
      [
        "Lexical-semantic use",
        ""
      ],
      [
        "Phonetic categories",
        ""
      ],
      [
        "Higher-order language use",
        ""
      ],
      [
        "Reading comprehension",
        ""
      ]
    ],
    "a": 1
  },
  "e2.mastery.listening-age.03": {
    "t": "mc",
    "o": [
      [
        "The child with more access must have the older chronological age",
        ""
      ],
      [
        "Their calendar ages match while useful listening experience differs",
        ""
      ],
      [
        "Equal calendar ages establish equal accumulated listening experience",
        ""
      ]
    ],
    "a": 1
  },
  "e2.mastery.listening-age.05": {
    "t": "mc",
    "o": [
      [
        "About six to eight months",
        ""
      ],
      [
        "About ten to twelve months",
        ""
      ],
      [
        "About eighteen to twenty-four months",
        ""
      ]
    ],
    "a": 1
  },
  "e2.mastery.listening-age.06": {
    "t": "mc",
    "o": [
      [
        "Calendar time measures auditory progress independent of the signal",
        ""
      ],
      [
        "Elapsed listening age is equivalent to a receptive-language score",
        ""
      ],
      [
        "Device ownership supplies the same input as consistent useful use",
        ""
      ],
      [
        "Access quality and use affect what happens during elapsed time",
        ""
      ]
    ],
    "a": 3
  },
  "e2.mastery.listening-quality.02": {
    "t": "mc",
    "o": [
      [
        "Review the quality of aided access as well as wear time",
        ""
      ],
      [
        "Interpret full-day use as evidence of sufficient speech detail",
        ""
      ],
      [
        "Estimate speech access from the fitting date alone",
        ""
      ],
      [
        "Choose the next language goal solely from logged hours",
        ""
      ]
    ],
    "a": 0
  },
  "e2.mastery.listening-quality.04": {
    "t": "mc",
    "o": [
      [
        "Access through appropriate fitting and programming",
        ""
      ],
      [
        "Age-appropriate receptive-language performance",
        ""
      ],
      [
        "Mastery of the sounds used in the planned activity",
        ""
      ],
      [
        "Consistent spoken responses during a baseline task",
        ""
      ]
    ],
    "a": 0
  },
  "e2.mastery.listening-quality.05": {
    "q": "With daily wear time held constant, which comparison tests the effect of signal quality?",
    "x": "Clear versus distorted input changes signal quality while holding exposure duration constant. Matching speech quality or enrichment would not test that contrast.",
    "t": "mc",
    "o": [
      [
        "Equal hours with clear versus distorted speech input",
        ""
      ],
      [
        "Equal hours with equally intelligible speech input",
        ""
      ],
      [
        "Equal hours with matched daily language enrichment",
        ""
      ]
    ],
    "a": 0
  },
  "e2.mastery.listening-quality.06": {
    "q": "Programming quality and daily wear time describe separate influences on listening experience.",
    "x": "The slide lists signal quality separately from time worn, age of acquisition and adult enrichment.",
    "t": "tf",
    "a": true
  },
  "e2.mastery.listening-daily.03": {
    "q": "Using 365 days per year, how long at 4 hours per day accumulates the same hours as one year at 10 hours per day?",
    "x": "10 × 365 = 3,650 hours. At 4 × 365 = 1,460 hours per year, 3,650 ÷ 1,460 = 2.5 years. This is arithmetic from the stated daily hours, not the slide’s inconsistent six-year claim.",
    "t": "mc",
    "o": [
      [
        "6.0 years",
        ""
      ],
      [
        "2.5 years",
        ""
      ],
      [
        "4.0 years",
        ""
      ]
    ],
    "a": 1
  },
  "e2.mastery.listening-daily.04": {
    "t": "mc",
    "o": [
      [
        "Practice mainly in the weekly clinic session",
        ""
      ],
      [
        "Use the strategy only during a formal home drill",
        ""
      ],
      [
        "Embed the strategy in meals, play and conversation",
        ""
      ],
      [
        "Replace listening turns with a daily device check",
        ""
      ]
    ],
    "a": 2
  },
  "e2.mastery.listening-daily.05": {
    "t": "mc",
    "o": [
      [
        "Consistent access throughout waking routines",
        ""
      ],
      [
        "Consistent access during scheduled therapy periods",
        ""
      ],
      [
        "Consistent access during spoken-language testing",
        ""
      ]
    ],
    "a": 0
  },
  "e2.mastery.listening-daily.06": {
    "t": "mc",
    "o": [
      [
        "Annual threshold testing and clinic-only vocabulary practice",
        ""
      ],
      [
        "Initial fitting and a listening-hour target alone",
        ""
      ],
      [
        "Family reports and device choice without follow-up",
        ""
      ],
      [
        "Continued audiologic management and caregiver coaching",
        ""
      ]
    ],
    "a": 3
  },
  "e2.speech-access.1": {
    "t": "mc",
    "o": [
      [
        "Audibility versus intelligibility",
        ""
      ],
      [
        "Detection versus attention",
        ""
      ],
      [
        "Intensity versus frequency",
        ""
      ]
    ],
    "a": 0
  },
  "e2.mastery.speech-access.01": {
    "t": "mc",
    "o": [
      [
        "Detection performance can match while recognition differs",
        ""
      ],
      [
        "Matching detection predicts matching phoneme identification",
        ""
      ],
      [
        "Recognition differences require different unaided thresholds",
        ""
      ]
    ],
    "a": 0
  },
  "e2.mastery.speech-access.03": {
    "t": "mc",
    "o": [
      [
        "Vowel energy supplies the missing consonant distinctions",
        ""
      ],
      [
        "Weak consonant detail may remain unavailable",
        ""
      ],
      [
        "Total voice intensity specifies each phoneme’s audibility",
        ""
      ]
    ],
    "a": 1
  },
  "e2.mastery.speech-access.05": {
    "q": "Which question can be answered by detecting speech without identifying or understanding it?",
    "x": "Detecting presence establishes audibility. Naming a sound or interpreting a message requires information beyond mere presence.",
    "t": "mc",
    "o": [
      [
        "Which sound was it?",
        ""
      ],
      [
        "What did the sentence mean?",
        ""
      ],
      [
        "Was a speech signal present?",
        ""
      ]
    ],
    "a": 2
  },
  "e2.speech-range.2": {
    "t": "mc",
    "o": [
      [
        "0.25–0.5 kHz",
        ""
      ],
      [
        "3–4 kHz",
        ""
      ],
      [
        "8–10 kHz",
        ""
      ]
    ],
    "a": 1
  },
  "e2.mastery.speech-range.01": {
    "t": "mc",
    "o": [
      [
        "Hearing level in dB HL",
        ""
      ],
      [
        "Sound-pressure level in dB SPL",
        ""
      ],
      [
        "Speech intensity in dB SL",
        ""
      ]
    ],
    "a": 1
  },
  "e2.mastery.speech-range.02": {
    "t": "mc",
    "o": [
      [
        "Speech-recognition threshold",
        ""
      ],
      [
        "Threshold of feeling",
        ""
      ],
      [
        "Minimum-audibility threshold",
        ""
      ],
      [
        "Average conversational-speech level",
        ""
      ]
    ],
    "a": 1
  },
  "e2.mastery.speech-range.04": {
    "t": "mc",
    "o": [
      [
        "Detection pressure varies with frequency",
        ""
      ],
      [
        "The curve marks equal speech recognition at every frequency",
        ""
      ],
      [
        "The curve is normalized to 0 dB HL at every frequency",
        ""
      ],
      [
        "Each point is referenced to the listener’s own threshold",
        ""
      ]
    ],
    "a": 0
  },
  "e2.mastery.speech-range.05": {
    "t": "mc",
    "o": [
      [
        "Levels between detection and the upper feeling boundary",
        ""
      ],
      [
        "Frequencies carrying the greatest amount of speech information",
        ""
      ],
      [
        "The interval between aided and unaided threshold curves",
        ""
      ]
    ],
    "a": 0
  },
  "e2.mastery.speech-energy.01": {
    "t": "mc",
    "o": [
      [
        "Voiceless fricatives",
        ""
      ],
      [
        "Vowels",
        ""
      ],
      [
        "Voiceless stops",
        ""
      ]
    ],
    "a": 1
  },
  "e2.mastery.speech-energy.02": {
    "t": "mc",
    "o": [
      [
        "Most of the overall acoustic energy",
        ""
      ],
      [
        "Most information distinguishing speech sounds",
        ""
      ],
      [
        "Most of the low-frequency vowel power",
        ""
      ],
      [
        "Most of the sustained voiced duration",
        ""
      ]
    ],
    "a": 1
  },
  "e2.mastery.speech-energy.04": {
    "q": "Which energy proportion is assigned in the course’s summary slide?",
    "x": "The summary assigns about 90% of speech energy to vowels and 10% to consonants while emphasizing consonants’ large informational contribution. These are the slide’s broad teaching proportions.",
    "t": "mc",
    "o": [
      [
        "Vowels provide about 10% of speech energy",
        ""
      ],
      [
        "Consonants provide about 10% of speech energy",
        ""
      ],
      [
        "Consonants provide about 90% of speech energy",
        ""
      ],
      [
        "Vowels and consonants provide equal energy",
        ""
      ]
    ],
    "a": 1
  },
  "e2.mastery.speech-energy.05": {
    "t": "mc",
    "o": [
      [
        "Both scales use the same reference at each frequency",
        ""
      ],
      [
        "The scales use different reference quantities",
        ""
      ],
      [
        "HL expresses recognition accuracy rather than sound level",
        ""
      ]
    ],
    "a": 1
  },
  "e2.speech-frequency.2": {
    "t": "mc",
    "o": [
      [
        "2,000 Hz",
        ""
      ],
      [
        "1,000 Hz",
        ""
      ],
      [
        "4,000 Hz",
        ""
      ]
    ],
    "a": 0
  },
  "e2.mastery.speech-frequency.02": {
    "t": "mc",
    "o": [
      [
        "Below 1 kHz / near 500 Hz",
        ""
      ],
      [
        "Below 1 kHz / near 2 kHz",
        ""
      ],
      [
        "Near 2 kHz / below 1 kHz",
        ""
      ],
      [
        "Above 2 kHz / near 4 kHz",
        ""
      ]
    ],
    "a": 1
  },
  "e2.mastery.speech-frequency.03": {
    "t": "mc",
    "o": [
      [
        "Strong high-frequency energy",
        ""
      ],
      [
        "Weak low-to-mid-frequency energy",
        ""
      ],
      [
        "Strong low-to-mid-frequency energy",
        ""
      ]
    ],
    "a": 2
  },
  "e2.mastery.speech-frequency.04": {
    "t": "mc",
    "o": [
      [
        "Their spectra are determined solely by overall speech loudness",
        ""
      ],
      [
        "Their spectra form a separate band without vowel overlap",
        ""
      ],
      [
        "Voiced consonants can contain low/mid-frequency components",
        ""
      ],
      [
        "Their primary energy distribution is identical to that of vowels",
        ""
      ]
    ],
    "a": 2
  },
  "e2.mastery.speech-frequency.05": {
    "t": "mc",
    "o": [
      [
        "Access to the strongest low-frequency vowel energy",
        ""
      ],
      [
        "Access to weaker high-frequency consonant distinctions",
        ""
      ],
      [
        "The amount of time a talker takes to produce vowels",
        ""
      ]
    ],
    "a": 1
  },
  "e2.mastery.speech-time.01": {
    "t": "mc",
    "o": [
      [
        "20–150 milliseconds",
        ""
      ],
      [
        "130–360 milliseconds",
        ""
      ],
      [
        "20–400 milliseconds",
        ""
      ]
    ],
    "a": 2
  },
  "e2.mastery.speech-time.02": {
    "t": "mc",
    "o": [
      [
        "Speech context and speaker characteristics affect duration",
        ""
      ],
      [
        "A phoneme’s frequency fixes its duration across contexts",
        ""
      ],
      [
        "A phoneme keeps its isolated duration in connected speech",
        ""
      ],
      [
        "Duration depends on spelling rather than production context",
        ""
      ]
    ],
    "a": 0
  },
  "e2.mastery.speech-time.03": {
    "t": "mc",
    "o": [
      [
        "Place of the following consonant",
        ""
      ],
      [
        "Voicing of the following consonant",
        ""
      ],
      [
        "Stress on the preceding syllable",
        ""
      ]
    ],
    "a": 1
  },
  "e2.mastery.speech-time.04": {
    "t": "mc",
    "o": [
      [
        "Place, manner and voicing",
        ""
      ],
      [
        "Individual vowel and consonant categories",
        ""
      ],
      [
        "Rhythm, stress and intonation",
        ""
      ],
      [
        "Vowel identity, consonant identity and phoneme order",
        ""
      ]
    ],
    "a": 2
  },
  "e2.mastery.speech-time.05": {
    "t": "mc",
    "o": [
      [
        "Its isolated spectrum determines its connected-speech form",
        ""
      ],
      [
        "Adjacent phonemes alter its acoustic properties",
        ""
      ],
      [
        "Its acoustic properties change only with overall voice level",
        ""
      ]
    ],
    "a": 1
  },
  "e2.ling-purpose.1": {
    "t": "mc",
    "o": [
      [
        "Estimating a complete aided word-recognition score",
        ""
      ],
      [
        "Determining the cause of a hearing change",
        ""
      ],
      [
        "Monitoring access across sampled speech sounds",
        ""
      ]
    ],
    "a": 2
  },
  "e2.mastery.ling-purpose.01": {
    "t": "mc",
    "o": [
      [
        "Understanding of words containing all ten sounds",
        ""
      ],
      [
        "Equal identification performance at each listening distance",
        ""
      ],
      [
        "Access to the sampled regions under the check conditions",
        ""
      ]
    ],
    "a": 2
  },
  "e2.mastery.ling-purpose.02": {
    "t": "mc",
    "o": [
      [
        "Which missed sound determines the cause of the hearing loss?",
        ""
      ],
      [
        "Has access changed relative to the child’s usual response pattern?",
        ""
      ],
      [
        "What word-recognition score is predicted from the detected sounds?",
        ""
      ],
      [
        "Which stimulation level should be programmed from each response?",
        ""
      ]
    ],
    "a": 1
  },
  "e2.mastery.ling-purpose.03": {
    "t": "mc",
    "o": [
      [
        "Combined-ear performance can conceal an ear-specific difficulty",
        ""
      ],
      [
        "Both-ear success establishes equal access through each device",
        ""
      ],
      [
        "Separate-ear checks measure language while both-ear checks measure hearing",
        ""
      ]
    ],
    "a": 0
  },
  "e2.mastery.ling-purpose.05": {
    "t": "mc",
    "o": [
      [
        "An estimate of recognition from the detection count",
        ""
      ],
      [
        "Speech-perception testing matched to the child’s abilities",
        ""
      ],
      [
        "An estimate of sentence comprehension from sound identification",
        ""
      ]
    ],
    "a": 1
  },
  "e2.mastery.ling-sounds.06": {
    "q": "Using AB page 2, which bands are assigned to /sh/?",
    "x": "AB page 2 lists /sh/ in Bands 3 and 4. A later card conflicts, so the key applies to the explicitly named table rather than silently reconciling the sources.",
    "t": "mc",
    "o": [
      [
        "Bands 1 and 2",
        ""
      ],
      [
        "Bands 3 and 4",
        ""
      ],
      [
        "Band 3 alone",
        ""
      ],
      [
        "Band 4 alone",
        ""
      ]
    ],
    "a": 1
  },
  "e2.mastery.ling-procedure.02": {
    "t": "mc",
    "o": [
      [
        "A soft whisper",
        ""
      ],
      [
        "An elevated voice",
        ""
      ],
      [
        "Maximum comfortable loudness",
        ""
      ],
      [
        "Normal speaking volume",
        ""
      ]
    ],
    "a": 3
  },
  "e2.mastery.ling-procedure.03": {
    "t": "mc",
    "o": [
      [
        "Increase distance and raise voice level together",
        ""
      ],
      [
        "Increase distance while retaining the normal voice",
        ""
      ],
      [
        "Keep distance fixed and replace sounds with cue words",
        ""
      ]
    ],
    "a": 1
  },
  "e2.mastery.ling-procedure.04": {
    "t": "mc",
    "o": [
      [
        "Sound order, total check duration and number of pictures",
        ""
      ],
      [
        "Sound, response, ear/device condition and distance",
        ""
      ],
      [
        "Device brand, fitting date and therapy appointment frequency",
        ""
      ],
      [
        "Child’s age, vocabulary count and total sounds detected",
        ""
      ]
    ],
    "a": 1
  },
  "e2.mastery.ling-procedure.05": {
    "t": "mc",
    "o": [
      [
        "Pause and resume when participation is reliable",
        ""
      ],
      [
        "Score the unattempted sounds as detection failures",
        ""
      ],
      [
        "Repeat the remaining sounds at progressively louder levels",
        ""
      ]
    ],
    "a": 0
  },
  "e2.mastery.ling-change.01": {
    "t": "mc",
    "o": [
      [
        "A harder discrimination target",
        ""
      ],
      [
        "Device function and test conditions",
        ""
      ],
      [
        "A revised language-age estimate",
        ""
      ]
    ],
    "a": 1
  },
  "e2.mastery.ling-change.02": {
    "t": "mc",
    "o": [
      [
        "Vocabulary and response-set size",
        ""
      ],
      [
        "Battery and microphone function",
        ""
      ],
      [
        "Stress and intonation patterns",
        ""
      ],
      [
        "Memory span and sentence length",
        ""
      ]
    ],
    "a": 1
  },
  "e2.mastery.ling-change.03": {
    "t": "mc",
    "o": [
      [
        "The SLP for an independent map change",
        ""
      ],
      [
        "The teacher for an ear-specific diagnosis",
        ""
      ],
      [
        "The audiologist for further investigation",
        ""
      ]
    ],
    "a": 2
  },
  "e2.mastery.ling-change.04": {
    "t": "mc",
    "o": [
      [
        "A normal response to /m/ establishes high-frequency access",
        ""
      ],
      [
        "A previous successful check excludes later device malfunction",
        ""
      ],
      [
        "A changed device or test condition can alter a response",
        ""
      ],
      [
        "A missed sound identifies its own underlying cause",
        ""
      ]
    ],
    "a": 2
  },
  "e2.mastery.context-redundancy.02": {
    "t": "mc",
    "o": [
      [
        "Reduced competing acoustic noise",
        ""
      ],
      [
        "Improved articulation of the missed word",
        ""
      ],
      [
        "A lower detection threshold at that frequency",
        ""
      ],
      [
        "Predictive information from the rest of the phrase",
        ""
      ]
    ],
    "a": 3
  },
  "e2.mastery.context-redundancy.04": {
    "t": "mc",
    "o": [
      [
        "Sentence recognition isolates each phoneme’s audibility",
        ""
      ],
      [
        "Detection of the sentence measures every phonetic contrast",
        ""
      ],
      [
        "Word prediction depends only on auditory thresholds",
        ""
      ],
      [
        "Linguistic clues can reconstruct an acoustically missed part",
        ""
      ]
    ],
    "a": 3
  },
  "e2.mastery.context-redundancy.05": {
    "t": "mc",
    "o": [
      [
        "Topic knowledge and vocabulary familiarity",
        ""
      ],
      [
        "Grammatical formulation and talker articulation",
        ""
      ],
      [
        "Situational cues and room reverberation",
        ""
      ]
    ],
    "a": 0
  },
  "e2.mastery.context-constraints.01": {
    "t": "mc",
    "o": [
      [
        "Semantic",
        ""
      ],
      [
        "Situational",
        ""
      ],
      [
        "Syntactic",
        ""
      ]
    ],
    "a": 0
  },
  "e2.mastery.context-constraints.02": {
    "t": "mc",
    "o": [
      [
        "Phonetic",
        ""
      ],
      [
        "Syntactic",
        ""
      ],
      [
        "Situational",
        ""
      ],
      [
        "Semantic",
        ""
      ]
    ],
    "a": 1
  },
  "e2.mastery.context-constraints.03": {
    "t": "mc",
    "o": [
      [
        "Syntactic structure",
        ""
      ],
      [
        "Semantic word relationships",
        ""
      ],
      [
        "Situational context",
        ""
      ]
    ],
    "a": 2
  },
  "e2.mastery.context-constraints.04": {
    "t": "mc",
    "o": [
      [
        "Syntax concerns grammatical relations; semantics concerns meaning",
        ""
      ],
      [
        "Syntax concerns message meaning; semantics concerns word order",
        ""
      ],
      [
        "Syntax concerns the physical setting; semantics concerns social context",
        ""
      ],
      [
        "Syntax concerns articulation; semantics concerns the stress pattern",
        ""
      ]
    ],
    "a": 0
  },
  "e2.mastery.context-constraints.05": {
    "t": "mc",
    "o": [
      [
        "Grammar can be preserved while meaning is implausible",
        ""
      ],
      [
        "Plausible meaning establishes correct grammatical structure",
        ""
      ],
      [
        "Correct grammar supplies the missing physical context",
        ""
      ]
    ],
    "a": 0
  },
  "e2.mastery.context-noise.03": {
    "t": "mc",
    "o": [
      [
        "The barrier must come from the speaker’s articulation",
        ""
      ],
      [
        "A listener-related barrier can remain in acoustic quiet",
        ""
      ],
      [
        "Quiet-room performance measures only hearing sensitivity",
        ""
      ]
    ],
    "a": 1
  },
  "e2.mastery.context-noise.04": {
    "t": "mc",
    "o": [
      [
        "Their access to high frequencies is determined by age alone",
        ""
      ],
      [
        "Their familiar-word vocabulary matches the adult’s vocabulary",
        ""
      ],
      [
        "Their detection thresholds determine how much syntax they know",
        ""
      ],
      [
        "Their language knowledge may provide fewer reconstruction cues",
        ""
      ]
    ],
    "a": 3
  },
  "e2.mastery.listening-hierarchy.05": {
    "t": "mc",
    "o": [
      [
        "The particular game or toy selected",
        ""
      ],
      [
        "The stimulus’s identity as speech or nonspeech",
        ""
      ],
      [
        "The information required by the child’s response",
        ""
      ]
    ],
    "a": 2
  },
  "e2.development-scales.1": {
    "x": "The scale integrates listening, receptive and expressive language, speech, cognition and pragmatics. The alternatives omit a language domain and substitute motor skills or literacy."
  },
  "e2.mastery.development-scales.01": {
    "t": "mc",
    "o": [
      [
        "A standardized diagnostic score for language impairment",
        ""
      ],
      [
        "A guide for an individualized developmental program",
        ""
      ],
      [
        "A fixed schedule for ranking children by chronological age",
        ""
      ]
    ],
    "a": 1
  },
  "e2.mastery.development-scales.03": {
    "t": "mc",
    "o": [
      [
        "Successful listening fixes the level expected in every other domain",
        ""
      ],
      [
        "Each domain must be completed before the next is addressed",
        ""
      ],
      [
        "Concurrent development makes the combined profile informative",
        ""
      ]
    ],
    "a": 2
  },
  "e2.mastery.development-scales.04": {
    "t": "mc",
    "o": [
      [
        "Expect many skills toward the upper end of the range",
        ""
      ],
      [
        "Require all listed skills at the lower boundary",
        ""
      ],
      [
        "Use the band’s midpoint as a diagnostic cutoff",
        ""
      ],
      [
        "Apply the same attained age to every developmental domain",
        ""
      ]
    ],
    "a": 0
  },
  "e2.mastery.development-scales.05": {
    "t": "mc",
    "o": [
      [
        "Understanding a familiar spoken word",
        ""
      ],
      [
        "Taking turns in a social interaction",
        ""
      ],
      [
        "Producing a meaningful spoken word",
        ""
      ]
    ],
    "a": 1
  },
  "e2.development-milestones.1": {
    "t": "mc",
    "o": [
      [
        "7–9 months",
        ""
      ],
      [
        "10–12 months",
        ""
      ],
      [
        "13–15 months",
        ""
      ]
    ],
    "a": 0
  },
  "e2.mastery.development-milestones.01": {
    "t": "mc",
    "o": [
      [
        "Localizing accurately to a sound source",
        ""
      ],
      [
        "Stilling or startling to a sound",
        ""
      ],
      [
        "Associating a familiar word with its meaning",
        ""
      ]
    ],
    "a": 1
  },
  "e2.mastery.development-milestones.02": {
    "t": "mc",
    "o": [
      [
        "Sounds begin to acquire meaning",
        ""
      ],
      [
        "Auditory memory for two items is established",
        ""
      ],
      [
        "Three directions are recalled in sequence",
        ""
      ],
      [
        "A story’s main idea is summarized",
        ""
      ]
    ],
    "a": 0
  },
  "e2.mastery.development-milestones.03": {
    "t": "mc",
    "o": [
      [
        "4–6 months",
        ""
      ],
      [
        "10–12 months",
        ""
      ],
      [
        "7–9 months",
        ""
      ]
    ],
    "a": 2
  },
  "e2.mastery.development-milestones.05": {
    "t": "mc",
    "o": [
      [
        "Activation restarts the expected age for all developmental domains",
        ""
      ],
      [
        "Auditory experience is one part of the child’s developmental history",
        ""
      ],
      [
        "Listening age supplies the same information as chronological age",
        ""
      ]
    ],
    "a": 1
  },
  "e2.mastery.development-intelligibility.03": {
    "t": "mc",
    "o": [
      [
        "Four years",
        ""
      ],
      [
        "Three years",
        ""
      ],
      [
        "Two years",
        ""
      ]
    ],
    "a": 0
  },
  "e2.mastery.development-intelligibility.04": {
    "t": "mc",
    "o": [
      [
        "The named listener group is parents",
        ""
      ],
      [
        "The table measures the child’s comprehension",
        ""
      ],
      [
        "The percentage reflects receptive vocabulary size",
        ""
      ],
      [
        "The ages are defined as elapsed device-use years",
        ""
      ]
    ],
    "a": 0
  },
  "e2.mastery.development-intelligibility.05": {
    "t": "mc",
    "o": [
      [
        "The age-three estimate",
        ""
      ],
      [
        "The age-two upper estimate",
        ""
      ],
      [
        "The age-four estimate",
        ""
      ]
    ],
    "a": 0
  },
  "e2.mastery.development-intelligibility.06": {
    "q": "The chart’s parent-understood percentages measure how well the child understands a parent’s speech.",
    "x": "The chart concerns how much of the child’s speech parents understand. It is not the child’s receptive-language score.",
    "s": [
      "ARL5-41"
    ],
    "t": "tf",
    "a": false
  },
  "e2.mastery.development-coaching.01": {
    "t": "mc",
    "o": [
      [
        "A uniform decrease in every speech sound’s loudness",
        ""
      ],
      [
        "Distortion or loss of portions of incoming speech",
        ""
      ],
      [
        "A reduction in attention with intact auditory access",
        ""
      ]
    ],
    "a": 1
  },
  "e2.mastery.development-coaching.02": {
    "t": "mc",
    "o": [
      [
        "Complete a fixed drill without changing the routine",
        ""
      ],
      [
        "Build responsive listening turns into daily activities",
        ""
      ],
      [
        "Use weekly clinic performance as the home practice record",
        ""
      ],
      [
        "Substitute device wear-time tracking for language interaction",
        ""
      ]
    ],
    "a": 1
  },
  "e2.mastery.development-coaching.03": {
    "t": "mc",
    "o": [
      [
        "A lack of visible difficulty establishes access in quiet",
        ""
      ],
      [
        "A response to voice confirms access to its consonant detail",
        ""
      ],
      [
        "Communication cues can be lost without an obvious visible sign",
        ""
      ]
    ],
    "a": 2
  },
  "e2.mastery.development-coaching.04": {
    "t": "mc",
    "o": [
      [
        "Demonstrate a clinic task and retain the same target regardless of home response",
        ""
      ],
      [
        "Select the next activity by age without reviewing the child’s current performance",
        ""
      ],
      [
        "Repeat test vocabulary at home without linking it to meaningful interactions",
        ""
      ],
      [
        "Coach a routine, gather home observations and use them to adjust support",
        ""
      ]
    ],
    "a": 3
  },
  "e2.mastery.development-coaching.05": {
    "t": "mc",
    "o": [
      [
        "An aided detection response establishes stable access to speech detail",
        ""
      ],
      [
        "Speech learning depends partly on the quality of auditory input",
        ""
      ],
      [
        "A change in speech production directly measures an implant malfunction",
        ""
      ]
    ],
    "a": 1
  },
  "e2.mastery.at-purpose.01": {
    "t": "mc",
    "o": [
      [
        "A score indicating comprehension of connected speech",
        ""
      ],
      [
        "A criterion for choosing the implant’s electrical levels",
        ""
      ],
      [
        "Auditory information the child can learn to use",
        ""
      ]
    ],
    "a": 2
  },
  "e2.mastery.at-purpose.02": {
    "t": "mc",
    "o": [
      [
        "The family attends a scheduled therapy block at a center",
        ""
      ],
      [
        "An intervention specialist coaches the family in the home",
        ""
      ],
      [
        "The school provides the full intervention during class time",
        ""
      ],
      [
        "The audiologist provides training only during mapping visits",
        ""
      ]
    ],
    "a": 1
  },
  "e2.mastery.at-purpose.03": {
    "t": "mc",
    "o": [
      [
        "Have the child listen and respond during shared play",
        ""
      ],
      [
        "Measure aided detection thresholds in a sound booth",
        ""
      ],
      [
        "Check output while programming the hearing device",
        ""
      ]
    ],
    "a": 0
  },
  "e2.mastery.at-purpose.04": {
    "q": "Which populations receive particular emphasis for auditory training in the lecture?",
    "x": "The lecture highlights CI recipients, prelingual loss and severe-to-profound hearing loss. This emphasis does not exclude others with listening needs.",
    "t": "mc",
    "o": [
      [
        "Children with transient conductive loss and no listening difficulty",
        ""
      ],
      [
        "Postlingually deaf adults with established spoken language",
        ""
      ],
      [
        "CI recipients and children with prelingual severe-to-profound loss",
        ""
      ],
      [
        "Children selected solely because they have reached school age",
        ""
      ]
    ],
    "a": 2
  },
  "e2.mastery.at-purpose.05": {
    "t": "mc",
    "o": [
      [
        "To build listening opportunities matched to current ability",
        ""
      ],
      [
        "To set every goal from chronological age alone",
        ""
      ],
      [
        "To choose device settings from the child’s preferred activities",
        ""
      ]
    ],
    "a": 0
  },
  "e2.mastery.at-baseline.01": {
    "t": "mc",
    "o": [
      [
        "An identification target informed by current performance",
        ""
      ],
      [
        "A comprehension target inferred from detection success",
        ""
      ],
      [
        "A detection-only program based on chronological age",
        ""
      ]
    ],
    "a": 0
  },
  "e2.mastery.at-baseline.02": {
    "t": "mc",
    "o": [
      [
        "To compare later performance with a documented starting point",
        ""
      ],
      [
        "To use post-training performance as an estimate of the original skill",
        ""
      ],
      [
        "To interpret supported and unsupported responses as one condition",
        ""
      ],
      [
        "To select targets independently of the child’s observed strengths",
        ""
      ]
    ],
    "a": 0
  },
  "e2.mastery.at-baseline.03": {
    "t": "mc",
    "o": [
      [
        "Coordinate review of access before training the contrast",
        ""
      ],
      [
        "Increase task repetitions while retaining the same auditory input",
        ""
      ],
      [
        "Use a picture cue and record the result as auditory-only success",
        ""
      ]
    ],
    "a": 0
  },
  "e2.mastery.at-baseline.04": {
    "t": "mc",
    "o": [
      [
        "Age, implant brand and manufacturer preference",
        ""
      ],
      [
        "Language score, program name and clinician preference",
        ""
      ],
      [
        "Degree of loss, device age and therapy location",
        ""
      ],
      [
        "Age, language ability and type/degree of hearing loss",
        ""
      ]
    ],
    "a": 3
  },
  "e2.mastery.at-baseline.05": {
    "t": "mc",
    "o": [
      [
        "Pictures convert an identification response into detection",
        ""
      ],
      [
        "The improved score may partly reflect the added support",
        ""
      ],
      [
        "The new score can be compared without noting the visual condition",
        ""
      ]
    ],
    "a": 1
  },
  "e2.mastery.at-baseline.06": {
    "q": "A pre-training baseline can be used to evaluate change after intervention.",
    "x": "Providing a basis for post-therapy assessment is one of the three purposes on slide 6.",
    "t": "tf",
    "a": true
  },
  "e2.mastery.at-infant.01": {
    "t": "mc",
    "o": [
      [
        "Spoken responses are required for every auditory assessment",
        ""
      ],
      [
        "Physical and cognitive abilities constrain the response task",
        ""
      ],
      [
        "Informal observation directly supplies an open-set word score",
        ""
      ]
    ],
    "a": 1
  },
  "e2.mastery.at-infant.02": {
    "q": "Which goal fits the lecture’s emphasis on emerging infant auditory skills before formal word recognition?",
    "x": "The infant slide identifies emerging skills such as gross discrimination and localization. Word identification and multielement directions require additional response and language abilities.",
    "t": "mc",
    "o": [
      [
        "Orienting toward a sound source",
        ""
      ],
      [
        "Selecting a pictured word from a closed set",
        ""
      ],
      [
        "Repeating a monosyllabic word without choices",
        ""
      ],
      [
        "Following a two-element spoken direction",
        ""
      ]
    ],
    "a": 0
  },
  "e2.mastery.at-infant.04": {
    "t": "mc",
    "o": [
      [
        "The response format limits interpretation of this score",
        ""
      ],
      [
        "The absent pointing response establishes absent sound detection",
        ""
      ],
      [
        "The task can be scored as zero auditory recognition without qualification",
        ""
      ],
      [
        "The failed response establishes inadequate hearing-aid output",
        ""
      ]
    ],
    "a": 0
  },
  "e2.mastery.at-infant.05": {
    "t": "mc",
    "o": [
      [
        "Informal observation and caregiver information",
        ""
      ],
      [
        "Closed-set picture pointing as the primary method",
        ""
      ],
      [
        "Open-set repetition with familiar spoken vocabulary",
        ""
      ]
    ],
    "a": 0
  },
  "e2.mastery.at-fapi.03": {
    "t": "mc",
    "o": [
      [
        "Specify distance in the target and performance record",
        ""
      ],
      [
        "Report one average without retaining the listening distances",
        ""
      ],
      [
        "Select targets from age while disregarding the distance effect",
        ""
      ]
    ],
    "a": 0
  },
  "e2.mastery.at-fapi.05": {
    "t": "mc",
    "o": [
      [
        "Supply one global speech-recognition percentage",
        ""
      ],
      [
        "Guide goals using skills and listening conditions",
        ""
      ],
      [
        "Replace domain scores with a diagnostic hearing threshold",
        ""
      ]
    ],
    "a": 1
  },
  "e2.mastery.at-fapi.06": {
    "q": "A category score moves from 79% to 80%. Which FAPI label applies at the new score?",
    "x": "The handout labels 36–79% “in process” and 80–100% “acquired.” The threshold is inclusive at 80%; it is unrelated to the lab’s mastery rule.",
    "t": "mc",
    "o": [
      [
        "Not present",
        ""
      ],
      [
        "Acquired",
        ""
      ],
      [
        "In process",
        ""
      ],
      [
        "Emerging",
        ""
      ]
    ],
    "a": 1
  },
  "e2.at-esp.2": {
    "t": "mc",
    "o": [
      [
        "Open-set word repetition",
        ""
      ],
      [
        "Same/different sound comparison",
        ""
      ],
      [
        "Closed-set pattern and word responses",
        ""
      ]
    ],
    "a": 2
  },
  "e2.at-ling-task.2": {
    "t": "mc",
    "o": [
      [
        "To standardize voice intensity and listening distance",
        ""
      ],
      [
        "To test stimulus-linked responses rather than anticipation",
        ""
      ],
      [
        "To reduce the vocabulary needed for picture selection",
        ""
      ]
    ],
    "a": 1
  },
  "e2.mastery.at-wipi.02": {
    "t": "mc",
    "o": [
      [
        "Words in one list",
        ""
      ],
      [
        "Speech-perception categories",
        ""
      ],
      [
        "Pictures in each response array",
        ""
      ],
      [
        "Available word lists",
        ""
      ]
    ],
    "a": 3
  },
  "e2.mastery.at-wipi.03": {
    "t": "mc",
    "o": [
      [
        "It removes the receptive vocabulary demand",
        ""
      ],
      [
        "It measures detection without word recognition",
        ""
      ],
      [
        "It reduces the spoken-output requirement",
        ""
      ]
    ],
    "a": 2
  },
  "e2.mastery.at-wipi.05": {
    "q": "The WIPI slide states four lists of 25 words. What can be concluded about those quantities?",
    "x": "Four refers to lists, and 25 to words per list. Neither establishes the number of response pictures. The supplied descriptions of array size conflict and remain unresolved.",
    "t": "mc",
    "o": [
      [
        "The number of lists is distinct from response-array size",
        ""
      ],
      [
        "The four-list description establishes four pictures per trial",
        ""
      ],
      [
        "The number of words per list specifies pictures per item",
        ""
      ]
    ],
    "a": 0
  },
  "e2.mastery.at-wipi.06": {
    "t": "mc",
    "o": [
      [
        "Nonverbal responses isolate hearing from vocabulary knowledge",
        ""
      ],
      [
        "Familiar pictures make an unknown spoken word interpretable",
        ""
      ],
      [
        "Word familiarity can affect the picture-selection result",
        ""
      ],
      [
        "Picture pointing measures sound detection rather than recognition",
        ""
      ]
    ],
    "a": 2
  },
  "e2.mastery.at-nuchips.01": {
    "t": "mc",
    "o": [
      [
        "Children’s Identification of Phonetic Stimuli",
        ""
      ],
      [
        "Children’s Perception of Speech",
        ""
      ],
      [
        "Children’s Interpretation of Pictures and Speech",
        ""
      ]
    ],
    "a": 1
  },
  "e2.mastery.at-nuchips.03": {
    "t": "mc",
    "o": [
      [
        "Whether changing the speech level will solve a motor-response problem",
        ""
      ],
      [
        "Whether absent pointing should be coded as zero auditory detection",
        ""
      ],
      [
        "Whether the child can perform the required selection response",
        ""
      ]
    ],
    "a": 2
  },
  "e2.mastery.at-nuchips.04": {
    "t": "mc",
    "o": [
      [
        "WIPI uses 50 nouns; NU-CHIPS uses four lists of 25 words",
        ""
      ],
      [
        "WIPI supplies pictures; NU-CHIPS requires spoken repetition",
        ""
      ],
      [
        "Both use four lists of 25 different monosyllabic words",
        ""
      ],
      [
        "Both use picture responses but different word-list structures",
        ""
      ]
    ],
    "a": 3
  },
  "e2.mastery.at-nuchips.05": {
    "t": "mc",
    "o": [
      [
        "The nonverbal response identifies the stimulus as visual",
        ""
      ],
      [
        "Spoken input and a nonverbal response use different modalities",
        ""
      ],
      [
        "The response measures audibility independently of word recognition",
        ""
      ]
    ],
    "a": 1
  },
  "e2.mastery.at-nuchips.06": {
    "t": "mc",
    "o": [
      [
        "Open-set monosyllabic word repetition",
        ""
      ],
      [
        "Closed-set sentence comprehension",
        ""
      ],
      [
        "Auditory same/different judgments for word pairs",
        ""
      ],
      [
        "Monosyllabic word recognition with picture choices",
        ""
      ]
    ],
    "a": 3
  },
  "e2.mastery.at-esp.01": {
    "t": "mc",
    "o": [
      [
        "Phoneme detection and sentence comprehension",
        ""
      ],
      [
        "Pattern perception and word identification",
        ""
      ],
      [
        "Sound awareness and auditory memory",
        ""
      ]
    ],
    "a": 1
  },
  "e2.mastery.at-esp.02": {
    "t": "mc",
    "o": [
      [
        "No pattern → some word → pattern → consistent word",
        ""
      ],
      [
        "Pattern → no pattern → some word → consistent word",
        ""
      ],
      [
        "No pattern → pattern → some word → consistent word",
        ""
      ],
      [
        "No pattern → pattern → consistent word → some word",
        ""
      ]
    ],
    "a": 2
  },
  "e2.mastery.at-esp.03": {
    "q": "A child recognizes speech patterns but has not demonstrated word identification. Which listed ESP category best matches that description?",
    "x": "Pattern perception is distinct from the later some-word and consistent-word identification categories. This question uses the slide’s category descriptions, not a substitute for the test’s scoring manual.",
    "t": "mc",
    "o": [
      [
        "Some word identification",
        ""
      ],
      [
        "Pattern perception",
        ""
      ],
      [
        "Consistent word identification",
        ""
      ]
    ],
    "a": 1
  },
  "e2.mastery.at-esp.06": {
    "q": "Consistent word identification on ESP is a closed-set result.",
    "x": "ESP assesses pattern and word perception using a closed-set format. Its category should not be relabeled as unrestricted open-set recognition.",
    "t": "tf",
    "a": true
  },
  "e2.mastery.at-gasp.03": {
    "t": "mc",
    "o": [
      [
        "Use detection performance to infer the sentence result",
        ""
      ],
      [
        "Train only the successful detection task",
        ""
      ],
      [
        "Target the weaker higher-level speech-perception skills",
        ""
      ]
    ],
    "a": 2
  },
  "e2.mastery.at-gasp.04": {
    "t": "mc",
    "o": [
      [
        "Erber’s levels of perception",
        ""
      ],
      [
        "FAPI’s seven-category profile",
        ""
      ],
      [
        "SPICE’s four curriculum categories",
        ""
      ],
      [
        "DASL II’s three auditory areas",
        ""
      ]
    ],
    "a": 0
  },
  "e2.mastery.at-gasp.05": {
    "t": "mc",
    "o": [
      [
        "A model’s levels need not match a test’s named subtests",
        ""
      ],
      [
        "A model and a test based on it have identical subtest counts",
        ""
      ],
      [
        "GASP’s three subtests each correspond to a different sensory modality",
        ""
      ]
    ],
    "a": 0
  },
  "e2.mastery.at-gasp.06": {
    "q": "GASP includes a separately named discrimination subtest between detection and word identification.",
    "x": "Its three named subtests are phoneme detection, word identification and sentence comprehension. Erber includes discrimination, but GASP does not list it as a separate fourth subtest.",
    "s": [
      "ARL6-16",
      "ARL6-19"
    ],
    "t": "tf",
    "a": false
  },
  "e2.mastery.at-dasl.03": {
    "t": "mc",
    "o": [
      [
        "Two years",
        ""
      ],
      [
        "Four years",
        ""
      ],
      [
        "Three years",
        ""
      ]
    ],
    "a": 2
  },
  "e2.mastery.at-dasl.04": {
    "t": "mc",
    "o": [
      [
        "Use chronological age to set the same starting skill for all learners",
        ""
      ],
      [
        "Use the child’s skill profile to choose individual starting targets",
        ""
      ],
      [
        "Infer comprehension from a successful awareness response",
        ""
      ],
      [
        "Select a complete program before examining the auditory profile",
        ""
      ]
    ],
    "a": 1
  },
  "e2.mastery.at-dasl.05": {
    "t": "mc",
    "o": [
      [
        "Brief sessions tailored to the child’s skill hierarchy",
        ""
      ],
      [
        "Fixed sessions with identical goals for each age group",
        ""
      ],
      [
        "Unstructured sessions without specified listening targets",
        ""
      ]
    ],
    "a": 0
  },
  "e2.mastery.at-dasl.06": {
    "q": "The supplied DASL II assessment slide reports some normative information for children with varying degrees of hearing loss.",
    "x": "Slide 17 describes some normative information. It does not provide a normative table here or authorize inventing one.",
    "s": [
      "ARL6-17"
    ],
    "t": "tf",
    "a": true
  },
  "e2.mastery.at-ling-task.01": {
    "t": "mc",
    "o": [
      [
        "Discrimination",
        ""
      ],
      [
        "Identification",
        ""
      ],
      [
        "Comprehension",
        ""
      ]
    ],
    "a": 0
  },
  "e2.mastery.at-ling-task.02": {
    "t": "mc",
    "o": [
      [
        "To estimate speech recognition from the response rate",
        ""
      ],
      [
        "To test whether the response depends on sound being present",
        ""
      ],
      [
        "To substitute visual identification for auditory detection",
        ""
      ],
      [
        "To establish each sound’s frequency-specific threshold",
        ""
      ]
    ],
    "a": 1
  },
  "e2.mastery.at-ling-task.03": {
    "t": "mc",
    "o": [
      [
        "To hold loudness constant across sound presentations",
        ""
      ],
      [
        "To reduce responses based on a learned sound sequence",
        ""
      ],
      [
        "To standardize the distance for every sound",
        ""
      ]
    ],
    "a": 1
  },
  "e2.mastery.at-ling-task.04": {
    "t": "mc",
    "o": [
      [
        "Beside → 3 feet → 6 feet",
        ""
      ],
      [
        "Beside → 6 feet → 12 feet",
        ""
      ],
      [
        "3 feet → 6 feet → 20 feet",
        ""
      ],
      [
        "Beside → 3 meters → 6 meters",
        ""
      ]
    ],
    "a": 0
  },
  "e2.mastery.at-progression.01": {
    "t": "mc",
    "o": [
      [
        "The response demand can differ from the lesson label",
        ""
      ],
      [
        "The stimulus category determines the response level",
        ""
      ],
      [
        "The printed activity title determines the demonstrated skill",
        ""
      ]
    ],
    "a": 0
  },
  "e2.mastery.at-progression.02": {
    "t": "mc",
    "o": [
      [
        "Discrimination",
        ""
      ],
      [
        "Detection",
        ""
      ],
      [
        "Identification",
        ""
      ],
      [
        "Comprehension",
        ""
      ]
    ],
    "a": 2
  },
  "e2.mastery.at-progression.04": {
    "t": "mc",
    "o": [
      [
        "Detection to discrimination",
        ""
      ],
      [
        "Detection to identification",
        ""
      ],
      [
        "Identification to comprehension",
        ""
      ],
      [
        "Discrimination to comprehension",
        ""
      ]
    ],
    "a": 1
  },
  "e2.mastery.at-detection.03": {
    "t": "mc",
    "o": [
      [
        "The observable behavior",
        ""
      ],
      [
        "The listening distance",
        ""
      ],
      [
        "The success criterion",
        ""
      ]
    ],
    "a": 1
  },
  "e2.mastery.at-detection.04": {
    "x": "A hand raise when a syllable occurs marks presence. The other responses require meaning, same/different comparison, or stimulus identification."
  },
  "e2.mastery.at-detection.05": {
    "q": "A child pushes a toy car whenever a “vrrrm” sound occurs, regardless of its pitch or source. What is the objective?",
    "x": "The action is contingent on sound presence. It does not require the child to name a source or compare pitch.",
    "s": [
      "ARL6-20",
      "ARL6-23"
    ],
    "t": "mc",
    "o": [
      [
        "Identifying which instrument produced a sound",
        ""
      ],
      [
        "Discriminating two different pitches",
        ""
      ],
      [
        "Detecting an environmental sound",
        ""
      ]
    ],
    "a": 2
  },
  "e2.mastery.at-detection.06": {
    "q": "Detection of a speech syllable requires the child to identify which syllable was presented.",
    "x": "Presence/absence can be demonstrated with a speech stimulus without identifying it. Speech input does not automatically raise the response demand.",
    "s": [
      "ARL6-20",
      "ARL6-22"
    ],
    "t": "tf",
    "a": false
  },
  "e2.mastery.at-conditioning.02": {
    "t": "mc",
    "o": [
      [
        "Identify the upcoming stimulus",
        ""
      ],
      [
        "Provide the conditioned motor response",
        ""
      ],
      [
        "Demonstrate that detection has occurred",
        ""
      ],
      [
        "Direct attention before stimulus presentation",
        ""
      ]
    ],
    "a": 3
  },
  "e2.mastery.at-conditioning.03": {
    "t": "mc",
    "o": [
      [
        "Count the movement response as successful auditory detection",
        ""
      ],
      [
        "Remove the anticipatory visual cue from the scored trials",
        ""
      ],
      [
        "Retain the movement cue while varying only the reward",
        ""
      ]
    ],
    "a": 1
  },
  "e2.mastery.at-conditioning.04": {
    "t": "mc",
    "o": [
      [
        "Repeatable sound-linked responses without physical guidance",
        ""
      ],
      [
        "Correct guided responses with a larger reinforcement",
        ""
      ],
      [
        "Matched responses during both silent and sound trials",
        ""
      ],
      [
        "Correct responses to the clinician’s preparatory movements",
        ""
      ]
    ],
    "a": 0
  },
  "e2.mastery.at-conditioning.05": {
    "t": "mc",
    "o": [
      [
        "Changing the response set from closed to open",
        ""
      ],
      [
        "Muffling the acoustic signal being tested",
        ""
      ],
      [
        "Changing the task from detection to identification",
        ""
      ]
    ],
    "a": 1
  },
  "e2.mastery.at-conditioning.06": {
    "t": "mc",
    "o": [
      [
        "Cue → fixed pause → motor prompt → sound",
        ""
      ],
      [
        "Cue → varied pause → sound → observe response",
        ""
      ],
      [
        "Sound → response cue → fixed pause → response",
        ""
      ],
      [
        "Cue → response prompt → sound → score independently",
        ""
      ]
    ],
    "a": 1
  },
  "e2.mastery.at-discrimination.04": {
    "t": "mc",
    "o": [
      [
        "Phoneme identification",
        ""
      ],
      [
        "Lexical-semantic comprehension",
        ""
      ],
      [
        "Sound-source localization",
        ""
      ],
      [
        "Prosodic discrimination",
        ""
      ]
    ],
    "a": 3
  },
  "e2.mastery.at-discrimination.05": {
    "t": "mc",
    "o": [
      [
        "Comparison is required without specifying stimulus identity",
        ""
      ],
      [
        "Naming is needed before a difference can be detected",
        ""
      ],
      [
        "A same/different judgment establishes the sound’s meaning",
        ""
      ]
    ],
    "a": 0
  },
  "e2.mastery.at-identification.01": {
    "t": "mc",
    "o": [
      [
        "It removes the need to distinguish speech sounds",
        ""
      ],
      [
        "It replaces the identity response with a presence response",
        ""
      ],
      [
        "It reduces the number of possible identities",
        ""
      ]
    ],
    "a": 2
  },
  "e2.mastery.at-identification.03": {
    "t": "mc",
    "o": [
      [
        "Judging whether two syllable trains match",
        ""
      ],
      [
        "Responding when a multisyllabic word begins",
        ""
      ],
      [
        "Selecting “hat” versus “ice cream cone”",
        ""
      ]
    ],
    "a": 2
  },
  "e2.mastery.at-identification.04": {
    "t": "mc",
    "o": [
      [
        "Comprehension",
        ""
      ],
      [
        "Detection",
        ""
      ],
      [
        "Discrimination",
        ""
      ],
      [
        "Identification",
        ""
      ]
    ],
    "a": 3
  },
  "e2.mastery.at-comprehension.01": {
    "t": "mc",
    "o": [
      [
        "It demonstrates what the message means",
        ""
      ],
      [
        "It reproduces the spoken stimulus accurately",
        ""
      ],
      [
        "It reports that the sound differs from a prior sound",
        ""
      ]
    ],
    "a": 0
  },
  "e2.mastery.at-comprehension.02": {
    "t": "mc",
    "o": [
      [
        "The stress pattern without the word relationship",
        ""
      ],
      [
        "The identity of the word “eyes” in either phrase",
        ""
      ],
      [
        "Who is indicated by the possessive in each phrase",
        ""
      ],
      [
        "The presence of a vowel after the initial consonant",
        ""
      ]
    ],
    "a": 2
  },
  "e2.mastery.at-comprehension.03": {
    "t": "mc",
    "o": [
      [
        "Syntactic and semantic knowledge",
        ""
      ],
      [
        "Phoneme detection and voice awareness alone",
        ""
      ],
      [
        "Recognition of isolated vowel contrasts alone",
        ""
      ]
    ],
    "a": 0
  },
  "e2.at-pragmatic.1": {
    "t": "mc",
    "o": [
      [
        "Pragmatic",
        ""
      ],
      [
        "Eclectic",
        ""
      ],
      [
        "Analytic",
        ""
      ],
      [
        "Synthetic",
        ""
      ]
    ],
    "a": 0
  },
  "e2.mastery.at-analytic.02": {
    "t": "mc",
    "o": [
      [
        "Open vocabulary changes an analytic task into synthetic training",
        ""
      ],
      [
        "Four-item choices define the approach regardless of the target",
        ""
      ],
      [
        "Response format can change while the component focus remains",
        ""
      ],
      [
        "The two response sets necessarily test different acoustic features",
        ""
      ]
    ],
    "a": 2
  },
  "e2.mastery.at-analytic.05": {
    "q": "A child identifies words from open vocabulary while practicing a specific vowel contrast. Which approach best describes the objective?",
    "x": "The component-level vowel focus makes the approach analytic. Open-set responding does not by itself make the task synthetic or pragmatic.",
    "t": "mc",
    "o": [
      [
        "Synthetic, because words have meaning",
        ""
      ],
      [
        "Analytic, because the target is a vowel feature",
        ""
      ],
      [
        "Pragmatic, because the response set is open",
        ""
      ]
    ],
    "a": 1
  },
  "e2.mastery.at-synthetic.01": {
    "t": "mc",
    "o": [
      [
        "Syntactic and contextual information",
        ""
      ],
      [
        "Fine contrasts among isolated speech segments",
        ""
      ],
      [
        "Changes to speech level and background noise",
        ""
      ]
    ],
    "a": 0
  },
  "e2.mastery.at-synthetic.03": {
    "t": "mc",
    "o": [
      [
        "It restores acoustic detail in the inaudible speech bands",
        ""
      ],
      [
        "It replaces the need to recognize the sentence’s words",
        ""
      ],
      [
        "It makes likely meanings and words more predictable",
        ""
      ]
    ],
    "a": 2
  },
  "e2.mastery.at-synthetic.05": {
    "t": "mc",
    "o": [
      [
        "It emphasizes meaning and context over component contrasts",
        ""
      ],
      [
        "It emphasizes acoustic components over message context",
        ""
      ],
      [
        "It emphasizes listener control of the talker and environment",
        ""
      ]
    ],
    "a": 0
  },
  "e2.mastery.at-synthetic.06": {
    "q": "Using sentence context to interpret a partly heard message is a bottom-up analytic strategy.",
    "x": "Context-supported message interpretation is top-down and characteristic of synthetic training; analytic work emphasizes components.",
    "s": [
      "ARL6-39",
      "ARL6-41"
    ],
    "t": "tf",
    "a": false
  },
  "e2.mastery.at-pragmatic.01": {
    "t": "mc",
    "o": [
      [
        "Develop listener control of communication conditions",
        ""
      ],
      [
        "Develop identification of isolated phonetic contrasts",
        ""
      ],
      [
        "Develop interpretation from sentence syntax and context",
        ""
      ]
    ],
    "a": 0
  },
  "e2.mastery.at-pragmatic.02": {
    "t": "mc",
    "o": [
      [
        "Synthetic",
        ""
      ],
      [
        "Analytic",
        ""
      ],
      [
        "Pragmatic",
        ""
      ],
      [
        "Eclectic",
        ""
      ]
    ],
    "a": 2
  },
  "e2.mastery.at-pragmatic.03": {
    "t": "mc",
    "o": [
      [
        "Signal-to-noise ratio",
        ""
      ],
      [
        "Message complexity",
        ""
      ],
      [
        "Response-set size",
        ""
      ]
    ],
    "a": 0
  },
  "e2.mastery.at-pragmatic.05": {
    "t": "mc",
    "o": [
      [
        "The listener acts to change an obstacle to understanding",
        ""
      ],
      [
        "The listener reconstructs meaning without changing the exchange",
        ""
      ],
      [
        "The listener isolates the acoustic features of a missed phoneme",
        ""
      ]
    ],
    "a": 0
  },
  "e2.mastery.at-pragmatic.06": {
    "q": "Asking a partner to break a message into shorter parts targets message complexity.",
    "x": "Message context or complexity is one of the communication variables listed for pragmatic training.",
    "t": "tf",
    "a": true
  },
  "e2.mastery.at-eclectic.01": {
    "t": "mc",
    "o": [
      [
        "Integrate component work, context and communication strategies",
        ""
      ],
      [
        "Use a component contrast with several different picture sets",
        ""
      ],
      [
        "Use sentence context with several different familiar talkers",
        ""
      ]
    ],
    "a": 0
  },
  "e2.mastery.at-eclectic.02": {
    "t": "mc",
    "o": [
      [
        "The requirement to advance exactly one level each session",
        ""
      ],
      [
        "The requirement for equal time across strategies",
        ""
      ],
      [
        "The child’s demonstrated performance and treatment goals",
        ""
      ],
      [
        "The assumption that conversation proves component mastery",
        ""
      ]
    ],
    "a": 2
  },
  "e2.mastery.at-eclectic.04": {
    "t": "mc",
    "o": [
      [
        "Use chronological age to choose one fixed progression",
        ""
      ],
      [
        "Use identical tasks for children with the same audiogram",
        ""
      ],
      [
        "Fit the mix to assessed skills and communication needs",
        ""
      ],
      [
        "Use the number of available activities to set goal priority",
        ""
      ]
    ],
    "a": 2
  },
  "e2.mastery.at-eclectic.05": {
    "q": "A plan deliberately combines vowel-contrast work with context-supported sentence understanding. Which label describes the whole plan?",
    "x": "The vowel contrast is analytic and the sentence-context work synthetic. Eclectic describes their deliberate combination.",
    "t": "mc",
    "o": [
      [
        "An analytic plan because it includes a speech contrast",
        ""
      ],
      [
        "An eclectic plan combining analytic and synthetic work",
        ""
      ],
      [
        "A synthetic plan because the final activity uses sentences",
        ""
      ]
    ],
    "a": 1
  },
  "e2.mastery.at-eclectic.06": {
    "q": "Combining analytic and synthetic strategies requires adding a fifth level to Erber’s hierarchy.",
    "x": "Approach and response level are separate dimensions. Eclectic combines strategies while detection, discrimination, identification and comprehension remain the four levels.",
    "t": "tf",
    "a": false
  },
  "e2.mastery.at-design.02": {
    "q": "Which label describes planned, highly structured one-to-one auditory training?",
    "x": "Formal describes activity type. Informal work is embedded in daily routines, while an auditory skill describes what response the child demonstrates.",
    "t": "mc",
    "o": [
      [
        "Formal activity",
        ""
      ],
      [
        "Informal activity",
        ""
      ],
      [
        "An auditory skill",
        ""
      ]
    ],
    "a": 0
  },
  "e2.mastery.at-design.03": {
    "t": "mc",
    "o": [
      [
        "Replacing the goal with the routine’s name",
        ""
      ],
      [
        "Using the same number of trials as a clinic worksheet",
        ""
      ],
      [
        "Embedding a defined listening target in a daily routine",
        ""
      ]
    ],
    "a": 2
  },
  "e2.mastery.at-design.04": {
    "t": "mc",
    "o": [
      [
        "Stimulus level",
        ""
      ],
      [
        "Activity type",
        ""
      ],
      [
        "Auditory skill",
        ""
      ],
      [
        "Response condition",
        ""
      ]
    ],
    "a": 0
  },
  "e2.mastery.at-design.05": {
    "t": "mc",
    "o": [
      [
        "It connects the auditory target with useful daily communication",
        ""
      ],
      [
        "It establishes auditory access without checking the device",
        ""
      ],
      [
        "It converts a supported response into independent performance",
        ""
      ]
    ],
    "a": 0
  },
  "e2.mastery.at-design.06": {
    "q": "Formal versus informal describes the activity type rather than the auditory skill being demonstrated.",
    "x": "The design slide separates auditory skill, stimuli, activity type and difficulty. Both formal and informal activities can target listening skills.",
    "s": [
      "ARL6-46",
      "ARL6-47"
    ],
    "t": "tf",
    "a": true
  },
  "e2.mastery.at-difficulty.01": {
    "t": "mc",
    "o": [
      [
        "Closed alternatives → unrestricted answers",
        ""
      ],
      [
        "Six known choices → two known choices",
        ""
      ],
      [
        "Low contextual support → high contextual support",
        ""
      ]
    ],
    "a": 0
  },
  "e2.mastery.at-difficulty.03": {
    "q": "Which adjustment directly increases contextual support while leaving acoustic level and response-set size unchanged?",
    "x": "Introducing the topic adds predictive context. Changing SNR or response-set size alters different difficulty variables.",
    "t": "mc",
    "o": [
      [
        "Increase the signal level relative to background noise",
        ""
      ],
      [
        "Explain the topic before presenting the message",
        ""
      ],
      [
        "Reduce the number of response pictures",
        ""
      ]
    ],
    "a": 1
  },
  "e2.mastery.at-difficulty.04": {
    "t": "mc",
    "o": [
      [
        "It equates supported responses with independent responses",
        ""
      ],
      [
        "It helps attribute a performance change to a particular demand",
        ""
      ],
      [
        "It removes the need to repeat the baseline condition",
        ""
      ],
      [
        "It makes scores from different conditions directly interchangeable",
        ""
      ]
    ],
    "a": 1
  },
  "e2.mastery.at-difficulty.05": {
    "q": "To reduce response uncertainty without changing the noisy setting, which single adjustment fits an overwhelming open-set task?",
    "x": "Changing from open to a small closed set reduces response uncertainty. Retaining the SNR isolates that change; removing alternatives or adding noise does not provide the requested support.",
    "t": "mc",
    "o": [
      [
        "Use quieter conditions and remove the known response options",
        ""
      ],
      [
        "Use a small known response set while retaining the same SNR",
        ""
      ],
      [
        "Shorten the words and increase background noise",
        ""
      ]
    ],
    "a": 1
  },
  "e2.mastery.at-goals.03": {
    "q": "Which revision adds both a measurable criterion and clear listening conditions to “improve listening”?",
    "x": "The keyed revision states identification, eight of ten correct, quiet, and no speechreading. The others lack a criterion or clear support conditions. A complete treatment goal would also state its time frame.",
    "t": "mc",
    "o": [
      [
        "Identify familiar pictured words during therapy",
        ""
      ],
      [
        "Identify 8 of 10 familiar words in quiet without speechreading",
        ""
      ],
      [
        "Improve identification of familiar words with practice",
        ""
      ]
    ],
    "a": 1
  },
  "e2.mastery.at-goals.04": {
    "t": "mc",
    "o": [
      [
        "As independent success because the selected answer was correct",
        ""
      ],
      [
        "As an auditory-only failure without noting the successful cue",
        ""
      ],
      [
        "As success with visual support, short of the independent target",
        ""
      ],
      [
        "As auditory-only success after treating the cue as familiarization",
        ""
      ]
    ],
    "a": 2
  },
  "e2.mastery.at-goals.05": {
    "t": "mc",
    "o": [
      [
        "It determines whether the stimulus is speech or nonspeech",
        ""
      ],
      [
        "It determines whether the response set is closed or open",
        ""
      ],
      [
        "It specifies the retention demand before responding",
        ""
      ]
    ],
    "a": 2
  },
  "e2.mastery.at-goals.06": {
    "t": "mc",
    "o": [
      [
        "By week 6, meet the target in a quiet one-to-one session",
        ""
      ],
      [
        "Meet the target in three consecutive sessions without visual cues",
        ""
      ],
      [
        "By week 6, meet the target in three consecutive sessions",
        ""
      ],
      [
        "Meet the target in 8 of 10 trials with a familiar partner",
        ""
      ]
    ],
    "a": 2
  },
  "e2.at-program-fit.2": {
    "t": "mc",
    "o": [
      [
        "Use the child’s profile and the family’s needs",
        ""
      ],
      [
        "Use hearing-loss degree as the sole selection criterion",
        ""
      ],
      [
        "Use the program with the greatest number of categories",
        ""
      ],
      [
        "Use a fixed pace for everyone with the same device",
        ""
      ]
    ],
    "a": 0
  },
  "e2.mastery.at-program-structure.01": {
    "t": "mc",
    "o": [
      [
        "Suprasegmental perception",
        ""
      ],
      [
        "Vowel and consonant perception",
        ""
      ],
      [
        "Connected speech",
        ""
      ]
    ],
    "a": 2
  },
  "e2.mastery.at-program-structure.02": {
    "t": "mc",
    "o": [
      [
        "An age-based starting skill regardless of prior response",
        ""
      ],
      [
        "The same first activity for every device user",
        ""
      ],
      [
        "An assessed starting point in the listening-skill hierarchy",
        ""
      ],
      [
        "A choice based on program name before reviewing performance",
        ""
      ]
    ],
    "a": 2
  },
  "e2.mastery.at-program-structure.03": {
    "t": "mc",
    "o": [
      [
        "Suprasegmental perception",
        ""
      ],
      [
        "Vowel and consonant perception",
        ""
      ],
      [
        "Connected speech",
        ""
      ]
    ],
    "a": 0
  },
  "e2.mastery.at-program-structure.05": {
    "t": "mc",
    "o": [
      [
        "Infants in a family home-intervention program",
        ""
      ],
      [
        "Preschool and school-age hearing-aid or CI users",
        ""
      ],
      [
        "Adults practicing communication after acquired loss",
        ""
      ]
    ],
    "a": 1
  },
  "e2.mastery.at-program-structure.06": {
    "q": "SPICE and DASL II use the same number of named curriculum categories.",
    "x": "The slides list four SPICE categories and three DASL II areas, despite shared listening-development principles.",
    "s": [
      "ARL6-50",
      "ARL6-51",
      "ARL6-54"
    ],
    "t": "tf",
    "a": false
  },
  "e2.mastery.at-program-fit.01": {
    "t": "mc",
    "o": [
      [
        "Language-speech stimulation",
        ""
      ],
      [
        "Closed-set word testing as the sole intervention",
        ""
      ],
      [
        "Electrical mapping as the training activity",
        ""
      ]
    ],
    "a": 0
  },
  "e2.mastery.at-program-fit.02": {
    "t": "mc",
    "o": [
      [
        "Match the program because hearing-loss degree is the same",
        ""
      ],
      [
        "Match each plan to its child’s skills and family circumstances",
        ""
      ],
      [
        "Use chronological age instead of assessing current language",
        ""
      ],
      [
        "Use device brand to select an identical sequence",
        ""
      ]
    ],
    "a": 1
  },
  "e2.mastery.at-program-fit.03": {
    "t": "mc",
    "o": [
      [
        "Listening, motor development, hearing thresholds and speech",
        ""
      ],
      [
        "Language, listening, cognition and speech",
        ""
      ],
      [
        "Speech, cognition, electrode function and hearing thresholds",
        ""
      ]
    ],
    "a": 1
  },
  "e2.mastery.at-program-fit.04": {
    "q": "Which named curriculum best matches the lecture’s infant home-intervention description?",
    "x": "SKI-HI is described as a comprehensive identification and home-intervention curriculum for infants and families. DASL II and SPICE have different stated structures and populations; WIPI is an assessment.",
    "s": [
      "ARL6-52",
      "ARL6-50",
      "ARL6-51",
      "ARL6-11"
    ],
    "t": "mc",
    "o": [
      [
        "SPICE",
        ""
      ],
      [
        "DASL II",
        ""
      ],
      [
        "WIPI",
        ""
      ],
      [
        "SKI-HI",
        ""
      ]
    ],
    "a": 3
  },
  "e2.mastery.at-program-fit.05": {
    "t": "mc",
    "o": [
      [
        "An identical set of numbered subtests",
        ""
      ],
      [
        "A common age range for eligibility",
        ""
      ],
      [
        "Basic listening-hierarchy principles",
        ""
      ]
    ],
    "a": 2
  },
  "e2.mastery.at-program-fit.06": {
    "q": "CASLLS integrates tracking of language, listening, cognition and speech within one set of instruments.",
    "x": "The integration across these areas is stated on slide 53. The slide and transcript’s conflicting age ranges remain unresolved; this item does not assign an unqualified age cutoff.",
    "s": [
      "ARL6-53"
    ],
    "t": "tf",
    "a": true
  },
  "e2.mastery.ci-mapping.05": {
    "q": "Which new report most directly raises a programming concern at follow-up?",
    "t": "mc",
    "o": [
      [
        "A change in classroom materials with stable speech access",
        ""
      ],
      [
        "A change in loudness comfort with the current program",
        ""
      ],
      [
        "A change in preferred games with stable aided responses",
        ""
      ]
    ],
    "a": 1
  }
};
L.ITEM_REVISIONS=L.ITEM_REVISIONS||{};
function revise(item){
 var patch=patches[item.id];if(!patch)return item;
 if(!L.ITEM_REVISIONS[item.id])L.ITEM_REVISIONS[item.id]={current:version,versions:{legacy:JSON.parse(JSON.stringify(item))}};
 var revised=Object.assign({},item,patch,{contentVersion:version});
 return revised;
}
D.items=D.items.map(revise);
var byId={};D.items.forEach(function(item){byId[item.id]=item;});
L.ITEMS=L.ITEMS.map(function(item){return byId[item.id]||item;});
D.version=version;
})(typeof window!=='undefined'?window:globalThis);
