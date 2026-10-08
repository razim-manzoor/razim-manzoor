"use client";

import { useState } from "react";
import { BrainCircuit, Globe, Workflow, ChartSpline, Wrench, ArrowRight, Check, ChevronDown } from "lucide-react";
import { HANDOVER_GUARANTEES, SERVICES_CATALOG } from "@/lib/services";
import { selectServiceForPlanner } from "@/lib/project-planner";
import { ServiceExample } from "@/components/ServiceExample";

const icons = { launch: Globe, operations: Workflow, ai: BrainCircuit, data: ChartSpline, improve: Wrench };

export default function ServicesHub() {
  const [activeId, setActiveId] = useState(SERVICES_CATALOG[0].id);
  const active = SERVICES_CATALOG.find((pillar) => pillar.id === activeId) ?? SERVICES_CATALOG[0];

  return (
    <section id="services" tabIndex={-1} className="portfolio-section">
      <div className="site-wrap">
        <div className="section-heading">
          <h2 className="section-title">What do you want to make possible?</h2>
          <p className="section-description">
            One partner from the first idea to a working system. Explore a need, combine services, or bring your own brief. I adapt reusable foundations to your business and existing tools.
          </p>
        </div>
        <div role="group" aria-label="Explore by business need" className="mb-8 grid grid-cols-2 gap-2 sm:flex sm:flex-wrap">
          {SERVICES_CATALOG.map((pillar) => {
            const Icon = icons[pillar.id as keyof typeof icons];
            return (
              <button key={pillar.id} type="button" aria-pressed={pillar.id === activeId} aria-controls="service-details" onClick={() => setActiveId(pillar.id)} className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-lg px-3 text-sm font-semibold transition-colors sm:px-5 ${pillar.id === activeId ? "bg-[var(--primary)] text-[var(--on-primary)]" : "border border-[var(--border)] bg-[var(--surface)] text-[var(--muted)] hover:bg-[var(--surface-hover)] hover:text-[var(--foreground)]"}`}>
                <Icon size={17} aria-hidden="true" /> {pillar.shortTitle}
              </button>
            );
          })}
        </div>
        <div id="service-details">
          <h3 className="text-2xl font-semibold tracking-tight">{active.title}</h3>
          <p className="mt-2 max-w-2xl text-base leading-relaxed text-[var(--muted)]">{active.summary}</p>
          <div className="service-grid">
            {active.items.map((item) => {
              return (
              <article key={item.id} className="service-card">
                <div className="service-visual"><ServiceExample id={item.id} /></div>
                <div className="service-card-body">
                <h4 className="text-xl font-semibold leading-snug">{item.title}</h4>
                <p className="mt-3 min-h-12 text-sm leading-relaxed text-[var(--muted)]">{item.tagline}</p>
                <ul aria-label={`Examples for ${item.title}`} className="mt-4 space-y-2 text-sm text-[var(--foreground)]">
                  {item.deliverables.slice(0, 3).map((example) => <li key={example} className="flex gap-2"><Check size={15} className="mt-0.5 shrink-0 text-[var(--accent)]" aria-hidden="true" /><span>{example}</span></li>)}
                </ul>
                <details className="service-details mt-5 border-t border-[var(--border)] pt-2">
                  <summary className="flex min-h-11 items-center justify-between gap-3 text-sm font-semibold text-[var(--accent)]">Scope & deliverables<ChevronDown size={16} className="disclosure-chevron shrink-0" aria-hidden="true" /></summary>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">{item.description}</p>
                  <p className="mt-3 text-sm leading-relaxed">{item.businessImpact}</p>
                  <ul className="mt-2 space-y-2 text-sm text-[var(--muted)]">
                    {item.deliverables.slice(3).map((deliverable) => <li key={deliverable} className="flex gap-2"><Check size={15} className="mt-0.5 shrink-0 text-[var(--accent)]" aria-hidden="true" /><span>{deliverable}</span></li>)}
                  </ul>
                  <p className="mt-4 text-xs leading-relaxed text-[var(--muted)]">Tools depend on your scope: {item.tech.slice(1).join(" · ")}.</p>
                </details>
                <a href="#studio" onClick={(event) => {
                  if (event.button === 0 && !event.metaKey && !event.ctrlKey && !event.shiftKey && !event.altKey) selectServiceForPlanner(item.id);
                }} className="text-action service-discuss mt-4 w-full justify-between" aria-label={`Discuss this: ${item.title}`}>Discuss this <ArrowRight size={16} className="service-action-arrow" aria-hidden="true" /></a>
                </div>
              </article>
            );})}
          </div>
        </div>
        <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-xl text-sm leading-relaxed text-[var(--muted)]">Not sure what to ask for? Describe what happens today and what you want to change. We can work out the right approach together.</p>
          <a href="#studio" className="text-action shrink-0">Help me define the project <ArrowRight size={16} aria-hidden="true" /></a>
        </div>
        <div className="mt-12 grid gap-6 border-t border-[var(--border)] pt-8 md:grid-cols-3">
          {HANDOVER_GUARANTEES.map((item) => {
            return <div key={item.title}><h3 className="flex items-center gap-2 text-base font-semibold">{item.title}</h3><p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">{item.description}</p><p className="mt-2 text-xs leading-relaxed text-[var(--muted)]">{item.scopeTerms}</p></div>;
          })}
        </div>
      </div>
    </section>
  );
}
