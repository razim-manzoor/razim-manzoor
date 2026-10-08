const canvas=document.querySelector('.canvas');
const studyFrame=document.querySelector('#study-frame');
const fullButton=document.querySelector('#full-page');
const reviewParams=new URL(location.href).searchParams;
let device=['phone','small'].includes(reviewParams.get('device'))?reviewParams.get('device'):'desktop';
let full=reviewParams.get('full')==='true';
const initialStudy=new URL('index.html',location.href);
initialStudy.searchParams.set('direction',reviewParams.get('direction')==='workflow'?'workflow':'portrait');
if(reviewParams.get('theme')==='dark')initialStudy.searchParams.set('theme','dark');
studyFrame.src=initialStudy.href;
document.querySelectorAll('[data-device]').forEach(button=>button.setAttribute('aria-pressed',String(button.dataset.device===device)));
fullButton.setAttribute('aria-pressed',String(full));
fullButton.textContent=full?'Show first screen':'Show full page';
function updateSize(){
  canvas.classList.toggle('phone',device!=='desktop');
  canvas.classList.toggle('small',device==='small');
  studyFrame.style.height=full?`${studyFrame.contentDocument.documentElement.scrollHeight}px`:device==='desktop'?'1000px':'844px';
  document.querySelector('.size-note').textContent=`${device==='desktop'?'Desktop':device==='phone'?'Phone':'Small phone'}: ${device==='desktop'?1440:device==='phone'?390:320} pixels${full?' · full page':''}`;
}
document.querySelectorAll('[data-device]').forEach(button=>button.addEventListener('click',()=>{
  device=button.dataset.device;
  document.querySelectorAll('[data-device]').forEach(item=>item.setAttribute('aria-pressed',String(item===button)));
  full=false;fullButton.setAttribute('aria-pressed','false');fullButton.textContent='Show full page';updateSize();
}));
fullButton.addEventListener('click',()=>{full=!full;fullButton.setAttribute('aria-pressed',String(full));fullButton.textContent=full?'Show first screen':'Show full page';updateSize();});
window.addEventListener('message',event=>{if(event.origin===location.origin&&event.source===studyFrame.contentWindow&&event.data?.type==='visual-study-ready')updateSize();});
