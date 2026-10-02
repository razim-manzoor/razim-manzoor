"use client";

import { motion } from "motion/react";
import { Briefcase, Sparkles, Layers } from "lucide-react";
import { snappySpring } from "@/lib/motion";

export type AudienceMode = "client" | "recruiter" | "all";

interface AudienceToggleProps {
  mode: AudienceMode;
  onChange: (mode: AudienceMode) => void;
}

export function AudienceToggle({ mode, onChange }: AudienceToggleProps) {
  return (
    <div className="flex items-center justify-center p-2">
      <div className="relative inline-flex flex-wrap items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface-hover)] p-1 shadow-inner gap-1">
        {/* Client Mode Tab */}
        <button
          onClick={() => onChange("client")}
          className={`relative z-10 inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer select-none ${
            mode === "client"
              ? "text-white"
              : "text-[var(--muted)] hover:text-[var(--foreground)]"
          }`}
          aria-pressed={mode === "client"}
        >
          <Sparkles size={14} className={mode === "client" ? "text-emerald-300" : ""} />
          Services & Solutions
          {mode === "client" && (
            <motion.div
              layoutId="active-audience-pill"
              className="absolute inset-0 -z-10 rounded-full bg-[var(--primary)] shadow-sm"
              transition={snappySpring}
            />
          )}
        </button>

        {/* Recruiter Mode Tab */}
        <button
          onClick={() => onChange("recruiter")}
          className={`relative z-10 inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer select-none ${
            mode === "recruiter"
              ? "text-white"
              : "text-[var(--muted)] hover:text-[var(--foreground)]"
          }`}
          aria-pressed={mode === "recruiter"}
        >
          <Briefcase size={14} className={mode === "recruiter" ? "text-emerald-300" : ""} />
          Recruiter & Hiring
          {mode === "recruiter" && (
            <motion.div
              layoutId="active-audience-pill"
              className="absolute inset-0 -z-10 rounded-full bg-[var(--primary)] shadow-sm"
              transition={snappySpring}
            />
          )}
        </button>

        {/* Full View Tab */}
        <button
          onClick={() => onChange("all")}
          className={`relative z-10 inline-flex items-center gap-2 rounded-full px-3.5 py-2 text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer select-none ${
            mode === "all"
              ? "text-white"
              : "text-[var(--muted)] hover:text-[var(--foreground)]"
          }`}
          aria-pressed={mode === "all"}
        >
          <Layers size={14} className={mode === "all" ? "text-emerald-300" : ""} />
          Complete View
          {mode === "all" && (
            <motion.div
              layoutId="active-audience-pill"
              className="absolute inset-0 -z-10 rounded-full bg-[var(--primary)] shadow-sm"
              transition={snappySpring}
            />
          )}
        </button>
      </div>
    </div>
  );
}
