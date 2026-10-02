"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Check, Copy, MessageSquare, Send, Clock, TrendingUp, Calculator, Settings2, ShieldCheck, Sparkles } from "lucide-react";
import { USER_DATA } from "@/lib/data";
import { snappySpring } from "@/lib/motion";
import { NumberTicker } from "@/components/magicui/number-ticker";
import { Card } from "@/components/ui/card";
import {
  SERVICES_CATALOG,
  HANDOVER_GUARANTEES,
  SPRINT_SCOPES,
} from "@/lib/services";

interface ServiceTrackOption {
  id: string;
  label: string;
  pillarId: string;
  category: string;
  scopeType: string;
  typicalSprint: string;
}

const TRACK_OPTIONS: ServiceTrackOption[] = SERVICES_CATALOG.flatMap((pillar) =>
  pillar.items.map((item) => ({
    id: item.id,
    label: item.title,
    pillarId: pillar.id,
    category: pillar.shortTitle,
    scopeType: item.scopeType,
    typicalSprint:
      item.scopeType === "Fixed Milestone"
        ? "1-2 weeks"
        : item.scopeType === "Turnkey Build"
        ? "3-4 weeks"
        : "Monthly rolling",
  }))
);

const CATEGORIES = ["All", ...SERVICES_CATALOG.map((p) => p.shortTitle)];

const TIMELINES = [
  "Fixed Milestone (1-2 weeks)",
  "Turnkey Build (3-4 weeks)",
  "Monthly Retainer (Ongoing)",
  "Scoping Consultation Call First",
];

