"use client";

import { useEffect, useRef, useState } from "react";
import { Check, Copy, Mail, MessageCircle, ArrowUpRight } from "lucide-react";
import { SERVICES_CATALOG } from "@/lib/services";
import { emailDraft, whatsappDraft, WHATSAPP_URL } from "@/lib/contact";
import { estimateAutomation } from "@/lib/estimate";
import { projectSelectionEvent } from "@/lib/project-planner";
import { BriefExample } from "@/components/ServiceExample";

const tracks = SERVICES_CATALOG.flatMap((pillar) => pillar.items.map((item) => ({ ...item, category: pillar.shortTitle, needId: pillar.id })));
const timelines = ["Help me decide", "A new build", "An improvement to an existing system", "Ongoing development or support"];
const number = new Intl.NumberFormat("en-AE", { maximumFractionDigits: 0 });

function RangeField({ id, label, value, max, step = 1, display, onChange }: {
  id: string; label: string; value: number; max: number; step?: number; display: string; onChange: (value: number) => void;
}) {
  return (
    <div>
      <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
        <label htmlFor={id} className="text-sm font-medium">{label}</label>
        <output htmlFor={id} className="text-sm font-semibold tabular-nums text-[var(--accent)]">{display}</output>
      </div>
      <input id={id} name={id} type="range" min={0} max={max} step={step} value={value} aria-valuetext={display} onChange={(event) => onChange(Number(event.target.value))} className="min-h-11 w-full accent-[var(--primary)]" />
    </div>
  );
}

