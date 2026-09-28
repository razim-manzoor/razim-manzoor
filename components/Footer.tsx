"use client";

import { ArrowUp, Github, Linkedin, Mail, Phone } from "lucide-react";
import { USER_DATA } from "@/lib/data";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="contact" className="relative border-t border-[var(--border)] bg-[var(--surface)] py-16">
      <div className="container mx-auto px-5 md:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4 pb-12 border-b border-[var(--border)]">
          {/* Col 1: Identity & Availability */}
          <div className="space-y-3">
            <a href="#home" className="text-lg font-black uppercase tracking-tight text-[var(--foreground)]">
              Razim<span className="text-[var(--primary)]">.</span>
            </a>
            <p className="text-xs text-[var(--muted)] leading-relaxed">
              AI Solutions Architect & Business Strategist based in Dubai, UAE. Available for full-time engineering appointments and turnkey client engagements.
            </p>
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-1 text-[10px] font-mono font-bold text-emerald-600 dark:text-emerald-400">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Visit Visa | Available Immediately
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="space-y-2">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[var(--muted)] block mb-3">
              Navigation
            </span>
            <div className="flex flex-col gap-2 text-xs">
              <a href="#services" className="text-[var(--foreground)] hover:text-[var(--primary)] transition-colors">
                Services & Delivery Tracks
              </a>
              <a href="#pipeline" className="text-[var(--foreground)] hover:text-[var(--primary)] transition-colors">
                Live Systems Architecture
              </a>
              <a href="#projects" className="text-[var(--foreground)] hover:text-[var(--primary)] transition-colors">
                Shipped Systems & Proof
              </a>
              <a href="#roi" className="text-[var(--foreground)] hover:text-[var(--primary)] transition-colors">
                Operational ROI Simulator
              </a>
              <a href="#scope-builder" className="text-[var(--foreground)] hover:text-[var(--primary)] transition-colors">
                Solution Scope Configurator
              </a>
              <a href="#dossier" className="text-[var(--foreground)] hover:text-[var(--primary)] transition-colors">
                Recruiter Dossier
              </a>
            </div>
          </div>

          {/* Col 3: Direct Contact */}
          <div className="space-y-2">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[var(--muted)] block mb-3">
              Direct Contact
            </span>
            <div className="flex flex-col gap-2.5 text-xs">
              <a
                href={`mailto:${USER_DATA.contact.email}`}
                className="flex items-center gap-2 text-[var(--foreground)] hover:text-[var(--primary)] transition-colors"
              >
                <Mail size={14} className="text-[var(--primary)]" />
                <span>{USER_DATA.contact.email}</span>
              </a>
              <a
                href={`tel:${USER_DATA.contact.phone.replace(/[^0-9+]/g, "")}`}
                className="flex items-center gap-2 text-[var(--foreground)] hover:text-[var(--primary)] transition-colors font-mono"
              >
                <Phone size={14} className="text-[var(--primary)]" />
                <span>{USER_DATA.contact.phone}</span>
              </a>
              <a
                href={USER_DATA.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[var(--foreground)] hover:text-[var(--primary)] transition-colors"
              >
                <Linkedin size={14} className="text-[var(--primary)]" />
                <span>LinkedIn Profile</span>
              </a>
            </div>
          </div>

          {/* Col 4: Handover & Guarantee */}
          <div className="space-y-3">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[var(--muted)] block">
              Handover Standard
            </span>
            <p className="text-xs text-[var(--muted)] leading-relaxed">
              Every turnkey engagement includes a complimentary 14-day defect warranty, 100% intellectual property transfer, and complete operational runbooks.
            </p>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[var(--primary)] hover:underline cursor-pointer"
            >
              Back to top <ArrowUp size={13} />
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[var(--muted)]">
          <p>&copy; {new Date().getFullYear()} Razim Manzoor. Built with Next.js 16, React 19 & Tailwind CSS v4.</p>
          <p className="font-mono text-[11px]">Dubai, United Arab Emirates</p>
        </div>
      </div>
    </footer>
  );
}
