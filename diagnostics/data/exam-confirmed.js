/* October 8 instructor announcement. Saved activities keep their own format and questions. */
(function(){
  'use strict';
  const F=window.DXExamFocus,T=window.DX_EXAM1;
  const format={revision:'instructor-email-20261008-v1',mc:15,mcPoints:3,tf:15,tfPoints:2,written:4,writtenPoints:25,total:100,durationMinutes:null,writtenAllocation:null};
  Object.assign(F,{revision:format.revision,format,objectivePoints:75,objectivePointsEach:null,writtenPointsReserved:25,provisional:false,
    formatNote:'Confirmed October 8: 15 multiple choice at 3 points, 15 true/false at 2 points, and four short-answer/listing questions worth 25 points combined.',
    pending:['Individual written-question weights and official rubric','Exact listing/short-answer split beyond the confirmed clinical application','Time limit and permitted aids','Bonus details and any separate study guide']});
  window.DX_DATA.sources['EMAIL-20261008']={label:'October 8 instructor email · Test 1 format and scope',kind:'announcement'};
  T.evidence.push({id:'exam1-email-format',title:'October 8 instructor announcement',summary:true,text:'100 points: 15 multiple choice at 3 points each; 15 true/false at 2 points each; four short-answer/listing questions worth 25 points in total. One written question applies the October 5 assigned video to a clinical situation. The Week 4 common-assessment-procedures PowerPoint is excluded. The six focus areas are not exhaustive; every included lecture remains in scope, including Week 3 Multicultural Considerations. Individual written weights, the full written mix and the time limit were not specified.'});
  const forms=[],used=new Set(),by=Object.fromEntries(T.items.map(q=>[q.id,q]));
  const slots={mc:['methods','methods','ssd','cas','psychometrics','psychometrics','testing','testing','process','process','report','culture','culture','oral','sampling'],tf:['methods','ssd','ssd','psychometrics','psychometrics','testing','testing','process','report','report','culture','culture','oral','sampling','assigned']};
  function draw(area,type,random){
    const candidates=T.items.filter(q=>q.type===type&&window.DXExamScope.eligible(q)&&!used.has(q.id)&&
      (['oral','sampling'].includes(area)?window.DXOriginalPool.ids.includes(q.id)&&q.chapter===area:
       area==='cas'?q.focusArea==='ssd'&&q.chapter==='cas':
       area==='ssd'&&type==='mc'?q.focusArea==='ssd'&&q.chapter==='ssd':
       area==='assigned'?q.id.startsWith('e1-original-reasoning-')&&q.src.some(s=>['VA','VB'].includes(s.s)):q.focusArea===area));
    if(!candidates.length)throw Error('Current-format form lacks '+area+' '+type);
    const q=candidates[Math.floor(random()*candidates.length)];used.add(q.id);return q.id;
  }
  function shuffle(values,random){const a=values.slice();for(let n=a.length-1;n>0;n--){const k=Math.floor(random()*(n+1));[a[n],a[k]]=[a[k],a[n]];}return a;}
  for(let n=0;n<3;n++){
    const seed=202610080+n,random=window.DXOriginalObjective.seeded(seed);
    const objective=['mc','tf'].flatMap(type=>shuffle(slots[type].map(area=>draw(area,type,random)),random));
    const lists=n===0?['e1-add-028','e1-add-027','w6-cas-018']:n===1?['e1-add-036','e1-add-035','w6-cas-018']:['e1-add-036','e1-add-028','e1-add-027'];
    const ids=[...objective,...lists,F.transferCaseIds[n]];
    const views=ids.map(id=>by[id].type==='mc'?shuffle(by[id].options.map((_,k)=>k),random):null);
    forms.push({id:'confirmed-'+String.fromCharCode(97+n),title:'Current-format Mock '+String.fromCharCode(65+n),seed,ids,views,format:{...format}});
  }
  F.objectiveIds=forms[0].ids.slice(0,30);
  window.DXConfirmedExam={format,forms};
})();
