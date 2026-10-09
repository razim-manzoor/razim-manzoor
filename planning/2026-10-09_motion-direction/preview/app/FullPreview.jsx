'use client';

import { useEffect, useRef, useState, useSyncExternalStore } from 'react';
import Image from 'next/image';
import { motion, MotionConfig, useInView, useReducedMotion } from 'motion/react';
import { ArrowDown, ArrowUpRight, Check, ChevronDown, Download, Mail, Phone, Plus, RotateCcw, X } from 'lucide-react';
import NavBar from '@/components/NavBar';
import SkillsGrid from '@/components/SkillsGrid';
import { AudienceToggle } from '@/components/composite/AudienceToggle';
import { navigateToSection, setAudienceMode } from '@/lib/audience';
import { USER_DATA } from '@/lib/data';
import { HANDOVER_GUARANTEES, SERVICES_CATALOG } from '@/lib/services';
import { RESUME_URL, WHATSAPP_URL } from '@/lib/contact';
import { selectServiceForPlanner } from '@/lib/project-planner';
import { PreviewStudio } from './PreviewStudio';
import portrait from '../../../../public/profilepic.jpeg';

const ease = [0.16, 1, 0.3, 1];
const scopes = SERVICES_CATALOG.flatMap(category => category.items);
function subscribeAudience(callback) {
  const events = ['popstate', 'hashchange', 'portfolio:navigate'];
  events.forEach(event => window.addEventListener(event, callback));
  return () => events.forEach(event => window.removeEventListener(event, callback));
}
function currentAudience() {
  const url = new URL(window.location.href);
  if (url.searchParams.get('view') === 'all') return 'all';
  if (['#services', '#studio'].includes(url.hash)) return 'client';
  if (url.hash === '#dossier') return 'recruiter';
  return url.searchParams.get('view') === 'recruiter' ? 'recruiter' : 'client';
}
const steps = [
  { title: 'The agreed brief', detail: 'Understand the business goal, the people using the system and the tools already in place. Agree the scope and what successful delivery looks like.', result: 'A clear scope' },
  { title: 'Build & review', detail: 'Review a working version early, test the important journeys and agree the next changes together.', result: 'A reviewable build' },
  { title: 'Launch & hand over', detail: 'Deploy the agreed build, document how to use and maintain it, and walk your team through the result.', result: 'Code, access & setup notes' },
];

