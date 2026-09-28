"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Copy, Mail, MessageSquare, Sparkles } from "lucide-react";
import { USER_DATA } from "@/lib/data";

interface ServiceTrackOption {
    id: string;
    label: string;
    category: string;
}

const TRACK_OPTIONS: ServiceTrackOption[] = [
    { id: "rag", label: "Enterprise RAG / AI Knowledge Assistant", category: "AI & RAG" },
    { id: "local-llm", label: "Private On-Prem LLM (Ollama/DeepSeek)", category: "AI & RAG" },
    { id: "doc-extract", label: "Automated Document Parsing & Extraction", category: "AI & RAG" },
    { id: "web-platform", label: "Turnkey Next.js Web Platform", category: "Web Platform" },
    { id: "lead-wizard", label: "High-Ticket Lead Qualification Wizard", category: "Web Platform" },
    { id: "n8n-make", label: "n8n / Make CRM & Operations Pipeline", category: "Automation" },
    { id: "whatsapp-triage", label: "WhatsApp Speed-to-Lead Instant Route", category: "Automation" },
    { id: "powerbi", label: "Executive Power BI Analytics Dashboard", category: "Analytics" },
    { id: "capi", label: "Meta Conversions API (CAPI) Cloudflare Worker", category: "Attribution" },
    { id: "retainer", label: "Fractional Advisory / Care Retainer", category: "Retainer" },
];

const TIMELINES = [
    "Sprint (1–2 weeks)",
    "Turnkey Milestone (3–4 weeks)",
    "Ongoing Monthly Retainer",
    "Advisory / Scoping Call First",
];

