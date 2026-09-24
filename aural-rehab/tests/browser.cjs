// End-to-end browser test in headless Chromium via Playwright (file:// URL, offline).
// Usage: node tests/browser.cjs   (PLAYWRIGHT from global npm; screenshots -> tests/screens/)
const path = require('path'), fs = require('fs'), os = require('os');
const { execSync } = require('child_process');
const pw = require(path.join(execSync('npm root -g').toString().trim(), 'playwright'));
const ROOT = path.join(__dirname, '..'), URL = 'file://' + path.join(ROOT, 'index.html');
const SHOTS = path.join(__dirname, 'screens'); fs.mkdirSync(SHOTS, { recursive: true });
let pass = 0, fail = 0; const log = [];
function ok(cond, name, extra) { if (cond) { pass++; log.push('  ok  ' + name); } else { fail++; log.push('  FAIL ' + name + (extra ? ' :: ' + extra : '')); } }

async function answerCurrent(page, mode) {
  // Answers whatever item is on screen with its FIRST option / a plausible entry. Returns item type.
  return page.evaluate((mode) => {
    const host = document.querySelector('#host') || document.querySelector('#rhost');
    const opt = host.querySelector('.opt');
    if (opt) { opt.click(); return 'choice'; }
    const num = host.querySelector('input[type=number]'); if (num) { num.value = '42'; num.dispatchEvent(new Event('input', { bubbles: true })); return 'num'; }
    const sels = host.querySelectorAll('select'); if (sels.length) { sels.forEach(s => { s.selectedIndex = 1; s.dispatchEvent(new Event('change', { bubbles: true })); }); return 'select'; }
    const ol = host.querySelector('.orderlist'); if (ol) { const b = [...host.querySelectorAll('.orderlist button')].find(x => !x.disabled); if (b) b.click(); return 'order'; }
    const ta = host.querySelector('textarea'); if (ta) return 'teach';
    return 'none';
  }, mode);
}

