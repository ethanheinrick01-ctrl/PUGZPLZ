// Presentation-only selections tied to exact authored Exam 2 teaching and existing source text.
// Terms and meanings are editorial pairs; no dictionary scan, source rewriting, or assessment mutations.
(function(root){
'use strict';
var L=root.L;
var plans={
 "A <strong class=\"e2-term\">cochlear implant (CI)</strong> provides electrical access to sound information.": {
  "terms": [
   "cochlear implant (CI)"
  ],
  "definitions": [
   "provides electrical access to sound information"
  ]
 },
 "The hearing aid amplifies acoustic input through the existing hearing pathway.": {
  "terms": [
   "hearing aid"
  ],
  "definitions": [
   "amplifies acoustic input through the existing hearing pathway"
  ]
 },
 "The CI converts incoming sound information into electrical stimulation.": {
  "terms": [
   "CI"
  ],
  "definitions": [
   "converts incoming sound information into electrical stimulation"
  ]
 },
 "Read the source <strong class=\"e2-term\">audiogram</strong> as an illustration of aided detection.": {
  "terms": [
   "audiogram"
  ],
  "definitions": [
   "an illustration of aided detection"
  ]
 },
 "Bypassing damaged <strong class=\"e2-term\">hair cells</strong> does not repair or replace those cells. The implant supplies a different route for delivering information to the nerve.": {
  "terms": [],
  "definitions": [],
  "checkpoint": "Keep the distinction"
 },
 "These plotted thresholds illustrate the teaching point. They do not guarantee a particular recipient’s thresholds or speech understanding.": {
  "terms": [],
  "definitions": [],
  "checkpoint": "Read the evidence limit"
 },
 "The <strong class=\"e2-term\">microphone</strong> detects environmental acoustic signals.": {
  "terms": [
   "microphone"
  ],
  "definitions": [
   "detects environmental acoustic signals"
  ]
 },
 "The <strong class=\"e2-term\">sound processor</strong> converts the incoming signal into a digital code.": {
  "terms": [
   "sound processor"
  ],
  "definitions": [
   "converts the incoming signal into a digital code"
  ]
 },
 "The <strong class=\"e2-term\">transmitting coil/transmitter</strong> sends information across the skin to the internal receiver.": {
  "terms": [
   "transmitting coil/transmitter"
  ],
  "definitions": [
   "sends information across the skin to the internal receiver"
  ]
 },
 "The <strong class=\"e2-term\">battery</strong> supplies power. The external coil is not the electrode array placed inside the cochlea.": {
  "terms": [
   "battery"
  ],
  "definitions": [
   "supplies power"
  ],
  "checkpoint": "Keep the components separate"
 },
 "The <strong class=\"e2-term\">receiver</strong> receives transmitted information and converts it into <strong class=\"e2-term\">electrical pulses</strong>.": {
  "terms": [
   "receiver"
  ],
  "definitions": [
   "receives transmitted information and converts it into electrical pulses"
  ]
 },
 "The <strong class=\"e2-term\">electrode array</strong> stimulates auditory nerve fibers.": {
  "terms": [
   "electrode array"
  ],
  "definitions": [
   "stimulates auditory nerve fibers"
  ]
 },
 "The auditory nerve carries the resulting information to the brain, where it is interpreted.": {
  "terms": [
   "auditory nerve"
  ],
  "definitions": [
   "carries the resulting information to the brain, where it is interpreted"
  ]
 },
 "<strong class=\"signal-sequence\">Processor → transmitter → receiver → array → nerve → brain</strong>.": {
  "terms": [],
  "definitions": [],
  "checkpoint": "Follow the signal"
 },
 "<strong class=\"e2-term\">Alessandro Volta</strong> is associated with the lecture’s 1790 electrical experiments.": {
  "terms": [
   "Alessandro Volta"
  ],
  "definitions": [
   "associated with the lecture’s 1790 electrical experiments"
  ]
 },
 "House’s 1972 wearable <strong class=\"e2-term\">House/3M</strong> device used one electrode in the <strong class=\"e2-term\">basal cochlea</strong>.": {
  "terms": [
   "House/3M"
  ],
  "definitions": [
   "used one electrode in the basal cochlea"
  ]
 },
 "<strong class=\"e2-term\">Multichannel systems</strong> became widely used in the 1980s. Keep the earlier single-electrode device distinct from this later development.": {
  "terms": [
   "Multichannel systems"
  ],
  "definitions": [
   "became widely used in the 1980s"
  ],
  "checkpoint": "Follow the development"
 },
 "<strong class=\"e2-term\">Cochlear</strong> received FDA approval for the <strong class=\"e2-term\">Nucleus 22</strong> in 1985.": {
  "terms": [
   "Cochlear"
  ],
  "definitions": [
   "received FDA approval for the Nucleus 22 in 1985"
  ]
 },
 "<strong class=\"e2-term\">MED-EL</strong> developed a <strong class=\"e2-term\">behind-the-ear processor</strong> in 1991.": {
  "terms": [
   "MED-EL"
  ],
  "definitions": [
   "developed a behind-the-ear processor in 1991"
  ]
 },
 "<strong class=\"e2-term\">Advanced Bionics</strong> is associated here with simultaneous stimulation of multiple electrodes.": {
  "terms": [
   "Advanced Bionics"
  ],
  "definitions": [
   "associated here with simultaneous stimulation of multiple electrodes"
  ]
 },
 "Keep the date attached to the number. It is not a current count and does not establish that the market or available devices have stayed the same.": {
  "terms": [],
  "definitions": [],
  "checkpoint": "Keep the historical context"
 },
 "<strong class=\"e2-term\">CI candidacy</strong> is evaluated by a team using several kinds of evidence.": {
  "terms": [
   "CI candidacy"
  ],
  "definitions": [
   "evaluated by a team using several kinds of evidence"
  ]
 },
 "<strong class=\"e2-term\">FDA indications</strong> concern the labeled use of a device.": {
  "terms": [
   "FDA indications"
  ],
  "definitions": [
   "concern the labeled use of a device"
  ]
 },
 "<strong class=\"e2-term\">Insurer requirements</strong> concern the conditions for coverage.": {
  "terms": [
   "Insurer requirements"
  ],
  "definitions": [
   "concern the conditions for coverage"
  ]
 },
 "Expected meaningful benefit concerns the patient’s needs, current performance, and rehabilitation context.": {
  "terms": [
   "Expected meaningful benefit"
  ],
  "definitions": [
   "concerns the patient’s needs, current performance, and rehabilitation context"
  ]
 },
 "A <strong class=\"e2-term\">referral</strong> requests a full evaluation. An SLP does not have to independently prove every surgical or insurance criterion before making that referral.": {
  "terms": [
   "referral"
  ],
  "definitions": [
   "requests a full evaluation"
  ]
 },
 "These decisions are related, but satisfying one is not proof that every other requirement has been satisfied.": {
  "terms": [],
  "definitions": [],
  "checkpoint": "Separate the decisions"
 },
 "An audiogram alone does not describe the child’s complete functional progress or family situation.": {
  "terms": [],
  "definitions": [],
  "checkpoint": "Use the complete profile"
 },
 "For ages <strong class=\"note-label\">9–24 months</strong>, the slide emphasizes auditory development with appropriate amplification.": {
  "terms": [
   "9–24 months"
  ],
  "definitions": [
   "auditory development with appropriate amplification"
  ]
 },
 "For ages <strong class=\"note-label\">2–18 years</strong>, distinguish the hearing-loss and aided-performance findings.": {
  "terms": [
   "2–18 years"
  ],
  "definitions": [
   "distinguish the hearing-loss and aided-performance findings"
  ]
 },
 "It gives ≤30% <strong class=\"e2-term\">open-set word recognition</strong> in the <strong class=\"e2-term\">best-aided condition</strong>. The percent describes word recognition rather than a hearing threshold.": {
  "terms": [
   "≤30% open-set word recognition"
  ],
  "definitions": [
   "in the best-aided condition"
  ]
 },
 "The slide does not supply one universal adult percentage cutoff. Do not invent a number to fill that gap.": {
  "terms": [],
  "definitions": [],
  "checkpoint": "Keep the adult cutoff unresolved"
 },
 "The October 6 transcript says “less than 30%.” Practice involving the boundary explicitly names the slide so the difference is visible.": {
  "terms": [],
  "definitions": [],
  "checkpoint": "Keep the source boundary"
 },
 "The <strong class=\"e2-term\">single-sided deafness (SSD)</strong> teaching example includes ear-specific findings.": {
  "terms": [
   "single-sided deafness (SSD)"
  ],
  "definitions": [
   "teaching example includes ear-specific findings"
  ]
 },
 "The implant-ear <strong class=\"e2-term\">pure-tone average (PTA)</strong> is greater than 80 <strong class=\"e2-term\">dB HL</strong>, with normal or near-normal hearing in the other ear.": {
  "terms": [
   "pure-tone average (PTA)"
  ],
  "definitions": [
   "greater than 80 dB HL"
  ]
 },
 "A PTA describes hearing thresholds in dB HL. A word-recognition score describes the percentage of words recognized.": {
  "terms": [
   "PTA",
   "word-recognition score"
  ],
  "definitions": [
   "describes hearing thresholds in dB HL",
   "describes the percentage of words recognized"
  ]
 },
 "The filled slide prints an aided word score of “&lt;30 dB HL.” That is a unit error because a word score is a <strong class=\"e2-term\">percentage</strong>.": {
  "terms": [],
  "definitions": [],
  "checkpoint": "Keep the units distinct"
 },
 "The reliable distinction is threshold measurement versus word-recognition performance. Choosing one percentage silently would conceal the evidence gap.": {
  "terms": [],
  "definitions": [],
  "checkpoint": "Retain the source conflict"
 },
 "A referral sign prompts assessment rather than independently proving candidacy.": {
  "terms": [
   "referral sign"
  ],
  "definitions": [
   "prompts assessment rather than independently proving candidacy"
  ]
 },
 "In school-age children, look for persistent access and progress concerns with appropriately fitted technology.": {
  "terms": [
   "school-age children"
  ],
  "definitions": [
   "persistent access and progress concerns with appropriately fitted technology"
  ]
 },
 "Describe the actual observed behavior and the conditions in which it occurs.": {
  "terms": [],
  "definitions": [],
  "checkpoint": "Record the observation"
 },
 "Document what changed, the technology being used, the setting, and the listening behavior.": {
  "terms": [],
  "definitions": [],
  "checkpoint": "Support the referral"
 },
 "<strong class=\"e2-term\">Unaided behavioral testing</strong> examines responses without amplification when developmentally feasible.": {
  "terms": [
   "Unaided behavioral testing"
  ],
  "definitions": [
   "examines responses without amplification when developmentally feasible"
  ]
 },
 "<strong class=\"e2-term\">Electrophysiological measures</strong>, including <strong class=\"e2-term\">ABR/ASSR</strong>, provide additional evidence about auditory responses and thresholds.": {
  "terms": [
   "ABR/ASSR"
  ],
  "definitions": [
   "provide additional evidence about auditory responses and thresholds"
  ]
 },
 "<strong class=\"e2-term\">Open-set recognition</strong> does not supply a limited known answer list.": {
  "terms": [
   "Open-set recognition"
  ],
  "definitions": [
   "does not supply a limited known answer list"
  ]
 },
 "<strong class=\"e2-term\">Closed-set recognition</strong> constrains the possible responses.": {
  "terms": [
   "Closed-set recognition"
  ],
  "definitions": [
   "constrains the possible responses"
  ],
  "supplement": {
   "label": "Compare like with like",
   "text": "A closed-set percentage is not interchangeable with the same open-set percentage. Age, language, and response demands matter."
  }
 },
 "An unavailable speech score is not a score of normal function, a measured zero, or automatic exclusion from evaluation.": {
  "terms": [],
  "definitions": [],
  "checkpoint": "Keep missing data separate"
 },
 "The same percentage on open- and closed-set tasks does not establish the same level of performance.": {
  "terms": [],
  "definitions": [],
  "checkpoint": "Compare like with like"
 },
 "<strong class=\"e2-term\">Functional questionnaires</strong> describe meaningful sound use outside a single test session.": {
  "terms": [
   "Functional questionnaires"
  ],
  "definitions": [
   "describe meaningful sound use outside a single test session"
  ]
 },
 "<strong class=\"e2-term\">IT-MAIS</strong> is taught for birth–3 years, using 10 parent interview questions.": {
  "terms": [
   "IT-MAIS"
  ],
  "definitions": [
   "birth–3 years, using 10 parent interview questions"
  ]
 },
 "<strong class=\"e2-term\">MAIS</strong> is listed for age 3 years and up, with 10 questions.": {
  "terms": [
   "MAIS"
  ],
  "definitions": [
   "age 3 years and up, with 10 questions"
  ]
 },
 "<strong class=\"e2-term\">Little Ears</strong> has 35 parent questions. The supplied slide describes its age range as birth and up.": {
  "terms": [
   "Little Ears"
  ],
  "definitions": [
   "35 parent questions"
  ]
 },
 "<strong class=\"e2-term\">PEACH</strong> addresses everyday performance in quiet and noise.": {
  "terms": [
   "PEACH"
  ],
  "definitions": [
   "addresses everyday performance in quiet and noise"
  ]
 },
 "<strong class=\"e2-term\">ELF</strong> addresses early listening at different distances.": {
  "terms": [
   "ELF"
  ],
  "definitions": [
   "addresses early listening at different distances"
  ]
 },
 "<strong class=\"e2-term\">CHILD</strong> addresses home listening and can include an older child’s participation.": {
  "terms": [
   "CHILD"
  ],
  "definitions": [
   "addresses home listening"
  ]
 },
 "<strong class=\"e2-term\">LIFE</strong> provides classroom perspectives.": {
  "terms": [
   "LIFE"
  ],
  "definitions": [
   "provides classroom perspectives"
  ]
 },
 "<strong class=\"e2-term\">FAPI</strong> provides a detailed functional auditory-skills profile.": {
  "terms": [
   "FAPI"
  ],
  "definitions": [
   "provides a detailed functional auditory-skills profile"
  ]
 },
 "These tools describe auditory development. They do not replace medical or audiometric assessment.": {
  "terms": [],
  "definitions": [],
  "checkpoint": "Combine sources of evidence"
 },
 "The student presentations are not verified scoring manuals. Exact scoring algorithms from recollections are not keyed here.": {
  "terms": [],
  "definitions": [],
  "checkpoint": "Keep the scoring limit"
 },
 "<strong class=\"e2-term\">Medical evaluation</strong> examines suitability beyond the hearing test.": {
  "terms": [
   "Medical evaluation"
  ],
  "definitions": [
   "examines suitability beyond the hearing test"
  ]
 },
 "<strong class=\"e2-term\">MRI</strong> is contrasted with <strong class=\"e2-term\">CT</strong> as soft-tissue versus bony-anatomy imaging in this course.": {
  "terms": [
   "MRI",
   "CT"
  ],
  "definitions": [
   "soft-tissue",
   "bony-anatomy imaging"
  ]
 },
 "<strong class=\"e2-term\">Family counseling</strong> prepares the family for the process and ongoing work.": {
  "terms": [
   "Family counseling"
  ],
  "definitions": [
   "prepares the family for the process and ongoing work"
  ]
 },
 "These components answer medical questions that a language sample or aided speech score cannot answer by itself.": {
  "terms": [],
  "definitions": [],
  "checkpoint": "Separate assessment purposes"
 },
 "Learn their role in connecting families with support. This packet does not establish their current availability, eligibility, or services.": {
  "terms": [],
  "definitions": [],
  "checkpoint": "Keep resource context dated"
 },
 "<strong class=\"e2-term\">Parents and family</strong> <mark class=\"e2-emphasis\" data-emphasis-source=\"ART1006\">contribute to decisions and daily habilitation</mark>.": {
  "terms": [
   "Parents and family"
  ],
  "definitions": [
   "contribute to decisions and daily habilitation"
  ]
 },
 "The <strong class=\"e2-term\">audiologist</strong> assesses hearing, contributes to candidacy, and programs or maps the CI throughout the lifespan.": {
  "terms": [
   "audiologist"
  ],
  "definitions": [
   "assesses hearing, contributes to candidacy, and programs or maps the CI throughout the lifespan"
  ]
 },
 "The <strong class=\"e2-term\">SLP</strong> evaluates and develops speech, language, and auditory skills. Stalled progress may first become apparent during this work.": {
  "terms": [
   "SLP"
  ],
  "definitions": [
   "evaluates and develops speech, language, and auditory skills"
  ]
 },
 "The <strong class=\"e2-term\">ENT/surgeon</strong> performs implantation and manages the medical aspects of care.": {
  "terms": [
   "ENT/surgeon"
  ],
  "definitions": [
   "performs implantation and manages the medical aspects of care"
  ]
 },
 "Placing the electrode array and checking or programming its function are different responsibilities.": {
  "terms": [],
  "definitions": [],
  "checkpoint": "Keep the roles distinct"
 },
 "The team combines these contributions to make and carry out an individualized recommendation.": {
  "terms": [],
  "definitions": [],
  "checkpoint": "Combine the team’s evidence"
 },
 "The audiologist performs <strong class=\"e2-term\">telemetry</strong> to check device and electrode function.": {
  "terms": [
   "telemetry"
  ],
  "definitions": [
   "check device and electrode function"
  ]
 },
 "Sutherland’s slide gives <strong class=\"note-label\">2–4 weeks after surgery</strong> for initial activation.": {
  "terms": [
   "initial activation"
  ],
  "definitions": [
   "2–4 weeks after surgery"
  ]
 },
 "A functioning device during surgery is not a measure of the child’s eventual real-world language benefit.": {
  "terms": [],
  "definitions": [],
  "checkpoint": "Separate function and benefit"
 },
 "Neither range is a guarantee for every patient.": {
  "terms": [],
  "definitions": [],
  "checkpoint": "Keep timing qualified"
 },
 "<strong class=\"e2-term\">Mapping</strong> adjusts the implant’s electrical stimulation program.": {
  "terms": [
   "Mapping"
  ],
  "definitions": [
   "adjusts the implant’s electrical stimulation program"
  ]
 },
 "<strong class=\"e2-term\">T levels</strong> concern threshold or the softest detectable stimulation.": {
  "terms": [
   "T levels"
  ],
  "definitions": [
   "threshold or the softest detectable stimulation"
  ]
 },
 "The upper comfortable <strong class=\"e2-term\">C level</strong> concerns the comfortable upper end of stimulation.": {
  "terms": [
   "C level"
  ],
  "definitions": [
   "comfortable upper end of stimulation"
  ]
 },
 "<strong class=\"e2-term\">Progressive maps</strong> allow gradual changes as the recipient’s tolerance and experience develop.": {
  "terms": [
   "Progressive maps"
  ],
  "definitions": [
   "allow gradual changes as the recipient’s tolerance and experience develop"
  ]
 },
 "Changing a setting is an action. Improved measured access or communication is an outcome that needs its own evidence.": {
  "terms": [],
  "definitions": [],
  "checkpoint": "Measure the outcome"
 },
 "These are course examples. Follow-up is individualized and continues across the lifespan.": {
  "terms": [],
  "definitions": [],
  "checkpoint": "Keep follow-up individualized"
 },
 "<strong class=\"e2-term\">Intrinsic characteristics</strong> include cognitive ability, family environment, age at hearing-loss onset, and pre-implant hearing.": {
  "terms": [
   "Intrinsic characteristics"
  ],
  "definitions": [
   "include cognitive ability, family environment, age at hearing-loss onset, and pre-implant hearing"
  ]
 },
 "<strong class=\"e2-term\">Device characteristics</strong> include technology, device function, duration of use, and age at implantation.": {
  "terms": [
   "Device characteristics"
  ],
  "definitions": [
   "include technology, device function, duration of use, and age at implantation"
  ]
 },
 "<strong class=\"e2-term\">Age at onset</strong> describes when hearing loss began.": {
  "terms": [
   "Age at onset"
  ],
  "definitions": [
   "describes when hearing loss began"
  ]
 },
 "<strong class=\"e2-term\">Age at implantation</strong> describes when the implant was placed.": {
  "terms": [
   "Age at implantation"
  ],
  "definitions": [
   "describes when the implant was placed"
  ]
 },
 "<strong class=\"e2-term\">Duration of implant use</strong> describes elapsed experience with the device.": {
  "terms": [
   "Duration of implant use"
  ],
  "definitions": [
   "describes elapsed experience with the device"
  ]
 },
 "Receptive vocabulary concerns understood vocabulary. This outcome does not establish normal hearing, every language ability, or guaranteed success for every child.": {
  "terms": [
   "Receptive vocabulary"
  ],
  "definitions": [
   "concerns understood vocabulary"
  ],
  "checkpoint": "Keep the outcome specific"
 },
 "Consistent access and rehabilitation remain necessary. Surgery alone does not teach the child language.": {
  "terms": [],
  "definitions": [],
  "checkpoint": "Connect access and learning"
 },
 "<strong class=\"e2-term\">Binaural hearing</strong> means hearing with two ears.": {
  "terms": [
   "Binaural hearing"
  ],
  "definitions": [
   "hearing with two ears"
  ]
 },
 "<strong class=\"e2-term\">Bimodal hearing</strong> uses a CI on one side and a hearing aid on the other.": {
  "terms": [
   "Bimodal hearing"
  ],
  "definitions": [
   "uses a CI on one side and a hearing aid on the other"
  ]
 },
 "<strong class=\"e2-term\">Bilateral CIs</strong> means one cochlear implant in each ear.": {
  "terms": [
   "Bilateral CIs"
  ],
  "definitions": [
   "one cochlear implant in each ear"
  ]
 },
 "That shorthand is not a universal definition of the word bilateral. Name the devices when the distinction matters.": {
  "terms": [],
  "definitions": [],
  "checkpoint": "Name the actual configuration"
 },
 "<strong class=\"e2-term\">Auditory function</strong> is the brain’s ability to use sound meaningfully.": {
  "terms": [
   "Auditory function"
  ],
  "definitions": [
   "the brain’s ability to use sound meaningfully"
  ]
 },
 "The slide says the <strong class=\"e2-term\">cochlea</strong> is formed and functional by about 20 weeks of gestation.": {
  "terms": [
   "cochlea"
  ],
  "definitions": [
   "formed and functional by about 20 weeks of gestation"
  ]
 },
 "Hearing technology and ongoing <strong class=\"e2-term\">audiologic management</strong> support delivery of usable information.": {
  "terms": [
   "Hearing technology"
  ],
  "definitions": [
   "ongoing audiologic management support delivery of usable information"
  ]
 },
 "Receiving a signal and using its meaning are connected stages rather than identical achievements.": {
  "terms": [],
  "definitions": [],
  "checkpoint": "Separate access and interpretation"
 },
 "Follow the lecture’s four-part auditory task.": {
  "terms": [],
  "definitions": [],
  "checkpoint": "Follow the sequence"
 },
 "<strong class=\"e2-term\">Neuroplasticity</strong> is the brain’s ability to alter its structure and function with stimulation.": {
  "terms": [
   "Neuroplasticity"
  ],
  "definitions": [
   "the brain’s ability to alter its structure and function with stimulation"
  ]
 },
 "Experience tunes perception toward the <strong class=\"e2-term\">phonemes</strong> heard in daily language.": {
  "terms": [
   "phonemes"
  ],
  "definitions": [
   "heard in daily language"
  ]
 },
 "Interpret “<strong class=\"e2-term\">neurobiological emergency</strong>” as an emphasis on early access and intervention.": {
  "terms": [
   "neurobiological emergency"
  ],
  "definitions": [
   "an emphasis on early access and intervention"
  ]
 },
 "It does not mean that every pathway stops changing on a particular birthday or that later intervention cannot help.": {
  "terms": [],
  "definitions": [],
  "checkpoint": "Keep plasticity qualified"
 },
 "Frequently encountered speech distinctions become better represented. Distinctions not used in those languages become less salient.": {
  "terms": [],
  "definitions": [],
  "checkpoint": "Connect experience and perception"
 },
 "<strong class=\"e2-term\">Cross-modal reorganization</strong> describes use of auditory cortical areas for other sensory functions when auditory input is absent.": {
  "terms": [
   "Cross-modal reorganization"
  ],
  "definitions": [
   "use of auditory cortical areas for other sensory functions when auditory input is absent"
  ]
 },
 "The slide locates primary auditory cortex in <strong class=\"e2-term\">Heschl’s gyrus</strong> and cites visual or tactile recruitment in deaf adults.": {
  "terms": [
   "Heschl’s gyrus"
  ],
  "definitions": [
   "primary auditory cortex"
  ]
 },
 "<strong class=\"e2-term\">Developmental synchrony</strong> means acquiring skills near their biologically expected time.": {
  "terms": [
   "Developmental synchrony"
  ],
  "definitions": [
   "acquiring skills near their biologically expected time"
  ]
 },
 "This account does not establish that visual language or touch should be withheld from a child.": {
  "terms": [],
  "definitions": [],
  "checkpoint": "Keep the implication precise"
 },
 "“Muddy in, muddy out” emphasizes <strong class=\"e2-term\">input quality</strong>. A device that is worn but supplies an unclear signal does not provide the intended access.": {
  "terms": [],
  "definitions": [],
  "checkpoint": "Check input quality"
 },
 "<strong class=\"e2-term\">Hearing</strong> concerns access to or perception of sound.": {
  "terms": [
   "Hearing"
  ],
  "definitions": [
   "access to or perception of sound"
  ]
 },
 "<strong class=\"e2-term\">Listening</strong> <mark class=\"e2-emphasis\" data-emphasis-source=\"ART1022-1\">involves conscious attention to sound.</mark>": {
  "terms": [
   "Listening"
  ],
  "definitions": [
   "conscious attention to sound"
  ]
 },
 "<strong class=\"e2-term\">Phonetic categories</strong> concern the speech-sound distinctions the listener learns.": {
  "terms": [
   "Phonetic categories"
  ],
  "definitions": [
   "concern the speech-sound distinctions the listener learns"
  ]
 },
 "<strong class=\"e2-term\">Phonological processes</strong> concern the organization and use of speech-sound patterns.": {
  "terms": [
   "Phonological processes"
  ],
  "definitions": [
   "concern the organization and use of speech-sound patterns"
  ]
 },
 "<strong class=\"e2-term\">Lexical-semantic use</strong> concerns words and their meanings.": {
  "terms": [
   "Lexical-semantic use"
  ],
  "definitions": [
   "concerns words and their meanings"
  ]
 },
 "Hearing a voice does not establish that the child listened to it or understood what was said.": {
  "terms": [],
  "definitions": [],
  "checkpoint": "Separate the achievements"
 },
 "It is not a diagnostic cutoff or a guarantee that reaching a total produces a particular language outcome.": {
  "terms": [],
  "definitions": [],
  "checkpoint": "Keep the hours model qualified"
 },
 "The course’s <strong class=\"e2-term\">Day Zero</strong> begins with <mark class=\"e2-emphasis\" data-emphasis-source=\"ART1020\">consistent technology use throughout waking hours</mark>.": {
  "terms": [
   "Day Zero"
  ],
  "definitions": [
   "consistent technology use throughout waking hours"
  ]
 },
 "<strong class=\"e2-term\">Listening age</strong> reflects experience with usable auditory input.": {
  "terms": [
   "Listening age"
  ],
  "definitions": [
   "reflects experience with usable auditory input"
  ]
 },
 "<strong class=\"e2-term\">Chronological age</strong> counts time since birth.": {
  "terms": [
   "Chronological age"
  ],
  "definitions": [
   "counts time since birth"
  ]
 },
 "The subtraction describes the example’s elapsed experience. It assumes the consistent useful access specified in the example.": {
  "terms": [],
  "definitions": [],
  "checkpoint": "State the calculation’s condition"
 },
 "Elapsed calendar time with a device is not automatically equivalent to the same amount of clear, useful listening experience.": {
  "terms": [],
  "definitions": [],
  "checkpoint": "Count useful experience"
 },
 "<strong class=\"e2-term\">Audiologic management</strong> establishes access that daily interaction can use.": {
  "terms": [
   "Audiologic management"
  ],
  "definitions": [
   "establishes access that daily interaction can use"
  ]
 },
 "<strong class=\"e2-term\">Parent coaching</strong> helps extend learning beyond a brief weekly therapy visit.": {
  "terms": [
   "Parent coaching"
  ],
  "definitions": [
   "helps extend learning beyond a brief weekly therapy visit"
  ]
 },
 "The lecture’s 10-hour/day example gives 10 × 365 = 3,650 hours/year.": {
  "terms": [],
  "definitions": [],
  "checkpoint": "Calculate cumulative access"
 },
 "Those equivalences do not follow from its stated daily hours: 3,650 ÷ (4 × 365) = 2.5 years, and 4,380 ÷ (3 × 365) = 4 years.": {
  "terms": [],
  "definitions": [],
  "checkpoint": "Retain the arithmetic correction"
 },
 "When progress stalls, revisit <strong class=\"e2-term\">audibility</strong> and <strong class=\"e2-term\">device function</strong>.": {
  "terms": [],
  "definitions": [],
  "checkpoint": "Check access before changing the task"
 },
 "<strong class=\"e2-term\">Audibility</strong> means that the presence of sound can be detected.": {
  "terms": [
   "Audibility"
  ],
  "definitions": [
   "the presence of sound can be detected"
  ],
  "supplement": {
   "label": "Detection versus understanding",
   "text": "Hearing that speech is present does not establish that its words are intelligible."
  }
 },
 "<strong class=\"e2-term\">Intelligibility</strong> concerns access to the speech distinctions and meaning needed to understand the message.": {
  "terms": [
   "Intelligibility"
  ],
  "definitions": [
   "access to the speech distinctions and meaning needed to understand the message"
  ]
 },
 "The horizontal dimension is frequency. The vertical dimension uses <strong class=\"e2-term\">dB SPL</strong>.": {
  "terms": [
   "horizontal dimension",
   "vertical dimension"
  ],
  "definitions": [
   "frequency",
   "uses dB SPL"
  ]
 },
 "The lower boundary is the minimum sound pressure needed for detection.": {
  "terms": [
   "lower boundary"
  ],
  "definitions": [
   "minimum sound pressure needed for detection"
  ]
 },
 "The upper boundary is the <strong class=\"e2-term\">threshold of feeling</strong>.": {
  "terms": [
   "upper boundary"
  ],
  "definitions": [
   "threshold of feeling"
  ]
 },
 "The space between them represents the <strong class=\"e2-term\">dynamic range of hearing</strong>.": {
  "terms": [
   "dynamic range of hearing"
  ],
  "definitions": [
   "space between them"
  ]
 },
 "<mark class=\"e2-emphasis\" data-emphasis-source=\"ART1020\">“I hear it” and “I understand it” therefore answer different questions.</mark>": {
  "terms": [],
  "definitions": [],
  "checkpoint": "Separate detection and understanding"
 },
 "Do not assume that this SPL-based lower boundary is flat because a clinical audiogram uses an HL reference.": {
  "terms": [],
  "definitions": [],
  "checkpoint": "Read the measurement scale"
 },
 "The overall speech spectrum is taught as about 50–10,000 Hz.": {
  "terms": [
   "speech spectrum"
  ],
  "definitions": [
   "about 50–10,000 Hz"
  ]
 },
 "The broader hearing range discussed in class is 20–20,000 Hz.": {
  "terms": [
   "hearing range"
  ],
  "definitions": [
   "20–20,000 Hz"
  ]
 },
 "Vowels have strong low/mid-frequency energy. The summary gives roughly 250–500 Hz for the dominant low band.": {
  "terms": [
   "Vowels"
  ],
  "definitions": [
   "strong low/mid-frequency energy"
  ]
 },
 "Many weaker consonant cues occur around 2–4 kHz and above.": {
  "terms": [
   "consonant cues"
  ],
  "definitions": [
   "around 2–4 kHz and above"
  ]
 },
 "<strong class=\"e2-term\">Voiced consonants</strong> also contain lower-frequency energy. These bands summarize teaching relationships rather than the complete spectrum of every phoneme.": {
  "terms": [
   "Voiced consonants"
  ],
  "definitions": [
   "also contain lower-frequency energy"
  ]
 },
 "HL and SPL use different references. There is no universal subtraction that converts every stimulus between them.": {
  "terms": [],
  "definitions": [],
  "checkpoint": "Keep HL and SPL distinct"
 },
 "Both vowel and consonant information must be available. Hearing the powerful parts of speech alone does not ensure clear word recognition.": {
  "terms": [],
  "definitions": [],
  "checkpoint": "Separate energy and information"
 },
 "<strong class=\"e2-term\">Duration</strong> is the time a sound lasts.": {
  "terms": [
   "Duration"
  ],
  "definitions": [
   "the time a sound lasts"
  ]
 },
 "<strong class=\"e2-term\">Transitional cues</strong> arise as articulators move between adjacent phonemes.": {
  "terms": [
   "Transitional cues"
  ],
  "definitions": [
   "arise as articulators move between adjacent phonemes"
  ]
 },
 "<strong class=\"e2-term\">Coarticulation</strong> changes frequency, intensity, and duration in connected speech.": {
  "terms": [
   "Coarticulation"
  ],
  "definitions": [
   "changes frequency, intensity, and duration in connected speech"
  ]
 },
 "Segmental information concerns individual speech sounds.": {
  "terms": [
   "Segmental information"
  ],
  "definitions": [
   "concerns individual speech sounds"
  ]
 },
 "Suprasegmental information includes rate, rhythm, stress, and intonation.": {
  "terms": [
   "Suprasegmental information"
  ],
  "definitions": [
   "includes rate, rhythm, stress, and intonation"
  ]
 },
 "A sound produced within a word is therefore not always acoustically identical to the same sound produced alone.": {
  "terms": [],
  "definitions": [],
  "checkpoint": "Read speech in context"
 },
 "In the October 20 discussion, Sutherland calls it a <strong class=\"e2-emphasis\">reference, not a chart to memorize for the test</strong>.": {
  "terms": [],
  "definitions": [],
  "checkpoint": "Use the instructor’s study boundary"
 },
 "The <strong class=\"e2-term\">Ling–Madell–Hewitt 10-sound check</strong> samples access across low, middle, and high speech frequencies.": {
  "terms": [
   "Ling–Madell–Hewitt 10-sound check"
  ],
  "definitions": [
   "samples access across low, middle, and high speech frequencies"
  ]
 },
 "/dʒ/ is “j” as in jump or juice. /ʃ/ is “sh” as in shoe.": {
  "terms": [
   "/dʒ/",
   "/ʃ/"
  ],
  "definitions": [
   "“j” as in jump or juice",
   "“sh” as in shoe"
  ]
 },
 "It is a <strong class=\"e2-term\">screening/listening check</strong>, not a complete diagnostic assessment or proof of speech comprehension.": {
  "terms": [],
  "definitions": [],
  "checkpoint": "Keep the check’s purpose"
 },
 "After the child is trained, present the sound itself rather than the entire cue word.": {
  "terms": [],
  "definitions": [],
  "checkpoint": "Separate conditioning and checking"
 },
 "Detection is a reliable behavioral reaction showing that a sound was heard.": {
  "terms": [
   "Detection"
  ],
  "definitions": [
   "a reliable behavioral reaction showing that a sound was heard"
  ]
 },
 "Identification specifies which sound was heard, through pointing, imitation, or repetition.": {
  "terms": [
   "Identification"
  ],
  "definitions": [
   "specifies which sound was heard, through pointing, imitation, or repetition"
  ]
 },
 "Then remove <strong class=\"e2-term\">speechreading cues</strong> so the response reflects auditory access.": {
  "terms": [],
  "definitions": [],
  "checkpoint": "Specify the input condition"
 },
 "Neither result should be substituted for the other.": {
  "terms": [],
  "definitions": [],
  "checkpoint": "Compare device and child evidence"
 },
 "Its /s/ row samples the high band. /z/ combines low and high information.": {
  "terms": [
   "/s/",
   "/z/"
  ],
  "definitions": [
   "samples the high band",
   "combines low and high information"
  ]
 },
 "The /ʃ/ row is listed in bands 3 and 4. A sound can supply information in more than one band.": {
  "terms": [
   "/ʃ/"
  ],
  "definitions": [
   "listed in bands 3 and 4"
  ]
 },
 "Table-reading exercises name the page-2 table. The conflicting card remains available in source access.": {
  "terms": [],
  "definitions": [],
  "checkpoint": "Keep the table conflict visible"
 },
 "Possible explanations include device trouble, hearing change, or middle-ear pathology. One missed sound does not identify which explanation is correct.": {
  "terms": [],
  "definitions": [],
  "checkpoint": "Investigate before diagnosing"
 },
 "<strong class=\"e2-term\">Redundancy</strong> supplies overlapping information that can help recover a message when some acoustic detail is unavailable.": {
  "terms": [
   "Redundancy"
  ],
  "definitions": [
   "supplies overlapping information that can help recover a message when some acoustic detail is unavailable"
  ]
 },
 "<strong class=\"e2-term\">Syntactic constraints</strong> come from word order and grammatical rules.": {
  "terms": [
   "Syntactic constraints"
  ],
  "definitions": [
   "come from word order and grammatical rules"
  ]
 },
 "<strong class=\"e2-term\">Semantic constraints</strong> come from plausible meanings and relationships between words.": {
  "terms": [
   "Semantic constraints"
  ],
  "definitions": [
   "come from plausible meanings and relationships between words"
  ]
 },
 "<strong class=\"e2-term\">Situational constraints</strong> come from the physical or social setting.": {
  "terms": [
   "Situational constraints"
  ],
  "definitions": [
   "come from the physical or social setting"
  ]
 },
 "The supports can operate together while remaining distinct concepts.": {
  "terms": [],
  "definitions": [],
  "checkpoint": "Separate the sources of support"
 },
 "Context can support understanding, but it cannot be assumed to compensate for every missing acoustic cue.": {
  "terms": [],
  "definitions": [],
  "checkpoint": "Keep the limit of context"
 },
 "The course uses <strong class=\"e2-term\">noise</strong> broadly for factors that reduce available communication information.": {
  "terms": [
   "noise"
  ],
  "definitions": [
   "factors that reduce available communication information"
  ]
 },
 "<strong class=\"note-label\">Speaker:</strong> unclear articulation, unexpected word order, stress, or inflection.": {
  "terms": [
   "Speaker"
  ],
  "definitions": [
   "unclear articulation, unexpected word order, stress, or inflection"
  ]
 },
 "<strong class=\"note-label\">Environment:</strong> competing sound, reverberation, distracting visual input, or poor lighting that removes visual cues.": {
  "terms": [
   "Environment"
  ],
  "definitions": [
   "competing sound, reverberation, distracting visual input, or poor lighting that removes visual cues"
  ]
 },
 "<strong class=\"note-label\">Listener:</strong> unfamiliar vocabulary or grammar, limited topic knowledge, or poor listening attention.": {
  "terms": [
   "Listener"
  ],
  "definitions": [
   "unfamiliar vocabulary or grammar, limited topic knowledge, or poor listening attention"
  ]
 },
 "Match the support to the missing information.": {
  "terms": [],
  "definitions": [],
  "checkpoint": "Choose a targeted repair"
 },
 "Louder speech alone does not address every kind of noise in this framework.": {
  "terms": [],
  "definitions": [],
  "checkpoint": "Keep the framework broad"
 },
 "<strong class=\"e2-term\">Detection</strong> asks whether sound occurred. Placing a block when a sound occurs can demonstrate this.": {
  "terms": [
   "Detection"
  ],
  "definitions": [
   "asks whether sound occurred"
  ]
 },
 "<strong class=\"e2-term\">Discrimination</strong> asks whether sounds differ. A same-or-different judgment can demonstrate this.": {
  "terms": [
   "Discrimination"
  ],
  "definitions": [
   "asks whether sounds differ"
  ]
 },
 "<strong class=\"e2-term\">Identification</strong> asks which sound or word was heard. Selecting the named picture can demonstrate this.": {
  "terms": [
   "Identification"
  ],
  "definitions": [
   "asks which sound or word was heard"
  ]
 },
 "<strong class=\"e2-term\">Comprehension</strong> requires understanding the message. Carrying out a meaningful spoken instruction can demonstrate this when the task conditions support that interpretation.": {
  "terms": [
   "Comprehension"
  ],
  "definitions": [
   "requires understanding the message"
  ]
 },
 "Classify the <strong class=\"e2-term\">listening response</strong> rather than the name of the activity.": {
  "terms": [],
  "definitions": [],
  "checkpoint": "Name the demonstrated skill"
 },
 "The <strong class=\"e2-term\">Integrated Scales of Development</strong> connect six developmental areas.": {
  "terms": [
   "Integrated Scales of Development"
  ],
  "definitions": [
   "connect six developmental areas"
  ]
 },
 "<strong class=\"e2-term\">Listening</strong> concerns the child’s use of auditory information.": {
  "terms": [
   "Listening"
  ],
  "definitions": [
   "concerns the child’s use of auditory information"
  ]
 },
 "<strong class=\"e2-term\">Receptive language</strong> concerns understanding. <strong class=\"e2-term\">Expressive language</strong> concerns expressing messages.": {
  "terms": [
   "Receptive language",
   "Expressive language"
  ],
  "definitions": [
   "concerns understanding",
   "concerns expressing messages"
  ]
 },
 "A missed milestone is not a diagnosis. Look at the child’s pattern and the relevant source page.": {
  "terms": [],
  "definitions": [],
  "checkpoint": "Read the developmental pattern"
 },
 "Keep chronological age visible. Do not automatically reset every cognitive or social expectation to the device-activation date.": {
  "terms": [],
  "definitions": [],
  "checkpoint": "Keep both age frames"
 },
 "<strong class=\"note-label\">0–3 months:</strong> reactions may include stilling, smiling, head turning, or startle, with recognition of a familiar caregiver’s voice.": {
  "terms": [
   "0–3 months"
  ],
  "definitions": [
   "reactions may include stilling, smiling, head turning, or startle"
  ]
 },
 "<strong class=\"note-label\">7–9 months:</strong> localization becomes more accurate, with discrimination, greater attention, and beginning word–meaning associations.": {
  "terms": [
   "7–9 months"
  ],
  "definitions": [
   "localization becomes more accurate"
  ]
 },
 "<strong class=\"note-label\">19–24 months:</strong> two-item auditory memory, song discrimination, descriptive-phrase comprehension, and a two-step direction.": {
  "terms": [
   "19–24 months"
  ],
  "definitions": [
   "two-item auditory memory"
  ]
 },
 "<strong class=\"note-label\">31–36 months:</strong> three-item memory with different linguistic features, sequencing two pieces of information, and listening to recorded stories.": {
  "terms": [
   "31–36 months"
  ],
  "definitions": [
   "three-item memory with different linguistic features"
  ]
 },
 "<strong class=\"note-label\">37–42 months:</strong> five-item memory, sequencing three or more pieces of information, retelling a short story, following three directions, and tracking a six-word sentence.": {
  "terms": [
   "37–42 months"
  ],
  "definitions": [
   "five-item memory"
  ]
 },
 "Use the exact age page to choose an attainable next goal rather than treating this summary as an exhaustive list.": {
  "terms": [],
  "definitions": [],
  "checkpoint": "Choose the attainable next goal"
 },
 "Compare the memory and linguistic demands with access and abilities. Detecting sounds does not establish complex comprehension.": {
  "terms": [],
  "definitions": [],
  "checkpoint": "Separate the response demands"
 },
 "The <strong class=\"e2-term\">intelligibility</strong> estimates specify the listener.": {
  "terms": [
   "intelligibility estimates"
  ],
  "definitions": [
   "specify the listener"
  ]
 },
 "Keep the Hart & Risley figures in their historical study context.": {
  "terms": [
   "Hart & Risley figures"
  ],
  "definitions": [
   "historical study context"
  ]
 },
 "The “<strong class=\"e2-term\">invisible acoustic filter</strong>” metaphor concerns missing or altered input.": {
  "terms": [
   "invisible acoustic filter"
  ],
  "definitions": [
   "missing or altered input"
  ]
 },
 "Retain the 24-month/2-year discrepancy. It is not used as a keyed cutoff.": {
  "terms": [],
  "definitions": [],
  "checkpoint": "Keep the unresolved age label"
 },
 "These are supplied teaching estimates. They are not universal norms for unfamiliar listeners.": {
  "terms": [],
  "definitions": [],
  "checkpoint": "Name the listener"
 },
 "<mark class=\"e2-emphasis\" data-emphasis-source=\"ART1020\">Daily enrichment integrates listening, language, cognition, and literacy into normal routines.</mark>": {
  "terms": [
   "Daily enrichment"
  ],
  "definitions": [
   "integrates listening, language, cognition, and literacy into normal routines"
  ]
 },
 "Qualified listening/spoken-language support and <strong class=\"e2-term\">parent coaching</strong> connect the plan to everyday interaction.": {
  "terms": [
   "parent coaching"
  ],
  "definitions": [
   "connect the plan to everyday interaction"
  ]
 },
 "Record the actual skill, response, and context over time.": {
  "terms": [],
  "definitions": [],
  "checkpoint": "Make progress observable"
 },
 "Repeating “more practice” in several forms remains one idea rather than several separate supports.": {
  "terms": [],
  "definitions": [],
  "checkpoint": "Give distinct supports"
 },
 "<strong class=\"e2-term\">Auditory training (AT)</strong> teaches a child to make full use of available auditory cues.": {
  "terms": [
   "Auditory training (AT)"
  ],
  "definitions": [
   "teaches a child to make full use of available auditory cues"
  ]
 },
 "Residual hearing is the hearing that remains. Aided access concerns what the child can hear through the fitted technology.": {
  "terms": [
   "Residual hearing",
   "Aided access"
  ],
  "definitions": [
   "the hearing that remains",
   "what the child can hear through the fitted technology"
  ]
 },
 "Prelingual identifies hearing loss present before language acquisition.": {
  "terms": [
   "Prelingual"
  ],
  "definitions": [
   "hearing loss present before language acquisition"
  ]
 },
 "Check whether the target information is accessible before expecting practice to develop its use.": {
  "terms": [],
  "definitions": [],
  "checkpoint": "Establish access first"
 },
 "Hearing aids and CIs create access. Fitting them does not automatically produce perception or interpretation.": {
  "terms": [],
  "definitions": [],
  "checkpoint": "Separate technology and learning"
 },
 "A <strong class=\"e2-term\">center-based program</strong> provides scheduled services at a center for a set amount of time.": {
  "terms": [
   "center-based program"
  ],
  "definitions": [
   "provides scheduled services at a center for a set amount of time"
  ]
 },
 "A <strong class=\"e2-term\">home-based program</strong> brings an intervention specialist to the infant’s home to coach the child and family.": {
  "terms": [
   "home-based program"
  ],
  "definitions": [
   "brings an intervention specialist to the infant’s home to coach the child and family"
  ]
 },
 "Informal work still needs a purpose and an observable response.": {
  "terms": [],
  "definitions": [],
  "checkpoint": "Plan a meaningful routine"
 },
 "The packet does not verify current enrollment, availability, cost, or eligibility for these resources.": {
  "terms": [],
  "definitions": [],
  "checkpoint": "Keep resource claims dated"
 },
 "Auditory assessment answers three planning questions.": {
  "terms": [
   "Auditory assessment"
  ],
  "definitions": [
   "answers three planning questions"
  ]
 },
 "What <strong class=\"e2-term\">baseline</strong> will allow comparison after therapy?": {
  "terms": [
   "baseline"
  ],
  "definitions": [
   "allow comparison after therapy"
  ]
 },
 "A task can fail because of its language or motor demands even when it is intended to examine auditory performance.": {
  "terms": [],
  "definitions": [],
  "checkpoint": "Separate listening and response demands"
 },
 "<mark class=\"e2-emphasis\" data-emphasis-source=\"ART1022-3\">An auditory-only high-frequency discrimination goal is not appropriate if that contrast is not accessible through the child’s devices.</mark>": {
  "terms": [],
  "definitions": [],
  "checkpoint": "Check access before the target"
 },
 "A difference in cues, distance, or task demands can change performance without establishing a change in the underlying skill.": {
  "terms": [],
  "definitions": [],
  "checkpoint": "Compare known conditions"
 },
 "For infants, emphasize <strong class=\"e2-term\">informal observation</strong> and <strong class=\"e2-term\">caregiver reports</strong> alongside audiologic management.": {
  "terms": [
   "infants"
  ],
  "definitions": [
   "informal observation and caregiver reports alongside audiologic management"
  ]
 },
 "<strong class=\"e2-term\">IT-MAIS</strong>, <strong class=\"e2-term\">PEACH</strong>, and <strong class=\"e2-term\">FAPI</strong> provide frameworks for observations or reports.": {
  "terms": [
   "IT-MAIS, PEACH, and FAPI"
  ],
  "definitions": [
   "provide frameworks for observations or reports"
  ]
 },
 "An infant’s inability to complete an older child’s word-recognition task is not a measured word score of zero.": {
  "terms": [],
  "definitions": [],
  "checkpoint": "Keep an unavailable task separate"
 },
 "These complement device checks and audiologic tests. They do not make one source of evidence sufficient for every question.": {
  "terms": [],
  "definitions": [],
  "checkpoint": "Combine functional and audiologic evidence"
 },
 "<strong class=\"e2-term\">Functional Auditory Performance Indicators (FAPI)</strong> is an integrated functional profile.": {
  "terms": [
   "Functional Auditory Performance Indicators (FAPI)"
  ],
  "definitions": [
   "an integrated functional profile"
  ]
 },
 "<strong class=\"e2-term\">Awareness and meaning of sounds</strong> concerns noticing sound and associating it with a source.": {
  "terms": [
   "Awareness and meaning of sounds"
  ],
  "definitions": [
   "noticing sound and associating it with a source"
  ]
 },
 "<strong class=\"e2-term\">Auditory feedback and integration</strong> concerns noticing, monitoring, or changing one’s vocal productions using auditory information.": {
  "terms": [
   "Auditory feedback and integration"
  ],
  "definitions": [
   "noticing, monitoring, or changing one’s vocal productions using auditory information"
  ]
 },
 "<strong class=\"e2-term\">Localization</strong> concerns searching for or finding the sound source.": {
  "terms": [
   "Localization"
  ],
  "definitions": [
   "searching for or finding the sound source"
  ]
 },
 "<strong class=\"e2-term\">Auditory discrimination</strong> concerns distinguishing sound characteristics.": {
  "terms": [
   "Auditory discrimination"
  ],
  "definitions": [
   "distinguishing sound characteristics"
  ]
 },
 "<strong class=\"e2-term\">Auditory comprehension</strong> concerns understanding linguistic information, including identifying what was said and following directions in this framework.": {
  "terms": [
   "Auditory comprehension"
  ],
  "definitions": [
   "understanding linguistic information"
  ]
 },
 "<strong class=\"e2-term\">Short-term auditory memory</strong> concerns retaining and recalling an auditory sequence.": {
  "terms": [
   "Short-term auditory memory"
  ],
  "definitions": [
   "retaining and recalling an auditory sequence"
  ]
 },
 "<strong class=\"e2-term\">Linguistic auditory processing</strong> concerns using auditory information to process language.": {
  "terms": [
   "Linguistic auditory processing"
  ],
  "definitions": [
   "using auditory information to process language"
  ]
 },
 "Changing the support is not the same as demonstrating a change in ability.": {
  "terms": [],
  "definitions": [],
  "checkpoint": "Record the listening conditions"
 },
 "Erber’s identification-versus-comprehension distinction is taught separately. Similar labels do not guarantee identical category boundaries.": {
  "terms": [],
  "definitions": [],
  "checkpoint": "Name the framework"
 },
 "<strong class=\"e2-term\">WIPI</strong> means <strong class=\"e2-term\">Word Intelligibility by Picture Identification</strong>.": {
  "terms": [
   "WIPI"
  ],
  "definitions": [
   "Word Intelligibility by Picture Identification"
  ]
 },
 "The child uses a <strong class=\"e2-term\">closed-set picture-pointing response</strong>.": {
  "terms": [
   "closed-set"
  ],
  "definitions": [
   "picture-pointing response"
  ]
 },
 "Separate <strong class=\"e2-term\">list length</strong> from <strong class=\"e2-term\">picture-array size</strong>.": {
  "terms": [],
  "definitions": [],
  "checkpoint": "Keep the quantities distinct"
 },
 "That array-size conflict remains visible and is not scored.": {
  "terms": [],
  "definitions": [],
  "checkpoint": "Retain the source conflict"
 },
 "<strong class=\"e2-term\">NU-CHIPS</strong> is <strong class=\"e2-term\">Northwestern University Children’s Perception of Speech</strong>.": {
  "terms": [
   "NU-CHIPS"
  ],
  "definitions": [
   "Northwestern University Children’s Perception of Speech"
  ]
 },
 "Supplied alternatives create a <strong class=\"e2-term\">closed-set</strong> response format.": {
  "terms": [
   "closed-set response format"
  ],
  "definitions": [
   "Supplied alternatives"
  ]
 },
 "Nonverbal describes the child’s response. The task still examines auditory speech perception.": {
  "terms": [
   "Nonverbal"
  ],
  "definitions": [
   "describes the child’s response"
  ]
 },
 "A constrained picture score is not an interchangeable open-set word score.": {
  "terms": [],
  "definitions": [],
  "checkpoint": "Compare like response formats"
 },
 "<strong class=\"e2-term\">Early Speech Perception (ESP)</strong> assesses pattern and word perception using a closed-set format.": {
  "terms": [
   "Early Speech Perception (ESP)"
  ],
  "definitions": [
   "assesses pattern and word perception using a closed-set format"
  ]
 },
 "Read the four placement categories in order.": {
  "terms": [],
  "definitions": [],
  "checkpoint": "Follow the assessment sequence"
 },
 "It does not establish the child’s entire language level or comprehension of an unfamiliar conversation.": {
  "terms": [],
  "definitions": [],
  "checkpoint": "Keep the assessment conclusion specific"
 },
 "In the October 22 discussion, the version ages are explicitly <strong class=\"e2-emphasis\">not required for the test</strong>. They remain context rather than keyed age-memorization targets.": {
  "terms": [],
  "definitions": [],
  "checkpoint": "Retain the study boundary"
 },
 "<strong class=\"e2-term\">Glendonald Auditory Screen Procedure (GASP)</strong> is based on Erber’s model.": {
  "terms": [
   "Glendonald Auditory Screen Procedure (GASP)"
  ],
  "definitions": [
   "based on Erber’s model"
  ]
 },
 "<strong class=\"e2-term\">Phoneme detection</strong> asks whether the sound was heard.": {
  "terms": [
   "Phoneme detection"
  ],
  "definitions": [
   "asks whether the sound was heard"
  ]
 },
 "<strong class=\"e2-term\">Word identification</strong> asks which word was heard.": {
  "terms": [
   "Word identification"
  ],
  "definitions": [
   "asks which word was heard"
  ]
 },
 "<strong class=\"e2-term\">Sentence comprehension</strong> asks for understanding at the sentence level.": {
  "terms": [
   "Sentence comprehension"
  ],
  "definitions": [
   "asks for understanding at the sentence level"
  ]
 },
 "Do not insert discrimination as a fourth GASP subtest simply because Erber’s hierarchy includes that level.": {
  "terms": [],
  "definitions": [],
  "checkpoint": "Keep the test and hierarchy distinct"
 },
 "<strong class=\"e2-term\">Developmental Approach to Successful Listening II (DASL II)</strong> has assessment and instructional uses.": {
  "terms": [
   "Developmental Approach to Successful Listening II (DASL II)"
  ],
  "definitions": [
   "has assessment and instructional uses"
  ]
 },
 "Keep its three named auditory areas together.": {
  "terms": [],
  "definitions": [],
  "checkpoint": "Recall the complete set"
 },
 "These three DASL areas are not GASP’s three subtests or SPICE’s four curriculum categories.": {
  "terms": [],
  "definitions": [],
  "checkpoint": "Separate named frameworks"
 },
 "<strong class=\"e2-term\">Detection</strong> asks whether something was heard.": {
  "terms": [
   "Detection"
  ],
  "definitions": [
   "asks whether something was heard"
  ]
 },
 "<strong class=\"e2-term\">Discrimination</strong> asks whether sounds are the same or different.": {
  "terms": [
   "Discrimination"
  ],
  "definitions": [
   "asks whether sounds are the same or different"
  ]
 },
 "<strong class=\"e2-term\">Identification</strong> asks which sound was heard.": {
  "terms": [
   "Identification"
  ],
  "definitions": [
   "asks which sound was heard"
  ]
 },
 "Sutherland explicitly states that <strong class=\"e2-emphasis\">Ling is not a tool for auditory comprehension</strong>.": {
  "terms": [],
  "definitions": [],
  "checkpoint": "Keep the response limit"
 },
 "A varying order prevents success based only on predicting the sequence.": {
  "terms": [],
  "definitions": [],
  "checkpoint": "Control anticipation"
 },
 "<strong class=\"e2-term\">Closed set</strong> provides alternatives. An <strong class=\"e2-term\">open set</strong> does not supply a finite answer display.": {
  "terms": [
   "Closed set",
   "open set"
  ],
  "definitions": [
   "provides alternatives",
   "does not supply a finite answer display"
  ]
 },
 "<strong class=\"e2-term\">WIPI</strong> uses word stimuli with picture choices.": {
  "terms": [
   "WIPI"
  ],
  "definitions": [
   "uses word stimuli with picture choices"
  ]
 },
 "<strong class=\"e2-term\">PBK</strong> and <strong class=\"e2-term\">LNT</strong> use open-set word responses. The phrase “word test” alone does not specify the response demand.": {
  "terms": [
   "PBK and LNT"
  ],
  "definitions": [
   "use open-set word responses"
  ],
  "checkpoint": "Separate stimulus and response"
 },
 "The <strong class=\"e2-term\">Lexical Neighborhood Test (LNT)</strong> distinguishes easy words with few phonetic neighbors from harder words with many similar neighbors.": {
  "terms": [
   "Lexical Neighborhood Test (LNT)"
  ],
  "definitions": [
   "distinguishes easy words with few phonetic neighbors from harder words with many similar neighbors"
  ]
 },
 "<strong class=\"e2-term\">CRISP</strong> combines spondee recognition with competing sentences.": {
  "terms": [
   "CRISP"
  ],
  "definitions": [
   "combines spondee recognition with competing sentences"
  ]
 },
 "No scored item asks for the disputed picture count.": {
  "terms": [],
  "definitions": [],
  "checkpoint": "Keep the source conflict visible"
 },
 "<strong class=\"e2-term\">Detection</strong> asks whether a sound is present or absent.": {
  "terms": [
   "Detection"
  ],
  "definitions": [
   "asks whether a sound is present or absent"
  ]
 },
 "<strong class=\"e2-term\">Identification</strong> asks which sound or word was heard.": {
  "terms": [
   "Identification"
  ],
  "definitions": [
   "asks which sound or word was heard"
  ]
 },
 "<strong class=\"e2-term\">Comprehension</strong> asks what the message means.": {
  "terms": [
   "Comprehension"
  ],
  "definitions": [
   "asks what the message means"
  ]
 },
 "The levels can overlap during learning.": {
  "terms": [],
  "definitions": [],
  "checkpoint": "Avoid a rigid staircase"
 },
 "The toy, game, or slide heading alone does not tell you which skill the child demonstrated.": {
  "terms": [],
  "definitions": [],
  "checkpoint": "Read the actual response"
 },
 "<strong class=\"e2-term\">Detection / sound awareness</strong> means noticing the presence or absence of sound through <strong class=\"e2-term\">audition alone</strong>.": {
  "terms": [
   "Detection / sound awareness"
  ],
  "definitions": [
   "noticing the presence or absence of sound through audition alone"
  ]
 },
 "Onset is when the sound begins. The child may respond to a speech syllable, drum, whistle, horn, or knock.": {
  "terms": [
   "Onset"
  ],
  "definitions": [
   "when the sound begins"
  ]
 },
 "Offset is when an ongoing sound stops. Examples include stopping music or ending a sustained /ba/.": {
  "terms": [
   "Offset"
  ],
  "definitions": [
   "when an ongoing sound stops"
  ]
 },
 "Naming the sound or understanding its meaning is not required. A detection response by itself does not establish word recognition or comprehension.": {
  "terms": [],
  "definitions": [],
  "checkpoint": "Keep the detection demand"
 },
 "Silence is meaningful. A child who responds according to a predictable rhythm may be anticipating the task rather than detecting the sound.": {
  "terms": [],
  "definitions": [],
  "checkpoint": "Control timing cues"
 },
 "A <strong class=\"e2-term\">conditioned response</strong> is a defined action the child learns to make when a sound is heard.": {
  "terms": [
   "conditioned response"
  ],
  "definitions": [
   "a defined action the child learns to make when a sound is heard"
  ]
 },
 "Follow the course sequence for establishing the response.": {
  "terms": [],
  "definitions": [],
  "checkpoint": "Teach before interpreting"
 },
 "A fixed rhythm can tell the child when to act even without hearing the sound.": {
  "terms": [],
  "definitions": [],
  "checkpoint": "Separate detection and anticipation"
 },
 "Document the type and amount of cueing so later performance is compared under meaningful conditions.": {
  "terms": [],
  "definitions": [],
  "checkpoint": "Keep conditions comparable"
 },
 "<strong class=\"e2-term\">Discrimination</strong> means perceiving similarities or differences between two or more sounds.": {
  "terms": [
   "Discrimination"
  ],
  "definitions": [
   "perceiving similarities or differences between two or more sounds"
  ]
 },
 "<strong class=\"e2-term\">Duration</strong> is the long-versus-short contrast.": {
  "terms": [
   "Duration"
  ],
  "definitions": [
   "long-versus-short contrast"
  ]
 },
 "<strong class=\"e2-term\">Intensity</strong> supports a loud-versus-soft contrast.": {
  "terms": [
   "Intensity"
  ],
  "definitions": [
   "loud-versus-soft contrast"
  ]
 },
 "<strong class=\"e2-term\">Pitch</strong> supports a high-versus-low contrast.": {
  "terms": [
   "Pitch"
  ],
  "definitions": [
   "high-versus-low contrast"
  ]
 },
 "<strong class=\"e2-term\">Manner</strong> describes how the speech sound is produced, such as a stop versus a fricative.": {
  "terms": [
   "Manner"
  ],
  "definitions": [
   "describes how the speech sound is produced"
  ]
 },
 "<strong class=\"e2-term\">Voicing</strong> concerns vocal-fold vibration, such as a voiced versus a voiceless consonant.": {
  "terms": [
   "Voicing"
  ],
  "definitions": [
   "concerns vocal-fold vibration"
  ]
 },
 "<strong class=\"e2-term\">Place</strong> describes where the consonant is articulated.": {
  "terms": [
   "Place"
  ],
  "definitions": [
   "describes where the consonant is articulated"
  ]
 },
 "The child must distinguish the sounds. <mark class=\"e2-emphasis\" data-emphasis-source=\"ART1022-3\">Naming them or explaining their meanings is not required.</mark>": {
  "terms": [],
  "definitions": [],
  "checkpoint": "Keep the comparison demand"
 },
 "Read the discrimination figure from the bottom upward.": {
  "terms": [],
  "definitions": [],
  "checkpoint": "Follow the contrast sequence"
 },
 "Following a meaningful command can require comprehension. Specify what the child must do and what that response demonstrates instead of classifying from the slide heading alone.": {
  "terms": [],
  "definitions": [],
  "checkpoint": "Check the demonstrated response"
 },
 "<strong class=\"e2-term\">Identification</strong> means specifying which sound or word was heard.": {
  "terms": [
   "Identification"
  ],
  "definitions": [
   "specifying which sound or word was heard"
  ]
 },
 "<strong class=\"e2-term\">Auditory memory</strong> can support a learned sound-to-label association.": {
  "terms": [
   "Auditory memory"
  ],
  "definitions": [
   "support a learned sound-to-label association"
  ]
 },
 "/d/ is a voiced alveolar stop. /f/ is a voiceless labiodental fricative.": {
  "terms": [
   "/d/",
   "/f/"
  ],
  "definitions": [
   "a voiced alveolar stop",
   "a voiceless labiodental fricative"
  ]
 },
 "<mark class=\"e2-emphasis\" data-emphasis-source=\"ART1022-3\">Raising a hand whenever any sound occurs only establishes detection</mark> unless the response also identifies which sound.": {
  "terms": [],
  "definitions": [],
  "checkpoint": "Separate detection and identification"
 },
 "The initial sounds therefore differ in <strong class=\"e2-term\">place</strong>, <strong class=\"e2-term\">manner</strong>, and <strong class=\"e2-term\">voicing</strong>. This is not a pure one-feature contrast.": {
  "terms": [],
  "definitions": [],
  "checkpoint": "Compare all changed features"
 },
 "Pointing can be a complete identification response. Spoken repetition is not the only valid format.": {
  "terms": [],
  "definitions": [],
  "checkpoint": "Keep response format flexible"
 },
 "<strong class=\"e2-term\">Comprehension</strong> means understanding the message and responding to its meaning.": {
  "terms": [
   "Comprehension"
  ],
  "definitions": [
   "understanding the message and responding to its meaning"
  ]
 },
 "<strong class=\"e2-term\">Semantic knowledge</strong> supplies word and message meaning.": {
  "terms": [
   "Semantic knowledge"
  ],
  "definitions": [
   "supplies word and message meaning"
  ]
 },
 "<strong class=\"e2-term\">Syntactic knowledge</strong> supports understanding grammatical relationships.": {
  "terms": [
   "Syntactic knowledge"
  ],
  "definitions": [
   "supports understanding grammatical relationships"
  ]
 },
 "<strong class=\"note-label\">Detection:</strong> notice the ring or its absence.": {
  "terms": [
   "Detection"
  ],
  "definitions": [
   "notice the ring or its absence"
  ]
 },
 "<strong class=\"note-label\">Discrimination:</strong> judge whether the ring and a dog’s bark are the same or different.": {
  "terms": [
   "Discrimination"
  ],
  "definitions": [
   "judge whether the ring and a dog’s bark are the same or different"
  ]
 },
 "<strong class=\"note-label\">Identification:</strong> recognize the sound as a doorbell.": {
  "terms": [
   "Identification"
  ],
  "definitions": [
   "recognize the sound as a doorbell"
  ]
 },
 "The response must be qualitatively different from simply echoing the stimulus. <mark class=\"e2-emphasis\" data-emphasis-source=\"ART1022-4\">Repetition alone does not demonstrate understanding.</mark>": {
  "terms": [],
  "definitions": [],
  "checkpoint": "Require evidence of meaning"
 },
 "Use the lecture’s <strong class=\"note-label\">doorbell example</strong> to compare all four levels.": {
  "terms": [],
  "definitions": [],
  "checkpoint": "Apply the hierarchy to one sound"
 },
 "<strong class=\"e2-term\">Analytic training</strong> breaks speech into smaller components.": {
  "terms": [
   "Analytic training"
  ],
  "definitions": [
   "breaks speech into smaller components"
  ]
 },
 "The assigned textbook describes formants as concentrations of energy resulting from vocal-tract resonances. Their patterns provide cues for vowel identification.": {
  "terms": [
   "formants"
  ],
  "definitions": [
   "concentrations of energy resulting from vocal-tract resonances"
  ]
 },
 "Analytic describes how instruction is organized. The actual response determines whether the child is discriminating or identifying.": {
  "terms": [
   "Analytic"
  ],
  "definitions": [
   "describes how instruction is organized"
  ],
  "checkpoint": "Separate approach and skill"
 },
 "<strong class=\"e2-term\">Synthetic training</strong> emphasizes the meaningful whole.": {
  "terms": [
   "Synthetic training"
  ],
  "definitions": [
   "emphasizes the meaningful whole"
  ]
 },
 "Context can support interpretation, but neither approach makes audibility or device management irrelevant.": {
  "terms": [],
  "definitions": [],
  "checkpoint": "Keep access in the plan"
 },
 "<strong class=\"e2-term\">Pragmatic training</strong> teaches the listener to manage communication variables.": {
  "terms": [
   "Pragmatic training"
  ],
  "definitions": [
   "teaches the listener to manage communication variables"
  ]
 },
 "The lecture’s <strong class=\"e2-term\">QUEST?AR</strong> example combines questions, repetition, and repair.": {
  "terms": [
   "QUEST?AR"
  ],
  "definitions": [
   "combines questions, repetition, and repair"
  ]
 },
 "Match a <strong class=\"e2-term\">communication repair</strong> to the information that was missed.": {
  "terms": [],
  "definitions": [],
  "checkpoint": "Choose a targeted repair"
 },
 "Repeating the same unsuccessful exchange without changing anything is different from using a targeted repair.": {
  "terms": [],
  "definitions": [],
  "checkpoint": "Change the failed exchange"
 },
 "<strong class=\"e2-term\">Eclectic training</strong> combines strategies to meet individual needs.": {
  "terms": [
   "Eclectic training"
  ],
  "definitions": [
   "combines strategies to meet individual needs"
  ]
 },
 "Erber level describes what the listening response requires.": {
  "terms": [
   "Erber level"
  ],
  "definitions": [
   "describes what the listening response requires"
  ]
 },
 "The approach describes how instruction is organized.": {
  "terms": [
   "approach"
  ],
  "definitions": [
   "describes how instruction is organized"
  ]
 },
 "An approach or program label is not a complete treatment plan.": {
  "terms": [],
  "definitions": [],
  "checkpoint": "Build the individualized plan"
 },
 "<strong class=\"e2-term\">Auditory skill</strong>: detection, discrimination, identification, or comprehension.": {
  "terms": [
   "Auditory skill"
  ],
  "definitions": [
   "detection, discrimination, identification, or comprehension"
  ]
 },
 "<strong class=\"e2-term\">Stimuli</strong>: the sounds or speech material presented, such as phonetic or sentence-level material.": {
  "terms": [
   "Stimuli"
  ],
  "definitions": [
   "the sounds or speech material presented"
  ]
 },
 "<strong class=\"e2-term\">Activity type</strong>: formal or informal.": {
  "terms": [
   "Activity type"
  ],
  "definitions": [
   "formal or informal"
  ]
 },
 "<strong class=\"e2-term\">Difficulty level</strong>: response set, stimulus unit and similarity, context, structure, and listening conditions.": {
  "terms": [
   "Difficulty level"
  ],
  "definitions": [
   "response set, stimulus unit and similarity, context, structure, and listening conditions"
  ]
 },
 "Formal training is highly structured and usually one-to-one.": {
  "terms": [
   "Formal training"
  ],
  "definitions": [
   "highly structured and usually one-to-one"
  ]
 },
 "Informal training occurs in daily routines, often within another activity.": {
  "terms": [
   "Informal training"
  ],
  "definitions": [
   "occurs in daily routines, often within another activity"
  ]
 },
 "Selecting the matching picture is operationally identification even though the sample’s broad goal is labeled discrimination. The response demand is more precise than the broad label.": {
  "terms": [],
  "definitions": [],
  "checkpoint": "Classify the actual response"
 },
 "<strong class=\"e2-term\">Response set</strong>: closed → limited → open.": {
  "terms": [
   "Response set"
  ],
  "definitions": [
   "closed → limited → open"
  ]
 },
 "<strong class=\"e2-term\">Stimulus unit</strong>: phoneme → syllable → word → sentence.": {
  "terms": [
   "Stimulus unit"
  ],
  "definitions": [
   "phoneme → syllable → word → sentence"
  ]
 },
 "<strong class=\"e2-term\">Stimulus similarity</strong>: dissimilar → similar.": {
  "terms": [
   "Stimulus similarity"
  ],
  "definitions": [
   "dissimilar → similar"
  ]
 },
 "<strong class=\"e2-term\">Contextual support</strong>: high → low.": {
  "terms": [
   "Contextual support"
  ],
  "definitions": [
   "high → low"
  ]
 },
 "<strong class=\"e2-term\">Task structure</strong>: structured → spontaneous.": {
  "terms": [
   "Task structure"
  ],
  "definitions": [
   "structured → spontaneous"
  ]
 },
 "<strong class=\"e2-term\">Listening conditions/SNR</strong>: good → poor.": {
  "terms": [
   "Listening conditions/SNR"
  ],
  "definitions": [
   "good → poor"
  ]
 },
 "They do not establish that every sentence is harder than every isolated phoneme under all conditions.": {
  "terms": [],
  "definitions": [],
  "checkpoint": "Keep other demands in view"
 },
 "Document the change so the resulting performance remains interpretable.": {
  "terms": [],
  "definitions": [],
  "checkpoint": "Change support deliberately"
 },
 "<strong class=\"e2-term\">Performance</strong> states the observable action.": {
  "terms": [
   "Performance"
  ],
  "definitions": [
   "states the observable action"
  ]
 },
 "<strong class=\"e2-term\">Conditions</strong> state how and where the action will occur.": {
  "terms": [
   "Conditions"
  ],
  "definitions": [
   "state how and where the action will occur"
  ]
 },
 "<strong class=\"e2-term\">Success criterion</strong> states what counts as meeting the target.": {
  "terms": [
   "Success criterion"
  ],
  "definitions": [
   "states what counts as meeting the target"
  ]
 },
 "An <strong class=\"e2-term\">explicit time frame</strong> states when the target is expected. <mark class=\"e2-emphasis\" data-emphasis-source=\"ART1022-6\">Objectives are measurable milestones toward the broader goal.</mark>": {
  "terms": [
   "time frame"
  ],
  "definitions": [
   "states when the target is expected"
  ]
 },
 "These numbers are practice-design choices, not prescribed class or clinical criteria.": {
  "terms": [],
  "definitions": [],
  "checkpoint": "Keep the example qualified"
 },
 "Record the actual conditions. A correct count with the wrong response demand is not evidence that the stated goal was met.": {
  "terms": [],
  "definitions": [],
  "checkpoint": "Measure the stated target"
 },
 "Device tolerance and consistent use support access.": {
  "terms": [
   "Device tolerance and consistent use"
  ],
  "definitions": [
   "support access"
  ]
 },
 "Device access supports other goals. It does not independently establish language mastery or auditory comprehension.": {
  "terms": [],
  "definitions": [],
  "checkpoint": "Separate access and outcome"
 },
 "These actions support the child’s targets, while the child’s actual response supplies evidence of progress.": {
  "terms": [],
  "definitions": [],
  "checkpoint": "Track the child’s response"
 },
 "DASL II connects assessment with brief individualized training.": {
  "terms": [
   "DASL II"
  ],
  "definitions": [
   "connects assessment with brief individualized training"
  ]
 },
 "SPICE means <strong class=\"e2-term\">Speech Perception Instructional Curriculum and Evaluation</strong>.": {
  "terms": [
   "SPICE"
  ],
  "definitions": [
   "Speech Perception Instructional Curriculum and Evaluation"
  ]
 },
 "Learn to Talk Around the Clock supports caregiver interaction in home routines.": {
  "terms": [
   "Learn to Talk Around the Clock"
  ],
  "definitions": [
   "supports caregiver interaction in home routines"
  ]
 },
 "The original notes describe materials and activities adaptable to language level. Keep its four categories distinct from DASL II’s three areas.": {
  "terms": [],
  "definitions": [],
  "checkpoint": "Recall each program’s own structure"
 },
 "They can help a clinician plan AT, while assessment still determines the child’s starting point.": {
  "terms": [],
  "definitions": [],
  "checkpoint": "Choose the starting point from evidence"
 },
 "<strong class=\"e2-term\">SKI-HI</strong> is presented as an identification and home-intervention curriculum for infants and families.": {
  "terms": [
   "SKI-HI"
  ],
  "definitions": [
   "an identification and home-intervention curriculum for infants and families"
  ]
 },
 "<strong class=\"e2-term\">Cottage Acquisition Scales for Listening, Language, and Speech (CASLLS)</strong> takes an integrated developmental approach.": {
  "terms": [
   "Cottage Acquisition Scales for Listening, Language, and Speech (CASLLS)"
  ],
  "definitions": [
   "takes an integrated developmental approach"
  ]
 },
 "This disagreement is not used as an unqualified keyed age boundary.": {
  "terms": [],
  "definitions": [],
  "checkpoint": "Keep the age conflict visible"
 },
 "Their category labels, counts, and emphases still differ. Similar purposes do not make the programs identical.": {
  "terms": [],
  "definitions": [],
  "checkpoint": "Individualize the program choice"
 },
 "A curriculum supports a plan rather than replacing clinical reasoning.": {
  "terms": [
   "curriculum"
  ],
  "definitions": [
   "supports a plan rather than replacing clinical reasoning"
  ]
 },
 "These are references named in class. Their present services and availability are not verified by this packet.": {
  "terms": [],
  "definitions": [],
  "checkpoint": "Keep resource claims dated"
 },
 "Use the resource to serve an identified need rather than treating its label as proof of an appropriate target.": {
  "terms": [],
  "definitions": [],
  "checkpoint": "Choose from the child’s needs"
 },
 "Lipreading uses visual speech together with related facial and body gestures.": {
  "terms": [
   "Lipreading"
  ],
  "definitions": [
   "uses visual speech together with related facial and body gestures"
  ]
 },
 "Speechreading combines those cues with the auditory signal.": {
  "terms": [
   "Speechreading"
  ],
  "definitions": [
   "combines those cues with the auditory signal"
  ]
 },
 "Congenital versus acquired loss describes whether the loss was present from birth or acquired later.": {
  "terms": [
   "Congenital versus acquired loss"
  ],
  "definitions": [
   "whether the loss was present from birth or acquired later"
  ]
 },
 "Years lived with an acquired loss describes its duration.": {
  "terms": [
   "duration"
  ],
  "definitions": [
   "Years lived with an acquired loss"
  ]
 },
 "The deck acknowledges that people sometimes use the terms interchangeably. Questions naming this deck use its stated distinction.": {
  "terms": [],
  "definitions": [],
  "checkpoint": "Keep terminology source-specific"
 },
 "No question here keys a universal intelligence claim.": {
  "terms": [],
  "definitions": [],
  "checkpoint": "Retain the predictor conflict"
 },
 "Coarticulation is the influence of neighboring speech sounds on articulation. A following vowel can influence how a consonant is produced, changing lip and jaw movements that a lipreader can see. The phonetic mechanism and its visible consequence are connected.": {
  "terms": [
   "Coarticulation"
  ],
  "definitions": [
   "the influence of neighboring speech sounds on articulation"
  ]
 },
 "<strong class=\"e2-term\">Visemes</strong> group speech sounds with similar facial appearances.": {
  "terms": [
   "Visemes"
  ],
  "definitions": [
   "group speech sounds with similar facial appearances"
  ]
 },
 "<strong class=\"e2-term\">Homophenes</strong> are different-sounding words that look alike on the lips.": {
  "terms": [
   "Homophenes"
  ],
  "definitions": [
   "different-sounding words that look alike on the lips"
  ],
  "supplement": {
   "label": "Key distinction",
   "text": "A viseme groups speech sounds. A homophene grouping concerns whole words. Neither guarantees that vision alone can identify the intended message."
  }
 },
 "<strong class=\"e2-term\">Talker effects</strong> mean the same sound can look different across speakers.": {
  "terms": [
   "Talker effects"
  ],
  "definitions": [
   "the same sound can look different across speakers"
  ]
 },
 "The slide estimates 30% visible speech in ideal conditions and 10–25% in its “unusual conditions” wording. These are course estimates of visibility, not an individual’s word-recognition score.": {
  "terms": [],
  "definitions": [],
  "checkpoint": "Separate visibility and recognition"
 },
 "Keep the unit clear: a viseme groups sounds, while a homophene grouping concerns whole words.": {
  "terms": [],
  "definitions": [],
  "checkpoint": "Keep the unit distinct"
 },
 "<strong class=\"e2-term\">Speaker</strong>: how the talker produces and presents speech.": {
  "terms": [
   "Speaker"
  ],
  "definitions": [
   "how the talker produces and presents speech"
  ]
 },
 "<strong class=\"e2-term\">Signal/code</strong>: the structure and familiarity of the message.": {
  "terms": [
   "Signal/code"
  ],
  "definitions": [
   "the structure and familiarity of the message"
  ]
 },
 "<strong class=\"e2-term\">Environment</strong>: the auditory and visual conditions.": {
  "terms": [
   "Environment"
  ],
  "definitions": [
   "the auditory and visual conditions"
  ]
 },
 "<strong class=\"e2-term\">Speechreader</strong>: the listener’s available abilities and resources.": {
  "terms": [
   "Speechreader"
  ],
  "definitions": [
   "the listener’s available abilities and resources"
  ]
 },
 "<strong class=\"e2-term\">Clear speech</strong> uses a slower rate and good, unexaggerated enunciation.": {
  "terms": [
   "Clear speech"
  ],
  "definitions": [
   "uses a slower rate and good, unexaggerated enunciation"
  ]
 },
 "Lexical neighbors are similar competing words. “Bat” has many words that look or sound like it.": {
  "terms": [
   "Lexical neighbors"
  ],
  "definitions": [
   "similar competing words"
  ]
 },
 "Frequently used words are easier in the deck’s examples. Frequency here means everyday occurrence rather than acoustic pitch.": {
  "terms": [],
  "definitions": [],
  "checkpoint": "Distinguish frequency meanings"
 },
 "Match the support to the missing information: lighting improves visual access, noise control improves auditory access, and topic/context narrows linguistic alternatives.": {
  "terms": [],
  "definitions": [],
  "checkpoint": "Match support to the missing information"
 },
 "Validity concerns whether the result supports the interpretation intended. Test–retest reliability concerns consistency across repeat testing.": {
  "terms": [
   "Validity",
   "Test–retest reliability"
  ],
  "definitions": [
   "whether the result supports the interpretation intended",
   "consistency across repeat testing"
  ]
 },
 "<strong class=\"e2-term\">Audiovisual integration</strong> combines residual hearing with visual speech information.": {
  "terms": [
   "Audiovisual integration"
  ],
  "definitions": [
   "combines residual hearing with visual speech information"
  ]
 },
 "<strong class=\"e2-term\">Analytic training</strong> works from visible components toward words or phrases.": {
  "terms": [
   "Analytic training"
  ],
  "definitions": [
   "works from visible components toward words or phrases"
  ]
 },
 "<strong class=\"e2-term\">Synthetic training</strong> prioritizes the meaningful whole even when not every component is visually identified.": {
  "terms": [
   "Synthetic training"
  ],
  "definitions": [
   "prioritizes the meaningful whole even when not every component is visually identified"
  ]
 },
 "A client can report benefit even when objective change is not demonstrated. Reported benefit and measured change are different evidence.": {
  "terms": [],
  "definitions": [],
  "checkpoint": "Separate reported and measured benefit"
 },
 "Slide 25 names Table 5.5 without supplying the table. Do not infer missing tips or rows.": {
  "terms": [],
  "definitions": [],
  "checkpoint": "Keep missing source content open"
 },
 "Markers represent changes such as verb form, number, or possession.": {
  "terms": [
   "Markers"
  ],
  "definitions": [
   "represent changes such as verb form, number, or possession"
  ]
 },
 "English-based sign systems represent English structure.": {
  "terms": [
   "English-based sign systems"
  ],
  "definitions": [
   "represent English structure"
  ]
 },
 "ASL is taught separately as an independent language with its own vocabulary and syntax.": {
  "terms": [
   "ASL"
  ],
  "definitions": [
   "an independent language with its own vocabulary and syntax"
  ]
 },
 "Being included in the same list does not make these equivalent languages or identical systems.": {
  "terms": [],
  "definitions": [],
  "checkpoint": "Keep systems distinct"
 },
 "The expansion and version naming need clarification. This bank does not ask learners to memorize the potentially erroneous expansion.": {
  "terms": [],
  "definitions": [],
  "checkpoint": "Retain the naming gap"
 },
 "<strong class=\"e2-term\">ASL</strong> is an <strong class=\"e2-term\">independent language</strong> with its own vocabulary and syntax.": {
  "terms": [
   "ASL"
  ],
  "definitions": [
   "an independent language with its own vocabulary and syntax"
  ]
 },
 "<strong class=\"e2-term\">Hand configuration</strong> concerns the hand shape.": {
  "terms": [
   "Hand configuration"
  ],
  "definitions": [
   "concerns the hand shape"
  ]
 },
 "<strong class=\"e2-term\">Movement</strong> concerns how the sign moves.": {
  "terms": [
   "Movement"
  ],
  "definitions": [
   "concerns how the sign moves"
  ]
 },
 "<strong class=\"e2-term\">Location</strong> concerns where the sign is made.": {
  "terms": [
   "Location"
  ],
  "definitions": [
   "concerns where the sign is made"
  ]
 },
 "<strong class=\"e2-term\">Orientation</strong> concerns the direction in which the hand is positioned.": {
  "terms": [
   "Orientation"
  ],
  "definitions": [
   "concerns the direction in which the hand is positioned"
  ]
 },
 "<strong class=\"e2-term\">Cued Speech</strong> supplies additional visual information alongside spoken language.": {
  "terms": [
   "Cued Speech"
  ],
  "definitions": [
   "supplies additional visual information alongside spoken language"
  ],
  "supplement": {
   "label": "Key distinction",
   "text": "ASL has its own language structure. Cued Speech supplies additional visual phoneme information alongside spoken language."
  }
 },
 "This is the slide’s four-part teaching list. It does not deny the language role of facial and other nonmanual information.": {
  "terms": [],
  "definitions": [],
  "checkpoint": "Preserve the language context"
 },
 "It is not presented here as ASL or as an independent language.": {
  "terms": [],
  "definitions": [],
  "checkpoint": "Separate cueing and language"
 },
 "Compare candidacy within the named age group.": {
  "terms": [
   "candidacy"
  ],
  "definitions": [
   "within the named age group"
  ]
 },
 "Review Dettman’s reported <strong class=\"e2-term\">receptive-vocabulary</strong> result by school entry.": {
  "terms": [
   "Dettman"
  ],
  "definitions": [
   "reported receptive-vocabulary result by school entry"
  ]
 },
 "Keep the hearing-loss pattern, test, aided condition and inequality attached to the value.": {
  "terms": [],
  "definitions": [],
  "checkpoint": "Attach every condition"
 },
 "A qualifying score alone does not establish <strong class=\"e2-term\">candidacy</strong>.": {
  "terms": [],
  "definitions": [],
  "checkpoint": "Keep the team decision"
 },
 "<strong class=\"e2-term\">External components</strong> include the microphone, processor, transmitter and battery.": {
  "terms": [
   "External components"
  ],
  "definitions": [
   "include the microphone, processor, transmitter and battery"
  ]
 },
 "<strong class=\"e2-term\">Internal components</strong> include the receiver and electrode array.": {
  "terms": [
   "Internal components"
  ],
  "definitions": [
   "include the receiver and electrode array"
  ]
 },
 "<strong class=\"e2-term\">Microphone</strong> → <strong class=\"e2-term\">processor</strong> → <strong class=\"e2-term\">transmitter</strong> → <strong class=\"e2-term\">receiver</strong> → <strong class=\"e2-term\">array</strong> → <strong class=\"e2-term\">auditory nerve</strong> → brain.": {
  "terms": [],
  "definitions": [],
  "checkpoint": "Trace the complete path"
 },
 "<mark class=\"e2-emphasis\" data-emphasis-source=\"ART1006\">A CI does not restore normal hearing.</mark>": {
  "terms": [],
  "definitions": [],
  "checkpoint": "Keep the benefit qualified"
 },
 "The lecture’s <strong class=\"e2-term\">bilateral</strong> comparison uses two CIs.": {
  "terms": [
   "bilateral comparison"
  ],
  "definitions": [
   "uses two CIs"
  ]
 },
 "<strong class=\"e2-term\">Bimodal hearing</strong> uses one CI plus a contralateral hearing aid.": {
  "terms": [
   "Bimodal hearing"
  ],
  "definitions": [
   "uses one CI plus a contralateral hearing aid"
  ]
 },
 "<mark class=\"e2-emphasis\" data-emphasis-source=\"ART1006\">Follow-up maintains comfortable loudness, sound quality and access to speech.</mark>": {
  "terms": [
   "Follow-up"
  ],
  "definitions": [
   "maintains comfortable loudness, sound quality and access to speech"
  ]
 },
 "Evaluation → surgery and telemetry → <strong class=\"e2-term\">initial activation</strong> about 2–4 weeks later → continuing map adjustment and habilitation.": {
  "terms": [],
  "definitions": [],
  "checkpoint": "Follow the care sequence"
 },
 "<strong class=\"e2-term\">Auditory function</strong> is meaningful brain use of sound.": {
  "terms": [
   "Auditory function"
  ],
  "definitions": [
   "meaningful brain use of sound"
  ]
 },
 "<strong class=\"e2-term\">Neuroplasticity</strong> concerns the brain’s ability to change with experience.": {
  "terms": [
   "Neuroplasticity"
  ],
  "definitions": [
   "the brain’s ability to change with experience"
  ]
 },
 "<mark class=\"e2-emphasis\" data-emphasis-source=\"ART1022-1\">Hearing a signal is different from consciously attending and listening.</mark>": {
  "terms": [],
  "definitions": [],
  "checkpoint": "Separate access and attention"
 },
 "The lecture emphasizes greatest early plasticity in the first 3½ years. It does not say learning then becomes impossible.": {
  "terms": [],
  "definitions": [],
  "checkpoint": "Keep plasticity qualified"
 },
 "The lecture’s <strong class=\"e2-term\">listening-age Day Zero</strong> requires <mark class=\"e2-emphasis\" data-emphasis-source=\"ART1020\">technology worn throughout waking hours</mark>.": {
  "terms": [
   "listening-age Day Zero"
  ],
  "definitions": [
   "technology worn throughout waking hours"
  ]
 },
 "0–3 months covers early awareness and caregiver voice.": {
  "terms": [
   "0–3 months"
  ],
  "definitions": [
   "early awareness and caregiver voice"
  ]
 },
 "At 4–6 months, sound meaning and inflection responses emerge.": {
  "terms": [
   "4–6 months"
  ],
  "definitions": [
   "sound meaning and inflection responses emerge"
  ]
 },
 "At 16–18 months, the scales include more words, phrases and simple questions.": {
  "terms": [
   "16–18 months"
  ],
  "definitions": [
   "more words, phrases and simple questions"
  ]
 },
 "Keep chronological age, effective access history and signal quality distinct.": {
  "terms": [],
  "definitions": [],
  "checkpoint": "Count useful access"
 },
 "At 16–18 months, the scales list 50+ understood words and 10+ meaningful spoken words.": {
  "terms": [
   "16–18 months"
  ],
  "definitions": [
   "50+ understood words and 10+ meaningful spoken words"
  ]
 },
 "Read the lecture chart with its source qualifications.": {
  "terms": [
   "lecture chart"
  ],
  "definitions": [
   "source qualifications"
  ]
 },
 "Age bands are not rigid deadlines.": {
  "terms": [],
  "definitions": [],
  "checkpoint": "Keep the developmental range"
 },
 "Do not merge these values with the Integrated Scales.": {
  "terms": [],
  "definitions": [],
  "checkpoint": "Keep the sources separate"
 },
 "Figure 4-2 sound level rises upward.": {
  "terms": [
   "Figure 4-2"
  ],
  "definitions": [
   "sound level rises upward"
  ]
 },
 "Figure 4-5 dB HL increases downward.": {
  "terms": [
   "Figure 4-5"
  ],
  "definitions": [
   "dB HL increases downward"
  ]
 },
 "Figure 4-3 is a long-interval spectrum, not a single vowel’s formants or a universal pitch.": {
  "terms": [
   "Figure 4-3"
  ],
  "definitions": [
   "a long-interval spectrum, not a single vowel’s formants or a universal pitch"
  ]
 },
 "<mark class=\"e2-emphasis\" data-emphasis-source=\"ART1020\">Hearing that speech occurred does not prove the words were understood.</mark>": {
  "terms": [],
  "definitions": [],
  "checkpoint": "Separate audibility and intelligibility"
 },
 "Read the axes before interpreting a figure.": {
  "terms": [],
  "definitions": [],
  "checkpoint": "Start with the axes"
 },
 "Use Table 4-1 to compare <strong class=\"e2-term\">relative phonetic power</strong>.": {
  "terms": [
   "Table 4-1"
  ],
  "definitions": [
   "compare relative phonetic power"
  ]
 },
 "Explain <strong class=\"e2-term\">transitional cues</strong> from movement between adjacent sounds.": {
  "terms": [
   "transitional cues"
  ],
  "definitions": [
   "movement between adjacent sounds"
  ]
 },
 "Its entries are relative values, not dB labels.": {
  "terms": [],
  "definitions": [],
  "checkpoint": "Keep the scale distinct"
 },
 "Connected speech changes acoustic properties rather than preserving every sound’s isolated form.": {
  "terms": [],
  "definitions": [],
  "checkpoint": "Interpret sounds in context"
 },
 "<strong class=\"e2-term\">Communication noise</strong> includes more than acoustic noise.": {
  "terms": [
   "Communication noise"
  ],
  "definitions": [
   "includes more than acoustic noise"
  ]
 },
 "Table 4-5 includes speaker, environment and listener barriers, including visual interference.": {
  "terms": [
   "Table 4-5"
  ],
  "definitions": [
   "speaker, environment and listener barriers, including visual interference"
  ]
 },
 "Speech in noise also depends on the listener’s language knowledge and available context.": {
  "terms": [],
  "definitions": [],
  "checkpoint": "Connect access and context"
 },
 "<strong class=\"e2-term\">IT-MAIS</strong>, <strong class=\"e2-term\">PEACH</strong> and <strong class=\"e2-term\">FAPI</strong> provide functional evidence.": {
  "terms": [
   "IT-MAIS, PEACH and FAPI"
  ],
  "definitions": [
   "provide functional evidence"
  ]
 },
 "<strong class=\"e2-term\">WIPI</strong> and <strong class=\"e2-term\">NU-CHIPS</strong> use picture responses.": {
  "terms": [
   "WIPI and NU-CHIPS"
  ],
  "definitions": [
   "use picture responses"
  ]
 },
 "<strong class=\"e2-term\">ESP</strong> addresses pattern and word categories.": {
  "terms": [
   "ESP"
  ],
  "definitions": [
   "addresses pattern and word categories"
  ]
 },
 "<strong class=\"e2-term\">GASP</strong> has three subtests. <strong class=\"e2-term\">DASL II</strong> has three auditory areas.": {
  "terms": [
   "GASP",
   "DASL II"
  ],
  "definitions": [
   "has three subtests",
   "has three auditory areas"
  ]
 },
 "Silence is a catch trial.": {
  "terms": [
   "Silence"
  ],
  "definitions": [
   "a catch trial"
  ]
 },
 "A listed assessment is not automatically norm-referenced.": {
  "terms": [],
  "definitions": [],
  "checkpoint": "Keep the test claim qualified"
 },
 "/u, a, i, m, n, h, dʒ, ʃ, s, z/. The “j” is /dʒ/ as in jump.": {
  "terms": [],
  "definitions": [],
  "checkpoint": "Recall the complete sound set"
 },
 "<strong class=\"e2-term\">Detecting</strong> any sound differs from <strong class=\"e2-term\">identifying</strong> which sound was presented.": {
  "terms": [
   "Detecting",
   "identifying"
  ],
  "definitions": [
   "any sound",
   "which sound was presented"
  ]
 },
 "<strong class=\"e2-term\">Detection</strong> → <strong class=\"e2-term\">discrimination</strong> → <strong class=\"e2-term\">identification</strong> → <strong class=\"e2-term\">comprehension</strong>.": {
  "terms": [],
  "definitions": [],
  "checkpoint": "Order the response demands"
 },
 "Keep the lecture’s feet protocol separate from the handout’s meter protocol.": {
  "terms": [],
  "definitions": [],
  "checkpoint": "Retain source-specific distances"
 },
 "<mark class=\"e2-emphasis\" data-emphasis-source=\"ART1022-4\">Repeating a stimulus alone does not demonstrate comprehension.</mark>": {
  "terms": [],
  "definitions": [],
  "checkpoint": "Require evidence of meaning"
 },
 "<strong class=\"e2-term\">Analytic</strong> uses small-unit work.": {
  "terms": [
   "Analytic"
  ],
  "definitions": [
   "uses small-unit work"
  ]
 },
 "<strong class=\"e2-term\">Synthetic</strong> uses meaningful or contextual work.": {
  "terms": [
   "Synthetic"
  ],
  "definitions": [
   "uses meaningful or contextual work"
  ]
 },
 "<strong class=\"e2-term\">Pragmatic</strong> develops control of communication variables.": {
  "terms": [
   "Pragmatic"
  ],
  "definitions": [
   "develops control of communication variables"
  ]
 },
 "<strong class=\"e2-term\">Eclectic</strong> combines approaches.": {
  "terms": [
   "Eclectic"
  ],
  "definitions": [
   "combines approaches"
  ]
 },
 "<strong class=\"e2-term\">Formal or informal</strong> describes activity type.": {
  "terms": [
   "Formal or informal"
  ],
  "definitions": [
   "describes activity type"
  ]
 },
 "Choose the <strong class=\"e2-term\">auditory skill</strong>, <strong class=\"e2-term\">stimuli</strong>, <strong class=\"e2-term\">activity type</strong> and <strong class=\"e2-term\">difficulty</strong>.": {
  "terms": [],
  "definitions": [],
  "checkpoint": "Make all four design decisions"
 },
 "<mark class=\"e2-emphasis\" data-emphasis-source=\"ART1022-6\">Keep the task challenging without making it frustrating.</mark>": {
  "terms": [],
  "definitions": [],
  "checkpoint": "Adjust support deliberately"
 },
 "<strong class=\"e2-term\">Lipreading</strong> is visual-only.": {
  "terms": [
   "Lipreading"
  ],
  "definitions": [
   "visual-only"
  ]
 },
 "<strong class=\"e2-term\">Speechreading</strong> combines auditory and visual cues. Usage varies elsewhere.": {
  "terms": [
   "Speechreading"
  ],
  "definitions": [
   "combines auditory and visual cues"
  ]
 },
 "<strong class=\"e2-term\">Speaker</strong>, <strong class=\"e2-term\">signal/code</strong>, <strong class=\"e2-term\">environment</strong> and <strong class=\"e2-term\">speechreader</strong>.": {
  "terms": [],
  "definitions": [],
  "checkpoint": "Use all four factors"
 },
 "Clear speech uses good, unexaggerated articulation.": {
  "terms": [
   "Clear speech"
  ],
  "definitions": [
   "uses good, unexaggerated articulation"
  ]
 },
 "The lecture specifies <strong class=\"e2-term\">0° azimuth</strong> and about <strong class=\"e2-term\">2–5 feet</strong> as optimal viewing.": {
  "terms": [
   "0° azimuth",
   "2–5 feet"
  ],
  "definitions": [
   "optimal viewing"
  ]
 },
 "These are course-specific values. The textbook discusses broader conditions.": {
  "terms": [],
  "definitions": [],
  "checkpoint": "Keep the viewing context"
 },
 "<strong class=\"e2-term\">ASL</strong> is an independent language.": {
  "terms": [
   "ASL"
  ],
  "definitions": [
   "an independent language"
  ]
 },
 "<strong class=\"e2-term\">MCE</strong> represents English structure.": {
  "terms": [
   "MCE"
  ],
  "definitions": [
   "represents English structure"
  ]
 },
 "<strong class=\"e2-term\">Cued Speech</strong> combines mouth movements with eight handshapes and four placements.": {
  "terms": [
   "Cued Speech"
  ],
  "definitions": [
   "combines mouth movements with eight handshapes and four placements"
  ]
 },
 "English is a comparison language, not a manual system.": {
  "terms": [
   "English"
  ],
  "definitions": [
   "a comparison language, not a manual system"
  ]
 },
 "Its sign parameters are hand configuration, movement, location and orientation.": {
  "terms": [],
  "definitions": [],
  "checkpoint": "Recall the complete parameter set"
 },
 "Facial and body cues add prosody.": {
  "terms": [],
  "definitions": [],
  "checkpoint": "Include nonmanual information"
 },
 "Keep three decisions separate.": {
  "terms": [],
  "definitions": [],
  "supplement": {
   "label": "Referral versus candidacy",
   "text": "A referral requests a team evaluation. Observed listening difficulty does not independently establish surgical or insurance eligibility."
  }
 },
 "<strong class=\"e2-term\">Implantation</strong> and <strong class=\"e2-term\">activation</strong> are different appointments.": {
  "terms": [],
  "definitions": [],
  "supplement": {
   "label": "Function versus benefit",
   "text": "Telemetry checks device/electrode function. It does not measure the child’s everyday language benefit."
  }
 },
 "Keep the educational implication precise.": {
  "terms": [],
  "definitions": [],
  "supplement": {
   "label": "Keep the implication precise",
   "text": "Cross-modal reorganization does not establish that visual language or touch should be withheld from a child."
  }
 },
 "Calculate elapsed experience from the stated start of consistent access.": {
  "terms": [],
  "definitions": [],
  "supplement": {
   "label": "Count useful experience",
   "text": "Listening age reflects time with consistent usable input. Chronological age counts time since birth."
  }
 },
 "Record whether the response demonstrates <strong class=\"e2-term\">detection</strong> or <strong class=\"e2-term\">identification</strong>.": {
  "terms": [],
  "definitions": [],
  "supplement": {
   "label": "Name the response",
   "text": "Detection establishes that a sound was heard. Identification establishes which sound was heard."
  }
 },
 "Each level adds a different demand.": {
  "terms": [],
  "definitions": [],
  "supplement": {
   "label": "Name the demand",
   "text": "Noticing, comparing, identifying, and understanding are different response demands."
  }
 },
 "Track distinct actions and the reason for each.": {
  "terms": [],
  "definitions": [],
  "supplement": {
   "label": "Use the whole profile",
   "text": "Connect observations across developmental areas before deciding what support the child needs."
  }
 },
 "Review access before choosing an auditory-only target.": {
  "terms": [],
  "definitions": [],
  "supplement": {
   "label": "Access before difficulty",
   "text": "An auditory-only contrast must be accessible through the child’s hearing technology before practice can develop its use."
  }
 },
 "The same stimulus level can use different response formats.": {
  "terms": [],
  "definitions": [],
  "supplement": {
   "label": "Separate stimulus and response",
   "text": "A word-level stimulus can use open-set or closed-set responses. “Word test” alone does not specify task difficulty."
  }
 },
 "Classify the <strong class=\"e2-term\">response demand</strong> under the stated conditions.": {
  "terms": [],
  "definitions": [],
  "supplement": {
   "label": "Read the actual response",
   "text": "Classify the demonstrated skill and conditions. A game name or slide heading alone does not determine the hierarchy level."
  }
 },
 "Keep <strong class=\"e2-term\">Erber level</strong> and <strong class=\"e2-term\">training approach</strong> separate.": {
  "terms": [],
  "definitions": [],
  "supplement": {
   "label": "Level versus approach",
   "text": "Erber level describes the response demand. The training approach describes how instruction is organized."
  }
 },
 "Measure the task that was written.": {
  "terms": [],
  "definitions": [],
  "supplement": {
   "label": "Measure the stated target",
   "text": "Compare performance under the goal’s specified cueing and listening conditions, not a different, easier task."
  }
 },
 "<mark class=\"e2-emphasis\" data-emphasis-source=\"ART1022-6\">Choose the program for the child and family.</mark>": {
  "terms": [],
  "definitions": [],
  "supplement": {
   "label": "Individualize the sequence",
   "text": "A program provides structure. Assessment and child/family needs guide the starting point and goals."
  }
 },
 "Use the deck’s distinction between <strong class=\"e2-term\">lipreading</strong> and <strong class=\"e2-term\">speechreading</strong>.": {
  "terms": [],
  "definitions": [],
  "supplement": {
   "label": "Key distinction",
   "text": "A visual-only task and a task combining residual hearing with visual cues do not measure the same input condition."
  }
 },
 "Improve the conditions for seeing and hearing the talker.": {
  "terms": [],
  "definitions": [],
  "supplement": {
   "label": "Key distinction",
   "text": "Lighting supports visual access. Noise control supports auditory access. Topic and context narrow linguistic alternatives. Match the support to the missing information."
  }
 },
 "Interpret training gains without overpromising.": {
  "terms": [],
  "definitions": [],
  "supplement": {
   "label": "Key distinction",
   "text": "A client’s reported improvement matters, but it is not interchangeable with a demonstrated change on an objective measure."
  }
 },
 "Distinguish English-based systems from an independent language.": {
  "terms": [],
  "definitions": [],
  "supplement": {
   "label": "Key distinction",
   "text": "English-based sign systems represent English structure. ASL is taught separately as an independent language with its own vocabulary and syntax."
  }
 },
 "A <strong class=\"e2-term\">hearing aid</strong> and a CI deliver different forms of input.": {
  "terms": [],
  "definitions": [],
  "supplement": {
   "label": "Key distinction",
   "text": "A hearing aid amplifies acoustic input. A cochlear implant changes the signal into electrical stimulation."
  }
 },
 "<div style=\"overflow-x:auto\"><table><caption>Supplied scan · Table 13–3, page 387</caption><thead><tr><th scope=\"col\">Measure</th><th scope=\"col\">Stimulus type</th><th scope=\"col\">Stimulus material</th><th scope=\"col\">Response format</th></tr></thead><tbody><tr><td>Speech Pattern Contrast (<strong class=\"e2-term\">SPAC</strong>)</td><td>Phoneme / suprasegmental contrasts</td><td>Words and phrases</td><td>Closed</td></tr><tr><td><strong class=\"e2-term\">Audiovisual Feature Test</strong></td><td>Phoneme</td><td>Rhyming words</td><td>Closed, 10 choices</td></tr><tr><td>Nonsense Syllable Test (<strong class=\"e2-term\">NST</strong>)</td><td>Phoneme</td><td>Nonsense syllables</td><td>Open</td></tr><tr><td><strong class=\"e2-term\">Minimal Pairs Test</strong></td><td>Phoneme</td><td>Monosyllabic pairs, e.g. pair / spare</td><td>Closed, 2 choices</td></tr><tr><td>Auditory Numbers Test (<strong class=\"e2-term\">ANT</strong>)</td><td>Word</td><td>Numbers</td><td>Closed, 5 choices</td></tr><tr><td><strong class=\"e2-term\">NU-CHIPS</strong></td><td>Word</td><td>Monosyllabic nouns</td><td>Closed, 4 choices</td></tr><tr><td>WIPI</td><td>Word</td><td>Monosyllabic words</td><td>Closed, 6 choices in this table</td></tr><tr><td>Phonetically Balanced Kindergarten (PBK)</td><td>Word</td><td>Monosyllabic words after “Say the word”</td><td>Open</td></tr><tr><td>Early Speech Perception (<strong class=\"e2-term\">ESP</strong>)</td><td>Word</td><td>Words varying in syllable count</td><td>Closed</td></tr><tr><td>ESP low-verbal version</td><td>Word</td><td>Words varying in syllable count</td><td>Closed</td></tr><tr><td><strong class=\"e2-term\">Lexical</strong> Neighborhood Test (LNT)</td><td>Word</td><td>Lexically easy versus hard words</td><td>Open</td></tr><tr><td>Children’s Realistic Index of Speech Perception (<strong class=\"e2-term\">CRISP</strong>)</td><td>Word</td><td>25 spondees with two competing sentences</td><td>Closed, 4 choices</td></tr></tbody></table></div>": {
  "terms": [
   "Speech Pattern Contrast (SPAC)",
   "Audiovisual Feature Test",
   "Nonsense Syllable Test (NST)",
   "Minimal Pairs Test",
   "Auditory Numbers Test (ANT)",
   "NU-CHIPS",
   "WIPI",
   "Phonetically Balanced Kindergarten (PBK)",
   "Early Speech Perception (ESP)",
   "ESP low-verbal version",
   "Lexical Neighborhood Test (LNT)",
   "Children’s Realistic Index of Speech Perception (CRISP)"
  ],
  "definitions": [
   "Phoneme / suprasegmental contrasts",
   "Phoneme",
   "Word",
   "Words and phrases",
   "Rhyming words",
   "Nonsense syllables",
   "Monosyllabic pairs, e.g. pair / spare",
   "Numbers",
   "Monosyllabic nouns",
   "Monosyllabic words",
   "Monosyllabic words after “Say the word”",
   "Words varying in syllable count",
   "Lexically easy versus hard words",
   "25 spondees with two competing sentences",
   "Closed",
   "Closed, 10 choices",
   "Closed, 2 choices",
   "Closed, 4 choices",
   "Closed, 5 choices",
   "Closed, 6 choices in this table",
   "Open"
  ]
 }
};
var sourcePlans={
 "ARL4-2": {
  "source": "Fundamental \nconcept of a \ncochlear implant\n• A cochlear implant is a device that electrically \nstimulates the auditory nerve of patients with \nsensorineural hearing loss to provide them with sound \nand speech information. \n• Surgically implanted device that bypasses the peripheral \nauditory system to directly electrically stimulate the \nauditory nerve.\n• It DOES NOT restore normal hearing\n• Goal is to provide useful hearing and improved \ncommunication to adults and children with severe to \nprofound hearing losses\n",
  "terms": [
   "cochlear implant",
   "Goal"
  ],
  "definitions": [
   "electrically \nstimulates the auditory nerve of patients with \nsensorineural hearing loss",
   "provide useful hearing and improved \ncommunication"
  ]
 },
 "ARL4-3": {
  "source": "Brief History\n• Count Alessandro Volta in 1790 – experimented by \nputting electrodes in his ears\n• Drs. Donald Eddington, William House, Robert Schindler, \nRobert White, and Graeme Clark, played pivotal roles in \nthe evolution of cochlear implant technology.\n• In 1972, one of the first wearable cochlear implants was \nimplanted in Mr. Charles Graser at the House Ear \nInstitute by Dr. William House. The House/3M device \nconsisted of a single electrode implanted in the basal \nend of the cochlea with a ground electrode placed in the \nEustachian tube.\n• Multielectrode (or multichannel) cochlear implant \ndevices first came into wide use in the 1980s.\n",
  "terms": [
   "Count Alessandro Volta",
   "House/3M device",
   "Multielectrode (or multichannel)"
  ],
  "definitions": [
   "1790 – experimented by \nputting electrodes in his ears",
   "single electrode implanted in the basal \nend of the cochlea",
   "wide use in the 1980s"
  ]
 },
 "ARL4-4": {
  "source": "Current Cochlear Implant Systems\n• Thr ee manufacturers - 2019, more than 736,900 cochlear implants \nworldwide had been registered from these companies\n• Cochlear Americas\n•\n1981 - development of a multichannel cochlear implant\n•\nThi s device was the Nucleus 22 cochlear implant (CI22M) and it secured approval from the USFDA in 1985.\n• MED-EL Corporation\n•\ndeveloped the world’s fir st behind-the-ear (BTE) cochlear implant sound processor in 1991.\n• Advanced Bionics\n•\nFirst cochlear implant system capable of simultaneous stimulation of multiple electrodes within the cochlea.\n",
  "terms": [
   "Nucleus 22",
   "MED-EL Corporation",
   "Advanced Bionics"
  ],
  "definitions": [
   "approval from the USFDA in 1985",
   "behind-the-ear (BTE) cochlear implant sound processor in 1991",
   "simultaneous stimulation of multiple electrodes"
  ]
 },
 "ARL4-5": {
  "source": "Why CI?\nUp to 80% of children who receive cochlear implants \nyounger than 12 months demonstrated receptive \nvocabulary knowledge within the normal range by school \nentry. (Dettm an SJ, et al. 2016)\n",
  "terms": [
   "cochlear implants"
  ],
  "definitions": [
   "younger than 12 months demonstrated receptive \nvocabulary knowledge within the normal range by school \nentry"
  ]
 },
 "ARL4-7": {
  "source": "Cochlear Implant Components\n• External Components\n• Microphone\n• Sound processor\n• Transmitte r\n• Batte ry\n• Internal Components\n• Receiver\n• Electrode array\n",
  "terms": [
   "External Components",
   "Internal Components"
  ],
  "definitions": [
   "Microphone",
   "Receiver",
   "Electrode array"
  ]
 },
 "ARL4-10": {
  "source": "How does a \nCochlear \nImplant Work?\n• The microphone detects acoustic signals in the environment\n• The sound processor converts the microphone’s incoming \nsignal into a digital signal\n• The sound processor then relays the digital signal to the \ntransmitte r on the outside of the patient’s scalp\n• The transmitte r in turn sends the digital signal to the \ninternal receiver through the skin \n• The receiver converts the digital signal into electrical pulses \ntransmitte d to the implanted electrode array\n• Electrode array stimulates the auditory nerve fib ers\n• The auditory nerve sends the information to the brain \n",
  "terms": [
   "microphone",
   "sound processor",
   "receiver",
   "electrode array",
   "auditory nerve"
  ],
  "definitions": [
   "detects acoustic signals in the environment",
   "converts the microphone’s incoming \nsignal into a digital signal",
   "converts the digital signal into electrical pulses",
   "stimulates the auditory nerve fib ers",
   "sends the information to the brain"
  ],
  "checkpoints": [
   {
    "phrase": "The sound processor converts the microphone’s incoming \nsignal into a digital signal",
    "label": "Follow the signal"
   }
  ]
 },
 "ARL4-11": {
  "source": "CI Candidacy\n• Audiological Goals\n• Evaluate patient’s hearing loss\n• Evaluate benefit from hearing aids\n• Work with other team members, especially the \nsurgeon(s) and SLP(s) to determine if patient will \nbenefit from a CI\n• Determine if patient meets FDA and/or insurer’s \nIndications\n• Must have a support system in place and be \nmotivated\n• Must have realistic expectations\n",
  "terms": [
   "CI Candidacy"
  ],
  "definitions": [
   "Evaluate patient’s hearing loss",
   "Evaluate benefit from hearing aids"
  ]
 },
 "ARL4-12": {
  "source": "Audiological Candidacy Criteria Adult (Table \n3.1)\n• Moderate to profound in the low Hz; severe to profound mid to high Hz\n• Aided speech recognition scores\n• Desire to be part of the hearing world\n• No medical contraindications\n• High motivation\n• Realistic expectations\n",
  "terms": [
   "Candidacy Criteria Adult"
  ],
  "definitions": [
   "Moderate to profound in the low Hz; severe to profound mid to high Hz"
  ]
 },
 "ARL4-13": {
  "source": "Audiological Candidacy Criteria young \nchildren (Table 3.1) less than 2 years\n•  Bilateral Profound SNHL bilaterally (Children 9-24 months)\n• Lack of progress in the development of simple auditory skills when \nappropriately aided\n• The rapy program that emphasizes the development of auditory skills\n• No medical contraindications\n• Highly motivated\n• Parents have appropriate expectations\n",
  "terms": [
   "Children 9-24 months"
  ],
  "definitions": [
   "Lack of progress in the development of simple auditory skills when \nappropriately aided"
  ]
 },
 "ARL4-14": {
  "source": "Audiological Candidacy criteria older children \n(Table 3.1) 2-18 years old\n• Bilateral severe to profound SNHL bilaterally (2-18 years)**\n• Lack of auditory and speech/language development with hearing aids\n• ≤30% correct on open set word recognition tests in best aided condition \n•\nEducational/therapy program that emphasizes the development of auditory skills\n• No medical contraindications\n• High motivation from patient and family\n• Parent and child have appropriate expectations\n",
  "terms": [
   "2-18 years old"
  ],
  "definitions": [
   "≤30% correct on open set word recognition tests in best aided condition"
  ]
 },
 "ARL4-15": {
  "source": "Single sided deafness\n• 5 years of age and older\n• Ear to be implanted\no Severe to profound SNHL defin ed as: Pure tone average >80 dB HL\no Aided CNC word score or developmentally appropriate word test < 30 dB HL\n• Contralateral ear\no Normal to near normal as defin ed as a pure tone average < 30 dB HL\n",
  "terms": [
   "Pure tone average"
  ],
  "definitions": [
   ">80 dB HL"
  ]
 },
 "ARL4-16": {
  "source": "When to \nconsider a CI \nevaluation: \ninfants and \ntoddlers\n• Does not react to loud sounds\n• Does not seek out or detect where sound is coming from\n• Has stopped babbling and experimenting with making \nsounds\n• Still babbles but is not progressing to more \nunderstandable speech\n• No reactions to voices, especially when being held. \n",
  "terms": [
   "infants and \ntoddlers",
   "CI \nevaluation"
  ],
  "definitions": [
   "Does not react to loud sounds",
   "Has stopped babbling and experimenting with making \nsounds"
  ]
 },
 "ARL4-17": {
  "source": "When to \nconsider a CI \nevaluation: \nSchool age\n• Repeatedly misses or does not respond to all Ling 6 \nsounds with appropriately fit hearing technology\n• Demonstrates increased dependency on remote \nmicrophone technology (FM/DM systems) or visual cues \nfor access to speech in quiet environments\n• Demonstrates slow auditory progress in comparison to \ntypical hearing peers\n• Easily frustrated or experiences communication \nbreakdowns\n• Exhausted at the end of the school day due to constant \nconcentration just to understand speech\n",
  "terms": [
   "School age"
  ],
  "definitions": [
   "Repeatedly misses or does not respond to all Ling 6 \nsounds with appropriately fit hearing technology"
  ]
 },
 "ARL4-18": {
  "source": "Audiological \nEvaluation\n• Unaided testing\n• behavioral\n• Electrophysiological (ABR/ASSR)\n• Aided testing(appropriately fit hearing aids)\n• behavioral\n• Validation measure\n• IT-MAIS\n• CHILD\n• PEACH\n• ELF\n",
  "terms": [
   "Unaided testing",
   "Validation measure"
  ],
  "definitions": [
   "Electrophysiological (ABR/ASSR)",
   "IT-MAIS"
  ]
 },
 "ARL4-19": {
  "source": "Audiologic \ncandidacy \nmeasure-pediatrics\nTest measures depend on the age \nand language skills of the child\n",
  "terms": [
   "Test measures"
  ],
  "definitions": [
   "depend on the age \nand language skills of the child"
  ]
 },
 "ARL4-20": {
  "source": "Evaluating very young children\n• Children who receive a cochlear implant prior to 3 years of age, and \nespecially prior to 18 months of age, make faster rates of progress with \nspoken language than children who receive their cochlear implant at older \nages.  Thus, it is important for us to provide implants early\n• ABR and behavioral testing are used to confir m audiometric thresholds, \nand candidacy is typically based on these findings alone since speech \nperception testing is not possible.\n",
  "terms": [
   "prior to 18 months of age"
  ],
  "definitions": [
   "make faster rates of progress with \nspoken language"
  ]
 },
 "ARL4-21": {
  "source": "Auditory Behavior/Functional Assessment\n• Auditory Behavior/Functional assessments are used with children of all ages and necessary \nto see if the child meets FDA indications:\n•\nAB:  failing to reach developmentally appropriate auditory milestones\n•\nCochlear and MedEl:  demonstrating lack of progress in simple auditory skill development.\n• The information provided by the SLP, via observation and functional assessments, is also an \nessential part of determining if the child meets the indications cited above\n• Audiological measures examine this as well:\n•\nIT-MAIS (Robbins, Renshaw, & Berry, 1991)\n•\nBirth-3 years, 10 parental questions that evaluate meaningful use of sound in everyday situations\n•\nMAIS (Robbins et al., 1991)\n•\n3 years and up, 10 questions like the IT-MAIS\n•\nLittl e Ears (Kuehn-Inacken et al., 2003)\n•\nBirth and up, 35 parental questions that assess auditory development\n",
  "terms": [
   "IT-MAIS",
   "MAIS (Robbins",
   "Littl e Ears"
  ],
  "definitions": [
   "Birth-3 years, 10 parental questions",
   "3 years and up, 10 questions",
   "Birth and up, 35 parental questions"
  ]
 },
 "ARL4-23": {
  "source": "Older Children:  Open-Set Speech Recognition \nMeasures\n• Provide an unlimited number of response alternatives\n• More diffic ult than closed-set tests (open-set) \n• Chance score typically = 0%\n• Should be presented recorded if possible\n• Common measures = MLNT, LNT, Pediatric AzBio Sentences\n• May be presented in quiet or in noise\n",
  "terms": [
   "Open-Set Speech Recognition"
  ],
  "definitions": [
   "Provide an unlimited number of response alternatives",
   "Chance score typically = 0%"
  ],
  "checkpoints": [
   {
    "phrase": "Provide an unlimited number of response alternatives",
    "label": "Check the response format"
   }
  ]
 },
 "ARL4-24": {
  "source": "Medical evaluation\n• History \n• Physical exam\n• genetics\n• Co existing conditions\n• Vaccines \n• Imaging\n• MRI\n• CT\n",
  "terms": [
   "Medical evaluation",
   "Imaging"
  ],
  "definitions": [
   "History",
   "MRI",
   "CT"
  ]
 },
 "ARL4-25": {
  "source": "Counseling\n●Normal hearing\n●CI hearing\n●CI timeline\n●Communication options\n●Speech therapy\n●Support Groups\n●Realistic expectations\n●CI manufacturers\n●Immunizations\n●Imaging\n●Genetics\n●Early Steps\n●Parent Pupil Education \nProgram\n●Guide By Your Side\n●Louisiana Hands and Voices\n",
  "terms": [
   "Counseling"
  ],
  "definitions": [
   "Realistic expectations",
   "Communication options"
  ]
 },
 "ARL4-26": {
  "source": "The CI Team\n• Parents/family\n• Audiologist\no Responsible for assessing hearing \nfunction, determining device candidacy, and \nprogramming the CI across the patient’s lifespan\n• SLP\no Help in developing the patient's speech and \nlanguage skills, particularly for peds\n• ENT\no Plays a crucial role in performing the surgical \nimplantation procedure and managing any medical \naspects related to the implantation\n",
  "terms": [
   "Audiologist",
   "SLP",
   "ENT"
  ],
  "definitions": [
   "assessing hearing \nfunction, determining device candidacy, and \nprogramming the CI across the patient’s lifespan",
   "developing the patient's speech and \nlanguage skills",
   "performing the surgical \nimplantation procedure"
  ]
 },
 "ARL4-27": {
  "source": "Other CI \nteam \nmembers \ncould \ninclude:\n•Psychologist\n•Genetic counselor\n•Educator\n•Social worker\n•Patient navigator\n•Service coordinator\n",
  "terms": [
   "Other CI \nteam \nmembers"
  ],
  "definitions": [
   "Psychologist",
   "Genetic counselor",
   "Service coordinator"
  ]
 },
 "ARL4-28": {
  "source": "The CI Team\n• CI Candidacy decisions require a team of professionals \nworking together to make the best possible \nrecommendation for a patient\n• SLPs are valued members of CI teams; they provide \nimportant information that helps determine if a patient \nshould receive an implant, if a patient is receiving \nappropriate benefit from an implant that helps guide \nfuture decisions regarding candidacy\n",
  "terms": [
   "CI Candidacy decisions",
   "SLPs"
  ],
  "definitions": [
   "a team of professionals \nworking together",
   "important information that helps determine if a patient \nshould receive an implant"
  ]
 },
 "ARL4-29": {
  "source": "Referrals for CI: SLP’s are in the know\n• Many CI programs rely on the expertise of the speech-language pathologist \nto help them determine if a patient is a candidate for a cochlear implant\n• Similarly, many CI programs rely on the excellent referrals made by SLPs for \ncandidacy evaluations.  SLPs are ofte n the fir st to know if a child is not \nmaking adequate progress in his/her spoken language skills and to notice if \nthe child will/will not be able to keep up with his/her peers with typical \nhearing using his/her current hearing technology\n",
  "terms": [
   "SLPs"
  ],
  "definitions": [
   "candidacy evaluations"
  ]
 },
 "ARL4-30": {
  "source": "Implantation\n•Surgeon-\n•places electrode \narray\n•Audiologist-\n•conducts telemetry \n(in real time \nverific ation) \n",
  "terms": [
   "Surgeon",
   "Audiologist"
  ],
  "definitions": [
   "places electrode \narray",
   "conducts telemetry"
  ]
 },
 "ARL4-31": {
  "source": "Activation\n• Initial activation 2-4 weeks afte r \nsurgery\n• Noise or voices like robots, Mickey \nMouse, Donald Duck\n• Emotional reactions may vary \n• Emotional support\n• Progressive maps put into programs\n• Review all accessories in kit\n",
  "terms": [
   "Initial activation"
  ],
  "definitions": [
   "2-4 weeks afte r \nsurgery"
  ]
 },
 "ARL4-33": {
  "source": "Audiologic follow up\n• Follow-up appointments\n• Adjusting maps for comfortable loudness, sound quality, and speech \nunderstanding\n• Sound field testing to ensure hearing thresholds and speech discrimination \nscores are improved\n• 2 weeks, 1 month, 3 months, 6 months, annually\n",
  "terms": [
   "Adjusting maps"
  ],
  "definitions": [
   "comfortable loudness, sound quality, and speech \nunderstanding"
  ]
 },
 "ARL4-34": {
  "source": "Successful outcomes\n• Intrinsic characteristics\n• Gender\n• Cognitive ability\n• Family environment (SES)\n• Age at onset of HL\n• Pre-implant hearing\n•Implant characteristics\n• Generation of Technology\n• Device Function\n• Duration of implant use\n• Age at implantation\n•Anatomy\n• Boney structures, cochlea, and 8th \nnerve\n• Surgical procedure\n• Size and anatomy of \ncochlea/cochleostomy site\n• Depth of electrode insertion\n• Electrode placement/type\n• Etiology of HL\n• Spiral ganglion neurons (SGN) \nsurvival\n• Prior hearing aid use\n• Aural (re)habilitation\n• Auditory Verbal The rapists \n(Certified LSLS)\n• Education Options\n",
  "terms": [
   "Intrinsic characteristics",
   "Implant characteristics",
   "Anatomy"
  ],
  "definitions": [
   "Cognitive ability",
   "Device Function",
   "Boney structures, cochlea, and 8th \nnerve"
  ]
 },
 "ARL4-35": {
  "source": "Hearing with Two ears\n• Binaural hearing\noHearing with two ears\n• Bimodal hearing\noCochlear implant + hearing aid\n• Bilateral hearing\noTwo cochlear implants\n",
  "terms": [
   "Binaural hearing",
   "Bimodal hearing",
   "Bilateral hearing"
  ],
  "definitions": [
   "Hearing with Two ears",
   "Cochlear implant + hearing aid",
   "Two cochlear implants"
  ],
  "checkpoints": [
   {
    "phrase": "Bimodal hearing\noCochlear implant + hearing aid",
    "label": "Compare the devices"
   }
  ]
 },
 "ARL4-36": {
  "source": "Timing Matte rs!\n• Benefit varies from person to person\n• Sooner is better than later\n• Earlier cochlear implantation leads to:\n• Easier bonding with the device for the child.\n• Less time in therapy for child and parents.\n• Improved outcomes for speech, language, academics, and social skills.\n",
  "terms": [
   "Earlier cochlear implantation"
  ],
  "definitions": [
   "Easier bonding with the device for the child."
  ]
 },
 "ARL5-3": {
  "source": "3\nDevelopment of auditory function\nWhat is auditory function\nFoundations of Audition\nBrain development/neuroplasticity, rationale for early access\nCross modal reorganization\nHearing vs listening\nIntegrating listening into whole child\nLevels of auditory function/listening hierarchies\n\nFollowing normal development\n\nDetection, discrimination, identific ation, comprehension\n",
  "terms": [
   "Levels of auditory function/listening hierarchies"
  ],
  "definitions": [
   "Detection, discrimination, identific ation, comprehension"
  ]
 },
 "ARL5-4": {
  "source": "4\nAuditory Function\nThe ability of the brain to use sound meaningfully\nAuditory sound waves are converted into patte rns of neural \nactivity which are integrated with other sensory input - which \nfrom a survival standpoint may lead us to move (alerting) and at  \nmore sophisticated levels allow us to respond to music and to \ncommunicate with one another.\nHearing is the primary sense\n“…listening (audition) is the primary modality for learning spoken \nlanguage…” Cole, E. B., Flexer, C. A. (2007). Auditory \"Work\". In Children \nwith hearing loss: developing listening and talking. San Diego: Plural Pub., P. \n3.\n",
  "terms": [
   "Auditory Function"
  ],
  "definitions": [
   "The ability of the brain to use sound meaningfully"
  ]
 },
 "ARL5-5": {
  "source": "5\nThe foundation to Auditory learning is \naccess to sound\nOngoing audiologic management and listening with hearing devices\n",
  "terms": [
   "Auditory learning"
  ],
  "definitions": [
   "access to sound"
  ]
 },
 "ARL5-6": {
  "source": "The task of auditory function\nPick up\nPick up the \nsignal\nChange\nChange it into \nneural responses\nSend\nSend the signal \nto the correct \nareas of the brain\nProcess\nProcess the \nsignal \nmeaningfully \nand respond as \nneeded\n6\n",
  "terms": [
   "Pick up",
   "Change",
   "Send",
   "Process"
  ],
  "definitions": [
   "the \nsignal",
   "it into \nneural responses",
   "the signal \nto the correct \nareas of the brain",
   "meaningfully \nand respond as \nneeded"
  ]
 },
 "ARL5-7": {
  "source": "Auditory Function and neuroplasticity\nCarol Flexor, “We \nhear with the \nbrain”\nWhere it starts: \nears are “the \ndoorway to the \nbrain”\nThe pathway to \nthe correct part of \nthe brain has to be \nforged.\n7\n",
  "terms": [
   "ears"
  ],
  "definitions": [
   "doorway to the \nbrain"
  ]
 },
 "ARL5-8": {
  "source": "Typical Infants\nCochlea is formed and functional by the 20th \nweek of gestation\nListening is occurring in utero before birth\nInfants are born with 20 weeks of listening \nexperience\nNewborns with hearing loss may have already \nmissed 20 weeks of listening\n8\n",
  "terms": [
   "Cochlea"
  ],
  "definitions": [
   "formed and functional by the 20th \nweek of gestation"
  ]
 },
 "ARL5-9": {
  "source": "It’s about the brain\n9\nOver 1 million neural connections form per \nsecond in the fir st few years of life\nNewborns Distinguish Speech\nChildren as young as four days old can distinguish \nthe vowel sounds of the language in their natural \nenvironment from those of a foreign language\n",
  "terms": [
   "neural connections"
  ],
  "definitions": [
   "per \nsecond in the fir st few years of life"
  ]
 },
 "ARL5-10": {
  "source": "10\nFunctional \nreorganization\nBy end of 1st year there is a functional reorganization of the \nbrain to distinguish phonemes specific to language(s) heard daily\nThi s neural  reorganization improves and tunes the phonetic \ncategories required for the infant’s language and atte nuates \nthose phonemic distinctions not required for their language\nAuditory experience is critical for development of speech and \nlanguage\n",
  "terms": [
   "Functional \nreorganization"
  ],
  "definitions": [
   "distinguish phonemes specific to language(s) heard daily"
  ]
 },
 "ARL5-11": {
  "source": "Normally, in the fir st \nyear of life, the brain \ndevelops the pathways \nfor vision, hearing, and \nlanguage.\n11\n",
  "terms": [
   "fir st \nyear of life"
  ],
  "definitions": [
   "pathways \nfor vision, hearing, and \nlanguage"
  ]
 },
 "ARL5-12": {
  "source": "Hearing loss is an emergency\n12\nIf in normal development the foundational \npathways for vision, hearing, and language \nare set by 12 months, what does this mean \nfor children who fir st get good access to \nsound with a cochlear implant at 12-13 \nmonths of age?\nBabies with hearing loss become delayed.\nHearing Loss is a neurobiological \nemergency\n",
  "terms": [
   "Hearing loss"
  ],
  "definitions": [
   "neurobiological \nemergency"
  ]
 },
 "ARL5-13": {
  "source": "You Speak \nHow You Hear\nYoung children will speak how their parents speak\nIf your auditory input is poor, your speech will be too\nMuddy in, muddy out\nParents and Caregivers are the architects of early brain \ndevelopment.\nAudiologists and SLP’s must teach, coach, cheer, listen, \nand facilitate full-time device use.\nThi nk:   Eyes open, technology on\n13\n",
  "terms": [
   "Parents and Caregivers"
  ],
  "definitions": [
   "architects of early brain \ndevelopment"
  ]
 },
 "ARL5-14": {
  "source": "Neuroplasticity\nBrain’s ability to grow, develop and alter its \nstructure, as a function of external stimulation\nWe can now stimulate auditory brain centers \nduring times of maximum neuroplasticity – the \nfirst 3½ years of life (greater)\nAuditory brain access is available to infants with \nprofound losses – due to CI\nEarly amplific ation or implantation stimulates a \nbrain that is in the initial process of organizing \nitself and is therefore more receptive to auditory \ninformation, resulting in greater auditory \ncapacity\n14\n",
  "terms": [
   "Neuroplasticity"
  ],
  "definitions": [
   "Brain’s ability to grow, develop and alter its \nstructure, as a function of external stimulation"
  ],
  "checkpoints": [
   {
    "phrase": "Brain’s ability to grow, develop and alter its \nstructure, as a function of external stimulation",
    "label": "Connect input and development"
   }
  ]
 },
 "ARL5-15": {
  "source": "Neuroplasticity\nNeurons can be thought of as the “workers awaiting a \njob assignments” in the brain\nThe Neuroplasticity (ability of these “workers” to learn a \nnew job) is greatest in the fir st 3 ½ years of life.\nWithout auditory stimulation, to do their job, these \nworkers forget how to do their hearing job.\nUse it or lose it\n15\n",
  "terms": [
   "Neuroplasticity"
  ],
  "definitions": [
   "greatest in the fir st 3 ½ years of life."
  ]
 },
 "ARL5-16": {
  "source": "Cross-Modal Reorganization\n“Use it or lose it”\nThe primary auditory cortex is \nhoused in the Heschel’s Gyrus \n(dark pink area).\nIf auditory stimulation is not \nreceived the brain reallocates use \nof this area to vision and touch \n(Karns, Dow, and Neville(2012)\n16\n",
  "terms": [
   "primary auditory cortex",
   "Cross-Modal Reorganization"
  ],
  "definitions": [
   "Heschel’s Gyrus",
   "the brain reallocates use \nof this area to vision and touch"
  ]
 },
 "ARL5-17": {
  "source": "17\nDevelopmental Synchrony\nDevelopmental Synchrony: skills developing/mastered \nat age-appropriate times, biologically.\nChild will be operating under a developmental paradigm \nnot a remedial paradigm\nDelayed auditory development leads to delayed language, \nwhich necessitates a remedial, rather than \ndevelopmental paradigm\n",
  "terms": [
   "Developmental Synchrony"
  ],
  "definitions": [
   "skills developing/mastered \nat age-appropriate times, biologically."
  ]
 },
 "ARL5-18": {
  "source": "18\nHearing versus Listening\nHearing is when the ear perceives sound.  With typical hearing, it just happens.\nAccess to Sound\nListening is a conscious effo rt that requires concentration.  Listening is    required to \nunderstand what someone is saying.\nAttention to Sound\nHearing ≠ Listening \nListening is a conscious activity. \nYoung listeners will benefit from a cue to “listen”\n",
  "terms": [
   "Hearing",
   "Listening"
  ],
  "definitions": [
   "when the ear perceives sound",
   "conscious effo rt that requires concentration"
  ],
  "checkpoints": [
   {
    "phrase": "Listening is a conscious effo rt that requires concentration.",
    "label": "Keep the distinction"
   }
  ]
 },
 "ARL5-19": {
  "source": "19\nListening experience\nPhonetic categories\nPhonological processes\nLexical-semantic use\nreading and higher order language use\n",
  "terms": [
   "Listening experience"
  ],
  "definitions": [
   "Phonetic categories",
   "Phonological processes",
   "Lexical-semantic use"
  ]
 },
 "ARL5-20": {
  "source": "20\nHow much listening experience is necessary for \nadequate language development?\nAbout 20,000 hours in the fir st 5 years of life to \ncreate the neural infrastructure for literacy\nAs a result, children receiving CI early may \nbenefit more from the greater plasticity of the \nauditory pathways\n",
  "terms": [
   "20,000 hours"
  ],
  "definitions": [
   "in the fir st 5 years of life"
  ]
 },
 "ARL5-21": {
  "source": "21\nListening hours per day\nBabies with typical hearing\n10 hours of listening per day\n10 hours a day = 3, 650 hours of listening \ntime per year.\nToddlers/preschoolers  with typical hearing\n12 hours of listening per day\n12 hours a day = 4,380 hours of listening \nper year\nBabies with part time HA/CI use\n4 hours of use per day\nIt will take 6 years of listening time to \nequal the listening time of the 1 year old \nwith typical hearing\nToddlers/preschoolers with part-time HA/CI \nuse\nWith 3 hours of use per day, it will take 9 \nyears of listening time to = just one year \nof listening experience gained by the \nchild with full-time device use (Rossi, \n2003).\n",
  "terms": [
   "10 hours a day",
   "12 hours a day"
  ],
  "definitions": [
   "3, 650 hours of listening \ntime per year",
   "4,380 hours of listening \nper year"
  ]
 },
 "ARL5-22": {
  "source": "22\nCreating the listening environment\nParents and interventionists can focus on developing the child’s \nlistening skills, strategies and choices only afte r the audiologist \nchannels acoustic information to the brain by fitt ing and \nprogramming technologies, not before\nGuide and coach parents to create environments that support \nlistening for the acquisition of spoken language throughout the \nchild’s daily activities.\nGuide and coach parents to help their child integrate listening and \nspoken language into all aspects of the child’s life.\n",
  "terms": [
   "listening environment"
  ],
  "definitions": [
   "integrate listening and \nspoken language into all aspects of the child’s life"
  ]
 },
 "ARL5-23": {
  "source": "23\nConcept of Listening Age\nChild with normal hearing listens to spoken language for at least 10-12 \nmonths before they begin producing single words\nAnd another 10-12 months before combining words\nChild with hearing loss will need similar amount of time\nThe day child begins wearing technology all waking hours is Day Zero \nfor listening age\nIf child begins at 3 months – will have a listening age of 9 months at 1 \nyr birthday\n",
  "terms": [
   "Day Zero"
  ],
  "definitions": [
   "The day child begins wearing technology all waking hours"
  ],
  "checkpoints": [
   {
    "phrase": "The day child begins wearing technology all waking hours",
    "label": "Identify the starting point"
   }
  ]
 },
 "ARL5-24": {
  "source": "24\nFactors that may advance or delay \nlistening age:\nAge at which technology was acquired\nQuality of speech signal made available\nAmount of time each day child wears technology\nSkill of family and therapist in providing auditory \nlanguage enrichment\n",
  "terms": [
   "listening age"
  ],
  "definitions": [
   "Quality of speech signal made available",
   "Amount of time each day child wears technology"
  ]
 },
 "ARL5-25": {
  "source": "25\nAudibility versus Intelligibility\nAudible: ability to detect presence \nAudibility: “ I hear it”\nIntelligible: discriminate the word-sound distinctions of \nindividual phonemes\nIntelligibility: “I understand it”\nSpeech might be audible, but not intelligible\n",
  "terms": [
   "Audible",
   "Intelligibility"
  ],
  "definitions": [
   "ability to detect presence",
   "I understand it"
  ],
  "checkpoints": [
   {
    "phrase": "Speech might be audible, but not intelligible",
    "label": "Keep the distinction"
   }
  ]
 },
 "ARL5-26": {
  "source": "26\nDevelopment of Auditory Skills\nOur ability to communicate verbally depends on the quality of our \nauditory perception of the various segmental and suprasegmental \naspects of speech\nDetection capabilities\nThe human auditory system has sophisticated perceptual capabilities, \nbut is limited in terms of the signals it can process \nFigure 4.2 Intensity limits vary as a function of frequency of the \nauditory stimulus\n",
  "terms": [
   "Intensity limits"
  ],
  "definitions": [
   "vary as a function of frequency of the \nauditory stimulus"
  ]
 },
 "ARL5-28": {
  "source": "28\nIntensity Parameters of Speech:\nAverage intensity of speech = approx. 45 dBHL\nDistance is obvious factor\nVariability exists in acoustical energy of individual \nspeech sounds\nMost powerful phoneme (schwa)– weakest phoneme \n(th) \nMale speakers produce speech at about 3 dB greater \nthan females\nTable 4.1\n",
  "terms": [
   "Average intensity of speech"
  ],
  "definitions": [
   "approx. 45 dBHL"
  ]
 },
 "ARL5-29": {
  "source": "29\nFrequency Parameters of Speech:\nOverall speech spectrum: 50–10,000 Hz\nGreatest amount of speech energy is found in \nfrequencies below 1000 Hz\nFigure 4.3\nFigure 4.5 – combined intensity and frequency \nvalues associated with individual speech sounds\n",
  "terms": [
   "Overall speech spectrum",
   "Greatest amount of speech energy"
  ],
  "definitions": [
   "50–10,000 Hz",
   "frequencies below 1000 Hz"
  ]
 },
 "ARL5-30": {
  "source": "30\nTemporal Parameters of Speech:\nDuration of individual speech sounds ranges \nfrom 20–400 msec\nVowels generally have longer duration and \nhigher acoustic energy, low-mid freq range…\nas opposed to consonants.\nIndividual phoneme duration does \ncontribute to speech perception\n",
  "terms": [
   "Duration",
   "Vowels"
  ],
  "definitions": [
   "20–400 msec",
   "longer duration and \nhigher acoustic energy"
  ]
 },
 "ARL5-31": {
  "source": "31\nTransitional Cues\nIntensity, frequency and durational properties are altered signific antly \nwhen phoneme is produced with other phonemes in conversation\nIn conversational speech, the dynamic movement of the articulators in \nthe production of adjacent phonemes produces acoustical by-\nproducts \nThe se are important for speech perception\n",
  "terms": [
   "Transitional Cues"
  ],
  "definitions": [
   "dynamic movement of the articulators in \nthe production of adjacent phonemes"
  ]
 },
 "ARL5-32": {
  "source": "32\nSummary:\nVowel sounds have strong low-mid frequency energy\nVowels: 250Hz-500Hz\nVowels carry 90% of energy of speech\nConsonant sounds are very weak, high-frequency sounds\nConsonants: 2000Hz/4000Hz and above \nConsonants carry only 10% of energy of speech, but 90% of the information \nneeded to perceive the diffe rences among sounds\nOctave band at 2000Hz carries greatest amount of speech information\nFor speech to be perceived clearly, both vowels and consonants must be \nacoustically available to the brain\n",
  "terms": [
   "Vowel sounds",
   "Consonants"
  ],
  "definitions": [
   "strong low-mid frequency energy",
   "2000Hz/4000Hz and above"
  ]
 },
 "ARL5-33": {
  "source": "33\nLing 10 sound test\nAllows a quick and easy way to verify that a child detects the vowel and consonant sounds \nof spoken language\nSounds selected for this test were selected because they encompass the entire speech \nspectrum \n- Allows parents and teachers to know the child’s distance hearing\nFrequent administration of this test can help parents and professionals monitor for:\nHearing aid malfunction\nCI malfunction\nChanges in child’s hearing\nOnset of middle ear pathology\n",
  "terms": [
   "Ling 10 sound test"
  ],
  "definitions": [
   "verify that a child detects the vowel and consonant sounds \nof spoken language"
  ]
 },
 "ARL5-35": {
  "source": "35\nRedundancy and Noise:\nPerception of speech involves more than just \nacoustics of speech or acoustic abilities of the \nlistener\nConversational speech is highly redundant\nTable 4.3\nTable 4.4 – Syntactic Constraints, Semantic \nConstraints, Situational Constraints\nTable 4.5 Sources of Noise in Oral Communication\n",
  "terms": [
   "Table 4.4",
   "Table 4.5"
  ],
  "definitions": [
   "Syntactic Constraints, Semantic \nConstraints, Situational Constraints",
   "Sources of Noise in Oral Communication"
  ]
 },
 "ARL5-37": {
  "source": "37\nNormal Development\nBased on the age by which most monolingual speaking children \nwill accomplish identified milestones\nAll items in a category are not typically mastered until reaching \nthe upper age limit in the age ranges. \nWhy important? \nNot just so you know what abnormal development is…\nTo aid in counseling a family regarding progress \n",
  "terms": [
   "Normal Development"
  ],
  "definitions": [
   "age by which most monolingual speaking children \nwill accomplish identified milestones"
  ]
 },
 "ARL5-38": {
  "source": "38\nIntegrated Scales of Development\nDocument on Moodle\nIntegrated scale that outline typical stages of development in the areas of \nlistening, receptive and expressive language, speech, cognition and social \ncommunication. The y have been adapted from a number of sources:\n\nCotta ge Acquisition Scales for Listening, Language and Speech\n\nPreschool Language Scale – 4 (PLS 4)\n\nThe Bzoch-League Receptive-Expressive Emergent Language Scale Second Edition\n\n(REEL - 2)\n\nThe Early Learning Accomplishment Profile Kit (E-LAP)\n\nThe Learning Accomplishment Profile Revised Edition Kit (LAP-R)\n\nThe Rosetti Infant-Toddler Language Scale\n\nSt. Gabriel’s Curriculum\n",
  "terms": [
   "Integrated Scales of Development"
  ],
  "definitions": [
   "listening, receptive and expressive language, speech, cognition and social \ncommunication"
  ]
 },
 "ARL5-39": {
  "source": "39\nVocabulary\nHow is vocabulary learned? \n18 months = 10 to 15 words\n24 months = 40–50 words words\n2 years = 150 words\n3 years = 300 to 400 words\n3 to 4 years = 600 to 1000 words\n4 to 5 years = 1000–1600 words\n5 to 6 years = 1500 to 2100 words\n(Talking Child, LLC)\n",
  "terms": [
   "18 months",
   "3 years"
  ],
  "definitions": [
   "10 to 15 words",
   "300 to 400 words"
  ]
 },
 "ARL5-40": {
  "source": "40\nVocabulary: Food For Thought\nAverage number of words per hour addressed to children by \nparents (Hart & Risley, 1999): \n2100 in a professional family\n1200 in a working-class family\n600 in a welfare family\nHow does the vocabulary diffe r among families? \nProfessional and working-class families\nMore varied vocabulary, complex ideas, subtle guidance, \nand positive feedback\n",
  "terms": [
   "Hart & Risley, 1999"
  ],
  "definitions": [
   "Average number of words per hour addressed to children by \nparents"
  ]
 },
 "ARL5-41": {
  "source": "41\nTypical Speech Intelligibility\nApproximate Age\n% Understood by Parents\n18 months\nA typical child is 25% intelligible\n2 years\nA typical child is 50-70% intelligible\n3 years\nA typical child is 80% intelligible\n4 years\nA typical child is 90% intelligible\n(Talking Child, LLC, 2003)\n",
  "terms": [
   "Speech Intelligibility"
  ],
  "definitions": [
   "% Understood by Parents"
  ]
 },
 "ARL5-42": {
  "source": "42\n“The Invisible Acoustic Filter Effe ct”\nHearing loss – a silent handicap \nHearing loss can be described as an invisible acoustic filter that “distorts, \nsmears, or eliminates incoming sounds, especially sounds from a distance – \neven a short distance.” \nHearing is not an isolated activity.  Everything else is built upon hearing\nHearing loss itself is invisible and can be easily ignored or underestimated.  \nOnly the neg. effects of hearing loss are visible. \n",
  "terms": [
   "Invisible Acoustic Filter"
  ],
  "definitions": [
   "distorts, \nsmears, or eliminates incoming sounds"
  ]
 },
 "ARL5-43": {
  "source": "43\nDeveloping Listening and Talking: \nEarly identific ation and intervention \nVigilant and ongoing audiologic management\nImmediate and consistent brain access of auditory info via technology\nGuidance from a professional who is highly qualifie d in the development of listening \nand speaking through techniques of parent coaching\nFollowing the professional’s coaching with daily and ongoing formal and informal \nauditory, language, cognitive, and literacy enrichment. \nIntegration and use of auditory strategies into all-day, everyday interactions with the \nchild\n",
  "terms": [
   "Developing Listening and Talking"
  ],
  "definitions": [
   "Vigilant and ongoing audiologic management",
   "all-day, everyday interactions with the \nchild"
  ]
 },
 "ARL5-44": {
  "source": "44\nSpeech Perception and Comprehension: \nListening Hierarchies\nSpeech perception implies understanding and comprehension\nReception is the fir st step\nIn it’s most basic form, the perception of speech may be thought of as involving \na number of important components:\nDetection\nDiscrimination\nIdentific ation\nComprehension\n",
  "terms": [
   "Reception"
  ],
  "definitions": [
   "fir st step"
  ]
 },
 "ARL7-3": {
  "source": "Terminology\n Lipreading:  Using only the visual speech signal and \nrelated facial and body gestures to recognize \nspeech.\n Speechreading: Using the visual speech signal and \nthe auditory signal and related facial and body \ngestures to recognize speech.\n Some people use these terms interchangeably.\n3\n",
  "terms": [
   "Lipreading",
   "Speechreading"
  ],
  "definitions": [
   "Using only the visual speech signal and \nrelated facial and body gestures",
   "Using the visual speech signal and \nthe auditory signal and related facial and body \ngestures"
  ]
 },
 "ARL7-4": {
  "source": "Speechreading for \ncommunication\n People with perfectly normal \nhearing often rely on \nspeechreading (i.e. watching a \ntalker’s face while also listening).\n When someone attempts to \nrecognize speech through visual \nsignals, it activates the auditory \ncortex.\n Sensitivity to the visual speech \nsignal emerges at a very early age.\n",
  "terms": [
   "Speechreading"
  ],
  "definitions": [
   "watching a \ntalker’s face while also listening"
  ]
 },
 "ARL7-5": {
  "source": "Predicting who will be a good \nlipreader\n◦Variables that DO NOT have \npredictive power:\n◦Intelligence\n◦Educational achievement\n◦Presence of/duration of acquired \nhearing loss\n◦Age at hearing loss\n◦Gender\n◦Socioeconomic status\n◦Variables that DO have predictive \npower:\n◦Cognitive skills\n◦Age\n◦Type of hearing loss (congenital vs \nacquired)\n",
  "terms": [
   "Variables that DO have predictive \npower",
   "Variables that DO NOT have \npredictive power"
  ],
  "definitions": [
   "Cognitive skills",
   "Intelligence"
  ]
 },
 "ARL7-6": {
  "source": "The difficulty of the lipreading \ntask\n Factors that increase \ndifficulty include:\n◦Visibility of sounds\n◦Rapidity of speech\n◦Coarticulation and stress \neffects\n◦Visemes and homophenes\n◦Talker effects\n",
  "terms": [
   "Factors that increase \ndifficulty"
  ],
  "definitions": [
   "Visibility of sounds",
   "Rapidity of speech",
   "Visemes and homophenes"
  ]
 },
 "ARL7-7": {
  "source": "Visibility of Sounds\nMost visible phonemes are made at the front of the \nmouth with maximum lip, jaw, and tongue movements\nIdeal conditions 30% of speech is visible, with unusual \nconditions, 10-25% is visible\nSome phonemes more visible than others\n◦Consonants with lip closure\n◦Consonants with tongue to front of mouth\nVowels not considered visible (beak/book, bit/bought, \nboot/bet)\nCannot see voiced vs voiceless\n",
  "terms": [
   "Most visible phonemes"
  ],
  "definitions": [
   "made at the front of the \nmouth with maximum lip, jaw, and tongue movements"
  ]
 },
 "ARL7-8": {
  "source": "Rapidity of Speech\nAverage 150 to 250 words per minute\nSpeaking rate varies according to:\nEmotion\nSocial etiquette\nFatigue\nArticulation style\n",
  "terms": [
   "Rapidity of Speech"
  ],
  "definitions": [
   "Average 150 to 250 words per minute"
  ]
 },
 "ARL7-9": {
  "source": "Coarticulation and Stress \nEffects\nCoarticulation\n◦Same phoneme may look different \n◦Influenced by vowel following consonant\nSame word looks different depending on \nspeaker’s stress\n◦“What did ya do yesterday?” vs “What did   \nYOU do yesterday?”\n",
  "terms": [
   "Coarticulation",
   "Stress"
  ],
  "definitions": [
   "Same phoneme may look different",
   "Same word looks different depending on \nspeaker’s stress"
  ]
 },
 "ARL7-10": {
  "source": "Visemes and Homophenes\n◦Visemes are groups of sounds that appear similar \non the face \n◦ /b, m, p/\n◦/k, g/\n◦/n,d,t,s,z/\n◦Homophene: Any of a set of words that sound \ndifferent, but look identical on a person's lips, so \nthat they cannot be distinguished by lipreading.\n◦(i.e. rise/rice, perch/merge, bind/mite, \ndown/stout).\n",
  "terms": [
   "Visemes",
   "Homophene"
  ],
  "definitions": [
   "groups of sounds that appear similar \non the face",
   "words that sound \ndifferent, but look identical on a person's lips"
  ],
  "checkpoints": [
   {
    "phrase": "Visemes are groups of sounds that appear similar \non the face",
    "label": "Compare sound and word groups"
   }
  ]
 },
 "ARL7-11": {
  "source": "Talker effects\nThe same sound can often look different \nwhen spoken by two or more different \npeople.\nFor example, the degree of mouth \nopening, or a person’s accent can alter the \nlook of sounds from person to person.\n",
  "terms": [
   "Talker effects"
  ],
  "definitions": [
   "The same sound can often look different \nwhen spoken by two or more different \npeople."
  ]
 },
 "ARL7-12": {
  "source": "Factors Affecting Speechreading \nPerformance\nHow well a person can speech read is affected by at \nleast four factors:\n◦Speaker\n◦Signal/Code\n◦Environment\n◦The Speech reader\nFigure 5.1\n12\n",
  "terms": [
   "four factors"
  ],
  "definitions": [
   "Speaker",
   "Signal/Code",
   "Environment",
   "The Speech reader"
  ]
 },
 "ARL7-13": {
  "source": "Speaker \nShould avoid shouting, mumbling, rapid \nspeech, and turning away\nEasier to understand:\n◦Clear, unexaggerated, slow speech (clear \nspeech)\n◦Familiar people\n◦Native speakers\n◦Facial expressions and hand gestures\n",
  "terms": [
   "Speaker"
  ],
  "definitions": [
   "Should avoid shouting, mumbling, rapid \nspeech, and turning away"
  ]
 },
 "ARL7-14": {
  "source": "Speaker’s use of Clear Speech\nA way of speaking to \nenhance one’s \nintelligibility; it entails \nspeaking with a slowed \nrate and good but not \nexaggerated enunciation \nof words\n◦“D’yeet yet?” for “Did you eat \nyet?”\n◦“Go’n fishin’ ‘morrow \naf’ernoon” for “I’m going fishing \ntomorrow afternoon.”\nExamples\n◦An elementary school \nteacher\n◦A newscaster\n◦An airport employee who \nannounces airline arrivals \nand departures\n◦A public radio broadcaster\n◦A politician\n◦Queen Elizabeth\n",
  "terms": [
   "Clear Speech"
  ],
  "definitions": [
   "speaking with a slowed \nrate and good but not \nexaggerated enunciation \nof words"
  ],
  "checkpoints": [
   {
    "phrase": "speaking with a slowed \nrate and good but not \nexaggerated enunciation \nof words",
    "label": "Keep articulation natural"
   }
  ]
 },
 "ARL7-15": {
  "source": "Signal/code \nStructure of the message impacts speechreading. Easier to \nunderstand:\nFrequently used words\nHigh frequency:  words that occur frequently in everyday \nconversation (jersey)\nLow frequency: words that occur infrequently in everyday \nconversation (cardigan)\nWords with few lexical neighbors\n“bat” may be difficult to recognize, even though it begins \nwith a highly visible mouth movement because many \nwords look like it (e.g., bad, bet, mat, met, pat) and sound \nlike it (e.g., cap, cat, scat, bad)\nA word like “telephone” or “elephant” is easy because few \nlook and sound like it\nKnown linguistic context\nCandace will buy the _____\nCandace will set the _____ and chairs in the kitchen\nTarget word = table\nKnown topic of message (e.g., “my summer vacation”)\n",
  "terms": [
   "High frequency",
   "Low frequency"
  ],
  "definitions": [
   "words that occur frequently in everyday \nconversation",
   "words that occur infrequently in everyday \nconversation"
  ]
 },
 "ARL7-16": {
  "source": "Environmental Characteristics\n Presence of background noise or \nreverberation impacts speechreading\n Speechreading is affected by the talker’s:\n◦Angle\n◦0 degrees azimuth=optimal\n◦Distance\n◦2-5 feet optimal\n◦Shadows on face cast by lighting\n16\n",
  "terms": [
   "Angle",
   "Distance"
  ],
  "definitions": [
   "0 degrees azimuth=optimal",
   "2-5 feet optimal"
  ]
 },
 "ARL7-17": {
  "source": "Speech reader\nSpeechreading is impacted by the speech reader's:\n◦Use of residual hearing\n◦Even limited hearing ability can assist in speech recognition when \ncombined with visual cues.\n◦The importance of combining even some sound with visual cues \nshows why people with profound hearing loss are so dependent on \nhearing aids.\n◦Age and language skills\n◦Intelligence\n◦Degree and type of hearing loss\n◦Visual acuity\n◦Attention\n◦Attitude\n",
  "terms": [
   "residual hearing"
  ],
  "definitions": [
   "Even limited hearing ability can assist in speech recognition when \ncombined with visual cues."
  ]
 },
 "ARL7-18": {
  "source": "Assessment of Speechreading\n Standardized tests do exist\n Table 5.3\n Not used much at all\nWhy?\nProblems with test validity\nProblems with test difficulty\nProblems with test, re-test reliability\n18\n",
  "terms": [
   "Assessment of Speechreading"
  ],
  "definitions": [
   "Problems with test validity",
   "Problems with test, re-test reliability"
  ]
 },
 "ARL7-19": {
  "source": "Audiovisual Integration\nSpeechreading is best used as a \nsupplement to auditory information\nWhen both residual hearing and \nspeechreading are available, the \nlistener does much better on a \ncommunicative task (Fig 5-2)\n19\n",
  "terms": [
   "Audiovisual Integration"
  ],
  "definitions": [
   "supplement to auditory information"
  ]
 },
 "ARL7-20": {
  "source": "Speechreading\nTraining \n Both Analytic and Synthetic\n◦Table 5.4\n◦Analytic: Before an entire word, sentence or \nphrase can be identified, it is necessary  to \nperceive visually each if its basic parts\n◦Synthetic: Perception of the whole is paramount \nregardless of which parts are perceived visually \n20\n",
  "terms": [
   "Analytic",
   "Synthetic"
  ],
  "definitions": [
   "perceive visually each if its basic parts",
   "Perception of the whole is paramount"
  ]
 },
 "ARL7-21": {
  "source": "Speechreading Goal\nUnderlying goal is to build the child’s knowledge base \nconcerning the speechreading process, and have the \nchild develop appreciation of the benefits that \nspeechreading provides.\nStimuli should be client oriented\n◦Real life situations\nActivities must be interesting and give the child \nopportunities to experience frequent success \n21\n",
  "terms": [
   "Speechreading Goal"
  ],
  "definitions": [
   "build the child’s knowledge base \nconcerning the speechreading process"
  ]
 },
 "ARL7-22": {
  "source": "Tips and tricks\nWatch the mouth\nPay attention to facial \nexpression\nPay attention to gesture, \nposture, and movement\nKnow the topic\nAttend to situational cues\nKeep informed\nControl anxiety and stress\nUse your hearing\nTry to ensure room is well-lit\nMinimize background noise\nKeep a positive attitude\n",
  "terms": [
   "Tips and tricks"
  ],
  "definitions": [
   "Watch the mouth",
   "Know the topic",
   "Minimize background noise"
  ]
 },
 "ARL7-23": {
  "source": "Summary Remarks about \nSpeechreading..\nCan speechreading skills be developed significantly \nthrough training?\nThe jury is still out\nWhen improvements occur, they tend to be \nmodest\nSometimes we can’t objectively demonstrate \nimprovement, but the client feels their skills are \nbetter\nNot much data available concerning children\n23\n",
  "terms": [
   "improvements"
  ],
  "definitions": [
   "tend to be \nmodest"
  ]
 },
 "ARL7-24": {
  "source": "Final Remarks\nRarely is speechreading \ntraining provided without \nadditional aural \nrehabilitation efforts.\nHow patients combine the \nauditory and visual speech \nsignals is a topic of great \nresearch.\nFindings will go a long way \nin the designing of more \neffective speechreading \ntraining protocols.\n",
  "terms": [
   "speechreading \ntraining"
  ],
  "definitions": [
   "additional aural \nrehabilitation efforts"
  ]
 },
 "ARL7-26": {
  "source": "Manual Communication\n Types:\n◦Finger spelling\n◦ASL\n◦Manually Coded English\n◦Signed English\n◦Seeing Essential English (SEE II)\n◦Cued Speech\n26\n",
  "terms": [
   "Manual Communication"
  ],
  "definitions": [
   "Finger spelling",
   "Manually Coded English"
  ]
 },
 "ARL7-27": {
  "source": "Manually Coded English\n◦Signed English\nEvery word has a sign and then there are signs \n“markers” that reflect changes in verb form (past, \npresent, future), number, possession, etc.  In most \ncases then, you sign and word and add a marker at \nthe end.  Do “cook” and “cooks” and “cooked” and \n“cooking”.\n◦Seeing Essential English II (SEE II) \nMost current version of Signed English\n27\n",
  "terms": [
   "markers"
  ],
  "definitions": [
   "reflect changes in verb form (past, \npresent, future), number, possession"
  ]
 },
 "ARL7-28": {
  "source": "American Sign\n Language (ASL)\nAn independent language\nThe only recognized language of the Deaf culture\nUnique vocabulary and syntax\nAspects of prosody: facial expressions, head tilts,     \nbody movement, eye gazes\nSigns possess 4 identifying physical characteristics:\n-hand configuration, movement, location, \norientation\n28\n",
  "terms": [
   "American Sign\n Language (ASL)",
   "prosody",
   "4 identifying physical characteristics"
  ],
  "definitions": [
   "An independent language",
   "facial expressions, head tilts,     \nbody movement, eye gazes",
   "hand configuration, movement, location, \norientation"
  ],
  "checkpoints": [
   {
    "phrase": "American Sign\n Language (ASL)\nAn independent language",
    "label": "Keep language and coding distinct"
   }
  ]
 },
 "ARL7-29": {
  "source": "Cued Speech\nDeveloped as a speechreading supplement to \nspoken English\nProvides visual cues for English phonemes \nnot visible on the lips\n29\n",
  "terms": [
   "Cued Speech"
  ],
  "definitions": [
   "speechreading supplement to \nspoken English"
  ],
  "checkpoints": [
   {
    "phrase": "Cued Speech\nDeveloped as a speechreading supplement to \nspoken English",
    "label": "Identify the support"
   }
  ]
 },
 "ARL6-2": {
  "source": "\n\nAuditory training\n2\nAuditory training (AT) is a process of teaching the child with HL to take full advantage of available auditory cues. \nAT uses everyday activities to foster the development of listening skills.\nListening is a learned behavior and can be improved with practice!\nThe better a child’s parents/care providers understand her listening abilities, the more natural and spontaneous activities can become.\n\nSpeaker notes (include original notes and source-attributed fill additions; not an official key):\nAuditory training is most often used with children who are pre- and perilingually deaf.",
  "terms": [
   "Auditory training (AT)",
   "listening"
  ],
  "definitions": [
   "process of teaching the child with HL to take full advantage of available auditory cues",
   "a learned behavior and can be improved with practice"
  ]
 },
 "ARL6-3": {
  "source": "\n\nAuditory training cont.\n3\nUtilizes residual hearing\nEmphasizing that the primary goal is training the mind to be aware of, attend to, and use sound. \nTo help integrate listening into one’s development of communication and social skills\nKey component of AR for CI recipients, those with prelingual HL, and those with severe to profound losses\n",
  "terms": [
   "primary goal"
  ],
  "definitions": [
   "training the mind to be aware of, attend to, and use sound"
  ]
 },
 "ARL6-4": {
  "source": "\n\nLearning to Listen\n4\nA child must learn to listen using their amplification devices (hearing aids, cochlear implants). \nMerely providing hearing instruments does not mean the sounds will automatically be perceived or interpreted by the child.\nBy learning to detect and interpret the sounds, the child's capacity for spoken language is maximized.\n",
  "terms": [
   "Learning to Listen"
  ],
  "definitions": [
   "learn to listen using their amplification devices"
  ]
 },
 "ARL6-5": {
  "source": "Early-intervention program\nIdeally begins as soon as the permanent hearing loss is confirmed.\nFamilies may receive a list of all of the available programs in the geographic area and/or be referred to a nation-wide early-intervention system\nTypes of Programs\nCenter-Based Program: children attend weekly therapy for a set number of hours\nHome-Based Program: early-intervention specialist visits the infant’s home and provides instruction to the parents and child\n\n\n5",
  "terms": [
   "Center-Based Program",
   "Home-Based Program"
  ],
  "definitions": [
   "children attend weekly therapy for a set number of hours",
   "early-intervention specialist visits the infant’s home and provides instruction to the parents and child"
  ]
 },
 "ARL6-6": {
  "source": "Assessment of Auditory skills\nDetermine if training is warranted\nProvide a basis for post-therapy assessment\nIdentify specific areas of auditory training to concentrate on. \n\n6",
  "terms": [
   "Assessment of Auditory skills"
  ],
  "definitions": [
   "Determine if training is warranted",
   "Provide a basis for post-therapy assessment",
   "Identify specific areas of auditory training to concentrate on."
  ]
 },
 "ARL6-7": {
  "source": "Nature of testing depends on:\nAge of child\nHis or her Language skills \nType and degree of hearing loss\n7",
  "terms": [
   "Nature of testing"
  ],
  "definitions": [
   "Age of child",
   "His or her Language skills",
   "Type and degree of hearing loss"
  ]
 },
 "ARL6-8": {
  "source": "Assessing young children\nBoth amount and difficulty of testing appropriate for young children are limited by their physical and cognitive development\nInformal testing and observations are relied on heavily for this age group\nInitial goal for auditory training of infant may not center on speech perception. Rather the focus is on if hearing is working appropriately as well as identifying if auditory skills have emerged (gross discrimination and localization of a variety of stimuli)\nParent questionnaires (ex IT-MAIS, PEACH, FAPI) help provide framework for how hearing technology is working and whether programming changes are needed \n8",
  "terms": [
   "Assessing young children"
  ],
  "definitions": [
   "Informal testing and observations are relied on heavily for this age group"
  ]
 },
 "ARL6-9": {
  "source": "FAPI\u000bDocument on Moodle\u000b\nThe Functional Auditory Performance Indicators (FÁPI) assesses the functional auditory skills of children with hearing loss. It can be used by parents, therapists, early interventionists, and teachers. The profile lists auditory skills in an integrated hierarchical order in 7 categories.\n\n9",
  "terms": [
   "Functional Auditory Performance Indicators (FÁPI)",
   "profile"
  ],
  "definitions": [
   "assesses the functional auditory skills of children with hearing loss",
   "integrated hierarchical order in 7 categories"
  ]
 },
 "ARL6-10": {
  "source": "Formal assessments for children:\n*WIPI\n*NU-CHIPS\nLing 10 Sound Test\nEarly Speech Perception Test (ESP)\nGlendonald Auditory Screen Procedure (GASP)\nDevelopmental Approach to Successful Listening (DASL)\n\n*Additional word recognition assessment information available on MOODLE\n10",
  "terms": [
   "ESP",
   "GASP",
   "DASL"
  ],
  "definitions": [
   "Early Speech Perception Test",
   "Glendonald Auditory Screen Procedure",
   "Developmental Approach to Successful Listening"
  ]
 },
 "ARL6-11": {
  "source": "WIPI\nWord Intelligibility by Picture Identification\nIncludes only vocabulary appropriate for children with hearing loss\n4 lists, 25 monosyllabic words each\nChild provides picture pointing response in a closed set format\nSuitable for use with children with hearing loss and limited receptive and expressive language abilities\n\n11",
  "terms": [
   "WIPI",
   "Child"
  ],
  "definitions": [
   "Word Intelligibility by Picture Identification",
   "picture pointing response in a closed set format"
  ]
 },
 "ARL6-12": {
  "source": "Nu-CHIPS\nNorthwestern University Children’s Perception of Speech\n50 monosyllabic nouns scrambled to form four individual tests\nResponse format requires child to point to the one picture from several options that best represent the test item\nBasic vocabulary; nonverbal response format\n\n\n12",
  "terms": [
   "Nu-CHIPS",
   "Response format"
  ],
  "definitions": [
   "Northwestern University Children’s Perception of Speech",
   "point to the one picture from several options that best represent the test item"
  ]
 },
 "ARL6-15": {
  "source": "ESP: Early speech perception test\nAssess pattern and word perception using a closed-set format\nResults allow for placement into 4 speech perception categories:\nNo pattern perception\nPattern perception\nSome word identification\nConsistent word identification\n15",
  "terms": [
   "ESP"
  ],
  "definitions": [
   "Assess pattern and word perception using a closed-set format"
  ]
 },
 "ARL6-16": {
  "source": "Gasp – Glendonald auditory screen procedure\nBased on Erber’s model\n3 subtests of speech perception:\nPhoneme detection\nWord identification\nSentence comprehension\n\nResults from GASP can aid in planning auditory training because the child’s performance on the subtests is predictive of other related auditory tasks\n\n16",
  "terms": [
   "Gasp",
   "3 subtests of speech perception"
  ],
  "definitions": [
   "Glendonald auditory screen procedure",
   "Phoneme detection",
   "Word identification",
   "Sentence comprehension"
  ]
 },
 "ARL6-17": {
  "source": "DASL II: Developmental Approach to Successful Listening\nComprehensive test of auditory skills that evaluates:\nSound awareness\nPhonetic listening\nAuditory comprehension\nAges 3 and up\nSome normative information available for children with varying degrees of hearing loss\n\n17",
  "terms": [
   "DASL II",
   "auditory skills"
  ],
  "definitions": [
   "Developmental Approach to Successful Listening",
   "Sound awareness",
   "Phonetic listening",
   "Auditory comprehension"
  ]
 },
 "ARL6-50": {
  "source": "DASL II\nDevelopmental Approach to Successful Listening II​\n\nConsists of hierarchy of listening skills worked on in brief, individualized sessions​\n\nMain use is with preschool and school age using hearing aids/cochlear implants​\n\nEmphasizes 3 areas of auditory skill development: Sound Awareness, Phonetic Listening and Auditory comprehension​\n\n50",
  "terms": [
   "DASL II",
   "hierarchy of listening skills"
  ],
  "definitions": [
   "Developmental Approach to Successful Listening II",
   "brief, individualized sessions"
  ]
 },
 "ARL6-13": {
  "source": "Ling 10 Sounds\n\n\nA behavioral listening check \nThe sounds indicate a child’s ability to detect all aspects of speech as they encompass the frequency range of all phonemes.\nThis check can be used to determine what sounds the student is able to detect, discriminate, and identify\n\n13",
  "terms": [
   "Ling 10 Sounds",
   "This check"
  ],
  "definitions": [
   "A behavioral listening check",
   "detect, discriminate, and identify"
  ]
 },
 "ARL6-14": {
  "source": "Ling 10 continued\nShould begin sitting next to the child, move to 3 feet then to 6 feet.\nBy including the absence of a sound it teaches the child to indicate when they don’t hear anything.\nA child with normal hearing can hear all of these sounds at twenty feet.\nRemember to present these in varying order.\n\n14",
  "terms": [
   "absence of a sound"
  ],
  "definitions": [
   "teaches the child to indicate when they don’t hear anything"
  ]
 },
 "ARL6-19": {
  "source": "Basic Stages of Auditory Development \u000bHierarchy of Listening Skills/Levels of Perception Model (Erber)\nComprehension\n\nIdentification\n\nDiscrimination\n\nDetection\n\n\n",
  "terms": [
   "Hierarchy of Listening Skills/Levels of Perception Model (Erber)"
  ],
  "definitions": [
   "Comprehension",
   "Identification",
   "Discrimination",
   "Detection"
  ]
 },
 "ARL6-20": {
  "source": "Detection of sounds (Sound Awareness)\nAbility to determine the presence or absence of sound (audition-only).\n“Sound Conditioning”\n\nTaken from: Sandie Bass-Ringdahl, University of Iowa\n20\n\nSpeaker notes (include original notes and source-attributed fill additions; not an official key):\nindicates when an ongoing environmental sound stops (e.g., music)\nindicates when a continuous speech syllable stops (e.g., sustained /ba/).\nTo develop sound awareness, a conditioned response is needed.\nConditioned response.  Child listens and responds in a defined way each time he/she hears a sound.\nTo establish a conditioned response:  \nsignal “listen”\npause and establish eye contact\ncover mouth, be careful not to muffle the sound\npause (vary length to avoid over anticipation)\nprovide the sound\nexpect child to respond (may have to guide the child at first)\nYou may choose to use a listening hoop to avoid muffling the sound during listening activities.  A listening hoop is an embroidery hoop covered with two layers of special speaker cloth.\n\n\nDetection means noticing that a sound is present or absent. It does not establish that the child can distinguish sounds or understand speech. Source: Schow & Nerbonne, 8th ed., pp.118-119.",
  "terms": [
   "Detection of sounds",
   "conditioned response"
  ],
  "definitions": [
   "Ability to determine the presence or absence of sound (audition-only).",
   "Child listens and responds in a defined way each time he/she hears a sound."
  ],
  "checkpoints": [
   {
    "phrase": "Ability to determine the presence or absence of sound (audition-only).",
    "label": "Name the response demand"
   }
  ]
 },
 "ARL6-22": {
  "source": "Examples of detection Tasks\nresponds to loud, low frequency environmental sound (e.g., drum)\nresponds to presence of a speech syllable (e.g., /ba/)\nresponds to variety of environmental sounds (e.g., whistle, horn, knock on the table) \nindicates when an ongoing environmental sound stops (e.g., music)\nindicates when a continuous speech syllable stops (e.g., sustained /ba/).\n\n22",
  "terms": [
   "detection Tasks"
  ],
  "definitions": [
   "responds to presence of a speech syllable",
   "indicates when an ongoing environmental sound stops"
  ]
 },
 "ARL6-23": {
  "source": "Detection/Sound awareness activities\nPlay peek-a-boo\nPlay musical chairs\nMarch to the beat of a drum\nPush the toy care whenever the clinician says “Vrrrrm”\n23",
  "terms": [
   "Detection/Sound awareness activities"
  ],
  "definitions": [
   "Push the toy care whenever the clinician says “Vrrrrm”"
  ]
 },
 "ARL6-24": {
  "source": "Example: Detection objective \nDetects strong and/or low-frequency voice 1-3 feet from CI microphone.\nAttends to 3 loud toy or environmental sounds from 4-6 feet from FM microphone.\nDetects 3 moderate intensity environmental sounds (e.g., baby swing music, microwave beep to indicate bottle is ready, running water for a bath).\nTaken from: Parent-Infant Communication\n24",
  "terms": [
   "Detection objective"
  ],
  "definitions": [
   "Detects strong and/or low-frequency voice 1-3 feet from CI microphone."
  ]
 },
 "ARL6-21": {
  "source": "Detection cont.\nTo develop sound awareness, a conditioned response is needed.\nConditioned response.  Child listens and responds in a defined way each time he/she hears a sound.\nTo establish a conditioned response:  \nsignal “listen”\npause and establish eye contact\ncover mouth, be careful not to muffle the sound\npause (vary length to avoid over anticipation)\nprovide the sound\nexpect child to respond (may have to guide the child at first)\n\n\t\t\t\t\t\tTaken from: Sandie Bass-Ringdahl, University of Iowa\n\n\t\t\t\t\t\t\n\n21",
  "terms": [
   "conditioned response"
  ],
  "definitions": [
   "Child listens and responds in a defined way each time he/she hears a sound."
  ]
 },
 "ARL6-25": {
  "source": "Discrimination \nDiscrimination of sounds refers to the ability to perceive similarities and differences between two or more sounds (including speech stimuli). \nCan include suprasegmental and segmental contrasts\u000b (duration / intensity / pitch ) \n\n\nTaken from: Sandie Bass-Ringdahl, University of Iowa\n25",
  "terms": [
   "Discrimination of sounds"
  ],
  "definitions": [
   "ability to perceive similarities and differences between two or more sounds"
  ],
  "checkpoints": [
   {
    "phrase": "ability to perceive similarities and differences between two or more sounds",
    "label": "Name the response demand"
   }
  ]
 },
 "ARL6-26": {
  "source": "Examples of discrimination tasks\nrepeats the correct number of syllables heard\ndiscriminates between loud and soft sounds and durations.\ndiscriminates between repeated syllables using a fast rate versus a slow rate\ndiscriminates between high- and low-pitched sounds (whisper / quiet / loud speech)\ndiscriminates between sound continuously varying from high to low, and low to high pitch\nrepeats vowel sounds\n\n26",
  "terms": [
   "discrimination tasks"
  ],
  "definitions": [
   "discriminates between loud and soft sounds and durations."
  ]
 },
 "ARL6-27": {
  "source": "Discrimination activities\nPlay a game with toy animals (“The cow says ‘moo’; the sheep says\n‘baaa’ ”)\nRespond to commands (“Clap your hands”; “Jump!”)\nPlay a Same or Different game (“car car”; “car star”) using pairs of picture cards where the child has to point to the correct illustration\nRepeat what you hear (“Mamma,” “Papa”)\n27",
  "terms": [
   "Same or Different game"
  ],
  "definitions": [
   "“car car”; “car star”"
  ]
 },
 "ARL6-28": {
  "source": "Example: Discrimination objective \nDiscriminates voice from primary caregiver from other voices (e.g., smiles when mom speaks).\n\nDiscriminates angry voice from happy voice (e.g., baby cries when angry voice speaks and smiles with happy voice).\n\nDiscriminates two vocalizations (e.g., baby imitates mom’s “mm”, but does not vocalize at mom’s “babababa”).\nTaken from: Parent-Infant Communication\n28",
  "terms": [
   "Discrimination objective"
  ],
  "definitions": [
   "Discriminates voice from primary caregiver from other voices"
  ]
 },
 "ARL6-30": {
  "source": "Identification \nAbility to repeat, point to, or write the speech stimulus heard\n\nTaken from: Sandie Bass-Ringdahl, University of Iowa\n30\n\nSpeaker notes (include original notes and source-attributed fill additions; not an official key):\nrepeating, pointing to, or writing the speech stimulus heard.\n\nwords with identical vowels and consonants differing only in manner\nseat vs. cheat\nwords with identical vowels and consonants differing only in voicing\nvan vs. fan\n\nIdentification may be shown by repeating, pointing, or writing; spoken repetition is not the only response. In the slide 31 dog/fog example, /d/ and /f/ differ in place, manner, and voicing. Compare a voiced alveolar stop with a voiceless labiodental fricative. Sources: original slide 30 notes; slide 29; textbook p.116, Table 4-3.",
  "terms": [
   "Identification"
  ],
  "definitions": [
   "Ability to repeat, point to, or write the speech stimulus heard"
  ],
  "checkpoints": [
   {
    "phrase": "Ability to repeat, point to, or write the speech stimulus heard",
    "label": "Name the response demand"
   }
  ]
 },
 "ARL6-31": {
  "source": "Examples of Identification Tasks\nwords varying in number of syllables\nhat vs. ice cream cone\none syllable words varying in vowels and consonants.\nbat vs. fish\nstereotypic messages (familiar expressions and directions)\nwords with identical consonants and different vowels\nbook vs. bear\nwords with identical vowels and consonants differing in place, manner, and/or voicing\ndog vs. fog\n31",
  "terms": [
   "number of syllables",
   "place, manner, and/or voicing"
  ],
  "definitions": [
   "hat vs. ice cream cone",
   "dog vs. fog"
  ]
 },
 "ARL6-32": {
  "source": "Example: Identification objective \nRecognizes an adult-produced animal sound and associates sound with toy animal.\n\nIdentifies 3 loud instrument sounds: drum, guitar, and bells.\n\nRecognizes 10 words that label common objects (e.g. bottle, diaper, ball).\nTaken from: Parent-Infant Communication\n32",
  "terms": [
   "Identification objective"
  ],
  "definitions": [
   "Recognizes an adult-produced animal sound and associates sound with toy animal."
  ]
 },
 "ARL6-33": {
  "source": "Identification\nPlay the game Candy Land and listen for the names of the colors\nPlay with sets of postcards or stickers (“Show me the cat”)\nPlay Go Fish with cards (“Give me your sevens”; “Give me your twos”)\n33",
  "terms": [
   "Identification"
  ],
  "definitions": [
   "listen for the names of the colors"
  ]
 },
 "ARL6-34": {
  "source": "Comprehension \nComprehension of sounds refers to the ability to understand the meaning of speech by answering questions, following directions, or participating in a conversation.  \nThe child’s response must be qualitatively different than the stimuli presented!\nThis level requires that the person have a certain degree of syntactic and semantic language development\n\nTaken from: Sandie Bass-Ringdahl, University of Iowa\n34\n\nSpeaker notes (include original notes and source-attributed fill additions; not an official key):\nAuditory sequencing\nfamiliar expressions\nfollow single directions\nfollow classroom directions\nfollow multi-element directions\nStructured listening set\nrecall details of a story\nunderstand the main idea of a lesson or complex story\nConversation\nanswer questions requiring comprehension of the main idea\nparaphrase remarks of another\noffer spontaneous relevant remarks\n\nComprehension requires understanding the message. Following a direction or answering a question shows something different from merely repeating the words. Sources: slides 34-36 and existing notes; textbook p.119.",
  "terms": [
   "Comprehension of sounds"
  ],
  "definitions": [
   "ability to understand the meaning of speech by answering questions, following directions, or participating in a conversation."
  ],
  "checkpoints": [
   {
    "phrase": "ability to understand the meaning of speech by answering questions, following directions, or participating in a conversation.",
    "label": "Name the response demand"
   }
  ]
 },
 "ARL6-35": {
  "source": "Examples of Comprehension Tasks \nAuditory sequencing\nfamiliar expressions\nfollow single directions\nfollow classroom directions\nfollow multi-element directions\nStructured listening set\nrecall details of a story\nunderstand the main idea of a lesson or complex story\nConversation\nanswer questions requiring comprehension of the main idea\nparaphrase remarks of another\noffer spontaneous relevant remarks\n\n\n\t\t\t\t\t\tTaken from: Sandie Bass-Ringdahl, University of Iowa\n\n\n35",
  "terms": [
   "Auditory sequencing",
   "Structured listening set",
   "Conversation"
  ],
  "definitions": [
   "follow multi-element directions",
   "understand the main idea of a lesson or complex story",
   "paraphrase remarks of another"
  ]
 },
 "ARL6-36": {
  "source": "Example: Comprehension objective \nDemonstrates comprehension of 2 phrases through audition alone (e.g., Do you want up?).\nComprehends increasingly complex requests (e.g., bring me your socks and shoes).\nComprehends and responds appropriately to sentences in which possessive nouns or pronouns are contrasted (e.g., Where are you eyes? vs. Where are mommy’s eyes?).\nComprehends the meaning of 3, loud environmental sounds (e.g., smoke alarm, doorbell, car horn).\nTaken from: Parent-Infant Communication\n36",
  "terms": [
   "Comprehension objective"
  ],
  "definitions": [
   "Comprehends increasingly complex requests"
  ]
 },
 "ARL6-38": {
  "source": "Auditory training approaches in 4 categories:\nAnalytic\nSynthetic\nPragmatic\nEclectic",
  "terms": [
   "Auditory training approaches"
  ],
  "definitions": [
   "Analytic",
   "Synthetic",
   "Pragmatic",
   "Eclectic"
  ]
 },
 "ARL6-39": {
  "source": "Analytic Auditory Approach\nBreak speech into smaller components\n(same - different) Bottom-up approach\nVowels vs consonants\n",
  "terms": [
   "Analytic Auditory Approach"
  ],
  "definitions": [
   "Break speech into smaller components",
   "Bottom-up approach"
  ]
 },
 "ARL6-40": {
  "source": "Analytic Therapy Objectives\nWill discriminate vowels that differ in first formant information Will discriminate vowels that differ in second formant information\nWill discriminate words that have vowels with similar first and second formant information \nWill identify words with different vowels, using a four-item response set \nWill identify words with different vowels, from an open set of vocabulary",
  "terms": [
   "Analytic Therapy Objectives"
  ],
  "definitions": [
   "Will identify words with different vowels, using a four-item response set"
  ]
 },
 "ARL6-41": {
  "source": "synthetic\nEmphasizes use of clues derived from syntax and context\nUse of meaningful stimuli\n(Sentence perception) Top-down approach\n",
  "terms": [
   "synthetic"
  ],
  "definitions": [
   "Emphasizes use of clues derived from syntax and context",
   "Top-down approach"
  ]
 },
 "ARL6-42": {
  "source": "Synthetic Therapy Objectives\nWill discriminate between a declarative and interrogative sentence\nWill carry on a conversation\nCan follow the instructions of simple commands ",
  "terms": [
   "Synthetic Therapy Objectives"
  ],
  "definitions": [
   "Will carry on a conversation"
  ]
 },
 "ARL6-43": {
  "source": "Pragmatic\nTraining listener to control communication variables\nLevel of speech\nSignal-to-noise ratio (SNR)\nContext or complexity of message\nTable 4.8 QUEST?AR",
  "terms": [
   "Pragmatic"
  ],
  "definitions": [
   "Training listener to control communication variables"
  ]
 },
 "ARL6-44": {
  "source": "Eclectic:\nCombines most or all of the strategies ",
  "terms": [
   "Eclectic"
  ],
  "definitions": [
   "Combines most or all of the strategies"
  ]
 },
 "ARL6-54": {
  "source": "Auditory Training Programs\nChoose the AT program that best meets the child’s and the family’s needs.\nAll of the programs are structured using the same basic principles—the hierarchy of listening skills- Erber’s levels of perception \n54\n\nSpeaker notes (include original notes and source-attributed fill additions; not an official key):\n\nThe shared listening skills are detection, discrimination, identification, and comprehension. Erber also supports integrating auditory work into conversation and daily activities rather than treating the sequence as a rigid schedule. Source: textbook p.134; slide 19.",
  "terms": [
   "AT program"
  ],
  "definitions": [
   "best meets the child’s and the family’s needs"
  ]
 },
 "ARL6-37": {
  "source": "Illustrative formal auditory training lesson plan\nTitle: Snake and Ice Cream Game\nGoal: Discrimination\nObjective: The student will discriminate a nasal consonant versus non-nasal unvoiced consonant that differs in place of production.\nMaterials:\na picture of a snake to represent the /s/ sound\na picture of a boy about to eat an ice cream sundae to represent the /m/ sound\na stack of 26 pennies for reinforcements\nProcedures:\n\nIntroduce the picture of the snake by pointing to it and saying “ssssssssss . . .” Ask the child to imitate your production. Similarly, introduce the picture of the sundae, and say “mmmmmm . . .” Ask the child to imitate your production.\n\nSay each sound with your face visible. After each utterance, ask the child to point to the corresponding picture.\n\nPlace 13 pennies on each picture. Cover your mouth. Randomly say one sound after another. After each production, the child may pick up a penny from one of the two pictures. If the child removes a penny from the correct picture, he or she can keep it. If incorrect, the penny must be placed back on the picture.\n\nContinue until all pennies are spent.\n\n37",
  "terms": [
   "Title",
   "Materials"
  ],
  "definitions": [
   "Snake and Ice Cream Game",
   "a picture of a snake to represent the /s/ sound"
  ]
 },
 "ARL6-45": {
  "source": "Goals of Auditory Training\nThere are many factors that can be manipulated to make a task easier or harder\n\nRegardless, the goal is always to make the listening task challenging without being frustrating.\n\nThe most useful learning events are those that take place in a meaningful context for that child specifically.\n45\n\nSpeaker notes (include original notes and source-attributed fill additions; not an official key):\n\nAdjust set size, stimulus length/similarity, context, structure, and listening conditions to keep practice challenging but manageable. Use the child’s baseline and specify response, cuing, and success criteria. Sources: slides 46-48; Writing Goals handout.",
  "terms": [
   "goal"
  ],
  "definitions": [
   "make the listening task challenging without being frustrating"
  ],
  "checkpoints": [
   {
    "phrase": "make the listening task challenging without being frustrating",
    "label": "Set the difficulty"
   }
  ]
 },
 "ARL6-46": {
  "source": "Four Design Principles\nAuditory Skill\nAwareness, detection\nDiscrimination\nIdentification\nComprehension\nStimuli\nPhonetic level\nSentence level\nActivity Type\nFormal\nInformal\nDifficulty Level\nResponse type\nClosed, limited, open\nStimulus unit\nWords, phrases, sentences\nStimulus similarity\nContextual support\nTask structure\nHighly structured, spontaneous\nListening conditions",
  "terms": [
   "Stimuli",
   "Activity Type",
   "Response type"
  ],
  "definitions": [
   "Phonetic level",
   "Sentence level",
   "Formal",
   "Informal",
   "Closed, limited, open"
  ]
 },
 "ARL6-47": {
  "source": "3.  Activity Type\nInformal\nOccurs as part of the daily routine\nOften incorporated into other activities\nFormal\nHighly structured\nUsually one-on-one training",
  "terms": [
   "Informal",
   "Formal"
  ],
  "definitions": [
   "Occurs as part of the daily routine",
   "Highly structured"
  ]
 },
 "ARL6-48": {
  "source": "Difficulty Level\nStimulus set---------------\nStimulus unit-------------\nStimulus similarity------\nContextual support----\nTask structure-----------\nListening conditions (SNR)\n48\nclosed         limited              open\nphoneme syllable word sentence\ndissimilar                        similar\nhigh                                    low\ngood                                poor\neasy                                    hard\nstructured               spontaneous",
  "terms": [
   "Stimulus set",
   "Stimulus unit",
   "Stimulus similarity",
   "Contextual support",
   "Task structure"
  ],
  "definitions": [
   "closed         limited              open",
   "phoneme syllable word sentence",
   "dissimilar                        similar",
   "high                                    low",
   "structured               spontaneous"
  ]
 },
 "ARL6-49": {
  "source": "Formal Auditory training programs\nThere are a number of formal, commercially available auditory training programs available for use.\nSPICE (Speech Perception Instructional Curriculum Evaluation)\nLearn To Talk Around The Clock\nCottage Acquisition Scales For Listening, Language, and Speech\nDevelopmental Approach to Successful Listening (DASL)\nSKI-HI\n49\n\nSpeaker notes (include original notes and source-attributed fill additions; not an official key):\nSPICE is a curriculum kit for developing speech/listening skills/processing skills in children who use either cochlear implants or hearing aids. The kit includes a manual, a set of accompanying toys and picture cards, and a demonstration video. The program provides a sequence of lesson objectives and suggests a variety of activities for each objective. The activities are designed for children ages 3 through 12 and can be adapted to a variety of language levels. Goals for the curriculum are listed in four categories: detection, supra-segmental perception, vowels and consonants, and connected speech. \n\nThis oral, early intervention program is designed for professionals who work with families of children who are deaf or hard of hearing.   It focuses on language learning in the child's home environment.   It provides a toolbox for professionals to maximize the caregiver's language development techniques by encouraging interactions during everyday activities.   The premise is that providing opportunities for interaction in everyday life provides the groundwork for auditory and language development.   The curriculum includes a toolbox and VHS cassette. \n\nA product to help assess, select objectives, and plan instruction to document and facilitate language acquisition in children with hearing loss. It is based on many of the language development beliefs of researcher Christie Yoshinaga-Itano (Language assessment of infants and toddlers with significant hearing loss, Seminars in Hearing, 1994) It includes a set of scales (pre-verbal, pre-sentence, simple sentence, complex sentence, sounds and speech) that follow the development of language, listening, cognition, and speech. The assessment component is based on language sampling. It also provides suggestions for using the tool to promote instruction in the addressed areas. ",
  "terms": [
   "SPICE",
   "four categories"
  ],
  "definitions": [
   "Speech Perception Instructional Curriculum Evaluation",
   "detection, supra-segmental perception, vowels and consonants, and connected speech"
  ]
 },
 "ARL6-51": {
  "source": "SPICE\nSpeech Perception Instructional Curriculum and Evaluation ​\n\nUsed for evaluating and developing auditory skills in children with severe to profound hearing loss​\n\nContains goals and objectives associated with 4 levels of speech perception: Detection, Suprasegmental, Vowel and Consonant Perception, and Connected Speech ​\n\n51",
  "terms": [
   "SPICE"
  ],
  "definitions": [
   "Speech Perception Instructional Curriculum and Evaluation"
  ]
 },
 "ARL6-52": {
  "source": "SKI HI\nSensory [Kids] Impaired Home Intervention​\n\nComprehensive identification and home intervention curriculum for infants with hearing loss and their families​\n\nDevelopmentally based auditory stimulation training program​\n\nUsed in conjunction with language-speech stimulation and consists of four phases and eleven general skills​\n\nTable 4.10 ​\n\n52",
  "terms": [
   "SKI HI"
  ],
  "definitions": [
   "Comprehensive identification and home intervention curriculum for infants with hearing loss and their families"
  ]
 },
 "ARL6-53": {
  "source": "Cottage Acquisition Scales For Listening, Language, and Speech\u000b\nAge range: Birth-8 years ​\n\nIntegrated approach to language intervention by providing a single set of instruments for following the development of language, listening, cognition and speech in children with hearing loss. ​\n\nSkills addressed include: Sound Awareness, Phonetic Listening, Suprasegmental Speech Duration, Vowels and Consonants, Vocalization & Phonetic Level Speech, Phonological Level Speech ​\n\n53",
  "terms": [
   "Cottage Acquisition Scales For Listening, Language, and Speech"
  ],
  "definitions": [
   "Integrated approach to language intervention"
  ]
 },
 "ARL6-56": {
  "source": "Resources\nJohn Tracey Clinic\nCentral Institute for the Deaf (creators of the SPICE curriculum)\nBRIDGE Program (Med EL)\nThe Listening Room (Advanced Bionics)\nSound Foundations (Cochlear Americas)\nAG Bell\nThe SKI-HI Institute\n\n56",
  "terms": [
   "Central Institute for the Deaf",
   "BRIDGE Program",
   "The Listening Room",
   "Sound Foundations"
  ],
  "definitions": [
   "creators of the SPICE curriculum",
   "Med EL",
   "Advanced Bionics",
   "Cochlear Americas"
  ]
 },
 "ARGUEST-17": {
  "source": "•\nEar to be implanted:\n❑Severe to profound sensorineural hearing loss defined as: Pure-tone average at .5, 1, 2, 4 kHz >80 dB HL \n❑Aided CNC word score or developmentally appropriate word test ≤ 5%\n•\nContralateral Ear:\n❑Normal or near normal hearing defined as: Pure-tone average at .5, 1, 2, 4 kHz ≤30 dB HL \n•\nIt’s recommended prior to CI surgery that individuals with SSD have at least 2 weeks to 1 month experience \nwearing appropriately fit CROS hearing aid or other suitable hearing device\nContraindications \nA Cochlear Nucleus cochlear implant is not suitable for individuals with the following conditions: \n• Absence of cochlea development \n• Absence of a cochlear nerve \n• Active middle ear infections \n• Tympanic membrane perforation in the presence of active middle ear disease\nFor individuals with single sided deafness the following contraindications are also applicable: \n• Duration of profound sensorineural hearing loss greater than ten years\nUHL/ SSD CI Indication: 5 years and older \n",
  "terms": [
   "Ear to be implanted",
   "Contralateral Ear"
  ],
  "definitions": [
   "Pure-tone average at .5, 1, 2, 4 kHz >80 dB HL",
   "Pure-tone average at .5, 1, 2, 4 kHz ≤30 dB HL"
  ]
 },
 "ARGUEST-19": {
  "source": "Binaural hearing = hearing with two ears\nHearing with two ears can give you better understanding in noise, speech \nrecognition and sound localization.3\n20\nHearing with Two Ears\nBimodal hearing = hearing implant + hearing aid\n• Often effective if you have some hearing in the non implanted \near\n• Cochlear implants work with any compatible hearing aid* to \ngive you the benefits of bimodal hearing\n• Cochlear and ReSound have partnered to offer Smart Bimodal \nHearing that provides the benefit of wirelessly streaming sound \ninto both ears at the same time\nBilateral hearing = two hearing implants \n• The ability to hear sound with both ears gives the effect of dimensional hearing. Hearing sounds in \nboth ears is important to provide your brain with enough stimulation to understand conversations and \ncommunicate effectively.\n* For compatibility information and devices visit: cochlear.com/compatibility and resound.com/compatibility\n",
  "terms": [
   "Binaural hearing",
   "Bimodal hearing",
   "Bilateral hearing"
  ],
  "definitions": [
   "hearing with two ears",
   "hearing implant + hearing aid",
   "two hearing implants"
  ]
 },
 "ARGUEST-47": {
  "source": "48\nTime Between Surgery and Activation\nNucleus 8 Sound \nProcessor \nBehind-the-ear \nSolution\nKanso 3 Sound \nProcessor \nOff-the-ear Solution\nUsually occurs within\nNucleus Sound \nProcessor with \nHybrid Hearing*\n*The Acoustic Component should only be used when behavioral audiometric thresholds can be obtained and the recipient can provide feedback regarding sound quality. \nThe Hybrid L24 Implant is approved in the US for adults 18 and older (unilateral use only.) The Cochlear Nucleus Hybrid acoustic component is not compatible with the \nKanso Sound Processor. The Kanso Sound Processor is not intended to be used by Hybrid L24 Cochlear Implant recipients who receive benefit from the acoustic \ncomponent.\n2-3 weeks\n",
  "terms": [
   "Time Between Surgery and Activation"
  ],
  "definitions": [
   "2-3 weeks"
  ]
 },
 "ART1006": {
  "source": "Kind of updates um i can't believe it but i'm up to data on all grading so all grades have been put in um your exam grade is split into two categories so the scandal is grad separately from the short answer questions so you'll see that it's two different categories on the rules but it's all just a first exam. Anyone that wants to review exams can always come by office hours or for my office hours or um not there are no appointments it's just come and first come first serve if you want an appointment with me just send me an email we can set us at a separate time to meet um Also, we had a guest speaker last week on cobra implants. We don't think about that.\n\nAny feedback? I like to have a manufacturer found there are three different couple of implant manufacturers. I think they really get good valuable information um about some of the kind of upgoing ongoing um you know product that they have you can see the changes um but it is really tailored to that manufacturer so I always follow up with a co-vergment lecture of my own.\n\nAnd so I did pull a couple items that I think are pertinent for the exam for per lecture on demand. So when it comes time to study for your exam We're just going to study the one we're doing today. Okay.\n\nLike I said, I'm pull the things that I think will be for sure and just put everything in mind. Also, um, I would always Remind you all that, you know, I know you all know we have all breaks this week, but that um we don't have class next Tuesday. So if we don't class, that ultimately that won't be there for all the hours next Tuesday, but we'll in class and off salad on Thursday of next week.\n\nOkay. Alright, so what we're going to do today is we're going to I'm going to go through this lecture rather quickly since we've already covered some of this information. And like I'm not going to show the videos because I know you already saw a video last week, but the links are in here.\n\nThen after we are going to get a representative of each of those six groups. to come up and talk about your questionnaires with your class. So go in, take a moment to figure out who's going to come up and talk, take somebody, and then I'll pull up the information on projector.\n\nThe cochlear implants are something that are pretty near and ears in my heart. Um I work on the adult cookware implant team at Embrace on nine years. Um And I think that um it's unfortunate that this information is really not as widespread as you would think.\n\nUm there's still a lot of underserved areas and communities where um access to cochlear plantation and a follow-up care that's needed is not available. So you know as many of you with future speech pathologists you have a huge impact. on you know spreading this information uh to your patients and families.\n\nUm so kind of starting with the basics like what is a cochlear implant you all already kind of know this but it's and it divides surgically implanted device that electrically stimulates the auditory nerve of a patient. So it is not stimulating the hair cells. Remember those hair cells are stimulating so badly in that they really are not um functioning in the cochlea but it's directly stimulated the auditory nerve.\n\nAnd this is something really that's designed for patients with severe profound hearing loss. to provide them access to speech information because we know that if these individuals are wearing hearing aid, they're not getting access to the speech vector. The surgically aid implanted devices bypassing that peripheral auditory system directly simulating the auditory nerve.\n\nIt is not a substitute for normal hearing. It does not replace normal hearing. It's important to understand.\n\ndifferent. And the goal of the implant is to provide useful hearing and improve communication for adults and kids with severe profound losses. Just a little bit of history So the idea of this really started coming into thought in the 1700s. And they were experiments by Count Alessandro Volta.\n\nputting electrodes in the ear. Very scary. Um and then there was a group um that was led by William House of the House Gear Institute.\n\nThat started really studying the possibility of implantation. And in the 70s, they were the ones that created the first wearable cookware implants. This was a that was developed by William House himself at 3M. And it was just a single electrode.\n\nSo think about, you know, we had learned about multi-channel devices that simulate a wider range of the cochlea. But this It started out with just one electrode, so we could just hear the present of the channel. But the multi-elute use of multi -channel electrode, electrode array, came out in the 80s. All right, so we have three cooker implant manufacturers.\n\nUm so these are your main, again, worldwide. I know Cooper Americas is how their corporate offices are in Australia. But they developed the multi-channel Killboard plant in the 80s. Um and got US you know FDA approval in 85.\n\nBen L was another big corporation. Um they created the world's first behind a year speech processor to go with that cochler implant and then advanced bionics create the first cochlear implant that could stimulate multiple areas of the cochlear multi-electrium And Ashton was telling me when she was here last week that there's actually a fourth company that's emerging. This is kind of scary because they've been approved for our co -print.\n\nplant but this company has no history so we don't have any history or past research to really know you know uh much about them but you know I think with the rise of tech We're gonna see more and more of these tech companies coming and say, well, we can do this too. So this is one of the statistics from um Dr. Hay 's presentation. So Why cochlear implants?\n\nWell, we know that up to 80% of children who received cochlear implants younger than 12 months of age demonstrated receptive vocabulary knowledge within the normal range by school. school age. So around five around age five, right?\n\nWhen they're all students precing kindergarten with their sixty years. They have that vocabulary knowledge. Now I like this visual because I think it's easy to kind of say, okay, a cool birth plan, that's great, we're gonna hear better.\n\nBut really, kind of what do we see? So when we take a patient that is old enough to because they're behavioral and we put them in sound booth. You can see so those circles at the bottom, that is um you know typical pure tone threshold for somebody that has a Severe ground loss, right?\n\nAnd if we were to put a curing aid on that patient, those A's, that's all we would get. So you can see that those A's are really falling under the speech banana, under those speech. that are scattered on that audi brain.\n\nBut then the Cs, that shows those typical behavioral thresholds of our individuals with a cooperative. So we're actually getting thresholds thresholds in that 15 to 20 dB range for the coach implant, really providing access to the full speed spectrum. So we have two different components.\n\nWe have the external components, that's what you see on the outside of the cookware implant user, and then we have the surgically implanted internal components. And those external components are comprised of the microphones, the sound processor, the transmitter, the transmitted coil, and the battery. And then on the inside we have a receiver and electrode array.\n\nAnd y'all just raise your hand if I'm going too fast for you to type nothing in. So you already saw this, but this is just an example of what some of those external components look like So how does it work? The like a phone text they can exam.\n\nAnd And then send it to the sound processor, and that sound processor is what converts the microphone signal into a digital code. Then that sound processor also relays that digital code to the train signal Okay, which is implanted under the scalp. The transmitter in turn sends that digital signal to that internal receiver that is also under the skin.\n\nThat receiver converts that digital signal into an electrical pulse that is sent to the electrode array. And then the electric array is what signaling says auditory nerve fibers and then the auditory nerves and Okay, so we have to think about a lot of things. Can you just see is much broader than just repeating?\n\nSo obviously we audio logic goals include evaluating material. But we also have to evaluate the benefit from their appropriate amplifications of their common period or the best digital hearing aid out there. We have to work with a team.\n\nThis is not just one person's decision. So we're working really closely with team. Surgeon, a speech language pathologist, to determine if the patient is going to benefit from actual inclination.\n\nObviously we can check insurance and make sure they meet the FDA guidelines for candidacy And we can't implant everybody. We have to implant those that have a very strong support system in health because this is going to require a lot of rehabilitation. And we also have to make sure we really talk to them about realistic expectations to make sure they understand the adjustment process as well.\n\nAlright, so this is from your book. This is what you'll have to do with the test That's when it comes to candidacy. Guidelines based for A by H The batteries in the door So the community is virtual. We're looking for those who have a moderate to profound urine hospital lung frequency or worse. And then simply severe around and admit the high frequencies will work.\n\nWe also are going to do anything. This is not working, so I'm gonna have a shadow. Um we're looking at their eighty speech recognition scores so we have to actually put them in the booth and do behavioral testing to see how well they're hearing the speech with the best possible hearing aids out there.\n\nWe have to make sure that they have designed We can't just implant anybody just out of curiosity. They want to actually listen and learn to communicate through listening and talking. They're helping others for surgery.\n\nThere's no medical contra indications of their health or structurally with their coaching highly motivated and have appropriate expectations. Alright for young children With young children, I'm talking about nine months to 24 months of age. And you've heard Ashton say, we're hoping that in the future we can implant those that are six months to mountains of age as well.\n\nBut so for those, we're gonna have to have a little bit more strict criteria. So whereas for the adults, it is going to have moderate info law with young children, bilateral profound sensor. Um can't put an adult child in the booth and get behavioral speech testing, right?\n\nSo we have to look at those checklists we talked about. We're looking to see if they have a lack of progress in developing simple auditory skills with their hearing aids. So we rely heavily on those questionnaires that you guys look on in class.\n\nWe have patients they're enrolled and continue to stay involved in the therapy program. I'll just emphasize it results with skills. Again, no medical contraindication, high motivation from the patient and their families.\n\nAnd then the parents have referred to expectations. And then when it comes to our older children, so our children two to years, uh two years of age to 18. Going to send every video is some classic auditory and complete development with their periods.\n\nAnd so we're gonna actually do some open z words. So who remembers what open zero Open versus closed it. Correct.\n\nSo when I did When I do an SRT, whenever we use spawn D, I familiarize my patient with those words, right? Say the word baseball, hot dog, two cards. And then I say, okay, those are the only words I'm going to use.\n\nThat's a closed set, right? They know that the only words they're going to get in here are the words that I told them. Same thing by doing picture pointing capture, the WIP.\n\nBut with an O I'm just going to use a list of words or sentences and it's an infinite number of choices. They 're not informed of those words ahead of time. So it's a much harder task.\n\nSo we're looking to see if they have less than 30% correct from open set word recognition tests in the best data conditions with the best hearing devices. Also they need to be involved in that Therapy program and emphasize development all the way to help. No medical contractation, high motivation for patients' family, and appropriate expectations with the end.\n\nImplants an alternate FBA group for single-sided deafness, but only for kids five years of age and older. And when it comes to the ear to be implanted, they have to have a severe to profound sensory neural hearing loss that's defined as a curtain average greater than 80 dBHL And then we also look at their aided C and C wordless score of developmentally approved words being less than 30%. And that C and C wordless is also an And then in the contralateral year, for the opposite year, normal to near normal hearing as defined as a pure wind average that is led as per reach.\n\nAll right, so if you're a therapist working with children or a parent with a child, what are some reasons to consider Consider a quick learning plan evaluation. First one, biggest one with young kids. They're not startling or reacting to loud set.\n\nSo the first thing parents will usually notice. They're not seeking out, are looking for the source of sound. Okay, think about that head turn that we see starting with the rumors from about four to six little days.\n\nThey should be curious and looking for sound. It's not babbling. Or they're battling and not progressing.\n\nUndertan of the speech. And then they're not reacting to voices, especially in the email. So those are some things to watch.\n\nWhen they're school-aided, what is it based on look for? So if you're in the classroom with kids, you're working with kids, do they repeatedly miss or not respond to the link Maybe they miss a few of us, maybe they miss all of us. When they're rare, they're hearing it.\n\nUm are they increasingly becoming more dependent on those hacks that hear that Or even if they're really paying attention to those visual cues, constantly release speech reading. Um, when they're in even when they're in quiet environments. Do they have slow auditory progress compared to their two computer computers?\n\nDo you find that they have a lot of communication breakdowns, which can be easily frustrated? And then are they just just exhibiting auditory fatigue at the end of the day and just having complete exhaustion. All right, what are the parts of the audiological assessment for our uh child with our implant.\n\nFirst thing is we're gonna have to do unaided testing. So if they're old enough, we're gonna test the behavior, right? We're gonna put them in the news and we're gonna We're going to present earton, aerosome production testing, testing, all of the data, right?\n\nBut those young babies, we can't get behavioral testing. We're going to rely on some of those protective methods. Recommended you for pediatrics?\n\nA VR? What else? OA B?\n\nRight, we do two phenometry. When possible, we want to get aided tested. So those kids that are old enough to be tested behaviorally, we're gonna put them in the booth They're hearing aid.\n\nIt's an aided threshold, aided speech testing. And then we rely heavily on those classic questionnaires. We already talked about, we did this in class, we're going to talk about it today.\n\nWe have some more like little years to talk about here. All right. Audiologic candidacy measures for kids.\n\nOkay, they're obviously going to depend on the age and the language scale of the tire. We have to remember that that we are implanting a lot of kids before age three, right? Um and even more so before age two hundred age.\n\nSo we know that we can exapperate the cars or they're implanting But that really limits us as far as what type of assessment can we provide. Because even if we're not allowed to take it out. So rely only on the logs to help us determine if your candidate is functional.\n\nWe also rely a lot on behavioral observation and functional assessments. So um we actually even have some FEA indications for that. So the different cookware manufacturing the different cookware incident manufacturers kind of list it differently.\n\nSo like advanced bionic for example lists that as failing to reach developmentally appropriate auditory model statements. Cochlear MedLSA they demonstrate a lack of progress and simple auditory story. Those meaning the same thing for We get a lot of feedback from pathologists about what they observe.\n\nand any functional assessments that they carry out to determine if the child is going to be a candidate. And then again, those those questionnaires, it mace, it may, or some that are widely use but little ears. Little ears is actually one that has been developed by CoClear Americans.\n\nThat is something that all of you have access to if you go on To Clear Americans website and look under the resource. you can download little years. And not only does it have a functional assessment questionnaire, but there's also different activities that you can use in your therapy information for kids and technologies.\n\nAll right, let's talk about the aided speech perception testing for kids. Alright, so kids that are older and older Old enough for behavioral speech testing in the booth. We're gonna start with some open set speech recognition measures.\n\nOkay, again, open set provides a ton limited information number of choices of responses. So it's going to be more difficult than a closed set test. And we usually get a percent correct score, right?\n\nWith 0% being they got nothing right. We always want to standardize it when possible and use recorded speech to reduce the chance of variability among examiners. Some of the common tests that are given are the MLNG, you don't write this down, but that stands for the multi-syllabic lexical neighborhood test.\n\nAnd you are going to be able to present these lists in quiet. But then we've also been present in the background. So we know that background always is more indicative of real life.\n\nWe also have to have a very thorough medical evaluation. So we get a really detailed list of the parents. This what exam is always important.\n\nGenetic testing helps us determine maybe the cause of the hearing loss. There are certain genetic conditions that we found in the wells in the recommendation. Also helps determine maybe the child has a syndrome.\n\nSo maybe here One symptom of that syndrome, but there are other things we need to look out for. Um existing medical conditions. We have to make sure they're up to date on our vaccine.\n\nSo if That are getting a pulse replant have to make sure that they have updated meningitis vaccinations because they're at higher risk. And then we want to do imaging. So MRI and TC.\n\nMRI is really good at giving Um visibility of the soft tissue and the muscles. CT is a so sometimes you need the CT is usually more common structure, which I think they're reading up with. There is a lot of capital that is involved in the list.\n\nAnd things have changed so much because the fact that I would do a group of representation, we were the counseling. So we would have to set aside hours that we would spend talking, staying late with our patients, trying to make sure that they understood everything about being a good birthday. But we see that now, you think that's our whole job is to meet and do all this countless the audiologist because it's not military time.\n\nUm but these are just this is just an example of all the different topics that really need to be covered when you're counseling somebody that's coming in with your child or for themselves without being able to print them. involved on the co-correct plant team, but some of the most important role parents, they are part of the team. They are part of the Decision making.\n\nThe audiologist, okay? Different roles, right? The audiologist role is really assessing the hearing and auditory function, determining the audiological function.\n\nAnd then once that child is implanted or that adult is implanted, we are the ones that see them across their life. We're the ones that have full control of the programming and mapping of that product. The SLP is going to be the one that is going to develop patients' language skills.\n\nAnd then the EC has that crucial role in working structural implementation in managing any medical Some other members of AC as part of that movie planting. Psychologists. Our surgeons would always require a psychic out for any adults getting a plant.\n\nGenetic calculators. You have educators, social workers, sometimes you have a patient navigator or like a child life specialist involved, and then service coordinators. We usually have the multidisciplinary meeting for any more complex like cases before we decided to implement and get input with all the new professionals all.\n\nAnd again, it's very easy for an SLP, especially SLPs that don't work with the correct way. Okay, so they okay, well that's such a audiologist in the I don't have a rules. But the SLP is a valuable measurement and also a very valuable recurring provider.\n\nto give patients to the surgeons if they suspect. Okay, so long A lot of code programming number providing penalty on those SLPs to help interpret the same patient borrowed code for implementing. referral is never a bad problem.\n\nYou suspect that a patient you're working with could potentially be a good friendly candidate. Don't feel like, oh I don't I don't have up-to-date information about that is prefer them to let the the audiologist and those who writing at the community standard be the ones that to decide. Don't think of this as a bad curve.\n\nAlways refer if you think of that The implantation itself. The surgery usually takes the flowers. So we're just one that places the electric array.\n\nAnd then the audiologist actually in the OR conducting something called neuron policy. We're actually verifying In real time, that that uh electron rate is firing, that all 22 electrons are on the spirit, so that in some cases it would have the whole The electrode array, we can let the terminals know right the hand OR, and then we put extra plane it and put it in the backup. The extra kit always puts it too, so they always put a backup electric array.\n\nMy stat papers are action, but um in my experience and talking to our The initial activation is two food. So they have the surgery, they go home, and then two food Later, they actually go see their audiologist and have that device turned on for that initial mapping. Um it's not uncommon uh don't patients and children that are older to hear changes in voice in real time during that first appointment where people will sound like Mickey Mouse And Donald Duck under your favorite law.\n\nUm, and so you they get the giggle because they can talk into their wife like this sorry, you just sound like you're favorite. And then after about an hour, it's like, okay, now you sound like And then it would be now different to selling yourself. But it's just you know the brain uh hits a different signal now, it takes a while to adjust.\n\nThe reactions are very some people are very emotional, very happy. Some people are very angry because when you turn it on, I've got a patient up for two hours, they still don't recognize the patient. They get very concerned.\n\nAnd you have to remind them that it takes time and everybody's experienced different Um, we programmed something called progressive nets. So remember Ashley talked about those T and C levels or our threshold levels, and then our C levels are like allowed us to cooperate. But we know that on that first visit, usually they can't tolerate a lot of laps.\n\nSo we program a map and then we give them progressive maps where that seal level gets a little bit higher, we want them to push through and try this progressive map. We go over all the accessories, all the parts of their kit. We have a lot of information at that initial mapping.\n\nAnd these are two fun videos you can watch on your own if you like those YouTube feel-good videos. It's a activation of an eight-month-old baby. And it's really precious.\n\nUm probably point too. We're going to see that audiologist a lot in the first year. Typically you come in for that initial math and you come back in two weeks, then one month.\n\nin three months, in six months, and then after that once a year. Um those important are critical because they allow us to adjust the map to make sure that sound is loud enough. so comfortable, to improve sound quality, and to try to help maximize the settings to improve speech and television.\n\nWe also are going to push on the move for that with a great plan. test how are you doing and get some behavioral information about is your speech information ability improved is your noise information information that can uh vary and change the success of of the device so we have some intrinsic characteristics You know the age of onset how figure off is going to affect these steps, right? The family environment, the pre-implant period , uh some of the implant characteristics without signatures.\n\ndevice function, the duration of implantation, the age of implantation, the anatomy itself. We have any type of plagiarity, we don't have a full, you know, two and a half turns of our cookie and we're not going to do those stimulated as much of that auditory nerve, right? Um the insertion depth of the electric array.\n\nSome observants can't do a full insertion of that electric array. Pediology of the dream loss. Oral rehab.\n\nAccess to oral rehab. You heard action say they're looking into the next maybe three to five years at high level And be able to travel and go out and provide services to these rural or underserved areas for uh listening in spoken language neighborhood. The terminology by ear, they are very different.\n\nSo when we say binaural hearing, we're talking about your hearing If you hear somebody say bimodal, then that means that that patient is a completely paint on one side and they're utilizing and hearing aid on the other side. And if you were to do it bilateral, bilateral is two. Bilateral and bilateral.\n\nAnd lastly, timing matters. Okay? We know medicine's going to vary from person to person.\n\nBut the sooner we get access to sound through that filter implant, the better. So we know earlier filter implantation needs to easier bonding device from the child Less time in therapy for the job and parents. A lot of these kids get to be main street, so that means by the age of five, they're in yards, they're going to school with their typical hearing fears in their neighborhood.\n\nAnd we have advanced outcomes, improved outcomes for speech language, academics, and social students. Right. Let's do that.\n\nAlright, so let's look at our questionnaires. So I'm gonna just call out the groups one by one to come up and talk through that uh those questions I asked you. So who do I have to come up and talk about the backing?\n\nRaise your hand if you were in the happy booth. One person here in the happy? Raise your hand, happy happy food.\n\nAlright, so y'all can give it a couple seconds and figure out I'll give y'all five minutes, figure out who's gonna talk to you. But it is very, very detailed. Um so you can see you have like for example you'll have a section like functional auditory performance indicators response From three feet away, from ten feet away, in quiet, in noise, when prompted or spontaneous. So you have a lot of detailed information that you can really provide to the audiologist as a parent if you're going home and working through this to provide to that audiologist.\n\nTo try to help us determine do we need to tweak the hearing aid setting or the cochlear implant setting to ensure that we're getting good access to sound. And then you can see Where is it? At the end.\n\nSo total up those categories. And this is something that can be ducted over time because it can take a lot long time you just kind of go through some of these um categories but then at the end get to it okay yours doesn't have it I have mine and show you up mine. And I'm gonna um open up my copy of the FAPI.\n\nYeah, but um I'll have to find mine. I can't remember the category save it, but it has a nice bar graph. So once you total up everything, it lets you kind of see areas as a therapist that you need to really highlight and focus on.\n\nVisually, it's a good graphic for that. So um, but Fabi again is is one of the of my favorites when it comes to um cochra implants because it's so detailed. Thank you so much.\n\nAll right who is uh who's coming over for my peach group Okay, so the pH is to report how a child is hearing an Communicating using your cochlear implant, but the parent is the one that fills it out because this is for kids from one month to five years old or school-aged, and then So the parents pretty much keep track or like a journal of their child's speech and communication for about a week and then they'll come in and do the fill out the whatever it's called the page for um based on their last week and then based on the responses they're also asking to provide an estimated amount of time in which these bankings have been happening. And then there's 12 questions on the peach, but there's also a couple like pre -questions. I think there's like three and then to score they're broken off into quiet noise quiet section and then noise scores and then for the quiet is questions three five seven nine and eleven divide by 20 and then multiply by 100 and then for noise you have the the numbers and do the same thing and then to get the overall score you add this group from quiet and noise and then divide by two. Alright, so again, this is real easy and see how this be something that'd be very. simple for the parents to fill out. Um okay and then again you get that you can quiet and noise and your overall pH score.\n\nUm and then you can grab to kind of give you a better visualization about the information. But these are quick and easy. These are things that you know are very easy to talk to the parents and get them to fill out.\n\nIt gives you really good functional information. about how the child is doing. Alright.\n\nLife. Who's my life representative? Nobody from Um the light group is here.\n\nOkay. Okay, so what is the life and the purpose of the questionnaire? We found it was to verify the quality of classroom listening, of the classroom listening environment from the standpoint of an individual student. So that's that self-report.\n\nAnd it assesses the child's listening ability in real classroom situations such as understanding peers, media, and directions. We found a few different age range ranges for the life, but According to the National and Deaf Children Society, we found that the angel age was from 7 to 14 years old. A summary for the instructions is you make an observation.\n\nAnd mark a response that correlates the best with the student's difficulty with listening and learning in the following environments. If you are unsure of the answer, you leave the item blank. are 15 core questions on it and eight teacher eight teacher checklist questions on it and the way you score it is by averaging the responses across the 15 listening situations and then you place the score on a 15 to 75 point continuum and then that's the hard popular.\n\nAlright so we get like a good Life is a good one because again, older children, we get the feedback of the student in the classroom and the teacher's information as well. Okay See elf elf. I would appease the colour. Okay. So we did the ELF and the purpose is to track the child's functional auditory milestone. It involves parents in their listening development and measures the real-world benefits of hearing aids or cochlear implants. It basically just helps understand how the child is accessing. Sound in their everyday life.\n\nAnd the age range is birth to three years old. The patient or the parent or caregiver presents 12 acoustic activities. For sound within the home environment and observes the child's behavioral responses to three types of sounds: quiet, typical, and loud.\n\nThey monitor and test these responses from very differences. There's 12 questions on it and to score it you um Have 12 activities and parents or caregivers test the child at varian varying differences and mark the responses. As a yes, no, or maybe.\n\nAnd then instead of adding points, results are interpreted by finding the furthest distance where the child reliably and consistently reacts to the sound source. under each loudness condition. The outcome helps the audiologists and families visualize what sounds the child can access in everyday environments. and determines the impact of hearing and measures the effectiveness or benefits of hearing aids or other application devices in the room. I'll pull that one up in a second. Sorry. Okay, so again, elf.\n\nAnd a lot of these, one of the reasons I have you all look these up yourself to see how accessible are these questionnaires did many of you find that you were directed to a hearing aid manufacturers website or took learning plant manufacturers website so they want you all to have access to these questionnaires okay So get birth to three with the elf. Okay. All right, who's my ace representative?\n\nNobody's here in the group that did the ace. Hopefully this one's gonna live too. So I didn't purchase an at all.\n\nIf one of y'all emailed me, um and put it in email not in a word doc. I just assumed it was on the attachment that I could posted it. Actually, I'll close this out. So the purpose of the ITMACE is to assess how a child spontaneously responds to sound in their daily environment. So it covers three things. Vocalization.\n\nAlerting to sounds and understanding the meaning of sounds. And it's also based on information provided by the child's parents. So So it's zero our birth to 36 months.\n\nIt's a parent interview with open-ended questions rather than just yes and no questions. And the parent Parents' answers are recorded during the interview. Credit is only given to the child's spontaneous responses to sound, not responses that happen after prompting or during during the listening activities.\n\nIf there's not enough time in the interview, don't just schedule another one. You ask parents to estimate how often or what percent of time their child responds to certain zones in certain situations and being flexible in this is really important. There's 10 questions, each are accompanied by subsections or prompts to guide the parent and providing their answer and um just score it it's in terms of the total number of points acquired out of 40 possible points and each Question has a potential of zero, so I mean never, to four, which is always, which includes ten questions.\n\nScoring is often based on the percentage of time that a child demonstrates specific auditory abilities. So the um it basis good because of the open-ended format because Sometimes with the yes-no parents can give us very, you know, it's very vain, right? We just get a little bit of information. But the open-ended nature of this one, it can often be prompted to give more feedback.\n\nback to the SLP or to the audiologist that is useful when looking at their access to security. Okay who has the child My leaves aren't loading. Yeah, I know it is.\n\nIt's just nothing's loading right now. I have to go back through my email and pull them up. Um so we have the child and the purpose of it is to kind of look at how they can react to different situations in their home environment, um, especially with like distance and background noises, and it's for ages three to two 12 um and basically it asks the parent if they're between three to seven, the parent does it with them and like goes through different environments in the house, like things with background noise.\n\nor things with media stuff like that and rates them on how well they perform and if the child is seven to twelve they can do it themselves just like writing their own questions um and is 15 questions and you basically just add together all the scores from the different environments and then divide them by 15 and that's your total score. So again a good one because this one goes up to age 12 So you can actually involve the child in the feedback for this one. All right.\n\nLast one, right? Okay, so we're gonna hit that one. Okay, so and I just wanted to kind of pull up little ears.\n\nUm I could access it without putting this in. Okay, but you can actually access this that 35 question um little ears questionnaire. Um and I really strongly encourage you, you now know the three big cocoa implant manufacturers.\n\nadvanced bionics copper Americas peruse their websites peruse their resources if you're looking for their community resources um they'll have some tab those for families, for parents. It gives you a lot of valuable information that you can use as an SLP in your therapy or to assess auditory skills. And then I want to go back to where were we?\n\nHearing aids, the AAA 2013 pediatric amplification guidelines. Because these questionnaires are so important. And if you are practicing one day and and you have a hearing of hair child and you're like, wait, I can't remember which questionnaires would be good and useful in this age range, if you always refer back to the AAA pediatric amplification guidelines.\n\nThey have this table so outcomes assessments for children so they have the outcome assessments that are for kids younger than three it shows you clinically what to be done and then what are those parent report questionnaires so the dialogue And if they're in school, which one's appropriate for the teacher, so the teach. For those kids three to six years of age, what can we expect clinically? So spee perception, this is what the audiologist is able to get information on.\n\nAnd then what are the parents able to provide? So they can provide feedback on questionnaires like the able, the child, the mates, the musts. And then it gives a little bit more where now we can do the sifter with those teachers.\n\nAnd then for our older kids, again, audiologically, what can we expect them to be able to get us in clinic when they work with that audiologist? Um and then what are those parent and teacher and child report questionnaires that we can use? So if you're ever not sure which ones, look this up.\n\nYou can find the one that's best for the child's age or the audience, if it's the teacher, the parent, the child. And then if you keep I'll update and make sure I put all the information on Moodle. But if you um update keep copies of those forms that you all did in the class, you'll have just a quick reference to be able to go back to the what age was this for, how do I score this?\n\nIt's just useful information to keep copy um carry with you. Any questions? Any questions about the functional questionnaires?\n\nAll right. Okay. So then um next oh real quick before we dismiss, um I had some time to grade your hearing aid projects and I would love some feedback.\n\nSo what are some things that you learn from the CB access amplification project that you maybe we're aware of um when it comes",
  "terms": [
   "cochlear implant",
   "external components",
   "internal components"
  ],
  "definitions": [
   "surgically implanted device that electrically stimulates the auditory nerve of a patient",
   "that's what you see on the outside",
   "surgically implanted"
  ]
 },
 "ART1020": {
  "source": "So I would use this thing.\n\nOkay. Can y'all hear me okay? Okay. Definitely gonna need the mic today since they've got, you know, entire lawn crew out there. We don't even have a home game this week now. How's everybody doing? So before we get started, just want to remind everybody about the undergrad clinical practicum applications. We talked about that last class. So if you were not here and you're interested in participating in an undergrad clinic for the spring 2027 semester, all of the information is on Moodle.\n\nAnd so there's a it has its own tab on our Moodle page. So please take a look at that. The deadline. Remembers the deadline? October 30th, right? So October 30th, everything has to be turned in in my mailbox. I make hard copies. So if you have any questions about that Please let me know, don't wait till the last minute. Okay, I also was looking ahead of the calendar and we only have one more class period until your second exam.\n\nSo just, you know, it's we've got a lot of content in the next two weeks. We're finishing up speech acoustics today. We're going to cover auditory training on Thursday. We have guests speaker is coming to talk to you all about auditory processing disorder, so identification and intervention of APD. And then we are going to cover visual stimulus. and the new hunger exam. Everything in the next two weeks as well as everything we've done for cochlear implants all will be on this exam. So So last class uh we stopped kind of talking a little bit about audibility versus intelligibility, right?\n\nSo audibility is that you can hear something, but just because you can hear something doesn't always mean that you're going to understand what you heard. That's intelligibility. Okay, so speech can often be audible, but if we have a hearing loss, it comes as Audible but it's not intelligible. Remember we talked a lot about the SII as a great quick tool to try to get an idea of audibility and then we can kind of plug it into that graph to determine how intelligible speech is on the NU6 word list or on um some CAC word list\n\nMy gosh, y'all, so loud\n\nI have trouble focusing, so I'm sure y'all are definitely having some trouble focusing with that voice. Um, okay, so Again, intelligibility. Our ability to hear and communicate depends tremendously on the quality of what we hear. Okay? And really being able to identify some of those various small segmental and super segmental aspects of speech. So I pull up this graph. This is not a new graph to you all. Okay.\n\nAlright, so this is our, and sorry, it's kind of right in the crease of my book, but this is the minimum vulnerability curve, right? about this a lot in introduction to audiology. So the human auditory system is very sophisticated but at the same time it's very limited. the types of signals that we can process. Okay, so this graph shows us um if we look at our um x-axis here we have frequency and we know the human ear can hear anywhere from 20 hertz to 20,000 hertz. Okay? And then we have intensity in DV SPL. So what's important to know about this graph okay it's really important to know that we can discriminate different stimuli on the basis of only minor differences in acoustic properties.\n\nSo we can discriminate different simulae on the basis of only minor differences in their acoustic properties.\n\nAll right, so as I've just said 20 to 20,000 Hertz. That's the range of frequency that the human ear can hear. So stimuli above and below this we can't detect\n\nIntensity limits vary as a function of frequency, right?\n\nOkay, so the intensity limits vary as a function of frequency. So if we're looking at this graph and we're looking at 20 hertz, okay, can we all agree that when you're looking at 20 hertz, the sound has to be louder to just barely detect it, then over here say at about three um at about three thousand hertz can everybody agree with that okay so intensity varies as a function frequency function of frequency so this is the minimum SPL needed to just purely detect those sounds. Whereas the line across the top, that is the loudest that we would want to hear a sound. Okay, that's our threshold of feeling. loud as we can tolerate sound. And everything in between those two lines is our dynamic range of hearing.\n\nAlright, so where on this graph do you see the maximum range range of intensity that we're capable of processing. Which frequency houses the maximum range of intensity we can process?\n\nLook at that minimum audibility curve. At what frequency is it the lowest?\n\nAbout 3,000, right? So the maximum range of intensity we're capable of processing sound occurs at 3,000, about 3 to 4,000\n\nOkay, so from that area, we're essentially able to detect Sounds at about zero dB spl and then all the way up to the loudest that we could tolerate being at about 130-140 dB spl So that's a pretty wide range at that frequency. Low frequency sounds, however, they need to have increased sound pressure. To be audible. So our low frequency guys over here, our low frequency sounds, they need to have increased sound pressure to be audible. Right at 20 hertz. We need about 80 dBSVL just to barely hear that, barely detect it. Whereas at 3,000, we could hear it at 0 dBSVL.\n\nAlright, so now we're gonna really delve into a little bit of frequency and intensity and temporal parameters. Of speech and how they can impact intelligibility.\n\nKnowledge of acoustic properties is so important to understanding how we perceive speech. And speech can vary significantly. significantly in its intensity levels. Alright, so you've heard me say and hear a lot, like, you know, average conversational speeches at about 65. What I mean by that is sixty five dB spl. But if I'm on the HL scale, okay, the average intensity of speech is about forty dB HL. Okay If I shout, a shouting kind of intensity is about 65 dBHL. And on the other hand, really soft speech is at about 25 dB HL.\n\nSo that gives us about a 40 dB range of variability in intensity when we're having a conversation, when we're talking to people based on the intensity of their speech. Okay? That's pretty highly variable. Distance also plays a key factor further away the individual, less intense at the speech is going to be. When we look at the individual speech sounds, there's a high level of variability in the amount of energy that they produce. Okay\n\nAlright, so remember our phonemes are the smallest units of speech. If we were looking at this graph, Okay, this shows all those different phonemes and it shows their essentially their acoustic power, okay, their intensity. So who can tell me which what that phoneme is right there?\n\nOr just give me a word. Aw, right? Like saw or caught, right? That phoneme has as about six hundred and eighty times as much energy as our weakest phony, our sound. Okay So 680 times the energy of the weakest focus, from the most powerful to the weakest. What does that coincide with as far as in DV? So that's about a 28 dBHL difference in power between our most powerful phoneme and our weakest phoneme. That's pretty significant, right?\n\nWe also have a lot of variability and intensity. Between male and female speakers. So male speakers produce speech at about 3 dB greater intensity than females. But overall, when I look at intensity, Density parameters of phonemes, vowels have the most phonetic power. Whereas consonant sounds have the least or the lowest phonetic power.\n\nBless you.\n\nWe also have to consider the frequency parameters of speech. So are human ears capable of hearing from 20 to 20,000 hertz, but as far as the speech spectrum, speech spectrum, the majority of energy is in that 50 to 10,000 hertz range. The greatest amount of power or energy in speech is found in our lower frequencies, so those frequencies below a thousand Hertz. Why is that? Anyone know?\n\nWhat important element of of speech is low frequency? The fundamental frequency. Right, so the fundamental frequencies of the human voice are low frequency. So for men, that is about 130 Hertz. For women, about 260. Two hundred and sixty hertz and then kids about four hundred hertz.\n\nAll right, so this graph This shows the long-term the long-term interval acoustic spectrum of male voices. So if you look at this graph and you look at we have frequency and we have our pressure okay the greatest energy for male speech is around right around 500 hertz okay and this has to do with those fundamental frequencies and then the resonant of the vocal track itself. All right, so this is just a much much more detailed speech banana all right so figure two figure four five I love this I have this printed and laminated in my um Sound booth. This is not something I'm going to use to show my patients, but this is a great tool when I'm teaching. Um, and when if if you're a speech pathologist and you're working with the child with hearing loss to determine which phonemes are they missing.\n\nSo essentially again this vertical access again is showing intensity and then we have our horizontal axis showing frequency. just like the audiogram. And this shows where each of those speech phonemes is placed in terms of frequency and intensity. If you're looking at this I'm sorry, y'all can't see what I can. If you're looking at this, in terms of mid to high frequencies, which frequency packs the the largest concentration of donations.\n\nUh two right about two two thousand hertz right a little bit of three thousand okay I see patients all the time that have high frequency age related hearing loss okay the sloping audiogram and they have a loss at 4,000, 6,000, 8,000 Hertz. They're like, I'm doing fine. I don't have any trouble. I don't feel like I need hearing aids. And then they'll come in to see me years later and they're like, I can't hear anything. And the only thing that's really changed is that suddenly their hearing loss is affecting 2,000 Hertz. Okay, two thousand hertz ri really makes an impact on speech intelligibility.\n\nWe also have to consider sorry, actually it's still showing the book, you do not have to select PC.\n\nDid y'all get everything from the last slide?\n\nWe also consider the temporal parameters of speech. So we have variability in the duration of the different speech stamps. Okay, so duration of individual phonemes can range from 20 to 400 milliseconds. Vowels generally have longer duration than consonant sounds.\n\nAnd I'm sorry guys, I just realized I kinda skipped over. I rushed through this. I was going on and on about 2000 hertz, but just kind of one of the key takeaways for you all from summary of looking at this this speech command is that vowel sounds vowels have considerably higher amounts of acoustic power but they're confined to those low to mid frequency ranges on this graph so vowels considerable acoustic energy low mid frequencies consonant sounds typically have less acoustic energy like power They're confined more so more they have a more diffuse distribution on this graph, okay\n\nSo we have our voiced consonants that are more low to mid frequency, and our voiceless consonants that are more mid to high frequency. And I'll say all that again.\n\nBowels have considerably have considerable acoustic energy confined to the low mid-free frequency range. Content contents have less acoustic energy and they have a more diffuse frequency distribution. So our voiced consonants are more low to mid frequency and our voiceless consonants are more mid to high frequency I do not expect you to memorize this for the test, okay, but this is just a great reference. Alright, we'll go back to temporal parameters Alright, so duration varies. Vowels generally have longer duration than consonant sounds. So vowel duration is typically 130 to 160 milliseconds.\n\nWhereas consonant duration is typically about 20 to 150 milliseconds. And we do know that individual phoneme duration does contribute to speech perception.\n\nTransitional cues are important again to Intelligibility\n\nOkay, so we know that our intensity, our frequency, and our durational properties can be altered significantly when a phoneme is produced with other phonemes in conversation. You know, the rate of speech is going to vary, the dialect is going to vary from person to person. You know, kids are going to speak differently than females and men. All right, we also have to consider that when we're talking in conversational speech, that the movement of the articulators of the mouth can create some byproducts. And these also impact speech perception.\n\nAlright, so in summary, the key takeaways vowels have strong have strong low Or I should say low to mid, but mainly low frequency energy. Majority of our energy from battles comes from about the 250 to 500 hertz range. carry 90% of the energy of speech. Okay, so energy think power, loudness. On the other hand, consonants are very weak. power make high frequency sounds most consonant sounds are in that two to four thousand hertz region and above whereas continents lack that power that energy they carry 10% I'm sorry they um they carry 90% of the information that we need to to perceive the differences among those speech patients. Okay, so they they lack energy, but they provide the speech intelligibility.\n\nThat's why so many of the patients that have those high frequency I hear fine, I just don't understand anybody. Okay, because they're missing those consonants. We all agree that that octavan around 2,000 hertz packs in those punch, right? It carries the greatest amount of speech information for intelligibility. And honestly, in order to be able to perceive speech clearly and intelligibly, we need access to both vowel and concept than it sounds okay this is why technology matters so since we have cochlear implants it's not unattainable to really give a child access to the full speed spectrum. But we're still going to have some of our mild moderate kids or moderate severe kids that maybe are not quite ready or candidates for a cochlear implant that are getting a hearing aid And we're still going to have some missing access to the full speech spectrum.\n\nSo we have to understand that is going to impact their communication abilities. Alright, so you've heard me talk a lot about the lane six. I updated everything to the lane 10. I've been resistant to this because honestly there wasn't a whole lot out there. that was published but in really kind of digging through it seems like everybody's getting on board now with ling 10. So link six is still used, it's not wrong. But what the it's actually called like Low Mid High or Lynn Maple Hewitt did was they added in four additional consonant sounds that give more information. in the mid-frequency range. So really particularly a pediatric, it's just a good way to really quickly check access through the child's cochlear implants or hearing aids to the full speech spectrum.\n\nAlright, you can't get them in to see their audiologist every single day to verify that the output of the hearing aids of the cook learning lens is perfect. Each session, we can do the link 10. Okay, so this is something that anybody can do. Remember, we talked about listening checks. This is really part of your listening check. You can listen to the devices, then you can also have the child wearing the devices and run through the lane 10 with them to make sure that they're able to hear all of those sounds. So parents can do this, teachers can do this. speech pathologist but it's a great way to check to see is the hearing aid or the cochlear working. Do I suspect that the child's hearing has has changed?\n\nYou know I'm I'm suspicious that they're tugging on the ear they might have a new middle ear pathology so I can just really quickly see how they're hearing. Alright so on Moodle I uploaded two of the Ling Six little booklets from the cochlear implant manufacturer. So this is one from AB. So if you look at page two, this is a really great tool for you all to have because it tells you you what all of those LinkedIn sounds are. So we have oo as in um as in moon or boot. We have a as in car or arm. We have e as in lead and C. We have m as in milk.\n\nWe have m like nose. We have ah as in hat or hand. We have boo for I'm sorry, we have j like juice. My eyes can't see that blue font. We have shh as in shoe. We have sh as in sun or star. and we have this as in zebra. But what's great about this one is it shows you down here at the bottom what are the frequency regions tied to each of those sounds. So for example if I run through my length six my length ten with my child okay so I condition them I make sure that they can repeat all of those sounds with some visual information then it's like okay We're gonna take away the visual cue and I want you to repeat these sounds that you hear to me.\n\nMmm. And they say. And they z say zzz. Okay? I get them to repeat. Say I get to shh and they can't repeat that. I can look over here and say, okay, what are they missing? They're missing band three and band four. So band three is about that 1500 to 3000 hertz range and four is above three thousand hertz.\n\nOkay. If they're missing, um if they're just missing say moon, it's like okay band one two hundred to a thousand hertz and band three that one to three thousand fifteen hundred to three thousand hertz range so this is a great quick screening tool so that you can contact their ardiologist or you can tell their parent hey we went through the length six sound death test normally he gets all 10 sound but right now um this whole this session he was unable to hear these um so it's time to go to the audiologist to see what's going on. And typically it's going to be that there's a problem with the device, child's hearing has changed, or they have maybe a new onset of types of media.\n\nBless you\n\nOkay, but the good news is that even when we have limited auditory access Speech has a lot of built-in redundancy that makes it possible to figure out what was said even if we don't have access to the entire acoustic message. So It contains information from a variety of sources that make it available to the listener to comprehend the message even when we can't hear everything. So we think more redundancy better. less redundant, difficult to hear and interpret that message. Okay. And this is just a partial list of some of the factors that can influence redundancy in speech. Sorry.\n\nOkay, so for the person that is speaking Okay. Typically when you're talking to somebody, they have pretty good compliance with the rules of the language, right? They're a native speaker of that language.\n\nBut can you think of that this could can you think uh that this might be challenging when you have a young child that's just learning the rules of the language, right? So you're kind of in your brain kind of processing that subject verb object kind of pattern and then suddenly you have this child that comes in and really changes the game because they're mixing up word to word order. Use of appropriate articulation intonation stress have you ever spoken to somebody that is not a native speaker of English and oftentimes they have um stress on different syllables than we would and so it kind of throws you offer me like wait what did he say right but when we have those redundancies we take advantage of them um the size and appropriateness of the vocabulary used to convey that message within the actual spoken message itself, okay? The number of syllables for those words, four syllables, right? It's hard to mix up a word like elephant universally the word like eat it's like if you say eat or meet repeat the amount of contact the more context we have into the conversation the easier it is to understand it And decode that message.\n\nAnd then we always, as we just learned about speech acoustics, we have to look at the frequency component composition and the intensity composition. All right. So if we have high frequency hearing loss, we have a conversation that has a lot of high frequency elements, that's gonna be more challenging. The environment, okay, we know that we have difficulties when we hear a lot of noise, when we have a lot of reverberation, when we have a lot of distance as well. And then, you know, how many situational cues do we have? The more situational cues we have, have in the environment, the easier it's going to be to decode that message within the listener itself. Okay, so this is your person with hearing loss, okay?\n\nHow familiar are we with the rules of the language. So for an adult, this is going to be pretty easy, right? But for a child, this could present some challenges because they're still learning language. Are they familiar with vocabulary? Do we have knowledge of the topic we're discussing? Okay, we walk into a conversation, we know we're talking about LSU football or talking about Dr. Seppelin's exam. It's gonna be a lot easier to to decode that message.\n\nAnd then also their hearing abilities. The the more hearing loss we have, the more difficulty that individuals are gonna have.\n\nWe also have to consider the um the amount of linguistics linguistic constraints in the conversation.\n\nSo take 4-4 here shows us some examples of linguistic constraints available that help enhance speech perception. Alright, so some of our syntactic constraints, think the rules of the language, the word order of the language. So kind of like we were talking about with within the speaker complying to the rules of the language, right? We know that we have some pretty set rules in our language, you know, in in our syntax. So, you know, if you take a word like blue, right, very easy for somebody to say something like, oh, he's wearing blue shoes, but you're not gonna see that element of like he blue ran. So You know, you can kind of predict if you hear something off, you know from those typical syntax elements of the speech, like, hey, that can't be right. That's not what was said. Semantic constraints, those that have to do with the meaning okay so this refers to the fact that words are usually related to each other in a meaningful way so you know again if I hear if I say put the salt on the table That makes sense, right?\n\nI hear that and it makes sense, but if I I misheard it and I heard put the salt on the cloud, wait, that that doesn't make any sense. And I can kind of debunk and realize I misunderstood this. Ask for clarification. Um, and then we have some situational constraints. Okay, so this refers to the fact that most of the time when we're communicating with we're having these communication elements take place in some type of physical or social context. Okay. So if you're at the LSU game and you're talking to my dad, chances are 90% of that conversation is going to be about the football game. That's not the the um situation where he's gonna bring up talking about, you know, um his aching back or other issues.\n\nHe likes to talk about table four point five which is noise okay so noise refers to that to a host of factors that reduce the amount of information that a person\n\nwith hearing loss needs to communicate. And so noise is not just acoustic noise. Okay think about Noise being reduced amount of information that a person needs when they're listening. So reduced information that's needed. when listening. So we can have noise within the speaker. Okay? Again, poor syntax. Maybe they're learning English for the first time.\n\nMaybe it's a young child. Abnormal articulation, okay? Kids are learning language, right? We have articulation, speech on disorders. So it can be really hard to communicate with a young child that has articulation errors, um improper stress or inflection. These are all essentially percentual potential sources of noise within the speaker themselves, right? Source of noise within the communication environment. Okay.\n\nIt could be lighting, right? If we have a very dimly lit room, making it very hard to to speech read, to see the person's mouth and their their body language and their gestures that's going to be to impact our communication. Competing or distracting visual and auditory stimuli. verberation. Those are all things that are going to really cause noise in the environment. And then within the listener themselves, if they have a lack of familiarity with the rules of the language, think young children. um inability to identify the topic of the message, right? They don't get the context of that message, um, or poor listening skills, then they're gonna really struggle.\n\nAll right, so there's some things that we need to consider when we're thinking about just typical speech and language development. When I say normal\n\nWhat we're talking about is essentially we average age that most monolingual speaking kids are going to accomplish identifiable milestones. And we understand that we have a brain of norms and that each category, if I say birth to three months, okay, typically we don't master that skill until closer to the latter range on that. So birth three months, we're gonna see those skills mostly mastered by three months, right? That that upper age in that age range. It's really important that we have good understanding of normal. Um, not just so that we know what abnormal looks like, but also this helps us to aid in counseling our families. to understand where we are, if we're on track, where we have issues, what we need to work on.\n\nSo my favorite counseling tool And um when we talk about typical auditory development is something called the integrated scales of development. So I'm gonna pull this up in a second, but this one uses information information not just on auditory development but also perceptive and expressive language, speech, cognition, and social. So you get everything in one document that you can use to really kind of monitor that child's progress. And we have a lot of different resources that this came from. So things that you'll recognize like the cottages, PLS for the real okay, but this is our integrated scales of development. Okay, so it's nice.\n\nBecause it gives a little bit of information about what it is, but you can see here it goes from birth all the way to I want to say it was 47 and 48 months, okay But it's a fantastic tool because again, it shows you, okay, audition, perceptive and expressive language, speech, cognition, social. So So if you're working with a child and you know their listening age, what's their listening age again?\n\nIs that the same as their chronological age? Okay, so what's their listening age?\n\nCorrect, right? It's remember the day they get their hearing technology, hearing age and cochlear plant is day one of their listening age. So say I have a child that gets their cochlear implant at nine months and that child is 18 months, what would their listening age be? What is it? Nine months, right, okay? So we're not gonna look at this and go, okay, they're 18 months. Let's see where their skill should be. No, we're gonna look at this and say, okay, their listening age is nine months. So where should they be in the category?\n\nhere for nine months. Okay, this is where we need to live. So it kind of gives us some ideas about, okay, where should what are their auditory skills? Okay, they should be able to localize sounds with accuracy. They should be able to to discriminate. I should see an increased attention span when it comes to auditory stimuli. I should see that they're starting to associate words with meaning. But if I'm curious, okay, where should their speech skills be? Where should their cognition be?\n\nI have everything right here. So you're not having to go pull from five different sources. So it's a really useful tool. You can use this to develop some of your goals when we talk about auditory training or some of your speech goals. This is just a great reference guide\n\nAlright, so this is a good guide because it shows you what's my average vocabulary. I'd be looking for in terms of the child's listening age? So how was vocabulary learned? How do we grow a child's vocabulary? What do they need to do? They need to listen more, right? By listening. So that 18-month-old child should have around 10 to 15 words, okay? Um animal sounds count I can tell you that for my son because I was so worried because he wasn't talking and I called my my old roommate who's a speech pathologist.\n\nShe's like, how many animal sounds do you see? About eight.\n\nHe just stuff but you see that grow right three years 300 400 words and this is a good thing to to remember and when we're doing our language samples accounting and practicing vocabulary, where are they in terms of the typical child?\n\nVocabulary acquisition can vary based on the environment. Okay, so there was a study long time ago that really looked at the average number of words per hour addressed to children based on their parents essentially education level. And it found that Children that were raised in houses of professional families, on average, we're getting about 21 exposure to 2100 words per hour. All the way down from working class To families at work welfare, you can see that transition twelve hundred words an hour, six hundred words an hour. Okay. I've seen children all the time that come in and And I ask the question about how many hours a day are they in front of the screen, in front of a tablet, in front of the TV.\n\nAnd I know whatever number I get, it's usually higher. But it's like those are hours hours that the child is missing access to language, access to expanded vocabulary. Okay. Vocabulary differs among families. We've researched has found that more professional and families Families are really talking about expanded vocabulary, complex ideas, feelings, giving subtle guidance, positive feedback, and really exposing the those kids to more vocabulary. So this is something that we need to make sure we're counseling our families and talking to them about those increased experiences for listening and how important they are. to vocabulary acquisition.\n\nAlright we also kind of want to pay attention to typical speech intelligibility. Because we know that varies by age as well. So when we're we're watching our our children with hearing loss and thinking about that listening age and how um how their vocabulary is expanding how intelligible is their speech okay so an average you know a two-year-old child typically 50 to 70 percent intelligible how is our child with hearing loss in comparison are we on target or do we have more work to do? But on average by about four years of gestational age, that child should be 90% intelligible. So we want to make sure we factor in that listening age. And if we have a child with a hearing loss or we have concerns with their speech intelligibility, what's one of the first things I'm thinking about?\n\nWe speak how we hear, right? So I have a child with hearing loss wearing devices and their speech and tell ability is not as good as I would hope. What do I what do I think is going on? Do they do they have access to the full speech spectrum with their devices? So I'm gonna send them back to that audiologist and find out what's you know are we have do we have any areas on that audiogram on that speech banana where even with their devices they're missing access\n\nBut hearing loss is a silent handicap. It's not something we see. It's not something we feel. So when you have parent who has a new child with a steering loss, I can't tell you the number of times that families would come in and they'd own the child's hearing liaison. And it's like, well, you know, I I don't think it's bad as you say, right? And he's crying, he he can hear me. He's looking when I'm talking to him, and it's you know, okay, maybe that child has access to low frequencies, right? But they don't have access to mid and high frequencies with that hearing loss.\n\nSo It's hard for the parents to really understand the concept and the importance of utilizing those devices all the waking hours. We know that hearing loss acts as this invisible acoustic filter. Okay, it distorts and smears or even eliminates some of the sounds that we need. And then we know that distance is our enemy. The further away the sound source is to the listener. the more of an impact it's gonna have in our you know ability to really hear and understand. All of our verbal communication is built upon listening. Okay? So it's not an isolated activity to hear.\n\nEverything is going to build around what that child hears. Okay. But hearing loss being that it's a silent handicap, it's invisible. Can be very easily ignored and underestimated by our parents and our caregivers, by the child as they get older. Okay, so it's so so important. for us to really educate our families on the importance of that full-time device use and making sure that they really understand when the child is not wearing this device, what are they making missing? What do they not have access to and what does that look like?\n\nUm we have an additional bullet for like one thing says only the point of Sorry. Oh I just I didn't click that part yet. So only the negative effects of a hearing loss are visible, right? The fact that the child keeps taking the hearing aids off and throwing them across the room when the ear molds aren't fitting properly anymore because the child's grown and the hearing aids are squealing and beating back, right? When the batteries die. um when the hearing is not working and the parents are troubleshooting the devices, they're just dealing with the negative effects. Okay? Or the child's not able to hear.\n\nOkay? That they're you know when they take the hearing aids out and you know they're they're not able to hear the sound. So the parents just can very easily lose hope and get very frustrated.\n\nAlright, so in order to develop listening and talking skills, early identification and intervention is key. where we want to maximize access to sound when those areas of the brain are developing. We know that we have the majority of those pathways are sort of peaking within the brain That first year of life, based on that Harvard study on the developing child. So we understand that the earlier we identify hearing loss, the earlier we provide intervention. So here Aids, cochlear implants, and RL rehab with a good speech pathologist, the better the outcomes for that child. The most important component of that is vigilant and ongoing Audiologic management. So we need access to a pediatric audiologist that is constantly checking that child's hearing and adjusting their devices based on any changes to their hearing.\n\nThat we have everyone on board monitoring that device for malfunction, right? So if we have a child that has uh hearing aid that's not working, how can you as a speech pathologist identify that? How can you identify hearing aid that's not working? What are the things that you should be doing? Line 10? Okay you're doing that listening check that at the beginning of the session. So I know we learned this for the first exam, but um what are some of the components of a listening check?\n\nWhat do you do As a parent or a speech pathologist or a teacher, if you have a child's device, you need a listening scope, right? So you're putting that listening scope on and you're talking into the microphone at the hearing aid and you're running through those lane 10, you're listening for any distortion, crackling, weakness, that the hearing aid just isn't working, then we're also putting that device on the child and doing a listening check with them when they're old enough to obviously and we're trying to determine what length six sounds they're able to have access to so if in the beginning of a your therapy With that child, they have access to all 10 sounds, are able to appropriately let us know that they heard them. And then several sessions later that changes, includes you in that there could be a problem with it. device okay also auditory skills development we're monitoring those auditory milestones right and so we're looking to see are we are we achieving good auditory milestones. And we're going to talk a lot about that in the auditory training lecture on Thursday.\n\nBut if we have a child that is kind of like stalled in their auditory skills development, what's going on do they have full access to sound so we need that immediate consistent brain access of auditory info so consistent use all week and hours using their devices. We want to make sure that they have access to highly qualified professionals. So this is a problem. We don't have enough um speech pathologists going into um working with deaf career kids we don't have deaf educators specifically in rural areas we don't even have enough deaf educators in the schools and batteries so imagine how bad it is as another rural areas of Louisiana. So this is something that we continue to struggle as a nation, but it's really bad here in Louisiana as well. But if we can have these professors professional listening and spoken language trained speech pathologists and deaf educators, they're going to help train coach the parents to help these children to develop good auditory skills which in turn will help with language cognitive and literacy skills and we really want to have these individuals train the families and so I used to have Shelly Chesney lecture um in this class and she wasn't available this semester but she has this great um image that she shows of this big kind of like um hurricane glass that's filled with white ping pong balls and in the middle of it there is one orange ping pong ball and so Those ping pong balls represent all of the hours in a week.\n\nAnd that one orange ping pong ball represents the one hour. That that child is in therapy with her every week. All right. So if we're not training our families, our caregivers in the strategies of enhanced auditory",
  "terms": [
   "audibility",
   "intelligibility"
  ],
  "definitions": [
   "you can hear something",
   "understand what you heard"
  ]
 },
 "ART1022-1": {
  "source": "9: Well, um, so today we're gonna talk a little bit about auditory training. So we talked a lot in the last two class periods about kind of the foundations for Auditory development. We talked a little bit about our brain needs that stimulation from sound at an early age and how there is a difference in hearing and listening. And so our kiddos that are born deaf and hard of hearing, they're gonna need real training in order to learn to listen. And so um, you know, I think you all understand that that you know kids are getting identified so young um that sometimes that early auditory training has evolved a little bit um just to kind of be integrated into daily activities, right? More informally, really just encouraging those characters to really increase that cost at home and really trying to make that listening a vibrant and conducive to hearing. minimizing background liberation and such.\n10: \n11: But what we're going to look at today is, okay, so when we have our older kidneys, what are some maybe some structures that um auditory training activities and if it community trust really help them learn and listen. So there is a hierarchy of listening skill development. So we have to know where we need to start. We're doing more of that formal training. And interestingly, auditory training is in the scope of practice for an audiologist as well as a speech pathologist. But you're going to see it performed more often by speech language pathologists. And does anybody know why?\n12: \n13: It makes sense they've seen them love, but anybody else want to take a guess? Everything can send them money, right? All the orders will get reimbursed.\n14: \n15: So you see a lot of speech methodologists that take on this and incorporate it into the speech language development sessions. Because they have code that they can reimburse for this.\n16: \n17: I made a couple changes to this PowerPoint this morning. So if you downloaded it yesterday, just know you might see it.\n18: \n19: Okay, so auditory training is a process of teaching a child that hearing wants to take full advantage of Of the auditory cues around them. We try to use everyday activities to foster the development of listening skills. So to try to make it more natural. to like their daily lives and activities. Understanding that listening is something that is learned. It is different from hearing. And so we can actually improve and teach learning to listen through structured practices. practice. It's so important to involve those caregivers and parents because the better the child's parents understand what the child is capable of and they're listening to abilities and what they can do to help nurture and foster those language-rich environments, this becomes really easy and spontaneous in their day-to-day lives.\n20: \n21: Auditory training first and foremost utilizes residual hearing. Okay, so this is not something that we can do. We're not going to teach somebody to listen and talk without utilizing what hearing they have with devices. So hearing aids, cook very plans, assistive devices. We are limited by their hearing. So we'll talk about that a little bit, but we'll think about that space area. If I have a child that has a profound loss, or I should say severe profound loss, and they're using hearing aids. They can't get a cookler implant.\n22: \n23: There are going to be some speech regions that are unattainable. So that's going to restrict some of our auditory training activities. Again, it's a hierarchy, so we're gonna really focus the training on being aware of the presence of sound, attending to it, and then using it. meaningfully. Formal auditory training is a key component for cochlear implant recipients. Individuals that lost a hearings before language acquisitions, so prelingually, and for those with severe and profound loss. So it's not something you really see incorporated to losses of somebody with a mild or mild moderate loss.\n24: \n25: Okay, so we really need to structure and make sure that the child wants to listen with their amplification because it's different than what their natural hearing abilities are. sounds different with a cobra implant with a hearing aid. So we can't just put that device on the child and assume that everything is going to come naturally. Typically with the scope learners. We have to really structure it and teach the child to learn to detect the presence of that sound and interpret it to really maximize their spoken language.\n26: \n27: Bless you. Is that a saints? Yes, okay, so again, early identified is key. So the sooner we identify that this job is a hearing loss and we can find data devices on them and find access To an early intervention program, the better. Okay. This can be very difficult depending on where you live. But the good news is that we actually do Do you have some online national early intervention programs?\n28: \n29: So, for example, if you live in San Antonio, San Antonio has a student called Sunshine Cottage. Sunshine Cottage is a school for children who are deaf cards. So you have this fantastic day program where the kids can go from eight to five every day and it's daycare but it's daycare with deaf educators and spee pathologists to really help work on oral rehab with these children Children. We don't have anything like that here in Bat Rouge. We actually had an oral school in New Orleans that closed a few years ago. So parents can be very limited here. So you see a lot of parents utilizing services through early set where somebody will come to the house and work with those children.\n30: \n31: And then you have some families that will actually seek out some of these online um early intervention programs like the John Tracy Clinic where they can actually apply and receive structured um support and curriculum online to help them of wherever they live. So we have center-based programs and we have home-based programs.\n32: \n33: like early steps. Alright, we have to start somewhere. We have to be able to assess the child's auditory skin. This helps us to determine if we need to do any type of auditory training. It gives us a baseline so that when we start therapy we have something to compare those results to. And it helps us to determine where the child is having the most difficult. So are there specific areas of the auditory training that we really need to concentrate on for that patient.\n34: \n35: The nature of the actual auditory itself depends on the age of the child, their language skills that they already have. And it can vary a lot by the, I should say just the type, but really I'm sorry, the degree, the degree of hearing loss, but type as well. Okay. More severe hearing losses are going to be very different when it comes to their intervention needs from somebody with a mild hearing loss.\n36: \n37: All right, so you have a new young infant just diagnosed with a hearing loss. Okay? So early identification, early intervention. We want to try to help integrate off-story training. This is going to be done very informally for these young children and young infants. Okay. The goal is on helping to really integrate listening skills into their daily lives. That early language listening. We can't take a young child and throw them into the booth and figure out what is their speech perception abilities, right?\n38: \n39: But what are some tools that we talked about that we can use to assess where their artist skills are at this stage for a six-month-old for an eight-month-old. What can we use to try to assess how there are auditory skills are doubled in. Well that's their hearing abilities.\n40: \n41: There you go, those questionnaires that I broke you all into group to work on, right? We have those questionnaires that we can use to to try to informally determine where are their auditory skills developed. Are there areas that we were lacking? And then just that overall observation of the child. Think about the auditory skills checklist we talked about that's in your book. You know, what should they be doing for birth? three months. What should they do if I'm three six months? Let's go and say four. All right, so again, we're limited by the age of the child, their physical and their cognitive abilities when they're very young.\n42: \n43: So we rely more so on formal testing and observation. We're not really thinking about speech perception for those young babies yet, right? What we're really thinking about is like just really helping to integrate like these skills into their daily lives and focusing on their hearing technology. So really making sure in those early months that they have the best access to sound with their hearing aids or their devices. And we we accomplished this by having them see their audiologists regularly and having them test completed and having their devices checked real a regularly. And then again there's parent questionnaires, so think peach. I love the FAPI.\n44: \n45: The FAPI is really detailed and organized. And it has it takes a lot of time, but it gives us a lot of really detailed information. You'll see a lot of They're just using the FAPI when they're trying to determine goals for the child. It's a great resource for that. So I have the FAPI on Moodle. We also had a group work on it class, so I'm not going to go through it. detail but um it's great because it really assesses the child's functional auditory skills it can be used by anybody so speech pathologists parents teachers um and it really really breaks down the auditory skills into seven categories that are hierarchical. So like essentially the skills you need to develop and then what comes As you accomplish each one, they fill upon each other.\n46: \n47: But when I have my older children, now I have ways of getting of obtaining formal in-depth assessments of their auditory skills development and their speech perception ability I can do more with an older child. Okay, so these are just some of the examples of different assessments we can use to assess auditory skills and speech perception. And I put a little disclaimer on it because I didn't have that up. There are several. And so I I took a reference from another textbook and uploaded it to Moodle. Lists of all of the different word recognition assessments that are available that you can use for kids. And these are these assessments are going to be used by the audiologists for word recognition.",
  "terms": [
   "auditory training",
   "hierarchy of listening skill development"
  ],
  "definitions": [
   "integrated into daily activities",
   "know where we need to start"
  ]
 },
 "ART1022-3": {
  "source": "79: All right, so if you look at the perception of speech, it's an evolving process, right? Um We have a lot of different components that build upon our skills to get from being able to detect a sound to understanding what that sound means. Okay. When you're working with very young kids that have very little language um auditory training tends to be more hierarchical in nature the levels are not necessarily discrete benchmarks okay So what I mean is you're not gonna uh master auditory awareness of sound and then move on and you're at discrimination. But rather what happens a lot of times is that a child might be performing some activities at the discrimination level, but also simultaneously be working on identification. And sometimes you think, okay, we've mastered um discrimination.\n80: \n81: back to identification and then the child has some setbacks and you find yourself going back to work on a little bit more discrimination right um you really need to know where child falls with this hierarchy. So Berber's model, sound awareness. I have another picture I'll show you on the next slide. Because sound awareness is also detection. Then we have the discrimination Moving on to identification, and finally the goal is that auditory comprehension.\n82: \n83: So I try to get a lot of examples in this lecture of the various hierarchy activities and goals and objectives so that you have kind of an idea when you have to do this on your work. Alright, so detection of sound or sound awareness it's just the ability to determine the presence or act as access of sound with audition only no visual cues okay so yeah You can have a sound that's present at home and the child is exposed to it and it can take several weeks before the child consistently demonstrates awareness of that sound. It just takes Okay, so let's imagine we have a child birth to six months of age. What are some of their auditory skills development that you all know of? that would indicate awareness of sound. What's something that you would observe on a child that's that young to let you know, hey, I think that they're aware of this sound that I just presented.\n84: \n85: Turning their head to sound, right? What about if they're a little bit younger? What about my birthday? Startling to sound? What about they quiet to sounds or they're sucking on a pacifier and they stop sucking on a pacifier? Right? Those are all good indications that that child has some awareness. to a sound. We might even see a child with increased vocalizing behaviors, but those are just some some ways that we could say the parents can say, hey I noticed yeah he is more aware of sound. um than he was a few weeks ago.\n86: \n87: With older children, we can establish a condition response.\n88: \n89: So when we have our older children, we can actually establish a conditioned response.\n90: \n91: So we are going to actually train them to listen and respond in a set way that we have determined. Okay, so what does that look like? We have to cue them in to know, okay, now we're gonna listen. So they're ready for the task, they're ready to work. We pause, make it quiet, we establish that good eye contact with the child We want to make sure if we're using our voice that we're covering our mouth or we're sitting next to them in a way that they can't watch our facial expression and watch our mouths. Provide sound. and then have the child respond in the way that we've already said. Okay, maybe they're dropping a block in a bucket or maybe they're repeating or whatever it is that we've we have structured that task that they are following through letting us know that they heard the sound\n92: \n93: Okay, so just what can you use for detection? Okay. Yeah, but look at that Fappy. Fappy has a great is a great resource for giving different um different things we can work on. Okay, but so maybe we're working on responding to low loud sounds. So low frequency loud sounds. Maybe it's loud speech. Maybe it's just environmental sounds, a doorbell, a horn honking, a whistle, being able to acknowledge when a sound ceases, right?\n94: \n95: The absence of sound, like we have music on, we turn it off. Or maybe it's when continuous speech stops.\n96: \n97: Okay, there's all kinds of games and activities that we always do with young kids and we don't even think about we could use these for auditory training. Okay? Games like peekaboo, peekaboo. and musical chairs, all right. Um these are great activities that don't take a lot of effort that you can use for auditory training and sound awareness. Too fast.\n98: \n99: Okay, I'll slow down a little bit. Everybody finished on this page.\n100: \n101: Okay, so if you were uh coming up with some objectives for detection, this is just a couple examples. Okay, so maybe they're able to detect that strong So like loud, low frequency voice from one to three feet away from the cookworm type microphone. Maybe the child's able to attend to three loud toys or environmental sounds from a little further away with their iPhone. system. Okay, maybe it's detectoring moderate intensity environmental sounds. Any questions about sound awareness or\n102: \n103: So discrimination of sounds refers to the ability to perceive similarity. and differences between two or more sounds, okay, including speech stimuli. Understand that we're asking them to recognize the sounds when the sounds are the same. And when they are different. Okay, this is not the same thing. This does not mean that the child associates meaning to the sound or that the child can label them. This is just presenting two sounds. Like if I did ah, ooh, the child can tell me those sounded the same or those sounded totally different. Okay, that's discrimination. Not identifying what they heard.\n104: \n105: A lot of times it starts out with your super segmentals. So really just trying to see if they can detect differences in duration of the sound of the intensity of the pitch. This is when it's so important to get as much information on their hearing from their audiologists, getting copies of their unaided audiograms, getting copies of their real-air verification, and are we matching targets? um getting copies of their ABRs. So we're working on discrimination and say we're working we we think we're gonna work on s okay high frequency concept sound and my child has a moderate to profound loss they're in hearing aids and with the best hearing aids in the world they're not gonna\n106: \n107: Should I be working on that? Auditory only? We can't hear it. So it's really important that we know what their auditory cap capabilities are with their devices before we set some of our discrimination goals because if it's a sound that they don't have access to, we can't work on that in an auditory only environment. We can't do monitor training for those sounds. We're gonna have to incorporate those sounds with visual cues.\n108: \n109: Okay, so Some examples of discrimination tasks. Maybe it's having them just mimic the correct number of syllables term. Okay.\n110: \n111: sound patterns of different durations, as I said, the super segmental elements. Repeating symbols syllables that have a fast versus a slow rate. Intensity. You know, can they discriminate the different and whispers and quiet and loud speech? Can they discriminate between sounds that go from high to low and then low to high frequency? Repetition of vowel sounds or lots and lots of different discrimination tasks.\n112: \n113: There's lots of different discrimination activities. So we might have the child discriminate between syllables that are short and long, right? Like beep versus move, um soft and loud like banging a drum versus a very soft clap. You know just more more gross development before we get into the the fire development, um responding to different commands, same different. So with our older kids, like working on car car versus car star, just with that subtle consonant variability in the initial position. Bless you. Okay, some various discrimination objectives.\n114: \n115: Like maybe our objective is to see that They can determine a caregiver voice from a stranger's voice, okay? Um, so think about we can even do this at a much younger level. Like we could be watching a young child, a young infant that smiles from that familiar voice versus the unfamiliar voice giving us some information on discrimination or an angry versus a happy voice okay discriminating between two vocalizations right So lots of different discrimination activities. When we are working on discrimination, okay, just like Auditory listening skills are hierarchical, auditory discrimination is the same. Okay, so it starts out, and if you look in your book, it's table 4. 2.\n116: \n117: that um if you you're rusty on um your speech sounds we have uh a nice little breakdown that categorizes your confidence based on manner place and voicing But at its most basic level, the easiest discrimination task is going to be those super segment segmentals. So if you don't really know where to start with auditory discrimination, you start with And then variations in syllable number, consonant versus vowel, same initial consonant, but different vowels. And we go all the way up into where Difficult is going to be when you have your initial consonant differing in voice. Sorry. Initial consonant differing voice, place, and then final consonant differing. place. Okay, so again, start foundationally with super segmentals and you work up to these higher, more difficult auditory discrimination tasks.\n118: \n119: Okay, so identification. Ability to label the sound that's heard. Okay, so how can they label, how can we get the child to label the sound they're they've heard? They can do what? Think about if I'm doing speech testing. Like raise your hand. Okay. Say they can but if I'm if I want them to identify Raising their hand is awareness, right?",
  "terms": [
   "levels",
   "sound awareness",
   "discrimination level"
  ],
  "definitions": [
   "not necessarily discrete benchmarks",
   "also detection",
   "also simultaneously be working on identification"
  ],
  "checkpoints": [
   {
    "phrase": "the levels are not necessarily discrete benchmarks",
    "label": "Keep the hierarchy flexible"
   }
  ]
 },
 "ART1022-4": {
  "source": "121: They could point. What else could they do? They could repeat it. They could write it down Right, so we have lots of different ways that a child can respond to simuli, letting us know that they they actually identify what it is. Okay, so let's say I have a box of crayons and I tell the child I want you to you give me the blue crayon. Okay, they have to go into that box. They have to find the blue crayon and give me that blue crayon to show me that they know how to identify. But here's the thing about identification.\n122: \n123: requires memory not comprehension okay so they may not understand that oh this is a blue grayon if I draw on it it's gonna be the same color as the ocean or this sky right they just maybe have memorized that that's the blue crayon and this is the red crayon they have their little categories of auditory memory so identification is different in operation\n124: \n125: Okay, so what are some different examples of identification tasks? Maybe we're having them identify words varying in syllable Okay.\n126: \n127: Stereotypic messages. Words which identify identical consonants and different vowels. Okay. So if you think about the slide 29 where we looked at the auditory discrimination hierarchy. We can actually work on identification using that same hierarchy, okay, that we use for auditory discrimination, case in point, words with identical vowels and contents that differ\n128: \n129: of some of those identification objectives. Maybe we have them recognize an adult, produce animal sound, and they associate it with that toy animal, right? We have the toy animals on a table and the adult says, They have to point to what they heard. Again, auditory memory, not but they understand that, oh, I hear this and this is what a cat says. Which is something that we structured train them to do Um recognizing ten words of common objects, or listening to three loud instrument sounds and identifying which one they heard.\n130: \n131: And then just again, candidly is a great game, okay? You know, getting them to learn their colors. Um playing with postcards, show me this, show me that, playing go fitch, give me all your Sevens, give me your twos. This is all identification.\n132: \n133: Okay, so comprehension of sound is the way that we understand that there's meaning behind speech. Okay. and that they understand that meaning and they can answer questions or follow instructions, okay, more than just that memory that we have in identification\n134: \n135: The child has to respond in a way that's qualitatively different. They're not just mimicking or regurgitating what we say. requires advanced auditory skills and also some grammar and vocabulary. So I use the example last class at the doorbell, right? If I was trying to get a child to have sound awareness is that they could hear when the doorbell is pressed or when there is no doorbell, right? They could identify that. Discrimination would be presenting the doorbell on maybe the dog barking and getting to know okay these sounds are the same or they're different. Identification would be that memorization of when you hear that, oh wait, I know what that sound is, that's the doorbell.\n136: \n137: But the conversation comes when the child knows, hey, somebody rang the doorbell. When I hear that doorbell, it's the doorbell and it means that somebody's on the other side trying to come into my house. Okay\n138: \n139: Okay, so some examples of some tax that we can do. to establish comprehension. So we can work with them on auditory sequencing. Okay? So starting with baby familiar expressions and then following single step directions. Maybe following some basic classroom instruction directions and eventually multi-step directions, which is more challenging. Structured listening steps. Reading a story with them and having them recall some of the main details of that story. And then just having that spontaneous conversation is one of our more challenging measures. Answering questions regarding requiring comprehension of just some type of main idea or task.\n140: \n141: Paraphrasing.\n142: \n143: Okay, so some examples of comprehension objectives. Maybe we have the child demonstrate comprehension of two phrases with just audition. Comprehensive uh comprehending increasingly complex requests. Okay? Like not just bring me your socks, bring me your socks and your shoes. Or go into your closet, open the door, bring me your shoes. comprehend and respond appropriately to sentences where we have possessive nouns or pronouns that contrast like where are your eyes? Where are mommy's eyes Where are daddy's eyes?\n144: \n145: Where are the puppy's eyes? Comprehending the meaning of loud environmental sounds. So really understanding what does it mean when that smoke alarm goes off or the doorbell goes off Rings or the carhorn beats.\n146: \n147: And then this is just something I put on here just to kind of get an idea. If you were working with a child with hearing loss and you had to have that kind of formal structured auditory training, this is really awesome. the information that you would want to have, you want to make sure you have like your activity, your goals and your objectives, the materials you need, and then the procedure.",
  "terms": [
   "identification"
  ],
  "definitions": [
   "requires memory not comprehension"
  ],
  "checkpoints": [
   {
    "phrase": "requires memory not comprehension",
    "label": "Keep the distinction"
   }
  ]
 },
 "ART1022-5": {
  "source": "149: All right, so once we have a child that has developed some sound awareness And that's be excuse me. Oh my gosh.\n150: \n151: I've got a tickled my throat and I don't want to cough and make it louder for y'all. Sorry. Okay, so once we have a child that has developed some basic sound awareness and they started to develop some basic language, we can start looking at structuring our auditory training into four different ways. Okay. And we can really start with some analytic, excuse me, I have a call again.\n152: \n153: We can really start with some analytic and synthetic training. And then from there, if we want to challenge, go into pragmatic and eclectic.\n154: \n155: All right, so think analytics to analyze. Okay, we're gonna break our speech down into its smallest component. and work through auditory training. So often we're targeting vowel and consonants with the analytic approach. To really kind of fine-tune and hone in on those skills.\n156: \n157: Just some examples of Our objectives if we're doing an analytic approach to auditory training would be discriminating vowels that differ maybe in first format information, discriminating vowels that differ differ in in their second format. Discriminating words that have vowels with similar first and second formats. Identifying words with different vowels. Identifying words with different vowels that are open\n158: \n159: So again, I have a child that's doing well that I really want to go through and break down some of those individual phones they're struggling with.\n160: \n161: Synthetic, on the other hand, emphasizes a more global approach to speech perception. So we're looking at stressing the use of clues that are d derived from the meaning, from the syntax and context to derive that understanding. So we're using, we're not using those individual phonemes, we're really using meaningful simulator words and paragraphs with the synthetic approach. So maybe some of our object objectives for synthetic be they're going to discriminate between a declarative and an interrogative sentence. But they're able to carry on a conversation independently. They can follow simple instructions and simple commands. And you can have somebody working on analytic and synthetic at the same time, right?\n162: \n163: All right, the pragmatic approach. These are training the listener to take control of their listening environment and their communication. So think about think about um a teenager that You're trying to help empower them to advocate for themselves. So they're in this stage of their skills development where it's like we want them to be able to go into a room and identify. Why can I not hear well? Why can I communicate well in this environment? What are things that I can control? So can I control the level of speech, right?\n164: \n165: Can I move close? who do the speaker and I ask them to speak up. Is there anything I can do about the signal to noise ratio in the classroom to make it better? Um is there anything I can do to help me understand really the concept context of the message that we're talking about. So train the listener to control those communication variables. Okay? Think conversation repair strategy. I don't know if you've heard me say that before, but these are things that I work with my hearing-impaired adults. You know, conversation repair.\n166: \n167: If you're struggling to hear what are the things within your control that you can try to isolate and make and improve. So that you could hear and communicate better. Questar is a great tool. So I pulled this up for you, let you see this. It's in your book on page 132. I know you probably can't read that because it's tiny, but essentially the patient's given a series of questions that are related to a certain topic. So like where Where did you go? Museum, restaurant, post office, okay? Like you the clinician picks the topic.\n168: \n169: The patient asks the clinician each question. Okay Okay, so um where did you go, the beach? And the child say, you went to the beach. And then we move on to the next one. Why did you you go there? I wanted to get go on vacation and get a break for my kids. So the child would say, okay, you wanted to go on vacation and get a break from your kids. So essentially what's happening is the clinician is answering each question and the patient has to correctly repeat the answer given before moving on to the next question.\n170: \n171: Okay. This can be done in auditory only. It can be done auditory with visual cues but it kind of just tries to help go through kind of these um very structured scenarios that the child gets an understanding of like of that conversation and And kind of what do we do when I don't hear something? So say for example, um, when did you go? And I said June, and the child can't correctly repeat June. What are some things that they can do? What are some things that they can ask to get to that answer um correctly? You know, did you say June or did you say soon?\n172: \n173: You know know did you um did you say june and then you went over the summer so it kind of they can go from there when they struggle um to get the information in and move forward\n174: \n175: And then eclectic is kind of like your land map. It combines most or all the strategies that we combined. So I think said you could be working on synthetic and analytic at the same time, right? So those are just kind of what we call our classical classical approaches to auditory training, but um they can be used in more of an example collective approach that's specific to each child's individual needs.",
  "terms": [
   "analytics",
   "synthetic"
  ],
  "definitions": [
   "break our speech down into its smallest component",
   "emphasizes a more global approach to speech perception"
  ]
 },
 "ART1022-6": {
  "source": "177: Alright, so when it comes to our goals in auditory training, there's a lot of variability that can be manipulated to make something more or less So when you're coming up with your goals, it's very easy to structure them a way that you can build these skills. Most important thing is that we want to when we're talking about varying the difficulty we want this task to be challenging but not frustrating where the kids want to give up hope okay so if you think about difficulty level as a rule we typically say that if somebody's responding correctly to auditory training 80% of the time or more we have a pretty good difficulty level but in this case if the person's having difficulty and they respond correctly less than 50% of the time that task is too difficult for them. Make this fun. So this is going to be most beneficial if we are using things that are happening in the child's day-to-day life to help develop our auditory training.\n178: \n179: So when it comes to auditory training, there are really four design principles. So essentially, we know we have to start with our hierarchy of listening skills. Okay, so when it comes to auditory skills, are we starting with sound awareness, discrimination, identification, or comprehension. So we rely heavily on those assessments we did to kind of figure out where we're going to start in regards to auditory skills. We also needed to determine what type of stimuli we started with. So we started with more of an analytic kind of phonetic level, or we started with more of that synthetic sentence level, more meaningful. Stimuli. And then with our activity type, are we structuring this very formally? More one-on-one intervention, or is this more of an informal auditory?\n180: \n181: training approach. Something that's taking place in the home with caregivers. Difficulty level is something that we can really vary. I have another slide where we're going to go through and look at all the ways that we can really Mary the difficulty level.\n182: \n183: Okay.\n184: \n185: All right, so again we know our um auditory hierarchy that we have to start with. Sound awareness, detection, discrimination, or um identification. Um activity type could be informal, as I just said, like part of the daily routine. We talk to the parents and caregivers and they're just incorporating this into some of their regular activities or they're going into that center and they're doing that one-on-one training with their educator or their speech pathologist.\n186: \n187: I'm sorry my dashes don't really line up, but if you look at each one of these, I think it goes with one of these categories. My category kind of go off off the page. But there are a lot of things we can do to vary the difficulty level. So when it comes to our stimulus, okay, we know that a closed set is going to be our easiest test They have a finite number of choices. And then we can give limited choices. And then if we're using open set stimuli, that's going to be our most difficult. Stimulus unit is going to be a lot easier when we're doing phoneme detection. And then we move up to syllable word and sentence, sentence being more difficult.\n188: \n189: Similarity. The more dissimilar, like if I said ice cream cone versus um dog, right? That sounds very different. That's a lot easier if I'm doing a discrimination task to identify. But if I do um I do like um bear and bear and pear, right, that's gonna be a lot much more difficult because they are so much more similar. The more context we have, the better. So higher contextual support is going to be a lot easier than when we have less knowledge of the context of the conversation more structured activities are going to be a lot easier than those spontaneous conversations and then we also can vary the listening conditions so signal to noise ratio when it's nice and quiet it's gonna be a much easier environment than when we have background noise so we can alter so we can have a goal that we are working on for a while but we just keep changing and varying the difficulty level and it becomes a new goal.\n190: \n191: So if you feel like you have a hearing impaired caseless and you are just terrified because you don't remember anything we talked about this class and you really don't know where to start in the different approaches on your own. There are some very structured cookbook formal auditory training programs that you can purchase and you can use this and they will walk you through the assessment of auditory skills and speech perception abilities. and give you the exact goals, objectives, and tasks that you're going to do. So some of these include the spice, learning to listen around the clock or listen and talk around the clock, the cottages, which is also called the castles. But this is this was developed by Sunshine Cottage in San Antonio. And I should say that this spice was developed by the um central institute of the deaths which is in st louis and then we have the dazzle and the sky high and I used to love to break you all into groups like I did with the questionnaires and have each group provide a summary, but it's getting harder and far harder to find free information on these because I do want you to purchase them.\n192: \n193: So I give you a little snippet about each one so that if you end up going out and wanting to purchase one of these you'll kind of know which ones to look at. Alright, so the Dazzle 2. Stands for Developmental Approach to Successful Listening. Again, these are all going to be hierarchical. So this is a good one for preschool and school-age kids. And it emphasizes three areas of auditory skills development. So awareness, phonetic listening, and auditory comprehension.\n194: \n195: The spice. This is a really good moon for kids with severe and profound losses with hearing aids. It contains goals and objectives with four different levels. levels of speech perception. So it uses detection, supra-segmentals, vowel contact perception, and connected speech. We're going too fast when we sky high. Sky high is actually in the book.\n196: \n197: All right, so sky high. Comprehended my identification and hope intervention curriculum, developmentally based auditory steel line training program. This one is has four phases that range from age four to seven months up to 12 to 18 months. And so you can see here it shows phase one at four to seven months. You know what are some of the skills and the early ventilizations you can expect. into phase four twelve to eighteen months.\n198: \n199: It's used in conjunction with language speech simulation and this uh those four phases I just showed you and eleven general skills that they're going to develop\n200: \n201: The cottage, or maybe I should say castles, which is from Sunshine Cottage. This is an age range of about four to eight years. And so it's really looking at the development of language, listening, cognition, and speech. The skill addressed include sound awareness, phonetic listening, super segmentals, bowl and consonants, vocalization and phonetic level speech, all the way up to phonological level speech. So you see some Similarities in some of these things. line is that we're when you're trying to determine an auditory training program, find one that's going to best meet the needs of the child and the families. know that you really aren't going to go wrong. They're all based on those same principle principles, which is herbers levels of auditory skills.\n202: \n203: Development. All right, when you're thinking about goals. You can get really into the weeds with goals and get you know stressed out, but just remember that there are so many different um resources that you have access to to help you determine some of those auditory training goals. Okay. When you're coming up with your goals and when you're coming up with your objectives, they should lead to some type of Measurable results, right? So think about your SMART goals. So we should have measurable results.\n204: \n205: We should have an explicit time frame that we establish those goals um and then we should make sure that these are representing a milestone towards achieving that these objectives are working towards achieving these goals\n206: \n207: So if I go to Moodle, I have a couple different um resources here. So just something when you're thinking about and this can be used for anything besides auditory training as well, but when you're writing goals, um just some things that you really need to consider. So am I going to ask the child to imitate this or is this going to be a spontaneous response? Do I want this to be immediate or am I gonna give them a delayed kind of process and kind of come up with their their response? Verbal or non-verbal? Um am I going calculate the percentage correct or am I going to do a certain number of files? Um how many sessions until I think they should acquire this gold?\n208: \n209: Am I going to cue them to listen or am I going to take away that What kind of cue am I going to provide? How much cueing am I going to allow? Am I going to alter the signal-to-noise ratio? How long is this extra activity going to be for the kids that are using verbal communication and signing. Am I going to use signs or is this going to be just auditory? Familiar versus unfamiliar setting, stimuli, communication partner. So there are lots of things that you can think about when you're writing goals to make your goals more um diverse.\n210: \n211: And just a few examples of AR goals. So remember I told you I love the fact So look at the FAPE. So these are some goals that were developed just from the FAPE. So the child will respond to loud environmental sounds or noise makers. They're going to respond to respond to music or speech. Um they're gonna be aware of their own vocal production. So anywhere that when you're calculating the FAPI that um it's in process or hasn't emerged yet, those are great opportunities to use for goals.\n212: \n213: Remember, I talk about the importance of audition, of utilizing their devices and learning to listen. So a goal that that every audiologist or SLP should have on for a child with hearing loss is that they're tolerating their amplification or that they're wearing it all waking hours. Because we want to make sure that we're staying on top of that we're we're prioritizing how important that is to everything else. I tell that to students working in the adult clinic all the time. It's like I have a client with hearing aids and I need to come up with a goal and I was like Are they wearing their hearing aids? Well not really. Okay, well that's one of your main goals right there is to try to get them to work up to wearing them all day long.\n214: ",
  "terms": [
   "varying the difficulty",
   "auditory skills",
   "stimuli"
  ],
  "definitions": [
   "challenging but not frustrating",
   "sound awareness, discrimination, identification, or comprehension",
   "phonetic level",
   "sentence level"
  ]
 },
 "ARTB4-111": {
  "source": "4 • Auditory Stimulation in Communication \n111 \nprocess. Spoken communication starts with a source or speaker who has both a prnpose for \nengaging in communication and the ability to properly encode and articulate the thought \nto be conveyed. The actual thought to be expressed is termed the \"message:' The message is \nmade up of auditory stimuJj organized in meaningful linguistic units. Visual and tactile cues \nare also provided by the speaker in conjunction with the production of the auditory message. \nAnother critical component of the process is the audHory feedback provided to the speaker \nwhile producing speech, which then provides an opportunity for any needed adjustments \nor corrections to occur. The communjcation situation in which the message is conveyed \nis referred to as the \"environment.\" Factors associated with the environment may include \ncompeting background noise, the number of speakers, amount of light in a room, and rever-\nberation. These factors can drastically alter the amount and quality of the communication \nthat takes place, not to mention the effort of the Listener. The final major component of the \ncommunication process is the receiver or Listener, who is charged with the responsibility of \nreceiving and properly decoding and interpreting the speaker's intended message. The Listener \nalso provides additional feedback to the speaker about how the message is being received. \nThese basic components of the spoken communication process and their sequence are \nfound in Figure 4-1. All the major components are equally important in accomplishing the \ndesired end: effective communication. Disruption or elimination of any one part may result in \npartial or complete failure of the communication process. Proper application of this commu-\nnication model is of concern to us throughout the chapter and the entire book. \nAuditory Perception \nOur ability to communicate verbally with others depends to a great extent on the quality \nof orn auditory perception of the various segmental (individual speech sounds) and supra-\nsegmental (rate, rhythm, intonation) elements that make up speech. The following sections \nfocus on the basic aspects of auditory perception: the intensity, frequency, and duration \ncomponents of speech and transitional cues. The impact of hearing loss on speech percep-\ntion is also discussed. \nlc=C'' J l I \n(51 \nSource \n-\nMessage \n-\nReceiver \n(Speaker) \n(Auditory and Visual) \n-\n(Listener) \nI \nI \nEnvironment \nn1rt1u;jiil A simple model of the oral, or verbal, communication process. \n",
  "terms": [
   "message",
   "environment",
   "receiver or Listener"
  ],
  "definitions": [
   "The actual thought to be expressed",
   "The communjcation situation in which the message is conveyed",
   "receiving and properly decoding and interpreting the speaker's intended message"
  ]
 },
 "ARTB4-112": {
  "source": "112 \nIntroduction to Audiologic Rehabilitation \nThe normal development \nof speech and language \nis heavily dependent on \nthe infant's acquisition of \nauditory skills. \nDetection simply involves \nknowing that a sound \nis present, whereas \ndiscrimination is the \nability to distinguish when \ntwo separate sounds are \ndifferent. \nDevelopment of Auditory Skills \nIt is both important and amazing to realize that the tmborn infant possesses a functional \nauditory system that aUows the child to begin perceiving aurutory stimuli prior to birth. \nThis is foUowed by further development and refinement in the neonate's auditory-processing \nskills in the days and weeks immeruately following birth. As a result, the newborn infant \nnot only can detect auditory stimuli (i.e., knowing a sound is there) but also can make gross \ndiscriminations (i.e., tell the rufference) between various auditory signals on the basis of \nfrequency and intensity parameters. This process of selective listening is extended to speech \nstimuJi within a few weeks following birth. The rather rapid emergence of auditory skiUs, \nas described by Northern and Downs (2014), is crucial for the development of speech-\nprocessing abilities as well as for the development of speech and language in the infant. The \ndevelopment of auditory and speech-language skills can be seriously impacted with hearing \nloss, making newborn hearing screening and early intervention particularly important for \nspoken language development. \nBasic Perception Abilities \nAlthough the human auditory system has sophisticated perceptual capabilities, it is limited, \nto some extent, in the signals it can process. OptimaUy, the normal human ear is capable \nof perceiving auditory signals comprising frequencies ranging from about 20 to 20,000 Hz. \nStimuli made up entirely of frequencies below and above these limits cannot be detected. \nIntensity limits, as shown in Figure 4-2, vary as a function of the frequency of the aurutory \nstimulus. The maximum range of intensity we are capable of processing occurs at 3000 to 4000 \nHz and varies from about O dB SPL to approximately 130 to 140 dB SPL. Signals with intensity \n140 \n120 \nen 100 \n.... ' \n~ \n' \nai \n80 \n\\ \n> \nQ) \n_J \n\" \n60 \nc: \n:::, \n0 \nCl) \n40 \n20 \n0 \n20 \nThreshold of Feeling \nAuditory Response Area \nMinimum Audibility Curve \n50 \n100 \n200 \n500 \n1K \n2K \nFrequency (Hz) \nI \nI \nI \nI \nI \n,, ,, \n5K \n10K 20K \nn1rt1ij;jiWJ The auditory response area for persons with normal hearing. \nAdapted with permission from Durrant & Lovrinic (1995). \nI \n\" \n",
  "terms": [
   "Detection",
   "discrimination"
  ],
  "definitions": [
   "knowing that a sound \nis present",
   "ability to distinguish when \ntwo separate sounds are \ndifferent"
  ],
  "checkpoints": [
   {
    "phrase": "Detection simply involves \nknowing that a sound \nis present, whereas \ndiscrimination is the \nability to distinguish when \ntwo separate sounds are \ndifferent.",
    "label": "Compare the response demands"
   }
  ]
 },
 "ARTB4-113": {
  "source": "4 • Auditory Stimulation in Communication \n113 \nof less than O dB SPL are generally not perceived; in contrast, signals in excess of 130 to \n140 dB SPL produce the sensations of feeling and pain rather than hearing. \nIn addition to detecting acoustic signals, the human ear can also discriminate different \nstimuli on the basis of only minor differences in their acoustic properties. Our ability to \ndiscriminate changes in the frequency, intensity, or duration of a signal is influenced by the \nmagnitude of each of the other factors. Stevens and Davis (1938) estimated that the normal \near is capable of perceiving approximately 340,000 distinguishable tones within the audible \nrange of hearing. This total number was based only on frequency and intensity variations of \nthe stimuli, but it suggests that our auditory system possesses amazing discrimination powers. \nAcoustics of Speech \nKnowledge about the acoustic properties of speech is important for understanding how \nspeech is perceived. Therefore, basic information relevant to this process is covered in the \nfollowing sections. \nIntensity Parameters of Speech \nThe normal human ear is capable of processing signals within an intensity range approaching \n130 dB; however, the range of intensity normally found in speech is relatively small. The \naverage intensity of speech, when measured at a distance of approximately 1 meter from \nthe speaker, approximates 65 dB SPL. This corresponds to a value of about 45 dB HL when \nexpressed audiometrically. The average shout will approach 85 dB SPL (65 dB HL), and faint \nspeech occurs at about 45 dB SPL (25 dB HL). Thus, a potential range of about 40 dB exists \nbetween the average intensities found within the softest and loudest speech we are exposed \nto in common communication situations. Distance between the speaker and listener can \ninfluence the actual intensity levels for a given communication situation. \nConsiderable variability exists in the acoustic energy normally associated with individual \nspeech sounds. Table 4-1 lists the relative phonetic powers of the phonemes, as reported by \nTABLE 4-1. Relative Phonetic Power of Speech \nSounds as Produced by an Average Speaker \nCl \n680 \nI \n100 \nt \n15 \na \n600 \nI \n80 \ng \n15 \nA \n510 \nI] \n73 \nk \n13 \nre \n490 \nm \n52 \nv \n12 \nv \n460 \ntr \n42 \n0 \n11 \n£ \n350 \nn \n36 \nb \n7 \nu \n310 \n<i3 \n23 \nd \n7 \nI \n260 \n3 \n20 \np \n6 \ni \n220 \nz \n16 \nf \n5 \nr \n210 \ns \n16 \ne \n1 \n",
  "terms": [
   "average intensity of speech",
   "average shout"
  ],
  "definitions": [
   "approximates 65 dB SPL",
   "approach 85 dB SPL (65 dB HL)"
  ]
 },
 "ARTB4-114": {
  "source": "114 \nIntroduction to Audiologic Rehabilitation \nVowels are produced with \ngreater intensity than \nconsonants. \nFletcher (1953). As iUustrated, the most powerful phoneme, /':J/, possesses an average of about \n680 times as much energy as the weakest phoneme, /0/, representing an average overaU differ-\nence in intensity between the two speech sounds of approximately 28 dB. Since a considerable \namount of variability also exists in the intensity of individual voices, Fletcher estimated that, \ncollectively, different speakers may produce variations in the intensity of these two phonemes \nas great as 56 dB. The relative power of vowels, according to Fletcher, is significantly greater \nthan that of consonants, with the weakest vowel, /i/, having more energy than the most \npowerful consonant. \nFrequency Parameters of Speech \nThe overall spectrum of speech, as seen in Figure 4-3, is composed of acoustic energy from \napproximately 50 to 10,000 Hz (Denes & Pinson, 1993; Neel, 2010). Closer examination of thjs \nfigure also reveals that the greatest amount of energy found in speech generaUy is associated \nwith frequencies below 1000 Hz. Above this frequency region, the energy of speech decreases \nat about a 9 dB/octave rate. The concentration of energy in the lower frequencies can be attrib-\nuted largely to the fundamental frequency of the adult human voice (males, 130 Hz; females, \n260 Hz) and the hjgh intensity and spectral characteristics associated with the production of \nvowels. As shown in Figure 4-3, the greatest energy for speech from biological males is around \n500 Hz. Thjs is due to resonance in the vocal tract rather than just fundamental frequency. It \nshould be noted that the fundamental frequency of children is substantially hjgher than that \nof adults, around 400 Hz (Hegde, 2010). As a result, the major energy concentration for this \nage group occurs higher on the frequency scale than for adults. \nA key aspect of speech production and perception is the information associated with the \nsegmental elements of speech. The segmental components consist of the numerous features \n80 \n(\\/ \n70 \n~ \n~ \nw \nz \n60 \n~ \nC\\J \n0 0 \n50 \n0 \n0 \na> \na: \n40 \nOJ \n:2. \n~ 30 \n:;j \n(/) \n(/) \n~ \na.. \n20 \n10 \n2 \n4 \n6 \n8 \n2 \n4 \n6 \n8 \n100 \n1000 \n10000 \nFrequency (Hz) \nn1rt1ij;ji6i Long-interval acoustic spectrum of male voices. Measurement \nmade with microphone 18 inches from speaker's lips. Source: Miller (1951). \n",
  "terms": [
   "Vowels",
   "overall spectrum of speech"
  ],
  "definitions": [
   "produced with \ngreater intensity than \nconsonants",
   "approximately 50 to 10,000 Hz"
  ]
 },
 "ARTB4-115": {
  "source": "4 • Auditory Stimulation in Communication \n115 \nassociated with the individual vowel and consonant phonemes of the language. The vowels \nin English are composed mainly of low- and midfrequency energy and, as indicated earlier, \ncontribute most of the acoustic power in speech. Specifically, the frequency spectrum of \neach vowel contains at least two or three areas of energy concentration that resuJt from the \nresonances that occur in the vocal tract during phonation. These points of peak amplitude \nare referred to as formants, and their location and pattern on the frequency continuum are \nunique for each vowel. Figure 4-4 iUustrates the approximate location of the major formants \nassociated with the vowels, as spoken by adults who are biologicaUy male. Formants provide \nimportant acoustic cues for the identification of vowels. However, it is important to note that \neven though each of the vowels has several formants, we need to hear only the first two or \nthree to be able to accurately perceive the vowel spoken (for a review, see Kent & Vorperian, \n2018; Peterson & Barney, 1952). \nThe consonants in English display a broader high-frequency spectral composition than \ndo vowels. This is particularly true for those consonants that do not use voicing and whose \nproduction involves substantial constriction of the articulators. Although they contain rela-\ntively Little overall energy, or intensity, when compared with vowels, consonants are extremely \nimportant in determining the intelligibility of speech. Consequently, accurate perception of \nconsonants is vital. \nFigure 4-5 contains estimates of the combined intensity and frequency values generally \nassociated with the individual speech sounds in English. Specifically, the vertical axis presents \nthe intensity levels in dB HL of the major components of each sound (if a particular sound \nhas more than one major frequency component, each is noted by the same phonetic symbol), \nwhile the horizontal axis expresses the general frequency region associated with each speech \n3 -\nN \nI \n2 -\n:::::.. \n~ \nc: \nQ) \n:, \nCT e \nLL \n1 -\n'T \n2240 \n~ \n....§§Q___ \n-~-':-1 :- -:-!:- 'T T \n_ 2_1\n0_ T \nT _3_'°_ \n0 --~-+-,~~--,~~~--~~~+--~~--+-~~~-+-~~---1,~~~-+--,~~ \ni \nr \n£ \nce \na \nJ \nu \nu \nEnglish Vowels \nn1rt1ij;jiMN Mean values of formant frequencies of vowels of American \nEnglish for adult males. Source: Peterson and Barney (1952). \nFormant refers to a band \nof frequencies that are \nresonated, or boosted in \nenergy, by the vocal tract. \nConsonant perception \nplays a major role in \ncomprehending speech . \n",
  "terms": [
   "formants",
   "vowels",
   "consonants"
  ],
  "definitions": [
   "points of peak amplitude",
   "low- and midfrequency energy",
   "broader high-frequency spectral composition"
  ]
 },
 "ARTB4-116": {
  "source": "116 \nIntroduction to Audiologic Rehabilitation \nVoicing, nasality, duration, \nand place of articulation \nare key distinctive features \nfound in speech. \n125 \n0 \n20 \ng 40 \nz \n~ \n....J \nI \nco \n\" \n60 \n80 \n100 \n250 \nv \nz \nb \na \nd~ ~ \nd \nI. \nI) \nI \n500 \nu e \n0 \nFrequency (Hertz) \n1000 \nm n t 5 \n( \nI) \nu r \n- fl \nla! \n2000 \n4000 \n8000 \ne \na \n5 \n-\n~ \nvf z \nh k \ng n \nd \nd-i; \nm \ntf \nr \nI IJi \nr \nEe \nii! \nn1rt1ij;jia.i Intensity and frequency distribution of speech sounds in the \nEnglish language. The values given should be considered only approxima-\ntions and are based on data reported by Fletcher (1953) and Ling and Ling \n(1978). Sounds with more than one major component appear in more than \none location in the figure. \nsound. A close inspection of this figrne discloses, as indicated earlier, that the vowels can \ngenerally be characterized as having considerable acoustic energy, for the most part confined \nto the low- and midfrequency range. On the other hand, the consonants demonstrate decid-\nedly less intensity overall and a much more diffuse frequency distribution as a group. The \nvoiced consonants generally possess a greater amount oflow- and midfrequency energy, while \nthe unvoiced consonants are made up of mid and high frequencies. All consonants appear in \nthe upper portion of the figrne, reflecting their weaker intensity values. \nIn addition to the spectral properties associated with each of the consonants, it is impor-\ntant to identify the frequency characteristics related to the distinctive features associated \nwith the production of these phonemes. MiJler and Nicety's (1955) classification system \nincludes five features: voicing, nasality, affrication, drnation, and place of articulation. The \nvoiced-voiceless distinction, as well as cues for nasality and affrication, is primarily carried by \nlow-frequency energy. Information about place of articulation, on the other hand, is contained \n",
  "terms": [
   "distinctive features"
  ],
  "definitions": [
   "Voicing, nasality, duration, \nand place of articulation"
  ]
 },
 "ARTB4-117": {
  "source": "4 • Auditory Stimulation in Communication \n117 \nin the higher frequencies. Table 4-2 categorizes each consonant phoneme by its place and \nmanner of articulation and voicing features. \nAnother major component of speech is the suprasegmentals. The suprasegmental aspects \nare those features that are present in speech but are not confined to any single segment or \nphonemic element. Suprasegmental features, such as intonation, rhythm, stress, and pitch, \nare superimposed throughout speech as overall features. The suprasegmentals convey impor-\ntant information for speech perception, and this information is conveyed primarily in the \nlow frequencies through acoustic cues associated with the fundamental frequency and other \nrelated aspects of speech. \nTemporal Parameters of Speech \nThe duration of individual speech sounds in our language covers a range from about 20 to \n400 msec (Fletcher, 1953; Lehiste, 1976). A number of factors can significantly influence the \nduration of a given phoneme, making the direct comparison of duration among phonemes \ndifficult. However, vowels generally have a longer duration than consonants. Fletcher ( 1953) \nconsidered vowels to have average durations of between 130 and 360 msec, while the duration \nof consonants ranges from 20 to 150 msec. In spite of variations in absolute durational proper-\nties, individual phoneme duration does contribute toward speech perception. For example, \nMinifie (1973) pointed out that the duration of stop consonants (e.g., /p/ and /b/) varies \nsystematically in a vowel-consonant-vowel context, with correct perception of the speech \nsound depending, to a degree, on the durational property of the phoneme produced. \nAs we all know, the overall rate of speech differs considerably from speaker to speaker. \nFor example, children's speech-sound durations are longer than adults' (Munson, 2001; Smith, \n1978). The research of Goldman-Eisler, as discussed by Lehiste (1970), demonstrates that the \naverage rate of speech used during connected discourse ranges from about 4.4 to 5.9 syllables \nper second. The normal rate of speech, as expressed in phoneme output, averages about 12 \nphonemes per second but can approach 20 phonemes when the speaker is excited (MacKay, \nThe segmental components \nof speech are the features \nassociated with the \nindividual speech sounds. \nThe suprasegmental \ncomponents (rhythm and \nprosody, pitch , rate) are \noverall features of speech \nthat are superimposed on \nphonemes and words. \nThe duration of vowels \ngenerally is longer and \nhigher intensity than for \nconsonants (Munson, \n2018). \nTABLE 4-2. Categorizing Consonants on the Basis of Manner and Place of Articulation \nand Voicing \nPlace of Articulation \nManner of \nArticulation \nBilabial \nLabiodental \nLinguadental \nAlveolar \nPalatal \nVelar \nGlottal \nPlosives or \np \nt \nk \nStops \nb \nd \ng \nFricatives \nf \ne \ns \nI \nh \nv \n0 \nz \n3 \nAffricates \ntf \n<l3 \nNasal \nm \nn \nI) \nLiquid \nI, r \nGlide \nw \nj \n",
  "terms": [
   "suprasegmental aspects",
   "duration of individual speech sounds"
  ],
  "definitions": [
   "features that are present in speech but are not confined to any single segment or \nphonemic element",
   "range from about 20 to \n400 msec"
  ],
  "checkpoints": [
   {
    "phrase": "The suprasegmental aspects \nare those features that are present in speech but are not confined to any single segment or \nphonemic element.",
    "label": "Locate the feature"
   }
  ]
 },
 "ARTB4-118": {
  "source": "118 \nIntroduction to Aud iologic Rehabi I itation \nTransitional cues result \nfrom the influences of \ncoarticulation of individual \nspeech sounds when \ncombined into words, \nphrases, and so on. \n1987). Thus, the articulatory process is swift and capable of producing a flood of speech \nsounds and words that must be processed as effectively by the receiver, or listener, as they \nwere produced by the speaker. Both of these are challenging tasks! \nTransitional Cues \nThe intensity, frequency, and durational properties of a given phoneme spoken in isolation \nare altered significantly when the phoneme is produced with other phonemes in conversa-\ntional speech. In conversational speech, the dynamic movements of the articulators in the \nproduction of adjacent phonemes produce acoustical byproducts, termed \"transitional cues:' \nThese cues make up a large portion of the total speech signal and are very important in the \nperception of speech since they contain valuable information related to individual phoneme \nperception, especially for diphthongs and consonants. \nFor example, the second and third formants of vowels often contain transitions in \nfrequency produced by the flowing movement of the articulators that signal the presence of \nparticular consonants that immediately follow. These formant transitions occur as the vocal \nresonances shift during articulation of vowels and consonants, which are combined in speech. \nLikewise, the durational aspects of vowels in connected speech can be altered to convey infor-\nmation regarding the phoneme to follow. For example, a voiced consonant in the final position \nis often accompanied by increased duration of the vowel immediately before it. The prolonged \nvowel duration contributes to our perception of voicing in the consonant that follows. This \nis an example of why formant transitional cues are a vital part of the speech signal and of \nspeech perception. This coarticulation can affect the sound patterns and presumed acoustic \nproperties of sounds based on the combination occurring within words and sentences (Fowler \n& Saltzman, 1993; Ohala, 1993). \nSpeech Perception and Comprehension \nOur discussion has emphasized the segmental and suprasegmental aspects that constitute \nspeech. The organization and production of these crucial elements into a meaningful spoken \nmessage by the speaker and the accurate reception of this dynamic signal by the listener \nrepresent a highly complex, sophisticated process. However, just because the listener detects \nthe segmental and suprasegmental elements of speech, does not mean the listener translates \nthese sounds into proper understanding or comprehension of the message. The detection of \nspeech by the auditory mechanism is only a first step in its perception. \nIn its most basic form, the perception of speech may be thought of as involving several \nimportant components, including: \n• Detection: This basic aspect of auditory perception simply involves being aware \nof sound. The primary question asked related to detection is, \"Do you hear the \nsound?\" The answer to this question is \"yes\" or \"no:' Our ability to detect speech is \ninfluenced by our hearing acuity and the intensity level of the speech signal. \n• Discrimination: Speech discrimination refers to the ability to distinguish among the \nindividual speech stimuli (phonemes, syllables, etc.) of our language. The question \nasked related to discrimination is, \"Do the two sounds sound the same or different?\" \n• Identification: The ability to repeat or label what one has heard by pointing to or \nnaming. The identification-related question is, \"What is that sound?\" The larger the \n\"set;' the more challenging this question is to answer. The AR clinician can use set \nsize as a way to support and/or challenge the client. \n",
  "terms": [
   "Transitional cues"
  ],
  "definitions": [
   "result \nfrom the influences of \ncoarticulation of individual \nspeech sounds when \ncombined into words, \nphrases, and so on"
  ]
 },
 "ARTB4-120": {
  "source": "120 \nIntroduction to Audiologic Rehabilitation \nConsonant perception tends \nto be disrupted more by \nhearing loss than vowel \nperception does due to \nthe lower frequency and \nincreased intensity of most \nvowels. \nThe redundancy of \nspeech relates to its \npred ictabi I ity-the greater \nthe redundancy, the better \nthe odds wi 11 be that a \nlistener can guess what \nwas said , even when they \ndid not hear the entire \nmessage. \ngeneral patterns of speech perception difficulties were previously observed for persons \nwith hearing loss. Previous research explored the minimal difficulty in vowel perception \n(Owens et al., 1971). Only when the degree of the hearing loss is severe to profound does \nthe perception of vowels become significantly altered (Erber, 1979). Consonant perception, \nhowever, presents a far more difficult listening task for those with hearing loss. Specifically, \nthe phonemes /s/, Ip/, /k/, /d/, and /t/ are among the most frequently missed by adults with \nsensorineural hearing loss (Owens, 1978) without audiologic intervention. The most common \nerrors in consonant phoneme perception occur with the place of articulation feature, followed \nby manner of articulation. Errors in the perception of nasality and voice among consonants \nare generally far less frequent. \nPrevious investigations (Owens et al., 1972) confirmed that patients with high-frequency \nhearing loss, a sloping configuration of the audiogram, experience more difficulty perceiving \n/s/, !JI, /tf!, and /d3/, as well as /t/ and /8/ in the initial position only. These phonemes became \nincreasingly difficult to hear accurately as the steepness of the sloping high-frequency hearing \nloss increased. Correct recognition of /s/ and the initial /t/ and /8/ were found to be closely \nrelated to hearing sensitivity above 2000 Hz, while perception of !JI, !lf/, and /d3/ was very \ndependent on sensitivity between 1000 and 2000 Hz. Similar findings suggested that, even \nwith well-fit hearing technology, high-frequency phoneme perception may be difficult to \nachieve for individuals with hearing loss (Stelmachowicz et al., 2001). \nAs can be seen, the degree of difficulty in speech perception is closely related to the \nintensity and frequency features of speech and the intensity and frequency features of the \nhearing loss found on the conventional audiogram. However, difficulty with speech percep-\ntion can also be influenced by other related variables that are discussed elsewhere in this \nchapter and throughout the text. Therefore, while the audiogram usually is our most useful \nsingle predictor of a person's speech perception abilities, other factors to be discussed in the \nnext section must be considered as well. For cochlear implant outcomes, common predic-\ntion models can include duration of hearing loss, preoperative levels of speech perception, \netiology, age of implantation, and preoperative hearing levels (Velde et al., 2021 ). \nRedundancy and Noise \nThe perception of speech is a highly complex process that involves more than the acoustics \nof speech or the hearing abilities of the listener, even though these are important variables to \nbe sure. Ultimately, for oral communication to be successful, sufficient information must be \npresent in the message of interest for it to be perceived. The amount of information available \nfor a given communication situation is closely associated with the concepts of redundancy \nand noise. \nConversational speech generally can be described as being highly redundant. That is, \nit contains information from a variety of sources that is available for a listener to use in \ncomprehending a message, even though portions of the communication may not have been \nheard. The degree of redundancy in oral communication varies from one expression to the \nnext, so the extent to which a listener can predict what was said will also vary. Basically, the \nmore redundant a message, the more readily the listener can perceive it, especially in difficult \nlistening situations. A number of factors present in a given communication situation can \ninfluence the amount of redundancy present, and Table 4-3 provides a list of some of these. \nAmong the many factors associated with the redundancy, or predictability, found in \nconversational speech for the listener to use for perception are syntactic, semantic, and situ-\national constraints (Table 4-4). Syntactic, or structural, constraints relate to the predictable \nmanner in which linguistic units are chained together according to the rules associated with \n",
  "terms": [
   "Consonant perception",
   "redundancy"
  ],
  "definitions": [
   "tends \nto be disrupted more by \nhearing loss than vowel \nperception does due to \nthe lower frequency and \nincreased intensity of most \nvowels",
   "the better \nthe odds wi 11 be that a \nlistener can guess what \nwas said , even when they \ndid not hear the entire \nmessage"
  ]
 },
 "ARTB4-121": {
  "source": "4 • Auditory Stimulation in Communication \n121 \nTABLE 4-3. A Partial List of Factors That Can Influence the Amount of \nRedundancy in Speech \nWithin the speaker \nCompliance with the rules of the language \nUse of appropriate articulation, intonation, stress \nSize and appropriateness of the vocabulary used to convey \nthe message \nWithin the message \nNumber of syllables, words, etc. \nAmount of context \nFrequency composition of the speech signal \nIntensity of the speech signal \nWithin the communication \nAmount of acoustic noise \nenvironment \nDegree of reverberation \nNumber of situational cues present that are related to the \nmessage \nWithin the listener \nFamiliarity with the rules of the language \nFamiliarity with the vocabulary of the message \nKnowledge of the topic of conversation \nHearing abilities \nSource: Adapted from Sanders (1971). \nTABLE 4-4. Examples of Linguistic Constraints Available to Enhance \nSpeech Perception \nSyntactic constraints: Refer to the fact that every language is governed by a set of \ngrammatical rules that specifies the relationship between words used to communicate. For \nexample, adjectives may be used to qualify nouns (as in \"the blue shoes\"); adjectives are not \nused to qualify verbs (as in \"he blue ran\"). \nSemantic constraints: Refer to the fact that the words used in a sentence are usually related \nto each other in a meaningful way. For example, although the sentence \"Put the salt on the \ncloud\" is syntactically correct, semantically it is highly improbable. \nSituational constraints: Refer to the fact that language usually takes place within a physical \nand social context. Generally, the use of language bears some relationship with the context in \nwhich it is used. For example, in a stadium during a football game, it is more likely that the \ntopic of discussion will center around sports-related activities than around religious beliefs \nand values. \nSource: Adapted from Gagne and Jennings (2007). \nacceptable English. The selection and use of phonemes and words in an utterance are strongly \ninfluenced by these rules, making it easier for the listener to predict what is to follow after \nhaving heard only the initial portion of the sentence. Such syntactic clues can be used in \nconjunction with another factor related to redundancy; namely, semantic constraints, which \nallow the listener to predict the type of vocabulary and expressions to be used based on \n",
  "terms": [
   "Syntactic constraints",
   "Semantic constraints"
  ],
  "definitions": [
   "every language is governed by a set of \ngrammatical rules that specifies the relationship between words used to communicate",
   "the words used in a sentence are usually related \nto each other in a meaningful way"
  ]
 },
 "ARTB4-122": {
  "source": "122 \nIntroduction to Audiologic Rehabilitation \nthe general semantic content of the expression. When the topic of conversation is food, for \nexample, the listener can expect to hear a rather restricted range of vocabulary peculiar to \nthat particular topic. Use of this small range of words will increase the redundancy of the \nmessage, making it easier to predict what is said. Situational constraints also create redun-\ndancy. Our conversational partner, the location of the conversation, the time of day it takes \nplace, and other similar factors all influence what we say and how we say it, which also can \nmake conversational speech more predictable. All these types of constraints, along with other \nfactors listed in Table 4-3, collectively produce the redundancy that makes the perception of \nspeech easier for us all. \nNoise refers to a host of factors that can reduce the amount of information present for \nthe listener to use. In this context, noise refers to a variety of variables that can be coun-\nterproductive to communication, not only competing auditory noise. Table 4-5 provides a \npartial list of the potential sources of noise associated with oral communication with which \nthe listener must contend. Each of these factors may reduce the amount of information in a \nspoken message, thus reducing the amount of redundancy, or predictability, that is available \nfor the listener to use in perceiving speech. \nNoise impacts both the quantity (how much someone hears) and the quality (the fidelity \nof the acoustic signal) of what someone hears. This can impact children even more than \nadults. For example, children may not have the cognitive or linguistic knowledge to fill in \nthe gaps of a sentence presented in a noisy environment. They also may miss the meanings \nof words or the production of phonemes that are less acoustically salient. Even with the most \nadvanced hearing technology, clinicians, family members, and audiologists can work together \nto promote listening environments conducive to spoken-language learning. \nThus, the degree of information available for the listener to use in perceiving a message \nis positively or negatively influenced by several related variables that are part of oral commu-\nnication. For the listener, particularly one with hearing loss, the importance of each of these \nvariables to the process of speech perception cannot be overstated. In addition, as previously \nstated, children with prelinguistic hearing loss, or hearing loss that exists prior to language \ndevelopment, need more help decoding the language than an older child or adult who lost \ntheir hearing after language had already been established. \nTABLE 4-5. Some Potential Sources of Noise in Oral Communication \nWithin the speaker \nPoor syntax \nAbnormal articulation \nImproper stress or inflection \nWithin the communication \nAbnormal lighting \nenvironment \nCompeting or distracting visual stimuli \nCompeting or distracting auditory stimuli \nReverberation \nWithin the listener \nLack of familiarity with the rules of the language \nInability to identify the topic of the message \nPoor listening skills \nSource: Adapted from Sanders (1971). \n",
  "terms": [
   "Noise",
   "Situational constraints"
  ],
  "definitions": [
   "factors that can reduce the amount of information present for \nthe listener to use",
   "Our conversational partner, the location of the conversation, the time of day it takes \nplace, and other similar factors"
  ]
 },
 "ARLING-2": {
  "source": "2\nAdapted from the Ling–Madell–Hewitt 10 Sound Test (Madell J., Hewitt L., 2021). Used with acknowledgment to Jane Madell et al. for educational purposes.\nWhat this screening check is for\nThis check helps you monitor whether your child is hearing the low, mid, and high \nfrequency speech sounds needed for everyday listening.\nIt helps you notice:\n•\t If your child detects sounds.\n•\t If they begin to identify or repeat these sounds. \n•\t Whether they hear them consistently.\n•\t Whether one ear may be hearing better than the other.\nThis supports the audiologist in adjusting hearing technology when needed.\nThe Ling 10 is a screening tool. Children still need complete speech perception \nassessments with their hearing care team.\nThe 10 sounds you will check\nSome are vowels, some are consonants. They represent the full speech frequency \nrange. Use these words to help you train your child and remember each sound: Keep \nthe sound natural, once your child is trained on these words and sounds to do the \nLING 10 Sound check say only the sound, not the whole word.\nBand\nFrequency Range\nWhat does it mean?\nBand 1\n200 – 1000 Hz\nLow/deep sounds\nBand 2\n1000 – 1500 Hz\nMiddle-low clarity sounds\nBand 3\n1500 – 3000 Hz\nMiddle-high consonant detail\nBand 4\n3000 Hz and above\nVery high “quiet” sounds\nLING \nSound\nTraining \nWord\nAlternative \nTraining Word\nDescription\nBand \nCoverage\n/u/\nmoon\nboot, food\nLow, rounded vowel. \nHelps children hear deep sounds.\nBand 1  Band 3\n/a/\ncar\narm, palm\nOpen “ah” sound. \nImportant for loud & clear speech.\nBand 1  Band 3\n/i/\nleaf\nsee, tree\nBright, high vowel. \nHelps speech sound “clear.”\nBand 1  Band 3\n/m/\nmilk\nmmm, mama, \nmonkey\nLow nasal hum. \nHelps check low-frequency access.\nBand 1 + Band 2 \n+ Band 3\n/n/\nnose\nnight, nest\nSofter nasal sound. \nSupports fine speech detail.\nBand 1 + Band 2 \n+ Band 3\n/h/\nhat\nhot, hand\nSoft breath sound. \nCan be missed without mid access.\nBand 3\n/ʤ/\njump\njuice, jam\nMixed consonant (“dj”). \nHelps with mid-high clarity.\nBand 1  Band 3\n/sh/\nshoe\nsheep, shell\nQuiet “shh.” \nKey for hearing soft speech detail.\nBand 3 + Band 4\n/s/\nstar\nsun, soap\nVery quiet, high sound. \nOften hardest for children.\nBand 4\n/z/\nzebra\nzip, buzzing bee\nHigh buzzing sound. \nSupports hearing endings (“is/was”).\nBand 1 + Band 4\nCaregiver Instructions\nTHE LING 10\n",
  "terms": [
   "Ling 10",
   "Band 1",
   "Band 2",
   "Band 3",
   "Band 4"
  ],
  "definitions": [
   "a screening tool. Children still need complete speech perception \nassessments with their hearing care team",
   "Low/deep sounds",
   "Middle-low clarity sounds",
   "Middle-high consonant detail",
   "Very high “quiet” sounds"
  ],
  "checkpoints": [
   {
    "phrase": "The Ling 10 is a screening tool. Children still need complete speech perception \nassessments with their hearing care team.",
    "label": "Keep the screening limit"
   }
  ]
 },
 "ARLING-3": {
  "source": "3\nAdapted from the Ling–Madell–Hewitt 10 Sound Test (Madell J., Hewitt L., 2021). Used with acknowledgment to Jane Madell et al. for educational purposes.\nHow to Perform the Test\nTHE LING 10\n1. Check each ear separately\nThis is essential. Test in this order:\n1.\t  Right ear only (remove or turn off the other device) \n2.\t  Left ear only \n3.\t  Both ears together \nThis allows you to detect: \n•\t Whether one ear is not performing well.\n•\t Whether two devices together cause distortion.\n•\t Whether a mapping or fitting needs adjustment.\n2. Start with DETECTION\nAsk: Can my child hear the sound? \nHow to check detection:\n•\t Say the sound once, at a normal volume.\n•\t Sit slightly behind or beside your child so they cannot lip-read.\n•\t Look for any change in behavior:\n\t–\nTurning toward you\n\t–\nPausing\n\t–\nWidening eyes\n\t–\nSmiling\n\t–\nLooking up\n\t–\nStopping activity\nAny consistent reaction means they detected the sound. \nRecord detection in the box ().\n3. Move to IDENTIFICATION\nAsk: Can my child tell the difference between sounds? \nMethods your child may use:\n•\t  Pointing to the picture of the correct sound \n•\t  Imitating the sound \n•\t  Repeating the sound back to you \nAs children improve, imitation becomes the expected response. \nRecord identification in the box ().\n4. Check DISTANCE \nOnce your child can detect and identify at close range, increase distance. \n•\t Start at 1 meter \n•\t Then 2–3 meters \n•\t Then from behind (still ensuring audibility but no visual cues) \nDistance helps screen whether high-frequency sounds (like /s/ from star and /sh/ from \nshoe) remain audible with soft speech. \nRecord distance in the box ( or note the distance heard). \n5. Keep sessions short\nBrief, daily checking.\nA full check should take 2–3 minutes.\nStop if your child becomes tired or loses interest. \n",
  "terms": [
   "DETECTION",
   "IDENTIFICATION",
   "DISTANCE"
  ],
  "definitions": [
   "Can my child hear the sound?",
   "Pointing to the picture of the correct sound",
   "Once your child can detect and identify at close range, increase distance"
  ],
  "checkpoints": [
   {
    "phrase": "Any consistent reaction means they detected the sound.",
    "label": "Name the response"
   }
  ]
 },
 "ARLING-4": {
  "source": "4\nAdapted from the Ling–Madell–Hewitt 10 Sound Test (Madell J., Hewitt L., 2021). Used with acknowledgment to Jane Madell et al. for educational purposes.\nHow to Perform the Test\nTHE LING 10\nInterpreting the results \nIf your child responds to all sounds, this suggests good access across: \n•\t low frequencies \n•\t mid frequencies \n•\t high frequencies \nIf your child regularly misses specific sounds, this may indicate difficulty in a frequency \nrange: \n•\t Missing /u/ (moon), /m/ (milk)  Low frequencies \n•\t Missing /a/ (car), /i/ (leaf/see)  Vowel clarity / mid frequencies \n•\t Missing /n/ (nose), /h/ (hat), /ʤ/ (jump), /z/ (zebra)  Mid–high consonant bands \n•\t Missing /sh/ (shoe), /s/ (star)  Very high frequencies\nIf hearing changes from one day to the next, check:\n•\t battery\n•\t coil\n•\t microphone\n•\t occlusion\n•\t ear infection\n•\t mapping changes\nThen repeat the check. \nIf missing sounds persist, contact your audiologist. \nHow often to use this screening tool \n•\t For young children or children new to technology: daily.\n•\t For children who are stable listeners: several times per week. \n•\t After illness, mapping changes, or technology issues.\n•\t Whenever you notice a change in listening or speech clarity. \nParents’ reports help audiologists tune devices more accurately.\nFinal note\nThe Ling 10 (LMH Test) is a screening tool, not a diagnostic test. \nIt helps you monitor your child’s listening at home and supports your clinical team in \nadjusting their technology. \n",
  "terms": [
   "Ling 10 (LMH Test)",
   "Missing /sh/ (shoe), /s/ (star)"
  ],
  "definitions": [
   "a screening tool, not a diagnostic test",
   "Very high frequencies"
  ],
  "checkpoints": [
   {
    "phrase": "If missing sounds persist, contact your audiologist.",
    "label": "Follow up a persistent change"
   }
  ]
 },
 "ARLING-12": {
  "source": "©2025 Advanced Bionics AG and affiliates. All rights reserved.\nAdvanced Bionics - A Sonova brand\n©2025 Advanced Bionics AG and affiliates. All rights reserved.\nAdvanced Bionics - A Sonova brand\n/ʤ/ - \"dj\" (jump)\nABOUT THIS SOUND: A quick “dj” sound made with the tongue briefly \nstopping the airflow, then releasing it. “dj” sounds like in the word jump.\nCAREGIVER CUE: Make a small popping sound with your tongue: “dj”.\nBand 1 (200–1000 Hz)  Band 3 (1500–3000 Hz)\n/sh/ - \"shh\" (shoe)\nABOUT THIS SOUND: A quiet hushing sound made with lips slightly forward \nand teeth close together. The sound is “shh”, like in the word shoe.\nCAREGIVER CUE: Make a gentle quiet sound: “shh”.\nBand 1 (200–1000 Hz) + Band 2 (1000–1500 Hz) + Band 3 (1500–3000 Hz)\n",
  "terms": [
   "/ʤ/",
   "/sh/"
  ],
  "definitions": [
   "A quick “dj” sound made with the tongue briefly \nstopping the airflow, then releasing it",
   "A quiet hushing sound made with lips slightly forward \nand teeth close together"
  ]
 },
 "ARLING-15": {
  "source": "Adapted from the Ling–Madell–Hewitt 10 Sound Test (Madell J., Hewitt L., 2021). Used with acknowledgment to Jane Madell et al. for educational purposes.\nRecord Sheet\nTHE LING 10\nLING \nSound\nTraining \nWord\nRight Ear\nLeft Ear\nBoth Ears\nWith Remote Microphone Technology\nComments\nReacted\nRepeated\nDistance\nReacted\nRepeated\nDistance\nReacted\nRepeated\nDistance\nReacted\nRepeated\nDistance\n/u/\nmoon\n/a/\ncar\n/i/\nleaf\n/m/\nmilk\n/n/\nnose\n/h/\nhat\n/ʤ/\njump\n/sh/\nshoe\n/s/\nstar\n/z/\nzebra\nNote for the caregivers\nUse  for sounds your child hears,  for sounds they repeat or point to the picture, and \nwrite the furthest distance they responded at (e.g., 1 m, 2 m, across room, behind).\n15\nChild: _____________________________________________\nTester: ____________________________________________\nDate: _____________________________________________\nUse the Comments column to note:\n•\t Changes since last check\n•\t Missed sounds\n•\t Technology concerns (battery, coil, microphones)\n•\t Illness or congestion\n•\t Listening behavior\n",
  "terms": [
   "Comments"
  ],
  "definitions": [
   "Changes since last check",
   "Missed sounds",
   "Technology concerns (battery, coil, microphones)"
  ]
 },
 "ARCOCHLING-1": {
  "source": "mmm\nMmm... the ice cream \nis yummmy!\neee\nEeek! A mouse!\nh-h-h\nA dog pants \n“h-h-h”\nj-j-j\nA frog j-j-jumps\nooo\nThe cow says “mooo”\nshh\nShh... the koala \nis sleeping\nnnn\nThe clown has a\nfunnny nnnose\nahh\nAhh! A plane!\nsss\nThe snake says “hisss”\nzzz\nThe bee says “buzzz”\nTen sounds to build \nyour child’s hearing skills\nLing 10 sounds are special speech sounds that help you develop \nyour child’s hearing across all the diﬀ erent pitches and tones they \nneed for clear speech and language development, from low rumbling \nto high-frequency sounds.\nPracticing with the Ling 10 sounds strengthens:\n✓Sound recognition  \nRegular practice trains \nthe brain to recognize \ndiﬀ erent sounds, a \nbuilding block for speech \nunderstanding.\n✓Speech clarity  \nHelping your child build \nstrong listening skills \nis fundamental for their \ngrowth toward clear, \nintelligible speech.\n✓Parent relationship\nPlay an active role in \nyour child’s auditory \ndevelopment through \nconsistent, positive \nlistening interactions.\n✓Device monitoring\nIf your child consistently \nmisses a sound, share \nthat with their audiologist \nor therapist.\n",
  "terms": [
   "Device monitoring",
   "Sound recognition"
  ],
  "definitions": [
   "If your child consistently \nmisses a sound, share \nthat with their audiologist \nor therapist",
   "Regular practice trains \nthe brain to recognize \ndiﬀ erent sounds"
  ]
 },
 "ARCOCHLING-2": {
  "source": "How to use the Ling 10 sounds \nwith your child\nLing sounds practice builds listening skills in a structured yet \nplayful way. Daily exposure helps strengthen sound processing, \naccelerates your child’s progress in learning to listen and \nspeak, and gives you valuable insights into your child’s hearing \ndevelopment. Try these exercises in order, advancing as your \nchild’s skills grow.\n1. Detection: “Did you hear it?”\nSay one Ling sound at a normal speaking volume while your child \nis not looking at your face and look for a reaction. A young child \nshows they heard it by looking at you, pausing their activity or \nreacting in some way. An older child can be taught to raise a hand, \nclap or select the card or toy that matches the sound.\n2. Discrimination: “Can you hear the diﬀ erence?”\nHold up ﬂ ash cards or toys that represent two contrasting sounds. \nSay one of the sounds and ask your child to choose \nthe matching item.\n3. Identiﬁ cation: “Which sound did you hear?”\nHold up ﬂ ash cards or toys that represent all sounds. \nAsk your child to choose the matching item.\n4. Imitation: “Can you say it too?”\nAsk your child to repeat the sound back to you. This helps you \nevaluate whether they hear the sound clearly enough to produce it.\n5. Add distance and background noise: \n“Can you still hear me?”\nOnce identiﬁ cation is strong in quiet, try:\n• Saying the sounds from across the room, keeping your voice \nat a normal speaking volume\n• Adding soft background noise (fan, quiet music)\nTips for success\n✓Use your normal \nconversational voice.\n✓To avoid lipreading, sit next to \nyour child side-by-side facing \nthe same direction. Try not to \ncover your mouth as this will \nmuﬄ  e your words.\n✓Keep it short. 1–2 minutes \na day is enough.\n✓Make it playful. Hide-and-seek, \ntoys or silly faces keep kids \nengaged.\n✓Celebrate eﬀ ort. Praise \nlistening behaviors, not just \ncorrect answers.\n✓Make it a habit. Frequent \npractice supports long-term \nsuccess.\n",
  "terms": [
   "Detection",
   "Identiﬁ cation",
   "Imitation"
  ],
  "definitions": [
   "“Did you hear it?”",
   "“Which sound did you hear?”",
   "Ask your child to repeat the sound back to you"
  ]
 },
 "ARFAPI-1": {
  "source": "Functional Auditory \n \nPerformance Indicators (FÁPI) \nAn Integrated Approach to Auditory Skill Development \n \nFÁPI Overview \nThe Functional Auditory Performance Indicators (FÁPI) assesses the functional auditory skills \nof children with hearing loss. It can be used by parents, therapists, early interventionists, and \nteachers. The profile lists auditory skills in an integrated hierarchical order. There are seven \ncategories.  \n1. Awareness and Meaning of Sounds: The child is aware that an auditory stimulus is \npresent. The child may demonstrate awareness of loud environmental sounds, \nnoisemakers, music, and/or speech. The child further demonstrates that sound is \nmeaningful by associating a variety of auditory stimuli with their sound source. The stimuli \ninclude loud environmental sounds or noisemakers, music, vocalizations (non-true words) \nand speech stimuli.  \n2. Auditory Feedback and Integration: The child changes, notices, and monitors his/her \nown vocal productions. A child may demonstrate this skill by responding to sound when \namplification is turned on, by vocalizing to monitor when amplification is working, and/or by \nnoticing his/her own vocalizations. Furthermore, the child uses auditory information to \nproduce an oral spoken utterance that approximates or matches a spoken stimulus.  \n3. Localizing Sound Source: The child searches for and/or finds the auditory stimulus. \nSearching is a prerequisite skill for localizing. Children with hearing in only one ear may not \nbe able to localize to the sound source. \n4. Auditory Discrimination: The child distinguishes the characteristics of different sounds \nincluding environmental sounds, suprasegmental characteristics of speech (e.g., intensity, \nduration, pitch), non-true words, and true words.    \n5. Auditory Comprehension: The child demonstrates understanding of linguistic \ninformation that is heard by identifying what is said, identifying critical elements in the \nmessage, and by following directions. \n6. Short-term Auditory Memory: The child can hear, remember, repeat, and recall a \nsequence of numbers. This skill is developmentally appropriate for children who are two \nyears of age and older. Numbers are used in order to isolate the skill – auditory memory – \nthat is being tested.   \n7. Linguistic Auditory Processing: The child utilizes auditory information to process \nlanguage. This category measures the ways in which audition is used to sequence \nlanguage, to learn and use morphemes, to learn and use syntactic information, and to \nunderstand spoken language.  \nA profile of a child’s functional auditory skills is generated after administrating all items on the \nprofile. The seven categories are hierarchical.  In addition, auditory performance indicators in each \ncategory are listed in hierarchical order. Please note that while this scale is hierarchical, it is \nappropriate for a child to be working on many skills at the same time. Approximately 4-8 skills can \nbe addressed simultaneously. By working on multiple skills from different categories, the child will \nbe learning an integrated approach to auditory skill development.  \nPerformance is plotted on the profile sheet located at the beginning of the checklist. Based on \ncareful review of this profile, goals for enhancing auditory skills can be determined. \n \n1\n© Stredler-Brown, A. & Johnson, C.D. (2001, 2003, 2004). Functional auditory performance indicators: An integrated approach \nto auditory skill development. Retrieved from http://www.cde.state.co.us/cdesped/sd-hearing.htm \n",
  "terms": [
   "Functional Auditory \n \nPerformance Indicators (FÁPI)",
   "Awareness and Meaning of Sounds",
   "Auditory Feedback and Integration",
   "Localizing Sound Source"
  ],
  "definitions": [
   "assesses the functional auditory skills \nof children with hearing loss",
   "The child is aware that an auditory stimulus is \npresent",
   "The child changes, notices, and monitors his/her \nown vocal productions",
   "The child searches for and/or finds the auditory stimulus"
  ]
 },
 "ARFAPI-2": {
  "source": "ii \nFormat of the Functional Auditory Performance Indicators \nEach category has specific skills. Some categories have one specific skill, others have a short list \nof skills. Furthermore, each skill can be assessed in a variety of conditions. These conditions \nprovide a qualitative report on the child’s success with each skill. The conditions are specific to \neach category. Some of these conditions are:  \n♦ \nresponses to auditory stimuli that are paired with visual cues contrasted to responses to \nan auditory stimulus alone \n♦ \nresponses to auditory stimuli that are presented in close proximity to the child versus \nresponses to stimuli that are presented far away \n♦ \nresponses to auditory stimuli that are given in a noisy situation versus responses to \nstimuli that are given in a quiet room.  \n♦ \nresponses to auditory stimuli that are observed when the child is prompted to listen \nversus spontaneous responses to auditory stimuli \nReporting Functional Skills \nThe FÁPI is administered over time. At any point in time, the FÁPI can be scored. The FÁPI is \nscored by measuring a child’s performance on each skill in each category. The scores are \ncalculated and then transferred to the profile page that is found at the beginning of the test \nprotocol.  The scored profile provides the interventionist, therapist, or teacher with information that \nidentifies a child’s unique strengths and needs. The profile is used to create goals for a child’s \nindividualized program. \n♦ \nThere are seven categories. Each category receives a percentage score. This \npercentage score identifies the child’s listening skills for the items in that category. \nWhen the score in a category is in the “acquired” range (80%-100%), the child has \nmastered the skills for that category. Skills that are “in process” (36%-79%) are also \nstrengths. \n♦ \nIt is important to identify the conditions for each skill that make listening easier for the \nchild and the conditions that make listening more challenging. Easier listening \nconditions include auditory stimuli paired with visual cues, quiet listening conditions, \nstimuli that are presented close to the child, and prompted responses. More difficult \nlistening conditions include auditory-only stimuli, distance hearing, listening in noisy \nsituations, and spontaneous responses. It is appropriate to work on several skills in \neach category until the child can listen in both easy and difficult listening conditions.  \n♦ \nNotice the child’s strengths.  Which categories have the highest score? Which skills \nwithin a category has the child acquired?  \n♦ \nThe results of the FÁPI are used to identify goals for intervention, for therapy, and/or for \nclassroom instruction. The percentage scores in each category and the weighted \nscores for each skill identify skills that need improvement.  All items in the “not present” \n(0%-10% and “emerging” (11%-35%) categories need improvement. \nProcedure for Administration and Scoring \n1. Each skill can be assessed by direct observation of a child’s response to specific stimuli \nand/or parent report. Each skill is evaluated according to the specific conditions noted on \nthe form. There is a section for “Observations & Comments” that can be used to enter \ninformation about the child’s performance.  \n2. A four-tiered scoring paradigm has been created. The skill is ranked by the person \nadministering the checklist by indicating the level of attainment (not present, emerging, in \nprocess, acquired) for each skill. The level of attainment is determined by the following \ncriteria: \n",
  "terms": [
   "conditions",
   "FÁPI",
   "scored profile"
  ],
  "definitions": [
   "provide a qualitative report on the child’s success with each skill",
   "administered over time",
   "identifies a child’s unique strengths and needs"
  ],
  "checkpoints": [
   {
    "phrase": "The FÁPI is administered over time.",
    "label": "Interpret the profile"
   }
  ]
 },
 "ARTESTTABLE-1": {
  "source": "Table 13–3. Examples of word recognition tests that use phoneme, word, and sentence stimuli for children. Supplied page 387; continued table. Speech Pattern Contrast (SPAC) | Phoneme / suprasegmental contrasts | Words and phrases | Closed Audiovisual Feature Test | Phoneme | Rhyming words | Closed, 10 choices Nonsense Syllable Test (NST) | Phoneme | Nonsense syllables | Open Minimal Pairs Test | Phoneme | Monosyllabic pairs, e.g. pair / spare | Closed, 2 choices Auditory Numbers Test (ANT) | Word | Numbers | Closed, 5 choices NU-CHIPS | Word | Monosyllabic nouns | Closed, 4 choices WIPI | Word | Monosyllabic words | Closed, 6 choices in this table Phonetically Balanced Kindergarten (PBK) | Word | Monosyllabic words after “Say the word” | Open Early Speech Perception (ESP) | Word | Words varying in syllable count | Closed ESP low-verbal version | Word | Words varying in syllable count | Closed Lexical Neighborhood Test (LNT) | Word | Lexically easy versus hard words | Open Children’s Realistic Index of Speech Perception (CRISP) | Word | 25 spondees with two competing sentences | Closed, 4 choices",
  "terms": [
   "Speech Pattern Contrast (SPAC)",
   "Nonsense Syllable Test (NST)",
   "NU-CHIPS",
   "WIPI",
   "Lexical Neighborhood Test (LNT)"
  ],
  "definitions": [
   "Phoneme / suprasegmental contrasts | Words and phrases | Closed",
   "Phoneme | Nonsense syllables | Open",
   "Word | Monosyllabic nouns | Closed, 4 choices",
   "Word | Monosyllabic words | Closed, 6 choices in this table",
   "Word | Lexically easy versus hard words | Open"
  ]
 },
 "ARWRITE-1": {
  "source": "Writing Goals \nA clinician must consider a host of variables when establishing goals. \nPerformance, condition, and criteria must be analyzed while taking into account \nbaseline performance. SMART goals will lead to better performance in therapy. \nReview the readings and PowerPoint from this lecture as well as your notes. \nYou are challenged to create your own “quick reference” for writing goals. How \nwill your client respond? Time frame? Cuing? These are just a few behaviors to \nconsider. This reference should include global goal considerations as well as \nbehaviors specific to AR. \n●​ Imitative vs. spontaneous \n●​ Immediate vs. delayed response \n●​ Verbal vs. nonverbal response \n●​ Percentage vs. # of trials \n●​ 2 vs. 3 consecutive sessions \n●​ Cuing vs. no cuing \n●​ Type of cuing (auditory/visual/tactile/orthographic) \n●​ Level of cuing (min/mod/max) \n●​ Background noise vs. quiet \n●​ 10 (?) minute activity vs. length of session \n●​ Sign use vs. no sign \n●​ Familiar vs. unfamiliar communication partner \n●​ Familiar vs. unfamiliar setting \n",
  "terms": [
   "Writing Goals",
   "Type of cuing",
   "Level of cuing"
  ],
  "definitions": [
   "Performance, condition, and criteria must be analyzed while taking into account \nbaseline performance",
   "auditory/visual/tactile/orthographic",
   "min/mod/max"
  ],
  "checkpoints": [
   {
    "phrase": "Performance, condition, and criteria must be analyzed while taking into account \nbaseline performance.",
    "label": "Specify the goal"
   }
  ]
 },
 "ARGOALS-1": {
  "source": "AR Goals \nThe client will... (from Functional Auditory Performance Indicators – FAPI) \n●​ Respond to loud environmental sounds or noisemakers \n●​ Respond to music \n●​ Respond to speech \n●​ Change vocalizations when amplification is on \n●​ Notice own vocal productions \n●​ Identify single words (body parts or common pictures) — Auditory Comprehension \n●​ Discriminate non-linguistic information: loud vs. soft, continuous vs. abrupt, mom vs. dad \nvoice \nThe client will... \n●​ Tolerate amplification device \n●​ Wear all waking hours \nThe clinician will... \n●​ Check device before each session \n●​ Complete Ling 10 \n●​ Monitor ME status \n●​ Collaborate with audiologist \n●​ Provide caregiver education \n●​ Plot audiogram on Speech Banana \nThe client will... (from AVT Learning to Listen) \n \n●​ Airplane                   “aaaahhhh”               Imitation/Identification \n●​ Baby sleeping          “ssshhh!” \n●​ Bear                         “gggrrrrrr” \n●​ Bird                          “tweet tweet” \n \n",
  "terms": [
   "The clinician will"
  ],
  "definitions": [
   "Check device before each session",
   "Complete Ling 10",
   "Collaborate with audiologist"
  ]
 },
 "ARSCALES-3": {
  "source": "Auditory Habilitation Theory\n3\nLanguage enables us to comprehend and express ideas, thoughts, opinions and emotions.\nIn the language learning process, understanding the language heard, that is, receptive language, always precedes the de-\nvelopment of expressive language. A young baby will turn when her mother calls her, or wave goodbye when asked, long \nbefore she can say her own name or say bye bye. As well as learning to understand and express language, the development \nof pragmatic skills is necessary in order to use language appropriately in different social contexts and for different purposes.\nFrom birth to school age is a time of enormous development in a child’s life. A baby grows from a totally dependent being \ninto a competent communicator and an independent thinker and learner by the time she begins school.\nThe following tables are an integrated scale that outline typical stages of development in the areas of listening, receptive \nand expressive language, speech, cognition and social communication. They have been adapted from a number of sources:\n•\nCottage Acquisition Scales for Listening, Language and Speech\n•\nPreschool Language Scale – 4 (PLS 4)\n•\nThe Bzoch-League Receptive-Expressive Emergent Language Scale Second Edition\n•\n(REEL - 2)\n•\nThe Early Learning Accomplishment Profile Kit (E-LAP)\n•\nThe Learning Accomplishment Profile Revised Edition Kit (LAP-R)\n•\nThe Rosetti Infant-Toddler Language Scale\n•\nSt. Gabriel’s Curriculum\nA child with hearing impairment follows these stages of development. However, she will need greater exposure to spoken \nlanguage from the earliest possible time. Language, speech, cognition and pragmatic skills should be developed concurren-\ntly through listening in a systematic program that follows the typical stages of development.\nIt is important to remember that the skills listed on the following pages are based on an average.\nThere is a considerable range between the earliest and latest times children achieve the various milestones. Your child may \nnot reach a milestone within the given timeframe, but this does not mean that they will not achieve it. These developmen-\ntal scales are meant as a guide only. They have been included to assist in the provision of a program to suit the individual \nneeds of a particular child.\nFor full reference and description see Listen Learn and Talk (Ref. Z60407). This is an auditory habilitation resource from \nCochlear.\nIntegrated Scales of Development\n",
  "terms": [
   "receptive language",
   "pragmatic skills"
  ],
  "definitions": [
   "understanding the language heard",
   "use language appropriately in different social contexts and for different purposes"
  ]
 },
 "ARSCALES-4": {
  "source": "Auditory Habilitation Theory\n4\n0 to 3 Months\nListening\n(Audition)\nReceptive\nLanguage\nExpressive\nLanguage\nSpeech\nCognition\nSocial\nCommunication\n(Pragmatics)\n• Auditory awareness\n• Responds to sound\nby smiling, head\nturning, stilling,\nstartling\n• Responds to loud\nsounds\n• Recognizes mo-\nther’s/ caregiver’s\nvoice\n• Startles to sudden\nnoises\n• Responds to spea-\nker’s face\n• Responds to talking\nby quietening or\nsmiling\n• Quietens with fami-\nliar voice\n• Cries to express\nhunger and anger\n• Begins to vocalize to\nexpress pleasure\n• Occasionally voca-\nlizes in response to\nvoicelike sounds\n• Cries\n• Begins vocalizing\nother than crying,\ne.g. coos, gurgles\n• Awareness of fami-\nliar people/situations\n• Looks at objects/fa-\nces briefly\n• Anticipates certain\nevents, e.g. being\nfed\n• Appears to listen to\nspeaker\n• Has brief eye con-\ntact but by 3 mon-\nths regularly looks\ndirectly at spea-\nker’s face, localizes\nspeaker with eyes\nand starts to watch\nmouth rather than\nwhole face\n• Smiles/coos in re-\nsponse, in particular\nto mother/caregiver\n",
  "terms": [
   "0 to 3 Months"
  ],
  "definitions": [
   "Responds to sound\nby smiling, head\nturning, stilling,\nstartling"
  ]
 },
 "ARSCALES-5": {
  "source": "Auditory Habilitation Theory\n5\n4 to 6 Months\nListening\n(Audition)\nReceptive\nLanguage\nExpressive\nLanguage\nSpeech\nCognition\nSocial\nCommunication\n(Pragmatics)\n•\tSound begins to \nhave meaning\n•\tListens more acutely\n•\tStarts to associate \nmeaning to sound, \ne.g. responds to \nown name occasio-\nnally\n•\tResponds to chan-\nges in vocal inflec-\ntions\n•\tStarts to localize \nsource of voice with \naccuracy\n•\tListens to own voice\n•\tFrequently localizes \nsound source with \nhead or eye turn\n•\tOccasionally respon-\nds to own name\n•\tDiscriminates \nbetween angry and \nfriendly vocal tones, \ne.g. cries in respon-\nse to an angry voice\n•\tUsually stops crying \nin response to voice\n•\tVocalizes for needs \nand wants\n•\tVocalizes in respon-\nse to singing\n•\tBlows raspberries, \ncoos, yells\n•\tVocalizes in respon-\nse to speech\n•\tStarts to use a va-\nriety of vocalizations \nto express pleasure \nand displeasure\n•\tVocalizes when alo-\nne or with others\n•\tLaughs\n•\tBlows raspberries\n•\tCoos\n•\tYells\n•\tStarts to change \nduration, pitch and \nintensity (prosodic \nfeatures)\n•\tUses vowel [a] as in \ncar\n•\tProduces soun-\nds with consonant \nfeatures – friction \nnoises, nasal [m]\n•\tPlays at making \nsounds\n•\tLooks at objects and \nreaches for them\n•\tStarts to learn about \ncause and effect, \ne.g. plays with rattle\n•\tRecognizes familiar \npeople\n•\tBrings objects to \nmouth\n•\tMaintains eye con-\ntact\n•\tLoves games such \nas round and round \nthe garden\n•\tProduces different \nvocalizations for \ndifferent reasons\n•\tImitates facial ex-\npressions\n•\tTakes the initiative \nin vocalizing and \nengages adult in \ninteraction\n•\tStarts to understand \nvocal turn taking, \ne.g. vocalizes in \nresponse to adult \nvocal input\n",
  "terms": [
   "4 to 6 Months"
  ],
  "definitions": [
   "Sound begins to \nhave meaning"
  ]
 },
 "ARSCALES-6": {
  "source": "Auditory Habilitation Theory\n6\n7 to 9 Months\nListening\n(Audition)\nReceptive\nLanguage\nExpressive\nLanguage\nSpeech\nCognition\nSocial\nCommunication\n(Pragmatics)\n•\tLocalizes sound \nsource with accuracy\n•\tDiscriminates supra-\nsegmental aspects \nof duration, pitch \nand intensity\n•\tHas longer attention \nspan\n•\tAssociates meaning \nto words\n•\tDiscriminates vowel \nand syllable content\n•\tAppears to recogni-\nze names of family \nmembers in connec-\nted speech, even \nwhen person named \nis not in sight\n•\tResponds with appro-\npriate arm gestures \nto such words as up, \nhigh, bye bye, etc.\n•\tEnjoys music or sin-\nging\n•\tAppears to listen to \nwhole conversation \nbetween others\n•\tRegularly stops ac-\ntivity when name is \ncalled\n•\tAppears to recognize \nthe names of a few \ncommon objects by \nlocalizing them when \nthey are named\n•\tMore regularly stops \nactivity in response \nto “no”\n•\tWill sustain interest \nup to a minute while \nlooking at pictures or \nbooks with adult\n•\tRepeats CV syllables \nin babble [pa pa]\n•\tStarts to respond \nwith vocalizations \nwhen called by \nname\n•\tPlays more games, \ne.g. pat a cake, \npeek a boo, hand \nclapping, etc. and \nvocalizes during \ngames\n•\tAppears to “sing”\n•\tVocalizes to greet a \nfamiliar adult\n•\tCalls to get attention\n•\tUses some gestures \nand language appro-\npriately, e.g. shakes \nhead for “ho”\n•\tVocalizes loudly\n•\tBabbles CV CV [pa \npa] [ba ba]\n•\tClicks tongue\n•\tUses a “singsong” \nvoice\n•\tImitates patterns of \nintonation\n•\tUses low central vo-\nwels most frequently \n[o] (hot) [ae] (bat) \n[a] (car)\n•\tUses some conso-\nnants [p, b, m, d]\n•\tImitates physical \naction\n•\tRecognizes familiar \nobjects\n•\tPlaces object in one \nhand and then the \nother\n•\tHolds one cube and \ntakes another\n•\tSmiles at self in \nmirror\n•\tLoves hiding and fin-\nding games\n•\tGives, points, shows\n•\tPulls rings off peg\n•\tBegins to under-\nstand that communi-\ncation is a two-way \nprocess\n•\tShows a desire to \ninteract with people\n•\tBecomes more lively \nto familiar people\n•\tDemonstrates antici-\npation of activities\n•\tNods, waves and \nclaps\n•\tCalls to get attention\n•\tRequests by rea-\nching and pointing\n•\tEnjoys frolic play\n•\tContinues to deve-\nlop turn taking skills\n•\tBegins book sharing \nby\n•\tlooking at pictures in \na book with adult\n",
  "terms": [
   "7 to 9 Months"
  ],
  "definitions": [
   "Localizes sound \nsource with accuracy"
  ]
 },
 "ARSCALES-7": {
  "source": "Auditory Habilitation Theory\n7\n10 to 12 Months\nListening\n(Audition)\nReceptive\nLanguage\nExpressive\nLanguage\nSpeech\nCognition\nSocial\nCommunication\n(Pragmatics)\n•\tAssociates meaning \nto more words\n•\tMonitors own voice \nand voices of others\n•\tLocalizes sound from \na distance\n•\tDiscriminates spe-\naker’s voice from \ncompeting stimuli\n•\tAppears to enjoy \nlistening to new \nwords\n•\tGenerally able to \nlisten to speech wi-\nthout being distrac-\nted by other compe-\nting sounds\n•\tOccasionally gives \ntoys and objects \nto adult on verbal \nrequest\n•\tOccasionally follows \nsimple commands, \ne.g. Put that down.\n•\tResponds to music \nwith body or hand \nmovement in appro-\nximate time\n•\tDemonstrates \nunderstanding of \nverbal requests with \nappropriate head \nand body gestures\n•\tShows increased \nattention to speech \nover prolonged pe-\nriods of time\n•\tUses jargon of 4 \nor more syllables - \nshort sentence-like \nstructures without \ntrue words\n•\tStarts to use varied \njargon patterns with \nadult intonation pat-\nterns when playing \nalone\n•\tInitiates speech ge-\nsture games such as \nround and round the \ngarden\n•\tTalks to toys/objects \nusing longer verbal \npatterns\n•\tFrequently responds \nto songs or rhymes \nby vocalizing\n•\tImitates action pai-\nred with sound\n•\tMay use first words, \ne.g. bye bye, mama\n•\tImitates sounds and\n•\tnumber of syllables\n•\tused by others\n•\to Uses supraseg-\nmental\n•\tfeatures\n•\to Uses longer \nstrings of\n•\trepeated syllables\n•\to Vowels and conso-\nnants\n•\tare systematically \nvaried\n•\t[ba di ba di]\n•\to Mostly uses plosi-\nves\n•\tand nasals [p, b, d, \nm]\n•\tResists when toy is \ntaken away\n•\tRelates an action to \nan object, e.g. spo-\non with stirring, car \nwith pushing\n•\tResponds to lau-\nghter by repeating \naction\n•\tTakes peg from peg \nboard\n•\tMatches two identi-\ncal objects\n•\tAttempts to build a \ntwo block tower\n•\tStarts to under-\nstand question and \nanswer, e.g. shakes \nhead appropriately \nfor “no”\n•\tUnderstanding of \ninteraction continues \nto develop\n•\tUnderstands gree-\ntings\n•\tTurn taking skills \ncontinue to develop\n•\tVocalizes in respon-\nse to mother’s call\n•\tIndicates desire to \nchange activities\n•\tResponds to lau-\nghter by repeating \naction\n•\tBegins directing \nothers by tugging, \npushing\n•\tVocalizes with ge-\nsture to protest\n•\tEnjoys games and \ninitiates them\n",
  "terms": [
   "10 to 12 Months"
  ],
  "definitions": [
   "Associates meaning \nto more words"
  ]
 },
 "ARSCALES-8": {
  "source": "Auditory Habilitation Theory\n8\n13 to 15 Months\nListening\n(Audition)\nReceptive\nLanguage\nExpressive\nLanguage\nSpeech\nCognition\nSocial\nCommunication\n(Pragmatics)\n•\tIdentifies more \nwords\n•\tProcesses simple \nlanguage\n•\tAuditory memory of \none item at the end \nof a phrase/senten-\nce\n•\tDiscriminates \nbetween familiar \nphrases\n•\tFollows one step \ndirections that are \nfamiliar\n•\tUnderstands more \nnew words each \nweek\n•\tFollows one step di-\nrections during play\n•\tUnderstands simple \nwhere questions, \ne.g. Where’s daddy?\n•\tRecognizes and \ndemonstrates un-\nderstanding of many \nobjects by pointing\n•\tUnderstands more \nfamiliar phrases\n•\tBegins to recognize \nnames of various \nbody parts, e.g. \neyes, hands\n•\tEnjoys rhymes\n•\tUses 7 or more \nwords consistently\n•\tUses voice and \ngesture to obtain \ndesired object\n•\tContinues to use \njargon with more \ntrue words develo-\nping\n•\tIncorporates pau-\nsing and intonation \ninto jargon\n•\tImitates new words \nspontaneously\n•\tSings\n•\tImitates alternated \nvowels\n•\tApproximates single \nwords\n•\tUses most vowels in \nvocal play\n•\tUses more front \nconsonants plosives \n[p, b, d], nasals [m, \nn]\n•\tUses fricative [h]\n•\tUses semivowel [w]\n•\tSustains interest in \ndesired object for \ntwo minutes and \nmore\n•\tPlaces circle in sha-\npe board\n•\tBuilds a tower with \ntwo cubes\n•\tBegins to make \nmarks on paper with \nthick crayon\n•\tImitates more ac-\ntions, e.g. patting \ndoll\n•\tDemonstrates \nfunctional use of \nobjects\n•\tRemoves lid of box \nto find hidden toy\n•\tContinues to deve-\nlop eye contact with \nspeaker for longer \nperiods\n•\tTakes turns as ex-\npressive language \ndevelops\n•\tPlays fetching game\n•\tInvolves others by \nshowing things, e.g. \nshoes/clothing du-\nring play\n•\tBegins to under-\nstand “wh” que-\nstions\n",
  "terms": [
   "13 to 15 Months"
  ],
  "definitions": [
   "Identifies more \nwords"
  ]
 },
 "ARSCALES-9": {
  "source": "Auditory Habilitation Theory\n9\n16 to 18 Months\nListening\n(Audition)\nReceptive\nLanguage\nExpressive\nLanguage\nSpeech\nCognition\nSocial\nCommunication\n(Pragmatics)\n•\tDiscriminates \nbetween more phra-\nses\n•\tIdentifies and asso-\nciates more words to \nrelated objects, e.g. \ntoys, body parts, \nfood, clothing\n•\tImitates words he-\nard\n•\tUnderstands more \nsimple questions\n•\tBegins to under-\nstand longer phrases \nwith key word in \nmiddle of sentence\n•\tDevelops category \nvocabulary\n•\tIdentifies more body \nparts\n•\tFinds familiar object \nnot in sight\n•\tUnderstands 50 or \nmore words\n•\tIdentifies some \nclothing items, toys \nand food\n•\tJargon disappears\n•\tIncreases vocabu-\nlary, 10 or more \nmeaningful words\n•\tDecreases use of \ngesture – relies on \ntalking to communi-\ncate\n•\tImitates words he-\nard\n•\tAsks for more\n•\tIncreases single \nword approximations\n•\tMost vowels present\n•\tStill mainly produ-\ncing front conso-\nnants [p, b, d, m, n, \nh, w]\n•\tImitates circular \nscribble\n•\tPlaces 3 to 6 pegs in \npegboard\n•\tRetrieves desired \ntoy from behind an \nobstacle\n•\tPicks up small \nobjects\n•\tTurns bottle upside \ndown to obtain toy\n•\tPoints to pictures in \na book and begins \nto turn pages\n•\tDemonstrates object \npermanence\n•\tRequests object or \nhelp from adult by \ngesturing and voca-\nlizing\n•\tInitiates vocal inte-\nraction\n•\tPrefers to be with \nfamiliar people\n•\tShows caution with \nstrangers\n•\tImitates other chil-\ndren\n",
  "terms": [
   "16 to 18 Months"
  ],
  "definitions": [
   "Understands more \nsimple questions"
  ]
 },
 "ARSCALES-10": {
  "source": "Auditory Habilitation Theory\n10\n19 to 24 Months\nListening\n(Audition)\nReceptive\nLanguage\nExpressive\nLanguage\nSpeech\nCognition\nSocial\nCommunication\n(Pragmatics)\n•\tAuditory memory of \n2 items\n•\tDiscriminates songs\n•\tComprehends a va-\nriety of phrases\n•\tDiscriminates de-\nscriptive phrases\n•\tFollows a two step \ndirection, e.g. Get \nyour ball and throw \nit.\n•\tIdentifies by cate-\ngory\n•\tCompletes two \nrequests with one \nobject\n•\tChooses two familiar \nobjects\n•\tComprehends action \nphrases\n•\tPoints to a range \nof body parts, e.g. \nelbow, cheek\n•\tBegins to under-\nstand personal pro-\nnouns – my, mine, \nyou\n•\tRecognizes new \nwords daily\n•\tIncreases compre-\nhension - decodes \nsimple syntax\n•\tBy 24 months un-\nderstands 250 - 300 \nwords\n•\tOccasionally imi-\ntates 2 - 3 word \nphrases\n•\tUses new words \nregularly\n•\tIncreases expressi-\nve vocabulary to 30 \nwords or more\n•\tAttempts “stories” – \nlonger utterances in \njargon to get mes-\nsage across\n•\tBegins to use own \nname when talking \nabout self\n•\tUses possessive pro-\nnouns – mine\n•\tMay ask where que-\nstions Where car?\n•\tBy 24 months may \nuse 2 - 3 word \nphrases with nouns, \nsome verbs and \nsome adjectives\n•\tApproximates words\n•\tSubstitutes /w/ for \n/r/\n•\tUses suprasegmen-\ntal features\n•\tMost vowels and \ndiphthongs present\n•\tConsonants [k, g, t, \nng] emerging\n•\tConsonants [p, b, \nm, h, n, d] establi-\nshed – used in initial \nposition in words\n•\tConsonants often \nomitted in medial \nand final position\n•\tImitates symbolic \nplay, e.g. household \nactivities\n•\tUses one object as \nsymbol for another\n•\tPlaces triangle, cir-\ncle, square in shape \nboard\n•\tImitates vertical \nstrokes\n•\tThreads three beads\n•\tBegins to tear paper\n•\tImitates ordering of \nnesting cups\n•\tBegins to categorize \nobjects in play\n•\tUses two toys toge-\nther\n•\tStacks blocks/builds \ntower\n•\tCompletes simple \npull out puzzle\n•\tActivates mechanical \ntoy\n•\tBegins to develop \nmore self confidence \nand is happy to be \nwith other people\n•\tInitiates pretend \nplay\n•\tResponds to re-\nquests from adults\n•\tPractices adult-like \nconversation about \nfamiliar themes\n•\tUses words to inte-\nract\n•\tRequests informa-\ntion, e.g. What is \nthis?\n•\tDevelops turn taking \nin conversation\n",
  "terms": [
   "19 to 24 Months"
  ],
  "definitions": [
   "Auditory memory of \n2 items"
  ]
 },
 "ARSCALES-11": {
  "source": "Auditory Habilitation Theory\n11\n25 to 30 Months\nListening\n(Audition)\nReceptive\nLanguage\nExpressive\nLanguage\nSpeech\nCognition\nSocial\nCommunication\n(Pragmatics)\n•\tAuditory memory of \n2 items in different \nlinguistic contexts\n•\tListens to familiar \nsongs on tape\n•\tComprehends longer \nutterances\n•\tListens from a di-\nstance\n•\tBegins to under-\nstand complex lan-\nguage\n•\tComprehends more \ncomplex action \nphrases\n•\tUnderstands fun-\nctions, e.g. What do \nwe use for drinking? \n– points to up\n•\tBegins to under-\nstand size differen-\nces, e.g. big/little\n•\tBegins to under-\nstand prepositions, \ne.g. in, on, under\n•\tReceptive vocabula-\nry increases\n•\tBegins to under-\nstand concept of \nquantity, e.g. one, \nall\n•\tUnderstands pro-\nnouns, e.g. he, she, \nthey, we\n•\tUses 2 - 3 word \nphrases more consi-\nstently\n•\tUses some personal \npronouns, e.g. me, \nyou\n•\tAsks for help using \ntwo or more words, \ne.g. wash hands\n•\tBegins to name pri-\nmary colors\n•\tRefers to self by \npronoun me\n•\tRepeats 2 numbers \ncounting\n•\tAnswers “wh” que-\nstions, e.g.. What’s \nthat?, What’s … \ndoing?, Who?\n•\tRecites nursery \nrhymes and favorite \nsongs\n•\tUnderstands and \nanswers “can you”. \nUses negation, e.g. \ndon’t, no\n•\tLoves experimenting \nwith prosodic featu-\nres\n•\tBegins to use stress \ncorrectly\n•\tRepeats words and \nphrases\n•\tConsonants [f, y] \nemerging\n•\tConsonants, e.g. \n[m, p, b] used in \nfinal position\n•\tWord/phrases \nshortened– medial \nconsonants often \nomitted\n•\tTends to over pro-\nnounce words\n•\tDifferent pronun-\nciation of the same \nword occurs fre-\nquently\n•\tWhispers\n•\tContinues symbolic \nplay, e.g. talking on \nthe phone\n•\tCompletes actions, \ne.g. clap hands and \nhigh 5s\n•\tUses toys appropria-\ntely\n•\tPerforms related \nactivities at play\n•\tTurns one page at a \ntime\n•\tImitates vertical, \nhorizontal lines and \ncircle\n•\tMatches identical \npicture to picture \nand shape to shape\n•\tPuts two parts of a \nwhole together\n•\tUnderstands number \nconcept of one and \ntwo\n•\tEnjoys talking, e.g. \npretends to have a \nconversation on the \nphone\n•\tCompletes actions, \ne.g. Give me five\n•\tBegins to develop \nparallel play with \nother children\n•\tTalks more in play\n•\tShares toys\n•\tAsks for help using \ntwo or more words\n•\tUses longer utteran-\nces\n",
  "terms": [
   "25 to 30 Months"
  ],
  "definitions": [
   "Auditory memory of \n2 items in different \nlinguistic contexts"
  ]
 },
 "ARSCALES-12": {
  "source": "Auditory Habilitation Theory\n12\n31 to 36 Months\nListening\n(Audition)\nReceptive\nLanguage\nExpressive\nLanguage\nSpeech\nCognition\nSocial\nCommunication\n(Pragmatics)\n•\tContinues to expand \nauditory memory - 3 \nitem auditory me-\nmory with different \nlinguistic features\n•\tSequences 2 pieces \nof information in \norder\n•\tListens to stories on \ntape\n•\tFollows 2 - 3 direc-\ntions\n•\tUnderstands most \ncommon verbs\n•\tUnderstands and \nresponds to more \ncomplex language \nand commands\n•\tCarries out 2 - 3 \nverbal commands in \none sentence\n•\tUnderstands several \nprepositions, e.g. in, \non under\n•\tExpands concept \ndevelopment\n•\tIdentifies parts of an \nobject\n•\tUnderstands time \nconcept, e.g. today, \nyesterday, tomorrow\n•\tUnderstands What is \nmissing?/Which one \ndoes not belong?\n•\tKnows gender voca-\nbulary\n•\tTalks about what \nhas drawn\n•\tGives both first and \nlast name when \nasked\n•\tRelates recent expe-\nriences\n•\tConverses in 3 - 4 \nword simple senten-\nces\n•\tBegins using more \ncomplex language\n•\tUses questions, e.g. \nwho, what, where, \nwhy\n•\tUses pronouns, e.g. \nhe, she, they, we, \nyou, me\n•\tUses some plurals\n•\tUses possessives\n•\tUses more negati-\nves, e.g. not, none, \nnobody\n•\tBegins to use and/\nbecause\n•\tNames three or \nmore colors\n•\tMakes some substi-\ntutions [f] for [th], \n[w] for [r]\n•\tMedial consonants \nstill inconsistent\n•\tFinal consonants \ninserted more regu-\nlarly\n•\tConsonants [l, r, sh, \ns, z, ch] emerging\n•\tVowels and diph-\nthongs established\n•\tOmits some unstres-\nsed parts of speech\n•\tPronunciation beco-\nmes more correct\n•\tWhispers frequently\n•\tShares toys and \ntakes turns more \nappropriately\n•\tDevelops parallel \nplay\n•\tBegins to develop \ninterest in writing \nand drawing\n•\tBegins fantasy play\n•\tMatches six color \ncards\n•\tSorts and categori-\nzes, e.g. blocks and \npegs\n•\tNames object when \npart of it is shown in \na picture\n•\tAdds two missing \nbody parts to a dra-\nwing\n•\tShows interest in \nhow and why things \nwork\n•\tCompletes 2 - 3 \ninterlocking puzzle \npieces\n•\tImitates drawing a \ncross\n•\tTakes turns and \nshares\n•\tRecites rhymes\n•\tActs out songs - \nsometimes changes \nendings\n•\tEngages in make-\nbelieve activities\n•\tBegins to ask per-\nmission of others\n•\tExpresses feeling\n•\tInitiates conversa-\ntion\n•\tUses questions for a \nvariety of reasons, \ne.g. to obtain infor-\nmation, to request\n",
  "terms": [
   "31 to 36 Months"
  ],
  "definitions": [
   "Sequences 2 pieces \nof information in \norder"
  ]
 },
 "ARSCALES-13": {
  "source": "Auditory Habilitation Theory\n13\n37 to 42 Months\nListening\n(Audition)\nReceptive\nLanguage\nExpressive\nLanguage\nSpeech\nCognition\nSocial\nCommunication\n(Pragmatics)\n•\tAuditory memory \nincreases to 5 items\n•\tSequences 3 or \nmore pieces of infor-\nmation in order\n•\tRetells a short story\n•\tFollows 3 directions\n•\tProcesses complex \nsentence structures\n•\tTracks a 6 word \nsentence\n•\tCan listen to a 10 - \n15 minute story\n•\tComprehends an \nincreasing level of \ncomplex language\n•\tUnderstands more \ndifficult concepts, \ne.g. quality, texture, \nquantity\n•\tUnderstands concept \nof day/night, e.g. di-\nstinguishes day from \nnight activities\n•\tFollows directions \nusing concepts of \nempty/full, same/\ndifferent\n•\tUnderstands loca-\ntional prepositions, \ne.g. next to\n•\tBegins to under-\nstand comparatives, \ne.g. I am taller than \nyou.\n•\tUnderstands about \n900 words\n•\tHolds conversations \nusing many correct \ngrammatical struc-\ntures (plurals, pos-\nsession, pronouns, \nprep, adj.)\n•\tUses “when” and \n“how many” que-\nstions\n•\tUses so/because\n•\tRelays a message\n•\tDescribes what \nobjects can be used \nfor\n•\tStarts to answer \n“what if?” questions\n•\tAnswers What is \nmissing?\n•\tIdentifies which one \ndoes not belong and \nanswers Why?\n•\tAttempts to answer \nproblem-solving \nquestions, e.g. What \nif?\n•\tUses about 500 in-\ntelligible words\n•\tUses some blends, \ne.g. [mp, pt, br, dr, \ngr, sm]\n•\tConsonants [j, v, th] \nemerging\n•\tSome substitutions \nstill made, e.g. [gw] \nfor [gr] in blends\n•\tPronunciations of \nwords more stable \nfrom one production \nto the next\n•\tBegins one-to-one \ncorrespondence\n•\tFollows directions \nusing concepts, e.g \nempty, full, same, \ndifferent\n•\tDevelops more dif-\nficult concepts, e.g. \nquality, quantity, \ntexture\n•\tCompares objects\n•\tBegins simple pro-\nblem solving\n•\tDevelops imagina-\ntion\n•\tTakes turns\n•\tPlays with other \nchildren more ap-\npropriately\n•\tShows understan-\nding of others’ fee-\nlings/needs\n•\tInteracts through \nsimple conversation\n•\tInitiates conversa-\ntion\n•\tEnjoys role-plays\n",
  "terms": [
   "37 to 42 Months"
  ],
  "definitions": [
   "Auditory memory \nincreases to 5 items"
  ]
 },
 "ARSCALES-14": {
  "source": "Auditory Habilitation Theory\n14\n43 to 48 Months\nListening\n(Audition)\nReceptive\nLanguage\nExpressive\nLanguage\nSpeech\nCognition\nSocial\nCommunication\n(Pragmatics)\n•\tProcesses longer \nand more complex \nlanguage structures, \ne.g. Can you find \nsomething that lives \nin a tree, has fea-\nthers and a yellow \ncrest?\n•\tFollows directions \nwith more difficult \nconcepts, e.g. Put \nthe thick blue squa-\nre behind the mpty \njug.\n•\tRe-tells longer sto-\nries in detail - 5 or \nmore sentences\n•\tTracks an 8 word \nsentence\n•\tContinues to expand \nvocabulary compre-\nhension\n•\tUnderstands singu-\nlar/plural\n•\tUnderstands diffe-\nrence between past/\npresent/ future\n•\tAnswers final word \nanalogies\n•\tIdentifies objects \nmissing from scene\n•\tUnderstands day/\nmorning/ afternoon/\nnight\n•\tMakes comparisons \nof speed/weight\n•\tUnderstands 1500 - \n2000 words\n•\tUses his/her/their\n•\tMore consistent use \nof plurals – irregular \nand regular\n•\tTalks about pictures \nand story books\n•\tUses more sophisti-\ncated imaginative \nplay\n•\tUses negatives and \nsome modals, e.g. \nshouldn’t/ won’t/ \ncan’t\n•\tUses comparisons\n•\tMakes inferences\n•\tDevelops colloquial \nexpressions\n•\tUses How much? \nHow? questions\n•\tUses 800 - 1500 \nwords\n•\tUses more complex \nlanguage structures\n•\tSpontaneous ut-\nterances are mo-\nstly grammatically \ncorrect\n•\tReduces omissions \nand substitutions\n•\tMost consonants \nestablished\n•\tMore blends emer-\nging in initial and \nfinal position\n•\tRate and rhythm \nnormal\n•\tUses appropriate \nloudness level\n•\tUses appropriate \nintonation\n•\tFor accompanying \nchart, see Sounds of \nSpeech pg 43.\n•\tDraws simple \nobjects\n•\tUnderstands time \nconcepts, e.g. \n.today/ tomorrow/ \nyesterday/ morning/ \nafternoon/ night\n•\tTells how many fin-\ngers and toes\n•\tAssociates an object \nwith an occupation, \ne.g. thermometer/\ndoctor\n•\tContinues to deve-\nlop imagination\n•\tConcentration incre-\nases\n•\tCopies simple pictu-\nre line drawings\n•\tMatches patterns\n•\tMakes inferences\n•\tIncreases confidence \nand self esteem\n•\tRequests made from \nothers, e.g. shop/\nretail assistant\n•\tUses intonation ap-\npropriately\n•\tInitiates conversa-\ntion\n•\tAdapts to changes \nof topic\n•\tUses language for \ndifferent communi-\ncative intent, e.g. \nobtaining informa-\ntion, giving infor-\nmation, expressing \nneeds/feelings, \nbargaining\n",
  "terms": [
   "43 to 48 Months"
  ],
  "definitions": [
   "Tracks an 8 word \nsentence"
  ]
 },
 "ARMOCKBOOK-152": {
  "source": "152 Introduction to Audio logic Reha bi I itation \nA slightly slower to \nnormal speech rate with \nprecise, not exaggerated, \narticulation is best for \nspeechreading. This is \nsometimes referred to \nas CLEAR speech (see \nChapters 4 and 10). \nSpeaker \nFamiliarity of Speaker \nFacial Expressions \nGestures/Articulation/ \nLip Movement \nRate of Speech \nDistractors \n• Chewing \n• Smoking \nGender \nExtent of Image \nSignal/Code \nVisibility \n• Homopheneity \n• Variability \nConstraints \n• Words, Sentences \n• Context, Topic \nRedundancy \nl \nSpeechreader \nResidual Hearing \nAge, Language Skills \nAbnormal Intelligence \nPersonality Traits \n• Maturation \n(Attention, Attitude) \nVisual Skills \nGender \nEnvironment \nDistance \nViewing Angle \nCompetition \nLighting \nSituational Cues \n/ \n1:jcijij;j:j.ili Summary of various factors related to speechreading perfor­\nmance. Arrows have been drawn from the Speaker, SignaVCode, and \nEnvironmental lists to Speechreader to signify that all these factors influ­\nence the speechreader's performance in addition to those variables that are \ndirectly related to the speechreader. \nvisual reception capabilities. Although the normal rate of speech may be too fast for optimal \nvisual processing, extreme ly slowed and exaggerated speech production does not ensure \nimproved comprehension. MechanicaUy produced slowed-down speech has actuaUy been \nfound to reduce speechreading abilities (IJsseldijk, 1992). It has been reported that speakers \nwho use a slightly slower to normal speech rate accompanied by precise, not exaggerated, \narticulation are the easiest for the speechreader to understand. In addition, the speaker should \navoid simultaneous oral activities, such as chewing, smoking, and yawning, when conversing \nwith a person with hearing loss. Other potentially counterproductive postures include holding \na hand near the mouth while talking and wearing sung lasses. While the masking effects \nof these coincidenta l activities have not been documented , they seem likely to complicate \nan already trying task. With respect to the gender of speakers, Daly et al. (1996) demon­\nstrated that female speakers are easier to speechread than are male speakers. Related to this \nfmding, little evidence exists concerning the potential influence that gender-re lated vari­\nables associated with the speaker, such as a mustache or the use of lipstick, may have on \nspeechreading success. ",
  "terms": [
   "CLEAR speech"
  ],
  "definitions": [
   "A slightly slower to \nnormal speech rate with \nprecise, not exaggerated, \narticulation"
  ]
 },
 "ART1022-2": {
  "source": "49: So think about we talked about you know the SRT right SRT test and we have our word recognition these are going to be conducted by an audiologist but just going through these six we can always start the audiologist can Start by obtaining a WIPI. Remember that stands for word intelligibility by picture identification.\n50: \n51: Okay, this has vocabulary that's appropriate for kids with hearing loss. So what you have is you have a you have 25 words and so you essentially have these picture pages with four words four pictures on each card and so the audiologist will say a word and then that child has to identify each picture goes with the word that was mentioned. So it's a closed set task because they have the pictures right in front of them. And again it's suitable for kids that have normal hearing, but it's suitable also for kids that have hearing loss that have limited receptive and expressive language capabilities. New chips is another good one you'll see audiologists use. So it stands for Northwestern University's Children's Perception of Speech Test. It is a list of 50 words.\n52: \n53: So monosyllabic, remember single syllable words. And again, four picture pointing. So again, it's closed set and it has a non-verbal test format so you have that option of taking it.\n54: \n55: Okay, we talked about ling, right? So we have our ling sound test. Okay, we know that ling is a behavioral listening. check. We know it's a great tool, but we can also use it as part of our auditory training. Okay? So we know that each of the sounds helps us to detect all the aspects of speech as they encompass the frequency range of all phonemes. And for those of you that don't remember from last class, it was on Moodle, but these are our linked and sound so we have our boo our ah our e our i our m our we have j sh sh and z okay those are our links link 10 sounds.\n56: \n57: And again, down here, you can see from each of these sounds what frequency region do they cover. So if you have a child that's missing a certain sound, you can look at this graph and it helps you to identify the frequency range and then you can go back and look at your detailed speech banana from chapter four to identify what are all those sounds that that child might be struggling with.\n58: \n59: Okay, so we can use the lane ten sounds to determine if the student is if the um child is able to detect, discriminate, and identify. So we're going to learn about Herber's model of auditory skills development, which starts with detection, sound awareness. Then we lose the discrimination, then identification, and then comprehension. We can use Lane for three out of four of those. Okay? So we can present those sounds like shh. And use them to see if the child detects that there is a sound present. We could use it for discrimination, you know, present two sounds and the child has to let us know if they're the same. We can have the child identify what sound they heard, but we can't use link for comprehension.\n60: \n61: It is not a tool for auditory comprehension\n62: \n63: Distance hearing is also important if we're going to be using Lyngs for auditory training. So what we want to do is we want to start close to the child but we want to take away the visual visual cue okay we might use the visual cue in the beginning when we're kind of training on conditioning what we're going to ask but then the goal is auditory training right so We want to take away that visual cue. So we sit next to the child and present those sounds. And then we move about three feet behind him. Kind of to the side behind him. And then we move to six feet behind him. And a lot of um clinicians will do lean for distance. So they go as far as they can from the child, still having them repeat those ling sounds to see exactly what how far, what is their range of hearing lane with their comparing plane or their hearing aid?\n64: \n65: Okay. So we know that a child with typical hearing can hear all of those like sounds from about 20 feet away. So our goal with our child care and losses to get as close to that as possible. So I know a lot of therapists that will use the ling six in the beginning of their therapy session and they'll do this ling for distance and they'll notice like hey I think something wrong with the child's hearing or their processor because we used to be able to get to 16 feet now we're only at 10. So um that really helps us to kind of get an idea of what their distance hearing is with Lane and that's so important. for when they're in the classroom, right? And if we have a child and their distance hearing is not good with their device, we need to work on that because we want to make sure that they can hear those teachers or those classmates. They should be using an ALD still and we want to make sure that um when it was called ling six you used to also hear people say like ling seven sometimes because the app\n66: \n67: So when we're presenting lane, sometimes we don't present anything. And we wait to see if the child says, wait, I didn't, I didn't hear anything. Good, because we want to make sure that you can also identify the absence of sound as well. And you also want to make sure that you're doing these in varying orders so that they don't get the rhythm of it and just start guessing.\n68: \n69: We also have the early speech perception test. So the S assesses pattern and word perception. is also a closed set format. This can be used for children about age six and up. Just heads up on that. They also have have a low verbal version for children that are age two and up. You don't have to know that for the test, but just if you put it in your notes, they have two versions, the one for the children six and up and then a lower verbal version For kids age two and up. But really, what they do is the results allow for placement into really four speech perception ability categories.\n70: \n71: The child either has no pattern perception some pattern perception, some word identification abilities, and then consistent word identification abilities.\n72: \n73: We also have the gas, which is the Glenn Donald Auditory Screening Procedure. So this one is based on Norman. and Ervers model which we're about to talk about. It's three subtests, phoning, detection, word, and sentence comprehension. This is a great one that helps to aid and planning some auditory training um because it's very predictive in nature to what are some other related auditory tasks that the child is capable of. For example, the phoneme detection is very, very comparable to LinkedIn for this test. And then we have have the Dazzle. So the Dazzle, we're going to talk about some formal auditory training programs.\n74: \n75: The Dazzle has a formal auditory training program but it also has an assessment part. So you can use just the DASL's assessment part to assess auditory skills. And it looks at sound awareness, phonetic listening, auditory comprehension. It's appropriate for ages three and up. And it gives some norms for kids with hearing loss. which is um sometimes hard to find. I give you all of these different tools because some individuals will um you know are really comfortable with auditory training and they're able to use resources to come up with their own um their own assessments and their own models but it's nice to have access to some of the ones that are more cookbook.\n76: \n77: So if you're doing this for the first time, you know exactly where to start. All right.",
  "terms": [
   "WIPI",
   "monosyllabic",
   "closed set task"
  ],
  "definitions": [
   "word intelligibility by picture identification",
   "single syllable words",
   "they have the pictures right in front of them"
  ]
 },
 "ARMOCKBOOK-181": {
  "source": "American \nSign Language Pidgin Signed \n(ASL) English (PSE) Signed English \nIndependent A combination Signed in \nlanguage; visual of ASL and the accordance \nmanual mode; sign systems with English \nown grammar; elements, grammar, \nown syntax; ranging from but signs \nsigns are the more are meaning \nmeaning based; ASL-like based; specially \nhas dialects, ( occasionally invented sign \nregionalisms, called Ameslish) markers for \nslang, puns; to the more important \ncan be written; English- like affixes in \nwide range of (sometimes English; \nvocabulary called CASE- invented by \ncovering Conceptually Bornstein; \nminute Accurate Signed used widely in \ndifferences English) . education . \nin meaning; Usually contains \nmay borrow few if any sign \nfrom other markers (see \nlanguages; is Signed English), \nverbal, but yet makes \nalso makes use frequent use of \nof nonverbal fingerspelled \nelements . English words . \nUsed in \nconjunction \nwith speech in \ninterpreting and \ncollege teaching . \nSigns are \nmeaning based . \n~ Source: Based on H. Smith, personal communication, 1984. \nLinguistics of Signing Exact Seeing \nVisual English English Essential \n(LOVE) (SEE II) English (SEE I) \nEssentially the Signs are Signs are based \nsame as SEE word based; on word roots \nII, but has a special signs (morphemes) \nmethod of for all affixes (trans/port/a/ \nwriting each in English; tion); an \nsign; used in signed in strict extreme form \neducation; accordance of word-based \ninvented by with English; signs; invented \nWampler; invented by by Anthony; \nusage is Zawolkow, not popular \ndiminishing. Pfetzing, and in United \nGustason; States, but \nwidely used in still common \neducation; very in Iowa and \ninfluential. Colorado \nschools for the \ndeaf; signs for \nall affixes. \nArtificial pedagogical systems, \ninvented for educational purposes \nNonverbal communication: natural gestures, \nfacial expression, body movements, \nbody language, pantomime \nFinger-Spelling \nManual \nrepresentation \nof the written \nlanguage; one \nhand shape \nfor each letter \nof alphabet; \nused to borrow \nEnglish words \ninASL;when \nused with \nspeech and \nspeechreading, \nit is called \nthe Rochester \nMethod. \nCued Speech \nEmploys \neight hand \nshapes in four \npositions on \nthe face; used \nin conjunction \nwith lip \nmovements \nto enable a \ndeaf person to \nlipread more \neasily; based \non sound with \nthe syllable as \nthe basic unit; \ndevised by \nOrin Cornett \nat Gallaudet \nCollege. \nEnglish \nIndependent \nlanguage; \naural-oral \nmode;own \ngrammar; own \nsyntax; words \nare meaning \nbased; contains \ndialects, \nregionalisms, \nslang, puns; \ncan be written; \nwide range of \nvocabulary \ncovering \nminute \ndifferences \nin meaning; \nmay borrow \nfrom other \nlanguages; is \nverbal but also \nmakes use \nof nonverbal \nelements . ",
  "terms": [
   "Finger-Spelling",
   "Cued Speech"
  ],
  "definitions": [
   "Manual \nrepresentation \nof the written \nlanguage; one \nhand shape \nfor each letter \nof alphabet",
   "Employs \neight hand \nshapes in four \npositions on \nthe face"
  ]
 },
 "media:ci-signal": {
  "source": "A cochlear implant changes how sound reaches the auditory nerve. A hearing aid amplifies an acoustic signal, but the implant bypasses damaged inner-ear transduction and provides electrical stimulation. Follow the parts in order. The microphone detects sound. The processor turns that input into a digital code. The external transmitter sends the information through the skin to the internal receiver. The receiver produces electrical pulses, and the electrode array stimulates auditory nerve fibers. The nerve carries that information to the brain. Keep the external transmitter separate from the internal receiver, and keep the processor separate from the electrode array. The result can provide useful access to speech, but it does not restore normal hearing. The child still needs consistent access, programming, and experience interpreting the signal.",
  "terms": [
   "hearing aid",
   "implant",
   "microphone",
   "processor",
   "receiver",
   "electrode array"
  ],
  "definitions": [
   "amplifies an acoustic signal",
   "bypasses damaged inner-ear transduction and provides electrical stimulation",
   "detects sound",
   "turns that input into a digital code",
   "produces electrical pulses",
   "stimulates auditory nerve fibers"
  ],
  "checkpoints": [
   {
    "phrase": "The result can provide useful access to speech, but it does not restore normal hearing.",
    "label": "Keep the benefit precise"
   }
  ]
 },
 "media:ci-candidacy": {
  "source": "Cochlear implant candidacy is more than a hearing threshold. The team considers hearing loss, benefit from appropriately fitted hearing aids, functional progress, medical suitability, and the support needed for rehabilitation. The lecture describes the youngest group, nine to twenty-four months, has bilateral profound sensorineural loss and limited development of auditory skills with hearing aids. For older children, the slide describes bilateral severe-to-profound loss and thirty percent or less on open-set words in the best-aided condition. That is the slide's wording. Do not transfer it to every manufacturer or every single-sided-deafness case. The packet contains conflicting single-sided-deafness percentages, so those remain unresolved. An SLP can still refer a child whose listening and language progress has stalled. A referral starts a full evaluation. It does not guarantee that the child qualifies.",
  "terms": [
   "Cochlear implant candidacy",
   "referral"
  ],
  "definitions": [
   "more than a hearing threshold",
   "starts a full evaluation"
  ],
  "checkpoints": [
   {
    "phrase": "It does not guarantee that the child qualifies.",
    "label": "Separate referral and eligibility"
   }
  ]
 },
 "media:ci-assessment": {
  "source": "Think of cochlear implant assessment as several complementary views of the same child. Audiometry describes hearing. Aided testing examines access through appropriately fitted technology. Functional observations and parent reports describe how the child uses sound during everyday life. An infant cannot complete the same speech task as an older child, so age and language ability determine the measures. In a closed-set task, the child chooses among known alternatives. An open-set task does not supply that limited answer list, making the same percent correct a different achievement. The audiologist assesses hearing and programs the implant. The surgeon handles implantation and medical care. The SLP evaluates and develops auditory, speech, and language skills. Parents contribute observations and daily learning opportunities. No single team member or questionnaire supplies every part of the decision.",
  "terms": [
   "Audiometry",
   "Aided testing",
   "closed-set task",
   "open-set task",
   "audiologist",
   "surgeon",
   "SLP"
  ],
  "definitions": [
   "describes hearing",
   "examines access through appropriately fitted technology",
   "the child chooses among known alternatives",
   "does not supply that limited answer list",
   "assesses hearing and programs the implant",
   "handles implantation and medical care",
   "evaluates and develops auditory, speech, and language skills"
  ],
  "checkpoints": [
   {
    "phrase": "No single team member or questionnaire supplies every part of the decision.",
    "label": "Combine the evidence"
   }
  ]
 },
 "media:ci-life": {
  "source": "Surgery and activation are different steps. During surgery, the array is placed and telemetry checks device function. The lecture slide places activation two to four weeks later. At activation, sound can seem strange. Understanding speech immediately is not guaranteed. Mapping adjusts electrical stimulation, with threshold levels and upper comfortable levels helping define the usable range. Follow-up combines programming with measurements of hearing and speech performance. Remember three separate time variables: age when hearing loss began, age at implantation, and duration of implant use. They describe different parts of the person's experience. Also separate the device arrangements. Binaural means hearing with two ears. Bimodal means a cochlear implant on one side and a hearing aid on the other. Bilateral cochlear implants means one implant in each ear.",
  "terms": [
   "telemetry",
   "Mapping",
   "Binaural",
   "Bimodal",
   "Bilateral cochlear implants"
  ],
  "definitions": [
   "checks device function",
   "adjusts electrical stimulation",
   "hearing with two ears",
   "a cochlear implant on one side and a hearing aid on the other",
   "one implant in each ear"
  ],
  "checkpoints": [
   {
    "phrase": "Understanding speech immediately is not guaranteed.",
    "label": "Separate activation and understanding"
   }
  ]
 },
 "media:brain": {
  "source": "Auditory function is the brain's ability to use sound meaningfully. The ear and hearing technology deliver information, but meaningful listening depends on neural processing and experience. The lecture emphasizes early development because the brain is organizing its pathways rapidly during infancy. Neuroplasticity means that experience can change neural organization. The course highlights greater auditory plasticity in the first three and a half years, without making that birthday an absolute end to learning. Cross-modal reorganization describes auditory areas being recruited for other sensory information when auditory input is absent. Developmental synchrony describes skills emerging near their expected developmental time. These ideas explain the emphasis on early, consistent access and intervention. They do not mean that owning a device is enough. The signal must be usable, and the child needs meaningful language interaction.",
  "terms": [
   "Auditory function",
   "Neuroplasticity",
   "Cross-modal reorganization",
   "Developmental synchrony"
  ],
  "definitions": [
   "the brain's ability to use sound meaningfully",
   "experience can change neural organization",
   "auditory areas being recruited for other sensory information when auditory input is absent",
   "skills emerging near their expected developmental time"
  ],
  "checkpoints": [
   {
    "phrase": "The course highlights greater auditory plasticity in the first three and a half years, without making that birthday an absolute end to learning.",
    "label": "Keep the timing qualified"
   }
  ]
 },
 "media:experience": {
  "source": "Hearing is access to sound; listening adds attention. A child may hear a voice without attending to or understanding the message. Listening age helps describe experience with useful auditory access. In the lecture's example, consistent waking-hour technology use begins at three months. At the first birthday, that child has about nine months of listening experience, not twelve. The calculation is simple, but the interpretation requires care. Device function, signal quality, daily use, and language enrichment all affect what that experience contains. Several listening-hours claims on the source slide do not agree arithmetically, so this lab flags them instead of making them answer keys. The reliable lesson is that reduced daily access accumulates. Family coaching turns everyday routines into language opportunities, while ongoing audiologic management keeps the input available and useful.",
  "terms": [
   "Hearing",
   "listening",
   "Listening age",
   "Family coaching"
  ],
  "definitions": [
   "access to sound",
   "adds attention",
   "experience with useful auditory access",
   "turns everyday routines into language opportunities"
  ],
  "checkpoints": [
   {
    "phrase": "At the first birthday, that child has about nine months of listening experience, not twelve.",
    "label": "Count useful experience"
   }
  ]
 },
 "media:acoustics": {
  "source": "Audibility means detecting that sound is present. Intelligibility means understanding the speech distinctions and message. Those are different achievements. Vowels generally have more acoustic power and strong low-to-mid-frequency energy. Many consonant cues are weaker and higher in frequency. That helps explain why someone can hear a voice clearly enough to notice it but still miss the words. Sutherland emphasizes the importance of the region around two thousand hertz for speech information. Timing also matters: vowels generally last longer than consonants, and movements between adjacent sounds create transitional cues. When you inspect the figures, read their axes carefully. The minimum-audibility graph uses sound pressure level; a clinical audiogram uses a hearing-level reference. Do not treat those scales as interchangeable, and do not equate more loudness with complete speech understanding.",
  "terms": [
   "Audibility",
   "Intelligibility",
   "Vowels",
   "consonant cues",
   "transitional cues"
  ],
  "definitions": [
   "detecting that sound is present",
   "understanding the speech distinctions and message",
   "more acoustic power and strong low-to-mid-frequency energy",
   "weaker and higher in frequency",
   "movements between adjacent sounds"
  ],
  "checkpoints": [
   {
    "phrase": "Do not treat those scales as interchangeable, and do not equate more loudness with complete speech understanding.",
    "label": "Keep scale and meaning distinct"
   }
  ]
 },
 "media:ling": {
  "source": "The Ling ten check samples access to speech sounds across low, middle, and high frequencies. It is a brief monitoring tool, not a complete diagnostic assessment. First make sure the child understands the response task. Then present sounds without visual speech cues, using a normal speaking voice. Detection asks whether the child heard something. Identification asks which sound was heard. Record those separately, along with the ear or device condition and distance. Begin close and in quiet, then increase distance when the task is reliable. If a child who previously responded to all the sounds begins missing some, investigate the change. Device trouble, a hearing change, or a middle-ear problem are possibilities, not conclusions from this check alone. Document the pattern and involve the audiologist when the difficulty persists.",
  "terms": [
   "Ling ten check",
   "Detection",
   "Identification"
  ],
  "definitions": [
   "samples access to speech sounds across low, middle, and high frequencies",
   "whether the child heard something",
   "which sound was heard"
  ],
  "checkpoints": [
   {
    "phrase": "It is a brief monitoring tool, not a complete diagnostic assessment.",
    "label": "Keep the screening limit"
   }
  ]
 },
 "media:context": {
  "source": "Speech contains redundancy: overlapping information that helps a listener recover a message when some sound is missed. Syntax supplies grammatical expectations. Semantics supplies meaning relationships. Situation supplies the physical and social context. A familiar topic can help, but a child still learning the language may not have the same predictions as an experienced adult. Noise in this lecture is broader than competing sound. Poor lighting, unclear articulation, unfamiliar vocabulary, and lack of topic knowledge can all reduce usable information. Finally, identify the demand of the listening task. Detection means noticing sound. Discrimination means telling whether sounds differ. Identification means selecting or naming what was heard. Comprehension means understanding the message. A successful response at one level does not automatically prove success at the next.",
  "terms": [
   "redundancy",
   "Syntax",
   "Semantics",
   "Situation",
   "Detection",
   "Discrimination",
   "Identification",
   "Comprehension"
  ],
  "definitions": [
   "overlapping information that helps a listener recover a message when some sound is missed",
   "grammatical expectations",
   "meaning relationships",
   "the physical and social context",
   "noticing sound",
   "telling whether sounds differ",
   "selecting or naming what was heard",
   "understanding the message"
  ],
  "checkpoints": [
   {
    "phrase": "A successful response at one level does not automatically prove success at the next.",
    "label": "Name the response demand"
   }
  ]
 },
 "media:development": {
  "source": "Use the Integrated Scales of Development to connect listening with receptive language, expressive language, speech, cognition, and social communication. The age ranges describe typical development with considerable variation. Use them to choose goals and counsel families. One missed milestone does not establish a diagnosis. Sutherland demonstrates choosing an auditory-language reference range using listening experience. A child who receives consistent access at nine months has about nine months of that experience at eighteen months of chronological age. Keep both ages visible, and do not reset every part of development to the activation date. The lecture's speech-intelligibility percentages refer to understanding by parents, not every unfamiliar listener. Some vocabulary values in the packet conflict and remain flagged. The practical goal is individualized monitoring, useful access to sound, and rich everyday interaction supported by family coaching.",
  "terms": [
   "Integrated Scales of Development",
   "age ranges",
   "speech-intelligibility percentages"
  ],
  "definitions": [
   "connect listening with receptive language, expressive language, speech, cognition, and social communication",
   "typical development with considerable variation",
   "understanding by parents, not every unfamiliar listener"
  ],
  "checkpoints": [
   {
    "phrase": "One missed milestone does not establish a diagnosis.",
    "label": "Read the whole profile"
   }
  ]
 },
 "media:at-foundations": {
  "source": "Auditory training develops the child's use of available sound. A hearing aid or cochlear implant can supply access, but the child still learns to notice, attend to, and interpret the signal. Start with assessment. Determine whether training is needed, establish a baseline for later comparison, and identify the specific skills to target. For an infant, observations and caregiver reports can be more meaningful than a word test the child cannot yet perform. Keep device function and audiologic follow-up in that picture. Before choosing an auditory-only contrast, confirm that the child can actually access it. Repeating an inaudible sound does not solve the access problem. Then involve caregivers in purposeful daily routines. A structured clinic activity and a listening opportunity during dressing can support the same goal when the response and conditions are clear.",
  "terms": [
   "Auditory training",
   "assessment"
  ],
  "definitions": [
   "develops the child's use of available sound",
   "Determine whether training is needed, establish a baseline for later comparison, and identify the specific skills to target"
  ],
  "checkpoints": [
   {
    "phrase": "Repeating an inaudible sound does not solve the access problem.",
    "label": "Check access before practice"
   }
  ]
 },
 "media:at-assessments": {
  "source": "Keep the assessment names and their structures separate. Word Intelligibility by Picture Identification uses picture choices, with four lists of twenty-five monosyllabic words in the supplied slide. The child can point instead of repeating aloud. Northwestern University Children’s Perception of Speech also uses picture choices, with fifty monosyllabic nouns in its test material. Early Speech Perception places performance into four categories, moving from no pattern perception to consistent word identification. GASP lists phoneme detection, word identification, and sentence comprehension. The Developmental Approach to Successful Listening instead names sound awareness, phonetic listening, and auditory comprehension, and has both assessment and training uses. Finally, Ling sounds can support detection, discrimination, or identification, depending on the response you request. They do not establish comprehension of a meaningful message. Vary the order, include silent trials, and document distance and device conditions. A change from the child's earlier reliable performance calls for investigation, not a diagnosis from one check.",
  "terms": [
   "Word Intelligibility by Picture Identification",
   "Northwestern University Children’s Perception of Speech",
   "Early Speech Perception",
   "GASP",
   "Developmental Approach to Successful Listening"
  ],
  "definitions": [
   "uses picture choices, with four lists of twenty-five monosyllabic words",
   "also uses picture choices, with fifty monosyllabic nouns",
   "places performance into four categories",
   "phoneme detection, word identification, and sentence comprehension",
   "sound awareness, phonetic listening, and auditory comprehension"
  ],
  "checkpoints": [
   {
    "phrase": "They do not establish comprehension of a meaningful message.",
    "label": "Separate the response levels"
   }
  ]
 },
 "media:at-hierarchy": {
  "source": "Ask what the response proves. Detection means noticing that sound is present or absent. A child dropping a block when a bell rings demonstrates awareness, without having to name the sound. Discrimination means judging whether sounds are the same or different. Identification means specifying which sound was heard, perhaps by pointing, repeating, or writing. Comprehension adds meaning. Recognizing a doorbell is identification; understanding that somebody may be waiting outside uses the meaning of that event. Similarly, repeating a direction does not by itself prove that the child understands it. Following a novel meaningful direction provides stronger evidence. The hierarchy guides training, but it is not a rigid schedule. A child may work on more than one level or return to an earlier skill. Always consider the actual task, rather than the game title. Picture selection and a hand raise can look equally simple while demanding different auditory skills.",
  "terms": [
   "Detection",
   "Discrimination",
   "Identification",
   "Comprehension"
  ],
  "definitions": [
   "noticing that sound is present or absent",
   "judging whether sounds are the same or different",
   "specifying which sound was heard, perhaps by pointing, repeating, or writing",
   "adds meaning"
  ],
  "checkpoints": [
   {
    "phrase": "The hierarchy guides training, but it is not a rigid schedule.",
    "label": "Keep the hierarchy flexible"
   }
  ]
 },
 "media:at-approaches": {
  "source": "Separate the listening level from the teaching approach. Analytic training works from smaller speech components, such as vowel and consonant contrasts. The course calls this bottom-up. Synthetic training uses meaningful speech, grammar, and context to support sentence perception and conversation. That is the top-down approach. Pragmatic training helps the listener control communication variables and repair breakdowns. Moving closer, improving the signal-to-noise ratio, establishing the topic, or asking a specific clarification can help recover a missed message. The aim is to recognize the problem and choose a useful action. Eclectic training combines strategies for the individual child. A session might refine a vowel contrast, use it in a meaningful sentence, and practice requesting clarification. Identification tells you what the response requires. Analytic or synthetic tells you how the training is organized. Neither label replaces assessment of the child's access and needs.",
  "terms": [
   "Analytic training",
   "Synthetic training",
   "Pragmatic training",
   "Eclectic training"
  ],
  "definitions": [
   "works from smaller speech components",
   "uses meaningful speech, grammar, and context",
   "helps the listener control communication variables and repair breakdowns",
   "combines strategies for the individual child"
  ],
  "checkpoints": [
   {
    "phrase": "Identification tells you what the response requires.",
    "label": "Separate skill and approach"
   }
  ]
 },
 "media:at-design": {
  "source": "A useful auditory-training plan specifies the skill, the stimuli, the activity type, and the difficulty. Formal work is structured, often one-to-one. Informal work occurs within daily routines. Both need an observable target. You can reduce difficulty by supplying a small known response set, choosing more distinct sounds, improving the listening conditions, adding familiar context, or structuring the activity. Change demands deliberately and document them. The goal is a meaningful challenge without frustration. When writing an objective, define the child's response, the conditions, the success criterion, and the time frame. For example, specify picture identification in quiet, the device and distance, whether cues are allowed, the number of correct trials, and the deadline. Those values come from the child's baseline and your plan. A cued audiovisual response does not demonstrate an independent auditory-only target. Keep the child's outcome separate from clinician responsibilities such as checking the device.",
  "terms": [
   "auditory-training plan",
   "Formal work",
   "Informal work",
   "objective"
  ],
  "definitions": [
   "specifies the skill, the stimuli, the activity type, and the difficulty",
   "structured, often one-to-one",
   "occurs within daily routines",
   "define the child's response, the conditions, the success criterion, and the time frame"
  ],
  "checkpoints": [
   {
    "phrase": "A cued audiovisual response does not demonstrate an independent auditory-only target.",
    "label": "Measure the stated target"
   }
  ]
 },
 "media:at-programs": {
  "source": "Formal curricula can help organize auditory training, but their structures differ. DASL Two uses brief individualized sessions and emphasizes sound awareness, phonetic listening, and auditory comprehension. SPICE has four named categories: detection, suprasegmental perception, vowel and consonant perception, and connected speech. SKI-HI emphasizes infant home intervention with the family, combining auditory stimulation with language and speech stimulation. The course lists four phases and eleven general skills. The Cottage Acquisition Scales integrate listening, language, cognition, and speech. Their age range differs between the supplied slide and the automatic transcript, so the lesson keeps that discrepancy visible. Learn to Talk Around the Clock emphasizes caregiver interaction in everyday home activities. Choose a program that fits the child's and family's assessed needs. Shared listening principles do not mean identical categories, targets, or pacing. A curriculum supplies resources; the individual child still determines the plan.",
  "terms": [
   "DASL Two",
   "SPICE",
   "SKI-HI",
   "Cottage Acquisition Scales",
   "Learn to Talk Around the Clock"
  ],
  "definitions": [
   "uses brief individualized sessions",
   "detection, suprasegmental perception, vowel and consonant perception, and connected speech",
   "emphasizes infant home intervention with the family",
   "integrate listening, language, cognition, and speech",
   "emphasizes caregiver interaction in everyday home activities"
  ],
  "checkpoints": [
   {
    "phrase": "A curriculum supplies resources; the individual child still determines the plan.",
    "label": "Individualize the sequence"
   }
  ]
 },
 "media:visual-foundations": {
  "source": "Begin by separating the information available to the learner. In this lecture, lipreading uses visible speech, facial expression, and body gestures. Speechreading adds the auditory signal. The deck notes that these terms are sometimes used interchangeably. Here, keep its distinction clear: watching without hearing and watching while using available hearing are different input conditions. Now focus on what the face can reveal. Front-of-mouth gestures and larger lip, jaw, and tongue movements are easier to see. But a visible movement does not uniquely identify a sound. The sounds represented by B, M, and P all involve lip closure. The same visible closure can therefore leave more than one possible sound. A viseme groups speech sounds with similar facial appearance. A homophene concerns whole words that sound different but look alike on the lips. The deck gives rise and rice as an example. Keep the level straight: a sound group is not a word group. Available hearing and sentence context may help resolve an ambiguity that vision alone leaves open. The appearance also changes across surrounding sounds and across talkers. Coarticulation means neighboring sounds influence how a sound is produced and appears. The following vowel can change the visible form of a consonant. Stress changes the message too. Emphasizing YOU in a question directs attention toward who acted. These are reasons not to treat a mouth shape as a fixed letter on a screen. Speech rate adds another demand. The deck gives a typical range of one hundred fifty to two hundred fifty words per minute. Emotion, fatigue, and speaking style can change that rate. More time can help a learner inspect the available cues, but slowing down does not create a missing sound distinction or justify exaggerated movements. Finally, keep the source limits visible. The percentages in the slides describe estimates of visible speech, not an individual word-recognition score. The deck also uses conflicting language about intelligence and performance. We preserve that uncertainty instead of turning it into a universal rule. The central checkpoint is to ask what information is actually available, and what ambiguity remains.",
  "terms": [
   "lipreading",
   "Speechreading",
   "viseme",
   "homophene",
   "Coarticulation"
  ],
  "definitions": [
   "uses visible speech, facial expression, and body gestures",
   "adds the auditory signal",
   "groups speech sounds with similar facial appearance",
   "concerns whole words that sound different but look alike on the lips",
   "neighboring sounds influence how a sound is produced and appears"
  ],
  "checkpoints": [
   {
    "phrase": "Keep the level straight: a sound group is not a word group.",
    "label": "Keep the unit distinct"
   }
  ]
 },
 "media:visual-support": {
  "source": "To make communication easier to follow, inspect four factors: the speaker, the message or code, the environment, and the speechreader. These factors interact. A clear speaker can still be difficult to follow in shadow, and a well-lit face does not remove competing noise. Choose the change that restores the missing information. Start with the speaker and the viewing conditions. Face the learner, use clear speech at a manageable rate, and enunciate without exaggerating. Avoid turning away, mumbling, or shouting. The lecture recommends a face-on position and a distance of two to five feet. Treat those as its teaching guidance, not a personalized clinical threshold. Light the face so that important movements remain visible. Now change the environment. Reducing noise supports the auditory channel; improving lighting supports the visual channel. One does not replace the other. The learner may gain useful information from residual hearing even when it is limited. Vision, attention, language knowledge, and the available auditory information all affect the task. The message matters as well. Think of the phrase, buy the blank. Many objects could fit. Now use the sentence, set the blank and chairs in the kitchen. Table becomes much more plausible because the surrounding words constrain the meaning. Knowing the topic can narrow alternatives without making every individual mouth movement unambiguous. Training can approach the task from two directions. Analytic work starts with visible components and builds toward words or phrases. Synthetic work prioritizes the meaning of the whole message, even when some components are unclear. In either case, choose interesting, useful activities with frequent success. The aim is to build the child’s understanding of the process, not just performance on an isolated drill. Interpret outcomes carefully. A learner can report easier communication without an identical change on an objective task. Both observations matter, but they are different evidence. This twenty twenty deck describes modest training gains and limited child-specific evidence. That is the source’s statement, not a newly completed research review. The missing textbook tables and benefit figure remain missing; no numerical gains are invented here.",
  "terms": [
   "Reducing noise",
   "improving lighting",
   "Analytic work",
   "Synthetic work"
  ],
  "definitions": [
   "supports the auditory channel",
   "supports the visual channel",
   "starts with visible components and builds toward words or phrases",
   "prioritizes the meaning of the whole message"
  ],
  "checkpoints": [
   {
    "phrase": "Both observations matter, but they are different evidence.",
    "label": "Distinguish reported and measured change"
   }
  ]
 },
 "media:visual-manual": {
  "source": "The lecture lists several ways to make communication visual, but a list does not make them equivalent. Separate an English-based signing system, a natural signed language, and a cueing system that supplements spoken language. The useful question is what structure or information each one represents. In the deck’s Signed English example, a lexical sign combines with grammatical markers. Consider cook, cooks, cooked, and cooking. The base carries the lexical idea; the added marker changes grammatical information. Our written pieces illustrate that relationship. They are not instructions for producing the signs. English-based systems represent English structure rather than becoming American Sign Language. American Sign Language, or A S L, is an independent language with its own vocabulary and syntax. Facial expression, head tilt, body movement, and eye gaze also carry information. Do not reduce it to English words placed on the hands. The lecture’s broad claim about the only recognized language of Deaf culture is not treated here as a universal statement about every community. The slide identifies four physical characteristics: hand configuration, movement, location, and orientation. Notice the separate questions. What shape is the hand? Where is it? Which way is it oriented? How does it move? An explanatory model can vary one feature while holding the others steady. That model does not assign a real sign meaning, and the four-part list does not erase facial or other nonmanual information. Cued Speech has a different purpose. It supplements speechreading by adding visual information about phonemes that are unclear on the lips. Imagine the mouth leaves several possibilities. The supplementary cues help distinguish those possibilities alongside the spoken language. This is a conceptual explanation, not an invented cue chart, and it is not the same system as A S L. Use three checkpoints when comparing these approaches. An English-based system represents English structure. A S L has its own language structure. Cued Speech supplements visible spoken-language information. The student deck contains a naming problem for SEE Two and references a comparison table that is absent. Keep those gaps open rather than memorizing a guessed expansion or unseen table.",
  "terms": [
   "English-based systems",
   "American Sign Language",
   "Cued Speech"
  ],
  "definitions": [
   "represent English structure",
   "an independent language with its own vocabulary and syntax",
   "supplements speechreading by adding visual information about phonemes that are unclear on the lips"
  ],
  "checkpoints": [
   {
    "phrase": "The supplementary cues help distinguish those possibilities alongside the spoken language.",
    "label": "Identify what the cues add"
   }
  ]
 }
};
function unmark(html){return html.replace(/<strong class="e2-term">([\s\S]*?)<\/strong>/g,'$1');}
function markHTML(html,plan){
 if(/<span class="e2-(?:term|definition)">/.test(html))return html;
 html=unmark(html);
 if(!plan)return html;
 var selections=[];
 (plan.terms||[]).forEach(function(text){selections.push({text:text,kind:'e2-term'});});
 (plan.definitions||[]).forEach(function(text){selections.push({text:text,kind:'e2-definition'});});
 selections.sort(function(a,b){return b.text.length-a.text.length;});
 var protectedDepth=0;
 return html.split(/(<[^>]+>)/g).map(function(bit){
  if(bit.charAt(0)==='<'){
   if(/^<(?:a|mark)\b|^<strong\b[^>]*e2-emphasis/.test(bit))protectedDepth++;
   if(/^<\/(?:a|mark|strong)>/.test(bit))protectedDepth=Math.max(0,protectedDepth-1);
   return bit;
  }
  if(protectedDepth)return bit;
  var ranges=[];
  selections.forEach(function(s){
   var at=0;
   while((at=bit.indexOf(s.text,at))>=0){
    var end=at+s.text.length;
    var whole=s.kind!=='e2-term'||(!(/[\p{L}\p{N}]/u.test(s.text.charAt(0)))||at===0||!(/[\p{L}\p{N}]/u.test(bit.charAt(at-1))))&&(!(/[\p{L}\p{N}]/u.test(s.text.slice(-1)))||end===bit.length||!(/[\p{L}\p{N}]/u.test(bit.charAt(end))));
    if(whole&&!ranges.some(function(r){return at<r.end&&end>r.start;}))ranges.push({start:at,end:end,kind:s.kind});
    at=end;
   }
  });
  ranges.sort(function(a,b){return a.start-b.start;});
  var out='',from=0;
  ranges.forEach(function(r){out+=bit.slice(from,r.start)+'<span class="'+r.kind+'">'+bit.slice(r.start,r.end)+'</span>';from=r.end;});
  return out+bit.slice(from);
 }).join('');
}
function points(nodes,nested,ordered){
 var tag=ordered?'ol':'ul';
 return '<'+tag+' class="'+(nested?'note-subpoints':'note-points')+'">'+nodes.map(function(p){
  var html=typeof p==='string'?p:p.text,plan=plans[html],children=typeof p==='string'?[]:p.children||[];
  var extra=plan&&plan.supplement;
  return '<li'+(plan&&plan.checkpoint?' class="reading-checkpoint"':'')+'>'+(plan&&plan.checkpoint?'<b class="checkpoint-label">'+L.util.esc(plan.checkpoint)+'</b>':'')+markHTML(html,plan)+(children.length?points(children,true,p.ordered):'')+(extra?'<aside class="reading-checkpoint reading-supplement"><b class="checkpoint-label">'+L.util.esc(extra.label)+'</b><p>'+L.util.esc(extra.text)+'</p></aside>':'')+'</li>';
 }).join('')+'</'+tag+'>';
}
function source(code,text){
 var plan=sourcePlans[code];
 if(!plan||plan.source!==text)return L.util.esc(text);
 var encoded={terms:plan.terms.map(L.util.esc),definitions:plan.definitions.map(L.util.esc)};
 var ranges=(plan.checkpoints||[]).map(function(check){var start=text.indexOf(check.phrase);return {start:start,end:start+check.phrase.length,label:check.label};}).filter(function(r){return r.start>=0;}).sort(function(a,b){return a.start-b.start;}),out='',from=0;
 ranges.forEach(function(r){
  if(r.start<from)return;
  out+=markHTML(L.util.esc(text.slice(from,r.start)),encoded)+'<span class="source-checkpoint"><b class="source-checkpoint-label">'+L.util.esc(r.label)+'</b>'+markHTML(L.util.esc(text.slice(r.start,r.end)),encoded)+'</span>';
  from=r.end;
 });
 return out+markHTML(L.util.esc(text.slice(from)),encoded);
}
// Older Guide cards are presentation copies of the same Exam 2 teaching.
// Preserve their links and do not touch Exam 1 Guide cards.
Object.values(L.GUIDE).flat().forEach(function(card){
 var topic=L.EXAM2_DATA.topics.find(function(t){return card.id==='e2-'+t.id+'-guide';});
 if(!topic)return;
 var links=card.html.match(/<a\b[^>]*>[\s\S]*?<\/a>/g)||[];
 card.html='<div class="annotated-reading">'+topic.sections.map(function(s){return '<section class="note-group"><h4>'+L.util.esc(s.outlineTitle||s.title)+'</h4>'+points(s.outline||s.points)+'</section>';}).join('')+'</div>';
 card.html+=links.filter(function(link){return !card.html.includes(link);}).map(function(link){return '<p>'+link+'</p>';}).join('');
});
L.studyAnnotations={points:points,source:source,markHTML:markHTML,plans:plans,sourcePlans:sourcePlans};
})(typeof window!=='undefined'?window:globalThis);
