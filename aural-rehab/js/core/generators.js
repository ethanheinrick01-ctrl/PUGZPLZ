/* Item generators: fresh numbers every time, always convention-safe (no values in scale gaps,
   no overlapping WRS endpoints, no tymp values where the two norm sets disagree).
   Every generator returns an item in the normal item schema plus gen:{name,seed}. */
(function (root) {
  'use strict';
  var L = root.L = root.L || {};
  var U = L.util, C = L.conv;
  var FREQS = [250, 500, 1000, 2000, 4000, 8000];
  var BC_FREQS = [500, 1000, 2000, 4000];

  var SHAPES = {
    flat: [0, 0, 0, 0, 0, 5],
    sloping: [-20, -10, 0, 10, 20, 25],
    rising: [25, 15, 5, -5, -10, -10],
    cookie: [0, 10, 20, 20, 5, 0]
  };
  var DEGREE_TARGETS = { wnl: [5, 10, 15, 20], mild: [30, 35, 40], moderate: [45, 50, 55], modsev: [60, 65, 70], severe: [75, 80, 85, 90], profound: [95, 100, 105] };
  var BOUNDARY_TARGETS = { wnl: [25], mild: [30, 40], moderate: [45, 55], modsev: [60, 70], severe: [75, 90], profound: [95] };
  function clamp(v) { return Math.max(-10, Math.min(120, v)); }
  function r5(v) { return Math.round(v / 5) * 5; }

  // Build an AC curve whose PTA equals target exactly (target is a multiple of 5).
  function acCurve(r, target, config) {
    var th = {};
    if (config === 'precipitous') {
      var low = U.pick(r, [5, 10, 15, 20]);
      th[250] = low; th[500] = low; th[1000] = clamp(low + U.pick(r, [0, 5]));
      th[2000] = clamp(3 * target - th[500] - th[1000]);
      if (th[2000] - th[1000] < 30) return null;
      th[4000] = clamp(th[2000] + U.pick(r, [15, 20, 25])); th[8000] = clamp(th[4000] + U.pick(r, [0, 5]));
      return th;
    }
    var o = SHAPES[config], mo = (o[1] + o[2] + o[3]) / 3;
    FREQS.forEach(function (f, i) { th[f] = clamp(r5(target + o[i] - mo + (config === 'flat' ? U.pick(r, [-5, 0, 0, 5]) : 0))); });
    var diff = 3 * target - (th[500] + th[1000] + th[2000]);
    th[1000] = clamp(th[1000] + diff);
    if (C.pta(th) !== target) return null;
    return th;
  }
  function configOk(th, config) {
    var d = function (a, b) { return th[b] - th[a]; };
    switch (config) {
      case 'flat': var vals = FREQS.slice(0, 5).map(function (f) { return th[f]; }); return Math.max.apply(null, vals) - Math.min.apply(null, vals) <= 10;
      case 'sloping': return d(250, 4000) >= 30 && d(500, 1000) >= 5 && d(1000, 2000) >= 5 && d(2000, 4000) >= 5 && d(1000, 2000) < 25;
      case 'precipitous': return d(1000, 2000) >= 30 && th[500] <= 25;
      case 'rising': return th[250] - th[4000] >= 30 && th[250] >= th[1000];
      case 'cookie': return th[1000] - th[250] >= 15 && th[2000] - th[8000] >= 15 && Math.min(th[1000], th[2000]) > Math.max(th[250], th[8000]);
    }
    return false;
  }
  // Build one ear. type: conductive|sensorineural|mixed|normal
  function buildEar(r, type, degKey, config, boundary) {
    for (var tries = 0; tries < 200; tries++) {
      var targets = boundary ? BOUNDARY_TARGETS[degKey] : DEGREE_TARGETS[degKey];
      var target = U.pick(r, targets);
      var ac = acCurve(r, target, config);
      if (!ac || !configOk(ac, config)) continue;
      var bc = {};
      var ok = true;
      BC_FREQS.forEach(function (f) {
        if (type === 'normal' || type === 'sensorineural') {
          if (ac[f] > 70) return; // beyond typical BC output limits: not plotted
          bc[f] = Math.max(-10, ac[f] - U.pick(r, [0, 0, 5]));
        } else if (type === 'conductive') {
          var b = U.pick(r, [0, 5, 10, 15]);
          if (ac[f] - b > 65) ok = false;
          bc[f] = Math.min(b, ac[f]);
        } else if (type === 'mixed') {
          var gap = U.pick(r, [20, 25, 30, 35]);
          var bm = ac[f] - gap;
          if (bm > 70) { ok = false; return; }
          bc[f] = bm;
        }
      });
      if (!ok) continue;
      if (type === 'conductive' && C.pta(ac) > 60) continue;
      var limited = type === 'sensorineural' && Object.keys(bc).length < 3;
      var got = C.typeOf(ac, bc);
      if (!limited && (type === 'normal' ? got !== 'normal' : got !== type)) continue;
      if (type === 'mixed') { var imp = BC_FREQS.filter(function (f) { return bc[f] !== undefined && bc[f] > 25; }).length; if (imp < 3) continue; }
      return { ac: ac, bc: bc, pta: C.pta(ac), target: target, bcLimited: limited };
    }
    return null;
  }
  function normalEar(r) {
    var ac = {}, bc = {};
    FREQS.forEach(function (f) { ac[f] = U.pick(r, [0, 5, 10, 15]); });
    BC_FREQS.forEach(function (f) { bc[f] = Math.max(-10, ac[f] - U.pick(r, [0, 5])); });
    return { ac: ac, bc: bc, pta: C.pta(ac) };
  }

  function mc(choices) { // choices: [[text, why, ok]]
    return choices.map(function (c) { return { t: c[0], w: c[1] || '', ok: !!c[2] }; });
  }
  function degreeChoices(correctKey, ptaVal) {
    return C.DEGREES.map(function (d) {
      var ok = d.key === correctKey;
      return { t: d.label, ok: ok, w: ok ? 'Correct: ' + ptaVal + ' dB HL is inside the adopted ' + d.range + ' range.' : d.label + ' = ' + d.range + ' dB HL on the adopted scale; ' + ptaVal + ' is outside it.' };
    });
  }
  function degExplain(v) {
    var d = C.degree(v), sup = C.supersededLabel(v);
    var s = 'Adopted scale: 0-25 WNL | 30-40 mild | 45-55 moderate | 60-70 mod-severe | 75-90 severe | greater than 90 profound. ' + v + ' dB HL = ' + d.label + '.';
    if (sup && sup.toLowerCase().split(' ')[0] !== d.label.toLowerCase().split(' ')[0]) s += ' (The superseded Lecture 1 / Table 1-2 would read "' + sup + '"; do not use it.)';
    if (v === 90) s += ' 90 is the TOP of severe, not profound: profound starts above 90.';
    if (v === 25) s += ' 25 is still WNL on this scale (the old child table would already call 21+ a loss).';
    return s;
  }

  var G = {};

  // 1. Boundary / interior value -> degree
  G.degreeValue = function (seed, opt) {
    var r = U.rng(seed); opt = opt || {};
    var pool = opt.boundaryOnly ? [25, 30, 40, 45, 55, 60, 70, 75, 90, 95] : [25, 30, 40, 45, 55, 60, 70, 75, 90, 95, 10, 35, 50, 65, 80, 100];
    var v = U.pick(r, pool), f = U.pick(r, [500, 1000, 2000, 4000]);
    var d = C.degree(v);
    var ear = U.pick(r, ['right', 'left']);
    return {
      id: 'g:degreeValue:' + seed, gen: { name: 'degreeValue', seed: seed }, t: 'mc', sec: 's2', c: 'degree-scale', dom: 'dx',
      q: 'Using Dr. Sutherland\'s adopted degree scale, a ' + ear + '-ear air-conduction threshold of <b>' + v + ' dB HL</b> at ' + f + ' Hz is classified as:',
      o: degreeChoices(d.key, v), x: degExplain(v), s: ['SG30', 'ANN'], tier: 1, boundary: [25, 30, 40, 45, 55, 60, 70, 75, 90, 95].indexOf(v) >= 0
    };
  };

  // 2. PTA + degree from an audiogram (both steps graded as parts)
  G.ptaDegree = function (seed, opt) {
    var r = U.rng(seed); opt = opt || {};
    var degKey = opt.degree || U.pick(r, ['mild', 'moderate', 'modsev', 'severe', 'profound', 'mild', 'moderate']);
    var boundary = opt.boundary !== undefined ? opt.boundary : r() < 0.5;
    var type = degKey === 'severe' || degKey === 'profound' ? 'sensorineural' : U.pick(r, ['sensorineural', 'sensorineural', 'conductive', 'mixed']);
    if (type === 'conductive' && (degKey === 'modsev')) type = 'mixed';
    if (type === 'mixed' && degKey === 'mild') type = 'conductive';
    var config = U.pick(r, type === 'conductive' ? ['flat', 'rising'] : ['flat', 'sloping', 'flat']);
    var e = buildEar(r, type, degKey, config, boundary);
    if (!e) return G.degreeValue(seed);
    var side = U.pick(r, ['right', 'left']);
    var spec = {}; spec[side] = { ac: e.ac, bc: e.bc };
    var other = side === 'right' ? 'left' : 'right';
    var ptaOpts = U.uniq([e.pta, e.pta + 5, e.pta - 5, U.round1((e.ac[500] + e.ac[1000] + e.ac[2000] + e.ac[4000]) / 4)]).filter(function (v) { return v >= -10; });
    return {
      id: 'g:ptaDegree:' + seed, gen: { name: 'ptaDegree', seed: seed }, t: 'parts', pta: e.pta, sec: 's2', c: 'pta-degree', dom: 'dx',
      q: 'Only the ' + side + ' ear is plotted. Find the pure-tone average and classify the degree with the adopted scale.',
      media: { kind: 'audiogram', spec: spec },
      parts: [
        { label: 'PTA (' + side + ' ear)', options: U.shuffle(ptaOpts, r).map(function (v) { return v + ' dB HL'; }), a: e.pta + ' dB HL',
          why: 'PTA = (500 + 1000 + 2000) / 3 = (' + e.ac[500] + ' + ' + e.ac[1000] + ' + ' + e.ac[2000] + ') / 3 = ' + e.pta + ' dB HL. Averaging in 4000 Hz is a different average and not the PTA taught in Lecture 1.' },
        { label: 'Degree', options: C.DEGREES.map(function (d) { return d.label; }), a: C.degree(e.pta).label, why: degExplain(e.pta) }
      ],
      x: 'PTA uses 500, 1000 and 2000 Hz (Lecture 1 slide 16). ' + degExplain(e.pta), s: ['L1-16', 'SG30', 'ANN'], tier: 1,
      boundary: [25, 30, 40, 45, 55, 60, 70, 75, 90, 95].indexOf(e.pta) >= 0
    };
  };

  // 3. PTA numeric
  G.ptaNumeric = function (seed) {
    var r = U.rng(seed);
    var t = { 500: U.step(r, 10, 80), 1000: U.step(r, 10, 85), 2000: U.step(r, 15, 90) };
    var p = C.pta(t);
    return {
      id: 'g:ptaNumeric:' + seed, gen: { name: 'ptaNumeric', seed: seed }, t: 'num', sec: 's2', c: 'pta-degree', dom: 'dx',
      q: 'Right ear thresholds: 250 Hz ' + U.step(r, 5, 60) + ', 500 Hz ' + t[500] + ', 1000 Hz ' + t[1000] + ', 2000 Hz ' + t[2000] + ', 4000 Hz ' + U.step(r, 20, 95) + ' dB HL. What is the PTA (dB HL, one decimal)?',
      a: p, tol: 0.35, unit: 'dB HL',
      x: 'PTA = (' + t[500] + ' + ' + t[1000] + ' + ' + t[2000] + ') / 3 = ' + p + ' dB HL. 250 and 4000 Hz are distractors here. ' +
        (C.degree(p).key ? 'Degree: ' + C.degree(p).label + '.' : 'Note: ' + p + ' lands in an undefined gap of the adopted scale, so this item scores the arithmetic only.'),
      s: ['L1-16'], tier: 1
    };
  };

  // 4. Type of loss from audiogram
  G.typeAud = function (seed) {
    var r = U.rng(seed);
    var type = U.pick(r, ['conductive', 'sensorineural', 'mixed']);
    var degKey = type === 'conductive' ? U.pick(r, ['mild', 'moderate']) : type === 'mixed' ? U.pick(r, ['moderate', 'modsev']) : U.pick(r, ['mild', 'moderate', 'modsev']);
    var config = type === 'conductive' ? U.pick(r, ['flat', 'rising']) : U.pick(r, ['flat', 'sloping']);
    var e = buildEar(r, type, degKey, config, false);
    if (!e) return G.degreeValue(seed);
    var side = U.pick(r, ['right', 'left']); var spec = {}; spec[side] = { ac: e.ac, bc: e.bc };
    var gapTxt = BC_FREQS.map(function (f) { return f + ': AC ' + e.ac[f] + ' / BC ' + e.bc[f]; }).join('; ');
    var W = {
      conductive: 'Conductive = AC impaired with BC within normal limits (air-bone gap). Guest slide 20: "Normal BC, elevated AC, key finding ABG."',
      sensorineural: 'Sensorineural = AC and BC both impaired and overlapping (no significant air-bone gap). Guest slide 25.',
      mixed: 'Mixed = BC impaired AND AC worse than BC (gap present). The BC shows the permanent sensorineural part; the gap shows the conductive part (guest slide 30).',
      normal: 'Normal would need AC within 0-25 dB HL at every frequency; this ear has elevated AC.'
    };
    return {
      id: 'g:typeAud:' + seed, gen: { name: 'typeAud', seed: seed }, t: 'mc', sec: 's2', c: 'loss-type', dom: 'dx',
      q: 'What type of hearing loss does the ' + side + ' ear show?', media: { kind: 'audiogram', spec: spec },
      o: mc([['Conductive', W.conductive, type === 'conductive'], ['Sensorineural', W.sensorineural, type === 'sensorineural'], ['Mixed', W.mixed, type === 'mixed'], ['Normal hearing', W.normal, false]]),
      x: 'Read BC first, then compare AC. ' + gapTxt + '. ' + W[type], s: ['L1-18', 'G20', 'G25', 'G30'], tier: 1
    };
  };

  // 5. Configuration
  G.configAud = function (seed) {
    var r = U.rng(seed);
    var config = U.pick(r, ['flat', 'sloping', 'precipitous', 'rising', 'cookie']);
    var degKey = config === 'precipitous' ? U.pick(r, ['mild', 'moderate']) : config === 'rising' ? U.pick(r, ['mild', 'moderate']) : U.pick(r, ['mild', 'moderate', 'modsev']);
    var type = config === 'rising' ? U.pick(r, ['conductive', 'sensorineural']) : 'sensorineural';
    var e = buildEar(r, type, degKey, config, false);
    if (!e) return G.degreeValue(seed);
    var side = U.pick(r, ['right', 'left']); var spec = {}; spec[side] = { ac: e.ac, bc: e.bc };
    var labels = { flat: 'Flat', sloping: 'Sloping', precipitous: 'Precipitous', rising: 'Rising', cookie: 'Cookie-bite' };
    var why = {
      flat: 'Flat: thresholds roughly equal across frequencies (within about 10 dB).',
      sloping: 'Sloping: thresholds get gradually worse as frequency increases.',
      precipitous: 'Precipitous: near-normal low frequencies, then a sharp drop (the anoxia pattern on Lecture 2 slide 34).',
      rising: 'Rising: worse in the low frequencies, better in the highs (guest: a mild low-frequency loss can reflect middle-ear effusion).',
      cookie: 'Cookie-bite: mid frequencies worse than both the lows and the highs.'
    };
    return {
      id: 'g:configAud:' + seed, gen: { name: 'configAud', seed: seed }, t: 'mc', sec: 's2', c: 'configuration', dom: 'dx',
      q: 'Which configuration best describes the ' + side + ' ear?', media: { kind: 'audiogram', spec: spec },
      o: mc(Object.keys(labels).map(function (k) { return [labels[k], why[k], k === config]; })),
      x: 'Configuration is the SHAPE across frequency; degree is how much. ' + why[config] + ' Guest slide 7: "Degree tells you how much; configuration tells you where."',
      s: ['L1-17', 'G7', 'G11', 'L2-34'], tier: 1
    };
  };

  // 6. Full description (parts): type, degree, configuration, laterality
  G.describe = function (seed, opt) {
    var r = U.rng(seed); opt = opt || {};
    var type = U.pick(r, ['conductive', 'sensorineural', 'sensorineural', 'mixed']);
    var degKey = type === 'conductive' ? U.pick(r, ['mild', 'moderate']) : type === 'mixed' ? U.pick(r, ['moderate', 'modsev']) : U.pick(r, ['mild', 'moderate', 'modsev']);
    var config = type === 'conductive' ? U.pick(r, ['flat', 'rising']) : U.pick(r, ['flat', 'sloping']);
    var lat = U.pick(r, ['bilateral', 'bilateral', 'unilateral']);
    var e = buildEar(r, type, degKey, config, opt.boundary !== undefined ? opt.boundary : r() < 0.4);
    if (!e) return G.typeAud(seed);
    var worse = U.pick(r, ['right', 'left']), better = worse === 'right' ? 'left' : 'right';
    var spec = {}; spec[worse] = { ac: e.ac, bc: e.bc, bcMasked: lat === 'unilateral' };
    var e2;
    if (lat === 'bilateral') {
      e2 = { ac: {}, bc: {} };
      FREQS.forEach(function (f) { e2.ac[f] = e.ac[f]; });
      // keep symmetric (within 5 dB) but keep the PTA identical so both ears share one degree
      BC_FREQS.forEach(function (f) { if (e.bc[f] !== undefined) e2.bc[f] = e.bc[f]; });
      e2.ac[250] = clamp(e.ac[250] + U.pick(r, [-5, 0, 5])); e2.ac[8000] = clamp(e.ac[8000] + U.pick(r, [-5, 0, 5]));
      spec[better] = { ac: e2.ac, bc: {} };
    } else {
      e2 = normalEar(r); spec[better] = { ac: e2.ac, bc: {} };
    }
    var cfgL = { flat: 'Flat', sloping: 'Sloping', precipitous: 'Precipitous', rising: 'Rising', cookie: 'Cookie-bite' };
    var latOpt = ['Bilateral, symmetrical', 'Unilateral (' + worse + ')', 'Unilateral (' + better + ')', 'Bilateral, asymmetrical'];
    var latA = lat === 'bilateral' ? latOpt[0] : latOpt[1];
    return {
      id: 'g:describe:' + seed, gen: { name: 'describe', seed: seed }, t: 'parts', pta: e.pta, sec: 's2', c: 'audiogram-description', dom: 'dx',
      q: 'Describe this audiogram the way you would in a report. (Unless noted, BC shown is for the ear it is plotted beside; masked BC uses brackets.)',
      media: { kind: 'audiogram', spec: spec },
      parts: [
        { label: 'Laterality', options: latOpt, a: latA, why: lat === 'bilateral' ? 'Both ears show matching loss.' : 'One ear is within normal limits (all AC 0-25 dB HL); only the ' + worse + ' ear has a loss.' },
        { label: 'Type (' + worse + ')', options: ['Conductive', 'Sensorineural', 'Mixed'], a: C.TYPE_LABELS[type], why: 'BC ' + BC_FREQS.map(function (f) { return e.bc[f] === undefined ? '-' : e.bc[f]; }).join('/') + ' vs AC ' + BC_FREQS.map(function (f) { return e.ac[f]; }).join('/') + ' (500-4000 Hz). ' + (type === 'conductive' ? 'BC normal + gap = conductive.' : type === 'mixed' ? 'BC impaired + gap = mixed.' : 'BC impaired, no gap = sensorineural.') },
        { label: 'Degree by PTA (' + worse + ')', options: C.DEGREES.map(function (d) { return d.label; }), a: C.degree(e.pta).label, why: 'PTA = ' + e.pta + ' dB HL. ' + degExplain(e.pta) },
        { label: 'Configuration (' + worse + ')', options: ['Flat', 'Sloping', 'Precipitous', 'Rising', 'Cookie-bite'], a: cfgL[config], why: 'Look at the shape across frequency, not the average.' }
      ],
      x: 'Guest slide 8 "Read Audiogram Like a Clinician" works through 1 reliability, 2 degree, 3 configuration (flat, rising, sloping, cookie-bite, notched), 4 laterality (unilateral/bilateral, symmetric/asymmetric), 5 type. Degree uses the adopted scale, not the guest slide\'s generic list.',
      s: ['L1-15', 'L1-16', 'L1-17', 'L1-18', 'G8', 'SG30'], tier: 1,
      boundary: [25, 30, 40, 45, 55, 60, 70, 75, 90, 95].indexOf(e.pta) >= 0
    };
  };

  // 7. Sensation level / WRS presentation
  G.slCalc = function (seed) {
    var r = U.rng(seed);
    var srt = U.step(r, 10, 60), sl = U.pick(r, [25, 30, 35, 40]);
    var pres = srt + sl;
    return {
      id: 'g:slCalc:' + seed, gen: { name: 'slCalc', seed: seed }, t: 'num', sec: 's2', c: 'speech-audiometry', dom: 'dx', found: true,
      q: 'SRT is ' + srt + ' dB HL. Word recognition is presented at ' + pres + ' dB HL. What is the sensation level (dB SL)?',
      a: sl, tol: 0, unit: 'dB SL',
      x: 'SL = presentation level - SRT = ' + pres + ' - ' + srt + ' = ' + sl + ' dB SL. WRS is presented 25-40 dB SL, "not dB HL" (COMD 4190 Speech Audiometry slide 16).',
      s: ['SP-16'], tier: 3
    };
  };
  G.ptaSrt = function (seed) {
    var r = U.rng(seed);
    var p = U.step(r, 15, 70), agree = r() < 0.5;
    var srt = agree ? p + U.pick(r, [-10, -5, 0, 5, 10]) : p + U.pick(r, [-25, -20, 20, 25, 30]);
    return {
      id: 'g:ptaSrt:' + seed, gen: { name: 'ptaSrt', seed: seed }, t: 'tf', sec: 's2', c: 'speech-audiometry', dom: 'dx', found: true,
      q: 'PTA = ' + p + ' dB HL and SRT = ' + srt + ' dB HL. True or false: these results agree.',
      o: mc([['True', agree ? 'Correct: the difference is ' + Math.abs(p - srt) + ' dB, within 10 dB.' : 'The difference is ' + Math.abs(p - srt) + ' dB, more than 10 dB.', agree], ['False', agree ? 'The difference is only ' + Math.abs(p - srt) + ' dB; agreement means within 10 dB.' : 'Correct: ' + Math.abs(p - srt) + ' dB apart, so they disagree; reasons include exaggerated loss, a precipitous audiogram, central issues or calibration.', !agree]]),
      x: 'SRT should correlate with the PTA within 10 dB (COMD 4190 Speech Audiometry slide 10). When it does not, consider exaggerated loss, a precipitously sloping audiogram, central involvement or improper calibration.',
      s: ['SP-10'], tier: 3
    };
  };
  G.wrs = function (seed) {
    var r = U.rng(seed);
    var n; do { n = U.int(r, 8, 25); } while (n * 4 === 60);
    var p = n * 4, cat = C.wrsCategory(p);
    var keys = ['wnl', 'slight', 'moderate', 'poor', 'verypoor'];
    return {
      id: 'g:wrs:' + seed, gen: { name: 'wrs', seed: seed }, t: 'parts', sec: 's2', c: 'speech-audiometry', dom: 'dx', found: true,
      q: 'A patient repeats <b>' + n + ' of 25</b> NU-6 words correctly (whole-word scoring).',
      parts: [
        { label: 'WRS', options: U.uniq([p, p + 4 > 100 ? p - 8 : p + 4, n, Math.round(n / 50 * 100)]).map(function (v) { return v + '%'; }), a: p + '%', why: '25 words: each word = 4%. ' + n + ' x 4 = ' + p + '%.' },
        { label: 'Interpretation', options: keys.map(function (k) { return C.WRS_LABELS[k]; }), a: C.WRS_LABELS[cat], why: p + '% falls in ' + C.WRS_LABELS[cat] + ' (4190 slide 17, "YOU NEED TO KNOW THESE").' }
      ],
      x: 'Whole-word scoring, 25 words per ear, 4% per word (4190 slides 16-17). Categories: 90-100 WNL; 75-90 slight; 60-75 moderate; 50-60 poor; below 50 very poor.',
      s: ['SP-16', 'SP-17', 'L1-19'], tier: 3
    };
  };

  // 8. Reflex SL (foundations refresher only; excluded from mocks)
  G.reflex = function (seed) {
    var r = U.rng(seed);
    var ac = U.step(r, 0, 60), cat = U.pick(r, ['normal', 'reduced', 'elevated']);
    var sl = cat === 'normal' ? U.step(r, 70, 100) : cat === 'reduced' ? U.step(r, 30, 55) : U.step(r, 105, 110);
    var hl = ac + sl;
    if (hl > 125) { hl = 125; sl = hl - ac; }
    // Existing sessions store only the generator seed. Preserve their numeric stem on reload;
    // a capped 125 - 60 = 65 seed needs an explicit answer, not a silent new question.
    var labs = { normal: 'Normal (70-100 dB SL)', reduced: 'Reduced SL (<60 dB SL), consistent with cochlear loss', elevated: 'Elevated (>100 dB SL)', absent: 'Absent' };
    var category = C.reflexCategory(sl), unclassified = !category;
    var gapLabel = 'Unclassified (60-69 dB SL)';
    var options = [labs.normal, labs.reduced, labs.elevated, labs.absent];
    if (unclassified) options.push(gapLabel);
    return {
      id: 'g:reflex:' + seed, gen: { name: 'reflex', seed: seed }, t: 'parts', sec: 's2', c: 'reflex-sl', dom: 'dx', found: true, mockExclude: true,
      reflexUnclassified: unclassified,
      q: 'Right ipsilateral reflex at 1000 Hz is obtained at <b>' + hl + ' dB HL</b>. Right AC threshold at 1000 Hz is <b>' + ac + ' dB HL</b>.',
      parts: [
        { label: 'Reflex SL', options: U.uniq([sl, hl, sl + 10, Math.abs(sl - 10)]).map(function (v) { return v + ' dB SL'; }), a: sl + ' dB SL', why: 'Reflex SL = reflex HL - AC threshold at the same frequency in the stimulated ear: ' + hl + ' - ' + ac + ' = ' + sl + '.' },
        { label: 'Interpretation', options: options, a: unclassified ? gapLabel : labs[category], why: unclassified ? 'COMD 4190 Ch 6 defines normal as 70-100 dB SL and reduced as below 60. It does not classify 60-69, so 65 cannot be called either normal or reduced.' : 'COMD 4190 Ch 6 notes: 70-100 SL normal; <60 reduced (cochlear); >100 elevated.' }
      ],
      x: 'Use the AC threshold at that frequency in the stimulus ear, not the PTA (the PTA shortcut was explicitly superseded in the 4190 records). Foundations refresher from COMD 4190; not part of this course\'s lecture slides.',
      s: ['PT-CH6'], tier: 3
    };
  };

  // 9. Tympanogram classification
  G.tymp = function (seed) {
    var r = U.rng(seed);
    var age = U.pick(r, ['child', 'child', 'adult']);
    var kind = U.pick(r, ['A', 'As', 'Ad', 'C', 'B-normal', 'B-large', 'B-small']);
    var t = { age: age, peak: true };
    var adult = age === 'adult';
    t.ecv = adult ? U.pick(r, [1.0, 1.2, 1.4, 1.6, 1.8]) : U.pick(r, [0.4, 0.5, 0.6, 0.7, 0.8]);
    t.pressure = U.pick(r, [-75, -50, -25, 0, 25]);
    t.pc = adult ? U.pick(r, [0.4, 0.6, 0.8, 1.0, 1.3]) : U.pick(r, [0.35, 0.5, 0.6, 0.7, 0.9]);
    if (kind === 'As') t.pc = U.pick(r, [0.1, 0.12, 0.15]);
    if (kind === 'Ad') t.pc = adult ? U.pick(r, [2.3, 2.5, 2.8]) : U.pick(r, [1.5, 1.7, 1.9]);
    if (kind === 'C') t.pressure = U.pick(r, [-200, -250, -300]);
    if (kind.charAt(0) === 'B') {
      t.peak = false;
      if (kind === 'B-large') t.ecv = adult ? U.pick(r, [2.8, 3.2, 3.8]) : U.pick(r, [1.8, 2.4, 3.0]);
      if (kind === 'B-small') t.ecv = U.pick(r, [0.1, 0.15]);
    }
    var got = C.tympType(t);
    if (got !== kind) return G.tymp(seed + 7);
    var keys = ['A', 'As', 'Ad', 'C', 'B-normal', 'B-large', 'B-small'];
    return {
      id: 'g:tymp:' + seed, gen: { name: 'tymp', seed: seed }, t: 'mc', sec: 's6', c: 'tympanometry', dom: 'dx',
      q: 'Classify this ' + (adult ? 'adult' : 'child (school age)') + ' tympanogram.',
      media: { kind: 'tymp', spec: { peak: t.peak, pc: t.pc, pressure: t.pressure, ecv: t.ecv } },
      o: keys.map(function (k) { return { t: C.TYMP_LABELS[k], ok: k === kind, w: k === kind ? 'Correct.' : '' }; }),
      x: 'Read peak presence, peak pressure, peak height and ECV. For a flat (B) tracing, ECV decides the story: large = perforation or open tube, small = occlusion, normal = middle-ear fluid/pathology (4190 tymp sheet; guest slides 14 and 21). Values here are chosen to be classified the same way under both the 4190 norms and the guest-lecture norms.',
      s: ['TYMP', 'G14', 'G21'], tier: 1
    };
  };

  // 10. SNR
  G.snr = function (seed) {
    var r = U.rng(seed);
    var sig = U.step(r, 50, 75), noise = U.step(r, 40, 80);
    if (sig === noise) noise += 5;
    var v = sig - noise;
    return {
      id: 'g:snr:' + seed, gen: { name: 'snr', seed: seed }, t: 'num', sec: 's9', c: 'snr', dom: 'ha',
      q: 'The teacher\'s voice reaches the student at ' + sig + ' dB; classroom noise is ' + noise + ' dB. What is the SNR (include the sign)?',
      a: v, tol: 0, unit: 'dB',
      x: 'SNR = signal - noise = ' + sig + ' - ' + noise + ' = ' + (v > 0 ? '+' : '') + v + ' dB. Lecture 3 slide 60 examples: 60 vs 50 = +10; 50 vs 55 = -5. Children with hearing loss need a higher (more positive) SNR than children with normal hearing.',
      s: ['L3-60'], tier: 1
    };
  };

  // 11. Count the dots
  G.dots = function (seed) {
    var r = U.rng(seed);
    for (var k = 0; k < 400; k++) {
      var shape = U.pick(r, ['slope', 'flat', 'precip', 'rising']);
      var th = {}, base = U.step(r, 10, 45);
      var fs = [250, 500, 1000, 2000, 4000, 8000];
      fs.forEach(function (f, i) {
        var v = base;
        if (shape === 'slope') v = base + i * U.pick(r, [5, 10]);
        if (shape === 'precip') v = i < 3 ? U.pick(r, [10, 15, 20]) : base + 20 + i * 5;
        if (shape === 'rising') v = base + (5 - i) * 5;
        if (shape === 'flat') v = base + U.pick(r, [0, 5]);
        th[f] = clamp(r5(v));
      });
      if (C.dotMargin(th) < 1.2) continue;
      var n = C.countDots(th);
      if (n < 5 || n > 95) continue;
      var ear = U.pick(r, ['right', 'left']);
      return {
        id: 'g:dots:' + seed, gen: { name: 'dots', seed: seed }, t: 'num', sec: 's9', c: 'count-dots', dom: 'ha',
        q: 'Count the audible dots for this ' + ear + ' ear (dots on or below the threshold line). What is the SII (%)?',
        media: { kind: 'dots', spec: { threshold: th, ear: ear } }, reveal: true,
        a: n, tol: 3, unit: '%',
        x: 'Audible dots = dots on or below (louder than) the threshold line; 100 dots total, so the count IS the SII %. This one is ' + n + '. Dr. Sutherland allowed a small window (46 vs 47 in class); the lab accepts +/-3. The chart after grading shows audible dots in red and inaudible in gray.',
        s: ['KM', 'T0910'], tier: 1
      };
    }
    return G.snr(seed);
  };
  G.dotsBand = function (seed) {
    var r = U.rng(seed);
    var sii = U.pick(r, [10, 20, 30, 40, 50, 60, 80]);
    var curve = U.pick(r, ['nu6', 'sentences']);
    var v = C.fig3(curve, sii);
    var bands = [[0, 30, 'Below 30%'], [30, 55, 'About 30-55%'], [55, 80, 'About 55-80%'], [80, 101, 'Above 80%']];
    // avoid values within 4 points of a band edge (figure read by eye)
    for (var i = 0; i < bands.length; i++) if (Math.abs(v - bands[i][0]) < 4 && bands[i][0] > 0) return G.dotsBand(seed + 11);
    var ans = bands.filter(function (b) { return v >= b[0] && v < b[1]; })[0][2];
    return {
      id: 'g:dotsBand:' + seed, gen: { name: 'dotsBand', seed: seed }, t: 'mc', sec: 's9', c: 'sii-to-speech', dom: 'ha',
      q: 'Using Figure 3 (SII vs % correct), a listener with an SII of <b>' + sii + '%</b> would be expected to score roughly what on ' + (curve === 'nu6' ? 'NU-6 monosyllabic words' : 'sentences/spondees') + ' in quiet?',
      media: { kind: 'img', src: 'assets/img/source/killion-mueller-fig3.webp', alt: 'Killion and Mueller Figure 3: SII versus percent correct for digits, sentences/spondees, IEEE words in sentences, and NU-6 words' },
      o: bands.map(function (b) { return { t: b[2], ok: b[2] === ans, w: '' }; }),
      x: 'Read up from ' + sii + '% on the x-axis to the ' + (curve === 'nu6' ? 'red NU-6 curve' : 'green sentences/spondees curve') + ' (about ' + Math.round(v) + '%). SII and % correct are NOT one-to-one; sentences benefit from context so they sit far above words. Class anchors: SII 21 -> ~20% NU-6, ~75% sentences; SII 46 -> ~60% NU-6, ~97% sentences (9/10). Estimates are for quiet only.',
      s: ['KM', 'T0910'], tier: 1
    };
  };

  // 12. Cross-check (guest slide 13)
  G.crossCheck = function (seed) {
    var r = U.rng(seed);
    var rows = [
      ['Elevated AC and BC thresholds without a significant gap', 'Normal (Type A)', null, 'Raised AC and BC suggest a sensorineural component', 'Elevated AC & BC with normal tymp -> consider an SN component (guest slide 13).'],
      ['Elevated AC, BC normal', 'Abnormal (Type B, normal volume)', null, 'Raised AC with normal BC suggests a conductive component', 'Elevated AC with abnormal tymp -> consider a conductive component.'],
      ['Normal thresholds', null, 'Present', 'Normal thresholds and present OAEs are generally consistent', 'Normal audiogram + present OAEs -> generally consistent.'],
      ['Normal thresholds', null, 'Absent', 'Normal thresholds with absent OAEs need further investigation', 'Normal audiogram + absent OAEs -> investigate ME status, noise exposure, cochlear status, test conditions.'],
      ['Elevated AC and BC thresholds without a significant gap', 'Normal (Type A)', 'Absent', 'Elevated thresholds with absent OAEs suggest cochlear involvement', 'Elevated thresholds + absent OAEs -> may be consistent with cochlear involvement.']
    ];
    var row = U.pick(r, rows);
    var answers = rows.map(function (x) { return x[3]; });
    return {
      id: 'g:crossCheck:' + seed, gen: { name: 'crossCheck', seed: seed }, t: 'mc', sec: 's6', c: 'cross-check', dom: 'dx',
      q: 'Cross-check: Audiogram shows <b>' + row[0] + '</b>' + (row[1] ? '; tympanometry <b>' + row[1] + '</b>' : '') + (row[2] ? '; OAEs <b>' + row[2] + '</b>' : '') + '. What is the best interpretation?',
      o: answers.map(function (a) { return { t: a, ok: a === row[3], w: rows.filter(function (x) { return x[3] === a; })[0][4] }; }),
      x: 'Guest slide 12-13: the strongest interpretation comes from agreement, or understanding the disagreement, between tests. ' + row[4],
      s: ['G12', 'G13'], tier: 1
    };
  };

  G.list = ['degreeValue', 'ptaDegree', 'ptaNumeric', 'typeAud', 'configAud', 'describe', 'slCalc', 'ptaSrt', 'wrs', 'reflex', 'tymp', 'snr', 'dots', 'dotsBand', 'crossCheck'];
  G.build = function (name, seed, opt) { var it = G[name](seed, opt); it.generated = true; it.pool = it.pool || 'b'; return it; };
  G.buildEar = buildEar;
  L.gen = G;
})(typeof window !== 'undefined' ? window : globalThis);
