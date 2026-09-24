/* SVG renderers: audiogram (paper card, red O right / blue X left), count-the-dots chart,
   tympanogram, ABR schematic, BTE diagram. All return SVG markup strings. */
(function (root) {
  'use strict';
  var L = root.L = root.L || {};
  var RED = '#d0021b', BLUE = '#1f4fd1', INK = '#1b1b1b', GRID = '#b9b9b9';

  function octX(f, x0, w, fLo, fHi) {
    var o = Math.log(f / fLo) / Math.LN2, span = Math.log(fHi / fLo) / Math.LN2;
    return x0 + (o / span) * w;
  }

  function symbol(kind, x, y) {
    switch (kind) {
      case 'O': return '<circle cx="' + x + '" cy="' + y + '" r="6.5" fill="none" stroke="' + RED + '" stroke-width="2.2"/>';
      case 'X': return '<path d="M' + (x - 6) + ' ' + (y - 6) + 'L' + (x + 6) + ' ' + (y + 6) + 'M' + (x + 6) + ' ' + (y - 6) + 'L' + (x - 6) + ' ' + (y + 6) + '" stroke="' + BLUE + '" stroke-width="2.4"/>';
      case '<': return '<path d="M' + (x - 2) + ' ' + (y - 7) + 'L' + (x - 10) + ' ' + y + 'L' + (x - 2) + ' ' + (y + 7) + '" fill="none" stroke="' + RED + '" stroke-width="2.2"/>';
      case '>': return '<path d="M' + (x + 2) + ' ' + (y - 7) + 'L' + (x + 10) + ' ' + y + 'L' + (x + 2) + ' ' + (y + 7) + '" fill="none" stroke="' + BLUE + '" stroke-width="2.2"/>';
      case '[': return '<path d="M' + (x - 4) + ' ' + (y - 7) + 'L' + (x - 9) + ' ' + (y - 7) + 'L' + (x - 9) + ' ' + (y + 7) + 'L' + (x - 4) + ' ' + (y + 7) + '" fill="none" stroke="' + RED + '" stroke-width="2.2"/>';
      case ']': return '<path d="M' + (x + 4) + ' ' + (y - 7) + 'L' + (x + 9) + ' ' + (y - 7) + 'L' + (x + 9) + ' ' + (y + 7) + 'L' + (x + 4) + ' ' + (y + 7) + '" fill="none" stroke="' + BLUE + '" stroke-width="2.2"/>';
    }
    return '';
  }
  function nrArrow(x, y, color, dir) { // no response arrow pointing down and outward
    var dx = dir === 'left' ? -8 : 8;
    return '<path d="M' + x + ' ' + (y + 6) + 'L' + (x + dx) + ' ' + (y + 16) + 'M' + (x + dx) + ' ' + (y + 16) + 'l' + (-dx / 2) + ' 0 M' + (x + dx) + ' ' + (y + 16) + 'l0 -5" stroke="' + color + '" stroke-width="2" fill="none"/>';
  }

  /* spec: { right:{ac:{250:..}, bc:{..}, bcMasked:bool, nr:{8000:true}}, left:{...}, title, caption, showLegend }
     thresholds in dB HL; frequencies may include 750/1500/3000/6000. */
  function audiogram(spec) {
    spec = spec || {};
    var W = 460, H = 420, x0 = 58, y0 = 44, w = 370, h = 320, dbLo = -10, dbHi = 120;
    var fLo = 250, fHi = 8000;
    function Y(db) { return y0 + (db - dbLo) / (dbHi - dbLo) * h; }
    function X(f) { return octX(f, x0, w, fLo, fHi); }
    var s = [];
    s.push('<svg class="aud" viewBox="0 0 ' + W + ' ' + H + '" role="img" aria-label="' + L.util.esc(spec.aria || 'Audiogram') + '" xmlns="http://www.w3.org/2000/svg">');
    s.push('<rect x="0" y="0" width="' + W + '" height="' + H + '" rx="10" fill="#fbfaf6"/>');
    if (spec.title) s.push('<text x="' + (W / 2) + '" y="20" text-anchor="middle" font-size="14" font-weight="700" fill="' + INK + '">' + L.util.esc(spec.title) + '</text>');
    // shaded normal band 0-25 (light, for orientation only)
    if (spec.shadeNormal) s.push('<rect x="' + x0 + '" y="' + Y(-10) + '" width="' + w + '" height="' + (Y(25) - Y(-10)) + '" fill="#e9f3e6"/>');
    // grid
    for (var db = dbLo; db <= dbHi; db += 10) {
      s.push('<line x1="' + x0 + '" y1="' + Y(db) + '" x2="' + (x0 + w) + '" y2="' + Y(db) + '" stroke="' + (db === 0 ? '#777' : GRID) + '" stroke-width="' + (db === 0 ? 1.4 : 0.8) + '"/>');
      s.push('<text x="' + (x0 - 8) + '" y="' + (Y(db) + 4) + '" text-anchor="end" font-size="11" fill="' + INK + '">' + db + '</text>');
    }
    [250, 500, 1000, 2000, 4000, 8000].forEach(function (f) {
      s.push('<line x1="' + X(f) + '" y1="' + y0 + '" x2="' + X(f) + '" y2="' + (y0 + h) + '" stroke="' + GRID + '" stroke-width="0.9"/>');
      s.push('<text x="' + X(f) + '" y="' + (y0 - 8) + '" text-anchor="middle" font-size="11" fill="' + INK + '">' + (f >= 1000 ? (f / 1000) + 'k' : f) + '</text>');
    });
    [750, 1500, 3000, 6000].forEach(function (f) {
      s.push('<line x1="' + X(f) + '" y1="' + y0 + '" x2="' + X(f) + '" y2="' + (y0 + h) + '" stroke="' + GRID + '" stroke-width="0.6" stroke-dasharray="3 4"/>');
    });
    s.push('<text x="16" y="' + (y0 + h / 2) + '" transform="rotate(-90 16 ' + (y0 + h / 2) + ')" text-anchor="middle" font-size="11" fill="' + INK + '">Hearing level (dB HL)</text>');
    s.push('<text x="' + (x0 + w / 2) + '" y="' + (y0 + h + 22) + '" text-anchor="middle" font-size="11" fill="' + INK + '">Frequency (Hz)</text>');
    s.push('<rect x="' + x0 + '" y="' + y0 + '" width="' + w + '" height="' + h + '" fill="none" stroke="#555" stroke-width="1.2"/>');

    function ear(e, side) {
      if (!e) return;
      var color = side === 'right' ? RED : BLUE;
      var acSym = side === 'right' ? 'O' : 'X';
      var bcSym = e.bcMasked ? (side === 'right' ? '[' : ']') : (side === 'right' ? '<' : '>');
      var nr = e.nr || {};
      if (e.ac) {
        var fs = Object.keys(e.ac).map(Number).sort(function (a, b) { return a - b; });
        var path = [];
        fs.forEach(function (f) { if (!nr[f]) path.push((path.length ? 'L' : 'M') + X(f).toFixed(1) + ' ' + Y(e.ac[f]).toFixed(1)); });
        if (path.length > 1) s.push('<path d="' + path.join('') + '" fill="none" stroke="' + color + '" stroke-width="1.6"' + (side === 'left' ? ' stroke-dasharray="6 3"' : '') + '/>');
        fs.forEach(function (f) {
          s.push(symbol(acSym, X(f), Y(e.ac[f])));
          if (nr[f]) s.push(nrArrow(X(f), Y(e.ac[f]), color, side === 'right' ? 'left' : 'right'));
        });
      }
      if (e.bc) {
        Object.keys(e.bc).map(Number).forEach(function (f) {
          var off = side === 'right' ? -5 : 5; // offset so symbols sit beside the frequency line like a hand-plotted form
          s.push(symbol(bcSym, X(f) + off, Y(e.bc[f])));
        });
      }
    }
    ear(spec.right, 'right');
    ear(spec.left, 'left');
    if (spec.showLegend !== false) {
      var ly = H - 18;
      s.push('<g font-size="11" fill="' + INK + '">');
      s.push(symbol('O', 70, ly - 4) + '<text fill="' + INK + '" x="82" y="' + ly + '">Right AC</text>');
      s.push(symbol('X', 150, ly - 4) + '<text fill="' + INK + '" x="162" y="' + ly + '">Left AC</text>');
      s.push(symbol(spec.right && spec.right.bcMasked ? '[' : '<', 236, ly - 4) + '<text fill="' + INK + '" x="240" y="' + ly + '">Right BC</text>');
      s.push(symbol(spec.left && spec.left.bcMasked ? ']' : '>', 300, ly - 4) + '<text fill="' + INK + '" x="318" y="' + ly + '">Left BC</text>');
      s.push('</g>');
    }
    s.push('</svg>');
    return s.join('');
  }

  /* Count-the-dots chart: 100 dots from the Killion & Mueller (2010) form, optional threshold line(s). */
  function dotsChart(spec) {
    spec = spec || {};
    var W = 460, H = 380, x0 = 50, y0 = 36, w = 380, h = 300, dbLo = -10, dbHi = 110, fLo = 125, fHi = 8000;
    function Y(db) { return y0 + (db - dbLo) / (dbHi - dbLo) * h; }
    function Xo(o) { return x0 + o / 6 * w; }
    function X(f) { return Xo(Math.log(f / fLo) / Math.LN2); }
    var s = ['<svg class="aud" viewBox="0 0 ' + W + ' ' + H + '" role="img" aria-label="Count-the-dots audiogram" xmlns="http://www.w3.org/2000/svg">'];
    s.push('<rect width="' + W + '" height="' + H + '" rx="10" fill="#fbfaf6"/>');
    for (var db = 0; db <= 100; db += 10) {
      s.push('<line x1="' + x0 + '" y1="' + Y(db) + '" x2="' + (x0 + w) + '" y2="' + Y(db) + '" stroke="' + GRID + '" stroke-width="0.8"/>');
      if (db % 20 === 0) s.push('<text x="' + (x0 - 6) + '" y="' + (Y(db) + 4) + '" text-anchor="end" font-size="11" fill="' + INK + '">' + db + '</text>');
    }
    [250, 500, 1000, 2000, 4000].forEach(function (f) {
      s.push('<line x1="' + X(f) + '" y1="' + y0 + '" x2="' + X(f) + '" y2="' + (y0 + h) + '" stroke="' + GRID + '"/>');
      s.push('<text x="' + X(f) + '" y="' + (y0 - 8) + '" text-anchor="middle" font-size="11" fill="' + INK + '">' + f + '</text>');
    });
    s.push('<rect x="' + x0 + '" y="' + y0 + '" width="' + w + '" height="' + h + '" fill="none" stroke="#555"/>');
    var th = spec.threshold, dots = L.DOTS || [];
    dots.forEach(function (d) {
      var aud = th ? d[1] >= L.conv.thrAtOct(th, d[0]) - 0.0001 : true;
      var fill = spec.reveal && th ? (aud ? '#b3001b' : '#c9c9c9') : '#9e1b22';
      s.push('<circle cx="' + Xo(d[0]).toFixed(1) + '" cy="' + Y(d[1]).toFixed(1) + '" r="3.6" fill="' + fill + '"/>');
    });
    function line(t, color, sym) {
      var fs = Object.keys(t).map(Number).sort(function (a, b) { return a - b; });
      var p = fs.map(function (f, i) { return (i ? 'L' : 'M') + X(f).toFixed(1) + ' ' + Y(t[f]).toFixed(1); }).join('');
      s.push('<path d="' + p + '" fill="none" stroke="' + color + '" stroke-width="1.8"/>');
      fs.forEach(function (f) { s.push(symbol(sym, X(f), Y(t[f]))); });
    }
    if (th) line(th, spec.ear === 'left' ? BLUE : RED, spec.ear === 'left' ? 'X' : 'O');
    s.push('<text x="' + (x0 + w / 2) + '" y="' + (H - 12) + '" text-anchor="middle" font-size="10.5" fill="#444">100 dots = speech at 60 dB SPL (~45 dB HL). Audible = on or below the line.</text>');
    s.push('</svg>');
    return s.join('');
  }

  /* Tympanogram: {peak:bool, pc, pressure, ecv, label} */
  function tympanogram(t) {
    var W = 420, H = 300, x0 = 56, y0 = 30, w = 330, h = 200, pLo = -400, pHi = 200, cMax = t.cMax || (t.pc > 1.6 ? 3 : 2);
    function X(p) { return x0 + (p - pLo) / (pHi - pLo) * w; }
    function Y(c) { return y0 + h - c / cMax * h; }
    var s = ['<svg class="aud" viewBox="0 0 ' + W + ' ' + H + '" role="img" aria-label="Tympanogram" xmlns="http://www.w3.org/2000/svg">'];
    s.push('<rect width="' + W + '" height="' + H + '" rx="10" fill="#fbfaf6"/>');
    for (var p = pLo; p <= pHi; p += 100) {
      s.push('<line x1="' + X(p) + '" y1="' + y0 + '" x2="' + X(p) + '" y2="' + (y0 + h) + '" stroke="' + GRID + '" stroke-width="' + (p === 0 ? 1.3 : 0.7) + '"/>');
      s.push('<text x="' + X(p) + '" y="' + (y0 + h + 16) + '" text-anchor="middle" font-size="11" fill="' + INK + '">' + p + '</text>');
    }
    for (var c = 0; c <= cMax + 0.001; c += 0.5) {
      s.push('<line x1="' + x0 + '" y1="' + Y(c) + '" x2="' + (x0 + w) + '" y2="' + Y(c) + '" stroke="' + GRID + '" stroke-width="0.7"/>');
      s.push('<text x="' + (x0 - 6) + '" y="' + (Y(c) + 4) + '" text-anchor="end" font-size="11" fill="' + INK + '">' + c.toFixed(1) + '</text>');
    }
    s.push('<rect x="' + x0 + '" y="' + y0 + '" width="' + w + '" height="' + h + '" fill="none" stroke="#555"/>');
    var pts = [];
    for (var q = pLo; q <= pHi; q += 5) {
      var v = t.peak ? t.pc * Math.exp(-Math.pow((q - t.pressure) / 55, 2)) : 0.03 + 0.00004 * (q - pLo);
      pts.push((pts.length ? 'L' : 'M') + X(q).toFixed(1) + ' ' + Y(Math.min(v, cMax)).toFixed(1));
    }
    s.push('<path d="' + pts.join('') + '" fill="none" stroke="#0b6e4f" stroke-width="2.4"/>');
    s.push('<text x="' + (x0 + w / 2) + '" y="' + (y0 + h + 34) + '" text-anchor="middle" font-size="11" fill="' + INK + '">Ear-canal pressure (daPa)</text>');
    s.push('<text x="14" y="' + (y0 + h / 2) + '" transform="rotate(-90 14 ' + (y0 + h / 2) + ')" text-anchor="middle" font-size="11" fill="' + INK + '">Compliance (ml)</text>');
    var info = 'ECV ' + t.ecv.toFixed(1) + ' ml' + (t.peak ? ' | Peak ' + t.pc.toFixed(2) + ' ml at ' + t.pressure + ' daPa' : ' | No peak');
    s.push('<text x="' + (W / 2) + '" y="' + (H - 14) + '" text-anchor="middle" font-size="12" font-weight="700" fill="' + INK + '">' + info + '</text>');
    if (t.label) s.push('<text x="' + (W / 2) + '" y="18" text-anchor="middle" font-size="12" font-weight="700" fill="' + INK + '">' + L.util.esc(t.label) + '</text>');
    s.push('</svg>');
    return s.join('');
  }

  /* ABR schematic. traces: [{label, shift(ms), amp(0-1), color, noWaves:bool}] ; labels waves I, III, V */
  function abr(spec) {
    var traces = spec.traces || [{ label: 'Normal', shift: 0, amp: 1 }];
    var W = 460, rowH = 90, H = 50 + rowH * traces.length, x0 = 70, w = 360, tMax = 10;
    function X(t) { return x0 + t / tMax * w; }
    var peaks = [[1.6, 0.55, 'I'], [2.7, 0.35, 'II'], [3.8, 0.6, 'III'], [4.9, 0.5, 'IV'], [5.7, 0.95, 'V']];
    var s = ['<svg class="aud" viewBox="0 0 ' + W + ' ' + H + '" role="img" aria-label="ABR waveforms" xmlns="http://www.w3.org/2000/svg">'];
    s.push('<rect width="' + W + '" height="' + H + '" rx="10" fill="#fbfaf6"/>');
    for (var t = 0; t <= tMax; t += 2) {
      s.push('<line x1="' + X(t) + '" y1="24" x2="' + X(t) + '" y2="' + (H - 26) + '" stroke="' + GRID + '" stroke-width="0.6"/>');
      s.push('<text x="' + X(t) + '" y="' + (H - 10) + '" text-anchor="middle" font-size="11" fill="' + INK + '">' + t + ' ms</text>');
    }
    traces.forEach(function (tr, i) {
      var base = 50 + i * rowH + rowH / 2, sc = 34 * (tr.amp === undefined ? 1 : tr.amp), d = [];
      for (var q = 0; q <= tMax; q += 0.05) {
        var v = 0;
        if (!tr.noWaves) peaks.forEach(function (p) { v += p[1] * Math.exp(-Math.pow((q - p[0] - (tr.shift || 0)) / 0.22, 2)); v -= 0.25 * p[1] * Math.exp(-Math.pow((q - p[0] - (tr.shift || 0) - 0.45) / 0.3, 2)); });
        v += 0.04 * Math.sin(q * 9 + i);
        d.push((d.length ? 'L' : 'M') + X(q).toFixed(1) + ' ' + (base - v * sc).toFixed(1));
      }
      s.push('<path d="' + d.join('') + '" fill="none" stroke="' + (tr.color || '#222') + '" stroke-width="1.8"/>');
      s.push('<text x="8" y="' + (base + 4) + '" font-size="11" fill="' + INK + '">' + L.util.esc(tr.label) + '</text>');
      if (!tr.noWaves && spec.labels !== false) [0, 2, 4].forEach(function (k) {
        var p = peaks[k]; s.push('<text x="' + X(p[0] + (tr.shift || 0)) + '" y="' + (base - p[1] * sc - 6) + '" text-anchor="middle" font-size="11" font-weight="700" fill="' + INK + '">' + p[2] + '</text>');
      });
    });
    s.push('</svg>');
    return s.join('');
  }

  /* BTE diagram with numbered callouts in a column (labels optional, for matching items). */
  function bte(labelled) {
    var parts = [['1', 'Microphone', 152, 62], ['5', 'Earhook', 112, 58], ['2', 'Amplifier / digital processor', 180, 122], ['4', 'Battery', 205, 165],
      ['3', 'Receiver', 160, 182], ['6', 'Earmold tubing', 78, 135], ['7', 'Earmold', 52, 200]];
    var W = labelled ? 520 : 360;
    var s = ['<svg class="aud" viewBox="0 0 ' + W + ' 260" role="img" aria-label="Behind-the-ear hearing aid diagram" xmlns="http://www.w3.org/2000/svg">'];
    s.push('<rect width="' + W + '" height="260" rx="10" fill="#fbfaf6"/>');
    s.push('<path d="M140 50 Q175 30 205 55 L222 190 Q205 222 175 212 L150 70 Z" fill="#d9d4c7" stroke="#555" stroke-width="2"/>');
    s.push('<path d="M142 55 Q120 40 105 62 Q95 80 90 100" fill="none" stroke="#777" stroke-width="7" stroke-linecap="round"/>');
    s.push('<path d="M90 100 Q70 150 62 185" fill="none" stroke="#9fc4d8" stroke-width="5"/>');
    s.push('<path d="M40 180 Q50 170 72 178 Q84 196 70 214 Q48 222 38 205 Z" fill="#e7c9b4" stroke="#555" stroke-width="2"/>');
    s.push('<circle cx="152" cy="62" r="5" fill="#333"/><rect x="165" y="110" width="30" height="24" rx="3" fill="#6b8f71"/>');
    s.push('<rect x="151" y="175" width="18" height="14" rx="2" fill="#8a6d5a"/><circle cx="205" cy="165" r="11" fill="#c9a227" stroke="#555"/>');
    var cx = 285;
    parts.sort(function (a, b) { return a[0] - b[0]; }).forEach(function (p, i) {
      var cy = 30 + i * 32;
      s.push('<line x1="' + (cx - 11) + '" y1="' + cy + '" x2="' + p[2] + '" y2="' + p[3] + '" stroke="#1b1b1b" stroke-width="1" stroke-dasharray="3 2"/>');
      s.push('<circle cx="' + cx + '" cy="' + cy + '" r="11" fill="#1b1b1b"/><text x="' + cx + '" y="' + (cy + 4) + '" text-anchor="middle" font-size="12" font-weight="700" fill="#fff">' + p[0] + '</text>');
      if (labelled) s.push('<text x="' + (cx + 18) + '" y="' + (cy + 4) + '" font-size="12" fill="#1b1b1b">' + p[1] + '</text>');
    });
    s.push('</svg>');
    return s.join('');
  }

  L.svg = { audiogram: audiogram, dotsChart: dotsChart, tympanogram: tympanogram, abr: abr, bte: bte, RED: RED, BLUE: BLUE };
})(typeof window !== 'undefined' ? window : globalThis);