export default function ServiceScopeBuilder() {
    const [selectedTracks, setSelectedTracks] = useState<string[]>(["rag", "web-platform"]);
    const [timeline, setTimeline] = useState<string>(TIMELINES[1]);
    const [companyName, setCompanyName] = useState<string>("");
    const [contactInfo, setContactInfo] = useState<string>("");
    const [briefNotes, setBriefNotes] = useState<string>("");
    const [copied, setCopied] = useState<boolean>(false);

    const toggleTrack = (id: string) => {
        setSelectedTracks((prev) =>
            prev.includes(id) ? prev.filter((t) => t !== id) : [...prev, id]
        );
    };

    const selectedTrackLabels = TRACK_OPTIONS.filter((t) => selectedTracks.includes(t.id)).map((t) => t.label);

    const generateInquiryText = () => {
        return `Hello Razim,\n\nI would like to inquire about project scope with you:\n\n` +
            `• Company / Project: ${companyName.trim() || "Not specified"}\n` +
            `• Contact: ${contactInfo.trim() || "Not specified"}\n` +
            `• Selected Tracks:\n${selectedTrackLabels.length > 0 ? selectedTrackLabels.map((l) => `  - ${l}`).join("\n") : "  - General Consultation"}\n` +
            `• Target Timeline: ${timeline}\n` +
            (briefNotes.trim() ? `• Project Context: ${briefNotes.trim()}\n\n` : `\n`) +
            `Looking forward to hearing from you.`;
    };

    const handleCopy = () => {
        navigator.clipboard.writeText(generateInquiryText());
        setCopied(true);
        setTimeout(() => setCopied(false), 2500);
    };

    const encodedWhatsApp = encodeURIComponent(generateInquiryText());
    const cleanPhone = USER_DATA.contact.phone.replace(/[^0-9]/g, "");
    const whatsAppLink = `https://wa.me/${cleanPhone}?text=${encodedWhatsApp}`;

    const encodedSubject = encodeURIComponent(`Project Scope Inquiry: ${companyName.trim() || "New Client"}`);
    const encodedBody = encodeURIComponent(generateInquiryText());
    const mailtoLink = `mailto:${USER_DATA.contact.email}?subject=${encodedSubject}&body=${encodedBody}`;

    return (
        <section id="scope-builder" className="relative py-20 md:py-32">
            <div className="container mx-auto px-5 md:px-8">
                <div className="mb-12 grid gap-6 border-t border-[var(--card-border)] pt-5 md:grid-cols-[0.7fr_1.3fr]">
                    <p className="text-xs font-black uppercase tracking-[0.28em] text-[var(--accent)]">Project Scope Builder</p>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-60px" }}
                    >
                        <h2 className="max-w-4xl text-4xl font-black uppercase leading-[0.95] md:text-7xl">
                            Configure your engagement.
                        </h2>
                        <p className="mt-5 max-w-2xl text-lg leading-8 text-muted">
                            Select the modules relevant to your business needs, pick your target deployment timeframe, and dispatch an instant brief directly to my inbox or WhatsApp.
                        </p>
                    </motion.div>
                </div>

                <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
                    {/* Left Column: Interactive Scope Configuration */}
                    <div className="space-y-8 border border-[var(--card-border)] bg-surface p-6 md:p-8">
                        <div>
                            <label className="mb-3 block text-xs font-black uppercase tracking-[0.18em] text-foreground">
                                1. Select Required Functional Tracks
                            </label>
                            <p className="mb-4 text-xs text-muted">Check all areas where you require engineering or automation deliverables:</p>
                            <div className="grid gap-2.5 sm:grid-cols-2">
                                {TRACK_OPTIONS.map((track) => {
                                    const isSelected = selectedTracks.includes(track.id);
                                    return (
                                        <button
                                            type="button"
                                            key={track.id}
                                            onClick={() => toggleTrack(track.id)}
                                            className={`flex items-start gap-2.5 border p-3 text-left transition-all cursor-pointer ${isSelected
                                                ? "border-[var(--accent)] bg-background text-foreground shadow-sm"
                                                : "border-[var(--card-border)] bg-background/50 text-muted hover:border-foreground/30"
                                                }`}
                                        >
                                            <div
                                                className={`mt-0.5 grid h-4 w-4 shrink-0 place-items-center border text-xs transition-colors ${isSelected
                                                    ? "border-[var(--accent)] bg-[var(--accent)] text-white"
                                                    : "border-[var(--card-border)] bg-surface"
                                                    }`}
                                            >
                                                {isSelected && <Check size={12} strokeWidth={3} />}
                                            </div>
                                            <div>
                                                <span className="block text-xs font-bold leading-tight">{track.label}</span>
                                                <span className="block text-[10px] uppercase tracking-wider text-muted mt-1">{track.category}</span>
                                            </div>
                                        </button>
                                    );
                                })}
                            </div>
                        </div>

                        <div>
                            <label className="mb-3 block text-xs font-black uppercase tracking-[0.18em] text-foreground">
                                2. Target Deployment Timeframe
                            </label>
                            <div className="grid gap-2 sm:grid-cols-2">
                                {TIMELINES.map((t) => (
                                    <button
                                        type="button"
                                        key={t}
                                        onClick={() => setTimeline(t)}
                                        className={`border px-3.5 py-2.5 text-left text-xs font-bold uppercase tracking-[0.1em] transition-all cursor-pointer ${timeline === t
                                            ? "border-[var(--accent)] bg-background text-foreground font-black"
                                            : "border-[var(--card-border)] bg-background/50 text-muted hover:border-foreground/30"
                                            }`}
                                    >
                                        {t}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="grid gap-4 sm:grid-cols-2">
                            <div>
                                <label htmlFor="company-name" className="mb-2 block text-xs font-bold uppercase tracking-[0.14em] text-muted">
                                    Company / Project Name
                                </label>
                                <input
                                    id="company-name"
                                    type="text"
                                    placeholder="e.g. Acme Corp"
                                    value={companyName}
                                    onChange={(e) => setCompanyName(e.target.value)}
                                    className="w-full border border-[var(--card-border)] bg-background px-3.5 py-2.5 text-sm text-foreground focus:outline-none focus:border-[var(--accent)]"
                                />
                            </div>
                            <div>
                                <label htmlFor="contact-info" className="mb-2 block text-xs font-bold uppercase tracking-[0.14em] text-muted">
                                    Your Email or WhatsApp
                                </label>
                                <input
                                    id="contact-info"
                                    type="text"
                                    placeholder="e.g. founder@acme.com"
                                    value={contactInfo}
                                    onChange={(e) => setContactInfo(e.target.value)}
                                    className="w-full border border-[var(--card-border)] bg-background px-3.5 py-2.5 text-sm text-foreground focus:outline-none focus:border-[var(--accent)]"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="brief-notes" className="mb-2 block text-xs font-bold uppercase tracking-[0.14em] text-muted">
                                Operational Context or Current Bottleneck (Optional)
                            </label>
                            <textarea
                                id="brief-notes"
                                rows={3}
                                placeholder="Describe current manual bottlenecks, existing software stack, or main goal..."
                                value={briefNotes}
                                onChange={(e) => setBriefNotes(e.target.value)}
                                className="w-full border border-[var(--card-border)] bg-background p-3 text-sm text-foreground focus:outline-none focus:border-[var(--accent)]"
                            />
                        </div>
                    </div>

                    {/* Right Column: Generated Brief Preview & Dispatch Actions */}
                    <div className="flex flex-col justify-between border border-[var(--card-border)] bg-background p-6 md:p-8">
                        <div>
                            <div className="mb-4 flex items-center justify-between border-b border-[var(--card-border)] pb-4">
                                <div className="flex items-center gap-2">
                                    <Sparkles size={16} className="text-[var(--accent)]" />
                                    <h3 className="text-sm font-black uppercase tracking-[0.18em]">
                                        Generated Inquiry Brief
                                    </h3>
                                </div>
                                <button
                                    type="button"
                                    onClick={handleCopy}
                                    className="inline-flex items-center gap-1.5 border border-[var(--card-border)] bg-surface px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider transition-colors hover:bg-surface-strong"
                                >
                                    {copied ? <Check size={13} className="text-emerald-500" /> : <Copy size={13} />}
                                    {copied ? "Copied" : "Copy"}
                                </button>
                            </div>

                            <pre className="overflow-x-auto whitespace-pre-wrap bg-surface p-4 text-xs font-mono leading-relaxed text-foreground/90 border border-[var(--card-border)]">
                                {generateInquiryText()}
                            </pre>

                            <div className="mt-5 space-y-2 border-t border-[var(--card-border)] pt-4 text-xs text-muted">
                                <p className="font-semibold text-foreground">What happens after you send:</p>
                                <p>1. Direct review within 24 hours.</p>
                                <p>2. Initial technical feasibility check & milestone SOW draft.</p>
                                <p>3. Direct kickoff with clear deliverables and defect warranty.</p>
                            </div>
                        </div>

                        <div className="mt-8 space-y-3">
                            <a
                                href={whatsAppLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex w-full items-center justify-center gap-2 bg-[#25D366] px-5 py-3.5 text-xs font-black uppercase tracking-[0.16em] text-black transition-transform hover:-translate-y-0.5 shadow-sm"
                            >
                                <MessageSquare size={16} /> Send via WhatsApp
                            </a>
                            <a
                                href={mailtoLink}
                                className="flex w-full items-center justify-center gap-2 bg-foreground px-5 py-3.5 text-xs font-black uppercase tracking-[0.16em] text-background transition-transform hover:-translate-y-0.5"
                            >
                                <Mail size={16} /> Send via Email
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
