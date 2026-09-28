"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { Check, Copy, MessageSquare, Send, Sparkles } from "lucide-react";
import { USER_DATA } from "@/lib/data";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { snappySpring } from "@/lib/motion";

interface ServiceTrackOption {
  id: string;
  label: string;
  category: string;
  typicalSprint: string;
}

const TRACK_OPTIONS: ServiceTrackOption[] = [
  { id: "rag", label: "Enterprise Local RAG Knowledge Assistant", category: "AI & RAG", typicalSprint: "2-3 weeks" },
  { id: "private-llm", label: "Air-Gapped Private LLM (Ollama/DeepSeek)", category: "AI & RAG", typicalSprint: "2-3 weeks" },
  { id: "doc-extract", label: "Automated Document Parsing & Extraction", category: "AI & RAG", typicalSprint: "1-2 weeks" },
  { id: "web-platform", label: "Turnkey Next.js 16 Web Platform", category: "Web Platform", typicalSprint: "3-4 weeks" },
  { id: "lead-wizard", label: "High-Ticket Lead Qualification Wizard", category: "Web Platform", typicalSprint: "1-2 weeks" },
  { id: "n8n-make", label: "n8n / Make.com CRM & Operations Pipeline", category: "Automation", typicalSprint: "2-3 weeks" },
  { id: "whatsapp-triage", label: "WhatsApp Speed-to-Lead Instant Triage", category: "Automation", typicalSprint: "1 week" },
  { id: "powerbi", label: "Executive Power BI Analytics Dashboard", category: "Analytics", typicalSprint: "2-3 weeks" },
  { id: "capi", label: "Meta Conversions API (CAPI) Cloudflare Worker", category: "Attribution", typicalSprint: "1 week" },
  { id: "retainer", label: "Fractional Solutions & Platform Retainer", category: "Retainer", typicalSprint: "Monthly" },
];

const TIMELINES = [
  "Sprint (1-2 weeks)",
  "Turnkey Milestone (3-4 weeks)",
  "Ongoing Monthly Retainer",
  "Scoping Consultation Call First",
];

export function ServiceScopeBuilder() {
  const [selectedTracks, setSelectedTracks] = useState<string[]>(["rag", "web-platform"]);
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

  const selectedTrackObjects = TRACK_OPTIONS.filter((t) => selectedTracks.includes(t.id));

  const generateInquiryText = () => {
    return (
      `Hello Razim,\n\nI would like to inquire about project scope with you:\n\n` +
      `* Company / Project: ${companyName.trim() || "Not specified"}\n` +
      `* Contact: ${contactInfo.trim() || "Not specified"}\n` +
      `* Target Timeline: ${timeline}\n` +
      `* Selected Modules:\n${
        selectedTrackObjects.length > 0
          ? selectedTrackObjects.map((t) => `  - ${t.label}`).join("\n")
          : "  - General Advisory Consultation"
      }\n` +
      (projectNotes.trim() ? `* Context & Goals: ${projectNotes.trim()}\n\n` : `\n`) +
      `Looking forward to discussing next steps.`
    );
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(generateInquiryText());
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const cleanPhone = USER_DATA.contact.phone.replace(/[^0-9]/g, "");
  const whatsAppLink = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(generateInquiryText())}`;
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
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[var(--muted)] block mb-3">
                1. Select Architectural Modules
              </span>
              <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                {TRACK_OPTIONS.map((track) => {
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
                          ? "border-[var(--primary)] bg-[var(--surface-hover)] shadow-sm"
                          : "border-[var(--border)] bg-[var(--surface)] hover:bg-[var(--surface-hover)]"
                      }`}
                    >
                      <div>
                        <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[var(--muted)] block">
                          {track.category}
                        </span>
                        <p className="text-xs font-bold text-[var(--foreground)] mt-0.5 leading-snug">
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
              <div className="rounded-lg border border-[var(--border)] bg-[var(--surface-hover)] p-4 font-mono text-[11px] leading-relaxed text-[var(--foreground)] max-h-[300px] overflow-y-auto">
                <pre className="whitespace-pre-wrap font-mono">
                  {generateInquiryText()}
                </pre>
              </div>

              <div className="mt-4 flex items-center justify-between text-xs text-[var(--muted)]">
                <span>Includes 14-day warranty</span>
                <span>100% IP Vesting</span>
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
