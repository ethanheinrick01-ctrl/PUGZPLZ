/* Fixed source-balanced practice forms. Historical format; current weights unconfirmed. */
(function(){
const T=window.DX_EXAM1,used=new Set();
function select(type,ids){return ids.map(id=>{const q=T.items.find(item=>item.id===id);if(!q||q.type!==type||used.has(id))throw Error('Invalid or repeated '+type+' form item '+id);used.add(id);return q;});}
// Select current component families explicitly. Chapter order alone would keep
// choosing each chapter's first module and omit the videos, psychometrics,
// narratives, reporting and GFTA recording. These forms sample practice items.
const aTF=select('tf',[
 'm1-reas-02','m6-bc-03','m4-asked-02','m10-an-04','m12-p-01',
 'm15-dd-02','m16-t-03','e1-add-013','w6-cas-013','m3-acc-03',
 'm7-ci-02','m4-cld-03','m9-comp-02','m13-four-04','m15-in-02',
 'm17-v-02','e1-add-017','w6-cas-014','m2-eth-02','m8-six-05'
]);
const aMC=select('mc',[
 'm1-proc-02','m7-sc-02','m4-asked-01','m11-s-01','m14-smc-03',
 'm15-sa-03','m17-v-03','e1-add-010','w6-cas-006','m2-int-02',
 'm8-ss-01','m4-int-02','m10-sh-01','m14-ddk-01','m15-ph-01',
 'm16-t-01','e1-add-011','w6-cas-008','m3-q-02','m5-man-01'
]);
const bTF=select('tf',[
 'm2-int-04','m5-acc-04','m4-diff-01','m9-hist-03','m14-te-02',
 'm15-ra-04','m16-i-02','e1-add-015','w6-cas-016','m3-q-04',
 'm6-raw-02','m4-da-02','m9-inf-02','m14-tr-04'
]);
const bMC=select('mc',[
 'm3-val-02','m6-bc-04','m4-int-01','m9-set-02','m14-doc-01',
 'm15-na-02','m17-s-02','e1-add-009','w6-cas-010','m2-ebp-03',
 'm8-type-02','m10-rep-01','m17-n-01','e1-add-012'
]);
const find=id=>{if(!T.items.some(q=>q.id===id))throw Error('Missing form question '+id);return{id,points:4};};
window.DX_COURSE_FORMS=[
 {id:'exam1-a-20261001',title:'Exam One Mock A',description:'Part I: 20 true/false × 2. Part II: 20 multiple choice × 3. Uses the historical Language Disorders Test 2 format across all nine current chapters.',items:aTF.map(q=>({id:q.id,points:2})).concat(aMC.map(q=>({id:q.id,points:3})))},
 {id:'exam1-b-20261001',title:'Exam One Mock B',description:'Part I: 14 true/false × 2. Part II: 14 multiple choice × 3. Part III: 7 matching components. Part IV: 7 listing components. Part V: 4 numerical procedures × 4. Uses the historical Final response mix with an explicit practice allocation.',items:bTF.map(q=>({id:q.id,points:2})).concat(bMC.map(q=>({id:q.id,points:3})),[{id:'w6-cas-017',points:3},{id:'e1-add-022',points:4},{id:'w6-cas-018',points:3},{id:'e1-add-027',points:4}],['m6-ca-03','m18-tr-01','m15-ra-01','m14-tr-01'].map(find))}
];
})();
