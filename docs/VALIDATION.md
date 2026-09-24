# Validation results (run 2026-09-22; re-run 2026-09-23 after the Boss fix)

Command: `./tests/run-all.sh` (Node 22, Playwright 1.56 with headless Chromium, Python 3 for the localhost check). All results below are from real runs in this build session.

## 1. Syntax
`node --check` on every script: **PASS**.

## 2. Content validator (`tests/validate-content.cjs`): PASS
- 351 items (234 MC, 42 TF, 38 select-all, 19 match, 3 order, 3 numeric, 4 multi-part, 8 teach-back); 101 concepts; 9 case blocks; 70 items held out of practice for mocks.
- Checked: unique ids; known concept; prompt; at least one source code and every code resolves; evidence tier; exactly one keyed option on single-answer items; no duplicate options; distractor rationales present; select-all items are never all-correct; numeric keys; unique match targets; part keys present in options; image files exist; photo prompts contain no syndrome names or feature clues; no em-dashes; no text calls 90 dB profound.
- Skill rule: every concept has at least two distinct graded item roots or a generator.
- Case audiograms: no PTA in a scale gap; BC never poorer than AC; declared types match the classifier; degree keys match the scale.
- Generators: 9,000 degree items built; no gap PTAs; every key matches the scale; all ten boundary values (25, 30, 40, 45, 55, 60, 70, 75, 90, 95) produced.

## 3. Unit tests (`tests/unit.cjs`): 41 passed, 0 failed (also re-run 25 times to check for flakiness: 0 failures)
Conventions (all boundaries and gaps; PTA; type; WRS endpoints; reflex 60-69; tymp agreement under both norm sets; count-the-dots reproduces the class example 46 and 21 +/- 1); generators (15 x 300 seeds, one keyed answer each; generated types match the classifier; deterministic seeds); grading for every type including partial credit; mastery (two different items, confidence rule, hint rule, misconception persistence, reset on miss, teach-back and mock excluded, mock miss flags review); retry spacing (2 after wrong, 4 after low-confidence correct); boss sizes and case order; a Boss run ended after 3 correct answers is recorded as incomplete, scored out of the full run and sets no best score, while a completed run does; old boss runs without a completion flag are not trusted; mock size and exact domain mix (70: 10/18/21/21; 35: 5/9/11/10), grading only at submit, blanks wrong, held items unlocked, a second mock reuses fewer items; persistence; v2 export/import with de-duplication; Lecture 2 drill backup import (prior signal, no mastery); v1 full-backup import; malformed import rejected; blocked storage does not throw.

## 4. Browser tests (`tests/browser.cjs`, headless Chromium): 49 passed, 0 failed
- Opened from `file://` with no page errors, no console errors and **no network requests**.
- 90 dB HL answered "Profound" graded incorrect with Severe keyed; per-option rationales shown; retry inserted.
- No feedback before the confidence lock; TF graded correct.
- Session resumes at the same question after reload; attempts persisted.
- Every widget type rendered and submitted in the UI (choice, select-all, match/parts selects, order, numeric, teach-back); teach-back not recorded as a graded attempt.
- Mock (35): no feedback on any question while taking it; answers and flags survive reload; submit with blanks; feedback only in post-submit review; remediation button present.
- Boss run: no hint button; ending early is recorded as incomplete, scored out of the full run, shows "Run ended early" and sets no best score.
- Export downloads a file containing attempts and the mock; importing it in a fresh browser profile restores every attempt; Lecture 2 drill backup imports as prior signal without granting mastery.
- Keyboard: number key selects, Enter advances. Reset requires two confirmations and clears progress.
- Old-lab storage keys are left untouched and are auto-detected as prior signal.
- Served over `http://127.0.0.1` (python http.server): pages and images load, no external requests.
- No horizontal page scroll at 390x844, 820x1180 and 1440x900 on Home, Guide s2, Guide s5 and a case question with an audiogram. Screenshots in `tests/screens/`.

