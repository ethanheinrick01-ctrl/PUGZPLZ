(function(root){
 'use strict';
 var L=root.L,D=L.EXAM2_DATA;
 function term(text){return '<strong class="e2-term">'+text+'</strong>';}
 function emphasis(text,source){return '<mark class="e2-emphasis" data-emphasis-source="'+source+'">'+text+'</mark>';}
 function point(text,children){return {text:text,children:children||[]};}
 function readingPoints(points,nested,ordered){
  var tag=ordered?'ol':'ul';
  return '<'+tag+' class="'+(nested?'note-subpoints':'note-points')+'">'+points.map(function(p){
   return '<li>'+(typeof p==='string'?p:p.text)+(p.children&&p.children.length?readingPoints(p.children,true,p.ordered):'')+'</li>';
  }).join('')+'</'+tag+'>';
 }
 // Exact section selections, reviewed against the original classroom transcripts.
 var highlights=[
  ['ci-candidacy',0,'Support and participation matter alongside auditory findings.','ART1006'],
  ['ci-assessment',0,'These tasks are harder than closed-set recognition','ART1006'],
  ['ci-assessment',3,'contribute to decisions and daily habilitation','ART1006'],
  ['ci-life',1,'Follow-up considers comfortable loudness, sound quality, and speech understanding.','ART1006'],
  ['ci-life',2,'earlier implantation with easier device bonding','ART1006'],
  ['experience',0,'involves conscious attention to sound.','ART1022-1'],
  ['experience',1,'consistent technology use throughout waking hours','ART1020'],
  ['experience',2,'Review access and the learning conditions with the care team.','ART1020'],
  ['acoustics',0,'“I hear it” and “I understand it” therefore answer different questions.','ART1020'],
  ['acoustics',0,'The boundaries vary across frequency.','ART1020'],
  ['ling',0,'monitor aided access and changes across sessions','ART1020'],
  ['development',3,'Daily enrichment integrates listening, language, cognition, and literacy into normal routines.','ART1020'],
  ['at-foundations',2,'An auditory-only high-frequency discrimination goal is not appropriate if that contrast is not accessible through the child’s devices.','ART1022-3'],
  ['at-hierarchy',3,'Naming them or explaining their meanings is not required.','ART1022-3'],
  ['at-hierarchy',4,'Raising a hand whenever any sound occurs only establishes detection','ART1022-3'],
  ['at-hierarchy',5,'Repetition alone does not demonstrate understanding.','ART1022-4'],
  ['at-design',1,'challenging without being frustrating','ART1022-6'],
  ['at-design',2,'Objectives are measurable milestones toward the broader goal.','ART1022-6'],
  ['at-design',3,'all waking hours','ART1022-6'],
  ['at-programs',1,'Choose the program for the child and family.','ART1022-6']
 ];
 function highlight(nodes,phrase,source){
  return nodes.map(function(node){
   if(typeof node==='string')return node.includes(phrase)&&!node.includes('e2-emphasis')?node.replace(phrase,emphasis(phrase,source)):node;
   return Object.assign({},node,{text:highlight([node.text],phrase,source)[0],children:highlight(node.children||[],phrase,source)});
  });
 }
 highlights.forEach(function(row){
  var t=D.topics.find(function(t){return t.id===row[0];}),s=t.sections[row[1]];
  s.outline=highlight(s.outline,row[2],row[3]);
  if(JSON.stringify(s.outline).includes(row[2]))s.outlineSources=Array.from(new Set((s.outlineSources||s.sources).concat(row[3])));
 });
 // Reviewed source text guards each outline against later content edits or reordering.
 var focusSources={
  "CI": [
    {
      "title": "Candidacy and early access",
      "points": [
        "Compare young-child, older-child and adult candidacy. Preserve the age, hearing-loss pattern, test, aided condition and inequality. A qualifying score alone does not establish candidacy.",
        "Know the actual early-access findings: Dettman’s reported receptive-vocabulary result by school entry, and the separate spoken-language progress comparison for younger implantation."
      ]
    },
    {
      "title": "Signal path and device components",
      "points": [
        "Trace microphone → processor → transmitter → receiver → array → auditory nerve → brain. Separate acoustic input, digital transmission and electrical stimulation.",
        "Identify external microphone, processor, transmitter and battery versus internal receiver and array. Match each component to its job."
      ]
    },
    {
      "title": "Listening configurations and follow-up",
      "points": [
        "Distinguish binaural hearing, two CIs in the lecture’s bilateral comparison, and one CI plus a contralateral hearing aid in bimodal hearing.",
        "Follow evaluation → surgery/telemetry → initial activation about 2–4 weeks later → continuing map adjustment and habilitation. Review functional reports, age/language-appropriate testing and team roles."
      ]
    }
  ],
  "NF": [
    {
      "title": "Brain development and access",
      "points": [
        "Auditory function is meaningful brain use of sound. Access is the foundation. Hearing a signal is different from consciously attending and listening.",
        "Separate neuroplasticity, cross-modal reorganization and developmental synchrony. The lecture emphasizes greatest early plasticity in the first 3½ years. It does not say learning then becomes impossible."
      ]
    },
    {
      "title": "Listening age and early audition",
      "points": [
        "Use the lecture’s listening-age Day Zero: technology worn throughout waking hours. Keep chronological age, effective access history and signal quality distinct.",
        "Compare the Integrated Scales audition bands: 0–3 months covers early awareness and caregiver voice. At 4–6 months, sound meaning and inflection responses emerge. At 16–18 months, the scales include more words, phrases and simple questions."
      ]
    },
    {
      "title": "Vocabulary and source qualifications",
      "points": [
        "Keep receptive and expressive vocabulary separate: at 16–18 months the scales list 50+ understood words and 10+ meaningful spoken words. Age bands are not rigid deadlines.",
        "The lecture chart gives 10–15 words at 18 months, 300–400 at 3 years, 600–1,000 at 3–4, and 1,000–1,600 at 4–5. Its domain is unlabeled and its two-year entries conflict. Do not merge these with the scales."
      ]
    }
  ],
  "SA": [
    {
      "title": "Core distinctions and figure axes",
      "points": [
        "Separate audibility from intelligibility, and intensity from frequency and duration. Hearing that speech occurred does not prove the words were understood.",
        "Read the axes: Figure 4-2 sound level rises upward. Figure 4-5 dB HL increases downward. Figure 4-3 is a long-interval spectrum, not a single vowel’s formants or a universal pitch."
      ]
    },
    {
      "title": "Speech power and connected speech",
      "points": [
        "Use Table 4-1 to compare relative phonetic power. Its entries are relative values, not dB labels. Vowel power is different from the information consonants contribute to speech distinctions.",
        "Explain transitional cues from movement between adjacent sounds. Connected speech changes acoustic properties rather than preserving every sound’s isolated form."
      ]
    },
    {
      "title": "Context and communication noise",
      "points": [
        "Compare Table 4-3 speaker/message/environment/listener contributions and Table 4-4 syntactic/semantic/situational constraints.",
        "Table 4-5 communication noise includes speaker, environment and listener barriers, including visual interference. Speech in noise also depends on the listener’s language knowledge and available context."
      ]
    }
  ],
  "AT": [
    {
      "title": "Assessment tools and Ling 10",
      "points": [
        "IT-MAIS, PEACH and FAPI provide functional evidence. WIPI and NU-CHIPS use picture responses. ESP addresses pattern/word categories. GASP has three subtests. DASL II has three auditory areas. A listed assessment is not automatically norm-referenced.",
        "Know current Ling 10: /u, a, i, m, n, h, dʒ, ʃ, s, z/. Silence is a catch trial. The “j” is /dʒ/ as in jump."
      ]
    },
    {
      "title": "Response demands and skill hierarchy",
      "points": [
        "Keep Ling response demands explicit: detecting any sound differs from identifying which sound was presented. Vary order and include silence. Keep the lecture’s feet protocol separate from the handout’s meter protocol.",
        "Classify tasks by response: detection → discrimination → identification → comprehension. Do not classify solely by the stimulus or the child’s motor response."
      ]
    },
    {
      "title": "Training approaches and activity design",
      "points": [
        "Separate analytic small-unit work, synthetic meaningful/contextual work, pragmatic control of communication variables and eclectic combinations. Formal/informal is an activity-type distinction.",
        "Design with auditory skill, stimuli, activity type and difficulty. Vary set size, unit, similarity, context, structure and listening conditions deliberately. Review SPICE, SKI-HI, DASL II, Cottage Acquisition Scales and Learn To Talk Around The Clock."
      ]
    }
  ],
  "VS": [
    {
      "title": "Terminology and visual information",
      "points": [
        "In the lecture’s terminology, lipreading is visual-only and speechreading combines auditory and visual cues. Usage varies elsewhere.",
        "Use Figure 5-1 to separate speaker, signal/code, environment and speechreader factors. Apply these to natural articulation, visible mouth movements, lighting, distance, angle, attention and language knowledge."
      ]
    },
    {
      "title": "Visual limits and viewing conditions",
      "points": [
        "Explain limits from visibility, rate, coarticulation/stress, visemes/homophenes and talker differences. Clear speech uses good, unexaggerated articulation.",
        "The lecture specifies 0° azimuth and about 2–5 feet as optimal viewing. These are course-specific values. The textbook discusses broader conditions."
      ]
    },
    {
      "title": "Languages and manual systems",
      "points": [
        "ASL is an independent language. Its sign parameters are hand configuration, movement, location and orientation. Facial/body cues add prosody. MCE represents English structure.",
        "Compare all Table 5-6 columns: ASL, PSE, Signed English, LOVE, SEE II, SEE I, fingerspelling, Cued Speech and English. Cued Speech combines mouth movements with eight handshapes/four placements. English is a comparison language, not a manual system."
      ]
    }
  ]
};
 var focus={
  CI:[
   [point('Compare candidacy within the named age group.',[
    'Keep the hearing-loss pattern, test, aided condition and inequality attached to the value.',
    'A qualifying score alone does not establish '+term('candidacy')+'.',
    emphasis('Family support, realistic expectations and participation in rehabilitation matter alongside the hearing findings.','ART1006')
   ]),point('Keep the two early-access findings separate.',[
    'Review Dettman’s reported '+term('receptive-vocabulary')+' result by school entry.',
    'Review the separate spoken-language progress comparison for younger implantation.'
   ])],
   [point('Follow the signal through the device and nervous system.',[
    term('Microphone')+' → '+term('processor')+' → '+term('transmitter')+' → '+term('receiver')+' → '+term('array')+' → '+term('auditory nerve')+' → brain.',
    'Separate acoustic input, digital transmission and electrical stimulation.',
    emphasis('A CI does not restore normal hearing.','ART1006')
   ]),point('Match each component to its job.',[
    term('External components')+' include the microphone, processor, transmitter and battery.',
    term('Internal components')+' include the receiver and electrode array.'
   ])],
   [point('Name the actual listening configuration.',[
    term('Binaural hearing')+' means hearing with two ears.',
    'The lecture’s '+term('bilateral')+' comparison uses two CIs.',
    term('Bimodal hearing')+' uses one CI plus a contralateral hearing aid.'
   ]),point('Keep the follow-up sequence in order.',[
    'Evaluation → surgery and telemetry → '+term('initial activation')+' about 2–4 weeks later → continuing map adjustment and habilitation.',
    emphasis('Follow-up maintains comfortable loudness, sound quality and access to speech.','ART1006'),
    'Review functional reports, age- and language-appropriate testing and team roles.'
   ])]
  ],
  NF:[
   [point(term('Auditory function')+' is meaningful brain use of sound.',[
    'Access is the foundation.',
    emphasis('Hearing a signal is different from consciously attending and listening.','ART1022-1')
   ]),point('Separate the three developmental ideas.',[
    term('Neuroplasticity')+' concerns the brain’s ability to change with experience.',
    'Keep '+term('cross-modal reorganization')+' and '+term('developmental synchrony')+' distinct.',
    'The lecture emphasizes greatest early plasticity in the first 3½ years. It does not say learning then becomes impossible.'
   ])],
   [point('Count useful listening experience.',[
    'The lecture’s '+term('listening-age Day Zero')+' requires '+emphasis('technology worn throughout waking hours','ART1020')+'.',
    'Keep chronological age, effective access history and signal quality distinct.'
   ]),point('Compare the Integrated Scales '+term('audition')+' bands.',[
    '0–3 months covers early awareness and caregiver voice.',
    'At 4–6 months, sound meaning and inflection responses emerge.',
    'At 16–18 months, the scales include more words, phrases and simple questions.'
   ])],
   [point('Keep '+term('receptive')+' and '+term('expressive vocabulary')+' separate.',[
    'At 16–18 months, the scales list 50+ understood words and 10+ meaningful spoken words.',
    'Age bands are not rigid deadlines.'
   ]),point('Read the lecture chart with its source qualifications.',[
    'It gives 10–15 words at 18 months, 300–400 at 3 years, 600–1,000 at 3–4, and 1,000–1,600 at 4–5.',
    'Its domain is unlabeled and its two-year entries conflict.',
    'Do not merge these values with the Integrated Scales.'
   ])]
  ],
  SA:[
   [point('Separate '+term('audibility')+' from '+term('intelligibility')+'.',[
    emphasis('Hearing that speech occurred does not prove the words were understood.','ART1020'),
    'Also distinguish '+term('intensity')+', '+term('frequency')+' and '+term('duration')+'.'
   ]),point('Read the axes before interpreting a figure.',[
    'Figure 4-2 sound level rises upward.',
    'Figure 4-5 dB HL increases downward.',
    'Figure 4-3 is a long-interval spectrum, not a single vowel’s formants or a universal pitch.'
   ])],
   [point('Use Table 4-1 to compare '+term('relative phonetic power')+'.',[
    'Its entries are relative values, not dB labels.',
    'Vowel power is different from the information consonants contribute to speech distinctions.',
    emphasis('The octave band near 2,000 Hz carries especially important speech information.','ART1020')
   ]),point('Explain '+term('transitional cues')+' from movement between adjacent sounds.',[
    'Connected speech changes acoustic properties rather than preserving every sound’s isolated form.'
   ])],
   [point('Use context to explain how a message becomes easier to follow.',[
    'Compare Table 4-3 speaker, message, environment and listener contributions.',
    'Compare Table 4-4 '+term('syntactic')+', '+term('semantic')+' and '+term('situational constraints')+'.'
   ]),point(term('Communication noise')+' includes more than acoustic noise.',[
    'Table 4-5 includes speaker, environment and listener barriers, including visual interference.',
    'Speech in noise also depends on the listener’s language knowledge and available context.'
   ])]
  ],
  AT:[
   [point('Match each assessment to the information it provides.',[
    term('IT-MAIS')+', '+term('PEACH')+' and '+term('FAPI')+' provide functional evidence.',
    term('WIPI')+' and '+term('NU-CHIPS')+' use picture responses.',
    term('ESP')+' addresses pattern and word categories.',
    term('GASP')+' has three subtests. '+term('DASL II')+' has three auditory areas.',
    'A listed assessment is not automatically norm-referenced.'
   ]),point('Know the current '+term('Ling 10')+' sounds.',[
    '/u, a, i, m, n, h, dʒ, ʃ, s, z/. The “j” is /dʒ/ as in jump.',
    'Silence is a catch trial.'
   ])],
   [point('Keep the Ling response demand explicit.',[
    term('Detecting')+' any sound differs from '+term('identifying')+' which sound was presented.',
    'Vary order and include silence.',
    'Keep the lecture’s feet protocol separate from the handout’s meter protocol.'
   ]),point('Classify a task by the response it requires.',[
    term('Detection')+' → '+term('discrimination')+' → '+term('identification')+' → '+term('comprehension')+'.',
    'Do not classify solely by the stimulus or the child’s motor response.',
    emphasis('Repeating a stimulus alone does not demonstrate comprehension.','ART1022-4')
   ])],
   [point('Separate the four training approaches.',[
    term('Analytic')+' uses small-unit work.',
    term('Synthetic')+' uses meaningful or contextual work.',
    term('Pragmatic')+' develops control of communication variables.',
    term('Eclectic')+' combines approaches.',
    term('Formal or informal')+' describes activity type.'
   ]),point('Make four deliberate design decisions.',[
    'Choose the '+term('auditory skill')+', '+term('stimuli')+', '+term('activity type')+' and '+term('difficulty')+'.',
    'Vary set size, unit, similarity, context, structure and listening conditions deliberately.',
    emphasis('Keep the task challenging without making it frustrating.','ART1022-6'),
    'Review SPICE, SKI-HI, DASL II, Cottage Acquisition Scales and Learn To Talk Around The Clock.'
   ])]
  ],
  VS:[
   [point('Use the lecture’s terminology.',[
    term('Lipreading')+' is visual-only.',
    term('Speechreading')+' combines auditory and visual cues. Usage varies elsewhere.'
   ]),point('Use Figure 5-1 to separate the four sources of variation.',[
    term('Speaker')+', '+term('signal/code')+', '+term('environment')+' and '+term('speechreader')+'.',
    'Apply them to natural articulation, visible mouth movements, lighting, distance, angle, attention and language knowledge.'
   ])],
   [point('Explain the limits on visible speech information.',[
    'Consider visibility, rate, coarticulation and stress, '+term('visemes/homophenes')+' and talker differences.',
    'Clear speech uses good, unexaggerated articulation.'
   ]),point('Keep the viewing values attached to their source.',[
    'The lecture specifies '+term('0° azimuth')+' and about '+term('2–5 feet')+' as optimal viewing.',
    'These are course-specific values. The textbook discusses broader conditions.'
   ])],
   [point(term('ASL')+' is an independent language.',[
    'Its sign parameters are hand configuration, movement, location and orientation.',
    'Facial and body cues add prosody.',
    term('MCE')+' represents English structure.'
   ]),point('Compare all Table 5-6 columns.',[
    'ASL, PSE, Signed English, LOVE, SEE II, SEE I, fingerspelling, Cued Speech and English.',
    term('Cued Speech')+' combines mouth movements with eight handshapes and four placements.',
    'English is a comparison language, not a manual system.'
   ])]
  ]
 };
 function focusOutline(groupId,section){
  if(!Object.hasOwn(focusSources,groupId))return null;
  var index=focusSources[groupId].findIndex(function(source){return source.title===section.title&&JSON.stringify(source.points)===JSON.stringify(section.points);});
  return index<0?null:focus[groupId][index];
 }
 D.finalMocks.groups.forEach(function(group){
  group.noteSections.forEach(function(section){section.outline=focusOutline(group.id,section);});
  var codes=Array.from(readingPoints(group.noteSections.flatMap(function(s){return s.outline||[];})).matchAll(/data-emphasis-source="([^"]+)"/g),function(m){return m[1];});
  group.sources=Array.from(new Set(group.sources.concat(codes)));
 });
 // The older Guide routes use the same authored reading as the mini-chapters.
 Object.values(L.GUIDE).flat().forEach(function(card){
  var topic=D.topics.find(function(t){return card.id==='e2-'+t.id+'-guide';});
  if(!topic)return;
  var links=card.html.match(/<a\b[^>]*>[\s\S]*?<\/a>/g)||[];
  card.html=topic.sections.map(function(s){return '<section class="note-group"><h4>'+L.util.esc(s.outlineTitle||s.title)+'</h4>'+readingPoints(s.outline||s.points)+'</section>';}).join('');
  card.html+=links.filter(function(link){return !card.html.includes(link);}).map(function(link){return '<p>'+link+'</p>';}).join('');
  card.src=Array.from(new Set(card.src.concat(topic.sections.flatMap(function(s){return s.outlineSources||s.sources;}))));
 });
 L.studyReading={highlights:highlights,highlight:highlight,points:readingPoints,focusOutline:focusOutline};
})(typeof window!=='undefined'?window:globalThis);
