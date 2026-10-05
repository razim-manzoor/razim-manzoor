"use client";

import { useState } from "react";
import { USER_DATA, ProjectItem } from "@/lib/data";
import { ArrowUpRight, Github, Bot, Workflow, FileSearch, Boxes, CheckCircle2, ArrowRight, Cpu, ShieldCheck } from "lucide-react";
import { SpotlightCard } from "@/components/magicui/spotlight-card";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetFooter,
  SheetClose,
} from "@/components/ui/sheet";

const icons = [Workflow, Bot, FileSearch, Boxes];

export default function ProjectShowcase() {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  const openProjectDetails = (project: ProjectItem) => {
    setSelectedProject(project);
    setIsSheetOpen(true);
  };

  return (
    <section id="projects" className="relative py-20 md:py-28 overflow-hidden">
      <div className="container mx-auto px-5 md:px-8">
        <div className="mb-12 max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-3 py-1 text-xs font-mono text-[var(--muted)] mb-3">
            <span>Systems & Products</span>
            <span>&bull;</span>
            <span className="text-emerald-600 dark:text-emerald-400 font-semibold">Active builds in progress</span>
          </div>
          <h2 className="text-3xl font-black uppercase tracking-tight md:text-5xl">
            Featured Systems & Applications
          </h2>
          <p className="mt-3 text-base text-[var(--muted)] leading-relaxed md:text-lg">
            Production-ready systems built with Next.js, Python, local AI models, and automated pipelines. Designed to eliminate operational drag and ship in days instead of months.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid auto-rows-[minmax(280px,auto)] gap-6 md:grid-cols-2">
          {USER_DATA.projects.map((project, index) => {
            const isGithub = project.link.includes("github");
            const LinkIcon = isGithub ? Github : ArrowUpRight;
            const ProjectIcon = icons[index % icons.length];

            return (
              <SpotlightCard
                key={project.title}
                enableTilt={true}
                className="flex flex-col justify-between p-6 md:p-8 group"
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
                        aria-label={`View ${project.title} external source`}
                      >
                        <LinkIcon size={16} />
                      </a>
                    </div>
                  </div>

                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[var(--primary)] block mb-1">
                    {project.serviceTrack}
                  </span>

                  <h3 className="text-2xl font-bold tracking-tight text-[var(--foreground)]">
                    {project.title}
                  </h3>

                  <p className="mt-3 text-sm text-[var(--muted)] leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tech Stack Chips */}
                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {project.tech.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md border border-[var(--border)] bg-[var(--surface-hover)] px-2 py-0.5 text-[11px] font-mono text-[var(--foreground)]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Action: Progressive Disclosure Trigger */}
                <div className="mt-6 pt-4 border-t border-[var(--border)] flex items-center justify-between">
                  <button
                    onClick={() => openProjectDetails(project)}
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[var(--primary)] hover:underline cursor-pointer"
                  >
                    View Project Details <ArrowRight size={14} />
                  </button>
                  <span className="text-[11px] font-mono text-[var(--muted)]">Key Metric</span>
                </div>
              </SpotlightCard>
            );
          })}
        </div>
      </div>

      {/* Slide-Out Project Details Drawer */}
      <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
        <SheetContent side="right" className="w-full sm:max-w-2xl">
          {selectedProject && (
            <div className="space-y-6 pt-2">
              <SheetHeader>
                <div className="flex items-center gap-2">
                  <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-0.5 text-[11px] font-mono font-bold text-emerald-600 dark:text-emerald-400">
                    {selectedProject.metric}
                  </span>
                  <span className="text-xs font-mono text-[var(--muted)]">
                    {selectedProject.serviceTrack}
                  </span>
                </div>
                <SheetTitle className="text-2xl sm:text-3xl font-bold mt-2">
                  {selectedProject.title}
                </SheetTitle>
                <SheetDescription className="text-base text-[var(--foreground)] mt-2">
                  {selectedProject.description}
                </SheetDescription>
              </SheetHeader>

              {/* Problem Constraint */}
              <div className="rounded-xl border border-[var(--border)] bg-[var(--surface-hover)] p-5">
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-rose-500 dark:text-rose-400 flex items-center gap-1.5 mb-2">
                  <ShieldCheck size={14} /> The Problem
                </h4>
                <p className="text-sm text-[var(--foreground)] leading-relaxed">
                  {selectedProject.problem}
                </p>
              </div>

              {/* Technical Architecture Solution */}
              <div className="rounded-xl border border-[var(--border)] bg-[var(--surface-hover)] p-5">
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[var(--primary)] flex items-center gap-1.5 mb-2">
                  <Cpu size={14} /> What Was Built
                </h4>
                <p className="text-sm text-[var(--foreground)] leading-relaxed">
                  {selectedProject.caseStudy}
                </p>
              </div>

              {/* Quantified Business Outcome */}
              <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/5 p-5">
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5 mb-2">
                  <CheckCircle2 size={14} /> The Result & Impact
                </h4>
                <p className="text-sm text-[var(--foreground)] leading-relaxed">
                  {selectedProject.impact}
                </p>
              </div>

              {/* Tech Stack */}
              <div>
                <h5 className="text-xs font-mono font-bold uppercase tracking-wider text-[var(--muted)] mb-3">
                  Technologies Used
                </h5>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-lg border border-[var(--border)] bg-[var(--surface)] px-3 py-1 text-xs font-mono font-semibold text-[var(--foreground)]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <SheetFooter className="mt-8">
                <div className="flex flex-col sm:flex-row gap-3 w-full justify-between items-center">
                  <a
                    href={selectedProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-lg bg-[var(--primary)] hover:bg-[var(--primary)]/90 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white shadow-sm transition-all w-full sm:w-auto"
                  >
                    View Project / Source <ArrowUpRight size={14} />
                  </a>
                  <SheetClose asChild>
                    <button className="rounded-lg border border-[var(--border)] px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-[var(--foreground)] hover:bg-[var(--surface-hover)] transition-colors w-full sm:w-auto cursor-pointer">
                      Close
                    </button>
                  </SheetClose>
                </div>
              </SheetFooter>
            </div>
          )}
        </SheetContent>
      </Sheet>
    </section>
  );
}
