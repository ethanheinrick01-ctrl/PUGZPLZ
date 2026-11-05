/* Exam 2 calibration (2026-11-05). Clinical difficulty is kept; only authoring-voice caveats
   ("alone", "necessarily", "by itself", "universal") and authoring notes are removed. Every revised
   item is archived in L.ITEM_REVISIONS, so saved answers keep grading against the version shown. */
(function(root){
'use strict';
var L=root.L,D=L.EXAM2_DATA,VER='20261105-calibrated-1';
// q: stem, x: explanation, o: {index: new option text} (stored order), tf: new true/false key
var P={
"e2.ci-team-decision.2":{o:{0:"Determine candidacy from language progress"},x:"The SLP documents concerns and refers. The CI team evaluates candidacy."},
"e2.ci-age-groups.3":{o:{0:"Unaided pure-tone detection",2:"Unaided word recognition"},x:"Adult candidacy considers aided speech recognition plus motivation, medical suitability and realistic expectations."},
"e2.brain-synchrony.2":{o:{1:"Louder input guarantees clear speech",3:"Aided detection guarantees language access"},x:"The phrase links input quality to learning: a poor signal in produces poor speech out."},
"e2.listening-quality.1":{o:{1:"The unaided threshold category",2:"Age at the current mapping appointment"}},
"e2.ling-sounds.2":{q:"In the course’s Ling 10 framework, which sound falls only in the high-frequency band (3,000 Hz and above)?"},
"e2.ling-change.1":{o:{0:"Adjust the map based on the missed sounds",3:"Record a permanent threshold shift"},x:"A change may reflect technology, hearing, middle-ear or task factors. Document it and involve the audiologist."},
"e2.development-scales.2":{q:"Developmental milestone charts describe average ages with considerable variation and serve as a guide for individualized planning.",tf:true},
"e2.ling-change.3":{x:"Newly missed sounds call for checking access, the device and the ear. Contact audiology if the change persists."},
"e2.at-comprehension.2":{q:"At the comprehension level, the child must show understanding of meaning, not just repeat what was heard.",tf:true},
"e2.at-identification.3":{o:{1:"Detection"},x:"Choosing the matching picture shows the child identified the sound."},
"e2.mastery.ci-access.03":{o:{2:"Benefit varies across recipients of the same device"}},
"e2.mastery.ci-referral.01":{o:{0:"Select an implant based on the behavior"},x:"Stopped babbling is a listed referral concern. Refer to evaluate hearing access and development."},
"e2.mastery.ci-referral.03":{o:{2:"Judge communication benefit from aided detection"},x:"The lecture lists increased reliance on visual cues in quiet as a referral concern."},
"e2.mastery.ci-counseling.05":{o:{0:"Annual mapping and device maintenance"}},
"e2.mastery.ci-outcomes.03":{q:"Besides age at implantation, which factors affect a child’s cochlear-implant outcome?",o:{0:"Auditory history, anatomy and rehabilitation",1:"None; age at implantation determines the outcome",2:"Only the implant brand and model"},x:"The lecture favors earlier implantation and lists several other outcome factors, including auditory history, anatomy and rehabilitation."},
"e2.mastery.brain-plasticity.05":{o:{0:"Set auditory expectations from chronological age"},x:"The early period has the greatest plasticity. A later start means missed experience, but learning can still occur; plan support around the delayed access."},
"e2.mastery.listening-quality.02":{o:{2:"Estimate speech access from the fitting date",3:"Choose the next language goal from logged hours"}},
"e2.mastery.listening-quality.05":{q:"Which comparison shows the effect of signal quality on listening development?",x:"Same hours, clear versus distorted input: only the signal quality differs."},
"e2.mastery.listening-daily.06":{o:{1:"Initial fitting and a listening-hour target"}},
"e2.mastery.speech-access.03":{q:"Why can a listener hear vowels clearly but still misunderstand words?",o:{0:"Vowels carry the consonant distinctions",1:"Weak consonant detail may be inaudible",2:"Overall voice loudness makes every phoneme audible"}},
"e2.mastery.speech-range.03":{o:{0:"The same pressure as in its most sensitive region"}},
"e2.mastery.speech-range.04":{q:"How does the sound pressure needed for detection change across frequency on the minimum-audibility curve?"},
"e2.mastery.speech-energy.03":{q:"What happens to available speech intensity as the talker moves farther away?",o:{2:"It increases."}},
"e2.mastery.speech-time.02":{q:"Why does a phoneme’s duration vary in connected speech?"},
"e2.mastery.ling-sounds.01":{q:"In the course’s Ling 10 framework, which sound falls only in the middle-high band (1,500–3,000 Hz)?"},
"e2.mastery.ling-sounds.05":{o:{0:"/h/: low band only",1:"/s/: high band only",2:"/z/: middle-low band only"}},
"e2.mastery.ling-sounds.06":{o:{2:"Band 3 only",3:"Band 4 only"},x:"AB page 2 lists /sh/ in Bands 3 and 4."},
"e2.mastery.ling-procedure.01":{q:"Which response shows identification rather than detection?"},
"e2.mastery.ling-change.04":{q:"A child misses one Ling sound today. Why can’t that be called a permanent hearing change yet?",x:"The handout lists several possible causes: the device, the ear, hearing status or test conditions."},
"e2.mastery.context-noise.04":{o:{0:"Their high-frequency access is determined by age"}},
"e2.mastery.listening-hierarchy.03":{o:{2:"Detection"}},
"e2.mastery.development-intelligibility.04":{q:"The course gives typical speech intelligibility of 25% at 18 months and 80% at 3 years. Whose understanding of the child do these percentages describe?",o:{0:"Parents",1:"Unfamiliar listeners",2:"Teachers",3:"The child’s own comprehension"},x:"The table describes how much of the child’s speech parents understand, not unfamiliar listeners."},
"e2.mastery.at-purpose.05":{o:{1:"To set every goal from chronological age"}},
"e2.mastery.at-infant.04":{q:"An infant cannot yet do the pointing response a test requires. How should the score be interpreted?",o:{0:"The response format limits what this score shows",1:"No pointing means no sound detection",2:"Score it as zero auditory recognition",3:"The failure shows inadequate hearing-aid output"}},
"e2.mastery.at-fapi.04":{o:{2:"Linguistic sequencing"}},
"e2.mastery.at-wipi.04":{q:"WIPI is a closed-set picture test. Which result does a correct WIPI response NOT show?",o:{0:"Open-set word recognition"},x:"WIPI offers picture choices, so it measures closed-set recognition, not open-set recognition."},
"e2.mastery.at-progression.03":{o:{1:"The sentence stimulus, which always requires comprehension",2:"The length of the spoken sentence stimulus"}},
"e2.mastery.at-comprehension.03":{o:{1:"Phoneme detection and voice awareness",2:"Recognition of isolated vowel contrasts"}},
"e2.mastery.at-analytic.02":{o:{3:"The two response sets test different acoustic features"}},
"e2.mastery.at-analytic.06":{q:"Analytic training and Erber’s identification level describe the same aspect of a task."},
"e2.mastery.at-synthetic.02":{o:{3:"Sort isolated vowels by formant contrast."}},
"e2.mastery.at-eclectic.02":{o:{0:"Advancing one level every session",3:"Success in conversation as proof of component mastery"}},
"e2.visual-signals.1":{o:{0:"Visual speech cues only",2:"Auditory speech cues only"},x:"Speechreading combines the auditory signal with visible speech and facial/body cues. Lipreading is visual only."},
"e2.visual-conditions.4":{o:{2:"It has low word frequency"}},
"e2.visual-training.6":{q:"A patient can report improvement in speechreading even when objective test scores do not change.",tf:true,x:"The deck allows perceived improvement without measurable objective change. Report both kinds of evidence."},
"e2.final.20261029.B.CI08":{o:{2:"One cochlear implant"}},
"e2.final.20261029.A.SA09":{q:"Vowels carry more acoustic power, but consonants carry much of the information for distinguishing words.",tf:true},
"e2.final.20261029.coverage.parents-intelligibility":{q:"A 3-year-old’s parents understand about 80% of the child’s speech. What does the course’s 80% figure at age 3 describe?",o:{0:"How well parents understand the child",1:"How well unfamiliar listeners understand the child",2:"The size of the child’s vocabulary",3:"How much speech the child understands"},x:"The 80% age-3 estimate is labeled understanding by parents. Intelligibility is not a vocabulary count."},
"e2.final.20261029.coverage.ling-change":{q:"A child repeatedly misses a Ling sound that was detected reliably last week. Which conclusion is appropriate?",x:"A changed response flags a possible change in access. Check device function, hearing status, middle-ear status and test conditions."},
"e2.final.20261102.C.VS03":{q:"Seeing the lips close lets a lipreader reliably tell /p/ from /b/.",x:"Lip closure is visible for both /p/ and /b/, but voicing is not. They belong to the same viseme group."},
"e2.mock.20261102.A.NF14":{q:"Which response appears in both the 0–3-month and 4–6-month bands?",x:"Head turning appears in early sound responses and in later localization. Emerging sound meaning or response to vocal inflection separates the bands."},
"e2.mock.20261102.A.AT04":{q:"When checking access through the right hearing device only, the left device should stay on."},
"e2.mock.20261102.C.NF01":{o:{0:"The passage of time"},x:"Neuroplasticity responds to stimulation. Repeated access to meaningful sound supplies it."},
"e2.mock.20261102.C.SA11":{o:{1:"The fundamental frequency"},x:"The broad energy maximum reflects vocal-tract resonances. It is not the average male fundamental frequency or a threshold curve."},
"e2.mock.20261102.C.VS05":{q:"Even limited residual hearing can add useful information during speechreading.",tf:true,x:"Limited residual hearing adds useful information when combined with visual speech cues."}
};
function copy(o){return JSON.parse(JSON.stringify(o));}
function apply(item,p){
 var n=copy(item);
 if(p.q)n.q=p.q;if(p.x)n.x=p.x;
 if(p.o)Object.keys(p.o).forEach(function(i){var o=n.o&&n.o[i];if(!o)throw Error('Calibration: no option '+i+' on '+item.id);if(Array.isArray(o))o[0]=p.o[i];else o.t=p.o[i];});
 if('tf' in p){if(Array.isArray(n.o)&&n.o.length&&!Array.isArray(n.o[0]))n.o.forEach(function(o){o.ok=(o.t==='True')===p.tf;});else n.a=p.tf;}
 n.contentVersion=VER;return n;
}
L.ITEM_REVISIONS=L.ITEM_REVISIONS||{};
var revised={};
function revise(item){
 if(!item||!P[item.id])return item;if(revised[item.id])return revised[item.id];
 var rev=L.ITEM_REVISIONS[item.id];
 if(!rev)rev=L.ITEM_REVISIONS[item.id]={current:VER,versions:{legacy:copy(item)}};
 else{if(!rev.versions[rev.current])rev.versions[rev.current]=copy(item);rev.current=VER;}
 return revised[item.id]=apply(item,P[item.id]);
}
D.items=D.items.map(revise);
L.ITEMS=L.ITEMS.map(revise);
if(D.finalMocks&&D.finalMocks.items)D.finalMocks.items=D.finalMocks.items.map(revise);
L.EXAM2_CALIBRATION={version:VER,ids:Object.keys(P)};
})(typeof window!=='undefined'?window:globalThis);