(async () => {
  const browser = await pw.chromium.launch();
  const ctx = await browser.newContext({ viewport: { width: 1280, height: 900 }, acceptDownloads: true });
  const page = await ctx.newPage();
  const errors = [], netReqs = [];
  page.on('pageerror', e => errors.push(e.message));
  page.on('console', m => { if (m.type() === 'error') errors.push('console: ' + m.text()); });
  page.on('request', r => { if (!r.url().startsWith('file:') && !r.url().startsWith('data:') && !r.url().startsWith('blob:')) netReqs.push(r.url()); });

  await page.goto(URL); await page.waitForSelector('.tile');
  ok(await page.title() === 'COMD 4590 Exam 1 Lab', 'page loads with title');

  // --- Boundary grading through the UI: 90 dB HL must be Severe ---
  const seed90 = await page.evaluate(() => { for (let s = 1; s < 5000; s++) { const it = L.gen.build('degreeValue', s, { boundaryOnly: true }); if (/<b>90 dB HL<\/b>/.test(it.q)) return s; } return null; });
  await page.evaluate((seed) => { L.engine.newSession('practice', 'Boundary check', [{ gen: 'degreeValue', seed: seed, opt: { boundaryOnly: true } }, { id: 's2.scale2' }, { id: 's1.def1' }, { id: 's2.scale3' }]); L.app.go('session'); }, seed90);
  await page.waitForSelector('#host .opt');
  await page.locator('#sessionConfidence').selectOption('h');
  await page.locator('#host .opt', { hasText: 'Profound' }).click();
  let verdict = await page.locator('.fb .verdict').textContent();
  ok(/Incorrect/.test(verdict), '90 dB HL answered "Profound" is graded incorrect', verdict);
  ok(await page.locator('.opt.right', { hasText: 'Severe' }).count() === 1, 'feedback marks Severe as the key for 90');
  ok(await page.locator('.opt .why').count() >= 4, 'per-option rationales shown after grading');
  const qlen1 = await page.evaluate(() => L.engine.currentSession().queue.length);
  ok(qlen1 === 5, 'wrong answer queued a retry (queue 4 -> 5)', String(qlen1));
  await page.screenshot({ path: path.join(SHOTS, 'desktop-feedback.png') });
  await page.locator('#nextBtn').click();
  // s2.scale2 (TF, key False)
  await page.waitForSelector('#host .opt');
  await page.locator('#host .opt', { hasText: 'False' }).click();
  ok(await page.locator('.fb').count() === 1, 'feedback appears immediately when the answer is selected');
  verdict = await page.locator('.fb .verdict').textContent();
  ok(/Correct/.test(verdict) && !/In/.test(verdict), 'TF item graded correct', verdict);

  // --- Persistence across reload mid-session ---
  const idxBefore = await page.evaluate(() => L.engine.currentSession().idx);
  await page.reload(); await page.goto(URL + '#session'); await page.waitForSelector('#host');
  const idxAfter = await page.evaluate(() => L.engine.currentSession().idx);
  ok(idxBefore === idxAfter, 'session resumes at same position after reload', idxBefore + ' vs ' + idxAfter);
  const nAttempts = await page.evaluate(() => JSON.parse(localStorage.getItem('comd4590-lab-v2')).attempts.length);
  ok(nAttempts === 2, 'two attempts persisted in localStorage', String(nAttempts));
  await page.evaluate(() => { L.engine.endSession(); });

  // --- Practice session: all item types render and submit ---
  await page.evaluate(() => { const ids = ['s1.onset2', 's5.pierre1', 's9.dots3', 'c2.1', 's1.need3', 's1.tb1', 's5.photo.apert-1']; L.engine.newSession('practice', 'Types', ids.map(id => ({ id })), { noRetry: true }); L.app.go('session'); });
  await page.waitForSelector('text=Types');
  const types = [];
  for (let i = 0; i < 7; i++) {
    await page.waitForSelector('#host .item');
    const tp = await answerCurrent(page);
    types.push(tp);
    if (tp === 'teach') { const ix = await page.evaluate(() => L.engine.currentSession().idx); await page.locator('button', { hasText: 'Reveal model answer' }).click(); await page.locator('button', { hasText: 'Nailed it' }).click(); await page.waitForFunction((i) => { const s = L.engine.currentSession(); return !s || s.idx > i; }, ix); continue; }
    if (!await page.locator('.fb').count()) {
      const sub = page.locator('button[data-conf="m"]');
      if (await sub.isDisabled()) { await answerCurrent(page); }
      await sub.click();
    }
    await page.waitForSelector('.fb');
    if (i === 2) await page.screenshot({ path: path.join(SHOTS, 'desktop-dots-feedback.png') });
    const idxNow = await page.evaluate(() => L.engine.currentSession().idx);
    await page.locator('#nextBtn').click();
    await page.waitForFunction((i) => { const s = L.engine.currentSession(); return !s || s.idx > i; }, idxNow);
  }
  ok(types.join(',').includes('select') && types.includes('order') && types.includes('num') && types.includes('teach') && types.includes('choice'), 'match/parts/order/num/teach/choice types all rendered and submitted', types.join(','));
  const teachCounted = await page.evaluate(() => JSON.parse(localStorage.getItem('comd4590-lab-v2')).attempts.some(a => a.i === 's1.tb1'));
  ok(!teachCounted, 'teach-back not recorded as a graded attempt');
  await page.evaluate(() => { const s = L.engine.currentSession(); if (s) L.engine.endSession(); });

  // --- Original mock: immediate feedback, navigation, flag, reload, aggregate ---
  await page.goto(URL + '#mock'); await page.locator('button[data-size="35"]').click();
  await page.waitForSelector('#ng button');
  ok(await page.locator('#ng button').count() === 35, 'mock has 35 questions');
  for (let i = 0; i < 5; i++) { await answerCurrent(page, 'mock'); if (!await page.locator('.fb').count()) await page.getByRole('button', { name: 'Check this answer now' }).click(); ok(await page.locator('.fb').count() === 1, 'mock q' + (i + 1) + ': immediate feedback'); await page.locator('#next').click(); await page.waitForSelector('#host .item'); }
  await page.locator('#flag').click();
  await page.locator('#prev').click();
  const answeredBefore = await page.evaluate(() => Object.keys(L.store.load().mockActive.answers).length);
  await page.screenshot({ path: path.join(SHOTS, 'desktop-mock.png') });
  await page.reload(); await page.goto(URL + '#mock/take'); await page.waitForSelector('#ng button');
  const answeredAfter = await page.evaluate(() => Object.keys(L.store.load().mockActive.answers).length);
  ok(answeredBefore === answeredAfter && answeredAfter >= 4, 'mock answers survive reload', answeredBefore + '/' + answeredAfter);
  ok(await page.locator('#ng button.flag').count() === 1, 'flag survives reload');
  page.once('dialog', d => d.accept());
  await page.locator('#submit').click();
  await page.waitForSelector('#rg button');
  const res = await page.evaluate(() => { const m = L.store.load().mocks.slice(-1)[0]; return { total: m.total, blanks: m.items.filter(x => x.blank).length, blankWrong: m.items.filter(x => x.blank).every(x => !x.ok) }; });
  ok(res.total === 35 && res.blanks >= 29 && res.blankWrong, 'mock submitted; blanks counted wrong', JSON.stringify(res));
  ok(await page.locator('.fb').count() === 1, 'aggregate review retains the immediate feedback');
  ok(await page.locator('text=Drill missed concepts').count() === 1, 'remediation offered');
  await page.screenshot({ path: path.join(SHOTS, 'desktop-mock-results.png') });

  // --- Boss drill ---
  await page.goto(URL + '#boss'); await page.locator('button[data-boss="b4"]').click();
  ok(await page.locator('text=Hint').count() === 0, 'no hint button inside a Boss run');
  for (let i = 0; i < 3; i++) { await page.waitForSelector('#host .item'); await answerCurrent(page); if (!await page.locator('.fb').count()) { const sub = page.locator('button[data-conf="h"]'); if (await sub.isDisabled()) await answerCurrent(page); await sub.click(); } await page.locator('#nextBtn').click(); }
  page.once('dialog', d => d.accept()); await page.locator('#endS').click();
  await page.waitForSelector('text=Run ended early');
  const boss = await page.evaluate(() => L.store.load().boss.b4);
  ok(boss && boss.runs.length === 1 && boss.runs[0].answered === 3 && boss.runs[0].total >= 25 && boss.runs[0].complete === false && boss.best === 0, 'boss ended early: recorded as incomplete, scored out of the full run, no best score', JSON.stringify(boss));
  ok(await page.locator('text=Run ended early').count() === 1, 'early-exit summary says the run ended early');

  // --- Export, then import into a clean context ---
  await page.goto(URL + '#data');
  const [dl] = await Promise.all([page.waitForEvent('download'), page.locator('#exp').click()]);
  const tmp = path.join(os.tmpdir(), 'lab-export.json'); await dl.saveAs(tmp);
  const exported = JSON.parse(fs.readFileSync(tmp, 'utf8'));
  ok(exported.app === 'comd4590-lab' && exported.state.attempts.length > 5 && exported.state.mocks.length === 1, 'export file contains attempts and mock');
  const ctx2 = await browser.newContext(); const p2 = await ctx2.newPage(); p2.on('pageerror', e => errors.push('ctx2: ' + e.message));
  await p2.goto(URL + '#data'); await p2.setInputFiles('#file', tmp); await p2.waitForFunction(() => document.querySelector('#impMsg').textContent.length > 0);
  const n2 = await p2.evaluate(() => L.store.load().attempts.length);
  ok(n2 === exported.state.attempts.length, 'import restores all attempts in a fresh browser profile', n2 + ' vs ' + exported.state.attempts.length);
  const legacy = path.join(os.tmpdir(), 'comd4590-legacy-test-fixture.json');
  fs.writeFileSync(legacy, JSON.stringify({ records: { 'fas-synthetic': { attempts: 3, correct: 1 } }, concepts: {} }));
  await p2.setInputFiles('#file', legacy); await p2.waitForFunction(() => /prior signal/.test(document.querySelector('#impMsg').textContent));
  const prior = await p2.evaluate(() => { const st = L.engine.conceptStats(); return { fas: st.fas.prior && st.fas.prior.miss, status: st.fas.status }; });
  ok(prior.fas >= 2 && prior.status === 'new', 'legacy drill import = prior signal, no mastery', JSON.stringify(prior));
  await ctx2.close();

  // --- Responsive layouts: no horizontal scroll ---
  for (const vp of [[390, 844, 'phone'], [820, 1180, 'tablet'], [1440, 900, 'wide']]) {
    const c = await browser.newContext({ viewport: { width: vp[0], height: vp[1] } }); const p = await c.newPage(); p.on('pageerror', e => errors.push(vp[2] + ': ' + e.message));
    for (const r of ['home', 'guide/s2', 'guide/s5']) {
      await p.goto(URL + '#' + r); await p.waitForTimeout(150);
      const over = await p.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);
      ok(over <= 1, vp[2] + ' ' + r + ' has no horizontal page scroll', 'overflow ' + over);
    }
    await p.evaluate(() => { L.engine.newSession('practice', 'Layout', [{ id: 'c2.1' }, { id: 's6.abr3' }]); L.app.go('session'); });
    await p.waitForSelector('#host .item'); await p.waitForTimeout(100);
    const over2 = await p.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);
    ok(over2 <= 1, vp[2] + ' case item with audiogram fits width', 'overflow ' + over2);
    await p.screenshot({ path: path.join(SHOTS, vp[2] + '-case.png'), fullPage: true });
    await p.goto(URL + '#home'); await p.screenshot({ path: path.join(SHOTS, vp[2] + '-home.png') });
    await c.close();
  }

  // --- Keyboard: number keys choose, Enter advances ---
  {
    const c = await browser.newContext(); const p = await c.newPage(); p.on('pageerror', e => errors.push('kbd: ' + e.message));
    await p.goto(URL); await p.evaluate(() => { L.engine.newSession('practice', 'Keys', [{ id: 's1.def1' }, { id: 's1.char2' }], { noRetry: true }); L.app.go('session'); });
    await p.waitForSelector('#host .opt'); await p.keyboard.press('2');
    ok(await p.locator('#host .opt.sel').count() === 1, 'number key selects an option');
    await p.waitForSelector('#nextBtn'); await p.keyboard.press('Enter');
    await p.waitForFunction(() => L.engine.currentSession().idx === 1);
    ok(true, 'Enter advances to the next question');
    // --- Reset with confirmation ---
    await p.goto(URL + '#data'); p.on('dialog', d => d.accept()); await p.locator('#reset').click(); await p.waitForTimeout(200);
    ok(await p.evaluate(() => L.store.load().attempts.length) === 0, 'reset (double-confirmed) clears v2 progress');
    await c.close();
  }
  // --- Old-lab storage keys survive and are auto-detected as prior signal ---
  {
    const c = await browser.newContext(); const p = await c.newPage(); p.on('pageerror', e => errors.push('legacy: ' + e.message));
    const drill = JSON.stringify({ records: { 'fas-synthetic': { attempts: 3, correct: 1 } }, concepts: {} });
    await p.goto('file://' + path.join(ROOT, 'tests', 'blank.html'));
    await p.evaluate((d) => { localStorage.setItem('comd4590-lecture2-drill-v1', d); localStorage.setItem('comd4590-study-lab-progress-v1', JSON.stringify({ 'exam-one-mock': { score: 52, total: 70 } })); localStorage.setItem('comd4590-guided-progress-v1', JSON.stringify({ concepts: { 'e1-snr': { attempts: 2, correct: 1 } }, modules: {} })); }, drill);
    await p.goto(URL); await p.waitForSelector('.tile');
    const r = await p.evaluate(() => ({ drill: !!localStorage.getItem('comd4590-lecture2-drill-v1'), quiz: localStorage.getItem('comd4590-study-lab-progress-v1'), leg: L.store.load().legacy && L.store.load().legacy.sources[0], fas: L.engine.conceptStats().fas.prior }));
    ok(r.drill && /52/.test(r.quiz), 'old storage keys untouched by v2');
    ok(/auto-detected/.test(r.leg || '') && r.fas && r.fas.miss >= 2, 'old progress auto-detected as prior signal', JSON.stringify(r).slice(0, 200));
    await c.close();
  }
  // --- Localhost operation ---
  {
    const { spawn } = require('child_process');
    const srv = spawn('python3', ['-m', 'http.server', '8765', '--bind', '127.0.0.1'], { cwd: ROOT, stdio: 'ignore' });
    await new Promise(r => setTimeout(r, 900));
    const c = await browser.newContext(); const p = await c.newPage(); const ext = []; p.on('pageerror', e => errors.push('http: ' + e.message));
    p.on('request', r => { if (!r.url().startsWith('http://127.0.0.1:8765')) ext.push(r.url()); });
    await p.goto('http://127.0.0.1:8765/index.html#guide/s5'); await p.waitForSelector('.guide');
    await p.evaluate(() => { L.engine.newSession('practice', 'HTTP', [{ id: 's5.photo.treacher-1' }], { noRetry: true }); L.app.go('session'); });
    await p.waitForSelector('#host img');
    const loaded = await p.waitForFunction(() => { const i = document.querySelector('#host img'); return i && i.complete && i.naturalWidth > 0; }, null, { timeout: 8000 }).then(() => true, () => false);
    ok(loaded, 'served over localhost: page and images load');
    ok(ext.length === 0, 'localhost run makes no external requests', ext.join(','));
    await c.close(); srv.kill();
  }

  ok(errors.length === 0, 'no page errors or console errors', errors.join(' | '));
  ok(netReqs.length === 0, 'no network requests (fully offline)', netReqs.join(', '));
  await browser.close();
  console.log(log.join('\n'));
  console.log('\n' + pass + ' passed, ' + fail + ' failed');
  process.exit(fail ? 1 : 0);
})().catch(e => { console.error(e); console.log(log.join('\n')); process.exit(1); });
