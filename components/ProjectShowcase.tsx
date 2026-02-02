
"use client";

import { USER_DATA } from "@/lib/data";
import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";

export default function ProjectShowcase() {
    return (
        <section id="projects" className="py-24">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">Featured Projects</h2>
                    <p className="text-gray-400">Real-world applications of AI and Automation.</p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {USER_DATA.projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="glass-card group hover:bg-white/5 transition-colors rounded-2xl overflow-hidden flex flex-col"
                        >
                            <div className="p-8 flex-grow">
                                <div className="flex justify-between items-start mb-4">
                                    <div className="p-3 bg-white/5 rounded-lg">
                                        {/* Icon placeholder based on tech */}
                                        <span className="text-2xl">⚡</span>
                                    </div>
                                    <a href="#" className="p-2 hover:bg-black/5 dark:hover:bg-white/10 rounded-full transition-colors">
                                        <ArrowUpRight size={20} className="text-gray-400 group-hover:text-primary dark:group-hover:text-white" />
                                    </a>
                                </div>

                                <h3 className="text-xl font-bold mb-3 text-foreground dark:text-white group-hover:text-primary transition-colors">{project.title}</h3>
                                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {project.tech.map((t) => (
                                        <span key={t} className="px-3 py-1 bg-primary/10 dark:bg-black/30 text-xs font-mono text-primary rounded-full border border-primary/20">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
