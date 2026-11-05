const defaults={name:"RAHAT WIZE",bio:"Welcome to my official profile. I love gaming, digital creativity and connecting with awesome people around the world.",headerBio:"Dream · Play · Grow",footerCredit:"Powered by RAHAT WIZE",photo:"/assets/rahat-profile.webp",background:"/assets/anime-background.webp",logo:"",links:[{name:"WIZE FF TOPUP",sub:"Official Website",url:"https://wizefftopup.com",color:"#e62bfa",icon:"🌐"},{name:"FREE FIRE ID BUY–SELL",sub:"Buy or Sell Free Fire IDs",url:"",color:"#ff713a",icon:"🎮"},{name:"Facebook",sub:"Follow Me",url:"",color:"#168eff",icon:"f"},{name:"Telegram",sub:"Join Channel",url:"",color:"#00cfff",icon:"➤"},{name:"TikTok",sub:"Watch My Videos",url:"",color:"#f122bd",icon:"♪"},{name:"Instagram",sub:"Follow Me",url:"",color:"#f254ba",icon:"◎"},{name:"WhatsApp",sub:"Chat With Me",url:"",color:"#05dba0",icon:"☎"},]};const brandIcons={
"WIZE FF TOPUP":'<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c3.4 4.6 3.4 13.4 0 18M12 3c-3.4 4.6-3.4 13.4 0 18"/>',
"Facebook":'<path fill="currentColor" stroke="none" d="M15.2 21v-7.7h2.6l.4-3.1h-3V8.2c0-.9.3-1.5 1.6-1.5h1.6V3.9a22 22 0 0 0-2.3-.1c-2.4 0-4.1 1.5-4.1 4.2v2.2H9.3v3.1H12V21z"/>',
"Telegram":'<path fill="currentColor" stroke="none" d="m21.3 4.8-3.4 15.6c-.2 1.1-.9 1.4-1.8.9l-5.1-3.8-2.4 2.3c-.3.3-.6.6-1.1.6l.4-5.1L17 7.2c.4-.4-.1-.6-.6-.3L5.3 14l-4.7-1.5c-1-.3-1-1 .2-1.5L19.2 3.9c.9-.3 2.5.2 2.1.9z"/>',
"TikTok":'<path fill="currentColor" stroke="none" d="M16.8 3c.4 2.6 1.8 4.1 4.2 4.4v3.6a10 10 0 0 1-4.2-1.1v6.1a6.6 6.6 0 1 1-6.6-6.6h.8v3.7a3 3 0 1 0 2.1 2.9V3z"/>',
"Instagram":'<rect x="3" y="3" width="18" height="18" rx="5" fill="none"/><circle cx="12" cy="12" r="4" fill="none"/><circle cx="17.6" cy="6.5" r="1" fill="currentColor" stroke="none"/>',
"FREE FIRE ID BUY–SELL":'<path d="M6 3h17l-4 5H9l-2 4h10l-4 5H5l-3 6H0l5-12H2Z" fill="currentColor" stroke="none"/>',
"WhatsApp":'<path d="M20.2 11.6a8.2 8.2 0 0 1-12.1 7.2L3 20l1.3-4.8A8.2 8.2 0 1 1 20.2 11.6Z"/><path d="M8.7 7.9c-.6-.4-1.3-.2-1.6.5-.8 1.7 1 3.3 2.7 5.1 1.8 1.8 3.6 2.7 5.4 2.2.7-.2 1.2-1 1-1.5l-2.3-1.1-1.3 1c-1.2-.5-2.2-1.4-2.8-2.6l1-1.3z" fill="currentColor" stroke="none"/>'
};const renderIcon=(label,fallback)=>{let paths=brandIcons[label];if(!paths)return document.createTextNode(fallback||'✦');let svg=document.createElementNS('http://www.w3.org/2000/svg','svg');svg.setAttribute('viewBox','0 0 24 24');svg.setAttribute('fill','none');svg.setAttribute('stroke','currentColor');svg.setAttribute('stroke-width','1.9');svg.setAttribute('stroke-linecap','round');svg.setAttribute('stroke-linejoin','round');svg.setAttribute('aria-hidden','true');svg.innerHTML=paths;return svg};const byId=x=>document.getElementById(x);const safeURL=u=>{if(typeof u!=='string'||!u.trim())return '';try{let v=new URL(u,location.href);return ['https:','http:'].includes(v.protocol)?v.href:''}catch{return ''}};
document.documentElement.classList.add('js');
const reduceMotion=matchMedia('(prefers-reduced-motion: reduce)').matches;
const OLD_FOOTER='Powered by RAHAT WIZE';