function Opening({ mode, reduced, replay }) {
  const hiring = mode === 'recruiter';
  return <section id="home" tabIndex={-1} className="editorial-opening site-wrap" aria-labelledby="name">
    <div className="identity-line">
      <motion.h1 key={`name-${replay}`} id="name" initial={{ x: reduced ? 0 : -16 }} animate={{ x: 0 }} transition={{ duration: reduced ? 0 : 0.72, ease }}>Razim <span>Manzoor</span><span className="identity-dot" aria-hidden="true">.</span></motion.h1>
      <p className="editorial-location">Dubai, UAE<br /><span>Open to projects & roles</span></p>
    </div>
    <div className="opening-body">
      <div className="opening-copy">
        <h2>{hiring ? <>Business understanding.<br /><span>Practical technical work.</span></> : <>From business problem<br />to <span>working system.</span></>}</h2>
        <p>{hiring ? 'My background combines an MBA in Data Science & Analytics with hands-on work in business analysis, development, and reporting.' : 'I build websites, applications, AI tools, automations, and dashboards around what your business needs.'}</p>
        <div className="opening-actions">
          <a className="action-primary" href={hiring ? RESUME_URL : '#services'} target={hiring ? '_blank' : undefined} rel={hiring ? 'noopener noreferrer' : undefined}>{hiring ? <><Download size={17} aria-hidden="true" /> Résumé PDF</> : <>Explore services <ArrowDown size={17} aria-hidden="true" /></>}</a>
          <a className="editorial-link" href="#dossier">{hiring ? 'Explore my background' : 'Hiring? View my background'}<ArrowUpRight size={17} aria-hidden="true" /></a>
          {mode === 'all' && <a className="editorial-link" href={RESUME_URL} target="_blank" rel="noopener noreferrer">Résumé PDF<Download size={17} aria-hidden="true" /></a>}
        </div>
        <p className="opening-qualification">MBA in Data Science & Analytics.<br />Business analysis. Hands-on development.</p>
      </div>
      <motion.figure key={`portrait-${replay}`} className="editorial-portrait" initial={{ y: reduced ? 0 : 14, clipPath: reduced ? 'inset(0% 0% 0% 0%)' : 'inset(0% 0% 8% 0%)' }} animate={{ y: 0, clipPath: 'inset(0% 0% 0% 0%)' }} transition={{ duration: reduced ? 0 : 0.78, ease }}>
        <div className="portrait-matte"><Image src={portrait} alt="Razim Manzoor" priority sizes="(max-width: 700px) 280px, 336px" /></div>
        <figcaption><span>Business analyst & developer</span></figcaption>
      </motion.figure>
    </div>
    <div key={replay} className="opening-signature" aria-hidden="true">
      <motion.span className="signature-word" initial={{ x: reduced ? 0 : -18 }} animate={{ x: 0 }} transition={{ duration: reduced ? 0 : 0.72, ease }}>Understand.</motion.span>
      <motion.span className="signature-word" initial={{ x: reduced ? 0 : -14 }} animate={{ x: 0 }} transition={{ duration: reduced ? 0 : 0.72, delay: reduced ? 0 : 0.06, ease }}>Build.</motion.span>
      <motion.span className="signature-word" initial={{ x: reduced ? 0 : -10 }} animate={{ x: 0 }} transition={{ duration: reduced ? 0 : 0.72, delay: reduced ? 0 : 0.12, ease }}>Hand over.</motion.span>
      <motion.span className="signature-rule" initial={{ scaleX: reduced ? 1 : 0.08 }} animate={{ scaleX: 1 }} transition={{ duration: reduced ? 0 : 0.78, ease }} />
    </div>
    <motion.div key={`frame-${replay}`} className="opening-frame-rule" aria-hidden="true" initial={{ scaleX: reduced ? 1 : 0.08 }} animate={{ scaleX: 1 }} transition={{ duration: reduced ? 0 : 0.78, ease }} />
  </section>;
}

