from core import *
def S(**k): return k

M = "m08"
module(M, 8, "Psychometrics: can the result be trusted?", "Week 2 · Quality", "Week 2 (+ textbook Ch. 1)",
       "Her six properties of a quality assessment and their one-line questions, then the textbook's types of validity, reliability and bias, and the sensitivity/specificity direction logic.")
concept("m8-six", M, "The six properties and their one-line questions")
concept("m8-types", M, "Types of validity and reliability (textbook)")
concept("m8-sensspec", M, "Sensitivity vs specificity: direction and consequences")
concept("m8-bias", M, "Freedom from bias: item, intrinsic, extrinsic")

section(M, S(h="Her six properties (slides 23-24)",
    body=["**Psychometrics:** the science of measuring human characteristics, abilities and behaviors. A quality assessment must be:"],
    table=dict(head=["Property", "Definition on slide 23", "Bottom-line question (slide 24)"], rows=[
        ["Valid", "Measures the intended construct", "Is it measuring the right thing?"],
        ["Reliable", "Produces consistent results", "Are the results consistent?"],
        ["Standardized", "Administered and scored uniformly", "Was it given the same way to everyone?"],
        ["Unbiased", "Fair for all individuals and populations", "Is it fair?"],
        ["Sensitive", "Correctly identifies individuals who HAVE the condition", "Can it detect a problem when it's present?"],
        ["Specific", "Correctly identifies individuals who do NOT have the condition", "Can it rule out a problem when it's absent?"]]),
    callouts=[dict(k="source", t="Bottom line: if a test is not valid, reliable, standardized, sensitive and specific, and free from bias, the results cannot be trusted for accurate decision-making.", ev="slide"),
              dict(k="lecture", t="9/2: she framed it as a patient: would you accept surgery on a test that identifies the problem only about 60% of the time? 'Always put yourself into the situation.'", ev="lecture")],
    src=["W2:slides 23-24", "L0902"]))

section(M, S(h="Types of validity and reliability (textbook Ch. 1)",
    table=dict(head=["Type", "Meaning"], rows=[
        ["Face validity", "Looks like it tests the skill; a layperson can judge; not valuable alone"],
        ["Content validity", "Contents represent the domain; judged by experts (e.g., an articulation test eliciting all phonemes in their contexts)"],
        ["Construct validity", "Measures the theoretical construct (e.g., scores rise with age in typical children)"],
        ["Criterion validity: concurrent", "Compares to an established standard"],
        ["Criterion validity: predictive", "Predicts later performance (e.g., SAT → college)"],
        ["Test-retest reliability", "Stability over time: same test, same group, repeated"],
        ["Internal consistency (split-half)", "One half of the test correlates with the other half"],
        ["Intrarater / interrater reliability", "Same rater on different occasions / different raters agree"],
        ["Alternate-form (parallel-form) reliability", "Form A vs parallel Form B with the same group"]]),
    callouts=[dict(k="assignment", t="Your PPVT-5 detective work: reliability .97 overall, test-retest .88, alternate forms .84; validity correlations .77 with EVT-3 and .68 with CELF-5 Core Language (concurrent-type evidence). Correlations and reliability coefficients are NOT sensitivity and specificity.", ev="assignment")],
    src=["TB1:PDF pp. 40-41", "PPVT"]))

section(M, S(h="Sensitivity and specificity: direction",
    visual="sensspec",
    body=["Fix the TRUE status first. Among people who HAVE the disorder, how many does the test catch? → **sensitivity** (misses = false negatives). Among people who do NOT have it, how many does the test clear? → **specificity** (errors = false positives).",
          "Low sensitivity → disorders get missed (**under-identification**). Low specificity → typical people get flagged (**over-identification**). Textbook benchmark: .80 (80%) or higher is typically considered sufficient."],
    callouts=[dict(k="gonsoulin", t="COMD 4382 record: 'If an assessment has high specificity but low sensitivity, what's the impact?' (answer: under-identifies). Historical item type.", ev="historical")],
    src=["W2:slides 23-24", "TB1:PDF p. 42", "CODEX:section 6"]))

section(M, S(h="Freedom from bias (textbook)",
    bullets=["**Item bias**: individual items favor one group over another.",
             "**Intrinsic test bias**: the test generally favors one group; groups obtain different mean scores.",
             "**Extrinsic test bias**: group outcome differences come from societal differences, not the test itself."],
    src=["TB1:PDF p. 42"]))

match("m8-six-01", "m8-six",
   "Match each bottom-line question from her slide to its property.",
   [("Is it measuring the right thing?", "Validity"), ("Are the results consistent?", "Reliability"),
    ("Was it given the same way to everyone?", "Standardization"), ("Is it fair?", "Bias"),
    ("Can it detect a problem when it's present?", "Sensitivity"), ("Can it rule out a problem when it's absent?", "Specificity")],
   "Slide 24 is one question per property.", "Slide 24 verbatim.", ["W2:slide 24"])

mc("m8-six-02", "m8-six",
   "On her slide, 'correctly identifies the individuals who do not have the condition or disorder being measured' defines:",
   [("Specific", "Correct."), ("Sensitive", "Sensitive = correctly identifies those who HAVE the condition."),
    ("Valid", "Valid = measures the intended construct."), ("Unbiased", "Unbiased = fair for all individuals and populations.")],
   0, "HAVE vs do NOT have.", "Slide 23.", ["W2:slide 23"], style=("sibling",))

