const assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path');
const {loadLab,ROOT}=require('./load.cjs');const loaded=loadLab(),lab=loaded.L;
const before=JSON.stringify({exam2:lab.EXAM2_DATA,exam3:lab.EXAM3_DATA,items:lab.ITEMS,storage:loaded.storage});
const plain=s=>s.replace(/<[^>]*>/g,'');
for(const exam of ['exam2','exam3']){
 const data=lab[exam.toUpperCase()+'_DATA'],view=lab.createStudyView(exam,data,lab[exam]);
 const cards=view.cards();assert.equal((cards.match(/class="topic-card card"/g)||[]).length,data.topics.length);
 assert(cards.includes('class="topic-grid"'));assert(cards.includes('class="btn primary"'));assert(cards.includes('class="topic-mastery"'));
 assert(!cards.includes('#'+(exam==='exam2'?'exam3':'exam2')+'/'));
 for(const topic of data.topics){
  const figures=lab[exam].pool(topic.id,true).length;assert.equal(cards.includes('data-figures="'+topic.id+'"'),!!figures);
  for(const [i,section] of topic.sections.entries()){
   assert.equal(lab.exam2Shell.headings(topic,exam)[i].href,'#'+exam+'/topic/'+topic.id+'/section-'+i);
   assert.equal(lab.exam2Shell.target(topic,'#'+exam+'/topic/'+topic.id+'/section-'+i),'section-'+i);
   const first=topic.sections.findIndex(s=>s.concepts.some(c=>c.replace(/^e[23]-/,'')===section.concepts[0].replace(/^e[23]-/,'')));
   assert.equal(lab.exam2Shell.target(topic,'#'+exam+'/topic/'+topic.id+'/'+section.concepts[0]),'section-'+first);
  }
 }
}
for(const topic of lab.EXAM3_DATA.topics)for(const section of topic.sections){
 assert(section.outline,'missing outline '+topic.id);const html=lab.studyAnnotations.points(section.outline);
 assert(html.includes('note-subpoints')&&html.includes('reading-checkpoint')&&html.includes('checkpoint-label'));
 assert(html.includes('e2-term')&&html.includes('e2-definition'));
 // Full existing paragraphs, including source qualifications, must still appear verbatim.
 for(const point of section.points)assert(plain(html).includes(plain(point)),topic.id+' lost text: '+point);
 const concepts=section.concepts,ids=lab.exam3.select(topic.id,8,false,concepts);assert.equal(ids.length,8);
 assert(ids.every(id=>concepts.includes(lab.exam3.pool().find(i=>i.id===id).c)));
}
global.location={hash:'#exam3/topic/language-assessment'};
const final=lab.createStudyView('exam3',lab.EXAM3_DATA,lab.exam3);
const transcript=final.sources(['ARLT-standardization'],true);assert(transcript.includes('class="source-card" open'));assert(transcript.includes('<details open><summary>Source text'));assert(transcript.includes('source-checkpoint-label'));
assert(final.sources(['ARLS-32']).includes('e2-term'));
assert(final.sources(['ARDC-16']).includes('Unconfirmed exact wording'));
for(const [code,plan] of Object.entries(lab.studyAnnotations.sourcePlans).filter(([c])=>lab.EXAM3_DATA.sourcePages[c])){
 const original=lab.EXAM3_DATA.sourcePages[code].text,html=lab.studyAnnotations.source(code,original);
 assert.equal(plan.source,original,code);
 assert.equal(plain(html.replace(/<b class="source-checkpoint-label">[^<]*<\/b>/g,'')),lab.util.esc(original).replace(/&lt;/g,'<').replace(/&gt;/g,'>'),code);
 if(plan.terms.length)assert(html.includes('e2-term')&&html.includes('e2-definition'),code);
 assert.equal(lab.studyAnnotations.source(code,original+' Changed.'),lab.util.esc(original+' Changed.'));
}
const key=final.readingKey([]);assert(!key.includes('Yellow'));assert(final.readingKey(['<mark class="e2-emphasis">Source emphasis</mark>']).includes('Yellow highlight'));
assert.equal(JSON.stringify({exam2:lab.EXAM2_DATA,exam3:lab.EXAM3_DATA,items:lab.ITEMS,storage:loaded.storage}),before);
const entry=fs.readFileSync(path.join(ROOT,'index.html'),'utf8');for(const exam of ['exam2','exam3'])assert(entry.indexOf('js/study-view.js')<entry.indexOf('js/ui/'+exam+'.js'));
console.log('PASS shared Study cards, exact text, annotations, all section routes/pools, source passages, startup order and read-only rendering');

for(const topic of lab.EXAM3_DATA.topics){
 const control={dataset:{concept:topic.concepts[0]}},view=lab.createStudyView('exam3',lab.EXAM3_DATA,lab.exam3);
 view.mount({querySelectorAll:selector=>selector==='[data-concept]'?[control]:[]});view.bindPractice();control.onclick();
 const run=lab.exam3.get(lab.exam3.state().activeId);assert.deepEqual(run.conceptScope,[topic.concepts[0]]);
 run.cur=run.tasks.length-1;const last=run.tasks[run.cur];lab.exam3.answer(run,run.cur,last.item.o.findIndex(o=>!o.ok),'h');
 assert(run.tasks.every(t=>t.item.c===topic.concepts[0]),'retry filler escaped selected concept');
}
console.log('PASS Final concept launches retain their retry scope');
