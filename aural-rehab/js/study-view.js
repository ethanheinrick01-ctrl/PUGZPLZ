/* Shared Exam 2 / Final Exam teaching views. Assessment records stay in their existing engines. */
(function(root){'use strict';
var L=root.L;
L.createStudyView=function(exam,D,X){
 var E=L.engine,S=L.store,esc=L.util.esc,main,filmResize,bodyId=exam==='exam3'?'e3body':'e2body';
 function go(route){location.hash='#'+exam+(route?'/'+route:'');}
 function el(id){return main.querySelector('#'+id);}
 function button(label,attrs){return '<button class="btn" '+(attrs||'')+'>'+label+'</button>';}
 function link(label,route){return '<a class="btn" href="#'+exam+'/'+route+'">'+label+'</a>';}
 function topic(id){return D.topics.find(function(t){return t.id===id;});}
 function base(view,title,lead){
  if(filmResize){filmResize.disconnect();filmResize=null;}
  var tabs=[['','Mini-chapters'],['guide','Guide'],['practice','Practice'],['writing','Writing'],['cases','Cases'],['boss','Boss'],['focus','Exam focus & mocks'],['partial','Earlier partial set'],['review','Review'],['history','My history'],['progress','Progress'],['sources','Sources']];
  main.classList.add('e2');if(exam==='exam3')main.classList.add('e3');
  var heading='<div class="eyebrow">COMD 4590 · Fall 2026 · Whitney Sutherland</div><h1>'+title+'</h1>'+(lead?'<p class="lead">'+lead+'</p>':'');
  var navigation='<nav class="subnav" aria-label="Exam 2">'+tabs.map(function(t){return '<a href="#'+exam+(t[0]?'/'+t[0]:'')+'"'+(view===t[0]?' aria-current="page"':'')+'>'+t[1]+'</a>';}).join('')+'<a href="#'+exam+'/data">Backup / restore</a></nav>';
  main.innerHTML=(exam==='exam3'?heading:(view==='guide'?navigation+heading:heading+navigation))+'<div id="'+bodyId+'"></div>';
 }
 function readingKey(reading){
  var hasEmphasis=/e2-emphasis/.test(JSON.stringify(reading));
  return '<aside class="e2-reading-key" aria-label="Reading color key"><span><strong class="e2-term">Magenta</strong> · terms and names</span>'+(hasEmphasis?'<span><mark class="e2-emphasis">Yellow highlight</mark> · lecture emphasis</span>':'')+'<span><strong class="e2-definition">Lime</strong> · definition, explanation or sequence</span><span><strong class="checkpoint-label">Peach + label</strong> · understanding checkpoint</span></aside>';
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
   '<details'+(open&&!p.image?' open':'')+'><summary>'+ (p.citationOnly?'Source note':'Source text'+(!p.image?' (automatic transcript)':''))+'</summary><div class="source-text">'+(/^#exam[23]\/(?:topic|focus|mocks)/.test(location.hash)?L.studyAnnotations.source(code,p.text):esc(p.text))+'</div></details>'+(p.note?'<p class="caption">'+esc(p.note)+'</p>':'')+'</details>';
 }
 function sources(codes,open){return '<details class="sources"'+(open?' open':'')+'><summary>Direct source material · '+codes.map(function(c){return esc(L.srcLabel(c));}).join(' · ')+'</summary>'+codes.map(function(c,i){return source(c,open&&i===0);}).join('')+'</details>';}
 function begin(kind,title,ids,writing,conceptScope){if(exam==='exam3'&&!conceptScope)conceptScope=Array.from(new Set(ids.map(function(id){return E.resolve(E.currentRef(id)).c;})));var r=X.start(kind,title,ids,writing,null,conceptScope);go('run/'+r.id);}
 function conceptPractice(t,c,st){
  var available=X.pool(t.id).filter(function(i){return i.c===c;}).length,n=Math.min(8,available);
  return '<div class="history-row"><p class="small"><a href="#'+exam+'/topic/'+t.id+'/'+c+'">'+esc(D.conceptNames[c])+'</a>'+ (X.state().read[c]?' · <span class="badge">Studied (restored)</span>':'')+' · '+esc(st[c].status)+' · '+st[c].att+' checks · '+available+' questions available</p>'+button('Practice '+n+' questions','data-concept="'+c+'" aria-label="Practice '+n+' questions: '+esc(D.conceptNames[c])+'" '+(!n?'disabled':''))+'</div>';
 }
 function bindPractice(){
  main.querySelectorAll('[data-concept]').forEach(function(b){b.onclick=function(){var c=b.dataset.concept,t=D.topics.find(function(t){return t.concepts.indexOf(c)>=0;});begin('topic',D.conceptNames[c]+' · mastery practice',X.select(t.id,8,false,[c]));};});
  main.querySelectorAll('[data-practice]').forEach(function(b){b.onclick=function(){var t=topic(b.dataset.practice);begin('topic',t.title+' · topic practice',X.select(t.id,12));};});
  main.querySelectorAll('[data-figures]').forEach(function(b){b.onclick=function(){var t=topic(b.dataset.figures);begin('figures',t.title+' · figure practice',X.select(t.id,20,true));};});
 }
 function cards(){
  var st=E.conceptStats();
  return '<div class="topic-grid">'+D.topics.map(function(t){
   var r=X.summary(t.id),fig=X.pool(t.id,true).length;
   return '<article class="topic-card card"><span class="eyebrow">'+esc(t.part)+' · '+(D.topics.indexOf(t)+1)+'/'+D.topics.length+'</span><h2><a href="#'+exam+'/topic/'+t.id+'">'+esc(t.title)+'</a></h2>'+
    '<span class="small">'+r.mastered+'/'+r.total+' mastered · '+r.checks+' checks · '+r.firsts+' first responses</span><progress max="'+r.total+'" value="'+r.mastered+'" aria-label="'+esc(t.title)+' mastery"></progress>'+
    '<div class="controls">'+link('Learn', 'topic/'+t.id).replace('class="btn"','class="btn primary"')+button('Practice topic','data-practice="'+t.id+'"')+(fig?button('Practice figure','data-figures="'+t.id+'"'):'')+'</div>'+
    mastery(t)+'</article>';
  }).join('')+'</div>';
 }
 function media(t){
  var a=(L[exam.toUpperCase()+'_AUDIO']||{})[t.id];
  if(!a&&exam==='exam3')return '';
  if(!a)return '<div class="card player"><h2>Narrated explanation</h2><p>No narration is available for this chapter yet. Use the written lesson and source slides.</p></div>';
  return ((L[exam.toUpperCase()+'_FILMS']||{})[t.id]?'<details class="card"><summary>Audio-only alternative</summary>':'')+'<section class="card player"><h2>Listen to the explanation</h2><p class="caption">Synthetic Ethan-voice teaching audio · '+esc(a.durationLabel)+' · on-demand playback. '+esc(a.reviewLabel)+'</p><audio id="lessonAudio" controls preload="none" src="'+esc(a.src)+'"></audio>'+
   '<label>Playback speed <select id="audioSpeed"><option value=".75">0.75×</option><option value="1" selected>1×</option><option value="1.25">1.25×</option><option value="1.5">1.5×</option></select></label> <a href="'+esc(a.src)+'" download>Save audio</a>'+
   '<details><summary>Read the narration transcript</summary><p class="transcript">'+L.studyAnnotations.source((exam==='exam3'?'media3:':'media:')+t.id,a.text)+'</p></details></section>'+((L[exam.toUpperCase()+'_FILMS']||{})[t.id]?'</details>':'');
 }
 function film(t){
  var f=(L[exam.toUpperCase()+'_FILMS']||{})[t.id];if(!f)return '';
  var path=f.path||f.basePath||('assets/'+exam+'/films/'+t.id),v=f.version||'20261026',codes=f.sources||(f.source?[f.source]:[]),query=f.path?'':'?v='+v;
  var tracks=f.burnedCaptions?'':'<track kind="captions" src="'+path+'.vtt'+query+'" srclang="en" label="English" default>';
  return '<section class="card player"><h2>Watch the concept unfold</h2><p>'+esc(f.title)+'</p><p class="caption">Original instructional diagrams · synthetic Ethan voice. '+esc(f.reviewLabel||'Listening review pending.')+'</p><p class="film-mobile-hint">For diagram detail, use full screen and turn your phone sideways.</p><video id="lessonFilm" controls playsinline preload="metadata" style="width:100%;height:auto;aspect-ratio:16/9" poster="'+path+'.jpg'+query+'"><source src="'+path+'.mp4'+query+'" type="video/mp4">'+tracks+'</video><div class="controls" aria-label="Film chapters">'+f.chapters.map(function(c){return '<button class="btn" type="button" data-film-seek="'+c[0]+'">'+esc(c[1])+'</button>';}).join('')+'</div><label>Film speed <select id="filmSpeed"><option value=".75">0.75×</option><option value="1" selected>1×</option><option value="1.25">1.25×</option><option value="1.5">1.5×</option></select></label> · <a href="'+path+'.mp4'+query+'" download>Save video</a> · <a href="'+path+'.vtt'+query+'" download>Save captions</a><details><summary>Read the film transcript</summary><p class="transcript">'+L.studyAnnotations.source((exam==='exam3'?'media3:':'media:')+t.id,f.text)+'</p></details><details><summary>Visual sources and diagram notes</summary><p>'+esc(f.visualNote||'Original course-based teaching diagrams. Illustrative examples are not patient measurements or published test items.')+'</p>'+((f.references||[]).map(function(r){return '<p><a href="'+esc(r.url)+'" target="_blank" rel="noopener noreferrer">'+esc(r.label)+'</a></p>';}).join(''))+'</details><p class="caption">'+(f.burnedCaptions?'Captions are included in the video. ':'')+'Watching does not award mastery.</p>'+(codes.length?sources(codes):'')+'</section>';
 }

 function learn(id,target){
  var t=topic(id);if(!t)return go('practice');
  base('guide',esc(t.title),esc(t.summary));
  var figures=t.figures||[];
  if(exam==='exam3'&&!figures.length)figures=Array.from(new Set(t.sections.flatMap(function(s){return s.sources;}))).filter(function(c){return D.sourcePages[c]?.image;}).map(function(c){var p=D.sourcePages[c];return {image:p.image,label:p.label,notice:p.note||'',source:c};});
  el(bodyId).innerHTML='<div class="navline">'+link('← All topics','')+'<div>'+button('Practice topic','data-practice="'+t.id+'"')+(X.pool(t.id,true).length?button('Practice figure','data-figures="'+t.id+'"'):'')+'</div></div>'+
   mastery(t)+'<nav class="lesson-tools" aria-label="This mini-chapter"><a href="#'+exam+'/topic/'+id+'/lesson-notes">Read the notes</a><a href="#'+exam+'/topic/'+id+'/lesson-media">Watch / listen</a><a href="#'+exam+'/topic/'+id+'/lesson-figures">Source figures</a><a href="#'+exam+'/topic/'+id+'/study-notes">My notes</a></nav>'+readingKey(t.sections.map(function(s){return s.outline||s.points;}))+
   '<article class="card lesson-reading" id="lesson-notes" aria-label="Mini-chapter notes"><h2>'+esc(t.title)+'</h2>'+t.sections.map(function(s,i){return '<section class="note-group" id="section-'+i+'"><h3 class="note-heading">'+esc(s.outlineTitle||s.title)+'</h3>'+L.studyAnnotations.points(s.outline||s.points)+sources(s.outlineSources||s.sources)+'</section>';}).join('')+'</article>'+
   '<section id="lesson-media" aria-label="Narrated explanation">'+film(t)+media(t)+'</section><div id="lesson-figures"></div>'+
   (figures.length?'<h2>Source figures and reference pages</h2><p class="caption">Open any figure to enlarge it. Source geometry and labels are preserved.</p><div class="figure-grid">'+figures.map(function(f){var path=f.image||'assets/'+exam+'/figures/'+f.id+'.jpg';return '<figure><a href="'+path+'" target="_blank" rel="noopener"><img src="'+path+'" alt="'+esc(f.label)+'" loading="lazy"></a><figcaption><b>'+esc(f.label)+'</b><p>'+esc(f.notice)+'</p>'+sources([f.source])+'</figcaption></figure>';}).join('')+'</div>':'')+
   '<div class="card" id="study-notes"><h2>Your study notes</h2><label for="studyNote">Saved notes for this topic</label><textarea id="studyNote" placeholder="Add a question, example, or clarification…"></textarea><p id="noteStatus" class="caption">Notes stay in this browser and are included in Data exports.</p>'+button(X.state().read[t.id]?'Marked studied':'Mark this topic studied','id="markRead"')+'<p class="caption">Studied status is separate from checked mastery.</p></div>'+adjacent(t);
  var note=X.state().notes[t.id];el('studyNote').value=note?note.text:'';
  if(note&&note.alternates&&note.alternates.length){var versions=document.createElement('details');versions.innerHTML='<summary>Other imported note versions · '+note.alternates.length+'</summary>'+note.alternates.map(function(v){return '<p class="transcript">'+esc(v.text)+'</p>';}).join('');el('studyNote').parentNode.appendChild(versions);}
  el('studyNote').oninput=function(){X.state().notes[t.id]=Object.assign({},X.state().notes[t.id]||{},{text:this.value,updated:Date.now()});el('noteStatus').textContent=X.touch()?'Saved.':'Not saved: '+S.problem();};
  el('markRead').onclick=function(){X.state().read[t.id]=Date.now();this.textContent=X.touch()?'Marked studied':'Not saved: '+S.problem();};
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
   if(el('lessonAudio'))el('lessonAudio').onplay=function(){video.pause();};
  }
  bindPractice();
  if(target){var n=(/^(section-|lesson-|study-notes$)/.test(target))?target:'section-'+Math.max(0,t.sections.findIndex(function(s){return (s.concepts||[]).indexOf(target.replace(/^e2-/,''))>=0;}));var node=el(n);if(node)node.scrollIntoView({block:'start'});}
 }
 return {mount:function(host){if(filmResize){filmResize.disconnect();filmResize=null;}main=host;},go:go,el:el,button:button,link:link,topic:topic,base:base,readingKey:readingKey,sources:sources,begin:begin,bindPractice:bindPractice,cards:cards,learn:learn};
};
})(typeof window!=='undefined'?window:globalThis);