/* ---- admin data (Cloudflare KV via /api/config) ---- */
async function start(){let conf=defaults;try{let r=await fetch('/api/config',{cache:'no-store'});if(r.ok){let remote=await r.json();conf={...defaults,...remote};if(Array.isArray(remote.links))conf.links=remote.links}}catch{}
document.body.classList.toggle('intro-disabled',conf.introEnabled===false);
byId('name').textContent=String(conf.name||defaults.name).trim();
if(conf.bio)byId('bio').textContent=conf.bio;
const hb=String(conf.headerBio||'').trim();if(hb&&hb!==defaults.headerBio)byId('headerBio').textContent=hb;
const fc=String(conf.footerCredit||'').trim();byId('footerCredit').textContent=!fc||fc===OLD_FOOTER?'Powered by @Rahat Wize':fc;
if(conf.photo&&safeURL(conf.photo))byId('portraitImage').src=safeURL(conf.photo);
if(conf.logo&&safeURL(conf.logo)){let i=document.createElement('img');i.src=safeURL(conf.logo);i.alt='';byId('brandMark').replaceChildren(i)}
const root=byId('links');root.replaceChildren();
(Array.isArray(conf.links)?conf.links:defaults.links).forEach(l=>{let a=document.createElement('a'),url=safeURL(l.url);a.className='social-link';a.dataset.brand=l.brand||l.name;a.style.setProperty('--accent',/^#[0-9a-f]{6}$/i.test(l.color||'')?l.color:'#e50914');a.href=url||'#';a.setAttribute('aria-label',l.name+(url?' - open link':' - link not configured'));if(url){a.target='_blank';a.rel='noopener noreferrer'}else a.addEventListener('click',e=>e.preventDefault());
let icon=document.createElement('span');icon.className='app-icon';const fallback=()=>icon.replaceChildren(renderIcon(l.brand||l.name,l.icon));if(l.image&&safeURL(l.image)){const im=document.createElement('img');im.src=safeURL(l.image);im.alt='';im.addEventListener('error',fallback,{once:true});icon.append(im)}else fallback();
let info=document.createElement('span');info.className='info';let n=document.createElement('strong');n.textContent=l.name||'Link';let s=document.createElement('small');s.textContent=l.sub||'';info.append(n,s);let arrow=document.createElement('span');arrow.className='arrow';arrow.textContent='➜';a.append(icon,info,arrow);root.append(a)});
root.querySelectorAll('.social-link').forEach((a,i)=>a.style.transitionDelay=(i*.07)+'s')}
const portfolioReady=start();
byId('year').textContent=new Date().getFullYear();

/* ---- star field ---- */
(()=>{const c=byId('stars'),x=c.getContext('2d');let w,h,stars=[],raf;const dpr=Math.min(2,devicePixelRatio||1);
const size=()=>{w=innerWidth;h=innerHeight;c.width=w*dpr;c.height=h*dpr;x.setTransform(dpr,0,0,dpr,0,0);const n=Math.round(Math.min(140,w*h/7000));stars=Array.from({length:n},()=>({x:Math.random()*w,y:Math.random()*h,r:Math.random()*1.3+.2,v:Math.random()*.25+.05,a:Math.random()*.7+.2,t:Math.random()*6,red:Math.random()<.12}))};
const draw=()=>{x.clearRect(0,0,w,h);for(const s of stars){s.y-=s.v;s.x+=s.v*.3;s.t+=.02;if(s.y<-2){s.y=h+2;s.x=Math.random()*w}if(s.x>w+2)s.x=-2;x.globalAlpha=s.a*(.65+.35*Math.sin(s.t));x.fillStyle=s.red?'#ff2a36':'#fff';x.beginPath();x.arc(s.x,s.y,s.r,0,6.283);x.fill()}x.globalAlpha=1};
const loop=()=>{draw();raf=requestAnimationFrame(loop)};
size();addEventListener('resize',()=>{size();if(reduceMotion)draw()});
if(reduceMotion)draw();else{loop();document.addEventListener('visibilitychange',()=>{cancelAnimationFrame(raf);if(!document.hidden)loop()})}})();

/* ---- count-up + bars ---- */
function countUp(el){const end=+el.dataset.count,suf=el.dataset.suffix||'';if(reduceMotion){el.textContent=end+suf;return}const t0=performance.now(),d=1400;const f=t=>{const p=Math.min(1,(t-t0)/d),e=1-Math.pow(1-p,3);el.textContent=Math.round(end*e)+suf;if(p<1)requestAnimationFrame(f)};f(t0)}
function runCounters(scope){scope.querySelectorAll('[data-count]').forEach(countUp)}

/* ---- scroll reveal ---- */
function setupReveal(){const els=document.querySelectorAll('.reveal');const show=el=>{el.classList.add('in');el.querySelectorAll('[data-bar]').forEach(b=>b.style.width=b.dataset.bar+'%');runCounters(el)};
if(reduceMotion||!('IntersectionObserver' in window)){els.forEach(show);return}
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){show(e.target);io.unobserve(e.target)}}),{threshold:.12,rootMargin:'0px 0px -8% 0px'});els.forEach(el=>io.observe(el))}

