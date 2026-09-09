"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import { ThemeToggle } from "@/components/ThemeToggle";

const navLinks = [
    { name: "Work", href: "#projects" },
    { name: "Capability", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
];

export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 28, restDelta: 0.001 });

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 z-50 w-full transition-all duration-300 ${scrolled
                ? "border-b border-[var(--card-border)] bg-[color-mix(in_srgb,var(--background)_86%,transparent)] py-3 backdrop-blur-xl"
                : "py-5"
                }`}
        >
            <motion.div className="absolute bottom-0 left-0 h-[2px] origin-left bg-[var(--accent)]" style={{ scaleX }} />
            <div className="container mx-auto flex items-center justify-between px-5 md:px-8">
                <a href="#home" className="group text-lg font-black uppercase tracking-[-0.02em]">
                    Razim<span className="text-[var(--accent)]">.</span>
                    <span className="ml-2 hidden text-[10px] font-semibold uppercase tracking-[0.24em] text-muted sm:inline">AI Ops</span>
                </a>

                <div className="hidden items-center gap-7 md:flex">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-xs font-bold uppercase tracking-[0.22em] text-muted transition-colors hover:text-foreground"
                        >
                            {link.name}
                        </a>
                    ))}
                    <a
                        href="/Razim_Manzoor_MBA_AI_Analytics.pdf"
                        target="_blank"
                        className="border border-[var(--card-border)] bg-surface px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] transition-transform hover:-translate-y-0.5"
                    >
                        Resume
                    </a>
                    <ThemeToggle />
                </div>

                <button
                    className="p-2.5 md:hidden"
                    onClick={() => setIsOpen((open) => !open)}
                    aria-label="Toggle menu"
                    aria-expanded={isOpen}
                    aria-controls="mobile-navigation"
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -12 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -12 }}
                        id="mobile-navigation"
                        className="md:hidden border-t border-[var(--card-border)] bg-background"
                    >
                        <div className="flex flex-col gap-5 px-5 py-6">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="text-2xl font-black uppercase"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                </a>
                            ))}
                            <a
                                href="/Razim_Manzoor_MBA_AI_Analytics.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-foreground px-5 py-4 text-center text-sm font-bold uppercase tracking-[0.18em] text-background"
                            >
                                Download Resume
                            </a>
                            <div className="flex items-center justify-between border-t border-[var(--card-border)] pt-4">
                                <span className="text-sm font-semibold text-muted">Appearance</span>
                                <ThemeToggle />
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
