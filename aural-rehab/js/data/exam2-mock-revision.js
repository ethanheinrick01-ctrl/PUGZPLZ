/* Direct Exam 2 mock questions; original served items remain versioned for saved work. */
(function(root){
'use strict';
var L=root.L,D=L.EXAM2_DATA,F=D.finalMocks;
var version="2026-10-30-direct-mocks-v2";
var patches={
  "e2.final.20261029.A.CI01": {
    "q": "Which hearing-loss profile meets the audiologic requirements for CI candidacy in a 16-month-old?",
    "o": [
      {
        "t": "Bilateral profound sensorineural loss",
        "ok": true,
        "w": ""
      },
      {
        "t": "Bilateral moderate sensorineural loss",
        "ok": false,
        "w": ""
      },
      {
        "t": "Unilateral profound sensorineural loss",
        "ok": false,
        "w": ""
      }
    ],
    "x": "For the young-child category taught here, the hearing-loss profile is bilateral profound SNHL. Moderate loss or profound loss in only one ear does not meet that category. Limited progress with appropriate hearing aids and the other candidacy requirements must also be evaluated."
  },
  "e2.final.20261029.B.CI01": {
    "q": "A 14-month-old has bilateral profound SNHL. Which finding provides additional support for cochlear implantation?",
    "o": [
      {
        "t": "Steady auditory progress with appropriate hearing aids",
        "ok": false,
        "w": ""
      },
      {
        "t": "Little auditory progress despite appropriate hearing aids",
        "ok": true,
        "w": ""
      },
      {
        "t": "Improved detection after fitting new hearing aids",
        "ok": false,
        "w": ""
      },
      {
        "t": "More consistent responses to voices with current hearing aids",
        "ok": false,
        "w": ""
      }
    ],
    "x": "Limited auditory development despite appropriately fitted hearing aids supports consideration of implantation. Progress with the current aids indicates benefit that must be considered. Degree of loss alone does not establish candidacy."
  },
  "e2.final.20261029.A.CI02": {
    "q": "A 5-year-old with bilateral severe-to-profound SNHL is being evaluated for a CI. Which result measures word recognition under the required listening condition?",
    "x": "The older-child criterion uses open-set WORD recognition in the BEST-AIDED condition. An unaided score, a closed-set score or a sentence score does not substitute for that measure. The course criterion is ≤30% correct; the rest of the candidacy evaluation is still required."
  },
  "e2.final.20261029.B.CI02": {
    "q": "Three older children have bilateral severe-to-profound SNHL. Which best-aided open-set word score meets the speech-recognition requirement for CI candidacy?",
    "o": [
      {
        "t": "45% correct",
        "ok": false,
        "w": ""
      },
      {
        "t": "25% correct",
        "ok": true,
        "w": ""
      },
      {
        "t": "75% correct",
        "ok": false,
        "w": ""
      }
    ],
    "x": "25% is below the 30% criterion used for older children. The higher scores do not meet that requirement. This is one part of a complete candidacy evaluation. The slide uses ≤30% and the spoken explanation uses less than 30%; this question avoids that disputed endpoint."
  },
  "e2.final.20261029.A.CI03": {
    "q": "Which adult hearing-loss configuration supports consideration of a cochlear implant?",
    "o": [
      {
        "t": "Severe-to-profound lows; normal mids and highs",
        "ok": false,
        "w": ""
      },
      {
        "t": "Moderate-to-profound lows; severe-to-profound mids and highs",
        "ok": true,
        "w": ""
      },
      {
        "t": "Normal lows; mild-to-moderate mids and highs",
        "ok": false,
        "w": ""
      }
    ],
    "x": "The adult configuration taught here combines moderate-to-profound low-frequency loss with severe-to-profound mid/high-frequency loss. Aided speech recognition, medical suitability, motivation and realistic expectations are also evaluated."
  },
  "e2.final.20261029.B.CI03": {
    "q": "An adult’s audiogram supports consideration of a CI. Which result best shows how much speech benefit the current hearing aids provide?",
    "x": "Aided speech recognition measures speech performance while using amplification. Unaided air/bone thresholds describe hearing sensitivity; tympanometry describes middle-ear function. None substitutes for measuring aided speech benefit."
  },
  "e2.final.20261029.A.CI04": {
    "q": "Up to 80% of children implanted before 12 months have demonstrated normal-range performance by school entry in which area?",
    "o": [
      {
        "t": "Receptive vocabulary",
        "ok": true,
        "w": ""
      },
      {
        "t": "Expressive vocabulary",
        "ok": false,
        "w": ""
      },
      {
        "t": "Word reading",
        "ok": false,
        "w": ""
      },
      {
        "t": "Word spelling",
        "ok": false,
        "w": ""
      }
    ],
    "x": "The reported early-implantation outcome was receptive vocabulary: understanding words. Up to 80% of children implanted before 12 months had receptive vocabulary within the normal range by school entry. This does not establish the same result for expressive vocabulary, reading or spelling, and it is not a guarantee for an individual child."
  },
  "e2.final.20261029.B.CI04": {
    "q": "Faster spoken-language progress is associated with implantation before age 3, especially before which age?",
    "x": "Implantation before 18 months is especially associated with faster spoken-language progress than implantation at older ages. This finding concerns progress rates; the separate before-12-month finding concerns receptive vocabulary by school entry."
  },
  "e2.final.20261029.A.CI05": {
    "q": "After receiving a second hearing aid, a listener becomes better at judging where a talker is located. Which benefit is demonstrated?",
    "x": "Sound localization is identifying where a sound originates. Speech recognition in noise concerns understanding a message, and auditory memory concerns retaining it. Bilateral amplification can support localization, although individual benefit varies."
  },
  "e2.final.20261029.B.CI05": {
    "q": "A listener understands a talker better among competing voices with two hearing aids than with one. Which benefit is demonstrated?",
    "o": [
      {
        "t": "Improved sound localization",
        "ok": false,
        "w": ""
      },
      {
        "t": "Improved speech recognition in noise",
        "ok": true,
        "w": ""
      },
      {
        "t": "Improved auditory memory",
        "ok": false,
        "w": ""
      },
      {
        "t": "Improved unaided sensitivity",
        "ok": false,
        "w": ""
      }
    ],
    "x": "The change is in recognizing speech amid competing sound. Localization concerns direction, memory concerns retention, and aided improvement does not show a change in unaided thresholds."
  },
  "e2.final.20261029.A.CI07": {
    "q": "Bilateral cochlear implantation provides acoustic amplification in one ear and electrical stimulation in the other.",
    "x": "Bilateral cochlear implants provide electrical stimulation on both sides. Acoustic amplification in one ear with a hearing aid and electrical stimulation in the other with a CI is bimodal hearing."
  },
  "e2.final.20261029.B.CI07": {
    "q": "A child with two cochlear implants has a bilateral implant configuration.",
    "x": "Two cochlear implants form a bilateral implant configuration. One CI with a hearing aid on the other side is bimodal."
  },
  "e2.final.20261029.A.CI08": {
    "q": "A child uses a CI on the right and a hearing aid on the left. Which configuration is this?"
  },
  "e2.final.20261029.A.CI09": {
    "q": "Which CI component converts microphone input into a digital signal?"
  },
  "e2.final.20261029.B.CI09": {
    "q": "Which set contains only external CI components?",
    "o": [
      {
        "t": "Microphone, receiver, transmitter, battery",
        "ok": false,
        "w": ""
      },
      {
        "t": "Microphone, processor, electrode array, battery",
        "ok": false,
        "w": ""
      },
      {
        "t": "Microphone, processor, transmitter, battery",
        "ok": true,
        "w": ""
      },
      {
        "t": "Receiver, processor, electrode array, battery",
        "ok": false,
        "w": ""
      }
    ],
    "x": "The microphone, sound processor, transmitter and battery are external. The receiver and electrode array are implanted components."
  },
  "e2.final.20261029.B.CI10": {
    "q": "Which CI component delivers electrical stimulation directly to auditory nerve fibers?"
  },
  "e2.final.20261029.B.CI11": {
    "q": "A CI microphone has detected an acoustic signal. What happens next?",
    "o": [
      {
        "t": "The receiver converts the code into pulses",
        "ok": false,
        "w": ""
      },
      {
        "t": "The array stimulates auditory nerve fibers",
        "ok": false,
        "w": ""
      },
      {
        "t": "The transmitter sends the code through the skin",
        "ok": false,
        "w": ""
      },
      {
        "t": "The processor converts its input into digital code",
        "ok": true,
        "w": ""
      }
    ],
    "x": "The processor encodes microphone input first. Transmission through the skin, conversion to pulses and stimulation by the array occur later."
  },
  "e2.final.20261029.A.CI12": {
    "q": "During CI surgery, which team member checks device function through real-time telemetry?",
    "o": [
      {
        "t": "Surgeon",
        "ok": false,
        "w": ""
      },
      {
        "t": "Audiologist",
        "ok": true,
        "w": ""
      },
      {
        "t": "Speech-language pathologist",
        "ok": false,
        "w": ""
      }
    ],
    "x": "The audiologist conducts telemetry verification during implantation. The surgeon places the electrode array; the SLP contributes speech/language assessment and habilitation."
  },
  "e2.final.20261029.B.CI12": {
    "o": [
      {
        "t": "To measure benefit from current amplification",
        "ok": true,
        "w": ""
      },
      {
        "t": "To measure hearing sensitivity without amplification",
        "ok": false,
        "w": ""
      },
      {
        "t": "To describe ear-specific middle-ear function",
        "ok": false,
        "w": ""
      }
    ],
    "x": "Aided testing measures benefit while appropriate hearing aids are in use. Unaided testing assesses sensitivity without amplification, and middle-ear tests address a different part of the evaluation."
  },
  "e2.final.20261029.A.CI13": {
    "q": "Initial CI activation is typically scheduled approximately how long after surgery?",
    "x": "The course timeline places initial activation about 2–4 weeks after surgery. Later follow-up visits assess benefit and adjust stimulation settings."
  },
  "e2.final.20261029.B.CI13": {
    "q": "A child’s CI is activated, but some sounds are uncomfortably loud. Which follow-up action directly addresses the stimulation settings?",
    "o": [
      {
        "t": "Repeat unaided pure-tone testing",
        "ok": false,
        "w": ""
      },
      {
        "t": "Repeat middle-ear measurements",
        "ok": false,
        "w": ""
      },
      {
        "t": "Adjust the cochlear implant map",
        "ok": true,
        "w": ""
      },
      {
        "t": "Reassess receptive vocabulary",
        "ok": false,
        "w": ""
      }
    ],
    "x": "Map adjustment changes stimulation settings to improve comfort, sound quality and speech understanding. The other measures can inform care but do not themselves change the map."
  },
  "e2.final.20261029.A.NF01": {
    "q": "A child’s brain changes its organization in response to repeated auditory experience. What does this illustrate?",
    "o": [
      {
        "t": "Neuroplasticity",
        "ok": true,
        "w": ""
      },
      {
        "t": "Developmental synchrony",
        "ok": false,
        "w": ""
      },
      {
        "t": "Listening age",
        "ok": false,
        "w": ""
      }
    ],
    "x": "Neuroplasticity is the brain’s capacity to change with stimulation. Synchrony describes age-appropriate timing of development; listening age describes accumulated access to sound."
  },
  "e2.final.20261029.B.NF01": {
    "q": "During approximately which period is early auditory neuroplasticity greatest?",
    "x": "The teaching model emphasizes the first 3½ years as a period of greatest auditory neuroplasticity. This does not mean later learning is impossible."
  },
  "e2.final.20261029.B.NF02": {
    "q": "Which pattern best illustrates developmental synchrony?"
  },
  "e2.final.20261029.A.NF03": {
    "q": "When auditory input is absent, auditory cortical regions may become responsive to which other sensory inputs?",
    "o": [
      {
        "t": "Vision and smell",
        "ok": false,
        "w": ""
      },
      {
        "t": "Vision and touch",
        "ok": true,
        "w": ""
      },
      {
        "t": "Taste and touch",
        "ok": false,
        "w": ""
      },
      {
        "t": "Taste and smell",
        "ok": false,
        "w": ""
      }
    ],
    "x": "The cross-modal example involves visual and tactile input recruiting auditory cortical territory. It illustrates a change across sensory systems, not an identical outcome expected in every child."
  },
  "e2.final.20261029.A.NF04": {
    "q": "A child begins wearing effective hearing technology throughout waking hours at 4 months and is now 16 months old. What is the child’s listening age?",
    "x": "Listening age counts from the beginning of consistent, useful auditory access. With continuous access as stated, 16 − 4 = 12 months. Chronological age and age at fitting are different values."
  },
  "e2.final.20261029.B.NF04": {
    "q": "Which event marks Day Zero for a child’s listening age?",
    "x": "Day Zero is the start of effective technology use throughout waking hours. Suspicion of hearing loss, a referral or surgery alone does not establish consistent auditory access."
  },
  "e2.final.20261029.A.NF05": {
    "q": "Which ability best demonstrates meaningful auditory function?",
    "o": [
      {
        "t": "Detecting that a sound is present",
        "ok": false,
        "w": ""
      },
      {
        "t": "Using a spoken message to guide a response",
        "ok": true,
        "w": ""
      },
      {
        "t": "Converting sound into neural activity",
        "ok": false,
        "w": ""
      },
      {
        "t": "Carrying neural activity toward the brain",
        "ok": false,
        "w": ""
      }
    ],
    "x": "Meaningful auditory function includes interpreting sound and responding appropriately. Detection, transduction and neural transmission support that process but do not by themselves demonstrate understanding."
  },
  "e2.final.20261029.B.NF05": {
    "q": "Sound has been detected, converted into neural responses and sent to the appropriate brain areas. Which step is still needed for meaningful auditory function?"
  },
  "e2.final.20261029.B.NF06": {
    "q": "Early auditory access stimulates the brain while it is still organizing itself and is especially receptive to stimulation.",
    "x": "Early amplification or implantation can provide input during initial brain organization, when auditory neuroplasticity is greatest. Later intervention can still support learning."
  },
  "e2.final.20261029.B.NF07": {
    "q": "Which feature distinguishes listening from simply hearing a sound?",
    "o": [
      {
        "t": "Perception of an acoustic signal",
        "ok": false,
        "w": ""
      },
      {
        "t": "Transmission of neural activity",
        "ok": false,
        "w": ""
      },
      {
        "t": "Conscious attention to the signal",
        "ok": true,
        "w": ""
      },
      {
        "t": "Availability of audible speech",
        "ok": false,
        "w": ""
      }
    ],
    "x": "Listening requires conscious attention and concentration. Audibility and neural transmission provide access but do not establish that the listener is attending."
  },
  "e2.final.20261029.A.NF08": {
    "q": "Access to sound is the foundation of auditory learning."
  },
  "e2.final.20261029.A.NF09": {
    "q": "Which vocabulary pattern is expected around 16–18 months?",
    "o": [
      {
        "t": "Understands 10+; produces 50+ words",
        "ok": false,
        "w": ""
      },
      {
        "t": "Understands 50+; produces 10+ words",
        "ok": true,
        "w": ""
      },
      {
        "t": "Understands 150; produces 40–50 words",
        "ok": false,
        "w": ""
      }
    ],
    "x": "At 16–18 months, the Integrated Scales list understanding 50 or more words and producing 10 or more meaningful words. Receptive vocabulary and expressive vocabulary describe different abilities, and developmental bands allow variation."
  },
  "e2.final.20261029.B.NF09": {
    "q": "A 17-month-old understands 50 familiar words. Which language domain does this describe?"
  },
  "e2.final.20261029.A.NF10": {
    "q": "Which approximate vocabulary range is associated with ages 4–5 years?",
    "x": "The vocabulary chart used for this course gives approximately 1,000–1,600 words at 4–5 years. It does not distinguish receptive from expressive counts, so it should not be interpreted as a diagnostic cutoff or mixed with separately labeled developmental domains."
  },
  "e2.final.20261029.B.NF10": {
    "q": "A vocabulary of approximately 600–1,000 words is associated with which age range?",
    "x": "The course vocabulary chart places 600–1,000 words at 3–4 years, followed by 1,000–1,600 at 4–5 years. These approximate chart values are not individual diagnostic thresholds."
  },
  "e2.final.20261029.A.NF11": {
    "q": "Which auditory response is expected during the first 3 months of life?",
    "o": [
      {
        "t": "Understanding a phrase with its keyword in the middle",
        "ok": false,
        "w": ""
      },
      {
        "t": "Associating clothing and body-part words with objects",
        "ok": false,
        "w": ""
      },
      {
        "t": "Startling to a sudden sound",
        "ok": true,
        "w": ""
      }
    ],
    "x": "The earliest audition band includes awareness, startle and recognition of a familiar caregiver’s voice. More developed word-object and phrase skills emerge later."
  },
  "e2.final.20261029.B.NF11": {
    "q": "Which auditory behavior is expected by about 3 months?",
    "o": [
      {
        "t": "Recognizing a familiar caregiver’s voice",
        "ok": true,
        "w": ""
      },
      {
        "t": "Responding to one’s name occasionally",
        "ok": false,
        "w": ""
      },
      {
        "t": "Understanding simple spoken questions",
        "ok": false,
        "w": ""
      },
      {
        "t": "Imitating several words heard",
        "ok": false,
        "w": ""
      }
    ],
    "x": "Recognition of a caregiver’s voice belongs to the 0–3-month band. Occasional name response is listed at 4–6 months; the word and question skills are later developments."
  },
  "e2.final.20261029.A.NF12": {
    "q": "A 5-month-old is beginning to attach meaning to sound. Which response fits this stage?",
    "o": [
      {
        "t": "Understanding a longer phrase with a middle keyword",
        "ok": false,
        "w": ""
      },
      {
        "t": "Responding occasionally to their own name",
        "ok": true,
        "w": ""
      },
      {
        "t": "Associating many heard words with familiar objects",
        "ok": false,
        "w": ""
      }
    ],
    "x": "Occasional response to one’s name fits the emerging sound meaning of the 4–6-month band. The other choices reflect more advanced word and phrase processing."
  },
  "e2.final.20261029.B.NF12": {
    "q": "By about 4–6 months, an infant can begin responding to changes in which feature of a voice?"
  },
  "e2.final.20261029.A.NF13": {
    "q": "Which auditory skill is expected to emerge around 16–18 months?"
  },
  "e2.final.20261029.B.NF13": {
    "q": "Which behavior shows a 16–18-month-old using heard words to recognize objects?",
    "o": [
      {
        "t": "Selecting a familiar toy when it is named",
        "ok": true,
        "w": ""
      },
      {
        "t": "Producing ten meaningful spoken words",
        "ok": false,
        "w": ""
      },
      {
        "t": "Producing most vowels in speech",
        "ok": false,
        "w": ""
      }
    ],
    "x": "Selecting the named toy demonstrates an auditory word-object association. Speaking words describes expressive language, and producing vowels describes speech production."
  },
  "e2.final.20261029.A.NF14": {
    "q": "Which sequence shows the expected progression of auditory development?",
    "o": [
      {
        "t": "Phrase discrimination → sound awareness → emerging sound meaning",
        "ok": false,
        "w": ""
      },
      {
        "t": "Sound awareness → emerging sound meaning → phrase discrimination",
        "ok": true,
        "w": ""
      },
      {
        "t": "Emerging sound meaning → phrase discrimination → sound awareness",
        "ok": false,
        "w": ""
      }
    ],
    "x": "Early awareness provides a base for attaching meaning to sound, followed by more developed word and phrase discrimination. The sequence describes development, not a rigid deadline for each child."
  },
  "e2.final.20261029.B.NF14": {
    "q": "Both a 3-month-old and a 6-month-old turn toward sound. Which additional response better fits the older infant’s auditory development?",
    "o": [
      {
        "t": "Understanding longer spoken phrases",
        "ok": false,
        "w": ""
      },
      {
        "t": "Imitating a variety of heard words",
        "ok": false,
        "w": ""
      },
      {
        "t": "Answering simple spoken questions",
        "ok": false,
        "w": ""
      },
      {
        "t": "Responding to changes in vocal inflection",
        "ok": true,
        "w": ""
      }
    ],
    "x": "Response to vocal inflection is included at 4–6 months. Head turning can occur in more than one early band, so it alone does not distinguish them. The phrase, word-imitation and question skills are later."
  },
  "e2.final.20261029.B.SA01": {
    "o": [
      {
        "t": "Fundamental frequency",
        "ok": false,
        "w": ""
      },
      {
        "t": "Syllable duration",
        "ok": false,
        "w": ""
      },
      {
        "t": "Sound level",
        "ok": true,
        "w": ""
      },
      {
        "t": "Formant frequency",
        "ok": false,
        "w": ""
      }
    ],
    "x": "Increasing distance reduces the level reaching the listener. It does not by itself change the talker’s pitch, resonances or speech-sound duration."
  },
  "e2.final.20261029.A.SA02": {
    "q": "The greatest amount of speech energy is concentrated below 1,000 Hz."
  },
  "e2.final.20261029.B.SA02": {
    "q": "The overall speech spectrum extends approximately across which frequency range?"
  },
  "e2.final.20261029.A.SA03": {
    "q": "How do vowels generally compare with consonants in duration and acoustic energy?",
    "o": [
      {
        "t": "Longer duration and lower energy",
        "ok": false,
        "w": ""
      },
      {
        "t": "Longer duration and higher energy",
        "ok": true,
        "w": ""
      },
      {
        "t": "Shorter duration and higher energy",
        "ok": false,
        "w": ""
      }
    ],
    "x": "Vowels generally last longer and carry more acoustic energy. Individual durations vary and overlap; the comparison is a general pattern."
  },
  "e2.final.20261029.A.SA05": {
    "q": "Why can a meaningful sentence be easier to recover than an isolated word when part of the signal is missed?",
    "o": [
      {
        "t": "Context restricts the possible missing information",
        "ok": true,
        "w": ""
      },
      {
        "t": "Sentence length reduces the number of acoustic cues",
        "ok": false,
        "w": ""
      },
      {
        "t": "Word boundaries eliminate the effects of coarticulation",
        "ok": false,
        "w": ""
      }
    ],
    "x": "Linguistic and situational context narrow plausible interpretations of missing information. A sentence does not remove coarticulation or automatically reduce the acoustic material that must be processed."
  },
  "e2.final.20261029.A.SA06": {
    "o": [
      {
        "t": "Children rely less on context when interpreting speech",
        "ok": false,
        "w": ""
      },
      {
        "t": "Children obtain less useful information from clear consonants",
        "ok": false,
        "w": ""
      },
      {
        "t": "Children have less language knowledge available to fill gaps",
        "ok": true,
        "w": ""
      },
      {
        "t": "Children benefit less from reducing the competing noise",
        "ok": false,
        "w": ""
      }
    ],
    "x": "Children may have less linguistic and cognitive knowledge available to reconstruct masked speech. A less complete vocabulary and less experience can make contextual reconstruction harder."
  },
  "e2.final.20261029.B.SA06": {
    "o": [
      {
        "t": "Signal-to-noise ratio",
        "ok": true,
        "w": ""
      },
      {
        "t": "Reverberation time",
        "ok": false,
        "w": ""
      },
      {
        "t": "Talker-listener distance",
        "ok": false,
        "w": ""
      }
    ],
    "x": "With speech level fixed and competing noise reduced, the signal-to-noise ratio improves. Reverberation time and talker-listener distance need not change."
  },
  "e2.final.20261029.A.SA07": {
    "q": "In the speech-sound distribution below, which consonant is concentrated farthest toward the high-frequency end?",
    "o": [
      {
        "t": "/m/",
        "ok": false,
        "w": ""
      },
      {
        "t": "/s/",
        "ok": true,
        "w": ""
      },
      {
        "t": "/n/",
        "ok": false,
        "w": ""
      }
    ],
    "x": "/s/ is concentrated in the high-frequency region. /m/ and /n/ have important lower-frequency energy. The plotted locations are approximate."
  },
  "e2.final.20261029.A.SA08": {
    "q": "The table gives relative power values of 220 for /i/ and 210 for /r/. Which interpretation is justified?"
  },
  "e2.final.20261029.B.SA09": {
    "q": "Because vowels carry most speech energy, hearing the vowels in a word is sufficient to identify the word accurately.",
    "x": "Energy and identifying information are different. Consonants contribute essential distinctions even though they carry less energy, so hearing the vowels does not establish accurate word identification."
  },
  "e2.final.20261029.B.SA15": {
    "q": "A child detects a spoken word but repeatedly misses its final /s/. Which explanation best fits this pattern?",
    "o": [
      {
        "t": "The consonant supplies most of the word’s acoustic power",
        "ok": false,
        "w": ""
      },
      {
        "t": "The vowel is audible while weaker consonant cues are missed",
        "ok": true,
        "w": ""
      },
      {
        "t": "The detection response establishes accurate word identification",
        "ok": false,
        "w": ""
      }
    ],
    "x": "The child may detect strong vowel energy without receiving the weaker high-frequency consonant information. Detection alone does not establish identification of every speech sound."
  },
  "e2.final.20261029.A.AT01": {
    "q": "A child points to a picture after hearing a monosyllabic word. Which closed-set test uses four lists of 25 words?"
  },
  "e2.final.20261029.B.AT01": {
    "q": "Which information does a caregiver questionnaire such as PEACH add to a young child’s auditory assessment?",
    "o": [
      {
        "t": "Performance on recorded open-set words",
        "ok": false,
        "w": ""
      },
      {
        "t": "Listening performance during daily activities",
        "ok": true,
        "w": ""
      },
      {
        "t": "Hearing thresholds obtained with insert earphones",
        "ok": false,
        "w": ""
      },
      {
        "t": "Device output measured in a test box",
        "ok": false,
        "w": ""
      }
    ],
    "x": "PEACH gathers functional information about everyday listening. Recorded word scores, ear-specific thresholds and measured device output answer other assessment questions."
  },
  "e2.final.20261029.B.AT02": {
    "q": "Which assessment organizes functional auditory skills into seven integrated hierarchical categories?"
  },
  "e2.final.20261029.B.AT04": {
    "q": "A child who drops a block on both sound and silence trials has demonstrated reliable sound detection.",
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
    "x": "A detection response must distinguish sound from silence. Dropping a block in both conditions may reflect anticipation rather than reliable detection. Silence trials help check that distinction."
  },
  "e2.final.20261029.B.AT05": {
    "q": "Which level immediately follows discrimination in Erber’s hierarchy?"
  },
  "e2.final.20261029.B.AT08": {
    "q": "Using sentence meaning and grammatical context to recover a message is an analytic auditory-training task.",
    "x": "This is synthetic training, which uses meaningful larger units, syntax and context. Analytic training focuses on smaller speech components."
  },
  "e2.final.20261029.A.AT09": {
    "o": [
      {
        "t": "Synthetic",
        "ok": false,
        "w": ""
      },
      {
        "t": "Pragmatic",
        "ok": true,
        "w": ""
      },
      {
        "t": "Analytic",
        "ok": false,
        "w": ""
      },
      {
        "t": "Eclectic",
        "ok": false,
        "w": ""
      }
    ]
  },
  "e2.final.20261029.A.AT11": {
    "o": [
      {
        "t": "Formal listening practice",
        "ok": false,
        "w": ""
      },
      {
        "t": "Informal listening practice",
        "ok": true,
        "w": ""
      },
      {
        "t": "Standardized auditory assessment",
        "ok": false,
        "w": ""
      }
    ],
    "x": "Practice embedded in snack preparation is informal training within a daily routine. Formal training uses structured sessions; standardized assessment follows a defined testing procedure."
  },
  "e2.final.20261029.A.AT12": {
    "q": "To make word identification easier while keeping the listening level unchanged, which change is most appropriate?",
    "x": "A smaller closed response set generally reduces selection demand. Keep the spoken target among the available pictures. Expanding the choices or removing the response alternatives increases demand without requiring a change in listening level."
  },
  "e2.final.20261029.A.AT13": {
    "q": "Which sequence lists the four SPICE goal categories?"
  },
  "e2.final.20261029.A.AT14": {
    "q": "Which program description fits SKI-HI?"
  },
  "e2.final.20261029.B.AT14": {
    "q": "How is the SKI-HI auditory-stimulation program organized?",
    "o": [
      {
        "t": "Three phases and seven general skills",
        "ok": false,
        "w": ""
      },
      {
        "t": "Four phases and seven general skills",
        "ok": false,
        "w": ""
      },
      {
        "t": "Four phases and eleven general skills",
        "ok": true,
        "w": ""
      },
      {
        "t": "Three phases and eleven general skills",
        "ok": false,
        "w": ""
      }
    ],
    "x": "SKI-HI has four phases and eleven general skills. It is a home-intervention curriculum used with language and speech stimulation."
  },
  "e2.final.20261029.A.VS03": {
    "q": "Facing the speaker at 0° azimuth from about 2–5 feet provides a favorable position for speechreading.",
    "x": "Facing the speaker directly from about 2–5 feet is the viewing guidance taught here. Lighting, visibility and individual needs also affect speechreading; the distance is not a universal performance cutoff."
  },
  "e2.final.20261029.A.VS05": {
    "q": "Which speaking style best supports speechreading?",
    "o": [
      {
        "t": "Precise articulation at a natural or slightly slower rate",
        "ok": true,
        "w": ""
      },
      {
        "t": "Exaggerated articulation at a greatly slowed rate",
        "ok": false,
        "w": ""
      },
      {
        "t": "Reduced lip movement at a steady conversational rate",
        "ok": false,
        "w": ""
      }
    ],
    "x": "Precise, natural articulation at a manageable rate preserves useful visual cues. Exaggeration, extreme slowing or reduced visible movement can make the signal harder to interpret."
  },
  "e2.final.20261029.B.VS07": {
    "q": "A signer adds markers to distinguish cook, cooks, cooked and cooking. What information do those markers carry?",
    "x": "The added markers represent English grammatical forms, such as tense or number. They do not spell each letter or code each spoken phoneme."
  },
  "e2.final.20261029.B.VS08": {
    "q": "Cued Speech uses how many handshapes and placements near the mouth?",
    "x": "The described English Cued Speech system uses eight handshapes for consonants and four placements for vowels, combined with mouth movements."
  },
  "e2.final.20261029.A.VS09": {
    "q": "An ASL user manually spells an unfamiliar person’s name letter by letter. Which form is being used?"
  },
  "e2.final.20261029.B.VS09": {
    "q": "Which description best fits Pidgin Signed English (PSE)?",
    "o": [
      {
        "t": "A mixture of ASL and English signing features",
        "ok": true,
        "w": ""
      },
      {
        "t": "A system of hand cues for spoken phonemes",
        "ok": false,
        "w": ""
      },
      {
        "t": "A system of strict English signs and affix markers",
        "ok": false,
        "w": ""
      },
      {
        "t": "A sequence of fingerspelled letters for every word",
        "ok": false,
        "w": ""
      }
    ],
    "x": "PSE combines ASL and English signing features. Cued Speech represents phonemes, strictly coded English systems preserve English forms, and the Rochester Method uses fingerspelling for every word."
  },
  "e2.final.20261029.coverage.ci-battery": {
    "q": "Which CI component can be replaced externally without surgery?",
    "o": [
      {
        "t": "Battery",
        "ok": true,
        "w": ""
      },
      {
        "t": "Implanted receiver",
        "ok": false,
        "w": ""
      },
      {
        "t": "Electrode array",
        "ok": false,
        "w": ""
      }
    ],
    "x": "The battery belongs to the external CI components. The receiver and electrode array are implanted."
  },
  "e2.final.20261029.coverage.ci-nerve": {
    "q": "Which structure receives information from the auditory nerve for meaningful central processing?",
    "o": [
      {
        "t": "External sound processor",
        "ok": false,
        "w": ""
      },
      {
        "t": "Brain",
        "ok": true,
        "w": ""
      },
      {
        "t": "Internal receiver",
        "ok": false,
        "w": ""
      },
      {
        "t": "Electrode array",
        "ok": false,
        "w": ""
      }
    ],
    "x": "The auditory nerve carries information to the brain for central processing. The processor, receiver and array act earlier in the CI signal chain."
  },
  "e2.final.20261029.coverage.ci-littlears": {
    "q": "Which caregiver questionnaire uses 35 questions about auditory development?"
  },
  "e2.final.20261029.coverage.ci-family": {
    "q": "During preimplant counseling, which topic helps a family form realistic expectations?",
    "o": [
      {
        "t": "Choosing the electrode insertion depth",
        "ok": false,
        "w": ""
      },
      {
        "t": "Setting the initial electrical map",
        "ok": false,
        "w": ""
      },
      {
        "t": "Discussing the timeline and communication options",
        "ok": true,
        "w": ""
      },
      {
        "t": "Determining unaided thresholds from the interview",
        "ok": false,
        "w": ""
      }
    ],
    "x": "Discussing the timeline, likely experience, therapy and communication options supports realistic expectations. Surgical planning, programming and hearing measurements are separate team responsibilities."
  },
  "e2.final.20261029.coverage.ci-slp": {
    "o": [
      {
        "t": "Assess and develop speech/language skills",
        "ok": true,
        "w": ""
      },
      {
        "t": "Measure and adjust electrical stimulation levels",
        "ok": false,
        "w": ""
      },
      {
        "t": "Review imaging and plan electrode placement",
        "ok": false,
        "w": ""
      }
    ],
    "x": "The SLP evaluates speech/language development and supports habilitation. CI programming is an audiologic role, while medical/surgical planning belongs to the ENT."
  },
  "e2.final.20261029.coverage.vocab-18": {
    "q": "Approximately how many words are associated with the 18-month vocabulary milestone?",
    "x": "The vocabulary chart used for this course lists approximately 10–15 words at 18 months. It does not label separate receptive and expressive totals; its approximate count should not be treated as a diagnostic threshold."
  },
  "e2.final.20261029.coverage.vocab-3": {
    "q": "A vocabulary of approximately 300–400 words is associated with which age?",
    "x": "The course vocabulary chart associates 300–400 words with age 3. Its conflicting 24-month and 2-year entries are not needed for this question."
  },
  "e2.final.20261029.coverage.scale-domains": {
    "q": "A child understands familiar object names but cannot yet say them. Which two developmental domains account for this difference?",
    "o": [
      {
        "t": "Listening and cognition",
        "ok": false,
        "w": ""
      },
      {
        "t": "Receptive and expressive language",
        "ok": true,
        "w": ""
      },
      {
        "t": "Speech and social communication",
        "ok": false,
        "w": ""
      },
      {
        "t": "Cognition and speech",
        "ok": false,
        "w": ""
      }
    ],
    "x": "Understanding words is receptive language, while producing meaningful words is expressive language. These domains need to be tracked separately."
  },
  "e2.final.20261029.coverage.scale-bands": {
    "q": "Every skill in a developmental age band must be mastered as soon as a child reaches its lower age boundary.",
    "x": "The developmental guidance places mastery of the full group nearer the upper end of the band. A band describes a range of acquisition, not a requirement that every skill appear on its first day."
  },
  "e2.final.20261029.coverage.listening-modifiers": {
    "q": "Two 18-month-olds received hearing devices at 6 months. One wears them throughout waking hours and the other for four hours daily. Which factor limits a comparison based only on fitting dates?",
    "o": [
      {
        "t": "Age when the devices were first acquired",
        "ok": false,
        "w": ""
      },
      {
        "t": "Length of time since the devices were fitted",
        "ok": false,
        "w": ""
      },
      {
        "t": "Amount of daily access to sound",
        "ok": true,
        "w": ""
      }
    ],
    "x": "Their fitting dates and chronological timelines match, but daily wear time differs. Actual listening experience also depends on signal quality and meaningful auditory-language opportunities."
  },
  "e2.final.20261029.coverage.parents-intelligibility": {
    "q": "A 3-year-old’s parents understand about 80% of the child’s speech. Does that observation establish 80% intelligibility to unfamiliar listeners?",
    "o": [
      {
        "t": "No; listener familiarity changes the interpretation",
        "ok": true,
        "w": ""
      },
      {
        "t": "Yes; the percentage applies regardless of listener",
        "ok": false,
        "w": ""
      },
      {
        "t": "No; a vocabulary count is needed to calculate intelligibility",
        "ok": false,
        "w": ""
      },
      {
        "t": "Yes; age alone determines the intelligibility percentage",
        "ok": false,
        "w": ""
      }
    ],
    "x": "The 80% age-3 estimate is labeled understanding by parents. It cannot be transferred automatically to unfamiliar listeners. Intelligibility is not a vocabulary count."
  },
  "e2.final.20261029.coverage.redundancy-speaker": {
    "q": "A talker improves articulation, stress and intonation while the words and room stay the same. Which contributor to communication changes?"
  },
  "e2.final.20261029.coverage.redundancy-environment": {
    "q": "A classroom’s reverberation is reduced while the same message is delivered. Which contributor to communication changes?"
  },
  "e2.final.20261029.coverage.constraint-situation": {
    "q": "At a restaurant, a listener expects a question about ordering food. Which linguistic constraint creates that expectation?"
  },
  "e2.final.20261029.coverage.noise-listener": {
    "q": "A listener cannot identify the topic of a message. Where does this source of communication interference arise?"
  },
  "e2.final.20261029.coverage.ling-order": {
    "q": "Why include unpredictable pauses and silence trials during a Ling check?",
    "o": [
      {
        "t": "To separate sound-based responses from anticipation",
        "ok": true,
        "w": ""
      },
      {
        "t": "To separate spoken identification from picture pointing",
        "ok": false,
        "w": ""
      },
      {
        "t": "To separate vowel production from consonant production",
        "ok": false,
        "w": ""
      }
    ],
    "x": "Varying timing and including silence reveal responses based on anticipation rather than sound. They do not by themselves compare response formats or speech-production categories."
  },
  "e2.final.20261029.coverage.ling-change": {
    "q": "A child repeatedly misses a Ling sound that was detected reliably last week. What can be concluded from this change alone?",
    "o": [
      {
        "t": "The hearing device has malfunctioned",
        "ok": false,
        "w": ""
      },
      {
        "t": "Listening access needs further investigation",
        "ok": true,
        "w": ""
      },
      {
        "t": "Middle-ear disease is the cause",
        "ok": false,
        "w": ""
      },
      {
        "t": "Permanent hearing thresholds have worsened",
        "ok": false,
        "w": ""
      }
    ],
    "x": "A changed response flags possible changes in access, but it does not diagnose the cause. Device function, hearing status, middle-ear status and test conditions need consideration."
  },
  "e2.final.20261029.coverage.tool-gasp": {
    "o": [
      {
        "t": "Phoneme detection, word identification, sentence comprehension",
        "ok": true,
        "w": ""
      },
      {
        "t": "Detection, suprasegmentals, connected speech",
        "ok": false,
        "w": ""
      },
      {
        "t": "Sound awareness, phonetic listening, auditory comprehension",
        "ok": false,
        "w": ""
      },
      {
        "t": "Sound awareness, localization, auditory memory",
        "ok": false,
        "w": ""
      }
    ]
  },
  "e2.final.20261029.coverage.tool-dasl": {
    "q": "Which three areas does DASL II evaluate?"
  },
  "e2.final.20261029.coverage.tool-fit": {
    "q": "Which combination should guide selection of an auditory assessment for a child?"
  },
  "e2.final.20261029.coverage.erber-discrimination": {
    "s": [
      "ARL6-25",
      "ARTB4-118"
    ]
  },
  "e2.final.20261029.coverage.difficulty-structure": {
    "o": [
      {
        "t": "Stimulus similarity",
        "ok": false,
        "w": ""
      },
      {
        "t": "Task structure",
        "ok": true,
        "w": ""
      },
      {
        "t": "Response-set size",
        "ok": false,
        "w": ""
      },
      {
        "t": "Listening level",
        "ok": false,
        "w": ""
      }
    ],
    "x": "Moving from predictable structured trials toward spontaneous conversation changes task structure. Similarity, number of alternatives and listening level are separate difficulty variables."
  },
  "e2.final.20261029.coverage.program-cottage": {
    "q": "Which program follows language, listening, cognition and speech development from birth to age 8?"
  },
  "e2.final.20261029.coverage.program-clock": {
    "q": "Which is a formal auditory-training program?",
    "x": "Learn To Talk Around The Clock is an auditory-training program. NU-CHIPS and GASP are assessment tools. Recognizing a program is different from identifying a test."
  },
  "e2.final.20261029.coverage.lipreading-definition": {
    "q": "A child recognizes speech from visible mouth movements and facial cues with no auditory input. Which task is being used?",
    "o": [
      {
        "t": "Lipreading",
        "ok": true,
        "w": ""
      },
      {
        "t": "Audiovisual speechreading",
        "ok": false,
        "w": ""
      },
      {
        "t": "Auditory identification",
        "ok": false,
        "w": ""
      }
    ],
    "x": "The course distinction calls visual-only recognition lipreading and combined visual/auditory recognition speechreading. Terminology can vary elsewhere; the defining condition here is no auditory input."
  },
  "e2.final.20261029.coverage.coarticulation": {
    "o": [
      {
        "t": "The written spelling determines the visible movement",
        "ok": false,
        "w": ""
      },
      {
        "t": "Neighboring sounds influence the articulatory movement",
        "ok": true,
        "w": ""
      },
      {
        "t": "Every phoneme requires a separate fixed mouth position",
        "ok": false,
        "w": ""
      }
    ],
    "x": "Coarticulation means neighboring sounds influence articulation. Visible lip/jaw movements therefore vary with phonetic context rather than following one isolated shape for each phoneme."
  },
  "e2.final.20261029.coverage.asl-parameters": {
    "q": "Which four physical features distinguish ASL signs?"
  },
  "e2.final.20261029.coverage.manual-love": {
    "q": "Which historically described manual system resembles Signing Exact English and adds a method for writing each sign?",
    "x": "Linguistics of Visual English (LOVE) is described as resembling Signing Exact English with a way to write each sign. PSE mixes ASL/English signing features; Cued Speech uses phonemic cues. This is a historical system comparison."
  },
  "e2.final.20261029.coverage.manual-see2": {
    "q": "Which system uses word-based signs, markers for English affixes and strict English word order?",
    "o": [
      {
        "t": "American Sign Language",
        "ok": false,
        "w": ""
      },
      {
        "t": "Pidgin Signed English",
        "ok": false,
        "w": ""
      },
      {
        "t": "Signing Exact English",
        "ok": true,
        "w": ""
      },
      {
        "t": "Seeing Essential English",
        "ok": false,
        "w": ""
      }
    ],
    "x": "Signing Exact English uses word-based signs and English affix markers in English order. Seeing Essential English bases signs on roots or morphemes. Full names distinguish them here because the lecture and textbook use inconsistent SEE numbering."
  },
  "e2.final.20261029.coverage.manual-see1": {
    "q": "Seeing Essential English divides words into signs based on which units?",
    "o": [
      {
        "t": "Individual written letters",
        "ok": false,
        "w": ""
      },
      {
        "t": "Word roots or morphemes",
        "ok": true,
        "w": ""
      },
      {
        "t": "Individual spoken phonemes",
        "ok": false,
        "w": ""
      }
    ],
    "x": "Seeing Essential English uses word roots or morphemes, illustrated by parts such as trans/port/a/tion. Fingerspelling represents letters; Cued Speech represents spoken phonemes. The full name avoids the inconsistent SEE numbering."
  },
  "e2.final.20261029.coverage.manual-rochester": {
    "q": "Fingerspelling every word while using speech and speechreading describes which method?",
    "o": [
      {
        "t": "Signed English",
        "ok": false,
        "w": ""
      },
      {
        "t": "Cued Speech",
        "ok": false,
        "w": ""
      },
      {
        "t": "Rochester Method",
        "ok": true,
        "w": ""
      },
      {
        "t": "Pidgin Signed English",
        "ok": false,
        "w": ""
      }
    ],
    "x": "The Rochester Method uses fingerspelling for each word with speech/speechreading. Cued Speech uses phonemic cues, and Signed English/PSE use signs rather than spelling every word."
  },
  "e2.final.20261029.coverage.manual-english": {
    "q": "What do English and ASL have in common as languages?",
    "o": [
      {
        "t": "Each has its own grammar and syntax",
        "ok": true,
        "w": ""
      },
      {
        "t": "Each follows English word order",
        "ok": false,
        "w": ""
      },
      {
        "t": "Each represents words through spoken phonemes",
        "ok": false,
        "w": ""
      }
    ],
    "x": "Both are independent languages with grammar, syntax and meaningful vocabulary. They use different primary modalities and do not share one word order or a spoken-phoneme system."
  }
};
var revised={};
L.ITEM_REVISIONS=L.ITEM_REVISIONS||{};
F.items=F.items.map(function(item){
 var patch=patches[item.id];if(!patch)return item;
 var archive=L.ITEM_REVISIONS[item.id];
 if(!archive)archive=L.ITEM_REVISIONS[item.id]={current:version,versions:{}};
 var original=JSON.parse(JSON.stringify(item));
 if(!archive.versions.legacy)archive.versions.legacy=original;
 if(item.contentVersion&&!archive.versions[item.contentVersion])archive.versions[item.contentVersion]=JSON.parse(JSON.stringify(item));
 archive.current=version;
 return revised[item.id]=Object.assign({},item,patch,{contentVersion:version});
});
D.items=D.items.map(function(item){return revised[item.id]||item;});
L.ITEMS=L.ITEMS.map(function(item){return revised[item.id]||item;});
F.version=version;
F.forms.forEach(function(form){form.version=version;});
})(typeof window!=='undefined'?window:globalThis);
