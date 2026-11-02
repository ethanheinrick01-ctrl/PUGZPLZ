const assert=require('node:assert/strict'),fs=require('node:fs'),vm=require('node:vm');
const path=require('node:path'),root=path.resolve(__dirname,'..');
const context={window:{},console};vm.createContext(context);
const load=file=>vm.runInContext(fs.readFileSync(path.join(root,file),'utf8'),context,{filename:file});
for(const match of fs.readFileSync(path.join(root,'index.html'),'utf8').matchAll(/<script src="(data\/[^?]+)[^"]*"><\/script>/g)){
  if(match[1]!=='data/exam-confirmed.js')load(match[1]);
}
load('data/exam2.js');load('data/exam2-week10.js');
load('assets/guide-emphasis.js');load('assets/study-outline-data.js');load('assets/study-outline.js');load('assets/guide-design.js');
context.self=context.window;load('assets/engine.js');load('assets/visuals.js');
const W=context.window,O=W.DXStudyOutline,registry=JSON.stringify([W.DX_DATA,W.DX_EXAM1,W.DX_EXAM2,W.DX_COURSE_GUIDE]);
W.DXSectionStudy={button:()=>'<button>Existing practice</button>'};
let sections=0,matched=0;
for(const m of [...W.DX_DATA.modules.filter(m=>m.specialTopic!=='cas'),...W.DX_COURSE_GUIDE,...W.DX_EXAM2.guide])for(let i=0;i<m.sections.length;i++){
 const s=m.sections[i];sections++;
 for(const source of [...s.body||[],...s.bullets||[],...(s.callouts||[]).map(c=>c.t)]){
  assert.ok(W.DX_STUDY_OUTLINES[source],`${m.id}:${i} is missing an exact outline`);matched++;
  const check=nodes=>nodes.forEach(n=>{assert.ok(n[0].trim(),'empty point');if(n[1])check(n[1]);});check(O.points(source));
 }
 const once=W.DXGuideDesign.section(m,s,i),twice=W.DXGuideDesign.section(m,s,i);
 assert.equal(once,twice,'repeated rendering changed the outline');assert.match(once,/Sources for this section/);assert.match(once,/Existing practice/);
}
assert.equal(JSON.stringify([W.DX_DATA,W.DX_EXAM1,W.DX_EXAM2,W.DX_COURSE_GUIDE]),registry,'source or question registry mutated');
const escape=s=>s.replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;');
const changed='New text; with a changed claim: preserve it intact.';
assert.equal(O.render(changed,escape),`<ul class="study-points"><li>${changed}</li></ul>`);
assert.ok(!O.render('<img src=x onerror=alert(1)>',escape).includes('<img'));
assert.equal(O.items([],escape),'<ul class="study-points"></ul>');
const seven=W.DX_COURSE_GUIDE.find(m=>m.id==='m01').sections[2].body[1];
const text=JSON.stringify(O.points(seven));assert.ok(text.includes("'No, you're not. Ethically, you say that... further testing is warranted.'"),'quoted passage split');
const ebp=W.DX_COURSE_GUIDE.find(m=>m.id==='m02').sections[1].body[0];assert.equal(O.points(ebp)[0][1].length,3);
console.log(`PASS ${sections} current/legacy section renderings, ${matched} exact prose matches, safe fallback, quote preservation, escaping, empty input and registry immutability.`);

assert.ok(!W.DXGuideDesign.legend([]).includes('Yellow highlight'));
assert.ok(W.DXGuideDesign.legend([W.DX_COURSE_GUIDE.find(m=>m.id==='m01')]).includes('Yellow highlight'));

for(const value of ['constructor','toString','__proto__'])assert.equal(O.render(value,escape),`<ul class="study-points"><li>${value}</li></ul>`);

// Exercise the legacy caller with its real visual renderer and evidence helpers.
const appCode=fs.readFileSync(path.join(root,'assets/app.js'),'utf8');
const legacy={window:W,D:W.DX_DATA,app:{innerHTML:''},S:{modules:{}},save:()=>{},nowISO:()=>'',
 esc:s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c])),
 cstat:()=> 'new',STATUS_LABEL:{new:'Not started'},CONC:W.DX_DATA.concepts,
 PRACTICE:W.DX_DATA.items.filter(q=>q.pool==='practice')};
vm.createContext(legacy);
for(const name of ['EV_LABEL','CALLOUT','evBadge'])vm.runInContext(appCode.match(new RegExp('  const '+name+' = [\\s\\S]*?;\\n'))[0],legacy);
vm.runInContext(appCode.slice(appCode.indexOf('  function vModule(m) {'),appCode.indexOf('  /* ================= item rendering')),legacy);
let baselineZoom=0,renderedZoom=0,badges=0;
for(const m of W.DX_DATA.modules.filter(m=>m.specialTopic!=='cas')){
 legacy.vModule(m);
 const html=legacy.app.innerHTML;
 renderedZoom+=(html.match(/data-act="zoom"/g)||[]).length;
 assert.ok(!html.includes('Existing practice'),'legacy module should retain its original module practice footer');
 for(const s of m.sections){
  if(s.visual)baselineZoom+=(W.DXV.render(s.visual,{mode:'guide'}).match(/data-act="zoom"/g)||[]).length;
  for(const c of s.callouts||[]){
   legacy.ev=c.ev;
   const badge=vm.runInContext('evBadge(ev)',legacy);
   assert.ok(html.includes(badge),`${m.id} lost evidence badge ${c.ev}`);badges++;
  }
 }
}
assert.equal(baselineZoom,17);assert.equal(renderedZoom,baselineZoom,'legacy Enlarge controls changed');
for(const label of ['Assigned video','Her slides','Lab inference'])assert.ok(appCode.includes(label));
const sample=W.DX_DATA.modules.find(m=>m.sections.some(s=>(s.callouts||[]).some(c=>c.k==='gonsoulin')));
const index=sample.sections.findIndex(s=>(s.callouts||[]).some(c=>c.k==='gonsoulin'));
assert.equal(W.DXGuideDesign.section(sample,sample.sections[index],index,{practice:false}).includes('note-gonsoulin'),false,'practice flag must not control historical callouts');
assert.ok(W.DXGuideDesign.section(sample,sample.sections[index],index,{historicalCallouts:true}).includes('note-gonsoulin'));
console.log(`PASS legacy route preserves all ${renderedZoom} Enlarge controls and ${badges} evidence badges; renderer options are independent.`);
