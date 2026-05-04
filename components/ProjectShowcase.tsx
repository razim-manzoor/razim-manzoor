"use client";

import { USER_DATA } from "@/lib/data";
import { motion } from "framer-motion";
import { ArrowUpRight, Bot, Boxes, FileSearch, Github, Workflow } from "lucide-react";

const icons = [Workflow, Bot, FileSearch, Boxes];
const tileTone = [
    "bg-[var(--surface)]",
    "bg-[color-mix(in_srgb,var(--primary)_18%,var(--surface))]",
    "bg-[color-mix(in_srgb,var(--warm)_24%,var(--surface))]",
    "bg-[color-mix(in_srgb,var(--accent)_16%,var(--surface))]",
];

export default function ProjectShowcase() {
    return (
        <section id="projects" className="relative overflow-hidden py-20 md:py-32">
            <div className="container mx-auto px-5 md:px-8">
                <div className="mb-12 grid gap-6 border-t border-[var(--card-border)] pt-5 md:grid-cols-[0.7fr_1.3fr]">
                    <p className="text-xs font-black uppercase tracking-[0.28em] text-[var(--accent)]">Selected systems</p>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-80px" }}
                    >
                        <h2 className="max-w-4xl text-4xl font-black uppercase leading-[0.95] md:text-7xl">
                            Proof that strategy can ship.
                        </h2>
                        <p className="mt-5 max-w-2xl text-lg leading-8 text-muted">
                            A portfolio board of automation, analytics, and AI projects. Less static resume, more working evidence.
                        </p>
                    </motion.div>
                </div>

                <div className="grid auto-rows-[minmax(250px,auto)] gap-4 md:grid-cols-6">
                    {USER_DATA.projects.map((project, index) => {
                        const isGithub = project.link.includes("github");
                        const LinkIcon = isGithub ? Github : ArrowUpRight;
                        const ProjectIcon = icons[index % icons.length];
                        const spanClass = index === 0 || index === 3 ? "md:col-span-3 md:row-span-2" : "md:col-span-3";

                        return (
                            <motion.a
                                key={project.title}
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                initial={{ opacity: 0, y: 28, rotate: index % 2 ? 0.8 : -0.8 }}
                                whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                                whileHover={{ y: -8, rotate: index % 2 ? -0.8 : 0.8 }}
                                viewport={{ once: true, margin: "-80px" }}
                                transition={{ delay: index * 0.06, type: "spring", stiffness: 130, damping: 18 }}
                                className={`${spanClass} ${tileTone[index % tileTone.length]} group relative flex min-h-[250px] flex-col justify-between overflow-hidden border border-[var(--card-border)] p-6 text-foreground shadow-lg md:p-8`}
                            >
                                <div className="absolute inset-x-0 top-0 h-1 bg-foreground transition-transform duration-300 group-hover:scale-x-75" />
                                <div className="flex items-start justify-between gap-6">
                                    <div className="grid h-12 w-12 place-items-center border border-[var(--card-border)] bg-background/70">
                                        <ProjectIcon size={24} />
                                    </div>
                                    <LinkIcon size={22} className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                                </div>

                                <div className="pt-10">
                                    <p className="mb-4 text-xs font-black uppercase tracking-[0.22em] text-[var(--accent)]">
                                        {project.metric}
                                    </p>
                                    <h3 className="max-w-xl text-3xl font-black uppercase leading-none md:text-5xl">
                                        {project.title}
                                    </h3>
                                    <p className="mt-5 max-w-2xl text-sm leading-7 text-muted md:text-base">
                                        {project.description}
                                    </p>
                                </div>

                                <div className="mt-8 flex flex-wrap gap-2">
                                    {project.tech.map((t) => (
                                        <span key={t} className="border border-[var(--card-border)] bg-background/60 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.14em]">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </motion.a>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
