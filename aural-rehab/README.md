# COMD 4590 Exam 1 Lab (v2)

Offline study lab for COMD 4590 Aural Rehabilitation (Dr. Whitney Sutherland), Exam 1 (scheduled 9/29/2026).
No accounts or paid APIs. The downloaded lab works offline; the hosted edition loads from its URL. Progress stays in each person's browser and is never uploaded to a server.

September 24 update: open **Exam 1 · Sept 24** for twelve focused chapters, three reproducible mock forms plus further generated forms, audiograms, short answers and a miss queue. The original 352 questions and images remain; 61 new source-linked questions bring the bank to 413.

September 25 question-style repair: the full 284-item multiple-choice bank was checked for answer-length and punctuation clues. Implausible distractors were replaced with adjacent course concepts while question IDs, correct answer positions and saved progress remain stable. See `docs/QUESTION_STYLE_AUDIT_2026-09-25.md`.

**Every question gives immediate feedback.** MC/T/F checks when you select an answer. Graph parts check as you select them. Numeric/multiple-response tasks have a per-question check action. Written work reveals its rubric when you click **Check this answer now**, then you honestly rate your own response. Your first answer stays scored; no full-exam submission is needed to see corrections.

## Open it
1. Unzip the folder anywhere.
2. Double-click `index.html` (Chrome or Edge recommended; tested in Chromium).
   - Optional: serve it locally instead: `python3 -m http.server 8000` inside the folder, then open `http://localhost:8000`. Progress there is stored separately from the double-click copy.
3. Back up progress any time from **Data > Download progress file**; restore with **Data > Import**.

## What is inside
| Page | Use |
|---|---|
| Home | Status, resume, quick links, section cards |
| Guide | 9 sections, 60 source-cited cards, trap boxes, source-conflict boxes, figures |
| Exam 1 · Sept 24 | Source-focused chapters, 52 MC/T/F + 2 graphs + 2 written tasks, immediate correction, full autosave, miss review |
| Practice | Section, concept or quick-start sets; choose confidence before answering, immediate feedback, hints and automatic retries |
| Review | Smart queue built from your misses, mock misses, spaced review and old-lab misses |
| Cases | 9 linked case blocks (history + audiogram/tymp/ABR + questions in reading order) |
| Boss | 4 integration drills of 32-36 questions |
| Mock | Original 70/35-question mixed sets, immediate feedback, flag/navigate/resume, domain results, remediation |
| Progress | Concept status, calibration, boss history |
| Sutherland | Evidence about her testing, sorted into direct statements / Ethan's reports / 4190 history / lab design choices |
| Sources | Every source code, file and how many items cite it |
| Data | Export, import (v2 and old-lab files), reset |

Keyboard: `1`-`9` pick an option, `Enter` goes to the next question after feedback.

## The one number to never miss
Adopted degree scale (8/27 announcement; TEST 1 study guide p.30): 0-25 WNL | 30-40 mild | 45-55 moderate | 60-70 moderately severe | 75-90 severe | greater than 90 profound. **90 is severe.** Gaps (26-29, 41-44, 56-59, 71-74) are undefined and never scored.

## Moving progress from the old lab
Keep using the same address and browser profile to resume automatically. Answers, drafts, flags, question position and histories save as you work. Each classmate has an independent record. A hosted URL, another device, or another browser has separate storage: use **Data → Download progress file**, then import it at the new location. Clearing browser data removes that browser's copy; exported JSON is the recovery/transfer copy. No cloud synchronization is implied.

The update keeps the exact `comd4590-lab-v2` key. Before its first write over existing data it retains an exact raw recovery copy under `comd4590-lab-v2-before-exam1`; Data can download that copy. Storage failures are reported, and another tab's changes are not silently overwritten by this release.

Data > Import accepts the old full backup (`comd4590-progress-backup-v1`) and the Lecture 2 drill file (`pathology-progress-backup-2026-09-21.json`). Old results become review priorities only; v2 mastery must be earned in v2. Details: `docs/CHANGES.md`.

## Docs
- `docs/EXAM1_RELEASE_2026-09-24.md`: current scope, exact announced counts versus practice choices, preservation and verification receipt.
- `docs/SOURCE_COVERAGE_LEDGER.md`: every source, how it was reviewed, what it contributed, what could not be reviewed, and all flagged conflicts.
- `docs/CONVENTIONS.md`: every number the lab scores, with sources and boundary tests.
- `docs/PROFESSOR_STYLE_MAPPING.md`: evidence tiers and how they shaped the lab.
- `docs/CHANGES.md`: audit of the original lab, what changed, migration.
- `docs/VALIDATION.md`: test results and limitations.

## Run the checks
`./tests/run-all.sh` (Node 18+; the browser test needs Playwright with Chromium and Python 3).

## Files
```
index.html            entry point
css/app.css           dark theme, responsive
js/core/              util, conventions (single source of truth), svg renderers, generators, store, engine
js/ui/item.js         question renderer (all types)
js/app.js             pages and routing
js/data/              concepts, guide, sources, items per section, cases + boss definitions, dots data
assets/img/           syndrome photos and pedigrees (from Lecture 2 slides), Killion & Mueller Fig 3
docs/                 ledger, conventions, style mapping, changes, validation
tests/                content validator, unit tests, browser tests, screenshots
```
Original course images and referenced handouts are retained in the release. The lab is an unofficial course study aid, not an instructor-authored exam.
