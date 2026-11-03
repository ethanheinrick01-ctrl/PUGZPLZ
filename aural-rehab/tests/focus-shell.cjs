const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const {loadLab,ROOT}=require('./load.cjs');
const {L}=loadLab();
const D=L.EXAM2_DATA,F=D.finalMocks,X=L.exam2;
// Expose private presentation helpers in this test runtime only.
const source=fs.readFileSync(path.join(ROOT,'js/ui/exam2.js'),'utf8').replace('L.exam2UI={render:render}', 'L.exam2UI={render:render,focusState:focusState}');
new Function('window',source)(undefined);
global.location={hash:'#exam2/focus'};
const fields={e2body:{innerHTML:''},focusSearch:{value:''},focusFilter:{value:'all'},focusCount:{textContent:''},allFinalCoverage:{}};
let cards=[];
const host={innerHTML:'',classList:{add(){}},querySelector:s=>fields[s.slice(1)]||null,querySelectorAll:s=>s==='[data-focus-card]'?cards:[]};
function render(args){L.exam2UI.render(host,args);return fields.e2body.innerHTML;}
const initial=JSON.stringify(X.state());
let html=render(['focus']);
assert.equal((html.match(/data-focus-card=/g)||[]).length,5);
assert(host.innerHTML.includes('75 concepts'));
assert(html.includes('0/243'));
assert(!html.includes('data-final-form='));
assert.equal(JSON.stringify(X.state()),initial,'render must not write progress');
cards=F.groups.map(g=>({hidden:false,dataset:{focusCard:g.id}}));
fields.focusSearch.value='cochlear';fields.focusSearch.oninput();assert.equal(cards.filter(c=>!c.hidden).length,1);
fields.focusSearch.value='no-such-section';fields.focusSearch.oninput();assert.equal(cards.filter(c=>!c.hidden).length,0);assert(fields.focusCount.textContent.includes('No sections match'));
fields.focusSearch.value='';fields.focusFilter.value='mastered';fields.focusFilter.onchange();assert(cards.every(c=>c.hidden));
for(const g of F.groups){
 html=render(['focus',g.id]);assert.equal((html.match(/class="focus-note-group"/g)||[]).length,g.noteSections.length);assert(html.includes('data-final-coverage="'+g.id+'"'));assert(html.includes('e2-term')&&html.includes('e2-definition')&&html.includes('checkpoint-label'));assert(html.includes('Direct source material'));assert(!html.includes('data-focus-card='));
}
html=render(['mocks']);assert.equal((html.match(/data-final-form=/g)||[]).length,3);assert(!html.includes('data-focus-card='));assert(html.includes('no short answers'));assert(html.includes('Source qualifications'));
render(['focus','unknown']);assert(host.innerHTML.includes('Exam focus'));
const g=F.groups[0],st=L.engine.conceptStats(),cs=g.topics.flatMap(id=>D.topics.find(t=>t.id===id).concepts);
let state=L.exam2UI.focusState(g,st,[]);assert.equal(state.status,'new');assert.equal(state.mastered,0);
st[cs[0]].att=1;state=L.exam2UI.focusState(g,st,[]);assert.equal(state.status,'progress');
cs.forEach(c=>{st[c].status='mastered';});state=L.exam2UI.focusState(g,st,[cs[0]]);assert.equal(state.status,'mastered');assert.equal(state.review,true,'later review must not erase earned mastery');
const id=g.coverageItems[0];X.state().runs.push({tasks:[{checked:true,retry:false,item:{id}},{checked:true,retry:false,item:{id}},{checked:false,item:{id:g.coverageItems[1]}},{checked:true,retry:true,item:{id:g.coverageItems[2]}}]});
state=L.exam2UI.focusState(g,st,[]);assert.equal(state.checked,1,'coverage counts distinct checked original items');
assert.equal(L.exam2UI.focusState(F.groups[1],st,[]).checked,0,'coverage is section-scoped');
const coverage=new Set(F.coverageItems);for(const f of F.forms){assert.equal(f.items.length,65);assert(f.items.every(id=>!coverage.has(id)),'reserved forms must stay separate');}
console.log('PASS Focus dashboard, filters, all section readers, mock routes, progress semantics and bank separation');
