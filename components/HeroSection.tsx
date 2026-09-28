"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Download, MapPin, Sparkles } from "lucide-react";
import { USER_DATA } from "@/lib/data";

export default function HeroSection() {
    const { scrollY } = useScroll();
    const imageY = useTransform(scrollY, [0, 600], [0, -70]);
    const titleY = useTransform(scrollY, [0, 600], [0, 48]);

    return (
        <section id="home" className="relative min-h-[100dvh] overflow-hidden pt-20 md:pt-24 page-noise">
            <div className="absolute inset-x-0 top-0 h-48 bg-[linear-gradient(180deg,rgba(228,85,47,0.16),transparent)]" />
            <div className="container relative z-10 mx-auto px-5 md:px-8">
                <div className="editorial-rule flex items-center justify-between gap-4 pt-4 text-[11px] font-semibold uppercase tracking-[0.28em] text-muted">
                    <span className="flex items-center gap-2"><MapPin size={14} /> {USER_DATA.location}</span>
                    <span className="hidden sm:inline">{USER_DATA.availability}</span>
                </div>

                <div className="grid items-start gap-8 py-8 md:py-12 lg:min-h-[calc(100vh-9rem)] lg:grid-cols-[1.12fr_0.88fr] lg:items-center">
                    <motion.div style={{ y: titleY }} className="max-w-5xl">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="mb-6 inline-flex items-center gap-2 border border-[var(--card-border)] bg-surface px-3 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-muted md:mb-8"
                        >
                            <Sparkles size={14} className="text-[var(--accent)]" />
                            AI Solutions Architect & Business Strategist
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 26 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.05 }}
                            className="text-[clamp(3.2rem,8.5vw,8.8rem)] font-black uppercase leading-[0.84] tracking-normal"
                        >
                            Razim
                            <span className="block text-[var(--accent)]">Manzoor</span>
                        </motion.h1>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.1 }}
                            className="mt-6 border-y border-[var(--card-border)] py-5 md:mt-8 md:py-6"
                        >
                            <p className="max-w-[58ch] text-xl font-semibold leading-relaxed md:text-2xl">
                                MBA-trained strategist building autonomous AI assistants, high-performance web platforms, and automated workflow pipelines that drive measurable revenue.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.18 }}
                            className="mt-8 flex flex-col gap-3 sm:flex-row"
                        >
                            <a
                                href="#services"
                                className="group inline-flex items-center justify-center gap-2 bg-foreground px-6 py-4 text-sm font-bold uppercase tracking-[0.18em] text-background transition-transform hover:-translate-y-1"
                            >
                                Explore Services & Work <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                            </a>
                            <a
                                href="/Razim_Manzoor_MBA_AI_Analytics.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-2 border border-[var(--card-border)] bg-surface px-6 py-4 text-sm font-bold uppercase tracking-[0.18em] transition-transform hover:-translate-y-1"
                            >
                                Download Resume <Download size={18} />
                            </a>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        style={{ y: imageY }}
                        initial={{ opacity: 0, scale: 0.96, rotate: 1.5 }}
                        animate={{ opacity: 1, scale: 1, rotate: -1.2 }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="relative mx-auto w-full max-w-[440px]"
                    >
                        <div className="absolute -left-5 top-8 z-10 bg-[var(--warm)] px-4 py-3 text-xs font-black uppercase tracking-[0.22em] text-[#171717] shadow-xl">
                            AI x Systems
                        </div>
                        <div className="absolute -right-4 bottom-16 z-10 bg-[var(--accent)] px-4 py-3 text-xs font-black uppercase tracking-[0.22em] text-white shadow-xl">
                            Dubai
                        </div>
                        <div className="relative aspect-[4/5] overflow-hidden border border-[var(--card-border)] bg-surface shadow-2xl">
                            <Image
                                src="/profilepic.jpeg"
                                alt="Razim Manzoor"
                                fill
                                priority
                                sizes="(min-width: 1024px) 440px, 88vw"
                                className="object-cover object-top grayscale-[0.18] contrast-110"
                            />
                        </div>
                    </motion.div>
                </div>
            </div>

            <div className="relative overflow-hidden border-y border-[var(--card-border)] bg-foreground py-4 text-background">
                <motion.div
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{ duration: 26, repeat: Infinity, ease: "linear" }}
                    className="flex w-max gap-10 whitespace-nowrap text-sm font-black uppercase tracking-[0.24em]"
                >
                    {[...USER_DATA.proofPoints, ...USER_DATA.proofPoints].map((item, index) => (
                        <span key={`${item}-${index}`}>{item}</span>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