/* ---- blueprint build (after intro) ---- */
let built=false;
function build(){if(built)return;built=true;const b=document.body;b.classList.remove('bp-wait');setupReveal();
if(reduceMotion){runCounters(document.querySelector('.hero'));return}
const bp=byId('blueprint'),frag=document.createDocumentFragment(),sy=scrollY,vh=innerHeight;const ys=new Set();
document.querySelectorAll('.bp').forEach((el,i)=>{el.style.setProperty('--i',i);const r=el.getBoundingClientRect();if(r.top>vh*1.2)return;const d=document.createElement('div');d.className='bp-box';d.dataset.label=el.dataset.bp||'';Object.assign(d.style,{left:r.left+'px',top:(r.top+sy)+'px',width:r.width+'px',height:r.height+'px',animationDelay:(i*.06)+'s,'+(1.75+i*.03)+'s'});frag.append(d);[r.top,r.bottom].forEach(y=>ys.add(Math.round(y+sy)))});
[...ys].slice(0,14).forEach((y,i)=>{const l=document.createElement('div');l.className='bp-line';l.style.top=y+'px';l.style.animationDelay=(i*.04)+'s,1.8s';frag.append(l)});
bp.style.height=document.documentElement.scrollHeight+'px';bp.replaceChildren(frag);b.classList.add('bp-build');
setTimeout(()=>runCounters(document.querySelector('.hero')),1100);
setTimeout(()=>{b.classList.remove('bp-build');b.classList.add('bp-done');bp.replaceChildren()},2900)}

/* ---- intro video (kept from the old site) ---- */
(()=>{const video=byId('introVideo'),overlay=byId('videoIntro');let started=false,done=false,timer;const sound=new Audio();sound.preload='auto';sound.volume=.55;let soundWanted=true;
const soundReady=fetch('/intro-sound.json',{cache:'force-cache'}).then(r=>{if(!r.ok)throw Error();return r.json()}).then(d=>{sound.src=d.src;return true}).catch(()=>{soundWanted=false;return false});
const playSound=()=>{if(!soundWanted||!sound.src||done||document.hidden||document.body.classList.contains('intro-disabled'))return;try{if(Math.abs(sound.currentTime-video.currentTime)>.18)sound.currentTime=video.currentTime}catch{}sound.play().catch(()=>{})};
const unlock=()=>{if(!done&&started&&!video.paused)playSound()};document.addEventListener('pointerdown',unlock,{passive:true});document.addEventListener('keydown',unlock);
video.addEventListener('waiting',()=>sound.pause());video.addEventListener('playing',()=>{if(soundWanted)soundReady.then(ok=>{if(ok&&!done)playSound()})});
document.addEventListener('visibilitychange',()=>{if(document.hidden)sound.pause();else if(!done&&soundWanted&&!video.paused)playSound()});
const finish=()=>{if(done)return;done=true;sound.pause();clearTimeout(timer);document.body.classList.remove('video-loading');document.body.classList.add('video-finished');overlay.classList.add('finished');scrollTo(0,0);requestAnimationFrame(()=>requestAnimationFrame(build));setTimeout(()=>{video.pause();overlay.remove()},500)};
const begin=()=>{if(started||done)return;started=true;if(document.body.classList.contains('intro-disabled')||reduceMotion)return finish();video.muted=true;video.play().catch(()=>finish());timer=setTimeout(finish,13000)};
video.addEventListener('timeupdate',()=>{if(Number.isFinite(video.duration)&&video.currentTime>=video.duration-.5)finish()});video.addEventListener('ended',finish);video.addEventListener('error',finish);
video.addEventListener('playing',()=>{clearTimeout(timer);timer=setTimeout(finish,Math.min(16000,(Number.isFinite(video.duration)?video.duration:6)*1000+2500))});
portfolioReady.then(begin,begin);setTimeout(begin,2000)})();
