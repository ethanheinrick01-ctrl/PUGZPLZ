# Two-lab release — 2026-09-24

## Sources and preservation

- Existing PUGZPLZ Aural Rehab release: `ae2a132a889d11f44ce3cff81f28495bd85c2a59`.
- Latest Diagnostics release: `a52c5d3ff10bd658e3b9535081f5abf72d52f0fb`; content revision `83c535151a82`.
- Original Aural files are byte-identical after relocation except `index.html`, which adds an All labs link. All question IDs, images, scoring and storage behavior remain unchanged.
- Diagnostics question data, answer keys, engine, visuals and styles are unchanged. The runtime now checks each exam answer immediately and records each first response once. Multi-part responses use a per-question Check answer button. Final submission does not double-count checked answers.
- Diagnostics private original course-source archives are excluded from this public deployment. Runtime assets and source references remain present.

## Checks performed

- 34 browser checks passed using Chrome and an isolated persistent profile; see [results](site-results.json).
- Captured Aural browser state before moving its folder. Verified existing mock answers, flags, written drafts, practice queues, missed attempts and question position survived relocation on the same origin.
- Closed and reopened the browser profile; both labs restored unfinished sessions and position.
- Exported both labs through their UI, imported into an independent browser context, and verified active state restored without changing the other lab.
- Verified immediate Diagnostics feedback for true/false, multiple choice, select-all, ordering, numeric and diagram questions; Aural Exam 1 immediate feedback remains intact.
- Verified original Aural hash links redirect, homepage has exactly two lab choices, and phone width has no horizontal overflow.
- Original Aural Exam 1 unit checks: 16 suites passed. Diagnostics engine checks: 13 groups passed.

This is a deployment and behavior verification, not a new independent review of every academic answer. Diagnostics documents dated before this release describe the original offline version; their delayed-exam-feedback behavior is superseded here.
