"use client";

import Image from "next/image";
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";
import { ArrowRight, Download } from "lucide-react";
import { NumberTicker } from "@/components/magicui/number-ticker";
import { snappySpring, spatialSpring } from "@/lib/motion";

export default function HeroSection() {
  const { scrollY } = useScroll();
  const imageY = useTransform(scrollY, [0, 500], [0, -40]);
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="home"
      className="relative min-h-[100dvh] overflow-hidden pt-20 md:pt-24 flex flex-col justify-between blueprint-grid"
    >
      <div className="container relative z-10 mx-auto px-5 md:px-8 my-auto">
        <div className="grid items-center gap-10 py-6 md:py-10 lg:grid-cols-[1.15fr_0.85fr]">
          {/* Left Column: Value Prop & Builder Bio */}
          <div>
            {/* Live Operational Status Badge */}
            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={snappySpring}
              className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1.5 text-xs font-mono font-semibold text-emerald-600 dark:text-emerald-400"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Dubai, UAE</span>
              <span className="text-[var(--border)]">|</span>
              <span>Available Immediately</span>
            </motion.div>

            {/* Display Headline */}
            <motion.h1
              initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...spatialSpring, delay: 0.05 }}
              className="text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tight text-[var(--foreground)] leading-[0.95]"
            >
              Razim <span className="text-[var(--primary)]">Manzoor</span>
            </motion.h1>

            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...spatialSpring, delay: 0.1 }}
              className="mt-3 text-lg sm:text-xl font-bold uppercase tracking-wider text-[var(--muted)]"
            >
              AI Solutions Architect & Business Strategist
            </motion.div>

            {/* Subtext - Strictly <= 20 words per Anti-Slop specification */}
            <motion.p
              initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...spatialSpring, delay: 0.15 }}
              className="mt-6 max-w-[54ch] text-base sm:text-lg leading-relaxed text-[var(--foreground)]"
            >
              MBA strategist building autonomous AI assistants, high-performance web platforms, and automated workflow pipelines that turn friction into measurable margin.
            </motion.p>

            {/* Primary & Secondary Dual CTAs */}
            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...spatialSpring, delay: 0.2 }}
              className="mt-8 flex flex-col gap-3 sm:flex-row"
            >
              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-[var(--primary)] hover:bg-[var(--primary)]/90 px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white shadow-sm transition-all cursor-pointer"
              >
                Inquire for Scope <ArrowRight size={15} />
              </a>
              <a
                href="/Razim_Manzoor_MBA_AI_Analytics.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-[var(--border)] bg-[var(--surface)] hover:bg-[var(--surface-hover)] px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-[var(--foreground)] transition-all cursor-pointer"
              >
                Download Resume <Download size={15} />
              </a>
            </motion.div>
          </div>

          {/* Right Column: Real Portrait in Sub-Pixel Engineering Frame */}
          <motion.div
            style={shouldReduceMotion ? undefined : { y: imageY }}
            initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={spatialSpring}
            className="relative mx-auto w-full max-w-[320px] md:max-w-[340px]"
          >
            {/* Profile Image Frame */}
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] shadow-xl">
              <Image
                src="/profilepic.jpeg"
                alt="Razim Manzoor - AI Solutions Architect"
                fill
                priority
                sizes="(min-width: 1024px) 340px, 90vw"
                className="object-cover object-top filter grayscale-[0.04] contrast-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--background)]/40 via-transparent to-transparent pointer-events-none" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Verified Operational Impact Telemetry Strip */}
      <div className="relative z-10 border-y border-[var(--border)] bg-[var(--surface)]/90 backdrop-blur-md py-4">
        <div className="container mx-auto px-5 md:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center sm:text-left">
            <div className="border-b sm:border-b-0 sm:border-r border-[var(--border)] pb-4 sm:pb-0 sm:pr-4">
              <div className="text-2xl md:text-3xl font-black font-mono text-[var(--primary)] tabular-nums">
                +<NumberTicker value={15} suffix="%" />
              </div>
              <p className="mt-0.5 text-xs text-[var(--muted)] font-medium">
                Revenue Growth Opportunity (ML Segmentation)
              </p>
            </div>

            <div className="border-b sm:border-b-0 sm:border-r border-[var(--border)] pb-4 sm:pb-0 sm:pr-4">
              <div className="text-2xl md:text-3xl font-black font-mono text-[var(--foreground)] tabular-nums">
                3 Days &rarr; 2 Hrs
              </div>
              <p className="mt-0.5 text-xs text-[var(--muted)] font-medium">
                Executive Reporting Latency (Power BI)
              </p>
            </div>

            <div>
              <div className="text-2xl md:text-3xl font-black font-mono text-[var(--foreground)] tabular-nums">
                <NumberTicker value={80} suffix="%" />
              </div>
              <p className="mt-0.5 text-xs text-[var(--muted)] font-medium">
                Daily Manual Effort Reduced (AI Workflows)
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
