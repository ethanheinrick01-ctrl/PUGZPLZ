const assert=require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');
const {loadLab,ROOT}=require('./load.cjs');
let pass=0;
function test(name,fn){fn();pass++;console.log('PASS '+name);}
function correct(t){return t.item.o.findIndex(o=>o.ok);}
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
test('Immediate answer grades once, queues a miss, locks first response and never grants mock mastery',()=>{
  const {L}=loadLab(),X=L.exam1,r=X.startMock('A',45902401),t=r.tasks[0],wrong=t.item.o.findIndex(o=>!o.ok);
  assert.equal(X.answer(r,0,wrong,'h'),true);assert.equal(t.grade.ok,false);assert.ok(X.misses().some(m=>m.c===t.item.c));
  const n=L.store.load().attempts.length;assert.equal(X.answer(r,0,correct(t),'h'),false);assert.equal(L.store.load().attempts.length,n);
  assert.equal(X.score(r).possible,70);assert.equal(X.score(r).total,0);assert.equal(L.engine.conceptStats()[t.item.c].att,0);
});
test('Graph parts save and lock individually, give partial credit and enter misses immediately',()=>{
  const {L}=loadLab(),X=L.exam1,r=X.startGraphs(),t=r.tasks[0];
  X.answerPart(r,0,0,t.item.parts[0].options.find(v=>v!==t.item.parts[0].a));assert.ok(X.misses().length);
  assert.equal(X.answerPart(r,0,0,t.item.parts[0].a),false);
  for(let i=1;i<6;i++)X.answerPart(r,0,i,t.item.parts[i].a);
  assert.equal(t.checked,true);assert.equal(Math.round(t.grade.sc*6),5);
});
test('Written drafts survive reload and rubric checks are per question, honest, and locked after scoring',()=>{
  const a=loadLab(),r=a.L.exam1.startWriting('verify');a.L.exam1.draft(r,0,'Verification measures device output; validation measures benefit.');
  const b=loadLab({storage:a.storage}),X=b.L.exam1,restored=X.get(r.id);assert.match(restored.tasks[0].response,/device output/);
  assert.equal(restored.tasks[0].rubricOpen,false);assert.equal(X.reveal(restored,0),true);
  X.rate(restored,0,0,1);X.rate(restored,0,1,1);X.rate(restored,0,2,0);assert.equal(X.score(restored).self,2);assert.equal(X.score(restored).auto,0);assert.equal(X.score(restored).possible,3);
  assert.equal(X.rate(restored,0,2,1),false);assert.equal(b.L.store.load().attempts.length,0);assert.ok(X.misses().length);
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
test('Export/import transfers complete runs, drafts, flags, position and active older work without duplicate attempts',()=>{
  const a=loadLab(),X=a.L.exam1,r=X.startMock('C',45902403);X.answer(r,0,correct(r.tasks[0]),'m');r.cur=54;r.tasks[54].flag=true;X.draft(r,54,'Saved incomplete written answer.');a.L.store.load().session={title:'Old session',idx:2};a.L.store.save();const backup=a.L.store.exportJSON();
  const b=loadLab();assert.equal(b.L.store.importText(backup).ok,true);assert.equal(b.L.exam1.get(r.id).cur,54);assert.equal(b.L.exam1.get(r.id).tasks[54].flag,true);assert.match(b.L.exam1.get(r.id).tasks[54].response,/incomplete/);assert.equal(b.L.store.load().session.idx,2);
  const n=b.L.store.load().attempts.length;assert.equal(b.L.store.importText(backup).ok,true);assert.equal(b.L.store.load().attempts.length,n);assert.equal(b.L.exam1.state().runs.length,1);
});
test('No silent truncation after 6000 attempts; separate browser stores remain separate',()=>{
  const a=loadLab(),s=a.L.store.load();s.attempts=Array.from({length:6100},(_,i)=>({i:'old'+i,t:i,c:'cmv',ok:false}));a.L.store.save();assert.equal(JSON.parse(a.storage[a.L.store.KEY]).attempts.length,6100);const b=loadLab();assert.equal(b.L.store.load().attempts.length,0);assert.equal(b.L.exam1.state().runs.length,0);
});
test('Quota errors, corrupt storage and competing tabs do not overwrite saved data or claim success',()=>{
  const a=loadLab(),key=a.L.store.KEY;a.L.store.load();a.L.store.save();const original=a.storage[key];a.storage[key]='{"otherTab":true}';assert.equal(a.L.store.save(),false);assert.equal(a.storage[key],'{"otherTab":true}');assert.match(a.L.store.problem(),/Another tab/);
  const b=loadLab({storage:{[key]:'broken-json'}});b.L.store.load();assert.equal(b.L.store.save(),false);assert.equal(b.storage[key],'broken-json');
  const c=loadLab({noStorage:true});c.L.exam1.startWriting('verify');assert.equal(c.L.store.ok(),false);assert.ok(c.L.store.exportJSON().includes('verify'));
});
test('Original authored data and every original image remain byte-for-byte intact',()=>{
  const hashes=require('./original-content-sha256.json'),crypto=require('node:crypto');
  for(const [file,hash] of Object.entries(hashes))assert.equal(crypto.createHash('sha256').update(fs.readFileSync(path.join(ROOT,file))).digest('hex'),hash,file);
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
