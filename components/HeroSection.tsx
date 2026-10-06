"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { ArrowRight, Download, MessageCircle } from "lucide-react";
import { RESUME_URL, WHATSAPP_URL } from "@/lib/contact";

export default function HeroSection() {
  const reducedMotion = useReducedMotion();

  return (
    <section id="home" tabIndex={-1} className="relative overflow-hidden pt-28 pb-12 md:pt-36 md:pb-20">
      <div className="container mx-auto px-5 md:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-[1.3fr_0.7fr] lg:gap-16">
          <div>
            <p className="mb-5 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-[var(--muted)]">
              <span>Dubai, UAE</span>
              <span aria-hidden="true" className="h-1 w-1 rounded-full bg-[var(--primary)]" />
              <span>Available for roles & projects</span>
            </p>
            <h1 className="text-4xl font-black uppercase leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              Razim <span className="text-[var(--accent)]">Manzoor</span>
            </h1>
            <p className="mt-5 max-w-xl text-2xl font-semibold leading-tight tracking-tight md:text-3xl">
              From business problem<br className="hidden sm:block" /> to working system.
            </p>
            <p className="mt-5 max-w-[60ch] text-base leading-relaxed text-[var(--muted)] md:text-lg">
              I build websites, applications, AI tools, automations, and dashboards around what your business needs. My MBA in Data Science & Analytics connects the technical work to the business behind it.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="action-primary">
                <MessageCircle size={18} aria-hidden="true" /> Let’s talk on WhatsApp
              </a>
              <a href="#services" className="action-secondary">
                Explore services <ArrowRight size={17} aria-hidden="true" />
              </a>
            </div>
            <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm">
              <a href="#dossier" className="inline-flex min-h-11 items-center gap-1.5 font-semibold text-[var(--foreground)] underline decoration-[var(--border)] underline-offset-4 hover:decoration-[var(--primary)]">
                Hiring? View my background <ArrowRight size={14} aria-hidden="true" />
              </a>
              <a href={RESUME_URL} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center gap-1.5 text-[var(--muted)] hover:text-[var(--foreground)]">
                <Download size={15} aria-hidden="true" /> Résumé PDF
              </a>
            </div>
          </div>
          <motion.div
            initial={false}
            animate={reducedMotion ? undefined : { y: [8, 0], opacity: [0.8, 1] }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="relative mx-auto w-full max-w-[200px] sm:max-w-[280px] lg:max-w-[320px]"
          >
            <div className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-[var(--surface-hover)]">
              <Image src="/profilepic.jpeg" alt="Razim Manzoor" fill priority sizes="(min-width: 1024px) 320px, (min-width: 640px) 280px, 200px" className="scale-[1.015] object-cover object-center" />
            </div>
            <p className="mt-3 text-center text-sm text-[var(--muted)]">Business analysis. Hands-on development.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
