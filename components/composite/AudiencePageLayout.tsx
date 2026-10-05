"use client";

import { useEffect } from "react";
import { AudienceToggle } from "@/components/composite/AudienceToggle";
import HeroSection from "@/components/HeroSection";
import ServicesHub from "@/components/ServicesHub";
import { InteractivePipeline } from "@/components/composite/InteractivePipeline";
import { TurnkeyStudio } from "@/components/composite/TurnkeyStudio";
import SkillsGrid from "@/components/SkillsGrid";
import RecruiterSnapshot from "@/components/RecruiterSnapshot";
import Footer from "@/components/Footer";
import { navigateToSection, setAudienceMode, useAudienceMode } from "@/lib/audience";

export function AudiencePageLayout() {
  const mode = useAudienceMode();

  useEffect(() => {
    let frame = 0;
    const scrollToTarget = (focus = false) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const target = document.getElementById(window.location.hash.slice(1));
        if (!target) return;
        const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        target.scrollIntoView({ behavior: reduced ? "instant" : "smooth", block: "start" });
        if (focus) target.focus({ preventScroll: true });
      });
    };
    const handleClick = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      const link = event.target instanceof Element ? event.target.closest<HTMLAnchorElement>('a[href^="#"]') : null;
      const hash = link?.getAttribute("href");
      if (!hash || hash === "#" || !document.getElementById(hash.slice(1))) return;
      event.preventDefault();
      navigateToSection(hash);
      scrollToTarget(true);
    };
    const handleHistory = () => scrollToTarget();
    document.addEventListener("click", handleClick);
    window.addEventListener("popstate", handleHistory);
    window.addEventListener("hashchange", handleHistory);
    scrollToTarget();
    return () => {
      cancelAnimationFrame(frame);
      document.removeEventListener("click", handleClick);
      window.removeEventListener("popstate", handleHistory);
      window.removeEventListener("hashchange", handleHistory);
    };
  }, []);

  return (
    <>
      <main id="main-content" tabIndex={-1}>
        <HeroSection />
        <div className="sticky top-20 z-30 border-y border-[var(--border)] bg-[var(--surface)] py-2">
          <div className="container mx-auto px-5">
            <AudienceToggle mode={mode} onChange={setAudienceMode} />
          </div>
        </div>
        {/* Keep both views mounted so an audience change never discards a draft. */}
        <div id="audience-content">
          <div hidden={mode === "recruiter"}><ServicesHub /></div>
          <div hidden={mode === "client"}><RecruiterSnapshot /></div>
        </div>
        <InteractivePipeline />
        <SkillsGrid />
        <div hidden={mode === "recruiter"}><TurnkeyStudio /></div>
      </main>
      <Footer />
    </>
  );
}
