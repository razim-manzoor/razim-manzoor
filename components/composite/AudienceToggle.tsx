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
    <div role="group" aria-label="Choose what to explore" className="mx-auto flex w-full max-w-md gap-1 rounded-xl bg-[var(--surface-hover)] p-1">
      {options.map((option) => (
        <button
          key={option.mode}
          type="button"
          aria-pressed={mode === option.mode}
          onClick={() => onChange(option.mode)}
          className={`min-h-11 flex-1 rounded-lg px-2 text-xs font-semibold transition-colors sm:text-sm ${mode === option.mode ? "bg-[var(--primary)] text-[var(--on-primary)]" : "text-[var(--muted)] hover:bg-[var(--surface)] hover:text-[var(--foreground)]"}`}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}
