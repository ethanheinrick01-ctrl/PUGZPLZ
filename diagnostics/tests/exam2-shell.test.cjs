'use strict';
const assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path'),vm=require('node:vm');
const root=path.resolve(__dirname,'..'),W={location:{hash:'#/topic/home',protocol:'https:',hostname:'example.test'}};
const ctx=vm.createContext({window:W,document:{},console});
const load=file=>vm.runInContext(fs.readFileSync(path.join(root,file),'utf8'),ctx,{filename:file});
for(const match of fs.readFileSync(path.join(root,'index.html'),'utf8').matchAll(/<script src="(data\/[^?]+)[^"]*"><\/script>/g)){
 if(match[1]!=='data/exam-confirmed.js')load(match[1]);
}
load('data/exam2.js');load('data/exam2-week10.js');load('assets/guide-emphasis.js');load('assets/exam2-config.js');
const before=JSON.stringify([W.DX_EXAM1,W.DX_EXAM2,W.DX_DATA,W.DX_COURSE_GUIDE]);
W.DXTopic={render(){}};
load('assets/exam2-shell.js');
const S=W.DXExam2Shell,T=W.DX_EXAM2;
assert.equal(S.focusSections.length,12);
assert.equal(new Set(S.focusSections.map(s=>s.key)).size,12);
for(const entry of S.focusSections){
 assert.equal(entry.section,T.guide.find(m=>m.id===entry.module.id).sections[entry.index]);
 assert.ok(T.sectionMap[entry.key]?.length,'Focus must use an existing scoped practice mapping');
 const values=Object.fromEntries(T.sectionMap[entry.key].map(id=>[id,{mastered:true,attempts:2}]));
 const id=T.sectionMap[entry.key][0];
 values[id].needsReview=true;
 const retained=S.recordFor(entry,values);
 assert.equal(retained.complete,true,'A later review need must retain earned mastery');
 assert.equal(retained.review,true,'A mastered section must still expose its review need');
 assert.equal(S.matches(retained,'','mastered'),true);
 assert.equal(S.matches(retained,'','review'),true);
 assert.equal(S.matches(retained,'','new'),false);
 assert.equal(S.matches(retained,entry.section.h.toUpperCase(),'all'),true);
 assert.equal(S.matches(retained,'impossible-section-text-8675309','all'),false);
 const fresh=S.recordFor(entry,{});
 assert.equal(fresh.status,'new');assert.equal(fresh.mastered,0);
 const partial=S.recordFor(entry,{[id]:{attempts:1,mastered:false}});
 assert.equal(partial.status,'learning');assert.equal(partial.complete,false);
 assert.equal(S.matches(partial,'','learning'),true);
}
const empty=S.recordFor({...S.focusSections[0],key:'unmapped'},{});
assert.equal(empty.complete,false,'An empty mapping must never show vacuous mastery');
const finished={key:'finished',complete:true,review:false},revisit={key:'revisit',complete:true,review:true},unfinished={key:'unfinished',complete:false,review:false};
assert.equal(S.continuation([finished,unfinished,revisit]),unfinished,'Continue uses first unmastered section in existing source order');
assert.equal(S.continuation([finished,revisit]),revisit,'After completion, Continue exposes remaining review');
assert.equal(S.continuation([finished]),finished);
assert.equal(S.continuation([]),null);
for(const [hash,expected] of [
 ['#/topic/home','study'],['#/topic/guide','study'],['#/topic/learn/e2-child','study'],
 ['#/topic/focus','focus'],['#/topic/focus/e2-child%3A0','focus'],['#/topic/focus-paper','focus'],
 ['#/topic/review','review'],['#/topic/practice','study'],['#/topic/cases/e2-pfd','study'],['#/topic/test','focus'],
 ['#/topic/progress','progress'],['#/topic/backup','progress'],['#/progress','progress']
])assert.equal(S.activeTab(hash),expected,hash);
assert.equal(S.activeTab('#/topic/run/saved',{saved:{type:'focus'}}),'focus');
assert.equal(S.activeTab('#/topic/results/saved',{saved:{type:'practice'}}),'study');
assert.equal(S.activeTab('#/topic/run/saved',{saved:{type:'review'}}),'review');
assert.equal(S.activeTab('#/topic/results/saved',{saved:{type:'test'}}),'focus');
W.location.hash='#/topic/focus/%E0%A4%A';
assert.equal(W.DXExamConfig.header('focus',null,(_eye,title)=>title),'Exam focus','Malformed route must safely return to the index');
assert.equal(JSON.stringify([W.DX_EXAM1,W.DX_EXAM2,W.DX_DATA,W.DX_COURSE_GUIDE]),before,'The shell must not mutate course/assessment registries');
assert.ok(!fs.readFileSync(path.join(root,'index.html'),'utf8').includes('exam2-shell'),'Exam 1 must not load the shell');
console.log('PASS12 Focus mappings; retained mastery/review filters; empty mapping; search; route grouping; malformed route; immutable course registries; Exam1 isolation.');
