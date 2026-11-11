const assert=require('assert'),fs=require('fs'),path=require('path'),crypto=require('crypto');
const {loadLab,ROOT}=require('./load.cjs');
const loaded=loadLab(),lab=loaded.L,a=lab.studyAnnotations,D=lab.EXAM2_DATA;
const baseline=require('./reading-annotation-baseline.json');
const hash=v=>crypto.createHash('sha256').update(JSON.stringify(v)).digest('hex');
let passed=0;function test(name,fn){fn();passed++;console.log('PASS '+name);}
function stripLabels(s){return s.replace(/<b class="(?:checkpoint-label|source-checkpoint-label)">[\s\S]*?<\/b>/g,'');}
function plain(s){return s.replace(/<[^>]*>/g,'').replace(/&lt;/g,'<').replace(/&gt;/g,'>').replace(/&quot;/g,'"').replace(/&#39;/g,"'").replace(/&amp;/g,'&');}
function originalText(nodes){return nodes.map(n=>typeof n==='string'?plain(n):plain(n.text)+originalText(n.children||[])).join('');}
const sections=D.topics.flatMap(t=>t.sections.map(s=>({id:t.id,title:s.title,nodes:s.outline||s.points}))).concat(D.finalMocks.groups.flatMap(g=>g.noteSections.map(s=>({id:g.id,title:s.title,nodes:s.outline||s.points}))));
test('all 69 Study and 15 Focus sections have paired semantic colors and local checkpoints',()=>{
 assert.equal(sections.length,84);sections.forEach(s=>{const h=a.points(s.nodes);for(const role of ['e2-term','e2-definition','checkpoint-label'])assert(h.includes(role),s.id+' / '+s.title+' missing '+role);});
});
test('teaching preserves every word, nested list and provenance-backed yellow mark',()=>{
 sections.forEach(s=>{const h=a.points(s.nodes),withoutExtras=h.replace(/<aside class="reading-checkpoint reading-supplement">[\s\S]*?<\/aside>/g,'');assert.equal(plain(stripLabels(withoutExtras)),originalText(s.nodes),s.id+' text changed');
 const before=lab.studyReading.points(s.nodes),yellow=Array.from(before.matchAll(/<(?:mark|strong) class="e2-emphasis"[^>]*>[\s\S]*?<\/(?:mark|strong)>/g),m=>m[0]);yellow.forEach(mark=>assert(h.includes(mark),s.id+' yellow changed'));assert.equal((h.match(/<ol /g)||[]).length,(before.match(/<ol /g)||[]).length,s.id+' ordered list changed');});
});
test('every selected teaching term has a local lime meaning or preserved yellow relationship',()=>{
 for(const[text,plan]of Object.entries(a.plans)){const h=a.markHTML(text,plan);if(h.includes('class="e2-term"'))assert(h.includes('class="e2-definition"')||h.includes('class="e2-emphasis"'),text);}
});
test('all 195 substantive cited sources and 19 shared media transcripts retain exact text',()=>{
 const keys=Object.keys(a.sourcePlans);assert.equal(keys.filter(k=>!k.startsWith('media:')).length,195);assert.equal(keys.filter(k=>k.startsWith('media:')).length,19);
 for(const[code,p]of Object.entries(a.sourcePlans)){
  const original=code.startsWith('media:')?lab.EXAM2_AUDIO[code.slice(6)].text:D.sourcePages[code].text;assert.equal(p.source,original,code+' stale data');const h=a.source(code,original);assert(h.includes('e2-term')&&h.includes('e2-definition'),code+' colors');assert.equal(plain(stripLabels(h)),original,code+' changed source');
  (p.checkpoints||[]).forEach(c=>assert(original.includes(c.phrase),code+' invalid checkpoint'));
 }
 Object.entries(lab.EXAM2_FILMS).forEach(([id,film])=>assert.equal(film.text,lab.EXAM2_AUDIO[id].text,id+' film/audio transcript mismatch'));
});
test('source and teaching selection guards fail safely after an author edits the text',()=>{
 const code='ARL4-10',text=D.sourcePages[code].text+' Added source qualification.';assert.equal(a.source(code,text),lab.util.esc(text));assert.equal(a.source('unknown','<script>&"'),lab.util.esc('<script>&"'));
 const original=Object.keys(a.plans).find(p=>a.plans[p].terms.length&&a.plans[p].definitions.length);assert(!a.points([original+' Updated qualification.']).includes('e2-definition'));
});
test('HTML-safe source overlays, whole terms, and idempotent highlighting',()=>{
 const plan={terms:['CI'],definitions:['electrical access']};const text='CIRCUIT and CI provides electrical access.';const h=a.markHTML(text,plan);assert(h.includes('CIRCUIT and <span class="e2-term">CI</span>'));assert.equal(a.markHTML(h,plan),h);
 assert.equal(a.markHTML('<a href="CI">CI</a> <mark class="e2-emphasis">electrical access</mark>',plan),'<a href="CI">CI</a> <mark class="e2-emphasis">electrical access</mark>');
});
test('all public teaching, assessment, source, media, revision and Exam 1 records equal published base',()=>{
 for(const[k,v]of Object.entries(baseline.records))assert.equal(hash(lab[k]),v,k+' changed');
 assert.equal(hash(Object.values(lab.GUIDE).flat().filter(c=>!c.id.startsWith('e2-'))),baseline.exam1Guide);assert.equal(lab.store.KEY,baseline.storageKey);
 const before=JSON.stringify(loaded.storage);sections.forEach(s=>a.points(s.nodes));Object.entries(a.sourcePlans).forEach(([k,v])=>a.source(k,v.source));assert.equal(JSON.stringify(loaded.storage),before,'render wrote to storage');
});
test('legacy Exam 2 Guide uses the same reading and retains lesson navigation',()=>{
 let count=0;Object.values(lab.GUIDE).flat().forEach(card=>{const topic=D.topics.find(t=>card.id==='e2-'+t.id+'-guide');if(!topic)return;count++;assert(card.html.includes('e2-definition'));assert(card.html.includes('checkpoint-label'));baseline.exam2GuideLinks[card.id].forEach(href=>assert(card.html.includes('href="'+href+'"')));});assert.equal(count,19);
});
test('renderer wiring limits annotation to teaching and retains neutral assessment routing',()=>{
 const ui=fs.readFileSync(path.join(ROOT,'js/ui/exam2.js'),'utf8')+fs.readFileSync(path.join(ROOT,'js/study-view.js'),'utf8');assert(!ui.includes('Color guides reading;'));assert(ui.includes('Lime</strong> · definition, explanation or sequence'));assert.equal((ui.match(/L\.studyAnnotations\.points/g)||[]).length,2);assert.equal((ui.match(/L\.studyAnnotations\.source/g)||[]).length,3);assert(ui.includes('location.hash)?L.studyAnnotations.source(code,p.text):esc(p.text)'));
});
console.log(`${passed} annotation suites passed`);
