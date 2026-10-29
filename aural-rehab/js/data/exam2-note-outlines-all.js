(function(root){
 'use strict';
 var D=root.L.EXAM2_DATA;
 function T(text){return '<strong class="e2-term">'+text+'</strong>';}
 function G(text){return '<strong class="e2-emphasis">'+text+'</strong>';}
 function B(text){return '<strong class="note-label">'+text+'</strong>';}
 function p(text,children,ordered){return {text:text,children:children||[],ordered:!!ordered};}
 // Individually authored outlines retain each section's original source and concept mapping.
 var outlines={
 'ci-signal':[
  [
   p('A '+T('cochlear implant (CI)')+' provides electrical access to sound information.',[
    'It stimulates '+T('auditory nerve fibers')+' in a person with '+T('sensorineural hearing loss')+'.',
    'It bypasses damaged inner-ear transduction, the step that normally changes sound-driven activity into a neural signal.',
    'Bypassing damaged '+T('hair cells')+' does not repair or replace those cells. The implant supplies a different route for delivering information to the nerve.'
   ]),
   p('A '+T('hearing aid')+' and a CI deliver different forms of input.',[
    'The hearing aid amplifies acoustic input through the existing hearing pathway.',
    'The CI converts incoming sound information into electrical stimulation.',
    G('A CI does not restore normal hearing')+'. The goal is useful hearing and improved communication, with rehabilitation helping the person learn to use the input.',
    'The October 6 lecture emphasizes this limit. Better access and normal hearing are different claims.'
   ]),
   p('Read the source '+T('audiogram')+' as an illustration of aided detection.',[
    'Its C symbols show better aided detection than its A symbols.',
    'Appropriately fitted hearing aids can still provide limited access in severe-to-profound loss.',
    'These plotted thresholds illustrate the teaching point. They do not guarantee a particular recipient’s thresholds or speech understanding.'
   ])
  ],
  [
   p(B('External components')+' receive sound and prepare information for transmission.',[
    'The '+T('microphone')+' detects environmental acoustic signals.',
    'The '+T('sound processor')+' converts the incoming signal into a digital code.',
    'The '+T('transmitting coil/transmitter')+' sends information across the skin to the internal receiver.',
    'The '+T('battery')+' supplies power. The external coil is not the electrode array placed inside the cochlea.'
   ]),
   p(B('Internal components')+' deliver the electrical stimulation.',[
    'The '+T('receiver')+' receives transmitted information and converts it into '+T('electrical pulses')+'.',
    'The '+T('electrode array')+' stimulates auditory nerve fibers.',
    'Keep receiving, processing, transmitting, and stimulating separate. The microphone receives acoustic input rather than directly stimulating the nerve.'
   ]),
   p('Follow the signal from the processor to the brain.',[
    '<strong class="signal-sequence">Processor → transmitter → receiver → array → nerve → brain</strong>.',
    'The auditory nerve carries the resulting information to the brain, where it is interpreted.',
    'Successful transmission is the access pathway. Learning to interpret that information is part of the rehabilitation task.'
   ])
  ],
  [
   p('The lecture traces a progression from electrical experiments to wearable implants.',[
    T('Alessandro Volta')+' is associated with the lecture’s 1790 electrical experiments.',
    'Other named contributors include '+T('Eddington')+', '+T('William House')+', '+T('Schindler')+', '+T('White')+', and '+T('Clark')+'.',
    'House’s 1972 wearable '+T('House/3M')+' device used one electrode in the '+T('basal cochlea')+'.',
    T('Multichannel systems')+' became widely used in the 1980s. Keep the earlier single-electrode device distinct from this later development.'
   ]),
   p('The course names three implant systems and selected historical landmarks.',[
    T('Cochlear')+' received FDA approval for the '+T('Nucleus 22')+' in 1985.',
    T('MED-EL')+' developed a '+T('behind-the-ear processor')+' in 1991.',
    T('Advanced Bionics')+' is associated here with simultaneous stimulation of multiple electrodes.',
    'These are the systems and milestones taught in the packet, rather than a current product comparison or purchasing recommendation.'
   ]),
   p('The worldwide implant total is a dated historical figure.',[
    'The slide reports more than 736,900 implants in '+B('2019')+'.',
    'Keep the date attached to the number. It is not a current count and does not establish that the market or available devices have stayed the same.'
   ])
  ]
 ],
 'ci-candidacy':[
  [
   p(T('CI candidacy')+' is evaluated by a team using several kinds of evidence.',[
    'Assess the hearing loss and benefit from appropriately fitted '+T('hearing aids')+'.',
    'The audiologist, surgeon, SLP, patient, and family contribute different information about access, communication, medical suitability, and daily needs.',
    'An audiogram alone does not describe the child’s complete functional progress or family situation.'
   ]),
   p('Keep three decisions separate.',[
    T('FDA indications')+' concern the labeled use of a device.',
    T('Insurer requirements')+' concern the conditions for coverage.',
    'Expected meaningful benefit concerns the patient’s needs, current performance, and rehabilitation context.',
    'These decisions are related, but satisfying one is not proof that every other requirement has been satisfied.'
   ]),
   p('Support and participation matter alongside auditory findings.',[
    'Consider motivation, a support system, realistic expectations, medical suitability, and participation in '+T('auditory rehabilitation')+'.',
    'A '+T('referral')+' requests a full evaluation. An SLP does not have to independently prove every surgical or insurance criterion before making that referral.'
   ]),
   p('Use the instructor’s stated study boundary.',[
    'On October 6, Sutherland explicitly directs students to '+G('study her own CI lecture')+' because it incorporates selected guest content.',
    'Manufacturer details in the full guest deck provide supporting context. They are not a second equally weighted exam blueprint.'
   ])
  ],
  [
   p('Interpret the course’s adult criteria together.',[
    'The slide describes moderate-to-profound low-frequency loss and severe-to-profound mid/high-frequency loss, with assessment of aided speech recognition.',
    'It also includes desire to use hearing, no medical contraindications, high motivation, and realistic expectations.',
    'The slide does not supply one universal adult percentage cutoff. Do not invent a number to fill that gap.'
   ]),
   p('For ages '+B('9–24 months')+', the slide emphasizes auditory development with appropriate amplification.',[
    'It lists bilateral profound '+T('sensorineural hearing loss (SNHL)')+' and insufficient development of simple auditory skills.',
    'Family participation in a program emphasizing auditory development, medical suitability, motivation, and appropriate expectations are also included.',
    'The target is the child’s developing use of sound, rather than an adult word test the infant cannot perform.'
   ]),
   p('For ages '+B('2–18 years')+', distinguish the hearing-loss and aided-performance findings.',[
    'The slide lists bilateral severe-to-profound SNHL and limited auditory or speech-language progress with hearing aids.',
    'It gives ≤30% '+T('open-set word recognition')+' in the '+T('best-aided condition')+'. The percent describes word recognition rather than a hearing threshold.',
    'The October 6 transcript says “less than 30%.” Practice involving the boundary explicitly names the slide so the difference is visible.'
   ]),
   p('These are criteria as taught in this course packet.',[
    'They are not a current eligibility determination for an individual patient.',
    'Device-specific indications can differ. Interpret age, aided benefit, function, and support together without silently universalizing this slide.'
   ])
  ],
  [
   p('The '+T('single-sided deafness (SSD)')+' teaching example includes ear-specific findings.',[
    'The course identifies age 5 years and older.',
    'The implant-ear '+T('pure-tone average (PTA)')+' is greater than 80 '+T('dB HL')+', with normal or near-normal hearing in the other ear.',
    'A PTA describes hearing thresholds in dB HL. A word-recognition score describes the percentage of words recognized.'
   ]),
   p('Keep the source conflict visible.',[
    'The filled slide prints an aided word score of “&lt;30 dB HL.” That is a unit error because a word score is a '+T('percentage')+'.',
    'The October 6 transcript says less than 30%. The guest PDF on page 17 says ≤5%.',
    'The contralateral-ear boundary also differs, with &lt;30 on the course slide and ≤30 in the guest deck.'
   ]),
   p('Do not turn the unresolved values into a confirmed answer.',[
    'The conflicting SSD percentages remain visible in Sources and are excluded from keyed boundary questions.',
    'The reliable distinction is threshold measurement versus word-recognition performance. Choosing one percentage silently would conceal the evidence gap.'
   ])
  ],
  [
   p('In infants and toddlers, document changes in responses to sound.',[
    'Possible referral signs include no reaction to loud sounds, not searching for sound, or no response to voices even at close range.',
    'Also note stopped babbling or babbling that is not progressing toward understandable speech.',
    'Describe the actual observed behavior and the conditions in which it occurs.'
   ]),
   p('In school-age children, look for persistent access and progress concerns with appropriately fitted technology.',[
    'Examples include repeatedly missed '+T('Ling sounds')+' and increasing reliance on '+T('remote microphones')+' or visual cues even in quiet.',
    'Other examples are slow auditory progress, communication breakdowns, frustration, and marked '+T('listening fatigue')+'.',
    'A change from the child’s previous performance is meaningful information for the team.'
   ]),
   p('A referral sign prompts assessment rather than independently proving candidacy.',[
    'Document what changed, the technology being used, the setting, and the listening behavior.',
    'This helps distinguish an observed communication concern from a conclusion about surgical eligibility.'
   ])
  ]
 ]
 };
 Object.assign(outlines,{
 'ci-assessment':[
  [
   p('Measure hearing both without and with the child’s technology.',[
    T('Unaided behavioral testing')+' examines responses without amplification when developmentally feasible.',
    T('Electrophysiological measures')+', including '+T('ABR/ASSR')+', provide additional evidence about auditory responses and thresholds.',
    T('Aided behavioral thresholds')+' and '+T('speech perception')+' examine access with appropriately fitted hearing aids when the child can perform the task.'
   ]),
   p('Match the test to '+T('age')+', '+T('language skills')+', and the response the child can make.',[
    'Very young infants cannot complete an older child’s open-set speech-recognition task.',
    'Objective threshold evidence, behavioral observations, functional progress, and family/team input become essential.',
    'An unavailable speech score is not a score of normal function, a measured zero, or automatic exclusion from evaluation.'
   ]),
   p(T('Open-set recognition')+' does not supply a limited known answer list.',[
    'The child must recognize the speech without choosing among a small set of provided alternatives.',
    'These tasks are harder than closed-set recognition, with nominal chance performance near zero.',
    'The course names '+T('MLNT')+', '+T('LNT')+', and '+T('Pediatric AzBio')+'. Testing may occur in quiet or noise.',
    'Recorded presentation is preferred where possible to reduce variation introduced by the examiner’s voice and delivery.'
   ]),
   p(T('Closed-set recognition')+' constrains the possible responses.',[
    'Examples include pointing to one of several pictures or choosing from a familiarized word list.',
    'The alternatives provide support that an open-set task does not provide.',
    'The same percentage on open- and closed-set tasks does not establish the same level of performance.'
   ])
  ],
  [
   p(T('Functional questionnaires')+' describe meaningful sound use outside a single test session.',[
    T('IT-MAIS')+' is taught for birth–3 years, using 10 parent interview questions.',
    'The October 6 discussion distinguishes spontaneous vocalization, alerting, and meaning from behavior produced only after prompting.',
    'A parent’s account adds information about everyday listening that a brief sound-booth measure may not capture.'
   ]),
   p('Keep the course’s named tools and question counts distinct.',[
    T('MAIS')+' is listed for age 3 years and up, with 10 questions.',
    T('Little Ears')+' has 35 parent questions. The supplied slide describes its age range as birth and up.',
    'These tools describe auditory development. They do not replace medical or audiometric assessment.'
   ]),
   p('Choose the tool’s setting and informant to match the question.',[
    T('PEACH')+' addresses everyday performance in quiet and noise.',
    T('ELF')+' addresses early listening at different distances.',
    T('CHILD')+' addresses home listening and can include an older child’s participation.',
    T('LIFE')+' provides classroom perspectives.',
    T('FAPI')+' provides a detailed functional auditory-skills profile.'
   ]),
   p('Interpret reports with their source limits in view.',[
    'Choose by age, abilities, setting, and informant. Parent, teacher, child, and SLP observations contribute different perspectives.',
    'The student presentations are not verified scoring manuals. Exact scoring algorithms from recollections are not keyed here.',
    'Documented functional progress helps the team judge benefit and the need for referral.'
   ])
  ],
  [
   p(T('Medical evaluation')+' examines suitability beyond the hearing test.',[
    'The lecture lists history, physical examination, '+T('genetics')+', coexisting conditions, vaccinations, and imaging.',
    T('MRI')+' is contrasted with '+T('CT')+' as soft-tissue versus bony-anatomy imaging in this course.',
    'These components answer medical questions that a language sample or aided speech score cannot answer by itself.'
   ]),
   p(T('Family counseling')+' prepares the family for the process and ongoing work.',[
    'Discuss normal hearing versus CI hearing, the timeline, communication options, speech therapy, realistic expectations, and support groups.',
    'The slide also includes manufacturers, immunizations, imaging, genetics, and continuing care.',
    'Counseling connects the technical information to what the family will do and experience over time.'
   ]),
   p('The course names family support and service connections.',[
    T('Early Steps')+' and the '+T('Parent Pupil Education Program')+' are among the named resources.',
    T('Guide By Your Side')+' and '+T('Louisiana Hands and Voices')+' are also listed.',
    'Learn their role in connecting families with support. This packet does not establish their current availability, eligibility, or services.'
   ])
  ],
  [
   p(T('Parents and family')+' contribute to decisions and daily habilitation.',[
    'They provide information about communication and listening in ordinary routines.',
    'Their participation extends the plan beyond clinic appointments.'
   ]),
   p('Distinguish the core clinical roles.',[
    'The '+T('audiologist')+' assesses hearing, contributes to candidacy, and programs or maps the CI throughout the lifespan.',
    'The '+T('SLP')+' evaluates and develops speech, language, and auditory skills. Stalled progress may first become apparent during this work.',
    'The '+T('ENT/surgeon')+' performs implantation and manages the medical aspects of care.',
    'Placing the electrode array and checking or programming its function are different responsibilities.'
   ]),
   p('Additional team members depend on the patient’s needs.',[
    'The lecture names a '+T('psychologist')+', '+T('genetic counselor')+', and '+T('educator')+'.',
    'It also names a '+T('social worker')+', '+T('patient navigator')+', and '+T('service coordinator')+'.',
    'The team combines these contributions to make and carry out an individualized recommendation.'
   ])
  ]
 ],
 'ci-life':[
  [
   p(T('Implantation')+' and '+T('activation')+' are different appointments.',[
    'During surgery, the surgeon positions the electrode array.',
    'The audiologist performs '+T('telemetry')+' to check device and electrode function.',
    'A functioning device during surgery is not a measure of the child’s eventual real-world language benefit.'
   ]),
   p('Keep the activation timing attached to its source.',[
    'Sutherland’s slide gives '+B('2–4 weeks after surgery')+' for initial activation.',
    'The guest describes 2–3 weeks. Use the labeled course range for course practice.',
    'Neither range is a guarantee for every patient.'
   ]),
   p('The first experience of sound can be unfamiliar.',[
    'Voices may initially seem robotic or cartoonlike, and emotional reactions vary.',
    'Immediate fluent understanding is not promised. Access begins a learning process rather than completing it.',
    'The visit includes emotional support, progressive programs, and instructions for using accessories.'
   ])
  ],
  [
   p(T('Mapping')+' adjusts the implant’s electrical stimulation program.',[
    T('T levels')+' concern threshold or the softest detectable stimulation.',
    'The upper comfortable '+T('C level')+' concerns the comfortable upper end of stimulation.',
    T('Progressive maps')+' allow gradual changes as the recipient’s tolerance and experience develop.'
   ]),
   p('Evaluate what the programming change actually produces.',[
    'Follow-up considers comfortable loudness, sound quality, and speech understanding.',
    T('Aided soundfield thresholds')+' and speech measures examine the result.',
    'Changing a setting is an action. Improved measured access or communication is an outcome that needs its own evidence.'
   ]),
   p('The lecture gives an example follow-up schedule after the initial map.',[
    'The landmarks are 2 weeks, 1 month, 3 months, 6 months, and then annually.',
    'These are course examples. Follow-up is individualized and continues across the lifespan.'
   ])
  ],
  [
   p('Outcome influences come from several interacting areas.',[
    T('Intrinsic characteristics')+' include cognitive ability, family environment, age at hearing-loss onset, and pre-implant hearing.',
    T('Device characteristics')+' include technology, device function, duration of use, and age at implantation.',
    'The slide also includes '+T('anatomy')+', surgery, '+T('etiology')+', '+T('spiral ganglion survival')+', prior hearing-aid use, rehabilitation, and education.'
   ]),
   p('Do not substitute one timing variable for another.',[
    T('Age at onset')+' describes when hearing loss began.',
    T('Age at implantation')+' describes when the implant was placed.',
    T('Duration of implant use')+' describes elapsed experience with the device.',
    'Children of the same chronological age can therefore have different histories of usable auditory access.'
   ]),
   p('Interpret the cited Dettman result within its stated limits.',[
    'The lecture reports up to 80% with '+T('receptive vocabulary')+' in the normal range at school entry among children implanted before 12 months in the referenced cohort.',
    'Receptive vocabulary concerns understood vocabulary. This outcome does not establish normal hearing, every language ability, or guaranteed success for every child.'
   ]),
   p('Earlier access supports learning opportunities but does not replace habilitation.',[
    'The lecture associates earlier implantation with easier device bonding and improved speech, language, academic, and social outcomes.',
    'Consistent access and rehabilitation remain necessary. Surgery alone does not teach the child language.'
   ])
  ],
  [
   p(T('Binaural hearing')+' means hearing with two ears.',[
    'It is the broader listening arrangement rather than the name of one specific device combination.'
   ]),
   p(T('Bimodal hearing')+' uses a CI on one side and a hearing aid on the other.',[
    'The two ears use different types of technology.',
    'Keep this arrangement distinct from having an implant in each ear.'
   ]),
   p(T('Bilateral CIs')+' means one cochlear implant in each ear.',[
    'The slide uses “bilateral hearing” as shorthand for two CIs in this context.',
    'That shorthand is not a universal definition of the word bilateral. Name the devices when the distinction matters.'
   ])
  ]
 ]
 });
 Object.assign(outlines,{
 'brain':[
  [
   p(T('Auditory function')+' is the brain’s ability to use sound meaningfully.',[
    'Sound becomes a pattern of neural activity that travels to the brain and is integrated with other input.',
    'The resulting response can range from alerting to music or spoken communication.',
    'Receiving a signal and using its meaning are connected stages rather than identical achievements.'
   ]),
   p('Follow the lecture’s four-part auditory task.',[
    'Pick up the sound signal.',
    'Change it into neural responses.',
    'Send the signal to the appropriate brain areas.',
    'Process the information meaningfully and respond as needed.'
   ],true),
   p(T('Access to sound')+' is the foundation for auditory learning.',[
    'Hearing technology and ongoing '+T('audiologic management')+' support delivery of usable information.',
    'The lecture calls the ears the “doorway to the brain.” Opening that doorway supports learning, while meaningful processing is what the brain must develop.'
   ]),
   p('Keep the prenatal timeline attached to the course’s teaching model.',[
    'The slide says the '+T('cochlea')+' is formed and functional by about 20 weeks of gestation.',
    'It describes listening before birth and about 20 weeks of prenatal listening experience by term.',
    'These figures convey the importance of early auditory experience. They do not establish precisely identical experience in every pregnancy.'
   ])
  ],
  [
   p('Early experience helps organize '+T('neural connections')+'.',[
    'The lecture describes more than one million new connections per second in the first few years.',
    'It also gives speech-sound sensitivity in newborns as young as four days as an example of early perceptual abilities.',
    'Treat these as the lecture’s developmental examples, rather than a direct measurement of an individual child’s learning.'
   ]),
   p('Experience tunes perception toward the '+T('phonemes')+' heard in daily language.',[
    'By the end of the first year, the lecture describes reorganization toward the language or languages encountered regularly.',
    'Frequently encountered speech distinctions become better represented. Distinctions not used in those languages become less salient.',
    'This connects the sound environment to the categories the child learns to hear and use.'
   ]),
   p(T('Neuroplasticity')+' is the brain’s ability to alter its structure and function with stimulation.',[
    'The lecture emphasizes greater auditory plasticity in the first 3½ years.',
    'Foundational pathways for vision, hearing, and language develop during the first year in the course account.',
    'Early effective technology supplies auditory input while these pathways are organizing.'
   ]),
   p('Interpret “'+T('neurobiological emergency')+'” as an emphasis on early access and intervention.',[
    'The phrase communicates urgency about missed auditory experience.',
    'It does not mean that every pathway stops changing on a particular birthday or that later intervention cannot help.'
   ])
  ],
  [
   p(T('Cross-modal reorganization')+' describes use of auditory cortical areas for other sensory functions when auditory input is absent.',[
    'The slide locates primary auditory cortex in '+T('Heschl’s gyrus')+' and cites visual or tactile recruitment in deaf adults.',
    'The teaching issue is how available input relates to neural organization.'
   ]),
   p('Keep the educational implication precise.',[
    'This account does not establish that visual language or touch should be withheld from a child.',
    'When pursuing listening and spoken-language goals, the relevant target is timely, effective auditory access.'
   ]),
   p(T('Developmental synchrony')+' means acquiring skills near their biologically expected time.',[
    'The lecture contrasts a developmental approach alongside peers with remedial work after delayed auditory and language development.',
    'The point is the timing of opportunities to learn, rather than assuming that an implant by itself completes the developmental process.'
   ]),
   p('Caregivers help shape the daily language environment.',[
    '“Muddy in, muddy out” emphasizes '+T('input quality')+'. A device that is worn but supplies an unclear signal does not provide the intended access.',
    '“Eyes open, technology on” is the lecture’s reminder about consistent waking-hour access.',
    'Audiologists and SLPs support families in troubleshooting devices and building useful interaction throughout the day.'
   ])
  ]
 ],
 'experience':[
  [
   p(T('Hearing')+' concerns access to or perception of sound.',[
    'A child may detect that a voice is present without attending to the message.',
    'The availability of sound is the starting point, rather than proof that the child used its information.'
   ]),
   p(T('Listening')+' involves conscious attention to sound.',[
    'A young listener may benefit from a cue to attend.',
    'Hearing a voice does not establish that the child listened to it or understood what was said.'
   ]),
   p('Listening experience supports increasingly complex language use.',[
    T('Phonetic categories')+' concern the speech-sound distinctions the listener learns.',
    T('Phonological processes')+' concern the organization and use of speech-sound patterns.',
    T('Lexical-semantic use')+' concerns words and their meanings.',
    'The lecture links these foundations to reading and higher-level language use.'
   ]),
   p('The 20,000-hour figure illustrates cumulative experience.',[
    'The lecture uses about 20,000 listening hours in five years as a teaching model.',
    'It is not a diagnostic cutoff or a guarantee that reaching a total produces a particular language outcome.'
   ])
  ],
  [
   p('The course’s '+T('Day Zero')+' begins with consistent technology use throughout waking hours.',[
    T('Listening age')+' reflects experience with usable auditory input.',
    T('Chronological age')+' counts time since birth.',
    'The October 20 discussion uses “day one” colloquially while keeping the same elapsed-month calculation.'
   ]),
   p('Calculate elapsed experience from the stated start of consistent access.',[
    'Access beginning at 3 months gives about 9 months of listening experience at the first birthday: 12 − 3 = 9.',
    'Access beginning at 9 months gives about 9 months of experience at 18 months of chronological age: 18 − 9 = 9.',
    'The subtraction describes the example’s elapsed experience. It assumes the consistent useful access specified in the example.'
   ]),
   p('Use listening-age milestones as approximate developmental guides.',[
    'The slide describes about 10–12 months of listening before single words.',
    'It then describes another 10–12 months before word combinations.',
    'These are not guaranteed deadlines or reasons to stop monitoring the child’s actual progress.'
   ]),
   p('The quality and amount of experience both matter.',[
    'Consider age at access, '+T('speech-signal quality')+', and daily device-use time.',
    'Also consider the family’s and therapist’s skill in providing meaningful auditory-language enrichment.',
    'Elapsed calendar time with a device is not automatically equivalent to the same amount of clear, useful listening experience.'
   ])
  ],
  [
   p('Daily access accumulates across the year.',[
    'The lecture’s 10-hour/day example gives 10 × 365 = 3,650 hours/year.',
    'Its 12-hour/day example gives 12 × 365 = 4,380 hours/year.',
    'These examples show why small daily differences can become large differences in cumulative opportunity.'
   ]),
   p('Preserve the discrepancy in the slide’s part-time-use comparison.',[
    'The slide claims that 4 hours/day takes six years to equal a typical infant’s year and that 3 hours/day takes nine years to equal a full-use preschool year.',
    'Those equivalences do not follow from its stated daily hours: 3,650 ÷ (4 × 365) = 2.5 years, and 4,380 ÷ (3 × 365) = 4 years.',
    'The six- and nine-year claims remain source conflicts and are not keyed as correct arithmetic.'
   ]),
   p(T('Audiologic management')+' establishes access that daily interaction can use.',[
    'Parents and interventionists integrate listening into play, meals, dressing, reading, and conversation.',
    T('Parent coaching')+' helps extend learning beyond a brief weekly therapy visit.',
    'The purpose is meaningful interaction throughout routines, rather than device wear without opportunities to use sound.'
   ]),
   p('When progress stalls, revisit '+T('audibility')+' and '+T('device function')+'.',[
    'Do not assume the child needs a harder task or is unmotivated.',
    'Consistent use of a poorly functioning device does not ensure a clear signal. Review access and the learning conditions with the care team.'
   ])
  ]
 ],
 'acoustics':[
  [
   p(T('Audibility')+' means that the presence of sound can be detected.',[
    T('Intelligibility')+' concerns access to the speech distinctions and meaning needed to understand the message.',
    'A listener can hear someone speaking while missing consonant information needed to identify the words.',
    '“I hear it” and “I understand it” therefore answer different questions.'
   ]),
   p('Read both boundaries of the '+T('minimum-audibility')+' figure.',[
    'The horizontal dimension is frequency. The vertical dimension uses '+T('dB SPL')+'.',
    'The lower boundary is the minimum sound pressure needed for detection.',
    'The upper boundary is the '+T('threshold of feeling')+'.',
    'The space between them represents the '+T('dynamic range of hearing')+'.'
   ]),
   p('The boundaries vary across frequency.',[
    'The October 20 explanation places the widest range near 3–4 kHz and notes that low-frequency sounds require more sound pressure for detection.',
    'Do not assume that this SPL-based lower boundary is flat because a clinical audiogram uses an HL reference.'
   ])
  ],
  [
   p('Keep '+T('intensity')+' values attached to their measurement scale and source.',[
    'The deck gives average speech as about 45 dB '+T('HL')+'. The October 20 transcript gives about 40 dB HL and 65 dB '+T('SPL')+'.',
    'HL and SPL use different references. There is no universal subtraction that converts every stimulus between them.',
    'Exact 40-versus-45 recall is not keyed here because the supplied sources differ.'
   ]),
   p('Speech intensity varies with distance, sound, and speaker.',[
    'Increasing distance reduces the speech intensity available to the listener.',
    'Individual phonemes differ greatly in power.',
    'The lecture gives male conversational speech as averaging about 3 dB greater intensity than female speech. This is an average, not a rule for every speaker.'
   ]),
   p('The course’s '+T('speech spectrum')+' is narrower than its broader hearing-range example.',[
    'The overall speech spectrum is taught as about 50–10,000 Hz.',
    'The broader hearing range discussed in class is 20–20,000 Hz.',
    'Most speech energy is below 1,000 Hz. High energy does not mean that all useful speech information is concentrated there.'
   ]),
   p(T('Vowel energy')+' and '+T('consonant cues')+' contribute differently.',[
    'Vowels have strong low/mid-frequency energy. The summary gives roughly 250–500 Hz for the dominant low band.',
    'Many weaker consonant cues occur around 2–4 kHz and above.',
    T('Voiced consonants')+' also contain lower-frequency energy. These bands summarize teaching relationships rather than the complete spectrum of every phoneme.'
   ]),
   p('The energy contrast explains why loudness and intelligibility can differ.',[
    'The slide’s 90% energy/10% energy contrast and “90% of information” wording emphasize different contributions of vowels and consonants.',
    G('The octave band near 2,000 Hz carries especially important speech information')+' in Sutherland’s October 20 explanation.',
    'Both vowel and consonant information must be available. Hearing the powerful parts of speech alone does not ensure clear word recognition.'
   ])
  ],
  [
   p(T('Duration')+' is the time a sound lasts.',[
    'The lecture gives 20–400 milliseconds as the range for individual speech sounds.',
    T('Vowels')+' generally last longer and carry more energy than '+T('consonants')+'.',
    'The October 20 examples give about 130–160 ms for vowels and 20–150 ms for consonants, with variation across contexts.'
   ]),
   p(T('Transitional cues')+' arise as articulators move between adjacent phonemes.',[
    T('Coarticulation')+' changes frequency, intensity, and duration in connected speech.',
    'A sound produced within a word is therefore not always acoustically identical to the same sound produced alone.',
    'The movement between sounds supplies information as well as the relatively steady portions of the sounds.'
   ]),
   p('Separate '+T('segmental')+' from '+T('suprasegmental')+' information.',[
    'Segmental information concerns individual speech sounds.',
    'Suprasegmental information includes rate, rhythm, stress, and intonation.',
    'Both types help the listener interpret a message.'
   ]),
   p('Use the phoneme-placement chart as the instructor directs.',[
    'In the October 20 discussion, Sutherland calls it a '+G('reference, not a chart to memorize for the test')+'.',
    'Practice reading relationships and applying them to audibility instead of memorizing every plotted coordinate.'
   ])
  ]
 ]
 });
 Object.assign(outlines,{
 'ling':[
  [
   p('The '+T('Ling–Madell–Hewitt 10-sound check')+' samples access across low, middle, and high speech frequencies.',[
    'It helps monitor aided access and changes across sessions with hearing aids or CIs.',
    'It is a '+T('screening/listening check')+', not a complete diagnostic assessment or proof of speech comprehension.',
    'A successful response to these sounds is useful evidence about access, rather than a complete description of the child’s communication abilities.'
   ]),
   p('Learn the ten sounds and their training cues.',[
    '/u/ is “oo” as in moon. /a/ is “ah” as in car. /i/ is “ee” as in leaf.',
    '/m/ is “mmm” as in milk. /n/ is “nnn” as in nose. /h/ is the breath sound in hat.',
    '/dʒ/ is “j” as in jump or juice. /ʃ/ is “sh” as in shoe.',
    '/s/ is the sound in star. /z/ is the sound in zebra.',
    'After the child is trained, present the sound itself rather than the entire cue word.'
   ]),
   p('Keep '+T('Ling 6')+' and '+T('Ling 10')+' in perspective.',[
    'The four additional sounds in this packet are /n/, /h/, /dʒ/, and /z/.',
    'The October 20 lecture explicitly says that Ling 6 is still used and is not wrong.',
    'The added sounds extend the sample. They do not make every earlier six-sound check invalid.'
   ])
  ],
  [
   p('Teach the task before interpreting the response.',[
    'Familiarize the child with the expected action and the sounds.',
    'Then remove '+T('speechreading cues')+' so the response reflects auditory access.',
    'Use a normal speaking voice and sit beside or behind the child. Avoid covering the mouth in a way that changes the sound.',
    'The AB handout checks the right ear, left ear, and then both ears.'
   ]),
   p('Record whether the response demonstrates '+T('detection')+' or '+T('identification')+'.',[
    'Detection is a reliable behavioral reaction showing that a sound was heard.',
    'Identification specifies which sound was heard, through pointing, imitation, or repetition.',
    'A reaction to any sound is not the same result as correctly identifying the presented sound.'
   ]),
   p('Change '+T('distance')+' only after establishing close-range success.',[
    'Begin close and in quiet. The handout suggests 1 m and then 2–3 m as later distances.',
    'Record the ear/device condition, reaction versus repetition, distance, missed sounds, and changes over time.',
    'Keep sessions brief and adjust for fatigue. Comparable records help show whether performance changed under similar conditions.'
   ]),
   p('A '+T('device listening check')+' and the child’s aided response answer complementary questions.',[
    'Listening to a hearing aid can reveal distortion or weakness in the device output.',
    'The child’s response provides evidence about access through the device.',
    'Neither result should be substituted for the other.'
   ])
  ],
  [
   p('Use the named table when interpreting '+T('frequency-band coverage')+'.',[
    'AB page 2 lists 200–1,000 Hz, 1,000–1,500 Hz, 1,500–3,000 Hz, and 3,000 Hz and above.',
    'Its /s/ row samples the high band. /z/ combines low and high information.',
    'The /ʃ/ row is listed in bands 3 and 4. A sound can supply information in more than one band.'
   ]),
   p('Retain the handout’s /ʃ/ inconsistency.',[
    'The /ʃ/ card on page 12 prints bands 1–3.',
    'Page 2 and the October 20 lecture use bands 3–4.',
    'Table-reading exercises name the page-2 table. The conflicting card remains available in source access.'
   ]),
   p('A newly missed sound is a reason to investigate a change.',[
    'Review technology and circumstances, including the battery, coil, microphone, obstruction, illness, or ear symptoms.',
    'Repeat appropriately and contact the '+T('audiologist')+' if the change persists.',
    'Possible explanations include device trouble, hearing change, or middle-ear pathology. One missed sound does not identify which explanation is correct.'
   ])
  ]
 ],
 'context':[
  [
   p(T('Redundancy')+' supplies overlapping information that can help recover a message when some acoustic detail is unavailable.',[
    'Familiar vocabulary, topic knowledge, expected grammar, clear articulation, and situational cues can all contribute.',
    'These supports reduce uncertainty about the message. They are additional information rather than a guarantee that missing speech will be recovered.'
   ]),
   p('Distinguish three kinds of '+T('contextual constraint')+'.',[
    T('Syntactic constraints')+' come from word order and grammatical rules.',
    T('Semantic constraints')+' come from plausible meanings and relationships between words.',
    T('Situational constraints')+' come from the physical or social setting.'
   ]),
   p('Apply each source of support to the same sentence.',[
    'In “She put the cup on the ___,” the grammatical position helps indicate the kind of word that fits. That is syntax.',
    'Knowing plausible places for a cup helps narrow the meaning. That is semantics.',
    'Seeing the speaker at a dinner table adds information from the situation.',
    'The supports can operate together while remaining distinct concepts.'
   ]),
   p('The listener’s language experience affects how useful context is.',[
    'A child still learning vocabulary and grammar may have fewer reliable predictions than an adult familiar with the topic.',
    'Context can support understanding, but it cannot be assumed to compensate for every missing acoustic cue.'
   ])
  ],
  [
   p('The course uses '+T('noise')+' broadly for factors that reduce available communication information.',[
    'Acoustic competition and '+T('reverberation')+' are important examples.',
    'The category also includes problems with the speaker’s message, the environment, and the listener’s available knowledge or attention.'
   ]),
   p('Locate the source of the communication barrier.',[
    B('Speaker:')+' unclear articulation, unexpected word order, stress, or inflection.',
    B('Environment:')+' competing sound, reverberation, distracting visual input, or poor lighting that removes visual cues.',
    B('Listener:')+' unfamiliar vocabulary or grammar, limited topic knowledge, or poor listening attention.'
   ]),
   p('Match the support to the missing information.',[
    'Reduce acoustic competition or distance when the problem is access to the speech signal.',
    'Improve visibility when visual cues are unavailable.',
    'Establish the topic, check understanding, and repair the message when knowledge or interpretation is the barrier.',
    'Louder speech alone does not address every kind of noise in this framework.'
   ])
  ],
  [
   p('Classify the '+T('listening response')+' rather than the name of the activity.',[
    T('Detection')+' asks whether sound occurred. Placing a block when a sound occurs can demonstrate this.',
    T('Discrimination')+' asks whether sounds differ. A same-or-different judgment can demonstrate this.',
    T('Identification')+' asks which sound or word was heard. Selecting the named picture can demonstrate this.',
    T('Comprehension')+' requires understanding the message. Carrying out a meaningful spoken instruction can demonstrate this when the task conditions support that interpretation.'
   ]),
   p('Each level adds a different demand.',[
    'Noticing a sound does not establish that two sounds can be compared.',
    'Recognizing a label does not by itself establish understanding of a more complex message.',
    'Specify the actual response and cues before deciding what the child demonstrated.'
   ]),
   p('Continue into the integrated teaching chapters.',[
    '<a href="#exam2/topic/at-hierarchy">Erber’s hierarchy and task examples</a> develops these distinctions through the October 22 lecture.',
    'The six Lecture 6 chapters and three Lecture 7 visual-stimulus chapters are included.',
    'APD is excluded from Exam 2 under the updated instructor scope. The supplied review notes report 65 questions, 65 points and no short answers; use Exam focus & mocks for the new forms.'
   ])
  ]
 ],
 'development':[
  [
   p('The '+T('Integrated Scales of Development')+' connect six developmental areas.',[
    T('Listening')+' concerns the child’s use of auditory information.',
    T('Receptive language')+' concerns understanding. '+T('Expressive language')+' concerns expressing messages.',
    T('Speech')+', '+T('cognition')+', and '+T('social communication/pragmatics')+' are also represented.',
    'Receptive understanding generally precedes expressive use, while the areas develop together.'
   ]),
   p('Interpret the age ranges as guides with variation.',[
    'The handout spans 0–3 through 43–48 months.',
    'The lecture cautions that all skills in a range are usually not mastered until its upper end.',
    'A missed milestone is not a diagnosis. Look at the child’s pattern and the relevant source page.'
   ]),
   p('Retain both listening experience and the whole developmental profile.',[
    'Listening age helps frame auditory-language experience, as demonstrated in class.',
    'Keep chronological age visible. Do not automatically reset every cognitive or social expectation to the device-activation date.'
   ]),
   p('Use the scale for individualized goals and counseling.',[
    'It is a developmental guide rather than a scored diagnostic test.',
    'The original age pages include speech, cognition, and pragmatic details that a short listening summary cannot replace.'
   ])
  ],
  [
   p('Early awareness develops toward locating and recognizing sound.',[
    B('0–3 months:')+' reactions may include stilling, smiling, head turning, or startle, with recognition of a familiar caregiver’s voice.',
    B('4–6 months:')+' sound begins to carry meaning, with responses to vocal inflection, emerging '+T('localization')+', and occasional response to name.',
    B('7–9 months:')+' localization becomes more accurate, with discrimination, greater attention, and beginning word–meaning associations.',
    'The October 20 example selects the 7–9-month range for a child with about nine months of listening experience.'
   ]),
   p('Familiar words and requests become increasingly useful.',[
    B('10–12 months:')+' growing understanding of familiar words and simple requests in context.',
    B('13–18 months:')+' increasing '+T('auditory memory')+', word identification, and comprehension of familiar directions.',
    'Use the exact age page to choose an attainable next goal rather than treating this summary as an exhaustive list.'
   ]),
   p('Memory and language demands increase across the next ranges.',[
    B('19–24 months:')+' two-item auditory memory, song discrimination, descriptive-phrase comprehension, and a two-step direction.',
    B('25–30 months:')+' two-item memory across different language contexts, longer utterances, familiar recorded songs, and listening at a distance.',
    B('31–36 months:')+' three-item memory with different linguistic features, sequencing two pieces of information, and listening to recorded stories.'
   ]),
   p('Later ranges include longer connected messages and sequences.',[
    B('37–42 months:')+' five-item memory, sequencing three or more pieces of information, retelling a short story, following three directions, and tracking a six-word sentence.',
    B('43–48 months:')+' more complex language and directions, retelling longer stories in five or more sentences, and tracking an eight-word sentence.',
    'Compare the memory and linguistic demands with access and abilities. Detecting sounds does not establish complex comprehension.'
   ])
  ],
  [
   p('The lecture’s '+T('vocabulary')+' chart contains an unresolved age-label conflict.',[
    '18 months: 10–15 words.',
    '24 months: 40–50 words. The separate “2 years” entry gives 150 words for the same chronological age.',
    '3 years: 300–400 words. 3–4 years: 600–1,000 words.',
    '4–5 years: 1,000–1,600 words. 5–6 years: 1,500–2,100 words.',
    'Retain the 24-month/2-year discrepancy. It is not used as a keyed cutoff.'
   ]),
   p('The '+T('intelligibility')+' estimates specify the listener.',[
    'The chart describes speech understood by parents, with about 25% at 18 months, 50–70% at 2 years, 80% at 3 years, and 90% at 4 years.',
    'These are supplied teaching estimates. They are not universal norms for unfamiliar listeners.'
   ]),
   p('Keep the Hart & Risley figures in their historical study context.',[
    'The slide gives about 2,100, 1,200, and 600 words per hour in the study’s professional, working-class, and welfare groupings.',
    'These describe the cited study, not an individual family’s ability or worth.',
    'The practical teaching point is frequent, responsive, varied language interaction.'
   ]),
   p('The “'+T('invisible acoustic filter')+'” metaphor concerns missing or altered input.',[
    'The lecture describes sound as potentially distorted, smeared, or absent, especially with distance.',
    'A reaction to loud or low-frequency sound does not prove access to the whole speech spectrum.',
    'Caregiver coaching should explain what can still be missed even when a child appears to hear some sounds.'
   ])
  ],
  [
   p('Combine access, qualified support, and daily learning opportunities.',[
    'The plan includes '+T('early identification')+', vigilant audiologic management, and consistent useful device access.',
    'Qualified listening/spoken-language support and '+T('parent coaching')+' connect the plan to everyday interaction.',
    'Daily enrichment integrates listening, language, cognition, and literacy into normal routines.'
   ]),
   p('Investigate a decline in clarity or auditory progress.',[
    'Review access and technology with the audiologist.',
    'Also examine task demands, language demands, and the conditions in which the change occurs.',
    'Teach caregivers that hearing loss may not be visibly obvious even when it removes important information.'
   ]),
   p('Track distinct actions and the reason for each.',[
    'Record the actual skill, response, and context over time.',
    'For a written response, supply the requested number of distinct actions and explain how they address the problem.',
    'Repeating “more practice” in several forms remains one idea rather than several separate supports.'
   ])
  ]
 ]
 });
 Object.assign(outlines,{
 'at-foundations':[
  [
   p(T('Auditory training (AT)')+' teaches a child to make full use of available auditory cues.',[
    'The goal is to become aware of, attend to, and use sound in communication and social interaction.',
    'Listening is a learned behavior that can improve with practice. The target is the child’s use of the information rather than the presence of a device alone.'
   ]),
   p('Training depends on '+T('residual and aided auditory access')+'.',[
    'Residual hearing is the hearing that remains. Aided access concerns what the child can hear through the fitted technology.',
    'Hearing aids and CIs create access. Fitting them does not automatically produce perception or interpretation.',
    'Repeating an inaudible speech cue more often does not make that cue available through the device.',
    'Check whether the target information is accessible before expecting practice to develop its use.'
   ]),
   p('The lecture emphasizes formal AT for several groups.',[
    'It particularly discusses CI recipients, children with '+T('prelingual hearing loss')+', and severe-to-profound loss.',
    'Prelingual identifies hearing loss present before language acquisition.',
    'This course emphasis does not mean that children with milder loss can never need listening support.'
   ]),
   p('AT connects professional support with everyday interaction.',[
    'The lecture places AT within both '+T('audiology')+' and '+T('SLP')+' practice.',
    'Parents and caregivers extend learning into play, meals, dressing, and conversation.',
    'Understanding the child’s listening abilities helps caregivers make these opportunities natural and responsive.'
   ])
  ],
  [
   p('The slide recommends beginning '+T('early intervention')+' as soon as permanent hearing loss is confirmed.',[
    'The purpose is to provide support while communication and auditory skills are developing.',
    'The setting describes how services reach the child and family, rather than a different definition of auditory training.'
   ]),
   p('Distinguish the two program settings.',[
    'A '+T('center-based program')+' provides scheduled services at a center for a set amount of time.',
    'A '+T('home-based program')+' brings an intervention specialist to the infant’s home to coach the child and family.'
   ]),
   p('Resources named in class illustrate possible service connections.',[
    'Sutherland discusses geographic differences in access, '+T('Early Steps')+', and remote support such as '+T('John Tracy Clinic')+'.',
    'The packet does not verify current enrollment, availability, cost, or eligibility for these resources.'
   ]),
   p('Informal work still needs a purpose and an observable response.',[
    'During a familiar routine, a caregiver can pause, cue listening appropriately, present a meaningful sound, and observe the response.',
    'This turns a routine into a listening opportunity. Leaving a device on without interaction does not describe the same activity.'
   ])
  ],
  [
   p('Auditory assessment answers three planning questions.',[
    'Is training warranted?',
    'What '+T('baseline')+' will allow comparison after therapy?',
    'Which specific auditory skills need attention?'
   ]),
   p('Choose a feasible test and '+T('response format')+'.',[
    'Consider age, existing language skills, and type and degree of hearing loss.',
    'Physical and cognitive abilities also affect how much testing is appropriate and which responses the child can provide.',
    'A task can fail because of its language or motor demands even when it is intended to examine auditory performance.'
   ]),
   p('Review access before choosing an auditory-only target.',[
    'The October 22 discussion names unaided audiograms, '+T('real-ear verification')+' or target matching, and '+T('ABR')+' information.',
    'Work with the audiologist to understand the available signal.',
    'An auditory-only high-frequency discrimination goal is not appropriate if that contrast is not accessible through the child’s devices.'
   ]),
   p('Document conditions when evaluating change.',[
    'Repeat assessment under known conditions rather than relying on an impression.',
    'A difference in cues, distance, or task demands can change performance without establishing a change in the underlying skill.'
   ])
  ],
  [
   p('For infants, emphasize '+T('informal observation')+' and '+T('caregiver reports')+' alongside audiologic management.',[
    'Look for emerging awareness, gross discrimination, and developmentally appropriate localization.',
    'An infant’s inability to complete an older child’s word-recognition task is not a measured word score of zero.'
   ]),
   p('The initial question may concern access and emerging functional skills.',[
    'Is the hearing technology working appropriately?',
    'What auditory behaviors have emerged in the child’s daily life?',
    'Formal speech perception may not yet be a feasible response demand.'
   ]),
   p('The lecture names functional sources that complement testing.',[
    T('IT-MAIS')+', '+T('PEACH')+', and '+T('FAPI')+' provide frameworks for observations or reports.',
    'These complement device checks and audiologic tests. They do not make one source of evidence sufficient for every question.'
   ]),
   p('Keep the automatic transcript’s wording problem visible.',[
    'It says “formal testing” once, while the surrounding discussion emphasizes observation and questionnaires.',
    'Slide 8 explicitly says informal testing and observations. The lesson follows that consistent context and retains the original transcript.'
   ])
  ],
  [
   p(T('Functional Auditory Performance Indicators (FAPI)')+' is an integrated functional profile.',[
    'Parents, therapists, early interventionists, and teachers can contribute observations.',
    'The profile connects observed strengths and needs with goals for an individualized program.'
   ]),
   p('Keep its seven category names distinct.',[
    T('Awareness and meaning of sounds')+' concerns noticing sound and associating it with a source.',
    T('Auditory feedback and integration')+' concerns noticing, monitoring, or changing one’s vocal productions using auditory information.',
    T('Localization')+' concerns searching for or finding the sound source.',
    T('Auditory discrimination')+' concerns distinguishing sound characteristics.',
    T('Auditory comprehension')+' concerns understanding linguistic information, including identifying what was said and following directions in this framework.',
    T('Short-term auditory memory')+' concerns retaining and recalling an auditory sequence.',
    T('Linguistic auditory processing')+' concerns using auditory information to process language.'
   ]),
   p('A hierarchy can support several simultaneous targets.',[
    'The handout describes development across more than one category at a time.',
    'Use emerging or in-process skills to choose attainable objectives. Do not demand complete mastery of an entire category before any work in the next.'
   ]),
   p('Record the conditions that support performance.',[
    'Distinguish visual-plus-auditory from auditory-only input.',
    'Distinguish close from distant presentation, noise from quiet, and prompted from spontaneous responses.',
    'Changing the support is not the same as demonstrating a change in ability.'
   ]),
   p('Name the framework when interpreting a task.',[
    'FAPI’s auditory-comprehension category includes word identification.',
    'Erber’s identification-versus-comprehension distinction is taught separately. Similar labels do not guarantee identical category boundaries.'
   ])
  ]
 ],
 'at-assessments':[
  [
   p(T('WIPI')+' means '+T('Word Intelligibility by Picture Identification')+'.',[
    'The filled slide specifies four lists of 25 monosyllabic words.',
    'Its vocabulary is described as appropriate for children with hearing loss.'
   ]),
   p('The child uses a '+T('closed-set picture-pointing response')+'.',[
    'The task is to point to the picture matching the spoken word among supplied alternatives.',
    'Pointing reduces the need for fluent spoken repetition. The course describes suitability for limited receptive and expressive language abilities.',
    'The response still depends on access to the spoken item and the demands of the task.'
   ]),
   p('Separate '+T('list length')+' from '+T('picture-array size')+'.',[
    'Four lists of 25 words describes the lists, not the number of pictures on a response display.',
    'The comparison table lists six picture choices. The automatic transcript describes four.',
    'That array-size conflict remains visible and is not scored.'
   ])
  ],
  [
   p(T('NU-CHIPS')+' is '+T('Northwestern University Children’s Perception of Speech')+'.',[
    'The slide describes 50 monosyllabic nouns scrambled into four individual tests.',
    'Keep this description distinct from WIPI’s four lists of 25 words.'
   ]),
   p('The child points to the picture representing the spoken item.',[
    'Supplied alternatives create a '+T('closed-set')+' response format.',
    'Basic vocabulary and a '+T('nonverbal response')+' reduce expressive-response demands.',
    'Nonverbal describes the child’s response. The task still examines auditory speech perception.'
   ]),
   p('A constrained picture score is not an interchangeable open-set word score.',[
    'Both WIPI and NU-CHIPS provide choices.',
    'Recognize their different names and list descriptions while retaining the shared distinction from open-set recognition.'
   ])
  ],
  [
   p(T('Early Speech Perception (ESP)')+' assesses pattern and word perception using a closed-set format.',[
    'The response alternatives constrain the task.',
    'The results support placement into the four speech-perception categories described in the deck.'
   ]),
   p('Read the four placement categories in order.',[
    'No '+T('pattern perception')+'.',
    'Pattern perception.',
    'Some '+T('word identification')+'.',
    'Consistent word identification.'
   ],true),
   p('Keep assessment placement and broader language abilities separate.',[
    'A placement describes performance on this assessment.',
    'It does not establish the child’s entire language level or comprehension of an unfamiliar conversation.'
   ]),
   p('Follow Sutherland’s study instruction about version ages.',[
    'The lecture describes standard and low-verbal versions.',
    'In the October 22 discussion, the version ages are explicitly '+G('not required for the test')+'. They remain context rather than keyed age-memorization targets.'
   ])
  ],
  [
   p(T('Glendonald Auditory Screen Procedure (GASP)')+' is based on Erber’s model.',[
    'The course lists three speech-perception subtests rather than a test for each of the hierarchy’s four broad levels.'
   ]),
   p('Learn the three listed subtests.',[
    T('Phoneme detection')+' asks whether the sound was heard.',
    T('Word identification')+' asks which word was heard.',
    T('Sentence comprehension')+' asks for understanding at the sentence level.'
   ]),
   p('Use performance to inform auditory-training planning.',[
    'The course describes the results as useful for anticipating related auditory tasks.',
    'Phoneme detection resembles the detection demand of a Ling check. It does not establish sentence comprehension.',
    'Do not insert discrimination as a fourth GASP subtest simply because Erber’s hierarchy includes that level.'
   ])
  ],
  [
   p(T('Developmental Approach to Successful Listening II (DASL II)')+' has assessment and instructional uses.',[
    'Its assessment can guide where to begin.',
    'Its brief individualized instructional sessions support the selected skills, especially for preschool and school-age hearing-aid or CI users.'
   ]),
   p('Keep its three named auditory areas together.',[
    T('Sound awareness')+'.',
    T('Phonetic listening')+'.',
    T('Auditory comprehension')+'.'
   ]),
   p('Interpret the age and normative statements as source-specific context.',[
    'The assessment slide gives ages three and up.',
    'It describes some normative information for children with varying degrees of hearing loss.',
    'These three DASL areas are not GASP’s three subtests or SPICE’s four curriculum categories.'
   ])
  ],
  [
   p('Ling sounds can target three different response demands.',[
    T('Detection')+' asks whether something was heard.',
    T('Discrimination')+' asks whether sounds are the same or different.',
    T('Identification')+' asks which sound was heard.',
    'Sutherland explicitly states that '+G('Ling is not a tool for auditory comprehension')+'.'
   ]),
   p('Teach the response, then specify the auditory-only conditions.',[
    'Visual support can help explain the task during conditioning.',
    'For auditory-only checking, remove speechreading cues without muffling the sound.',
    'The lecture begins beside the child and then describes three feet and six feet. Document the ear/device condition and response at each distance.'
   ]),
   p('Use '+T('silent trials')+' and varying presentation order.',[
    'The child should be able to indicate absence of sound as well as presence.',
    'A varying order prevents success based only on predicting the sequence.',
    'The lecture’s 20-foot typical-hearing comparison is illustrative. It is not a diagnostic cutoff or a guarantee for every device user.'
   ]),
   p('Compare reliable distance with that child’s own previous performance.',[
    'A reduction warrants checking access and technology, but Ling alone does not identify the cause.',
    'The earlier Ling chapter retains the full sound list, frequency table, recording sheet, and handout disagreement.'
   ])
  ],
  [
   p('Read the supplied '+T('Table 13–3')+' across its separate columns.',[
    T('Stimulus type')+', '+T('stimulus material')+', '+T('response format')+', and target population describe different properties.',
    'This is a supplemental comparison, not an announced list of exam memorization targets.',
    'On a narrow screen, scroll the table horizontally to read every column.'
   ]),
   p('The same stimulus level can use different response formats.',[
    T('Closed set')+' provides alternatives. An '+T('open set')+' does not supply a finite answer display.',
    T('WIPI')+' uses word stimuli with picture choices.',
    T('PBK')+' and '+T('LNT')+' use open-set word responses. The phrase “word test” alone does not specify the response demand.'
   ]),
   D.topics.find(function(t){return t.id==='at-assessments';}).sections[6].points[2],
   p('Consider what makes each task easier or more demanding.',[
    'The '+T('Lexical Neighborhood Test (LNT)')+' distinguishes easy words with few phonetic neighbors from harder words with many similar neighbors.',
    T('CRISP')+' combines spondee recognition with competing sentences.',
    'A word label therefore does not tell you whether alternatives, lexical competition, or competing speech support or challenge the listener.'
   ]),
   p('Retain the table’s source qualifications.',[
    'The scan lists six WIPI choices. The automatic transcript describes four, while the deck’s four lists of 25 words describes a separate quantity.',
    'No scored item asks for the disputed picture count.',
    'Target populations and version ages are source-specific context, not interchangeable eligibility rules. Sutherland excluded ESP version ages from test memorization.',
    'This is one page of a continued table. Its edition and missing continuation are not established by the packet.'
   ])
  ]
 ]
 });
 Object.assign(outlines,{
 'at-approaches':[
  [
   p(T('Analytic training')+' breaks speech into smaller components.',[
    'The course calls it a '+T('bottom-up approach')+'.',
    'Work with particular vowels, consonants, or contrasts helps refine speech perception before expecting the listener to use a larger message.'
   ]),
   p('Use specific acoustic differences as teaching targets.',[
    'The slide includes vowel contrasts involving first- or second-'+T('formant')+' information, followed by more similar vowel patterns.',
    'The assigned textbook describes formants as concentrations of energy resulting from vocal-tract resonances. Their patterns provide cues for vowel identification.',
    'The teaching focus is the sound information being distinguished, rather than only the meaning of an entire sentence.'
   ]),
   p('The approach does not dictate a single response format.',[
    'The examples include discrimination of vowel differences and identification of words with different vowels.',
    'Identification can use a four-item response set or an open vocabulary set.',
    'Analytic describes how instruction is organized. The actual response determines whether the child is discriminating or identifying.'
   ])
  ],
  [
   p(T('Synthetic training')+' emphasizes the meaningful whole.',[
    'The course calls it a global '+T('top-down approach')+'.',
    'Meaningful stimuli, '+T('syntax')+', and context support interpretation of sentences and connected speech.',
    'The child uses relationships within the message rather than working only on one isolated vowel or consonant feature.'
   ]),
   p('The course gives several meaningful-message objectives.',[
    'Distinguish a '+T('declarative sentence')+' from an '+T('interrogative sentence')+', or a statement from a question.',
    'Carry on a conversation.',
    'Follow the instructions of simple commands.'
   ]),
   p('Select the approach to serve the child’s needs.',[
    'Analytic and synthetic targets can be used during the same treatment period.',
    'Context can support interpretation, but neither approach makes audibility or device management irrelevant.'
   ])
  ],
  [
   p(T('Pragmatic training')+' teaches the listener to manage communication variables.',[
    'The lecture names speech level, '+T('signal-to-noise ratio (SNR)')+', and message context or complexity.',
    'The listener learns to recognize a communication problem and take an action that addresses it.'
   ]),
   p('Match a '+T('communication repair')+' to the information that was missed.',[
    'Move closer or improve the listening environment when access is the problem.',
    'Request clearer or louder speech when appropriate.',
    'Establish the topic or ask a specific question, such as “Did you say June?”, when a particular detail is uncertain.',
    'Repeating the same unsuccessful exchange without changing anything is different from using a targeted repair.'
   ]),
   p('The lecture’s '+T('QUEST?AR')+' example combines questions, repetition, and repair.',[
    'The clinician chooses a topic and the patient asks related questions.',
    'The patient repeats each answer correctly before moving on.',
    'Difficulty prompts a useful repair strategy. Auditory-only or audiovisual conditions can be specified.'
   ])
  ],
  [
   p(T('Eclectic training')+' combines strategies to meet individual needs.',[
    'A session might refine a phoneme contrast, use a meaningful sentence, and practice requesting clarification.',
    'The combination follows the child’s and family’s needs rather than requiring one approach for every target.'
   ]),
   p('Keep '+T('Erber level')+' and '+T('training approach')+' separate.',[
    'Erber level describes what the listening response requires.',
    'The approach describes how instruction is organized.',
    'Identifying isolated vowels can be analytic. Following a meaningful instruction can be synthetic.'
   ]),
   p('An approach or program label is not a complete treatment plan.',[
    'Retain individualized assessment, measurable goals, and review of access to the signal.',
    'Choose and adjust the mix using evidence about the child’s actual performance.'
   ])
  ]
 ],
 'at-design':[
  [
   p('Specify four decisions before choosing the activity.',[
    T('Auditory skill')+': detection, discrimination, identification, or comprehension.',
    T('Stimuli')+': the sounds or speech material presented, such as phonetic or sentence-level material.',
    T('Activity type')+': formal or informal.',
    T('Difficulty level')+': response set, stimulus unit and similarity, context, structure, and listening conditions.'
   ]),
   p(T('Formal')+' and '+T('informal')+' describe how practice is arranged.',[
    'Formal training is highly structured and usually one-to-one.',
    'Informal training occurs in daily routines, often within another activity.',
    'Both need a meaningful purpose and an observable response.'
   ]),
   p('Read the '+B('Snake and Ice Cream')+' lesson as a complete plan.',[
    'It includes a title or activity, goal, objective, materials, and procedure.',
    'It first teaches /s/ and /m/ associations through visible demonstrations.',
    'The later phase removes speechreading cues and randomizes the auditory presentations.',
    'Selecting the matching picture is operationally identification even though the sample’s broad goal is labeled discrimination. The response demand is more precise than the broad label.'
   ])
  ],
  [
   p('Several dimensions can change '+T('task difficulty')+'.',[
    T('Response set')+': closed → limited → open.',
    T('Stimulus unit')+': phoneme → syllable → word → sentence.',
    T('Stimulus similarity')+': dissimilar → similar.',
    T('Contextual support')+': high → low.',
    T('Task structure')+': structured → spontaneous.',
    T('Listening conditions/SNR')+': good → poor.'
   ]),
   p('Interpret the continua with the lecture’s explanation.',[
    'Slide 48 has vertically offset labels and arrows. The October 22 explanation identifies the appropriate dimension for each continuum.',
    'These are general teaching trends with other demands held reasonably stable.',
    'They do not establish that every sentence is harder than every isolated phoneme under all conditions.'
   ]),
   p('Adjust support deliberately rather than changing everything at once.',[
    'For a difficult identification task, try a smaller known set, more distinct choices, familiar context, clearer structure, or improved SNR.',
    'When success is stable and easy, reduce support or add a challenge purposefully.',
    'Document the change so the resulting performance remains interpretable.'
   ]),
   p('Keep the lecture’s percentage heuristic within its limits.',[
    'About 80% or more correct is described as workable difficulty. Less than 50% is described as too difficult.',
    'The lecture does not supply a universal rule for the 50–79% interval or a formal diagnostic criterion.',
    'The aim is '+G('challenging without being frustrating, in a meaningful context')+' for this child.'
   ])
  ],
  [
   p('Build the goal from the child’s '+T('baseline')+'.',[
    T('Performance')+' states the observable action.',
    T('Conditions')+' state how and where the action will occur.',
    T('Success criterion')+' states what counts as meeting the target.',
    'An '+T('explicit time frame')+' states when the target is expected. Objectives are measurable milestones toward the broader goal.'
   ]),
   p('Choose response characteristics that can be observed and recorded.',[
    'Specify imitative or spontaneous, immediate or delayed, and verbal or nonverbal.',
    'Specify percentage or trial count and the number of consecutive sessions.',
    'State cue type and amount, quiet or noise, and activity or session duration.',
    'State signs or no signs, and familiar or unfamiliar partners and settings.'
   ]),
   p(B('Authored practice example')+': identify spoken targets under specified conditions.',[
    B('Time frame:')+' within four weeks.',
    B('Conditions:')+' checked device on, quiet at three feet, three familiar pictured objects, and no visual speech cues.',
    B('Performance:')+' point to the spoken target.',
    B('Criterion:')+' at least eight of ten trials across two consecutive sessions.',
    'These numbers are practice-design choices, not prescribed class or clinical criteria.'
   ]),
   p('Measure the task that was written.',[
    'Highly cued audiovisual imitation does not demonstrate a spontaneous auditory-only target.',
    'Record the actual conditions. A correct count with the wrong response demand is not evidence that the stated goal was met.'
   ])
  ],
  [
   p('Choose child targets using the assessment profile.',[
    'The AR Goals handout includes responses to environmental sounds, music, or speech.',
    'It also includes noticing or changing vocalization, identifying familiar words, and discriminating nonlinguistic contrasts.',
    'Select the skill emerging for this child rather than assigning every listed example automatically.'
   ]),
   p('Device tolerance and consistent use support access.',[
    'The lecture emphasizes use during '+G('all waking hours')+', with the care team addressing obstacles.',
    'Device access supports other goals. It does not independently establish language mastery or auditory comprehension.'
   ]),
   p('Separate clinician responsibilities from outcomes the child must demonstrate.',[
    'Check the device before each session and complete '+T('Ling 10')+'.',
    'Monitor '+T('middle-ear status')+' with the team and collaborate with audiology.',
    'Educate caregivers and relate the audiogram to the '+T('speech banana')+'.',
    'These actions support the child’s targets, while the child’s actual response supplies evidence of progress.'
   ])
  ]
 ],
 'at-programs':[
  [
   p('Structured curricula can supply objectives and activity sequences.',[
    'The course names '+T('DASL II')+', '+T('SPICE')+', '+T('SKI-HI')+', '+T('Cottage Acquisition Scales (CASLLS)')+', and '+T('Learn to Talk Around the Clock')+'.',
    'They can help a clinician plan AT, while assessment still determines the child’s starting point.'
   ]),
   p('DASL II connects assessment with brief individualized training.',[
    'The course describes use with preschool and school-age hearing-aid or CI users.',
    'Its three areas are '+T('sound awareness')+', '+T('phonetic listening')+', and '+T('auditory comprehension')+'.'
   ]),
   p('SPICE means '+T('Speech Perception Instructional Curriculum and Evaluation')+'.',[
    'The course describes evaluation and development of auditory skills for severe-to-profound loss.',
    'Its four categories are '+T('detection')+', '+T('suprasegmental perception')+', '+T('vowel/consonant perception')+', and '+T('connected speech')+'.',
    'The original notes describe materials and activities adaptable to language level. Keep its four categories distinct from DASL II’s three areas.'
   ]),
   p('Learn to Talk Around the Clock supports caregiver interaction in home routines.',[
    'Its emphasis is creating opportunities for auditory and language development during everyday activities.',
    'Product formats described in older notes are historical descriptions, not current purchasing information.'
   ])
  ],
  [
   p(T('SKI-HI')+' is presented as an identification and home-intervention curriculum for infants and families.',[
    'Developmentally based auditory stimulation is used alongside language and speech stimulation.',
    'The course describes four phases and eleven general skills.',
    'These counts describe this curriculum, rather than the four Erber levels or another program’s categories.'
   ]),
   p(T('Cottage Acquisition Scales for Listening, Language, and Speech (CASLLS)')+' takes an integrated developmental approach.',[
    'It follows listening, language, cognition, and speech together.',
    'The slide lists sound awareness, phonetic listening, suprasegmental duration, vowels and consonants, vocalization or phonetic speech, and '+T('phonological-level speech')+'.',
    'An integrated profile helps connect a listening target with the child’s wider communication development.'
   ]),
   p('Retain the CASLLS age-range conflict.',[
    'The slide gives birth–8 years. The automatic October 22 transcript says “about four to eight years.”',
    'This disagreement is not used as an unqualified keyed age boundary.'
   ]),
   p('Choose the program for the child and family.',[
    'The lecture connects the curricula to shared listening-skill principles.',
    'Their category labels, counts, and emphases still differ. Similar purposes do not make the programs identical.'
   ])
  ],
  [
   p('The lecture names several resource starting points.',[
    T('John Tracy Clinic')+' and the '+T('Central Institute for the Deaf')+', associated with SPICE.',
    T('MED-EL BRIDGE')+' and Advanced Bionics’ '+T('Listening Room')+'.',
    T('Cochlear Sound Foundations')+', '+T('AG Bell')+', and the '+T('SKI-HI Institute')+'.',
    'These are references named in class. Their present services and availability are not verified by this packet.'
   ]),
   p('A curriculum supports a plan rather than replacing clinical reasoning.',[
    'Define the actual response, cueing, device/access conditions, and meaningful context.',
    'Reassess progress and modify the plan when the evidence changes.',
    'Use the resource to serve an identified need rather than treating its label as proof of an appropriate target.'
   ])
  ]
 ]
 });
 Object.assign(outlines,{
 'visual-foundations':[
  [
   p('Use the deck’s distinction between '+T('lipreading')+' and '+T('speechreading')+'.',[
    'Lipreading uses visual speech together with related facial and body gestures.',
    'Speechreading combines those cues with the auditory signal.',
    'The deck acknowledges that people sometimes use the terms interchangeably. Questions naming this deck use its stated distinction.'
   ]),
   p('Visual information contributes even when a person has typical hearing.',[
    'People often watch a talker’s face while listening.',
    'The deck describes early sensitivity to visual speech and auditory-cortex activation during visual speech recognition.',
    'A visual-only task and an audiovisual task therefore specify different input conditions.'
   ]),
   p('Keep slide 5’s '+T('predictor variables')+' separate.',[
    'It lists cognitive skills, age, and congenital versus acquired hearing loss as having predictive power for lipreading.',
    'It lists intelligence, education, presence or duration of acquired loss, age at loss, gender, and socioeconomic status as lacking predictive power.',
    'These are claims from the supplied deck, not newly reviewed universal predictions for an individual.'
   ]),
   p('The later performance slide creates a wording conflict.',[
    'Slide 17 lists intelligence among influences on speechreading performance.',
    'Prediction of visual-only lipreading and performance during audiovisual speechreading are different questions, but the deck does not resolve its wording.',
    'No question here keys a universal intelligence claim.'
   ]),
   p('Distinguish '+T('type/onset history')+' from '+T('duration')+'.',[
    'Congenital versus acquired loss describes whether the loss was present from birth or acquired later.',
    'Years lived with an acquired loss describes its duration.',
    'These variables are related to a hearing history without being interchangeable measurements.'
   ])
  ],
  [
   p('The deck groups lipreading difficulty into five sources.',[
    'Visibility of sounds.',
    'Speech rate.',
    'Coarticulation and stress.',
    'Visemes and homophenes.',
    'Talker differences.'
   ]),
   p(T('Visibility')+' depends on what speech movements can be seen.',[
    'Front-of-mouth gestures with larger lip, jaw, and tongue movements are most visible in the deck’s account.',
    'Lip closure and anterior tongue movement can help, but vision does not reliably separate voiced from voiceless counterparts.',
    'The slide estimates 30% visible speech in ideal conditions and 10–25% in its “unusual conditions” wording. These are course estimates of visibility, not an individual’s word-recognition score.',
    'The student slide’s statement that vowels are not visible remains in Sources. It is not used as an unqualified scored rule pending clarification.'
   ]),
   p(T('Speech rate')+' affects how quickly visual information changes.',[
    'The deck gives an average of 150–250 words per minute.',
    'Emotion, social etiquette, fatigue, and articulation style can affect rate.'
   ]),
   p(T('Coarticulation')+' and '+T('stress')+' can change a sound’s visible appearance.',[
    'Coarticulation is the influence of neighboring speech sounds on articulation. A following vowel can influence how a consonant is produced, changing lip and jaw movements that a lipreader can see. The phonetic mechanism and its visible consequence are connected.',
    'Stress changes emphasis and appearance, as in “What did YOU do yesterday?”',
    'The visible form is not necessarily identical every time the same sound or word occurs.'
   ]),
   p(T('Visemes')+' group speech sounds with similar facial appearances.',[
    'The deck’s examples are /b,m,p/, /k,g/, and /n,d,t,s,z/.',
    'A visible pattern can therefore be compatible with more than one speech sound.'
   ]),
   p(T('Homophenes')+' are different-sounding words that look alike on the lips.',[
    'The deck gives rise/rice, perch/merge, bind/mite, and down/stout as examples.',
    'Keep the unit clear: a viseme groups sounds, while a homophene grouping concerns whole words.',
    'Neither grouping guarantees that vision alone identifies the intended message.'
   ]),
   p(T('Talker effects')+' mean the same sound can look different across speakers.',[
    'Differences in mouth opening and accent are examples named in the deck.',
    'Learning one talker’s appearance does not make every other talker’s visual signal identical.'
   ])
  ]
 ],
 'visual-support':[
  [
   p('Use the four-factor framework to locate the support needed.',[
    T('Speaker')+': how the talker produces and presents speech.',
    T('Signal/code')+': the structure and familiarity of the message.',
    T('Environment')+': the auditory and visual conditions.',
    T('Speechreader')+': the listener’s available abilities and resources.',
    'Figure 5.1 is named, but the figure itself is missing from this student copy.'
   ]),
   p(T('Clear speech')+' uses a slower rate and good, unexaggerated enunciation.',[
    'Avoid shouting, mumbling, rapid speech, and turning away.',
    'Familiar speakers, facial expressions, gestures, and familiar language or accent patterns can support understanding.',
    'The deck contrasts “D’yeet yet?” with “Did you eat yet?” to illustrate a more complete spoken form.',
    'Teachers, newscasters, announcers, and broadcasters are examples in the slides. A job title alone does not establish clear speech.'
   ]),
   p('Word familiarity and '+T('lexical neighbors')+' affect message competition.',[
    'Frequently used words are easier in the deck’s examples. Frequency here means everyday occurrence rather than acoustic pitch.',
    'Lexical neighbors are similar competing words. “Bat” has many words that look or sound like it.',
    '“Telephone” and “elephant” have fewer competing look/sound-alikes in these examples.'
   ]),
   p('Known '+T('linguistic context')+' and '+T('topic')+' narrow the alternatives.',[
    '“Set the ___ and chairs in the kitchen” supports “table” more strongly than “buy the ___.”',
    'Knowing the topic supplies additional information before every sound is recovered.',
    'These supports change the uncertainty in the message rather than making all visual details directly visible.'
   ]),
   p('Improve the conditions for seeing and hearing the talker.',[
    'The environmental slide gives face-on '+T('0° azimuth')+' and 2–5 feet as optimal teaching conditions.',
    'Improve facial lighting, avoid shadows, and reduce background noise or reverberation.',
    'These values are lecture guidance rather than individual clinical thresholds.'
   ]),
   p('Consider the speechreader’s full set of resources.',[
    T('Residual hearing')+' can add useful cues even when limited.',
    'Age, language skills, hearing characteristics, vision, attention, and attitude can affect performance.',
    'The intelligence wording conflict is retained in the first visual chapter.',
    'Match the support to the missing information: lighting improves visual access, noise control improves auditory access, and topic/context narrows linguistic alternatives.'
   ])
  ],
  [
   p('The deck describes limits in speechreading assessment.',[
    'Standardized tests exist, with concerns about '+T('validity')+', task difficulty, and '+T('test–retest reliability')+'.',
    'Validity concerns whether the result supports the interpretation intended. Test–retest reliability concerns consistency across repeat testing.',
    'Table 5.3 is referenced but absent. No named-test protocols are invented to fill the gap.'
   ]),
   p(T('Audiovisual integration')+' combines residual hearing with visual speech information.',[
    'The deck presents speechreading as a supplement to auditory information.',
    'Figure 5.2 is referenced but missing, so the packet supplies no numerical benefit to calculate from it.'
   ]),
   p('Distinguish the two training approaches in this visual context.',[
    T('Analytic training')+' works from visible components toward words or phrases.',
    T('Synthetic training')+' prioritizes the meaningful whole even when not every component is visually identified.',
    'Table 5.4 is referenced but absent. The supplied definitions do not establish unseen table rows.'
   ]),
   p('Choose client-oriented activities with a useful purpose.',[
    'The stated goal is to build the child’s understanding and appreciation of the speechreading process.',
    'Activities should be interesting, connected to real life, and offer frequent opportunities for success.'
   ]),
   p('Group the deck’s tips by the information they support.',[
    B('Visual information:')+' watch the mouth and facial expression, notice gesture/posture/movement, and improve lighting.',
    B('Meaning and context:')+' establish the topic, use situational cues, and stay informed.',
    B('Auditory and personal conditions:')+' use available hearing, reduce noise, manage anxiety or stress, and maintain a positive attitude.'
   ]),
   p('Interpret training gains without overpromising.',[
    'The 2020 deck says gains tend to be modest and child-specific evidence is limited. These are the deck’s statements, not a freshly reviewed research consensus.',
    'A client can report benefit even when objective change is not demonstrated. Reported benefit and measured change are different evidence.',
    'Speechreading training usually occurs within broader aural rehabilitation.',
    'Slide 25 names Table 5.5 without supplying the table. Do not infer missing tips or rows.'
   ])
  ]
 ],
 'visual-manual':[
  [
   p('The deck lists several forms of manual or visually supported communication.',[
    T('Fingerspelling')+', '+T('American Sign Language (ASL)')+', and '+T('Manually Coded English')+'.',
    T('Signed English')+', SEE II, and '+T('Cued Speech')+'.',
    'Being included in the same list does not make these equivalent languages or identical systems.'
   ]),
   p('In the deck’s Signed English description, a word sign is combined with '+T('grammatical markers')+'.',[
    'Markers represent changes such as verb form, number, or possession.',
    'The cook/cooks/cooked/cooking example illustrates a lexical sign with changing grammatical information.',
    'A grammatical marker modifies the English information represented. It does not make Signed English the same system as ASL.'
   ]),
   p('Retain the '+T('SEE II')+' naming gap.',[
    'Slides 26–27 print “Seeing Essential English (SEE II).”',
    'The expansion and version naming need clarification. This bank does not ask learners to memorize the potentially erroneous expansion.'
   ]),
   p('Distinguish English-based systems from an independent language.',[
    'English-based sign systems represent English structure.',
    'ASL is taught separately as an independent language with its own vocabulary and syntax.'
   ])
  ],
  [
   p(T('ASL')+' is an '+T('independent language')+' with its own vocabulary and syntax.',[
    'The deck names facial expression, head tilt, body movement, and eye gaze as ways of conveying prosodic information.',
    'These nonmanual contributions remain part of the language account, rather than being excluded by the separate list of physical sign characteristics.'
   ]),
   p('Keep the slide’s four identifying physical characteristics distinct.',[
    T('Hand configuration')+' concerns the hand shape.',
    T('Movement')+' concerns how the sign moves.',
    T('Location')+' concerns where the sign is made.',
    T('Orientation')+' concerns the direction in which the hand is positioned.',
    'This is the slide’s four-part teaching list. It does not deny the language role of facial and other nonmanual information.'
   ]),
   p(T('Cued Speech')+' supplies additional visual information alongside spoken language.',[
    'The deck describes it as a speechreading supplement to spoken English.',
    'It visually distinguishes phonemes that are not clear on the lips.',
    'It is not presented here as ASL or as an independent language.'
   ]),
   p('Keep the broad cultural claim and missing table visibly qualified.',[
    'Slide 28 calls ASL “the only recognized language of the Deaf culture.” That wording is preserved in Sources without being taught or keyed as a universal statement about all Deaf communities.',
    'Slide 30 names Table 5.6, Forms of Manual and Spoken Communication, but provides no table.',
    'No unseen rows or communication-system comparisons have been supplied as though they were present.'
   ])
  ]
 ]
 });
 Object.keys(outlines).forEach(function(id){
  var topic=D.topics.find(function(t){return t.id===id;});
  if(topic)topic.sections.forEach(function(section,i){section.outline=outlines[id][i];});
 });
 function section(id,index){return D.topics.find(function(t){return t.id===id;}).sections[index];}
 section('brain',0).outlineTitle='The ear delivers a signal. The brain uses it.';
 section('at-programs',0).outlineTitle='Programs provide a sequence. Assessment guides the starting point.';
 var checkpoints=[
  ['ci-candidacy',0,'A referral requests a team evaluation. Observed listening difficulty does not independently establish surgical or insurance eligibility.'],
  ['ci-assessment',0,'A closed-set percentage is not interchangeable with the same open-set percentage. Age, language, and response demands matter.'],
  ['experience',1,'Listening age reflects time with consistent usable input. Chronological age counts time since birth.'],
  ['ling',1,'Detection establishes that a sound was heard. Identification establishes which sound was heard.'],
  ['at-approaches',3,'Erber level describes the response demand. The training approach describes how instruction is organized.'],
  ['at-programs',1,'A program provides structure. Assessment and child/family needs guide the starting point and goals.']
 ];
 checkpoints.forEach(function(entry){var s=section(entry[0],entry[1]);s.outlineCheckpoint={label:s.checkpoint.label,text:entry[2]};});
 var visualChecks=[
  ['visual-foundations',0,'A visual-only task and a task combining residual hearing with visual cues do not measure the same input condition.'],
  ['visual-foundations',1,'A viseme groups speech sounds. A homophene grouping concerns whole words. Neither guarantees that vision alone can identify the intended message.'],
  ['visual-support',0,'Lighting supports visual access. Noise control supports auditory access. Topic and context narrow linguistic alternatives. Match the support to the missing information.'],
  ['visual-support',1,'A client’s reported improvement matters, but it is not interchangeable with a demonstrated change on an objective measure.'],
  ['visual-manual',0,'English-based sign systems represent English structure. ASL is taught separately as an independent language with its own vocabulary and syntax.'],
  ['visual-manual',1,'ASL has its own language structure. Cued Speech supplies additional visual phoneme information alongside spoken language.']
 ];
 visualChecks.forEach(function(entry){section(entry[0],entry[1]).outlineCheckpoint={label:'Key distinction',text:entry[2]};});
 section('at-approaches',0).outlineSources=section('at-approaches',0).sources.concat(['ARTB4-115']);
})(typeof window!=='undefined'?window:globalThis);
