/* Exam-focused preparation. Additive data; existing forms and saved identities stay intact. */
(() => {
  'use strict';
  const T = window.DX_EXAM1, D = window.DX_DATA;
  if (!T || !D) throw new Error('Exam focus requires the current Exam 1 bank.');
  const revision = 'exam1-focus-20261007-v1';
  const responseRequest = ' Explain the assessment limitation, two useful next steps, and what the available evidence does or does not allow you to conclude.';
  const drafts = [
    {
      key: 'no-test', title: 'No suitable measure for the question', pages: '7–8',
      stem: 'A 5-year-old uses sentences, but unfamiliar listeners understand little of the child’s speech. You need to investigate the source of the difficulty. After reviewing the available measures, you find none that directly answers this question for a child with this developmental profile.',
      rubric: [
        'Identify the gap: no available assessment directly answers the question for this child’s profile.',
        'Use relevant literature, clinical judgment, or consultation with experienced clinicians to guide the next assessment approach.',
        'Use dynamic assessment to examine how speech performance changes with teaching, modeling, or other support.',
        'Describe supported strengths and difficulties while acknowledging that the precise cause may remain uncertain.'
      ],
      modelAnswer: 'The available tools do not directly answer the question for this child, so I cannot treat one of them as a definitive explanation. I would use relevant research and consultation to guide my clinical judgment, then compare the child’s performance with and without appropriate support through dynamic assessment. The findings can describe strengths, difficulties, and possible initial priorities even if the exact source of the unintelligibility remains uncertain.',
      explain: 'A missing suitable test does not justify forcing a diagnosis from an unsuitable one. The assigned module recommends evidence-based judgment, consultation, dynamic assessment, and tolerance of an unresolved definitive answer.',
      decision: 'Select a defensible assessment approach when no suitable measure directly answers the question.'
    },
    {
      key: 'access', title: 'The right test is out of reach', pages: '10–11',
      stem: 'A 13-year-old is referred for difficulty understanding classroom explanations. Your clinic owns language tests whose normative age ranges end at age 8. An appropriate adolescent measure exists, but it is not currently available at your clinic.',
      rubric: [
        'Identify an access problem: the available age norms do not represent this adolescent.',
        'Seek access to an appropriate measure by borrowing it, advocating for resources, or arranging an appropriate external evaluation.',
        'Gather additional relevant evidence, such as case history, a representative language sample, or dynamic assessment.',
        'Explain that out-of-range norms cannot support an age-appropriate interpretation and that one test alone should not decide service eligibility.'
      ],
      modelAnswer: 'The problem is access to an age-appropriate measure. I would try to borrow the adolescent measure or arrange access through additional resources or an external evaluation. Meanwhile, I would gather case history and a language sample, with dynamic assessment as another useful source. I would not apply the age-8 norms as if they represented a 13-year-old. Any eligibility decision must integrate relevant evidence rather than depend on a single test.',
      explain: 'Availability does not establish suitability. Module 9 pairs efforts to obtain an appropriate tool with other assessment evidence and explicitly rejects deciding eligibility from a single tool.',
      decision: 'Distinguish lack of access from lack of a suitable test and avoid invalid norm use.'
    },
    {
      key: 'language', title: 'An English score leaves the question open', pages: '13–14',
      stem: 'A 7-year-old has learned English for eight months and uses Spanish most often at home. The teacher reports difficulty following English classroom directions. Your available standardized language test is in English only, and you have not yet gathered evidence about the child’s Spanish abilities.',
      rubric: [
        'Identify the unresolved question as language difference versus disorder; limited English performance alone does not answer it.',
        'Work with an appropriate interpreter to obtain information about abilities in both languages, including relevant language history.',
        'Add a useful complementary approach, such as dynamic assessment or evaluation of less language-dependent abilities; explain what it would reveal.',
        'Treat any English baseline as a description of current English skills and defer a disorder conclusion until relevant evidence is integrated.'
      ],
      modelAnswer: 'English classroom difficulty alone does not distinguish language difference from disorder. I would work with an interpreter to gather language history and assess abilities in Spanish as well as English. Dynamic assessment would help show how the child learns with support; less language-dependent tasks may also add information. An English baseline can describe current English skills, but it cannot independently establish a language disorder. I would integrate these sources before drawing that conclusion.',
      explain: 'The assigned module recommends assessing both languages with interpreter support, considering less language-dependent domains, an English baseline, and dynamic assessment. The October 7 lecture repeatedly emphasizes difference versus disorder and warns against relying on a single tool.',
      decision: 'Use linguistic context and several evidence sources before interpreting an English-only result.',
      lectureLines: '11, 39–43, 53–61, 73–79'
    },
    {
      key: 'time', title: 'Several questions, one short appointment', pages: '16–17',
      stem: 'An adult begins inpatient rehabilitation after a stroke. You have 35 minutes for the initial communication evaluation, and concerns involve understanding directions, expressing needs, and reading daily information. The immediate purpose is to help establish initial rehabilitation priorities; all relevant domains cannot be examined fully today.',
      rubric: [
        'Identify that limited time prevents a complete assessment of all relevant domains today.',
        'Prioritize observations according to the immediate assessment purpose and the client’s most relevant communication needs.',
        'Choose an activity that permits observations across more than one relevant domain and explain what can be observed.',
        'Document remaining questions and continue assessment during later sessions or treatment; keep initial conclusions appropriately provisional.'
      ],
      modelAnswer: 'The time limit requires prioritization. I would first examine communication most relevant to the initial rehabilitation plan, such as understanding directions and expressing needs. An activity using the person’s daily schedule could provide observations of reading, comprehension, and communication of questions, while recognizing that it is not a complete evaluation of those domains. I would document what remains uncertain and continue gathering evidence in later assessment and treatment. The first appointment supports an initial plan rather than closure of every diagnostic question.',
      explain: 'The module recommends prioritization, multiple observations within one activity, and an ongoing assessment process. A time limit does not make an untested domain intact or a provisional conclusion final.',
      decision: 'Prioritize purpose-driven evidence while preserving unresolved assessment questions.'
    },
    {
      key: 'baseline', title: 'What changed after the new event?', pages: '19–20',
      stem: 'An older adult with a documented dementia diagnosis is referred after a recent stroke. Current conversation includes word-finding difficulty, but the chart provides little detail about communication before the stroke. The referral asks whether a new language difficulty has appeared.',
      rubric: [
        'Identify the purpose as distinguishing new communication changes from the pre-existing difficulties, with an inadequately documented baseline.',
        'Ask family, care partners, or staff for specific comparisons of communication before and after the stroke.',
        'Describe current abilities qualitatively and include the patient’s salient concerns or reported daily challenges when available.',
        'Avoid assigning every current difficulty to either the stroke or dementia; state that conclusions about change depend on the baseline evidence.'
      ],
      modelAnswer: 'The current profile alone does not show which problems are new. I would ask family, care partners, or staff for concrete examples of communication before and after the stroke. I would also describe present performance qualitatively and include the patient’s concerns when available. These sources help address the referral question. Until the baseline is clearer, I would avoid attributing the entire profile either to the recent stroke or to the earlier dementia diagnosis.',
      explain: 'Module 9 addresses acute difficulties superimposed on chronic difficulties by returning to the assessment purpose, gathering reports of change, using qualitative assessment, and including patient-reported concerns.',
      decision: 'Use individual baseline evidence to investigate change without unsupported causal attribution.'
    },
    {
      key: 'observations', title: 'The test and your observations address different skills', pages: '22–23',
      stem: 'An adult referred for suspected aphasia earns language-test scores within normal limits. During the visit, the person repeatedly forgets recently discussed plans, and a care partner reports similar problems at home. The administered language test does not directly investigate this memory concern.',
      rubric: [
        'Identify that the language test does not adequately address the separate memory concern raised by observations and reports.',
        'Document the qualitative observations and examine which findings from the completed test support or limit the current interpretation.',
        'Obtain the client’s perspective and arrange targeted further assessment or referral appropriate to the unresolved concern.',
        'Explain that normal language scores neither rule out a separate memory difficulty nor establish a definitive memory diagnosis.'
      ],
      modelAnswer: 'The language result and the memory concern address different questions. I would document the repeated forgetting and consider what the completed test actually supports. I would ask the client about the difficulty and its impact, then recommend targeted assessment in another session or an appropriate referral. The normal language scores do not eliminate a separate memory concern. At the same time, these observations alone do not establish a definitive memory diagnosis.',
      explain: 'The module encourages critical thinking, qualitative descriptions, appraisal of the evidence already obtained, patient-reported outcomes, and further evaluation when clinical observations reveal a problem the test missed.',
      decision: 'Investigate a construct not adequately captured by the completed measure.'
    },
    {
      key: 'function', title: 'Normal scores, continuing daily difficulty', pages: '25–26',
      stem: 'After a mild traumatic brain injury, an adult completes standardized language testing within normal limits but reports losing track of group conversations at work and having difficulty organizing household calls. The person says these problems interfere with returning to usual responsibilities.',
      rubric: [
        'Identify the mismatch between standardized performance and the reported effect on everyday communication.',
        'Use patient-reported outcome information to clarify the situations, concerns, and daily impact that the scores may miss.',
        'Explain a context-dependent next step, such as supportive strategies, intervention, or reassurance with monitoring, and tie the choice to the evidence.',
        'Avoid dismissing the reported problems because scores are normal, while also avoiding a definitive diagnosis from the report alone.'
      ],
      modelAnswer: 'The test scores do not fully describe communication in the person’s usual settings. I would gather patient-reported outcome information about group conversations and household calls, including how those difficulties affect daily responsibilities. The resulting evidence could support targeted strategies or intervention; reassurance with monitoring may be appropriate in a different context. I would explain why the selected next step fits this person’s findings. Normal scores alone do not justify dismissing the concerns, and the report alone does not establish a specific diagnosis.',
      explain: 'Module 9 recognizes that standardized measures can miss reported concerns. Patient-reported outcomes and context guide the choice among intervention, strategies, and reassurance with monitoring.',
      decision: 'Connect assessment evidence to meaningful daily function without overclaiming.'
    }
  ];

  const cases = drafts.map(d => ({
    id: `exam1-focus-clinical-${d.key}-01`, rootId: `exam1-focus-clinical-${d.key}-01`,
    version: revision, concept: `oct5-${d.key}`, module: 'm21', chapter: 'reasoning',
    pool: 'practice', type: 'list', responseKind: 'clinical', focusOnly: true,
    rubricScoring: 'weighted-v1', points: 4, title: d.title, caseTitle: d.title,
    case: { title: d.title }, style: ['case', 'written-application'],
    stem: d.stem + responseRequest,
    rubric: d.rubric, modelAnswer: d.modelAnswer, explain: d.explain,
    hint: 'Connect the assessment question, the evidence gap, your next steps, and the limits of the conclusion.',
    decision: d.decision, ev: 'assignment',
    src: [{ s: 'ASHA-M9', loc: `Assigned Module 9 slides, PDF pages ${d.pages}` },
      ...(d.lectureLines ? [{ s: 'REVIEW-20261007', loc: `Supplied transcript lines ${d.lectureLines}; lecture emphasis` }] : [])],
    evidence: [`oct5-source-${d.key}`, 'exam1-focus-practice-checklist']
  }));

  const objectiveIds = [
    'oct5-access-01', 'oct5-language-02', 'oct5-observations-01',
    'm6-raw-03', 'm7-pr-01', 'm4-int-02', 'e1-style-m11-s-04',
    'e1-slides-m13-pos-01', 'e1-slides-m14-ddk-01', 'm15-in-01',
    'e1-add-051', 'm17-v-03', 'e1-add-002', 'w6-cas-006', 'w6-cas-008',
    'e1-slides-m3-q-04', 'm2-cul-02', 'e1-slides-m3-suf-02',
    'm6-raw-02', 'm7-sc-04', 'm4-asked-02', 'm10-an-04', 'm9-fi-03',
    'e1-slides-m13-why-01', 'e1-slides-m13-pos-02', 'm15-in-02',
    'm16-d-03', 'e1-add-013', 'e1-add-020', 'w6-cas-013'
  ];
  const listingIds = ['e1-add-028', 'e1-add-035', 'w6-cas-018', 'e1-add-027'];
  const evidence = [{
    id: 'exam1-focus-practice-checklist',
    title: 'Clinical writing practice: how to use the checklist', summary: true,
    text: 'These are original practice cases with supplied facts. The four checklist components organize a defensible response to the assigned Module 9 case families. Equivalent wording and other source-supported approaches are acceptable. The checklists and four-point practice scores are not the instructor’s grading rubric or a subdivision of the provisional 40 written exam points. Self-scoring does not earn automated mastery.'
  }, {
    id: 'exam1-focus-format-review', title: 'October 7 instructor review: format evidence', summary: true,
    text: 'The supplied review identifies multiple choice, true/false, listing, and a clinical application of the October 5 activity. The assessment framework is an explicit listing example. The instructor plans to send the exact breakdown after finishing the exam. The temporary 15 MC plus 15 T/F allocation is the learner’s requested assumption, not a confirmed instructor count. See transcript lines 1, 107–119, 127–129.'
  }];
  D.sources['REVIEW-20261007'] = { label: 'October 7 in-class Diagnostics review · supplied transcript', kind: 'lecture' };
  const existing = new Set(T.items.map(q => q.id));
  if (cases.some(q => existing.has(q.id))) throw new Error('Exam-focus case IDs already exist.');
  const index = new Map(T.items.map(q => [q.id, q]));
  for (const id of [...objectiveIds, ...listingIds]) if (!index.has(id)) throw new Error(`Missing exam-focus item: ${id}`);
  if (objectiveIds.filter(id => index.get(id).type === 'mc').length !== 15 ||
      objectiveIds.filter(id => index.get(id).type === 'tf').length !== 15) throw new Error('Exam-focus objective counts do not match the provisional plan.');
  for (const q of cases) if (!T.concepts[q.concept] || !D.concepts[q.concept]) throw new Error(`Missing exam-focus concept: ${q.concept}`);
  T.items.push(...cases);
  if (D.items !== T.items) D.items.push(...cases);
  T.evidence.push(...evidence);
  window.DXExamFocus = {
    revision, title: 'Exam 1 focus', objectiveIds, listingIds, priorityListingIds: [...listingIds],
    caseIds: cases.map(q => q.id), objectivePoints: 60, objectivePointsEach: 2,
    writtenPointsReserved: 40, writtenAllocation: null,
    provisional: true,
    formatNote: 'Temporary plan requested by Ethan: 15 MC and 15 T/F at 2 points each. The remaining 40 exam points are reserved for listing and clinical writing; their division is not yet confirmed.',
    checklistNote: 'Written practice uses transparent self-check components, not the instructor’s official grading rubric. No combined 100-point exam grade is inferred.',
    objectiveNote: 'This fixed rehearsal samples current practice questions across all nine chapters. It is not an unseen pool or a prediction of the exact exam.',
    confirmed: [
      { text: 'Clinical application of the October 5 activity; explain a decision for a supplied patient situation.', source: 'REVIEW-20261007', loc: 'Lines 1, 111–113' },
      { text: 'Listing includes the assessment process/framework as an explicit example.', source: 'REVIEW-20261007', loc: 'Lines 107–109' },
      { text: 'MC and T/F are planned at two points each; exact counts remain pending.', source: 'REVIEW-20261007', loc: 'Lines 115–119' },
      { text: 'Questions draw directly from PowerPoints; practical experiences can be assessed by their underlying purpose.', source: 'REVIEW-20261007', loc: 'Lines 127–129' }
    ],
    emphasis: [
      { text: 'Distinguish disorder from difference using cultural and linguistic context.', loc: 'Transcript lines 11, 21, 41, 73–79' },
      { text: 'Dynamic assessment examines responsiveness to teaching and support.', loc: 'Transcript lines 59–61; deliberately repeated in line 59' },
      { text: 'Integrate multiple sources and methods instead of relying on one tool.', loc: 'Transcript lines 53–57, 63–75' },
      { text: 'Make assessment thorough, individualized, evidence-based, and adaptable.', loc: 'Transcript lines 39–45, 65–73' }
    ],
    emphasisNote: 'These are repeated points within one lecture, not independent corroborations or estimates of exam probability.',
    pending: ['Official question counts', 'Listing versus clinical-writing point allocation', 'Official written-response rubric', 'Any additional scope guidance in the promised email']
  };
})();
