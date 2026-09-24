# Source coverage ledger (COMD 4590 Exam 1 lab v2)

Built 2026-09-22 by Claude from `COMD4590_Study_Lab_Complete_Package_2026-09-22.zip`.
"Reviewed" below means the original file was opened and read (or, for images and visual slides, rendered and looked at). Where a file was used only through an extraction or was not opened, the ledger says so.

Method codes: **T** full text read (pptx text + speaker notes via python-pptx; RTF via pandoc; DOCX via python-docx; PDF via PyMuPDF). **V** rendered and inspected visually (slide contact sheets at readable size, page renders, zoomed crops where meaning depended on the picture). **S** skimmed / structural check only. **X** not opened (reason given).

## 1. Current-course sources (packet/)

| File | Method | What it contributed | Notes / limits |
|---|---|---|---|
| src-00 EXAM 1 README.rtf | T | Packet contents and scope notes | |
| src-03 Peds AR Guest Lec 2026.pptx (33 slides) | T + V (all slides; slide 14 table zoomed) | Section 6, cases c3, c5, c6, c8; tymp/OAE/ABR/cross-check items | Slide 14 tymp norms conflict with 4190 sheet (flagged). Slide 32 "hot takes" have no recorded answers. |
| src-05 Lecture 1 backup (8/27 11:38) | T (diffed against src-06) | Confirms slide 16 table was the one replaced | Near-duplicate of src-06 |
| src-06 Lecture 1 student copy (35 slides) | T + V (all slides) | Section 1 | Slide 16 Table 1-2 = superseded degree scale |
| src-07 blank audiogram.doc | V | Audiogram layout reference | |
| src-09 LECTURE 2 "Completed" (76 slides) | T + V | Difference list only | Provenance undocumented; wording differences flagged, never keyed |
| src-10 LECTURES 2 student copy (2) (77 slides) | T (text + notes) + V (all slides; syndrome photos) | Sections 3-5, photo ID items, pedigrees | Treated as the class record (matches transcripts; contains instructor slide 41). Student notes end after Johanson-Blizzard (per drill README). |
| src-11 Lecture_2_Study_Guide.pdf | S | Nothing keyed | Prior-model derivative with outside references |
| src-12 Lecture_2_Study_Guide_QA.txt | T | Nothing keyed | QA log of src-11 |
| src-14 AAA 2013 Pediatric Amplification | T (pp. 1-49; reference list skipped) | Section 8 AAA card and items | |
| src-15 CID Ling check (2019) | T + V | Ling items | |
| src-17 Killion & Mueller 2010 (count-the-dots) | T + V (all 6 pages) | Dots data (100 dots digitized from Figure 2 at 300 dpi), Fig 3 image, SII items | Fig 3 curves read by eye; used only for band-level answers |
| src-18 COUNT THE DOTS ASSIGNMENT.pdf | V | Context (due 9/24) | Ethan's submitted answers are student work, not a key; not used as answers |
| src-19 IMG_5762.JPG | V | Class example thresholds (X = 21, O = 46) | Lab's digitized count gives 22 for X; tolerance +/-3 |
| src-20 README.png | V | Assignment instructions | |
| src-21 Children Hear Better with FM (Phonak 2010) | T | One low-weight mention in the guide | Marketing piece |
| src-22 Hearing Aid Listening Check | T + V | Listening-check items | |
| src-23 Lecture 3 Hearing Aids "Textbook Filled" (82 slides) | T + V (all slides) | Sections 7-9 | Speaker notes and some fills were added by a prior model citing the textbook; checked against the textbook where used. 12 blanks unresolved (slides 42, 45 x2, 66 x3, 73, 74 x2, 75, 76, 77); never keyed. Slides 35-82 not yet presented in class as of 9/22 (no transcript). |
| src-24 Louisiana R.S. 22:1038.docx | T | LA law items | Handout wording, not a current legal check |
| src-26 transcript 9/01 | T (full, re-read for infections) | Section 4 facts, CMV/rubella numbers | Speech-to-text errors; garbled spans not used |
| src-27 transcript 9/08 | T (full syndrome + guest announcement portion) | Pierre Robin, Stickler, Treacher, Turner, Usher, Waardenburg details | Turner HL wording garbled ("always ... ") so Turner type is not keyed |
| src-28 transcript 9/10 | T (full) | HA components, styles, features, candidacy, QC, NOAH, WDRC, NAL vs DSL, count-the-dots walkthrough | |
| src-29 transcript 9/15 | T (full) | Guest part 1: sound field, OAE limits, ABR, ANSD, NICU >5 days | 9/17 guest part 2 (case studies) has NO transcript in the package |
| src-31 Textbook 8th ed. (PDF) | T: Ch 1 and Ch 2 read in full except reference lists; Ch 8 pp. 268-269 and Ch 9 pp. 334-335 | HIO-BASICS, Tables 2-3 to 2-6, pediatric fitting pp. 56-59, CROS, classroom SNR/RT | Other chapters are later exams; not reviewed |

