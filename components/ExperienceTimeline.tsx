
"use client";

import { USER_DATA } from "@/lib/data";
import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Calendar, MapPin } from "lucide-react";

export default function ExperienceTimeline() {
    return (
        <section id="experience" className="py-16 md:py-24 bg-white/05">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">Experience & Education</h2>
                </motion.div>

                <div className="relative border-l border-gray-200 dark:border-white/10 ml-4 md:ml-6 space-y-12">
                    {/* Work Experience */}
                    {USER_DATA.experience.map((job, index) => (
                        <motion.div
                            key={job.id}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="relative pl-8 md:pl-12"
                        >
                            <div className="absolute -left-3 top-0 w-6 h-6 bg-background border-2 border-primary rounded-full flex items-center justify-center">
                                <div className="w-2 h-2 bg-primary rounded-full" />
                            </div>

                            <div className="glass-card p-6 md:p-8 rounded-2xl hover-glow transition-all">
                                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                                    <div>
                                        <h3 className="text-xl font-bold text-foreground dark:text-white">{job.role}</h3>
                                        <p className="text-primary font-medium">{job.company}</p>
                                    </div>
                                    <div className="flex flex-col items-start md:items-end text-sm text-gray-500 dark:text-gray-400 gap-1">
                                        <span className="flex items-center gap-1"><Calendar size={14} /> {job.period}</span>
                                        <span className="flex items-center gap-1"><MapPin size={14} /> {job.location}</span>
                                    </div>
                                </div>

                                <ul className="space-y-2">
                                    {job.achievements.map((item, i) => (
                                        <li key={i} className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed flex items-start gap-2">
                                            <span className="mt-1.5 w-1.5 h-1.5 bg-gray-400 dark:bg-gray-500 rounded-full flex-shrink-0" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}

                    {/* Education Divider */}
                    <div className="relative pl-8 md:pl-12 py-8">
                        <span className="text-gray-500 text-sm font-mono tracking-widest uppercase">Education</span>
                    </div>

                    {/* Education */}
                    {USER_DATA.education.map((edu, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative pl-8 md:pl-12"
                        >
                            <div className="absolute -left-3 top-0 w-6 h-6 bg-background border-2 border-gray-600 rounded-full flex items-center justify-center">
                                <div className="w-2 h-2 bg-gray-600 rounded-full" />
                            </div>

                            <div className="glass-card p-6 rounded-2xl">
                                <h3 className="text-lg font-bold">{edu.degree}</h3>
                                <p className="text-gray-400 mb-2">{edu.institution}</p>
                                <div className="flex items-center gap-4 text-xs text-gray-500 mb-2">
                                    <span>{edu.year}</span>
                                    <span>{edu.field}</span>
                                </div>
                                {edu.details && <p className="text-sm text-gray-400 italic">{edu.details}</p>}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
