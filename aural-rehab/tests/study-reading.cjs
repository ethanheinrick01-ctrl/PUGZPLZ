const assert = require('assert');
const fs = require('fs');
const path = require('path');
const vm = require('vm');
const {loadLab} = require('./load.cjs');
const lab = loadLab().L, reading = lab.studyReading, data = lab.EXAM2_DATA;
let passed = 0;
function test(name, check) { check(); passed++; console.log('PASS ' + name); }

test('nested authored lists retain hierarchy, order and inline semantic markup', () => {
  const nodes = [{text:'Parent', ordered:true, children:['First', {text:'Second', children:['<strong class="e2-term">Term</strong>']}]}];
  const before = JSON.stringify(nodes), html = reading.points(nodes);
  assert(html.includes('<ol class="note-subpoints"><li>First</li><li>Second<ul'));
  assert(html.includes('<strong class="e2-term">Term</strong>'));
  assert.equal(JSON.stringify(nodes), before);
});

test('emphasis applies to exact authored passages without rewriting or mutating notes', () => {
  const nodes = [{text:'Parent fact.', children:['A selected distinction.', 'An untouched distinction.']}];
  const before = JSON.stringify(nodes), once = reading.highlight(nodes, 'selected distinction', 'ART1006');
  assert.equal(JSON.stringify(nodes), before);
  assert(reading.points(once).includes('<mark class="e2-emphasis" data-emphasis-source="ART1006">selected distinction</mark>'));
  assert.deepEqual(reading.highlight(once, 'selected distinction', 'ART1006'), once);
  assert.deepEqual(reading.highlight(nodes, 'absent phrase', 'ART1006'), nodes);
  assert.equal(once[0].children[1], nodes[0].children[1]);
});

test('all 20 reviewed emphasis selections resolve to section content and transcript references', () => {
  assert.equal(reading.highlights.length, 20);
  reading.highlights.forEach(([id, index, phrase, source]) => {
    const section = data.topics.find(t => t.id === id).sections[index];
    const highlighted = Array.from(reading.points(section.outline).matchAll(/<(?:mark|strong) class="e2-emphasis"[^>]*>([^<]+)<\/(?:mark|strong)>/g), match => match[1]);
    assert(highlighted.some(text => text.includes(phrase)), id + ' missing highlighted phrase');
    assert((section.outlineSources || section.sources).includes(source), id + ' missing source');
    assert(data.sourcePages[source] && data.sourcePages[source].text.length > 100, source);
  });
});

test('every Focus group has authored subpoints and only supported emphasis references', () => {
  let groups = 0, marks = 0;
  data.finalMocks.groups.forEach(group => group.noteSections.forEach(section => {
    groups++;
    assert(section.outline.every(point => point.text && point.children.length));
    const html = reading.points(section.outline);
    for (const match of html.matchAll(/data-emphasis-source="([^"]+)"/g)) {
      marks++;
      assert(group.sources.includes(match[1]));
      assert(data.sourcePages[match[1]]);
    }
  }));
  assert.equal(groups, 15);
  assert.equal(marks, 9);
  assert(!reading.points(data.finalMocks.groups.find(g => g.id === 'AT').noteSections[0].outline).includes('data-emphasis-source'));
  assert(!reading.points(data.finalMocks.groups.find(g => g.id === 'VS').noteSections.flatMap(s => s.outline)).includes('e2-emphasis'));
});

test('edited, renamed or unknown Focus sources fall back; reordered sections retain the correct outline', () => {
  const group = data.finalMocks.groups.find(g => g.id === 'CI');
  for (const section of [...group.noteSections].reverse()) {
    assert.equal(reading.focusOutline(group.id, section), section.outline);
  }
  const source = group.noteSections[0];
  assert.equal(reading.focusOutline(group.id, {...source, title:'Updated heading'}), null);
  assert.equal(reading.focusOutline(group.id, {...source, points:[...source.points, 'Updated teaching fact.']}), null);
  assert.equal(reading.focusOutline('new-group', source), null);
  assert.equal(reading.focusOutline('constructor', source), null);
});

test('Guide conversion preserves every original lesson and media link target', () => {
  const root = path.join(__dirname, '..');
  const scripts = Array.from(fs.readFileSync(path.join(root, 'index.html'), 'utf8').matchAll(/<script src="([^"]+)"/g), m => m[1].split('?')[0]);
  const context = vm.createContext({window:undefined, localStorage:{getItem(){return null;},setItem(){},removeItem(){}}});
  let before;
  for (const script of scripts) {
    if (script.endsWith('app.js') || script.includes('/ui/')) continue;
    if (script === 'js/data/study-reading.js') before = JSON.parse(JSON.stringify(context.L.GUIDE));
    vm.runInContext(fs.readFileSync(path.join(root, script), 'utf8'), context);
    if (before) break;
  }
  const after = Object.values(context.L.GUIDE).flat();
  const hrefs = html => Array.from(html.matchAll(/<a\b[^>]*href="([^"]+)"/g), m => m[1]);
  let fullLessonLinks = 0;
  Object.values(before).flat().filter(card => card.id.startsWith('e2-')).forEach(card => {
    const rendered = after.find(current => current.id === card.id);
    const original = hrefs(card.html), actual = hrefs(rendered.html);
    original.forEach(href => assert(actual.includes(href), card.id + ' lost ' + href));
    if (original.includes('#exam2/topic/' + card.id.slice(3, -6))) fullLessonLinks++;
  });
  assert.equal(fullLessonLinks, 16);
});

console.log(`${passed} reading suites passed`);
