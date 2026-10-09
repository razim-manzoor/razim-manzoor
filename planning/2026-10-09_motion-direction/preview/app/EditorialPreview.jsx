'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, MotionConfig, useReducedMotion } from 'motion/react';
import { ArrowUpRight, ArrowDown, Plus, Check, ChevronDown, Moon, Sun, X, RotateCcw } from 'lucide-react';
import { SERVICES_CATALOG } from '../../../../lib/services';
import { USER_DATA } from '../../../../lib/data';
import portrait from '../../../../public/profilepic.jpeg';

const scopes = SERVICES_CATALOG.flatMap(category => category.items);
const ease = [0.16, 1, 0.3, 1];
const phone = USER_DATA.contact.phone.replace(/\D/g, '');
const background = 'https://www.razim.work/?view=recruiter#dossier';

export default function EditorialPreview() {
  const [dark, setDark] = useState(false);
  const [quiet, setQuiet] = useState(false);
  const systemReduced = useReducedMotion();
  const reduced = quiet || systemReduced;
  const [replay, setReplay] = useState(0);
  const [active, setActive] = useState(SERVICES_CATALOG[0].id);
  const [selected, setSelected] = useState([]);
  const [note, setNote] = useState('');
  const [copyStatus, setCopyStatus] = useState('');
  const category = SERVICES_CATALOG.find(item => item.id === active);
  const chosen = scopes.filter(item => selected.includes(item.id));
  const draft = `Hi Razim, I'd like to discuss a project.${chosen.length ? '\n\nAreas I need help with:\n' + chosen.map(item => '- ' + item.title).join('\n') : ''}${note.trim() ? '\n\n' + note.trim() : ''}`;
  const whatsapp = `https://wa.me/${phone}?text=${encodeURIComponent(draft)}`;
  const email = `mailto:${USER_DATA.contact.email}?subject=${encodeURIComponent('Project enquiry')}&body=${encodeURIComponent(draft)}`;

  function toggle(id) {
    setSelected(previous => previous.includes(id) ? previous.filter(item => item !== id) : [...previous, id]);
    setCopyStatus('');
  }

  async function copyDraft() {
    try {
      await navigator.clipboard.writeText(draft);
      setCopyStatus('Brief copied. It is ready to paste into your message.');
    } catch {
      setCopyStatus('Copy is unavailable here. Select the draft below and copy it manually.');
    }
  }

  return <MotionConfig reducedMotion={reduced ? 'always' : 'never'} transition={{ duration: 0.22, ease }}>
    <div className="site" data-theme={dark ? 'dark' : 'light'} data-reduced={reduced ? 'true' : 'false'}>
      <a className="skip" href="#main">Skip to content</a>
      <header className="header wrap">
        <a className="wordmark" href="#main" aria-label="Razim Manzoor, home">razim<span className="brand-dot">.</span></a>
        <nav aria-label="Main navigation"><a href="#services">Services</a><a href={background}>Background<ArrowUpRight size={14} /></a><a href="#contact">Contact</a></nav>
        <button className="icon-button theme" aria-label={dark ? 'Use light theme' : 'Use dark theme'} onClick={() => setDark(!dark)}>{dark ? <Sun size={19} /> : <Moon size={19} />}</button>
      </header>

      <main id="main">
        <section className="opening wrap" aria-labelledby="name">
          <div className="name-line"><h1 id="name">Razim <span>Manzoor</span><span className="name-dot" aria-hidden="true">.</span></h1><p className="location">Based in Dubai, UAE<br /><span>Open to projects & roles</span></p></div>
          <div className="hero-body">
            <div className="intro">
              <h2>From business problem<br className="desktop-break" /> to <span>working system.</span></h2>
              <p>I build websites, applications, AI tools, automations, and dashboards around what your business needs.</p>
              <div className="hero-actions"><a className="action primary" href="#services">Explore services<ArrowDown size={18} /></a><a className="text-link" href={background}>Hiring? View my background<ArrowUpRight size={17} /></a></div>
              <p className="qualification">MBA in Data Science & Analytics.<br />Business understanding. Hands-on development.</p>
            </div>
            <motion.figure key={`${replay}-${reduced}`} className="portrait" initial={false}>
              <motion.div className="portrait-rule" aria-hidden="true" initial={{ scaleX: reduced ? 1 : 0.2 }} animate={{ scaleX: 1 }} transition={{ duration: reduced ? 0 : 0.75, ease }} />
              <motion.div className="portrait-image" initial={{ clipPath: reduced ? 'inset(0% 0% 0% 0%)' : 'inset(0% 0% 10% 0%)' }} animate={{ clipPath: 'inset(0% 0% 0% 0%)' }} transition={{ duration: reduced ? 0 : 0.75, ease }}>
                <Image src={portrait} alt="Razim Manzoor" priority sizes="(max-width: 700px) 85vw, 38vw" />
              </motion.div>
              <figcaption><span>Business analyst<br />& developer</span><ArrowUpRight size={26} aria-hidden="true" /></figcaption>
            </motion.figure>
          </div>
          <div className="hero-foot"><span>Web & applications</span><span>AI & automation</span><span>Data & reporting</span></div>
        </section>

        <section className="services wrap" id="services" aria-labelledby="services-title">
          <div className="section-intro"><h2 id="services-title">What needs<br /><span>to work better?</span></h2><p>Start with the problem you want to solve.<br />Explore the scope, or combine a few areas into a brief.</p></div>
          <div className="catalogue">
            <div className="categories" role="group" aria-label="Service categories">
              {SERVICES_CATALOG.map(item => <button key={item.id} aria-pressed={active === item.id} aria-controls="service-list" onClick={() => setActive(item.id)}>
                {active === item.id && <motion.span className="active-rule" layoutId="active-category" aria-hidden="true" transition={{ duration: reduced ? 0 : 0.2, ease }} />}
                <span>{item.shortTitle}</span><ArrowUpRight size={19} aria-hidden="true" />
              </button>)}
            </div>
            <div id="service-list" className="service-list">
              <p className="category-summary">{category.summary}</p>
              {category.items.map((item, index) => <article className="service-row" key={item.id} data-selected={selected.includes(item.id)}>
                <div className="row-main"><span className="row-number" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span><div className="row-copy"><h3>{item.title}</h3><p>{item.tagline}</p></div>
                  <button className="add-button" aria-label={`${selected.includes(item.id) ? 'Remove' : 'Add'} ${item.title} ${selected.includes(item.id) ? 'from' : 'to'} brief`} aria-pressed={selected.includes(item.id)} onClick={() => toggle(item.id)}>{selected.includes(item.id) ? <Check size={19} /> : <Plus size={19} />}<span>{selected.includes(item.id) ? 'Added' : 'Add'}</span></button>
                </div>
                <details><summary>View scope<ChevronDown size={15} aria-hidden="true" /></summary><div className="scope-details"><p>{item.description}</p><ul>{item.deliverables.map(line => <li key={line}>{line}</li>)}</ul><p className="scope-type">{item.scopeType} · Final scope agreed before starting.</p></div></details>
              </article>)}
              <a className="text-link unsure" href="#contact">Not sure where to start? Tell me about it<ArrowUpRight size={17} /></a>
            </div>
          </div>

          <section className="brief" aria-labelledby="brief-title">
            <div className="brief-heading"><h3 id="brief-title">Your project brief<span className="scope-count" aria-label={`${chosen.length} areas selected`}>{chosen.length}</span></h3><p>Choose what fits. We can work out the details together.</p></div>
            <div className="brief-content">
              {chosen.length ? <ul className="selected-list">{chosen.map(item => <motion.li layout={!reduced} key={item.id}><span>{item.title}</span><button className="icon-button" onClick={() => toggle(item.id)} aria-label={`Remove ${item.title} from brief`}><X size={17} /></button></motion.li>)}</ul> : <p className="empty">No areas selected yet. Use “Add” beside a service, or simply describe your project below.</p>}
              <label className="note-label" htmlFor="project-note">What would you like to change?</label><textarea id="project-note" value={note} onChange={event => { setNote(event.target.value); setCopyStatus(''); }} placeholder="A new website, a repetitive task, a reporting problem…" rows={3} />
              <div className="brief-actions"><a href={whatsapp} className="action primary" target="_blank" rel="noreferrer">Discuss on WhatsApp<ArrowUpRight size={17} /></a><a href={email} className="text-link">Email this brief<ArrowUpRight size={17} /></a><button className="copy-button" onClick={copyDraft}>Copy brief</button></div>
              <p className="draft-notice">Opens a draft for you to review and send.</p><p className="status" role="status">{copyStatus}</p>
              {copyStatus.startsWith('Copy is unavailable') && <textarea aria-label="Project brief for manual copying" value={draft} readOnly rows={6} />}
            </div>
          </section>
        </section>

        <section className="contact" id="contact" aria-labelledby="contact-title"><div className="wrap">
          <div className="contact-top"><h2 id="contact-title">Have a project<br />or role in mind<span>?</span></h2><p>Tell me what you are working on,<br />what needs to change, or where<br />I could help your team.</p></div>
          <div className="contact-links"><a href={`https://wa.me/${phone}`} target="_blank" rel="noreferrer"><span>Let’s talk<span className="link-caption">WhatsApp · {USER_DATA.contact.phone}</span></span><ArrowUpRight size={31} /></a><a href={`mailto:${USER_DATA.contact.email}`}><span>Write to me<span className="link-caption">{USER_DATA.contact.email}</span></span><ArrowUpRight size={31} /></a></div>
          <footer><span>Razim Manzoor · Dubai, UAE</span><a href={USER_DATA.contact.linkedin} target="_blank" rel="noreferrer">LinkedIn<ArrowUpRight size={15} /></a><span>© {new Date().getFullYear()}</span></footer>
        </div></section>
      </main>
      <aside className="preview-tools" aria-label="Design preview controls"><span>Design preview</span><button onClick={() => setReplay(replay + 1)} disabled={reduced}><RotateCcw size={14} />Replay opening</button><label><input type="checkbox" checked={quiet} onChange={event => setQuiet(event.target.checked)} />Reduce motion</label></aside>
    </div>
  </MotionConfig>;
}
