"use client";

import { useState } from "react";
import { USER_DATA } from "@/lib/data";
import { ArrowUpRight, Github, Bot, Workflow, FileSearch, Boxes, CheckCircle2 } from "lucide-react";
import { SpotlightCard } from "@/components/magicui/spotlight-card";
import { snappySpring } from "@/lib/motion";
import { motion, AnimatePresence } from "motion/react";

const icons = [Workflow, Bot, FileSearch, Boxes];

type ProjectViewTab = "roi" | "arch" | "code";

export default function ProjectShowcase() {
  const [activeTabs, setActiveTabs] = useState<Record<number, ProjectViewTab>>({
    0: "roi",
    1: "roi",
    2: "roi",
    3: "roi",
  });

  const setCardTab = (index: number, tab: ProjectViewTab) => {
    setActiveTabs((prev) => ({ ...prev, [index]: tab }));
  };

  return (
    <section id="projects" className="relative py-20 md:py-28 overflow-hidden">
      <div className="container mx-auto px-5 md:px-8">
        <div className="mb-12 max-w-3xl">
          <h2 className="text-3xl font-black uppercase tracking-tight md:text-5xl">
            Shipped Systems & Proof
          </h2>
          <p className="mt-4 text-base text-[var(--muted)] leading-relaxed md:text-lg">
            Production evidence across enterprise AI agents, automated receivables workflows, private local RAG pipelines, and full-stack web platforms.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid auto-rows-[minmax(320px,auto)] gap-6 md:grid-cols-2">
          {USER_DATA.projects.map((project, index) => {
            const isGithub = project.link.includes("github");
            const LinkIcon = isGithub ? Github : ArrowUpRight;
            const ProjectIcon = icons[index % icons.length];
            const currentTab = activeTabs[index] || "roi";

            return (
              <SpotlightCard
                key={project.title}
                enableTilt={true}
                className="flex flex-col justify-between p-6 md:p-8"
              >
                <div>
                  {/* Top Bar: Icon, Service Track, Link */}
                  <div className="flex items-start justify-between gap-4 mb-5">
                    <div className="grid h-11 w-11 place-items-center rounded-lg border border-[var(--border)] bg-[var(--surface-hover)] text-[var(--primary)]">
                      <ProjectIcon size={22} />
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-0.5 text-[11px] font-mono font-bold text-emerald-600 dark:text-emerald-400">
                        {project.metric}
                      </span>
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-full p-2 text-[var(--muted)] hover:text-[var(--foreground)] hover:bg-[var(--surface-hover)] transition-colors"
                        aria-label={`View ${project.title} external case study`}
                      >
                        <LinkIcon size={16} />
                      </a>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold tracking-tight text-[var(--foreground)]">
                    {project.title}
                  </h3>

                  {/* 3-Way Perspective Selector */}
                  <div className="my-4 flex items-center gap-1 rounded-lg border border-[var(--border)] bg-[var(--surface-hover)] p-1 w-fit">
                    <button
                      onClick={() => setCardTab(index, "roi")}
                      className={`px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider rounded-md transition-colors cursor-pointer ${
                        currentTab === "roi"
                          ? "bg-[var(--surface)] text-[var(--foreground)] shadow-xs"
                          : "text-[var(--muted)] hover:text-[var(--foreground)]"
                      }`}
                    >
                      Business Impact
                    </button>
                    <button
                      onClick={() => setCardTab(index, "arch")}
                      className={`px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider rounded-md transition-colors cursor-pointer ${
                        currentTab === "arch"
                          ? "bg-[var(--surface)] text-[var(--foreground)] shadow-xs"
                          : "text-[var(--muted)] hover:text-[var(--foreground)]"
                      }`}
                    >
                      Architecture
                    </button>
                    <button
                      onClick={() => setCardTab(index, "code")}
                      className={`px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider rounded-md transition-colors cursor-pointer ${
                        currentTab === "code"
                          ? "bg-[var(--surface)] text-[var(--foreground)] shadow-xs"
                          : "text-[var(--muted)] hover:text-[var(--foreground)]"
                      }`}
                    >
                      Stack & Deliverable
                    </button>
                  </div>

                  {/* Perspective Content Body */}
                  <div className="min-h-[110px] text-sm text-[var(--muted)] leading-relaxed">
                    <AnimatePresence mode="wait">
                      {currentTab === "roi" && (
                        <motion.div
                          key="roi"
                          initial={{ opacity: 0, y: 6 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -6 }}
                          transition={snappySpring}
                        >
                          <p>{project.description}</p>
                        </motion.div>
                      )}
                      {currentTab === "arch" && (
                        <motion.div
                          key="arch"
                          initial={{ opacity: 0, y: 6 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -6 }}
                          transition={snappySpring}
                        >
                          <p className="font-mono text-xs leading-relaxed text-[var(--foreground)]">
                            {project.caseStudy}
                          </p>
                        </motion.div>
                      )}
                      {currentTab === "code" && (
                        <motion.div
                          key="code"
                          initial={{ opacity: 0, y: 6 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -6 }}
                          transition={snappySpring}
                          className="space-y-3"
                        >
                          <p className="text-xs">
                            Core Technologies deployed in production:
                          </p>
                          <div className="flex flex-wrap gap-1.5">
                            {project.tech.map((t) => (
                              <span
                                key={t}
                                className="rounded-md border border-[var(--border)] bg-[var(--surface-hover)] px-2.5 py-1 text-xs font-mono font-medium text-[var(--foreground)]"
                              >
                                {t}
                              </span>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>

                {/* Bottom External Action Link */}
                <div className="pt-6 border-t border-[var(--border)] flex items-center justify-between">
                  <span className="text-[11px] font-mono text-[var(--muted)] uppercase">
                    {project.serviceTrack}
                  </span>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[var(--primary)] hover:underline"
                  >
                    {isGithub ? "Repository Code" : "Read Case Study"} <ArrowUpRight size={14} />
                  </a>
                </div>
              </SpotlightCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
