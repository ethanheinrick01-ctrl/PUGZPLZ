/* Sections, concepts and mock domains. Concept ids for conditions match the old drill's slugs
   so legacy progress can be mapped as a prior signal. */
(function (root) {
  'use strict';
  var L = root.L = root.L || {};
  L.SECTIONS = [
    { id: 's1', n: 1, title: 'Foundations of AR', short: 'AR foundations', dom: 'ov', src: 'Lecture 1 (8/25, 8/27) + textbook Ch 1' },
    { id: 's2', n: 2, title: 'Audiogram and Sutherland numbers', short: 'Audiogram + numbers', dom: 'dx', src: 'Lecture 1 slides 15-19, adopted scale, 4190 foundations' },
    { id: 's3', n: 3, title: 'Etiology frameworks and genetics', short: 'Etiology + genetics', dom: 'et', src: 'Lecture 2 slides 1-22 (9/01)' },
    { id: 's4', n: 4, title: 'Infections, perinatal and postnatal causes', short: 'Infections + peri/postnatal', dom: 'et', src: 'Lecture 2 slides 23-39 (9/01)' },
    { id: 's5', n: 5, title: 'Syndromic hearing loss', short: 'Syndromes', dom: 'et', src: 'Lecture 2 slides 40-77 (9/01, 9/03, 9/08)' },
    { id: 's6', n: 6, title: 'Pediatric test interpretation (guest)', short: 'Guest: interpretation', dom: 'dx', src: 'Guest lecture, Fallon Lee AuD (9/15, 9/17)' },
    { id: 's7', n: 7, title: 'Hearing aids', short: 'Hearing aids', dom: 'ha', src: 'Lecture 3 slides 1-34 (9/08, 9/10) + textbook Ch 2' },
    { id: 's8', n: 8, title: 'Pediatric amplification', short: 'Peds amplification', dom: 'ha', src: 'Lecture 3 slides 35-55 + AAA 2013 + handouts' },
    { id: 's9', n: 9, title: 'HAT, classroom acoustics, count-the-dots', short: 'HAT + classroom + SII', dom: 'ha', src: 'Lecture 3 slides 56-82 + Killion & Mueller 2010' }
  ];
  L.DOMAINS = {
    ov: { name: 'Overview of AR', share70: 10, share35: 5 },
    et: { name: 'Etiology of pediatric HL', share70: 18, share35: 9 },
    dx: { name: 'Diagnostic interpretation', share70: 21, share35: 11 },
    ha: { name: 'Hearing aids and HAT', share70: 21, share35: 10 }
  };
  var C = {
    // S1
    'ar-definition': ['s1', 'AR definition, goal, habilitation vs rehabilitation'],
    'ar-need': ['s1', 'Need for AR and prevalence figures'],
    'ar-providers': ['s1', 'Who provides AR, settings, entry degrees'],
    'onset-terms': ['s1', 'Time of onset terms'],
    'consequences': ['s1', 'Consequences of HL (primary vs secondary) and ICF terms'],
    'core-care': ['s1', 'CORE and CARE model components'],
    'outcomes-l1': ['s1', 'Verification vs validation (Lecture 1 framing)'],
    'contemporary': ['s1', 'Associations, EBP, equity'],
    // S2
    'degree-scale': ['s2', 'Adopted degree scale incl. boundaries'],
    'pta-degree': ['s2', 'PTA calculation and degree by PTA'],
    'loss-type': ['s2', 'Type of loss from AC/BC'],
    'configuration': ['s2', 'Configuration'],
    'audiogram-description': ['s2', 'Full audiogram description'],
    'symbols': ['s2', 'Audiogram symbols and conventions'],
    'speech-audiometry': ['s2', 'SRT, SDT, WRS, SL (4190 foundations)'],
    'reflex-sl': ['s2', 'Acoustic reflex SL (4190 foundations)'],
    // S3
    'etiology-stats': ['s3', 'Pediatric HL statistics'],
    'congenital-acquired': ['s3', 'Congenital vs acquired'],
    'endo-exo': ['s3', 'Endogenous vs exogenous'],
    'timing': ['s3', 'Prenatal, perinatal, postnatal'],
    'epidemiology': ['s3', 'Epidemiology (hereditary %, syndromic %, low birth weight)'],
    'inheritance': ['s3', 'Inheritance patterns and pedigrees'],
    michel: ['s3', 'Michel aplasia'],
    mondini: ['s3', 'Mondini dysplasia'],
    connexin: ['s3', 'Connexin 26 and genetic testing'],
    // S4
    rubella: ['s4', 'Congenital rubella syndrome'],
    cmv: ['s4', 'Cytomegalovirus (CMV)'],
    toxo: ['s4', 'Toxoplasmosis'],
    syphilis: ['s4', 'Syphilis'],
    hiv: ['s4', 'HIV'],
    hsv: ['s4', 'Herpes simplex virus'],
    rh: ['s4', 'Rh (maternal-fetal blood group) incompatibility'],
    anoxia: ['s4', 'Anoxia'],
    hemorrhage: ['s4', 'Intracranial hemorrhage'],
    meningitis: ['s4', 'Meningitis'],
    'postnatal-list': ['s4', 'Other postnatal causes (mumps, ototoxins, trauma, fistula, neoplasm, autoimmune)'],
    bilirubin: ['s4', 'Hyperbilirubinemia and kernicterus'],
    // S5
    'syndromic-overview': ['s5', 'Syndromic HL overview'],
    apert: ['s5', 'Apert syndrome'], bor: ['s5', 'Branchio-oto-renal spectrum'], charge: ['s5', 'CHARGE syndrome'],
    cdls: ['s5', 'Cornelia de Lange syndrome'], crouzon: ['s5', 'Crouzon syndrome'], down: ['s5', 'Down syndrome'],
    fas: ['s5', 'Fetal alcohol syndrome'], goldenhar: ['s5', 'Goldenhar syndrome'], jbs: ['s5', 'Johanson-Blizzard syndrome'],
    pierre: ['s5', 'Pierre Robin sequence'], stickler: ['s5', 'Stickler syndrome'], treacher: ['s5', 'Treacher Collins syndrome'],
    turner: ['s5', 'Turner syndrome'], usher: ['s5', 'Usher syndrome'], waardenburg: ['s5', 'Waardenburg syndrome'], pendred: ['s5', 'Pendred syndrome'],
    'syndrome-photo': ['s5', 'Syndrome photo identification'],
    // S6
    'peds-context': ['s6', 'Why pediatric results need context (AuD-SLP, case history)'],
    'same-pta': ['s6', 'Same PTA is not the same child'],
    soundfield: ['s6', 'Sound field is not ear-specific'],
    'uni-bi': ['s6', 'Unilateral vs bilateral impact'],
    'pattern-not-dx': ['s6', 'Audio pattern is not a diagnosis'],
    'cross-check': ['s6', 'Cross-check principle'],
    tympanometry: ['s6', 'Tympanometry'],
    oae: ['s6', 'Otoacoustic emissions'],
    abr: ['s6', 'ABR: generators, interpretation, uses'],
    'chl-peds': ['s6', 'Pediatric conductive loss profile'],
    'snhl-peds': ['s6', 'Pediatric sensorineural loss profile'],
    'mhl-peds': ['s6', 'Pediatric mixed loss profile'],
    ansd: ['s6', 'ANSD pattern'],
    'risk-factors': ['s6', 'Pediatric risk factors and monitoring'],
    // S7
    'ha-components': ['s7', 'Four basic HA components'],
    batteries: ['s7', 'Batteries'],
    'ha-features': ['s7', 'Features: VC, telecoil, memories, Bluetooth/Auracast'],
    'ha-styles': ['s7', 'Hearing aid styles'],
    earmold: ['s7', 'Earmolds and venting, occlusion'],
    candidacy: ['s7', 'Candidacy variables'],
    'fitting-selection': ['s7', 'Selection: gain, finances, technology'],
    'quality-control': ['s7', 'ANSI quality control measures'],
    programming: ['s7', 'Programming: NOAH, interface, targets, WDRC'],
    prescriptive: ['s7', 'Prescriptive methods: NAL-NL2 vs DSL'],
    orientation: ['s7', 'HIO-BASICS orientation'],
    'verify-validate': ['s7', 'Verification vs validation'],
    // S8
    jcih: ['s8', 'JCIH timelines'],
    'child-hl-effects': ['s8', 'Effects of HL on a child; the brain'],
    'peds-bte': ['s8', 'Why BTEs for children; earmold replacement'],
    'peds-orientation': ['s8', 'Pediatric orientation, wearing schedule, follow-up'],
    'aaa-guidelines': ['s8', 'AAA 2013 pediatric amplification guideline'],
    'listening-check': ['s8', 'Hearing aid listening check'],
    ling6: ['s8', 'Ling six-sound check'],
    'la-law': ['s8', 'Louisiana R.S. 22:1038'],
    'special-fittings': ['s8', 'CROS/BiCROS, bone conduction, implants'],
    'peds-validation': ['s8', 'Pediatric validation tools'],
    // S9
    'hat-types': ['s9', 'HAT types (hardwire, FM/DM, IR, loop)'],
    'phone-tv': ['s9', 'Telephone and TV assistive technology'],
    snr: ['s9', 'SNR and classroom noise'],
    reverberation: ['s9', 'Reverberation and RT'],
    distance: ['s9', 'Distance'],
    'rm-hat': ['s9', 'Remote microphone (FM/DM) and CADS'],
    'ald-assessment': ['s9', 'SIFTER, LIFE-R, CHAPS'],
    'smart-goals': ['s9', 'SMART goals'],
    'count-dots': ['s9', 'Count-the-dots SII'],
    'sii-to-speech': ['s9', 'SII to predicted speech scores']
  };
  L.CONCEPTS = {};
  Object.keys(C).forEach(function (k) { L.CONCEPTS[k] = { id: k, sec: C[k][0], name: C[k][1] }; });

  // Map old v1 lab concepts (e1-*, ss-*) and drill condition slugs to v2 concepts (prior signal only).
  L.LEGACY_MAP = {
    'e1-abr': 'abr', 'e1-ar-goal': 'ar-definition', 'e1-bte-child': 'peds-bte', 'e1-care': 'core-care', 'e1-core': 'core-care',
    'e1-case-conductive': 'chl-peds', 'e1-case-mixed': 'mhl-peds', 'e1-case-sensorineural': 'snhl-peds', 'e1-check': 'listening-check',
    'e1-child-function': 'child-hl-effects', 'e1-components': 'ha-components', 'e1-crosscheck': 'cross-check', 'e1-description': 'audiogram-description',
    'e1-dots': 'count-dots', 'e1-ebp': 'contemporary', 'e1-ehdi': 'ar-need', 'e1-gain': 'quality-control', 'e1-handout': 'la-law',
    'e1-inheritance': 'inheritance', 'e1-ling': 'ling6', 'e1-maternal': 'rh', 'e1-orientation': 'orientation', 'e1-outcomes': 'verify-validate',
    'e1-pta': 'pta-degree', 'e1-remote': 'rm-hat', 'e1-reverb': 'reverberation', 'e1-routing': 'special-fittings', 'e1-smart': 'smart-goals',
    'e1-snr': 'snr', 'e1-speech': 'speech-audiometry', 'e1-styles': 'ha-styles', 'e1-timing': 'timing', 'e1-type': 'loss-type', 'e1-verify': 'verify-validate',
    'ss-case': 'audiogram-description', 'ss-degree': 'degree-scale', 'ss-hardware': 'ha-components', 'ss-reflex': 'reflex-sl', 'ss-speech': 'speech-audiometry', 'ss-tymp': 'tympanometry',
    mumps: 'postnatal-list', ototoxins: 'postnatal-list', trauma: 'postnatal-list', fistula: 'postnatal-list', medulloblastoma: 'postnatal-list', autoimmune: 'postnatal-list'
  };
  L.legacyConcept = function (k) { return L.CONCEPTS[k] ? k : (L.LEGACY_MAP[k] || null); };
})(typeof window !== 'undefined' ? window : globalThis);
