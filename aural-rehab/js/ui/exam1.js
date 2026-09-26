/* Exam 1 interface. All answer feedback is immediate, never deferred to run completion. */
(function(root){
  'use strict';
  var L=root.L,U=L.util,X=L.exam1,D=L.EXAM1_DATA,S=L.store,I=L.itemUI,esc=U.esc,main;
  function $(q){return main.querySelector(q);}
  function go(path){L.app.go('exam1'+(path?'/'+path:''));}
  function link(path,label,cls){return '<a class="btn '+(cls||'')+'" href="#exam1'+(path?'/'+path:'')+'">'+label+'</a>';}
  function shell(title,sub){
    return '<div class="e1"><div class="spread"><div><p class="eyebrow">September 24 classroom edition</p><h1>'+esc(title)+'</h1></div>'+link('','Exam 1 home')+'</div>'+(sub?'<p class="muted">'+sub+'</p>':'')+
      '<nav class="row e1nav" aria-label="Exam 1">'+[['chapters','Mini-chapters'],['graphs','Audiograms'],['writing','Short answers'],['mocks','Full mocks'],['review','Review misses'],['history','My history']].map(function(x){return link(x[0],x[1]);}).join('')+'<a class="btn" href="#data">Backup / restore</a></nav><div id="e1save" role="status" aria-live="polite"></div>';
  }
  function status(){var el=$('#e1save');if(el)el.innerHTML=S.ok()?'<span class="tiny muted">Saved in this browser · answers, drafts, position and misses persist after closing.</span>':'<div class="warnbox"><b>Not saved.</b> '+esc(S.problem()||'Browser storage is unavailable. Export before closing.')+' <a href="#data">Export progress</a></div>';}
  function html(content){main.innerHTML=content+'</div>';status();}
  function date(ts){return new Date(ts).toLocaleString();}
  function chapterCard(c){var st=X.readiness(c.id);return '<article class="card flat"><div class="spread"><span class="badge">'+c.n+' · '+esc(c.group==='G'?'Guest':c.group)+'</span><span class="small">'+st.mastered+'/'+st.total+' concepts mastered</span></div><h3>'+esc(c.title)+'</h3><p class="small">'+esc(c.focus)+'</p><div class="progress"><i style="width:'+U.pct(st.mastered,st.total)+'%"></i></div>'+link('chapters/'+c.id,'Study + drill','pri')+'</article>';}
  function overview(){
    var st=X.state(),active=X.get(st.activeId),miss=X.misses(),h=shell('Exam 1','Focused chapters, immediate correction and the format she announced. Your original Study Lab remains available in the top navigation.');
    h+='<div class="grid g4"><div class="tile"><b>52</b><span>MC / true–false</span></div><div class="tile"><b>2</b><span>audiograms: type, degree, configuration</span></div><div class="tile"><b>2</b><span>short written answers</span></div><div class="tile"><b>70</b><span>announced total points</span></div></div>';
    h+='<div class="card"><h2>Correct the association while it is fresh.</h2><p>Select an answer → see the verdict and explanation immediately → fix the misconception → continue. Your first response stays scored. Written work is checked against a rubric on that question.</p><p>Four objective questions come from Dr. Lee’s <b>first lecture</b>. Lectures 2–3 carry the heavier load. Syndromes focus on physical features and hearing-loss associations; general inheritance stays in scope.</p>'+I.srcChips(['E1'])+'</div>';
    if(active) {var sc=X.score(active),done=sc.complete;h+='<div class="card"><b>'+esc(active.title)+'</b><p>'+(done?'Completed':'In progress')+' · '+sc.answered+'/'+sc.count+' questions checked · '+sc.total+'/'+sc.possible+' practice points · last saved '+esc(date(active.updated))+'</p><div class="row">'+(done?link('result/'+active.id,'View completed results','good'):link('run/'+active.id,'Resume exactly where I left off','good'))+(done&&active.kind==='graph'?link('graphs','Start another audiogram set','pri'):'')+'</div></div>';}
    h+='<div class="row">'+link('mocks','Start a full learning mock','pri')+link('review','Review '+miss.length+' open misses')+'</div><h2>Work through the focused chapters</h2><p class="small muted">Newly checked graded answers, including full mocks, feed concept progress. Mastery still requires two correct, unhinted answers on different questions, with medium/high confidence on the latest. Existing saved history is preserved.</p><div class="grid g3">'+D.chapters.map(chapterCard).join('')+'</div>';
    html(h);
  }
  function chapters(id){
    var c=X.chapter(id);if(!c){html(shell('Mini-chapters')+'<div class="grid g3">'+D.chapters.map(chapterCard).join('')+'</div>');return;}
    X.state().chapterRead[c.id]=Date.now();X.save();
    var h=shell(c.n+'. '+c.title,esc(c.focus));
    h+='<div class="row"><button class="btn pri" id="chapterDrill">Start a 12-question drill</button>'+link('review','Review my misses')+'</div><div class="card e1lesson">'+c.html+I.srcChips(c.src)+'</div>';
    if(c.id==='hearing-aids')h+='<div class="card media">'+L.svg.bte(true)+'</div>';
    if(c.id==='verification')h+='<details class="card"><summary>Original real-ear figure and referenced textbook tables</summary><figure><img class="e1figure" src="assets/exam1/real-ear-slide32.png" alt="Actual real-ear fitting display from final Lecture 3 slide 32"><figcaption>Final Lecture 3 slide 32: measured output is compared with targets at different speech levels.</figcaption></figure>'+[54,55,56].map(function(p){return '<figure><a href="assets/exam1/textbook-page-'+p+'.png" target="_blank" rel="noopener"><img class="e1figure" loading="lazy" src="assets/exam1/textbook-page-'+p+'.png" alt="Original textbook page '+p+' with referenced outcome tables"></a><figcaption>Textbook page '+p+' · click to enlarge.</figcaption></figure>';}).join('')+'</details>';
    var handouts={children:[['aaa-pediatric-amplification.pdf','AAA pediatric amplification guidelines'],['ling-check.pdf','Ling check handout'],['listening-check.pdf','Hearing-aid listening check'],['louisiana-course-handout.docx','Louisiana course handout']],classroom:[['children-fm.pdf','Children hear better with FM']],dots:[['count-the-dots-article.pdf','Original six-page count-the-dots article'],['count-the-dots-assignment.pdf','Class count-the-dots assignment']]};
    if(handouts[c.id])h+='<div class="card"><h3>Original class handouts</h3><div class="row">'+handouts[c.id].map(function(a){return '<a class="btn" target="_blank" rel="noopener" href="assets/exam1/'+a[0]+'">'+esc(a[1])+'</a>';}).join('')+'</div></div>';
    var all=[];Object.keys(L.GUIDE).forEach(function(k){all=all.concat(L.GUIDE[k]);});
    c.guides.forEach(function(id){var card=all.filter(function(g){return g.id===id;})[0];if(!card)return;h+='<details class="card e1detail" open><summary>'+esc(card.h)+'</summary><div class="e1lesson">'+card.html+'</div>'+(card.traps?'<div class="traps"><b>Watch these distinctions</b><ul>'+card.traps.map(function(t){return '<li>'+esc(t)+'</li>';}).join('')+'</ul></div>':'')+I.srcChips(card.src)+'</details>';});
    if(c.id==='syndromes'){
      h+='<h2>Course image atlas</h2><p class="muted">The same original images are retained. Click a name to inspect the picture; identification practice uses the unlabeled question bank.</p><div class="grid g3">';
      EItems().filter(function(it){return it.id.indexOf('s5.photo.')===0&&it.media&&it.media.kind==='img';}).forEach(function(it){h+='<details class="card e1detail"><summary>'+esc(it.o.filter(function(o){return o.ok;})[0].t)+'</summary>'+I.mediaHTML(it.media)+'<p>'+it.x+'</p>'+I.srcChips(it.s)+'</details>';});h+='</div>';
    }
    if(c.id==='audiograms')h+='<div class="card">'+link('graphs','Practice fresh two-ear audiograms','pri')+'</div>';
    if(c.id==='dots')h+='<div class="card"><h3>Practice chart</h3>'+L.svg.dotsChart({})+'<h3>Speech-prediction relationships</h3><img class="e1figure" src="assets/img/source/killion-mueller-fig3.webp" alt="Killion and Mueller Figure 3: speech recognition prediction curves">'+I.srcChips(['KM'])+'</div>';
    var st=X.readiness(c.id), stats=L.engine.conceptStats();
    h+='<details class="card"><summary>Concept progress: '+st.mastered+'/'+st.total+'</summary><p class="small muted">These are shared concepts from your existing progress record. A miss can lower this chapter’s ready count until later correct answers rebuild mastery.</p><ul>'+st.concepts.map(function(k){var s=stats[k];return '<li>'+esc(L.CONCEPTS[k].name)+' — '+esc(s.status)+' ('+s.att+' graded attempts)</li>';}).join('')+'</ul></details>';
    html(h);$('#chapterDrill').onclick=function(){var r=X.practice(c.id,12);go('run/'+r.id);};
  }
  function EItems(){return L.engine.itemsFor(function(){return true;});}
  function mocks(){
    var h=shell('Full Exam 1 learning mocks','Every answer receives immediate feedback. Each form follows the announced task counts; this is practice with correction, not an unaided exam simulation.');
    h+='<div class="card"><b>52 MC/T/F + 2 audiograms + 2 short answers</b><p>Four of the 52 objective questions are general first-lecture guest material. No case-study lecture block. No imposed time limit.</p><details><summary>Practice scoring and topic allocation</summary><p>She announced 70 total points but did not provide all task weights, the MC/T/F split, or exact topic counts. These forms use <b>52 × 1 + 2 × 6 + 2 × 3 = 70</b>: six graph parts and a three-criterion writing rubric. The objective allocation is <b>6 Lecture 1 + 20 Lecture 2 + 22 Lecture 3 + 4 guest</b>. Those weights, the per-ear response fields and the precise mix are lab choices.</p><p>First responses are scored; seeing feedback cannot turn a miss into a correct first response. Unanswered tasks remain in the denominator. Writing is self-scored and shown separately. Newly checked graded answers feed concept progress; completing the form alone does not grant mastery. Existing saved history remains intact.</p></details></div><div class="grid g3">';
    D.forms.forEach(function(f){h+='<div class="card"><h2>Form '+f.name+'</h2><p>Reproducible question selection and fresh numerical audiograms. Forms draw from the same audited bank, so some questions overlap.</p><button class="btn pri" data-form="'+f.name+'">Start Form '+f.name+'</button></div>';});
    h+='</div><button class="btn" id="freshForm">Generate another form</button><h2>Previous full forms</h2>'+runList(X.state().runs.filter(function(r){return r.kind==='mock';}));html(h);
    main.querySelectorAll('[data-form]').forEach(function(b){b.onclick=function(){var f=D.forms.filter(function(f){return f.name===b.dataset.form;})[0];go('run/'+X.startMock(f.name,f.seed).id);};});
    $('#freshForm').onclick=function(){var seed=U.newSeed();go('run/'+X.startMock(String(seed),seed).id);};
  }
  function graphs(){html(shell('Audiogram workshop','Each selected part receives immediate correction. Grade the AC PTA on her adopted scale; determine type using AC and masked BC.')+'<div class="card"><p>Four generated graphs per set, with different combinations of type, degree and configuration. Your answers and position save after every part.</p><button class="btn pri" id="startGraphs">Start fresh audiograms</button></div>');$('#startGraphs').onclick=function(){go('run/'+X.startGraphs().id);};}
  function writing(){html(shell('Short-answer workshop','Write your response, then check it against its rubric immediately. No keyword algorithm pretends to judge clinical reasoning.')+'<div class="grid g3">'+D.shorts.map(function(s){return '<div class="card"><h3>'+esc(X.chapter(s.chapter).title)+'</h3><p>'+esc(s.q)+'</p><button class="btn pri" data-write="'+s.id+'">Write and check</button></div>';}).join('')+'</div>');main.querySelectorAll('[data-write]').forEach(function(b){b.onclick=function(){go('run/'+X.startWriting(b.dataset.write).id);};});}
  function runList(runs){if(!runs.length)return '<p class="muted">No runs yet.</p>';return '<div class="e1runs">'+runs.slice().reverse().map(function(r){var sc=X.score(r);return '<div class="card spread"><div><b>'+esc(r.title)+'</b><p class="small">'+(sc.complete?'Completed':'In progress')+' · '+esc(date(r.started))+' · '+sc.answered+'/'+sc.count+' checked · '+sc.total+'/'+sc.possible+' practice points'+(sc.pendingWriting?' · writing still pending':'')+'</p></div><div class="row">'+link('run/'+r.id,sc.complete?'Inspect answers':'Resume')+link('result/'+r.id,sc.complete?'Results':'Progress summary')+'</div></div>';}).join('')+'</div>';}
  function history(){html(shell('My study history','All runs remain available, including unfinished work. Scores include unanswered tasks in the full denominator.')+runList(X.state().runs));}
  function resolvedMisses(){
    var stats=L.engine.conceptStats(),runs=X.state().runs,items=[];
    runs.forEach(function(run){run.tasks.forEach(function(t,i){
      if(!t.checked||!t.grade||t.grade.ok)return;
      var when=t.checkedAt||run.updated,cleared=false;
      if(t.kind==='short')cleared=runs.some(function(later){return later.tasks.some(function(q){return q.kind==='short'&&q.item.id===t.item.id&&q.checked&&q.grade&&q.grade.ok&&(q.checkedAt||later.updated)>when;});});
      else {var st=stats[t.item.c],after=st?st.hist.filter(function(a){return a.t>when;}).slice(-2):[];cleared=after.length===2&&after.every(function(a){return a.ok&&!a.h;})&&after[0].i!==after[1].i&&['m','h'].indexOf(after[1].cf)>=0;}
      if(cleared)items.push({run:run.id,index:i,chapter:t.chapter,c:t.item.c,time:when,points:Math.round(t.grade.sc*t.weight),possible:t.weight,kind:t.kind});
    });});
    return items.sort(function(a,b){return b.time-a.time;}).slice(0,6);
  }
  function review(){
    var misses=X.misses(),resolved=resolvedMisses();
    var h=shell('Review misses','A wrong answer joins this queue immediately. Later correct work can clear it, while the original score remains in your history.');
    h+=misses.length?'<div class="grid g3">'+misses.map(function(m,i){return '<article class="card"><span class="badge">'+esc(X.chapter(m.chapter).title)+'</span><h3>'+esc(L.CONCEPTS[m.c]?L.CONCEPTS[m.c].name:'Written response')+'</h3><p class="small">'+esc(date(m.time))+'</p><div class="row"><button class="btn pri" data-retry="'+i+'">Practice this now</button>'+link('run/'+m.run+'/'+m.index,'Revisit feedback')+link('chapters/'+m.chapter,'Relearn')+'</div></article>';}).join('')+'</div>':'<div class="card">No open Exam 1 misses right now. Recent mistakes cleared by later correct work appear below; an empty queue alone does not prove mastery.</div>';
    if(resolved.length)h+='<h2>Recent resolved mistakes</h2><p class="small muted">These are no longer in the open queue. Their original scores remain saved.</p><div class="e1runs">'+resolved.map(function(m){var c=X.chapter(m.chapter);return '<div class="card spread"><div><b>Question '+(m.index+1)+' · '+esc(c?c.title:'Exam 1')+'</b><p class="small">'+m.points+'/'+m.possible+' first-response points · '+esc(date(m.time))+'</p></div>'+link('run/'+m.run+'/'+m.index,'Revisit feedback')+'</div>';}).join('')+'</div>';
    html(h);main.querySelectorAll('[data-retry]').forEach(function(b){b.onclick=function(){go('run/'+X.retry(misses[+b.dataset.retry]).id);};});
  }
  function run(id,at){
    var r=X.get(id);if(!r){overview();return;}
    if(at!==undefined&&!isNaN(+at)){r.cur=Math.max(0,Math.min(r.tasks.length-1,+at));root.history.replaceState(null,'','#exam1/run/'+id);X.state().lastRoute='exam1/run/'+id;X.touch(r);}
    var t=r.tasks[r.cur],sc=X.score(r),h=shell(r.title,'Immediate feedback · your first response is retained · closing the tab does not end this run.');
    h+='<div class="spread e1runhead"><b>Question '+(r.cur+1)+' of '+r.tasks.length+' · '+esc(t.kind==='short'?'Short answer':t.kind==='graph'?'Audiogram':t.item.t==='tf'?'True / false':'Objective')+'</b><span>'+sc.answered+' checked · '+sc.total+'/'+sc.possible+' points so far</span></div><div class="row"><button class="btn" id="flag">'+(t.flag?'★ Flagged':'☆ Flag for review')+'</button>'+link('chapters/'+t.chapter,'Study this topic')+'</div>';
    if(!t.checked&&t.kind!=='short'&&!(t.kind==='graph'&&t.response&&t.response.some(Boolean)))h+='<label class="e1confidence">Confidence before answering <select id="confidence"><option value="l"'+(t.confidence==='l'?' selected':'')+'>Low / guessing</option><option value="m"'+(t.confidence==='m'?' selected':'')+'>Medium</option><option value="h"'+(t.confidence==='h'?' selected':'')+'>High</option></select></label>';
    h+='<div id="e1item"></div><div class="row e1controls"><button class="btn" id="prev"'+(r.cur===0?' disabled':'')+'>← Previous</button><button class="btn pri" id="next">'+(r.cur===r.tasks.length-1?'See my progress':'Next →')+'</button><button class="btn" id="summary">Save and view summary</button></div><details class="card" open><summary>Question map · ✓ correct · ✕ missed/partial · ★ flagged</summary><div class="e1map">'+r.tasks.map(function(q,i){return '<button class="btn '+(i===r.cur?'pri ':'')+(q.checked?(q.grade.ok?'good':'warn'):'')+'" data-jump="'+i+'" aria-label="Question '+(i+1)+(q.checked?(q.grade.ok?', correct':', missed or partial'):', unanswered')+(q.flag?', flagged':'')+'">'+(i+1)+(q.checked?(q.grade.ok?' ✓':' ✕'):'')+(q.flag?' ★':'')+'</button>';}).join('')+'</div></details>';
    html(h);
    var host=$('#e1item');
    function repaint(){run(r.id);}
    if(t.kind==='short')renderWriting(host,r,t,repaint);
    else if(t.kind==='graph')renderGraph(host,r,t,repaint);
    else {
      var cfg={mode:'mock',order:t.order,response:t.response===null?undefined:t.response,locked:t.checked,graded:t.grade,header:esc(X.chapter(t.chapter).title),noHint:true,onChange:function(resp){
        if(t.item.t==='mc'||t.item.t==='tf'){X.answer(r,r.cur,resp,t.confidence);repaint();}else{t.response=resp;X.touch(r);status();}
      }};
      var control=I.render(host,t.item,cfg);
      if(!t.checked&&t.item.t!=='mc'&&t.item.t!=='tf'){var b=U.el('button',{class:'btn pri'},'Check my answer now');b.onclick=function(){var resp=control.getResp();if(resp===undefined||resp===null||resp==='')return;X.answer(r,r.cur,resp,t.confidence);repaint();};host.appendChild(b);}
      document.onkeydown=function(e){if(/INPUT|TEXTAREA|SELECT/.test(e.target.tagName))return;if(host._keys)host._keys(e);};
    }
    if(t.checked){var fb=host.querySelector('.feedback')||host;fb.setAttribute('aria-live','polite');if(!t.grade.ok)host.insertAdjacentHTML('beforeend','<div class="e1correction">This miss is saved to <a href="#exam1/review">Review misses</a>. Read the distinction now; then use a fresh practice question to check the corrected association.</div>');}
    if($('#confidence'))$('#confidence').onchange=function(){t.confidence=this.value;X.touch(r);status();};
    $('#flag').onclick=function(){t.flag=!t.flag;X.touch(r);repaint();};
    $('#prev').onclick=function(){r.cur--;X.touch(r);repaint();};
    $('#next').onclick=function(){if(r.cur===r.tasks.length-1){X.finish(r);go('result/'+r.id);}else{r.cur++;X.touch(r);repaint();window.scrollTo(0,0);}};
    $('#summary').onclick=function(){X.finish(r);go('result/'+r.id);};
    main.querySelectorAll('[data-jump]').forEach(function(b){b.onclick=function(){r.cur=+b.dataset.jump;X.touch(r);repaint();window.scrollTo(0,0);};});
  }
  function renderGraph(host,r,t,repaint){
    host.innerHTML='<div class="card"><div class="prompt">'+t.item.q+'</div>'+I.mediaHTML(t.item.media)+'<div class="e1parts"></div><p class="small muted">Each part locks and explains as soon as you select it. Use the next graph to try again with new values.</p>'+I.srcChips(t.item.s)+'</div>';
    var parts=host.querySelector('.e1parts');
    t.item.parts.forEach(function(p,i){var response=t.response&&t.response[i],correct=response===p.a,wrap=U.el('div',{class:'e1part'}),label=U.el('label',{for:'e1part'+i},esc(p.label));wrap.appendChild(label);var sel=U.el('select',{id:'e1part'+i});sel.innerHTML='<option value="">Choose…</option>'+p.options.map(function(v){return '<option value="'+esc(v)+'"'+(response===v?' selected':'')+'>'+esc(v)+'</option>';}).join('');sel.disabled=!!response;wrap.appendChild(sel);if(response)wrap.insertAdjacentHTML('beforeend','<div class="fb '+(correct?'ok':'no')+'" role="status"><b>'+(correct?'Correct':'Incorrect — '+esc(p.a))+'</b><p>'+esc(p.why)+'</p></div>');sel.onchange=function(){X.answerPart(r,r.cur,i,sel.value);repaint();};parts.appendChild(wrap);});
    if(t.checked)host.insertAdjacentHTML('beforeend','<p class="e1correction">'+Math.round(t.grade.sc*6)+'/6 parts correct on the first response.</p>');
  }
  function renderWriting(host,r,t,repaint){
    var h='<div class="card"><div class="prompt">'+esc(t.item.q)+'</div><label for="written">Your response (saved as you type)</label><textarea id="written" class="e1written"'+(t.rubricOpen?' readonly':'')+' placeholder="Explain the distinction and apply it to the situation.">'+esc(t.response)+'</textarea>';
    if(!t.rubricOpen)h+='<button class="btn pri" id="checkWriting"'+(!t.response.trim()?' disabled':'')+'>Check this answer now</button>';
    else h+='<div class="fb"><h3>Check your answer now</h3><p>Compare what you actually wrote with each criterion. These are self-ratings, shown separately from automatic scores. Your original response stays visible.</p>'+t.item.rubric.map(function(s,i){return '<div class="e1rubric"><p><b>'+(i+1)+'.</b> '+esc(s)+'</p><div class="row"><button class="btn '+(t.ratings[i]===1?'good':'')+'" data-rate="'+i+':1"'+(t.checked?' disabled':'')+'>Included correctly · 1 point</button><button class="btn '+(t.ratings[i]===0?'warn':'')+'" data-rate="'+i+':0"'+(t.checked?' disabled':'')+'>Missing / incorrect · 0</button></div></div>';}).join('')+'</div>';
    h+=I.srcChips(t.item.s)+'</div>';host.innerHTML=h;
    if(!t.rubricOpen){host.querySelector('#written').oninput=function(){X.draft(r,r.cur,this.value);host.querySelector('#checkWriting').disabled=!this.value.trim();status();};host.querySelector('#checkWriting').onclick=function(){X.reveal(r,r.cur);repaint();};}
    host.querySelectorAll('[data-rate]').forEach(function(b){b.onclick=function(){var v=b.dataset.rate.split(':').map(Number);X.rate(r,r.cur,v[0],v[1]);repaint();};});
  }
  function result(id){
    var r=X.get(id);if(!r){history();return;}var sc=X.score(r),next=r.tasks.findIndex(function(t){return !t.checked;});
    var h=shell(r.title+' · progress','Feedback is available on each answered question. This page collects what to work on next.');
    h+='<div class="grid g3"><div class="tile"><b>'+sc.total+'/'+sc.possible+'</b><span>practice points, full denominator</span></div><div class="tile"><b>'+sc.answered+'/'+sc.count+'</b><span>questions checked</span></div><div class="tile"><b>'+sc.auto+' + '+sc.self+'</b><span>automatic + self-scored writing</span></div></div><p>'+(sc.complete?'Every task has been checked.':'This run is unfinished. Unanswered tasks contribute zero to the displayed full-run score; your drafts and position remain saved.')+'</p><div class="row">'+link('run/'+r.id+(next>=0?'/'+next:''),next>=0?'Continue unanswered questions':'Inspect my answers',r.kind==='graph'?'':'pri')+(r.kind==='graph'?link('graphs','Start another audiogram set','pri'):'')+link('review','Review open misses')+'</div><h2>Question-by-question record</h2><div class="e1runs">';
    r.tasks.forEach(function(t,i){h+='<div class="card spread"><div><b>'+(i+1)+'. '+esc(X.chapter(t.chapter).title)+'</b><p class="small">'+(t.checked?(t.grade.ok?'Correct':'Missed / partial')+' · '+Math.round(t.grade.sc*t.weight)+'/'+t.weight+(t.kind==='short'?' (self-scored)':''):'Not yet checked')+(t.flag?' · ★ flagged':'')+'</p></div>'+link('run/'+r.id+'/'+i,'Open question + feedback')+'</div>';});h+='</div>';html(h);
  }
  function render(host,args){main=host;X.state().lastRoute='exam1'+(args.length?'/'+args.join('/'):'');X.save();var page=args[0]||'';if(page==='chapters')chapters(args[1]);else if(page==='mocks')mocks();else if(page==='graphs')graphs();else if(page==='writing')writing();else if(page==='review')review();else if(page==='history')history();else if(page==='run')run(args[1],args[2]);else if(page==='result')result(args[1]);else overview();}
  L.exam1UI={render:render};
})(typeof window!=='undefined'?window:globalThis);
