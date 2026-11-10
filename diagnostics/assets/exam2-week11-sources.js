(function(){
'use strict';
const config=window.DXExamConfig, previous=config.sourceFigure;
const citations={
  'e2-resonance':'Week 11 Resonance, slides 2, 5 and 8',
  'e2-speaking-valves':'Week 11 Speaking Valves, slides 5, 6 and 7'
};
config.sourceFigure=chapter=>citations[chapter.id]
  ? `<section class="card e2-original"><h2>Source figures and demonstrations</h2><p>Consult ${citations[chapter.id]} for the supplied figures. The final slide lists the course demonstrations.</p></section>`
  : previous(chapter);
})();
