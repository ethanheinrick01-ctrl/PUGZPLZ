# September 25 question-style repair

The two reported examples, `s4.anox2` and `s4.hem1`, gave away the key through unusually long, fully qualified correct choices beside short or unrelated distractors. The audit covered every authored multiple-choice item in the original practice bank, case blocks, and Exam 1 addition.

| Measured cue across 284 authored MC items | Before | After |
|---|---:|---:|
| Correct choice uniquely longest | 152 | 75 |
| Correct choice at least 1.35 times the longest distractor | 106 | 0 |
| Only correct choice contains a colon or semicolon | 25 | 0 |

Options were rewritten around neighboring course concepts, similar grammar and length, and distinctions actually taught in the current slides and transcripts. The answer explanations retain the fuller teaching detail. The September 24 exam transcript controls scope and format; the Sutherland DNA and Codex files guide question style. Prior-course predictions do not set this term's exam scope.

Generated practice was checked too: 1,800 seeded multiple-choice variants now pass the same gate. The guest-lecture cross-check generator had 60 of 300 sampled variants with the correct choice at least 1.35 times longer than every distractor; its five interpretations were rewritten in parallel form. The generator's IDs and correct option positions remain unchanged across 300 compared seeds.

The two screenshot questions now test the anoxia screening pattern and hemorrhage complication without a length or punctuation signal. The final classroom-corrected Lecture 3 also supplied the small-room ANSI values in `s9.ansi1`. Exam 1 syndrome source references were corrected to the slides containing those conditions.

The source-derived questions retain all 413 item IDs, answer indices, concepts, sections, source references outside the corrected Exam 1 additions, and original course figures. The storage key remains `comd4590-lab-v2`. A before-update identity and answer contract in `tests/legacy-item-contract.json` verifies those invariants; `tests/question-quality.cjs` rejects the two measurable answer cues across authored and generated MC questions. Tests also cover immediate feedback and saved progress after reload. Changing wording does not clear saved attempts or mix two students' browser records.
