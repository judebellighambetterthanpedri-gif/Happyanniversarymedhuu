// ✏️ Yahan apni cheezein badlo
const CFG={
  code:"29112023",
  since:"2023-11-29T13:58:00",
  letter:"Meri Jaan,\n\njab bhi mai apke paas rehta hu mera sara dukh wanish ho jata hai I'm the most happy person with you medhuu . i really love you so much I'll forever be only yours 🥹🙈 I'm only yours forever.\n\nHappy Anniversary bubuu .\nYour ayushee  ❤️",
  reasons:[
    "i love your laugh 🙈.",
    "im feel very comfortable and safe with youu.",
    "i trust you most .",
    "were soulmates medhuu 😚🥹.",
    "motuuu i lobbuuuu 😚.",
    "Tum jahan ho, wahin ghar lagta hai.",
    "Tumhara gussa bhi cute lagta hai (kabhi kabhi nhi lgta hai 😭🥹🤭).",
    "always be only mine 👉🏻👈🏻🫂🫂🥺.",
    "you're the most precious person in my life 🥹🙈 .",
    "fuckk youu sexyy 🤭🙈."
  ],
  final:" Happy anniversary mommy, I love you yrr 🥹🤭 ❤️",
  letters:[
    ["\ud83d\udcad","Jab meri yaad aaye","i miss you soo much bubuu aajao 🫂 hug mee tightly muahhh 💋💋💋."],
    ["\u2615","Jab pet dard ho rha ho","babuu hot water bag lelo 🥺aur dairy products mat khana aur zyada dard hone pe dava kha lo."],
    ["\ud83d\udd4a\ufe0f","Jab hum jhagda karein","Sabse pehle sorry, shayad meri galti thi. Aur agar nahi thi, tab bhi jeetne se zyada zaroori tum ho.I really love you medhuu."],
    ["\ud83c\udf19","😉","lets kiss mommyy 💋💋💋youre very sexy mommyy i love your ass your pink pussy 🙈🙈i wanna suck you 🙈🤭."]
  ]
};
const $=id=>document.getElementById(id);
// animated title: letter-by-letter
(function(){const t=$('title'),txt='Happy Anniversary, Jaan';let i=0;const base=1.1,step=.09;
  txt.split(' ').forEach((w,wi,arr)=>{const wd=document.createElement('span');wd.className='wd';wd.setAttribute('aria-hidden','true');
    [...w].forEach(c=>{const s=document.createElement('span');s.className='ch';s.textContent=c;s.style.animationDelay=(base+i++*step)+'s';wd.appendChild(s)});
    t.appendChild(wd);if(wi<arr.length-1){t.appendChild(document.createTextNode(' '));i++}});
  const h=document.createElement('span');h.className='hrt';h.setAttribute('aria-hidden','true');h.textContent='❤️';h.style.animationDelay=(base+i*step+.2)+'s';t.appendChild(h)})();
