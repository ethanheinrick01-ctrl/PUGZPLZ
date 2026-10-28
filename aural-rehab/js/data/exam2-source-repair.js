/* Self-contained Exam 2 prompts; preserve every previously served question version. */
(function(root){
'use strict';
var L=root.L,D=L.EXAM2_DATA,version="20261028-source-repair-1";
var patches={
  "e2.ci-age-groups.1": {
    "q": "According to the course’s cochlear-implant candidacy criteria for children 9–24 months, which hearing-loss description applies?"
  },
  "e2.ci-age-groups.2": {
    "q": "The course’s CI criterion for children 2–18 years is ≤30% correct on best-aided open-set words. Which score meets that boundary?"
  },
  "e2.ci-age-groups.3": {
    "q": "For adult cochlear-implant candidacy, which measure must be considered in addition to the audiogram?"
  },
  "e2.ci-activation.2": {
    "q": "According to Sutherland’s cochlear-implant lecture, initial activation usually occurs how long after surgery?"
  },
  "e2.brain-cross-modal.2": {
    "q": "Where is the primary auditory cortex located?"
  },
  "e2.listening-quality.2": {
    "q": "Which pair describes influences on the child’s everyday listening experience, rather than implant anatomy or device design?"
  },
  "e2.ling-sounds.2": {
    "q": "In the course’s Ling 10 framework, which sound checks the high-frequency band (3,000 Hz and above) alone?"
  },
  "e2.at-wipi.1": {
    "q": "Which list structure describes the Word Intelligibility by Picture Identification (WIPI) test?"
  },
  "e2.at-design.1": {
    "q": "Which set names the four principles used to design an auditory-training activity?"
  },
  "e2.mastery.ci-history.01": {
    "q": "In the course’s CI history timeline, who performed the electrical ear experiments dated 1790?"
  },
  "e2.mastery.ci-history.04": {
    "q": "Which cochlear-implant development does the course attribute to Advanced Bionics?"
  },
  "e2.mastery.ci-age-groups.02": {
    "q": "For children 2–18 years, the course’s CI criterion is ≤30% on best-aided open-set words. Which result meets both the task requirements and the score boundary?"
  },
  "e2.mastery.ci-age-groups.04": {
    "q": "Which test setup matches the course’s cochlear-implant word-recognition criterion for children 2–18 years?"
  },
  "e2.mastery.ci-age-groups.05": {
    "q": "Which audiogram description matches the adult cochlear-implant candidacy criteria taught in this course?"
  },
  "e2.mastery.ci-age-groups.06": {
    "q": "Which requirement is shared by the course’s cochlear-implant criteria for children 9–24 months and children 2–18 years?"
  },
  "e2.mastery.ci-referral.01": {
    "q": "An infant has stopped babbling and experimenting with sound. Which response is appropriate?"
  },
  "e2.mastery.ci-open-closed.03": {
    "q": "With no supplied response choices, chance performance on open-set word recognition is approximately what in the course’s teaching model?"
  },
  "e2.mastery.ci-functional.01": {
    "q": "Which parent-report measure is described in the course as containing 35 questions?"
  },
  "e2.mastery.ci-functional.02": {
    "q": "Which age range does the course assign to the Meaningful Auditory Integration Scale (MAIS)?"
  },
  "e2.mastery.ci-outcomes.02": {
    "q": "Which pair consists of anatomical factors that can affect cochlear-implant outcomes?"
  },
  "e2.mastery.brain-plasticity.04": {
    "q": "In auditory neuroplasticity, what does “use it or lose it” emphasize?"
  },
  "e2.mastery.brain-cross-modal.02": {
    "q": "Which condition can lead auditory cortex to be recruited for visual and tactile processing in the course’s account of cross-modal reorganization?"
  },
  "e2.mastery.speech-energy.02": {
    "q": "Despite their relatively low acoustic energy, consonants make which important contribution to speech?"
  },
  "e2.mastery.speech-energy.04": {
    "q": "Which statement matches the course’s approximate division of speech energy between vowels and consonants?"
  },
  "e2.mastery.speech-energy.05": {
    "q": "A speech level is reported as 45 dB HL. Why can it not simply be relabeled 45 dB SPL?"
  },
  "e2.mastery.speech-frequency.01": {
    "q": "According to the course’s speech-acoustics model, most speech energy is below approximately which frequency?"
  },
  "e2.mastery.ling-sounds.01": {
    "q": "In the course’s Ling 10 framework, which sound checks the middle-high band (1,500–3,000 Hz) alone?"
  },
  "e2.mastery.ling-sounds.02": {
    "q": "In the course’s Ling 10 framework, what frequency range defines Band 3, the middle-high consonant-detail band?"
  },
  "e2.mastery.ling-sounds.05": {
    "q": "In the course’s Ling 10 frequency-band framework, which sound-to-band pairing is correct?"
  },
  "e2.mastery.development-intelligibility.04": {
    "q": "The course gives typical speech-intelligibility estimates of 25% at 18 months and 80% at 3 years. Which source qualification prevents treating them as unfamiliar-listener norms?"
  },
  "e2.mastery.at-purpose.06": {
    "q": "The course recommends beginning early intervention as soon as permanent hearing loss is confirmed."
  },
  "e2.mastery.at-infant.05": {
    "q": "Which type of assessment is heavily relied on for infants and very young children who cannot complete formal word-recognition tasks?"
  },
  "e2.mastery.at-esp.04": {
    "q": "How many performance categories are used for placement in the course’s Early Speech Perception (ESP) framework?"
  },
  "e2.mastery.at-dasl.03": {
    "q": "What minimum age does the course give for the Developmental Approach to Successful Listening II (DASL II) assessment?"
  },
  "e2.mastery.at-dasl.06": {
    "q": "The course describes DASL II as providing some normative information for children with varying degrees of hearing loss."
  },
  "e2.mastery.at-ling-task.04": {
    "q": "Which progression does the course recommend for increasing the clinician’s distance during the Ling 10 check?"
  },
  "e2.mastery.at-program-structure.05": {
    "q": "Which main user group does the course identify for the DASL II training program?"
  },
  "e2.mastery.at-program-fit.01": {
    "q": "In the SKI-HI program described in the course, auditory stimulation is used alongside what?"
  },
  "e2.mastery.at-program-fit.05": {
    "q": "What common starting point does the course identify for selecting an auditory-training program?"
  },
  "e2.visual-signals.1": {
    "q": "Using the course’s distinction between lipreading and speechreading, which input condition defines speechreading?"
  },
  "e2.visual-signals.2": {
    "q": "A task removes sound but retains visible speech, facial expressions, and gestures. In the course’s terminology, which term applies?"
  },
  "e2.visual-signals.3": {
    "q": "According to the course’s account of lipreading predictors, which hearing-history distinction has predictive value?",
    "x": "The course lists congenital versus acquired hearing loss as a predictor of lipreading ability. It distinguishes this onset-history variable from duration of acquired loss and age when loss began, which it lists as nonpredictive. These are the course’s stated group-level distinctions, not a guarantee of an individual’s ability."
  },
  "e2.visual-signals.4": {
    "q": "An adult with typical hearing watches the talker’s face while listening. Which interpretation fits this behavior?"
  },
  "e2.visual-signals.5": {
    "q": "Which cortical area does the course identify as active when a person recognizes speech from visual cues?"
  },
  "e2.visual-conditions.3": {
    "q": "Which viewing position and distance does the course recommend to support speechreading?"
  },
  "e2.visual-conditions.6": {
    "q": "When discussing how word familiarity affects speechreading, what does “high-frequency word” mean?"
  },
  "e2.visual-conditions.8": {
    "q": "Which set gives the four broad domains that affect speechreading performance in the course’s framework?"
  },
  "e2.visual-english.6": {
    "q": "Which description distinguishes Signed English from American Sign Language (ASL)?",
    "s": [
      "ARL7-27",
      "ARL7-28"
    ]
  },
  "e2.visual-asl-cue.2": {
    "q": "Which set gives the four physical sign characteristics listed in the course’s ASL framework?"
  },
  "e2.visual-ambiguity.8": {
    "q": "When teaching the limits of lipreading, the course gives an estimate of about 30%. What does that percentage represent?",
    "o": [
      [
        "Improvement in speechreading scores after training",
        ""
      ],
      [
        "Words correctly identified by a typical lipreader",
        ""
      ],
      [
        "Speech information supplied by voicing contrasts",
        ""
      ],
      [
        "Speech that is visually accessible under ideal conditions",
        ""
      ]
    ],
    "a": 3,
    "x": "The course estimates that about 30% of speech is visible under ideal viewing conditions. This is a teaching estimate of visible speech, not an individual’s word-recognition score, a training gain, or the contribution of voicing. Lipreading requires context because much of the speech signal is not visually distinguishable."
  },
  "e2.visual-ambiguity.3": {
    "q": "The same speaker produces a consonant before two different vowels. The following vowel influences the consonant’s articulation, changing the visible lip and jaw movements. Which phenomenon explains this?",
    "o": [
      [
        "Coarticulation",
        ""
      ],
      [
        "Talker differences",
        ""
      ],
      [
        "Stress placement",
        ""
      ]
    ],
    "a": 0,
    "x": "Coarticulation is the influence of neighboring speech sounds on articulation. Here the upcoming vowel influences how the consonant is produced; that change can affect the movements a lipreader sees. The phonetic mechanism is coarticulation, and the visible change is one consequence. The speaker stays the same, and no change in emphasis is described."
  },
  "e2.visual-ambiguity.4": {
    "q": "A speaker says “What did you do yesterday?” and then repeats it with emphasis on “YOU,” changing the accompanying articulatory movements. Which variable changed?",
    "x": "Emphasizing YOU changes stress. Stress can affect the articulatory movements visible during speechreading. The words, talker’s viewing angle, and hearing-loss history have not changed."
  },
  "e2.mastery.speech-range.01": {
    "q": "What quantity is plotted on the vertical axis of the auditory response-area graph shown below?",
    "figure": "speech-range",
    "media": {
      "kind": "img",
      "src": "assets/exam2/figures/speech-range.jpg",
      "alt": "Auditory response-area graph for interpretation"
    }
  },
  "e2.speech-access.3": {
    "q": "A child notices a parent speaking but confuses the words. What does reacting to the voice establish most directly?"
  },
  "e2.at-ling-task.3": {
    "q": "During a Ling sound check, the clinician always presents the sounds in the same fixed sequence. What change would reduce the child’s ability to predict the next trial?"
  },
  "e2.at-design.3": {
    "q": "A child can repeat “put the cup beside the plate” but has not demonstrated carrying it out. What should a new objective specify to distinguish repetition from comprehension?"
  },
  "e2.listening-age.3": {
    "q": "A child is 18 months old and began consistent useful hearing-technology use at 9 months. What is the estimated listening age?"
  },
  "e2.development-scales.3": {
    "q": "An 18-month-old child has had 9 months of consistent useful auditory access. How should the team use an auditory-development scale?"
  },
  "e2.ci-age-groups.4": {
    "q": "A 14-month-old with bilateral profound SNHL has limited auditory progress despite appropriate hearing aids. Which course age-group criteria apply to a CI evaluation?"
  }
};
L.ITEM_REVISIONS=L.ITEM_REVISIONS||{};
function copy(x){return JSON.parse(JSON.stringify(x));}
D.items=D.items.map(function(item){
 var patch=patches[item.id];if(!patch)return item;
 var revision=L.ITEM_REVISIONS[item.id];
 if(!revision)revision=L.ITEM_REVISIONS[item.id]={current:version,versions:{legacy:copy(item)}};
 // Archive the actual immediately previous version as well as unversioned history.
 var previous=item.contentVersion||'legacy';
 if(!revision.versions[previous])revision.versions[previous]=copy(item);
 revision.current=version;
 return Object.assign({},item,patch,{contentVersion:version});
});
var byId={};D.items.forEach(function(item){byId[item.id]=item;});
L.ITEMS=L.ITEMS.map(function(item){return byId[item.id]||item;});
D.version=version;
})(typeof window!=='undefined'?window:globalThis);