tf("m8-six-03", "m8-six",
   "Standardized, on her slide, means the test produces consistent results.",
   False, "Standardized = administered and scored uniformly. 'Produces consistent results' is RELIABLE.",
   "Sibling swap.", "Slide 23.", ["W2:slide 23"], style=("sibling",))

mc("m8-six-04", "m8-six",
   "A receptive vocabulary test gives nearly identical scores when a child takes it twice, but a review finds it mostly measures reading. Which property is most in question?",
   [("Validity", "Correct: consistent, but not measuring the intended construct."),
    ("Reliability", "The consistency is fine."),
    ("Standardization", "Nothing suggests non-uniform administration."),
    ("Specificity", "Specificity is about correctly clearing typical individuals.")],
   0, "Consistent but wrong target.", "Reliable ≠ valid. Validity asks whether it measures the right thing.", ["W2:slides 23-24"], style=("scenario",))

tf("m8-six-05", "m8-six",
   "If a test is not valid, reliable, standardized, sensitive, specific and free from bias, its results cannot be trusted for accurate decision-making.",
   True, "Tempting false edit: 'If a test is valid and reliable, sensitivity and specificity don't matter.'", "Slide 23 'Bottom Line'.", "Slide 23 bottom line.", ["W2:slide 23"])

mc("m8-type-01", "m8-types",
   "A new language test's scores are compared with an established, widely accepted test given at the same time. This is evidence of:",
   [("Concurrent validity", "Correct: a type of criterion validity comparing to an established standard."),
    ("Predictive validity", "Predictive compares to a FUTURE criterion."),
    ("Test-retest reliability", "Same test repeated over time."),
    ("Face validity", "Appearance only.")],
   0, "Established standard, same time.", "Textbook Ch. 1: concurrent validity compares the test to an established standard.", ["TB1:PDF pp. 40-41"], ev="textbook", style=("sibling",))

mc("m8-type-02", "m8-types",
   "Two clinicians score the same recorded test administration and reach the same results. Which property is demonstrated?",
   [("Interrater reliability", "Correct: two or more raters agree."),
    ("Intrarater reliability", "Same rater on more than one occasion."),
    ("Alternate-form reliability", "Two parallel forms."),
    ("Content validity", "Expert judgment of item coverage.")],
   0, "Inter = between people.", "Textbook Ch. 1 rater reliability.", ["TB1:PDF p. 41"], ev="textbook", style=("sibling",))

tf("m8-type-03", "m8-types",
   "Face validity alone is a strong measure of validity because experts judge whether the test looks appropriate.",
   False, "Face validity is judged by a layperson and alone is NOT a valuable measure; CONTENT validity is judged by experts.",
   "Who judges face vs content validity?", "Textbook Ch. 1.", ["TB1:PDF p. 40"], ev="textbook", style=("sibling",))

mc("m8-ss-01", "m8-sensspec",
   "A screening test has high specificity but low sensitivity. What is the most likely clinical consequence?",
   [("Children who have the disorder will be missed (under-identification)", "Correct: low sensitivity → false negatives."),
    ("Typically developing children will be flagged (over-identification)", "That results from LOW specificity."),
    ("Scores will change from one administration to the next", "Reliability problem."),
    ("The test will measure the wrong construct", "Validity problem.")],
   0, "Which property catches the disordered?", "Sensitivity catches those who have the disorder; if low, disorders are missed. High specificity means typical children are correctly cleared. This mirrors a COMD 4382 item.", ["W2:slides 23-24", "TB1:PDF p. 42", "CODEX:section 6"], style=("scenario",))

tf("m8-ss-02", "m8-sensspec",
   "A test with low sensitivity is more likely to falsely indicate the presence of a disorder.",
   False, "That is low SPECIFICITY (false positives). Low sensitivity MISSES disorders (false negatives).", "Specificity protects typical individuals.", "Textbook: the lower the specificity, the more likely the result falsely indicates presence of a disorder (false positive).", ["TB1:PDF p. 42"], ev="textbook")

mc("m8-ss-03", "m8-sensspec",
   "For clinical purposes, the textbook says sensitivity and specificity are typically considered sufficient at:",
   [(".80 (80%) or higher", "Correct."), (".60 (60%) or higher", "Too low; recall her 60% surgery example."),
    (".95 (95%) or higher", "Confuses with the 95% confidence level."), (".50 (50%) or higher", "Chance level.")],
   0, "Not the confidence-interval number.", "Textbook Ch. 1: .80 or higher.", ["TB1:PDF p. 42"], ev="textbook", style=("number",))

mc("m8-bias-01", "m8-bias",
   "Group differences in scores that result from societal differences rather than the test itself describe which type of bias (textbook)?",
   [("Extrinsic test bias", "Correct."), ("Intrinsic test bias", "Intrinsic: the test itself generally favors one group."),
    ("Item bias", "Individual items favor one group."), ("Confirmation bias", "A clinician reasoning error (ASHA video), not a test-bias type.")],
   0, "Ex- = outside the test.", "Textbook Ch. 1: item, intrinsic, extrinsic.", ["TB1:PDF p. 42"], ev="textbook", style=("sibling",))

tf("m8-bias-02", "m8-bias",
   "Her slide defines an unbiased test as one that produces consistent results across administrations.",
   False, "Consistency is reliability. Her slide: an unbiased test is fair for all individuals and populations.", "Slide 23; 'Is it fair?' on slide 24.", "Slides 23-24. On 9/2 she added: don't give a test to a population it wasn't built for and then treat a failure as meaningful.", ["W2:slides 23-24", "L0902"], style=("definition",))
