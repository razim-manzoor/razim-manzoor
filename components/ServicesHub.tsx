"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    ArrowUpRight,
    BookOpenCheck,
    BrainCircuit,
    ChartSpline,
    CheckCircle2,
    Globe,
    KeyRound,
    Layers,
    ShieldCheck,
    Sparkles,
    Workflow,
} from "lucide-react";
import { HANDOVER_GUARANTEES, SERVICES_CATALOG, ServicePillar } from "@/lib/services";

const pillarIcons: Record<string, typeof BrainCircuit> = {
    "ai-systems": BrainCircuit,
    "web-platforms": Globe,
    "automation": Workflow,
    "analytics-growth": ChartSpline,
    "retainers": Layers,
};

const guaranteeIcons: Record<string, typeof ShieldCheck> = {
    ShieldCheck,
    KeyRound,
    BookOpenCheck,
};

export default function ServicesHub() {
    const [activePillarId, setActivePillarId] = useState<string>(SERVICES_CATALOG[0].id);
    const activePillar: ServicePillar = SERVICES_CATALOG.find((p) => p.id === activePillarId) || SERVICES_CATALOG[0];
    const ActiveIcon = pillarIcons[activePillar.id] || Sparkles;

    return (
        <section id="services" className="relative py-20 md:py-32 page-noise">
            <div className="container mx-auto px-5 md:px-8">
                <div className="mb-12 border-t border-[var(--card-border)] pt-5">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-60px" }}
                    >
                        <h2 className="max-w-4xl text-4xl font-black uppercase leading-[0.95] md:text-7xl">
                            Turnkey engineering. Measured outcomes.
                        </h2>
                        <p className="mt-5 max-w-2xl text-lg leading-8 text-muted">
                            Institutional-grade web platforms, conversational AI assistants, and automated workflow pipelines. Built with production standards, clear milestone pricing, and complete asset handover.
                        </p>
                    </motion.div>
                </div>

                {/* Pillar Switcher Navigation */}
                <div className="mb-10 flex flex-wrap gap-2 border-b border-[var(--card-border)] pb-6">
                    {SERVICES_CATALOG.map((pillar) => {
                        const Icon = pillarIcons[pillar.id] || Sparkles;
                        const isActive = pillar.id === activePillarId;

                        return (
                            <button
                                key={pillar.id}
                                onClick={() => setActivePillarId(pillar.id)}
                                className={`inline-flex items-center gap-2.5 px-4 py-2.5 text-xs font-bold uppercase tracking-[0.16em] transition-all cursor-pointer ${isActive
                                    ? "bg-foreground text-background shadow-md -translate-y-0.5"
                                    : "border border-[var(--card-border)] bg-surface text-muted hover:text-foreground hover:bg-background"
                                    }`}
                            >
                                <Icon size={15} className={isActive ? "text-[var(--accent)]" : "text-muted"} />
                                {pillar.shortTitle}
                            </button>
                        );
                    })}
                </div>

                {/* Active Pillar Summary */}
                <div className="mb-8 border border-[var(--card-border)] bg-surface p-6 md:p-8">
                    <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
                        <div className="flex items-center gap-4">
                            <div className="grid h-12 w-12 place-items-center bg-foreground text-background">
                                <ActiveIcon size={24} />
                            </div>
                            <div>
                                <h3 className="text-2xl font-black uppercase md:text-3xl">{activePillar.title}</h3>
                                <p className="mt-1 text-sm text-muted">{activePillar.summary}</p>
                            </div>
                        </div>
                        <a
                            href="#scope-builder"
                            className="inline-flex w-fit items-center gap-2 bg-[var(--accent)] px-4 py-2.5 text-xs font-bold uppercase tracking-[0.16em] text-white transition-transform hover:-translate-y-0.5"
                        >
                            Inquire for Scope <ArrowUpRight size={14} />
                        </a>
                    </div>
                </div>

                {/* Deliverable Cards Grid */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activePillar.id}
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -16 }}
                        transition={{ duration: 0.35 }}
                        className="grid gap-6 md:grid-cols-2"
                    >
                        {activePillar.items.map((item, idx) => (
                            <div
                                key={item.title}
                                className="group relative flex flex-col justify-between border border-[var(--card-border)] bg-background p-6 shadow-sm transition-all hover:shadow-md md:p-8"
                            >
                                <div className="absolute inset-x-0 top-0 h-1 bg-[var(--card-border)] group-hover:bg-[var(--accent)] transition-colors" />

                                <div>
                                    <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
                                        <span className="border border-[var(--card-border)] bg-surface px-2.5 py-1 text-[10px] font-black uppercase tracking-[0.2em] text-[var(--accent)]">
                                            {item.scopeType}
                                        </span>
                                        <span className="text-[11px] font-semibold text-muted">
                                            Track #{idx + 1}
                                        </span>
                                    </div>

                                    <h4 className="text-xl font-black uppercase leading-tight md:text-2xl">
                                        {item.title}
                                    </h4>
                                    <p className="mt-2 text-xs font-bold uppercase tracking-[0.1em] text-muted">
                                        {item.tagline}
                                    </p>
                                    <p className="mt-4 text-sm leading-relaxed text-muted">
                                        {item.description}
                                    </p>

                                    {/* Key Deliverables */}
                                    <div className="mt-6 space-y-2.5 border-t border-[var(--card-border)] pt-5">
                                        <p className="text-[11px] font-black uppercase tracking-[0.2em] text-foreground">
                                            Included Scope:
                                        </p>
                                        {item.deliverables.map((del) => (
                                            <div key={del} className="flex items-start gap-2.5 text-xs text-muted">
                                                <CheckCircle2 size={15} className="mt-0.5 shrink-0 text-[var(--accent)]" />
                                                <span className="leading-snug">{del}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="mt-8 border-t border-[var(--card-border)] pt-5">
                                    <div className="mb-4 bg-surface p-3 text-xs leading-relaxed text-foreground">
                                        <span className="font-bold text-[var(--accent)]">Business Outcome: </span>
                                        {item.businessImpact}
                                    </div>

                                    <div className="flex flex-wrap gap-1.5">
                                        {item.tech.map((t) => (
                                            <span
                                                key={t}
                                                className="border border-[var(--card-border)] bg-surface-strong/60 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.12em]"
                                            >
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </AnimatePresence>

                {/* Handover Trust Standards Banner */}
                <div className="mt-16 border border-[var(--card-border)] bg-surface p-6 md:p-10">
                    <div className="mb-6 flex flex-col gap-2">
                        <span className="text-xs font-black uppercase tracking-[0.22em] text-[var(--accent)]">
                            Institutional Delivery Standards
                        </span>
                        <h3 className="text-2xl font-black uppercase md:text-3xl">
                            How client handovers work
                        </h3>
                        <p className="max-w-2xl text-sm leading-relaxed text-muted">
                            Every project is delivered with formal handover bundles, production sign-off certificates, and binding engineering guarantees.
                        </p>
                    </div>

                    <div className="grid gap-6 md:grid-cols-3">
                        {HANDOVER_GUARANTEES.map((g) => {
                            const Icon = guaranteeIcons[g.iconName] || ShieldCheck;
                            return (
                                <div key={g.title} className="border border-[var(--card-border)] bg-background p-5">
                                    <div className="mb-3 grid h-10 w-10 place-items-center bg-foreground text-background">
                                        <Icon size={18} className="text-[var(--warm)]" />
                                    </div>
                                    <h4 className="text-base font-black uppercase leading-snug">{g.title}</h4>
                                    <p className="mt-2 text-xs leading-relaxed text-muted">{g.description}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
