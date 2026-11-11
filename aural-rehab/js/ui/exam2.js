(function(root){
 'use strict';
 var L=root.L,D=L.EXAM2_DATA,X=L.exam2,E=L.engine,S=L.store,U=L.util,I=L.itemUI,esc=U.esc,main;
 var V=L.createStudyView('exam2',D,X),go=V.go,el=V.el,button=V.button,link=V.link,topic=V.topic,base=V.base,readingKey=V.readingKey,sources=V.sources,begin=V.begin,bindPractice=V.bindPractice,cards=V.cards,learn=V.learn;
 function metrics(){
  var st=E.conceptStats(),cs=Object.keys(D.conceptNames),att=S.load().attempts.filter(function(a){return cs.indexOf(a.c)>=0;});
  return '<div class="metric-grid"><div class="metric"><strong>'+cs.filter(function(c){return st[c].status==='mastered';}).length+'/'+cs.length+'</strong>concepts mastered</div><div class="metric"><strong>'+att.filter(function(a){return !a.self;}).length+'</strong>automatic checks saved</div><div class="metric"><strong>'+att.filter(function(a){return a.self;}).length+'</strong>rubric self-checks</div><div class="metric"><strong>'+X.state().runs.length+'</strong>saved runs</div></div>';
 }
 function overview(){
  base('','Exam 2 · Aural Rehabilitation','Cochlear implants, listening development, speech acoustics, and auditory training. Learn the concepts, check your reasoning, and keep your first answers.');
  var active=X.get(X.state().activeId);
  el('e2body').innerHTML='<div class="callout"><b>Exam 2 · Lectures 4–7</b><br>The supplied review notes report 65 questions, 65 points and no short answers. Open Exam focus & mocks for fixed forms A, B and C and targeted coverage. APD is excluded from Exam 2.</div>'+
   (active&&!X.score(active).complete?'<div class="card"><b>Saved work:</b> '+esc(active.title)+' '+link('Resume','run/'+active.id)+'</div>':'')+
   metrics()+readingKey(D.topics.map(function(t){return t.sections;}))+'<p class="caption">Reading and listening do not award mastery.</p>'+cards();bindPractice();
 }
 function guide(){
  base('guide','Exam 2 guide','Full explanations and source figures, organized by the supplied lectures.');
  el('e2body').innerHTML='<div class="card">'+D.topics.map(function(t){return '<h2>'+link(esc(t.title),'topic/'+t.id)+'</h2><ul>'+t.sections.map(function(s,i){return '<li><a href="#exam2/topic/'+t.id+'/section-'+i+'">'+esc(s.title)+'</a></li>';}).join('')+'</ul>';}).join('')+'</div>';
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
 function focusState(g,st,review){
  var cs=Array.from(new Set(g.topics.flatMap(function(id){return topic(id).concepts;})));
  var mastered=cs.filter(function(c){return st[c].status==='mastered';}).length;
  var needsReview=cs.some(function(c){return review.indexOf(c)>=0;});
  var checked=finalProgress(g.coverageItems),started=checked||cs.some(function(c){return st[c].att>0;});
  return {concepts:cs,mastered:mastered,checked:checked,review:needsReview,status:mastered===cs.length?'mastered':started?'progress':'new'};
 }
 function focusRecord(g,r,st){
  return '<div class="focus-record"><p><b>'+({mastered:'Mastered',progress:'In progress',new:'Not started'})[r.status]+'</b>'+(r.review?' · Review due':'')+'</p><progress max="'+r.concepts.length+'" value="'+r.mastered+'" aria-label="'+esc(g.title)+' concepts mastered"></progress><p>'+r.mastered+'/'+r.concepts.length+' concepts mastered · '+r.checked+'/'+g.coverageItems.length+' coverage questions checked</p><details><summary>Concept checklist</summary><label class="focus-choice"><input type="checkbox" data-focus-all="'+g.id+'"> Select all in this section</label><ul class="focus-choices">'+r.concepts.map(function(c){var t=D.topics.find(function(t){return t.concepts.indexOf(c)>=0;}),name=esc(D.conceptNames[c]),available=X.pool(t.id).some(function(i){return i.c===c;});return '<li><label class="focus-choice"><input type="checkbox" data-focus-concept="'+c+'" data-focus-section="'+g.id+'" '+(!available?'disabled':'')+'> '+name+'</label> · '+esc(st[c].status)+' · <a href="#exam2/topic/'+t.id+'/'+c+'" aria-label="Study '+name+'">Study</a></li>';}).join('')+'</ul></details></div>';
 }
 function focusSelection(){
  return '<section class="card focus-selection" aria-label="Practice selected concepts"><h2>Practice selected concepts</h2><p>Choose concepts in the checklists. On the Focus page, you can mix concepts from different sections.</p><div class="controls"><label>Questions per concept <select id="focusPerConcept"><option value="1">1</option><option value="2">2</option><option value="4">4</option><option value="8" selected>8</option></select></label><button class="btn primary" id="focusSelectedStart" disabled>Practice selected concepts</button><button class="btn" id="focusSelectedClear" disabled>Clear selection</button></div><p id="focusSelectedStatus" role="status">0 concepts selected</p><p class="caption">Misses and low-confidence answers may add follow-up questions from your selected concepts.</p></section>';
 }
 function bindFocus(){
  main.querySelectorAll('[data-focus-check]').forEach(function(b){b.onclick=function(){
   var g=D.finalMocks.groups.find(function(g){return g.id===b.dataset.focusCheck;}),st=E.conceptStats(),r=focusState(g,st,[]);
   var cs=r.concepts.filter(function(c){return st[c].status!=='mastered';});
   begin('topic',g.title+' · concept practice',X.select(null,8,false,cs.length?cs:r.concepts));
  };});
  main.querySelectorAll('[data-final-coverage]').forEach(function(b){b.onclick=function(){var g=D.finalMocks.groups.find(function(g){return g.id===b.dataset.finalCoverage;});begin('focus-coverage','Exam 2 focus · '+g.title,g.coverageItems);};});
  if(el('allFinalCoverage'))el('allFinalCoverage').onclick=function(){begin('focus-coverage','Exam 2 · complete verified review coverage',D.finalMocks.coverageItems);};
  if(el('focusSelectedStatus')){
   var boxes=Array.from(main.querySelectorAll('[data-focus-concept]')),groups=Array.from(main.querySelectorAll('[data-focus-all]')),pool=X.pool();
   function selected(){return boxes.filter(function(b){return b.checked;}).map(function(b){return b.dataset.focusConcept;});}
   function update(){
    var cs=selected(),n=+el('focusPerConcept').value,total=cs.reduce(function(sum,c){return sum+Math.min(n,pool.filter(function(i){return i.c===c;}).length);},0);
    el('focusSelectedStatus').textContent=cs.length+' concept'+(cs.length===1?'':'s')+' selected · '+total+' question'+(total===1?'':'s');
    el('focusSelectedStart').disabled=!total;el('focusSelectedClear').disabled=!cs.length;
    groups.forEach(function(b){var group=boxes.filter(function(x){return x.dataset.focusSection===b.dataset.focusAll&&!x.disabled;}),checked=group.filter(function(x){return x.checked;}).length;b.checked=!!group.length&&checked===group.length;b.indeterminate=checked>0&&checked<group.length;});
   }
   boxes.forEach(function(b){b.onchange=update;});
   groups.forEach(function(b){b.onchange=function(){boxes.forEach(function(x){if(x.dataset.focusSection===b.dataset.focusAll&&!x.disabled)x.checked=b.checked;});update();};});
   el('focusPerConcept').onchange=update;
   el('focusSelectedClear').onclick=function(){boxes.forEach(function(b){b.checked=false;});update();};
   el('focusSelectedStart').onclick=function(){var cs=selected(),n=+el('focusPerConcept').value,ids=U.shuffle(cs.flatMap(function(c){return X.select(null,n,false,[c]);}));if(ids.length)begin('topic','Exam 2 · selected concepts',ids,null,cs);};
   update();
  }
 }
 function focusReading(g){
  var F=D.finalMocks,done=finalProgress(g.coverageItems);
  return '<section class="focus-reading" id="focus-'+g.id+'"><span class="eyebrow">'+g.count+' questions per mock · '+g.coverageItems.length+' in full section practice</span><h2>'+esc(g.title)+'</h2><div class="focus-note-stack">'+g.noteSections.map(function(section){return '<section class="focus-note-group"><h2>'+esc(section.title)+'</h2>'+L.studyAnnotations.points(section.outline||section.points.map(function(p){return esc(p);}))+'</section>';}).join('')+'</div><div class="focus-recap"><b>Connect this section</b><p>'+esc(({CI:'A candidacy number is meaningful only with its age group, test and listening condition. Trace the signal and explain each component’s role.',NF:'Use the named scale, age band and domain. Explain why detection, active listening and meaningful understanding are different.',SA:'Describe the axes and the relation shown. Explain why energy, audibility and intelligibility are not interchangeable.',AT:'Identify both the stimulus and the required response. Then distinguish the skill level, training approach, activity type and difficulty variable.',VS:'Name the factor that changed and explain how it affects usable visual information. Keep language, English coding and phonemic cueing distinct.'})[g.id])+'</p></div><p>'+done+'/'+g.coverageItems.length+' section questions checked</p><div class="controls">'+button('Practice full section · '+g.coverageItems.length,'data-final-coverage="'+g.id+'"')+'</div><details><summary>Learn these topics · notes, animations and ordinary practice</summary><div class="controls">'+g.topics.map(function(id){return link(esc(topic(id).title),'topic/'+id);}).join('')+'</div></details><details><summary>Directly tested review targets · '+g.slots.length+'</summary><ul>'+g.slots.map(function(id){var slot=F.slots.find(function(s){return s.id===id;});return '<li>'+esc(slot.label)+'</li>';}).join('')+'</ul></details>'+sources(g.sources)+'</section>';
 }
 function focusFigures(){var F=D.finalMocks;return '<section class="card"><h2>Required figures and tables</h2><p>The eight named review figures/tables plus the manual-system comparison assigned in Lecture 7. Open an image to enlarge it; original page access is below each image.</p><div class="figure-grid">'+F.figures.map(function(f){return '<figure><a href="assets/exam2/figures/'+f.id+'.jpg" target="_blank" rel="noopener"><img src="assets/exam2/figures/'+f.id+'.jpg" alt="'+esc(f.label)+'" loading="lazy"></a><figcaption>'+esc(f.label)+sources([f.source])+'</figcaption></figure>';}).join('')+'</div></section>';}
 function focusQualifications(){var F=D.finalMocks;return '<details class="card"><summary>Source qualifications and scope notes</summary><ul>'+F.conflicts.map(function(c){return '<li>'+esc(c)+'</li>';}).join('')+'</ul></details><details class="card"><summary>Earlier and optional practice</summary><p>Writing is optional enrichment and is not part of these Exam 2 simulations. Earlier partial runs retain their original questions and scoring.</p><div class="controls">'+link('Earlier partial practice set','partial')+link('Optional writing workshop','writing')+'</div></details>';}
 function focus(id){
  var F=D.finalMocks;if(!F)return practice();
  var all=F.coverageItems,checked=finalProgress(all);
  var st=E.conceptStats(),review=X.review().map(function(r){return r.c;}),records=F.groups.map(function(g){return focusState(g,st,review);});
  var g=F.groups.find(function(g){return g.id===id;});
  if(g){
   var r=records[F.groups.indexOf(g)];base('focus',esc(g.title),'');
   el('e2body').innerHTML='<p class="focus-crumb"><a href="#exam2/focus">Exam focus</a> / '+esc(g.title)+'</p><section class="card focus-summary"><h2>This section’s mastery</h2>'+focusRecord(g,r,st)+'<div class="controls">'+button(r.mastered===r.concepts.length?'Practice concepts':'Check remaining concepts','data-focus-check="'+g.id+'"')+'</div><p class="caption">Up to eight questions using the existing concept practice. Reading and coverage checks are separate from mastery.</p></section>'+focusSelection()+readingKey(g.noteSections)+focusReading(g)+'<p>'+link('← All Focus sections','focus')+link('Mock exams · 65 questions','mocks')+'</p>';
   bindFocus();return;
  }
  var cs=Array.from(new Set(records.flatMap(function(r){return r.concepts;}))),mastered=cs.filter(function(c){return st[c].status==='mastered';}).length,sections=records.filter(function(r){return r.status==='mastered';}).length;
  var next=F.groups.find(function(g,i){return records[i].status!=='mastered';})||F.groups[0];
  var active=X.state().runs.slice().reverse().find(function(r){return (r.kind==='focus-coverage'||r.kind==='final-mock')&&!X.score(r).complete;});
  base('focus','Exam focus',F.groups.length+' focused sections · '+cs.length+' concepts · '+F.coverageItems.length+' coverage questions.');
  el('e2body').innerHTML='<section class="card focus-summary"><h2>Your Focus mastery</h2><div class="focus-metrics">'+[[sections,F.groups.length,'Sections mastered'],[mastered,cs.length,'Concepts mastered'],[finalProgress(F.coverageItems),F.coverageItems.length,'Coverage questions checked']].map(function(m){return '<div><b>'+m[0]+'/'+m[1]+'</b><span>'+m[2]+'</span><progress max="'+m[1]+'" value="'+m[0]+'" aria-label="'+m[2]+'"></progress></div>';}).join('')+'</div><div class="controls"><a class="btn primary" href="#exam2/'+(active?'run/'+active.id:'focus/'+next.id)+'">'+esc(active?'Resume: '+active.title:'Continue: '+next.title)+'</a><a class="btn" href="#exam2/data">Back up progress</a>'+link('Mock exams · 65 questions','mocks')+'</div><p class="caption">Saved in this browser · drafts and feedback resume after reopening.</p></section><div class="focus-filters"><label>Filter focus sections<input type="search" id="focusSearch" placeholder="Topic, concept or section"></label><label>Progress<select id="focusFilter"><option value="all">All focus sections</option><option value="new">Not started</option><option value="progress">In progress</option><option value="unmastered">Not mastered</option><option value="mastered">Mastered</option><option value="review">Needs review</option></select></label></div>'+focusSelection()+'<p id="focusCount" role="status">'+F.groups.length+' focus sections</p><div class="focus-index">'+F.groups.map(function(g,i){var r=records[i];return '<section class="card focus-index-card" data-focus-card="'+g.id+'"><span class="eyebrow">Section '+(i+1)+' · '+g.coverageItems.length+' coverage questions</span><h2><a href="#exam2/focus/'+g.id+'">'+esc(g.title)+'</a></h2>'+focusRecord(g,r,st)+'<div class="controls">'+link('Study this section','focus/'+g.id)+button(r.status==='mastered'?'Practice concepts':'Check remaining concepts','data-focus-check="'+g.id+'"')+'</div></section>';}).join('')+'</div><details class="card"><summary>How Focus progress works</summary><p>Concept mastery uses your existing course history and independent, unhinted answers. A section is mastered when every mapped concept is mastered. A later miss still appears in Review.</p><p>Coverage counts show which questions you have checked, whether right or wrong. Reading and checking every coverage question do not by themselves establish mastery. Concept checks start up to eight ordinary questions; the complete coverage sets stay available below.</p></details><details class="card"><summary>Complete coverage practice · '+F.coverageItems.length+' questions</summary>'+'<section class="card"><h2>Cover every verified review target</h2><p>'+all.length+' coverage questions. The mocks use separate questions on the same learning targets. Each section below launches its complete fixed set, so smaller named targets are not lost in a random sample.</p><p><b>'+checked+'/'+all.length+' questions checked</b> · Checking is separate from answering correctly or earning mastery.</p><progress max="'+all.length+'" value="'+checked+'" aria-label="Focus questions checked"></progress>'+button('Start all '+all.length+' coverage questions','id="allFinalCoverage"')+'</section>'+'</details><details class="card"><summary>Required figures and tables</summary>'+focusFigures()+'</details>'+focusQualifications();
  function filter(){var q=el('focusSearch').value.trim().toLowerCase(),mode=el('focusFilter').value,count=0;
   main.querySelectorAll('[data-focus-card]').forEach(function(card,i){var g=F.groups[i],r=records[i],text=[g.title].concat(g.noteSections.map(function(s){return s.title;}),r.concepts.map(function(c){return D.conceptNames[c];})).join(' ').toLowerCase();var show=text.indexOf(q)>=0&&(mode==='all'||mode===r.status||mode==='unmastered'&&r.status!=='mastered'||mode==='review'&&r.review);card.hidden=!show;if(show)count++;});
   el('focusCount').textContent=count+' focus section'+(count===1?'':'s')+(count?'':' · No sections match these filters.');
  }
  el('focusSearch').oninput=filter;el('focusFilter').onchange=filter;bindFocus();
 }
 function mocks(){
  var F=D.finalMocks;if(!F)return practice();
  base('mocks','Mock exams','Three fixed forms · 65 questions each.');
  var saved=X.state().runs.filter(function(r){return r.kind==='final-mock';}).slice().reverse();
  el('e2body').innerHTML='<p>'+link('← Exam focus','focus')+link('Saved runs','history')+'</p>'+'<section class="card final-format"><h2>65 questions · 65 points · no short answers</h2><p>Format reported in the supplied October 29 notes. Each practice answer is worth one point. The topic allocation and MC/T-F mix are study choices; the exact exam mix and duration were not supplied.</p><p>Immediate feedback follows each confidence-rated answer. Your first response stays scored; corrections are saved separately. There is no timer or added retry inside a fixed form.</p><p class="caption">APD is excluded from Exam 2 under the updated instructor scope.</p></section>'+'<div class="topic-grid final-forms">'+F.forms.map(function(f){var rows=f.items.map(function(id){return F.items.find(function(i){return i.id===id;});}),tf=rows.filter(function(i){return i.t==='tf';}).length;return '<section class="card"><span class="eyebrow">Fixed form</span><h2>'+esc(f.label)+'</h2><p>65 automatic questions · '+(65-tf)+' multiple choice + '+tf+' true/false. Three- and four-choice MC, with source figures where needed.</p><p class="caption">CI 13 · neurological/development 14 · acoustics 15 · auditory training 14 · visual communication 9</p>'+button('Start '+esc(f.label)+' · 65 questions','data-final-form="'+f.id+'"')+'</section>';}).join('')+'</div>'+(saved.length?'<details class="card"><summary>Resume or inspect a saved focus/mock run · '+saved.length+'</summary>'+saved.map(function(r){var sc=X.score(r);return '<p>'+link(esc(r.title)+' · '+sc.answered+'/'+sc.total+' checked','run/'+r.id)+'</p>';}).join('')+'</details>':'')+focusQualifications();
  main.querySelectorAll('[data-final-form]').forEach(function(b){b.onclick=function(){startFinal(b.dataset.finalForm);};});
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
  var missed=X.missed(),rows=X.review(),missedWriting=X.state().runs.flatMap(function(r){return r.tasks.filter(function(t){return t.kind==='written'&&t.checked&&!t.grade.ok;}).map(function(t){return {r:r,t:t};});});
  var missedCard='<section class="card final-focus-card"><h2>Review missed questions</h2><p>'+missed.length+' questions currently missed across your saved Exam 2 runs, including mocks and focus practice. Practice the exact saved questions with immediate feedback and sources.</p><p class="caption">Each question appears once. A later correct checked answer removes it from this list. Original scores and written corrections stay unchanged.</p>'+
   (missed.length?button('Practice all missed · '+missed.length,'id="startMissed"')+'<div class="controls">'+D.topics.map(function(t){var count=missed.filter(function(x){return x.item.topic===t.id;}).length;return count?button(esc(t.title)+' · '+count,'data-missed-topic="'+t.id+'"'):'';}).join('')+'</div><details><summary>Inspect missed questions</summary>'+missed.map(function(x){return '<p>'+link(esc(x.item.q),'run/'+x.runId+'/'+x.index)+'</p>';}).join('')+'</details>':'<p class="empty">No missed questions to revisit yet. Your checked incorrect answers will appear here.</p>')+'</section>';
  el('e2body').innerHTML=missedCard+(rows.length?'<div class="card">'+button('Start targeted review','id="startReview"')+rows.map(function(p){var t=D.topics.find(function(t){return t.concepts.indexOf(p.c)>=0;});return '<p><a href="#exam2/topic/'+t.id+'/'+p.c+'">'+esc(D.conceptNames[p.c])+'</a> · '+esc(p.why)+' · earned status: '+esc(p.s.status)+'</p>';}).join('')+'</div>':'<p class="empty">No automatic review due yet. Start topic practice to establish your baseline.</p>')+
   (missedWriting.length?'<div class="card"><h2>Written responses to revisit</h2>'+missedWriting.map(function(x){return '<p><a href="#exam2/run/'+x.r.id+'/'+x.r.tasks.indexOf(x.t)+'">'+esc(x.t.item.q)+'</a></p>';}).join('')+'</div>':'');
  function launchMissed(topicId){var r=X.startMissed(topicId);if(r)go('run/'+r.id);}
  if(el('startMissed'))el('startMissed').onclick=function(){launchMissed();};
  main.querySelectorAll('[data-missed-topic]').forEach(function(b){b.onclick=function(){launchMissed(b.dataset.missedTopic);};});
  if(el('startReview'))el('startReview').onclick=function(){begin('review','Exam 2 · targeted review',X.select(null,15,false,rows.map(function(p){return p.c;})));};
 }
 function history(){
  base('history','Saved runs and first responses','Resume drafts or inspect the exact saved question version. Later corrections do not overwrite first answers.');
  var runs=X.state().runs.slice().reverse();
  el('e2body').innerHTML=runs.length?runs.map(function(r){var s=X.score(r);return '<div class="card"><h2>'+esc(r.title)+'</h2><p>'+s.answered+'/'+s.total+' first tasks checked · '+s.auto+'/'+s.autoN+' automatic · '+s.self+'/'+s.selfN+' self-rated rubric points</p><p class="caption">'+new Date(r.started).toLocaleString()+' · '+(r.ended&&s.complete?'Completed':'Incomplete / resumable')+'</p>'+link('Open saved run','run/'+r.id)+(r.ended?link('Result','result/'+r.id):'')+'</div>';}).join(''):'<p class="empty">Your completed and unfinished runs will appear here.</p>';
 }
 function progress(){
  base('progress','Exam 2 progress','One course history powers mastery across topic practice, cases, Boss, learning mocks, and explicit written self-checks.');
  el('e2body').innerHTML=metrics()+'<div class="card"><p>Mastery requires independent unhinted roots, with medium/high confidence on the qualifying later response. Repeating one root does not create new independent evidence. Earned mastery is retained after a later miss, and the miss remains available for review.</p><p>Rubric results are self-assessed, not automatic grading. Reading, listening, and a “studied” mark do not award mastery.</p><a class="btn" href="#exam2/data">Export or merge course progress</a></div>'+cards();bindPractice();
 }
 function sourceIndex(){
  base('sources','Sources, scope, and unresolved details','Current-course materials control the lessons. Historical exam evidence shapes the style of original practice; it does not predict Exam 2 weights.');
  el('e2body').innerHTML='<div class="callout"><b>Scope decision:</b> October 6 directs CI study to Sutherland’s lecture. The supplied Lectures 4–6 now include the October 22 auditory-training deck and discussion. Lecture 7 visual stimuli are included; APD is excluded from Exam 2.</div><div class="card"><h2>Source conflicts retained</h2><ul class="note-points">'+D.conflicts.map(function(c){return '<li>'+esc(c)+'</li>';}).join('')+'</ul></div><div class="card"><h2>Original source files</h2><p><a href="assets/exam2/source-packet.zip" download>Download the original October 20 packet (ZIP)</a></p><p>Lecture 6 originals and its goal/FAPI references are linked individually below. The filled deck includes student/assisted fills; it is not an official answer key. Source drawers preserve the matching slides and transcript passages.</p>'+Object.keys(D.sources).map(function(k){var s=D.sources[k];return '<p><a href="'+esc(s.f)+'" target="_blank" rel="noopener">'+esc(s.t)+'</a></p>';}).join('')+'</div><div class="card"><h2>Practice design</h2><p>'+D.items.length+' original automatic questions, mixed three/four-choice MC and T/F, '+D.cases.length+' cases, and '+D.written.length+' written rubrics. The supplied October 29 notes report 65 questions, 65 points and no short answers. The three fixed forms use one point per item as a practice convention; APD is excluded from Exam 2. <a href="#exam2/focus">Open Exam focus & mocks</a>.</p><p class="caption">Authoring evidence: COMD4590-EXAM1-RECALL-20260929; cutoff September 29, 2026, with Lectures 4–7 and the October 29 review specification. Student recall establishes observed style, not an official answer key.</p></div>';
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
  main=host;V.mount(host);args=args||[];var view=args[0]||'practice';
  var fn={'':overview,guide:guide,practice:practice,mocks:mocks,writing:writing,cases:cases,boss:function(){challenge('boss');},partial:function(){challenge('partial');},review:review,history:history,progress:progress,sources:sourceIndex};
  if(view==='focus')focus(args[1]);else if(view==='topic')learn(args[1],args[2]);else if(view==='run')run(args[1],args[2]);else if(view==='result')result(args[1]);else(fn[view]||overview)();
 }
 L.exam2UI={render:render};
})(typeof window!=='undefined'?window:globalThis);
