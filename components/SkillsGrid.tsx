"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ChevronDown } from "lucide-react";
import { spatialSpring } from "@/lib/motion";

const groups = [
  { title: "Web & application development", tools: ["React / Next.js", "TypeScript", "Python / FastAPI", "SQL & PostgreSQL", "REST APIs", "Git & Docker"], detail: "Interfaces, backend logic, data models, and integrations." },
  { title: "AI & automation", tools: ["n8n / Make", "Power Automate", "Local models / Ollama", "Document search (RAG)", "Webhooks", "Browser automation"], detail: "Assistants, connected workflows, document tools, and repetitive task automation." },
  { title: "Data & reporting", tools: ["Power BI", "DAX / Power Query", "Python / Pandas", "SQL", "Tableau", "Data validation"], detail: "Data preparation, reporting models, and useful operational metrics." },
  { title: "Business analysis", tools: ["Requirements gathering", "Process mapping", "KPI definition", "Stakeholder communication", "ROI analysis", "Project scoping"], detail: "Understanding the need, defining the work, and checking that the result is useful." },
];

export default function SkillsGrid() {
  const [open, setOpen] = useState(false);
  const reduced = useReducedMotion() ?? false;

  return (
    <section id="skills" tabIndex={-1} className="pb-12 md:pb-16">
      <div className="site-wrap">
        <div className="border-y border-[var(--border)] py-5">
          <button
            type="button"
            aria-expanded={open}
            aria-controls="skills-panel"
            onClick={() => setOpen((prev) => !prev)}
            className="group flex min-h-12 w-full items-center justify-between gap-5 text-left"
          >
            <div>
              <h2 className="text-2xl font-semibold tracking-tight group-hover:text-[var(--accent)] transition-colors">
                The toolkit behind the work.
              </h2>
              <p className="mt-2 text-sm text-[var(--muted)]">
                Development, AI, data, and business analysis. Explore the tools and methods.
              </p>
            </div>
            <motion.span
              animate={{ rotate: open ? 180 : 0 }}
              transition={{ duration: reduced ? 0 : 0.2 }}
              className="shrink-0 text-[var(--accent)]"
            >
              <ChevronDown size={20} aria-hidden="true" />
            </motion.span>
          </button>

          <AnimatePresence initial={false}>
            {open && (
              <motion.div
                id="skills-panel"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={reduced ? { duration: 0 } : spatialSpring}
                style={{ overflow: "hidden" }}
              >
                <div className="mt-7 grid gap-x-12 gap-y-8 md:grid-cols-2">
                  {groups.map((group) => (
                    <div key={group.title} className="border-t border-[var(--border)] pt-5">
                      <h3 className="text-xl font-semibold">{group.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">{group.detail}</p>
                      <ul className="mt-4 flex flex-wrap gap-2">
                        {group.tools.map((tool) => (
                          <li
                            key={tool}
                            className="rounded-lg bg-[var(--surface-hover)] px-3 py-2 text-sm transition-colors duration-150 hover:bg-[var(--surface)] hover:text-[var(--foreground)] cursor-default"
                          >
                            {tool}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
