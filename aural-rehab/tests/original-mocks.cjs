const assert=require('node:assert/strict'),fs=require('fs'),path=require('path');
const {loadLab}=require('./load.cjs');
let passes=0;function test(name,f){f();console.log('PASS '+name);passes++;}
const correct=t=>t.item.o.findIndex(o=>o.ok);
test('Three mock-only banks contain 156 unique new objectives and six distinct written prompts',()=>{
 const {L}=loadLab(),all=L.EXAM1_DATA.originalForms,old=L.engine.itemsFor(()=>true),ids=new Set(),stems=new Set();
 assert.equal(all.length,3);
 for(const f of all){assert.equal(f.objectives.length,52);assert.equal(f.shorts.length,2);
  for(const it of f.objectives.concat(f.shorts)){
   assert.ok(!ids.has(it.id),it.id);ids.add(it.id);assert.ok(!stems.has(it.q));stems.add(it.q);
   assert.ok(!old.some(o=>o.id===it.id||o.q===it.q));assert.ok(L.CONCEPTS[it.c],it.id+' concept');
   assert.ok(it.s.length);for(const s of it.s)assert.ok(L.srcBase(s),it.id+': '+s);
   if(it.t==='mc'){assert.equal(it.o.length,4);assert.equal(new Set(it.o).size,4);assert.ok(Number.isInteger(it.a)&&it.a>=0&&it.a<4);}
   if(it.t==='tf')assert.equal(typeof it.a,'boolean');
  }
  for(const ch of L.EXAM1_DATA.chapters)assert.ok(!L.exam1.pool(ch.id).some(it=>ids.has(it.id)));
 }
 assert.equal(ids.size,162);
});
test('Six audiograms have unique specifications and different type/configuration pairings',()=>{
 const {L}=loadLab(),graphs=L.EXAM1_DATA.forms.flatMap(f=>L.exam1.form(f.seed).filter(t=>t.kind==='graph'));
 assert.equal(new Set(graphs.map(t=>JSON.stringify(t.item.media.spec))).size,6);
 assert.equal(new Set(graphs.map(t=>[0,2,3,5].map(i=>t.item.parts[i].a).join('|'))).size,6);
 for(const t of graphs)for(const [i,side] of ['right','left'].entries()){
  const e=t.item.media.spec[side],pta=(e.ac[500]+e.ac[1000]+e.ac[2000])/3;
  assert.equal(t.item.parts[i*3].a,L.conv.TYPE_LABELS[L.conv.typeOf(e.ac,e.bc)]);
  assert.equal(t.item.parts[i*3+1].a,L.conv.degree(pta).label);
  assert.ok(L.conv.degree(pta).key);assert.equal(Object.keys(e.bc).length,4);
 }
});
test('New mock answers feed mastery once, preserve first responses and restore after serialization',()=>{
 const a=loadLab(),L=a.L,X=L.exam1,r=X.startMock('A'),t=r.tasks[0],wrong=t.item.o.findIndex(o=>!o.ok);
 X.answer(r,0,wrong,'h');assert.equal(t.grade.ok,false);assert.ok(X.misses().some(m=>m.c===t.item.c));
 const count=L.store.load().attempts.length;X.answer(r,0,correct(t),'m');assert.equal(L.store.load().attempts.length,count);assert.equal(t.response,wrong);
 const b=loadLab({storage:a.storage});assert.deepEqual(b.L.exam1.get(r.id),r);assert.equal(b.L.engine.conceptStats()[t.item.c].att,1);
});
test('Every original form is fully solvable for 70 points with self-scored writing separate',()=>{
 for(const name of ['A','B','C']){const {L}=loadLab(),X=L.exam1,r=X.startMock(name);
 r.tasks.forEach((t,i)=>{if(t.kind==='graph')t.item.parts.forEach((p,j)=>X.answerPart(r,i,j,p.a));else if(t.kind==='short'){X.draft(r,i,'Verification fixture answer');X.reveal(r,i);[0,1,2].forEach(j=>X.rate(r,i,j,1));}else X.answer(r,i,correct(t),'m');});
 assert.deepEqual([X.score(r).total,X.score(r).auto,X.score(r).self],[70,64,6]);assert.equal(X.score(r).complete,true);
 }
});
test('A missed original written prompt can be retried without entering the public writing workshop',()=>{
 const {L}=loadLab(),X=L.exam1,r=X.startMock('B'),i=54;
 X.draft(r,i,'Partial fixture answer');X.reveal(r,i);[0,1,2].forEach(j=>X.rate(r,i,j,0));
 const miss=X.misses().find(m=>m.kind==='short'),retry=X.retry(miss);
 assert.equal(retry.tasks.length,1);assert.equal(retry.tasks[0].item.id,r.tasks[i].item.id);assert.equal(retry.tasks[0].checked,false);
 assert.ok(!L.EXAM1_DATA.shorts.some(s=>s.id===retry.tasks[0].item.id));
});
if(process.env.PROGRESS_BACKUP)test('Actual pre-update progress survives loading, new form creation and reload unchanged',()=>{
 const raw=JSON.parse(fs.readFileSync(process.env.PROGRESS_BACKUP,'utf8')),before=raw.state||raw,store={'comd4590-lab-v2':JSON.stringify(before)},a=loadLab({storage:store});
 for(const f of a.L.EXAM1_DATA.forms)a.L.exam1.startMock(f.name);
 const b=loadLab({storage:store}),after=b.L.store.load();
 for(const k of ['attempts','masteryCredits','session','boss','mocks','guideRead','seenX','prior'])assert.deepEqual(after[k],before[k],k);
 assert.deepEqual(after.exam1.runs.slice(0,before.exam1.runs.length),before.exam1.runs);
 assert.equal(after.exam1.runs.length,before.exam1.runs.length+3);
 console.log('PRESERVED '+before.attempts.length+' attempts; '+before.exam1.runs.length+' runs; all mastery credits');
});
console.log(passes+' original mock suites passed');
