/* Reviewed selections for the existing Exam 1 chapter and supporting notes. */
(function(root){
'use strict';
const L = root.L;
const plans = {
  "foundations": { pairs: [
    ["CORE","assesses"],
    ["CARE","manages."],
    ["Habilitation","develops skills that were never established"],
    ["rehabilitation","restores or supports previously developed skills."]
  ], checkpoint: ["Look beyond the audiogram","Hearing status alone does not describe a child’s communication needs."] },
  "audiograms": { pairs: [
    ["Type","normal BC with elevated AC and an air-bone gap suggests conductive loss","elevated AC and BC without a significant gap suggests SNHL","elevated BC plus an air-bone gap indicates mixed loss."],
    ["Degree","use the adopted scale, with 90 dB still severe."],
    ["Configuration","the shape across frequencies, independent of the PTA."]
  ], checkpoint: ["Read both ears","The two exam audiograms focus on these three descriptions."] },
  "heredity": { pairs: [
    ["Autosomal dominant","For a heterozygous affected parent and unaffected noncarrier parent, each child has a 50% chance of inheriting the variant."],
    ["Autosomal recessive","For two carriers","25% affected, 50% carrier, 25% neither, independently for each pregnancy."],
    ["Mitochondrial","Maternal transmission","fathers do not pass on mitochondrial DNA."],
    ["“congenital”","for loss before speech/language acquisition (typically around birth, usually before age 3)"],
    ["“acquired”","for loss after speech/language development."],
    ["Prenatal/perinatal/postnatal","separately locate the cause relative to birth."]
  ], checkpoint: ["Separate inheritance from severity","Do not equate inheriting a variant with identical severity in every child."] },
  "causes": { pairs: [
    ["Viral","rubella, CMV, HIV, HSV and mumps."],
    ["Bacterial","syphilis and bacterial meningitis."],
    ["Parasitic","toxoplasmosis."],
    ["Congenital CMV","may cause delayed-onset or progressive SNHL"],
    ["Meningitis","can damage the inner ear and lead to severe loss."]
  ], checkpoint: ["Keep following risk","passing a newborn screen does not eliminate later risk."] },
  "syndromes": { pairs: [
    ["Apert","Craniosynostosis, prominent eyes, fused fingers/toes"],
    ["BOR spectrum","Neck cysts/clefts, preauricular pits/tags, renal anomalies"],
    ["CHARGE","Coloboma, choanal atresia, characteristic external ears; multiple systems"],
    ["Cornelia de Lange","Characteristic face/long lashes, growth and developmental deficits"],
    ["Crouzon","Craniofacial changes, protruding eyes, beak-like nose; no Apert syndactyly"],
    ["Down","Flattened nasal bridge, hypotonia, protruding tongue, narrow canals"],
    ["Fetal alcohol","Smooth philtrum, thin upper lip, small eye openings"],
    ["Goldenhar","Usually one-sided facial underdevelopment and ear anomalies"],
    ["Johanson-Blizzard","Hypoplastic nasal alae, small stature, pancreatic insufficiency"],
    ["Pierre Robin sequence","Small jaw → displaced tongue → palate/airway consequences"],
    ["Stickler","Myopia/retinal detachment, midface underdevelopment, cleft palate"],
    ["Treacher Collins","Bilateral cheek/jaw underdevelopment, microtia, downslanting eyes"],
    ["Turner","Short stature, webbed neck, low hairline"],
    ["Usher","Retinitis pigmentosa with hearing loss; possible balance problems"],
    ["Waardenburg","White forelock, iris pigment differences; wide-set eyes in type I"],
    ["Pendred","Thyroid goiter, enlarged vestibular aqueduct/Mondini changes"]
  ], checkpoint: ["Use several findings together","Use several clues together. A photograph alone may not distinguish every syndrome. Keep the original course images available below and in practice; ambiguous exclusive hearing-loss claims are not scored."] },
  "hearing-aids": { pairs: [
    ["Microphone","acoustic to electrical signal."],
    ["Amplifier/processor","modifies the signal."],
    ["Receiver","electrical back to acoustic output."],
    ["Battery","power."],
    ["WDRC","keeps soft speech audible while maintaining comfortable louder input."]
  ], checkpoint: ["Follow the direction of the signal","The receiver is a loudspeaker, not the environmental pickup."] },
  "children": { pairs: [
    ["1–3–6","screen by 1 month, diagnose by 3, intervention by 6."],
    ["BTE","replace the earmold as the ear grows","soft mold inside, electronics outside"],
    ["Earmolds","every 2–3 months in infants","3–6 months up to age 2."],
    ["Audiologic follow-up","every 3 months for the first 2 years."],
    ["Ling check","evaluates access across speech sounds"]
  ], checkpoint: ["Separate the two schedules","These are different schedules."] },
  "verification": { pairs: [
    ["Verification","device output","Does delivered output match intended targets?"],
    ["Validation","patient benefit","How does the patient perform and function with amplification?"],
    ["Probe-microphone real-ear measures","output close to the eardrum in that person’s ear."],
    ["Test-box electroacoustic measures","simulated conditions, using an estimate of average resonance."],
    ["Speech in soundfield","aided vs unaided, in quiet and noise."],
    ["REUR","Unaided response: sound pressure in the open ear canal."],
    ["REAR","Aided response: device in place and switched on."],
    ["REOR","Occluded response: device in place but switched off."],
    ["RESR","Saturation response: maximum device output."],
    ["REIG","Insertion gain: REAR minus REUR."],
    ["RECD","Real-ear-to-coupler difference: occluded-ear versus 2-cc coupler SPL for the same source."],
    ["CID W-22 and NU-6","use monosyllabic words in quiet"],
    ["HINT and QuickSIN","use sentences in noise"],
    ["WIN","uses words in noise"],
    ["IOI-HA","covers use, benefit, remaining limitations/restrictions, effects on others, satisfaction and quality of life"],
    ["APHAB","compares communication, background noise, reverberation and aversiveness"],
    ["COSI","uses patient-selected improvement areas"],
    ["SOAC","adds the significant other’s perspective"],
    ["PEACH","addresses device benefit in quiet/noise"],
    ["LittlEARS","auditory/early speech development"],
    ["FLI-P","functional listening from birth to six"],
    ["MAIS/IT-MAIS","everyday auditory behavior and spontaneous responses"],
    ["ELF","functional hearing in very young children"]
  ], checkpoint: ["Separate output from benefit","A verified performance change may not be validated as useful in daily life."] },
  "classroom": { pairs: [
    ["SNR","teacher signal − noise."],
    ["Reverberation","overlaps the direct signal"],
    ["RT","measures a 60 dB decay."],
    ["Personal FM/DM","uses a teacher microphone/transmitter and student receiver"],
    ["CADS","distributes sound throughout the room."]
  ], checkpoint: ["Interpret the room standard","The final slide describes the ANSI standards as not federally mandatory."] },
  "outcomes": { pairs: [
    ["SIFTER","Teacher","academics, attention, communication, class participation and school behavior."],
    ["LIFE-R","Student and teacher versions","classroom noise, distance, peers, media, directions."],
    ["CHAPS","parent/teacher questionnaire.","Quiet, noise, auditory memory, ideal conditions and multiple auditory inputs."],
    ["SMART","specific, measurable, achievable, relevant, time-bound."]
  ], checkpoint: ["Check whether the goal can be measured","“Will hear better” does not define an observable behavior, criterion or deadline."] },
  "dots": { pairs: [
    ["Count dots","on or below the threshold line","their levels reach or exceed threshold."],
    ["SII percent","The count out of 100 estimates"],
    ["Figure 3 curve","to estimate words vs sentences."]
  ], checkpoint: ["Distinguish audibility from recognition","It does not measure actual speech understanding or predict classroom noise performance by itself."] },
  "guest": { pairs: [
    ["Same PTA","can conceal different configurations, access and functional needs."],
    ["Soundfield","is not ear-specific."],
    ["Cross-check","behavioral sensitivity, middle-ear status (tympanometry), OHC function (OAEs), neural response (ABR), speech testing and case history."],
    ["ABR","estimates sensitivity and assesses neural synchrony"]
  ], checkpoint: ["Check what the test measures","Tympanometry is not a direct hearing test."] },
  "s1-def": { pairs: [
    ["Audiologic rehabilitation","professional processes performed in collaboration with a client who has hearing loss and the client's family to achieve better communication and minimize the resulting difficulties."],
    ["Habilitation","efforts for those born with hearing loss."],
    ["Rehabilitation","efforts to restore a lost state or function."]
  ] },
  "s1-who": { pairs: [
    ["Entry-level degree","SLP = master's","audiology = professional doctorate (Au.D.)."]
  ] },
  "s1-char": { pairs: [
    ["Prelingually deaf","Born without hearing (congenitally deaf) or lost it before speech and language develop, at 3-5 years (adventitiously deaf)."],
    ["Perilingually deaf","Loss develops while acquiring a first language"],
    ["Postlingually deaf","Profoundly deaf after age 5-10 with normal hearing long enough to establish speech and language."],
    ["Deafened","Loss after completing education, generally late teens or early 20s and up."],
    ["Hard of hearing","Born with or later acquired a partial loss."]
  ] },
  "s1-cons": { pairs: [
    ["Primary","impact on verbal communication."],
    ["Secondary","educational, vocational, psychological and social implications."]
  ] },
  "s1-core": { pairs: [
    ["CORE","assessment"],
    ["CARE","management"],
    ["Communication status","auditory, visual, language, manual, self-report, previous rehabilitation, overall status."],
    ["Overall participation variables","psychological (emotional), social, vocational, educational."],
    ["Related personal factors","personality, IQ, age, race, gender."],
    ["Environmental factors","services, systems, barriers, facilitators, acoustic conditions."]
  ] },
  "s1-out": { pairs: [
    ["Verification","objective","measures precisely how and what the device provides"],
    ["Validation","subjective","shows whether rehab is meeting goals and improving quality of life"]
  ] },
  "s2-pta": { pairs: [
    ["PTA","average of 500, 1000 and 2000 Hz"]
  ] },
  "s2-type": { pairs: [
    ["Conductive","Normal (0-25)","Air-bone gap present"],
    ["Sensorineural","Impaired, overlapping AC","No significant gap"],
    ["Mixed","Gap present (AC worse than BC)"]
  ] },
  "s2-config": { pairs: [
    ["Flat","similar thresholds across frequency."],
    ["Sloping","gradually worse toward the high frequencies."],
    ["Precipitous","near-normal lows then a sharp high-frequency drop."],
    ["Rising","worse in the lows"]
  ] },
  "s3-inh": { pairs: [
    ["Autosomal dominant","Gene from one parent is enough","50% each child"],
    ["Autosomal recessive","Gene from both parents","25% each child"],
    ["X-linked recessive","Gene on X","males (XY) have one X so one mutated allele causes it"],
    ["Mitochondrial","Mitochondrial DNA comes from the mother","sperm contributes none"]
  ] },
  "s3-malf": { pairs: [
    ["Michel aplasia","complete labyrinthine and cochlear aplasia","no inner-ear structures, no residual hearing"],
    ["Mondini dysplasia","partially developed, flattened cochlea, about 1.5 turns instead of 2"]
  ] },
  "s3-cx": { pairs: [
    ["Cx26","is critical for potassium exchange in the organ of Corti."]
  ] },
  "s4-over": { pairs: [
    ["Transferred from mother through the placenta","mild to profound HL","minimal to serious additional abnormalities."]
  ] },
  "s4-table": { pairs: [
    ["Congenital rubella (German measles)","Progressive (sensorineural)"],
    ["CMV","most common intrauterine infection"],
    ["Toxoplasmosis","Parasite in domestic and wild animals (cats, litter box)."]
  ] },
  "s4-peri": { pairs: [
    ["Anoxia","lack of oxygen to the brain before, during or shortly after birth (umbilical cord around the neck)"],
    ["Intracranial hemorrhage","bleeding in the brain/skull"]
  ] },
  "s4-post": { pairs: [
    ["perilymph fistula","oval/round window rupture"],
    ["Hyperbilirubinemia","bilirubin is a by-product of red-cell breakdown, detoxified in the liver","can become toxic to the CNS"]
  ] },
  "s4-word-clues": { pairs: [
    ["Cytomegalovirus (CMV)","cyto- = cell; megalo- = large. The name refers to enlarged infected cells, not to an ear structure."],
    ["Rh incompatibility","Rh names a blood-group factor; incompatibility means the maternal and fetal blood factors differ."]
  ] },
  "s5-photo": { pairs: [
    ["Apert","tall skull, bulging eyes, fused fingers."],
    ["BOR","preauricular pit or tag, cup-shaped ear."],
    ["CdLS","joined/arched eyebrows, long lashes, thin down-turned lips."],
    ["Crouzon","protruding eyes, beaked nose, no syndactyly."],
    ["Down","flattened nasal bridge, upslanting eyes, open mouth/tongue."],
    ["FAS","smooth philtrum, thin upper lip, small eye openings."],
    ["Goldenhar","one-sided facial underdevelopment, ear tags/microtia."],
    ["Pierre Robin","very small receding lower jaw in profile."]
  ] },
  "s5-word-clues": { pairs: [
    ["Branchio-oto-renal (BOR)","branchio- = embryonic branchial arch/neck; oto- = ear; renal = kidney."],
    ["syndactyly","means fused fingers/toes."],
    ["hypoplasia","means underdevelopment."]
  ] },
  "s6-context": { pairs: [
    ["Audiologist","determines auditory access"],
    ["SLP","evaluates communication and functional impact"]
  ] },
  "s6-same": { pairs: [
    ["Sound field","is not ear-specific."],
    ["Unilateral","trouble localizing, hearing in noise, from the poorer side","increased listening effort"]
  ] },
  "s6-pattern": { pairs: [
    ["mild low-frequency loss","could be middle-ear effusion, negative middle-ear pressure, early conductive pathology, temporary/fluctuating loss, or measurement variability."]
  ] },
  "s6-cross": { pairs: [
    ["Behavioral audiometry","Functional hearing sensitivity"],
    ["Tympanometry","Middle-ear status"],
    ["OAEs","Cochlear outer-hair-cell function"],
    ["ABR","Neural synchrony/pathway response"],
    ["Speech testing","Functional access to speech"]
  ] },
  "s6-oae": { pairs: [
    ["outer hair cells","evidence of cochlear (not neural) function."]
  ] },
  "s6-types": { pairs: [
    ["Conductive","ABG with normal BC"],
    ["Sensorineural","No ABG"],
    ["Mixed","Chronic ME disease on top of SNHL"]
  ] },
  "s7-comp": { pairs: [
    ["Microphone","acoustic energy -&gt; electrical energy"],
    ["Amplifier (digital processor)","A/D conversion, digital signal processing, D/A conversion, amplification."],
    ["Receiver","electrical back to acoustic"],
    ["Battery","zinc-air or rechargeable","life depends on hours used and current drain."]
  ] },
  "s7-feat": { pairs: [
    ["Volume control","can be disabled/preset for kids (we need them to hear everything) or non-tech-savvy patients."],
    ["Telecoil","alternate input using a magnetic (not acoustic) signal: landline phones, loop systems, personal assistive listening devices."],
    ["Multiple memories/programs","different settings for lecture, concert, home."],
    ["Auracast (Bluetooth LE Audio)","broadcasts from venues straight to compatible aids, the way loops used to."]
  ] },
  "s7-styles": { pairs: [
    ["BTE","All electronics behind the ear"],
    ["RIC","thin wire to a receiver in the canal"]
  ] },
  "s7-mold": { pairs: [
    ["Earmolds","couple the BTE to the ear and channel sound"],
    ["Vent","passage under the sound bore"],
    ["Occlusion effect","trapped bone-conducted sound makes own voice loud/hollow (fingers-in-ears demo)."]
  ] },
  "s7-cand": { pairs: [
    ["Candidacy variables","communication difficulty (identical audiograms, different difficulty; count-the-dots helps)","type of loss (conductive may be medically managed -&gt; refer to ENT)"]
  ] },
  "s7-qc": { pairs: [
    ["Gain","dB difference between input and output."],
    ["Frequency response","gain at each frequency (graph)."],
    ["MPO / OSPL90","maximum SPL with gain full on and a 90 dB SPL input (keeps output below damaging/uncomfortable)."],
    ["WDRC","soft sounds soft but audible, medium medium, loud loud but not uncomfortable."]
  ] },
  "s7-hio": { pairs: [
    ["Instrument operation","(on/off, programs, volume, phone, Bluetooth)"],
    ["Acoustic feedback","(when it should and should not squeal)"]
  ] },
  "s8-jcih": { pairs: [
    ["JCIH 2007","screen by 1 month, diagnose by 3 months, early intervention by 6 months (1-3-6)."],
    ["electrophysiologic threshold prediction","If reliable behavioral results cannot be obtained"]
  ] },
  "s8-aaa": { pairs: [
    ["BTE","is the style of choice while the ear grows"],
    ["Prescriptions","DSL or NAL, independent (not manufacturer proprietary)","verify with real-ear/RECD"],
    ["Outcomes","parent report (PEACH, IT-MAIS, LittlEARS, FAPI), teacher (TEACH, SIFTER), self (LIFE, CA-PHAB, COSI-C)."]
  ] },
  "s8-checks": { pairs: [
    ["Listening check","Daily, each morning and before therapy/class."],
    ["Ling six-sound check","ah, oo, ee, s, sh, m + silence.","Covers the speech frequency range, confirms access before learning."]
  ] },
  "s8-law": { pairs: [
    ["Insurance coverage","for hearing aids for persons under 18."]
  ] },
  "s8-special": { pairs: [
    ["CROS","one ear normal, other no functional hearing","mic on the dead side routes sound to the good ear."],
    ["BiCROS","the better ear also has loss, so it gets amplification too."],
    ["Bone-conduction devices (BAHA)","vibration instead of acoustic signal"]
  ] },
  "s9-hat": { pairs: [
    ["Hardwire","Handheld mic wired to headphones/earbuds"],
    ["FM/DM","Radio frequency, mic to receiver worn by patient"],
    ["Infrared","Light"],
    ["Loop","Mic -&gt; powerful amp -&gt; wire loop in the room"]
  ] },
  "s9-acoustics": { pairs: [
    ["SNR","signal - noise."],
    ["Reverberation","prolonged sound from reflections off hard surfaces"],
    ["RT","time for sound to decay 60 dB."],
    ["Distance","conversational speech about 60 dB SPL at 6 ft, dropping with distance."]
  ] },
  "s9-rm": { pairs: [
    ["FM/DM advantage","positive and constant SNR."],
    ["CADS / sound field","distributes the teacher's voice to the whole classroom (PA-like)"]
  ] },
  "s9-smart": { pairs: [
    ["Consistent use","wear devices all waking hours","parent/teacher report, 90% of the day","within 4 weeks."],
    ["Troubleshooting","identify and fix basic issues","4 of 5 trials","within 6 weeks."]
  ] },
  "s9-dots": { pairs: [
    ["SII (speech intelligibility index)","Quick estimate of speech audibility from an audiogram."],
    ["count dots","on or below the line (audible)."]
  ] },
  "s2-scale": {
    emphasis: ["use the uploaded scale, \"not the one from today's slide deck.\"", "ANN"]
  }
};

L.exam1Reading = function(card){
  const plan = plans[card.id];
  if (!plan) return card.html;
  let html = card.html;
  if (plan.pairs) {
    const text = html.replace(/<[^>]*>/g, '\n');
    const pairs = plan.pairs.filter(pair => pair.every(phrase => text.includes(phrase)));
    html = L.studyAnnotations.markHTML(html, {
      terms: pairs.map(pair => pair[0]),
      definitions: pairs.flatMap(pair => pair.slice(1))
    });
  }
  if (plan.emphasis) {
    const [phrase, source] = plan.emphasis;
    html = html.replace(phrase, '<mark class="e2-emphasis" data-emphasis-source="' + source + '">$&</mark>');
  }
  if (plan.checkpoint) {
    const [label, body] = plan.checkpoint;
    for (const tag of ['li','p']) {
      const start = '<' + tag + '>' + body;
      if (!html.includes(start)) continue;
      html = html.replace(start, '<' + tag + ' class="reading-checkpoint"><b class="checkpoint-label">' + L.util.esc(label) + '</b>' + body);
      break;
    }
  }
  return html;
};
})(typeof window !== 'undefined' ? window : globalThis);
