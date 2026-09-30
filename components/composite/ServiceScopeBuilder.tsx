"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { Check, Copy, MessageSquare, Send } from "lucide-react";
import { USER_DATA } from "@/lib/data";
import { snappySpring } from "@/lib/motion";
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

export function ServiceScopeBuilder() {
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

  const toggleTrack = (id: string) => {
    setSelectedTracks((prev) =>
      prev.includes(id) ? prev.filter((t) => t !== id) : [...prev, id]
    );
  };

  const displayedTracks =
    activeCategory === "All"
      ? TRACK_OPTIONS
      : TRACK_OPTIONS.filter((t) => t.category === activeCategory);

  const selectedTrackObjects = TRACK_OPTIONS.filter((t) =>
    selectedTracks.includes(t.id)
  );

  const generateInquiryText = () => {
    return (
      `Hello Razim,\n\nI would like to inquire about project scope with you:\n\n` +
      `* Company / Project: ${companyName.trim() || "Not specified"}\n` +
      `* Contact: ${contactInfo.trim() || "Not specified"}\n` +
      `* Target Timeline: ${timeline}\n` +
      `* Selected Modules (${selectedTrackObjects.length}):\n${
        selectedTrackObjects.length > 0
          ? selectedTrackObjects
              .map((t) => `  - [${t.category}] ${t.label} (${t.typicalSprint})`)
              .join("\n")
          : "  - General Advisory Consultation"
      }\n` +
      (projectNotes.trim() ? `* Context & Goals: ${projectNotes.trim()}\n\n` : `\n`) +
      `* Handover Terms: Includes 14-Day Defect Warranty, 100% IP & Asset Vesting, and Operational Runbooks.\n\n` +
      `Looking forward to discussing next steps.`
    );
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(generateInquiryText());
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const cleanPhone = USER_DATA.contact.phone.replace(/[^0-9]/g, "");
  const whatsAppLink = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(
    generateInquiryText()
  )}`;
  const mailtoLink = `mailto:${USER_DATA.contact.email}?subject=${encodeURIComponent(
    `Project Scope Inquiry: ${companyName.trim() || "New Client"}`
  )}&body=${encodeURIComponent(generateInquiryText())}`;

  return (
    <section id="scope-builder" className="relative py-20 md:py-28 overflow-hidden blueprint-grid">
      <div className="container mx-auto px-5 md:px-8">
        <div className="mb-12 max-w-3xl">
          <h2 className="text-3xl font-black uppercase tracking-tight md:text-5xl">
            Solution Scope Configurator
          </h2>
          <p className="mt-4 text-base text-[var(--muted)] leading-relaxed md:text-lg">
            Assemble the exact technical capabilities required for your project. Generates a structured brief with realistic sprint timelines, instant WhatsApp dispatch, and direct email booking.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          {/* Left Column: Track Selection */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[var(--muted)] block">
                  1. Select Architectural Modules
                </span>
                <span className="text-xs font-mono text-[var(--muted)]">
                  {selectedTracks.length} of {TRACK_OPTIONS.length} active
                </span>
              </div>

              {/* Category Filter Tabs */}
              <div className="flex flex-wrap gap-1.5 mb-3.5">
                {CATEGORIES.map((cat) => {
                  const isActive = activeCategory === cat;
                  const count =
                    cat === "All"
                      ? TRACK_OPTIONS.length
                      : TRACK_OPTIONS.filter((t) => t.category === cat).length;
                  return (
                    <button
                      key={cat}
                      type="button"
                      onClick={() => setActiveCategory(cat)}
                      className={`px-2.5 py-1 rounded-md text-[11px] font-mono font-semibold transition-colors cursor-pointer ${
                        isActive
                          ? "bg-[var(--primary)] text-white"
                          : "bg-[var(--surface)] text-[var(--muted)] hover:text-[var(--foreground)] border border-[var(--border)]"
                      }`}
                    >
                      {cat} ({count})
                    </button>
                  );
                })}
              </div>

              {/* Module Cards Grid */}
              <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2 max-h-[460px] overflow-y-auto pr-1">
                {displayedTracks.map((track) => {
                  const isSelected = selectedTracks.includes(track.id);
                  return (
                    <motion.button
                      key={track.id}
                      type="button"
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.98 }}
                      transition={snappySpring}
                      onClick={() => toggleTrack(track.id)}
                      className={`text-left p-3.5 rounded-xl border transition-all cursor-pointer flex items-start justify-between gap-3 ${
                        isSelected
                          ? "border-[var(--primary)] bg-[var(--surface-hover)] shadow-xs"
                          : "border-[var(--border)] bg-[var(--surface)] hover:bg-[var(--surface-hover)]"
                      }`}
                    >
                      <div className="min-w-0">
                        <div className="flex items-center gap-1.5 flex-wrap">
                          <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[var(--muted)]">
                            {track.category}
                          </span>
                          <span className="text-[9px] font-mono px-1.5 py-0.2 rounded border border-[var(--border)] text-[var(--muted)]">
                            {track.typicalSprint}
                          </span>
                        </div>
                        <p className="text-xs font-bold text-[var(--foreground)] mt-1 leading-snug">
                          {track.label}
                        </p>
                      </div>
                      <div
                        className={`h-4 w-4 shrink-0 rounded-full border mt-0.5 grid place-items-center ${
                          isSelected
                            ? "border-[var(--primary)] bg-[var(--primary)] text-white"
                            : "border-[var(--border)] bg-transparent"
                        }`}
                      >
                        {isSelected && <Check size={10} />}
                      </div>
                    </motion.button>
                  );
                })}
              </div>
            </div>

            {/* Target Timeline Selector */}
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[var(--muted)] block mb-3">
                2. Target Engagement Timeline
              </span>
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                {TIMELINES.map((t) => (
                  <button
                    key={t}
                    type="button"
                    onClick={() => setTimeline(t)}
                    className={`p-2.5 rounded-lg text-xs font-semibold border text-center transition-all cursor-pointer ${
                      timeline === t
                        ? "border-[var(--primary)] bg-[var(--primary)] text-white"
                        : "border-[var(--border)] bg-[var(--surface)] text-[var(--muted)] hover:text-[var(--foreground)]"
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            {/* Client Context Inputs */}
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[var(--muted)] block mb-3">
                3. Organization & Context (Optional)
              </span>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                <input
                  type="text"
                  placeholder="Company / Project Name"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  className="rounded-lg border border-[var(--border)] bg-[var(--surface)] p-3 text-xs text-[var(--foreground)] placeholder:text-[var(--muted)] focus:outline-none focus:border-[var(--primary)]"
                />
                <input
                  type="text"
                  placeholder="Your Email or WhatsApp"
                  value={contactInfo}
                  onChange={(e) => setContactInfo(e.target.value)}
                  className="rounded-lg border border-[var(--border)] bg-[var(--surface)] p-3 text-xs text-[var(--foreground)] placeholder:text-[var(--muted)] focus:outline-none focus:border-[var(--primary)]"
                />
              </div>
              <textarea
                rows={3}
                placeholder="Brief description of primary bottleneck or target workflow..."
                value={projectNotes}
                onChange={(e) => setProjectNotes(e.target.value)}
                className="mt-3 w-full rounded-lg border border-[var(--border)] bg-[var(--surface)] p-3 text-xs text-[var(--foreground)] placeholder:text-[var(--muted)] focus:outline-none focus:border-[var(--primary)] resize-none"
              />
            </div>
          </div>

          {/* Right Column: Dynamic Output Brief Card */}
          <div className="flex flex-col justify-between rounded-xl border border-[var(--border)] bg-[var(--surface)] p-6 md:p-8">
            <div>
              <div className="flex items-center justify-between border-b border-[var(--border)] pb-3 mb-4">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[var(--muted)]">
                  Generated Project Brief
                </span>
                <span className="text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400">
                  {selectedTrackObjects.length} Modules Selected
                </span>
              </div>

              {/* Formatted Text Preview */}
              <div className="rounded-lg border border-[var(--border)] bg-[var(--surface-hover)] p-4 font-mono text-[11px] leading-relaxed text-[var(--foreground)] max-h-[260px] overflow-y-auto">
                <pre className="whitespace-pre-wrap font-mono">
                  {generateInquiryText()}
                </pre>
              </div>

              {/* The 3 Handover Guarantees Included */}
              <div className="mt-4 pt-4 border-t border-[var(--border)]">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[var(--muted)] block mb-2 text-center">
                  Handover Guarantees Included
                </span>
                <div className="grid grid-cols-3 gap-1.5 text-center">
                  {HANDOVER_GUARANTEES.map((g) => (
                    <div
                      key={g.title}
                      className="rounded-md border border-[var(--border)] bg-[var(--surface-hover)] p-2 flex items-center justify-center text-center"
                    >
                      <span className="text-[10px] font-mono font-bold text-[var(--foreground)] leading-tight">
                        {g.title}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-6 pt-4 border-t border-[var(--border)] space-y-2">
              <a
                href={whatsAppLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white p-3 text-xs font-bold uppercase tracking-wider transition-colors"
              >
                <MessageSquare size={15} /> Send via WhatsApp
              </a>

              <div className="grid grid-cols-2 gap-2">
                <a
                  href={mailtoLink}
                  className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-[var(--border)] bg-[var(--surface-hover)] hover:bg-[var(--surface-hover)]/80 text-[var(--foreground)] p-2.5 text-xs font-semibold"
                >
                  <Send size={13} /> Email Dispatch
                </a>
                <button
                  type="button"
                  onClick={handleCopy}
                  className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-[var(--border)] bg-[var(--surface-hover)] hover:bg-[var(--surface-hover)]/80 text-[var(--foreground)] p-2.5 text-xs font-semibold cursor-pointer"
                >
                  {copied ? <Check size={13} className="text-emerald-500" /> : <Copy size={13} />}
                  {copied ? "Copied!" : "Copy Brief"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
