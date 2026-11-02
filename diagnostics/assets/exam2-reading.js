/* Exam Two reading only. Exact plans decorate rendered teaching without changing course records. */
(function(){
'use strict';
const T=window.DX_EXAM2,plans=window.DX_EXAM2_READING;
if(window.DX_ACTIVE_EXAM!==T||!plans)return;
const sections=new Map(T.guide.flatMap(m=>m.sections.map((s,i)=>[m.id+':'+i,s])));
const section=window.DXGuideDesign.section;
window.DXGuideDesign.section=function(m,s,i,options){
 const html=section(m,s,i,options),key=m.id+':'+i;
 return plans.sections[key]?html.replace('<article ',`<article data-reading-section="${key}" `):html;
};
const legend=window.DXGuideDesign.legend;
window.DXGuideDesign.legend=function(modules){
 return legend(modules).replace('<span>Color guides reading. It does not predict exam questions.</span>','').replace('<span><b class="checkpoint-key">','<span><b class="reading-definition-key">Lime</b> · meaning &amp; sequence</span><span><b class="checkpoint-key">');
};
function mark(root,phrases,className){
 const pattern=[...new Set(phrases||[])].filter(Boolean).sort((a,b)=>b.length-a.length).map(s=>s.replace(/[.*+?^${}()|[\]\\]/g,'\\$&')).join('|');
 if(!pattern)return;
 const expression=new RegExp('(?<![A-Za-z0-9])('+pattern+')(?![A-Za-z0-9])','gi');
 const walker=document.createTreeWalker(root,NodeFilter.SHOW_TEXT),nodes=[];let node;
 while(node=walker.nextNode())if(!node.parentElement.closest('button,a,textarea,input,summary,h1,h2,h3,h4,mark:not(.study-definition),.reading-check-label,.study-note > span'))nodes.push(node);
 for(const text of nodes){
  let found,last=0,fragment=document.createDocumentFragment();expression.lastIndex=0;
  while(found=expression.exec(text.textContent)){
   fragment.append(text.textContent.slice(last,found.index));
   const span=document.createElement('mark');span.className=className;span.textContent=found[0];fragment.append(span);last=found.index+found[0].length;
  }
  if(last){fragment.append(text.textContent.slice(last));text.replaceWith(fragment);}
 }
}
function annotate(root,plan){
 if(!root||!plan||root.dataset.readingAnnotated||root.closest('.qcard,.topic-feedback,.topic-option,.rubric'))return;
 root.querySelectorAll('mark.study-term').forEach(mark=>mark.replaceWith(document.createTextNode(mark.textContent)));root.normalize();
 mark(root,plan.definitions,'study-definition');mark(root,plan.terms,'study-term');
 for(const rule of plan.checkpoints||[]){
  const candidates=[...root.querySelectorAll('li,p')].reverse();if(root.matches('li,p'))candidates.push(root);
  const point=candidates.find(el=>el.textContent.toLowerCase().includes(rule.phrase.toLowerCase()));
  if(!point||point.classList.contains('reading-checkpoint'))continue;
  point.classList.add('reading-checkpoint');const label=document.createElement('b');label.className='reading-check-label';label.textContent=rule.label;point.prepend(label);
 }
 root.dataset.readingAnnotated='true';
}
function apply(root,view){
 if(!root?.classList||!document.createTreeWalker)return;
 const reading=['home','guide','learn','focus','sources'].includes(view);root.classList.toggle('exam2-reading',reading);
 if(!reading)return;
 root.querySelectorAll('[data-reading-section]').forEach(card=>{
  const key=card.dataset.readingSection,plan=plans.sections[key];
  if(plan&&plan.source===JSON.stringify(sections.get(key)))annotate(card,plan);
 });
 const paragraphs=[...root.querySelectorAll('.chapter-explainer .source-box > p')];
 for(const stage of Object.values(plans.stages).flat()){
  const paragraph=paragraphs.find(p=>p.textContent===stage.source);if(paragraph)annotate(paragraph,stage);
 }
 for(const plan of Object.values(plans.summaries)){
  root.querySelectorAll('.grid > .card > p,.lede').forEach(p=>{if(p.textContent===plan.source)annotate(p,plan);});
 }
 if(view==='focus')for(const plan of plans.focus){
  root.querySelectorAll('.study-focus > section > .study-points li').forEach(li=>{
   const own=[...li.childNodes].filter(n=>n.nodeName!=='UL').map(n=>n.textContent).join('');
   if(own===plan.source)annotate(li,plan);
  });
 }
 root.querySelectorAll('.topic-table tbody tr').forEach(row=>{
  const cells=[...row.querySelectorAll('td')];if(cells.length!==3)return;
  const current=T.directory.find(item=>item.name===cells[0].textContent&&item.association===cells[1].textContent);
  if(!current||!plans.directory.some(item=>JSON.stringify(item)===JSON.stringify(current)))return;
  annotate(cells[0],{terms:[current.name]});annotate(cells[1],{definitions:[current.association]});
 });
}
const render=window.DXTopic.render;
window.DXTopic.render=function(api,parts){render(api,parts);apply(api.app,parts[0]||'home');};
window.DXExam2Reading={apply,annotate};
})();
