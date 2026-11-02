/* Exact source matches only. Changed teaching text falls back intact for editorial review. */
(function(){
  'use strict';
  function points(value){
    const source=String(value);
    return Object.hasOwn(window.DX_STUDY_OUTLINES,source)?window.DX_STUDY_OUTLINES[source]:[[source.replace(/\*\*/g,'')]];
  }
  function list(nodes,format,sub=false){
    return `<ul class="${sub?'study-subpoints':'study-points'}">${nodes.map(node=>`<li>${format(node[0])}${node[1]?.length?list(node[1],format,true):''}</li>`).join('')}</ul>`;
  }
  function render(value,format){return list(points(value),format);}
  function items(values,format){return list(values.flatMap(points),format);}
  window.DXStudyOutline={points,render,items};
})();
