/* Scoped activities use the existing grader, source registry, and course mastery. */
(function(root){
 'use strict';
 var L=root.L,U=L.util,E=L.engine,S=L.store;
 function create(scope,D){
  function state(){var s=S.load();if(!s[scope])s[scope]={runs:[],read:{},notes:{},activeId:null};return s[scope];}
  function touch(r){if(r)r.updated=Date.now();return S.save();}
  function get(id){return state().runs.find(function(r){return r.id===id;});}
  function task(raw,retry){
   var it=U.clone(raw);
   return {uid:'Q'+Date.now()+'-'+U.newSeed(),item:it,kind:it.rubric?'written':'automatic',order:it.o?L.itemUI?L.itemUI.makeOrder(it):U.shuffle(it.o.map(function(_,i){return i;})):null,
    response:it.rubric?'':null,checked:false,confidence:null,ratings:it.rubric?it.rubric.map(function(){return null;}):null,retry:!!retry,flag:false};
  }
  function start(kind,title,ids,writing){
   var now=Date.now(),tasks=ids.map(function(id){return task(E.resolve(E.currentRef(id)));});
   (writing||[]).forEach(function(w){tasks.push(task(w));});
   var r={id:'E2-'+now+'-'+U.newSeed(),scope:scope,kind:kind,title:title,version:D.version,started:now,updated:now,cur:0,ended:null,tasks:tasks,planned:tasks.length};
   state().runs.push(r);state().activeId=r.id;touch(r);return r;
  }
  function pool(topic,figures){return D.items.filter(function(i){return (!topic||i.topic===topic)&&(!figures||i.figure)&&!i.scenario&&!i.mockOnly;});}
  function select(topic,n,figures,concepts){
   var seen={},last={};S.load().attempts.forEach(function(a){last[a.i]=a.t;});
   var p=U.shuffle(pool(topic,figures).filter(function(i){return !concepts||concepts.indexOf(i.c)>=0;}));
   p.sort(function(a,b){return (last[a.id]||0)-(last[b.id]||0);});
   var out=[];p.forEach(function(i){if(out.length<n&&!seen[i.c]){out.push(i.id);seen[i.c]=true;}});
   p.forEach(function(i){if(out.length<n&&out.indexOf(i.id)<0)out.push(i.id);});return out;
  }
  function scheduleRetry(r,t){
   if(['topic','review','mixed','figures'].indexOf(r.kind)<0)return;
   if(t.grade.ok&&t.confidence!=='l')return;
   var repeats=r.tasks.filter(function(q){return q.retry&&q.item.c===t.item.c;}).length;
   if(repeats>=2)return;
   var gap=t.grade.ok?4:2,at=r.cur+1+gap;
   // Pad a short tail with genuine, different concepts before retrying.
   var fillers=U.shuffle(pool().filter(function(i){return i.c!==t.item.c&&!r.tasks.some(function(q){return q.item.id===i.id;});}));
   while(r.tasks.length<at&&fillers.length)r.tasks.push(task(E.resolve(E.currentRef(fillers.shift().id)),true));
   if(r.tasks.length<at){r.retryPending=true;return;}
   var alt=pool(t.item.topic).find(function(i){return i.c===t.item.c&&i.id!==t.item.id&&!r.tasks.slice(r.cur+1).some(function(q){return q.item.id===i.id;});});
   r.tasks.splice(at,0,task(E.resolve(E.currentRef(alt?alt.id:t.item.id)),true));
  }
  function answer(r,index,response,conf){
   var t=r.tasks[index];if(!t||t.checked||t.kind!=='automatic'||['l','m','h'].indexOf(conf)<0)return false;
   if(response===null||response===undefined)return false;
   t.response=U.clone(response);t.confidence=conf;t.grade=E.grade(t.item,response);t.checked=true;t.checkedAt=Date.now();
   var before=S.load().attempts.length;
   E.record(t.item,{id:t.item.id},response,conf,r.kind==='partial'?'learning-mock':r.kind,false);
   S.load().attempts.slice(before).forEach(function(a){a.aid=r.id+':'+t.uid+':'+a.c;});
   t.recorded=true;scheduleRetry(r,t);touch(r);return true;
  }
  function draft(r,index,value){var t=r.tasks[index];if(!t||t.checked||t.revealed)return false;t.response=U.clone(value);touch(r);return true;}
  function reveal(r,index){var t=r.tasks[index];if(!t||t.kind!=='written'||!t.response.trim())return false;t.revealed=true;touch(r);return true;}
  function rate(r,index,ratings,conf){
   var t=r.tasks[index];if(!t||t.kind!=='written'||!t.revealed||t.checked||['l','m','h'].indexOf(conf)<0)return false;
   if(ratings.length!==t.item.rubric.length||!ratings.every(function(x){return x===0||x===1;}))return false;
   t.ratings=ratings.slice();t.confidence=conf;var sc=ratings.reduce(function(a,b){return a+b;},0)/ratings.length;
   t.grade={ok:sc===1,sc:sc,self:true};t.checked=true;t.checkedAt=Date.now();
   var s=S.load();E.seedMasteryCredits(s);
   s.attempts.push({aid:r.id+':'+t.uid+':'+t.item.c,i:t.item.id,c:t.item.c,ok:t.grade.ok,sc:sc,cf:conf,m:'self-score',self:true,t:t.checkedAt,run:r.id});
   E.captureMasteryCredits(s);t.recorded=true;touch(r);return true;
  }
  function score(r){
   var original=r.tasks.filter(function(t){return !t.retry;}),auto=0,autoN=0,self=0,selfN=0,answered=0;
   original.forEach(function(t){if(t.kind==='written'){selfN+=t.item.rubric.length;if(t.checked)self+=t.ratings.reduce(function(a,b){return a+b;},0);}else{autoN++;if(t.checked&&t.grade.ok)auto++;}if(t.checked)answered++;});
   return {auto:auto,autoN:autoN,self:self,selfN:selfN,answered:answered,total:original.length,complete:answered===original.length&&original.length>0};
  }
  function finish(r){r.ended=Date.now();r.complete=score(r).complete;touch(r);return score(r);}
  function review(){return E.reviewPlan().filter(function(p){return p.c.indexOf('e2-')===0&&p.why!=='new';});}
  function summary(topic){
   var cs=D.topics.find(function(t){return t.id===topic;}).concepts,st=E.conceptStats(),s=S.load();
   return {concepts:cs,mastered:cs.filter(function(c){return st[c]&&st[c].status==='mastered';}).length,total:cs.length,
    checks:s.attempts.filter(function(a){return cs.indexOf(a.c)>=0;}).length,
    firsts:state().runs.reduce(function(n,r){return n+r.tasks.filter(function(t){return !t.retry&&t.checked&&cs.indexOf(t.item.c)>=0;}).length;},0)};
  }
  return {state:state,touch:touch,get:get,start:start,select:select,pool:pool,answer:answer,draft:draft,reveal:reveal,rate:rate,score:score,finish:finish,review:review,summary:summary};
 }
 L.createStudyRuns=create;L.exam2=create('exam2',L.EXAM2_DATA);
})(typeof window!=='undefined'?window:globalThis);