export function TurnkeyStudio() {
  const [activeTab, setActiveTab] = useState<"scope" | "estimate">("scope");
  const [selected, setSelected] = useState<string[]>([]);
  const [selectedNeeds, setSelectedNeeds] = useState<string[]>([]);
  const [briefOpen, setBriefOpen] = useState(true);
  const [timeline, setTimeline] = useState(timelines[0]);
  const [company, setCompany] = useState("");
  const [contact, setContact] = useState("");
  const [notes, setNotes] = useState("");
  const [existingTools, setExistingTools] = useState("");
  const [deadline, setDeadline] = useState("");
  const [copyStatus, setCopyStatus] = useState<"idle" | "copying" | "success" | "error">("idle");
  const [copiedText, setCopiedText] = useState("");
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [currency, setCurrency] = useState("AED");
  const [hours, setHours] = useState(14);
  const [hourlyValue, setHourlyValue] = useState(100);
  const [automationPercent, setAutomationPercent] = useState(60);
  const [upfrontCost, setUpfrontCost] = useState(7500);
  const [runningCost, setRunningCost] = useState(200);

  useEffect(() => () => { if (timer.current) clearTimeout(timer.current); }, []);
  useEffect(() => {
    const handleSelection = (event: Event) => {
      const id = (event as CustomEvent<string>).detail;
      if (!tracks.some((track) => track.id === id)) return;
      setSelected((previous) => previous.includes(id) ? previous : [...previous, id]);
      setActiveTab("scope");
      setBriefOpen(false);
    };
    window.addEventListener(projectSelectionEvent, handleSelection);
    return () => window.removeEventListener(projectSelectionEvent, handleSelection);
  }, []);

  const chosen = tracks.filter((track) => selected.includes(track.id));
  const needs = SERVICES_CATALOG.filter((need) => selectedNeeds.includes(need.id) || chosen.some((track) => track.needId === need.id));
  const message = [
    "Hi Razim, I'd like to discuss a project.",
    company.trim() ? `Name / company: ${company.trim()}` : "",
    contact.trim() ? `Contact: ${contact.trim()}` : "",
    needs.length ? `What I want to achieve:\n${needs.map((need) => `- ${need.shortTitle}`).join("\n")}` : "I'd like help defining the scope.",
    chosen.length ? `Services I'd like to discuss:\n${chosen.map((track) => `- ${track.title}`).join("\n")}` : "",
    `Starting point: ${timeline}`,
    existingTools.trim() ? `Current tools / setup: ${existingTools.trim()}` : "",
    deadline.trim() ? `Target date: ${deadline.trim()}` : "",
    notes.trim() ? `What I need:\n${notes.trim()}` : "",
  ].filter(Boolean).join("\n\n");
  const hasProjectContext = chosen.length > 0 || needs.length > 0 || [company, contact, notes, existingTools, deadline].some((value) => value.trim()) || timeline !== timelines[0];

  const copy = async () => {
    setCopyStatus("copying");
    if (timer.current) clearTimeout(timer.current);
    try {
      await navigator.clipboard.writeText(message);
      setCopiedText(message);
      setCopyStatus("success");
      timer.current = setTimeout(() => setCopyStatus("idle"), 3000);
    } catch {
      setCopyStatus("error");
    }
  };

  const result = estimateAutomation({ weeklyHours: hours, hourlyValue, automationPercent, upfrontCost, monthlyRunningCost: runningCost });
  const money = (value: number) => new Intl.NumberFormat("en-AE", { style: "currency", currency, maximumFractionDigits: 0 }).format(value);
  const payback = result.paybackMonths === null ? "No modeled payback" : result.paybackMonths === 0 ? "No upfront cost" : result.paybackMonths < 0.1 ? "Under 0.1 months" : `${result.paybackMonths.toFixed(1)} months`;
  const copied = copyStatus === "success" && copiedText === message;

  return (
    <section id="studio" aria-labelledby="studio-title" tabIndex={-1} className="portfolio-section">
      <div className={`site-wrap planner-layout ${activeTab === "estimate" ? "planner-estimating" : ""}`}>
        <div className="planner-intro">
          <div className="max-w-2xl">
            <h2 id="studio-title" className="section-title">Start with the problem or the idea.</h2>
            <p className="mt-4 text-base leading-relaxed text-[var(--muted)]">{chosen.length ? "Your service selection is ready. Add a project note below, or continue straight to WhatsApp. You can combine or remove services." : "Describe what needs to change. This optional planner helps you start a conversation, even if you are still deciding on the solution."}</p>
          </div>
          <a href={hasProjectContext ? whatsappDraft(message) : WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="text-action mt-6 text-[var(--accent)]"><MessageCircle size={18} aria-hidden="true" /> {hasProjectContext ? "Discuss on WhatsApp" : "Just chat on WhatsApp"}</a>
          <BriefExample />
        </div>
        <div className="planner-panel">
        {chosen.length > 0 && <div className="mb-7 border-y border-[var(--border)] py-4"><h3 className="text-base font-semibold">Services to discuss ({chosen.length})</h3><ul className="mt-2 flex flex-wrap gap-x-6 gap-y-2">{chosen.map((track) => <li key={track.id} className="flex min-w-0 items-center gap-3 text-sm"><span>{track.title}</span><button type="button" onClick={() => setSelected((previous) => previous.filter((id) => id !== track.id))} aria-label={`Remove ${track.title}`} className="min-h-11 shrink-0 px-2 font-semibold text-[var(--accent)]">Remove</button></li>)}</ul></div>}
        <div role="group" aria-label="Project planning tools" className="mb-8 flex flex-wrap gap-2 border-b border-[var(--border)] pb-5">
          {([{ id: "scope", label: "Project planner" }, { id: "estimate", label: "Time-value estimate" }] as const).map((tab) => (
            <button key={tab.id} type="button" aria-pressed={activeTab === tab.id} aria-controls={`tool-${tab.id}`} onClick={() => setActiveTab(tab.id)} className={`min-h-12 rounded-lg px-4 text-sm font-semibold transition-colors ${activeTab === tab.id ? "bg-[var(--primary)] text-[var(--on-primary)]" : "bg-[var(--surface-hover)] text-[var(--muted)] hover:text-[var(--foreground)]"}`}>{tab.label}</button>
          ))}
        </div>

        <div id="tool-scope" hidden={activeTab !== "scope"} className="planner-scope">
          <details open={briefOpen} onToggle={(event) => setBriefOpen(event.currentTarget.open)}>
            <summary className="flex min-h-11 items-center text-sm font-semibold text-[var(--accent)]">Adjust goals & starting point (optional)</summary>
            <div className="mt-4 space-y-7">
            <fieldset>
              <legend className="mb-3 text-lg font-semibold">What would you like to achieve?</legend>
              <p className="mb-4 text-sm leading-relaxed text-[var(--muted)]">Choose any that fit, combine several, or leave this blank. A custom idea is welcome.</p>
              <div className="space-y-2">
                {SERVICES_CATALOG.map((need) => {
                  const implied = chosen.some((track) => track.needId === need.id);
                  return <label key={need.id} className="flex min-h-12 cursor-pointer items-center gap-3 rounded-lg border border-[var(--border)] p-3 text-sm"><input type="checkbox" name="project-need" value={need.id} checked={selectedNeeds.includes(need.id) || implied} onChange={() => {
                    if (selectedNeeds.includes(need.id) || implied) {
                      setSelectedNeeds((previous) => previous.filter((id) => id !== need.id));
                      setSelected((previous) => previous.filter((id) => !need.items.some((item) => item.id === id)));
                    } else setSelectedNeeds((previous) => [...previous, need.id]);
                  }} className="h-4 w-4 shrink-0 accent-[var(--primary)]" /><span>{need.shortTitle}</span></label>;
                })}
              </div>
              <details className="mt-5">
                <summary className="flex min-h-11 items-center text-sm font-semibold text-[var(--accent)]">Choose specific services (optional)</summary>
                <p className="mt-2 text-xs leading-relaxed text-[var(--muted)]">Only choose these if you already have a solution in mind. Services can be combined into one scope.</p>
                <div className="mt-4 space-y-5">
                  {SERVICES_CATALOG.map((need) => <fieldset key={need.id}><legend className="mb-2 text-sm font-semibold">{need.shortTitle}</legend><div className="space-y-1">{need.items.map((track) => <label key={track.id} className="flex min-h-11 cursor-pointer items-center gap-3 text-sm"><input type="checkbox" name="project-area" value={track.id} checked={selected.includes(track.id)} onChange={() => setSelected((previous) => previous.includes(track.id) ? previous.filter((id) => id !== track.id) : [...previous, track.id])} className="h-4 w-4 shrink-0 accent-[var(--primary)]" /><span>{track.title}</span></label>)}</div></fieldset>)}
                </div>
              </details>
            </fieldset>
            <fieldset>
              <legend className="mb-3 text-lg font-semibold">Where are you starting?</legend>
              <div className="grid gap-2 sm:grid-cols-2">
                {timelines.map((item) => <label key={item} className={`flex min-h-14 cursor-pointer items-center gap-3 rounded-lg border p-3 text-sm ${timeline === item ? "border-[var(--primary)] bg-[var(--surface-hover)]" : "border-[var(--border)] hover:bg-[var(--surface-hover)]"}`}><input type="radio" name="project-plan" value={item} checked={timeline === item} onChange={() => setTimeline(item)} className="h-4 w-4 shrink-0 accent-[var(--primary)]" /><span>{item}</span></label>)}
              </div>
              <p className="mt-3 text-xs leading-relaxed text-[var(--muted)]">We work out the scope, approach, budget, and timing together before work starts.</p>
            </fieldset>
            </div>
          </details>
          <div className="min-w-0">
            <h3 className="text-lg font-semibold">Your project note</h3>
            <p className="mt-2 text-sm text-[var(--muted)]">All fields are optional. This creates a draft for you to review.</p>
            <div className="mt-5 grid gap-5 sm:grid-cols-2">
              <div><label htmlFor="project-name" className="mb-2 block text-sm font-medium">Your name or company</label><input id="project-name" name="name" autoComplete="name" maxLength={160} value={company} onChange={(event) => setCompany(event.target.value)} placeholder="For example, Alex / Acme" className="w-full rounded-lg border border-[var(--control-border)] bg-[var(--surface-hover)] px-3 py-3 text-base" /></div>
              <div><label htmlFor="project-contact" className="mb-2 block text-sm font-medium">Email or phone</label><input id="project-contact" name="contact" autoComplete="off" spellCheck={false} maxLength={160} value={contact} onChange={(event) => setContact(event.target.value)} placeholder="alex@example.com or +971…" className="w-full rounded-lg border border-[var(--control-border)] bg-[var(--surface-hover)] px-3 py-3 text-base" /></div>
              <div className="sm:col-span-2"><label htmlFor="project-notes" className="mb-2 block text-sm font-medium">The problem, idea, or result you want</label><textarea id="project-notes" name="notes" autoComplete="off" maxLength={2000} rows={4} value={notes} onChange={(event) => setNotes(event.target.value)} placeholder="Who is this for? What should they be able to do? What is difficult or missing today?" className="w-full resize-y rounded-lg border border-[var(--control-border)] bg-[var(--surface-hover)] px-3 py-3 text-base leading-relaxed" /><p className="mt-1 text-right text-xs tabular-nums text-[var(--muted)]">{notes.length}/2,000</p></div>
              <details className="sm:col-span-2"><summary className="flex min-h-11 items-center justify-between gap-3 text-sm font-semibold text-[var(--accent)]">Add tools or timing (optional)</summary><div className="mt-3 grid gap-5 sm:grid-cols-2">
              <div><label htmlFor="project-tools" className="mb-2 block text-sm font-medium">Current tools or website</label><input id="project-tools" name="tools" maxLength={300} value={existingTools} onChange={(event) => setExistingTools(event.target.value)} placeholder="For example, Shopify, Excel, a CRM, or starting from scratch" className="w-full rounded-lg border border-[var(--control-border)] bg-[var(--surface-hover)] px-3 py-3 text-base" /></div>
              <div><label htmlFor="project-deadline" className="mb-2 block text-sm font-medium">Target date or timing</label><input id="project-deadline" name="deadline" maxLength={160} value={deadline} onChange={(event) => setDeadline(event.target.value)} placeholder="For example, before launch in November, or flexible" className="w-full rounded-lg border border-[var(--control-border)] bg-[var(--surface-hover)] px-3 py-3 text-base" /></div>
              </div></details>
            </div>
            <details className="mt-4"><summary className="flex min-h-11 items-center text-sm font-semibold text-[var(--accent)]">Preview your message</summary><p className="mt-2 whitespace-pre-wrap break-words rounded-lg bg-[var(--surface-hover)] p-4 text-sm leading-relaxed">{message}</p></details>
            <div className="mt-5 grid grid-cols-2 gap-2">
              <a href={whatsappDraft(message)} target="_blank" rel="noopener noreferrer" className="action-primary col-span-2"><MessageCircle size={18} aria-hidden="true" /> Review in WhatsApp <ArrowUpRight size={15} aria-hidden="true" /></a>
              <a href={emailDraft(message)} className="action-secondary"><Mail size={17} aria-hidden="true" /> Open an email draft</a>
              <button type="button" onClick={copy} disabled={copyStatus === "copying"} className="action-secondary disabled:opacity-60">{copied ? <Check size={17} aria-hidden="true" /> : <Copy size={17} aria-hidden="true" />}{copyStatus === "copying" ? "Copying…" : copied ? "Copied" : "Copy message"}</button>
            </div>
            <p className="mt-3 text-xs leading-relaxed text-[var(--muted)]">Nothing is submitted here. WhatsApp or your email app opens a draft; you choose when to send it.</p>
            <p role="status" aria-live="polite" className="mt-2 text-sm">{copied ? "Message copied." : copyStatus === "error" ? "Copy did not work. Select the message below and copy it manually." : ""}</p>
            {copyStatus === "error" && <div className="mt-3"><label htmlFor="manual-copy" className="mb-2 block text-sm font-medium">Message to copy</label><textarea id="manual-copy" readOnly value={message} rows={6} className="w-full rounded-lg border border-[var(--control-border)] bg-[var(--surface-hover)] p-3 text-base" /></div>}
          </div>
        </div>

        <div id="tool-estimate" hidden={activeTab !== "estimate"} className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-5 md:p-7">
            <h3 className="text-xl font-semibold">Explore the value of time released</h3>
            <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">An illustrative model using your assumptions. Changing currency changes the unit; it does not convert the amounts.</p>
            <div className="mt-6 space-y-4">
              <div><label htmlFor="estimate-currency" className="mb-2 block text-sm font-medium">Currency</label><select id="estimate-currency" name="currency" value={currency} onChange={(event) => setCurrency(event.target.value)} className="min-h-12 rounded-lg border border-[var(--control-border)] bg-[var(--surface-hover)] px-3 text-base text-[var(--foreground)]"><option value="AED">AED</option><option value="USD">USD</option></select></div>
              <RangeField id="manual-hours" label="Manual hours per week" value={hours} max={80} display={`${hours} hours`} onChange={setHours} />
              <RangeField id="hourly-rate" label="Value per work hour" value={hourlyValue} max={500} step={5} display={money(hourlyValue)} onChange={setHourlyValue} />
              <RangeField id="automation-rate" label="Share of work automated" value={automationPercent} max={100} step={5} display={`${automationPercent}%`} onChange={setAutomationPercent} />
              <RangeField id="implementation-cost" label="Upfront build cost" value={upfrontCost} max={50000} step={500} display={money(upfrontCost)} onChange={setUpfrontCost} />
              <RangeField id="running-cost" label="Monthly running & upkeep cost" value={runningCost} max={5000} step={50} display={money(runningCost)} onChange={setRunningCost} />
            </div>
          </div>
          <div className="min-w-0 rounded-xl bg-[var(--surface-hover)] p-5 md:p-7">
            <h3 className="text-xl font-semibold">Estimated annual time value</h3>
            <dl className="mt-6 divide-y divide-[var(--border)]">
              {[
                ["Hours released per year", `${number.format(result.annualHours)} hours`],
                ["Value of that time", money(result.annualTimeValue)],
                ["Annual running costs", money(runningCost * 12)],
                ["Value after running costs", money(result.annualNetValue)],
                ["Modeled payback", payback],
              ].map(([label, value]) => <div key={label} className="flex flex-wrap justify-between gap-x-4 gap-y-1 py-4"><dt className="text-sm text-[var(--muted)]">{label}</dt><dd className="break-words text-lg font-semibold tabular-nums">{value}</dd></div>)}
            </dl>
            <p className="mt-5 text-sm leading-relaxed text-[var(--muted)]">Assumes 52 working weeks and a constant automation rate. Time released is capacity, not guaranteed cash savings. Payback uses that time value after running costs; it is not a revenue forecast or a project quote.</p>
            {result.annualNetValue <= 0 && <p className="mt-4 text-sm font-medium">At these assumptions, running costs meet or exceed the value of time released.</p>}
            <button type="button" onClick={() => setActiveTab("scope")} className="action-secondary mt-6 w-full">Discuss a real scope <ArrowUpRight size={16} aria-hidden="true" /></button>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}
