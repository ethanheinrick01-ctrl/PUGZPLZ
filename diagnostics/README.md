# COMD 4756 Diagnostics Study Lab v2 (Dr. Gonsoulin, Fall 2026)

An offline study lab for Weeks 1-5. It has a guide, practice with confidence ratings and mastery tracking, timed learning exams with immediate feedback on every question, case-based Boss drills, a repair queue and calculators. No internet, no accounts, no paid APIs.

## Open it

1. Unzip the folder anywhere. Keep `index.html` next to `assets/` and `data/`.
2. Double-click **`index.html`**. Chrome, Edge, Safari and Firefox all work. No server is needed.
3. Progress saves automatically in this browser. **Progress → Export** writes a backup `.json`. **Progress → Import** restores it in any browser.

Where to start: **Guide → Module 1**, then **Practice** a module after you read it. When the modules feel solid, take **Exams → Practice Exam A** with immediate corrections. The results page links every missed concept straight into a repair drill.

Coming from the original lab? If you used it in the same browser, v2 finds that progress on first launch. Concepts you had mastered show as *"v1 mastered · confirm once"*; one correct Medium or High answer confirms each. The original lab's records are never changed. You can also import its backup file from Progress → Import.

## What's inside

| Path | What |
| --- | --- |
| `index.html` | The app |
| `assets/engine.js` | Scoring, bands, CA, mastery and queue logic (unit-tested) |
| `assets/visuals.js` | All 17 diagrams and the click-the-region visuals |
| `assets/app.js`, `assets/styles.css` | Interface |
| `data/data.js` | Generated content: 440 items, 18 modules, 89 concepts, 6 cases |
| `authoring/` | Content source (Python). Edit it here, then rebuild. |
| `tests/` | Unit and browser tests, plus logs and screenshots from the final run (`tests/out/`) |
| `docs/CHANGES.md` | Critique of v1 and what changed |
| `docs/SOURCE_COVERAGE.md` | Ledger of every source file: what was read and how it was used |
| `docs/PROFESSOR_STYLE_MAP.md` | Her historical question habits → lab item styles, with the limits of that evidence |
| `docs/VALIDATION.md` | Every check that was run, the blind key audit, flagged conflicts, limitations |
| `docs/audit/` | Blind-audit batches, independent answers, keys and the comparison |

## Rebuild and retest (optional)

```bash
python3 authoring/build.py            # validates content, writes data/data.js
node tests/engine.test.js             # unit tests
node ../tests/site.cjs              # current combined-site browser checks; install Playwright and Chrome first
```

`build.py` refuses to write data if any bell-curve or chronological-age key disagrees with a recomputation, a concept has fewer than 2 practice items, the "pick the longest option" strategy beats 35% on MC, or T/F keys drift outside 40-60% True.

## Evidence labels you'll see

**Her slides** · **Her lecture** · **Assigned video** · **Her handout / assignment** · **Textbook** · **Prior course (historical)**: COMD 4382 habits, not this course's content · **Lab inference** · **Your Test One flag**: your own label, not her words. Red **Conflict** callouts mark places where sources disagree. They are shown, not smoothed over.

## Privacy

This folder contains material derived from your course files. It is built to run locally. Don't host or share it publicly without checking with your instructor.

## Repository update — September 23, 2026

The root application is Claude's v2 release, content revision `83c535151a82`. The prior app is preserved in Git history through commit `c435738`; its README and validation receipt are in `docs/legacy-v1/`, and its instructor references and source handoff remain in `source-materials/`. Original course files remain in the local course folder and the September 22 handoff ZIP. Runtime asset URLs include the release revision so refreshing the existing entry page loads the updated assets. The app continues to use the v2 migration and backup/import flow.

## September 24 combined site

This lab now lives at `diagnostics/` in PUGZPLZ. Its 440 activities, 89 concept IDs, source-backed diagrams, hints, answer keys and difficulty are unchanged. Mocks and Boss drills now show immediate corrections and retain the first checked response. Every check saves its answer and review record immediately; finishing the exam does not count it twice. Existing unfinished exams and exports remain readable. The original authoring and audit receipts document the supplied v2 release; their delayed-feedback assertions are historical and superseded by the current site checks in `../tests/site.cjs`.

The storage key remains `comd4756-lab-v2`, separate from Aural Rehab. Moving from a local file or another device to this hosted site requires exporting there and importing here using Progress.
