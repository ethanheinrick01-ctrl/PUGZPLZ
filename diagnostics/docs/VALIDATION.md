> Historical validation of Claude’s supplied v2 release. For the September 24 combined site and immediate exam feedback, see ../../docs/RELEASE.md and ../../tests/site.cjs. The old delayed-feedback checks below are superseded.

# Validation report (content revision 83c535151a82, 2026-09-23)

Every check below was actually run. Logs and screenshots are in `tests/out/`. Rerun instructions are in README.md.

## Summary

| Layer | What | Result |
| --- | --- | --- |
| Content build | `authoring/build.py`: schema checks, recomputed keys, balance gates | PASS, 0 errors, 0 warnings |
| Unit tests | `tests/engine.test.js` (Node): 13 groups, covering every item in the bank | PASS 13/13 |
| Browser tests | `tests/e2e.py` (Playwright + Chromium, file://) | PASS 126/126 |
| Extra browser tests | `tests/e2e_extra.py` (localhost, keyboard only, enlarge, print) | PASS 9/9 |
| Blind key audit | Independent agents answered every graded item from the sources alone | 437/438, then 71/71 and 11/11 after fixes (below) |
| Skill validator | `SKILL/.../validate-study-lab.mjs --hydrated` | Offline check PASS. Schema checks FAIL **by design**: see Limitations |

## Content build gates (`build.py`)

- Unique item IDs. Every item has a hint, an explanation, at least one source that resolves to a package file, an evidence class and a known concept.
- **Bell-curve keys recomputed** from the score in the stem with `band()`. No item may key 70 or 130.
- **Chronological-age keys recomputed** under both the 30-day and the calendar convention. If the two disagree, the stem must name the 30-day convention.
- Every one of the 89 concepts has at least 2 distinct graded practice items, so the mastery rule can be met.
- Every negative-style MC stem has a capitalized NOT, EXCEPT, LEAST or FALSE.
- **Answer-length cue**: "always pick the longest option" must score 35% or less on MC. Now **28.8%** (chance is 25%; v1 was 62.8%).
- **T/F balance**: 40-60% True in practice, Mock A and Mock B. Now 42/43 in practice, 10/10 in each mock.

## Unit tests (`node tests/engine.test.js`)

Band boundaries 55, 69, 70, 71, 78, 84, 84.9, 85, 100, 115, 115.1, 116, 122, 129, 130, 131, 145 · scale conversions and percentiles · CA under both conventions, including a December borrow across a year boundary, plus a leap-year days-in-month check · every CA item recomputed · every bell item recomputed · **grading of all 438 graded items, both correct and incorrect, plus empty answers** · Unicode minus, comma decimal and percent parsing · shuffle permutations never reveal order · the mastery rule (same-item repeats don't count; latest Low blocks mastery; high-confidence miss → misconception; re-mastery clears it; v1 provisional needs one Medium or High) · requeue gaps of 2 and 4, tail append, repeat cap · session planning interleaves concepts · exam scoring (100 points perfect; one T/F miss → 98; plus one blank MC → 95; 38/40) · exam forms don't overlap each other or the practice bank · v1 migration (bad JSON ignored, v2 evidence wins, every map target exists) · data integrity.

## Browser tests (Chromium, file://, a fresh isolated profile each run)

- **Navigation**: all 8 nav routes; 18 modules render; all 17 visuals render; an unknown route falls back.
- **Practice**: Check stays disabled until there is an answer and a confidence; correct and incorrect verdicts; explanation and source shown; a high-confidence miss is flagged as a misconception; the missed item is re-inserted exactly 3 positions later (2 in between); a full session reaches the summary; concepts reach mastery after 2+ distinct correct answers; mastery survives a reload.
- **Grading through the real controls**: roughly 130 answers across all 8 graded types (MC, T/F, select-all, order via the arrow buttons, match and sort via selects, numeric, click-the-region), both correct and incorrect. **0 mismatches.** Hotspot selection works from the keyboard. Taking a hint locks confidence at Low.
- **Mock exam**: 20 T/F then 20 MC. **No verdict, "why" text, key or wrong markers anywhere in the DOM during the exam.** Flagging works. A reload mid-exam resumes at the same question with answers intact. The navigator jumps. The timer counts down. Submit asks for in-page confirmation and warns about blanks. The score matches an independent computation. Results show why for chosen and correct options. Only answered items count toward mastery (38 of 40). The flagged filter works. The repair drill starts from results.
- **Retake**: a perfect run scores 100/100 and is stored as a second attempt. **Boss**: the case vignette shows and the accuracy matches. **Discard** clears an in-progress attempt without scoring it.
- **Tools**: the score explorer at 69/70/71/84/85/115/116/129/130/131 (70 and 130 reported as unassigned lines); scaled 4 = 70; the CA tool shows 6;6.15 vs 6;6.13 and flags the disagreement; wpm; TRMR.
- **Export/import**: the export file has the v2 schema and state plus raw v1 keys. Reset clears progress. Import restores concepts and both exam attempts. A pre-import snapshot is kept. An invalid file is rejected with a message and progress untouched. A **v1 backup** imports as provisional concepts plus v1 quiz history.
- **v1 migration in-browser**: with v1 keys seeded before load, v1 is detected, mastered concepts become provisional, the v1 records are left untouched, the history appears on Progress, and one correct Medium answer confirms a provisional concept.
- **Responsive**: no horizontal overflow at 390, 768 and 1440 px on home, guide (m07, m14), practice, exams, tools, sources, progress, the exam view and practice feedback. Screenshots were inspected.
- **Theme**: light mode persists across reloads.
- **Offline**: every request outside file:// is aborted and counted. **Count: 0.** Console errors: 0.
- **Storage blocked** (localStorage throws): the app runs, warns, and throws no uncaught errors.
- **Extra**: localhost (python http.server) has no console errors and no outside requests; keyboard-only answering (Space and arrows, Tab to confidence, Enter) is graded correct and focus moves to the verdict; diagrams enlarge in a dialog that Escape closes; every guide visual has a caption; print hides the chrome.

## Blind answer-key audit

Method: items were exported with shuffled options and the keys held back. Independent agents answered every graded item using only a text pack of the course sources. They were barred from the lab, the keys and the package. Results were then compared by script. Full files are in `docs/audit/` (`AUDIT_SUMMARY.json`, batches, answers, keys).

| Round | Items | Agreement |
| --- | --- | --- |
| 1. Whole graded bank | 438 | 437 (99.8%) |
| 2. Items whose distractors were rewritten afterward | 71 | 71 |
| 3. Practice T/F items converted to false forms | 11 | 11 |

What the audit changed:
- **xa-mc-18** (the only disagreement): the stem let "dissociation" compete with "stability". Rewritten so the jaw fails to hold still with nothing else moving.
- **m13-air-02, bb-adu-09**: the video pairs the mirror with quiet breathing, not with pressure sounds. Both were rewritten to match the transcript.
- **bb-adu-06**: "late in the session" made the select-all ambiguous. Stem and one distractor were tightened.
- **m13-jl-02**: the caption reads "without queuing", which contradicts the next sentence. The key follows the sentence logic, and the explanation says so.
- **Boundary items** (m7-band-03 at 115, m18-bd-04 at 85, m18-bd-02 at 71, m7-band-08 at 72, ba-rep-01 at 76): explanations now name the slide-picture / slide-text / textbook tension. Keys follow slide 17 and slide 18 as the convention table states.
- **PPVT-5 3/6 rule** (m6-bc-05): verified against Pearson's PPVT-5 "What's changed" sheet (continuous items, 3 consecutive correct / 6 consecutive incorrect). The auditor's concern (12-item sets) applies to the PPVT-4.
- **Maya items**: the auditors' text pack had an empty parent-handout OCR file. Keys were checked directly against the 5 scanned handout pages (e.g. "hearing checked at her pediatrician's office … never had a full hearing test with an audiologist"). The handout was transcribed for any rerun.
- Minor: bb-eth-06, m18-tr-02 and m18-mx-03 stems clarified; m15-dd-01 now also cites the textbook.

## Flagged source conflicts (shown in the app, not reconciled)

1. **Stanine 4 and 6**: unlabeled on her slide (5 average, 7-9 above, 1-3 below). The textbook says 54% score 4-6. Not keyed.
2. **Exactly 70 and 130**: on the ±2 SD lines, unassigned by her slide. The textbook says −2 SD is "70 or below". Not keyed.
3. **−1.5 to −2 SD**: the textbook calls 77.5-70 "usually significantly below average"; her slide labels 70-85 below average. Keyed to her slide when the stem says "her"/"her class".
4. **CIs "increase reliability"**: her slide 19 and the 9/2 lecture say it (and so does the textbook), but psychometrically a CI expresses measurement error. Keyed True to her wording, with the caveat shown.
5. **CA day-borrowing**: the textbook says 30 or 31 by month; her COMD 4382 key used 30. Every CA item states its convention, and the tool shows both.
6. **Sample length**: slide 50-100 minimum; textbook Ch. 6 50-100 up to 200+, Ch. 1 50-200; COMD 4382 said 100. Keyed to the slide.
7. **Tongue tie**: the textbook says a short frenulum is rarely linked to articulation disorder; the OPE presenter stresses function (TRMR). Both are shown.
8. **Modifications for CLD clients**: Week 2 treats modifications as possibly invalidating scores; Week 3 lists modifications you might make for CLD clients. Both are true in context and shown.

## Limitations (not hidden)

- **Skill validator schema**: `validate-study-lab.mjs` checks the v1 template's contract (`course-config.js`, `COMD4756_*` globals, v1 storage keys). v2 uses a new data contract, so those 4 schema errors are expected. The validator's offline check passes. The same rules (2+ roots per concept, sources, hints, explanations, 25+ Boss items, shuffling, confidence, retry distances) are enforced by `build.py` and the tests above instead.
- **Obsidian vault**: COMD 4382 markdown notes were read; the original 4382 PDF/PPTX files in the vault were not (folder access not granted). They could only have added historical style evidence, not COMD 4756 content.
- **Not in the package**: Week 6+ materials, the Exam 1 cutoff, the observation videos linked on the Week 5 deck, and any hearing-loss degree table. The lab invents none of them.
- **Caption quality**: lecture and video captions are auto-generated. Lecture-only keys are few, labeled "Her lecture", and cross-checked where possible.
- **Retaking the same exam form** reuses its items with new option order. Retake scores overstate readiness, and the app says so.
- **Timer** runs only while the exam page is visible (so a closed laptop doesn't burn time). It is a practice timer, not proctoring.
- **Blind audit independence**: the auditors were separate agent instances with no access to the keys or the lab, but they are the same model family as the author. Agreement shows the keys follow from the sources as supplied. It is not the same as a human SME review.
- **file:// storage** is per browser and profile. Use Export/Import to move progress.
- Tested in Chromium only (Playwright). The code uses standard DOM APIs and `:has()` only for the enlarge dialog's width (older browsers still work, the dialog is just narrower).
