const data = await (await fetch('data.json')).json();
const $ = (selector) => document.querySelector(selector);
const escape = (text) => String(text).replace(/[&<>"']/g, (c) => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const icon = (name) => data.icons[name] ?? '';
function hydrateIcons() { document.querySelectorAll('[data-icon]').forEach(el => { el.innerHTML = icon(el.dataset.icon); }); }
const phone = data.person.contact.phone.replace(/\D/g, '');
const whatsapp = `https://wa.me/${phone}`;
document.querySelectorAll('.whatsapp').forEach(el => el.href = whatsapp);
$('#email-contact').textContent = data.person.contact.email;
$('#email-contact').href = `mailto:${data.person.contact.email}`;
$('#linkedin').href = data.person.contact.linkedin;
hydrateIcons();

let selected = new Set();
let activeCategory = data.services[0].id;
const allServices = data.services.flatMap(category => category.items);
const categoryIcons = {launch:'Globe',operations:'Workflow',ai:'BrainCircuit',data:'ChartSpline',improve:'Wrench'};
function renderCategory() {
  const category = data.services.find(item => item.id === activeCategory);
  $('#categories').innerHTML = data.services.map(item => `<button data-category="${item.id}" aria-pressed="${item.id === activeCategory}" aria-controls="service-grid">${icon(categoryIcons[item.id])}${escape(item.shortTitle)}</button>`).join('');
  $('#category-title').textContent = category.title;
  $('#category-summary').textContent = category.summary;
  $('#service-grid').innerHTML = category.items.map(item => `<article class="service-card"><h4>${escape(item.title)}</h4><p>${escape(item.tagline)}</p><ul class="deliverables">${item.deliverables.slice(0,3).map(line => `<li>${icon('Check')}<span>${escape(line)}</span></li>`).join('')}</ul><details><summary>Scope & deliverables ${icon('ChevronDown')}</summary><p>${escape(item.description)}</p><p>${escape(item.businessImpact)}</p>${item.deliverables.length > 3 ? `<ul class="deliverables">${item.deliverables.slice(3).map(line => `<li>${icon('Check')}<span>${escape(line)}</span></li>`).join('')}</ul>` : ''}<p>Tools depend on your scope: ${escape(item.tech.slice(1).join(' · '))}.</p></details><a class="text-action discuss" data-service="${item.id}" href="#studio" aria-label="Discuss this: ${escape(item.title)}">Discuss this ${icon('ArrowRight')}</a></article>`).join('');
}
$('#categories').addEventListener('click', e => {
  const button = e.target.closest('[data-category]');
  if (!button) return;
  activeCategory = button.dataset.category;
  renderCategory();
  $(`[data-category="${activeCategory}"]`).focus({preventScroll:true});
});
$('#service-grid').addEventListener('click', e => {
  const link = e.target.closest('[data-service]');
  if (!link || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
  selected.add(link.dataset.service);
  $('#goals-disclosure').open = false;
  renderSelected();
  updateDraft();
});
function renderSelected() {
  $('#selections').hidden = selected.size === 0;
  $('#selected-items').innerHTML = [...selected].map(id => `<span class="chip">${escape(allServices.find(item => item.id === id).title)}<button data-remove="${id}" aria-label="Remove ${escape(allServices.find(item => item.id === id).title)}">${icon('X')}</button></span>`).join('');
}
$('#selected-items').addEventListener('click', e => {
  const button = e.target.closest('[data-remove]');
  if (!button) return;
  selected.delete(button.dataset.remove);
  renderSelected(); updateDraft();
  const next = $('#selected-items button');
  if(next) next.focus(); else $('#notes').focus({preventScroll:true});
});
$('#handover').innerHTML = data.handover.map(item => `<div><h3>${escape(item.title)}</h3><p>${escape(item.description)}</p><p class="small">${escape(item.scopeTerms)}</p></div>`).join('');
$('#goals').innerHTML = data.services.map(item => `<label><input type="checkbox" value="${item.id}">${escape(item.shortTitle)}</label>`).join('');
renderCategory();

function updateDraft() {
  const goals = [...document.querySelectorAll('#goals input:checked')].map(el => data.services.find(c => c.id === el.value).shortTitle);
  const lines = ["Hi Razim, I'd like to discuss a project."];
  if (selected.size) lines.push('Services to discuss:\n' + [...selected].map(id => '- '+allServices.find(item=>item.id===id).title).join('\n'));
  if (goals.length) lines.push('Goals: '+goals.join(', '));
  if (!goals.length && !selected.size) lines.push("I'd like help defining the scope.");
  lines.push('Starting point: '+$('#starting').value);
  for (const [id,label] of [['name','Name / company'],['contact-field','Contact'],['notes','Project note'],['tools','Current tools'],['timing','Timing']]) if($('#'+id).value.trim()) lines.push(label+': '+$('#'+id).value.trim());
  const message = lines.join('\n\n');
  $('#draft').textContent = message;
  $('#review-whatsapp').href = whatsapp+'?text='+encodeURIComponent(message);
  $('#review-email').href = `mailto:${data.person.contact.email}?subject=Project%20inquiry&body=${encodeURIComponent(message)}`;
  $('#note-count').textContent = $('#notes').value.length;
  $('#copy-status').textContent = '';
  $('#copy-label').textContent = 'Copy message';
}
$('#studio').addEventListener('input',updateDraft);
$('#studio').addEventListener('change',updateDraft);
$('#copy').addEventListener('click',async()=>{
  try {
    await navigator.clipboard.writeText($('#draft').textContent);
    $('#copy-label').textContent='Copied';
    $('#copy-status').textContent='Message copied. Paste it wherever you prefer.';
  } catch {
    $('#message-preview').open=true;
    $('#copy-status').textContent='Copy is unavailable. Select the text in Preview your message, or open a draft.';
  }
});
updateDraft();

$('#recruiter-facts').innerHTML = data.person.recruiterSnapshot.map(item=>`<div><dt>${escape(item.label)}</dt><dd>${escape(item.value)}</dd></div>`).join('');
$('#experience').innerHTML = data.person.experience.map(item=>`<article><time>${escape(item.period)}</time><div><h4>${escape(item.role)}</h4><p class="company">${escape(item.company)}</p><p class="small">${escape(item.location)}</p><ul>${item.achievements.map(a=>`<li>${escape(a)}</li>`).join('')}</ul></div></article>`).join('');
$('#education').innerHTML = data.person.education.map(item=>`<div><h4>${escape(item.degree)}</h4><p>${escape(item.field)}</p><p class="small">${escape(item.institution)} · ${escape(item.year)}</p></div>`).join('');
$('#certificates').innerHTML = data.person.certifications.map(item=>`<li>${escape(item)}</li>`).join('');
$('#skill-list').innerHTML = Object.entries(data.person.skills).map(([group,items])=>`<div><h3>${group==='business'?'Business & analysis':'Development & technical'}</h3><p>${items.map(escape).join(' · ')}</p></div>`).join('');

function setView(view, record=true) {
  if(!['client','recruiter','all'].includes(view)) view='client';
  $('#client-content').hidden=view==='recruiter';
  $('#recruiter-content').hidden=view==='client';
  document.querySelectorAll('[data-view]').forEach(button=>button.setAttribute('aria-pressed',String(button.dataset.view===view)));
  $('.audience-marker').style.transform=`translateX(${['client','recruiter','all'].indexOf(view)*100}%)`;
  if(record) {const url=new URL(location.href);url.searchParams.set('view',view);if((view==='recruiter'&&['#services','#pipeline','#studio'].includes(url.hash))||(view==='client'&&url.hash==='#dossier'))url.hash='';history.pushState({view},'',url);}
}
document.querySelectorAll('[data-view]').forEach(button=>button.addEventListener('click',()=>setView(button.dataset.view)));
document.querySelectorAll('[data-hiring-link]').forEach(link=>link.addEventListener('click',()=>setView('recruiter')));
function revealHash(){if(location.hash==='#dossier')setView('recruiter',false);if(['#services','#pipeline','#studio'].includes(location.hash)&&$('#client-content').hidden)setView('client',false);}
window.addEventListener('hashchange',revealHash);
window.addEventListener('popstate',()=>{setView(new URL(location.href).searchParams.get('view'),false);revealHash();});
setView(new URL(location.href).searchParams.get('view'),false);revealHash();
function setTheme(dark){document.documentElement.classList.toggle('dark',dark);$('#theme').setAttribute('aria-label',dark?'Switch to light theme':'Switch to dark theme');$('#theme').innerHTML=icon(dark?'Sun':'Moon');}
$('#theme').addEventListener('click',()=>setTheme(!document.documentElement.classList.contains('dark')));
setTheme(new URL(location.href).searchParams.get('theme')==='dark');
$('#motion-off').addEventListener('change',()=>document.documentElement.classList.toggle('reduce-motion',$('#motion-off').checked));
function closeMenu(restore=false){$('#mobile-menu').hidden=true;$('#menu').setAttribute('aria-expanded','false');$('#menu').setAttribute('aria-label','Open navigation menu');$('#menu').innerHTML=icon('Menu');if(restore)$('#menu').focus();}
$('#menu').addEventListener('click',()=>{const open=$('#mobile-menu').hidden;if(!open){closeMenu();return;}$('#mobile-menu').hidden=false;$('#menu').setAttribute('aria-expanded','true');$('#menu').setAttribute('aria-label','Close navigation menu');$('#menu').innerHTML=icon('X');});
$('#mobile-menu').addEventListener('click',e=>{if(e.target.closest('a'))closeMenu();});
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&!$('#mobile-menu').hidden)closeMenu(true);});
document.addEventListener('pointerdown',e=>{if(!$('.header').contains(e.target)&&!$('#mobile-menu').hidden)closeMenu();});
matchMedia('(min-width:761px)').addEventListener('change',e=>{if(e.matches)closeMenu();});
