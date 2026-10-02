"use client";

import { USER_DATA } from "@/lib/data";
import { TrendingUp, BrainCircuit, Globe, Workflow } from "lucide-react";
import { Card } from "@/components/ui/card";

interface SkillLayer {
  title: string;
  category: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  description: string;
  skills: string[];
}

const SKILL_LAYERS: SkillLayer[] = [
  {
    title: "Web & Full-Stack",
    category: "Web Engineering",
    icon: Globe,
    description: "Fast, responsive web applications built with Next.js, React, and TypeScript. Clean code, modern UI, and accessible design.",
    skills: [
      "Next.js 16 (App Router)",
      "React 19",
      "TypeScript",
      "Tailwind CSS v4",
      "REST APIs & Webhooks",
      "SQL & PostgreSQL",
    ],
  },
  {
    title: "AI & Local LLMs",
    category: "AI & Intelligence",
    icon: BrainCircuit,
    description: "Practical AI tools, private document search (RAG), and open-source models running locally or via APIs.",
    skills: [
      "Generative AI & LLMs",
      "Document Search (RAG)",
      "Ollama & Local Models",
      "Vector DBs (ChromaDB)",
      "LangChain",
      "Python (FastAPI, Pandas)",
    ],
  },
  {
    title: "Workflow Automation",
    category: "Automation & Operations",
    icon: Workflow,
    description: "Connecting tools and automating repetitive manual tasks across CRMs, spreadsheets, and messaging platforms.",
    skills: [
      "n8n & Make.com",
      "Python Scripting",
      "Power Automate",
      "Power BI (DAX)",
      "SQL Queries",
      "API Integrations",
    ],
  },
  {
    title: "Business & Strategy",
    category: "MBA Grounding",
    icon: TrendingUp,
    description: "MBA in Data Science. Translating business goals and operational bottlenecks into working software.",
    skills: USER_DATA.skills.business,
  },
];

export default function SkillsGrid() {
  return (
    <section id="skills" className="relative py-20 md:py-28 overflow-hidden">
      <div className="container mx-auto px-5 md:px-8">
        <div className="mb-12 max-w-3xl">
          <h2 className="text-3xl font-black uppercase tracking-tight md:text-5xl">
            Skills & Tech Stack
          </h2>
          <p className="mt-4 text-base text-[var(--muted)] leading-relaxed md:text-lg">
            A full-stack capability profile: from Next.js web applications and local AI tools down to workflow automation and business analytics.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SKILL_LAYERS.map((layer) => {
            const Icon = layer.icon;
            return (
              <Card
                key={layer.title}
                className="flex flex-col justify-between p-6 hover:shadow-md transition-shadow"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="grid h-10 w-10 place-items-center rounded-lg border border-[var(--border)] bg-[var(--surface-hover)] text-[var(--primary)]">
                      <Icon size={20} />
                    </div>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[var(--muted)]">
                      {layer.category}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-[var(--foreground)]">
                    {layer.title}
                  </h3>

                  <p className="mt-2 text-xs text-[var(--muted)] leading-relaxed min-h-[48px]">
                    {layer.description}
                  </p>

                  <div className="mt-5 space-y-1.5 pt-4 border-t border-[var(--border)]">
                    {layer.skills.map((skill) => (
                      <div
                        key={skill}
                        className="rounded-md border border-[var(--border)] bg-[var(--surface-hover)] px-2.5 py-1 text-xs font-mono text-[var(--foreground)] flex items-center justify-between"
                      >
                        <span>{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
