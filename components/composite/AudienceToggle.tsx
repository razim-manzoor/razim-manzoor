"use client";

import { motion } from "motion/react";
import { Briefcase, Sparkles } from "lucide-react";
import { snappySpring } from "@/lib/motion";

export type AudienceMode = "client" | "recruiter";

interface AudienceToggleProps {
  mode: AudienceMode;
  onChange: (mode: AudienceMode) => void;
}

export function AudienceToggle({ mode, onChange }: AudienceToggleProps) {
  return (
    <div className="flex items-center justify-center p-2">
      <div className="relative inline-flex items-center rounded-full border border-[var(--border)] bg-[var(--surface-hover)] p-1 shadow-inner">
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
          Turnkey Solutions & Advisory
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
          Recruiter & Tech Lead Dossier
          {mode === "recruiter" && (
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
