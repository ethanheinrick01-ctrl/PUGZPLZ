/* Exam 2 presentation adapter. Course data, learning engines and storage are unchanged. */
(function () {
  'use strict';
  const T = window.DX_EXAM2, C = window.DXExamConfig;
  if (!T || window.DX_ACTIVE_EXAM !== T || !C || !window.DXTopic) return;
  const escape = value => String(value ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  // Existing Focus teaching selections, retained from the Exam 2 presentation config.
  const focusGroups = [['e2-child',[0,1,6]],['e2-medical',[0]],['e2-neuro',[2,6]],['e2-dysphagia',[0,4]],['e2-fluency',[3,4,6]],['e2-pfd',[0]]];
  const focusSections = focusGroups.flatMap(([id, indexes]) => {
    const module = T.guide.find(m => m.id === id), chapter = T.chapters.find(ch => ch.id === id);
    return indexes.filter(i => module?.sections[i]).map(index => ({key:id+':'+index,module,chapter,index,section:module.sections[index]}));
  });
  let currentAPI = null;
  const filters = {query:'',status:'all'};
  const prior = {home:C.home,header:C.header,focus:C.focus,render:window.DXTopic.render};

  function recordFor(entry, evidence) {
    const concepts = [...new Set(T.sectionMap[entry.key] || [])];
    const mastered = concepts.filter(id => evidence[id]?.mastered).length;
    const started = concepts.some(id => evidence[id]?.attempts || evidence[id]?.mastered || evidence[id]?.needsReview);
    const review = concepts.some(id => evidence[id]?.needsReview);
    const complete = concepts.length > 0 && mastered === concepts.length;
    return {...entry,concepts,mastered,total:concepts.length,started,review,complete,
      status:!concepts.length?'reading':complete?'mastered':started?'learning':'new',
      search:[entry.section.h,entry.chapter.title,...concepts.map(id=>T.concepts[id])].join(' ').toLocaleLowerCase()};
  }
  function matches(record, query, status) {
    const words = String(query || '').trim().toLocaleLowerCase().split(/\s+/).filter(Boolean);
    return words.every(word => record.search.includes(word)) && (status === 'all' ||
      status === 'review' && record.review ||
      status === record.status);
  }
  function continuation(list) {
    return list.find(record=>record.status!=='reading'&&!record.complete) || list.find(record=>record.review) || list[0] || null;
  }
  function activeTab(hash, runs = {}) {
    const parts = String(hash || '#/topic/home').replace(/^#\/?/, '').split('/');
    const view = parts[0] === 'topic' ? parts[1] || 'home' : parts[0];
    if (view === 'focus' || view === 'focus-paper') return 'focus';
    if (view === 'progress' || view === 'history' || view === 'backup') return 'progress';
    if (view === 'run' || view === 'results') {
      const run=runs[parts[2]];
      if (['focus','test','mock'].includes(run?.type)) return 'focus';
      return run?.type==='review' || run?.mode==='review' ? 'review' : 'study';
    }
    if (['test','paper','exams','exam'].includes(view)) return 'focus';
    if (view === 'review') return 'review';
    return 'study';
  }
  function evidence() {
    const state = currentAPI?.state;
    if (!state) return {};
    const topic = state.topics?.exam2 || {runs:{}};
    const derived = window.DXTopicEngine.evidence(topic, Object.keys(T.concepts));
    return Object.fromEntries(Object.keys(T.concepts).map(id => [id,{...derived[id],...(state.concepts?.[id] || {})}]));
  }
  function records() { const values = evidence(); return focusSections.map(section => recordFor(section,values)); }
  function currentSection() {
    const raw = String(window.location.hash || '').split('/')[3];
    if (!raw) return null;
    let key; try { key = decodeURIComponent(raw); } catch (_) { return null; }
    return focusSections.find(section => section.key === key) || null;
  }
  function stateLabel(record) {
    return (record.complete ? 'Mastered' : record.started ? 'In progress' : 'Not started') + (record.review ? ' · Review due' : '');
  }
  function progress(record) {
    if(!record.total)return '<p class="small">Reading is available. Linked practice and mastery checks are not yet available for this section.</p>';
    return `<p class="dx-focus-state" data-status="${record.status}"><strong>${stateLabel(record)}</strong></p><div class="progress" role="progressbar" aria-label="Linked concepts mastered" aria-valuemin="0" aria-valuemax="${record.total || 1}" aria-valuenow="${record.mastered}"><i style="width:${record.total ? record.mastered / record.total * 100 : 0}%"></i></div><p class="small">${record.mastered}/${record.total} linked concepts mastered</p>`;
  }
  function skillDetails(record, values = evidence()) {
    if(!record.total)return '';
    return `<details class="dx-skill-details"><summary>Linked skills</summary><ul>${record.concepts.map(id=>`<li>${escape(T.concepts[id])}<span>${values[id]?.mastered?'Mastered':values[id]?.attempts?'In progress':'Not started'}${values[id]?.needsReview?' · Review due':''}</span></li>`).join('')}</ul></details>`;
  }
  function checkAction(record) {
    return record.total?window.DXSectionStudy.button(record.key,record.section.h).replace('Study this section','Check linked skills'):'';
  }
  function packetDisclosure(source) {
    const node = source.querySelector('.e2-scope');
    return node ? `<details class="dx-packet card"><summary>Current packet and scope</summary>${node.outerHTML}</details>` : '';
  }

  C.header = function (view, chapter, heading) {
    const entry = view === 'focus' ? currentSection() : null;
    if (view === 'home' || view === 'guide') return heading('COMD 4756 · Exam 2','Study','Choose a chapter, continue a saved activity, or practice the skills you have studied.');
    if (view === 'focus') return heading('COMD 4756 · Exam 2',entry ? escape(entry.section.h) : 'Exam focus',entry ? escape(entry.chapter.title) : 'Read a focused section, check its linked skills, and return to what needs attention.');
    return prior.header(view,chapter,heading);
  };
  C.home = function (values, resume, card) {
    const template = document.createElement('template');
    template.innerHTML = prior.home(values,resume,card);
    const fragment = template.content;
    if (!fragment) return template.innerHTML;
    const stats = fragment.querySelector('.stats'), note = fragment.querySelector('.completion-note');
    const summary = `<section class="card dx-dashboard-summary"><h2>Your study progress</h2>${stats?.outerHTML || ''}${note?.outerHTML || ''}</section>`;
    stats?.remove(); note?.remove();
    const packet = packetDisclosure(fragment); fragment.querySelector('.e2-scope')?.remove();
    const grid = fragment.querySelector('.grid');
    grid?.classList.add('dx-chapter-list');
    if (grid) grid.insertAdjacentHTML('beforebegin','<h2 class="dx-chapters-heading">Chapters</h2>');
    return `${summary}<p class="dx-scope-notice">Final Exam 2 scope and format remain unconfirmed.</p>${template.innerHTML}${packet}`;
  };
  C.focus = function () {
    const entry = currentSection(), values = evidence(), all = focusSections.map(section=>recordFor(section,values));
    if (entry) {
      const record = all.find(item => item.key === entry.key);
      return `<p class="dx-crumb"><a href="#/topic/focus">Exam focus</a> / ${escape(entry.chapter.title)}</p><section class="card dx-section-summary"><h2>${record.total?'This section’s linked skills':'Practice availability'}</h2>${progress(record)}${record.total?'<p class="small">Uses your existing course mastery. Reading alone does not award mastery; later review needs remain visible.</p>':''}${skillDetails(record,values)}</section>${window.DXGuideDesign.legend([entry.module])}<section class="focus-reading">${window.DXGuideDesign.section(entry.module,entry.section,entry.index,{practice:record.total>0})}<a class="btn" href="#/topic/learn/${entry.chapter.id}">Full chapter</a></section><nav class="dx-section-footer" aria-label="Focus navigation"><a href="#/topic/focus">← All focus sections</a><a href="#/topic/review">Review due skills →</a></nav>`;
    }
    const template = document.createElement('template');
    template.innerHTML = prior.focus();
    if (!template.content) return template.innerHTML;
    const targets = template.content.querySelector('ul.study-points');
    const mastered = all.filter(item=>item.complete).length, due = all.filter(item=>item.review).length;
    const linked = [...new Set(all.flatMap(item=>item.concepts))];
    const masteredConcepts = linked.filter(id=>values[id]?.mastered).length;
    const next = continuation(all);
    return `<section class="card dx-dashboard-summary"><h2>Your Focus mastery</h2><div class="dx-focus-metrics"><div><b>${mastered}/${all.filter(item=>item.total>0).length}</b><span>Sections with linked skills mastered</span></div><div><b>${masteredConcepts}/${linked.length}</b><span>Linked concepts mastered</span></div><div><b>${due}</b><span>Sections needing review</span></div></div><p class="small">These sections use the existing course mastery record. Additional readings with practice pending do not count toward mastery. Earned mastery stays earned when a later miss adds review.</p><div class="row"><a class="btn primary" href="#/topic/focus/${encodeURIComponent(next.key)}">Continue</a><a class="btn" href="#/topic/backup">Back up progress</a><a class="btn" href="#/topic/test">Mock exams</a></div></section><p class="dx-scope-notice">Study targets from the current packet; final Exam 2 scope and format remain unconfirmed.</p><form class="dx-focus-filters" role="search" aria-label="Filter focus sections"><label for="dx-focus-search">Filter focus sections<input id="dx-focus-search" type="search" value="${escape(filters.query)}" placeholder="Term, section or skill" autocomplete="off"></label><label for="dx-focus-status">Progress<select id="dx-focus-status">${[['all','All sections'],['new','Not started'],['learning','In progress'],['mastered','Mastered'],['review','Needs review'],['reading','Practice pending']].map(([value,label])=>`<option value="${value}"${filters.status===value?' selected':''}>${label}</option>`).join('')}</select></label></form><p class="small" id="dx-focus-count" role="status" aria-live="polite"></p><div class="dx-focus-list">${all.map(record=>`<article class="card dx-focus-row" data-focus-key="${record.key}"><div class="dx-focus-copy"><p class="eyebrow">${escape(record.chapter.title)}</p><h2><a href="#/topic/focus/${encodeURIComponent(record.key)}">${escape(record.section.h)}</a></h2><div class="row"><a class="btn primary" href="#/topic/focus/${encodeURIComponent(record.key)}">Study this section</a>${checkAction(record)}</div></div><div class="dx-focus-record">${progress(record)}${skillDetails(record,values)}</div></article>`).join('')}</div><section class="card dx-filter-empty" hidden><h2>No matching sections</h2><p>Try another search or show all sections.</p><button class="btn" type="button" data-dx-clear-focus>Clear filters</button></section><details class="dx-focus-targets card"><summary>Study targets from the packet</summary><p>These are study targets from the packet, not a confirmed exam blueprint.</p>${targets?.outerHTML || ''}</details>${packetDisclosure(template.content)}`;
  };

  function installHeader() {
    const host = document.querySelector('.topin'), nav = document.querySelector('.top .nav');
    if (!host || !nav || host.dataset.dxShell) return;
    const theme = document.getElementById('themebtn');
    const identity = document.createElement('div'); identity.className = 'dx-identity';
    identity.innerHTML = `<a class="brand" href="#/topic/home">COMD 4756<span>Diagnostics · Exam 2</span></a><details class="dx-tools"><summary>Tools</summary><div class="dx-tools-menu"><a href="#/topic/practice">Practice builder</a><a href="#/topic/cases">Case decisions</a>${C.examPrepHidden?'':'<a href="#/topic/test">Mock exams</a>'}<a href="#/topic/sources">Sources and coverage</a><a href="#/topic/progress">Saved activity history</a><a href="#/topic/backup">Backup and restore</a><a href="#/tools">Numerical tools</a><a href="index.html#/topic/home">Exam 1</a><a href="../">All labs</a></div></details>`;
    if (theme) identity.querySelector('.dx-tools-menu').append(theme);
    nav.innerHTML = [['home','study','Study'],['focus','focus','Exam focus'],['review','review','Review'],['progress','progress','Progress']].filter(([,tab])=>!C.examPrepHidden||tab!=='focus').map(([route,tab,label])=>`<a href="#/topic/${route}" data-r="topic/${route}" data-dx-tab="${tab}">${label}</a>`).join('');
    nav.setAttribute('aria-label','Primary');
    host.replaceChildren(identity,nav); host.dataset.dxShell='true';
  }
  function updateNavigation() {
    installHeader();
    const tab = activeTab(window.location.hash,currentAPI?.state?.topics?.exam2?.runs);
    document.querySelectorAll('[data-dx-tab]').forEach(link=>{
      if (link.dataset.dxTab === tab) link.setAttribute('aria-current','page');
      else link.removeAttribute('aria-current');
    });
    const view = String(window.location.hash).replace(/^#\/?/,'').split('/');
    document.body.dataset.dxView = view[0]==='topic' ? view[1] || 'home' : view[0] || 'home';
  }
  function bindFilters(root) {
    const search=root.querySelector('#dx-focus-search'), select=root.querySelector('#dx-focus-status');
    if (!search || !select) return;
    const all=records();
    const update=()=>{
      filters.query=search.value; filters.status=select.value;
      let count=0;
      root.querySelectorAll('[data-focus-key]').forEach(card=>{
        const record=all.find(item=>item.key===card.dataset.focusKey);
        card.hidden=!record || !matches(record,filters.query,filters.status);
        if (!card.hidden) count++;
      });
      root.querySelector('#dx-focus-count').textContent=`${count} of ${all.length} focus sections shown`;
      root.querySelector('.dx-filter-empty').hidden=count>0;
    };
    search.addEventListener('input',update); select.addEventListener('change',update);
    search.closest('form').addEventListener('submit',event=>event.preventDefault());
    root.querySelector('[data-dx-clear-focus]').addEventListener('click',()=>{search.value='';select.value='all';update();search.focus();});
    update();
  }
  function lessonNavigation(root) {
    const shell=root.querySelector('.topic-shell');
    if (!shell || shell.querySelector('.dx-lesson-toolbar')) return;
    const cards=[...shell.querySelectorAll('.guide-module .study-card')];
    if (!cards.length) return;
    cards.forEach((card,index)=>{
      if (!card.id) card.id='dx-reading-'+(card.dataset.readingSection || index).replace(/[^A-Za-z0-9_-]/g,'-');
      card.setAttribute('tabindex','-1');
    });
    const reading=shell.querySelector('.reading-key');
    if (reading) {reading.id='dx-reading-key';reading.setAttribute('tabindex','-1');}
    const media=shell.querySelector('.chapter-explainer');
    const figures=[...shell.querySelectorAll('.e2-original:has(img),.guide-module figure,.guide-module .visual')];
    if (media) {if(!media.id)media.id='dx-lesson-watch';media.setAttribute('tabindex','-1');}
    figures.forEach((figure,index)=>{if(!figure.id)figure.id='dx-lesson-figure-'+index;figure.setAttribute('tabindex','-1');});
    const jumpTo=id=>{
      const target=document.getElementById(id);if(!target || !root.contains(target))return;
      let parent=target.parentElement;while(parent&&parent!==root){if(parent.tagName==='DETAILS')parent.open=true;parent=parent.parentElement;}
      target.scrollIntoView({block:'start',behavior:'auto'});target.focus({preventScroll:true});
    };
    const toolbar=document.createElement('nav');toolbar.className='dx-lesson-toolbar';toolbar.setAttribute('aria-label','Lesson views');
    toolbar.innerHTML=`<button type="button" data-dx-jump="${reading?.id || cards[0].id}">Read</button><button type="button" ${media?`data-dx-jump="${media.id}"`:'disabled'}>Watch / listen</button><button type="button" ${figures[0]?`data-dx-jump="${figures[0].id}"`:'disabled title="No separate figures in this lesson"'}>Figures</button>`;
    toolbar.querySelectorAll('[data-dx-jump]').forEach(button=>button.addEventListener('click',()=>jumpTo(button.dataset.dxJump)));
    const jump=document.createElement('label');jump.className='dx-lesson-jump';jump.htmlFor='dx-lesson-heading';
    jump.innerHTML=`In this lesson<select id="dx-lesson-heading"><option value="">Choose a heading</option>${cards.map(card=>`<option value="${card.id}">${escape(card.querySelector('h3,h2')?.textContent || 'Reading section')}</option>`).join('')}</select>`;
    jump.querySelector('select').addEventListener('change',event=>{if(event.target.value)jumpTo(event.target.value);});
    const anchor=shell.querySelector(':scope > .lede') || shell.querySelector('h1');
    anchor.after(toolbar,jump);
    if (media) anchor.after(media);
    shell.querySelector('.reading-route')?.remove();
    // Move the existing nodes, retaining video listeners, controls, citations and notes.
    const chapterActions=shell.querySelector(':scope > .tabs');if(chapterActions)shell.append(chapterActions);
    shell.querySelectorAll(':scope > .e2-original').forEach(figure=>shell.append(figure));
  }
  window.DXTopic.render = function (api,parts) {
    currentAPI=api;
    if (C.examPrepHidden && ['focus','focus-paper','test','paper','exams','exam'].includes(parts[0])) {
      parts=['home']; window.location.hash='#/topic/home';
    }
    prior.render(api,parts);
    if (!document.createElement || !api.app?.querySelector) return;
    updateNavigation();
    api.app.querySelectorAll('.grid').forEach(grid=>{
      if (grid.querySelector('a[href^="#/topic/learn/"]')) {
        grid.classList.add('dx-chapter-list');
        grid.querySelectorAll(':scope > .card').forEach(card=>{
          const heading=card.querySelector('h2'),link=card.querySelector('a[href^="#/topic/learn/"]');
          if(heading && link && !heading.querySelector('a')){
            const title=document.createElement('a');title.href=link.getAttribute('href');
            while(heading.firstChild)title.append(heading.firstChild);heading.append(title);
          }
        });
      }
    });
    if ((parts[0] || 'home') === 'focus') bindFilters(api.app);
    if (parts[0] === 'learn') lessonNavigation(api.app);
  };
  window.DXExam2Shell = {focusSections,recordFor,matches,activeTab,continuation};
  if (document.body?.classList) {document.body.classList.add('dx-exam2-shell');document.body.dataset.examPrepHidden=String(!!C.examPrepHidden);}
  if (window.addEventListener) window.addEventListener('hashchange',()=>{
    if (!document.querySelector) return;
    updateNavigation();
    const menu=document.querySelector('.dx-tools'); if(menu)menu.open=false;
  });
})();
