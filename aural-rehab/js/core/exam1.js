/* Exam 1: deterministic forms, immediate first-response feedback, resumable runs. */
(function (root) {
  'use strict';
  var L=root.L, U=L.util, E=L.engine, S=L.store, D=L.EXAM1_DATA;
  function state() {
    var s=S.load();
    if(!s.exam1) s.exam1={runs:[],chapterRead:{},lastRoute:'exam1'};
    return s.exam1;
  }
  function save(){return S.save();}
  function chapter(id){return D.chapters.filter(function(c){return c.id===id;})[0];}
  function pool(id){
    var ch=chapter(id);
    return E.itemsFor(function(it){
      if(!ch || ch.concepts.indexOf(it.c)<0 || it.caseId || it.found || it.tier===3 || it.mockExclude || ['mc','tf'].indexOf(it.t)<0 || D.excluded.indexOf(it.id)>=0) return false;
      if(id==='guest') return D.guestIds.indexOf(it.id)>=0 || it.id.indexOf('e1.guest.')===0;
      if(id==='syndromes') return it.id.indexOf('e1.syndrome.')===0 || it.id.indexOf('s5.photo.')===0 || D.syndromeIds.indexOf(it.id)>=0;
      return true;
    });
  }
  function task(it,ch,r){
    it=U.clone(it);
    if(it.sharedExplanation&&it.o)it.o.forEach(function(o){o.w='';});
    return {kind:it.t==='parts'?'graph':'objective',item:it,chapter:ch,group:chapter(ch).group,weight:it.t==='parts'?6:1,
      order:it.o?(it.fixedOrder?it.o.map(function(_,i){return i;}):U.shuffle(it.o.map(function(_,i){return i;}),r)):null,
      response:null,checked:false,confidence:'m',flag:false};
  }
  function graph(seed){
    var r=U.rng(seed), C=L.conv;
    var types=['conductive','sensorineural','mixed'], configs=['flat','sloping','rising','cookie'], spec={}, parts=[];
    ['right','left'].forEach(function(side){
      var type=U.pick(r,types), config=U.pick(r,configs), degree=type==='mixed'?'modsev':U.pick(r,['mild','moderate']), ear;
      // Unambiguous plotted BC and clean PTA values; no hardware-limit inference needed.
      for(var n=0;n<8&&!ear;n++) ear=L.gen.buildEar(r,type,degree,config,false);
      if(!ear) { config='flat'; ear=L.gen.buildEar(r,type,degree,config,false); }
      if(!ear) throw new Error('Could not build an unambiguous audiogram');
      spec[side]={ac:ear.ac,bc:ear.bc,bcMasked:true};
      var label=side==='right'?'Right ear':'Left ear';
      parts.push({label:label+' — type',options:Object.keys(C.TYPE_LABELS).map(function(k){return C.TYPE_LABELS[k];}),a:C.TYPE_LABELS[C.typeOf(ear.ac,ear.bc)],why:'Compare AC and BC: normal BC with a gap = conductive; elevated BC without a gap = SNHL; elevated BC with a gap = mixed.'});
      parts.push({label:label+' — degree by AC PTA',options:C.DEGREES.map(function(d){return d.label;}),a:C.degree(ear.pta).label,why:'PTA = ('+ear.ac[500]+' + '+ear.ac[1000]+' + '+ear.ac[2000]+') / 3 = '+ear.pta+' dB HL. Use the adopted scale.'});
      parts.push({label:label+' — configuration',options:Object.keys(C.CONFIG_LABELS).map(function(k){return C.CONFIG_LABELS[k];}),a:C.CONFIG_LABELS[config],why:'Configuration describes the shape across frequencies, not the PTA or air-bone gap.'});
    });
    return {id:'e1.graph.'+seed,c:'audiogram-description',t:'parts',tier:1,q:'Interpret both ears: type, degree using the 500/1000/2000 Hz AC average, and configuration. Assume the plotted masked BC thresholds are valid.',media:{kind:'audiogram',spec:spec},parts:parts,s:['L1-15','L1-16','ANN','SG30','E1'],x:'The announced interpretation targets are type, degree and configuration. Six structured responses and one point per response are practice choices.'};
  }
  function writing(def){return {kind:'short',item:U.clone(def),chapter:def.chapter,group:chapter(def.chapter).group,weight:3,response:'',checked:false,rubricOpen:false,ratings:[null,null,null],flag:false};}
  function generated(ch,seed){
    var names=ch==='audiograms'?['degreeValue','ptaDegree','typeAud','configAud']:ch==='dots'?['dots','dotsBand']:['snr'];
    var r=U.rng(seed), name=U.pick(r,names), it=E.resolve({gen:name,seed:seed});
    return task(it,ch,r);
  }
  function pickTasks(ch,n,r,used){
    var candidates=U.shuffle(pool(ch),r), out=[], byConcept={};
    function add(it){if(out.length>=n||used[it.id])return;used[it.id]=1;byConcept[it.c]=(byConcept[it.c]||0)+1;out.push(task(it,ch,r));}
    candidates.forEach(function(it){if(!byConcept[it.c])add(it);});
    candidates.forEach(add);
    if(out.length!==n)throw new Error('Not enough audited questions in '+ch+' ('+out.length+'/'+n+')');
    return out;
  }
  function form(seed){
    var r=U.rng(seed), used={}, objectives=[];
    [['foundations',4],['audiograms',2],['heredity',6],['causes',6],['syndromes',8],['hearing-aids',5],['children',5],['verification',4],['classroom',4],['outcomes',2],['dots',2],['guest',4]].forEach(function(q){objectives=objectives.concat(pickTasks(q[0],q[1],r,used));});
    objectives=U.shuffle(objectives,r);
    var short=U.shuffle(D.shorts,r).slice(0,2).map(writing);
    return objectives.concat([task(graph(U.int(r,1,2147483646)),'audiograms',r),task(graph(U.int(r,1,2147483646)),'audiograms',r)],short);
  }
  function start(kind,title,tasks,seed){
    var now=Date.now(), run={id:'E1-'+now+'-'+U.newSeed(),kind:kind,title:title,seed:seed||null,version:D.version,started:now,updated:now,cur:0,ended:null,tasks:tasks};
    state().runs.push(run);state().activeId=run.id;save();return run;
  }
  function get(id){return state().runs.filter(function(r){return r.id===id;})[0]||null;}
  function startMock(name,seed){return start('mock','Exam 1 · Form '+name,form(seed),seed);}
  function practice(ch,n,concepts){
    var r=U.rng(U.newSeed()), seen={}, last={};
    S.load().attempts.forEach(function(a){last[a.i]=a.t;});
    var candidates=U.shuffle(pool(ch).filter(function(it){return !concepts||concepts.indexOf(it.c)>=0;}),r);
    candidates.sort(function(a,b){return (last[a.id]||0)-(last[b.id]||0);});
    var tasks=[];
    candidates.forEach(function(it){if(tasks.length<n&&!seen[it.c]){tasks.push(task(it,ch,r));seen[it.c]=true;}});
    candidates.forEach(function(it){if(tasks.length<n&&!tasks.some(function(t){return t.item.id===it.id;}))tasks.push(task(it,ch,r));});
    if(concepts) concepts.forEach(function(c){
      var names=(L.engine.GEN_FOR[c]||[]).filter(function(g){return ['degreeValue','ptaDegree','ptaNumeric','typeAud','configAud','describe','snr','dots','dotsBand'].indexOf(g)>=0;});
      if(names.length)while(tasks.length<n){var seed=U.newSeed(),it=E.resolve({gen:U.pick(r,names),seed:seed});tasks.push(task(it,ch,r));}
    });
    if(!concepts && ['audiograms','dots','classroom'].indexOf(ch)>=0){
      var count=ch==='audiograms'?4:2;
      tasks=tasks.slice(0,Math.max(0,n-count));for(var i=0;i<count;i++)tasks.push(generated(ch,U.newSeed()));
    }
    if(!tasks.length)throw new Error('No questions available for this selection');
    return start('drill',chapter(ch).title+' · practice',tasks);
  }
  function startGraphs(){var r=U.rng(U.newSeed());return start('graph','Audiogram interpretation',[1,2,3,4].map(function(){return task(graph(U.newSeed()),'audiograms',r);}));}
  function startWriting(id){var defs=id?D.shorts.filter(function(s){return s.id===id;}):U.shuffle(D.shorts).slice(0,2);return start('writing','Short-answer practice',defs.map(writing));}
  function touch(run){run.updated=Date.now();state().activeId=run.id;save();}
  function record(run,t){
    if(t.recorded || t.kind==='short')return;
    t.recorded=true;
    // Mock feedback is immediate, but a mock does not grant mastery.
    E.record(t.item,{id:t.item.id},t.response,t.confidence,run.kind==='mock'?'mock':'practice',false);
  }
  function answer(run,index,response,conf){
    var t=run.tasks[index];if(!t||t.checked||t.kind==='short'||t.item.t==='parts')return false;
    t.response=U.clone(response);t.confidence=conf||'m';t.grade=E.grade(t.item,t.response);t.checked=true;t.checkedAt=Date.now();record(run,t);touch(run);return true;
  }
  function answerPart(run,index,part,value){
    var t=run.tasks[index];if(!t||t.kind!=='graph'||t.checked||!t.item.parts[part]||!value)return false;
    t.response=t.response||t.item.parts.map(function(){return '';});
    if(t.response[part])return false;
    t.response[part]=value;
    if(t.response.every(Boolean)){t.grade=E.grade(t.item,t.response);t.checked=true;t.checkedAt=Date.now();record(run,t);}
    touch(run);return true;
  }
  function draft(run,index,text){var t=run.tasks[index];if(t.kind!=='short'||t.rubricOpen)return; t.response=text;touch(run);}
  function reveal(run,index){var t=run.tasks[index];if(t.kind!=='short'||!t.response.trim())return false;t.rubricOpen=true;touch(run);return true;}
  function rate(run,index,part,value){
    var t=run.tasks[index];if(t.kind!=='short'||!t.rubricOpen||t.checked||[0,1].indexOf(value)<0)return false;
    t.ratings[part]=value;
    if(t.ratings.every(function(v){return v!==null;})){var sc=t.ratings.reduce(function(a,b){return a+b;},0)/3;t.grade={ok:sc===1,sc:sc,self:true};t.checked=true;t.checkedAt=Date.now();}
    touch(run);return true;
  }
  function score(run){
    var auto=0,self=0,possible=0,answered=0,pendingWriting=0;
    run.tasks.forEach(function(t){possible+=t.weight;if(t.checked){answered++;if(t.kind==='short')self+=t.grade.sc*t.weight;else auto+=t.grade.sc*t.weight;}else if(t.kind==='short')pendingWriting++;});
    return {auto:Math.round(auto),self:Math.round(self),total:Math.round(auto+self),possible:possible,answered:answered,count:run.tasks.length,pendingWriting:pendingWriting,complete:answered===run.tasks.length};
  }
  function finish(run){run.ended=Date.now();touch(run);return score(run);}
  function misses(){
    var st=E.conceptStats(), found={};
    state().runs.forEach(function(run){run.tasks.forEach(function(t){
      var wrong=t.checked&&!t.grade.ok;
      if(t.kind==='graph'&&t.response)wrong=wrong||t.response.some(function(v,i){return v&&v!==t.item.parts[i].a;});
      if(!wrong)return;
      var when=t.checkedAt||run.updated,c=t.item.c, key=t.kind==='short'?'writing:'+t.item.id:c;
      if(t.kind!=='short' && st[c]){var after=st[c].hist.filter(function(a){return a.t>when;}).slice(-2);if(after.length===2&&after.every(function(a){return a.ok&&!a.h;})&&after[0].i!==after[1].i&&['m','h'].indexOf(after[1].cf)>=0)return;}
      if(!found[key]||found[key].time<when)found[key]={key:key,c:c,chapter:t.chapter,time:when,run:run.id,index:run.tasks.indexOf(t),kind:t.kind,item:t.item};
    });});
    // A fresh successful writing exercise clears older writing misses for that prompt.
    state().runs.forEach(function(run){run.tasks.forEach(function(t){var k='writing:'+t.item.id;if(t.kind==='short'&&t.checked&&t.grade.ok&&found[k]&&t.checkedAt>found[k].time)delete found[k];});});
    return Object.keys(found).map(function(k){return found[k];}).sort(function(a,b){return b.time-a.time;});
  }
  function retry(miss){
    if(miss.kind==='short')return startWriting(miss.item.id);
    if(miss.kind==='graph')return startGraphs();
    return practice(miss.chapter,4,[miss.c]);
  }
  function readiness(ch){
    var st=E.conceptStats(), cs=U.uniq(pool(ch).map(function(it){return it.c;}));
    if(ch==='audiograms')cs=U.uniq(cs.concat(['audiogram-description','pta-degree','loss-type','configuration']));
    var open=misses().map(function(m){return m.c;});
    return {mastered:cs.filter(function(c){return st[c]&&st[c].status==='mastered'&&open.indexOf(c)<0;}).length,total:cs.length,concepts:cs};
  }
  L.exam1={state:state,save:save,chapter:chapter,pool:pool,graph:graph,form:form,get:get,startMock:startMock,practice:practice,startGraphs:startGraphs,startWriting:startWriting,
    answer:answer,answerPart:answerPart,draft:draft,reveal:reveal,rate:rate,score:score,finish:finish,touch:touch,misses:misses,retry:retry,readiness:readiness};
})(typeof window !== 'undefined' ? window : globalThis);