function ServiceIndex({ selected, setSelected, reduced }) {
  const [active, setActive] = useState(SERVICES_CATALOG[0].id);
  const [feedback, setFeedback] = useState('');
  const category = SERVICES_CATALOG.find(item => item.id === active);
  const chosen = scopes.filter(item => selected.includes(item.id));
  const toggle = item => {
    const removing = selected.includes(item.id);
    if (removing) setSelected(previous => previous.filter(id => id !== item.id));
    else selectServiceForPlanner(item.id);
    setFeedback(`${item.title} ${removing ? 'removed from' : 'added to'} your brief.`);
  };
  return <section id="services" tabIndex={-1} className="portfolio-section editorial-services">
    <div className="site-wrap">
      <div className="section-heading"><h2 className="section-title">What needs<br /><span>to work better?</span></h2><p className="section-description">Start with the problem you want to solve. Explore the scope, or combine a few areas into a brief.</p></div>
      <div className="editorial-catalogue">
        <div className="editorial-categories" role="group" aria-label="Service categories">
          {SERVICES_CATALOG.map(item => <button key={item.id} aria-pressed={active === item.id} aria-controls="service-list" onClick={() => setActive(item.id)}>{active === item.id && <motion.span className="category-rule" layoutId="category-rule" aria-hidden="true" transition={{ duration: reduced ? 0 : 0.2, ease }} />}<span>{item.shortTitle}</span><ArrowUpRight size={18} aria-hidden="true" /></button>)}
        </div>
        <div id="service-list">
          <p className="catalogue-summary">{category.summary}</p>
          {category.items.map(item => <article key={item.id} className="editorial-service" data-selected={selected.includes(item.id)}>
            <div className="service-row-main"><div><h3>{item.title}</h3><p>{item.tagline}</p></div><button className="scope-add" aria-pressed={selected.includes(item.id)} aria-label={`${selected.includes(item.id) ? 'Remove' : 'Add'} ${item.title} ${selected.includes(item.id) ? 'from' : 'to'} brief`} onClick={() => toggle(item)}>{selected.includes(item.id) ? <Check size={17} aria-hidden="true" /> : <Plus size={17} aria-hidden="true" />}<span>{selected.includes(item.id) ? 'Added' : 'Add'}</span></button></div>
            <details><summary>Scope & deliverables<ChevronDown className="disclosure-chevron" size={15} aria-hidden="true" /></summary><div className="scope-copy"><p>{item.description}</p><p>{item.businessImpact}</p><ul>{item.deliverables.map(line => <li key={line}>{line}</li>)}</ul><p className="scope-terms">{item.scopeType} · Final scope agreed before starting.</p></div></details>
          </article>)}
          <div className="selection-summary"><div><h3>Your brief <span className="brief-count">{chosen.length}</span></h3>{chosen.length ? <ul>{chosen.map(item => <motion.li layout={!reduced} key={item.id}><span>{item.title}</span><button aria-label={`Remove ${item.title} from brief`} onClick={() => toggle(item)}><X size={16} aria-hidden="true" /></button></motion.li>)}</ul> : <p>Choose an area, or start with your own problem.</p>}</div><a className="editorial-link" href="#studio">{chosen.length ? 'Review your brief' : 'Help me define the project'}<ArrowUpRight size={17} aria-hidden="true" /></a></div>
          <p role="status" className="selection-status">{feedback}</p>
        </div>
      </div>
      <div className="handover-guarantees">{HANDOVER_GUARANTEES.map(item => <div key={item.title}><h3>{item.title}</h3><p>{item.description}</p><p className="scope-terms">{item.scopeTerms}</p></div>)}</div>
    </div>
  </section>;
}

function Hiring() {
  return <section id="dossier" tabIndex={-1} className="portfolio-section editorial-hiring"><div className="site-wrap">
    <div className="section-heading"><h2 className="section-title">Business, data<br /><span>& development.</span></h2><p className="section-description">An MBA in Data Science & Analytics, experience in business workflows and reporting, and hands-on development of web applications and automation tools.</p></div>
    <div className="career-layout">
      <aside className="career-summary"><h3>Open to the right opportunity</h3><p>Junior and associate roles are welcome. I am interested in work where I can understand a business problem, build useful tools, and keep developing my skills with a team.</p><ul className="role-interests" aria-label="Roles of interest">{['Business analysis', 'Web development', 'AI & automation', 'Data & BI'].map(role => <li key={role}>{role}</li>)}</ul>
        <dl>{USER_DATA.recruiterSnapshot.map(fact => <div key={fact.label}><dt>{fact.label}</dt><dd>{fact.value}</dd></div>)}</dl>
        <a href={RESUME_URL} target="_blank" rel="noopener noreferrer" className="action-primary"><Download size={17} aria-hidden="true" />Download résumé PDF</a>
        <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="editorial-link">Discuss a role on WhatsApp<ArrowUpRight size={17} aria-hidden="true" /></a>
        <a href={`mailto:${USER_DATA.contact.email}`} className="editorial-link">Email me instead<Mail size={16} aria-hidden="true" /></a>
      </aside>
      <div className="career-history"><h3>Experience</h3><div className="editorial-timeline">{USER_DATA.experience.map(entry => <article key={entry.id}><p className="career-period">{entry.period}</p><div><h4>{entry.role}</h4><p className="career-company">{entry.company}</p><p className="career-location">{entry.location}</p><details><summary>Work & responsibilities<ChevronDown className="disclosure-chevron" size={15} aria-hidden="true" /></summary><ul>{entry.achievements.map(line => <li key={line}>{line}</li>)}</ul></details></div></article>)}</div>
        <h3 className="education-title">Education</h3><div className="education-list">{USER_DATA.education.map(entry => <article key={entry.degree}><p className="career-period">{entry.year}</p><div><h4>{entry.degree}</h4><p>{entry.field}</p><p className="career-location">{entry.institution}</p></div></article>)}</div>
        <details className="career-certificates"><summary>Courses, certificates & recognition<ChevronDown className="disclosure-chevron" size={15} aria-hidden="true" /></summary><ul>{USER_DATA.certifications.map(line => <li key={line}>{line}</li>)}</ul></details>
        <a href={USER_DATA.contact.linkedin} target="_blank" rel="noopener noreferrer" className="editorial-link">View LinkedIn profile<ArrowUpRight size={17} aria-hidden="true" /></a>
      </div>
    </div>
  </div></section>;
}

