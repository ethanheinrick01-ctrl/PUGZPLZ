# What changed from the supplied lab, and why

The supplied lab is untouched in the original package. v2 is a separate folder with its own storage key.

## Audit of the supplied lab (17 modules, 76 concepts, 291 activities, 70-Q mock, Boss 35/34)

Every question in the quiz bank and modules was dumped and solved independently.

### Content problems
- **Coverage imbalance.** 195 of 291 activities (67%) were pathology; hearing aids 7, pediatric fitting 9, device check 5, classroom 11, audibility 5, guest 7, Lecture 1 overview 8. The syllabus gives etiology 3 class days, HA/HAT 3, guest 2, overview 2. Many Lecture 3 learning outcomes had no items (telecoil, candidacy variables, QC measures, NOAH, WDRC, NAL vs DSL, CROS/BAHA, HAT types, SIFTER/LIFE/CHAPS, LA law conditions, earmold replacement intervals).
- **Template-generated pathology** (identify / cause / mechanism / type / profile x 36 conditions) with wrong or ambiguous keys:
  - toxo-mechanism: the distractor "many affected infants are asymptomatic at birth" is TRUE (slide 28: 90% asymptomatic); "CNS involvement" also defensible.
  - cmv-mechanism: "retinal disease and cognitive deficits" and "growth restriction" are true of CMV per 9/01 notes, so several options are correct.
  - apert-type / fas-type: key "usually conductive; SNHL can occur" vs distractor "conductive": ambiguous.
  - turner / cdls type items hinge on contested "mixed" wording; Turner conflicts across decks.
  - "profile"/"mechanism" answers were author meta-phrases ("... are also discussed", "Named viral example in the postnatal list"), testing memory of the item writer's wording.
  - Picture questions printed the identifying clue in the prompt, so the image was decorative.
- **Degree items only used interior values** (20, 35, 50, 65, 80, 95); no boundary tests even though the adopted scale's endpoints are the risky part; 90 = severe never tested.
- **Cueing distractors**: absurd values (120 dB HL PTA, "95 dB difference", 135 dB SL, "word score identifies the genotype"); 12 of 16 mock T/F answers were "False" with absolute words (always/must/only).
- **Explanations** pasted whole lesson paragraphs; no per-distractor feedback.
- **Mock** was a fixed 70 drawn verbatim from the practice bank (memorizable); four diagram-position items revealed each other.
- Old case SVG colored the ears green/purple, violating red-O right / blue-X left.

### Code problems
- Confidence was chosen after the answer was revealed (calibration meaningless).
- Teach-back self-rating "Got it" counted as correct toward mastery.
- Mock answers updated mastery streaks; mock history not stored (best score only).
- No import (export only); the v1 export could not be re-imported.
- localStorage writes unguarded (throws when storage is blocked).
- Mastery root derived by string hack (`id.replace(/^.*--/, '')`).
- Mock had no back/flag/review/change-answer.
- "Clear quiz scores" had no confirmation.

## What v2 does instead

| Area | v2 |
|---|---|
| Structure | 9 sections mapped to the syllabus: AR foundations; audiogram + numbers; etiology frameworks; infections/peri/postnatal; syndromes; guest interpretation; hearing aids; pediatric amplification; HAT/classroom/SII |
| Content | 351 hand-written items (305 standalone + 46 inside 9 linked case blocks; 234 MC, 42 TF, 38 select-all, 19 match incl. a BTE labeling diagram, 3 order, 3 numeric, 4 multi-part, 8 teach-back) across 101 concepts, every one with a source code, an evidence tier and a rationale for every distractor; 15 generators producing unlimited fresh audiograms, tymps, PTAs, SNR, dots and boundary items |
| Conventions | One file (`js/core/conventions.js`); boundary values tested; gaps never scored; conflicts shown in red boxes |
| Guide | 60 cards with tier badges, tempting-mistake boxes, conflict boxes, source chips; audiogram, BTE and count-the-dots figures |
| Visual ID | 22 syndrome photos + FAS diagram with no clue text in the prompt; pedigree images cropped so the title no longer gives the answer |
| Practice | Confidence locked before feedback; hint button (assisted answers never count toward mastery); wrong -> retry after 2, low-confidence correct -> after 4, with a fresh variant or a different question on the same concept |
| Mastery | Last two answers correct, on two different questions, latest medium/high, no hint. High-confidence miss = misconception until two correct follow. Teach-back and mock answers never count. |
| Review | Smart queue: misconceptions > mock misses > last-time misses > spaced review (1/2/4/7 days) > old-lab misses > untouched |
| Mock | 70 or 35, feedback withheld until submit, navigator/flag/change/clear, resume after reload, domain breakdown, per-question review with rationales, one-click remediation; held-out items and generated items keep it fresh |
| Boss | 4 integration drills (32-36 questions each): etiology->audiogram->management; cross-check battery; devices & classroom; numbers gauntlet (all boundaries). No hints; scored out of the full run; only completed runs set a best score |
| Data | Single guarded key `comd4590-lab-v2`; export/import (merge, de-duplicated); legacy import; double-confirmed reset |
| UI | Dark theme, keyboard (1-9 choose, Enter next), responsive to 390 px, offline, no external requests |

## Progress migration

- v2 never writes, renames or deletes the old keys (`comd4590-study-lab-progress-v1`, `comd4590-guided-progress-v1`, `comd4590-lecture2-drill-v1`); the old lab keeps working.
- On its first run, if the browser can see those keys (same storage origin as the old lab; Chromium treats local files as one origin), v2 reads them once and records them as a **prior signal** (tested).
- Otherwise import through **Data > Import**: v1 full backup (`comd4590-progress-backup-v1`), the Lecture 2 drill export (`{records, concepts}`, e.g. `pathology-progress-backup-2026-09-21.json`), or v1 guided progress.
- **Limitation (deliberate):** old results never become v2 mastery. v1 recorded confidence after feedback, some v1 keys were wrong, and v1 item ids do not map one-to-one to v2 questions. Old misses push those concepts up the review queue ("Old-lab miss"); old "mastered" flags are kept for reference only.
- Browsers keep storage per origin (and some browsers per folder for local files): a copy opened through a local server or another browser has separate storage. Use Export/Import to move progress.
