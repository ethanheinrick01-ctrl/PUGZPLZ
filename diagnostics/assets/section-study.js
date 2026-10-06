/* Explicit teaching-card links; no question, scoring or storage definitions. */
(function(){
  'use strict';
  const groups={
    m21:[['m3-questions'],['oct5-no-test'],['oct5-access'],['oct5-language'],['oct5-time'],['oct5-baseline'],['oct5-observations'],['oct5-function']],
    m01:[['m1-reasoning'],['m1-process'],['m1-conflict']],
    m02:[['m2-integrity'],['m2-ebp','m2-ethics'],['m2-hipaa'],['m2-culture']],
    m03:[['m3-eba'],['m3-eba','m3-problems','m3-cases'],['m3-questions'],['m3-accuracy'],['m3-validity-evidence'],['m3-sufficiency']],
    m04:[['m4-role'],['m4-asked'],['m4-cld'],['m4-da-std'],['m4-diff'],['m4-interp']],
    m05:[['m5-methods'],['m5-manual'],['m5-accmod'],['m5-normcrit']],
    m06:[['m6-ca'],['m6-adjusted'],['m6-basal'],['m6-raw']],
    m07:[['m7-norms'],['m7-scales'],['m7-bands'],['m7-percentile','m7-ae'],['m7-ci']],
    m08:[['m8-six'],['m8-types'],['m8-sensspec'],['m8-bias']],
    m09:[['m9-quality'],['m9-setting'],['m9-components'],['m9-history'],['m9-interview'],['m9-influences'],['m9-direct'],['m9-formalinformal']],
    m10:[['m10-analyze'],['m10-outcomes'],['m10-report'],['m10-share']],
    m11:[['m11-questions'],['m11-structure'],['m11-skills'],['m11-cases']],
    m12:[['m12-precautions'],['m12-tools'],['m12-findings']],
    m13:[['m13-why'],['m13-four','m13-posture'],['m13-posture'],['m13-airway'],['m13-rest'],['m13-jawlips']],
    m14:[['m14-tongue'],['m14-teeth'],['m14-palate','m14-diagram'],['m14-smc'],['m14-ddk'],['m14-document']],
    m15:[['m15-ddkadmin'],['m15-sample'],['m15-narrative'],['m15-rate'],['m15-intel'],['m15-phrases']],
    m16:[['m16-three'],['m16-observe'],['m16-dynamic'],['m16-informal'],['m16-observe','m16-informal'],['m16-observe','m16-informal']],
    m17:[['m17-lsa'],['m17-semantic'],['m17-narcomp','m17-levels'],['m17-checklist']],
    m18:[['m18-ca','m18-transfer','m18-boundary','m18-mixed']],
    m20:[['w6-plan','w6-screen','w6-context','w6-intelligibility'],['w6-stim','w6-norms'],['w6-processing'],['w6-record'],['w6-task']]
  };
  const exact={
    'm16:3':['m16-i-01','m16-i-02','m16-i-03'],
    'm16:4':['e1-add-053','e1-add-054'],
    'm16:5':['e1-add-055','e1-add-056','e1-add-059']
  };
  const cas={profile:['w6-ssd-cause','w6-profile'],features:['w6-cas-features'],assessment:['w6-cas-assess'],language:['w6-language']};
  const escape=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  function selection(key){
    const [module,index]=String(key).split(':');
    const concepts=module==='cas'?cas[index]:groups[module]?.[Number(index)];
    if(!concepts)return null;
    const items=(window.DX_EXAM1?.items||[]).filter(q=>q.type!=='list'&&concepts.includes(q.concept)&&(!exact[key]||(exact[key].includes(q.id)||exact[key].includes(q.rootId))));
    return {concepts:concepts.slice(),items:items.map(q=>q.id),n:Math.min(10,items.length)};
  }
  function button(key,title){
    const s=selection(key),n=s?.items.length||0;
    return `<div class="section-study"><p class="small">${n?`Up to ${s.n} focused question${s.n===1?'':'s'} · multiple choice first`:'Source note: dedicated practice questions are not yet available.'}</p><button type="button" class="btn primary" data-topic="section-study" data-section="${escape(key)}" data-section-title="${escape(title)}" aria-label="Study this section: ${escape(title)}" ${n?'':'disabled'}>Study this section <span aria-hidden="true">→</span></button></div>`;
  }
  window.DXSectionStudy={selection,button};
})();
