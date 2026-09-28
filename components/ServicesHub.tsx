"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  BrainCircuit,
  Globe,
  Workflow,
  ChartSpline,
  Layers,
  ArrowRight,
  ShieldCheck,
  KeyRound,
  BookOpenCheck,
  CheckCircle2,
} from "lucide-react";
import { HANDOVER_GUARANTEES, SERVICES_CATALOG, ServicePillar } from "@/lib/services";
import { SpotlightCard } from "@/components/magicui/spotlight-card";
import { snappySpring, spatialSpring } from "@/lib/motion";

const pillarIcons: Record<string, typeof BrainCircuit> = {
  "ai-systems": BrainCircuit,
  "web-platforms": Globe,
  automation: Workflow,
  "analytics-growth": ChartSpline,
  retainers: Layers,
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
          <h2 className="text-3xl font-black uppercase tracking-tight md:text-5xl">
            Client Services & Delivery Tracks
          </h2>
          <p className="mt-4 text-base text-[var(--muted)] leading-relaxed md:text-lg">
            Institutional-grade AI assistants, automated operational pipelines, and sub-second web platforms. Delivered with fixed milestone scopes, complete asset handover, and a 14-day warranty.
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

        {/* Active Pillar Hero Card */}
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
              href="#scope-builder"
              className="inline-flex w-fit items-center gap-2 rounded-lg bg-[var(--primary)] hover:bg-[var(--primary)]/90 px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-white shadow-sm transition-transform hover:scale-102"
            >
              Inquire for Scope <ArrowRight size={14} />
            </a>
          </div>
        </div>

        {/* Deliverable Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activePillar.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={spatialSpring}
            className="grid gap-6 md:grid-cols-2"
          >
            {activePillar.items.map((item) => (
              <SpotlightCard
                key={item.title}
                className="flex flex-col justify-between p-6 md:p-8"
              >
                <div>
                  <div className="flex items-center justify-between gap-3 mb-3">
                    <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-0.5 text-[10px] font-mono font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                      {item.scopeType}
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

                  <div className="mt-5 space-y-2">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[var(--muted)] block">
                      Core Deliverables
                    </span>
                    {item.deliverables.map((deliv) => (
                      <div key={deliv} className="flex items-start gap-2 text-xs text-[var(--foreground)]">
                        <CheckCircle2 size={14} className="text-emerald-500 shrink-0 mt-0.5" />
                        <span>{deliv}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-[var(--border)]">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[var(--muted)] block mb-1">
                    Business Margin Impact
                  </span>
                  <p className="text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                    {item.businessImpact}
                  </p>
                </div>
              </SpotlightCard>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Handover Guarantees Section */}
        <div className="mt-16 rounded-2xl border border-[var(--border)] bg-[var(--surface-hover)] p-6 md:p-10">
          <div className="mb-8 max-w-xl">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[var(--primary)] block mb-1">
              Institutional Delivery Standard
            </span>
            <h3 className="text-2xl font-bold tracking-tight text-[var(--foreground)]">
              The 3 Handover Guarantees
            </h3>
          </div>

          <div className="grid gap-6 sm:grid-cols-3">
            {HANDOVER_GUARANTEES.map((g) => {
              const GIcon = guaranteeIcons[g.iconName] || ShieldCheck;
              return (
                <div
                  key={g.title}
                  className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-5 shadow-xs"
                >
                  <div className="grid h-10 w-10 place-items-center rounded-lg border border-[var(--border)] bg-[var(--surface-hover)] text-[var(--primary)] mb-3">
                    <GIcon size={20} />
                  </div>
                  <h4 className="text-base font-bold text-[var(--foreground)]">
                    {g.title}
                  </h4>
                  <p className="mt-2 text-xs text-[var(--muted)] leading-relaxed">
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
