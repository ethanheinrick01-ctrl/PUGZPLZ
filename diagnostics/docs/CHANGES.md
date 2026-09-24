# What changed from the original lab (v1) to v2

v1 is the lab in the handoff package (`STUDY LAB/`). It was left untouched. v2 is a new build in its own folder with its own storage key.

## What v1 got right

- Offline, framework-free, file:// safe. v2 keeps all of that.
- The mastery rule (two consecutive correct on distinct roots, latest at Medium or High), the retry distances (2 and 4), and misconception flags on high-confidence errors. v2 keeps the same rules and tests them.
- It removed the "prophecy" material from the Gonsoulin codex. v2 does not add it back. Historical COMD 4382 material is labeled historical wherever it appears.
- Careful storage compatibility work. v2 reads v1's two keys, never writes or deletes them, and carries v1 progress forward (see Migration below).

## What v1 got wrong, and what v2 does instead

| Problem in v1 (measured, not guessed) | Why it matters | v2 |
| --- | --- | --- |
| **Answer-length cue.** On v1's 109 unique multiple-choice items, "always pick the longest option" scores **62.8%**. Four options put chance at 25%. | You can pass the drills by test-wiseness instead of knowledge. That inflates confidence right before a real exam. | Four rebalancing passes. "Pick the longest" now scores **28.8%** on 226 MC items. `build.py` refuses to build if this goes above 35%. |
| **Practice exams were not unseen.** All 40 roots of v1's Practice Exam A also appear in the weekly drills. v1 also gave feedback immediately and had no timer, as its own VALIDATION.md says. | A mock you have already drilled measures recall of those exact items, not readiness. Immediate feedback turns the exam into more practice. | Four exam forms (Mock A, Mock B, Boss I, Boss II) totaling 130 items. None of them appear in the 310-item practice bank. Mocks are timed and **show no correctness until you submit**. Answers survive a reload. |
| **Narrow sources.** v1 question sources cite only the decks, the OPE transcript and the codex. It kept a "missing video" record even though both ASHA video caption files were in the package. The recorded lectures, textbook, mock-interview handouts, your PPVT-5 submission and the debrief were not used as sources. | The two ASHA videos were the assigned Week 1 Friday class content, and the syllabus puts assignments in exam scope. Her lectures carry her framing, for example "significantly below vs just below average are two different things." | Module 3 is built from the two ASHA caption files: EBA, the 80.6%/57% figures, both cases, the six decision questions, validity evidence and sufficiency. Items also cite all five lectures, textbook chapters 1, 2-3, 4 and 6, both mock-interview handouts, your debrief and your PPVT-5 submission. The parent handout text was read from its scanned images. |
| **Thin item types.** v1's bank is 169 single-answer, 114 T/F and 1 multi-select entries. It has one labeling graphic. | Her historical tests are T/F plus MC, but the course is visual and procedural: oral structures, bell-curve bands, CA arithmetic, DDK steps. | 8 graded types: MC, T/F, select-all, order, match, sort, numeric and click-the-region (bell curve bands, oral structures, molar classes). There are also 2 teach-back prompts that you rate yourself. |
| **Numbers not enforced.** Boundary conventions lived in prose. | 84 vs 85 and 115 vs 116 are the questions students miss. | One `band()` function is used by the app and the build. The build recomputes every bell-curve item key and every chronological-age key. It fails if a CA item's answer depends on the borrowing convention and the stem doesn't say which one. 70 and 130 are never keyed, because her slide doesn't assign them. |
| **Conflicts smoothed over.** | Where the slide and the textbook disagree, a lab that quietly picks one teaches a false certainty. | Each conflict has a red "Conflict: flagged, not reconciled" callout. The Sources page lists them all. See VALIDATION.md for the list. |

## New in v2

- **Guide**: 18 modules in her order (Weeks 1-5 plus a numbers workshop). They contain tables, 17 diagrams (each with a "what to notice" caption and an enlarge button) and callouts tagged by evidence class.
- **Practice**: you choose scope (module, weak spots, unseen, numbers, visual ID). The queue interleaves concepts. Confidence is required before Check, and taking a hint records the answer as Low. After checking you see why the key is right and why each tempting option is wrong. Misses come back after 2 items, low-confidence hits after 4.
- **Exams**: Mocks A and B use the historical COMD 4382 Test 2 shape (20 T/F × 2 + 20 MC × 3 = 100). This is labeled as historical, not as this course's format. Two Boss drills of 25 case-based items each. Each exam has a timer, a question navigator, flags and optional confidence. The results page shows scoring by type, a repair-by-concept table and a one-click drill of the concepts you missed.
- **Review**: every concept, sorted as misconception / needs review / v1 provisional / learning / not started / mastered. Drill whatever you select.
- **Tools**: score explorer (standard, scaled, z and stanine, with her bands), chronological age calculator (30-day and calendar side by side), adjusted age, words per minute, TRMR.
- **Sources**: the convention table, every flagged conflict, the evidence-class legend, and every source file with the number of questions that cite it.
- **Progress**: stats by status and module, exam history, v1 history, export/import, restore-before-import, and reset.
- Dark by default with a light toggle. Works at 390, 768 and 1440 px, can be used by keyboard alone, and has a print stylesheet.

## Migration from v1 (and its limits)

- On first load, v2 reads `comd4756-guided-progress-v1` and `comd4756-study-lab-progress-v1` from the same browser. The v1 records are never modified.
- Each v1 concept marked mastered maps to one or two v2 concepts (a 54 → 89 concept map in `assets/engine.js`). Those v2 concepts become **"v1 mastered · confirm once"**: one correct Medium or High answer confirms mastery, and one wrong answer clears it. If v2 already has its own evidence for a concept, that evidence wins.
- v1 quiz best scores are shown on Progress as history only. The v1 questions were rewritten, so v1 scores don't count toward v2 exams.
- A v1 backup file (`comd4756-progress-backup-v1`) can be imported from Progress → Import.
- **Limitation:** browsers keep file:// storage per origin. If you opened v1 in a different browser or profile, v2 can't see it. Export from v1 and import the file instead.

## Code

- `assets/engine.js` holds the pure logic: bands, conversions, CA, grading, mastery, queue, scoring, v1 migration. It runs under Node for tests.
- `assets/visuals.js` builds all diagrams as SVG/HTML, with no image files.
- `assets/app.js` is the UI: hash routes and event delegation. Storage failures are handled; if storage is blocked the app still runs and warns you.
- `authoring/*.py` holds the content as code, validated by `build.py`, which writes `data/data.js`.
- About 1,270 lines of JavaScript in total (app, engine and visuals), against v1's 1,393-line app plus a 10,004-line generated bank file. Content lives in reviewable Python modules instead of generated JS.
