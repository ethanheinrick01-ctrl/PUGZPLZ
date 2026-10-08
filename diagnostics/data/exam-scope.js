/* Source and wording gate for new activities only. Historical definitions and saved snapshots remain intact. */
(function(){
 'use strict';
 const retired={
  "m1-reas-01": "Retained historical wording; current practice uses content questions without slide-recall or professor-recall stems.",
  "m1-reas-03": "Retained historical wording; current practice uses content questions without slide-recall or professor-recall stems.",
  "m1-proc-02": "Retained historical wording; current practice uses content questions without slide-recall or professor-recall stems.",
  "m1-proc-03": "Retained historical wording; current practice uses content questions without slide-recall or professor-recall stems.",
  "m1-conf-01": "Retained historical wording; current practice uses content questions without slide-recall or professor-recall stems.",
  "m1-conf-02": "Retained historical wording; current practice uses content questions without slide-recall or professor-recall stems.",
  "m1-conf-03": "Retained historical wording; current practice uses content questions without slide-recall or professor-recall stems.",
  "m2-int-01": "Retained historical wording; current practice uses content questions without slide-recall or professor-recall stems.",
  "m2-int-02": "Retained historical wording; current practice uses content questions without slide-recall or professor-recall stems.",
  "m2-ebp-01": "Retained historical wording; current practice uses content questions without slide-recall or professor-recall stems.",
  "m2-ebp-02": "Retained historical wording; current practice uses content questions without slide-recall or professor-recall stems.",
  "m2-ebp-03": "Retained historical wording; current practice uses content questions without slide-recall or professor-recall stems.",
  "m2-eth-01": "Retained historical wording; current practice uses content questions without slide-recall or professor-recall stems.",
  "m2-hip-02": "Retained historical wording; current practice uses content questions without slide-recall or professor-recall stems.",
  "m2-hip-04": "Retained historical wording; current practice uses content questions without slide-recall or professor-recall stems.",
  "m2-cul-01": "Retained historical wording; current practice uses content questions without slide-recall or professor-recall stems.",
  "m2-cul-03": "Retained historical wording; current practice uses content questions without slide-recall or professor-recall stems.",
  "m4-role-01": "Retained historical wording; current practice uses content questions without slide-recall or professor-recall stems.",
  "m4-role-02": "Retained historical wording; current practice uses content questions without slide-recall or professor-recall stems.",
  "m4-role-03": "Retained historical wording; current practice uses content questions without slide-recall or professor-recall stems.",
  "m4-cld-01": "Retained historical wording; current practice uses content questions without slide-recall or professor-recall stems.",
  "m4-cld-02": "Retained historical wording; current practice uses content questions without slide-recall or professor-recall stems.",
  "m4-cld-03": "Retained historical wording; current practice uses content questions without slide-recall or professor-recall stems.",
  "m4-cld-04": "Retained historical wording; current practice uses content questions without slide-recall or professor-recall stems.",
  "m4-da-01": "Retained historical wording; current practice uses content questions without slide-recall or professor-recall stems.",
  "m4-diff-02": "Retained historical wording; current practice uses content questions without slide-recall or professor-recall stems.",
  "m4-diff-03": "Retained historical wording; current practice uses content questions without slide-recall or professor-recall stems.",
  "m4-diff-04": "Retained historical wording; current practice uses content questions without slide-recall or professor-recall stems.",
  "m4-int-01": "Retained historical wording; current practice uses content questions without slide-recall or professor-recall stems.",
  "m4-int-02": "Retained historical wording; current practice uses content questions without slide-recall or professor-recall stems.",
  "m4-int-04": "Retained historical wording; current practice uses content questions without slide-recall or professor-recall stems.",
  "m4-int-05": "Retained historical wording; current practice uses content questions without slide-recall or professor-recall stems.",
  "m5-meth-01": "Retained historical wording; current practice uses content questions without slide-recall or professor-recall stems.",
  "m5-meth-02": "Retained historical wording; current practice uses content questions without slide-recall or professor-recall stems.",
  "m5-meth-03": "Retained historical wording; current practice uses content questions without slide-recall or professor-recall stems.",
  "m5-meth-04": "Retained historical wording; current practice uses content questions without slide-recall or professor-recall stems.",
  "m5-man-01": "Retained historical wording; current practice uses content questions without slide-recall or professor-recall stems.",
  "m5-acc-02": "Retained historical wording; current practice uses content questions without slide-recall or professor-recall stems.",
  "m6-ca-02": "Retained historical wording; current practice uses content questions without slide-recall or professor-recall stems.",
  "m6-ca-07": "Retained historical wording; current practice uses content questions without slide-recall or professor-recall stems.",
  "m6-adj-02": "Retained historical wording; current practice uses content questions without slide-recall or professor-recall stems.",
  "m6-bc-01": "Retained historical wording; current practice uses content questions without slide-recall or professor-recall stems.",
  "m6-bc-04": "Retained historical wording; current practice uses content questions without slide-recall or professor-recall stems.",
  "m6-raw-01": "Retained historical wording; current practice uses content questions without slide-recall or professor-recall stems.",
  "m7-norm-01": "Retained historical wording; current practice uses content questions without slide-recall or professor-recall stems.",
  "m7-band-06": "Retained historical wording; current practice uses content questions without slide-recall or professor-recall stems.",
  "m7-pr-01": "Retained historical wording; current practice uses content questions without slide-recall or professor-recall stems.",
  "e1-rev-m7-ae-02": "Retained historical wording; current practice uses content questions without slide-recall or professor-recall stems.",
  "m7-ae-03": "Retained historical wording; current practice uses content questions without slide-recall or professor-recall stems.",
  "m7-ci-01": "Retained historical wording; current practice uses content questions without slide-recall or professor-recall stems.",
  "m7-ci-03": "Retained historical wording; current practice uses content questions without slide-recall or professor-recall stems.",
  "m7-ci-04": "Retained historical wording; current practice uses content questions without slide-recall or professor-recall stems.",
  "m7-ci-05": "Retained historical wording; current practice uses content questions without slide-recall or professor-recall stems.",
  "m8-six-01": "Retained historical wording; current practice uses content questions without slide-recall or professor-recall stems.",
  "m8-six-02": "Retained historical wording; current practice uses content questions without slide-recall or professor-recall stems.",
  "m8-six-03": "Retained historical wording; current practice uses content questions without slide-recall or professor-recall stems.",
  "m8-ss-03": "Retained historical wording; current practice uses content questions without slide-recall or professor-recall stems.",
  "m8-bias-01": "Retained historical wording; current practice uses content questions without slide-recall or professor-recall stems.",
  "m8-bias-02": "Retained historical wording; current practice uses content questions without slide-recall or professor-recall stems.",
  "m9-q-01": "Retained historical wording; current practice uses content questions without slide-recall or professor-recall stems.",
  "m9-q-03": "Retained historical wording; current practice uses content questions without slide-recall or professor-recall stems.",
  "m9-set-01": "Retained historical wording; current practice uses content questions without slide-recall or professor-recall stems.",
  "m9-set-02": "Retained historical wording; current practice uses content questions without slide-recall or professor-recall stems.",
  "m9-comp-01": "Retained historical wording; current practice uses content questions without slide-recall or professor-recall stems.",
  "m9-comp-03": "Retained historical wording; current practice uses content questions without slide-recall or professor-recall stems.",
  "m9-hist-01": "Retained historical wording; current practice uses content questions without slide-recall or professor-recall stems.",
  "m9-hist-02": "Retained historical wording; current practice uses content questions without slide-recall or professor-recall stems.",
  "m9-int-03": "Retained historical wording; current practice uses content questions without slide-recall or professor-recall stems.",
  "m9-dir-02": "Retained historical wording; current practice uses content questions without slide-recall or professor-recall stems.",
  "m9-dir-03": "Retained historical wording; current practice uses content questions without slide-recall or professor-recall stems.",
  "m9-fi-01": "Retained historical wording; current practice uses content questions without slide-recall or professor-recall stems.",
  "m9-fi-02": "Retained historical wording; current practice uses content questions without slide-recall or professor-recall stems.",
  "m9-fi-04": "Retained historical wording; current practice uses content questions without slide-recall or professor-recall stems.",
  "m10-an-01": "Retained historical wording; current practice uses content questions without slide-recall or professor-recall stems.",
  "m10-an-02": "Retained historical wording; current practice uses content questions without slide-recall or professor-recall stems.",
  "m10-an-03": "Retained historical wording; current practice uses content questions without slide-recall or professor-recall stems.",
  "m10-an-04": "Retained historical wording; current practice uses content questions without slide-recall or professor-recall stems.",
  "m10-out-01": "Retained historical wording; current practice uses content questions without slide-recall or professor-recall stems.",
  "m10-out-02": "Retained historical wording; current practice uses content questions without slide-recall or professor-recall stems.",
  "m10-out-03": "Retained historical wording; current practice uses content questions without slide-recall or professor-recall stems.",
  "m10-sh-01": "Retained historical wording; current practice uses content questions without slide-recall or professor-recall stems.",
  "e1-style-m10-sh-02": "Retained historical wording; current practice uses content questions without slide-recall or professor-recall stems.",
  "m10-sh-03": "Retained historical wording; current practice uses content questions without slide-recall or professor-recall stems.",
  "m11-q-01": "Retained historical wording; current practice uses content questions without slide-recall or professor-recall stems.",
  "m11-q-02": "Retained historical wording; current practice uses content questions without slide-recall or professor-recall stems.",
  "m11-s-01": "Retained historical wording; current practice uses content questions without slide-recall or professor-recall stems.",
  "m11-k-01": "Retained historical wording; current practice uses content questions without slide-recall or professor-recall stems.",
  "m11-k-02": "Retained historical wording; current practice uses content questions without slide-recall or professor-recall stems.",
  "m11-k-03": "Retained historical wording; current practice uses content questions without slide-recall or professor-recall stems.",
  "m12-p-01": "Excluded-deck dependency: no independently verified included source for this exact question.",
  "m12-p-02": "Retained historical wording; current practice uses content questions without slide-recall or professor-recall stems.",
  "m12-t-01": "Retained historical wording; current practice uses content questions without slide-recall or professor-recall stems.",
  "m12-t-02": "Retained historical wording; current practice uses content questions without slide-recall or professor-recall stems.",
  "m12-t-03": "Retained historical wording; current practice uses content questions without slide-recall or professor-recall stems.",
  "m12-f-01": "Retained historical wording; current practice uses content questions without slide-recall or professor-recall stems.",
  "m12-f-02": "Excluded-deck dependency: no independently verified included source for this exact question.",
  "m12-f-03": "Retained historical wording; current practice uses content questions without slide-recall or professor-recall stems.",
  "m12-f-04": "Retained historical wording; current practice uses content questions without slide-recall or professor-recall stems.",
  "e1-slides-m13-rest-02": "Retained historical wording; current practice uses content questions without slide-recall or professor-recall stems.",
  "e1-slides-m14-dia-02": "Excluded-deck dependency: no independently verified included source for this exact question.",
  "e1-slides-m14-ddk-01": "Excluded-deck dependency: no independently verified included source for this exact question.",
  "e1-slides-m14-ddk-02": "Excluded-deck dependency: no independently verified included source for this exact question.",
  "e1-slides-m14-ddk-03": "Excluded-deck dependency: no independently verified included source for this exact question.",
  "e1-rev-m15-dd-01": "Retained historical wording; current practice uses content questions without slide-recall or professor-recall stems.",
  "m15-dd-02": "Retained historical wording; current practice uses content questions without slide-recall or professor-recall stems.",
  "m15-dd-03": "Retained historical wording; current practice uses content questions without slide-recall or professor-recall stems.",
  "m15-dd-04": "Retained historical wording; current practice uses content questions without slide-recall or professor-recall stems.",
  "m15-dd-05": "Excluded-deck dependency: no independently verified included source for this exact question.",
  "m15-sa-01": "Retained historical wording; current practice uses content questions without slide-recall or professor-recall stems.",
  "m15-sa-02": "Retained historical wording; current practice uses content questions without slide-recall or professor-recall stems.",
  "m15-sa-03": "Retained historical wording; current practice uses content questions without slide-recall or professor-recall stems.",
  "m15-sa-04": "Retained historical wording; current practice uses content questions without slide-recall or professor-recall stems.",
  "m15-na-01": "Retained historical wording; current practice uses content questions without slide-recall or professor-recall stems.",
  "m15-na-02": "Retained historical wording; current practice uses content questions without slide-recall or professor-recall stems.",
  "m15-na-03": "Retained historical wording; current practice uses content questions without slide-recall or professor-recall stems.",
  "m15-ra-01": "Excluded-deck dependency: no independently verified included source for this exact question.",
  "m15-ra-02": "Retained historical wording; current practice uses content questions without slide-recall or professor-recall stems.",
  "m15-ra-03": "Retained historical wording; current practice uses content questions without slide-recall or professor-recall stems.",
  "m15-ra-04": "Retained historical wording; current practice uses content questions without slide-recall or professor-recall stems.",
  "m15-ra-05": "Excluded-deck dependency: no independently verified included source for this exact question.",
  "m15-in-01": "Retained historical wording; current practice uses content questions without slide-recall or professor-recall stems.",
  "m15-in-03": "Retained historical wording; current practice uses content questions without slide-recall or professor-recall stems.",
  "m15-ph-01": "Retained historical wording; current practice uses content questions without slide-recall or professor-recall stems.",
  "m15-ph-02": "Retained historical wording; current practice uses content questions without slide-recall or professor-recall stems.",
  "m16-o-01": "Retained historical wording; current practice uses content questions without slide-recall or professor-recall stems.",
  "m16-o-02": "Retained historical wording; current practice uses content questions without slide-recall or professor-recall stems.",
  "m16-d-01": "Retained historical wording; current practice uses content questions without slide-recall or professor-recall stems.",
  "m16-i-01": "Retained historical wording; current practice uses content questions without slide-recall or professor-recall stems.",
  "m17-l-01": "Retained historical wording; current practice uses content questions without slide-recall or professor-recall stems.",
  "m17-l-02": "Retained historical wording; current practice uses content questions without slide-recall or professor-recall stems.",
  "m17-s-01": "Retained historical wording; current practice uses content questions without slide-recall or professor-recall stems.",
  "m17-s-02": "Retained historical wording; current practice uses content questions without slide-recall or professor-recall stems.",
  "m17-n-01": "Retained historical wording; current practice uses content questions without slide-recall or professor-recall stems.",
  "m17-v-01": "Retained historical wording; current practice uses content questions without slide-recall or professor-recall stems.",
  "m17-v-02": "Retained historical wording; current practice uses content questions without slide-recall or professor-recall stems.",
  "m18-tr-03": "Retained historical wording; current practice uses content questions without slide-recall or professor-recall stems.",
  "e1-rev-m18-bd-05": "Retained historical wording; current practice uses content questions without slide-recall or professor-recall stems.",
  "m18-mx-01": "Excluded-deck dependency: no independently verified included source for this exact question.",
  "e1-slides-m18-mx-02": "Excluded-deck dependency: no independently verified included source for this exact question.",
  "m18-mx-03": "Retained historical wording; current practice uses content questions without slide-recall or professor-recall stems.",
  "m18-mx-04": "Retained historical wording; current practice uses content questions without slide-recall or professor-recall stems.",
  "e1-add-025": "Retained historical wording; current practice uses content questions without slide-recall or professor-recall stems.",
  "e1-add-038": "Retained historical wording; current practice uses content questions without slide-recall or professor-recall stems.",
  "e1-add-041": "Excluded-deck dependency: no independently verified included source for this exact question.",
  "e1-add-042": "Excluded-deck dependency: no independently verified included source for this exact question.",
  "e1-add-050": "Excluded-deck dependency: no independently verified included source for this exact question.",
  "e1-original-evaluation-mc-08": "Excluded-deck dependency: no independently verified included source for this exact question.",
  "e1-original-evaluation-tf-09": "Excluded-deck dependency: no independently verified included source for this exact question.",
  "e1-original-sampling-mc-01": "Excluded-deck dependency: no independently verified included source for this exact question.",
  "e1-original-sampling-mc-03": "Excluded-deck dependency: no independently verified included source for this exact question.",
  "e1-original-sampling-mc-06": "Excluded-deck dependency: no independently verified included source for this exact question.",
  "e1-original-sampling-mc-08": "Excluded-deck dependency: no independently verified included source for this exact question.",
  "e1-original-sampling-mc-09": "Excluded-deck dependency: no independently verified included source for this exact question.",
  "e1-original-sampling-tf-01": "Excluded-deck dependency: no independently verified included source for this exact question.",
  "e1-original-sampling-tf-02": "Excluded-deck dependency: no independently verified included source for this exact question.",
  "e1-original-sampling-tf-03": "Excluded-deck dependency: no independently verified included source for this exact question.",
  "e1-original-sampling-tf-06": "Excluded-deck dependency: no independently verified included source for this exact question.",
  "e1-original-sampling-tf-09": "Excluded-deck dependency: no independently verified included source for this exact question.",
  "e1-original-sampling-tf-10": "Excluded-deck dependency: no independently verified included source for this exact question."
},overrides={
  "e1-slides-m14-tr-01": [
    {
      "s": "W6",
      "loc": "Slide 12: percentage of words understood"
    }
  ],
  "m15-in-02": [
    {
      "s": "W6",
      "loc": "Slide 12: listener familiarity influences intelligibility"
    }
  ],
  "e1-original-sampling-mc-05": [
    {
      "s": "W6",
      "loc": "Slide 11: reading passages with controlled phoneme content supplement speech samples"
    }
  ],
  "e1-original-sampling-mc-07": [
    {
      "s": "W6",
      "loc": "Slide 12: listener familiarity and environment affect intelligibility"
    }
  ],
  "e1-original-sampling-mc-10": [
    {
      "s": "W6",
      "loc": "Slides 11\u201312: speech rate and intelligibility are separate sample findings"
    }
  ],
  "e1-original-sampling-tf-04": [
    {
      "s": "W6",
      "loc": "Slide 12: environment affects intelligibility"
    }
  ],
  "e1-original-oral-mc-08": [
    {
      "s": "OPE",
      "loc": "2:45\u20133:41: hand hygiene, gloves and cleaning examination tools between clients; application to handling used tools"
    }
  ],
  "m10-an-01": [
    {
      "s": "W3A",
      "loc": "Slide 16: assimilation and analysis"
    }
  ],
  "m12-t-02": [
    {
      "s": "W6-oral",
      "loc": "Slides 3, 5\u20136: structure, function and clinical significance"
    }
  ],
  "m13-why-03": [
    {
      "s": "OPE",
      "loc": "2:45\u20133:41: standard precautions apply regardless of diagnosis"
    }
  ],
  "e1-slides-m14-pa-01": [
    {
      "s": "W6-oral",
      "loc": "Slides 3, 5\u20136: palatal configuration, function and treatment planning"
    }
  ],
  "e1-original-sampling-mc-02": [
    {
      "s": "W5",
      "loc": "Slide 11: language use within representative conversational samples"
    }
  ],
  "e1-original-sampling-mc-04": [
    {
      "s": "W5",
      "loc": "Slides 13\u201316: narrative organization, events and sequencing"
    }
  ],
  "e1-original-sampling-tf-05": [
    {
      "s": "W5",
      "loc": "Slide 11: representative samples from real conversation across contexts"
    }
  ],
  "e1-original-sampling-tf-07": [
    {
      "s": "W5",
      "loc": "Slide 11: representative samples, varying contexts and activities"
    }
  ],
  "e1-original-sampling-tf-08": [
    {
      "s": "W5",
      "loc": "Slides 13\u201316: narrative organization versus isolated words"
    }
  ]
};
 function eligible(q){const id=typeof q==='string'?q:q.id;return !Object.prototype.hasOwnProperty.call(retired,id);}
 function prepare(q){return overrides[q.id]?{...q,src:overrides[q.id].map(s=>({...s})),scopeRevision:'email-20261008'}:q;}
 window.DXExamScope={revision:'email-20261008',retired,overrides,eligible,prepare};
})();
