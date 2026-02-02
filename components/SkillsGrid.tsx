
"use client";

import { USER_DATA } from "@/lib/data";
import { motion } from "framer-motion";

export default function SkillsGrid() {
    return (
        <section id="skills" className="py-24 relative">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">Technical & <span className="text-primary">Business</span> Hybrid</h2>
                    <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        My unique advantage is the ability to speak both languages: the strategic language of business and the technical language of data and AI.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8">
                    {/* Business Skills */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="glass-card p-8 rounded-2xl"
                    >
                        <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3">
                            <span className="w-2 h-8 bg-blue-500 rounded-full" />
                            Business Strategy
                        </h3>
                        <div className="flex flex-wrap gap-3">
                            {USER_DATA.skills.business.map((skill) => (
                                <span
                                    key={skill}
                                    className="px-4 py-2 bg-primary/5 dark:bg-white/5 border border-primary/20 dark:border-white/5 rounded-lg text-sm text-gray-700 dark:text-gray-300 hover:border-primary/50 transition-colors"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </motion.div>

                    {/* Technical Skills */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="glass-card p-8 rounded-2xl"
                    >
                        <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3">
                            <span className="w-2 h-8 bg-pink-500 rounded-full" />
                            AI & Automation
                        </h3>
                        <div className="flex flex-wrap gap-3">
                            {USER_DATA.skills.technical.map((skill) => (
                                <span
                                    key={skill}
                                    className="px-4 py-2 bg-primary/5 dark:bg-white/5 border border-primary/20 dark:border-white/5 rounded-lg text-sm text-gray-700 dark:text-gray-300 hover:border-primary/50 transition-colors"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
