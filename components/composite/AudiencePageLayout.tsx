"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { AudienceToggle, AudienceMode } from "@/components/composite/AudienceToggle";
import HeroSection from "@/components/HeroSection";
import ServicesHub from "@/components/ServicesHub";
import { InteractivePipeline } from "@/components/composite/InteractivePipeline";
import ProjectShowcase from "@/components/ProjectShowcase";
import { TurnkeyStudio } from "@/components/composite/TurnkeyStudio";
import SkillsGrid from "@/components/SkillsGrid";
import RecruiterSnapshot from "@/components/RecruiterSnapshot";
import Footer from "@/components/Footer";
import { spatialSpring } from "@/lib/motion";

export function AudiencePageLayout() {
  const [mode, setMode] = useState<AudienceMode>("client");

  return (
    <>
      <HeroSection />

      {/* Dynamic Perspective Selector Bar */}
      <div className="sticky top-14 z-40 py-4 border-b border-[var(--border)] bg-[var(--surface)]/90 backdrop-blur-md">
        <div className="container mx-auto px-5 text-center">
          <AudienceToggle mode={mode} onChange={setMode} />
        </div>
      </div>

      <main id="main-content" tabIndex={-1} className="relative">
        <AnimatePresence mode="wait">
          {mode === "client" && (
            <motion.div
              key="client-view"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={spatialSpring}
            >
              <ServicesHub />
              <InteractivePipeline />
              <TurnkeyStudio />
            </motion.div>
          )}

          {mode === "recruiter" && (
            <motion.div
              key="recruiter-view"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={spatialSpring}
            >
              <RecruiterSnapshot />
              <SkillsGrid />
              <InteractivePipeline />
            </motion.div>
          )}

          {mode === "all" && (
            <motion.div
              key="all-view"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={spatialSpring}
            >
              <ServicesHub />
              <InteractivePipeline />
              <TurnkeyStudio />
              <SkillsGrid />
              <RecruiterSnapshot />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <Footer />
    </>
  );
}
