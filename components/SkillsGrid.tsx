"use client";

import { USER_DATA } from "@/lib/data";
import { motion } from "framer-motion";
import { BrainCircuit, ChartNoAxesCombined, Gauge, Layers3 } from "lucide-react";

const capabilityIcons = [BrainCircuit, Gauge, ChartNoAxesCombined];

export default function SkillsGrid() {
    return (
        <section id="skills" className="relative py-20 md:py-32 page-noise">
            <div className="container mx-auto px-5 md:px-8">
                <div className="grid gap-10 border-t border-[var(--card-border)] pt-5 lg:grid-cols-[0.82fr_1.18fr]">
                    <div>
                        <p className="mb-5 text-xs font-black uppercase tracking-[0.28em] text-[var(--accent)]">Capability map</p>
                        <h2 className="text-4xl font-black uppercase leading-[0.95] md:text-7xl">
                            Business brain. Technical hands.
                        </h2>
                    </div>

                    <div className="grid gap-4">
                        {USER_DATA.focusAreas.map((area, index) => {
                            const Icon = capabilityIcons[index % capabilityIcons.length];
                            return (
                                <motion.div
                                    key={area.title}
                                    initial={{ opacity: 0, x: 22 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.08 }}
                                    className="grid gap-5 border border-[var(--card-border)] bg-surface p-5 md:grid-cols-[56px_1fr]"
                                >
                                    <div className="grid h-14 w-14 place-items-center bg-foreground text-background">
                                        <Icon size={24} />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-black uppercase">{area.title}</h3>
                                        <p className="mt-2 leading-7 text-muted">{area.detail}</p>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>

                <div className="mt-16 grid gap-4 md:grid-cols-2">
                    <SkillColumn title="Business Strategy" skills={USER_DATA.skills.business} tone="bg-[color-mix(in_srgb,var(--warm)_20%,var(--surface))]" />
                    <SkillColumn title="AI and Automation" skills={USER_DATA.skills.technical} tone="bg-[color-mix(in_srgb,var(--primary)_16%,var(--surface))]" />
                </div>
            </div>
        </section>
    );
}

function SkillColumn({ title, skills, tone }: { title: string; skills: string[]; tone: string }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`${tone} border border-[var(--card-border)] p-6 md:p-8`}
        >
            <div className="mb-8 flex items-center justify-between gap-4 border-b border-[var(--card-border)] pb-5">
                <h3 className="text-2xl font-black uppercase">{title}</h3>
                <Layers3 size={22} className="text-[var(--accent)]" />
            </div>
            <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                    <motion.span
                        key={skill}
                        whileHover={{ y: -3 }}
                        className="border border-[var(--card-border)] bg-background/60 px-3 py-2 text-xs font-bold uppercase tracking-[0.12em] text-foreground"
                    >
                        {skill}
                    </motion.span>
                ))}
            </div>
        </motion.div>
    );
}