## 2. Instructor guidance and prior-course originals (professor-guidance/)

| File | Method | Use | Tier |
|---|---|---|---|
| Sutherland-degree-scale-announcement-2026-08-27.png | V | Establishes that the uploaded scale replaces the slide table | 1 |
| SUTHERLAND_CODEX_COMD4590.md (cleaned) | T (full) | Historical patterns, trap ledger, 4190 norms | 2-3 |
| Original codex (pre-cleaning, in build records) | T (diffed against cleaned) | Identified removed "prophecies" so they were not reintroduced | not used as content |
| Professor_DNA_Sutherland copy.md | T (full) | Direct 4190 quotes; exclusions tied to 4190 exams | 1 (historical) |
| TEST 1 AUDIOLOGY STUDY GUIDE.pdf | V (p.2, pp.25-45; p.30 at high resolution) | p.30 = adopted degree scale (typed list, not handwritten); pp.25-26 AI-typed 26-40 scale NOT adopted | 1 |
| TEST 2 STUDY GUIDE!!.docx | T | Two recorded walkthroughs (reading order, reflex math) | 3 |
| Speech Audiometry FILLED.pptx | T | WRS categories, SRT/SDT, SL, MCL/UCL/DR | 3 |
| Chapter 6 Physiologic tests FILLED.pptx | T | Reflex SL classes, OAE/ABR basics | 3 |
| TYMP GRAPH NOTEZ 1.JPG | V | 4190 tymp norms | 3 |
| AUDIOGRAM SYMBOL KEYS.JPEG (HEIF) | V (after pillow-heif conversion) | Symbol conventions; "unspecified BC = better ear"; ">15" symmetry note (Ethan's handwriting) | 2-3 |
| COMPREHENSIVE AUDIOLOGICAL ASSESSMENT.pdf | V | Form layout | 3 |
| FULL ADIOLOGICAL ASSESSMENT 3-5.JPG.pdf, L ASSESSMENT 2.JPG | V | Forms B-E; reflex arithmetic (Form C 95-40 = 55) | 3 |

## 3. Course context

| File | Method | Use |
|---|---|---|
| COURSE CONTEXT/Course Syllabus 2026 COMD 4590 copy 2.pdf (actually DOCX) | T (python-docx incl. schedule table) | Exam date 9/29; content statement (lectures, readings, guests, handouts); class-day counts used for the mock blueprint (design choice) |
| COURSE CONTEXT/COURSE_CONTEXT.md | T | Package orientation |
| COURSE CONTEXT/SUTHERLAND_CODEX_COMD4590.md, Professor_DNA_Sutherland copy.md | T | Same as section 2 |
| Obsidian vault (Ethan's computer) | Index level: ETHAN.md, Fall-2026 COMD-4590 folder index, Spring-2026 COMD-4190 hub listing | Confirms Lecture 5/6/8 files belong to later units (out of Exam 1 scope) |

## 4. Original lab and build records

| Item | Method | Use |
|---|---|---|
| STUDY LAB/index.html, assets/app.js (1,344 lines), styles.css, course-config.js | T (app.js read in full) | Code audit (docs/CHANGES.md) |
| study-guides/modules.js, visuals.js; quizzes/quiz-bank.js | Dumped to JSON and read (17 modules, 76 concepts, 291 activities, 70-Q mock, Boss 35/34) | Content audit; questions solved independently |
| lecture-2-disorders.html + drills/lecture-2 (content.json 189 questions, README, COVERAGE, VALIDATION) | S + spot checks of defective items (toxo-mechanism, cmv-mechanism, apert-type, jbs-visual) | Confirms the pathology template defects originate in this bank |
| pathology-progress-backup-2026-09-21.json | T | Real performance data; import test fixture |
| assets/visuals/exam-1 | V (contact sheet) | Old SVGs used green/purple for ears (defect) |
| BUILD RECORDS/pathology-drill/extracted (50 slide images) | V (contact sheet) | Source of the lab's syndrome photos (31 exported as webp) |
| BUILD RECORDS/exam-one text extracts, handoff/validation JSON | S (text extracts compared with fresh extraction; identical word counts for transcripts) | Cross-check only |
| BUILD RECORDS/sutherland-update (CHECKPOINT, corrections, validation JSON, before/) | S (CHECKPOINT read; JSON not individually opened) | Context for how the old lab was produced |
| BUILD RECORDS/browser-checks (4 PNG) | V | Old layout reference |
| SKILL/build-course-study-lab (SKILL.md, references, validators) | T (SKILL.md, content-schema.md) + validator run | Workflow and quality rules adopted; see VALIDATION.md for how the validator applies |
| FILE_INVENTORY.json, README.md | T | Inventory of 37 source records |

## 5. Not reviewable or not available

- **Class videos** linked on Lecture 2/3 slides (YouTube): not in the package; only what the transcripts capture.
- **9/03 lecture** (Lecture 2 slides ~38-62) and **9/17 guest part 2** (case studies): no transcripts. Content comes from slides and Ethan's notes only.
- **9/22 and 9/24 lectures** (rest of Lecture 3): not yet delivered as of the package date.
- **ANSI S12.60 values** for slide 66: not in the textbook pages reviewed; left blank on purpose.
- Textbook chapters beyond Ch 1-2 and the Ch 8-9 acoustics passages: later-exam material, not reviewed.

## 6. Source conflicts (flagged in the lab, never silently reconciled)

| Topic | Source A | Source B | Lab handling |
|---|---|---|---|
| Degree scale | Adopted scale (announcement + SG p.30) | Lecture 1 slide 16 / Table 1-2; SG pp.25-26 AI-typed 26-40 list | Adopted scale everywhere; others only as named traps |
| Degree gaps 26-29, 41-44, 56-59, 71-74 | Adopted scale leaves them undefined | none | Never scored; explained |
| Textbook "WNL" for candidacy | Adults <25, children 15 dB HL | Adopted scale 0-25 | Not scored |
| Tympanometry norms | 4190 sheet (ECV child 0.3-0.9; pressure abnormal at +/-150) | Guest slide 14 (ECV 0.3-1.0; MEP -150 to +100; compliance 0.2-1.0; tubes 1.0-5.5) | Both shown; scored values valid under both |
| HIV HL type | Student copy + 9/01: SNHL via ototoxic drugs | Completed deck: conductive, SN or mixed | Key the class record; variant not scored |
| Hyperbilirubinemia HL | Student copy: SNHL | Completed deck: ANSD | HL type not scored |
| Turner HL type | Student copy: SNHL | Completed deck: conductive or SN; 9/08 audio garbled | Not scored |
| Treacher Collins % | Student copy: 40-50% present with CHL | Completed: 40-50% with HL | Percentage not scored |
| CdLS eyebrows | Student: thin eyebrows | Completed: synophrys | Not scored (photo cue text avoids both claims) |
| Goldenhar | hemifacial microsomia | microphthalmia | Not scored |
| Stickler joints | hypermobile joints | early-onset arthritis (also in 9/08 video) | Not scored |
| Waardenburg % Type I | slide 47-80% | 9/08 audio "40 to 80" | Not scored |
| L2 slide 2 wording | "most common birth defect" | transcript "sensory deficit" | Not scored |
| L2 slide 11 | "genes located in mitochondria" | slide 19 (most DNA nuclear) | Not used |
| Student note on sex chromosomes | "Men XX, Females XY" | slide 18 (reversed) | Not used |
| Reflex SL method | 4190 forms: per-frequency threshold | old V3 exam: PTA | Per-frequency; foundations only |
| Count-the-dots class example (X) | Class answer 21 | Lab digitized count 22 | Key 21 with +/-3 tolerance |
