"use client";

import { useState } from "react";
import { AudienceToggle, AudienceMode } from "@/components/composite/AudienceToggle";

export function AudienceSectionWrapper() {
  const [mode, setMode] = useState<AudienceMode>("client");

  const handleModeChange = (newMode: AudienceMode) => {
    setMode(newMode);
    const targetId = newMode === "client" ? "services" : "dossier";
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="py-6 border-b border-[var(--border)] bg-[var(--surface)]">
      <div className="container mx-auto px-5 text-center">
        <p className="text-xs text-[var(--muted)] mb-2 uppercase tracking-wider font-mono">
          Select Viewer Perspective:
        </p>
        <AudienceToggle mode={mode} onChange={handleModeChange} />
      </div>
    </div>
  );
}
