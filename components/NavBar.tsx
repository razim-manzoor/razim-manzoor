"use client";

import { useState } from "react";
import { ArrowUpRight, Menu, X, FileText } from "lucide-react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll, useSpring } from "motion/react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { snappySpring } from "@/lib/motion";

const navLinks = [
  { name: "Services", href: "#services" },
  { name: "How It Works", href: "#pipeline" },
  { name: "Skills", href: "#skills" },
  { name: "Inquire", href: "#studio" },
];

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY, scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 28, restDelta: 0.001 });

  useMotionValueEvent(scrollY, "change", (latest) => {
    const isPast = latest > 20;
    if (isPast !== scrolled) {
      setScrolled(isPast);
    }
  });

  return (
    <header className="fixed top-0 z-50 w-full transition-all duration-300">
      {/* Scroll Progress Line */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-[2px] origin-left bg-[var(--primary)] z-50"
        style={{ scaleX }}
      />

      <div className="container mx-auto px-4 sm:px-6 pt-3">
        <nav
          aria-label="Primary Navigation"
          className={`mx-auto flex h-14 max-w-5xl items-center justify-between rounded-full border px-4 transition-all duration-200 ${
            scrolled
              ? "glass-island shadow-md"
              : "border-transparent bg-[var(--surface)]/70 backdrop-blur-md"
          }`}
        >
          {/* Brand Logo */}
          <a
            href="#home"
            className="flex items-center gap-2 text-sm font-black uppercase tracking-tight text-[var(--foreground)]"
          >
            Razim<span className="text-[var(--primary)]">.</span>
            <span className="hidden sm:inline text-[10px] font-mono font-bold text-[var(--muted)] border-l border-[var(--border)] pl-2">
              AI Solutions Architect
            </span>
          </a>

          {/* Desktop Nav Items */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs font-semibold uppercase tracking-wider text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Right Action Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="/Razim_Manzoor_MBA_AI_Analytics.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs font-semibold text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
            >
              <FileText size={13} /> Resume
            </a>

            <a
              href="#studio"
              className="inline-flex items-center gap-1 rounded-full bg-[var(--primary)] hover:bg-[var(--primary)]/90 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-white shadow-sm transition-transform hover:scale-102"
            >
              Inquire <ArrowUpRight size={13} />
            </a>

            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen((prev) => !prev)}
              aria-label="Toggle navigation menu"
              aria-expanded={isOpen}
              className="rounded-full p-2 text-[var(--foreground)] hover:bg-[var(--surface-hover)]"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Dropdown Sheet */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={snappySpring}
            className="lg:hidden fixed inset-x-4 top-20 z-40 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 shadow-xl"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-base font-bold uppercase tracking-wide text-[var(--foreground)] hover:text-[var(--primary)]"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4 border-t border-[var(--border)] flex flex-col gap-2">
                <a
                  href="#scope-builder"
                  onClick={() => setIsOpen(false)}
                  className="w-full text-center rounded-lg bg-[var(--primary)] p-3 text-xs font-bold uppercase tracking-wider text-white"
                >
                  Inquire for Scope
                </a>
                <a
                  href="/Razim_Manzoor_MBA_AI_Analytics.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center rounded-lg border border-[var(--border)] bg-[var(--surface-hover)] p-3 text-xs font-bold uppercase tracking-wider text-[var(--foreground)]"
                >
                  Download Resume (PDF)
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
