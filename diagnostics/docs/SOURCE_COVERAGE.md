# Source coverage ledger

Paths are relative to `COMD4756_STUDY_LAB_HANDOFF_2026-09-22/`. The "Cited by" column counts graded questions whose `src` names that source (each question counted once per source). Guide sections cite sources separately. Evidence classes are the same ones the app shows.

Status key: **Full** = read start to finish. **Part** = the pages or sections named, read closely. **Viewed** = image content inspected directly. **Context** = read to understand the build, not used as a content source. **Not read** = with the reason.

## Course materials (content sources)

| File | Status | How it was used | Cited by |
| --- | --- | --- | --- |
| WEEK 1/4756 WEEK 1 (1).pptx (+ PDF export) | Full: slide text, notes, SmartArt, rendered slides | Modules 1-2 (process, integrity, EBP, ethics, HIPAA, culture). The slide 8-9 images were transcribed. | 38 |
| WEEK 1/…/auto_generated_captions (1).vtt | Full | ASHA "Why We Need Evidence-Based Assessment" → Module 3 | 19 |
| WEEK 1/…/auto_generated_captions.vtt | Full | ASHA "A Decision-Making Process for Selecting an Assessment Tool" → Module 3 | 25 |
| WEEK 1/…/Screenshot 2026-08-28 1.09.08 PM.png | Viewed | Confirms the two ASHA TLR videos were the assigned Friday content | 0 |
| WEEK 1/…/COMD_4756_Video_Summary_and_Takeaway.pdf | Full | Your own summary. Checked for consistency; not used for keys (the captions were used directly) | 0 |
| WEEK 2/COMD 4751 WEEK 2.pptx (+ PDF) | Full, including the slide 18 bell-curve image | Modules 5-8. Source of the band convention. | 116 |
| WEEK 2/FRIDAY ASSIGNMENT/Assessment Detective Activity 2026 (1).docx | Full | Context for Module 5 (read the manual before testing) and the PPVT-5 items | 0 |
| WEEK 2/FRIDAY ASSIGNMENT/Assessment Detective … PPVT-5 Integrated.docx | Full | Same activity, PPVT-5 version | 0 |
| WEEK 2/FRIDAY ASSIGNMENT/PPVT-5 Assessment Detective_Dissection (1).pdf | Full | Your basal/ceiling finding (3 correct / 6 incorrect), checked against Pearson's PPVT-5 "What's changed" sheet | 2 |
| WEEK 3/4756 Week 3 Overview of Assessment.pptx | Full | Modules 9-10 | 59 |
| WEEK 3/COMD 4751 WEEK 3.pptx | Full | Module 4 (multicultural, ASKED, CLD, BID) | 38 |
| WEEK 4/4756 common assessment procedures week4.pptx (and the "(1)" copy) | Full. The two copies are byte-identical. | Modules 11-12 and 15 | 47 |
| WEEK 4/FRIDAY ASSIGNMENT/VIDEO TRANSCRIPT.rtf | Full (timestamped) | Modules 13-14 (OPE), with timestamps in citations | 54 |
| WEEK 4/FRIDAY ASSIGNMENT/Oral Peripheral Exam Video.pptx | Full | The assignment slide | 0 |
| WEEK 4/FRIDAY ASSIGNMENT/Oral Peripheral Exam - Study Guide.md / .pdf | Full | Cross-checked against the transcript. Keys come from the transcript. | 0 |
| WEEK 4/Mock_20Interview_20Group_20B_20Examiner.pdf | Viewed (scanned) | Module 11 (20-minute structure, 5-part summary) | 9 |
| WEEK 4/Mock Interview Group B Parent.pdf | Viewed (5 scanned pages, transcribed) | Maya case (Module 11, Boss I) | 6 |
| WEEK 4/Group B - Timed Interview Guide.docx; Group B - Wednesday Quick Guide.pdf | Full | Module 11 structure | 0 |
| WEEK 4/TURN IN/Clinician_Parent Debrief .pdf (+ copy) | Viewed | Your Ethan Miller debrief (Module 11, Boss II) | 3 |
| WEEK 5/COMD 4756 WEEK 5.pptx | Full | Modules 16-17 | 30 |
| WEEK 5/Observations comd 4756.pptx | Full | Lists links to observation videos. **The videos themselves are not in the package and were not watched.** | 0 |
| RECORDED LECTURES/09:02, 09:09, 09:11, 09:14, 09:21 (.rtf) | Full | Her framing and emphasis. Auto-captions are garbled in places, so lecture-only keys are few and labeled "Her lecture". | 23 |
| TEXTBOOK/Shipley & McAfee 7e (PDF, 46 MB) | **Part:** Ch. 1 (PDF pp. 28-55) full; Ch. 6 (pp. 178-191) full; Ch. 2-3 (pp. 60-143) the multicultural, CLD, interpreter and dynamic-assessment sections; Ch. 4 (pp. 144-155) the hearing screening and referral sections | Cross-checks and textbook callouts. Chapters 5 and 7 onward were not read: they cover topics past Week 5. | 45 |
| TEST ONE/WILL BE ON TEST ONE .png; WILL BE O NEXAM.png | Viewed | Your emphasis flags, shown as "Your Test One flag" callouts. Never treated as her wording. | 2 |
| TEST ONE/TEST ONE STUFF.rtf | Full (196 bytes) | No content beyond the folder label | 0 |
| SYLLABUS : ADMIN/COMD 4756 DX SYLLABUS UG.docx (+ PDF copy) | Full | Exam scope ("completed material from class and assignments"), two exams | 1 |
| SYLLABUS : ADMIN/COURSE_CONTEXT.md | Context | Course identity and logistics | 0 |
| SYLLABUS : ADMIN/GONSOULIN_CODEX.md and the cleaned copy in STUDY LAB/source-materials | Full; original and cleaned copy diffed | Historical COMD 4382 habits and the 30-day CA key example, labeled "Prior course (historical)". The prophecy and forecast content stays out. | 12 |
| SYLLABUS : ADMIN/PROFESSOR_DNA_GONSOULIN copy.md | Full | Style mapping (PROFESSOR_STYLE_MAP.md). Historical. | 0 (style only) |

