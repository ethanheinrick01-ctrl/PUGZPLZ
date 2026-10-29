(function(root){
 'use strict';
 var L=root.L,D=L.EXAM2_DATA,X=L.exam2,E=L.engine,S=L.store,U=L.util,I=L.itemUI,esc=U.esc,main,filmResize;
 function go(route){location.hash='#exam2'+(route?'/'+route:'');}
 function el(id){return main.querySelector('#'+id);}
 function button(label,attrs){return '<button class="btn" '+(attrs||'')+'>'+label+'</button>';}
 function link(label,route){return '<a class="btn" href="#exam2/'+route+'">'+label+'</a>';}
 function topic(id){return D.topics.find(function(t){return t.id===id;});}
 function base(view,title,lead){
  if(filmResize){filmResize.disconnect();filmResize=null;}
  var tabs=[['','Mini-chapters'],['guide','Guide'],['practice','Practice'],['writing','Writing'],['cases','Cases'],['boss','Boss'],['focus','Exam focus & mocks'],['partial','Earlier partial set'],['review','Review'],['history','My history'],['progress','Progress'],['sources','Sources']];
  main.classList.add('e2');
  var heading='<div class="eyebrow">COMD 4590 · Fall 2026 · Whitney Sutherland</div><h1>'+title+'</h1>'+(lead?'<p class="lead">'+lead+'</p>':'');
  var navigation='<nav class="subnav" aria-label="Exam 2">'+tabs.map(function(t){return '<a href="#exam2'+(t[0]?'/'+t[0]:'')+'"'+(view===t[0]?' aria-current="page"':'')+'>'+t[1]+'</a>';}).join('')+'<a href="#data">Backup / restore</a></nav>';
  main.innerHTML=(view==='guide'?navigation+heading:heading+navigation)+'<div id="e2body"></div>';
 }
 function readingKey(){
  return '<aside class="e2-reading-key" aria-label="Reading color key"><span><i class="e2-key-dot gold" aria-hidden="true"></i>Gold: documented lecture emphasis</span><span><i class="e2-key-dot term" aria-hidden="true"></i>Magenta: key terms and distinctions</span><small>Colors guide study; they do not predict exam questions.</small></aside>';
 }
 function mastery(t){
  var r=X.summary(t.id),st=E.conceptStats();
  return '<details class="topic-mastery"><summary>Mastery details · '+(r.total-r.mastered)+' unfinished</summary><p class="caption">Choose a concept for up to eight distinct questions. Misses and low-confidence answers may add spaced review.</p>'+t.concepts.map(function(c){return conceptPractice(t,c,st);}).join('')+'</details>';
 }
 function adjacent(t){
  var n=D.topics.indexOf(t),prev=D.topics[n-1],next=D.topics[n+1];
  return '<nav class="navline lesson-pagination" aria-label="Mini-chapter navigation">'+(prev?link('← '+esc(prev.title),'topic/'+prev.id):'<span></span>')+(next?link(esc(next.title)+' →','topic/'+next.id):link('All mini-chapters',''))+'</nav>';
 }
 function source(code,open){
  var p=D.sourcePages[code];
  if(!p)return '<p>'+esc(L.srcLabel(code))+'</p>';
  return '<details class="source-card"'+(open?' open':'')+'><summary>'+esc(p.label)+'</summary><p><a href="'+esc(p.href)+'" target="_blank" rel="noopener">'+(p.citationOnly?'View source citation':'Open original at this location')+'</a></p>'+
   (p.image?'<a href="'+esc(p.image)+'" target="_blank" rel="noopener"><img src="'+esc(p.image)+'" alt="'+esc(p.label)+'" loading="lazy"></a>':'')+
   '<details><summary>'+ (p.citationOnly?'Source note':'Source text'+(!p.image?' (automatic transcript)':''))+'</summary><div class="source-text">'+esc(p.text)+'</div></details></details>';
 }
 function sources(codes,open){return '<details class="sources"'+(open?' open':'')+'><summary>Direct source material · '+codes.map(function(c){return esc(L.srcLabel(c));}).join(' · ')+'</summary>'+codes.map(function(c,i){return source(c,open&&i===0);}).join('')+'</details>';}
 function begin(kind,title,ids,writing){var r=X.start(kind,title,ids,writing);go('run/'+r.id);}
 function conceptPractice(t,c,st){
  var available=X.pool(t.id).filter(function(i){return i.c===c;}).length,n=Math.min(8,available);
  return '<div class="history-row"><p class="small"><a href="#exam2/topic/'+t.id+'/'+c+'">'+esc(D.conceptNames[c])+'</a>'+ (X.state().read[c]?' · <span class="badge">Studied (restored)</span>':'')+' · '+esc(st[c].status)+' · '+st[c].att+' checks · '+available+' questions available</p>'+button('Practice '+n+' questions','data-concept="'+c+'" aria-label="Practice '+n+' questions: '+esc(D.conceptNames[c])+'" '+(!n?'disabled':''))+'</div>';
 }
 function bindPractice(){
  main.querySelectorAll('[data-concept]').forEach(function(b){b.onclick=function(){var c=b.dataset.concept,t=D.topics.find(function(t){return t.concepts.indexOf(c)>=0;});begin('topic',D.conceptNames[c]+' · mastery practice',X.select(t.id,8,false,[c]));};});
  main.querySelectorAll('[data-practice]').forEach(function(b){b.onclick=function(){var t=topic(b.dataset.practice);begin('topic',t.title+' · topic practice',X.select(t.id,12));};});
  main.querySelectorAll('[data-figures]').forEach(function(b){b.onclick=function(){var t=topic(b.dataset.figures);begin('figures',t.title+' · figure practice',X.select(t.id,20,true));};});
 }
 function metrics(){
  var st=E.conceptStats(),cs=Object.keys(D.conceptNames),att=S.load().attempts.filter(function(a){return cs.indexOf(a.c)>=0;});
  return '<div class="metric-grid"><div class="metric"><strong>'+cs.filter(function(c){return st[c].status==='mastered';}).length+'/'+cs.length+'</strong>concepts mastered</div><div class="metric"><strong>'+att.filter(function(a){return !a.self;}).length+'</strong>automatic checks saved</div><div class="metric"><strong>'+att.filter(function(a){return a.self;}).length+'</strong>rubric self-checks</div><div class="metric"><strong>'+X.state().runs.length+'</strong>saved runs</div></div>';
 }
 function cards(){
  var st=E.conceptStats();
  return '<div class="topic-grid">'+D.topics.map(function(t){
   var r=X.summary(t.id),fig=X.pool(t.id,true).length;
   return '<article class="topic-card card"><span class="eyebrow">'+esc(t.part)+' · '+(D.topics.indexOf(t)+1)+'/'+D.topics.length+'</span><h2><a href="#exam2/topic/'+t.id+'">'+esc(t.title)+'</a></h2>'+
    '<span class="small">'+r.mastered+'/'+r.total+' mastered · '+r.checks+' checks · '+r.firsts+' first responses</span><progress max="'+r.total+'" value="'+r.mastered+'" aria-label="'+esc(t.title)+' mastery"></progress>'+
    '<div class="controls">'+link('Learn', 'topic/'+t.id).replace('class="btn"','class="btn primary"')+button('Practice topic','data-practice="'+t.id+'"')+(fig?button('Practice figure','data-figures="'+t.id+'"'):'')+'</div>'+
    mastery(t)+'</article>';
  }).join('')+'</div>';
 }
 function overview(){
  base('','Exam 2 · Aural Rehabilitation','Cochlear implants, listening development, speech acoustics, and auditory training. Learn the concepts, check your reasoning, and keep your first answers.');
  var active=X.get(X.state().activeId);
  el('e2body').innerHTML='<div class="callout"><b>Exam 2 · Lectures 4–7</b><br>The supplied review notes report 65 questions, 65 points and no short answers. Open Exam focus & mocks for two fixed forms and targeted coverage. APD is excluded from Exam 2.</div>'+
   (active&&!X.score(active).complete?'<div class="card"><b>Saved work:</b> '+esc(active.title)+' '+link('Resume','run/'+active.id)+'</div>':'')+
   metrics()+'<p class="legend"><span class="e2-term">Magenta: key terms</span> · <span class="e2-emphasis">Gold: documented lecture emphasis</span> · Blue: headings and navigation. Reading and listening do not award mastery.</p>'+cards();bindPractice();
 }
 function guide(){
  base('guide','Exam 2 guide','Full explanations and source figures, organized by the supplied lectures.');
  el('e2body').innerHTML='<div class="card">'+D.topics.map(function(t){return '<h2>'+link(esc(t.title),'topic/'+t.id)+'</h2><ul>'+t.sections.map(function(s,i){return '<li><a href="#exam2/topic/'+t.id+'/section-'+i+'">'+esc(s.title)+'</a></li>';}).join('')+'</ul>';}).join('')+'</div>';
 }
 function media(t){
  var a=(L.EXAM2_AUDIO||{})[t.id];
  if(!a)return '<div class="card player"><h2>Narrated explanation</h2><p>No narration is available for this chapter yet. Use the written lesson and source slides.</p></div>';
  return ((L.EXAM2_FILMS||{})[t.id]?'<details class="card"><summary>Audio-only alternative</summary>':'')+'<section class="card player"><h2>Listen to the explanation</h2><p class="caption">Synthetic Ethan-voice teaching audio · '+esc(a.durationLabel)+' · on-demand playback. '+esc(a.reviewLabel)+'</p><audio id="lessonAudio" controls preload="none" src="'+esc(a.src)+'"></audio>'+
   '<label>Playback speed <select id="audioSpeed"><option value=".75">0.75×</option><option value="1" selected>1×</option><option value="1.25">1.25×</option><option value="1.5">1.5×</option></select></label> <a href="'+esc(a.src)+'" download>Save audio</a>'+
   '<details><summary>Read the narration transcript</summary><p class="transcript">'+esc(a.text)+'</p></details></section>'+((L.EXAM2_FILMS||{})[t.id]?'</details>':'');
 }
 function film(t){
  var f=(L.EXAM2_FILMS||{})[t.id];if(!f)return '';
  var path=f.basePath||('assets/exam2/films/'+t.id),v=f.version||'20261026',codes=f.sources||[f.source];
  var tracks=f.burnedCaptions?'':'<track kind="captions" src="'+path+'.vtt?v='+v+'" srclang="en" label="English" default>';
  return '<section class="card player"><h2>Watch the concept unfold</h2><p>'+esc(f.title)+'</p><p class="caption">Original instructional diagrams · synthetic Ethan voice. '+esc(f.reviewLabel||'Listening review pending.')+'</p><p class="film-mobile-hint">For diagram detail, use full screen and turn your phone sideways.</p><video id="lessonFilm" controls playsinline preload="metadata" style="width:100%;height:auto;aspect-ratio:16/9" poster="'+path+'.jpg?v='+v+'"><source src="'+path+'.mp4?v='+v+'" type="video/mp4">'+tracks+'</video><div class="controls" aria-label="Film chapters">'+f.chapters.map(function(c){return '<button class="btn" type="button" data-film-seek="'+c[0]+'">'+esc(c[1])+'</button>';}).join('')+'</div><label>Film speed <select id="filmSpeed"><option value=".75">0.75×</option><option value="1" selected>1×</option><option value="1.25">1.25×</option><option value="1.5">1.5×</option></select></label> · <a href="'+path+'.mp4?v='+v+'" download>Save video</a> · <a href="'+path+'.vtt?v='+v+'" download>Save captions</a><details><summary>Read the film transcript</summary><p class="transcript">'+esc(f.text)+'</p></details><details><summary>Visual sources and diagram notes</summary><p>'+esc(f.visualNote||'Original course-based teaching diagrams. Illustrative examples are not patient measurements or published test items.')+'</p>'+((f.references||[]).map(function(r){return '<p><a href="'+esc(r.url)+'" target="_blank" rel="noopener noreferrer">'+esc(r.label)+'</a></p>';}).join(''))+'</details><p class="caption">'+(f.burnedCaptions?'Captions are included in the video. ':'')+'Watching does not award mastery.</p>'+sources(codes)+'</section>';
 }

 function readingPoints(points,nested,ordered){
  var tag=ordered?'ol':'ul';
  return '<'+tag+' class="'+(nested?'note-subpoints':'note-points')+'">'+points.map(function(point){
   var structured=typeof point==='object';
   return '<li>'+(structured?point.text:point)+(structured&&point.children?readingPoints(point.children,true,point.ordered):'')+'</li>';
  }).join('')+'</'+tag+'>';
 }
 function learn(id,target){
  var t=topic(id);if(!t)return overview();
  base('guide',esc(t.title),esc(t.summary));
  el('e2body').innerHTML='<div class="navline">'+link('← All topics','')+'<div>'+button('Practice topic','data-practice="'+t.id+'"')+(X.pool(t.id,true).length?button('Practice figure','data-figures="'+t.id+'"'):'')+'</div></div>'+
   mastery(t)+'<nav class="lesson-tools" aria-label="This mini-chapter"><a href="#exam2/topic/'+id+'/lesson-notes">Read the notes</a><a href="#exam2/topic/'+id+'/lesson-media">Watch / listen</a><a href="#exam2/topic/'+id+'/lesson-figures">Source figures</a><a href="#exam2/topic/'+id+'/study-notes">My notes</a></nav>'+readingKey()+
   '<article class="card lesson-reading" id="lesson-notes" aria-label="Mini-chapter notes"><h2>'+esc(t.title)+'</h2>'+t.sections.map(function(s,i){return '<section class="note-group" id="section-'+i+'"><h3 class="note-heading">'+esc(s.outlineTitle||s.title)+'</h3>'+readingPoints(s.outline||s.points)+sources(s.outlineSources||s.sources)+'</section>';}).join('')+'</article>'+
   '<section id="lesson-media" aria-label="Narrated explanation">'+film(t)+media(t)+'</section><div id="lesson-figures"></div>'+
   (t.figures.length?'<h2>Source figures and reference pages</h2><p class="caption">Open any figure to enlarge it. Source geometry and labels are preserved.</p><div class="figure-grid">'+t.figures.map(function(f){var path='assets/exam2/figures/'+f.id+'.jpg';return '<figure><a href="'+path+'" target="_blank" rel="noopener"><img src="'+path+'" alt="'+esc(f.label)+'" loading="lazy"></a><figcaption><b>'+esc(f.label)+'</b><p>'+esc(f.notice)+'</p>'+sources([f.source])+'</figcaption></figure>';}).join('')+'</div>':'')+
   '<div class="card" id="study-notes"><h2>Your study notes</h2><label for="studyNote">Saved notes for this topic</label><textarea id="studyNote" placeholder="Add a question, example, or clarification…"></textarea><p id="noteStatus" class="caption">Notes stay in this browser and are included in Data exports.</p>'+button(X.state().read[t.id]?'Marked studied':'Mark this topic studied','id="markRead"')+'<p class="caption">Studied status is separate from checked mastery.</p></div>'+adjacent(t);
  var note=X.state().notes[t.id];el('studyNote').value=note?note.text:'';
  if(note&&note.alternates&&note.alternates.length){var versions=document.createElement('details');versions.innerHTML='<summary>Other imported note versions · '+note.alternates.length+'</summary>'+note.alternates.map(function(v){return '<p class="transcript">'+esc(v.text)+'</p>';}).join('');el('studyNote').parentNode.appendChild(versions);}
  el('studyNote').oninput=function(){X.state().notes[t.id]=Object.assign({},X.state().notes[t.id]||{},{text:this.value,updated:Date.now()});el('noteStatus').textContent=X.touch()?'Saved.':'Not saved: '+S.problem();};
  el('markRead').onclick=function(){X.state().read[t.id]=Date.now();X.touch();this.textContent='Marked studied';};
  if(el('audioSpeed'))el('audioSpeed').onchange=function(){el('lessonAudio').playbackRate=+this.value;};
  var video=el('lessonFilm');if(video){
   function placeCaptions(){
    var line=video.clientWidth<700?55:82;
    Array.from(video.textTracks).forEach(function(track){Array.from(track.cues||[]).forEach(function(cue){cue.snapToLines=false;cue.line=line;});});
   }
   var captionTrack=video.querySelector('track');if(captionTrack)captionTrack.addEventListener('load',placeCaptions);
   video.addEventListener('loadedmetadata',placeCaptions);
   if(window.ResizeObserver){filmResize=new ResizeObserver(placeCaptions);filmResize.observe(video);}
   placeCaptions();
   main.querySelectorAll('[data-film-seek]').forEach(function(b){b.onclick=function(){video.currentTime=+b.dataset.filmSeek;};});
   el('filmSpeed').onchange=function(){video.playbackRate=+this.value;};
   video.onplay=function(){var a=el('lessonAudio');if(a)a.pause();};
   el('lessonAudio').onplay=function(){video.pause();};
  }
  bindPractice();
  if(target){var n=(/^(section-|lesson-|study-notes$)/.test(target))?target:'section-'+Math.max(0,t.sections.findIndex(function(s){return (s.concepts||[]).indexOf(target.replace(/^e2-/,''))>=0;}));var node=el(n);if(node)node.scrollIntoView({block:'start'});}
 }
 function finalProgress(ids){
  var seen={};X.state().runs.forEach(function(r){r.tasks.forEach(function(t){if(t.checked&&!t.retry&&ids.indexOf(t.item.id)>=0)seen[t.item.id]=true;});});
  return Object.keys(seen).length;
 }
 function startFinal(form){
  var F=D.finalMocks,def=F.forms.find(function(f){return f.id===form;});if(!def)return;
  var r=X.start('final-mock','Exam 2 · '+def.label+' · 65 questions',def.items);
  r.formId=def.id;r.formVersion=def.version;X.touch(r);go('run/'+r.id);
 }
 function focusPoint(text,group){
  var terms={CI:['candidacy','receptive-vocabulary','microphone → processor → transmitter → receiver → array → auditory nerve → brain','external','internal','binaural','bilateral','bimodal','initial activation'],NF:['Auditory function','neuroplasticity','cross-modal reorganization','developmental synchrony','listening-age Day Zero','audition','receptive','expressive','domain is unlabeled'],SA:['audibility','intelligibility','intensity','frequency','duration','relative phonetic power','transitional cues','syntactic','semantic','situational','communication noise'],AT:['functional evidence','picture responses','Ling 10','Silence','detecting','identifying','detection → discrimination → identification → comprehension','analytic','synthetic','pragmatic','eclectic','Formal/informal','auditory skill, stimuli, activity type and difficulty'],VS:['lipreading','speechreading','speaker, signal/code, environment and speechreader','visemes/homophenes','0° azimuth','2–5 feet','ASL','MCE','Cued Speech']};
  var out=esc(text);(terms[group]||[]).forEach(function(term){out=out.replace(esc(term),'<span class="e2-term">'+esc(term)+'</span>');});return out;
 }
 function focus(){
  var F=D.finalMocks;if(!F)return practice();
  base('focus','Exam 2 focus & mocks','Five review sections, two fixed 65-question forms, and additional questions for the details that need separate practice.');
  var all=F.items.map(function(i){return i.id;}),checked=finalProgress(all);
  var saved=X.state().runs.filter(function(r){return r.kind==='final-mock'||r.kind==='focus-coverage';}).slice().reverse();
  el('e2body').innerHTML='<div class="navline">'+link('← Study · all mini-chapters','practice')+link('Saved runs','history')+'</div>'+
   '<section class="card final-format"><h2>65 questions · 65 points · no short answers</h2><p>Format reported in the supplied October 29 notes. Each practice answer is worth one point. The topic allocation and MC/T-F mix are study choices; the exact exam mix and duration were not supplied.</p><p>Immediate feedback follows each confidence-rated answer. Your first response stays scored; corrections are saved separately. There is no timer or added retry inside a fixed form.</p><p class="caption">APD is excluded from Exam 2 under the updated instructor scope.</p></section>'+
   '<div class="topic-grid final-forms">'+F.forms.map(function(f){var rows=f.items.map(function(id){return F.items.find(function(i){return i.id===id;});}),tf=rows.filter(function(i){return i.t==='tf';}).length;return '<section class="card"><span class="eyebrow">Fixed form · October 29</span><h2>'+esc(f.label)+'</h2><p>65 automatic questions · '+(65-tf)+' multiple choice + '+tf+' true/false. Three- and four-choice MC, with source figures where needed.</p><p class="caption">CI 13 · neurological/development 14 · acoustics 15 · auditory training 14 · visual communication 9</p>'+button('Start '+esc(f.label)+' · 65 questions','data-final-form="'+f.id+'"')+'</section>';}).join('')+'</div>'+
   (saved.length?'<details class="card"><summary>Resume or inspect a saved focus/mock run · '+saved.length+'</summary>'+saved.map(function(r){var sc=X.score(r);return '<p>'+link(esc(r.title)+' · '+sc.answered+'/'+sc.total+' checked','run/'+r.id)+'</p>';}).join('')+'</details>':'')+
   '<section class="card"><h2>Cover every verified review target</h2><p>'+all.length+' distinct questions across the two forms and supplemental checks. Each section below launches its complete fixed set, so smaller named targets are not lost in a random sample.</p><p><b>'+checked+'/'+all.length+' questions checked</b> · Checking is separate from answering correctly or earning mastery.</p><progress max="'+all.length+'" value="'+checked+'" aria-label="Focus questions checked"></progress>'+button('Start all '+all.length+' coverage questions','id="allFinalCoverage"')+'</section>'+
   '<div class="final-focus-sections">'+F.groups.map(function(g){var done=finalProgress(g.coverageItems);return '<section class="card final-focus-card" id="focus-'+g.id+'"><span class="eyebrow">'+g.count+' questions per mock · '+g.coverageItems.length+' in full section practice</span><h2>'+esc(g.title)+'</h2><ul>'+g.points.map(function(p){return '<li>'+focusPoint(p,g.id)+'</li>';}).join('')+'</ul><div class="focus-checkpoint"><b>Check your understanding</b><p>'+esc(({CI:'A candidacy number is meaningful only with its age group, test and listening condition. Trace the signal and explain each component’s role.',NF:'Use the named scale, age band and domain. Explain why detection, active listening and meaningful understanding are different.',SA:'Describe the axes and the relation shown. Explain why energy, audibility and intelligibility are not interchangeable.',AT:'Identify both the stimulus and the required response. Then distinguish the skill level, training approach, activity type and difficulty variable.',VS:'Name the factor that changed and explain how it affects usable visual information. Keep language, English coding and phonemic cueing distinct.'})[g.id])+'</p></div><p>'+done+'/'+g.coverageItems.length+' section questions checked</p><div class="controls">'+button('Practice full section · '+g.coverageItems.length,'data-final-coverage="'+g.id+'"')+'</div><details><summary>Learn these topics · notes, animations and ordinary practice</summary><div class="controls">'+g.topics.map(function(id){return link(esc(topic(id).title),'topic/'+id);}).join('')+'</div></details><details><summary>Directly tested review targets · '+g.slots.length+'</summary><ul>'+g.slots.map(function(id){var slot=F.slots.find(function(s){return s.id===id;});return '<li>'+esc(slot.label)+'</li>';}).join('')+'</ul></details>'+sources(g.sources)+'</section>';}).join('')+'</div>'+
   '<section class="card"><h2>Required figures and tables</h2><p>The eight named review figures/tables plus the manual-system comparison assigned in Lecture 7. Open an image to enlarge it; original page access is below each image.</p><div class="figure-grid">'+F.figures.map(function(f){return '<figure><a href="assets/exam2/figures/'+f.id+'.jpg" target="_blank" rel="noopener"><img src="assets/exam2/figures/'+f.id+'.jpg" alt="'+esc(f.label)+'" loading="lazy"></a><figcaption>'+esc(f.label)+sources([f.source])+'</figcaption></figure>';}).join('')+'</div></section>'+
   '<details class="card"><summary>Source qualifications and scope notes</summary><ul>'+F.conflicts.map(function(c){return '<li>'+esc(c)+'</li>';}).join('')+'</ul></details><details class="card"><summary>Earlier and optional practice</summary><p>Writing is optional enrichment and is not part of these Exam 2 simulations. Earlier partial runs retain their original questions and scoring.</p><div class="controls">'+link('Earlier partial practice set','partial')+link('Optional writing workshop','writing')+'</div></details>';
  main.querySelectorAll('[data-final-form]').forEach(function(b){b.onclick=function(){startFinal(b.dataset.finalForm);};});
  main.querySelectorAll('[data-final-coverage]').forEach(function(b){b.onclick=function(){var g=F.groups.find(function(x){return x.id===b.dataset.finalCoverage;});begin('focus-coverage','Exam 2 focus · '+g.title,g.coverageItems);};});
  el('allFinalCoverage').onclick=function(){begin('focus-coverage','Exam 2 · complete verified review coverage',all);};
 }
 function practice(){
  base('practice','Practice the supplied material','Every mastery concept has at least eight practice questions. Expand a topic’s mastery details to choose a concept, or mix Lectures 4–7.');
  el('e2body').innerHTML='<div class="card"><h2>Mixed practice</h2><p>20 questions from Lectures 4–7. Misses return after two intervening activities; low-confidence correct answers return after four. First answers remain saved.</p>'+button('Start mixed practice','id="mixed"')+'</div>'+cards();
  el('mixed').onclick=function(){begin('mixed','Lectures 4–7 · mixed practice',X.select(null,20));};bindPractice();
 }
 function writing(){
  base('writing','Short-answer workshop','Practice the requested count of distinct points. Rubrics are authored study aids, and you explicitly assess your own draft.');
  el('e2body').innerHTML=D.written.map(function(w){return '<div class="card"><h2>'+esc(topic(w.topic).title)+'</h2><p>'+esc(w.q)+'</p><span class="caption">'+w.rubric.length+' practice rubric components · original draft retained</span><p>'+button('Write an answer','data-write="'+w.id+'"')+'</p></div>';}).join('');
  main.querySelectorAll('[data-write]').forEach(function(b){b.onclick=function(){begin('writing','Written practice',[],[D.written.find(function(w){return w.id===b.dataset.write;})]);};});
 }
 function cases(){
  base('cases','Apply the material to a case','Each case connects a small set of decisions to the same concept history and mastery record.');
  el('e2body').innerHTML=D.cases.map(function(c){return '<div class="card"><h2>'+esc(c.title)+'</h2><p>'+esc(c.text)+'</p>'+button('Start case · '+c.items.length+' questions','data-case="'+c.id+'"')+'</div>';}).join('');
  main.querySelectorAll('[data-case]').forEach(function(b){b.onclick=function(){var c=D.cases.find(function(c){return c.id===b.dataset.case;});begin('case',c.title,c.items);};});
 }
 function challenge(view){
  var boss=view==='boss';base(view,boss?'Exam 2 Boss challenge':'Partial Exam 2 practice set',boss?'A 24-question challenge across the supplied material. Only a fully answered run qualifies for a best score.':'A learning mock for Lectures 4–6. Its structure is a practice choice, not the announced Exam 2 format.');
  var complete=X.state().runs.filter(function(r){return r.kind==='boss'&&r.ended&&X.score(r).complete;}),best=complete.reduce(function(n,r){var s=X.score(r);return Math.max(n,s.auto/s.autoN);},0);
  el('e2body').innerHTML='<div class="callout"><b>Coverage remains partial.</b> '+esc(D.missing.join(' · '))+'.</div><div class="card"><h2>'+(boss?'24 automatic questions':'30 automatic questions + your choice of two written prompts')+'</h2><p>'+(boss?'Your first responses determine the run score. An early ending remains incomplete.':'Immediate feedback follows each confidence-rated answer. Written rubric scores are shown separately. This does not reproduce unknown exam weights.')+'</p>'+
   (boss?'<p>Best completed Boss: '+(complete.length?Math.round(best*100)+'%':'none yet')+'</p>':(D.practiceWriting||[]).map(function(id){return D.written.find(function(w){return w.id===id;});}).filter(Boolean).map(function(w){return '<p><label><input type="checkbox" name="mockWrite" value="'+w.id+'"> '+esc(w.q)+'</label></p>';}).join(''))+
   button(boss?'Start Boss':'Start partial practice set','id="challengeStart"')+'<p id="challengeMsg" role="status"></p></div><div class="empty">New 65-question forms and the current format notes are available in <a href="#exam2/focus">Exam focus & mocks</a>. This earlier partial set is retained for continuity.</div>';
  el('challengeStart').onclick=function(){
   var ws=[];if(!boss){ws=Array.from(main.querySelectorAll('[name=mockWrite]:checked')).map(function(b){return D.written.find(function(w){return w.id===b.value;});});if(ws.length!==2){el('challengeMsg').textContent='Choose exactly two written prompts.';return;}}
   begin(boss?'boss':'partial',boss?'Lectures 4–7 · Boss':'Lectures 4–6 · partial practice set',X.select(null,boss?24:30,false,boss?null:D.topics.filter(function(t){return !t.part.startsWith('Lecture 7');}).flatMap(function(t){return t.concepts;})),ws);
  };
 }
 function review(){
  base('review','Review and repair','Misses and low-confidence work stay visible even after mastery is earned. New practice preserves the original response.');
  var rows=X.review(),missedWriting=X.state().runs.flatMap(function(r){return r.tasks.filter(function(t){return t.kind==='written'&&t.checked&&!t.grade.ok;}).map(function(t){return {r:r,t:t};});});
  el('e2body').innerHTML=(rows.length?'<div class="card">'+button('Start targeted review','id="startReview"')+rows.map(function(p){var t=D.topics.find(function(t){return t.concepts.indexOf(p.c)>=0;});return '<p><a href="#exam2/topic/'+t.id+'/'+p.c+'">'+esc(D.conceptNames[p.c])+'</a> · '+esc(p.why)+' · earned status: '+esc(p.s.status)+'</p>';}).join('')+'</div>':'<p class="empty">No automatic review due yet. Start topic practice to establish your baseline.</p>')+
   (missedWriting.length?'<div class="card"><h2>Written responses to revisit</h2>'+missedWriting.map(function(x){return '<p><a href="#exam2/run/'+x.r.id+'/'+x.r.tasks.indexOf(x.t)+'">'+esc(x.t.item.q)+'</a></p>';}).join('')+'</div>':'');
  if(el('startReview'))el('startReview').onclick=function(){begin('review','Exam 2 · targeted review',X.select(null,15,false,rows.map(function(p){return p.c;})));};
 }
 function history(){
  base('history','Saved runs and first responses','Resume drafts or inspect the exact saved question version. Later corrections do not overwrite first answers.');
  var runs=X.state().runs.slice().reverse();
  el('e2body').innerHTML=runs.length?runs.map(function(r){var s=X.score(r);return '<div class="card"><h2>'+esc(r.title)+'</h2><p>'+s.answered+'/'+s.total+' first tasks checked · '+s.auto+'/'+s.autoN+' automatic · '+s.self+'/'+s.selfN+' self-rated rubric points</p><p class="caption">'+new Date(r.started).toLocaleString()+' · '+(r.ended&&s.complete?'Completed':'Incomplete / resumable')+'</p>'+link('Open saved run','run/'+r.id)+(r.ended?link('Result','result/'+r.id):'')+'</div>';}).join(''):'<p class="empty">Your completed and unfinished runs will appear here.</p>';
 }
 function progress(){
  base('progress','Exam 2 progress','One course history powers mastery across topic practice, cases, Boss, learning mocks, and explicit written self-checks.');
  el('e2body').innerHTML=metrics()+'<div class="card"><p>Mastery requires independent unhinted roots, with medium/high confidence on the qualifying later response. Repeating one root does not create new independent evidence. Earned mastery is retained after a later miss, and the miss remains available for review.</p><p>Rubric results are self-assessed, not automatic grading. Reading, listening, and a “studied” mark do not award mastery.</p><a class="btn" href="#data">Export or merge course progress</a></div>'+cards();bindPractice();
 }
 function sourceIndex(){
  base('sources','Sources, scope, and unresolved details','Current-course materials control the lessons. Historical exam evidence shapes the style of original practice; it does not predict Exam 2 weights.');
  el('e2body').innerHTML='<div class="callout"><b>Scope decision:</b> October 6 directs CI study to Sutherland’s lecture. The supplied Lectures 4–6 now include the October 22 auditory-training deck and discussion. Lecture 7 visual stimuli are included; APD is excluded from Exam 2.</div><div class="card"><h2>Source conflicts retained</h2><ul class="note-points">'+D.conflicts.map(function(c){return '<li>'+esc(c)+'</li>';}).join('')+'</ul></div><div class="card"><h2>Original source files</h2><p><a href="assets/exam2/source-packet.zip" download>Download the original October 20 packet (ZIP)</a></p><p>Lecture 6 originals and its goal/FAPI references are linked individually below. The filled deck includes student/assisted fills; it is not an official answer key. Source drawers preserve the matching slides and transcript passages.</p>'+Object.keys(D.sources).map(function(k){var s=D.sources[k];return '<p><a href="'+esc(s.f)+'" target="_blank" rel="noopener">'+esc(s.t)+'</a></p>';}).join('')+'</div><div class="card"><h2>Practice design</h2><p>'+D.items.length+' original automatic questions, mixed three/four-choice MC and T/F, '+D.cases.length+' cases, and '+D.written.length+' written rubrics. The supplied October 29 notes report 65 questions, 65 points and no short answers. The two fixed forms use one point per item as a practice convention; APD is excluded from Exam 2. <a href="#exam2/focus">Open Exam focus & mocks</a>.</p><p class="caption">Authoring evidence: COMD4590-EXAM1-RECALL-20260929; cutoff September 29, 2026, with Lectures 4–7 and the October 29 review specification. Student recall establishes observed style, not an official answer key.</p></div>';
 }
 function renderWriting(r,t,index){
  var h='<div class="card"><p class="prompt">'+esc(t.item.q)+'</p><label for="writtenDraft">Your original answer</label><textarea id="writtenDraft" '+(t.revealed?'readonly':'')+'></textarea>';
  if(!t.revealed)h+='<p><label>Confidence before revealing <select id="writtenConf"><option value="">Choose…</option><option value="l">Low</option><option value="m">Medium</option><option value="h">High</option></select></label></p>'+button('Save draft and reveal rubric','id="revealWriting"')+'<p id="writingMsg" role="status"></p>';
  else{
   h+='<div class="callout"><b>Model answer</b><p>'+esc(t.item.model)+'</p><p class="caption">Practice rubric: one point per component. Equivalent accurate wording is acceptable. Duplicates do not add points; contradictions invalidate the affected component.</p></div>';
   h+=t.item.rubric.map(function(p,i){return '<div class="rubric-row"><label for="rating'+i+'">'+(i+1)+'. '+esc(p)+'</label><br><select id="rating'+i+'" '+(t.checked?'disabled':'')+'><option value="">Assess this component…</option><option value="1">Met in my original draft</option><option value="0">Missing or incorrect</option></select></div>';}).join('');
   h+=t.checked?'<p class="'+(t.grade.ok?'good':'bad')+'">Saved self-assessment: '+t.ratings.reduce(function(a,b){return a+b;},0)+'/'+t.ratings.length+' components met.</p>':button('Save rubric self-assessment','id="saveRubric"')+'<p id="writingMsg" role="status"></p>';
  }
  h+='</div>';el('questionHost').innerHTML=h;el('writtenDraft').value=t.response||'';
  if(!t.revealed){
   el('writtenConf').value=t.confidence||'';el('writtenConf').onchange=function(){t.confidence=this.value;X.touch(r);};
   el('writtenDraft').oninput=function(){X.draft(r,index,this.value);};
   el('revealWriting').onclick=function(){if(!t.confidence||!X.reveal(r,index)){el('writingMsg').textContent='Write your answer and choose confidence first.';return;}run(r.id);};
  }else{
   t.ratings.forEach(function(v,i){el('rating'+i).value=v===null?'':String(v);if(!t.checked)el('rating'+i).onchange=function(){t.ratings[i]=this.value===''?null:+this.value;X.touch(r);};});
   if(el('saveRubric'))el('saveRubric').onclick=function(){if(!X.rate(r,index,t.ratings,t.confidence)){el('writingMsg').textContent='Assess every component before saving.';return;}run(r.id);};
  }
 }
 function run(id,position){
  var r=X.get(id);if(!r)return history();if(position!==undefined&&Number.isInteger(+position)&&+position>=0&&+position<r.tasks.length)r.cur=+position;
  var index=Math.min(r.cur,r.tasks.length-1),t=r.tasks[index];r.cur=index;
  base('',esc(r.title),'Original responses and question snapshots are saved. You can leave and resume this run.');
  var cs=D.cases.find(function(c){return c.id===t.item.scenario;});
  el('e2body').innerHTML='<div class="run-card"><div class="navline"><b>Activity '+(index+1)+' of '+r.tasks.length+(t.retry?' · spaced follow-up':'')+'</b>'+button(t.flag?'Flagged':'Flag for review','id="flagTask"')+'</div><progress max="'+r.tasks.length+'" value="'+r.tasks.filter(function(t){return t.checked;}).length+'" aria-label="Checked activities"></progress>'+
   (cs?'<div class="callout"><b>'+esc(cs.title)+'</b><p>'+esc(cs.text)+'</p></div>':'')+(t.item.figure?'<p><a class="btn" href="assets/exam2/figures/'+esc(t.item.figure)+'.jpg" target="_blank" rel="noopener">Enlarge source figure</a></p>':'')+'<div id="questionHost"></div><div id="afterCheck"></div>'+
   '<div class="navline">'+button('← Previous','id="previousTask" '+(index===0?'disabled':''))+button(index===r.tasks.length-1?'Finish and view result':t.checked?'Next →':'Skip for now →','id="nextTask"')+button('Save and view result','id="endRun"')+'</div>'+
   '<details><summary>Jump to an activity</summary><div class="controls">'+r.tasks.map(function(q,i){return button((i+1)+(q.checked?' ✓':'')+(q.flag?' ⚑':''),'data-jump="'+i+'"');}).join('')+'</div></details></div>';
  if(t.kind==='written')renderWriting(r,t,index);
  else I.render(el('questionHost'),t.item,{mode:'practice',order:t.order,response:t.response,locked:t.checked,graded:t.grade,noHint:true,
   onChange:function(v){X.draft(r,index,v);},onSubmit:function(v,conf){if(X.answer(r,index,v,conf))run(r.id);}});
  if(t.checked){
   if(t.item.mockOnly&&t.item.x)main.querySelectorAll('#questionHost .opt.wrong .tx').forEach(function(node){node.insertAdjacentHTML('beforeend','<span class="why"><b>Why this choice is incorrect:</b> '+esc(t.item.x)+'</span>');});
   var tp=topic(t.item.topic)||D.topics.find(function(x){return x.concepts.indexOf(t.item.c)>=0;});
   el('afterCheck').innerHTML='<div class="card">'+link('Study this section','topic/'+tp.id+'/'+t.item.c)+sources(t.item.s,true)+'<label for="correction">Later correction or reasoning note (original answer stays unchanged)</label><textarea id="correction"></textarea><p class="caption" id="correctionStatus">Corrections are saved separately.</p></div>';
   el('correction').value=t.correction||'';el('correction').oninput=function(){t.correction=this.value;t.correctionAt=Date.now();el('correctionStatus').textContent=X.touch(r)?'Correction saved.':'Not saved: '+S.problem();};
  }
  el('flagTask').onclick=function(){t.flag=!t.flag;X.touch(r);this.textContent=t.flag?'Flagged':'Flag for review';};
  el('previousTask').onclick=function(){r.cur--;X.touch(r);run(r.id);};
  el('nextTask').onclick=function(){if(index===r.tasks.length-1){X.finish(r);go('result/'+r.id);}else{r.cur++;X.touch(r);run(r.id);}};
  el('endRun').onclick=function(){X.finish(r);go('result/'+r.id);};
  main.querySelectorAll('[data-jump]').forEach(function(b){b.onclick=function(){r.cur=+b.dataset.jump;X.touch(r);run(r.id);};});X.touch(r);
 }
 function result(id){
  var r=X.get(id);if(!r)return history();var s=X.score(r);base('history',s.complete?'Run complete':'Saved · run incomplete',esc(r.title));
  el('e2body').innerHTML='<div class="metric-grid"><div class="metric"><strong>'+s.auto+'/'+s.autoN+'</strong>automatic first answers</div>'+(s.selfN?'<div class="metric"><strong>'+s.self+'/'+s.selfN+'</strong>self-rated rubric points</div>':'')+'<div class="metric"><strong>'+s.answered+'/'+s.total+'</strong>original tasks checked</div><div class="metric"><strong>'+r.tasks.filter(function(t){return t.retry&&t.checked;}).length+'</strong>follow-up checks</div></div>'+
   '<div class="card">'+(!s.complete?'<p>Unanswered tasks remain in the denominator.'+(r.kind==='boss'?' An incomplete Boss cannot set a best score.':'')+'</p>':'')+link(s.complete?'Inspect answers':'Resume saved run','run/'+r.id)+link('Review concepts','review')+'</div>'+
   (r.kind==='final-mock'?'<section class="card"><h2>First answers by review section</h2><table><thead><tr><th>Section</th><th>Correct</th><th>Checked</th></tr></thead><tbody>'+D.finalMocks.groups.map(function(g){var ts=r.tasks.filter(function(t){return t.item.blueprintSlot&&t.item.blueprintSlot.indexOf(g.id)===0;});return '<tr><td>'+esc(g.title)+'</td><td>'+ts.filter(function(t){return t.checked&&t.grade.ok;}).length+'/'+ts.length+'</td><td>'+ts.filter(function(t){return t.checked;}).length+'/'+ts.length+'</td></tr>';}).join('')+'</tbody></table>'+link('Back to Exam focus & mocks','focus')+'</section>':'')+'<div class="card">'+r.tasks.map(function(t,i){return '<div class="history-row"><a href="#exam2/run/'+r.id+'/'+i+'">'+(i+1)+'. '+esc(t.item.q)+'</a><p class="'+(t.checked?(t.grade.ok?'good':'bad'):'muted')+'">'+(t.checked?(t.kind==='written'?'Rubric self-assessment: ':'Automatic check: ')+(t.grade.ok?'met / correct':'needs review'):'Not checked')+(t.retry?' · follow-up':'')+(t.flag?' · flagged':'')+'</p></div>';}).join('')+'</div>';
 }
 function render(host,args){
  main=host;args=args||[];var view=args[0]||'practice';
  var fn={'':overview,guide:guide,practice:practice,focus:focus,mocks:focus,writing:writing,cases:cases,boss:function(){challenge('boss');},partial:function(){challenge('partial');},review:review,history:history,progress:progress,sources:sourceIndex};
  if(view==='topic')learn(args[1],args[2]);else if(view==='run')run(args[1],args[2]);else if(view==='result')result(args[1]);else(fn[view]||overview)();
 }
 L.exam2UI={render:render};
})(typeof window!=='undefined'?window:globalThis);
