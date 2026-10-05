"use client";

const steps = [
  { title: "Understand the work", detail: "Start with the business goal, the people using the system, and the tools already in place. Agree on scope, constraints, budget, and what a successful delivery looks like." },
  { title: "Build & review", detail: "Adapt reusable foundations to your requirements. Review a working version early, test the important user journeys, and keep progress visible as the build takes shape." },
  { title: "Launch & hand over", detail: "Deploy the agreed build, document how to use and maintain it, and walk your team through the result. Arrange ongoing development if you need it." },
];

export function InteractivePipeline() {
  return (
    <section id="pipeline" tabIndex={-1} className="border-y border-[var(--border)] bg-[var(--surface)] py-16 md:py-20">
      <div className="container mx-auto px-5 md:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">A clear path from idea to handover.</h2>
            <p className="mt-4 text-base leading-relaxed text-[var(--muted)]">The process stays simple even when the system has many moving parts.</p>
            <p className="mt-5 text-sm leading-relaxed text-[var(--muted)]">Focused work typically takes 1–2 weeks; a scoped application often takes 3–4. Timing is confirmed after we understand the requirements.</p>
          </div>
          <ol className="space-y-7">
            {steps.map((step, index) => (
              <li key={step.title} className="flex gap-4">
                <span aria-hidden="true" className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[var(--border)] text-sm font-semibold text-[var(--accent)]">{index + 1}</span>
                <div><h3 className="text-lg font-semibold">{step.title}</h3><p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">{step.detail}</p></div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
