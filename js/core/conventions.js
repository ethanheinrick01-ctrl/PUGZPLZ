/* Course conventions: single source of truth for every classification the lab scores.
   Every generator, key, explanation and test reads from here. */
(function (root) {
  'use strict';
  var L = root.L = root.L || {};

  // ---- Degree of hearing loss: Sutherland's adopted scale ----
  // Source: TEST 1 AUDIOLOGY STUDY GUIDE.pdf p.30 (typed list uploaded to Moodle) + 8/27/2026 announcement
  // "use these ... not the one from today's slide deck". 90 dB = severe; profound is GREATER than 90.
  var DEGREES = [
    { key: 'wnl', label: 'Within normal limits', short: 'WNL', lo: -Infinity, hi: 25, range: '0-25' },
    { key: 'mild', label: 'Mild', short: 'Mild', lo: 30, hi: 40, range: '30-40' },
    { key: 'moderate', label: 'Moderate', short: 'Moderate', lo: 45, hi: 55, range: '45-55' },
    { key: 'modsev', label: 'Moderately severe', short: 'Mod-severe', lo: 60, hi: 70, range: '60-70' },
    { key: 'severe', label: 'Severe', short: 'Severe', lo: 75, hi: 90, range: '75-90' },
    { key: 'profound', label: 'Profound', short: 'Profound', lo: 90.0001, hi: Infinity, range: 'greater than 90' }
  ];
  var DEGREE_SRC = 'TEST 1 Study Guide p.30 + 8/27/2026 announcement';

  // Returns {key,label} or {key:null, gap:[lowerKey, upperKey]} for values the adopted scale leaves undefined.
  function degree(db) {
    if (db === null || db === undefined || isNaN(db)) return { key: null, label: 'No value' };
    for (var i = 0; i < DEGREES.length; i++) {
      var d = DEGREES[i];
      if (db >= d.lo && db <= d.hi) return { key: d.key, label: d.label, short: d.short, range: d.range };
    }
    // falls in a gap (26-29, 41-44, 56-59, 71-74)
    for (var j = 0; j < DEGREES.length - 1; j++) {
      if (db > DEGREES[j].hi && db < DEGREES[j + 1].lo) {
        return { key: null, gap: [DEGREES[j].key, DEGREES[j + 1].key],
          label: 'Undefined on the adopted scale (between ' + DEGREES[j].short + ' and ' + DEGREES[j + 1].short + ')' };
      }
    }
    return { key: null, label: 'Out of range' };
  }
  function degreeLabel(key) { for (var i = 0; i < DEGREES.length; i++) if (DEGREES[i].key === key) return DEGREES[i].label; return key; }
  function isGap(db) { return degree(db).key === null; }

  // ---- Superseded Lecture 1 slide 16 / textbook Table 1-2 (kept ONLY to explain tempting mistakes) ----
  var SUPERSEDED = [
    { label: 'Normal (child)', lo: -10, hi: 20 },
    { label: 'Slight-mild (child 21-40; adult 26-40)', lo: 21, hi: 40 },
    { label: 'Mild-moderate', lo: 41, hi: 55 },
    { label: 'Moderate', lo: 56, hi: 70 },
    { label: 'Severe', lo: 71, hi: 90 },
    { label: 'Profound', lo: 91, hi: 200 }
  ];
  function supersededLabel(db) {
    for (var i = 0; i < SUPERSEDED.length; i++) if (db >= SUPERSEDED[i].lo && db <= SUPERSEDED[i].hi) return SUPERSEDED[i].label;
    return '';
  }

  // ---- PTA ----
  var PTA_FREQS = [500, 1000, 2000]; // L1 slide 16
  function pta(th) { // th: {500:x,1000:y,2000:z,...}
    var s = 0;
    for (var i = 0; i < PTA_FREQS.length; i++) { var v = th[PTA_FREQS[i]]; if (v === undefined || v === null) return null; s += v; }
    return Math.round((s / 3) * 10) / 10;
  }

  // ---- Type of loss (scored items only use unambiguous patterns; see doc) ----
  // CHL: AC impaired, BC normal (<=25). SNHL: AC and BC impaired, no gap (<=10). Mixed: both impaired, AC worse (gap >=15 somewhere).
  var TYPE_LABELS = { normal: 'Normal hearing', conductive: 'Conductive', sensorineural: 'Sensorineural', mixed: 'Mixed' };
  function typeOf(ac, bc, freqs) {
    freqs = freqs || [500, 1000, 2000, 4000];
    var acImp = false, bcImp = false, maxGap = 0;
    freqs.forEach(function (f) {
      if (ac[f] === undefined) return;
      if (ac[f] > 25) acImp = true;
      if (bc && bc[f] !== undefined) {
        if (bc[f] > 25) bcImp = true;
        maxGap = Math.max(maxGap, ac[f] - bc[f]);
      }
    });
    if (!acImp) return 'normal';
    if (!bc) return null;
    if (!bcImp && maxGap >= 15) return 'conductive';
    if (bcImp && maxGap >= 15) return 'mixed';
    if (bcImp && maxGap <= 10) return 'sensorineural';
    return null; // ambiguous; generators never produce this
  }

  // ---- Configuration ----
  var CONFIG_LABELS = { flat: 'Flat', sloping: 'Sloping (gradually worse in the high frequencies)', precipitous: 'Precipitous (sharp high-frequency drop)',
    rising: 'Rising (worse in the low frequencies)', cookie: 'Cookie-bite (worse in the mid frequencies)' };

  // ---- Word recognition (4190 Speech Audiometry slide 17, "YOU NEED TO KNOW THESE") ----
  // Endpoints overlap on the slide (90, 75, 60, 50); scored items never use an endpoint.
  function wrsCategory(p) {
    if (p > 90) return 'wnl';
    if (p > 75 && p < 90) return 'slight';
    if (p > 60 && p < 75) return 'moderate';
    if (p > 50 && p < 60) return 'poor';
    if (p < 50) return 'verypoor';
    return null; // endpoint: slide is ambiguous
  }
  var WRS_LABELS = { wnl: 'WNL (90-100%)', slight: 'Slight difficulty (75-90%)', moderate: 'Moderate difficulty (60-75%)', poor: 'Poor (50-60%)', verypoor: 'Very poor (<50%)' };

  // ---- Tympanometry ----
  // Two norm sets in the materials (flagged conflict):
  var TYMP_NORMS = {
    c4190: { name: 'COMD 4190 tymp sheet', ecvChild: [0.3, 0.9], ecvAdult: [0.9, 2.0], pcChild: [0.3, 1.0], pcAdult: [0.3, 1.7], abnormalPressure: '<= -150 or >= +150 daPa' },
    guest: { name: 'Guest lecture slide 14 (226 Hz)', ecvChild: [0.3, 1.0], mep: [-150, 100], compliance: [0.2, 1.0], ecvTubes: [1.0, 5.5] }
  };
  // Scored classifier: generators only emit values that give the same answer under both norm sets.
  function tympType(t) { // t: {peak:boolean, pc, pressure, ecv, age:'child'|'adult'}
    var adult = t.age === 'adult';
    if (!t.peak) {
      if (t.ecv >= (adult ? 2.5 : 1.5)) return 'B-large';
      if (t.ecv < 0.2) return 'B-small';
      if (t.ecv >= 0.3 && t.ecv <= (adult ? 2.0 : 0.9)) return 'B-normal';
      return null;
    }
    if (t.pressure <= -200) return 'C';
    if (t.pressure < -100 || t.pressure > 50) return null; // avoid the -150 disagreement zone
    if (t.pc <= 0.15) return 'As';
    if (t.pc >= (adult ? 2.2 : 1.4)) return 'Ad';
    if (t.pc >= 0.3 && t.pc <= (adult ? 1.7 : 1.0)) return 'A';
    return null;
  }
  var TYMP_LABELS = {
    A: 'Type A: normal peak and pressure',
    As: 'Type As: normal pressure, shallow (reduced) peak',
    Ad: 'Type Ad: normal pressure, very deep (high) peak',
    C: 'Type C: peak at significant negative pressure',
    'B-normal': 'Type B, normal volume: flat, consistent with middle-ear fluid/pathology',
    'B-large': 'Type B, large volume: flat, consistent with TM perforation or patent PE tube',
    'B-small': 'Type B, small volume: flat, consistent with occlusion (cerumen, probe against canal wall)'
  };

  // ---- Acoustic reflex (COMD 4190 Ch 6 deck; foundations refresher only) ----
  function reflexSL(reflexHL, acThreshold) { return reflexHL - acThreshold; }
  function reflexCategory(sl) {
    if (sl === null) return 'absent';
    if (sl > 100) return 'elevated';
    if (sl >= 70) return 'normal';
    if (sl < 60) return 'reduced';
    return null; // 60-69 not defined in the notes
  }

  // ---- Speech ----
  function sensationLevel(presentation, srt) { return presentation - srt; }
  function ptaSrtAgree(ptaVal, srt) { return Math.abs(ptaVal - srt) <= 10; }
  function dynamicRange(ucl, srt) { return ucl - srt; }
  function snr(signal, noise) { return signal - noise; }

  // ---- Count-the-dots (Killion & Mueller 2010) ----
  // dots: [octavesAbove125Hz, dBHL]; audible if dB >= interpolated threshold (log-frequency linear, flat beyond ends)
  function thrAtOct(th, oct) {
    var fs = Object.keys(th).map(Number).sort(function (a, b) { return a - b; });
    var pts = fs.map(function (f) { return [Math.log(f / 125) / Math.LN2, th[f]]; });
    if (oct <= pts[0][0]) return pts[0][1];
    if (oct >= pts[pts.length - 1][0]) return pts[pts.length - 1][1];
    for (var i = 0; i < pts.length - 1; i++) {
      if (oct >= pts[i][0] && oct <= pts[i + 1][0]) {
        var t = (oct - pts[i][0]) / (pts[i + 1][0] - pts[i][0]);
        return pts[i][1] + t * (pts[i + 1][1] - pts[i][1]);
      }
    }
    return pts[pts.length - 1][1];
  }
  function countDots(th, dots) {
    dots = dots || (L.DOTS || []);
    var n = 0;
    for (var i = 0; i < dots.length; i++) if (dots[i][1] >= thrAtOct(th, dots[i][0]) - 0.0001) n++;
    return n;
  }
  // Minimum distance (dB) from any dot to the threshold line: used to reject generated audiograms whose count is fragile.
  function dotMargin(th, dots) {
    dots = dots || (L.DOTS || []);
    var m = Infinity;
    dots.forEach(function (d) { m = Math.min(m, Math.abs(d[1] - thrAtOct(th, d[0]))); });
    return m;
  }
  // Figure 3 curves read by eye (for band-level feedback only; never graded to the point).
  var FIG3 = {
    nu6: [[0, 0], [10, 8], [20, 19], [30, 34], [40, 52], [50, 68], [60, 78], [70, 85], [80, 90], [90, 94], [100, 96]],
    sentences: [[0, 0], [5, 15], [10, 33], [15, 52], [20, 68], [25, 82], [30, 90], [35, 93], [40, 96], [50, 98], [100, 99]]
  };
  function fig3(curve, sii) {
    var c = FIG3[curve];
    for (var i = 0; i < c.length - 1; i++) if (sii >= c[i][0] && sii <= c[i + 1][0]) {
      var t = (sii - c[i][0]) / (c[i + 1][0] - c[i][0]); return c[i][1] + t * (c[i + 1][1] - c[i][1]);
    }
    return c[c.length - 1][1];
  }

  L.conv = {
    DEGREES: DEGREES, DEGREE_SRC: DEGREE_SRC, degree: degree, degreeLabel: degreeLabel, isGap: isGap,
    SUPERSEDED: SUPERSEDED, supersededLabel: supersededLabel,
    PTA_FREQS: PTA_FREQS, pta: pta, typeOf: typeOf, TYPE_LABELS: TYPE_LABELS, CONFIG_LABELS: CONFIG_LABELS,
    wrsCategory: wrsCategory, WRS_LABELS: WRS_LABELS, TYMP_NORMS: TYMP_NORMS, tympType: tympType, TYMP_LABELS: TYMP_LABELS,
    reflexSL: reflexSL, reflexCategory: reflexCategory, sensationLevel: sensationLevel, ptaSrtAgree: ptaSrtAgree,
    dynamicRange: dynamicRange, snr: snr, thrAtOct: thrAtOct, countDots: countDots, dotMargin: dotMargin, FIG3: FIG3, fig3: fig3
  };
})(typeof window !== 'undefined' ? window : globalThis);