let ac;
function tone(f,t='sine',d=.5,v=.18){try{ac=ac||new(window.AudioContext||window.webkitAudioContext)();const o=ac.createOscillator(),g=ac.createGain();o.type=t;o.frequency.value=f;g.gain.setValueAtTime(v,ac.currentTime);g.gain.exponentialRampToValueAtTime(.001,ac.currentTime+d);o.connect(g);g.connect(ac.destination);o.start();o.stop(ac.currentTime+d)}catch(e){}}
function fx(txt,x,y,cls=''){const e=document.createElement('div');e.className='fx '+cls;e.textContent=txt;e.style.left=x+'px';e.style.top=y+'px';e.style.setProperty('--dx',(Math.random()*80-40)+'px');document.body.appendChild(e);setTimeout(()=>e.remove(),1600)}
// lock
function unlock(){
  const v=$('code').value.trim().toLowerCase();
  if(v===CFG.code){
    $('lock').classList.add('open');[523,659,784,1047].forEach((f,i)=>setTimeout(()=>tone(f,'sine',.6),i*140));
    $('app').classList.remove('hidden');
    setTimeout(()=>$('lock').classList.add('hidden'),1700);
  }else{
    $('err').textContent='Galat code, jaan. Ek baar aur try karo 🥰😚';
    const b=$('box');b.classList.remove('shake');void b.offsetWidth;b.classList.add('shake');
  }
}
$('code').addEventListener('keydown',e=>{if(e.key==='Enter')unlock()});
// letter
let typed=false;
function openLetter(btn){
  $('paper').classList.toggle('open');tone(392,'triangle',.2);
  if(typed)return;typed=true;let i=0;const el=$('letter');
  (function w(){if(i<=CFG.letter.length){el.textContent=CFG.letter.slice(0,i++);setTimeout(w,45)}})();
}
// counter
const start=new Date(CFG.since);
$('since').textContent='Saath hain: '+start.toLocaleDateString('en-GB',{day:'numeric',month:'long',year:'numeric'});
function tick(){
  const now=new Date(),diff=now-start,S=Math.floor(diff/1000);
  $('d').textContent=Math.floor(S/86400).toLocaleString('en-IN');$('h').textContent=Math.floor(S%86400/3600);
  $('m').textContent=Math.floor(S%3600/60);$('s').textContent=S%60;
  let n=new Date(now.getFullYear(),start.getMonth(),start.getDate());if(n<new Date(now.getFullYear(),now.getMonth(),now.getDate()))n.setFullYear(n.getFullYear()+1);
  const left=Math.round((n-new Date(now.getFullYear(),now.getMonth(),now.getDate()))/864e5),yrs=n.getFullYear()-start.getFullYear();
  $('next').innerHTML=left===0?'<b>Aaj hamari anniversary hai! 🎉</b>':'Agli anniversary (#'+yrs+') mein <b>'+left+' din</b> baaki hain.';
}
tick();setInterval(tick,1000);
// sky
const sky=$('sky'),N=CFG.reasons.length,pts=[];
for(let i=0;i<50;i++){const d=document.createElement('i');d.className='dot';d.style.cssText=`left:${Math.random()*100}%;top:${Math.random()*100}%;animation-delay:${Math.random()*3}s`;sky.appendChild(d)}
for(let i=0;i<N;i++){const t=Math.PI*2*i/N,x=50+16*Math.pow(Math.sin(t),3)*2.7,y=38-(13*Math.cos(t)-5*Math.cos(2*t)-2*Math.cos(3*t)-Math.cos(4*t))*2.6;pts.push([x,y])}
$('hpath').setAttribute('d','M'+pts.map(p=>p[0].toFixed(1)+' '+p[1].toFixed(1)).join('L')+'Z');
let lit=0;const notes=[523,587,659,784,880,1047,880,784,659,1175];
pts.forEach((p,i)=>{
  const b=document.createElement('button');b.className='star';b.style.left=p[0]+'%';b.style.top=p[1]+'%';b.setAttribute('aria-label','Sitara '+(i+1));b.innerHTML='<span>★</span>';
  b.onclick=e=>{
    $('reason').textContent=CFG.reasons[i];tone(notes[i],'sine',.9);
    if(!b.classList.contains('lit')){b.classList.add('lit');lit++;$('prog').textContent=lit+' / '+N+' sitare roshan';
      if(lit===N){setTimeout(()=>{$('hpath').classList.add('draw');$('reason').textContent=CFG.final;[784,988,1175,1568].forEach((f,k)=>setTimeout(()=>tone(f,'triangle',1.2),k*200));
        for(let k=0;k<22;k++)setTimeout(()=>fx(['✨','💖','⭐'][k%3],innerWidth*Math.random(),innerHeight*(.4+Math.random()*.5)),k*90)},700)}}
  };
  sky.appendChild(b);
});
// love meter
let pct=0;
function love(e,name){
  const r=event.target.getBoundingClientRect();
  for(let i=0;i<6;i++)setTimeout(()=>fx(e,r.left+r.width/2+(Math.random()*60-30),r.top),i*70);
  tone(name==='Hug'?330:620,'triangle',.25);
  pct+=name==='Hug'?7:10;hugStage(name);$('fill').style.width=Math.min(pct,100)+'%';
  $('pct').textContent=pct<100?'Pyaar meter: '+pct+'%':pct<200?'Pyaar meter: '+pct+'% (meter toot gaya 😳)':'Pyaar meter: ∞ (limit nahi hoti)';
}
// jab kabhi
$('jab').innerHTML=CFG.letters.map(l=>`<div class='jb'><button><i>${l[0]}</i><span>${l[1]}</span><em>›</em></button><div class='bd2'><div><p>${l[2]}</p></div></div></div>`).join('');
$('jab').addEventListener('click',e=>{const b=e.target.closest('.jb');if(!b||!e.target.closest('button'))return;const on=!b.classList.contains('on');document.querySelectorAll('.jb.on').forEach(x=>x.classList.remove('on'));if(on){b.classList.add('on');tone(392,'triangle',.25,.1)}});
// characters
const CH={
tiger:`<svg viewBox='0 0 120 140' class='chr'><g class='bod'><ellipse cx='60' cy='122' rx='34' ry='24' fill='#f5a031'/><ellipse cx='60' cy='127' rx='18' ry='15' fill='#fff0d8'/><path d='M30 110q7 5 4 13M90 110q-7 5-4 13' stroke='#3a1a0a' stroke-width='4' fill='none' stroke-linecap='round'/></g><g class='hd'><circle cx='26' cy='36' r='15' fill='#f5a031'/><circle cx='26' cy='36' r='8' fill='#ffc9a0'/><circle cx='94' cy='36' r='15' fill='#f5a031'/><circle cx='94' cy='36' r='8' fill='#ffc9a0'/><ellipse cx='60' cy='64' rx='44' ry='40' fill='#f5a031'/><path d='M60 26v14M48 28l3 11M72 28l-3 11M16 62l12 3M17 74l11-2M104 62l-12 3M103 74l-11-2' stroke='#3a1a0a' stroke-width='4' stroke-linecap='round' fill='none'/><ellipse cx='60' cy='82' rx='22' ry='15' fill='#fff0d8'/><g class='eye'><ellipse cx='42' cy='62' rx='5' ry='6.5' fill='#2a1208'/><circle cx='43.5' cy='60' r='2' fill='#fff'/></g><g class='eye'><ellipse cx='78' cy='62' rx='5' ry='6.5' fill='#2a1208'/><circle cx='79.5' cy='60' r='2' fill='#fff'/></g><circle cx='30' cy='78' r='6' fill='#ff7f9a' opacity='.5'/><circle cx='90' cy='78' r='6' fill='#ff7f9a' opacity='.5'/><path d='M54 74h12l-6 7z' fill='#e8546e'/><path d='M60 81v4q-5 5-10 1M60 85q5 5 10 1' stroke='#3a1a0a' stroke-width='2' fill='none' stroke-linecap='round'/></g></svg>`,
cat:`<svg viewBox='0 0 120 140' class='chr'><g class='bod'><ellipse cx='60' cy='122' rx='32' ry='24' fill='#fff3e8'/><path d='M44 108q16 10 32 0' stroke='#b9a6dc' stroke-width='4' fill='none' stroke-linecap='round'/></g><g class='hd'><path d='M20 52L22 14L52 34Z' fill='#fff3e8' stroke='#fff3e8' stroke-width='8' stroke-linejoin='round'/><path d='M27 42L28 24L42 34Z' fill='#ffb6c8'/><path d='M100 52L98 14L68 34Z' fill='#fff3e8' stroke='#fff3e8' stroke-width='8' stroke-linejoin='round'/><path d='M93 42L92 24L78 34Z' fill='#ffb6c8'/><ellipse cx='60' cy='68' rx='42' ry='36' fill='#fff3e8'/><path d='M60 36v10M52 38l2 8M68 38l-2 8' stroke='#b9a6dc' stroke-width='3.5' stroke-linecap='round' fill='none'/><g class='eye'><ellipse cx='43' cy='66' rx='5.5' ry='7' fill='#3b2a5a'/><circle cx='44.8' cy='63.5' r='2.2' fill='#fff'/></g><g class='eye'><ellipse cx='77' cy='66' rx='5.5' ry='7' fill='#3b2a5a'/><circle cx='78.8' cy='63.5' r='2.2' fill='#fff'/></g><circle cx='31' cy='80' r='6' fill='#ff8fa8' opacity='.5'/><circle cx='89' cy='80' r='6' fill='#ff8fa8' opacity='.5'/><ellipse cx='60' cy='77' rx='3.5' ry='2.6' fill='#ff8fa8'/><path d='M54 83q3 4 6 0q3 4 6 0' stroke='#6b4a7a' stroke-width='2' fill='none' stroke-linecap='round'/><path d='M12 74l16 3M12 84l16-3M108 74l-16 3M108 84l-16-3' stroke='#d9c9e8' stroke-width='1.6' stroke-linecap='round'/><path d='M30 26l-9-6v12zM30 26l9-6v12z' fill='#ff4d7a'/><circle cx='30' cy='26' r='3.4' fill='#c0204d'/></g></svg>`};
document.querySelectorAll('[data-char]').forEach(el=>el.innerHTML=CH[el.dataset.char]);
const SAY={tiger:['Mai Tumse bahut pyaar krta hu medhu ','Meri jaan ho tum anushka 🫂🥺.','ill always be your only yours medhu🥺'],cat:['do you lobb mee ?? 🥰😚 ','i love you so too 🥰','ill always be only yours too bubuu.']};
const si={tiger:0,cat:0};
function talk(w,btn){
  $('say').textContent=SAY[w][si[w]++%3];tone(w==='tiger'?196:659,'triangle',.3);
  const r=btn.getBoundingClientRect();for(let i=0;i<3;i++)setTimeout(()=>fx('💗',r.left+r.width/2+(Math.random()*50-25),r.top+20),i*100);
}
document.querySelectorAll('.who').forEach(b=>b.onclick=()=>talk(b.dataset.w,b));
let ht;function hugStage(n){
  const s=$('stage');s.classList.add('hug');$('say').textContent=n==='Hug'?'hug me tightly 🫂🫂🥹':'Muaaahh! 😘';
  const r=s.getBoundingClientRect();fx(n==='Hug'?'🤗':'😘',r.left+r.width/2,r.top+40);
  clearTimeout(ht);ht=setTimeout(()=>s.classList.remove('hug'),2200);
}
// mountain scene
const rnd=(a,b)=>a+Math.random()*(b-a);
const pine=(x,y,s,f)=>`<g transform='translate(${x} ${y}) scale(${s})' fill='${f}'><path d='M0-36L-11-16H-5L-15 2H15L5-16H11Z'/><rect x='-2' y='2' width='4' height='6'/></g>`;
const nx=(k,x,y,w,h,acc,id)=>`<g data-who='${id}' style='cursor:pointer'>`+CH[k].replace("class='chr'",`class='nx' x='${x}' y='${y}' width='${w}' height='${h}'`).replace('</g></svg>',acc+'</g></svg>')+'</g>';
const bow=c=>`<path d='M60 24l-12-8v16zM60 24l12-8v16z' fill='${c}'/><circle cx='60' cy='24' r='4' fill='#fff' opacity='.6'/>`;
const cap=`<path d='M20 44q40-52 80 0z' fill='#4aa3ff'/><rect x='18' y='40' width='84' height='9' rx='4' fill='#2f7fd6'/><circle cx='60' cy='11' r='6' fill='#fff'/>`;
let st='',dp='',ff='';
for(let i=0;i<40;i++)st+=`<circle cx='${rnd(5,395).toFixed(0)}' cy='${rnd(5,190).toFixed(0)}' r='${rnd(.6,1.6).toFixed(1)}' fill='#fff' style='animation:tw ${rnd(2,5).toFixed(1)}s ${rnd(0,3).toFixed(1)}s infinite'/>`;
for(let x=6;x<400;x+=22)dp+=pine(x,rnd(338,346).toFixed(0),rnd(.38,.55).toFixed(2),'#173544');
for(let i=0;i<16;i++)ff+=`<circle cx='${rnd(10,390).toFixed(0)}' cy='${rnd(290,420).toFixed(0)}' r='1.8' fill='#fff3a0' style='animation:ff ${rnd(4,8).toFixed(1)}s ease-in-out ${rnd(0,5).toFixed(1)}s infinite'/>`;
const SC=`<svg viewBox='0 0 400 480'><defs><linearGradient id='sk' x1='0' y1='0' x2='0' y2='1'><stop offset='0' stop-color='#160c3a'/><stop offset='.45' stop-color='#7b2f78'/><stop offset='.72' stop-color='#ff8f6b'/><stop offset='1' stop-color='#ffd59a'/></linearGradient><radialGradient id='sg'><stop offset='0' stop-color='#fff1c9' stop-opacity='.9'/><stop offset='1' stop-color='#ffb27a' stop-opacity='0'/></radialGradient><linearGradient id='lk' x1='0' y1='0' x2='0' y2='1'><stop offset='0' stop-color='#ffb383'/><stop offset='1' stop-color='#4a2f77'/></linearGradient><linearGradient id='mg' x1='0' y1='0' x2='0' y2='1'><stop offset='0' stop-color='#2f6b4f'/><stop offset='1' stop-color='#0f2422'/></linearGradient><radialGradient id='lgl'><stop offset='0' stop-color='#ffcf6b' stop-opacity='.8'/><stop offset='1' stop-color='#ffcf6b' stop-opacity='0'/></radialGradient></defs>`
+`<rect width='400' height='480' fill='url(#sk)'/><g id='stars'>${st}</g><g id='moon'><circle cx='112' cy='80' r='34' fill='url(#sg)'/><circle cx='112' cy='80' r='15' fill='#fff7de'/></g><g id='sun'><circle cx='270' cy='238' r='64' fill='url(#sg)'/><circle cx='270' cy='238' r='26' fill='#fff1c9'/></g>`
+`<g class='cl'><ellipse cx='60' cy='104' rx='46' ry='9'/><ellipse cx='88' cy='97' rx='30' ry='8'/></g><g class='cl' style='animation-delay:-40s;animation-duration:110s'><ellipse cx='60' cy='150' rx='38' ry='7'/><ellipse cx='80' cy='144' rx='24' ry='6'/></g>`
+`<path d='M0 262L40 215L82 248L132 178L192 256L236 208L290 262L342 198L400 250V320H0Z' fill='#6a3f8f'/><path d='M132 178l-15 24l9-4l6 7l6-7l9 4zM342 198l-13 20l8-3l5 6l5-6l8 3zM40 215l-10 15l7-2l3 4l4-4l6 2z' fill='#ffe9d6'/><path d='M0 300L62 246L122 290L192 232L262 296L332 250L400 300V340H0Z' fill='#3b2a6a'/>`
+`<path d='M0 318Q200 306 400 320V360H0Z' fill='url(#lk)'/><path d='M250 326h40M258 334h24M246 342h48' stroke='#fff1c9' stroke-width='2' stroke-linecap='round' class='fl'/><path d='M0 345Q100 322 200 342T400 336V480H0Z' fill='#1d3b4a'/>${dp}`
+`<g class='bd' style='animation-delay:-6s'><path d='M0 0q6-7 12 0q6-7 12 0' stroke='#2a1840' stroke-width='1.6' fill='none'/></g><g class='bd' style='animation-delay:-11s;animation-duration:30s'><path d='M0 14q4-5 8 0q4-5 8 0' stroke='#2a1840' stroke-width='1.4' fill='none'/></g>`
+`<path d='M0 372Q120 350 220 372T400 366V480H0Z' fill='url(#mg)'/>${pine(22,396,1.7,'#0f2a2a')}${pine(58,408,1.2,'#0f2a2a')}${pine(372,394,1.8,'#0f2a2a')}${pine(342,410,1.25,'#0f2a2a')}`
+`<rect id='nt' width='400' height='480' fill='#050318'/><g id='lg'><circle class='fl' cx='46' cy='418' r='54' fill='url(#lgl)'/></g><ellipse cx='200' cy='416' rx='152' ry='30' fill='#8c2d4a'/><ellipse cx='200' cy='416' rx='134' ry='22' fill='none' stroke='#ffd9a0' stroke-width='2' stroke-dasharray='6 6' opacity='.6'/><rect x='40' y='408' width='12' height='16' rx='3' fill='#ffcf6b'/><path d='M42 408q4-9 8 0' stroke='#7a4a22' stroke-width='2' fill='none'/>`
+nx('tiger',84,262,116,136,'','tiger')+nx('cat',198,262,116,136,'','cat')+nx('tiger',90,352,66,77,bow('#ff7fb0'),'t1')+nx('tiger',167,364,62,72,cap,'boy')+nx('cat',244,352,66,77,bow('#b69cff'),'t2')+ff+`</svg>`;
const scn=$('scene');scn.insertAdjacentHTML('afterbegin',SC);
const LN={
  tiger:['Mai tumse bahut pyaar krta hu medhu 🥰','Meri jaan ho tum 🫂🥺','Hamesha tumhara hi rahunga 💗'],
  cat:['Mujhe bhi tumse bahut pyaar hai 🥰😚','Tum mere ho, sirf mere 🙈','Ill always be only yours too bubuu 💗'],
  t1:['Papa mummy ko bahut pyaar karte hain 🥹','Mummy sabse achhi hain 🙈💗'],
  t2:['Mummy papa best hain 🥰','Hum sab saath hain 🫂💗'],
  boy:['Main sabka chhota sa superstar hu 😎💙','Papa mummy I love you 🥹💗']
};
const li={};
scn.addEventListener('click',e=>{const g=e.target.closest('[data-who]');if(!g)return;const w=g.dataset.who,k=li[w]=(li[w]||0)+1;$('say2').textContent=LN[w][(k-1)%LN[w].length];tone({tiger:196,cat:659,t1:784,t2:880,boy:1047}[w],'triangle',.3);const r=g.getBoundingClientRect();for(let i=0;i<3;i++)setTimeout(()=>fx('💗',r.left+r.width/2+rnd(-20,20),r.top),i*100)});
$('nbtn').onclick=()=>{const n=scn.classList.toggle('night');$('nbtn').textContent=n?'🌅 Day':'🌙 Night';[392,523,659].forEach((f,i)=>setTimeout(()=>tone(f,'sine',.8,.1),i*160))};
new IntersectionObserver((en,o)=>en.forEach(x=>{if(x.isIntersecting){scn.classList.add('play');o.disconnect()}}),{threshold:.35}).observe(scn);
// special line
const vow=$('vow');
for(let i=0;i<14;i++){const s=document.createElement('span');s.className='sp';s.textContent='✦';s.style.cssText=`left:${rnd(4,94).toFixed(0)}%;top:${rnd(6,92).toFixed(0)}%;font-size:${rnd(8,20).toFixed(0)}px;animation-delay:${rnd(0,3).toFixed(1)}s`;vow.appendChild(s)}
new IntersectionObserver((en,o)=>en.forEach(x=>{if(x.isIntersecting){vow.classList.add('show');o.disconnect()}}),{threshold:.4}).observe(vow);
$('vowt').onclick=()=>{[523,659,784,1047,1319].forEach((f,i)=>setTimeout(()=>tone(f,'sine',1.1,.12),i*110));const r=$('vowt').getBoundingClientRect();for(let i=0;i<10;i++)setTimeout(()=>fx(['💖','✨','❤️'][i%3],r.left+rnd(20,r.width-20),r.top+r.height/2),i*80)};
// tap hearts
document.addEventListener('pointerdown',e=>{if($('app').classList.contains('hidden')||e.target.closest('.star'))return;fx('I love you ❤️',e.clientX-40,e.clientY-20,'txt')});
                        