## 5. Skill validator (build-course-study-lab)
`validate-study-lab.mjs --hydrated` passes on the **original** lab. On v2 it reports `missing-config / missing-exam-lanes`: it checks the old runtime contract (`course-config.js`, `STUDY_SYSTEM_CONFIG`, module/quiz globals), which v2 replaced on purpose. The skill's quality rules were applied directly instead: teaching before testing (guide cards per concept), shuffled options/rows, confidence on every graded attempt (locked before feedback), 2/4 retry spacing, two-in-a-row mastery at medium/high, high-confidence errors flagged, teach-back self-rated only, source + concept + evidence status on every item, two item roots per concept, Boss drills of 25+ items, persistence and old-key survival checks, file:// and localhost runs, keyboard and phone/tablet/desktop layouts. The skill's `hint` field is implemented as a "where to look" hint; hinted answers never count toward mastery.

## 6. Manual visual checks
Screenshots were viewed for Home, Guide s2/s5, practice feedback, count-the-dots reveal, tympanogram, ABR case, BTE labeling diagram, mock in progress, mock results, and phone layouts. Fixes made from those checks: concept names hidden until after answering (they leaked answers in case questions), boundary badge hidden until after answering, pedigree titles cropped, BTE callouts re-laid out, dots caption shortened, mobile nav made visible, tables scroll on phones.

## 7. Not tested / limitations
- Only Chromium was automated. Safari/iOS and Firefox were not tested; Firefox and Safari treat local-file storage differently, so use Export/Import when moving between browsers.
- No screen-reader audit; semantic buttons, labels and alt text are present but not verified with assistive technology.
- Answer keys were written and checked by Claude against the sources listed; they have not been reviewed by the instructor. Wherever the sources disagree the item avoids the contested wording.
- Lecture 3 slides 35-82 (9/22, 9/24) had not been taught when this was built; items there rest on slide text, textbook and handouts. ANSI S12.60 blanks and other slide blanks are intentionally unanswered.
- The 9/03 lecture and the 9/17 guest case-study session have no transcripts; nothing in the lab claims what was said in them.
- Figure 3 (SII to % correct) curves were read by eye; the lab only asks band-level questions from them.
- The count-the-dots digitization gives 22 for the class X example (class answer 21); tolerance +/-3 covers it.
- Generated audiograms are clean teaching patterns, not real patient data.
- Syndrome photos are course-slide images (private study use); they are not diagnostic exemplars.

## 8. Fix log
- 2026-09-23: Codex found that ending a Boss drill early could record a perfect best score (the score was computed over answered questions only). Fixed: every Boss run is scored out of its full planned length, unanswered questions count as misses, only completed runs can set the best score, and runs saved before the fix are shown as "old run, not verified" and excluded from the best. Hints are no longer offered inside Boss runs. Covered by 2 new unit tests and 2 new browser checks.

## 9. Question wording pass
- 2026-09-24: Rewrote 173 question stems across all nine sections, extra items, photo identification, and case follow-ups. Prompts now ask for the clinical distinction, calculation, classification, or application rather than recall of a lecture, slide number, class date, textbook page, or handout location. The two examples Ethan flagged were revised directly. A few answer explanations were made substantive where they only pointed to a slide.
- Item IDs, concepts, answer keys, item types, evidence tiers, source citations, Boss/mock selection, and the `comd4590-lab-v2` storage key are unchanged. The 351-item content validator passes, and a targeted scan found no lecture/slide/guest/textbook/handout locator in a question stem. The full browser suite was not rerun for this wording-only pass.

## 10. Section mastery progress
- 2026-09-24: The Home section fractions count mastered concepts, not completed runs. A concept needs two unassisted correct answers on different question roots, with medium or high confidence on the latest answer; a miss can lower the count. Home now explains this next to the section cards.
- Two Foundations concepts had only one regular Practice question while their alternate was reserved for mocks. After the first graded attempt on a sparse concept, its held alternate now becomes available in Practice. Other held questions stay reserved. Added a standalone unilateral-hearing-loss question for a concept whose only alternate was inside a case.
- Targeted verification: all 101 concepts can now offer two distinct standard-Practice questions after the first attempt; the focused unit test passes; the 352-item content validator passes. Existing saved attempts and storage key were not changed. The full browser suite was not rerun.
