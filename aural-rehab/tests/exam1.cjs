const assert=require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');
const {loadLab,ROOT}=require('./load.cjs');
let pass=0;
function test(name,fn){fn();pass++;console.log('PASS '+name);}
function correct(t){return t.item.o.findIndex(o=>o.ok);}
function correctItem(it){return it.o.findIndex(o=>o.ok);}
test('Every form has the announced structure, quota, unique objectives and honest 70-point rubric',()=>{
  const {L}=loadLab();
  for(let seed=1;seed<=300;seed++){
    const ts=L.exam1.form(seed),objs=ts.filter(t=>t.kind==='objective');
    assert.equal(objs.length,52);assert.equal(new Set(objs.map(t=>t.item.id)).size,52);
    assert.ok(objs.every(t=>['mc','tf'].includes(t.item.t)));
    assert.deepEqual(['L1','L2','L3','G'].map(g=>objs.filter(t=>t.group===g).length),[6,20,22,4]);
    assert.equal(ts.filter(t=>t.kind==='graph').length,2);assert.equal(ts.filter(t=>t.kind==='short').length,2);
    assert.equal(ts.reduce((s,t)=>s+t.weight,0),70);
  }
  assert.deepEqual(L.exam1.form(123),L.exam1.form(123));
  assert.notDeepEqual(L.exam1.form(123),L.exam1.form(124));
});
test('Exam scope excludes case lecture, syndrome statistics/inheritance and superseded questions',()=>{
  const {L}=loadLab();
  for(const c of L.EXAM1_DATA.chapters)for(const i of L.exam1.pool(c.id)){
    assert.ok(!i.caseId&&!i.found&&i.tier!==3);
    assert.ok(!L.EXAM1_DATA.excluded.includes(i.id));
    if(c.id==='syndromes')assert.ok(!/autosomal|inheritance|inherited|incidence|how common|gene\?|\d\s*%|1 in/i.test(i.q),i.id);
    if(c.id==='guest')assert.ok(L.EXAM1_DATA.guestIds.includes(i.id)||i.id.startsWith('e1.guest.'));
  }
  assert.ok(L.exam1.pool('heredity').some(i=>i.id==='e1.inherit.mt'));
});
test('All scored chapter concepts have distinct accessible roots or fresh generators',()=>{
  const {L}=loadLab();
  for(const ch of L.EXAM1_DATA.chapters){const counts={};L.exam1.pool(ch.id).forEach(i=>counts[i.c]=(counts[i.c]||0)+1);
    for(const [c,n] of Object.entries(counts))assert.ok(n>=2||L.engine.GEN_FOR[c],ch.id+': '+c+' only '+n);
  }
});
test('Audiogram keys match plotted AC/BC, clean adopted degrees and independent shape checks',()=>{
  const {L}=loadLab();
  for(let seed=1;seed<=1000;seed++){
    const g=L.exam1.graph(seed);
    for(const [n,side] of ['right','left'].entries()){
      const e=g.media.spec[side],pta=(e.ac[500]+e.ac[1000]+e.ac[2000])/3;
      assert.equal(g.parts[n*3].a,L.conv.TYPE_LABELS[L.conv.typeOf(e.ac,e.bc)]);
      assert.equal(g.parts[n*3+1].a,L.conv.degree(pta).label);assert.ok(L.conv.degree(pta).key);
      const c=g.parts[n*3+2].a,a=e.ac;
      if(c.startsWith('Flat'))assert.ok(Math.max(...[250,500,1000,2000,4000].map(f=>a[f]))-Math.min(...[250,500,1000,2000,4000].map(f=>a[f]))<=10);
      else if(c.startsWith('Sloping'))assert.ok(a[4000]-a[250]>=30&&a[2000]>a[1000]);
      else if(c.startsWith('Rising'))assert.ok(a[250]-a[4000]>=30);
      else if(c.startsWith('Cookie'))assert.ok(a[1000]-a[250]>=15&&a[2000]-a[8000]>=15);
      else assert.fail(c);
    }
  }
});
test('Exam 1 mock checks count toward shared mastery once and retain immediate correction',()=>{
  const {L}=loadLab(),X=L.exam1,r=X.startMock('A',45902401),t=r.tasks[0],wrong=t.item.o.findIndex(o=>!o.ok);
  assert.equal(X.answer(r,0,wrong,'h'),true);assert.equal(t.grade.ok,false);assert.ok(X.misses().some(m=>m.c===t.item.c));
  const n=L.store.load().attempts.length;assert.equal(X.answer(r,0,correct(t),'h'),false);assert.equal(L.store.load().attempts.length,n);
  assert.equal(X.score(r).possible,70);assert.equal(X.score(r).total,0);
  assert.equal(L.engine.conceptStats()[t.item.c].att,1);
  assert.equal(L.engine.conceptStats()[t.item.c].status,'misconception');
});
test('A correct Exam 1 mock answer can complete mastery with a distinct prior question',()=>{
  const {L}=loadLab(),X=L.exam1,r=X.startMock('A',45902401);
  const index=r.tasks.findIndex(t=>t.kind==='objective'&&X.pool(t.chapter).some(it=>it.c===t.item.c&&it.id!==t.item.id));
  assert.ok(index>=0,'form has a concept with another available question');
  const t=r.tasks[index],prior=X.pool(t.chapter).find(it=>it.c===t.item.c&&it.id!==t.item.id);
  L.engine.record(prior,{id:prior.id},correctItem(prior),'m','practice',false);
  assert.equal(L.engine.conceptStats()[t.item.c].status,'learning');
  assert.equal(X.answer(r,index,correct(t),'m'),true);
  assert.equal(L.engine.conceptStats()[t.item.c].status,'mastered');
});
test('Graph parts save and lock individually, give partial credit and enter misses immediately',()=>{
  const a=loadLab(),L=a.L,X=L.exam1,r=X.startGraphs(),t=r.tasks[0];
  X.answerPart(r,0,0,t.item.parts[0].options.find(v=>v!==t.item.parts[0].a));assert.ok(X.misses().length);
  assert.equal(L.engine.conceptStats()['loss-type'].att,1,'type contributes at first selection');
  assert.equal(X.answerPart(r,0,0,t.item.parts[0].a),false);
  assert.equal(L.engine.conceptStats()['loss-type'].att,1,'locked part cannot duplicate an attempt');
  X.answerPart(r,0,1,t.item.parts[1].a);X.answerPart(r,0,2,t.item.parts[2].a);
  assert.equal(L.engine.conceptStats()['pta-degree'].att,1,'degree contributes at first selection');
  assert.equal(L.engine.conceptStats().configuration.att,1,'configuration contributes at first selection');
  const b=loadLab({storage:a.storage}),restored=b.L.exam1.get(r.id),before=b.L.store.load().attempts.length;
  assert.deepEqual(restored.tasks[0].response.slice(0,3),t.response.slice(0,3));
  assert.equal(b.L.exam1.answerPart(restored,0,1,t.item.parts[1].a),false);
  assert.equal(b.L.store.load().attempts.length,before,'reload does not replay checked parts');
  for(let i=1;i<6;i++)X.answerPart(r,0,i,t.item.parts[i].a);
  assert.equal(t.checked,true);assert.equal(Math.round(t.grade.sc*6),5);
});
test('Written drafts survive reload and rubric checks are per question, honest, and locked after scoring',()=>{
  const a=loadLab(),r=a.L.exam1.startWriting('verify');a.L.exam1.draft(r,0,'Verification measures device output; validation measures benefit.');
  const b=loadLab({storage:a.storage}),X=b.L.exam1,restored=X.get(r.id);assert.match(restored.tasks[0].response,/device output/);
  assert.equal(restored.tasks[0].rubricOpen,false);assert.equal(X.reveal(restored,0),true);
  X.rate(restored,0,0,1);X.rate(restored,0,1,1);X.rate(restored,0,2,0);assert.equal(X.score(restored).self,2);assert.equal(X.score(restored).auto,0);assert.equal(X.score(restored).possible,3);
  assert.equal(X.rate(restored,0,2,1),false);
  const writingAttempts=b.L.store.load().attempts.filter(a=>a.c==='verify-validate');
  assert.equal(writingAttempts.length,1,'completed rubric creates exactly one concept attempt');
  assert.equal(writingAttempts[0].ok,false,'partial self-rating does not award mastery');
  assert.equal(b.L.engine.conceptStats()['verify-validate'].att,1);
  assert.ok(X.misses().length);
});
test('Completed form can earn exactly 70; unfinished form never gets a smaller denominator',()=>{
  const {L}=loadLab(),X=L.exam1,r=X.startMock('B',45902402);
  assert.equal(X.finish(r).possible,70);assert.equal(X.score(r).complete,false);
  r.tasks.forEach((t,i)=>{if(t.kind==='short'){X.draft(r,i,'A test response');X.reveal(r,i);[0,1,2].forEach(p=>X.rate(r,i,p,1));}else if(t.kind==='graph')t.item.parts.forEach((p,j)=>X.answerPart(r,i,j,p.a));else X.answer(r,i,correct(t),'m');});
  assert.equal(X.score(r).auto,64);assert.equal(X.score(r).self,6);assert.equal(X.score(r).total,70);assert.equal(X.score(r).complete,true);
});
test('Old progress, IDs, Boss records and sessions survive additive normalization and a real serialization reload',()=>{
  const a=loadLab(),s=a.L.store.load();s.attempts=[{i:'s1.def1',c:'ar-definition',ok:true,sc:1,cf:'m',m:'practice',t:10}];s.mocks=[{id:'old-mock',ts:5,items:[]}];s.session={mode:'practice',idx:3,title:'Existing work',queue:[]};s.boss.b1={best:1,runs:[{ts:1,score:25,total:25,complete:true}]};s.guideRead.old=8;delete s.exam1;
  a.L.store.save();const before=JSON.parse(a.storage[a.L.store.KEY]);const b=loadLab({storage:a.storage});b.L.exam1.startMock('A',45902401);
  const c=loadLab({storage:a.storage}),after=c.L.store.load();assert.deepEqual(after.attempts,before.attempts);assert.deepEqual(after.session,before.session);assert.deepEqual(after.mocks,before.mocks);assert.deepEqual(after.boss,before.boss);assert.equal(after.guideRead.old,8);assert.equal(after.exam1.runs.length,1);
  for(const id of ['s1.def1','s4.cmv1','s5.photo.apert-1'])assert.ok(c.L.engine.REG()[id]);
});
test('Existing mastered audiogram and 23/24 graph history survive a real reload',()=>{
  const a=loadLab(),L=a.L,X=L.exam1,s=L.store.load();
  const concepts=['degree-scale','pta-degree','loss-type','configuration','audiogram-description'];
  concepts.forEach((c,j)=>{s.attempts.push({i:'old.'+c+'.a',c,ok:true,sc:1,cf:'m',m:'practice',t:100+j*2});s.attempts.push({i:'old.'+c+'.b',c,ok:true,sc:1,cf:'h',m:'practice',t:101+j*2});});
  s.mocks.push({id:'old-mock',ts:99,items:[],byDom:{},byCon:{}});
  L.store.save();
  const oldAttempts=JSON.parse(JSON.stringify(s.attempts)),oldMocks=JSON.parse(JSON.stringify(s.mocks));
  assert.equal(X.readiness('audiograms').mastered,X.readiness('audiograms').total);
  // Simulate distinct human clicks; same-millisecond synthetic checks cannot
  // establish which later graph corrected the earlier wrong response.
  const realNow=Date.now,base=realNow();let tick=0,run;
  Date.now=()=>base+(++tick)*1000;
  try {
    run=X.startGraphs();
    run.tasks.forEach((task,question)=>task.item.parts.forEach((part,i)=>{
      const response=question===1&&i===0?part.options.find(v=>v!==part.a):part.a;
      assert.equal(X.answerPart(run,question,i,response),true);
    }));
    X.finish(run);
  } finally { Date.now=realNow; }
  assert.equal(X.score(run).total,23);assert.equal(X.score(run).possible,24);assert.equal(X.score(run).complete,true);
  const b=loadLab({storage:a.storage}),after=b.L.store.load(),saved=b.L.exam1.get(run.id);
  assert.deepEqual(after.attempts.slice(0,oldAttempts.length),oldAttempts,'old attempts remain intact');
  assert.deepEqual(after.mocks,oldMocks,'old mock history remains intact');
  assert.equal(b.L.exam1.score(saved).total,23);assert.equal(b.L.exam1.score(saved).possible,24);
  assert.equal(saved.tasks[1].grade.ok,false,'the missed point remains in history');
  assert.equal(b.L.exam1.readiness('audiograms').mastered,b.L.exam1.readiness('audiograms').total,'previous mastery is not lost');
});
test('Export/import transfers complete runs, drafts, flags, position and active older work without duplicate attempts',()=>{
  const a=loadLab(),X=a.L.exam1,r=X.startMock('C',45902403);X.answer(r,0,correct(r.tasks[0]),'m');r.cur=54;r.tasks[54].flag=true;X.draft(r,54,'Saved incomplete written answer.');a.L.store.load().session={title:'Old session',idx:2};a.L.store.save();const backup=a.L.store.exportJSON();
  const b=loadLab();assert.equal(b.L.store.importText(backup).ok,true);assert.equal(b.L.exam1.get(r.id).cur,54);assert.equal(b.L.exam1.get(r.id).tasks[54].flag,true);assert.match(b.L.exam1.get(r.id).tasks[54].response,/incomplete/);assert.equal(b.L.store.load().session.idx,2);
  const n=b.L.store.load().attempts.length;assert.equal(b.L.store.importText(backup).ok,true);assert.equal(b.L.store.load().attempts.length,n);assert.equal(b.L.exam1.state().runs.length,1);
});
test('A blank hosted profile imports old earned mastery and a private audiogram credit without changing other concepts',()=>{
  const source=loadLab(), original=source.L.store.load();
  original.attempts.push({i:'s4.cmv1',c:'cmv',ok:true,sc:1,cf:'m',m:'practice',t:100});
  original.attempts.push({i:'s4.cmv3',c:'cmv',ok:true,sc:1,cf:'h',m:'practice',t:101});
  const s2=['degree-scale','pta-degree','loss-type','configuration','audiogram-description','symbols','speech-audiometry','reflex-sl'];
  const exported=JSON.parse(source.L.store.exportJSON());
  // Simulate the user's pre-upgrade export, plus a private self-attestation.
  delete exported.state.masterySeeded;
  exported.state.masteryCredits=Object.fromEntries(s2.map(c=>[c,'self']));
  const hosted=loadLab();
  hosted.L.engine.seedMasteryCredits();hosted.L.store.save();
  assert.equal(hosted.L.store.load().masterySeeded,true,'the host already initialized its empty profile');
  assert.equal(hosted.L.store.importText(JSON.stringify(exported)).ok,true);
  const got=hosted.L.engine.conceptStats();
  assert.equal(got.cmv.status,'mastered','old history earns mastery on import');
  assert.equal(hosted.L.store.load().masteryCredits.cmv,'earned');
  assert.ok(s2.every(c=>got[c].status==='mastered'&&got[c].masterySource==='self'));
  assert.equal(hosted.L.exam1.readiness('audiograms').mastered,hosted.L.exam1.readiness('audiograms').total);
  assert.equal(got.anoxia.status,'new','unrelated topics stay untouched');
  const wrong=hosted.L.engine.REG()['s4.cmv4'];
  const bad=wrong.o.findIndex(o=>!o.ok);
  hosted.L.engine.record(wrong,{id:wrong.id},bad,'h','practice');
  assert.equal(hosted.L.engine.conceptStats().cmv.status,'mastered');
  assert.equal(hosted.L.engine.reviewPlan().find(r=>r.c==='cmv').why,'misconception');
  const backup=hosted.L.store.exportJSON();
  const reloaded=loadLab();
  assert.equal(reloaded.L.store.importText(backup).ok,true);
  assert.equal(reloaded.L.engine.conceptStats().cmv.status,'mastered');
  assert.ok(s2.every(c=>reloaded.L.engine.conceptStats()[c].masterySource==='self'));
});
test('Graph part attempts and first responses merge once across repeated imports',()=>{
  const a=loadLab(),r=a.L.exam1.startGraphs(),value=r.tasks[0].item.parts[0].a;
  assert.equal(a.L.exam1.answerPart(r,0,0,value),true);
  const backup=a.L.store.exportJSON(),b=loadLab();
  assert.equal(b.L.store.importText(backup).ok,true);
  const n=b.L.store.load().attempts.length;
  assert.equal(n,1);assert.equal(b.L.exam1.get(r.id).tasks[0].response[0],value);
  assert.equal(b.L.store.importText(backup).ok,true);
  assert.equal(b.L.store.load().attempts.length,n,'re-import cannot duplicate a graph part');
  assert.equal(b.L.exam1.answerPart(b.L.exam1.get(r.id),0,0,value),false,'restored first response stays locked');
});
test('No silent truncation after 6000 attempts; separate browser stores remain separate',()=>{
  const a=loadLab(),s=a.L.store.load();s.attempts=Array.from({length:6100},(_,i)=>({i:'old'+i,t:i,c:'cmv',ok:false}));a.L.store.save();assert.equal(JSON.parse(a.storage[a.L.store.KEY]).attempts.length,6100);const b=loadLab();assert.equal(b.L.store.load().attempts.length,0);assert.equal(b.L.exam1.state().runs.length,0);
});
test('Quota errors, corrupt storage and competing tabs do not overwrite saved data or claim success',()=>{
  const a=loadLab(),key=a.L.store.KEY;a.L.store.load();a.L.store.save();const original=a.storage[key];a.storage[key]='{"otherTab":true}';assert.equal(a.L.store.save(),false);assert.equal(a.storage[key],'{"otherTab":true}');assert.match(a.L.store.problem(),/Another tab/);
  const b=loadLab({storage:{[key]:'broken-json'}});b.L.store.load();assert.equal(b.L.store.save(),false);assert.equal(b.storage[key],'broken-json');
  const c=loadLab({noStorage:true});c.L.exam1.startWriting('verify');assert.equal(c.L.store.ok(),false);assert.ok(c.L.store.exportJSON().includes('verify'));
});
test('Original figures, guide, concepts and source metadata remain byte-for-byte intact',()=>{
  const hashes=require('./original-content-sha256.json'),crypto=require('node:crypto');
  for(const [file,hash] of Object.entries(hashes)){
    if(/^js\/data\/(?:cases|items-)/.test(file))continue;
    assert.equal(crypto.createHash('sha256').update(fs.readFileSync(path.join(ROOT,file))).digest('hex'),hash,file);
  }
});
test('Reworded original questions preserve every ID, keyed answer, concept and source',()=>{
  const expected=require('./legacy-item-contract.json');
  const {L}=loadLab();
  const actual=L.engine.itemsFor(()=>true).map(i=>({id:i.id,c:i.c,t:i.t,sec:i.sec||null,pool:i.pool||null,tier:i.tier||null,a:i.a??null,ok:i.o?.map(o=>!!o.ok)||null,parts:i.parts?.map(p=>p.a)||null,pairs:i.pairs||null,seq:i.seq||null,s:i.id.startsWith('e1.')?null:(i.s||[]),mediaKind:i.media?.kind||null})).sort((a,b)=>a.id.localeCompare(b.id));
  assert.deepEqual(actual,expected);
});
test('A reloaded original practice answer stays graded and cannot duplicate an attempt',()=>{
  const a=loadLab(),E=a.L.engine;E.newSession('practice','Resume check',[{id:'s1.def1'},{id:'s1.def2'}],{noRetry:true});
  const it=E.REG()['s1.def1'];E.answerInSession(it.o.findIndex(o=>o.ok),'m',false);const count=a.L.store.load().attempts.length;
  const b=loadLab({storage:a.storage});assert.equal(b.L.engine.currentSession().queue[0].grade.ok,true);b.L.engine.answerInSession(99,'h',false);assert.equal(b.L.store.load().attempts.length,count);assert.equal(b.L.engine.currentSession().results.length,1);
});
test('Review can supply fresh variants for a concept with one authored question',()=>{
  const {L}=loadLab(),r=L.exam1.practice('audiograms',4,['configuration']);assert.equal(r.tasks.length,4);assert.ok(new Set(r.tasks.map(t=>t.item.id)).size>=2);assert.ok(r.tasks.every(t=>t.item.c==='configuration'));
});
test('A mock miss needs two distinct unhinted corrections after the miss',()=>{
  const {L}=loadLab(),X=L.exam1,r=X.startMock('A',45902401),i=r.tasks.findIndex(t=>t.item.c==='verify-validate'),t=r.tasks[i];X.answer(r,i,t.item.o.findIndex(o=>!o.ok),'h');t.checkedAt=100;
  const s=L.store.load();s.attempts.push({i:'e1.vv.speech',c:t.item.c,ok:true,sc:1,cf:'m',m:'practice',t:200});assert.ok(X.misses().some(m=>m.c===t.item.c));
  s.attempts.push({i:'e1.vv.box',c:t.item.c,ok:true,sc:1,cf:'m',m:'practice',t:300});assert.ok(!X.misses().some(m=>m.c===t.item.c));
});
console.log(pass+' Exam 1 suites passed');
