/* Source registry. Citations in items use CODE or CODE-slide (e.g. L2-34, G13, TB2-58). */
(function (root) {
  'use strict';
  var L = root.L = root.L || {};
  L.SOURCES = {
    L1: { t: 'Lecture 1: Overview of Audiologic Rehabilitation (student copy)', f: 'packet/src-06-Lecture 1 Student copy, Overview of Audiologic Rehab.pptx', tier: 1, slide: true },
    L2: { t: 'Lecture 2: Etiology of Pediatric Hearing Loss (Ethan\'s filled student copy, 77 slides; slide numbers use this copy)', f: 'packet/src-10-LECTURES 2 Causes of HL-student copy (2).pptx', tier: 1, slide: true },
    L2C: { t: 'Lecture 2 "Completed" deck (76 slides; provenance not documented; used only to flag differences)', f: 'packet/src-09-LECTURE 2 Causes of HL Completed.pptx', tier: 1, slide: true },
    L3: { t: 'Lecture 3: Hearing Aids and HAT (student copy; notes and some blanks were filled from the textbook by a prior model, 12 blanks unresolved)', f: 'packet/src-23-Lecture 3 Hearing Aids - Textbook Filled (12 unresolved).pptx', tier: 1, slide: true },
    G: { t: 'Guest lecture: Beyond the Basics, Interpretation of Pediatric Audiology Test Results (Fallon Lee, AuD, Fall 2026)', f: 'packet/src-03-Peds AR Guest Lec 2026.pptx', tier: 1, slide: true },
    T0901: { t: 'Class transcript 9/01/2026 (etiology: prenatal infections through syndromes)', f: 'packet/src-26-09:01:2026.rtf', tier: 1 },
    T0908: { t: 'Class transcript 9/08/2026 (Pierre Robin through Pendred; guest announcement)', f: 'packet/src-27-09:08:2026 .rtf', tier: 1 },
    T0910: { t: 'Class transcript 9/10/2026 (hearing aids, count-the-dots activity)', f: 'packet/src-28-09:10:2026.rtf', tier: 1 },
    T0915: { t: 'Class transcript 9/15/2026 (guest lecture part 1)', f: 'packet/src-29-09:15:2026.rtf', tier: 1 },
    TB1: { t: 'Textbook Ch. 1, Introduction to Audiologic Rehabilitation, 8th ed.', f: 'packet/src-31-...8th-edition.pdf', tier: 1, page: true },
    TB2: { t: 'Textbook Ch. 2, Hearing Aids and Hearing Assistive Technologies, 8th ed.', f: 'packet/src-31-...8th-edition.pdf', tier: 1, page: true },
    TB9: { t: 'Textbook Ch. 8-9 classroom acoustics passages (pp. 268-269, 334-335)', f: 'packet/src-31-...8th-edition.pdf', tier: 1, page: true },
    AAA: { t: 'AAA Clinical Practice Guidelines: Pediatric Amplification (2013), Moodle handout', f: 'packet/src-14-AAA-2013-Pediatric-Amp-Guidelines.pdf', tier: 1 },
    LING: { t: 'CID: How to perform the Ling check (2019), Moodle handout', f: 'packet/src-15-CID-How-to-perform-the-Ling-check-2019 (2).pdf', tier: 1 },
    HALC: { t: 'Hearing Aid Listening Check, Moodle handout', f: 'packet/src-22-Hearing Aid Listening Check.pdf', tier: 1 },
    LA: { t: 'Louisiana R.S. 22:1038 (Act 816 of 2003), Moodle handout (handout wording; not a current legal check)', f: 'packet/src-24-Louisiana Revised statutes Title 22 Section 1038.docx', tier: 1 },
    KM: { t: 'Killion & Mueller (2010), Twenty years later: A NEW Count-The-Dots method, Hearing Journal 63(1)', f: 'packet/src-17-Articulation Index, SII Count the dots audiogram.pdf', tier: 1 },
    DOTSA: { t: 'Count-the-dots assignment (due 9/24) and IMG_5762 class example', f: 'packet/src-18, src-19', tier: 1 },
    FM: { t: 'Phonak "Children hear better with FM" brochure (2010 marketing piece)', f: 'packet/src-21-Children-Hear-Better-with-FM.pdf', tier: 1 },
    SYL: { t: 'Course syllabus, Fall 2026 (exam content statement, schedule)', f: 'COURSE CONTEXT/Course Syllabus 2026 COMD 4590 copy 2.pdf (DOCX inside)', tier: 1 },
    ANN: { t: 'Dr. Sutherland announcement 8/27/2026: "use these ... not the one from today\'s slide deck"', f: 'professor-guidance/Sutherland-degree-scale-announcement-2026-08-27.png', tier: 1 },
    SG30: { t: 'TEST 1 AUDIOLOGY STUDY GUIDE p.30: adopted degree scale (typed list)', f: 'prior-course-originals/TEST 1 AUDIOLOGY STUDY GUIDE.pdf', tier: 1 },
    SP: { t: 'COMD 4190 Speech Audiometry slides (filled; prior course)', f: 'prior-course-originals/Speech Audiometry student copy 2022 - FILLED.pptx', tier: 3, slide: true },
    'PT-CH6': { t: 'COMD 4190 Ch. 6 Physiologic tests slides (filled; prior course)', f: 'prior-course-originals/Chapter 6 Physiologic tests student copy - FILLED.pptx', tier: 3 },
    TYMP: { t: 'COMD 4190 tympanometry note sheet (prior course)', f: 'prior-course-originals/TYMP GRAPH NOTEZ 1.JPG', tier: 3 },
    SYM: { t: 'COMD 4190 audiogram symbol key sheet with Ethan\'s handwritten notes', f: 'prior-course-originals/AUDIOGRAM SYMBOL KEYS.JPEG', tier: 2 },
    CODEX: { t: 'Sutherland codex (accumulated observations; cleaned version, prophecies removed)', f: 'professor-guidance/SUTHERLAND_CODEX_COMD4590.md', tier: 2 },
    DESIGN: { t: 'Claude design choice (stated in the lab; not a course statement)', f: 'docs/', tier: 4 }
  };
  L.srcBase = function (code) {
    code = String(code);
    var keys = Object.keys(L.SOURCES).sort(function (x, y) { return y.length - x.length; });
    for (var i = 0; i < keys.length; i++) if (code.indexOf(keys[i]) === 0) { var rest = code.slice(keys[i].length).replace(/^-/, ''); if (rest === '' || /^\d+$/.test(rest)) return keys[i]; }
    return null;
  };
  L.srcLabel = function (code) {
    code = String(code); var base = null, n = null;
    var keys = Object.keys(L.SOURCES).sort(function (x, y) { return y.length - x.length; });
    for (var i = 0; i < keys.length; i++) {
      if (code.indexOf(keys[i]) === 0) { var rest = code.slice(keys[i].length).replace(/^-/, ''); if (rest === '' || /^\d+$/.test(rest)) { base = keys[i]; n = rest || null; break; } }
    }
    if (!base) return code;
    var s = L.SOURCES[base];
    if (!s) return String(code);
    var short = { L1: 'Lecture 1', L2: 'Lecture 2', L2C: 'Lecture 2 (Completed deck)', L3: 'Lecture 3', G: 'Guest lecture', T0901: '9/01 transcript', T0908: '9/08 transcript', T0910: '9/10 transcript', T0915: '9/15 transcript',
      TB1: 'Textbook Ch 1', TB2: 'Textbook Ch 2', TB9: 'Textbook Ch 8-9', AAA: 'AAA 2013 guideline', LING: 'Ling check handout', HALC: 'Listening check handout', LA: 'LA R.S. 22:1038 handout',
      KM: 'Killion & Mueller 2010', DOTSA: 'Count-the-dots class example', FM: 'Phonak FM brochure', SYL: 'Syllabus', ANN: '8/27 announcement', SG30: 'TEST 1 study guide p.30', SP: '4190 Speech deck',
      'PT-CH6': '4190 Ch 6 deck', TYMP: '4190 tymp sheet', SYM: '4190 symbol sheet', CODEX: 'Sutherland codex', DESIGN: 'Lab design choice' }[base] || base;
    if (n) short += (s.page ? ' p.' : (s.slide ? ' slide ' : ' ')) + n;
    return short;
  };
})(typeof window !== 'undefined' ? window : globalThis);
