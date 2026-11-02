/* Additive third Exam 2 form; existing forms and saved snapshots remain unchanged. */
(function(root){
'use strict';
var L=root.L,D=L.EXAM2_DATA,F=D.finalMocks;
var items=[
  {
    "id": "e2.final.20261102.C.CI01",
    "c": "e2-ci-age-groups",
    "t": "mc",
    "q": "For children with sensorineural hearing loss, which pairing meets the age-specific audiologic criteria for CI evaluation?",
    "o": [
      {
        "t": "18 months: bilateral severe loss; 8 years: bilateral profound loss",
        "ok": false,
        "w": ""
      },
      {
        "t": "18 months: bilateral profound loss; 8 years: bilateral severe-to-profound loss",
        "ok": true,
        "w": ""
      },
      {
        "t": "18 months: unilateral profound loss; 8 years: bilateral severe-to-profound loss",
        "ok": false,
        "w": ""
      }
    ],
    "x": "The young-child category requires bilateral profound SNHL. The older-child category permits bilateral severe-to-profound SNHL. Hearing-aid benefit, development, medical suitability and family factors still require evaluation; the hearing-loss profile alone is not a complete candidacy decision.",
    "s": [
      "ARL4-13",
      "ARL4-14"
    ],
    "topic": "ci-candidacy",
    "exam": "exam2",
    "tier": 1,
    "mockOnly": true,
    "contentVersion": "2026-11-02-form-c-v1",
    "blueprintSlot": "CI01",
    "objectives": [
      "CI01",
      "CI02"
    ]
  },
  {
    "id": "e2.final.20261102.C.CI02",
    "c": "e2-ci-age-groups",
    "t": "mc",
    "q": "A 9-year-old with bilateral severe-to-profound SNHL scores 20% on unaided open-set words and 60% in the best-aided condition. Which interpretation is correct?",
    "o": [
      {
        "t": "The unaided score meets the speech-recognition requirement",
        "ok": false,
        "w": ""
      },
      {
        "t": "The average of the two scores meets the requirement",
        "ok": false,
        "w": ""
      },
      {
        "t": "The best-aided score does not meet the requirement",
        "ok": true,
        "w": ""
      },
      {
        "t": "The difference between the scores meets the requirement",
        "ok": false,
        "w": ""
      }
    ],
    "x": "The older-child criterion is based on best-aided open-set word recognition, not the unaided result, the mean of two conditions or the size of the improvement. A best-aided score of 60% is above the taught 30% criterion. This conclusion concerns that criterion, not a complete individual candidacy determination.",
    "s": [
      "ARL4-14"
    ],
    "topic": "ci-candidacy",
    "exam": "exam2",
    "tier": 1,
    "mockOnly": true,
    "contentVersion": "2026-11-02-form-c-v1",
    "blueprintSlot": "CI02",
    "objectives": [
      "CI02"
    ]
  },
  {
    "id": "e2.final.20261102.C.CI03",
    "c": "e2-ci-age-groups",
    "t": "tf",
    "q": "An adult must have profound hearing loss at every frequency to be considered for a cochlear implant.",
    "o": [
      {
        "t": "True",
        "ok": false,
        "w": ""
      },
      {
        "t": "False",
        "ok": true,
        "w": ""
      }
    ],
    "x": "The adult configuration taught here includes moderate-to-profound loss at low frequencies and severe-to-profound loss at middle and high frequencies. Profound loss at every frequency is not required. Aided speech performance and the remaining evaluation findings also matter.",
    "s": [
      "ARL4-12"
    ],
    "topic": "ci-candidacy",
    "exam": "exam2",
    "tier": 1,
    "mockOnly": true,
    "contentVersion": "2026-11-02-form-c-v1",
    "blueprintSlot": "CI03",
    "objectives": [
      "CI03"
    ]
  },
  {
    "id": "e2.final.20261102.C.CI04",
    "c": "e2-ci-outcomes",
    "t": "mc",
    "q": "Why is implantation before 18 months favored over waiting until later childhood when a young child is an appropriate CI candidate?",
    "o": [
      {
        "t": "Faster spoken-language progress",
        "ok": true,
        "w": ""
      },
      {
        "t": "Greater unaided speech recognition",
        "ok": false,
        "w": ""
      },
      {
        "t": "Earlier postoperative activation",
        "ok": false,
        "w": ""
      }
    ],
    "x": "Earlier implantation, particularly before 18 months, is associated with faster spoken-language progress. This concerns development with useful auditory access, not restored unaided recognition or a shorter postoperative healing interval. Individual outcomes vary.",
    "s": [
      "ARL4-20",
      "ARL4-2",
      "ARL4-31"
    ],
    "topic": "ci-life",
    "exam": "exam2",
    "tier": 1,
    "mockOnly": true,
    "contentVersion": "2026-11-02-form-c-v1",
    "blueprintSlot": "CI04",
    "objectives": [
      "CI04"
    ]
  },
  {
    "id": "e2.final.20261102.C.CI05",
    "c": "e2-ci-two-ears",
    "t": "tf",
    "q": "A listener reports more balanced hearing after being fitted with two hearing aids. This can be a binaural benefit even if unaided hearing thresholds are unchanged.",
    "o": [
      {
        "t": "True",
        "ok": true,
        "w": ""
      },
      {
        "t": "False",
        "ok": false,
        "w": ""
      }
    ],
    "x": "Two hearing aids can provide a more balanced listening experience, along with benefits for localization and speech understanding in noise. These are benefits during aided listening; they do not require improvement in unaided thresholds. Individual benefit varies.",
    "s": [
      "ARMOCKBOOK-45",
      "ARL4-35"
    ],
    "topic": "ci-life",
    "exam": "exam2",
    "tier": 1,
    "mockOnly": true,
    "contentVersion": "2026-11-02-form-c-v1",
    "blueprintSlot": "CI05",
    "objectives": [
      "CI05"
    ]
  },
  {
    "id": "e2.final.20261102.C.CI06",
    "c": "e2-ci-two-ears",
    "t": "mc",
    "q": "A child uses a right CI and a left hearing aid. The left hearing aid is later replaced by a CI. How has the configuration changed?",
    "o": [
      {
        "t": "Bilateral implants to bimodal hearing",
        "ok": false,
        "w": ""
      },
      {
        "t": "Unilateral hearing to bimodal hearing",
        "ok": false,
        "w": ""
      },
      {
        "t": "Bimodal hearing to bilateral implants",
        "ok": true,
        "w": ""
      }
    ],
    "x": "One CI plus a contralateral hearing aid is bimodal: electrical input on one side and amplified acoustic input on the other. Two CIs form a bilateral implant configuration. Both arrangements can provide input to two ears.",
    "s": [
      "ARL4-35"
    ],
    "topic": "ci-life",
    "exam": "exam2",
    "tier": 1,
    "mockOnly": true,
    "contentVersion": "2026-11-02-form-c-v1",
    "blueprintSlot": "CI06",
    "objectives": [
      "CI06",
      "CI07",
      "CI08"
    ]
  },
  {
    "id": "e2.final.20261102.C.CI07",
    "c": "e2-ci-components",
    "t": "mc",
    "q": "Which pair of CI components remains implanted when the external equipment is removed?",
    "o": [
      {
        "t": "Sound processor and transmitter",
        "ok": false,
        "w": ""
      },
      {
        "t": "Receiver and electrode array",
        "ok": true,
        "w": ""
      },
      {
        "t": "Transmitter and receiver",
        "ok": false,
        "w": ""
      },
      {
        "t": "Microphone and electrode array",
        "ok": false,
        "w": ""
      }
    ],
    "x": "The receiver and electrode array are the internal components. The microphone, processor, transmitter and battery belong to the external equipment.",
    "s": [
      "ARL4-7"
    ],
    "topic": "ci-signal",
    "exam": "exam2",
    "tier": 1,
    "mockOnly": true,
    "contentVersion": "2026-11-02-form-c-v1",
    "blueprintSlot": "CI07",
    "objectives": [
      "CI09",
      "CI10"
    ]
  },
  {
    "id": "e2.final.20261102.C.CI08",
    "c": "e2-ci-components",
    "t": "mc",
    "q": "Which CI component carries the processor’s coded information across the skin to the implanted system?",
    "o": [
      {
        "t": "Electrode array",
        "ok": false,
        "w": ""
      },
      {
        "t": "Internal receiver",
        "ok": false,
        "w": ""
      },
      {
        "t": "External transmitter",
        "ok": true,
        "w": ""
      }
    ],
    "x": "The external transmitter sends the digital signal through the skin to the internal receiver. The receiver converts that information into pulses for the electrode array, which stimulates auditory nerve fibers.",
    "s": [
      "ARL4-10"
    ],
    "topic": "ci-signal",
    "exam": "exam2",
    "tier": 1,
    "mockOnly": true,
    "contentVersion": "2026-11-02-form-c-v1",
    "blueprintSlot": "CI08",
    "objectives": [
      "CI09",
      "CI11"
    ]
  },
  {
    "id": "e2.final.20261102.C.CI09",
    "c": "e2-ci-sequence",
    "t": "mc",
    "q": "Which signal has already been created when information leaves the CI sound processor for the transmitter?",
    "o": [
      {
        "t": "An acoustic pressure wave",
        "ok": false,
        "w": ""
      },
      {
        "t": "A digital code",
        "ok": true,
        "w": ""
      },
      {
        "t": "An auditory nerve response",
        "ok": false,
        "w": ""
      },
      {
        "t": "An electrode stimulation pulse",
        "ok": false,
        "w": ""
      }
    ],
    "x": "The processor converts its microphone input into a digital signal and relays that code to the transmitter. The internal receiver subsequently converts the code into electrical pulses, and auditory nerve responses follow stimulation by the array.",
    "s": [
      "ARL4-10"
    ],
    "topic": "ci-signal",
    "exam": "exam2",
    "tier": 1,
    "mockOnly": true,
    "contentVersion": "2026-11-02-form-c-v1",
    "blueprintSlot": "CI09",
    "objectives": [
      "CI11"
    ]
  },
  {
    "id": "e2.final.20261102.C.CI10",
    "c": "e2-ci-testing",
    "t": "mc",
    "q": "An infant being evaluated for a CI cannot perform speech-perception testing. Which measures can help establish audiometric thresholds?",
    "o": [
      {
        "t": "Parent vocabulary counts and a language sample",
        "ok": false,
        "w": ""
      },
      {
        "t": "Open-set word scores and sentence scores",
        "ok": false,
        "w": ""
      },
      {
        "t": "ABR and behavioral hearing testing",
        "ok": true,
        "w": ""
      },
      {
        "t": "Parent listening ratings and classroom observation",
        "ok": false,
        "w": ""
      }
    ],
    "x": "ABR and behavioral testing help confirm audiometric thresholds in very young children who cannot perform speech-perception tasks. Parent observations and functional assessments contribute useful developmental evidence, but they do not substitute for threshold measures.",
    "s": [
      "ARL4-20",
      "ARL4-21"
    ],
    "topic": "ci-assessment",
    "exam": "exam2",
    "tier": 1,
    "mockOnly": true,
    "contentVersion": "2026-11-02-form-c-v1",
    "blueprintSlot": "CI10",
    "objectives": [
      "CI12"
    ]
  },
  {
    "id": "e2.final.20261102.C.CI11",
    "c": "e2-ci-roles",
    "t": "mc",
    "q": "Which finding from an SLP most directly contributes to a child’s CI candidacy evaluation?",
    "o": [
      {
        "t": "Limited spoken-language progress with current hearing technology",
        "ok": true,
        "w": ""
      },
      {
        "t": "Abnormal middle-ear pressure during tympanometry",
        "ok": false,
        "w": ""
      },
      {
        "t": "Electrode response levels during intraoperative telemetry",
        "ok": false,
        "w": ""
      }
    ],
    "x": "The SLP can document the child’s speech and language progress and functional benefit with current technology. This information helps the CI team judge whether access is supporting development. Tympanometry and intraoperative telemetry are audiologic measurements.",
    "s": [
      "ARL4-28",
      "ARL4-29",
      "ARL4-30"
    ],
    "topic": "ci-assessment",
    "exam": "exam2",
    "tier": 1,
    "mockOnly": true,
    "contentVersion": "2026-11-02-form-c-v1",
    "blueprintSlot": "CI11",
    "objectives": [
      "CI12"
    ]
  },
  {
    "id": "e2.final.20261102.C.CI12",
    "c": "e2-ci-activation",
    "t": "mc",
    "q": "A child has CI surgery on May 1. Which planned initial activation date best fits the usual postoperative interval?",
    "o": [
      {
        "t": "May 3",
        "ok": false,
        "w": ""
      },
      {
        "t": "July 1",
        "ok": false,
        "w": ""
      },
      {
        "t": "May 22",
        "ok": true,
        "w": ""
      }
    ],
    "x": "May 22 is three weeks after surgery, within the usual 2–4-week interval for initial activation. Two days is earlier and two months is later than the interval taught for this course; individual clinical scheduling may differ.",
    "s": [
      "ARL4-31"
    ],
    "topic": "ci-life",
    "exam": "exam2",
    "tier": 1,
    "mockOnly": true,
    "contentVersion": "2026-11-02-form-c-v1",
    "blueprintSlot": "CI12",
    "objectives": [
      "CI13"
    ]
  },
  {
    "id": "e2.final.20261102.C.CI13",
    "c": "e2-ci-mapping",
    "t": "mc",
    "q": "After initial CI activation, which combination best describes the purpose of audiologic follow-up?",
    "o": [
      {
        "t": "Check surgical wound healing and review imaging",
        "ok": false,
        "w": ""
      },
      {
        "t": "Adjust stimulation settings and assess aided hearing",
        "ok": true,
        "w": ""
      },
      {
        "t": "Develop spoken-language goals and practice conversation",
        "ok": false,
        "w": ""
      },
      {
        "t": "Choose a manufacturer and establish surgical candidacy",
        "ok": false,
        "w": ""
      }
    ],
    "x": "Audiologic follow-up adjusts maps for comfortable loudness, sound quality and speech understanding, then uses soundfield measures to assess hearing and speech performance. Medical follow-up and speech-language habilitation are also important, but they are different parts of care.",
    "s": [
      "ARL4-33",
      "ARL4-26"
    ],
    "topic": "ci-life",
    "exam": "exam2",
    "tier": 1,
    "mockOnly": true,
    "contentVersion": "2026-11-02-form-c-v1",
    "blueprintSlot": "CI13",
    "objectives": [
      "CI13"
    ]
  },
  {
    "id": "e2.final.20261102.C.NF01",
    "c": "e2-brain-plasticity",
    "t": "mc",
    "q": "Why can effective amplification during infancy support auditory development more readily than the same input introduced much later?",
    "o": [
      {
        "t": "The auditory brain is still organizing and especially responsive to stimulation",
        "ok": true,
        "w": ""
      },
      {
        "t": "The auditory brain has completed its organization and needs less stimulation",
        "ok": false,
        "w": ""
      },
      {
        "t": "The auditory brain can organize independently of the quality of stimulation",
        "ok": false,
        "w": ""
      }
    ],
    "x": "Early input reaches auditory brain centers while they are initially organizing and especially receptive to stimulation. The course emphasizes greatest neuroplasticity during approximately the first 3½ years. This is a rationale for early access, not a claim that later learning is impossible.",
    "s": [
      "ARL5-14",
      "ARL5-15"
    ],
    "topic": "brain",
    "exam": "exam2",
    "tier": 1,
    "mockOnly": true,
    "contentVersion": "2026-11-02-form-c-v1",
    "blueprintSlot": "NF01",
    "objectives": [
      "NF01"
    ]
  },
  {
    "id": "e2.final.20261102.C.NF02",
    "c": "e2-brain-synchrony",
    "t": "mc",
    "q": "A child’s auditory development has fallen behind biological age, with corresponding language delays. Which framework addresses the existing delay?",
    "o": [
      {
        "t": "Developmental synchrony",
        "ok": false,
        "w": ""
      },
      {
        "t": "A remedial paradigm",
        "ok": true,
        "w": ""
      },
      {
        "t": "A developmental paradigm",
        "ok": false,
        "w": ""
      }
    ],
    "x": "A remedial paradigm addresses established developmental delays. Developmental synchrony means skills develop at biologically age-appropriate times, allowing a developmental rather than remedial framework.",
    "s": [
      "ARL5-17"
    ],
    "topic": "brain",
    "exam": "exam2",
    "tier": 1,
    "mockOnly": true,
    "contentVersion": "2026-11-02-form-c-v1",
    "blueprintSlot": "NF02",
    "objectives": [
      "NF02"
    ]
  },
  {
    "id": "e2.final.20261102.C.NF03",
    "c": "e2-brain-cross-modal",
    "t": "tf",
    "q": "Recruitment of auditory cortical regions by visual input is an example of cross-modal reorganization.",
    "o": [
      {
        "t": "True",
        "ok": true,
        "w": ""
      },
      {
        "t": "False",
        "ok": false,
        "w": ""
      }
    ],
    "x": "Cross-modal reorganization crosses sensory modalities: in the discussed example, visual or tactile input recruits territory associated with audition when auditory stimulation is absent. Tuning distinctions among speech sounds remains within audition.",
    "s": [
      "ARL5-16"
    ],
    "topic": "brain",
    "exam": "exam2",
    "tier": 1,
    "mockOnly": true,
    "contentVersion": "2026-11-02-form-c-v1",
    "blueprintSlot": "NF03",
    "objectives": [
      "NF03"
    ]
  },
  {
    "id": "e2.final.20261102.C.NF04",
    "c": "e2-listening-age",
    "t": "mc",
    "q": "A child is 30 months old. Hearing aids were fitted at 6 months, but effective use throughout waking hours began at 12 months and has continued. What is the child’s listening age?",
    "o": [
      {
        "t": "6 months",
        "ok": false,
        "w": ""
      },
      {
        "t": "18 months",
        "ok": true,
        "w": ""
      },
      {
        "t": "24 months",
        "ok": false,
        "w": ""
      },
      {
        "t": "30 months",
        "ok": false,
        "w": ""
      }
    ],
    "x": "Day Zero is the start of effective technology use throughout waking hours. With continued access from 12 to 30 months, listening age is 30 − 12 = 18 months. Counting from the fitting date would incorrectly include the earlier period without full-time use.",
    "s": [
      "ARL5-23"
    ],
    "topic": "experience",
    "exam": "exam2",
    "tier": 1,
    "mockOnly": true,
    "contentVersion": "2026-11-02-form-c-v1",
    "blueprintSlot": "NF04",
    "objectives": [
      "NF04"
    ]
  },
  {
    "id": "e2.final.20261102.C.NF05",
    "c": "e2-brain-function",
    "t": "mc",
    "q": "Which sequence correctly describes auditory function from incoming sound to a meaningful response?",
    "o": [
      {
        "t": "Pick up the signal → transmit to the brain → convert to neural responses → interpret",
        "ok": false,
        "w": ""
      },
      {
        "t": "Pick up the signal → interpret → convert to neural responses → transmit to the brain",
        "ok": false,
        "w": ""
      },
      {
        "t": "Pick up the signal → convert to neural responses → transmit to the brain → interpret",
        "ok": true,
        "w": ""
      }
    ],
    "x": "The signal is first picked up, changed into neural responses, sent to the appropriate brain areas, and processed meaningfully so a response can follow. Detection or transmission by itself does not complete meaningful auditory function.",
    "s": [
      "ARL5-6",
      "ARL5-4"
    ],
    "topic": "brain",
    "exam": "exam2",
    "tier": 1,
    "mockOnly": true,
    "contentVersion": "2026-11-02-form-c-v1",
    "blueprintSlot": "NF05",
    "objectives": [
      "NF05"
    ]
  },
  {
    "id": "e2.final.20261102.C.NF06",
    "c": "e2-brain-timeline",
    "t": "tf",
    "q": "During the first year, phonetic tuning strengthens distinctions not used in the infant’s daily language more than those that are used.",
    "o": [
      {
        "t": "True",
        "ok": false,
        "w": ""
      },
      {
        "t": "False",
        "ok": true,
        "w": ""
      }
    ],
    "x": "The direction is reversed. Daily auditory experience tunes phonetic categories needed for the infant’s language and attenuates distinctions not needed for that language. This illustrates experience-dependent functional reorganization.",
    "s": [
      "ARL5-10"
    ],
    "topic": "brain",
    "exam": "exam2",
    "tier": 1,
    "mockOnly": true,
    "contentVersion": "2026-11-02-form-c-v1",
    "blueprintSlot": "NF06",
    "objectives": [
      "NF06"
    ]
  },
  {
    "id": "e2.final.20261102.C.NF07",
    "c": "e2-listening-attention",
    "t": "mc",
    "q": "A teacher first cues a child to “listen,” then gives an audible direction. What is the cue intended to change?",
    "o": [
      {
        "t": "The child’s hearing threshold",
        "ok": false,
        "w": ""
      },
      {
        "t": "The child’s conscious attention",
        "ok": true,
        "w": ""
      },
      {
        "t": "The device’s speech output",
        "ok": false,
        "w": ""
      },
      {
        "t": "The amount of background sound",
        "ok": false,
        "w": ""
      }
    ],
    "x": "Listening requires conscious effort and concentration. The cue directs attention toward the signal; it does not by itself change hearing sensitivity, device output or room noise.",
    "s": [
      "ARL5-18"
    ],
    "topic": "experience",
    "exam": "exam2",
    "tier": 1,
    "mockOnly": true,
    "contentVersion": "2026-11-02-form-c-v1",
    "blueprintSlot": "NF07",
    "objectives": [
      "NF07"
    ]
  },
  {
    "id": "e2.final.20261102.C.NF08",
    "c": "e2-listening-quality",
    "t": "mc",
    "q": "A child’s device is not providing usable access to speech. What should be addressed before increasing the difficulty of listening activities?",
    "o": [
      {
        "t": "The number of response choices",
        "ok": false,
        "w": ""
      },
      {
        "t": "The length of the spoken directions",
        "ok": false,
        "w": ""
      },
      {
        "t": "The fitting and programming of the device",
        "ok": true,
        "w": ""
      }
    ],
    "x": "Usable auditory access is the foundation. Audiologic management must establish effective input before interventionists can build listening skills and strategies from that input. Set size and direction length alter task demand, not the underlying access problem.",
    "s": [
      "ARL5-5",
      "ARL5-22"
    ],
    "topic": "experience",
    "exam": "exam2",
    "tier": 1,
    "mockOnly": true,
    "contentVersion": "2026-11-02-form-c-v1",
    "blueprintSlot": "NF08",
    "objectives": [
      "NF08"
    ]
  },
  {
    "id": "e2.final.20261102.C.NF09",
    "c": "e2-development-scales",
    "t": "mc",
    "q": "A 17-month-old understands many familiar words but speaks a smaller set. Which statement best explains this pattern?",
    "o": [
      {
        "t": "Receptive language generally develops before expressive language",
        "ok": true,
        "w": ""
      },
      {
        "t": "Expressive language generally develops before receptive language",
        "ok": false,
        "w": ""
      },
      {
        "t": "Receptive and expressive vocabularies generally increase at the same rate",
        "ok": false,
        "w": ""
      }
    ],
    "x": "Understanding language precedes its expression. The 16–18-month scale lists understanding 50 or more words and producing 10 or more meaningful words, so a larger understood than spoken vocabulary is consistent with the expected relationship.",
    "s": [
      "ARSCALES-3",
      "ARSCALES-9"
    ],
    "topic": "development",
    "exam": "exam2",
    "tier": 1,
    "mockOnly": true,
    "contentVersion": "2026-11-02-form-c-v1",
    "blueprintSlot": "NF09",
    "objectives": [
      "NF09"
    ]
  },
  {
    "id": "e2.final.20261102.C.NF10",
    "c": "e2-development-scales",
    "t": "mc",
    "q": "A 17-month-old understands 60 words and uses 12 meaningful spoken words. How do these counts compare with the 16–18-month vocabulary benchmarks?",
    "o": [
      {
        "t": "Only the receptive count meets the benchmark",
        "ok": false,
        "w": ""
      },
      {
        "t": "Only the expressive count meets the benchmark",
        "ok": false,
        "w": ""
      },
      {
        "t": "Both counts meet their respective benchmarks",
        "ok": true,
        "w": ""
      },
      {
        "t": "Neither count meets its respective benchmark",
        "ok": false,
        "w": ""
      }
    ],
    "x": "The Integrated Scales list 50 or more understood words and 10 or more meaningful spoken words at 16–18 months. Understanding 60 and producing 12 meets both listed counts. This comparison concerns these vocabulary benchmarks only, not a diagnosis or proof that all development is age appropriate.",
    "s": [
      "ARSCALES-9",
      "ARSCALES-3"
    ],
    "topic": "development",
    "exam": "exam2",
    "tier": 1,
    "mockOnly": true,
    "contentVersion": "2026-11-02-form-c-v1",
    "blueprintSlot": "NF10",
    "objectives": [
      "NF09"
    ]
  },
  {
    "id": "e2.final.20261102.C.NF11",
    "c": "e2-development-milestones",
    "t": "mc",
    "q": "Which pair of responses is consistent with auditory development during the first 3 months?",
    "o": [
      {
        "t": "Recognizing a caregiver’s voice and responding to a loud sound",
        "ok": true,
        "w": ""
      },
      {
        "t": "Associating clothing words with objects and imitating heard words",
        "ok": false,
        "w": ""
      },
      {
        "t": "Responding to one’s name and changes in vocal inflection",
        "ok": false,
        "w": ""
      }
    ],
    "x": "Early auditory awareness includes responses to loud sounds and recognition of a familiar caregiver’s voice. Occasional name response and changes in vocal inflection appear in the 4–6-month band; word-object associations and word imitation appear later. The bands guide expectations rather than setting exact deadlines.",
    "s": [
      "ARSCALES-4",
      "ARSCALES-5",
      "ARSCALES-9"
    ],
    "topic": "development",
    "exam": "exam2",
    "tier": 1,
    "mockOnly": true,
    "contentVersion": "2026-11-02-form-c-v1",
    "blueprintSlot": "NF11",
    "objectives": [
      "NF11"
    ]
  },
  {
    "id": "e2.final.20261102.C.NF12",
    "c": "e2-development-milestones",
    "t": "mc",
    "q": "A 5-month-old responds differently when the same words are spoken in an angry voice and a friendly voice. Which developing ability best explains the response?",
    "o": [
      {
        "t": "Understanding changes in word order",
        "ok": false,
        "w": ""
      },
      {
        "t": "Responding to changes in vocal inflection",
        "ok": true,
        "w": ""
      },
      {
        "t": "Understanding a keyword within a longer phrase",
        "ok": false,
        "w": ""
      },
      {
        "t": "Associating spoken object names with pictures",
        "ok": false,
        "w": ""
      }
    ],
    "x": "The 4–6-month band includes responses to vocal inflection and discrimination of angry versus friendly tones. Because the words stay the same, the stated contrast is vocal tone, not syntax, phrase content or object naming.",
    "s": [
      "ARSCALES-5"
    ],
    "topic": "development",
    "exam": "exam2",
    "tier": 1,
    "mockOnly": true,
    "contentVersion": "2026-11-02-form-c-v1",
    "blueprintSlot": "NF12",
    "objectives": [
      "NF12"
    ]
  },
  {
    "id": "e2.final.20261102.C.NF13",
    "c": "e2-development-milestones",
    "t": "mc",
    "q": "Which listening skill is a more appropriate developmental target at 16–18 months than during the first 3 months?",
    "o": [
      {
        "t": "Becoming aware of a sudden loud sound",
        "ok": false,
        "w": ""
      },
      {
        "t": "Recognizing a familiar caregiver’s voice",
        "ok": false,
        "w": ""
      },
      {
        "t": "Discriminating among familiar spoken phrases",
        "ok": true,
        "w": ""
      },
      {
        "t": "Turning or stilling when a sound occurs",
        "ok": false,
        "w": ""
      }
    ],
    "x": "At 16–18 months, the Listening (Audition) column includes discriminating more phrases, associating heard words with objects, and imitating words heard. Early awareness, familiar-voice recognition and simple responses to sound are already represented in the 0–3-month band.",
    "s": [
      "ARSCALES-9",
      "ARSCALES-4"
    ],
    "topic": "development",
    "exam": "exam2",
    "tier": 1,
    "mockOnly": true,
    "contentVersion": "2026-11-02-form-c-v1",
    "blueprintSlot": "NF13",
    "objectives": [
      "NF13"
    ]
  },
  {
    "id": "e2.final.20261102.C.NF14",
    "c": "e2-development-scales",
    "t": "tf",
    "q": "Developmental milestones represent average time ranges and should be adapted to a child’s individual needs when planning intervention.",
    "o": [
      {
        "t": "True",
        "ok": true,
        "w": ""
      },
      {
        "t": "False",
        "ok": false,
        "w": ""
      }
    ],
    "x": "The Integrated Scales are a guide to typical stages, with variation in when children reach each milestone. They support individualized programming; missing the stated timeframe does not establish that a child will never acquire the skill.",
    "s": [
      "ARSCALES-3"
    ],
    "topic": "development",
    "exam": "exam2",
    "tier": 1,
    "mockOnly": true,
    "contentVersion": "2026-11-02-form-c-v1",
    "blueprintSlot": "NF14",
    "objectives": [
      "NF14"
    ]
  },
  {
    "id": "e2.final.20261102.C.SA01",
    "c": "e2-speech-access",
    "t": "mc",
    "q": "At a distance of approximately 1 meter, the average level of conversational speech is closest to:",
    "o": [
      {
        "t": "45 dB SPL",
        "ok": false,
        "w": ""
      },
      {
        "t": "65 dB SPL",
        "ok": true,
        "w": ""
      },
      {
        "t": "85 dB SPL",
        "ok": false,
        "w": ""
      }
    ],
    "x": "Average conversational speech is approximately 65 dB SPL at 1 meter. Faint speech is around 45 dB SPL and shouting around 85 dB SPL. These are SPL values; do not substitute dB HL without accounting for the reference.",
    "s": [
      "ARTB4-113"
    ],
    "topic": "acoustics",
    "exam": "exam2",
    "tier": 1,
    "mockOnly": true,
    "contentVersion": "2026-11-02-form-c-v1",
    "blueprintSlot": "SA01",
    "objectives": [
      "SA01"
    ]
  },
  {
    "id": "e2.final.20261102.C.SA02",
    "c": "e2-speech-frequency",
    "t": "mc",
    "q": "Which speaker generally has the highest fundamental frequency?",
    "o": [
      {
        "t": "An adult male",
        "ok": false,
        "w": ""
      },
      {
        "t": "An adult female",
        "ok": false,
        "w": ""
      },
      {
        "t": "A young child",
        "ok": true,
        "w": ""
      }
    ],
    "x": "Children generally have a higher fundamental frequency than adults. The textbook gives approximate averages of 400 Hz for children, 260 Hz for adult females, and 130 Hz for adult males. Fundamental frequency is distinct from the frequency region containing the most overall speech energy.",
    "s": [
      "ARTB4-114"
    ],
    "topic": "acoustics",
    "exam": "exam2",
    "tier": 1,
    "mockOnly": true,
    "contentVersion": "2026-11-02-form-c-v1",
    "blueprintSlot": "SA02",
    "objectives": [
      "SA02"
    ]
  },
  {
    "id": "e2.final.20261102.C.SA03",
    "c": "e2-speech-time",
    "t": "tf",
    "q": "The duration ranges of vowels and consonants can overlap.",
    "o": [
      {
        "t": "True",
        "ok": true,
        "w": ""
      },
      {
        "t": "False",
        "ok": false,
        "w": ""
      }
    ],
    "x": "Vowels generally last longer, but this is not a strict division. The cited ranges are approximately 130–360 ms for vowels and 20–150 ms for consonants, so they overlap.",
    "s": [
      "ARTB4-117",
      "ARL5-30"
    ],
    "topic": "acoustics",
    "exam": "exam2",
    "tier": 1,
    "mockOnly": true,
    "contentVersion": "2026-11-02-form-c-v1",
    "blueprintSlot": "SA03",
    "objectives": [
      "SA03"
    ]
  },
  {
    "id": "e2.final.20261102.C.SA04",
    "c": "e2-speech-time",
    "t": "mc",
    "q": "A listener uses a lengthened vowel to help distinguish the consonant at the end of a word. Which feature of the final consonant does this cue most directly support?",
    "o": [
      {
        "t": "Place of articulation",
        "ok": false,
        "w": ""
      },
      {
        "t": "Nasality",
        "ok": false,
        "w": ""
      },
      {
        "t": "Voicing",
        "ok": true,
        "w": ""
      }
    ],
    "x": "A voiced final consonant is often preceded by a longer vowel. That vowel duration provides a transitional cue to the voicing of the consonant that follows; useful information is not confined to the consonant itself.",
    "s": [
      "ARTB4-118",
      "ARL5-31"
    ],
    "topic": "acoustics",
    "exam": "exam2",
    "tier": 1,
    "mockOnly": true,
    "contentVersion": "2026-11-02-form-c-v1",
    "blueprintSlot": "SA04",
    "objectives": [
      "SA04"
    ]
  },
  {
    "id": "e2.final.20261102.C.SA05",
    "c": "e2-context-redundancy",
    "t": "mc",
    "q": "Two listeners have similar access to the speech signal. One knows the language well; the other knows few of its words. Why can the first listener fill in more of a partially heard sentence?",
    "o": [
      {
        "t": "Higher intensity of the speech signal",
        "ok": false,
        "w": ""
      },
      {
        "t": "A wider transmitted range of frequencies",
        "ok": false,
        "w": ""
      },
      {
        "t": "Longer duration of the individual sounds",
        "ok": false,
        "w": ""
      },
      {
        "t": "Greater use of linguistic redundancy",
        "ok": true,
        "w": ""
      }
    ],
    "x": "Knowledge of vocabulary and language rules lets the first listener use the message’s predictable relationships. Equal acoustic access does not imply equal ability to use that information. The example does not change sound level, frequency range, or duration.",
    "s": [
      "ARTB4-120",
      "ARTB4-121"
    ],
    "topic": "context",
    "exam": "exam2",
    "tier": 1,
    "mockOnly": true,
    "contentVersion": "2026-11-02-form-c-v1",
    "blueprintSlot": "SA05",
    "objectives": [
      "SA05"
    ]
  },
  {
    "id": "e2.final.20261102.C.SA06",
    "c": "e2-context-noise",
    "t": "tf",
    "q": "Background noise can reduce both the amount and the fidelity of speech information available to a child.",
    "o": [
      {
        "t": "True",
        "ok": true,
        "w": ""
      },
      {
        "t": "False",
        "ok": false,
        "w": ""
      }
    ],
    "x": "Noise can affect how much of the signal is heard and the quality of what is heard. Children may also have less language knowledge available to reconstruct the missing information.",
    "s": [
      "ARTB4-122"
    ],
    "topic": "context",
    "exam": "exam2",
    "tier": 1,
    "mockOnly": true,
    "contentVersion": "2026-11-02-form-c-v1",
    "blueprintSlot": "SA06",
    "objectives": [
      "SA06"
    ]
  },
  {
    "id": "e2.final.20261102.C.SA07",
    "c": "e2-speech-frequency",
    "t": "mc",
    "q": "The speech-sound distribution below places /m/ in more than one frequency region. What do the repeated symbols represent?",
    "o": [
      {
        "t": "Different degrees of hearing loss",
        "ok": false,
        "w": ""
      },
      {
        "t": "Multiple major components of the same sound",
        "ok": true,
        "w": ""
      },
      {
        "t": "Separate threshold curves for different ages",
        "ok": false,
        "w": ""
      },
      {
        "t": "Repeated measurements of one pure tone",
        "ok": false,
        "w": ""
      }
    ],
    "x": "A speech sound can have more than one major frequency component. The figure repeats its phonetic symbol to show those components; the symbols are not patient thresholds or separate age norms.",
    "s": [
      "ARTB4-116"
    ],
    "topic": "acoustics",
    "exam": "exam2",
    "tier": 1,
    "mockOnly": true,
    "contentVersion": "2026-11-02-form-c-v1",
    "blueprintSlot": "SA07",
    "objectives": [
      "SA07"
    ],
    "media": {
      "kind": "img",
      "src": "assets/exam2/figures/final-fig4-5.jpg",
      "alt": "Source figure or table for this question; use Enlarge source figure for details."
    }
  },
  {
    "id": "e2.final.20261102.C.SA08",
    "c": "e2-speech-energy",
    "t": "mc",
    "q": "Which pair has equal relative phonetic power in the table below?",
    "o": [
      {
        "t": "/m/ and /n/",
        "ok": false,
        "w": ""
      },
      {
        "t": "/b/ and /p/",
        "ok": false,
        "w": ""
      },
      {
        "t": "/s/ and /z/",
        "ok": true,
        "w": ""
      },
      {
        "t": "/r/ and /l/",
        "ok": false,
        "w": ""
      }
    ],
    "x": "The table assigns /s/ and /z/ a relative power of 16. The other pairs differ: /m/ 52 and /n/ 36; /b/ 7 and /p/ 6; /r/ 210 and /l/ 100. Equal power does not mean that the sounds carry identical speech information.",
    "s": [
      "ARTB4-113"
    ],
    "topic": "acoustics",
    "exam": "exam2",
    "tier": 1,
    "mockOnly": true,
    "contentVersion": "2026-11-02-form-c-v1",
    "blueprintSlot": "SA08",
    "objectives": [
      "SA08"
    ],
    "media": {
      "kind": "img",
      "src": "assets/exam2/figures/final-tab4-1.jpg",
      "alt": "Source figure or table for this question; use Enlarge source figure for details."
    }
  },
  {
    "id": "e2.final.20261102.C.SA09",
    "c": "e2-speech-energy",
    "t": "tf",
    "q": "The frequency region containing the most speech energy must also carry the most information for distinguishing speech sounds.",
    "o": [
      {
        "t": "True",
        "ok": false,
        "w": ""
      },
      {
        "t": "False",
        "ok": true,
        "w": ""
      }
    ],
    "x": "Energy and identifying information are different properties. Much speech energy is below 1,000 Hz, while weaker consonant information at higher frequencies is especially important for distinguishing sounds. Access to both vowels and consonants matters.",
    "s": [
      "ARL5-29",
      "ARL5-32"
    ],
    "topic": "acoustics",
    "exam": "exam2",
    "tier": 1,
    "mockOnly": true,
    "contentVersion": "2026-11-02-form-c-v1",
    "blueprintSlot": "SA09",
    "objectives": [
      "SA09"
    ]
  },
  {
    "id": "e2.final.20261102.C.SA10",
    "c": "e2-speech-range",
    "t": "mc",
    "q": "Use the minimum-audibility curve below. Two tones are presented at 40 dB SPL, one at 50 Hz and one at 1,000 Hz. Which is above the detection boundary?",
    "o": [
      {
        "t": "The 50-Hz tone only",
        "ok": false,
        "w": ""
      },
      {
        "t": "The 1,000-Hz tone only",
        "ok": true,
        "w": ""
      },
      {
        "t": "Both tones",
        "ok": false,
        "w": ""
      },
      {
        "t": "Neither tone",
        "ok": false,
        "w": ""
      }
    ],
    "x": "At 50 Hz, the minimum-audibility curve is above 40 dB SPL; at 1,000 Hz, it is well below 40 dB SPL. Only the 1,000-Hz tone is above the plotted detection boundary. The same SPL does not imply equal audibility at different frequencies.",
    "s": [
      "ARTB4-112"
    ],
    "topic": "acoustics",
    "exam": "exam2",
    "tier": 1,
    "mockOnly": true,
    "contentVersion": "2026-11-02-form-c-v1",
    "blueprintSlot": "SA10",
    "objectives": [
      "SA10"
    ],
    "media": {
      "kind": "img",
      "src": "assets/exam2/figures/final-fig4-2.jpg",
      "alt": "Source figure or table for this question; use Enlarge source figure for details."
    }
  },
  {
    "id": "e2.final.20261102.C.SA11",
    "c": "e2-speech-energy",
    "t": "mc",
    "q": "In the spectrum below, the speech level decreases by approximately how much between 1,000 and 2,000 Hz?",
    "o": [
      {
        "t": "3 dB",
        "ok": false,
        "w": ""
      },
      {
        "t": "10 dB",
        "ok": true,
        "w": ""
      },
      {
        "t": "30 dB",
        "ok": false,
        "w": ""
      }
    ],
    "x": "The curve is around 42 dB at 1,000 Hz and 32 dB at 2,000 Hz, a decrease of roughly 10 dB. This is a one-octave frequency interval, consistent with the described decline of about 9 dB per octave above 1,000 Hz. Read the approximate curve rather than treating it as an individual hearing threshold.",
    "s": [
      "ARTB4-114"
    ],
    "topic": "acoustics",
    "exam": "exam2",
    "tier": 1,
    "mockOnly": true,
    "contentVersion": "2026-11-02-form-c-v1",
    "blueprintSlot": "SA11",
    "objectives": [
      "SA11"
    ],
    "media": {
      "kind": "img",
      "src": "assets/exam2/figures/final-fig4-3.jpg",
      "alt": "Source figure or table for this question; use Enlarge source figure for details."
    }
  },
  {
    "id": "e2.final.20261102.C.SA12",
    "c": "e2-context-redundancy",
    "t": "mc",
    "q": "A talker repeats a sentence with clearer articulation and more appropriate stress, using the same words. Which contributor to redundancy has changed most directly?",
    "o": [
      {
        "t": "The listener",
        "ok": false,
        "w": ""
      },
      {
        "t": "The message",
        "ok": false,
        "w": ""
      },
      {
        "t": "The speaker",
        "ok": true,
        "w": ""
      },
      {
        "t": "The communication environment",
        "ok": false,
        "w": ""
      }
    ],
    "x": "Articulation, intonation, and stress belong to the speaker’s contribution. The listener’s knowledge, the message’s wording, and the room conditions are not changed in this example.",
    "s": [
      "ARTB4-121"
    ],
    "topic": "context",
    "exam": "exam2",
    "tier": 1,
    "mockOnly": true,
    "contentVersion": "2026-11-02-form-c-v1",
    "blueprintSlot": "SA12",
    "objectives": [
      "SA12"
    ]
  },
  {
    "id": "e2.final.20261102.C.SA13",
    "c": "e2-context-constraints",
    "t": "mc",
    "q": "A child hears an unclear word while standing at the school cafeteria counter. Expecting a food-related word because of that setting uses which constraint?",
    "o": [
      {
        "t": "Situational",
        "ok": true,
        "w": ""
      },
      {
        "t": "Syntactic",
        "ok": false,
        "w": ""
      },
      {
        "t": "Semantic",
        "ok": false,
        "w": ""
      }
    ],
    "x": "Situational constraints come from the physical and social setting. The cafeteria counter makes some topics more likely. Syntactic constraints concern grammar; semantic constraints concern meaningful relationships within the message.",
    "s": [
      "ARTB4-121",
      "ARTB4-122"
    ],
    "topic": "context",
    "exam": "exam2",
    "tier": 1,
    "mockOnly": true,
    "contentVersion": "2026-11-02-form-c-v1",
    "blueprintSlot": "SA13",
    "objectives": [
      "SA13"
    ]
  },
  {
    "id": "e2.final.20261102.C.SA14",
    "c": "e2-context-noise",
    "t": "mc",
    "q": "Which source of communication noise arises within the listener?",
    "o": [
      {
        "t": "Unclear articulation",
        "ok": false,
        "w": ""
      },
      {
        "t": "Unfamiliarity with the language",
        "ok": true,
        "w": ""
      },
      {
        "t": "Inappropriate word stress",
        "ok": false,
        "w": ""
      },
      {
        "t": "Excessive reverberation",
        "ok": false,
        "w": ""
      }
    ],
    "x": "Unfamiliarity with the language is a listener variable. Articulation and word stress are speaker variables, while reverberation belongs to the communication environment. Noise in this model includes more than unwanted sound.",
    "s": [
      "ARTB4-122"
    ],
    "topic": "context",
    "exam": "exam2",
    "tier": 1,
    "mockOnly": true,
    "contentVersion": "2026-11-02-form-c-v1",
    "blueprintSlot": "SA14",
    "objectives": [
      "SA14"
    ]
  },
  {
    "id": "e2.final.20261102.C.SA15",
    "c": "e2-speech-frequency",
    "t": "mc",
    "q": "A listener has poor access to high-frequency speech information. Which consonant feature is especially vulnerable?",
    "o": [
      {
        "t": "Voicing",
        "ok": false,
        "w": ""
      },
      {
        "t": "Nasality",
        "ok": false,
        "w": ""
      },
      {
        "t": "Place of articulation",
        "ok": true,
        "w": ""
      }
    ],
    "x": "Place-of-articulation information is carried chiefly by higher-frequency cues. Voicing and nasality rely more on lower-frequency information. This helps explain why high-frequency hearing loss can cause consonant confusions despite useful low-frequency access.",
    "s": [
      "ARTB4-116",
      "ARTB4-117",
      "ARTB4-120"
    ],
    "topic": "acoustics",
    "exam": "exam2",
    "tier": 1,
    "mockOnly": true,
    "contentVersion": "2026-11-02-form-c-v1",
    "blueprintSlot": "SA15",
    "objectives": [
      "SA15"
    ]
  },
  {
    "id": "e2.final.20261102.C.AT01",
    "c": "e2-at-gasp",
    "t": "mc",
    "q": "Which listening skill is not a separate subtest in GASP?",
    "o": [
      {
        "t": "Phoneme detection",
        "ok": false,
        "w": ""
      },
      {
        "t": "Sound discrimination",
        "ok": true,
        "w": ""
      },
      {
        "t": "Word identification",
        "ok": false,
        "w": ""
      },
      {
        "t": "Sentence comprehension",
        "ok": false,
        "w": ""
      }
    ],
    "x": "GASP has phoneme-detection, word-identification and sentence-comprehension subtests. Discrimination belongs to Erber’s hierarchy, but it is not a separate GASP subtest.",
    "s": [
      "ARL6-16",
      "ARL6-19"
    ],
    "topic": "at-assessments",
    "exam": "exam2",
    "tier": 1,
    "mockOnly": true,
    "contentVersion": "2026-11-02-form-c-v1",
    "blueprintSlot": "AT01",
    "objectives": [
      "AT01",
      "AT02"
    ]
  },
  {
    "id": "e2.final.20261102.C.AT02",
    "c": "e2-at-esp",
    "t": "mc",
    "q": "On ESP, a child distinguishes speech patterns but does not reliably identify individual words. Which category best fits?",
    "o": [
      {
        "t": "No pattern perception",
        "ok": false,
        "w": ""
      },
      {
        "t": "Pattern perception",
        "ok": true,
        "w": ""
      },
      {
        "t": "Consistent word identification",
        "ok": false,
        "w": ""
      }
    ],
    "x": "Pattern perception is the category above no pattern perception and below the word-identification categories. Detecting differences in a speech pattern does not by itself establish consistent identification of words.",
    "s": [
      "ARL6-15"
    ],
    "topic": "at-assessments",
    "exam": "exam2",
    "tier": 1,
    "mockOnly": true,
    "contentVersion": "2026-11-02-form-c-v1",
    "blueprintSlot": "AT02",
    "objectives": [
      "AT02"
    ]
  },
  {
    "id": "e2.final.20261102.C.AT03",
    "c": "e2-ling-procedure",
    "t": "tf",
    "q": "Once a child knows the Ling training words, the listening check should use the individual sounds rather than the whole words.",
    "o": [
      {
        "t": "True",
        "ok": true,
        "w": ""
      },
      {
        "t": "False",
        "ok": false,
        "w": ""
      }
    ],
    "x": "The training words help establish the sound associations. During the check, present the individual sound so that the response reflects access to that sound rather than clues from the rest of a word.",
    "s": [
      "ARLING-2"
    ],
    "topic": "ling",
    "exam": "exam2",
    "tier": 1,
    "mockOnly": true,
    "contentVersion": "2026-11-02-form-c-v1",
    "blueprintSlot": "AT03",
    "objectives": [
      "AT04"
    ]
  },
  {
    "id": "e2.final.20261102.C.AT04",
    "c": "e2-at-conditioning",
    "t": "mc",
    "q": "A child misses Ling sounds when a thick cloth is pressed over the clinician’s mouth. What should be corrected before interpreting these responses?",
    "o": [
      {
        "t": "Leave the face visible during every trial",
        "ok": false,
        "w": ""
      },
      {
        "t": "Increase every sound until the child responds",
        "ok": false,
        "w": ""
      },
      {
        "t": "Block the mouth view without muffling speech",
        "ok": true,
        "w": ""
      },
      {
        "t": "Use whole training words instead of sounds",
        "ok": false,
        "w": ""
      }
    ],
    "x": "An audition-only task requires hiding visual speech cues while preserving the acoustic signal. Pressing thick cloth over the mouth may muffle the speech, so the changed responses cannot be attributed to the child’s hearing without first correcting that condition.",
    "s": [
      "ARL6-21"
    ],
    "topic": "at-hierarchy",
    "exam": "exam2",
    "tier": 1,
    "mockOnly": true,
    "contentVersion": "2026-11-02-form-c-v1",
    "blueprintSlot": "AT04",
    "objectives": [
      "AT04"
    ]
  },
  {
    "id": "e2.final.20261102.C.AT05",
    "c": "e2-at-detection",
    "t": "mc",
    "q": "A child raises a hand when an ongoing sound stops. Which auditory skill does this response directly demonstrate?",
    "o": [
      {
        "t": "Detection",
        "ok": true,
        "w": ""
      },
      {
        "t": "Discrimination",
        "ok": false,
        "w": ""
      },
      {
        "t": "Identification",
        "ok": false,
        "w": ""
      },
      {
        "t": "Comprehension",
        "ok": false,
        "w": ""
      }
    ],
    "x": "Detection includes noticing the absence as well as the presence of sound. The child is not being asked to compare two sounds, identify what produced the sound or interpret a spoken message.",
    "s": [
      "ARL6-20",
      "ARL6-22"
    ],
    "topic": "at-hierarchy",
    "exam": "exam2",
    "tier": 1,
    "mockOnly": true,
    "contentVersion": "2026-11-02-form-c-v1",
    "blueprintSlot": "AT05",
    "objectives": [
      "AT06"
    ]
  },
  {
    "id": "e2.final.20261102.C.AT06",
    "c": "e2-at-comprehension",
    "t": "tf",
    "q": "Repeating an unfamiliar sentence exactly is sufficient to demonstrate comprehension of its meaning.",
    "o": [
      {
        "t": "True",
        "ok": false,
        "w": ""
      },
      {
        "t": "False",
        "ok": true,
        "w": ""
      }
    ],
    "x": "Accurate repetition can show identification of what was heard. Comprehension requires evidence that the child understood the message, such as answering a meaningful question, paraphrasing or following the direction.",
    "s": [
      "ARL6-30",
      "ARL6-34",
      "ARL6-35"
    ],
    "topic": "at-hierarchy",
    "exam": "exam2",
    "tier": 1,
    "mockOnly": true,
    "contentVersion": "2026-11-02-form-c-v1",
    "blueprintSlot": "AT06",
    "objectives": [
      "AT06"
    ]
  },
  {
    "id": "e2.final.20261102.C.AT07",
    "c": "e2-at-analytic",
    "t": "mc",
    "q": "A clinician moves from understanding a short story to practicing its confusable consonants in isolation. How has the training approach changed?",
    "o": [
      {
        "t": "Analytic to synthetic",
        "ok": false,
        "w": ""
      },
      {
        "t": "Synthetic to analytic",
        "ok": true,
        "w": ""
      },
      {
        "t": "Pragmatic to synthetic",
        "ok": false,
        "w": ""
      }
    ],
    "x": "The story uses meaningful larger units and context, which is synthetic training. Isolating smaller speech components shifts the task to an analytic approach.",
    "s": [
      "ARL6-39",
      "ARL6-41"
    ],
    "topic": "at-approaches",
    "exam": "exam2",
    "tier": 1,
    "mockOnly": true,
    "contentVersion": "2026-11-02-form-c-v1",
    "blueprintSlot": "AT07",
    "objectives": [
      "AT07"
    ]
  },
  {
    "id": "e2.final.20261102.C.AT08",
    "c": "e2-at-synthetic",
    "t": "tf",
    "q": "Synthetic auditory training can be conducted in a formal, one-to-one session.",
    "o": [
      {
        "t": "True",
        "ok": true,
        "w": ""
      },
      {
        "t": "False",
        "ok": false,
        "w": ""
      }
    ],
    "x": "Synthetic describes how the child uses meaningful stimuli, syntax and context. Formal describes the structured activity format. These are separate dimensions, so a structured one-to-one session can use synthetic tasks.",
    "s": [
      "ARL6-41",
      "ARL6-46",
      "ARL6-47"
    ],
    "topic": "at-approaches",
    "exam": "exam2",
    "tier": 1,
    "mockOnly": true,
    "contentVersion": "2026-11-02-form-c-v1",
    "blueprintSlot": "AT08",
    "objectives": [
      "AT08",
      "AT11"
    ]
  },
  {
    "id": "e2.final.20261102.C.AT09",
    "c": "e2-at-pragmatic",
    "t": "mc",
    "q": "Which request directly controls speech level during pragmatic auditory training?",
    "o": [
      {
        "t": "“Please use a simpler sentence.”",
        "ok": false,
        "w": ""
      },
      {
        "t": "“Please close the noisy hallway door.”",
        "ok": false,
        "w": ""
      },
      {
        "t": "“Please speak a little louder.”",
        "ok": true,
        "w": ""
      }
    ],
    "x": "Asking the talker to speak louder directly changes speech level. Asking for a simpler sentence targets message complexity; closing the door targets competing noise. Each can be useful, but it changes a different communication variable.",
    "s": [
      "ARL6-43"
    ],
    "topic": "at-approaches",
    "exam": "exam2",
    "tier": 1,
    "mockOnly": true,
    "contentVersion": "2026-11-02-form-c-v1",
    "blueprintSlot": "AT09",
    "objectives": [
      "AT09"
    ]
  },
  {
    "id": "e2.final.20261102.C.AT10",
    "c": "e2-at-eclectic",
    "t": "mc",
    "q": "One treatment plan combines isolated phoneme contrasts, meaningful conversation and strategies for repairing communication breakdowns. Which approach describes the plan as a whole?",
    "o": [
      {
        "t": "Analytic",
        "ok": false,
        "w": ""
      },
      {
        "t": "Synthetic",
        "ok": false,
        "w": ""
      },
      {
        "t": "Pragmatic",
        "ok": false,
        "w": ""
      },
      {
        "t": "Eclectic",
        "ok": true,
        "w": ""
      }
    ],
    "x": "The plan combines analytic work on small speech units, synthetic work with meaningful conversation and pragmatic communication strategies. That combination makes the overall plan eclectic.",
    "s": [
      "ARL6-39",
      "ARL6-41",
      "ARL6-43",
      "ARL6-44"
    ],
    "topic": "at-approaches",
    "exam": "exam2",
    "tier": 1,
    "mockOnly": true,
    "contentVersion": "2026-11-02-form-c-v1",
    "blueprintSlot": "AT10",
    "objectives": [
      "AT10"
    ]
  },
  {
    "id": "e2.final.20261102.C.AT11",
    "c": "e2-at-design",
    "t": "mc",
    "q": "A clinician keeps the same one-to-one format and response choices but replaces isolated words with short phrases. Which difficulty variable changed?",
    "o": [
      {
        "t": "Stimulus unit",
        "ok": true,
        "w": ""
      },
      {
        "t": "Response-set size",
        "ok": false,
        "w": ""
      },
      {
        "t": "Task structure",
        "ok": false,
        "w": ""
      },
      {
        "t": "Listening conditions",
        "ok": false,
        "w": ""
      }
    ],
    "x": "Words and phrases are different stimulus units. The stem keeps the activity format and response set constant; it does not describe a change in background noise or other listening conditions.",
    "s": [
      "ARL6-46",
      "ARL6-48"
    ],
    "topic": "at-design",
    "exam": "exam2",
    "tier": 1,
    "mockOnly": true,
    "contentVersion": "2026-11-02-form-c-v1",
    "blueprintSlot": "AT11",
    "objectives": [
      "AT12"
    ]
  },
  {
    "id": "e2.final.20261102.C.AT12",
    "c": "e2-at-difficulty",
    "t": "mc",
    "q": "Before presenting a listening passage, the clinician tells the child its topic. Which change is intended to make the task easier?",
    "o": [
      {
        "t": "Increasing contextual support",
        "ok": true,
        "w": ""
      },
      {
        "t": "Increasing stimulus similarity",
        "ok": false,
        "w": ""
      },
      {
        "t": "Increasing response-set size",
        "ok": false,
        "w": ""
      }
    ],
    "x": "Knowing the topic supplies context that can help the child interpret the passage. More similar stimuli or a larger response set would generally increase the demand rather than provide this support.",
    "s": [
      "ARL6-46",
      "ARL6-48"
    ],
    "topic": "at-design",
    "exam": "exam2",
    "tier": 1,
    "mockOnly": true,
    "contentVersion": "2026-11-02-form-c-v1",
    "blueprintSlot": "AT12",
    "objectives": [
      "AT12"
    ]
  },
  {
    "id": "e2.final.20261102.C.AT13",
    "c": "e2-at-program-structure",
    "t": "mc",
    "q": "A SPICE activity asks a child to distinguish speech patterns that differ in duration, intensity and pitch. Which goal category best fits?",
    "o": [
      {
        "t": "Detection",
        "ok": false,
        "w": ""
      },
      {
        "t": "Suprasegmental perception",
        "ok": true,
        "w": ""
      },
      {
        "t": "Vowel and consonant perception",
        "ok": false,
        "w": ""
      },
      {
        "t": "Connected speech",
        "ok": false,
        "w": ""
      }
    ],
    "x": "Duration, intensity and pitch provide suprasegmental information. SPICE treats suprasegmental perception as a category separate from detecting sound, distinguishing vowel/consonant content and understanding connected speech.",
    "s": [
      "ARL6-25",
      "ARL6-51"
    ],
    "topic": "at-programs",
    "exam": "exam2",
    "tier": 1,
    "mockOnly": true,
    "contentVersion": "2026-11-02-form-c-v1",
    "blueprintSlot": "AT13",
    "objectives": [
      "AT13"
    ]
  },
  {
    "id": "e2.final.20261102.C.AT14",
    "c": "e2-at-program-fit",
    "t": "mc",
    "q": "For an infant beginning SKI-HI home intervention, auditory stimulation is provided:",
    "o": [
      {
        "t": "After speech and language training is complete",
        "ok": false,
        "w": ""
      },
      {
        "t": "Alongside speech and language stimulation",
        "ok": true,
        "w": ""
      },
      {
        "t": "Before speech or language stimulation begins",
        "ok": false,
        "w": ""
      }
    ],
    "x": "SKI-HI is a developmentally based home-intervention curriculum for infants with hearing loss and their families. Auditory stimulation is used in conjunction with language and speech stimulation, rather than treating them as mutually exclusive stages.",
    "s": [
      "ARL6-52"
    ],
    "topic": "at-programs",
    "exam": "exam2",
    "tier": 1,
    "mockOnly": true,
    "contentVersion": "2026-11-02-form-c-v1",
    "blueprintSlot": "AT14",
    "objectives": [
      "AT14"
    ]
  },
  {
    "id": "e2.final.20261102.C.VS01",
    "c": "e2-visual-conditions",
    "t": "mc",
    "q": "Use Figure 5-1 below. Which pair of changes targets the environment while leaving the speaker and message unchanged?",
    "o": [
      {
        "t": "Reduce viewing distance and remove glare",
        "ok": true,
        "w": ""
      },
      {
        "t": "Slow the speech and improve illumination",
        "ok": false,
        "w": ""
      },
      {
        "t": "Simplify the message and reduce distance",
        "ok": false,
        "w": ""
      },
      {
        "t": "Improve attention and reduce background noise",
        "ok": false,
        "w": ""
      }
    ],
    "x": "Distance and lighting are environmental contributors in the figure. The other pairs each mix an environmental change with a change to the speaker, signal/code or speechreader.",
    "s": [
      "ARMOCKBOOK-152"
    ],
    "topic": "visual-support",
    "exam": "exam2",
    "tier": 1,
    "mockOnly": true,
    "contentVersion": "2026-11-02-form-c-v1",
    "blueprintSlot": "VS01",
    "objectives": [
      "VS03"
    ],
    "media": {
      "kind": "img",
      "src": "assets/exam2/figures/final-fig5-1.jpg",
      "alt": "Source figure for this question; use Enlarge source figure for details."
    }
  },
  {
    "id": "e2.final.20261102.C.VS02",
    "c": "e2-visual-ambiguity",
    "t": "mc",
    "q": "The same speaker’s lips are more rounded for the initial consonant in “cool” than in “key.” Which process explains this effect of the following vowel?",
    "o": [
      {
        "t": "Coarticulation",
        "ok": true,
        "w": ""
      },
      {
        "t": "Stress",
        "ok": false,
        "w": ""
      },
      {
        "t": "Talker variability",
        "ok": false,
        "w": ""
      }
    ],
    "x": "Coarticulation is the influence of neighboring sounds on articulation. Anticipating the following vowel changes the visible movement for the consonant even though the speaker stays the same.",
    "s": [
      "ARL7-9"
    ],
    "topic": "visual-foundations",
    "exam": "exam2",
    "tier": 1,
    "mockOnly": true,
    "contentVersion": "2026-11-02-form-c-v1",
    "blueprintSlot": "VS02",
    "objectives": [
      "VS02"
    ]
  },
  {
    "id": "e2.final.20261102.C.VS03",
    "c": "e2-visual-ambiguity",
    "t": "tf",
    "q": "Seeing the lips close is enough to reliably distinguish /p/ from /b/ by lipreading alone.",
    "o": [
      {
        "t": "True",
        "ok": false,
        "w": ""
      },
      {
        "t": "False",
        "ok": true,
        "w": ""
      }
    ],
    "x": "Lip closure is visible for both /p/ and /b/, but the voicing contrast is not reliably visible. These sounds belong to the same visually similar group, so visual access alone does not uniquely identify them.",
    "s": [
      "ARL7-7",
      "ARL7-10"
    ],
    "topic": "visual-foundations",
    "exam": "exam2",
    "tier": 1,
    "mockOnly": true,
    "contentVersion": "2026-11-02-form-c-v1",
    "blueprintSlot": "VS03",
    "objectives": [
      "VS02"
    ]
  },
  {
    "id": "e2.final.20261102.C.VS04",
    "c": "e2-visual-conditions",
    "t": "mc",
    "q": "A speechreader finds “She spread the toast with ___” easier than “She asked about ___.” What most directly explains the advantage for recognizing “butter”?",
    "o": [
      {
        "t": "The first sentence changes the viewing angle",
        "ok": false,
        "w": ""
      },
      {
        "t": "The first sentence narrows likely word choices",
        "ok": true,
        "w": ""
      },
      {
        "t": "The first sentence increases lip-movement visibility",
        "ok": false,
        "w": ""
      },
      {
        "t": "The first sentence reduces the need for language knowledge",
        "ok": false,
        "w": ""
      }
    ],
    "x": "The first sentence constrains the likely completion through linguistic context. It does not change the viewing angle or make the articulation of “butter” more visible; using the clue depends on language knowledge.",
    "s": [
      "ARL7-15"
    ],
    "topic": "visual-support",
    "exam": "exam2",
    "tier": 1,
    "mockOnly": true,
    "contentVersion": "2026-11-02-form-c-v1",
    "blueprintSlot": "VS04",
    "objectives": [
      "VS02"
    ]
  },
  {
    "id": "e2.final.20261102.C.VS05",
    "c": "e2-visual-signals",
    "t": "tf",
    "q": "Even limited residual hearing can improve speech recognition when it is combined with visual speech cues.",
    "o": [
      {
        "t": "True",
        "ok": true,
        "w": ""
      },
      {
        "t": "False",
        "ok": false,
        "w": ""
      }
    ],
    "x": "Auditory and visual cues can complement one another. Limited hearing may still contribute useful information during speechreading even when the auditory signal alone is insufficient for the full message.",
    "s": [
      "ARL7-17",
      "ARL7-19"
    ],
    "topic": "visual-foundations",
    "exam": "exam2",
    "tier": 1,
    "mockOnly": true,
    "contentVersion": "2026-11-02-form-c-v1",
    "blueprintSlot": "VS05",
    "objectives": [
      "VS04",
      "VS05"
    ]
  },
  {
    "id": "e2.final.20261102.C.VS06",
    "c": "e2-visual-asl-cue",
    "t": "mc",
    "q": "Two ASL signs have the same handshape, location and movement, but the palm faces toward the signer in one and away in the other. Which feature differs?",
    "o": [
      {
        "t": "Hand configuration",
        "ok": false,
        "w": ""
      },
      {
        "t": "Orientation",
        "ok": true,
        "w": ""
      },
      {
        "t": "Location",
        "ok": false,
        "w": ""
      }
    ],
    "x": "Orientation describes the direction the hand or palm faces. It is one of the four physical characteristics of an ASL sign, alongside hand configuration, movement and location.",
    "s": [
      "ARL7-28"
    ],
    "topic": "visual-manual",
    "exam": "exam2",
    "tier": 1,
    "mockOnly": true,
    "contentVersion": "2026-11-02-form-c-v1",
    "blueprintSlot": "VS06",
    "objectives": [
      "VS06"
    ]
  },
  {
    "id": "e2.final.20261102.C.VS07",
    "c": "e2-visual-english",
    "t": "mc",
    "q": "What does Manually Coded English represent, in contrast with the phonemic cues of Cued Speech?",
    "o": [
      {
        "t": "Spoken phonemes and syllables",
        "ok": false,
        "w": ""
      },
      {
        "t": "English words and grammatical forms",
        "ok": true,
        "w": ""
      },
      {
        "t": "Individual letters of written words",
        "ok": false,
        "w": ""
      }
    ],
    "x": "Manually Coded English represents English words and grammatical forms, including markers for endings. Cued Speech represents spoken phonemes together with mouth movements. Letter-by-letter representation is fingerspelling.",
    "s": [
      "ARL7-27",
      "ARL7-29",
      "ARMOCKBOOK-181"
    ],
    "topic": "visual-manual",
    "exam": "exam2",
    "tier": 1,
    "mockOnly": true,
    "contentVersion": "2026-11-02-form-c-v1",
    "blueprintSlot": "VS07",
    "objectives": [
      "VS07"
    ]
  },
  {
    "id": "e2.final.20261102.C.VS08",
    "c": "e2-visual-asl-cue",
    "t": "mc",
    "q": "In Cued Speech, hand placement near the mouth distinguishes which speech units?",
    "o": [
      {
        "t": "Consonants",
        "ok": false,
        "w": ""
      },
      {
        "t": "Vowels",
        "ok": true,
        "w": ""
      },
      {
        "t": "Written letters",
        "ok": false,
        "w": ""
      }
    ],
    "x": "The four placements near the mouth represent vowels, while the eight handshapes represent consonants. These cues work with mouth movements and do not represent alphabet letters as fingerspelling does.",
    "s": [
      "ARMOCKBOOK-184"
    ],
    "topic": "visual-manual",
    "exam": "exam2",
    "tier": 1,
    "mockOnly": true,
    "contentVersion": "2026-11-02-form-c-v1",
    "blueprintSlot": "VS08",
    "objectives": [
      "VS08"
    ]
  },
  {
    "id": "e2.final.20261102.C.VS09",
    "c": "e2-visual-english",
    "t": "mc",
    "q": "Why can the Rochester Method be slow for continuous conversation?",
    "o": [
      {
        "t": "Each word requires English affix markers",
        "ok": false,
        "w": ""
      },
      {
        "t": "Each spoken phoneme requires a hand cue",
        "ok": false,
        "w": ""
      },
      {
        "t": "Each word is spelled one letter at a time",
        "ok": true,
        "w": ""
      },
      {
        "t": "Each message is translated into ASL syntax",
        "ok": false,
        "w": ""
      }
    ],
    "x": "The Rochester Method uses fingerspelling for every word, making continuous communication laborious. Affix markers describe manually coded English systems, phoneme cues describe Cued Speech and ASL has its own syntax.",
    "s": [
      "ARMOCKBOOK-184",
      "ARMOCKBOOK-181"
    ],
    "topic": "visual-manual",
    "exam": "exam2",
    "tier": 1,
    "mockOnly": true,
    "contentVersion": "2026-11-02-form-c-v1",
    "blueprintSlot": "VS09",
    "objectives": [
      "VS09"
    ]
  }
];
F.forms.push({id:'final-c-20261102',label:'Form C',items:items.map(function(i){return i.id;}),version:'2026-11-02-form-c-v1'});
F.items=F.items.concat(items);D.items=D.items.concat(items);L.ITEMS=L.ITEMS.concat(items);
F.groups.forEach(function(g){g.coverageItems=g.coverageItems.concat(items.filter(function(i){return i.blueprintSlot.indexOf(g.id)===0;}).map(function(i){return i.id;}));});
})(typeof window!=='undefined'?window:globalThis);
