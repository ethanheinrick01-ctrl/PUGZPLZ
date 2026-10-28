(function(){
const t=L.EXAM2_DATA.topics.find(t=>t.id==='ci-signal');
const term=s=>'<strong class="e2-term">'+s+'</strong>';
const mark=(s,phrases)=>phrases.reduce((v,p)=>v.replace(p,term(p)),s);
const sections=t.sections;
sections[0].points[0]=mark(sections[0].points[0],['auditory nerve fibers','sensorineural hearing loss','hair cells']);
sections[0].points[1]=mark(sections[0].points[1],['hearing aid']);
sections[0].points[2]=mark(sections[0].points[2],['audiogram']);
sections[1].points[0]=mark(sections[1].points[0].replace('<strong class="e2-term">External</strong>','<b>External</b>'),['microphone','sound processor','transmitting coil/transmitter','battery']);
sections[1].points[1]=mark(sections[1].points[1].replace('<strong class="e2-term">Internal</strong>','<b>Internal</b>'),['receiver','electrode array','electrical pulses']);
sections[1].points[2]=sections[1].points[2].replace('class="e2-term"','class="signal-sequence"');
sections[2].points[0]=mark(sections[2].points[0],['Alessandro Volta','Eddington','William House','Schindler','White','Clark','House/3M','basal cochlea','multichannel systems']);
sections[2].points[1]=sections[2].points[1].replace('<strong class="e2-term">Cochlear, MED-EL, and Advanced Bionics</strong>',[term('Cochlear'),term('MED-EL'),'and '+term('Advanced Bionics')].join(', '));
sections[2].points[1]=mark(sections[2].points[1],['Nucleus 22','behind-the-ear processor']);
sections[2].points[2]=sections[2].points[2].replace('class="e2-term"','class="historical-note"');

function customPractice(){
 const main=document.querySelector('main'),host=main.querySelector('#e2body');if(!host||host.querySelector('#customPractice'))return;
 const D=L.EXAM2_DATA,X=L.exam2,esc=L.util.esc;
 function start(cs,n,title,figures){const ids=X.select(null,n,!!figures,cs);if(!ids.length)return;const run=X.start(figures?'figures':'topic',title,ids);location.hash='#exam2/run/'+run.id;}
 const quick=host.querySelector('.card');quick.querySelector('h2').textContent='Quick start · Exam 2';
 const row=document.createElement('div');row.className='controls';
 [['Lecture 4 · cochlear implants','Lecture 4'],['Lecture 5 · listening & acoustics','Lecture 5'],['Lecture 6 · auditory training','Lecture 6'],['Lecture 7 · visual communication','Lecture 7']].forEach(([label,part])=>{
  const cs=D.topics.filter(t=>t.part===part||t.part.startsWith(part+' ·')).flatMap(t=>t.concepts);if(!cs.length)return;
  const b=document.createElement('button');b.className='btn';b.textContent=label+' · 15';b.onclick=()=>start(cs,15,'Exam 2 · '+part+' quick practice');row.append(b);
 });quick.append(row);
 const formats=document.createElement('details');formats.innerHTML='<summary>More practice formats</summary><div class="controls"><a class="btn" href="#exam2/writing">Short answers</a><a class="btn" href="#exam2/cases">Clinical cases</a><a class="btn" href="#exam2/boss">Challenge</a><a class="btn" href="#exam2/partial">Partial exam practice</a></div>';quick.append(formats);
 const card=document.createElement('details');card.className='card custom-practice';card.id='customPractice';card.setAttribute('aria-labelledby','customHeading');
 card.innerHTML='<summary id="customHeading">Build your own practice</summary><p>Choose concepts from Exam 2 and set your question count. Original answers stay in your history; misses and low-confidence answers may add follow-up questions.</p><div class="controls"><label for="customCount">Number of questions <select id="customCount"><option>10</option><option selected>15</option><option>20</option><option>30</option></select></label><button class="btn" type="button" id="customAll">Select all concepts</button><button class="btn" type="button" id="customClear">Clear selection</button></div>'+D.topics.map((t,i)=>'<details class="custom-topic"><summary>'+esc(t.title)+' <span class="caption">· '+t.concepts.length+' concepts</span></summary><div class="custom-options"><label><input type="checkbox" data-topic-choice="'+t.id+'"> All concepts in this topic</label>'+t.concepts.map(c=>'<label><input type="checkbox" class="custom-concept" data-topic="'+t.id+'" value="'+c+'"> '+esc(D.conceptNames[c])+'</label>').join('')+'</div></details>').join('')+'<p id="customStatus" role="status"></p><button class="btn primary" id="customStart" disabled>Start selected practice</button>';
 quick.after(card);
 const boxes=Array.from(card.querySelectorAll('.custom-concept'));
 const stats=L.engine.conceptStats(),review=new Set(X.review().map(x=>x.c));
 const status=c=>{const st=stats[c];return st?.status==='mastered'?'Mastered':st?.att?'In progress':'Not started';};
 card.querySelectorAll('.custom-topic').forEach((group,i)=>{const topic=D.topics[i],done=topic.concepts.filter(c=>stats[c]?.status==='mastered').length,needs=topic.concepts.filter(c=>review.has(c)).length;const caption=group.querySelector('summary .caption');caption.textContent='· '+done+'/'+topic.concepts.length+' mastered · '+Math.round(100*done/topic.concepts.length)+'%'+(needs?' · '+needs+' need review':'');group.classList.toggle('topic-complete',done===topic.concepts.length);});
 boxes.forEach(box=>{const label=box.parentElement,badge=document.createElement('span'),st=stats[box.value];badge.className='practice-progress '+(status(box.value)==='Mastered'?'is-mastered':'');badge.textContent=status(box.value)+(review.has(box.value)?' · Needs review':'')+' · '+(st?.att||0)+' checks';label.append(badge);});
 const shortcut=document.createElement('div');shortcut.className='controls';
 [['Select unfinished',c=>stats[c]?.status!=='mastered'],['Select needs review',c=>review.has(c)]].forEach(([label,match])=>{const button=document.createElement('button');button.type='button';button.className='btn';button.textContent=label;button.onclick=()=>{boxes.forEach(b=>b.checked=match(b.value));update();};shortcut.append(button);});card.querySelector('#customStatus').before(shortcut);

 const selected=()=>boxes.filter(b=>b.checked).map(b=>b.value);
 function update(){const cs=selected(),available=X.pool().filter(i=>cs.includes(i.c)).length,n=+card.querySelector('#customCount').value;card.querySelector('#customStatus').textContent=cs.length+' concepts selected · '+available+' eligible questions'+(available?' · '+Math.min(n,available)+' in this set':'');card.querySelector('#customStart').disabled=!available;card.querySelectorAll('[data-topic-choice]').forEach(b=>{const group=boxes.filter(x=>x.dataset.topic===b.dataset.topicChoice),checked=group.filter(x=>x.checked).length;b.checked=checked===group.length;b.indeterminate=checked>0&&checked<group.length;});}
 boxes.forEach(b=>b.onchange=update);
 card.querySelectorAll('[data-topic-choice]').forEach(b=>b.onchange=()=>{boxes.filter(x=>x.dataset.topic===b.dataset.topicChoice).forEach(x=>x.checked=b.checked);update();});
 card.querySelector('#customCount').onchange=update;
 card.querySelector('#customAll').onclick=()=>{boxes.forEach(b=>b.checked=true);update();};
 card.querySelector('#customClear').onclick=()=>{boxes.forEach(b=>b.checked=false);update();};
 card.querySelector('#customStart').onclick=()=>start(selected(),+card.querySelector('#customCount').value,'Exam 2 · custom practice');update();
}

// Presentation annotations only; never modify question records or persistence.
const originalHeader=typeof document!=='undefined'?document.querySelector('header.top').innerHTML:null;
function decorate(){
 const inExam2=location.hash.startsWith('#exam2');
 const header=document.querySelector('header.top');
 if(inExam2&&!header.dataset.accepted){header.innerHTML='<div class="bar">\n  <div class="brand">COMD 4590 Lab <small>Aural Rehabilitation · Study &amp; Practice</small></div>\n  <div class="preview-context"><span>Exam 2</span><details><summary>Tools</summary><div class="preview-tools"><a href="#exam2/sources">Sources & coverage</a><a href="#data">Backup / restore</a><a href="#exam2/history">Saved sessions</a><a href="#sutherland">Instructor study guidance</a><a href="#exam1">Exam 1</a></div></details></div>\n  <nav class="main" aria-label="Study"><a href="#exam2/practice">Study</a><a href="#exam2/review">Review</a><a href="#exam2/progress">My progress</a></nav>\n</div>';header.dataset.accepted='true';}
 if(!inExam2&&header.dataset.accepted){header.innerHTML=originalHeader;delete header.dataset.accepted;}
 if(!inExam2){document.body.classList.remove('accepted-lesson');return;}
 if(location.hash==='#exam2/progress'&&!document.querySelector('#savedSessionsLink')){const link=document.createElement('a');link.id='savedSessionsLink';link.className='btn';link.href='#exam2/history';link.textContent='Saved sessions & history';document.querySelector('#e2body').prepend(link);}
 const activeId=location.hash.split('/')[2];
 const activeTopic=L.EXAM2_DATA.topics.find(x=>x.id===activeId);
 const first=!!activeTopic&&location.hash.startsWith('#exam2/topic/');
 document.body.classList.toggle('accepted-lesson',first);
 document.querySelectorAll('nav.main a').forEach(a=>{const r=location.hash;const dest=a.getAttribute('href');const on=dest==='#exam2/practice'?(r.includes('/topic/')||r==='#exam2/practice'||r==='#exam2'||r==='#exam2/'):r.startsWith(dest);a.classList.toggle('on',on);if(on)a.setAttribute('aria-current','page');else a.removeAttribute('aria-current');});
 if(['#exam2/practice','#exam2','#exam2/'].includes(location.hash)){document.querySelector('main h1').textContent='Study · Exam 2';document.querySelector('main .lead').textContent='Choose a mini-chapter to learn it or practice it. Use mixed practice to work across topics.';customPractice();}
 if(!first)return;
 const main=document.querySelector('main');
 const lesson=main.querySelector('#lesson-notes');if(!lesson||lesson.dataset.previewDecorated)return;lesson.dataset.previewDecorated='true';

 const nav=main.querySelector('.navline');if(nav){nav.querySelector('a').textContent='← Study · all mini-chapters';nav.querySelector('a').href='#exam2/practice';nav.querySelector('[data-practice]').textContent='Practice this chapter';nav.querySelector('[data-practice]').classList.add('primary');}
 const key=main.querySelector('.e2-reading-key');key.innerHTML='<span><i class="e2-key-dot term" aria-hidden="true"></i>Magenta: terms & names</span><span><i class="e2-key-dot gold" aria-hidden="true"></i>Gold: lecture emphasis</span><span><i class="e2-key-dot checkpoint-dot" aria-hidden="true"></i>Peach + label: understanding checkpoint</span><small>Color guides reading. It does not predict exam questions.</small>';
 const groups=main.querySelectorAll('.note-group');
 if(activeId==='ci-signal'){
 const p0=groups[0].querySelectorAll('.note-points>li');
 const cp=document.createElement('li');cp.className='learning-checkpoint';cp.setAttribute('aria-label','Key distinction');cp.innerHTML='<b>Key distinction</b><p>A hearing aid amplifies acoustic input. A cochlear implant changes the signal into electrical stimulation.</p>';p0[1].after(cp);
 const p1=groups[1].querySelectorAll('.note-points>li');p1[2].classList.add('learning-checkpoint');p1[2].insertAdjacentHTML('afterbegin','<b class="checkpoint-label">Follow the signal</b>');
 const p2=groups[2].querySelectorAll('.note-points>li');p2[2].classList.add('source-context');p2[2].insertAdjacentHTML('afterbegin','<b class="checkpoint-label">Historical context</b>');
 }
 const t=activeTopic,sections=t.sections;
 groups.forEach((group,index)=>{
  group.classList.add('section-study-card');
  const check=sections[index].checkpoint;if(check){const note=document.createElement('li');note.className='learning-checkpoint';const label=document.createElement('b');label.textContent=check.label;const body=document.createElement('p');body.textContent=check.text;note.append(label,body);group.querySelector('.note-points').append(note);}
  group.querySelectorAll('.checkpoint-label').forEach(label=>{const li=label.closest('li');if(li&&!li.classList.contains('source-context'))li.classList.add('learning-checkpoint');});
  const old=group.querySelector('.note-heading');const heading=document.createElement('h2');heading.className=old.className;heading.textContent=old.textContent;old.replaceWith(heading);
  const cs=sections[index].concepts.map(c=>c.startsWith('e2-')?c:'e2-'+c);
  const available=L.exam2.pool(t.id).filter(i=>cs.includes(i.c)).length,n=Math.min(8,available);
  const footer=document.createElement('div');footer.className='section-study-footer';
  const count=document.createElement('p');count.className='caption';count.textContent=available+' aligned questions available · '+n+' in this set';
  const button=document.createElement('button');button.type='button';button.className='btn primary';button.textContent='Study this section · '+n+' questions →';button.setAttribute('aria-label','Study this section: '+sections[index].title+' · '+n+' questions');button.disabled=!n;
  button.onclick=()=>{const ids=L.exam2.select(t.id,n,false,cs);const run=L.exam2.start('topic',sections[index].title+' · section practice',ids);location.hash='#exam2/run/'+run.id;};
  footer.append(count,button);group.append(footer);
 });
 const mastery=main.querySelector('.topic-mastery');if(mastery)mastery.remove();
}
if(typeof window!=='undefined'&&window){window.addEventListener('hashchange',()=>requestAnimationFrame(decorate));window.addEventListener('DOMContentLoaded',()=>requestAnimationFrame(decorate));}
})();
