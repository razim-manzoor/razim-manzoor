"use client";

import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll, useSpring } from "framer-motion";
import { ThemeToggle } from "@/components/ThemeToggle";

const navLinks = [
    { name: "Services", href: "#services" },
    { name: "Work", href: "#projects" },
    { name: "Scope & Pricing", href: "#scope-builder" },
    { name: "ROI Model", href: "#roi" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
];

export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const { scrollY, scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 28, restDelta: 0.001 });

    useMotionValueEvent(scrollY, "change", (latest) => {
        const isPast = latest > 20;
        if (isPast !== scrolled) {
            setScrolled(isPast);
        }
    });

    return (
        <nav
            className={`fixed top-0 z-50 w-full transition-all duration-300 ${scrolled
                ? "border-b border-[var(--card-border)] bg-[color-mix(in_srgb,var(--background)_88%,transparent)] py-3 backdrop-blur-xl shadow-sm"
                : "py-5"
                }`}
        >
            <motion.div className="absolute bottom-0 left-0 h-[2px] origin-left bg-[var(--accent)]" style={{ scaleX }} />
            <div className="container mx-auto flex items-center justify-between px-5 md:px-8">
                <a href="#home" className="group text-lg font-black uppercase tracking-[-0.02em]">
                    Razim<span className="text-[var(--accent)]">.</span>
                    <span className="ml-2 hidden text-[10px] font-semibold uppercase tracking-[0.24em] text-muted sm:inline">AI & Systems</span>
                </a>

                <div className="hidden items-center gap-6 lg:flex">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-xs font-bold uppercase tracking-[0.18em] text-muted transition-colors hover:text-foreground"
                        >
                            {link.name}
                        </a>
                    ))}
                    <a
                        href="/Razim_Manzoor_MBA_AI_Analytics.pdf"
                        target="_blank"
                        className="border border-[var(--card-border)] bg-surface px-3.5 py-1.5 text-xs font-bold uppercase tracking-[0.16em] transition-transform hover:-translate-y-0.5"
                    >
                        Resume
                    </a>
                    <a
                        href="#scope-builder"
                        className="inline-flex items-center gap-1.5 bg-foreground px-4 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-background transition-transform hover:-translate-y-0.5"
                    >
                        Inquire <ArrowUpRight size={13} />
                    </a>
                    <ThemeToggle />
                </div>

                <div className="flex items-center gap-3 lg:hidden">
                    <ThemeToggle />
                    <button
                        className="p-2"
                        onClick={() => setIsOpen((open) => !open)}
                        aria-label="Toggle menu"
                        aria-expanded={isOpen}
                        aria-controls="mobile-navigation"
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -12 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -12 }}
                        id="mobile-navigation"
                        className="lg:hidden border-t border-[var(--card-border)] bg-background"
                    >
                        <div className="flex flex-col gap-4 px-5 py-6">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="text-xl font-black uppercase tracking-tight"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                </a>
                            ))}
                            <div className="mt-3 flex flex-col gap-2.5 pt-3 border-t border-[var(--card-border)]">
                                <a
                                    href="#scope-builder"
                                    onClick={() => setIsOpen(false)}
                                    className="bg-foreground px-4 py-3 text-center text-xs font-bold uppercase tracking-[0.18em] text-background"
                                >
                                    Inquire for Services
                                </a>
                                <a
                                    href="/Razim_Manzoor_MBA_AI_Analytics.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="border border-[var(--card-border)] bg-surface px-4 py-3 text-center text-xs font-bold uppercase tracking-[0.18em]"
                                >
                                    Download Resume (PDF)
                                </a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