function Delivery({ reduced, mode }) {
  const ref = useRef(null);
  const seen = useInView(ref, { once: true, amount: 0.3 });
  return <section id="pipeline" tabIndex={-1} className="portfolio-section editorial-delivery"><div className="site-wrap">
    <div className="section-heading"><h2 className="section-title">{mode === 'recruiter' ? <>Understand the work.<br />Build something useful.</> : <>A clear path from<br />idea to handover.</>}</h2><div><p className="section-description">The process stays simple even when the system has many moving parts.</p>{mode !== 'recruiter' && <p className="delivery-timing">Focused work typically takes 1–2 weeks; a scoped application often takes 3–4. Timing is confirmed after we understand the requirements.</p>}</div></div>
    <ol ref={ref} className="editorial-delivery-steps">{steps.map((step, index) => <li key={step.title}><div className="delivery-marker"><span aria-hidden="true">{index + 1}</span><motion.i aria-hidden="true" initial={false} animate={{ scaleX: reduced || seen ? 1 : 0.06 }} transition={{ duration: reduced ? 0 : 0.65, delay: reduced ? 0 : index * 0.16, ease }} /></div><h3>{step.title}</h3><p>{step.detail}</p><div className="delivery-result"><Check size={17} aria-hidden="true" />{step.result}</div></li>)}</ol>
  </div></section>;
}

function Contact({ mode }) {
  return <footer id="contact" tabIndex={-1} className="editorial-contact"><div className="site-wrap"><div className="contact-heading"><h2>{mode === 'recruiter' ? <>Have a role<br />in mind?</> : mode === 'client' ? <>Have a project<br />in mind?</> : <>Have a project<br />or role in mind?</>}</h2><p>{mode === 'recruiter' ? 'Tell me about your team, the role, and where I could help.' : 'Tell me what you are working on, what needs to change, or where I could help your team.'}</p></div><div className="editorial-contact-links"><a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"><span>Let’s talk<small>WhatsApp · {USER_DATA.contact.phone}</small></span><ArrowUpRight size={30} aria-hidden="true" /></a><a href={`mailto:${USER_DATA.contact.email}`}><span>Write to me<small>{USER_DATA.contact.email}</small></span><ArrowUpRight size={30} aria-hidden="true" /></a></div><nav aria-label="Contact and footer navigation" className="contact-secondary"><a href={`tel:${USER_DATA.contact.phone.replace(/[^0-9+]/g, '')}`}><Phone size={15} aria-hidden="true" />Call me</a><a href={USER_DATA.contact.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn<ArrowUpRight size={15} aria-hidden="true" /></a><a href="#dossier">Background</a><a href="#services">Services</a><a href="#home">Back to top</a></nav><div className="contact-colophon"><span>Razim Manzoor · Dubai, UAE</span><span>© {new Date().getFullYear()}</span></div></div></footer>;
}

