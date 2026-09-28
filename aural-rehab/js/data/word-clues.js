/* Study-only Greek/Latin word clues. Do not use these to infer an answer before checking.
   Word parts: NLM MedlinePlus https://medlineplus.gov/appendixa.html
   BOR and CHARGE name expansions: https://medlineplus.gov/genetics/condition/branchiootorenal-branchiootic-syndrome/
   and https://medlineplus.gov/genetics/condition/charge-syndrome/ .
   Condition associations follow this lab's cited Lecture 2 and 9/08 transcript. */
(function(root){
  'use strict';
  var L=root.L=root.L||{},esc=L.util.esc;
  // Each entry separates what the term literally reveals from the course association.
  var clues={
    rubella:['Congenital rubella','Congenital = present before/around birth in this course; the name rubella does not reveal the affected organ.','Remember the course association: progressive sensorineural loss.'],
    cmv:['Cytomegalovirus (CMV)','cyto- = cell; megalo- = large. The name refers to enlarged infected cells, not to an ear structure.','A newborn can pass screening and develop progressive or delayed hearing loss.'],
    toxo:['Toxoplasmosis','The name does not tell you where the hearing loss occurs. retin- points to the retina when retinal disease is listed.','This is a parasitic infection; retinal disease is another clue.'],
    syphilis:['Syphilis','The disease name does not encode an organ or hearing-loss type.','The lecture emphasizes late-onset, progressive sensorineural loss.'],
    hiv:['HIV','HIV = human immunodeficiency virus; immuno- points to the immune system.','In this course, the hearing-loss association is secondary to ototoxic treatment, not a direct word-root prediction.'],
    hsv:['HSV','HSV = herpes simplex virus; the initials name the virus, not the ear location.','The lecture links perinatal exposure and central nervous system involvement with possible sensorineural loss.'],
    rh:['Rh incompatibility','Rh names a blood-group factor; incompatibility means the maternal and fetal blood factors differ.','Maternal antibodies can destroy fetal red blood cells, leading to jaundice and possible hearing injury.'],
    anoxia:['Anoxia','an- = without; oxy- = oxygen.','Lack of oxygen around birth is the mechanism; the course highlights steep high-frequency sensorineural loss.'],
    hemorrhage:['Intracranial hemorrhage','intra- = within; crani- = skull/head; hemo- = blood; -rrhage = bleeding.','This is bleeding inside the skull, a prematurity-associated cause, not a middle-ear bleed.'],
    meningitis:['Meningitis','mening- = the membranes around brain and spinal cord; -itis = inflammation.','Bacterial meningitis can injure the inner ear and cause sensorineural loss.'],
    'postnatal-list':['Ototoxic exposure','oto- = ear; toxic = harmful. post- = after; natal = birth.','A postnatal medication exposure can injure the hearing system.'],
    bilirubin:['Hyperbilirubinemia','hyper- = excessive; bilirubin = pigment formed during red-cell breakdown; -emia = blood condition.','Excess bilirubin can injure the nervous system; kernicterus is the severe brain injury associated with jaundice.'],
    apert:['Apert syndrome','Apert is a person’s name. syn- = together + dactyl- = digits: syndactyly means fused fingers/toes.','That limb clue distinguishes Apert from Crouzon; craniosynostosis is premature fusion of skull bones.'],
    bor:['Branchio-oto-renal (BOR)','branchio- = embryonic branchial arch/neck; oto- = ear; renal = kidney.','The name itself points to neck clefts or cysts, ear findings and kidney malformations.'],
    charge:['CHARGE syndrome','CHARGE is an acronym: Coloboma, Heart, choanal Atresia, growth/development, Genital, Ear. Choanal atresia means a blocked nasal opening.','The course also describes short, wide, floppy pinnas with reduced cartilage; this is a local ear feature.'],
    cdls:['Cornelia de Lange syndrome','Cornelia de Lange is a person’s name. hypo- = under + -plasia = growth: hypoplasia means underdevelopment.','Use the facial features, growth and developmental findings; the name alone does not locate the disorder.'],
    crouzon:['Crouzon syndrome','Crouzon is a person’s name. cranio- = skull/head; syn- = together: craniosynostosis is early fusion of skull bones.','Compare with Apert: Crouzon lacks Apert’s fused digits.'],
    down:['Down syndrome','Down is a person’s name. tri- = three: trisomy 21 means three copies of chromosome 21.','ot(o)- = ear + -itis = inflammation; otitis media is a middle-ear clue to conductive loss.'],
    fas:['Fetal alcohol syndrome','Fetal = before birth; alcohol names the exposure. Philtrum is the groove between nose and upper lip.','A smooth philtrum and thin upper lip help recognize this pattern; middle-ear disease explains the emphasized conductive component.'],
    goldenhar:['Goldenhar syndrome','Goldenhar is a person’s name. hemi- = half; micro- = small; -otia = ear: hemifacial underdevelopment and microtia are descriptive clues.','The course emphasizes one-sided facial and ear findings with conductive loss.'],
    jbs:['Johanson-Blizzard syndrome','Johanson and Blizzard are names. hypo- = under + -plasia = growth: nasal-ala hypoplasia means underdeveloped nasal rims.','Connect that facial clue with pancreatic insufficiency and severe/profound sensorineural loss.'],
    pierre:['Pierre Robin sequence','Pierre Robin is a name. micro- = small + gnath- = jaw: micrognathia means a small lower jaw.','Follow the sequence: small jaw → displaced tongue → cleft palate/airway effects → recurrent middle-ear disease.'],
    stickler:['Stickler syndrome','Stickler is a person’s name. The useful clue is collagen: a structural protein in connective tissues, including cartilage, eyes and joints.','The 9/08 class recording links disrupted collagen formation to severe myopia/retinal risk, early joint problems and hearing loss. This differs from CHARGE’s reduced pinna cartilage.'],
    treacher:['Treacher Collins syndrome','Treacher Collins is a name. micro- = small + -otia = ear; micro- + gnath- = jaw.','Microtia and micrognathia fit bilateral cheek/jaw and external-ear underdevelopment; the conductive component is emphasized.'],
    turner:['Turner syndrome','Turner is a person’s name. The name does not encode the chromosome change or an affected organ.','Use the course’s sex-chromosome finding and the physical cluster: short stature, webbed neck and low hairline.'],
    usher:['Usher syndrome','Usher is a person’s name. retin- = retina; pigmentosa refers to pigment: retinitis pigmentosa affects the eye’s light-sensitive tissue.','Think hearing plus progressive vision loss. Despite the -itis ending, this is retinal degeneration, not an ear infection.'],
    waardenburg:['Waardenburg syndrome','Waardenburg is a person’s name. hetero- = different + chrom- = color: heterochromia describes different-colored irises.','White forelock and iris pigment clues accompany the course’s congenital, nonprogressive sensorineural pattern.'],
    pendred:['Pendred syndrome','Pendred is a person’s name. A goiter is an enlarged thyroid; vestibular refers to the inner-ear balance region.','Pair the thyroid and enlarged vestibular aqueduct clues with progressive sensorineural loss.']
  };
  function row(k){var d=clues[k];return '<tr><th scope="row">'+esc(d[0])+'</th><td>'+esc(d[1])+'</td><td>'+esc(d[2])+'</td></tr>';}
  function table(keys){return '<div class="tscroll"><table class="t small"><tr><th>Condition</th><th>Decode the words</th><th>Connect it to the course</th></tr>'+keys.map(row).join('')+'</table></div>'+
    '<p class="small muted">A word clue locates a structure or mechanism; it does not prove a diagnosis or hearing-loss type. Many syndrome names are eponyms. Greek and Latin parts are grouped together here as medical word roots. <a href="https://medlineplus.gov/appendixa.html" target="_blank" rel="noopener">NLM word-part reference</a>; <a href="https://medlineplus.gov/genetics/condition/branchiootorenal-branchiootic-syndrome/" target="_blank" rel="noopener">BOR</a>; <a href="https://medlineplus.gov/genetics/condition/charge-syndrome/" target="_blank" rel="noopener">CHARGE</a>. Course associations follow the lecture citations above.</p>';}
  var causeKeys=['rubella','cmv','toxo','syphilis','hiv','hsv','rh','anoxia','hemorrhage','meningitis','postnatal-list','bilirubin'];
  var syndromeKeys=['apert','bor','charge','cdls','crouzon','down','fas','goldenhar','jbs','pierre','stickler','treacher','turner','usher','waardenburg','pendred'];
  L.GUIDE.s4.push({id:'s4-word-clues',h:'Decode condition terms',tier:1,src:['L2-25','L2-34','L2-37','L2-39','T0901'],c:causeKeys,html:table(causeKeys)});
  L.GUIDE.s5.push({id:'s5-word-clues',h:'Decode every taught syndrome and its feature terms',tier:1,src:['L2-42','L2-44','L2-47','L2-61','L2-66','L2-73','L2-77','T0908'],c:syndromeKeys,html:table(syndromeKeys)});
  function keysForItem(it){
    var keys=[];
    function add(k){if(clues[k]&&keys.indexOf(k)<0)keys.push(k);}
    add(it.c);
    (it.also||[]).forEach(add);
    if(it.c==='syndromic-overview' || it.c==='syndrome-photo'){
      var s=(it.q||'')+' '+(it.x||'');
      var names={apert:/\bApert\b/i,bor:/\bBOR\b|branchio-oto-renal/i,charge:/\bCHARGE\b/i,cdls:/Cornelia de Lange|\bCdLS\b/i,crouzon:/\bCrouzon\b/i,down:/\bDown syndrome\b/i,fas:/fetal alcohol|\bFAS\b/i,goldenhar:/\bGoldenhar\b/i,jbs:/Johanson.Blizzard|\bJBS\b/i,pierre:/Pierre Robin/i,stickler:/\bStickler\b/i,treacher:/Treacher Collins/i,turner:/\bTurner\b/i,usher:/\bUsher\b/i,waardenburg:/\bWaardenburg\b/i,pendred:/\bPendred\b/i};
      syndromeKeys.forEach(function(k){if(names[k].test(s))add(k);});
    }
    return keys.slice(0,3);
  }
  function feedbackHTML(it){var keys=keysForItem(it);if(!keys.length)return '';
    return '<div class="word-clue"><b>Word clue</b>'+keys.map(function(k){var d=clues[k];return '<p><b>'+esc(d[0])+':</b> '+esc(d[1])+' <span class="muted">'+esc(d[2])+'</span></p>';}).join('')+'</div>';
  }
  L.wordClues={clues:clues,feedbackHTML:feedbackHTML,keysForItem:keysForItem};
})(typeof window!=='undefined'?window:globalThis);
