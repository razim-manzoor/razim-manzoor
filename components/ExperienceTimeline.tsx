"use client";

import { USER_DATA } from "@/lib/data";
import { motion } from "framer-motion";
import { Calendar, MapPin } from "lucide-react";

export default function ExperienceTimeline() {
    return (
        <section id="experience" className="py-20 md:py-32">
            <div className="container mx-auto px-5 md:px-8">
                <div className="mb-12 grid gap-6 border-t border-[var(--card-border)] pt-5 md:grid-cols-[0.7fr_1.3fr]">
                    <p className="text-xs font-black uppercase tracking-[0.28em] text-[var(--accent)]">Trajectory</p>
                    <h2 className="text-4xl font-black uppercase leading-[0.95] md:text-7xl">
                        Built between business school and machine rooms.
                    </h2>
                </div>

                <div className="grid gap-4">
                    {USER_DATA.experience.map((job, index) => (
                        <motion.article
                            key={job.id}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.08 }}
                            className="grid gap-6 border border-[var(--card-border)] bg-surface p-5 md:grid-cols-[0.55fr_1.45fr] md:p-8"
                        >
                            <div>
                                <p className="text-sm font-black uppercase tracking-[0.18em] text-[var(--accent)]">{job.company}</p>
                                <h3 className="mt-3 text-3xl font-black uppercase leading-none">{job.role}</h3>
                                <div className="mt-5 space-y-2 text-sm font-semibold text-muted">
                                    <span className="flex items-center gap-2"><Calendar size={15} /> {job.period}</span>
                                    <span className="flex items-center gap-2"><MapPin size={15} /> {job.location}</span>
                                </div>
                            </div>

                            <ul className="grid gap-3">
                                {job.achievements.map((item) => (
                                    <li key={item} className="border-l-2 border-[var(--card-border)] pl-4 text-sm leading-7 text-muted md:text-base">
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </motion.article>
                    ))}
                </div>

                <div className="mt-10 grid gap-4 md:grid-cols-2">
                    {USER_DATA.education.map((edu, index) => (
                        <motion.div
                            key={`${edu.degree}-${edu.year}`}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className="border border-[var(--card-border)] bg-background p-5"
                        >
                            <p className="mb-4 text-xs font-black uppercase tracking-[0.2em] text-muted">{edu.year}</p>
                            <h3 className="text-xl font-black uppercase leading-tight">{edu.degree}</h3>
                            <p className="mt-3 text-sm font-semibold text-[var(--accent)]">{edu.field}</p>
                            <p className="mt-2 text-sm leading-6 text-muted">{edu.institution}</p>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-10 grid gap-4 border-t border-[var(--card-border)] pt-8 md:grid-cols-[0.8fr_1.2fr]">
                    <div>
                        <p className="text-xs font-black uppercase tracking-[0.22em] text-[var(--accent)]">Current focus</p>
                        <p className="mt-3 text-lg font-semibold leading-8">Based in Dubai and available immediately for business analysis, data analytics, and AI automation roles.</p>
                    </div>
                    <div>
                        <p className="text-xs font-black uppercase tracking-[0.22em] text-muted">Credentials</p>
                        <ul className="mt-3 grid gap-2 text-sm leading-6 text-muted">
                            {USER_DATA.certifications.map((certification) => <li key={certification}>• {certification}</li>)}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
