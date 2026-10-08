"use client";

import type { AudienceMode } from "@/lib/audience";
export type { AudienceMode } from "@/lib/audience";

const options: { mode: AudienceMode; label: string }[] = [
  { mode: "client", label: "For clients" },
  { mode: "recruiter", label: "For hiring teams" },
  { mode: "all", label: "Everything" },
];

export function AudienceToggle({ mode, onChange }: { mode: AudienceMode; onChange: (mode: AudienceMode) => void }) {
  return (
    <div role="group" aria-label="Choose what to explore" className="audience-toggle">
      <span aria-hidden="true" className="audience-marker" style={{ transform: `translateX(${options.findIndex((option) => option.mode === mode) * 100}%)` }} />
      {options.map((option) => (
        <button
          key={option.mode}
          type="button"
          aria-pressed={mode === option.mode}
          onClick={() => onChange(option.mode)}
          className={`relative z-10 min-h-9 sm:min-h-10 rounded-lg px-2 text-[13px] font-semibold ${mode === option.mode ? "text-[var(--on-primary)]" : "text-[var(--muted)] hover:text-[var(--foreground)]"}`}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}
