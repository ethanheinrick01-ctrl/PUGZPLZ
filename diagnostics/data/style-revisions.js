/* Source-bound Gonsoulin wording revisions. Historical definitions and answered snapshots remain intact. */
(function(){
  'use strict';
  const T=window.DX_EXAM1,D=window.DX_DATA,revision='exam1-gonsoulin-20261002';
  const changes={
  "m6-ca-06": {
    "stem": "Use a 30-day borrow. Birth date: February 28, 2015. Test date: January 26, 2022. What is the chronological age?",
    "options": [
      "6 years, 10 months, 28 days",
      "6 years, 10 months, 29 days",
      "6 years, 11 months, 28 days",
      "7 years, 10 months, 28 days"
    ],
    "why": [
      "Borrow 30 days and one year: 56−28=28 days, 12−2=10 months, and 2021−2015=6 years.",
      "This uses a 31-day calendar borrow instead of the stated 30-day convention.",
      "Borrowing days first reduces the month by one.",
      "Borrowing months reduces the test year by one."
    ],
    "explain": "Borrow 30 days and one year: 56−28=28 days, 12−2=10 months, and 2021−2015=6 years.",
    "hint": "Borrow days first, then months as needed."
  },
  "m11-s-04": {
    "stem": "A caregiver says, “His speech is hard to understand.” Which follow-up gathers a concrete example without suggesting the answer?",
    "options": [
      "Can you give me an example?",
      "Is it mainly when he talks quickly?",
      "Would you say strangers never understand him?",
      "Do you think he will outgrow it?"
    ],
    "why": [
      "A neutral request invites the caregiver to describe an actual event.",
      "This suggests rate as the explanation before gathering an example.",
      "This supplies an absolute conclusion rather than inviting an example.",
      "This asks for a prediction rather than clarifying the reported concern."
    ],
    "explain": "A neutral request invites the caregiver to describe an actual event."
  },
  "m13-rest-01": {
    "stem": "Why observe oral rest posture BEFORE giving instructions?",
    "options": [
      "To see the habitual position before cueing changes it",
      "To measure the maximum range before movement tasks",
      "To judge tongue strength before resistance tasks",
      "To determine nasal escape before pressure sounds"
    ],
    "why": [
      "Instructions can change the natural resting position being assessed.",
      "Maximum range requires movement rather than a resting observation.",
      "Strength requires an appropriate resistance task.",
      "Nasal escape is examined with tasks requiring oral pressure."
    ],
    "explain": "Instructions can change the natural resting position being assessed."
  },
  "m10-sh-02": {
    "stem": "Which feature distinguishes an EHR from an EMR on the course slide?",
    "options": [
      "Sharing records across health care organizations",
      "Replacing a paper chart with a digital chart",
      "Documenting results from a diagnostic evaluation",
      "Recording a client’s medical history electronically"
    ],
    "why": [
      "The slide distinguishes EHRs by sharing across organizations.",
      "Being digital also describes an EMR.",
      "Evaluation documentation is not the distinguishing feature.",
      "An electronic medical history can also be part of an EMR."
    ],
    "explain": "The slide distinguishes EHRs by sharing across organizations."
  },
  "m12-f-05": {
    "stem": "A client has persistent mouth breathing and hyponasal speech. Which next step best addresses possible airway obstruction?",
    "options": [
      "Referral to an otolaryngologist",
      "Articulation treatment for oral placement",
      "Resonance exercises before medical referral",
      "Speech-rate practice before medical referral"
    ],
    "why": [
      "Persistent mouth breathing with hyponasality warrants medical assessment of a possible obstruction.",
      "Placement treatment does not evaluate the suspected airway obstruction.",
      "Evaluate the possible obstruction before selecting resonance treatment.",
      "Rate practice does not evaluate the suspected airway obstruction."
    ],
    "explain": "Persistent mouth breathing with hyponasality warrants medical assessment of a possible obstruction."
  },
  "m13-air-02": {
    "stem": "Which task checks nasal air ESCAPE rather than nasal airflow at rest?",
    "options": [
      "Produce pressure sounds while the clinician listens for nasal turbulence",
      "Breathe quietly with a mirror under the nostrils to compare fogging",
      "Sustain /ɑ/ while the clinician observes velar movement",
      "Pucker and smile while the clinician compares lip symmetry"
    ],
    "why": [
      "Pressure sounds require oral pressure; listen for nasal air escape.",
      "Mirror fogging during quiet breathing checks nasal airflow and symmetry.",
      "Sustained /ɑ/ is used to observe velar movement; it is not the stated pressure-sound escape task.",
      "Pucker and smile examine lip movement and symmetry."
    ],
    "explain": "Pressure sounds require oral pressure; listen for nasal air escape."
  },
  "e1-add-048": {
    "stem": "An interviewer asks, “He never talks to other children, does he?” Which replacement best opens the discussion?",
    "options": [
      "Tell me about his communication with other children.",
      "He usually avoids conversations with peers, correct?",
      "Does he talk only when another child starts?",
      "Would you say he prefers being alone?"
    ],
    "why": [
      "An open, neutral request invites examples without assigning a pattern.",
      "This still suggests avoidance as the answer.",
      "This narrows the response to a suggested pattern of initiation.",
      "This suggests a preference before obtaining examples."
    ],
    "explain": "An open, neutral request invites examples without assigning a pattern."
  },
  "e1-add-049": {
    "stem": "During tongue lateralization, a client turns the head to follow the tongue. Which movement concept most directly needs examination?",
    "options": [
      "Dissociation",
      "Stability",
      "Mobility",
      "Grading"
    ],
    "why": [
      "Dissociation concerns moving one structure independently of another.",
      "Stability concerns maintaining a controlled, supported position.",
      "Mobility concerns moving efficiently through a range.",
      "Grading concerns control of speed, force and range."
    ],
    "explain": "Dissociation concerns moving one structure independently of another."
  }
};
  const replacements={};
  T.items=T.items.map(old=>{
    const change=changes[old.id];if(!change)return old;
    const q={...JSON.parse(JSON.stringify(old)),...change,id:'e1-style-'+old.id,rootId:old.rootId||old.id,version:revision};
    replacements[old.id]=q.id;
    const legacy=JSON.parse(JSON.stringify(q));
    legacy.options=legacy.options.map((t,i)=>({t,why:legacy.why[i]}));
    D.items.push(legacy);
    return q;
  });
  // Future fixed forms use the reviewed wording; saved forms retain their item snapshots and point values.
  for(const f of window.DX_COURSE_FORMS||[]){
    f.items=f.items.map(entry=>typeof entry==='string'?(replacements[entry]||entry):({...entry,id:replacements[entry.id]||entry.id}));
  }
  T.styleReview={revision,reviewed:382,revised:Object.keys(changes).length,authority:'Gonsoulin Professor DNA and historical Language Disorders exams; current Diagnostics evidence controls facts'};
  window.DX_DATA_REV+='+'+revision;
})();
