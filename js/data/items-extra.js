/* Second item roots so every mastery-eligible concept has at least two distinct graded questions. */
(function (root) {
  'use strict';
  var L = root.L = root.L || {}; L.ITEMS = L.ITEMS || [];
  L.ITEMS.push(
    { id: 'x.out2', c: 'outcomes-l1', t: 'tf', q: "True or false: Verification is objective and can guide adjustments to a hearing device.", a: true,
      w: ['Correct, slide 32.', 'Slide 32: verification "is objective and can be invaluable in guiding what adjustments need to be made."'], x: 'Validation is the subjective half (self-report).', s: ['L1-32'], tier: 1 },
    { id: 'x.time2', c: 'timing', t: 'mc', q: 'Perinatal means:',
      o: [['Of or pertaining to the time around birth', 'Slide 5.'], ['Before birth', 'That is prenatal.'], ['After birth', 'That is postnatal.'], ['Before conception', 'Not a slide term.']], a: 0, x: 'Slide 5.', s: ['L2-5'], tier: 1, pool: 'x' },
    { id: 'x.epi2', c: 'epidemiology', t: 'mc', q: "About what share of children with hearing loss are born weighing less than 2,500 g?",
      o: [['About 1 in 4', 'Slide 7.'], ['About 1 in 20', 'Too low.'], ['About 3 in 4', 'Too high.'], ['About 60%', 'That is the hereditary share.']], a: 0, x: 'Slide 7: premature/low birth weight.', s: ['L2-7'], tier: 1 },
    { id: 'x.hiv2', c: 'hiv', t: 'mc', q: "About what is the risk of HIV transmission from an infected mother to the fetus?",
      o: [['10-40%', 'Slide 30.'], ['51%', 'Rubella, 1st trimester.'], ['90%', 'Toxoplasmosis asymptomatic share.'], ['60%', 'Syphilis asymptomatic at birth.']], a: 0, x: 'Early treatment of the pregnant woman helps (slide 30).', s: ['L2-30'], tier: 1 },
    { id: 'x.hsv2', c: 'hsv', t: 'tf', q: "True or false: The herpes simplex virus that can affect a newborn is the same virus that causes shingles.", a: false,
      w: ['9/01: HSV (genital herpes) is not the herpes zoster virus that causes shingles.', 'Correct.'], x: '9/01 transcript; HSV is passed with active infection during birth; CNS involvement; SNHL of varying degrees.', s: ['T0901', 'L2-31'], tier: 1, pool: 'x' },
    { id: 'x.hem2', c: 'hemorrhage', t: 'tf', q: 'True or false: Intracranial hemorrhage is graded I to IV, with grade IV the most severe.', a: true,
      w: ['Correct, slide 35 + notes.', 'Slide 35: graded I-IV; notes: IV is the most severe.'], x: 'Most common disorder of prematurity; hydrocephalus is a complication.', s: ['L2-35'], tier: 1 },
    { id: 'x.men2', c: 'meningitis', t: 'ms', q: "Which complications can follow bacterial meningitis? Select all that apply.",
      o: [['Hearing loss', '9/01.'], ['Vision loss', '9/01.'], ['Brain damage and developmental delays', '9/01.'], ['Syndactyly', 'Apert.']], a: [0, 1, 2], x: 'Bacterial is far more dangerous than viral (9/01).', s: ['T0901', 'L2-37'], tier: 1 },
    { id: 'x.jbs2', c: 'jbs', t: 'mc', q: 'Which non-auditory finding did Ethan\'s notes add for Johanson-Blizzard syndrome?',
      o: [['Pancreatic insufficiency', 'Notes on slide 61.'], ['Thyroid goiter', 'Pendred.'], ['Retinitis pigmentosa', 'Usher.'], ['Kidney malformation', 'BOR.']], a: 0, x: 'Also nasal-rim hypoplasia (beak-like), short stature, maxillary hypoplasia; severe or profound SNHL.', s: ['L2-61'], tier: 1 },
    { id: 'x.same2', c: 'same-pta', t: 'tf', q: "True or false: Two children with the same PTA may have very different communication abilities and intervention needs.", a: true,
      w: ['Correct (slides 5 and 7).', 'Slides 5 and 7 say exactly this.'], x: '"Severity does not equal functional impact."', s: ['G5', 'G7'], tier: 1, pool: 'x' },
    { id: 'x.sel2', c: 'fitting-selection', t: 'ms', q: "Which hearing-aid technology features may matter during selection? Select all that apply.",
      o: [['Advanced sound processing', 'Slide 19.'], ['Wireless connectivity', 'Slide 19.'], ['Adaptive directionality', 'Slide 19.'], ['Feedback reduction', 'Slide 19.'], ['Earmold color', 'Not on the slide.']], a: [0, 1, 2, 3], x: 'Slide 19 also lists gain requirements and finances.', s: ['L3-19'], tier: 1 },
    { id: 'x.val2', c: 'peds-validation', t: 'mc', q: "Who provides much of the information used to validate pediatric amplification, often through questionnaires?",
      o: [['Parents and caregivers (questionnaires such as IT-MAIS, PEACH, ELF)', 'Slide 51.'], ['Real-ear probe microphone measures', 'That is verification.'], ['ANSI test-box measures', 'Quality control.'], ['The prescriptive formula', 'Fitting targets.']], a: 0, x: 'Slide 51.', s: ['L3-51'], tier: 1 },
    { id: 'x.dist2', c: 'distance', t: 'tf', q: 'True or false: Moving a student farther from the teacher lowers the level of the teacher\'s voice reaching the student.', a: true,
      w: ['Correct: about 60 dB SPL at 6 ft, dropping with distance (slide 65).', 'Slide 65: the level drops as distance increases.'], x: 'Remote microphones remove the distance problem (slide 68).', s: ['L3-65', 'L3-68'], tier: 1 }
  );
})(typeof window !== 'undefined' ? window : globalThis);