export default function FullPreview({ initialMode = 'client', copyUnavailable = false }) {
  const mode = useSyncExternalStore(subscribeAudience, currentAudience, () => initialMode);
  const systemReduced = useReducedMotion();
  const [quiet, setQuiet] = useState(false);
  const [replay, setReplay] = useState(0);
  const [selected, setSelected] = useState([]);
  const [keyboard, setKeyboard] = useState(false);
  const reduced = Boolean(quiet || systemReduced);
  useEffect(() => {
    let frame = 0;
    const scroll = (focus = false, instant = false) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const target = document.getElementById(window.location.hash.slice(1));
        if (!target) return;
        target.scrollIntoView({ behavior: reduced || instant ? 'instant' : 'smooth', block: 'start' });
        if (focus) target.focus({ preventScroll: true });
      });
    };
    const click = event => {
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      const link = event.target instanceof Element ? event.target.closest('a[href^="#"]') : null;
      const hash = link?.getAttribute('href');
      if (!hash || hash === '#' || !document.getElementById(hash.slice(1))) return;
      event.preventDefault();
      navigateToSection(hash);
      scroll(true, event.detail === 0);
    };
    const history = () => scroll();
    document.addEventListener('click', click);
    window.addEventListener('popstate', history);
    window.addEventListener('hashchange', history);
    scroll();
    return () => { cancelAnimationFrame(frame); document.removeEventListener('click', click); window.removeEventListener('popstate', history); window.removeEventListener('hashchange', history); };
  }, [reduced]);
  function changeAudience(next) {
    if (!quiet && !keyboard) { setAudienceMode(next); return; }
    const url = new URL(window.location.href);
    url.searchParams.set('view', next);
    url.hash = '';
    window.history.pushState(null, '', url);
    window.dispatchEvent(new Event('portfolio:navigate'));
    requestAnimationFrame(() => document.getElementById('audience-content')?.scrollIntoView({ behavior: 'instant', block: 'start' }));
  }
  return <MotionConfig reducedMotion={reduced || keyboard ? 'always' : 'never'} transition={{ duration: 0.22, ease }}><div className="full-preview" data-reduced={String(reduced)} data-keyboard={String(keyboard)} onKeyDown={() => setKeyboard(true)} onPointerDown={() => setKeyboard(false)}>
    <a className="preview-skip" href="#main-content">Skip to content</a><NavBar />
    <main id="main-content" tabIndex={-1}><Opening mode={mode} reduced={reduced} replay={replay} />
      <div className="audience-bar"><div className="site-wrap audience-inner"><p>Choose what to explore</p><AudienceToggle mode={mode} onChange={changeAudience} /></div></div>
      <div id="audience-content">
        <div hidden={mode === 'recruiter'} className="audience-region"><ServiceIndex selected={selected} setSelected={setSelected} reduced={reduced || keyboard} /></div>
        <div hidden={mode === 'client'} className="audience-region"><Hiring /></div>
      </div>
      <Delivery mode={mode} reduced={reduced} />
      <div hidden={mode === 'recruiter'}><PreviewStudio selected={selected} setSelected={setSelected} copyUnavailable={copyUnavailable} /></div>
      <SkillsGrid />
    </main><Contact mode={mode} />
    <aside className="full-preview-tools" aria-label="Design preview controls"><span>Local design preview</span><button disabled={reduced} onClick={() => { setReplay(value => value + 1); document.getElementById('home')?.scrollIntoView({ behavior: 'instant' }); }}><RotateCcw size={14} aria-hidden="true" />Replay opening</button><label><input type="checkbox" checked={quiet} onChange={event => setQuiet(event.target.checked)} />Reduce motion</label></aside>
  </div></MotionConfig>;
}
