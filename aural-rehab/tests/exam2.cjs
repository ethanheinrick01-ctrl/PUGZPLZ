const assert=require('assert'),fs=require('fs'),path=require('path');
const {loadLab,ROOT}=require('./load.cjs');let passed=0;
function test(name,fn){fn();passed++;console.log('PASS '+name);}
let {L,storage}=loadLab(),D=L.EXAM2_DATA,E=L.engine,X=L.exam2,S=L.store;
const correct=i=>i.o.findIndex(o=>o.ok),wrong=i=>i.o.findIndex(o=>!o.ok);
test('complete new bank has valid keys, source locations, and at least two independent roots per concept',()=>{
 const ids=new Set();D.items.forEach(raw=>{assert(!ids.has(raw.id));ids.add(raw.id);const i=E.resolve({id:raw.id});assert(i);assert.equal(i.o.filter(o=>o.ok).length,1);assert(D.conceptNames[i.c]);assert(i.s.every(c=>D.sourcePages[c]));if(i.t==='mc')assert([3,4].includes(i.o.length));});
 D.topics.forEach(t=>t.concepts.forEach(c=>{const roots=X.pool(t.id).filter(i=>i.c===c);assert(roots.length>=2,c);assert(new Set(roots.map(i=>i.q)).size>=2,c);}));
 D.written.forEach(w=>{assert(w.rubric.length>=3&&w.model&&w.s.every(c=>D.sourcePages[c]));});
});
test('legacy 35/70 item mock scope remains Exam 1',()=>{[35,70].forEach(n=>{const m=E.buildMock(n);assert.equal(m.refs.length,n);assert(m.refs.every(r=>!E.resolve(r).exam));S.load().mockActive=null;});});
test('first automatic answer is immutable and reload preserves draft, flag, order and snapshot',()=>{
 const r=X.start('topic','fixture',X.select('ci-signal',6));r.tasks[1].flag=true;X.draft(r,1,1);
 const t=r.tasks[0],key=correct(t.item),snap=JSON.stringify(t.item);assert(X.answer(r,0,key,'h'));assert(!X.answer(r,0,wrong(t.item),'l'));const n=S.load().attempts.length;
 const id=r.id;b=loadLab({storage});L=b.L;E=L.engine;X=L.exam2;S=L.store;const restored=X.get(id);
 assert.equal(JSON.stringify(restored.tasks[0].item),snap);assert.equal(restored.tasks[0].response,key);assert(restored.tasks[1].flag);assert.equal(restored.tasks[1].response,1);assert.equal(S.load().attempts.length,n);
});
test('miss retry has two real intervening activities and low-confidence correct has four',()=>{
 ['l','h'].forEach(conf=>{const r=X.start('topic','spacing',X.select('ci-signal',1));const t=r.tasks[0];X.answer(r,0,conf==='l'?correct(t.item):wrong(t.item),conf);const idx=r.tasks.findIndex((q,i)=>i>0&&q.item.c===t.item.c);assert.equal(idx,conf==='l'?5:3);assert(r.tasks.slice(1,idx).every(q=>q.item.c!==t.item.c));});
});
test('two distinct roots can earn mastery; later miss stays in review without revocation',()=>{
 const ids=X.pool('context').filter(i=>i.c==='e2-context-constraints').slice(0,2).map(i=>i.id);const r=X.start('boss','mastery',ids);
 r.tasks.forEach((t,i)=>X.answer(r,i,correct(t.item),'h'));assert.equal(E.conceptStats()['e2-context-constraints'].status,'mastered');
 const rr=X.start('boss','later',ids);X.answer(rr,0,wrong(rr.tasks[0].item),'h');assert.equal(E.conceptStats()['e2-context-constraints'].status,'mastered');assert(X.review().some(p=>p.c==='e2-context-constraints'));
});
test('rubric is explicit, original writing locks on reveal, and self-assessment enters shared history once',()=>{
 const r=X.start('writing','writing',[],[D.written[0]]);assert(!X.reveal(r,0));X.draft(r,0,'Original response');assert(X.reveal(r,0));assert(!X.draft(r,0,'replacement'));assert(!X.rate(r,0,[1],'h'));const ratings=r.tasks[0].ratings.map(()=>1);assert(X.rate(r,0,ratings,'h'));assert(!X.rate(r,0,ratings,'h'));assert.equal(r.tasks[0].response,'Original response');assert(S.load().attempts.some(a=>a.i===r.tasks[0].item.id&&a.self));
});
test('early Boss stays incomplete and full denominator is retained',()=>{
 const r=X.start('boss','early',X.select(null,24));X.answer(r,0,correct(r.tasks[0].item),'m');const s=X.finish(r);assert(!s.complete);assert.equal(s.autoN,24);assert.equal(s.auto,1);
});
test('export and repeated merge retain old and new runs, notes, first answers, and deduplicate attempts',()=>{
 const legacy=L.exam1.startWriting();L.exam1.draft(legacy,0,'Old Exam 1 draft');
 X.state().notes.brain={text:'A saved note',updated:1};const exported=S.exportJSON(),expected=S.load().attempts.length;const b=loadLab();assert(b.L.store.importText(exported).ok);assert(b.L.store.importText(exported).ok);assert.equal(b.L.store.load().attempts.length,expected);assert.equal(b.L.exam1.get(legacy.id).tasks[0].response,'Old Exam 1 draft');assert.equal(b.L.exam2.state().notes.brain.text,'A saved note');assert.equal(b.L.exam2.state().runs.length,X.state().runs.length);
 const incoming=JSON.parse(exported),checked=incoming.state.exam2.runs.find(r=>r.tasks[0].checked);const original=b.L.exam2.get(checked.id).tasks[0].response;checked.tasks[0].response='changed externally';checked.updated=Date.now()+500;assert(b.L.store.importText(JSON.stringify(incoming)).ok);assert.deepEqual(b.L.exam2.get(checked.id).tasks[0].response,original);
});
test('merging note branches retains every alternate and does not duplicate same text',()=>{
 const a=loadLab(),b=loadLab();a.L.exam2.state().notes.brain={text:'Latest',updated:3,alternates:[{text:'First',updated:1}]};b.L.exam2.state().notes.brain={text:'Middle',updated:2,alternates:[{text:'Other branch',updated:1}]};
 assert(a.L.store.importText(b.L.store.exportJSON()).ok);assert(a.L.store.importText(b.L.store.exportJSON()).ok);const note=a.L.exam2.state().notes.brain;assert.equal(note.text,'Latest');assert.deepEqual(new Set(note.alternates.map(v=>v.text)),new Set(['First','Middle','Other branch']));
});
test('pre-Exam 2 recovery export preserves the exact existing record before a new run',()=>{
 const a=loadLab();const old=a.L.store.load();delete old.exam2;old.exam1.runs.push({id:'legacy-fixture',tasks:[],cur:0});a.storage[a.L.store.KEY]=JSON.stringify(old);const raw=a.storage[a.L.store.KEY];
 const b=loadLab({storage:a.storage});b.L.exam2.start('boss','new run',b.L.exam2.select(null,1));assert.equal(b.storage[b.L.store.KEY+'-before-exam2'],raw);assert.deepEqual(JSON.parse(b.L.store.exportBeforeExam2()).state,JSON.parse(raw));
});
test('all original code/data files other than intended integration points remain byte-identical',()=>{
 const hashes=require('./exam2-original-files-sha256.json'),crypto=require('crypto');
 for(const [file,hash] of Object.entries(hashes))assert.equal(crypto.createHash('sha256').update(fs.readFileSync(path.join(ROOT,file))).digest('hex'),hash,file);
});
console.log(`${passed} Exam 2 suites passed`);
