/* Section 2: audiogram + Sutherland numbers (hand-authored; generators add unlimited numeric variants). */
(function (root) {
  'use strict';
  var L = root.L = root.L || {}; L.ITEMS = L.ITEMS || [];
  L.ITEMS.push(
    { id: 's2.scale1', c: 'degree-scale', t: 'mc', q: 'Which degree scale governs audiogram interpretation in this course?',
      o: [['The scale Sutherland separately adopted', 'This is the scale Dr. Sutherland directed the class to use.'], ['The earlier table shown in Lecture 1', 'That table was replaced for this course.'], ['The degree scale in any audiology text', 'She named one scale; generic scales are not interchangeable.'], ['The prior child-specific degree column', 'The later announcement superseded that column.']], a: 0,
      x: 'Adopted: 0-25 WNL | 30-40 mild | 45-55 moderate | 60-70 mod-severe | 75-90 severe | >90 profound.', s: ['ANN', 'SG30'], tier: 1 },
    { id: 's2.scale2', c: 'degree-scale', t: 'tf', q: 'True or false: On the adopted scale, a PTA of 90 dB HL is classified as profound.', a: false,
      w: ['90 is inside 75-90 (severe). Profound is GREATER than 90.', 'Correct. 90 = severe; profound begins above 90.'], x: 'Study guide p.30: "Greater 90 Profound".', s: ['SG30'], tier: 1, boundary: true },
    { id: 's2.scale3', c: 'degree-scale', t: 'tf', q: 'True or false: On the adopted scale, a child\'s threshold of 25 dB HL is within normal limits.', a: true,
      w: ['Correct: 0-25 is WNL. (The superseded child column would have called 21-40 slight-mild.)', 'The adopted scale puts 25 inside 0-25 WNL.'], x: 'Boundary value. The superseded Table 1-2 child column is the trap.', s: ['SG30', 'L1-16'], tier: 1, boundary: true },
    { id: 's2.scale4', c: 'degree-scale', t: 'mc', q: "A classmate calls a 60 dB HL PTA moderate. Using the degree scale adopted for this course, what is wrong with that classification?",
      o: [['60 is moderately severe on the adopted scale', 'The adopted scale places 60-70 dB HL in the moderately severe range.'], ['60 is moderate on both course scales', 'Not on the adopted scale.'], ['60 is severe on the adopted scale', 'Severe starts at 75.'], ['60 sits between two defined categories', 'Gaps are 26-29, 41-44, 56-59, 71-74; 60 is defined.']], a: 0, x: 'Adopted 60-70 = moderately severe.', s: ['ANN', 'SG30', 'L1-16'], tier: 1, boundary: true },
    { id: 's2.scale5', c: 'degree-scale', t: 'match', q: 'Match each threshold to its degree on the adopted scale.',
      pairs: [['40 dB HL', 'Mild'], ['45 dB HL', 'Moderate'], ['70 dB HL', 'Moderately severe'], ['75 dB HL', 'Severe'], ['95 dB HL', 'Profound']], x: 'Every one of these is a range endpoint. 40 = top of mild; 45 = bottom of moderate; 70 = top of mod-severe; 75 = bottom of severe; 95 = profound.', s: ['SG30'], tier: 1, boundary: true, pool: 'x' },
    { id: 's2.pta1', c: 'pta-degree', t: 'mc', q: "Which three frequencies are averaged to calculate the pure-tone average?",
      o: [['500, 1000, 2000 Hz', 'Slide 16.'], ['500, 1000, 2000, 4000 Hz', 'A four-frequency average is used elsewhere, not in this course.'], ['250, 500, 1000 Hz', 'Too low.'], ['1000, 2000, 4000 Hz', 'That is a high-frequency average.']], a: 0, x: 'Slide 16.', s: ['L1-16'], tier: 1 },
    { id: 's2.sym1', c: 'symbols', t: 'mc', q: 'On the audiogram form used in this lab (and the 4190 key), a red "<" plotted at 1000 Hz represents:',
      o: [['Right ear unmasked bone conduction', 'Right = red; < = unmasked BC right.'], ['Left ear unmasked bone conduction', 'Left unmasked BC is ">" in blue.'], ['Right ear air conduction', 'Right AC is O.'], ['Right ear masked bone conduction', 'Masked right BC is "[".']], a: 0, x: 'Right: O (AC), < (BC), [ (masked BC). Left: X (AC), > (BC), ] (masked BC).', s: ['SYM', 'CODEX'], tier: 3 },
    { id: 's2.sym2', c: 'symbols', t: 'tf', q: 'True or false: Bone-conduction symbols are connected with lines on the audiogram, just like air-conduction symbols.', a: false,
      w: ['BC symbols float; only AC is connected (Ethan\'s own correction in 4190).', 'Correct.'], x: 'AC connected; BC never connected.', s: ['CODEX'], tier: 3 },
    { id: 's2.type1', c: 'loss-type', t: 'mc', q: 'Right ear: AC 50 dB HL across 500-4000 Hz; BC 45-50 dB HL at the same frequencies. Type?',
      o: [['Sensorineural', 'AC and BC both impaired and overlapping (gap 0-5 dB).'], ['Conductive', 'Conductive needs normal BC.'], ['Mixed', 'Mixed needs impaired BC AND a gap; here there is no meaningful gap.'], ['Normal', 'AC is impaired.']], a: 0, x: 'No air-bone gap + impaired BC = sensorineural.', s: ['L1-18', 'G25'], tier: 1 },
    { id: 's2.type2', c: 'loss-type', t: 'mc', q: 'Left ear: AC 65 dB HL; BC 35 dB HL (500-4000 Hz). Type?',
      o: [['Mixed', 'BC impaired (35) + 30 dB gap.'], ['Conductive', 'BC is impaired, so it is not purely conductive.'], ['Sensorineural', 'There is a 30 dB gap.'], ['Cannot be classified', 'It can: impaired BC + gap = mixed.']], a: 0, x: 'The gap (30 dB) is the conductive part; BC (35) is the permanent sensorineural part (guest slide 30).', s: ['G30'], tier: 1 },
    { id: 's2.type3', c: 'loss-type', t: 'tf', q: 'True or false: A bone-conduction threshold can be poorer (higher dB) than the air-conduction threshold at the same frequency.', a: false,
      w: ['BC measures the inner ear directly; AC includes the whole pathway, so BC cannot be worse than AC.', 'Correct.'], x: 'BC is never poorer than AC (4190 types slides).', s: ['CODEX'], tier: 3, pool: 'x' },
    { id: 's2.config1', c: 'configuration', t: 'mc', q: "Two children have identical PTAs of 35 dB HL. Child A has a rising loss and child B has a sloping loss. Which comparison is accurate?",
      o: [['They may access different speech sounds', 'Different curve shapes change access to different speech sounds.'], ['They must have the same functional hearing', 'Severity does not equal functional impact.'], ['Only the rising loss needs clinical follow-up', 'Both need interpretation in context.'], ['Only the sloping loss needs clinical follow-up', 'Both need interpretation in context.']], a: 0, x: '"Degree tells you how much; configuration tells you where; interpretation tells you why it matters."', s: ['G7'], tier: 1 },
    { id: 's2.speech1', c: 'speech-audiometry', t: 'mc', q: 'The lowest level at which a patient can RECOGNIZE (understand) speech 50% of the time is the:',
      o: [['SRT', 'Recognition at threshold = speech recognition threshold.'], ['WRS', 'WRS is suprathreshold word recognition in percent, not a threshold.'], ['SDT/SAT', 'Detection, not recognition; usually about 10 dB lower than SRT.'], ['MCL', 'Most comfortable level.']], a: 0,
      x: 'This is the recovered 4190 exam item Ethan missed by choosing WRS (the Suprathreshold Mirage). Ask first: threshold or suprathreshold?', s: ['SP-7', 'CODEX'], tier: 3 },
    { id: 's2.speech2', c: 'speech-audiometry', t: 'tf', q: 'True or false: SDT and SRT are the same test.', a: false,
      w: ['SDT = detection; SRT = recognition. SDT is usually about 10 dB lower.', 'Correct.'], x: 'Recovered companion item from the 4190 debrief.', s: ['SP-12', 'CODEX'], tier: 3 },
    { id: 's2.speech3', c: 'speech-audiometry', t: 'mc', q: 'Word recognition testing should be presented at:',
      o: [['25-40 dB SL above SRT', 'Slide 16: "25-40 dB SL not dB HL".'], ['25-40 dB HL overall', 'Unit swap trap.'], ['At SRT plus 5 dB SL', 'That is too close to threshold.'], ['At the UCL for speech', 'Too loud; UCL is ~100 dB HL.']], a: 0, x: 'SL = presentation level - SRT.', s: ['SP-16'], tier: 3, pool: 'x' },
    { id: 's2.speech4', c: 'speech-audiometry', t: 'tf', q: 'True or false: In cochlear hearing loss the UCL for speech drops well below 100 dB HL, which is why the dynamic range shrinks.', a: false,
      w: ['UCL stays about 100 dB HL; it is the elevated SRT (floor) that shrinks the range.', 'Correct: the floor rises, the ceiling stays.'], x: '4190 slides 19-20.', s: ['SP-19', 'SP-20'], tier: 3 }
  );
})(typeof window !== 'undefined' ? window : globalThis);
