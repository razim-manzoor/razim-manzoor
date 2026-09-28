"use client";

import { USER_DATA } from "@/lib/data";
import { motion } from "framer-motion";
import { ArrowRight, BadgeCheck, BriefcaseBusiness, CheckCircle2, MapPinned } from "lucide-react";

const factIcons = [BriefcaseBusiness, MapPinned, CheckCircle2, BadgeCheck];

export default function RecruiterSnapshot() {
    return (
        <section aria-label="Recruiter snapshot" className="py-14 md:py-20">
            <div className="container mx-auto px-5 md:px-8">
                <div className="grid gap-4 border border-[var(--card-border)] bg-surface p-4 shadow-xl md:grid-cols-[0.88fr_1.12fr] md:p-6 lg:p-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex flex-col justify-between gap-8 bg-foreground p-6 text-background"
                    >
                        <div>
                            <h2 className="text-3xl font-black uppercase leading-[0.95] md:text-5xl">
                                Why hire Razim?
                            </h2>
                        </div>
                        <div className="grid gap-3">
                            {USER_DATA.hiringSignals.map((signal) => (
                                <p key={signal} className="border-t border-background/15 pt-3 text-sm font-semibold leading-relaxed text-background/80">
                                    {signal}
                                </p>
                            ))}
                        </div>
                        <div className="border-t border-background/20 pt-4">
                            <a
                                href="#services"
                                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-[var(--warm)] hover:underline"
                            >
                                Looking for turnkey client deliverables? See Services <ArrowRight size={14} />
                            </a>
                        </div>
                    </motion.div>

                    <div className="grid gap-3 sm:grid-cols-2">
                        {USER_DATA.recruiterSnapshot.map((fact, index) => {
                            const Icon = factIcons[index % factIcons.length];
                            return (
                                <motion.div
                                    key={fact.label}
                                    initial={{ opacity: 0, y: 16 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.05 }}
                                    className="border border-[var(--card-border)] bg-background p-5"
                                >
                                    <Icon size={22} className="mb-6 text-[var(--accent)]" />
                                    <p className="text-xs font-black uppercase tracking-[0.18em] text-muted">{fact.label}</p>
                                    <p className="mt-2 text-base font-black leading-snug">{fact.value}</p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
