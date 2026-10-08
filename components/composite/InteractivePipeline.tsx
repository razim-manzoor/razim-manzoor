"use client";
import { useRef } from "react";
import { useInView } from "motion/react";
import { ArrowRight, Check, PanelTop } from "lucide-react";

const steps = [
  { title: "Understand the work", detail: "Start with the business goal, the people using the system, and the tools already in place. Agree on scope, constraints, budget, and what a successful delivery looks like." },
  { title: "Build & review", detail: "Adapt reusable foundations to your requirements. Review a working version early, test the important user journeys, and keep progress visible as the build takes shape." },
  { title: "Launch & hand over", detail: "Deploy the agreed build, document how to use and maintain it, and walk your team through the result. Arrange ongoing development if you need it." },
];

export function InteractivePipeline() {
  const illustration = useRef<HTMLDivElement>(null);
  const inView = useInView(illustration, { once: true, amount: 0.35 });
  return (
    <section id="pipeline" tabIndex={-1} className="portfolio-section delivery-section">
      <div className="site-wrap">
        <div className="section-heading">
          <h2 className="section-title">A clear path from<br />idea to handover.</h2>
          <div><p className="section-description">The process stays simple even when the system has many moving parts.</p><p className="mt-4 text-sm leading-relaxed text-[var(--muted)]">Focused work typically takes 1–2 weeks; a scoped application often takes 3–4. Timing is confirmed after we understand the requirements.</p></div>
        </div>
        <div ref={illustration} className={`process-visual${inView ? " play" : ""}`}>
          <figure className="workflow-figure">
            <div className="workflow-canvas">
              <div className="workflow-request"><strong>The agreed brief</strong><dl className="delivery-brief"><div><dt>Goal</dt><dd>What needs to change</dd></div><div><dt>Scope</dt><dd>What we’ll build</dd></div></dl></div>
              <div className="workflow-connection" aria-hidden="true"><span /><ArrowRight size={22} /></div>
              <div className="workflow-route"><PanelTop size={56} aria-hidden="true" /><strong>Build &amp; review</strong><span>Try it together.<br />Agree the next changes.</span></div>
              <div className="workflow-connection workflow-return" aria-hidden="true"><span /><ArrowRight size={22} /></div>
              <div className="workflow-result"><div className="result-top" aria-hidden="true"><i /><i /><i /></div><strong>Ready for handover</strong>{["Code & access", "Setup notes", "A walkthrough"].map(label => <div key={label} className="result-row"><Check size={16} aria-hidden="true" /><span>{label}</span></div>)}</div>
            </div>
            <figcaption>A clear scope, a reviewable build and a usable handover.</figcaption>
          </figure>
        </div>
        <ol className="delivery-steps">
          {steps.map((step, index) => (
            <li key={step.title}>
              <span aria-hidden="true" className="step-number">{index + 1}</span>
              <h3 className="text-[22px] font-semibold">{step.title}</h3>
              <p className="mt-4 text-sm leading-7 text-[var(--muted)]">{step.detail}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
