const assert=require('assert');
const {loadLab}=require('./load.cjs');
const loaded=loadLab(),lab=loaded.L,shell=lab.exam2Shell;
let passed=0;function test(name,check){check();passed++;console.log('PASS '+name);}
test('Study covers learning and ordinary activity routes',()=>{
 for(const route of ['#exam2','#exam2/','#exam2/practice','#exam2/topic/ci-signal','#exam2/topic/ci-signal/section-2','#exam2/guide','#exam2/writing','#exam2/cases','#exam2/boss','#exam2/partial','#exam2/sources'])assert.equal(shell.tab(route),'study',route);
 assert.equal(shell.tab('#exam2/run/topic-run','topic'),'study');assert.equal(shell.tab('#exam2/run/figure-run','figures'),'study');
});
test('Focus, Review and Progress have separate current-tab mappings',()=>{
 for(const route of ['#exam2/focus','#exam2/focus/CI','#exam2/mocks','#exam2/mocks/form-a'])assert.equal(shell.tab(route),'focus',route);
 for(const kind of ['final-mock','focus-coverage'])assert.equal(shell.tab('#exam2/run/saved',kind),'focus',kind);
 assert.equal(shell.tab('#exam2/review'),'review');for(const kind of ['review','missed-review'])assert.equal(shell.tab('#exam2/run/saved',kind),'review',kind);
 for(const route of ['#exam2/progress','#exam2/history','#exam2/history/saved','#exam2/result/saved','#exam2/data'])assert.equal(shell.tab(route),'progress',route);
});
test('shared Tools preserve an explicit Exam 2 origin and clear it on Exam 1',()=>{
 let context=false;
 for(const[route,want]of [['#exam2/focus/AT',true],['#data',true],['#sutherland',true],['#exam1',false],['#data',false],['#sutherland',false],['#exam2/review',true],['#home',false],['#data',false]]){context=shell.keep(route,context);assert.equal(context,want,route);}
});
test('fresh Tools and unrelated routes never infer Exam 2 or a current main tab',()=>{
 for(const route of ['#data','#sutherland','#exam1','#exam1/learn/1','#home','#exam20','#exam2-old']){assert.equal(shell.keep(route,false),false,route);assert.equal(shell.tab(route),null,route);}
 assert.equal(shell.keep('#exam20',true),false);assert.equal(shell.keep('#data/unknown',true),false);
});
test('navigation helpers do not mutate course data or storage',()=>{
 const before=JSON.stringify({data:lab.EXAM2_DATA,exam1:lab.EXAM1_DATA,storage:loaded.storage});
 for(const r of ['#exam2/focus/VS','#data','#exam1','#exam2/run/saved']){shell.keep(r,true);shell.tab(r,'final-mock');}
 assert.equal(JSON.stringify({data:lab.EXAM2_DATA,exam1:lab.EXAM1_DATA,storage:loaded.storage}),before);
});
test('scoped Data keeps Exam 2 on direct load and reload without stored context',()=>{
 assert.equal(shell.keep('#exam2/data',false),true);assert.equal(shell.tab('#exam2/data'),'progress');
 assert.equal(shell.keep('#data',false),false);
});
test('each lesson heading links to its existing topic section without changing teaching',()=>{
 const before=JSON.stringify(lab.EXAM2_DATA.topics);let count=0;
 lab.EXAM2_DATA.topics.forEach(topic=>{const options=shell.headings(topic);assert.equal(options.length,topic.sections.length);options.forEach((option,i)=>{assert.equal(option.href,'#exam2/topic/'+topic.id+'/section-'+i);assert.equal(option.label,topic.sections[i].outlineTitle||topic.sections[i].title);count++;});});
 assert.equal(count,69);assert.equal(JSON.stringify(lab.EXAM2_DATA.topics),before);
});
test('resume shows the existing unfinished run and disappears when its first answers are complete',()=>{
 const X=lab.exam2;assert.equal(shell.resume(),null);
 const run=X.start('topic','Resume fixture',X.select('ci-signal',1));
 const before=JSON.stringify({state:X.state(),storage:loaded.storage});
 assert.deepEqual(shell.resume(),{id:run.id,title:'Resume fixture',answered:0,total:1});
 assert.equal(JSON.stringify({state:X.state(),storage:loaded.storage}),before,'Resume display wrote state');
 const correct=run.tasks[0].item.o.findIndex(option=>option.ok);assert(X.answer(run,0,correct,'h'));assert.equal(shell.resume(),null);
});
test('lesson deep links resolve after decoration, including sections, tools and concepts',()=>{
 let checked=0;
 lab.EXAM2_DATA.topics.forEach(topic=>{
  topic.sections.forEach((section,i)=>{assert.equal(shell.target(topic,'#exam2/topic/'+topic.id+'/section-'+i),'section-'+i);checked++;});
  for(const id of ['lesson-notes','lesson-media','lesson-figures','study-notes'])assert.equal(shell.target(topic,'#exam2/topic/'+topic.id+'/'+id),id);
  const concept=topic.sections[0].concepts[0],plain=concept.replace(/^e2-/,'');assert.equal(shell.target(topic,'#exam2/topic/'+topic.id+'/'+concept),'section-0');assert.equal(shell.target(topic,'#exam2/topic/'+topic.id+'/e2-'+plain),'section-0');
  assert.equal(shell.target(topic,'#exam2/topic/'+topic.id),null);assert.equal(shell.target(topic,'#exam2/topic/'+topic.id+'/section-'+topic.sections.length),null);assert.equal(shell.target(topic,'#exam2/topic/'+topic.id+'/unknown-target'),null);assert.equal(shell.target(topic,'#exam2/topic/not-this-topic/section-0'),null);
 });
 assert.equal(checked,69);
});
console.log(`${passed} header/navigation suites passed`);
