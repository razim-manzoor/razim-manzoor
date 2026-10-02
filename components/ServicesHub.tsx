"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  BrainCircuit,
  Globe,
  Workflow,
  ChartSpline,
  ArrowRight,
  ShieldCheck,
  KeyRound,
  BookOpenCheck,
  CheckCircle2,
} from "lucide-react";
import { HANDOVER_GUARANTEES, SERVICES_CATALOG, ServicePillar } from "@/lib/services";
import { snappySpring, spatialSpring } from "@/lib/motion";

const pillarIcons: Record<string, typeof BrainCircuit> = {
  "websites-apps": Globe,
  "ai-agents": BrainCircuit,
  "workflow-automation": Workflow,
  "dashboards-sprints": ChartSpline,
};

const guaranteeIcons: Record<string, typeof ShieldCheck> = {
  ShieldCheck,
  KeyRound,
  BookOpenCheck,
};

export default function ServicesHub() {
  const [activePillarId, setActivePillarId] = useState<string>(SERVICES_CATALOG[0].id);
  const activePillar: ServicePillar =
    SERVICES_CATALOG.find((p) => p.id === activePillarId) || SERVICES_CATALOG[0];
  const ActiveIcon = pillarIcons[activePillar.id] || BrainCircuit;

  return (
    <section id="services" className="relative py-20 md:py-28 overflow-hidden blueprint-grid">
      <div className="container mx-auto px-5 md:px-8">
        {/* Section Header */}
        <div className="mb-12 max-w-3xl">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-mono font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
            Stack-Agnostic Execution &bull; Rapid Delivery
          </div>
          <h2 className="text-3xl font-black uppercase tracking-tight md:text-5xl">
            Services & What I Build
          </h2>
          <p className="mt-3 text-base text-[var(--muted)] leading-relaxed md:text-lg">
            Custom AI agents, high-performance websites, turnkey web applications, and automated operations built for founders, business owners, and growing teams. Fast delivery in weeks across any modern tech stack with 100% code ownership.
          </p>
        </div>

        {/* Pillar Switcher Tabs */}
        <div className="mb-8 flex flex-wrap gap-2 border-b border-[var(--border)] pb-6">
          {SERVICES_CATALOG.map((pillar) => {
            const Icon = pillarIcons[pillar.id] || BrainCircuit;
            const isActive = pillar.id === activePillarId;

            return (
              <motion.button
                key={pillar.id}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={snappySpring}
                onClick={() => setActivePillarId(pillar.id)}
                className={`inline-flex items-center gap-2 rounded-lg px-4 py-2.5 text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer select-none ${
                  isActive
                    ? "bg-[var(--primary)] text-white shadow-sm"
                    : "border border-[var(--border)] bg-[var(--surface)] text-[var(--muted)] hover:text-[var(--foreground)] hover:bg-[var(--surface-hover)]"
                }`}
              >
                <Icon size={15} />
                {pillar.shortTitle}
              </motion.button>
            );
          })}
        </div>

        {/* Active Pillar Overview Banner */}
        <div className="mb-8 rounded-xl border border-[var(--border)] bg-[var(--surface)] p-6 md:p-8">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
            <div className="flex items-center gap-4">
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-[var(--surface-hover)] border border-[var(--border)] text-[var(--primary)]">
                <ActiveIcon size={24} />
              </div>
              <div>
                <h3 className="text-2xl font-bold tracking-tight text-[var(--foreground)]">
                  {activePillar.title}
                </h3>
                <p className="mt-1 text-sm text-[var(--muted)] max-w-2xl leading-relaxed">
                  {activePillar.summary}
                </p>
              </div>
            </div>
            <a
              href="#studio"
              className="inline-flex w-fit items-center gap-2 rounded-lg bg-[var(--primary)] hover:bg-[var(--primary)]/90 px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-white shadow-sm transition-transform hover:scale-102"
            >
              Inquire About a Project <ArrowRight size={14} />
            </a>
          </div>
        </div>

        {/* Deliverable Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activePillar.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={spatialSpring}
            className="grid gap-6 md:grid-cols-2"
          >
            {activePillar.items.map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-6 md:p-7 flex flex-col justify-between hover:border-[var(--primary)]/50 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-0.5 text-[10px] font-mono font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                      {item.scopeType}
                    </span>
                    <span className="text-[10px] font-mono font-semibold text-emerald-600 dark:text-emerald-400">
                      {item.tech[0]}
                    </span>
                  </div>

                  <h4 className="text-xl font-bold tracking-tight text-[var(--foreground)]">
                    {item.title}
                  </h4>
                  <p className="mt-1 text-xs font-medium text-[var(--primary)]">
                    {item.tagline}
                  </p>

                  <p className="mt-3 text-sm text-[var(--muted)] leading-relaxed">
                    {item.description}
                  </p>

                  <div className="mt-4 space-y-1.5">
                    {item.deliverables.map((deliv) => (
                      <div key={deliv} className="flex items-start gap-2 text-xs text-[var(--foreground)]">
                        <CheckCircle2 size={13} className="text-emerald-500 shrink-0 mt-0.5" />
                        <span>{deliv}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {item.tech.slice(1).map((t) => (
                      <span key={t} className="rounded-md border border-[var(--border)] bg-[var(--surface-hover)] px-2 py-0.5 text-[10px] font-mono text-[var(--muted)]">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-5 pt-3 border-t border-[var(--border)]">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[var(--muted)] block mb-0.5">
                    The Value
                  </span>
                  <p className="text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                    {item.businessImpact}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* 3-Step Delivery Workflow */}
        <div className="mt-14 mb-10">
          <div className="mb-6">
            <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 block">
              Clear & Predictable Delivery
            </span>
            <h3 className="text-2xl font-bold tracking-tight text-[var(--foreground)] mt-1">
              How Working Together Works
            </h3>
            <p className="text-sm text-[var(--muted)] mt-1 max-w-2xl leading-relaxed">
              Simple, transparent progression from day one to launch. Zero surprises, no hidden costs, and total visibility every step of the way.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-6 relative overflow-hidden flex flex-col justify-between">
              <span className="text-4xl font-black font-mono text-[var(--muted)]/15 absolute top-4 right-5 select-none pointer-events-none">01</span>
              <div>
                <div className="inline-flex items-center justify-center rounded-lg bg-emerald-500/10 px-2.5 py-1 text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400 mb-4">
                  Phase 01
                </div>
                <h4 className="font-bold text-base text-[var(--foreground)]">
                  Scope & Fixed Milestone
                </h4>
                <p className="mt-2 text-xs text-[var(--muted)] leading-relaxed">
                  We translate your business goals into concrete specifications and deliverables. You get a clear timeline and fixed milestone pricing with zero surprise charges.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-[var(--border)] text-[11px] font-mono text-[var(--primary)] font-semibold">
                Turnaround: 24 to 48 hours scoping
              </div>
            </div>

            <div className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-6 relative overflow-hidden flex flex-col justify-between">
              <span className="text-4xl font-black font-mono text-[var(--muted)]/15 absolute top-4 right-5 select-none pointer-events-none">02</span>
              <div>
                <div className="inline-flex items-center justify-center rounded-lg bg-[var(--primary)]/10 px-2.5 py-1 text-xs font-mono font-bold text-[var(--primary)] mb-4">
                  Phase 02
                </div>
                <h4 className="font-bold text-base text-[var(--foreground)]">
                  Rapid Sprint Execution
                </h4>
                <p className="mt-2 text-xs text-[var(--muted)] leading-relaxed">
                  Production-grade build delivered in 1 to 3 weeks across your target tech stack. Continuous async progress updates and staging previews keep you in control.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-[var(--border)] text-[11px] font-mono text-emerald-600 dark:text-emerald-400 font-semibold">
                Turnaround: 1 to 3 week sprints
              </div>
            </div>

            <div className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-6 relative overflow-hidden flex flex-col justify-between">
              <span className="text-4xl font-black font-mono text-[var(--muted)]/15 absolute top-4 right-5 select-none pointer-events-none">03</span>
              <div>
                <div className="inline-flex items-center justify-center rounded-lg bg-emerald-500/10 px-2.5 py-1 text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400 mb-4">
                  Phase 03
                </div>
                <h4 className="font-bold text-base text-[var(--foreground)]">
                  100% Handover & Guarantee
                </h4>
                <p className="mt-2 text-xs text-[var(--muted)] leading-relaxed">
                  Full transfer of repositories, cloud hosting accounts, and domain credentials. Includes simple documentation and 14 days of complimentary bug-fix support.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-[var(--border)] text-[11px] font-mono text-[var(--primary)] font-semibold">
                Included: 14-day warranty
              </div>
            </div>
          </div>
        </div>

        {/* Handover Guarantees Banner */}
        <div className="mt-12 rounded-xl border border-[var(--border)] bg-[var(--surface-hover)] p-6 md:p-8">
          <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[var(--border)] pb-4">
            <div>
              <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[var(--primary)] block">
                Clear & Simple Handover
              </span>
              <h3 className="text-xl font-bold tracking-tight text-[var(--foreground)]">
                How I Work & What You Get
              </h3>
            </div>
            <span className="text-xs font-mono text-[var(--muted)]">All projects include 100% transfer</span>
          </div>

          <div className="grid gap-6 sm:grid-cols-3">
            {HANDOVER_GUARANTEES.map((g) => {
              const GIcon = guaranteeIcons[g.iconName] || ShieldCheck;
              return (
                <div key={g.title} className="space-y-1.5">
                  <div className="flex items-center gap-2 text-[var(--primary)] font-bold text-sm">
                    <GIcon size={16} />
                    <span>{g.title}</span>
                  </div>
                  <p className="text-xs text-[var(--muted)] leading-relaxed">
                    {g.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
