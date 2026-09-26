const fs=require('fs'),path=require('path'),os=require('os'),assert=require('assert/strict');
const {chromium}=require(process.env.PLAYWRIGHT_MODULE||'playwright');
const base=process.env.TEST_URL||'http://127.0.0.1:8794/';
const out=process.env.TEST_OUTPUT||fs.mkdtempSync(path.join(os.tmpdir(),'pugzplz-'));
fs.mkdirSync(out,{recursive:true});
const profile=process.env.TEST_PROFILE||path.join(out,'profile');
const checks=[],errors=[];let ctx;
function check(name,v){assert.ok(v,name);checks.push(name);console.log('PASS',name);}
function equal(name,a,b){assert.deepEqual(a,b,name);checks.push(name);console.log('PASS',name);}
async function open(){ctx=await chromium.launchPersistentContext(profile,{channel:'chrome',headless:true,acceptDownloads:true,viewport:{width:1280,height:900}});const p=await ctx.newPage();p.on('pageerror',e=>errors.push(e.message));return p;}
async function go(p,url){await p.goto(base+url);}
async function dxstate(p){return p.evaluate(()=>JSON.parse(localStorage.getItem('comd4756-lab-v2')));}
async function arstate(p){return p.evaluate(()=>JSON.parse(localStorage.getItem('comd4590-lab-v2')));}
async function beginDX(p,id){await go(p,'diagnostics/#/exams');await p.locator('[data-act="start-exam"][data-x="'+id+'"]').click();await p.locator('#modal button').filter({hasText:/^Begin$/}).click();await p.locator('article.q').waitFor();}
async function currentDX(p){return p.evaluate(()=>__DX.ITEMS[document.querySelector('article.q').dataset.item]);}
(async()=>{
 let p=await open();await go(p,'');
 if(process.env.AURAL_BASELINE && !await arstate(p)) await p.evaluate(s=>localStorage.setItem('comd4590-lab-v2',s),fs.readFileSync(process.env.AURAL_BASELINE,'utf8'));
 equal('Homepage contains exactly the two lab choices',await p.locator('.choice').count(),2);
 await p.getByRole('link',{name:'Aural Rehab Study Lab',exact:true}).click();await p.waitForFunction(()=>window.L?.app&&document.querySelector('.e1'));
 equal('Aural storage key is unchanged',await p.evaluate(()=>L.store.KEY),'comd4590-lab-v2');
 let before=process.env.AURAL_BASELINE?JSON.parse(fs.readFileSync(process.env.AURAL_BASELINE,'utf8')):null;
 if(before){const after=await arstate(p);equal('Existing Aural unfinished runs, answers, flags, drafts and position survive folder relocation',after.exam1.runs,before.exam1.runs);equal('Existing practice queue and position survive folder relocation',after.session,before.session);equal('Existing scored attempts survive folder relocation',after.attempts,before.attempts);}
 else await p.evaluate(()=>{L.exam1.startMock('Test',24680);L.engine.newSession('practice','Existing practice',[{id:'s1.def1'},{id:'s2.scale2'}]);L.store.save();});
 let arRun=await p.evaluate(()=>{const r=L.exam1.get(L.exam1.state().activeId);L.app.go('exam1/run/'+r.id);return r.id;});
 await p.locator('#e1item .opt').first().waitFor();
 const wrong=await p.evaluate(()=>{const r=L.exam1.get(L.exam1.state().activeId);return r.tasks[r.cur].item.o.findIndex(o=>!o.ok);});
 await p.locator('#e1item .opt[data-oi="'+wrong+'"]').click();
 check('Aural Exam 1 shows wrong-answer correction immediately',/Incorrect/.test(await p.locator('#e1item .verdict').innerText()));
 await p.locator('#flag').click();await p.locator('#next').click();
 const arSaved=await arstate(p);
 await go(p,'');await p.getByRole('link',{name:'Diagnostics Study Lab',exact:true}).click();await p.waitForFunction(()=>window.__DX);
 equal('Diagnostics keeps its separate storage key',await p.evaluate(()=>__DX.state.schema),'comd4756-lab-v2');
 equal('Opening Diagnostics leaves Aural progress unchanged',await arstate(p),arSaved);
 await beginDX(p,'mock-a');let it=await currentDX(p);
 await p.locator('[data-act="xconf"][data-v="high"]').click();
 await p.locator('input[data-in="tf"][value="'+(!it.answer)+'"]').check();
 check('Diagnostics mock corrects the first wrong answer immediately',/Not quite/.test(await p.locator('.verdict').innerText()));
 check('Diagnostics mock shows explanation and corrected answer',await p.locator('.explain').isVisible()&&await p.locator('.fix').isVisible());
 check('Diagnostics first response is locked',await p.locator('input[data-in="tf"]').first().isDisabled());
 await p.locator('[data-act="flag"]').click();await p.locator('[data-act="nextq"]').click();
 it=await currentDX(p);await p.locator('input[data-in="tf"][value="'+it.answer+'"]').check();
 check('Diagnostics gives immediate correct-answer feedback',/Correct/.test(await p.locator('.verdict').innerText()));
 await p.locator('[data-act="nextq"]').click();
 const examSnap=(await dxstate(p)).exams['mock-a'];
 await beginDX(p,'boss-b');
 const npos=await p.evaluate(()=>{const a=__DX.state.exams['boss-b'].active;return a.order.findIndex(id=>__DX.ITEMS[id].type==='num');});
 await p.locator('[data-act="goq"][data-k="'+npos+'"]').click();await p.locator('input[data-in="num"]').first().fill('123');
 await go(p,'diagnostics/#/practice');await p.locator('[data-act="pq"][data-q="mixed"]').click();
 // Preserve a deterministic multi-select draft and session cursor using the app's persisted schema.
 await p.evaluate(()=>{const it=DX_DATA.items.find(i=>i.pool==='practice'&&i.type==='multi');const s=__DX.state.practice;s.queue.unshift({id:it.id,rep:0});s.views[it.id]=DXE.makeView(it);s.pos=0;s.cur=null;__DX.save();});
 await p.reload();await p.locator('input[data-in="multi"]').first().check();
 let dxSaved=await dxstate(p);
 await ctx.close();p=await open();await go(p,'diagnostics/#/practice/run');
 let dxAfter=await dxstate(p);
 equal('Diagnostics practice draft, queue and position survive browser close/reopen',dxAfter.practice,dxSaved.practice);
 equal('Diagnostics mock answers, first-response locks, flags and position survive browser close/reopen',dxAfter.exams['mock-a'],examSnap);
 equal('Diagnostics unfinished numerical answer survives browser close/reopen',dxAfter.exams['boss-b'],dxSaved.exams['boss-b']);
 equal('Diagnostics misses and mastery records survive browser close/reopen',dxAfter.concepts,dxSaved.concepts);
 await go(p,'aural-rehab/');let arAfter=await arstate(p);
 equal('Aural unfinished runs survive browser close/reopen',arAfter.exam1.runs,arSaved.exam1.runs);
 equal('Aural question position resumes on screen',await p.locator('.e1runhead b').innerText(),`Question ${arSaved.exam1.runs.find(r=>r.id===arRun).cur+1} of 56 · ${arSaved.exam1.runs.find(r=>r.id===arRun).tasks[arSaved.exam1.runs.find(r=>r.id===arRun).cur].item.t==='tf'?'True / false':'Objective'}`);
 await go(p,'aural-rehab/#data');const arDownload=await Promise.all([p.waitForEvent('download'),p.locator('#exp').click()]);const arText=fs.readFileSync(await arDownload[0].path(),'utf8');
 check('Aural export includes unfinished runs and practice sessions',JSON.parse(arText).state.exam1.runs.length>0&&!!JSON.parse(arText).state.session);
 await go(p,'diagnostics/#/progress');const dxDownload=await Promise.all([p.waitForEvent('download'),p.locator('[data-act="export"]').click()]);const dxText=fs.readFileSync(await dxDownload[0].path(),'utf8');
 check('Diagnostics export includes practice and active exams',!!JSON.parse(dxText).state.practice&&!!JSON.parse(dxText).state.exams['mock-a'].active);
 const browser=await chromium.launch({channel:'chrome',headless:true});const separate=await browser.newContext({acceptDownloads:true});const other=await separate.newPage();
 await go(other,'aural-rehab/');await other.waitForFunction(()=>window.L?.app&&localStorage.getItem('comd4590-lab-v2'));equal('A different browser profile starts with independent Aural progress',(await arstate(other)).exam1.runs.length,0);
 await go(other,'aural-rehab/#data');await other.locator('#file').setInputFiles({name:'aural.json',mimeType:'application/json',buffer:Buffer.from(arText)});
 await other.locator('#impMsg').filter({hasText:'Merged progress'}).waitFor();equal('Aural import restores unfinished runs exactly',(await arstate(other)).exam1.runs,JSON.parse(arText).state.exam1.runs);
 await go(other,'diagnostics/');equal('A different browser profile starts with independent Diagnostics progress',Object.keys((await dxstate(other)).items).length,0);
 await go(other,'diagnostics/#/progress');const chooser=await Promise.all([other.waitForEvent('filechooser'),other.locator('[data-act="import"]').click()]);await chooser[0].setFiles({name:'diagnostics.json',mimeType:'application/json',buffer:Buffer.from(dxText)});await other.locator('#modal button').filter({hasText:/^Import$/}).click();
 equal('Diagnostics import restores unfinished practice and exam state',(await dxstate(other)).exams,JSON.parse(dxText).state.exams);
 equal('Diagnostics import does not overwrite Aural progress',(await arstate(other)).exam1.runs,JSON.parse(arText).state.exam1.runs);
 await browser.close();
 // Verify single-question feedback for every Diagnostics exam item type while preserving the main persistence fixture.
 await beginDX(p,'boss-a');
 for(const type of ['mc','multi','order','num','hotspot']){
  const pos=await p.evaluate(type=>__DX.state.exams['boss-a'].active.order.findIndex(id=>__DX.ITEMS[id].type===type),type);assert.ok(pos>=0,type);
  await p.locator('[data-act="goq"][data-k="'+pos+'"]').click();it=await currentDX(p);
  if(type==='mc')await p.locator('input[data-in="mc"][value="'+it.answer+'"]').check();
  if(type==='multi'){for(const a of it.answer)await p.locator('input[data-in="multi"][value="'+a+'"]').check();await p.locator('[data-act="check-exam"]').click();}
  if(type==='order'){while(true){const seq=await p.evaluate(()=>{const a=__DX.state.exams['boss-a'].active;const id=a.order[a.idx];return a.answers[id]?.seq||a.views[id].opt;});let target=seq.findIndex((v,i)=>v!==i);if(target<0)break;let at=seq.indexOf(target);await p.locator('[data-act="mv"][data-k="'+at+'"][data-d="-1"]').click();}if(await p.locator('[data-act="lock-order"]').count())await p.locator('[data-act="lock-order"]').click();await p.locator('[data-act="check-exam"]').click();}
  if(type==='num'){for(let j=0;j<it.fields.length;j++)await p.locator('input[data-in="num"][data-i="'+j+'"]').fill(String(it.fields[j].answer));await p.locator('[data-act="check-exam"]').click();}
  if(type==='hotspot')await p.locator('.qbody [data-zone="'+it.answer+'"]').click();
  check('Diagnostics '+type+' exam question shows immediate feedback',/Correct/.test(await p.locator('.verdict').innerText()));
 }
 const attemptsBefore=await p.evaluate(()=>__DX.state.log.length);
 await p.locator('[data-act="submit-exam"]').click();await p.locator('#modal button').filter({hasText:/^Submit$/}).click();
 equal('Final exam submission does not double-count already checked answers',await p.evaluate(()=>__DX.state.log.length),attemptsBefore);
 await go(p,'#exam1');await p.waitForURL('**/aural-rehab/#exam1');check('Original Aural deep-link bookmarks still open their route',p.url().includes('/aural-rehab/#exam1'));
 await go(p,'');await p.screenshot({path:path.join(out,'homepage-desktop.png')});await p.setViewportSize({width:390,height:844});
 check('Homepage fits a phone without horizontal scrolling',await p.evaluate(()=>document.documentElement.scrollWidth<=innerWidth));await p.screenshot({path:path.join(out,'homepage-phone.png')});
 equal('No JavaScript errors in tested flows',errors,[]);
 await ctx.close();
 fs.writeFileSync(path.join(out,'site-results.json'),JSON.stringify({passed:checks.length,checks,errors},null,2));console.log('DONE',checks.length,'checks');
})().catch(async e=>{console.error(e);if(ctx)await ctx.close();process.exitCode=1});
