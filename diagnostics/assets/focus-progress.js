/* Derived Exam Focus progress. Reads the saved first-response ledger; never writes it. */
(function(root){
  'use strict';
  const E=typeof module==='object'&&module.exports?require('./topic-engine.js'):root.DXTopicEngine;
  const object=value=>value&&typeof value==='object'&&!Array.isArray(value)?value:{};
  const unique=values=>[...new Set(values.filter(Boolean))];
  const time=value=>typeof value==='number'&&Number.isFinite(value)?value:(Date.parse(value)||0);
  const automatic=q=>q&&(q.type==='mc'||q.type==='tf');
  const rootOf=q=>q&&(q.rootId||q.id);
  const atRun=run=>time(run.updated)||time(run.endedAt)||time(run.startedAt);
  const answered=(q,response)=>!!response&&E.answered(q,response.answer);
  const confident=response=>response.correct===true&&!response.assisted&&['medium','high'].includes(response.confidence);
  const percent=(n,total)=>total?Math.round(n/total*100):0;

  // A CAS alias and the course ledger can contain the same run. Union occurrences,
  // preserve the earliest checked snapshot, and choose newer drafts/self-reviews.
  function canonicalRuns(input){
    const grouped=new Map();
    Object.entries(object(input).runs||input||{}).forEach(([key,run])=>{
      if(!run||!Array.isArray(run.items))return;
      const id=run.id||key;
      if(!grouped.has(id))grouped.set(id,[]);
      grouped.get(id).push(run);
    });
    return [...grouped].map(([id,variants])=>{
      const ordered=variants.slice().sort((a,b)=>atRun(b)-atRun(a));
      const latest=ordered[0],occurrences=new Map(),responses={},drafts={},selfScores={};
      ordered.forEach(run=>run.items.forEach(occ=>{
        if(!occ||!occ.snapshot)return;
        const key=occ.key,v=object(run.responses)[key],d=object(run.drafts)[key],s=object(run.selfScores)[key];
        if(!occurrences.has(key))occurrences.set(key,occ);
        if(v&&(!responses[key]||time(v.checkedAt)<time(responses[key].checkedAt))){responses[key]=v;occurrences.set(key,occ);}
        if(d&&(!drafts[key]||time(d.at)>time(drafts[key].at)))drafts[key]=d;
        if(s&&(!selfScores[key]||time(s.at)>time(selfScores[key].at)))selfScores[key]=s;
      }));
      return {...latest,id,items:[...occurrences.values()],responses,drafts,selfScores};
    });
  }

  function summarize(input,evidence,bank,focus){
    const questions=Array.isArray(bank)?bank:Object.values(object(bank));
    const byId=Object.fromEntries(questions.map(q=>[q.id,q]));
    const byRoot=new Map();
    questions.forEach(q=>{if(!byRoot.has(rootOf(q)))byRoot.set(rootOf(q),q);});
    const F=focus||{},concepts=object(evidence),runs=canonicalRuns(input);
    const definitions=[...(F.groups||[]),...(F.culture?[F.culture]:[])];
    const idRoot=id=>rootOf(byId[id])||(byRoot.has(id)?id:null);
    const groupRoots=Object.fromEntries(definitions.map(g=>[g.id,unique((g.ids||[]).map(idRoot))]));
    const focused=runs.filter(run=>run.type==='focus').sort((a,b)=>atRun(b)-atRun(a));
    // Fixed coverage targets are separate from review evidence. A different-root
    // transfer adds useful history without increasing the completion denominator.
    const coverageRoots=new Set(unique([...(F.objectivePoolIds||[]).map(idRoot),...Object.values(groupRoots).flat()]));
    const scopeRoots=new Set(coverageRoots);
    focused.forEach(run=>run.items.forEach(occ=>{
      const rid=occ.rootId||rootOf(occ.snapshot);
      if(automatic(occ.snapshot)&&byRoot.has(rid)&&automatic(byRoot.get(rid)))scopeRoots.add(rid);
    }));
    const roots={};
    byRoot.forEach((q,rid)=>{
      if(!automatic(q))return;
      roots[rid]={id:q.id,rootId:rid,concept:q.concept,answered:false,attempts:0,firstMiss:false,unresolvedMiss:false,highConfidenceMiss:false,lowConfidence:false,assisted:false,reviewDue:false,lastAt:0,lastCorrect:null,confidence:null,focus:scopeRoots.has(rid)};
    });
    const events=[];
    runs.forEach(run=>run.items.forEach(occ=>{
      const response=run.responses[occ.key],q=occ.snapshot,rid=occ.rootId||rootOf(q);
      if(automatic(q)&&roots[rid]&&answered(q,response))events.push({run,occ,response,rid,at:time(response.checkedAt)||atRun(run)});
    }));
    events.sort((a,b)=>a.at-b.at||(a.run.id+'\0'+a.occ.key).localeCompare(b.run.id+'\0'+b.occ.key));
    events.forEach(({run,occ,response,rid,at})=>{
      const state=roots[rid];
      state.answered=true;state.attempts++;state.lastAt=at;state.lastCorrect=response.correct===true;
      state.confidence=response.confidence||null;state.runId=run.id;state.key=occ.key;
      if(!occ.rep&&response.correct===false)state.firstMiss=true;
      if(response.correct===false){state.unresolvedMiss=true;state.highConfidenceMiss=state.highConfidenceMiss||response.confidence==='high';}
      if(confident(response)){state.unresolvedMiss=false;state.highConfidenceMiss=false;}
      state.lowConfidence=response.confidence==='low';state.assisted=!!response.assisted;
      state.reviewDue=state.unresolvedMiss||state.lowConfidence||state.assisted;
    });

    function scoreSlice(run,rootIds){
      const set=new Set(rootIds),items=run.items.filter(occ=>!occ.rep&&automatic(occ.snapshot)&&set.has(occ.rootId||rootOf(occ.snapshot)));
      if(!items.length)return null;
      let points=0,max=0,count=0,misses=0,last=0;
      items.forEach(occ=>{
        const q=occ.snapshot,v=run.responses[occ.key];max+=E.maxPoints(q);
        if(!answered(q,v))return;
        count++;if(v.correct===true)points+=E.maxPoints(q);else if(v.correct===false)misses++;
        last=Math.max(last,time(v.checkedAt));
      });
      if(!count)return null;
      return {runId:run.id,label:run.label||run.type,points,max,answered:count,total:items.length,firstMisses:misses,at:last||atRun(run),complete:count===items.length};
    }
    function metrics(rootIds,definition){
      const ids=unique(rootIds).filter(rid=>roots[rid]),states=ids.map(rid=>roots[rid]);
      const conceptIds=unique(states.map(s=>s.concept));
      // Keep drill scores comparable. A mixed mock or a short review can contain
      // only part of this group's roots; neither replaces its latest full drill.
      const candidates=focused.filter(run=>{
        if(!definition)return true;
        const initial=run.items.filter(occ=>!occ.rep&&automatic(occ.snapshot));
        const matches=initial.filter(occ=>ids.includes(occ.rootId||rootOf(occ.snapshot)));
        const explicit=(run.focusGroupId||run.groupId)===definition.id;
        return run.focusMode==='priority'&&matches.length&&(explicit||matches.length===initial.length);
      }).map(run=>scoreSlice(run,ids)).filter(Boolean).sort((a,b)=>b.at-a.at);
      const complete=candidates.filter(score=>score.complete);
      // Prefer full drill coverage when comparing saved priority drills. Review
      // scores remain in their own activities and never replace these results.
      const comparison=complete.length?complete:candidates;
      const best=comparison.slice().sort((a,b)=>b.total-a.total||(b.max?b.points/b.max:0)-(a.max?a.points/a.max:0)||b.at-a.at)[0]||null;
      const currentRuns=focused.filter(run=>run.status==='active'&&run.items.some(occ=>ids.includes(occ.rootId||rootOf(occ.snapshot))));
      return {id:definition?.id||'objective',title:definition?.title||'Objective focus',rootIds:ids,conceptIds,total:ids.length,
        answered:states.filter(s=>s.answered).length,coveragePercent:percent(states.filter(s=>s.answered).length,ids.length),
        conceptTotal:conceptIds.length,mastered:conceptIds.filter(id=>concepts[id]?.mastered).length,
        reviewConcepts:conceptIds.filter(id=>concepts[id]?.needsReview).length,
        weakConcepts:conceptIds.filter(id=>!concepts[id]?.mastered||concepts[id]?.needsReview),
        firstMisses:states.filter(s=>s.firstMiss).length,unresolvedMisses:states.filter(s=>s.unresolvedMiss).length,
        highConfidenceMisses:states.filter(s=>s.unresolvedMiss&&s.highConfidenceMiss).length,
        lowConfidence:states.filter(s=>s.lowConfidence).length,assisted:states.filter(s=>s.assisted).length,
        reviewDue:states.filter(s=>s.reviewDue).length,latest:candidates[0]||null,best,activeRuns:currentRuns};
    }
    const groups=definitions.map(g=>metrics(groupRoots[g.id],g));
    const objective=metrics([...coverageRoots]);
    objective.reviewRootIds=[...scopeRoots].filter(rid=>roots[rid]);
    const reviewStates=objective.reviewRootIds.map(rid=>roots[rid]);
    // Review can include historical Focus/transfer roots beyond the fixed pool.
    // Its current needs remain visible without changing coverage or mastery totals.
    Object.assign(objective,{
      unresolvedMisses:reviewStates.filter(state=>state.unresolvedMiss).length,
      highConfidenceMisses:reviewStates.filter(state=>state.unresolvedMiss&&state.highConfidenceMiss).length,
      lowConfidence:reviewStates.filter(state=>state.lowConfidence).length,
      assisted:reviewStates.filter(state=>state.assisted).length,
      reviewDue:reviewStates.filter(state=>state.reviewDue).length
    });

    function writingItem(id,kind){
      const q=byId[id]||byRoot.get(id),rid=rootOf(q)||id;
      const attempts=[],resumable=[];
      runs.forEach(run=>run.items.forEach(occ=>{
        if(occ.snapshot.type!=='list'||(occ.rootId||rootOf(occ.snapshot))!==rid)return;
        const response=run.responses[occ.key],draft=run.drafts[occ.key],selfScore=run.selfScores[occ.key];
        const hasResponse=answered(occ.snapshot,response),hasDraft=!!(draft?.answer?.text||'').trim();
        if(run.type==='focus'&&run.status==='active')resumable.push(run);
        if(!hasResponse&&!hasDraft)return;
        // Changing a self-review on an older answer must not make that attempt
        // newer than a subsequently written response or active draft.
        const at=hasResponse?(time(response.checkedAt)||atRun(run)):(time(draft.at)||atRun(run));
        const rubric=occ.snapshot.rubric||[],marks=hasResponse&&selfScore?(selfScore.marks||[]):null;
        const components=marks?rubric.filter((_,k)=>!!marks[k]).length:null;
        attempts.push({runId:run.id,key:occ.key,at,kind,hasResponse,status:hasResponse?(selfScore?(components===rubric.length?'reviewed':'needs-retry'):'pending'):'draft',
          components,componentTotal:rubric.length,missingComponents:marks?rubric.filter((_,k)=>!marks[k]):[],
          points:hasResponse&&selfScore?E.manualScore(occ.snapshot,selfScore):null,max:E.maxPoints(occ.snapshot),
          selfReviewed:hasResponse&&!!selfScore,active:run.status==='active'});
      }));
      attempts.sort((a,b)=>b.at-a.at||(b.runId+b.key).localeCompare(a.runId+a.key));
      const latest=attempts[0],previous=attempts.slice(1).find(a=>a.selfReviewed);
      return {id,rootId:rid,title:q?.title||q?.stem||id,kind,status:'not-started',components:null,componentTotal:q?.rubric?.length||0,missingComponents:[],points:null,max:q?E.maxPoints(q):0,
        ...(latest||{}),attempts:attempts.filter(a=>a.hasResponse).length,previousComponents:previous?.components??null,previousTotal:previous?.componentTotal??null,
        activeRuns:[...new Map(resumable.map(run=>[run.id,run])).values()]};
    }
    const listings=(F.listingIds||[]).map(id=>writingItem(id,'listing'));
    const clinical=(F.caseIds||[]).map(id=>writingItem(id,'clinical'));
    const writingItems=[...listings,...clinical];
    const writing={items:writingItems,listings,clinical,total:writingItems.length,
      notStarted:writingItems.filter(item=>item.status==='not-started').length,draft:writingItems.filter(item=>item.status==='draft').length,
      pending:writingItems.filter(item=>item.status==='pending').length,reviewed:writingItems.filter(item=>item.selfReviewed).length,
      needsRetry:writingItems.filter(item=>item.status==='needs-retry').length};
    return {groups,byGroup:Object.fromEntries(groups.map(g=>[g.id,g])),objective,writing,roots,concepts,
      activeRuns:focused.filter(run=>run.status==='active'),history:focused.filter(run=>run.status!=='active')};
  }

  function planReview(summary,options,bank){
    const settings=options||{},kind=['smart','misses','weak'].includes(settings.kind)?settings.kind:'smart';
    const group=settings.groupId?summary.byGroup[settings.groupId]:null;
    const limit=Math.max(0,Math.min(20,Number.isFinite(settings.limit)?Math.floor(settings.limit):20));
    const questions=(Array.isArray(bank)?bank:Object.values(object(bank))).filter(automatic);
    const current=new Map();questions.forEach(q=>{if(!current.has(rootOf(q)))current.set(rootOf(q),q);});
    const scope=new Set(group?group.rootIds:(summary.objective.reviewRootIds||summary.objective.rootIds));
    if(settings.groupId&&!group)return {ids:[],rootIds:[],kind,groupId:settings.groupId,retryCount:0,transferCount:0,total:0,reasonCounts:{misses:0,uncertain:0,weak:0,transfer:0}};
    const concepts=summary.concepts||{},states=Object.values(summary.roots).filter(state=>scope.has(state.rootId)&&current.has(state.rootId));
    const rank=state=>state.unresolvedMiss?(state.highConfidenceMiss?0:1):state.lowConfidence||state.assisted?2:3;
    const sorted=states.slice().sort((a,b)=>rank(a)-rank(b)||a.lastAt-b.lastAt||a.rootId.localeCompare(b.rootId));
    // The dashboard's mastery target is the seven highlighted areas. Keep its
    // filler aligned with those concepts, even though urgent misses from wider
    // objective rehearsals also belong in the same review queue.
    const weakConcepts=new Set(group?group.weakConcepts:summary.groups.flatMap(g=>g.weakConcepts));
    const urgent=sorted.filter(state=>kind==='misses'?state.unresolvedMiss:kind==='weak'?weakConcepts.has(state.concept):state.reviewDue);
    if(kind==='smart'&&!group)urgent.forEach(state=>{
      if(!concepts[state.concept]?.mastered||concepts[state.concept]?.needsReview)weakConcepts.add(state.concept);
    });
    const used=new Set(),chosen=[],reasons={misses:0,uncertain:0,weak:0,transfer:0};
    function add(q,reason){const rid=rootOf(q);if(!q||used.has(rid)||chosen.length>=limit)return false;used.add(rid);chosen.push(q);reasons[reason]++;return true;}
    // Include an independently authored root for the same concept after a retry.
    // Reserve half the initial set for transfers when several misses are pending.
    const retryLimit=Math.max(1,Math.ceil(limit/2));
    const retryStates=urgent.slice(0,retryLimit);
    retryStates.forEach(state=>add(current.get(state.rootId),state.unresolvedMiss?'misses':state.reviewDue?'uncertain':'weak'));
    function transfer(state){
      const candidates=questions.filter(q=>q.concept===state.concept&&rootOf(q)!==state.rootId&&!used.has(rootOf(q)));
      candidates.sort((a,b)=>{
        const left=summary.roots[rootOf(a)],right=summary.roots[rootOf(b)];
        return (left?.attempts||0)-(right?.attempts||0)||(left?.lastAt||0)-(right?.lastAt||0)||a.id.localeCompare(b.id);
      });
      if(candidates.length)add(candidates[0],'transfer');
    }
    retryStates.forEach(transfer);
    // If some concepts have no alternate root, use the remaining urgent retries.
    urgent.slice(retryLimit).forEach(state=>add(current.get(state.rootId),state.unresolvedMiss?'misses':state.reviewDue?'uncertain':'weak'));
    if(kind==='smart'||kind==='weak'){
      const weak=questions.filter(q=>weakConcepts.has(q.concept)&&!used.has(rootOf(q)));
      weak.sort((a,b)=>{
        const ac=concepts[a.concept]||{},bc=concepts[b.concept]||{};
        const ar=summary.roots[rootOf(a)],br=summary.roots[rootOf(b)];
        return Number(!!bc.needsReview)-Number(!!ac.needsReview)||(ac.attempts||0)-(bc.attempts||0)||(ar?.attempts||0)-(br?.attempts||0)||a.id.localeCompare(b.id);
      });
      // Round-robin concepts so one large question family cannot consume a set.
      const queues=new Map();weak.forEach(q=>{if(!queues.has(q.concept))queues.set(q.concept,[]);queues.get(q.concept).push(q);});
      let added=true;while(chosen.length<limit&&added){added=false;queues.forEach(queue=>{if(queue.length&&chosen.length<limit){add(queue.shift(),'weak');added=true;}});}
    }
    return {ids:chosen.map(q=>q.id),rootIds:chosen.map(rootOf),kind,groupId:settings.groupId||null,
      retryCount:reasons.misses+reasons.uncertain,transferCount:reasons.transfer,total:chosen.length,reasonCounts:reasons};
  }
  root.DXFocusProgress={summarize,planReview};
  if(typeof module==='object'&&module.exports)module.exports=root.DXFocusProgress;
})(typeof window==='object'?window:globalThis);