export function TurnkeyStudio() {
  const [activeTab, setActiveTab] = useState<"scope" | "roi">("scope");

  // Scope Builder State
  const [selectedTracks, setSelectedTracks] = useState<string[]>([
    "rag-assistant",
    "turnkey-web",
  ]);
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [timeline, setTimeline] = useState<string>(TIMELINES[1]);
  const [companyName, setCompanyName] = useState<string>("");
  const [contactInfo, setContactInfo] = useState<string>("");
  const [projectNotes, setProjectNotes] = useState<string>("");
  const [copied, setCopied] = useState<boolean>(false);

  // ROI Calculator State
  const [hours, setHours] = useState<number>(14);
  const [hourlyRate, setHourlyRate] = useState<number>(75);
  const [automationRate, setAutomationRate] = useState<number>(80);
  const [implementationCost, setImplementationCost] = useState<number>(7500);

  const annualSavings = Math.round(hours * 52 * hourlyRate * (automationRate / 100));
  const paybackMonths =
    annualSavings > 0
      ? Number(((implementationCost / annualSavings) * 12).toFixed(1))
      : 0;

  const toggleTrack = (id: string) => {
    setSelectedTracks((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const filteredTracks =
    activeCategory === "All"
      ? TRACK_OPTIONS
      : TRACK_OPTIONS.filter((track) => track.category === activeCategory);

  const generateSummaryText = () => {
    const selectedNames = TRACK_OPTIONS.filter((t) =>
      selectedTracks.includes(t.id)
    ).map((t) => t.label);

    return `*Project Inquiry & Scope*
*Name / Company:* ${companyName.trim() || "Not specified"}
*Contact:* ${contactInfo.trim() || "Not specified"}
*Selected Areas (${selectedTracks.length}):*
${selectedNames.map((n) => `- ${n}`).join("\n")}
*Preferred Timeline:* ${timeline}
${projectNotes.trim() ? `*Project Notes:*\n${projectNotes.trim()}` : ""}
*Includes:*
- 14 days of bug-fix support
- 100% code & asset ownership
- Clear walkthrough documentation`;
  };

  const handleCopyScope = () => {
    navigator.clipboard.writeText(generateSummaryText());
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  const handleWhatsAppDispatch = () => {
    const text = encodeURIComponent(generateSummaryText());
    const phone = "971503001697";
    window.open(`https://wa.me/${phone}?text=${text}`, "_blank");
  };

  return (
    <section id="studio" className="relative py-20 md:py-28 overflow-hidden blueprint-grid">
      <div className="container mx-auto px-5 md:px-8">
        {/* Section Header */}
        <div className="mb-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-mono font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 mb-3">
            <Sparkles size={13} /> Project Estimator & Scope Builder
          </div>
          <h2 className="text-3xl font-black uppercase tracking-tight md:text-5xl">
            Start a Project
          </h2>
          <p className="mt-3 text-base text-[var(--muted)] leading-relaxed md:text-lg">
            Select the services you need or calculate the hours automation could save your team. Then send a quick message directly to my WhatsApp.
          </p>
        </div>

        {/* Master Studio Tabs */}
        <div className="mb-8 flex items-center gap-2 border-b border-[var(--border)] pb-4">
          <button
            onClick={() => setActiveTab("scope")}
            className={`inline-flex items-center gap-2 rounded-lg px-5 py-2.5 text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
              activeTab === "scope"
                ? "bg-[var(--primary)] text-white shadow-sm"
                : "border border-[var(--border)] bg-[var(--surface)] text-[var(--muted)] hover:text-[var(--foreground)]"
            }`}
          >
            <Settings2 size={15} /> 1. Scope & Inquire
          </button>
          <button
            onClick={() => setActiveTab("roi")}
            className={`inline-flex items-center gap-2 rounded-lg px-5 py-2.5 text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
              activeTab === "roi"
                ? "bg-[var(--primary)] text-white shadow-sm"
                : "border border-[var(--border)] bg-[var(--surface)] text-[var(--muted)] hover:text-[var(--foreground)]"
            }`}
          >
            <Calculator size={15} /> 2. Time Savings Calculator
          </button>
        </div>

        {/* TAB 1: SCOPE BUILDER */}
        {activeTab === "scope" && (
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            {/* Left: Track Selection */}
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-mono font-bold uppercase tracking-wider text-[var(--muted)] mb-3">
                  Step 1: Filter & Select Architectural Tracks
                </h3>

                {/* Category Pills */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {CATEGORIES.map((category) => (
                    <button
                      key={category}
                      onClick={() => setActiveCategory(category)}
                      className={`rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer ${
                        activeCategory === category
                          ? "bg-[var(--foreground)] text-[var(--background)]"
                          : "border border-[var(--border)] bg-[var(--surface)] text-[var(--muted)] hover:text-[var(--foreground)]"
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>

                {/* Track Checkboxes */}
                <div className="grid gap-2.5 sm:grid-cols-2 max-h-[360px] overflow-y-auto pr-1">
                  {filteredTracks.map((track) => {
                    const isSelected = selectedTracks.includes(track.id);
                    return (
                      <button
                        key={track.id}
                        type="button"
                        onClick={() => toggleTrack(track.id)}
                        className={`flex items-start gap-3 rounded-xl border p-3.5 text-left transition-all cursor-pointer select-none ${
                          isSelected
                            ? "border-[var(--primary)] bg-[var(--primary)]/10"
                            : "border-[var(--border)] bg-[var(--surface)] hover:bg-[var(--surface-hover)]"
                        }`}
                      >
                        <div
                          className={`mt-0.5 grid h-4 w-4 shrink-0 place-items-center rounded border transition-colors ${
                            isSelected
                              ? "border-[var(--primary)] bg-[var(--primary)] text-white"
                              : "border-[var(--border)] bg-transparent"
                          }`}
                        >
                          {isSelected && <Check size={12} strokeWidth={3} />}
                        </div>
                        <div>
                          <p className="text-xs font-bold text-[var(--foreground)] leading-tight">
                            {track.label}
                          </p>
                          <div className="mt-1 flex items-center gap-2">
                            <span className="text-[10px] font-mono text-[var(--primary)]">
                              {track.scopeType}
                            </span>
                            <span className="text-[10px] text-[var(--muted)]">&bull; {track.typicalSprint}</span>
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Timeline Selection */}
              <div>
                <h3 className="text-sm font-mono font-bold uppercase tracking-wider text-[var(--muted)] mb-3">
                  Step 2: Preferred Execution Velocity
                </h3>
                <div className="grid gap-2 sm:grid-cols-2">
                  {TIMELINES.map((t) => (
                    <button
                      key={t}
                      type="button"
                      onClick={() => setTimeline(t)}
                      className={`rounded-lg border px-3.5 py-2.5 text-left text-xs font-semibold transition-all cursor-pointer ${
                        timeline === t
                          ? "border-[var(--primary)] bg-[var(--primary)]/10 text-[var(--foreground)]"
                          : "border-[var(--border)] bg-[var(--surface)] text-[var(--muted)] hover:text-[var(--foreground)]"
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Operational Summary & Direct Dispatch */}
            <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 md:p-8 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-[var(--border)] pb-3">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-[var(--foreground)]">
                    Project Scope Summary
                  </h3>
                  <span className="text-xs font-mono text-emerald-500 font-bold">
                    {selectedTracks.length} Selected
                  </span>
                </div>

                <div className="space-y-3">
                  <div>
                    <label className="text-[11px] font-mono font-bold uppercase tracking-wider text-[var(--muted)] block mb-1">
                      Your Name / Company
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Faisal / Apex Logistics"
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                      className="w-full rounded-lg border border-[var(--border)] bg-[var(--surface-hover)] px-3 py-2 text-xs text-[var(--foreground)] focus:border-[var(--primary)] focus:outline-hidden"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] font-mono font-bold uppercase tracking-wider text-[var(--muted)] block mb-1">
                      Email / WhatsApp
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. faisal@example.com or +971 50..."
                      value={contactInfo}
                      onChange={(e) => setContactInfo(e.target.value)}
                      className="w-full rounded-lg border border-[var(--border)] bg-[var(--surface-hover)] px-3 py-2 text-xs text-[var(--foreground)] focus:border-[var(--primary)] focus:outline-hidden"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] font-mono font-bold uppercase tracking-wider text-[var(--muted)] block mb-1">
                      Project Notes / What You Need
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Describe what you want to build or automate..."
                      value={projectNotes}
                      onChange={(e) => setProjectNotes(e.target.value)}
                      className="w-full rounded-lg border border-[var(--border)] bg-[var(--surface-hover)] p-3 text-xs text-[var(--foreground)] focus:border-[var(--primary)] focus:outline-hidden resize-none"
                    />
                  </div>
                </div>

                {/* Handover Notice */}
                <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/5 p-3 text-[11px] text-[var(--muted)] space-y-1">
                  <div className="font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5">
                    <ShieldCheck size={13} /> Clear Delivery Standard
                  </div>
                  <p>Includes 14 days of bug-fix support, 100% code ownership, and clear walkthrough docs.</p>
                </div>
              </div>

              {/* Actions */}
              <div className="mt-6 pt-4 border-t border-[var(--border)] flex flex-col sm:flex-row gap-2.5">
                <button
                  type="button"
                  onClick={handleWhatsAppDispatch}
                  className="flex-1 inline-flex items-center justify-center gap-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 px-4 py-3 text-xs font-bold uppercase tracking-wider text-white shadow-sm transition-all cursor-pointer"
                >
                  <Send size={14} /> Send via WhatsApp
                </button>
                <button
                  type="button"
                  onClick={handleCopyScope}
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-[var(--border)] bg-[var(--surface-hover)] hover:bg-[var(--surface)] px-4 py-3 text-xs font-bold uppercase tracking-wider text-[var(--foreground)] transition-colors cursor-pointer"
                >
                  {copied ? <Check size={14} className="text-emerald-500" /> : <Copy size={14} />}
                  {copied ? "Copied" : "Copy Details"}
                </button>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: ROI CALCULATOR */}
        {activeTab === "roi" && (
          <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr]">
            {/* Left: Input Sliders */}
            <Card className="p-6 md:p-8 space-y-6">
              <div className="flex items-center justify-between border-b border-[var(--border)] pb-4">
                <h3 className="text-base font-bold text-[var(--foreground)]">
                  Process Parameters
                </h3>
                <Clock size={16} className="text-[var(--primary)]" />
              </div>

              {/* Slider 1: Hours */}
              <div>
                <div className="flex items-center justify-between text-xs mb-2">
                  <label htmlFor="manual-hours" className="font-semibold text-[var(--foreground)]">
                    Manual hours spent per week
                  </label>
                  <span className="font-mono font-bold text-[var(--primary)] text-sm tabular-nums">
                    {hours} hrs/wk
                  </span>
                </div>
                <input
                  id="manual-hours"
                  type="range"
                  min="2"
                  max="40"
                  step="1"
                  value={hours}
                  onChange={(e) => setHours(Number(e.target.value))}
                  className="w-full accent-[var(--primary)] cursor-pointer"
                />
              </div>

              {/* Slider 2: Rate */}
              <div>
                <div className="flex items-center justify-between text-xs mb-2">
                  <label htmlFor="hourly-rate" className="font-semibold text-[var(--foreground)]">
                    Blended fully-loaded hourly rate (USD)
                  </label>
                  <span className="font-mono font-bold text-[var(--primary)] text-sm tabular-nums">
                    ${hourlyRate}/hr
                  </span>
                </div>
                <input
                  id="hourly-rate"
                  type="range"
                  min="30"
                  max="200"
                  step="5"
                  value={hourlyRate}
                  onChange={(e) => setHourlyRate(Number(e.target.value))}
                  className="w-full accent-[var(--primary)] cursor-pointer"
                />
              </div>

              {/* Slider 3: Automation Efficiency */}
              <div>
                <div className="flex items-center justify-between text-xs mb-2">
                  <label htmlFor="automation-rate" className="font-semibold text-[var(--foreground)]">
                    Target Automation Efficiency
                  </label>
                  <span className="font-mono font-bold text-emerald-500 text-sm tabular-nums">
                    {automationRate}%
                  </span>
                </div>
                <input
                  id="automation-rate"
                  type="range"
                  min="40"
                  max="95"
                  step="5"
                  value={automationRate}
                  onChange={(e) => setAutomationRate(Number(e.target.value))}
                  className="w-full accent-[var(--primary)] cursor-pointer"
                />
              </div>

              {/* Slider 4: Implementation Sprint Scope */}
              <div>
                <div className="flex items-center justify-between text-xs mb-2">
                  <label htmlFor="implementation-cost" className="font-semibold text-[var(--foreground)]">
                    Estimated Solution Sprint Investment
                  </label>
                  <span className="font-mono font-bold text-[var(--foreground)] text-sm tabular-nums">
                    ${implementationCost.toLocaleString()}
                  </span>
                </div>
                <input
                  id="implementation-cost"
                  type="range"
                  min="3000"
                  max="25000"
                  step="500"
                  value={implementationCost}
                  onChange={(e) => setImplementationCost(Number(e.target.value))}
                  className="w-full accent-[var(--primary)] cursor-pointer"
                />
              </div>
            </Card>

            {/* Right: ROI Model Output */}
            <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 md:p-8 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between border-b border-[var(--border)] pb-4 mb-6">
                  <div>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[var(--muted)]">
                      Estimated Value
                    </span>
                    <h3 className="text-xl font-bold text-[var(--foreground)]">
                      Time Saved & Payback
                    </h3>
                  </div>
                  <TrendingUp size={22} className="text-emerald-500" />
                </div>

                <div className="grid gap-4 sm:grid-cols-2 mb-6">
                  <div className="rounded-xl border border-[var(--border)] bg-[var(--surface-hover)] p-4">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[var(--muted)]">
                      Annual Hours Saved
                    </span>
                    <div className="mt-1 text-2xl font-black font-mono text-[var(--primary)] tabular-nums">
                      <NumberTicker value={Math.round(hours * 52 * (automationRate / 100))} suffix=" hrs/yr" />
                    </div>
                    <p className="mt-1 text-[11px] text-[var(--muted)]">
                      Hours freed from repetitive tasks
                    </p>
                  </div>

                  <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-4">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                      Estimated Annual Savings
                    </span>
                    <div className="mt-1 text-2xl font-black font-mono text-emerald-600 dark:text-emerald-400 tabular-nums">
                      $<NumberTicker value={annualSavings} />
                    </div>
                    <p className="mt-1 text-[11px] text-emerald-600/80 dark:text-emerald-400/80 font-mono">
                      ≈ {(annualSavings * 3.67).toLocaleString()} AED/year
                    </p>
                  </div>
                </div>

                <div className="rounded-xl border border-[var(--border)] bg-[var(--surface-hover)] p-4">
                  <div className="flex items-baseline justify-between">
                    <span className="text-xs font-bold text-[var(--foreground)]">
                      Estimated Payback Time:
                    </span>
                    <span className="text-lg font-black font-mono text-[var(--primary)] tabular-nums">
                      {paybackMonths} Months
                    </span>
                  </div>
                  <div className="mt-2 h-2 w-full rounded-full bg-[var(--border)] overflow-hidden">
                    <div
                      className="h-full bg-[var(--primary)] transition-all duration-300"
                      style={{
                        width: `${Math.min(100, Math.max(10, (12 / (paybackMonths || 1)) * 10))}%`,
                      }}
                    />
                  </div>
                  <p className="mt-2 text-[11px] text-[var(--muted)] leading-relaxed">
                    Estimated savings from automating repetitive manual tasks into reliable workflows.
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[var(--border)]">
                <button
                  onClick={() => setActiveTab("scope")}
                  className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-[var(--primary)] hover:bg-[var(--primary)]/90 px-4 py-3 text-xs font-bold uppercase tracking-wider text-white shadow-sm transition-all cursor-pointer"
                >
                  Configure Project Scope &rarr;
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
