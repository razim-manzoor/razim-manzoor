"use client";

import { USER_DATA } from "@/lib/data";
import { motion } from "framer-motion";
import { BadgeCheck, BriefcaseBusiness, CheckCircle2, MapPinned } from "lucide-react";

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
                            <p className="mb-5 text-xs font-black uppercase tracking-[0.26em] text-[var(--warm)]">Recruiter short-list view</p>
                            <h2 className="text-4xl font-black uppercase leading-[0.92] md:text-6xl">
                                Why interview Razim?
                            </h2>
                        </div>
                        <div className="grid gap-3">
                            {USER_DATA.hiringSignals.map((signal) => (
                                <p key={signal} className="border-t border-background/15 pt-3 text-sm font-semibold leading-6 text-background/80">
                                    {signal}
                                </p>
                            ))}
                        </div>
                    </motion.div>

                    <div className="grid gap-3 sm:grid-cols-2">
                        {USER_DATA.recruiterSnapshot.map((fact, index) => {
                            const Icon = factIcons[index % factIcons.length];
                            return (
                                <motion.div
                                    key={fact.label}
                                    initial={{ opacity: 0, y: 18 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.06 }}
                                    className="border border-[var(--card-border)] bg-background p-5"
                                >
                                    <Icon size={22} className="mb-8 text-[var(--accent)]" />
                                    <p className="text-xs font-black uppercase tracking-[0.2em] text-muted">{fact.label}</p>
                                    <p className="mt-3 text-lg font-black leading-snug">{fact.value}</p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
