(function(root){
 'use strict';
 var topic=root.L.EXAM2_DATA.topics.find(function(t){return t.id==='at-hierarchy';});
 if(!topic)return;
 function term(text){return '<strong class="e2-term">'+text+'</strong>';}
 function label(text){return '<strong class="note-label">'+text+'</strong>';}
 // Authored reading outlines. Original points, sources, concept IDs and questions remain intact.
 var outlines=[
  [
   {text:term('Erber’s hierarchy')+' describes increasing demands on listening.',children:[
    term('Detection')+' asks whether a sound is present or absent.',
    term('Discrimination')+' asks whether sounds are the same or different.',
    term('Identification')+' asks which sound or word was heard.',
    term('Comprehension')+' asks what the message means.'
   ]},
   {text:'The levels can overlap during learning.',children:[
    'A child may practice discrimination and identification during the same period.',
    'An earlier skill may need more work after a setback or when the listening task changes.',
    'Use the hierarchy to choose targets. The October 22 lecture does not require mastery of one isolated level before any work on the next.'
   ]},
   {text:'Classify the '+term('response demand')+' under the stated conditions.',children:[
    'A movement made whenever sound occurs can show detection.',
    'Pointing to the particular object named can show identification.',
    'The toy, game, or slide heading alone does not tell you which skill the child demonstrated.'
   ]},
   {text:'Read the two course figures together.',children:[
    'Slide 18 uses overlapping circles to show that levels are related.',
    'Slide 19 uses a ladder to show increasing demands. Read it with the lecture’s explanation that development is not a rigid staircase.'
   ]}
  ],
  [
   {text:term('Detection / sound awareness')+' means noticing the presence or absence of sound through '+term('audition alone')+'.',children:[
    'Naming the sound or understanding its meaning is not required. A detection response by itself does not establish word recognition or comprehension.'
   ]},
   {text:'Look for '+term('spontaneous behavioral responses')+' in a young infant.',children:[
    'Possible observations include startling, becoming still, quieting, or stopping sucking.',
    'Changes in vocalization can also suggest awareness. Turning toward sound depends on developmental readiness.',
    'The lecture uses these observations for infants rather than requiring the motor task taught to an older child.'
   ]},
   {text:'An older child can learn a '+term('conditioned response')+' to sound.',children:[
    'For example, teach the child to drop a block into a bucket when a sound occurs.',
    'The action shows detection when it reliably follows the auditory event. The block itself does not make this an identification task.'
   ]},
   {text:'Practice both '+term('sound onset')+' and '+term('sound offset')+'.',children:[
    'Onset is when the sound begins. The child may respond to a speech syllable, drum, whistle, horn, or knock.',
    'Offset is when an ongoing sound stops. Examples include stopping music or ending a sustained /ba/.',
    'Silence is meaningful. A child who responds according to a predictable rhythm may be anticipating the task rather than detecting the sound.'
   ]},
   {text:'Choose activities that keep the response tied to listening.',children:[
    'The deck suggests peek-a-boo, musical chairs, marching to a drum, and moving a toy car when the clinician says “Vrrrrm.”',
    'Adapt the activity so visible movements and predictable timing do not reveal when to respond.'
   ]},
   {text:label('Example objectives')+' specify the sound, device, and listening conditions.',children:[
    'Detect a strong or low-frequency voice 1–3 feet from the cochlear implant microphone.',
    'Attend to three loud toy or environmental sounds 4–6 feet from the FM microphone.',
    'Detect three moderate-intensity household sounds, such as a microwave beep or running bath water.',
    'These are sample objectives from slide 24. The distances and sound levels are not universal detection thresholds.'
   ]}
  ],
  [
   {text:'A '+term('conditioned response')+' is a defined action the child learns to make when a sound is heard.',children:[
    'Teach the action before using it to judge listening.',
    'For an infant, spontaneous behavior may provide the observation instead. The lecture distinguishes this from an older child’s learned motor response.'
   ]},
   {text:'Follow the course sequence for establishing the response.',ordered:true,children:[
    'Signal “listen” so the child knows the task is beginning.',
    'Pause and establish attention and eye contact.',
    'Remove '+term('visual speech cues')+' while keeping the sound clear. Covering the mouth must not muffle the voice.',
    'Vary the '+term('silent interval')+' before the sound.',
    'Present the sound.',
    'Expect the taught response. Guide the child initially when needed.'
   ]},
   {text:'Prevent '+term('anticipation')+' from looking like detection.',children:[
    'A fixed rhythm can tell the child when to act even without hearing the sound.',
    'Visible mouth movements, facial expressions, or another unintended clinician cue can also reveal the answer.',
    'Varying the pause helps keep the response linked to the '+term('auditory event')+'.'
   ]},
   {text:'Separate a '+term('task-teaching cue')+' from a cue that supplies the answer.',children:[
    'A cue before the trial can establish attention and explain what to do.',
    'During an auditory-only trial, showing when the sound occurs changes what the response can prove.',
    'Document the type and amount of cueing so later performance is compared under meaningful conditions.'
   ]}
  ],
  [
   {text:term('Discrimination')+' means perceiving similarities or differences between two or more sounds.',children:[
    'The child must distinguish the sounds. Naming them or explaining their meanings is not required.',
    'A same-or-different judgment adds a demand beyond noticing that any sound occurred.'
   ]},
   {text:term('Suprasegmental contrasts')+' concern the broader sound pattern.',children:[
    term('Duration')+' is the long-versus-short contrast.',
    term('Intensity')+' supports a loud-versus-soft contrast.',
    term('Pitch')+' supports a high-versus-low contrast.',
    'The lecture begins with these broad contrasts before moving toward finer speech-sound differences.'
   ]},
   {text:'Read the discrimination figure from the bottom upward.',ordered:true,children:[
    'Different suprasegmental patterns.',
    'Different '+term('syllable numbers')+'.',
    'Different consonant and vowel content.',
    'The same initial consonant with different vowels.',
    'Initial consonants differing in manner.',
    'Final consonants differing in manner.',
    'Final consonants differing in voicing.',
    'Initial consonants differing in voicing.',
    'Initial consonants differing in place.',
    'Final consonants differing in place.'
   ]},
   {text:'Keep the consonant features distinct.',children:[
    term('Manner')+' describes how the speech sound is produced, such as a stop versus a fricative.',
    term('Voicing')+' concerns vocal-fold vibration, such as a voiced versus a voiceless consonant.',
    term('Place')+' describes where the consonant is articulated.',
    'A pair that changes several features is different from a pair that isolates one feature.'
   ]},
   {text:label('Examples')+' should require an observable distinction.',children:[
    'Judge “car–car” as the same and “car–star” as different.',
    'Distinguish a familiar caregiver’s voice from another voice.',
    'Show different responses to happy and angry voices, or distinguish syllable counts and fast-versus-slow patterns.'
   ]},
   {text:'Check the actual task when a slide example seems ambiguous.',children:[
    'Slides 26–27 place some repetition and command activities under discrimination.',
    'Following a meaningful command can require comprehension. Specify what the child must do and what that response demonstrates instead of classifying from the slide heading alone.'
   ]}
  ],
  [
   {text:term('Identification')+' means specifying which sound or word was heard.',children:[
    'The child may repeat it, point to the matching object or picture, or write it.',
    'Raising a hand whenever any sound occurs only establishes detection unless the response also identifies which sound.'
   ]},
   {text:term('Auditory memory')+' can support a learned sound-to-label association.',children:[
    'A child may hear “blue” and select the familiar blue crayon from learned choices.',
    'This can demonstrate identification without proving a richer understanding of the message. The lecture distinguishes recognizing the label from comprehending its significance.'
   ]},
   {text:label('Examples')+' connect the heard stimulus to a specific choice.',children:[
    'Match an adult’s animal sound to the appropriate toy animal.',
    'Choose which of three instruments was heard, such as a drum, guitar, or bells.',
    'Point to a familiar named object, choose the called color in Candy Land, or select the requested card in Go Fish.'
   ]},
   {text:'Vary the speech contrast while keeping the identification demand clear.',children:[
    'Change syllable number, as in “hat” versus “ice cream cone.”',
    'Change consonant and vowel content, as in “bat” versus “fish.”',
    'The lecture also works with vowel differences and finer consonant features.'
   ]},
   {text:'The “dog/fog” example changes several consonant features.',children:[
    '/d/ is a voiced alveolar stop. /f/ is a voiceless labiodental fricative.',
    'The initial sounds therefore differ in '+term('place')+', '+term('manner')+', and '+term('voicing')+'. This is not a pure one-feature contrast.'
   ]},
   {text:'Check both '+term('response format')+' and '+term('linguistic demand')+'.',children:[
    'Pointing can be a complete identification response. Spoken repetition is not the only valid format.',
    'A novel instruction with several meaningful elements demands more than recognition of one learned label.'
   ]}
  ],
  [
   {text:term('Comprehension')+' means understanding the message and responding to its meaning.',children:[
    'Evidence can include a relevant answer, following a direction, or participating meaningfully in conversation.',
    'The response must be qualitatively different from simply echoing the stimulus. Repetition alone does not demonstrate understanding.'
   ]},
   {text:'Language knowledge supports understanding.',children:[
    term('Semantic knowledge')+' supplies word and message meaning.',
    term('Syntactic knowledge')+' supports understanding grammatical relationships.',
    'The child must use the heard information to determine an appropriate response.'
   ]},
   {text:'Increase demands through the course’s task groups.',children:[
    term('Auditory sequencing')+' includes familiar expressions, single-step directions, classroom directions, and multi-element directions.',
    term('Structured listening')+' can ask for details or the main idea of a story or lesson.',
    term('Conversation')+' can require relevant answers, paraphrasing another person’s remarks, and spontaneous relevant comments.'
   ]},
   {text:label('Example objectives')+' require the child to act on the message.',children:[
    'Understand familiar phrases through audition alone, such as “Do you want up?”',
    'Follow increasingly complex requests, such as “Bring me your socks and shoes.”',
    'Respond appropriately when possessive words change, such as “your eyes” versus “Mommy’s eyes.”',
    'Understand the significance of environmental sounds such as a smoke alarm, doorbell, or car horn.'
   ]},
   {text:'Use the lecture’s '+label('doorbell example')+' to compare all four levels.',children:[
    label('Detection:')+' notice the ring or its absence.',
    label('Discrimination:')+' judge whether the ring and a dog’s bark are the same or different.',
    label('Identification:')+' recognize the sound as a doorbell.',
    label('Comprehension:')+' understand that the ring may mean somebody is at the door.'
   ]},
   {text:'Keep the listening conditions in the objective.',children:[
    'Device access, available cues, and the response required remain part of interpreting performance.',
    'A familiar label and a novel multi-element message place different demands on the child even when both use pointing or another simple action.'
   ]}
  ]
 ];
 topic.sections.forEach(function(section,i){section.outline=outlines[i];});
 topic.sections[0].checkpoint.text='Classify the demonstrated skill and conditions. A game name or slide heading alone does not determine the hierarchy level.';
})(typeof window!=='undefined'?window:globalThis);
