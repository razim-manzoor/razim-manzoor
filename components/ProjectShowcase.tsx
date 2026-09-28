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
                <div className="mb-12 border-t border-[var(--card-border)] pt-5">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-80px" }}
                    >
                        <h2 className="max-w-4xl text-4xl font-black uppercase leading-[0.95] md:text-7xl">
                            Proof that strategy can ship.
                        </h2>
                        <p className="mt-5 max-w-2xl text-lg leading-8 text-muted">
                            Working production evidence across AI agents, full-stack Next.js platforms, zero-touch accounts receivable workflows, and computer vision QA.
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
                            <motion.article
                                key={project.title}
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                whileHover={{ y: -6 }}
                                viewport={{ once: true, margin: "-60px" }}
                                transition={{ delay: index * 0.05, type: "spring", stiffness: 140, damping: 20 }}
                                className={`${spanClass} ${tileTone[index % tileTone.length]} group relative flex min-h-[250px] flex-col justify-between overflow-hidden border border-[var(--card-border)] p-6 text-foreground shadow-sm hover:shadow-lg transition-all md:p-8`}
                            >
                                <div className="absolute inset-x-0 top-0 h-1 bg-foreground transition-transform duration-300 group-hover:scale-x-75" />
                                
                                <div className="flex items-start justify-between gap-6">
                                    <div className="grid h-12 w-12 place-items-center border border-[var(--card-border)] bg-background/70">
                                        <ProjectIcon size={24} />
                                    </div>
                                    <div className="flex items-center gap-3">
                                        {project.serviceTrack && (
                                            <span className="border border-[var(--card-border)] bg-background/60 px-2.5 py-1 text-[10px] font-black uppercase tracking-[0.14em] text-[var(--accent)]">
                                                {project.serviceTrack}
                                            </span>
                                        )}
                                        <LinkIcon size={20} aria-hidden="true" className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                                    </div>
                                </div>

                                <div className="pt-8">
                                    <p className="mb-3 text-xs font-black uppercase tracking-[0.2em] text-[var(--accent)]">
                                        {project.metric}
                                    </p>
                                    <h3 className="max-w-xl text-2xl font-black uppercase leading-tight md:text-4xl">
                                        {project.title}
                                    </h3>
                                    <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted md:text-base">
                                        {project.description}
                                    </p>
                                    <details className="mt-5 max-w-2xl border-t border-[var(--card-border)] pt-3 text-sm leading-6">
                                        <summary className="cursor-pointer font-black uppercase tracking-[0.12em] text-[var(--accent)]">
                                            Case-study details
                                        </summary>
                                        <p className="mt-3 text-muted">{project.caseStudy}</p>
                                    </details>
                                </div>

                                <div className="mt-8 flex flex-wrap gap-2">
                                    {project.tech.map((t) => (
                                        <span key={t} className="border border-[var(--card-border)] bg-background/60 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.12em]">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-5 inline-flex w-fit items-center gap-2 border border-[var(--card-border)] bg-background/80 px-3.5 py-2 text-xs font-black uppercase tracking-[0.14em] transition-transform hover:-translate-y-0.5"
                                >
                                    {isGithub ? "View repository" : "View published case study"} <ArrowUpRight size={14} aria-hidden="true" />
                                </a>
                            </motion.article>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
