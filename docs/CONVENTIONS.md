# Numerical conventions used by the lab

All of these live in one file, `js/core/conventions.js`. Every generator, answer key, explanation, case and test reads from it, so a convention can only be wrong in one place.

## Degree of hearing loss (adopted)

| Range (dB HL) | Label |
|---|---|
| 0-25 (and better) | Within normal limits |
| 30-40 | Mild |
| 45-55 | Moderate |
| 60-70 | Moderately severe |
| 75-90 | Severe |
| greater than 90 | Profound |

Source: Dr. Sutherland's 8/27/2026 Moodle announcement ("use these ... not the one from today's slide deck") and the typed list on TEST 1 AUDIOLOGY STUDY GUIDE p.30. Ethan confirmed this replacement is the standard for the class.

- **90 dB HL = severe.** Profound means greater than 90 (so a PTA of 90.3 or 91.7 is profound).
- **Gaps** (26-29, 41-44, 56-59, 71-74) are undefined on the adopted scale. Single thresholds are plotted in 5-dB steps and never land there. A calculated PTA can. The lab never scores a gap value; generators build PTAs that are exact multiples of 5, and the validator rejects any case audiogram whose PTA lands in a gap. When a worked example shows a gap PTA, the text says "undefined on the adopted scale".
- **Superseded scale** (Lecture 1 slide 16 = textbook Table 1-2: slight-mild child 21-40 / adult 26-40; mild-moderate 41-55; moderate 56-70; severe 71-90; profound 91+) appears only as the named trap in explanations.
- **Not adopted:** the AI-typed 26-40 / 41-55 / 56-70 / 71-90 / 90+ list on study guide pp.25-26.

### Boundary coverage (tested)

`tests/unit.cjs` checks every endpoint: 25 WNL, 30 mild, 40 mild, 45 moderate, 55 moderate, 60 mod-severe, 70 mod-severe, 75 severe, 90 severe, 95 profound, plus 90.3 and 91.7 profound and twelve gap values returning "undefined". `tests/validate-content.cjs` generates 9,000 degree items and confirms all ten boundary values appear and every key matches the scale. `tests/browser.cjs` answers a 90 dB item "Profound" in the real UI and confirms it is graded wrong with Severe keyed. Hand-written boundary items: s2.scale2-5, c2.1 (PTA 45), c3.2 (30), c4.2 (25), c7.1 (95 vs 90), c8.1 (60).

## Other conventions

| Convention | Rule used | Source | Scoring guard |
|---|---|---|---|
| PTA | mean of 500, 1000, 2000 Hz | Lecture 1 slide 16 | 4-frequency average offered only as a distractor |
| Type | CHL: AC impaired, BC normal, gap. SNHL: both impaired, no gap. Mixed: both impaired, AC worse. BC never poorer than AC | Lecture 1 slide 18; guest slides 20, 25, 30; 4190 | No numeric gap cutoff exists in the sources; scored items use gaps of 20+ dB or 0-5 dB only |
| Configuration | flat, sloping, precipitous (L1 s17); rising, cookie-bite, notched (guest s8) | as listed | Generated shapes are unambiguous (checked by `configOk`) |
| Symbols | Right red O (AC), < (BC), [ (masked BC); left blue X, >, ]; AC connected, BC never connected | 4190 key; Ethan's corrections | |
| Symmetry | Ethan's handwritten ">15" note | 4190 symbol sheet | Asymmetric items differ by 25+ dB; symmetric by 0-5 |
| WRS | 90-100 WNL; 75-90 slight; 60-75 moderate; 50-60 poor; <50 very poor; 4% per word; 25-40 dB SL | 4190 Speech slides 16-17 | Endpoints 90/75/60/50 never scored |
| SRT-PTA agreement | within 10 dB | 4190 Speech slide 10 | |
| Reflex SL | reflex HL minus AC threshold at the same frequency; normal 70-100, reduced <60 (cochlear), elevated >100 | 4190 Ch 6; forms | 60-69 never scored; excluded from mocks |
| Tympanometry | see ledger conflict row | 4190 sheet vs guest slide 14 | Scored values: child ECV 0.4-0.8, large >= 1.5, small < 0.2; pressure normal -100..+50, C at <= -200; As PC <= 0.15; Ad child >= 1.4, adult >= 2.2 |
| SNR | signal minus noise | Lecture 3 slide 60 | |
| RT | decay of 60 dB; optimal <= 0.3 s; typical 0.4-1.2 s | Lecture 3 slide 62 | |
| Count-the-dots | dots on or below the threshold line; count = SII %; 100 dots = 60 dB SPL (~45 dB HL) | Killion & Mueller 2010; 9/10 class | Generated audiograms rejected if any dot sits within 1.2 dB of the line; tolerance +/-3 (class allowed 46 vs 47) |
| SII to % correct | Figure 3 curves | Killion & Mueller Fig 3 | Read by eye; only band answers (below 30 / 30-55 / 55-80 / above 80) and never within 4 points of a band edge |
