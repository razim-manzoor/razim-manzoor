"use client";

import { useState } from "react";
import { BrainCircuit, Globe, Workflow, ChartSpline, Wrench, ArrowRight, Check, KeyRound, BookOpenCheck, ShieldCheck } from "lucide-react";
import { HANDOVER_GUARANTEES, SERVICES_CATALOG } from "@/lib/services";
import { selectServiceForPlanner } from "@/lib/project-planner";

const icons = { launch: Globe, operations: Workflow, ai: BrainCircuit, data: ChartSpline, improve: Wrench };
const handoverIcons = [KeyRound, BookOpenCheck, ShieldCheck];

export default function ServicesHub() {
  const [activeId, setActiveId] = useState(SERVICES_CATALOG[0].id);
  const active = SERVICES_CATALOG.find((pillar) => pillar.id === activeId) ?? SERVICES_CATALOG[0];

  return (
    <section id="services" tabIndex={-1} className="py-16 md:py-24">
      <div className="container mx-auto px-5 md:px-8">
        <div className="mb-8 max-w-3xl">
          <h2 className="text-3xl font-bold tracking-tight md:text-5xl">What do you want to make possible?</h2>
          <p className="mt-4 text-base leading-relaxed text-[var(--muted)] md:text-lg">
            Start with the result you need. I can take a project from understanding the problem through design, development, integration, and handover, using reusable foundations where they fit. Explore a need below, combine areas, or bring your own brief.
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
          <div className="mt-6 divide-y divide-[var(--border)] border-y border-[var(--border)]">
            {active.items.map((item) => (
              <article key={item.id} className="grid min-w-0 gap-x-10 gap-y-3 py-7 md:grid-cols-[0.8fr_1.2fr]">
                <div>
                <h4 className="text-xl font-semibold leading-snug">{item.title}</h4>
                <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">{item.tagline}</p>
                <a href="#studio" onClick={() => selectServiceForPlanner(item.id)} className="mt-3 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-[var(--accent)]" aria-label={`Discuss this: ${item.title}`}>Discuss this <ArrowRight size={15} aria-hidden="true" /></a>
                </div>
                <div>
                <p className="text-base leading-relaxed text-[var(--muted)]">{item.description}</p>
                <p className="mt-3 text-sm font-medium text-[var(--foreground)]">{item.businessImpact}</p>
                <details className="mt-5 border-t border-[var(--border)] pt-3">
                  <summary className="flex min-h-11 items-center text-sm font-semibold text-[var(--accent)]">What the build can include</summary>
                  <ul className="mt-2 space-y-2 text-sm text-[var(--muted)]">
                    {item.deliverables.map((deliverable) => <li key={deliverable} className="flex gap-2"><Check size={15} className="mt-0.5 shrink-0 text-[var(--accent)]" aria-hidden="true" /><span>{deliverable}</span></li>)}
                  </ul>
                  <p className="mt-4 text-xs leading-relaxed text-[var(--muted)]">Tools depend on your scope: {item.tech.slice(1).join(" · ")}.</p>
                </details>
                </div>
              </article>
            ))}
          </div>
        </div>
        <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-xl text-sm leading-relaxed text-[var(--muted)]">Not sure what to ask for? Describe what happens today and what you want to change. We can work out the right approach together.</p>
          <a href="#studio" className="action-secondary shrink-0">Help me define the project <ArrowRight size={16} aria-hidden="true" /></a>
        </div>
        <div className="mt-12 grid gap-6 border-t border-[var(--border)] pt-8 md:grid-cols-3">
          {HANDOVER_GUARANTEES.map((item, index) => {
            const Icon = handoverIcons[index];
            return <div key={item.title}><h3 className="flex items-center gap-2 text-base font-semibold"><Icon size={18} className="text-[var(--accent)]" aria-hidden="true" />{item.title}</h3><p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">{item.description}</p><p className="mt-2 text-xs leading-relaxed text-[var(--muted)]">{item.scopeTerms}</p></div>;
          })}
        </div>
      </div>
    </section>
  );
}
