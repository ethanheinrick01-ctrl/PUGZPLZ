/* Original exam practice selection; saved queues and first responses stay authoritative. */
(function(){
  'use strict';
  const P=window.DXOriginalPool,T=window.DX_EXAM1;
  const byId=Object.fromEntries(T.items.map(q=>[q.id,q]));
  const ids=new Set(P.ids);
  const pick=(a,random)=>a[Math.floor(random()*a.length)];
  function exposures(runs){
    const counts=Object.fromEntries(P.ids.map(id=>[id,0]));
    for(const run of Object.values(runs||{})){
      const seen=new Set((run.items||[]).map(o=>o.snapshot?.rootId||o.rootId||o.id).filter(id=>ids.has(id)));
      for(const id of seen)counts[id]++;
    }
    return counts;
  }
  function select(runs,random=Math.random){
    const counts=exposures(runs),chosen=[];
    for(const type of ['mc','tf']){
      const remaining=P.ids.filter(id=>byId[id].type===type);
      const inSet={};
      const total=Object.fromEntries(P.chapters.map(ch=>[ch,remaining.filter(id=>byId[id].chapter===ch).reduce((n,id)=>n+counts[id],0)]));
      for(let n=0;n<15;n++){
        // Exhaust unused questions before returning to questions from earlier sets.
        const least=Math.min(...remaining.map(id=>counts[id]));
        let candidates=remaining.filter(id=>counts[id]===least);
        const leastInSet=Math.min(...candidates.map(id=>inSet[byId[id].chapter]||0));
        candidates=candidates.filter(id=>(inSet[byId[id].chapter]||0)===leastInSet);
        const leastTotal=Math.min(...candidates.map(id=>total[byId[id].chapter]));
        candidates=candidates.filter(id=>total[byId[id].chapter]===leastTotal);
        const id=pick(candidates,random),ch=byId[id].chapter;
        chosen.push(id);remaining.splice(remaining.indexOf(id),1);
        inSet[ch]=(inSet[ch]||0)+1;total[ch]++;
      }
    }
    return chosen;
  }
  function seeded(seed){let state=seed>>>0;return()=>{state=(Math.imul(state,1664525)+1013904223)>>>0;return state/4294967296;};}
  window.DXOriginalObjective={select,exposures,seeded};
  // Printable practice has a frozen seed. A launched rehearsal draws from saved exposure history.
  window.DXExamFocus.previousObjectiveIds=window.DXExamFocus.objectiveIds.slice();
  window.DXExamFocus.objectiveIds=select({},seeded(20261007));
  window.DXExamFocus.objectiveNote='Fresh 15 MC + 15 T/F rehearsals draw from 180 original questions and prioritize questions absent from earlier sets. Printable practice uses a frozen selection. Exact instructor counts remain provisional.';
  window.DXExamFocus.revision+='+'+P.revision;
})();
