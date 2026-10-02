/* Presentation only. Source text, question versions and learner records stay separate. */
(function(){
  'use strict';
  const escape=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const targets={
    m01:['Build the clinical argument','Gather → interpret → decide','Clinical reasoning integrates several sources. A single score cannot settle conflicting evidence.'],
    m02:['Know the four features','Thorough · varied · evidence based · tailored','Keep each feature paired with its own explanation.'],
    m03:['Choose the test for the question','Purpose → accuracy → fit','Availability and familiarity do not establish diagnostic accuracy.'],
    m04:['Interpret the linguistic context','Difference ≠ disorder','Ask what the pattern means within the client’s languages and cultural experience.'],
    m05:['Protect the comparison','Accommodation ≠ modification','Changing the required task can change what a standard score means.'],
    m06:['Get the starting point right','Age → norms → raw score','Use the test manual for the correct normative group, basal and ceiling.'],
    m07:['Separate the score scales','Percentile ≠ percent correct','Standard, scaled, z and stanine scores use different means and standard deviations.'],
    m08:['Fix the true status first','Sensitivity: present · specificity: absent','Sensitivity catches people with the disorder; specificity clears people without it.'],
    m09:['Build the whole evaluation','History + hearing + direct evidence','Each component answers a different part of the referral question.'],
    m10:['Interpret before you report','Findings → meaning → recommendations','Analysis connects the results to functioning and justified next steps.'],
    m11:['Start broad, then clarify','Open question → specific example','The family’s answer should guide a useful follow-up question.'],
    m12:['Connect structure to function','Observation → task → interpretation','Appearance alone does not establish the effect on speech or other function.'],
    m13:['Keep the movement terms apart','Stability · mobility · dissociation · grading','Look at what stays steady, what moves, what moves independently and how movement is controlled.'],
    m14:['Document what the finding means','Structure + movement + functional effect','DDK provides information about coordination and consistency as well as rate.'],
    m15:['Keep numerator and denominator straight','Words / seconds · understood / total','Rate and intelligibility answer different questions; report the sampling context.'],
    m16:['Notice when teaching enters','Observe · elicit · teach and retest','The teaching phase is what makes an assessment dynamic.'],
    m17:['Zoom between story and language','Macrostructure ≠ microstructure','Story organization and the language used within a story are different levels of analysis.'],
    m18:['Convert through z','Distance from the mean, in SD units','Use z to move between scales while retaining the same relative position.'],
    m20:['Record what was produced','Substitution · omission · distortion · NR','Combine error recording with history, hearing, oral evidence and connected speech.']
  };
  const gold={
    'm01:0':['clinical reasoning','multiple sources','interpret it critically'],
    'm01:2':['clinical judgment','further testing is warranted','required for qualification'],
    'm02:0':['Thorough','Uses a variety of assessment methods','Evidence based','Tailored to the individual client'],
    'm03:0':[],
    'm06:0':['correct age-based normative group','if the age is wrong, every age-based score derived from the test may also be wrong'],
    'm07:2':['Below average','Significantly below average'],
    'm12:1':['INFORMAL','informal'],
    'm16:1':['walks in','observation']
  };
  const phrases={
    m01:['recognize limitations','Analysis','Observation'],m02:['clinical expertise','external and internal','client/patient/caregiver perspectives','within their competence','electronic PHI'],
    m03:['sensitivity','specificity','availability','familiarity','converging evidence'],m04:['Brief','Interact','Debrief','both languages','test-teach-retest','ASKED'],
    m05:['accommodation','modification','norm-referenced','criterion-referenced'],m06:['basal established','ceiling established','TEST-SPECIFIC','raw score','due date'],
    m07:['at or below','not percent correct','measurement error','WIDER','age equivalents'],m08:['false negatives','false positives','under-identification','over-identification','HAVE','do NOT have'],
    m09:['hearing screening','formal and informal','case history'],m10:['Clinical Impressions','Recommendations','prognosis'],m11:['open-ended','nonjudgmental','specific examples'],
    m12:['function','standard precautions'],m13:['stability','mobility','dissociation','grading'],m14:['AMR','SMR','elevation','function'],
    m15:['50-100','20 repetitions','10 repetitions','words per minute','intelligibility'],m16:['teaching phase','mediated learning experience','transfer'],m17:['macrostructure','microstructure','inferencing'],m18:['z =','standard deviation'],m20:['stimulability','IPA','omission','distortion','NR']
  };
  function rich(value,module,index){
    const emphasized=gold[module+':'+index]||[],keys=[...emphasized,...(phrases[module]||[])].sort((a,b)=>b.length-a.length);
    const pattern=keys.length?new RegExp('(?<![a-z0-9])('+keys.map(s=>s.replace(/[.*+?^${}()|[\]\\]/g,'\\$&')).join('|')+')(?![a-z0-9])','gi'):null;
    let budget=4;
    return String(value).split(/(\*\*.*?\*\*)/g).map(piece=>{
      const bold=piece.startsWith('**')&&piece.endsWith('**'),clean=bold?piece.slice(2,-2):piece;
      const parts=pattern?clean.split(pattern):[clean];
      const html=parts.map((s,i)=>{
        if(i%2&&budget-->0){const isGold=emphasized.some(k=>k.toLowerCase()===s.toLowerCase());return `<mark class="study-${isGold?'emphasis':'term'}">${escape(s)}</mark>`;}
        return escape(s);
      }).join('');
      return bold?`<strong class="study-key">${html}</strong>`:html;
    }).join('');
  }
  function legend(){return '<div class="reading-key" aria-label="Reading color key"><span><i class="key-dot gold"></i>Gold: documented emphasis</span><span><i class="key-dot cyan"></i>Cyan: key terms & distinctions</span><span>Color guides review; it does not predict exam questions.</span></div>';}
  function route(chapter,modules){return `<nav class="reading-route" aria-label="In this chapter"><p class="eyebrow">Your path through this chapter</p>${modules.map((m,i)=>`<button type="button" class="reading-stop" data-guide-jump="guide-${m.id}"><span>${String(i+1).padStart(2,'0')}</span>${escape(targets[m.id]?.[0]||m.title)}</button>`).join('')}</nav>`;}
  function moduleHead(m,n){const t=targets[m.id];return `<header class="guide-module-head" id="guide-${m.id}" tabindex="-1"><span class="module-count">${String(n+1).padStart(2,'0')}</span><div><p class="eyebrow">${escape(m.week||'Course guide')}</p><h2>${escape(m.title)}</h2></div></header>${t?`<div class="study-target"><span>Keep this distinction</span><p>${escape(t[1])}</p><small>${escape(t[2])}</small></div>`:''}`;}
  function badge(m,i,s){
    if(m==='m01'&&i===2)return '<p class="emphasis-label">Repeated in class · September 9 & 11</p>';
    if((s.callouts||[]).some(c=>c.k==='flag'))return '<p class="emphasis-label">Your saved exam emphasis flag</p>';
    if(m==='m01'&&i===0)return '<p class="emphasis-label">Instructor priority · Week 1 slides 4–5</p>';
    return '';
  }
  function conflict(){return `<figure class="decision-map" aria-label="Conflicting results require clinical interpretation"><div class="decision-input"><span>Formal result</span><strong>Within normal range</strong></div><div class="decision-input"><span>Observation & informal data</span><strong>Concern persists</strong></div><div class="decision-join"><span>↓</span>Evidence conflicts<span>↓</span></div><figcaption><strong>Use clinical judgment.</strong><span>Gather further evidence when the diagnosis is not yet supported.</span><small>Eligibility may separately require a standardized score. Sources: September 9/11; Week 3 overview, slide 13.</small></figcaption></figure>`;}
  function integrity(){const names=['Thorough','Varied methods','Evidence based','Tailored'],details=['Gather as much relevant information as possible.','Combine interview, history, observation, and formal and informal measures.','Use valid and reliable assessment approaches.','Fit the client’s age, skill level and ethnocultural background.'];return `<section class="integrity-map" aria-label="Four foundational integrity features"><div class="integrity-hub"><span>4</span><p>Features of a<br><strong>good assessment</strong></p></div><div class="integrity-spokes">${names.map((name,i)=>`<div class="integrity-spoke"><span>${String(i+1).padStart(2,'0')}</span><div><strong>${name}</strong><p>${details[i]}</p></div></div>`).join('')}</div><p class="small integrity-credit">Week 1, slide 7 · Original teaching diagram. Each feature answers a different quality question.</p></section>`;}
  function section(m,s,i){
    const special=m.id==='m01'&&i===2?conflict():m.id==='m02'&&i===0?integrity():'';
    const flag=badge(m.id,i,s);
    return `<article class="card study-card ${flag?'has-emphasis':''}">${flag}<h3>${escape(s.h)}</h3>${special}<div class="study-prose">${(s.body||[]).map(p=>`<p>${rich(p,m.id,i)}</p>`).join('')}${s.bullets?`<ul>${s.bullets.map(p=>`<li>${rich(p,m.id,i)}</li>`).join('')}</ul>`:''}</div>${s.visual?window.DXV.render(s.visual,{mode:'guide',zoom:false}):''}${s.table?`<div class="tablewrap" tabindex="0"><table class="topic-table study-table"><thead><tr>${s.table.head.map(p=>`<th>${escape(p)}</th>`).join('')}</tr></thead><tbody>${s.table.rows.map(row=>`<tr>${row.map(p=>`<td>${rich(p,m.id,i)}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`:''}${(s.callouts||[]).filter(c=>c.k!=='gonsoulin').map(c=>`<aside class="study-note note-${escape(c.k)}"><span>${({flag:'Your exam flag',lecture:'From the lecture',trap:'Keep these apart',numbers:'Numbers to retain',conflict:'Source distinction',textbook:'Textbook connection',source:'Source note',assignment:'Applied in class'})[c.k]||'Study note'}</span><p>${rich(c.t,m.id,i)}</p></aside>`).join('')}<p class="study-citation">Sources: ${(s.src||[]).map(escape).join('; ')}</p>${window.DXSectionStudy.button(m.id+':'+i,s.h)}</article>`;
  }
  window.DXGuideDesign={rich,legend,route,moduleHead,section};
})();