## Build records and the original lab (context, not content)

| Item | Status | Notes |
| --- | --- | --- |
| BUILD RECORDS/audit/*.txt, decks.json, ope-transcript.txt | Context, compared with my own extractions | Used to check that my deck and lecture extraction matched v1's. The lecture copies in audit/ are the same captions. |
| BUILD RECORDS/*.py, *.json receipts, CHECKPOINT.md | Context | v1 build history and its validation receipts. Their instructions were treated as history, not as commands. |
| STUDY LAB/ (v1 app, bank, guide, visuals, README, VALIDATION, source library, handoff JSON) | Reviewed: code, bank statistics, module list, storage schema, validation claims | Critique in CHANGES.md. v1 IDs and storage keys were used for migration. |
| STUDY LAB/output/, STUDY LAB/authoring/ | Sampled | v1 screenshots and verification receipts |
| SKILL/build-course-study-lab/ (SKILL.md, references, scripts, template) | Full SKILL.md; validators run | Rules followed: mastery, retry distances, confidence, teach-back, 25+ Boss items, no hosting or publishing without authorization. |
| README.md, FILE_INVENTORY.json, SOURCE_INDEX.json | Full | Inventory used for this ledger |

## Outside the package

| Source | Status |
| --- | --- |
| Your Obsidian vault | Read through the Obsidian connector: the COMD 4382 markdown notes (test-review-completion, study-guide-review, `raw/TEST TWO/COMD 4382 PROFESSOR DNA.txt`). **The original COMD 4382 binaries (PDF/PPTX) in the vault were not read.** Folder access was requested and not granted during the session. |
| Pearson "PPVT-5 and EVT-3: What's changed" (pearsonassessments.com) | Read once, to verify your PPVT-5 basal/ceiling finding (3 consecutive correct / 6 consecutive incorrect, continuous items) |

## Referenced in the brief but not in the package

- A hearing-loss degree table replacement announcement, plus Sutherland / COMD 4590 files. **None of these are in this ZIP.** This is a Gonsoulin Diagnostics package, so the lab contains **no hearing-loss degree table**. It does not import one from another course or from generic audiology ranges. Hearing appears only as screening and referral (a failed screen goes to audiology).
- Week 6+ materials and the Exam 1 cutoff. Neither is in the package. The lab covers Weeks 1-5 as supplied and makes no claim about what Exam 1 covers beyond the syllabus wording.

## Unreadable or partly readable

- Lecture and OPE video auto-captions: readable but garbled in places (for example "queuing" for "cueing"). Items that depend on a garbled line carry a note, and the key follows the logic of the surrounding sentences. Example: m13-jl-02, where the caption says "improves without queuing" and the next sentence makes clear it means "with cueing".
- The parent handout PDF is scanned. It was read as images and transcribed for the blind audit, because the first automated OCR pass returned nothing.
