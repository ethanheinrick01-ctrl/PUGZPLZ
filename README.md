# Study Labs

Live homepage: https://ethanheinrick01-ctrl.github.io/PUGZPLZ/

- `diagnostics/`: COMD 4756 Diagnostics, latest v2 release; 440 activities across 18 modules.
- `aural-rehab/`: COMD 4590 Aural Rehab lab with its preserved Exam 1 edition and the supplied first two parts of Exam 2 (Lectures 4–5).

Each lab includes its complete runtime, images, documentation and tests. GitHub Pages serves `main` from the repository root; `.nojekyll` keeps this a static deployment.

## Progress

Both labs give immediate question feedback, including mock exams. Browser local storage persists unfinished sessions, answers, drafts, missed questions and question position. Aural Rehab retains `comd4590-lab-v2`; Diagnostics retains its separate `comd4756-lab-v2` key. Moving Aural Rehab into a folder on the same GitHub Pages origin preserves its existing browser storage and IDs. Recognized original Aural hash bookmarks redirect to its new folder.

Progress belongs to each browser profile. Both labs retain export/import for backups or transfers between devices, profiles or origins. If Diagnostics was previously used from a local file or another website, export there and import here. Clearing browser storage removes local progress unless backed up.

## Verification

See the [Exam 2 release receipt](aural-rehab/docs/EXAM2_RELEASE_2026-10-20.md) and [earlier two-lab receipt](docs/RELEASE.md). Serve the repository locally on port 8794 and run `node tests/site.cjs` with Playwright installed and Chrome available. `TEST_URL` can select another server; `PLAYWRIGHT_MODULE` can specify a Playwright module path. Test profiles are temporary and independent of personal browsing profiles.

Exam 2 includes 10 lessons, 101 automatic questions, 11 writing prompts, three cases, source pages/files, real figures and 10 synthetic Ethan-voice explanations. Later Exam 2 material is still missing; the app labels coverage as partial. Audio transcript/level/playback checks passed; pronunciation and delivery listening review remain pending.
