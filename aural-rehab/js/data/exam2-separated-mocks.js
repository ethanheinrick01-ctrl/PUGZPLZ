/* Reserved mock questions stay separate from comprehensive coverage and saved snapshots. */
(function(root){
'use strict';
var L=root.L,D=L.EXAM2_DATA,F=D.finalMocks,version='2026-11-02-separated-v1';
var revisions={
  "e2.final.20261029.A.CI01": {
    "q": "Two 18-month-olds have bilateral profound SNHL. One is gaining simple auditory skills with appropriate hearing aids; the other is not. Which difference matters most to the CI evaluation?",
    "o": [
      {
        "t": "The response to appropriately fitted hearing aids",
        "ok": true,
        "w": ""
      },
      {
        "t": "The age category used for the evaluation",
        "ok": false,
        "w": ""
      },
      {
        "t": "The classification of the loss as bilateral",
        "ok": false,
        "w": ""
      }
    ],
    "x": "The children share an age category and hearing-loss profile. Their different progress with appropriate amplification matters because lack of simple auditory-skill development with hearing aids supports CI consideration. Candidacy requires more than thresholds alone.",
    "s": [
      "ARL4-13"
    ]
  },
  "e2.final.20261029.A.CI02": {
    "q": "A report lists 25% correct for a 7-year-old’s word-recognition test. Which additional information is needed to compare it with the pediatric CI speech-recognition criterion?",
    "o": [
      {
        "t": "Whether the child repeated words or pointed to letters",
        "ok": false,
        "w": ""
      },
      {
        "t": "Whether the score was obtained at the first or second visit",
        "ok": false,
        "w": ""
      },
      {
        "t": "Whether the words were open set and presented in the best-aided condition",
        "ok": true,
        "w": ""
      },
      {
        "t": "Whether the child’s unaided thresholds were better at low or high frequencies",
        "ok": false,
        "w": ""
      }
    ],
    "x": "A percentage alone is insufficient. The older-child criterion uses open-set word recognition in the best-aided condition. The response set and aided condition determine whether this is the required measure; visit number and unaided configuration do not supply those details.",
    "s": [
      "ARL4-14"
    ]
  },
  "e2.final.20261029.A.CI03": {
    "q": "An adult has an appropriate audiogram and poor aided speech recognition but expects a CI to eliminate every listening difficulty. Which remaining candidacy factor needs attention?",
    "o": [
      {
        "t": "The age-specific hearing-loss range",
        "ok": false,
        "w": ""
      },
      {
        "t": "The aided speech-recognition result",
        "ok": false,
        "w": ""
      },
      {
        "t": "Realistic expectations",
        "ok": true,
        "w": ""
      }
    ],
    "x": "The stated hearing-loss and aided-performance findings are already appropriate. The expectation of eliminating every listening difficulty needs counseling because realistic expectations are a candidacy consideration and a CI does not restore normal hearing.",
    "s": [
      "ARL4-12",
      "ARL4-2"
    ]
  },
  "e2.final.20261029.A.CI04": {
    "q": "Following cochlear implantation before 12 months, normal-range receptive vocabulary has been demonstrated in many children by which milestone?",
    "o": [
      {
        "t": "Initial device activation",
        "ok": false,
        "w": ""
      },
      {
        "t": "The first mapping adjustment",
        "ok": false,
        "w": ""
      },
      {
        "t": "One month of device use",
        "ok": false,
        "w": ""
      },
      {
        "t": "School entry",
        "ok": true,
        "w": ""
      }
    ],
    "x": "The early-implantation finding concerns normal-range receptive vocabulary by school entry, reported for up to 80% of children implanted before 12 months. It is not an activation-day result and does not guarantee the outcome for every child.",
    "s": [
      "ARL4-5"
    ]
  },
  "e2.final.20261029.A.CI05": {
    "q": "Which comparison most directly evaluates the localization benefit of using two hearing aids?",
    "o": [
      {
        "t": "Word recognition in quiet versus word recognition in noise",
        "ok": false,
        "w": ""
      },
      {
        "t": "Judging sound direction with one aid versus with both aids",
        "ok": true,
        "w": ""
      },
      {
        "t": "Unaided thresholds before fitting versus unaided thresholds after fitting",
        "ok": false,
        "w": ""
      }
    ],
    "x": "Localization concerns where a sound originates. Comparing direction judgments with one versus two aids isolates that claimed benefit. Word scores address recognition, and unchanged unaided sensitivity does not rule out an aided localization benefit.",
    "s": [
      "ARMOCKBOOK-45"
    ]
  },
  "e2.final.20261029.A.CI06": {
    "q": "A child who hears through two hearing aids can have binaural hearing without having a cochlear implant.",
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
    "x": "Binaural means hearing with two ears. It does not require implants; bilateral hearing aids can support two-ear listening.",
    "s": [
      "ARL4-35"
    ]
  },
  "e2.final.20261029.A.CI07": {
    "q": "A child with a CI in each ear receives electrical stimulation through both implanted electrode arrays.",
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
    "x": "Each cochlear implant delivers electrical stimulation through its own array. This is bilateral implantation; a hearing aid on one side would instead provide acoustic amplification in a bimodal arrangement.",
    "s": [
      "ARL4-10",
      "ARL4-35"
    ]
  },
  "e2.final.20261029.A.CI08": {
    "q": "In bimodal hearing, which device supplies the acoustic input?",
    "o": [
      {
        "t": "The internal CI receiver",
        "ok": false,
        "w": ""
      },
      {
        "t": "The CI electrode array",
        "ok": false,
        "w": ""
      },
      {
        "t": "The external CI transmitter",
        "ok": false,
        "w": ""
      },
      {
        "t": "The contralateral hearing aid",
        "ok": true,
        "w": ""
      }
    ],
    "x": "The hearing aid supplies amplified acoustic input. The CI on the other side supplies electrical stimulation. Bimodal therefore describes two different modes of stimulation across the ears.",
    "s": [
      "ARL4-35",
      "ARL4-10"
    ]
  },
  "e2.final.20261029.A.CI09": {
    "q": "The CI sound processor has produced a digital code. Which component receives that code next?",
    "o": [
      {
        "t": "The electrode array",
        "ok": false,
        "w": ""
      },
      {
        "t": "The external transmitter",
        "ok": true,
        "w": ""
      },
      {
        "t": "The auditory nerve",
        "ok": false,
        "w": ""
      }
    ],
    "x": "The processor relays its digital code to the external transmitter. The transmitter sends it through the skin to the internal receiver before pulses reach the array and stimulate the nerve.",
    "s": [
      "ARL4-10"
    ]
  },
  "e2.final.20261029.A.CI10": {
    "q": "Which pair correctly matches a CI component to its location?",
    "o": [
      {
        "t": "Transmitter—internal; receiver—external",
        "ok": false,
        "w": ""
      },
      {
        "t": "Processor—internal; array—external",
        "ok": false,
        "w": ""
      },
      {
        "t": "Receiver—internal; microphone—external",
        "ok": true,
        "w": ""
      },
      {
        "t": "Array—external; microphone—internal",
        "ok": false,
        "w": ""
      }
    ],
    "x": "The receiver is implanted, while the microphone is external. The processor and transmitter are also external; the electrode array is internal.",
    "s": [
      "ARL4-7"
    ]
  },
  "e2.final.20261029.A.CI11": {
    "q": "In the CI signal pathway, which event must occur before the electrode array stimulates auditory nerve fibers?",
    "o": [
      {
        "t": "The auditory nerve sends information to the brain",
        "ok": false,
        "w": ""
      },
      {
        "t": "The receiver converts the code into electrical pulses",
        "ok": true,
        "w": ""
      },
      {
        "t": "The microphone receives the nerve’s response",
        "ok": false,
        "w": ""
      }
    ],
    "x": "The internal receiver supplies electrical pulses to the array, which then stimulates nerve fibers. Transmission by the nerve to the brain follows stimulation; the microphone detects environmental sound, not a returning neural response.",
    "s": [
      "ARL4-10"
    ]
  },
  "e2.final.20261029.A.CI12": {
    "q": "Who places the electrode array during cochlear implant surgery?",
    "o": [
      {
        "t": "The speech-language pathologist",
        "ok": false,
        "w": ""
      },
      {
        "t": "The audiologist",
        "ok": false,
        "w": ""
      },
      {
        "t": "The surgeon",
        "ok": true,
        "w": ""
      }
    ],
    "x": "The surgeon places the electrode array. The audiologist conducts real-time telemetry to verify device function; the SLP contributes speech-language assessment and habilitation.",
    "s": [
      "ARL4-30",
      "ARL4-26"
    ]
  },
  "e2.final.20261029.A.CI13": {
    "q": "An initial CI activation is scheduled three weeks after surgery. How does this compare with the usual postoperative interval?",
    "o": [
      {
        "t": "Earlier than the usual interval",
        "ok": false,
        "w": ""
      },
      {
        "t": "Within the usual interval",
        "ok": true,
        "w": ""
      },
      {
        "t": "Later than the usual interval",
        "ok": false,
        "w": ""
      }
    ],
    "x": "Three weeks falls within the usual 2–4-week interval between implantation and initial activation. Candidacy evaluation occurs before surgery, and later mapping visits continue after activation.",
    "s": [
      "ARL4-31"
    ]
  },
  "e2.final.20261029.B.CI01": {
    "q": "Which finding would weaken the claim that a 20-month-old with bilateral profound SNHL is receiving inadequate benefit from appropriate hearing aids?",
    "o": [
      {
        "t": "Few responses to familiar voices",
        "ok": false,
        "w": ""
      },
      {
        "t": "Continued improvement in simple auditory skills",
        "ok": true,
        "w": ""
      },
      {
        "t": "Limited progress despite consistent aid use",
        "ok": false,
        "w": ""
      },
      {
        "t": "Loss of previously observed auditory responses",
        "ok": false,
        "w": ""
      }
    ],
    "x": "Continued development of simple auditory skills demonstrates benefit that the team must consider. The other findings support concern about auditory access or progress; the hearing-loss profile does not by itself establish inadequate hearing-aid benefit.",
    "s": [
      "ARL4-13",
      "ARL4-16"
    ]
  },
  "e2.final.20261029.B.CI02": {
    "q": "An older child recognizes 12 of 20 open-set words in the best-aided condition. Which score and comparison with the pediatric CI word-recognition criterion are correct?",
    "o": [
      {
        "t": "12% correct; below the criterion",
        "ok": false,
        "w": ""
      },
      {
        "t": "20% correct; below the criterion",
        "ok": false,
        "w": ""
      },
      {
        "t": "60% correct; above the criterion",
        "ok": true,
        "w": ""
      }
    ],
    "x": "12 ÷ 20 × 100 = 60%. The criterion uses percent correct rather than the raw number of correct words or the number presented. 60% is above the taught 30% criterion; the remaining candidacy findings still require evaluation.",
    "s": [
      "ARL4-14"
    ]
  },
  "e2.final.20261029.B.CI03": {
    "q": "Which adult CI evaluation finding concerns medical suitability rather than hearing-aid benefit?",
    "o": [
      {
        "t": "No medical contraindications",
        "ok": true,
        "w": ""
      },
      {
        "t": "Poor aided word recognition",
        "ok": false,
        "w": ""
      },
      {
        "t": "Limited aided sentence understanding",
        "ok": false,
        "w": ""
      },
      {
        "t": "Difficulty recognizing aided speech in noise",
        "ok": false,
        "w": ""
      }
    ],
    "x": "No medical contraindications addresses whether implantation is medically appropriate. Aided word, sentence and speech-in-noise results concern functional benefit or performance with amplification.",
    "s": [
      "ARL4-12",
      "ARL4-24"
    ]
  },
  "e2.final.20261029.B.CI04": {
    "q": "For an appropriate pediatric CI candidate, implantation before 18 months is especially associated with which pattern?",
    "o": [
      {
        "t": "Faster progress in spoken language",
        "ok": true,
        "w": ""
      },
      {
        "t": "Slower progress in spoken language",
        "ok": false,
        "w": ""
      },
      {
        "t": "Progress unrelated to implantation age",
        "ok": false,
        "w": ""
      }
    ],
    "x": "Earlier implantation, especially before 18 months, is associated with faster rates of spoken-language progress than implantation at older ages. This is an association with developmental progress, not a guarantee for an individual child or restoration of normal unaided hearing.",
    "s": [
      "ARL4-20"
    ]
  },
  "e2.final.20261029.B.CI05": {
    "q": "A listener reports better speech understanding with two hearing aids in a noisy room. Which conclusion is supported?",
    "o": [
      {
        "t": "The unaided hearing loss has become less severe",
        "ok": false,
        "w": ""
      },
      {
        "t": "The listener has gained an aided speech-in-noise benefit",
        "ok": true,
        "w": ""
      },
      {
        "t": "The listener can now identify every sound source",
        "ok": false,
        "w": ""
      },
      {
        "t": "The improvement establishes benefit in every listening setting",
        "ok": false,
        "w": ""
      }
    ],
    "x": "The observation supports improved aided speech understanding in that condition. It does not establish changed unaided sensitivity, universal localization accuracy or equal benefit in every environment.",
    "s": [
      "ARMOCKBOOK-45"
    ]
  },
  "e2.final.20261029.B.CI06": {
    "q": "Which feature is shared by binaural hearing with two hearing aids and binaural hearing with two CIs?",
    "o": [
      {
        "t": "Acoustic amplification in both ears",
        "ok": false,
        "w": ""
      },
      {
        "t": "Electrical stimulation in both ears",
        "ok": false,
        "w": ""
      },
      {
        "t": "Auditory input through two ears",
        "ok": true,
        "w": ""
      }
    ],
    "x": "Both arrangements provide two-ear input. Hearing aids amplify acoustically; cochlear implants stimulate electrically. Binaural describes the two-ear use rather than one particular technology.",
    "s": [
      "ARL4-35",
      "ARL4-10"
    ]
  },
  "e2.final.20261029.B.CI07": {
    "q": "Replacing one of a child’s two CIs with a hearing aid would preserve a bilateral implant configuration.",
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
    "x": "Two CIs are required for bilateral implantation. One CI plus a contralateral hearing aid is bimodal, even though both arrangements can provide two-ear input.",
    "s": [
      "ARL4-35"
    ]
  },
  "e2.final.20261029.B.CI08": {
    "q": "A child hears electrically on the left and through amplified acoustic sound on the right. Which label is most specific?",
    "o": [
      {
        "t": "Unilateral CI use without contralateral amplification",
        "ok": false,
        "w": ""
      },
      {
        "t": "Bilateral cochlear implantation",
        "ok": false,
        "w": ""
      },
      {
        "t": "Unaided binaural hearing",
        "ok": false,
        "w": ""
      },
      {
        "t": "Bimodal hearing",
        "ok": true,
        "w": ""
      }
    ],
    "x": "Electrical CI input on one side and acoustic hearing-aid input on the other define bimodal hearing. Binaural is broader; bilateral implantation would supply electrical stimulation on both sides.",
    "s": [
      "ARL4-35"
    ]
  },
  "e2.final.20261029.B.CI09": {
    "q": "Which CI component belongs with the receiver in the implanted portion of the system?",
    "o": [
      {
        "t": "Battery",
        "ok": false,
        "w": ""
      },
      {
        "t": "Sound processor",
        "ok": false,
        "w": ""
      },
      {
        "t": "Electrode array",
        "ok": true,
        "w": ""
      },
      {
        "t": "Transmitter",
        "ok": false,
        "w": ""
      }
    ],
    "x": "The receiver and electrode array are implanted. The battery, processor and transmitter are external components.",
    "s": [
      "ARL4-7"
    ]
  },
  "e2.final.20261029.B.CI10": {
    "q": "Which structure is directly stimulated by the CI electrode array?",
    "o": [
      {
        "t": "The tympanic membrane",
        "ok": false,
        "w": ""
      },
      {
        "t": "Auditory nerve fibers",
        "ok": true,
        "w": ""
      },
      {
        "t": "The external microphone",
        "ok": false,
        "w": ""
      }
    ],
    "x": "The array delivers electrical stimulation to auditory nerve fibers. The microphone detects acoustic input earlier; the tympanic membrane is not the target of array stimulation.",
    "s": [
      "ARL4-10"
    ]
  },
  "e2.final.20261029.B.CI11": {
    "q": "A CI receiver has converted incoming code to electrical pulses. Which event is next?",
    "o": [
      {
        "t": "The processor encodes microphone input",
        "ok": false,
        "w": ""
      },
      {
        "t": "The transmitter sends code through the skin",
        "ok": false,
        "w": ""
      },
      {
        "t": "The microphone detects the acoustic signal",
        "ok": false,
        "w": ""
      },
      {
        "t": "The electrode array stimulates auditory nerve fibers",
        "ok": true,
        "w": ""
      }
    ],
    "x": "The receiver supplies pulses to the electrode array, which stimulates nerve fibers. The microphone, processor and transmitter have already completed their earlier parts of the pathway.",
    "s": [
      "ARL4-10"
    ]
  },
  "e2.final.20261029.B.CI12": {
    "q": "Who is responsible for programming a cochlear implant as the patient’s needs change over time?",
    "o": [
      {
        "t": "The audiologist",
        "ok": true,
        "w": ""
      },
      {
        "t": "The surgeon",
        "ok": false,
        "w": ""
      },
      {
        "t": "The speech-language pathologist",
        "ok": false,
        "w": ""
      }
    ],
    "x": "The audiologist assesses hearing and programs the CI across the lifespan. The surgeon manages implantation and medical concerns; the SLP supports speech and language development.",
    "s": [
      "ARL4-26"
    ]
  },
  "e2.final.20261029.B.CI13": {
    "q": "At which stage are progressive CI maps first introduced and the accessory kit reviewed?",
    "o": [
      {
        "t": "Preoperative medical evaluation",
        "ok": false,
        "w": ""
      },
      {
        "t": "Initial device activation",
        "ok": true,
        "w": ""
      },
      {
        "t": "Unaided threshold assessment",
        "ok": false,
        "w": ""
      },
      {
        "t": "Preoperative language assessment",
        "ok": false,
        "w": ""
      }
    ],
    "x": "Initial activation includes progressive maps, accessory review and support for the patient’s first reactions to CI sound. It ordinarily takes place about 2–4 weeks after surgery; evaluation of candidacy precedes implantation.",
    "s": [
      "ARL4-31"
    ]
  },
  "e2.final.20261102.C.CI01": {
    "q": "Which age-specific CI candidacy criterion places the clearest emphasis on progress in simple auditory skills rather than an open-set word score?",
    "o": [
      {
        "t": "The young-child category below 2 years",
        "ok": true,
        "w": ""
      },
      {
        "t": "The older-child category from 2 to 18 years",
        "ok": false,
        "w": ""
      },
      {
        "t": "The adult category",
        "ok": false,
        "w": ""
      }
    ],
    "x": "For young children, lack of development in simple auditory skills with appropriate hearing aids is central. Older children have an explicit best-aided open-set word-recognition criterion; very young children may not be able to perform speech-perception testing.",
    "s": [
      "ARL4-13",
      "ARL4-14",
      "ARL4-20"
    ]
  },
  "e2.final.20261102.C.CI02": {
    "q": "Which change would make a best-aided, closed-set word task suitable for comparison with the older-child CI open-set criterion?",
    "o": [
      {
        "t": "Remove the supplied response alternatives",
        "ok": true,
        "w": ""
      },
      {
        "t": "Remove the child’s hearing aids",
        "ok": false,
        "w": ""
      },
      {
        "t": "Replace words with sentences",
        "ok": false,
        "w": ""
      },
      {
        "t": "Report the raw correct count without a percentage",
        "ok": false,
        "w": ""
      }
    ],
    "x": "An open-set task does not supply a limited response set. The measure must remain best aided and word based. Unaided presentation, sentence substitution or a raw count does not meet those requirements.",
    "s": [
      "ARL4-14",
      "ARL4-23"
    ]
  },
  "e2.final.20261102.C.CI03": {
    "q": "An adult audiogram that fits CI criteria is sufficient to establish candidacy without considering aided speech recognition.",
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
    "x": "Adult candidacy also includes aided speech-recognition performance and medical, motivational and expectation factors. A matching audiogram is one part of the evaluation.",
    "s": [
      "ARL4-12"
    ]
  },
  "e2.final.20261102.C.CI04": {
    "q": "Which statement about the receptive-vocabulary finding in children implanted before 12 months is accurate?",
    "o": [
      {
        "t": "Every child reached the same vocabulary level",
        "ok": false,
        "w": ""
      },
      {
        "t": "The finding concerned vocabulary understanding by school entry",
        "ok": true,
        "w": ""
      },
      {
        "t": "The finding established normal unaided hearing by school entry",
        "ok": false,
        "w": ""
      }
    ],
    "x": "The reported outcome was receptive vocabulary within the normal range by school entry for up to 80% of children implanted before 12 months. Receptive vocabulary is understanding words; the finding is neither universal nor a report of normal unaided hearing.",
    "s": [
      "ARL4-5",
      "ARL4-2"
    ]
  },
  "e2.final.20261102.C.CI05": {
    "q": "Better sound localization with two hearing aids means the listener is better at identifying the direction of a sound.",
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
    "x": "Localization concerns the source’s direction or location. It is distinct from recognizing the spoken words or remembering them. Two hearing aids can improve localization, although benefit varies.",
    "s": [
      "ARMOCKBOOK-45"
    ]
  },
  "e2.final.20261102.C.CI06": {
    "q": "A child with one CI begins using a hearing aid in the opposite ear. Which added mode of stimulation makes the new arrangement bimodal?",
    "o": [
      {
        "t": "A second electrical input",
        "ok": false,
        "w": ""
      },
      {
        "t": "An amplified acoustic input",
        "ok": true,
        "w": ""
      },
      {
        "t": "A visual speech input",
        "ok": false,
        "w": ""
      }
    ],
    "x": "The contralateral hearing aid supplies amplified acoustic input alongside the CI’s electrical stimulation. A second CI would instead create a bilateral implant arrangement.",
    "s": [
      "ARL4-35",
      "ARL4-10"
    ]
  },
  "e2.final.20261102.C.CI07": {
    "q": "Which CI component is external and sends the coded signal through the skin to the internal receiver?",
    "o": [
      {
        "t": "Electrode array",
        "ok": false,
        "w": ""
      },
      {
        "t": "Microphone",
        "ok": false,
        "w": ""
      },
      {
        "t": "Sound processor",
        "ok": false,
        "w": ""
      },
      {
        "t": "Transmitting coil",
        "ok": true,
        "w": ""
      }
    ],
    "x": "The transmitting coil is external and sends the processor’s code through the skin. The microphone detects sound, the processor encodes it, and the implanted electrode array delivers electrical stimulation.",
    "s": [
      "ARL4-7",
      "ARL4-10"
    ]
  },
  "e2.final.20261102.C.CI08": {
    "q": "Which pair of CI components is on opposite sides of the skin during transmission of the coded signal?",
    "o": [
      {
        "t": "Processor and microphone",
        "ok": false,
        "w": ""
      },
      {
        "t": "Transmitter and receiver",
        "ok": true,
        "w": ""
      },
      {
        "t": "Receiver and electrode array",
        "ok": false,
        "w": ""
      }
    ],
    "x": "The external transmitter sends code through the skin to the internal receiver. The processor and microphone are both external; the receiver and array are both internal.",
    "s": [
      "ARL4-7",
      "ARL4-10"
    ]
  },
  "e2.final.20261102.C.CI09": {
    "q": "Which transition in the CI pathway changes digital code into the pulses delivered to the electrode array?",
    "o": [
      {
        "t": "Microphone → processor",
        "ok": false,
        "w": ""
      },
      {
        "t": "Processor → transmitter",
        "ok": false,
        "w": ""
      },
      {
        "t": "Transmitter → skin",
        "ok": false,
        "w": ""
      },
      {
        "t": "Receiver → electrode array",
        "ok": true,
        "w": ""
      }
    ],
    "x": "The internal receiver converts the received digital signal into electrical pulses and supplies them to the array. The earlier external stages detect sound, encode it and transmit the code.",
    "s": [
      "ARL4-10"
    ]
  },
  "e2.final.20261102.C.CI10": {
    "q": "Two children being evaluated for CIs are the same age but have different language abilities. Which principle should guide test selection?",
    "o": [
      {
        "t": "Use the same speech test because chronological age matches",
        "ok": false,
        "w": ""
      },
      {
        "t": "Select measures suited to both age and language skills",
        "ok": true,
        "w": ""
      },
      {
        "t": "Use an adult sentence test for the child with fewer words",
        "ok": false,
        "w": ""
      },
      {
        "t": "Use unaided testing only for both children",
        "ok": false,
        "w": ""
      }
    ],
    "x": "Pediatric measures depend on age and language skills. Equal chronological age does not ensure that the same speech-perception response demands are appropriate. The evaluation can include both aided and unaided measures as suitable.",
    "s": [
      "ARL4-19",
      "ARL4-18"
    ]
  },
  "e2.final.20261102.C.CI11": {
    "q": "A child’s CI map provides comfortable sound, but speech and language skills still need development. Which team member has the most direct habilitation role for those skills?",
    "o": [
      {
        "t": "The speech-language pathologist",
        "ok": true,
        "w": ""
      },
      {
        "t": "The implant surgeon",
        "ok": false,
        "w": ""
      },
      {
        "t": "The imaging specialist",
        "ok": false,
        "w": ""
      }
    ],
    "x": "The SLP supports development of speech and language skills. The audiologist manages hearing assessment and programming, while the surgeon and imaging team address medical and anatomical needs.",
    "s": [
      "ARL4-26"
    ]
  },
  "e2.final.20261102.C.CI12": {
    "q": "Which appointment ordinarily occurs about 2–4 weeks after cochlear implantation?",
    "o": [
      {
        "t": "The original candidacy evaluation",
        "ok": false,
        "w": ""
      },
      {
        "t": "Initial device activation",
        "ok": true,
        "w": ""
      },
      {
        "t": "The annual follow-up visit",
        "ok": false,
        "w": ""
      }
    ],
    "x": "Initial activation ordinarily occurs about 2–4 weeks after surgery. Candidacy evaluation precedes implantation, and annual follow-up is part of later care.",
    "s": [
      "ARL4-31",
      "ARL4-33",
      "ARL4-11"
    ]
  },
  "e2.final.20261102.C.CI13": {
    "q": "Which finding most directly evaluates speech performance after a CI map is adjusted?",
    "o": [
      {
        "t": "Unaided hearing thresholds",
        "ok": false,
        "w": ""
      },
      {
        "t": "Middle-ear pressure measurements",
        "ok": false,
        "w": ""
      },
      {
        "t": "Surgical wound-healing observations",
        "ok": false,
        "w": ""
      },
      {
        "t": "Aided speech-discrimination scores",
        "ok": true,
        "w": ""
      }
    ],
    "x": "Aided speech-discrimination testing in the soundfield measures speech performance with the CI. Map adjustments address comfort, sound quality and speech understanding; unaided thresholds, middle-ear pressure and wound healing assess other aspects of hearing or recovery.",
    "s": [
      "ARL4-33"
    ]
  },
  "e2.final.20261029.A.NF01": {
    "q": "Neuroplasticity refers most directly to experience-related changes in which feature?",
    "o": [
      {
        "t": "Neural organization",
        "ok": true,
        "w": ""
      },
      {
        "t": "Hearing-aid output",
        "ok": false,
        "w": ""
      },
      {
        "t": "Ear-canal pressure",
        "ok": false,
        "w": ""
      }
    ],
    "x": "Neuroplasticity is the brain’s ability to grow, develop and alter its structure in response to stimulation. Device output and ear-canal acoustics can affect input but are not themselves changes in neural organization.",
    "s": [
      "ARL5-14"
    ]
  },
  "e2.final.20261029.A.NF02": {
    "q": "A 6-year-old with both auditory and language skills at a 3-year level demonstrates developmental synchrony because the two skill levels match each other.",
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
    "x": "Synchrony requires development at biologically age-appropriate times. Matching two delayed skill levels does not make either one age appropriate; the established delay calls for a remedial framework.",
    "s": [
      "ARL5-17"
    ]
  },
  "e2.final.20261029.A.NF03": {
    "q": "Which cortical area is being reassigned when visual and tactile input take over territory normally used for hearing?",
    "o": [
      {
        "t": "Primary motor cortex",
        "ok": false,
        "w": ""
      },
      {
        "t": "Primary auditory cortex",
        "ok": true,
        "w": ""
      },
      {
        "t": "Primary visual cortex",
        "ok": false,
        "w": ""
      },
      {
        "t": "Somatosensory cortex",
        "ok": false,
        "w": ""
      }
    ],
    "x": "The example concerns the primary auditory cortex in Heschl’s gyrus being recruited by vision and touch when auditory stimulation is absent. The reassigned territory is auditory, even though its new input comes from other senses.",
    "s": [
      "ARL5-16"
    ]
  },
  "e2.final.20261029.A.NF04": {
    "q": "Approximately how much listening experience usually precedes the first single words?",
    "o": [
      {
        "t": "1–2 months",
        "ok": false,
        "w": ""
      },
      {
        "t": "10–12 months",
        "ok": true,
        "w": ""
      },
      {
        "t": "20–24 months",
        "ok": false,
        "w": ""
      }
    ],
    "x": "The listening-age model describes roughly 10–12 months of listening before single words and about another 10–12 months before word combinations. A child with hearing loss needs useful auditory experience, not simply elapsed time since birth.",
    "s": [
      "ARL5-23"
    ]
  },
  "e2.final.20261029.A.NF05": {
    "q": "Before an acoustic signal can be sent to the brain as auditory information, it must be changed into what?",
    "o": [
      {
        "t": "A written word representation",
        "ok": false,
        "w": ""
      },
      {
        "t": "An auditory attention strategy",
        "ok": false,
        "w": ""
      },
      {
        "t": "A pattern of neural responses",
        "ok": true,
        "w": ""
      },
      {
        "t": "A motor response from the listener",
        "ok": false,
        "w": ""
      }
    ],
    "x": "The auditory-function sequence is to pick up the signal, change it into neural responses, send those responses to appropriate brain areas, then process the information meaningfully and respond. Attention and behavior do not replace that neural conversion.",
    "s": [
      "ARL5-6",
      "ARL5-4"
    ]
  },
  "e2.final.20261029.A.NF06": {
    "q": "The infant’s daily language environment helps determine which phonetic distinctions are strengthened during the first year.",
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
    "x": "Experience with the languages heard daily tunes the phonetic categories needed for those languages and attenuates distinctions that are not needed. This is a selective process rather than equal strengthening of all possible contrasts.",
    "s": [
      "ARL5-10"
    ]
  },
  "e2.final.20261029.A.NF07": {
    "q": "Which behavior provides the clearest evidence that a child is actively listening rather than simply detecting sound?",
    "o": [
      {
        "t": "Startling when a door slams",
        "ok": false,
        "w": ""
      },
      {
        "t": "Monitoring a spoken message for a requested word",
        "ok": true,
        "w": ""
      },
      {
        "t": "Turning when an unexpected tone begins",
        "ok": false,
        "w": ""
      }
    ],
    "x": "Monitoring the message for a target requires conscious attention. A startle or turn may establish sound awareness without showing sustained attention to the message.",
    "s": [
      "ARL5-18"
    ]
  },
  "e2.final.20261029.A.NF08": {
    "q": "A listening activity can be well designed yet ineffective if the child does not have usable access to its speech signal.",
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
    "x": "Access to sound is the foundation of auditory learning. Appropriate fitting, programming and ongoing audiologic management establish input that a listening activity can use; task design cannot supply a signal that is unavailable.",
    "s": [
      "ARL5-5",
      "ARL5-22"
    ]
  },
  "e2.final.20261029.A.NF09": {
    "q": "Which activity checks receptive language more directly than expressive language in a 17-month-old?",
    "o": [
      {
        "t": "Asking the child to name a familiar toy",
        "ok": false,
        "w": ""
      },
      {
        "t": "Asking the child to select a toy when it is named",
        "ok": true,
        "w": ""
      },
      {
        "t": "Counting the words the child says during play",
        "ok": false,
        "w": ""
      }
    ],
    "x": "Selecting the named toy demonstrates understanding of the spoken label. Naming objects and counting spoken words measure expression. The 16–18-month scales distinguish word understanding from meaningful word production.",
    "s": [
      "ARSCALES-3",
      "ARSCALES-9"
    ]
  },
  "e2.final.20261029.A.NF10": {
    "q": "A vocabulary of about 1,200 words falls within which approximate age range?",
    "o": [
      {
        "t": "18 months",
        "ok": false,
        "w": ""
      },
      {
        "t": "3 years",
        "ok": false,
        "w": ""
      },
      {
        "t": "3–4 years",
        "ok": false,
        "w": ""
      },
      {
        "t": "4–5 years",
        "ok": true,
        "w": ""
      }
    ],
    "x": "The course chart places 1,000–1,600 words at 4–5 years, so 1,200 lies within that range. Its counts are not explicitly labeled receptive or expressive and should not be treated as individual diagnostic cutoffs.",
    "s": [
      "ARL5-39"
    ]
  },
  "e2.final.20261029.A.NF11": {
    "q": "A 2-month-old briefly stills when a sound begins. What does this response most directly demonstrate?",
    "o": [
      {
        "t": "Auditory awareness",
        "ok": true,
        "w": ""
      },
      {
        "t": "Understanding of the sound’s name",
        "ok": false,
        "w": ""
      },
      {
        "t": "Discrimination of familiar phrases",
        "ok": false,
        "w": ""
      }
    ],
    "x": "Stilling in response to sound is one of the early awareness responses in the 0–3-month band. It does not by itself establish word knowledge or phrase discrimination.",
    "s": [
      "ARSCALES-4"
    ]
  },
  "e2.final.20261029.A.NF12": {
    "q": "Occasional response to one’s own name begins to appear with emerging sound meaning in which age band?",
    "o": [
      {
        "t": "0–3 months",
        "ok": false,
        "w": ""
      },
      {
        "t": "4–6 months",
        "ok": true,
        "w": ""
      },
      {
        "t": "16–18 months",
        "ok": false,
        "w": ""
      }
    ],
    "x": "The 4–6-month band includes beginning to associate meaning with sound and occasionally responding to one’s own name. The word “occasionally” matters; this is an emerging ability, not a demand for a response on every presentation.",
    "s": [
      "ARSCALES-5"
    ]
  },
  "e2.final.20261029.A.NF13": {
    "q": "Which pair reflects auditory development around 16–18 months?",
    "o": [
      {
        "t": "Recognizing a caregiver’s voice and startling to loud sounds",
        "ok": false,
        "w": ""
      },
      {
        "t": "Beginning to respond to one’s name and listening to one’s own voice",
        "ok": false,
        "w": ""
      },
      {
        "t": "Associating heard words with objects and imitating heard words",
        "ok": true,
        "w": ""
      },
      {
        "t": "Making circular scribbles and placing pegs in a board",
        "ok": false,
        "w": ""
      }
    ],
    "x": "The 16–18-month Audition column includes word-object associations and imitation of words heard. Caregiver recognition and startle are early awareness responses; name response and listening to one’s own voice emerge around 4–6 months. Scribbling and peg placement are cognitive tasks.",
    "s": [
      "ARSCALES-9",
      "ARSCALES-4",
      "ARSCALES-5"
    ]
  },
  "e2.final.20261029.A.NF14": {
    "q": "Which response can occur in both the 0–3-month and 4–6-month bands and therefore cannot, by itself, distinguish them?",
    "o": [
      {
        "t": "Understanding a longer spoken phrase",
        "ok": false,
        "w": ""
      },
      {
        "t": "Turning the head toward sound",
        "ok": true,
        "w": ""
      },
      {
        "t": "Imitating a familiar spoken word",
        "ok": false,
        "w": ""
      }
    ],
    "x": "Head turning is present in early sound responses and also in later localization. Additional behavior, such as emerging sound meaning or response to vocal inflection, is needed to distinguish the bands more specifically.",
    "s": [
      "ARSCALES-4",
      "ARSCALES-5"
    ]
  },
  "e2.final.20261029.B.NF01": {
    "q": "At approximately what age does the period of greatest early auditory neuroplasticity end?",
    "o": [
      {
        "t": "18 months",
        "ok": false,
        "w": ""
      },
      {
        "t": "30 months",
        "ok": false,
        "w": ""
      },
      {
        "t": "42 months",
        "ok": true,
        "w": ""
      },
      {
        "t": "60 months",
        "ok": false,
        "w": ""
      }
    ],
    "x": "The period emphasized for greatest early auditory neuroplasticity is approximately the first 3½ years, or 42 months. This is a period of especially strong early responsiveness, not an age after which learning becomes impossible.",
    "s": [
      "ARL5-14",
      "ARL5-15"
    ]
  },
  "e2.final.20261029.B.NF02": {
    "q": "Why does preventing an early auditory delay help keep intervention within a developmental rather than remedial framework?",
    "o": [
      {
        "t": "It supports skills emerging at biologically appropriate times",
        "ok": true,
        "w": ""
      },
      {
        "t": "It makes the child’s chronological age less relevant",
        "ok": false,
        "w": ""
      },
      {
        "t": "It lets language develop before auditory access is available",
        "ok": false,
        "w": ""
      }
    ],
    "x": "Developmental synchrony means skills emerge at biologically age-appropriate times. When auditory delay contributes to language delay, intervention must address an existing deficit through a remedial framework.",
    "s": [
      "ARL5-17"
    ]
  },
  "e2.final.20261029.B.NF03": {
    "q": "Which condition can lead auditory cortical territory to be used by other sensory systems?",
    "o": [
      {
        "t": "Repeated practice of an audible speech contrast",
        "ok": false,
        "w": ""
      },
      {
        "t": "Increasing attention to an audible message",
        "ok": false,
        "w": ""
      },
      {
        "t": "Lack of auditory stimulation",
        "ok": true,
        "w": ""
      }
    ],
    "x": "When auditory stimulation is absent, auditory cortical territory may be recruited by visual and tactile input. Repeated auditory practice and attention are changes within audition, not the stated deprivation condition.",
    "s": [
      "ARL5-16"
    ]
  },
  "e2.final.20261029.B.NF04": {
    "q": "A 16-month-old has a listening age of 10 months after continuous effective technology use. At what chronological age did that full-time access begin?",
    "o": [
      {
        "t": "6 months",
        "ok": true,
        "w": ""
      },
      {
        "t": "10 months",
        "ok": false,
        "w": ""
      },
      {
        "t": "16 months",
        "ok": false,
        "w": ""
      },
      {
        "t": "26 months",
        "ok": false,
        "w": ""
      }
    ],
    "x": "Listening age counts time since consistent useful access began. Sixteen minus ten equals six months. The calculation works because continuous access is explicitly stated.",
    "s": [
      "ARL5-23"
    ]
  },
  "e2.final.20261029.B.NF05": {
    "q": "When the brain uses sound meaningfully, auditory neural activity may be integrated with what?",
    "o": [
      {
        "t": "Only the sound processor’s digital code",
        "ok": false,
        "w": ""
      },
      {
        "t": "Information from other sensory systems",
        "ok": true,
        "w": ""
      },
      {
        "t": "Only the movement of the eardrum",
        "ok": false,
        "w": ""
      }
    ],
    "x": "Auditory neural patterns are integrated with other sensory input. That integration can support alerting, movement, music and communication; meaningful auditory function is broader than receiving a signal at the ear.",
    "s": [
      "ARL5-4"
    ]
  },
  "e2.final.20261029.B.NF06": {
    "q": "In typical development, foundational pathways for vision, hearing and language are developing during the first year of life.",
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
    "x": "The first year is a foundational period for these pathways. Early auditory access matters while that development is occurring; the statement does not imply that all later development has ended.",
    "s": [
      "ARL5-11",
      "ARL5-12"
    ]
  },
  "e2.final.20261029.B.NF07": {
    "q": "A child can hear and understand a familiar direction but misses it while absorbed in a toy. Which change most directly addresses the stated barrier?",
    "o": [
      {
        "t": "Increasing the device’s prescribed output",
        "ok": false,
        "w": ""
      },
      {
        "t": "Repeating the hearing-loss diagnosis",
        "ok": false,
        "w": ""
      },
      {
        "t": "Using a less familiar vocabulary word",
        "ok": false,
        "w": ""
      },
      {
        "t": "Getting the child’s attention before speaking",
        "ok": true,
        "w": ""
      }
    ],
    "x": "Audibility and understanding of this direction are already established. The stated barrier is attention, so obtaining attention before speaking directly supports listening. More output or a vocabulary change does not address that identified problem.",
    "s": [
      "ARL5-18"
    ]
  },
  "e2.final.20261029.B.NF08": {
    "q": "Once useful auditory access is established, parents can help develop listening by incorporating spoken interaction into daily activities.",
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
    "x": "After fitting and programming establish access, coaching helps families create listening environments and integrate spoken language into everyday life. Access and meaningful experience are complementary parts of learning.",
    "s": [
      "ARL5-22"
    ]
  },
  "e2.final.20261029.B.NF09": {
    "q": "A 17-month-old understands 55 words but uses seven meaningful spoken words. Which vocabulary count is below the listed 16–18-month benchmark?",
    "o": [
      {
        "t": "Receptive vocabulary only",
        "ok": false,
        "w": ""
      },
      {
        "t": "Expressive vocabulary only",
        "ok": true,
        "w": ""
      },
      {
        "t": "Both receptive and expressive vocabulary",
        "ok": false,
        "w": ""
      },
      {
        "t": "Neither vocabulary count",
        "ok": false,
        "w": ""
      }
    ],
    "x": "The Integrated Scales list 50 or more understood words and 10 or more meaningful spoken words at 16–18 months. Understanding 55 meets the receptive count; seven spoken words is below the expressive count. These guide expectations and do not establish a diagnosis by themselves.",
    "s": [
      "ARSCALES-9",
      "ARSCALES-3"
    ]
  },
  "e2.final.20261029.B.NF10": {
    "q": "Which approximate vocabulary range is associated with the third birthday?",
    "o": [
      {
        "t": "300–400 words",
        "ok": true,
        "w": ""
      },
      {
        "t": "600–1,000 words",
        "ok": false,
        "w": ""
      },
      {
        "t": "1,000–1,600 words",
        "ok": false,
        "w": ""
      }
    ],
    "x": "The vocabulary chart gives approximately 300–400 words at 3 years, followed by 600–1,000 at 3–4 years and 1,000–1,600 at 4–5 years. These counts are not explicitly labeled receptive or expressive and are not individual diagnostic cutoffs.",
    "s": [
      "ARL5-39"
    ]
  },
  "e2.final.20261029.B.NF11": {
    "q": "Which expectation would be too advanced for the 0–3-month auditory stage?",
    "o": [
      {
        "t": "Responding to a loud sound",
        "ok": false,
        "w": ""
      },
      {
        "t": "Recognizing a familiar caregiver’s voice",
        "ok": false,
        "w": ""
      },
      {
        "t": "Stilling when a sound occurs",
        "ok": false,
        "w": ""
      },
      {
        "t": "Discriminating among familiar spoken phrases",
        "ok": true,
        "w": ""
      }
    ],
    "x": "Phrase discrimination appears in a later listening band, including 16–18 months. Early auditory development centers on awareness and responses to sound, including recognition of a familiar voice.",
    "s": [
      "ARSCALES-4",
      "ARSCALES-9"
    ]
  },
  "e2.final.20261029.B.NF12": {
    "q": "A 5-month-old begins attending to their own vocal sounds. Which emerging skill is being observed?",
    "o": [
      {
        "t": "Reading the speaker’s lip movements",
        "ok": false,
        "w": ""
      },
      {
        "t": "Listening to one’s own voice",
        "ok": true,
        "w": ""
      },
      {
        "t": "Understanding a two-step instruction",
        "ok": false,
        "w": ""
      },
      {
        "t": "Understanding a longer sentence",
        "ok": false,
        "w": ""
      }
    ],
    "x": "Listening to one’s own voice is included in the 4–6-month audition band. It is not equivalent to understanding longer instructions or relying on visual speech information.",
    "s": [
      "ARSCALES-5"
    ]
  },
  "e2.final.20261029.B.NF13": {
    "q": "Which response most directly demonstrates imitation of a heard word at 16–18 months?",
    "o": [
      {
        "t": "Looking at a shoe after hearing “shoe”",
        "ok": false,
        "w": ""
      },
      {
        "t": "Turning toward the person who says “shoe”",
        "ok": false,
        "w": ""
      },
      {
        "t": "Saying an approximation of “shoe” after hearing it",
        "ok": true,
        "w": ""
      }
    ],
    "x": "Repeating or approximating the heard word demonstrates imitation. Looking at the named object shows word-object association, while turning toward the talker can reflect orientation. The later audition band includes imitation of words heard.",
    "s": [
      "ARSCALES-9"
    ]
  },
  "e2.final.20261029.B.NF14": {
    "q": "Which response shows progression from early sound awareness toward attaching meaning to sound?",
    "o": [
      {
        "t": "Occasionally responding to one’s own name",
        "ok": true,
        "w": ""
      },
      {
        "t": "Startling when a sudden noise occurs",
        "ok": false,
        "w": ""
      },
      {
        "t": "Stilling when an unfamiliar sound begins",
        "ok": false,
        "w": ""
      },
      {
        "t": "Smiling when a sound starts",
        "ok": false,
        "w": ""
      }
    ],
    "x": "Occasional name response is associated with emerging sound meaning around 4–6 months. Startling, stilling and smiling in response to sound are included among early awareness responses in the 0–3-month band.",
    "s": [
      "ARSCALES-4",
      "ARSCALES-5"
    ]
  },
  "e2.final.20261102.C.NF01": {
    "q": "Which experience supplies the stimulation that can shape developing auditory pathways?",
    "o": [
      {
        "t": "The passage of chronological time by itself",
        "ok": false,
        "w": ""
      },
      {
        "t": "Repeated access to meaningful sound",
        "ok": true,
        "w": ""
      },
      {
        "t": "Implant surgery before the device is activated",
        "ok": false,
        "w": ""
      }
    ],
    "x": "Neuroplasticity is a response to stimulation. Repeated useful auditory experience supplies that stimulation; elapsed time or completed surgery alone does not establish auditory input.",
    "s": [
      "ARL5-14",
      "ARL5-15",
      "ARL5-5"
    ]
  },
  "e2.final.20261102.C.NF02": {
    "q": "A child acquires auditory skills in the usual sequence but several years later than expected. Does the usual sequence establish developmental synchrony?",
    "o": [
      {
        "t": "Yes, because the order of skills is typical",
        "ok": false,
        "w": ""
      },
      {
        "t": "Yes, because auditory skills are still improving",
        "ok": false,
        "w": ""
      },
      {
        "t": "No, because age-appropriate timing is also required",
        "ok": true,
        "w": ""
      }
    ],
    "x": "The order of acquisition and its timing are different features. Synchrony requires skills to develop at biologically age-appropriate times; a typical order achieved years late still represents delay.",
    "s": [
      "ARL5-17"
    ]
  },
  "e2.final.20261102.C.NF03": {
    "q": "Lack of auditory stimulation can allow other sensory systems to recruit auditory cortical tissue.",
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
    "x": "The cross-modal example describes auditory cortical territory being used by vision and touch when auditory stimulation is absent. It concerns altered sensory use of brain tissue, not restored peripheral hearing.",
    "s": [
      "ARL5-16"
    ]
  },
  "e2.final.20261102.C.NF04": {
    "q": "Two children have the same listening age but different chronological ages. Which feature do they share under the listening-age definition?",
    "o": [
      {
        "t": "The same age at first device fitting",
        "ok": false,
        "w": ""
      },
      {
        "t": "The same number of meaningful spoken words",
        "ok": false,
        "w": ""
      },
      {
        "t": "The same hearing thresholds without devices",
        "ok": false,
        "w": ""
      },
      {
        "t": "The same elapsed time since full-time useful access began",
        "ok": true,
        "w": ""
      }
    ],
    "x": "Listening age counts from the beginning of effective technology use throughout waking hours. Equal listening ages do not require equal chronological ages, fitting dates, hearing thresholds or language outcomes.",
    "s": [
      "ARL5-23"
    ]
  },
  "e2.final.20261102.C.NF05": {
    "q": "A child hears an alarm and moves away from danger without understanding any spoken words. Can this demonstrate meaningful auditory function?",
    "o": [
      {
        "t": "Yes, because sound can guide an appropriate action",
        "ok": true,
        "w": ""
      },
      {
        "t": "No, because meaningful auditory function requires spoken language",
        "ok": false,
        "w": ""
      },
      {
        "t": "No, because a movement response is not auditory",
        "ok": false,
        "w": ""
      }
    ],
    "x": "Meaningful use of sound includes alerting and an appropriate movement response, as well as more complex uses such as music and communication. Spoken-word understanding is not required for every meaningful auditory response.",
    "s": [
      "ARL5-4"
    ]
  },
  "e2.final.20261102.C.NF06": {
    "q": "A newborn with congenital hearing loss may already have missed some auditory experience before birth.",
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
    "x": "Typical auditory experience begins in utero. Congenital hearing loss can therefore limit input before birth as well as afterward, adding to the rationale for early access. This statement does not calculate an individual fetus’s amount of hearing.",
    "s": [
      "ARL5-8"
    ]
  },
  "e2.final.20261102.C.NF07": {
    "q": "Which instruction directly asks a child to attend to the content of an audible message?",
    "o": [
      {
        "t": "Turn your hearing aid on",
        "ok": false,
        "w": ""
      },
      {
        "t": "Move closer to the speaker",
        "ok": false,
        "w": ""
      },
      {
        "t": "Listen for the word “dog”",
        "ok": true,
        "w": ""
      },
      {
        "t": "Close the door to the hallway",
        "ok": false,
        "w": ""
      }
    ],
    "x": "Listening for a target word requires conscious attention to the message. Turning on the aid, moving closer and reducing room noise support access or listening conditions but are not themselves instructions to attend to message content.",
    "s": [
      "ARL5-18",
      "ARL5-22"
    ]
  },
  "e2.final.20261102.C.NF08": {
    "q": "After appropriate device fitting establishes access, which family plan best supports continued listening development?",
    "o": [
      {
        "t": "Use spoken interaction during meals, play and other daily routines",
        "ok": true,
        "w": ""
      },
      {
        "t": "Reserve listening activities for scheduled clinic appointments",
        "ok": false,
        "w": ""
      },
      {
        "t": "Wait for clear speech before adding spoken interaction at home",
        "ok": false,
        "w": ""
      }
    ],
    "x": "Family coaching should help integrate listening and spoken language throughout daily activities. Restricting practice to clinic or waiting for clear speech limits opportunities to build experience from the access already established.",
    "s": [
      "ARL5-22",
      "ARL5-13"
    ]
  },
  "e2.final.20261102.C.NF09": {
    "q": "A baby waves when asked to say goodbye before being able to say “bye-bye.” Which relationship does this illustrate?",
    "o": [
      {
        "t": "Receptive language before expressive language",
        "ok": true,
        "w": ""
      },
      {
        "t": "Expressive language before receptive language",
        "ok": false,
        "w": ""
      },
      {
        "t": "Expressive vocabulary without receptive language",
        "ok": false,
        "w": ""
      }
    ],
    "x": "Following the spoken request demonstrates understanding before the corresponding word is produced. Receptive language generally precedes expressive language. A gesture can show understanding without requiring spoken output.",
    "s": [
      "ARSCALES-3"
    ]
  },
  "e2.final.20261102.C.NF10": {
    "q": "A 17-month-old’s record documents understanding of 50 words. Which additional finding addresses the expected expressive vocabulary benchmark?",
    "o": [
      {
        "t": "Understanding 10 familiar words",
        "ok": false,
        "w": ""
      },
      {
        "t": "Producing at least 10 meaningful words",
        "ok": true,
        "w": ""
      },
      {
        "t": "Understanding 250 familiar words",
        "ok": false,
        "w": ""
      },
      {
        "t": "Producing only nonspeech vocalizations",
        "ok": false,
        "w": ""
      }
    ],
    "x": "The 16–18-month scale separately lists understanding 50 or more words and producing 10 or more meaningful words. The existing receptive count cannot establish the expressive count; the benchmarks guide development rather than diagnose an individual child by themselves.",
    "s": [
      "ARSCALES-9"
    ]
  },
  "e2.final.20261102.C.NF11": {
    "q": "Which observation provides the clearest evidence of auditory awareness in a 2-month-old when the caregiver is out of sight?",
    "o": [
      {
        "t": "The baby becomes still when the caregiver speaks",
        "ok": true,
        "w": ""
      },
      {
        "t": "The baby follows a moving face with their eyes",
        "ok": false,
        "w": ""
      },
      {
        "t": "The baby watches a silent facial expression",
        "ok": false,
        "w": ""
      }
    ],
    "x": "Stilling when an unseen caregiver speaks links the response to sound without a visible face as the cue. Looking at a moving face or silent expression is visual behavior. Early auditory awareness can be expressed through stilling, turning, smiling or startling.",
    "s": [
      "ARSCALES-4"
    ]
  },
  "e2.final.20261102.C.NF12": {
    "q": "A 5-month-old occasionally responds to their name but does not yet understand familiar spoken phrases. Which description best fits this pattern?",
    "o": [
      {
        "t": "Mature sentence comprehension",
        "ok": false,
        "w": ""
      },
      {
        "t": "Mastery of expressive vocabulary",
        "ok": false,
        "w": ""
      },
      {
        "t": "Emerging meaning attached to sound",
        "ok": true,
        "w": ""
      },
      {
        "t": "Auditory memory for two-item directions",
        "ok": false,
        "w": ""
      }
    ],
    "x": "The 4–6-month band includes beginning to associate meaning with sound and occasional name response. More developed phrase and multi-item processing belongs to later stages; an emerging name response does not imply mature language comprehension.",
    "s": [
      "ARSCALES-5",
      "ARSCALES-9"
    ]
  },
  "e2.final.20261102.C.NF13": {
    "q": "An 18-month-old heads toward the sink after “wash hands” and toward the shoes after “get your shoes.” Which listening ability is most directly demonstrated?",
    "o": [
      {
        "t": "Awareness that a sound has started",
        "ok": false,
        "w": ""
      },
      {
        "t": "Distinguishing familiar spoken phrases",
        "ok": true,
        "w": ""
      },
      {
        "t": "Locating the source of a sound",
        "ok": false,
        "w": ""
      },
      {
        "t": "Recognizing the caregiver’s voice",
        "ok": false,
        "w": ""
      }
    ],
    "x": "Different appropriate responses to familiar phrases show that the child distinguishes their meanings. Awareness, sound localization or familiar-voice recognition alone would not explain the message-specific responses. The later audition band includes discrimination among more phrases.",
    "s": [
      "ARSCALES-9"
    ]
  },
  "e2.final.20261102.C.NF14": {
    "q": "Reaching a developmental milestone later than its listed age proves that the child will never acquire the skill.",
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
    "x": "The Integrated Scales describe average developmental stages and allow variation in when milestones are reached. Missing the listed timeframe does not establish that the skill will never develop; planning should address the individual child’s needs.",
    "s": [
      "ARSCALES-3"
    ]
  },
  "e2.final.20261029.A.SA01": {
    "q": "A listener detects speech on 90% of trials but distinguishes words correctly on 60%. Which result directly describes speech intelligibility?",
    "o": [
      {
        "t": "60% correct word distinctions",
        "ok": true,
        "w": ""
      },
      {
        "t": "90% speech-detection responses",
        "ok": false,
        "w": ""
      },
      {
        "t": "75% averaged detection and word score",
        "ok": false,
        "w": ""
      }
    ],
    "x": "The 60% word-distinction result addresses intelligibility. The 90% presence response addresses detection. Averaging two different response demands does not create a meaningful intelligibility score.",
    "s": [
      "ARL5-25",
      "ARTB4-118"
    ]
  },
  "e2.final.20261029.B.SA01": {
    "q": "With speaking effort unchanged, which adjustment most directly increases the speech level reaching a listener?",
    "o": [
      {
        "t": "Decrease the talker–listener distance",
        "ok": true,
        "w": ""
      },
      {
        "t": "Increase the fundamental frequency",
        "ok": false,
        "w": ""
      },
      {
        "t": "Lengthen each consonant",
        "ok": false,
        "w": ""
      },
      {
        "t": "Change the vowel formants",
        "ok": false,
        "w": ""
      }
    ],
    "x": "Reducing distance can increase the sound level reaching the listener. Fundamental frequency, sound duration and formant pattern are different acoustic parameters; none is a substitute for changing the level delivered at the listener’s position.",
    "s": [
      "ARTB4-113"
    ]
  },
  "e2.final.20261102.C.SA01": {
    "q": "Faint speech averages about 45 dB SPL and a shout about 85 dB SPL. What is the approximate level range between them?",
    "o": [
      {
        "t": "20 dB",
        "ok": false,
        "w": ""
      },
      {
        "t": "40 dB",
        "ok": true,
        "w": ""
      },
      {
        "t": "65 dB",
        "ok": false,
        "w": ""
      }
    ],
    "x": "85 − 45 = 40 dB. This is the difference between two SPL levels, not the average conversational level of approximately 65 dB SPL and not a conversion into dB HL.",
    "s": [
      "ARTB4-113"
    ]
  },
  "e2.final.20261029.A.SA02": {
    "q": "Removing speech energy below 1,000 Hz preserves the region containing most of speech’s acoustic power.",
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
    "x": "False. Much of speech’s acoustic energy is below 1,000 Hz, so removing that region removes much of the power. The amount of energy is distinct from the information needed for speech-sound distinctions.",
    "s": [
      "ARL5-29",
      "ARTB4-114"
    ]
  },
  "e2.final.20261029.B.SA02": {
    "q": "A recording contains speech energy at 100 Hz and 8,000 Hz. How do these frequencies relate to the overall speech spectrum?",
    "o": [
      {
        "t": "Both are within its approximate range",
        "ok": true,
        "w": ""
      },
      {
        "t": "Only 100 Hz is within its approximate range",
        "ok": false,
        "w": ""
      },
      {
        "t": "Only 8,000 Hz is within its approximate range",
        "ok": false,
        "w": ""
      }
    ],
    "x": "The overall speech spectrum extends approximately from 50 to 10,000 Hz. Both 100 Hz and 8,000 Hz fall within that range, even though much of the energy is concentrated below 1,000 Hz.",
    "s": [
      "ARL5-29",
      "ARTB4-114"
    ]
  },
  "e2.final.20261102.C.SA02": {
    "q": "Which approximate mean fundamental frequency is associated with an adult female voice?",
    "o": [
      {
        "t": "130 Hz",
        "ok": false,
        "w": ""
      },
      {
        "t": "260 Hz",
        "ok": true,
        "w": ""
      },
      {
        "t": "400 Hz",
        "ok": false,
        "w": ""
      }
    ],
    "x": "The cited approximate averages are 260 Hz for adult females, 130 Hz for adult males and 400 Hz for children. These are fundamental-frequency averages, not the entire frequency spectrum or an individual speaker’s fixed value.",
    "s": [
      "ARTB4-114"
    ]
  },
  "e2.final.20261029.A.SA03": {
    "q": "A vowel and a consonant are produced at similar levels. Which duration pattern is generally expected?",
    "o": [
      {
        "t": "The vowel lasts longer than the consonant",
        "ok": true,
        "w": ""
      },
      {
        "t": "The consonant lasts longer than the vowel",
        "ok": false,
        "w": ""
      },
      {
        "t": "Both sounds have the same duration",
        "ok": false,
        "w": ""
      }
    ],
    "x": "Vowels generally have longer durations than consonants. This is a general pattern rather than an absolute rule; the duration ranges can overlap, and individual productions vary.",
    "s": [
      "ARL5-30",
      "ARTB4-117"
    ]
  },
  "e2.final.20261029.B.SA03": {
    "q": "Which pair describes temporal features at the sound and connected-speech levels?",
    "o": [
      {
        "t": "Phoneme duration and speech rate",
        "ok": true,
        "w": ""
      },
      {
        "t": "Sound level and vocal intensity",
        "ok": false,
        "w": ""
      },
      {
        "t": "Fundamental frequency and pitch",
        "ok": false,
        "w": ""
      },
      {
        "t": "Formant frequency and resonance",
        "ok": false,
        "w": ""
      }
    ],
    "x": "Temporal features concern timing. Individual phoneme duration and the overall rate of connected speech both concern timing. Level/intensity concerns energy, while fundamental and formant frequencies concern frequency characteristics.",
    "s": [
      "ARTB4-117"
    ]
  },
  "e2.final.20261102.C.SA03": {
    "q": "A vowel and a consonant that each last 140 ms must have been produced incorrectly because their durations are equal.",
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
    "x": "The typical duration ranges overlap: approximately 130–360 ms for vowels and 20–150 ms for consonants. A 140-ms value falls in both ranges. Equal duration alone does not establish incorrect production.",
    "s": [
      "ARTB4-117",
      "ARL5-30"
    ]
  },
  "e2.final.20261029.A.SA04": {
    "q": "A vowel can contain acoustic clues about a consonant that immediately follows it.",
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
    "x": "Vowel formant transitions and vowel duration can carry information about the following consonant. Transitional cues arise from connected articulatory movement, so information about a sound is not confined to its isolated segment.",
    "s": [
      "ARTB4-118",
      "ARL5-31"
    ]
  },
  "e2.final.20261029.B.SA04": {
    "q": "Coarticulation alters frequency cues but leaves the intensity and duration of connected speech sounds unchanged.",
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
    "x": "Coarticulation can alter intensity, frequency and duration. Transitional information is therefore not limited to frequency changes; treating the other two dimensions as unchanged discards useful cues.",
    "s": [
      "ARTB4-118",
      "ARL5-31"
    ]
  },
  "e2.final.20261102.C.SA04": {
    "q": "Which observation best illustrates a transitional cue?",
    "o": [
      {
        "t": "A shifting vowel formant helps identify an adjacent consonant",
        "ok": true,
        "w": ""
      },
      {
        "t": "A steady vowel level signals that a voice is present",
        "ok": false,
        "w": ""
      },
      {
        "t": "A background fan masks a weak consonant sound",
        "ok": false,
        "w": ""
      }
    ],
    "x": "Movement in vowel formants can reflect the articulatory transition into a neighboring consonant and help identify it. The steady vowel example concerns detection; the fan example concerns masking by noise.",
    "s": [
      "ARTB4-118",
      "ARL5-31"
    ]
  },
  "e2.final.20261029.A.SA05": {
    "q": "An unrelated word list is changed into a coherent sentence without improving audibility. What has chiefly increased?",
    "o": [
      {
        "t": "Predictability of missing information",
        "ok": true,
        "w": ""
      },
      {
        "t": "Acoustic intensity of the speech",
        "ok": false,
        "w": ""
      },
      {
        "t": "Frequency range of the signal",
        "ok": false,
        "w": ""
      }
    ],
    "x": "A coherent sentence provides grammatical and meaningful relationships that restrict the possible missing information. That increase in redundancy does not require greater sound level or a broader acoustic spectrum.",
    "s": [
      "ARTB4-120",
      "ARTB4-121"
    ]
  },
  "e2.final.20261029.B.SA05": {
    "q": "A familiar-topic conversation is replaced by unrelated sentences with the same audibility. Which change is most likely?",
    "o": [
      {
        "t": "Reduced predictability of missing words",
        "ok": true,
        "w": ""
      },
      {
        "t": "Increased predictability of missing words",
        "ok": false,
        "w": ""
      },
      {
        "t": "Improved audibility of quiet sounds",
        "ok": false,
        "w": ""
      },
      {
        "t": "Reduced audibility of quiet sounds",
        "ok": false,
        "w": ""
      }
    ],
    "x": "Losing a familiar topic removes contextual information that could help predict missed words. The stem keeps audibility unchanged, so the predicted effect is on redundancy rather than detection of quiet sounds.",
    "s": [
      "ARTB4-120",
      "ARTB4-121"
    ]
  },
  "e2.final.20261102.C.SA05": {
    "q": "A listener supplies a missed word from familiar sentence patterns. Which factor provides that extra information?",
    "o": [
      {
        "t": "Knowledge of language patterns",
        "ok": true,
        "w": ""
      },
      {
        "t": "Intensity of the missed word",
        "ok": false,
        "w": ""
      },
      {
        "t": "Frequency of the missed word",
        "ok": false,
        "w": ""
      },
      {
        "t": "Duration of the missed word",
        "ok": false,
        "w": ""
      }
    ],
    "x": "The listener uses knowledge of language and its predictable relationships to fill a gap. This is linguistic redundancy; it does not establish a change in the intensity, frequency or duration of the missing acoustic signal.",
    "s": [
      "ARTB4-120",
      "ARTB4-121"
    ]
  },
  "e2.final.20261029.A.SA06": {
    "q": "Speech reaches a child at 60 dB SPL. Which competing-noise level gives the most favorable signal-to-noise ratio?",
    "o": [
      {
        "t": "40 dB SPL",
        "ok": true,
        "w": ""
      },
      {
        "t": "50 dB SPL",
        "ok": false,
        "w": ""
      },
      {
        "t": "60 dB SPL",
        "ok": false,
        "w": ""
      },
      {
        "t": "70 dB SPL",
        "ok": false,
        "w": ""
      }
    ],
    "x": "With the speech level fixed, the lowest competing-noise level gives the best SNR. The listed noise levels yield +20, +10, 0 and −10 dB respectively. This comparison does not establish a universal clinical cutoff.",
    "s": [
      "ARL6-43",
      "ARL6-48"
    ]
  },
  "e2.final.20261029.B.SA06": {
    "q": "A television is turned up during conversation while the voice level at the listener stays the same. What happens to the signal-to-noise ratio?",
    "o": [
      {
        "t": "It decreases",
        "ok": true,
        "w": ""
      },
      {
        "t": "It increases",
        "ok": false,
        "w": ""
      },
      {
        "t": "It remains unchanged",
        "ok": false,
        "w": ""
      }
    ],
    "x": "Increasing the competing sound while keeping the wanted speech level fixed makes the SNR less favorable. The reverse change—reducing the television level—would improve it.",
    "s": [
      "ARL6-43",
      "ARL6-48"
    ]
  },
  "e2.final.20261102.C.SA06": {
    "q": "A child’s limited vocabulary may remain a communication barrier after competing acoustic noise is removed.",
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
    "x": "A quieter room improves the acoustic conditions but does not supply the child’s knowledge of vocabulary or language rules. Noise in the communication model includes listener barriers as well as competing sound.",
    "s": [
      "ARTB4-122"
    ]
  },
  "e2.final.20261029.A.SA07": {
    "q": "In the speech distribution below, which pattern generally distinguishes voiced from unvoiced consonants?",
    "o": [
      {
        "t": "Voiced consonants have more low-frequency energy",
        "ok": true,
        "w": ""
      },
      {
        "t": "Unvoiced consonants have more low-frequency energy",
        "ok": false,
        "w": ""
      },
      {
        "t": "Both groups have identical frequency distributions",
        "ok": false,
        "w": ""
      }
    ],
    "x": "Voiced consonants generally have greater low- and midfrequency energy, whereas unvoiced consonants chiefly occupy mid and high frequencies. The figure shows approximate components, not fixed boundaries for every production.",
    "s": [
      "ARTB4-116"
    ]
  },
  "e2.final.20261029.B.SA07": {
    "q": "The plotted locations in the speech-sound distribution below represent:",
    "o": [
      {
        "t": "Approximate frequency and intensity components",
        "ok": true,
        "w": ""
      },
      {
        "t": "Exact thresholds for one patient with SNHL",
        "ok": false,
        "w": ""
      },
      {
        "t": "Average word-recognition scores at different levels",
        "ok": false,
        "w": ""
      },
      {
        "t": "Single formant frequencies for every consonant",
        "ok": false,
        "w": ""
      }
    ],
    "x": "The diagram estimates the frequency and intensity components of speech sounds. It is not a patient audiogram or word-recognition plot. Some phonemes have more than one major component, so the same symbol may appear in multiple positions.",
    "s": [
      "ARTB4-116"
    ]
  },
  "e2.final.20261102.C.SA07": {
    "q": "Compared with the lower-frequency /m/ components below, /s/ information generally has which combination?",
    "o": [
      {
        "t": "Higher frequency and weaker intensity",
        "ok": true,
        "w": ""
      },
      {
        "t": "Higher frequency and stronger intensity",
        "ok": false,
        "w": ""
      },
      {
        "t": "Lower frequency and weaker intensity",
        "ok": false,
        "w": ""
      },
      {
        "t": "Lower frequency and stronger intensity",
        "ok": false,
        "w": ""
      }
    ],
    "x": "The /s/ information is at higher frequencies and is weaker than the strong lower-frequency /m/ components. The distribution is approximate; the relative power table also lists /m/ above /s/.",
    "s": [
      "ARTB4-116",
      "ARTB4-113"
    ]
  },
  "e2.final.20261029.A.SA08": {
    "q": "Which order from greater to smaller relative phonetic power agrees with the table below?",
    "o": [
      {
        "t": "/m/ → /n/ → /s/",
        "ok": true,
        "w": ""
      },
      {
        "t": "/n/ → /m/ → /s/",
        "ok": false,
        "w": ""
      },
      {
        "t": "/s/ → /m/ → /n/",
        "ok": false,
        "w": ""
      },
      {
        "t": "/m/ → /s/ → /n/",
        "ok": false,
        "w": ""
      }
    ],
    "x": "The table lists relative powers of 52 for /m/, 36 for /n/, and 16 for /s/. These establish the order /m/ > /n/ > /s/. They are relative power values, not dB differences or an intelligibility ranking.",
    "s": [
      "ARTB4-113"
    ]
  },
  "e2.final.20261029.B.SA08": {
    "q": "Which listed consonant has the lowest relative phonetic power in the table below?",
    "o": [
      {
        "t": "/θ/",
        "ok": true,
        "w": ""
      },
      {
        "t": "/f/",
        "ok": false,
        "w": ""
      },
      {
        "t": "/p/",
        "ok": false,
        "w": ""
      }
    ],
    "x": "The table gives /θ/ a relative power of 1, compared with 5 for /f/ and 6 for /p/. This is a power comparison, not a claim that /θ/ is least important for speech understanding.",
    "s": [
      "ARTB4-113"
    ]
  },
  "e2.final.20261102.C.SA08": {
    "q": "Which sound has less relative phonetic power than /p/ in the table below?",
    "o": [
      {
        "t": "/b/",
        "ok": false,
        "w": ""
      },
      {
        "t": "/d/",
        "ok": false,
        "w": ""
      },
      {
        "t": "/t/",
        "ok": false,
        "w": ""
      },
      {
        "t": "/f/",
        "ok": true,
        "w": ""
      }
    ],
    "x": "The table gives /p/ a relative power of 6 and /f/ a value of 5. /b/ and /d/ are 7, and /t/ is 15. Thus /f/ is the only listed choice below /p/.",
    "s": [
      "ARTB4-113"
    ]
  },
  "e2.final.20261029.A.SA09": {
    "q": "Consonants’ approximately 10% share of speech energy means they provide only about 10% of the information for distinguishing sounds.",
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
    "x": "The energy proportion does not transfer to information. The summary attributes only about 10% of speech energy but about 90% of sound-distinction information to consonants, emphasizing that energy and identifying value are different.",
    "s": [
      "ARL5-32"
    ]
  },
  "e2.final.20261029.B.SA09": {
    "q": "Consonants contribute a small share of speech energy but a major share of the information used to distinguish sounds.",
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
    "x": "The lecture contrasts the relatively weak consonant energy with the substantial information consonants contribute to distinguishing sounds. Vowel audibility and consonant audibility are both needed for clear speech perception.",
    "s": [
      "ARL5-32"
    ]
  },
  "e2.final.20261102.C.SA09": {
    "q": "The octave band centered at 2,000 Hz carries the greatest amount of speech information.",
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
    "x": "The course summary identifies the 2,000-Hz octave band as carrying the greatest amount of speech information. This is distinct from the overall energy concentration below 1,000 Hz.",
    "s": [
      "ARL5-32"
    ]
  },
  "e2.final.20261029.A.SA10": {
    "q": "Near 3,000–4,000 Hz in the graph below, the span between minimum audibility and the threshold of feeling is closest to:",
    "o": [
      {
        "t": "40 dB",
        "ok": false,
        "w": ""
      },
      {
        "t": "65 dB",
        "ok": false,
        "w": ""
      },
      {
        "t": "90 dB",
        "ok": false,
        "w": ""
      },
      {
        "t": "130 dB",
        "ok": true,
        "w": ""
      }
    ],
    "x": "The maximum intensity span occurs around 3,000–4,000 Hz and is approximately 130–140 dB. The figure places minimum audibility near 0 dB SPL and the upper boundary near 130 dB SPL in that region.",
    "s": [
      "ARTB4-112"
    ]
  },
  "e2.final.20261029.B.SA10": {
    "q": "In the graph below, what does a point below the minimum-audibility curve represent?",
    "o": [
      {
        "t": "A sound below the plotted detection boundary",
        "ok": true,
        "w": ""
      },
      {
        "t": "A sound above the threshold of feeling",
        "ok": false,
        "w": ""
      },
      {
        "t": "A sound within the shaded audible range",
        "ok": false,
        "w": ""
      }
    ],
    "x": "A point below the minimum-audibility curve is below the plotted detection boundary for normal hearing. The audible response area lies above that lower curve and below the threshold of feeling.",
    "s": [
      "ARTB4-112"
    ]
  },
  "e2.final.20261102.C.SA10": {
    "q": "A 1,000-Hz tone is raised from 20 to 40 dB SPL. Which direction shows this change on the graph below?",
    "o": [
      {
        "t": "Upward",
        "ok": true,
        "w": ""
      },
      {
        "t": "Downward",
        "ok": false,
        "w": ""
      },
      {
        "t": "Rightward",
        "ok": false,
        "w": ""
      },
      {
        "t": "Leftward",
        "ok": false,
        "w": ""
      }
    ],
    "x": "At a fixed frequency, a higher sound level moves upward on this graph’s vertical scale. The frequency remains at 1,000 Hz, so the change is not horizontal. This scale differs from an audiogram-style dB HL scale increasing downward.",
    "s": [
      "ARTB4-112"
    ]
  },
  "e2.final.20261029.A.SA11": {
    "q": "Between which pair of frequencies does the spectrum below show the largest decrease in speech level?",
    "o": [
      {
        "t": "100 and 500 Hz",
        "ok": false,
        "w": ""
      },
      {
        "t": "1,000 and 4,000 Hz",
        "ok": true,
        "w": ""
      },
      {
        "t": "6,000 and 10,000 Hz",
        "ok": false,
        "w": ""
      }
    ],
    "x": "The plotted level falls substantially between 1,000 and 4,000 Hz. It rises slightly from 100 to 500 Hz and changes little between 6,000 and 10,000 Hz. The comparison concerns speech-energy distribution, not an individual hearing threshold.",
    "s": [
      "ARTB4-114"
    ]
  },
  "e2.final.20261029.B.SA11": {
    "q": "Which interpretation would misread the spectrum below?",
    "o": [
      {
        "t": "It plots an individual listener’s hearing thresholds",
        "ok": true,
        "w": ""
      },
      {
        "t": "It summarizes speech energy over a long interval",
        "ok": false,
        "w": ""
      },
      {
        "t": "Its level varies across the frequency range",
        "ok": false,
        "w": ""
      },
      {
        "t": "Its lower-frequency region contains more energy",
        "ok": false,
        "w": ""
      }
    ],
    "x": "This is a long-interval acoustic spectrum of voices. Its levels describe the speech signal, not an individual listener’s hearing thresholds. The other statements describe features of that spectrum.",
    "s": [
      "ARTB4-114"
    ]
  },
  "e2.final.20261102.C.SA11": {
    "q": "Which contribution helps explain the broad energy maximum near 500 Hz in the spectrum below?",
    "o": [
      {
        "t": "Vocal-tract resonances",
        "ok": true,
        "w": ""
      },
      {
        "t": "Fundamental frequency alone",
        "ok": false,
        "w": ""
      },
      {
        "t": "The minimum-audibility curve",
        "ok": false,
        "w": ""
      }
    ],
    "x": "The broad energy maximum reflects the resonances of the vocal tract as well as the speech signal’s components. It is not simply the average male fundamental frequency, and it is not an auditory threshold curve.",
    "s": [
      "ARTB4-114"
    ]
  },
  "e2.final.20261029.A.SA12": {
    "q": "Which change targets the message’s redundancy while leaving the speaker, room and listener unchanged?",
    "o": [
      {
        "t": "Add related context to the word sequence",
        "ok": true,
        "w": ""
      },
      {
        "t": "Improve the talker’s articulation",
        "ok": false,
        "w": ""
      },
      {
        "t": "Reduce the room’s reverberation",
        "ok": false,
        "w": ""
      },
      {
        "t": "Increase the listener’s vocabulary knowledge",
        "ok": false,
        "w": ""
      }
    ],
    "x": "Amount of context is a message variable. Articulation belongs to the speaker, reverberation to the environment, and vocabulary knowledge to the listener.",
    "s": [
      "ARTB4-121"
    ]
  },
  "e2.final.20261029.B.SA12": {
    "q": "Which factor belongs within the listener’s contribution to redundancy?",
    "o": [
      {
        "t": "Familiarity with the vocabulary",
        "ok": true,
        "w": ""
      },
      {
        "t": "Number of words in the message",
        "ok": false,
        "w": ""
      },
      {
        "t": "Articulatory precision of the talker",
        "ok": false,
        "w": ""
      }
    ],
    "x": "Vocabulary familiarity belongs to the listener. Number of words is a property of the message, while articulation belongs to the speaker.",
    "s": [
      "ARTB4-121"
    ]
  },
  "e2.final.20261102.C.SA12": {
    "q": "Which pair contains only speaker contributions to redundancy?",
    "o": [
      {
        "t": "Appropriate vocabulary and clear articulation",
        "ok": true,
        "w": ""
      },
      {
        "t": "Clear articulation and topic familiarity",
        "ok": false,
        "w": ""
      },
      {
        "t": "Amount of context and number of words",
        "ok": false,
        "w": ""
      },
      {
        "t": "Room acoustics and the listener’s hearing",
        "ok": false,
        "w": ""
      }
    ],
    "x": "The speaker controls the appropriateness of the vocabulary used and articulation. Topic familiarity and hearing belong to the listener, context and word count to the message, and room acoustics to the environment.",
    "s": [
      "ARTB4-121"
    ]
  },
  "e2.final.20261029.A.SA13": {
    "q": "Which prediction depends primarily on a syntactic constraint?",
    "o": [
      {
        "t": "An adjective is likely to qualify a noun",
        "ok": true,
        "w": ""
      },
      {
        "t": "A stadium conversation is likely to concern the game",
        "ok": false,
        "w": ""
      },
      {
        "t": "A food discussion is likely to contain food words",
        "ok": false,
        "w": ""
      }
    ],
    "x": "Syntactic constraints come from grammatical relationships, such as adjectives qualifying nouns. A stadium setting supplies a situational cue, while related food vocabulary supplies semantic information.",
    "s": [
      "ARTB4-121"
    ]
  },
  "e2.final.20261029.B.SA13": {
    "q": "Which change most directly increases semantic predictability?",
    "o": [
      {
        "t": "Choose words with related meanings",
        "ok": true,
        "w": ""
      },
      {
        "t": "Apply the usual word-order rules",
        "ok": false,
        "w": ""
      },
      {
        "t": "Use a familiar physical setting",
        "ok": false,
        "w": ""
      },
      {
        "t": "Raise the average speech level",
        "ok": false,
        "w": ""
      }
    ],
    "x": "Semantic constraints concern meaningful relationships among words. Word-order rules are syntactic, the physical setting provides situational constraints, and sound level concerns acoustic access.",
    "s": [
      "ARTB4-121"
    ]
  },
  "e2.final.20261102.C.SA13": {
    "q": "Which cue supplies a situational constraint on a conversation?",
    "o": [
      {
        "t": "Who is speaking and where",
        "ok": true,
        "w": ""
      },
      {
        "t": "The grammatical order of the words",
        "ok": false,
        "w": ""
      },
      {
        "t": "Meaningful relationships within the sentence",
        "ok": false,
        "w": ""
      }
    ],
    "x": "The communication partner and physical/social setting help make language predictable through situational constraints. Grammar supplies syntactic constraints, and meaningful word relationships supply semantic constraints.",
    "s": [
      "ARTB4-121",
      "ARTB4-122"
    ]
  },
  "e2.final.20261029.A.SA14": {
    "q": "A clear voice is hard to follow because glare obscures the speaker’s face. Which change addresses that source of communication noise?",
    "o": [
      {
        "t": "Reposition the light for a clear face view",
        "ok": true,
        "w": ""
      },
      {
        "t": "Teach unfamiliar vocabulary to the listener",
        "ok": false,
        "w": ""
      },
      {
        "t": "Correct the talker’s sentence grammar",
        "ok": false,
        "w": ""
      },
      {
        "t": "Improve the talker’s word stress",
        "ok": false,
        "w": ""
      }
    ],
    "x": "Abnormal lighting is an environmental source of interference in the communication model. Repositioning the light targets that barrier. The other changes address listener knowledge or speaker production.",
    "s": [
      "ARTB4-122"
    ]
  },
  "e2.final.20261029.B.SA14": {
    "q": "Which pair consists of speaker sources of communication noise?",
    "o": [
      {
        "t": "Poor syntax and unclear articulation",
        "ok": true,
        "w": ""
      },
      {
        "t": "Poor syntax and excessive reverberation",
        "ok": false,
        "w": ""
      },
      {
        "t": "Unfamiliar language and improper stress",
        "ok": false,
        "w": ""
      }
    ],
    "x": "Poor syntax and abnormal articulation both arise within the speaker. Reverberation is environmental, and unfamiliarity with the language is a listener barrier.",
    "s": [
      "ARTB4-122"
    ]
  },
  "e2.final.20261102.C.SA14": {
    "q": "A listener daydreams and misses an otherwise clear message. Which source of communication noise does this illustrate?",
    "o": [
      {
        "t": "Listener attention",
        "ok": true,
        "w": ""
      },
      {
        "t": "Speaker articulation",
        "ok": false,
        "w": ""
      },
      {
        "t": "Message grammar",
        "ok": false,
        "w": ""
      },
      {
        "t": "Room acoustics",
        "ok": false,
        "w": ""
      }
    ],
    "x": "Poor listening skills or inattention can interfere with communication within the listener. The message can be clearly produced in a favorable room and still be missed when attention is not directed to it.",
    "s": [
      "ARTB4-119",
      "ARTB4-122"
    ]
  },
  "e2.final.20261029.A.SA15": {
    "q": "Which change most directly supports access to the /s/ information in the distribution below?",
    "o": [
      {
        "t": "Improve high-frequency speech access",
        "ok": true,
        "w": ""
      },
      {
        "t": "Improve only low-frequency speech access",
        "ok": false,
        "w": ""
      },
      {
        "t": "Lengthen the pauses between words",
        "ok": false,
        "w": ""
      }
    ],
    "x": "The /s/ information lies in the high-frequency region. Improving only low-frequency access or changing pauses does not directly supply those missing frequency components. Strong vowel energy alone does not replace them.",
    "s": [
      "ARTB4-116",
      "ARL5-32"
    ]
  },
  "e2.final.20261029.B.SA15": {
    "q": "A child identifies /m/ and /u/ but often misses /s/. Which frequency region warrants particular attention?",
    "o": [
      {
        "t": "250–500 Hz",
        "ok": false,
        "w": ""
      },
      {
        "t": "500–1,000 Hz",
        "ok": false,
        "w": ""
      },
      {
        "t": "4,000–8,000 Hz",
        "ok": true,
        "w": ""
      }
    ],
    "x": "The /s/ components are concentrated at higher frequencies, around the 4,000–8,000-Hz region in the approximate speech distribution. /m/ and /u/ have important lower-frequency components. This pattern calls for attention to high-frequency access, not a diagnosis from one response.",
    "s": [
      "ARTB4-116",
      "ARL5-32"
    ]
  },
  "e2.final.20261102.C.SA15": {
    "q": "Which pair of consonant features is most closely associated with lower-frequency cues?",
    "o": [
      {
        "t": "Voicing and nasality",
        "ok": true,
        "w": ""
      },
      {
        "t": "Place of articulation and voicing",
        "ok": false,
        "w": ""
      },
      {
        "t": "Place of articulation and nasality",
        "ok": false,
        "w": ""
      }
    ],
    "x": "Voicing and nasality rely chiefly on lower-frequency information. Place-of-articulation information is carried by higher-frequency cues, so each alternative pair includes a higher-frequency feature.",
    "s": [
      "ARTB4-116",
      "ARTB4-117"
    ]
  },
  "e2.final.20261029.A.AT01": {
    "q": "A child correctly identifies 19 words on one complete 25-word WIPI list. What is the score for that list?",
    "o": [
      {
        "t": "19%",
        "ok": false,
        "w": ""
      },
      {
        "t": "76%",
        "ok": true,
        "w": ""
      },
      {
        "t": "81%",
        "ok": false,
        "w": ""
      }
    ],
    "x": "The score is 19 ÷ 25 × 100 = 76%. WIPI has 25 words per list. This percentage describes the responses on that list; it is not a hearing threshold or a candidacy decision.",
    "s": [
      "ARL6-11"
    ]
  },
  "e2.final.20261029.A.AT02": {
    "q": "How many monosyllabic nouns are rearranged to produce the four NU-CHIPS tests?",
    "o": [
      {
        "t": "25",
        "ok": false,
        "w": ""
      },
      {
        "t": "50",
        "ok": true,
        "w": ""
      },
      {
        "t": "100",
        "ok": false,
        "w": ""
      },
      {
        "t": "200",
        "ok": false,
        "w": ""
      }
    ],
    "x": "NU-CHIPS uses 50 monosyllabic nouns scrambled to form four tests. The four arrangements should not be counted as four separate pools of 50 different nouns.",
    "s": [
      "ARL6-12"
    ]
  },
  "e2.final.20261029.A.AT03": {
    "q": "Which sound completes this Ling 10 inventory: /u,a,i,m,n,h,ʃ,s,z/?",
    "o": [
      {
        "t": "/dʒ/",
        "ok": true,
        "w": ""
      },
      {
        "t": "/j/",
        "ok": false,
        "w": ""
      },
      {
        "t": "/f/",
        "ok": false,
        "w": ""
      }
    ],
    "x": "The Ling 10 inventory is /u,a,i,m,n,h,dʒ,ʃ,s,z/. The affricate /dʒ/, as in jump, is missing from the list. IPA /j/ is the consonant in yes; /f/ is not one of these ten sounds.",
    "s": [
      "ARLING-2"
    ]
  },
  "e2.final.20261029.A.AT04": {
    "q": "When checking access through the right hearing device alone, the left device should remain active.",
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
    "x": "The opposite device is removed or turned off for an ear-specific check. Otherwise a response may reflect hearing through the left device rather than access through the right one.",
    "s": [
      "ARLING-3"
    ]
  },
  "e2.final.20261029.A.AT05": {
    "q": "A child can identify familiar spoken words. Which new goal directly moves into comprehension?",
    "o": [
      {
        "t": "Repeat each word after the clinician",
        "ok": false,
        "w": ""
      },
      {
        "t": "Point to the picture for each word",
        "ok": false,
        "w": ""
      },
      {
        "t": "State whether two words sound alike",
        "ok": false,
        "w": ""
      },
      {
        "t": "Explain the main idea of a short story",
        "ok": true,
        "w": ""
      }
    ],
    "x": "Explaining a story’s main idea requires understanding its meaning. Repeating or selecting a word is identification; judging whether two words sound alike is discrimination.",
    "s": [
      "ARL6-19",
      "ARL6-30",
      "ARL6-35"
    ]
  },
  "e2.final.20261029.A.AT06": {
    "q": "Which task requires auditory identification even though no picture choices are provided?",
    "o": [
      {
        "t": "Say whether two sounds match",
        "ok": false,
        "w": ""
      },
      {
        "t": "Write the word that was heard",
        "ok": true,
        "w": ""
      },
      {
        "t": "Signal whenever a sound begins",
        "ok": false,
        "w": ""
      }
    ],
    "x": "Writing the heard word identifies the stimulus. Same/different judgments are discrimination, while signaling sound onset is detection. Identification is not limited to a picture-pointing format.",
    "s": [
      "ARL6-20",
      "ARL6-25",
      "ARL6-30"
    ]
  },
  "e2.final.20261029.A.AT07": {
    "q": "What makes a word-identification exercise analytic rather than synthetic?",
    "o": [
      {
        "t": "It is completed in a one-to-one session",
        "ok": false,
        "w": ""
      },
      {
        "t": "It focuses on a specific vowel contrast",
        "ok": true,
        "w": ""
      },
      {
        "t": "It uses pictures to show the alternatives",
        "ok": false,
        "w": ""
      },
      {
        "t": "It is repeated until the child improves",
        "ok": false,
        "w": ""
      }
    ],
    "x": "The focus on a small speech component, here a vowel contrast, makes the exercise analytic. One-to-one delivery, pictures and repeated practice can be used with different approaches and do not define the approach by themselves.",
    "s": [
      "ARL6-39",
      "ARL6-40",
      "ARL6-41",
      "ARL6-47"
    ]
  },
  "e2.final.20261029.A.AT08": {
    "q": "Replacing a meaningful story with isolated phoneme trials preserves the contextual basis of synthetic auditory training.",
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
    "x": "Synthetic training draws on the meaning, syntax and context of larger speech units. Moving to isolated phonemes removes that contextual basis and places the emphasis on analytic work.",
    "s": [
      "ARL6-39",
      "ARL6-41"
    ]
  },
  "e2.final.20261029.A.AT09": {
    "q": "A listener asks a communication partner to announce the topic before giving details. Which pragmatic variable is being controlled?",
    "o": [
      {
        "t": "Speech level",
        "ok": false,
        "w": ""
      },
      {
        "t": "Background-noise level",
        "ok": false,
        "w": ""
      },
      {
        "t": "Message context",
        "ok": true,
        "w": ""
      },
      {
        "t": "Response-set size",
        "ok": false,
        "w": ""
      }
    ],
    "x": "Announcing the topic adds context for interpreting the message. It does not directly raise the speech, reduce competing sound or change the number of response alternatives.",
    "s": [
      "ARL6-43"
    ]
  },
  "e2.final.20261029.A.AT10": {
    "q": "An eclectic plan may change its mix of strategies as the child’s listening needs change.",
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
    "x": "Eclectic training combines approaches. The clinician selects that combination to fit the child and family rather than treating one mixture as a fixed program for every need.",
    "s": [
      "ARL6-44",
      "ARL6-54"
    ]
  },
  "e2.final.20261029.A.AT11": {
    "q": "The same listening target is practiced in structured clinic trials and later during the family’s usual bedtime routine. Which design dimension differs most directly?",
    "o": [
      {
        "t": "Auditory skill",
        "ok": false,
        "w": ""
      },
      {
        "t": "Activity type",
        "ok": true,
        "w": ""
      },
      {
        "t": "Stimulus frequency",
        "ok": false,
        "w": ""
      }
    ],
    "x": "Structured clinic trials are formal; practice within an ordinary routine is informal. The target can remain the same while the activity type changes.",
    "s": [
      "ARL6-46",
      "ARL6-47"
    ]
  },
  "e2.final.20261029.A.AT12": {
    "q": "The words and speech level stay the same, but background noise is increased. What change should the clinician anticipate?",
    "o": [
      {
        "t": "An easier task because the words are unchanged",
        "ok": false,
        "w": ""
      },
      {
        "t": "A harder task because the SNR is poorer",
        "ok": true,
        "w": ""
      },
      {
        "t": "No change because speech level is unchanged",
        "ok": false,
        "w": ""
      }
    ],
    "x": "Increasing noise while keeping speech level constant worsens the signal-to-noise ratio. Listening conditions therefore become more demanding even though the word list and speech level have not changed.",
    "s": [
      "ARL6-43",
      "ARL6-48"
    ]
  },
  "e2.final.20261029.A.AT13": {
    "q": "In SPICE, distinguishing “coat” from “boat” primarily belongs to which goal category?",
    "o": [
      {
        "t": "Suprasegmental perception",
        "ok": false,
        "w": ""
      },
      {
        "t": "Vowel and consonant perception",
        "ok": true,
        "w": ""
      },
      {
        "t": "Connected speech",
        "ok": false,
        "w": ""
      }
    ],
    "x": "The contrast changes the initial consonant while keeping the rest of the word constant. That is vowel/consonant perception, rather than a rhythm, intensity or pitch pattern or a connected message.",
    "s": [
      "ARL6-51",
      "ARL6-25"
    ]
  },
  "e2.final.20261029.A.AT14": {
    "q": "A home program provides auditory stimulation to infants and their families alongside language–speech work. Which program best matches this plan?",
    "o": [
      {
        "t": "SKI-HI",
        "ok": true,
        "w": ""
      },
      {
        "t": "SPICE",
        "ok": false,
        "w": ""
      },
      {
        "t": "DASL II",
        "ok": false,
        "w": ""
      }
    ],
    "x": "SKI-HI is a developmentally based identification and home-intervention curriculum for infants with hearing loss and their families. It combines auditory stimulation with language–speech stimulation. SPICE and DASL II have different stated structures and primary uses.",
    "s": [
      "ARL6-52",
      "ARL6-51",
      "ARL6-50"
    ]
  },
  "e2.final.20261029.B.AT01": {
    "q": "A caregiver records a child’s listening during meals and family conversations on PEACH. Which purpose do these entries address?",
    "o": [
      {
        "t": "Everyday functional listening",
        "ok": true,
        "w": ""
      },
      {
        "t": "Recorded word-recognition testing",
        "ok": false,
        "w": ""
      },
      {
        "t": "Electroacoustic device-output measurement",
        "ok": false,
        "w": ""
      },
      {
        "t": "Electrophysiological threshold estimation",
        "ok": false,
        "w": ""
      }
    ],
    "x": "PEACH gathers caregiver information about listening during everyday activities. The entries describe functional use of hearing, complementing rather than replacing clinic speech testing, device measurements or threshold assessment.",
    "s": [
      "ARL6-8",
      "ARL4-18"
    ]
  },
  "e2.final.20261029.B.AT02": {
    "q": "How does FAPI organize a child’s functional auditory skills?",
    "o": [
      {
        "t": "Seven integrated hierarchical categories",
        "ok": true,
        "w": ""
      },
      {
        "t": "Four closed-set speech-perception categories",
        "ok": false,
        "w": ""
      },
      {
        "t": "Four picture-pointing word lists",
        "ok": false,
        "w": ""
      }
    ],
    "x": "FAPI organizes functional auditory skills into seven integrated hierarchical categories. Four speech-perception categories belong to ESP; four picture-pointing word lists describe WIPI.",
    "s": [
      "ARL6-9",
      "ARL6-15",
      "ARL6-11"
    ]
  },
  "e2.final.20261029.B.AT03": {
    "q": "Which Ling 10 pair uses a similar tongue position but differs in whether the voice is on?",
    "o": [
      {
        "t": "/m/ and /n/",
        "ok": false,
        "w": ""
      },
      {
        "t": "/u/ and /i/",
        "ok": false,
        "w": ""
      },
      {
        "t": "/s/ and /z/",
        "ok": true,
        "w": ""
      },
      {
        "t": "/h/ and /s/",
        "ok": false,
        "w": ""
      }
    ],
    "x": "/z/ uses the same basic tongue position as /s/ with voicing added. The two nasal sounds and the two vowels are both voiced; /h/ and /s/ are both voiceless.",
    "s": [
      "ARLING-10",
      "ARLING-14",
      "ARLING-8"
    ]
  },
  "e2.final.20261029.B.AT04": {
    "q": "A child who detects Ling sounds nearby may have more difficulty detecting them when the talker moves farther away.",
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
    "x": "Close-range access does not establish access at greater distances. Distance checking can reveal difficulty with softer speech details that were available nearby.",
    "s": [
      "ARLING-3"
    ]
  },
  "e2.final.20261029.B.AT05": {
    "q": "A child reliably reports whether two sounds differ. Which task advances the response demand by one level in Erber’s hierarchy?",
    "o": [
      {
        "t": "Indicate whether any sound occurred",
        "ok": false,
        "w": ""
      },
      {
        "t": "Name which sound was presented",
        "ok": true,
        "w": ""
      },
      {
        "t": "Explain the meaning of a spoken story",
        "ok": false,
        "w": ""
      }
    ],
    "x": "The starting task is discrimination. Naming the sound is identification, the next level. Sound presence is detection, and interpreting a story requires comprehension.",
    "s": [
      "ARL6-19",
      "ARL6-25",
      "ARL6-30",
      "ARL6-34"
    ]
  },
  "e2.final.20261029.B.AT06": {
    "q": "Which pair of responses both directly demonstrate word identification?",
    "o": [
      {
        "t": "Repeat “chair”; select the picture of a chair",
        "ok": true,
        "w": ""
      },
      {
        "t": "Notice a sound; judge whether two sounds differ",
        "ok": false,
        "w": ""
      },
      {
        "t": "Repeat “chair”; explain why a person needs a chair",
        "ok": false,
        "w": ""
      },
      {
        "t": "Follow a direction; answer a question about a story",
        "ok": false,
        "w": ""
      }
    ],
    "x": "Repeating the heard word and selecting its picture both identify the speech stimulus. The other pairs include detection, discrimination or comprehension, so they are not two examples of identification.",
    "s": [
      "ARL6-20",
      "ARL6-25",
      "ARL6-30",
      "ARL6-34"
    ]
  },
  "e2.final.20261029.B.AT07": {
    "q": "Which goal remains analytic when the child answers from an open set instead of choosing among pictures?",
    "o": [
      {
        "t": "Identify words by their vowel contrasts",
        "ok": true,
        "w": ""
      },
      {
        "t": "Summarize a story using its main idea",
        "ok": false,
        "w": ""
      },
      {
        "t": "Request a less complex spoken message",
        "ok": false,
        "w": ""
      }
    ],
    "x": "Removing picture choices changes the response set, not the focus on small speech components. Analytic work can use an open vocabulary set; story meaning is synthetic and requesting message changes is pragmatic.",
    "s": [
      "ARL6-40",
      "ARL6-41",
      "ARL6-43"
    ]
  },
  "e2.final.20261029.B.AT08": {
    "q": "Meaningful conversation can be used in synthetic auditory training.",
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
    "x": "Synthetic training works with meaningful stimuli and context. Carrying on a conversation is one of its possible objectives, alongside sentence and instruction tasks.",
    "s": [
      "ARL6-41",
      "ARL6-42"
    ]
  },
  "e2.final.20261029.B.AT09": {
    "q": "Which action improves the signal-to-noise ratio without increasing the talker’s speech level?",
    "o": [
      {
        "t": "Ask the talker to use shorter sentences",
        "ok": false,
        "w": ""
      },
      {
        "t": "Turn off a competing television",
        "ok": true,
        "w": ""
      },
      {
        "t": "Ask the talker to speak louder",
        "ok": false,
        "w": ""
      }
    ],
    "x": "Turning off the television reduces competing sound while leaving speech level unchanged. Shorter sentences change message complexity; asking for louder speech changes the signal level itself.",
    "s": [
      "ARL6-43"
    ]
  },
  "e2.final.20261029.B.AT10": {
    "q": "Using both toys and picture cards within an analytic task is enough to make the overall approach eclectic.",
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
    "x": "Changing materials does not necessarily change the training approach. An eclectic plan combines approaches; both toys and pictures could still support the same analytic phonetic goal.",
    "s": [
      "ARL6-39",
      "ARL6-44"
    ]
  },
  "e2.final.20261029.B.AT11": {
    "q": "Which pair names an auditory skill followed by an activity type?",
    "o": [
      {
        "t": "Words — formal",
        "ok": false,
        "w": ""
      },
      {
        "t": "Identification — open set",
        "ok": false,
        "w": ""
      },
      {
        "t": "Discrimination — informal",
        "ok": true,
        "w": ""
      },
      {
        "t": "Sentences — quiet",
        "ok": false,
        "w": ""
      }
    ],
    "x": "Discrimination is an auditory skill, and informal is an activity type. Words and sentences are stimuli; open set and quiet describe response or listening conditions.",
    "s": [
      "ARL6-46",
      "ARL6-47"
    ]
  },
  "e2.final.20261029.B.AT12": {
    "q": "For the same familiar words and listening conditions, which identification task provides the least support from response alternatives?",
    "o": [
      {
        "t": "Choose from two pictured words",
        "ok": false,
        "w": ""
      },
      {
        "t": "Choose from four pictured words",
        "ok": false,
        "w": ""
      },
      {
        "t": "Choose from six pictured words",
        "ok": false,
        "w": ""
      },
      {
        "t": "Respond with no choices supplied",
        "ok": true,
        "w": ""
      }
    ],
    "x": "An open response supplies no alternatives to constrain the answer. Closed sets provide candidate responses; changing their size affects demand, but even a larger closed set still supplies alternatives.",
    "s": [
      "ARL6-46",
      "ARL6-48"
    ]
  },
  "e2.final.20261029.B.AT13": {
    "q": "Which pairing correctly matches a SPICE category with a listening task?",
    "o": [
      {
        "t": "Detection — explain a short story",
        "ok": false,
        "w": ""
      },
      {
        "t": "Connected speech — follow a spoken instruction",
        "ok": true,
        "w": ""
      },
      {
        "t": "Suprasegmentals — identify the initial consonant",
        "ok": false,
        "w": ""
      }
    ],
    "x": "A spoken instruction is connected speech whose message must be understood. Explaining a story exceeds simple detection, and distinguishing an initial consonant is segmental rather than suprasegmental.",
    "s": [
      "ARL6-51",
      "ARL6-25",
      "ARL6-34"
    ]
  },
  "e2.final.20261029.B.AT14": {
    "q": "A SKI-HI summary lists home intervention for infants, four phases, seven general skills and language–speech stimulation. Which entry needs correction?",
    "o": [
      {
        "t": "Home intervention",
        "ok": false,
        "w": ""
      },
      {
        "t": "Infant population",
        "ok": false,
        "w": ""
      },
      {
        "t": "Four phases",
        "ok": false,
        "w": ""
      },
      {
        "t": "Seven general skills",
        "ok": true,
        "w": ""
      }
    ],
    "x": "SKI-HI has four phases and eleven general skills. Its home-intervention setting, infant–family focus and use with language–speech stimulation are correctly described; seven should be eleven.",
    "s": [
      "ARL6-52"
    ]
  },
  "e2.final.20261102.C.AT01": {
    "q": "A child performs well on GASP phoneme detection and word identification but struggles with its sentence subtest. Which training target most directly matches the weak result?",
    "o": [
      {
        "t": "Detect the presence of a sound",
        "ok": false,
        "w": ""
      },
      {
        "t": "Compare two isolated sounds",
        "ok": false,
        "w": ""
      },
      {
        "t": "Identify a single spoken word",
        "ok": false,
        "w": ""
      },
      {
        "t": "Understand a spoken message",
        "ok": true,
        "w": ""
      }
    ],
    "x": "The sentence subtest assesses comprehension. The pattern directs attention to understanding messages rather than treating successful detection and word identification as evidence that sentence meaning is also understood.",
    "s": [
      "ARL6-16",
      "ARL6-34"
    ]
  },
  "e2.final.20261102.C.AT02": {
    "q": "A child moves from “some word identification” to “consistent word identification” on ESP. What change does this classification describe?",
    "o": [
      {
        "t": "More dependable identification of words",
        "ok": true,
        "w": ""
      },
      {
        "t": "The first detection of any speech sound",
        "ok": false,
        "w": ""
      },
      {
        "t": "A change from closed-set to open-set testing",
        "ok": false,
        "w": ""
      }
    ],
    "x": "The change is within the word-identification categories and indicates more consistent performance. ESP remains a closed-set test; the label does not mean that detection has only just appeared or that the response format has changed.",
    "s": [
      "ARL6-15"
    ]
  },
  "e2.final.20261102.C.AT03": {
    "q": "A Ling check should continue until all ten sounds are completed even when the child has become tired and disengaged.",
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
    "x": "Brief checking is recommended, and the session should stop when the child becomes tired or loses interest. Disengagement can make responses harder to interpret; finishing every trial does not repair that problem.",
    "s": [
      "ARLING-3"
    ]
  },
  "e2.final.20261102.C.AT04": {
    "q": "A child drops a block after seeing the clinician’s lips move but does not respond when the same sound is presented without that view. What still needs to be established?",
    "o": [
      {
        "t": "A response controlled by the sound",
        "ok": true,
        "w": ""
      },
      {
        "t": "Accurate repetition of the sound",
        "ok": false,
        "w": ""
      },
      {
        "t": "A same/different judgment about two sounds",
        "ok": false,
        "w": ""
      },
      {
        "t": "Understanding of a spoken direction",
        "ok": false,
        "w": ""
      }
    ],
    "x": "Sound conditioning should establish a dependable response to the auditory signal. A response tied to visible mouth movement does not yet establish audition-only detection, and moving to more complex response demands would not resolve that uncertainty.",
    "s": [
      "ARL6-20",
      "ARL6-21"
    ]
  },
  "e2.final.20261102.C.AT05": {
    "q": "During sound-awareness trials, a child responds on 7 of 8 sound trials and on neither of 2 silent trials. Which skill is directly supported by this pattern?",
    "o": [
      {
        "t": "Detection of sound presence",
        "ok": true,
        "w": ""
      },
      {
        "t": "Identification of individual speech sounds",
        "ok": false,
        "w": ""
      },
      {
        "t": "Discrimination of speech-sound pairs",
        "ok": false,
        "w": ""
      },
      {
        "t": "Comprehension of spoken messages",
        "ok": false,
        "w": ""
      }
    ],
    "x": "The child is responding mainly when sound is present and withholding responses during silence. That supports detection in these conditions. The task does not ask which sound occurred, whether two sounds match or what a message means.",
    "s": [
      "ARL6-20",
      "ARL6-14"
    ]
  },
  "e2.final.20261102.C.AT06": {
    "q": "After hearing “The dog chased the cat,” a child correctly points to the dog when asked who did the chasing. This can demonstrate comprehension without a spoken response.",
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
    "x": "Selecting the agent asked about can show understanding of the sentence. The response need not reproduce its words; comprehension is shown by an appropriate response to the message’s meaning.",
    "s": [
      "ARL6-34",
      "ARL6-35"
    ]
  },
  "e2.final.20261102.C.AT07": {
    "q": "Which word pair best isolates vowel information for analytic listening practice?",
    "o": [
      {
        "t": "seat — sit",
        "ok": true,
        "w": ""
      },
      {
        "t": "seat — feet",
        "ok": false,
        "w": ""
      },
      {
        "t": "seat — dog",
        "ok": false,
        "w": ""
      }
    ],
    "x": "Seat and sit retain the same initial and final consonants while changing the vowel. Seat/feet changes a consonant; seat/dog changes several components, so it does not isolate the vowel contrast.",
    "s": [
      "ARL6-40",
      "ARL6-31"
    ]
  },
  "e2.final.20261102.C.AT08": {
    "q": "A highly structured sentence-meaning session must use an analytic approach because the activity is formal.",
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
    "x": "Formal describes the activity type, while analytic versus synthetic describes the approach. A structured session can use meaningful sentences and context in a synthetic approach; formality does not make it analytic.",
    "s": [
      "ARL6-41",
      "ARL6-46",
      "ARL6-47"
    ]
  },
  "e2.final.20261102.C.AT09": {
    "q": "A listener asks, “Please give me just one step at a time.” Which pragmatic target does this request address?",
    "o": [
      {
        "t": "Message complexity",
        "ok": true,
        "w": ""
      },
      {
        "t": "Phonetic contrast",
        "ok": false,
        "w": ""
      },
      {
        "t": "Response-set size",
        "ok": false,
        "w": ""
      }
    ],
    "x": "Breaking a multistep message into smaller parts controls its complexity. The request does not ask for a different speech sound or a different set of response choices.",
    "s": [
      "ARL6-43"
    ]
  },
  "e2.final.20261102.C.AT10": {
    "q": "Which treatment sequence most clearly combines different auditory-training approaches?",
    "o": [
      {
        "t": "Vowel contrasts, then consonant contrasts",
        "ok": false,
        "w": ""
      },
      {
        "t": "Story questions, then meaningful conversation",
        "ok": false,
        "w": ""
      },
      {
        "t": "Vowel contrasts, then sentence-meaning practice",
        "ok": true,
        "w": ""
      },
      {
        "t": "Requests for louder speech, then requests for less noise",
        "ok": false,
        "w": ""
      }
    ],
    "x": "Vowel contrasts are analytic; sentence-meaning practice is synthetic. Their combination is eclectic. The other pairs remain within analytic, synthetic or pragmatic work despite changing activities.",
    "s": [
      "ARL6-39",
      "ARL6-41",
      "ARL6-43",
      "ARL6-44"
    ]
  },
  "e2.final.20261102.C.AT11": {
    "q": "Which change varies the stimulus unit in an auditory-training task?",
    "o": [
      {
        "t": "Present words instead of sentences",
        "ok": true,
        "w": ""
      },
      {
        "t": "Reduce four response choices to two",
        "ok": false,
        "w": ""
      },
      {
        "t": "Add context before the message",
        "ok": false,
        "w": ""
      },
      {
        "t": "Increase competing background sound",
        "ok": false,
        "w": ""
      }
    ],
    "x": "Words and sentences are different stimulus units. Reducing choices changes response-set size, adding context changes contextual support, and adding competing sound changes listening conditions.",
    "s": [
      "ARL6-46",
      "ARL6-48"
    ]
  },
  "e2.final.20261102.C.AT12": {
    "q": "A listening passage is presented without its topic being announced. Compared with otherwise identical trials that provide the topic, how does task demand change?",
    "o": [
      {
        "t": "More support; generally easier",
        "ok": false,
        "w": ""
      },
      {
        "t": "Less support; generally harder",
        "ok": true,
        "w": ""
      },
      {
        "t": "The same contextual support",
        "ok": false,
        "w": ""
      }
    ],
    "x": "Removing the topic reduces contextual support and generally makes the listening task harder. The comparison keeps the other conditions the same, so the changed demand comes from loss of context.",
    "s": [
      "ARL6-46",
      "ARL6-48"
    ]
  },
  "e2.final.20261102.C.AT13": {
    "q": "Which task belongs with SPICE suprasegmental goals?",
    "o": [
      {
        "t": "Judge whether a syllable is long or short",
        "ok": true,
        "w": ""
      },
      {
        "t": "Identify which vowel was presented",
        "ok": false,
        "w": ""
      },
      {
        "t": "Follow a two-step spoken direction",
        "ok": false,
        "w": ""
      },
      {
        "t": "Indicate whether any sound occurred",
        "ok": false,
        "w": ""
      }
    ],
    "x": "Duration is a suprasegmental feature. Vowel identity belongs to vowel/consonant perception, following a meaningful direction uses connected speech, and indicating sound presence is detection.",
    "s": [
      "ARL6-51",
      "ARL6-25",
      "ARL6-34"
    ]
  },
  "e2.final.20261102.C.AT14": {
    "q": "Which recommendation preserves the integrated design of SKI-HI?",
    "o": [
      {
        "t": "Combine auditory work with language–speech stimulation",
        "ok": true,
        "w": ""
      },
      {
        "t": "Complete language goals before adding auditory work",
        "ok": false,
        "w": ""
      },
      {
        "t": "Finish auditory goals before beginning language work",
        "ok": false,
        "w": ""
      }
    ],
    "x": "SKI-HI uses auditory stimulation in conjunction with language–speech stimulation. Its design does not require completing one entire area before beginning the other.",
    "s": [
      "ARL6-52"
    ]
  },
  "e2.final.20261029.A.VS01": {
    "q": "Use Figure 5-1 below. Better lighting has made the face clearly visible, but the talker still runs words together. Which further change most directly addresses that remaining barrier?",
    "o": [
      {
        "t": "Use clear, unexaggerated articulation",
        "ok": true,
        "w": ""
      },
      {
        "t": "Increase the speechreader’s visual acuity",
        "ok": false,
        "w": ""
      },
      {
        "t": "Replace familiar words with shorter words",
        "ok": false,
        "w": ""
      }
    ],
    "x": "The remaining problem is the speaker’s delivery. Clear articulation at a manageable rate preserves visible speech information. Better acuity or a change in word length does not directly correct words being run together.",
    "s": [
      "ARMOCKBOOK-152",
      "ARL7-13",
      "ARL7-14"
    ],
    "media": {
      "kind": "img",
      "src": "assets/exam2/figures/final-fig5-1.jpg",
      "alt": "Source figure for this question; use Enlarge source figure for details."
    }
  },
  "e2.final.20261029.A.VS02": {
    "q": "Which distinction between visemes and homophenes is correct?",
    "o": [
      {
        "t": "Visemes group sounds; homophenes group words",
        "ok": true,
        "w": ""
      },
      {
        "t": "Visemes group words; homophenes group sounds",
        "ok": false,
        "w": ""
      },
      {
        "t": "Visemes group vowels; homophenes group consonants",
        "ok": false,
        "w": ""
      },
      {
        "t": "Visemes group audible cues; homophenes group visible cues",
        "ok": false,
        "w": ""
      }
    ],
    "x": "Visemes are speech sounds with similar visible patterns. Homophenes are different-sounding words that look alike during lipreading. Both terms concern visual similarity, but they describe different units.",
    "s": [
      "ARL7-10"
    ],
    "media": null,
    "figure": null
  },
  "e2.final.20261029.A.VS03": {
    "q": "For speechreading, a side-on view is generally preferable to facing the speaker directly.",
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
    "x": "Facing the speaker directly provides a more favorable view of the mouth. The course guidance is approximately 0° azimuth at 2–5 feet, with suitable lighting and individual viewing needs also considered.",
    "s": [
      "ARL7-16"
    ]
  },
  "e2.final.20261029.A.VS04": {
    "q": "Use Figure 5-1 below. A child recognizes familiar words but struggles with unfamiliar vocabulary despite a clear view and sustained attention. Which speechreader factor is the most direct concern?",
    "o": [
      {
        "t": "Viewing angle",
        "ok": false,
        "w": ""
      },
      {
        "t": "Language skills",
        "ok": true,
        "w": ""
      },
      {
        "t": "Talker’s speaking rate",
        "ok": false,
        "w": ""
      },
      {
        "t": "Room lighting",
        "ok": false,
        "w": ""
      }
    ],
    "x": "The difference between known and unfamiliar vocabulary directs attention to language skills. The stem already establishes visual access and attention; the other choices are speaker or environmental factors rather than this language limitation.",
    "s": [
      "ARMOCKBOOK-152",
      "ARL7-15",
      "ARL7-17"
    ],
    "media": {
      "kind": "img",
      "src": "assets/exam2/figures/final-fig5-1.jpg",
      "alt": "Source figure for this question; use Enlarge source figure for details."
    }
  },
  "e2.final.20261029.A.VS05": {
    "q": "Which speaking change is most likely to distort useful visible speech patterns?",
    "o": [
      {
        "t": "Greatly exaggerate mouth movements",
        "ok": true,
        "w": ""
      },
      {
        "t": "Use precise, unexaggerated articulation",
        "ok": false,
        "w": ""
      },
      {
        "t": "Use a natural or slightly slower rate",
        "ok": false,
        "w": ""
      }
    ],
    "x": "Exaggerated movements and extreme slowing can make visible speech harder to interpret. Precise articulation at a natural or slightly slower rate better preserves usable speech patterns.",
    "s": [
      "ARMOCKBOOK-152",
      "ARL7-14"
    ]
  },
  "e2.final.20261029.A.VS06": {
    "q": "Borrowing an English name through fingerspelling turns an otherwise ASL message into a manually coded English system.",
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
    "x": "Fingerspelling can supply names and other borrowed words within ASL. Using a borrowed written word does not replace ASL’s vocabulary and syntax with a system designed to encode English grammar.",
    "s": [
      "ARMOCKBOOK-181",
      "ARMOCKBOOK-184",
      "ARL7-28"
    ]
  },
  "e2.final.20261029.A.VS07": {
    "q": "In Signed English, a marker showing that a bicycle belongs to a girl primarily represents which grammatical information?",
    "o": [
      {
        "t": "Tense",
        "ok": false,
        "w": ""
      },
      {
        "t": "Number",
        "ok": false,
        "w": ""
      },
      {
        "t": "Possession",
        "ok": true,
        "w": ""
      },
      {
        "t": "Person",
        "ok": false,
        "w": ""
      }
    ],
    "x": "The marker expresses possession: whose bicycle it is. Tense concerns time, number concerns singular versus plural, and person distinguishes roles such as speaker and addressee.",
    "s": [
      "ARL7-27"
    ]
  },
  "e2.final.20261029.A.VS08": {
    "q": "A family wants to make spoken English phonemes more visually accessible without changing to an independent sign language. Which system best fits that purpose?",
    "o": [
      {
        "t": "American Sign Language",
        "ok": false,
        "w": ""
      },
      {
        "t": "Cued Speech",
        "ok": true,
        "w": ""
      },
      {
        "t": "Fingerspelling",
        "ok": false,
        "w": ""
      }
    ],
    "x": "Cued Speech supplements spoken-language phonemes with visual hand cues used alongside mouth movements. ASL is an independent language; fingerspelling represents written letters.",
    "s": [
      "ARL7-29",
      "ARL7-28",
      "ARMOCKBOOK-184"
    ]
  },
  "e2.final.20261029.A.VS09": {
    "q": "How can fingerspelling distinguish “meet” from “meat” even when the two words sound the same?",
    "o": [
      {
        "t": "It represents their different letter sequences",
        "ok": true,
        "w": ""
      },
      {
        "t": "It adds a different spoken vowel",
        "ok": false,
        "w": ""
      },
      {
        "t": "It marks a different English tense",
        "ok": false,
        "w": ""
      }
    ],
    "x": "Fingerspelling represents written letters. The words differ in spelling even though they are homophones, so their manual letter sequences can differ without a difference in the spoken vowel.",
    "s": [
      "ARMOCKBOOK-181",
      "ARMOCKBOOK-184"
    ]
  },
  "e2.final.20261029.B.VS01": {
    "q": "Use Figure 5-1 below. A child speechreads a familiar talker more accurately than an unfamiliar talker under the same conditions. Which factor most directly accounts for the difference?",
    "o": [
      {
        "t": "Word frequency",
        "ok": false,
        "w": ""
      },
      {
        "t": "Viewing angle",
        "ok": false,
        "w": ""
      },
      {
        "t": "Speaker familiarity",
        "ok": true,
        "w": ""
      },
      {
        "t": "Visual acuity",
        "ok": false,
        "w": ""
      }
    ],
    "x": "Familiarity with the speaker is listed as a speaker contribution. The example changes who is talking, without establishing a change in the message’s word frequency, the viewing angle or the child’s visual acuity.",
    "s": [
      "ARMOCKBOOK-152"
    ]
  },
  "e2.final.20261029.B.VS02": {
    "q": "Two people say the same word with the same stress, but differences in mouth opening make it look different. Which factor best explains this?",
    "o": [
      {
        "t": "Talker effects",
        "ok": true,
        "w": ""
      },
      {
        "t": "Coarticulation",
        "ok": false,
        "w": ""
      },
      {
        "t": "Linguistic context",
        "ok": false,
        "w": ""
      }
    ],
    "x": "Different speakers may produce visibly different versions of the same sound or word. That is a talker effect. Coarticulation concerns neighboring sounds, and linguistic context concerns information from the message.",
    "s": [
      "ARL7-11",
      "ARL7-9",
      "ARL7-15"
    ]
  },
  "e2.final.20261029.B.VS03": {
    "q": "A direct view from an appropriate distance guarantees good speechreading even if the face is poorly illuminated.",
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
    "x": "A favorable angle and distance do not remove the need for adequate illumination. Shadows or poor lighting can still obscure useful visual information.",
    "s": [
      "ARL7-16",
      "ARMOCKBOOK-152"
    ]
  },
  "e2.final.20261029.B.VS04": {
    "q": "Use Figure 5-1 below. Which plan targets a speechreader factor rather than the speaker or room?",
    "o": [
      {
        "t": "Improve illumination of the face",
        "ok": false,
        "w": ""
      },
      {
        "t": "Check the child’s visual acuity",
        "ok": true,
        "w": ""
      },
      {
        "t": "Reduce the talker’s distracting chewing",
        "ok": false,
        "w": ""
      }
    ],
    "x": "Visual acuity is a resource of the speechreader. Illumination belongs to the environment, while chewing is a speaker distractor.",
    "s": [
      "ARMOCKBOOK-152",
      "ARL7-17"
    ]
  },
  "e2.final.20261029.B.VS05": {
    "q": "On comparable word lists, a child scores 40% with sound alone, 20% with vision alone and 70% with both. Which interpretation is supported?",
    "o": [
      {
        "t": "Seventy percent of the phonemes were visible",
        "ok": false,
        "w": ""
      },
      {
        "t": "Vision reduced recognition below the sound-only level",
        "ok": false,
        "w": ""
      },
      {
        "t": "Better visual acuity caused the entire improvement",
        "ok": false,
        "w": ""
      },
      {
        "t": "The combined condition gave the best recognition",
        "ok": true,
        "w": ""
      }
    ],
    "x": "The combined condition produced the highest score, consistent with benefit from auditory and visual information together. The scores do not measure what percentage of phonemes is visible or establish a change in visual acuity.",
    "s": [
      "ARL7-19",
      "ARL7-17"
    ]
  },
  "e2.final.20261029.B.VS06": {
    "q": "ASL can contain regional varieties and dialects, just as spoken languages can.",
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
    "x": "ASL is a language with its own vocabulary and syntax, and it can include dialects, regionalisms and other variation. It is not a single uniform code for English words.",
    "s": [
      "ARMOCKBOOK-181",
      "ARL7-28"
    ]
  },
  "e2.final.20261029.B.VS07": {
    "q": "Which contrast would require a number distinction in Signed English?",
    "o": [
      {
        "t": "cat — cats",
        "ok": true,
        "w": ""
      },
      {
        "t": "walk — walked",
        "ok": false,
        "w": ""
      },
      {
        "t": "girl — girl’s",
        "ok": false,
        "w": ""
      }
    ],
    "x": "Cat/cats contrasts singular and plural number. Walk/walked changes tense, while girl/girl’s marks possession.",
    "s": [
      "ARL7-27"
    ]
  },
  "e2.final.20261029.B.VS08": {
    "q": "During Cued Speech, the handshape changes while its placement near the mouth stays the same. Which cue is primarily changing?",
    "o": [
      {
        "t": "The consonant cue",
        "ok": true,
        "w": ""
      },
      {
        "t": "The vowel cue",
        "ok": false,
        "w": ""
      },
      {
        "t": "The written-letter cue",
        "ok": false,
        "w": ""
      },
      {
        "t": "The English tense marker",
        "ok": false,
        "w": ""
      }
    ],
    "x": "The handshapes represent consonants, while placements represent vowels. Written letters belong to fingerspelling, and tense markers belong to manually coded English systems.",
    "s": [
      "ARMOCKBOOK-184",
      "ARMOCKBOOK-181"
    ]
  },
  "e2.final.20261029.B.VS09": {
    "q": "Which change would move Pidgin Signed English toward the more English-like end of its range?",
    "o": [
      {
        "t": "Replace meaning-based signs with phonemic hand cues",
        "ok": false,
        "w": ""
      },
      {
        "t": "Arrange the signs more closely to English word order",
        "ok": true,
        "w": ""
      },
      {
        "t": "Fingerspell every word instead of using signs",
        "ok": false,
        "w": ""
      },
      {
        "t": "Follow ASL sentence structure more closely",
        "ok": false,
        "w": ""
      }
    ],
    "x": "PSE can range from more ASL-like to more English-like signing. Moving toward English word order changes its position along that range; phonemic cueing or spelling every word changes the communication method itself.",
    "s": [
      "ARMOCKBOOK-181"
    ]
  },
  "e2.final.20261102.C.VS01": {
    "q": "Use Figure 5-1 below. A plan improves the viewing angle and addresses the listener’s reduced visual acuity. Which two contributors are being targeted?",
    "o": [
      {
        "t": "Speaker and signal/code",
        "ok": false,
        "w": ""
      },
      {
        "t": "Signal/code and environment",
        "ok": false,
        "w": ""
      },
      {
        "t": "Environment and speechreader",
        "ok": true,
        "w": ""
      },
      {
        "t": "Speaker and speechreader",
        "ok": false,
        "w": ""
      }
    ],
    "x": "Viewing angle is an environmental condition. Visual acuity is a characteristic of the speechreader. The plan addresses two contributors rather than treating both problems as features of the talker.",
    "s": [
      "ARMOCKBOOK-152",
      "ARL7-16",
      "ARL7-17"
    ],
    "media": {
      "kind": "img",
      "src": "assets/exam2/figures/final-fig5-1.jpg",
      "alt": "Source figure for this question; use Enlarge source figure for details."
    }
  },
  "e2.final.20261102.C.VS02": {
    "q": "The same speaker says “What did YOU buy?” and “What did you BUY?” The word sequence is unchanged. What can alter the visible speech pattern?",
    "o": [
      {
        "t": "The change in stress",
        "ok": true,
        "w": ""
      },
      {
        "t": "A change in talker familiarity",
        "ok": false,
        "w": ""
      },
      {
        "t": "A change in word frequency",
        "ok": false,
        "w": ""
      }
    ],
    "x": "Stress changes can alter how a word looks in connected speech even when the speaker and words remain the same. The change is not caused by a different talker or by using more common vocabulary.",
    "s": [
      "ARL7-9"
    ]
  },
  "e2.final.20261102.C.VS03": {
    "q": "Two homophenes may remain visually ambiguous even when the talker slows down.",
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
    "x": "Slowing speech may help processing, but it does not necessarily create a visible distinction between words that share the same lip pattern. Additional auditory or contextual information may still be needed.",
    "s": [
      "ARL7-10",
      "ARL7-14",
      "ARL7-15"
    ]
  },
  "e2.final.20261102.C.VS04": {
    "q": "For speechreading, a “high-frequency word” is a word that:",
    "o": [
      {
        "t": "Contains mainly high-pitched speech sounds",
        "ok": false,
        "w": ""
      },
      {
        "t": "Occurs often in everyday language",
        "ok": true,
        "w": ""
      },
      {
        "t": "Is spoken at a rapid rate",
        "ok": false,
        "w": ""
      },
      {
        "t": "Produces unusually large mouth movements",
        "ok": false,
        "w": ""
      }
    ],
    "x": "Word frequency refers to how often the word occurs in language, not its acoustic frequency. Frequently used words can be easier to recognize; pitch, speaking rate and movement size are separate properties.",
    "s": [
      "ARL7-15"
    ]
  },
  "e2.final.20261102.C.VS05": {
    "q": "Auditory input that is insufficient by itself cannot contribute useful information during speechreading.",
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
    "x": "Even limited residual hearing can add useful information when combined with visual speech cues. The auditory signal does not need to support the whole message by itself to contribute to better combined recognition.",
    "s": [
      "ARL7-17",
      "ARL7-19"
    ]
  },
  "e2.final.20261102.C.VS06": {
    "q": "An ASL sign is made at the chin instead of the forehead, with the same handshape and palm direction. Which characteristic changed?",
    "o": [
      {
        "t": "Location",
        "ok": true,
        "w": ""
      },
      {
        "t": "Orientation",
        "ok": false,
        "w": ""
      },
      {
        "t": "Hand configuration",
        "ok": false,
        "w": ""
      }
    ],
    "x": "The place where the sign is produced is its location. Palm direction is orientation, and the shape of the hand is hand configuration; both are held constant in the stem.",
    "s": [
      "ARL7-28"
    ]
  },
  "e2.final.20261102.C.VS07": {
    "q": "Seeing Essential English divides “reusable” into re/use/able. These divisions represent:",
    "o": [
      {
        "t": "Phonemes",
        "ok": false,
        "w": ""
      },
      {
        "t": "Morphemes",
        "ok": true,
        "w": ""
      },
      {
        "t": "Syllables",
        "ok": false,
        "w": ""
      }
    ],
    "x": "The divisions represent meaningful word parts: re-, use and -able. Seeing Essential English is described in terms of word roots and morphemes; these units are different from individual sounds or syllable counts.",
    "s": [
      "ARMOCKBOOK-181"
    ]
  },
  "e2.final.20261102.C.VS08": {
    "q": "A child can see the Cued Speech hand cues but the talker’s mouth is hidden. Which required information is missing?",
    "o": [
      {
        "t": "The written spelling of the word",
        "ok": false,
        "w": ""
      },
      {
        "t": "The ASL sign for the whole word",
        "ok": false,
        "w": ""
      },
      {
        "t": "The spoken mouth movements",
        "ok": true,
        "w": ""
      }
    ],
    "x": "Cued Speech combines handshape and placement cues with the mouth movements of the spoken language. Seeing the hands alone omits one of its three components; written spelling and whole-word ASL signs are not substitutes for it.",
    "s": [
      "ARMOCKBOOK-184",
      "ARL7-29"
    ]
  },
  "e2.final.20261102.C.VS09": {
    "q": "Which feature distinguishes the Rochester Method from Signed English?",
    "o": [
      {
        "t": "It can convey names and technical vocabulary",
        "ok": false,
        "w": ""
      },
      {
        "t": "It can represent English grammatical information",
        "ok": false,
        "w": ""
      },
      {
        "t": "It can preserve the order of an English sentence",
        "ok": false,
        "w": ""
      },
      {
        "t": "It fingerspells every word letter by letter",
        "ok": true,
        "w": ""
      }
    ],
    "x": "The distinctive feature is fingerspelling every word. Both approaches can convey English content and grammatical information, but Signed English uses meaning-based signs and grammatical markers rather than spelling every word.",
    "s": [
      "ARMOCKBOOK-181",
      "ARMOCKBOOK-184"
    ]
  }
};
F.coverageItems=F.items.map(function(i){return i.id;});
var added=[];
F.forms.forEach(function(form){
 var letter=form.label.replace('Form ','');
 form.items=form.items.map(function(id){
  var prior=F.items.find(function(i){return i.id===id;});
  var item=Object.assign(L.util.clone(prior),revisions[id],{id:'e2.mock.20261102.'+letter+'.'+prior.blueprintSlot,masteryRoot:id,contentVersion:version});
  added.push(item);return item.id;
 });
 form.version=version;
});
F.version=version;F.items=F.items.concat(added);D.items=D.items.concat(added);L.ITEMS=L.ITEMS.concat(added);
})(typeof window!=='undefined'?window:globalThis);
