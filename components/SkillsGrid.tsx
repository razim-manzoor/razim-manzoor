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
    title: "Strategy & Financial ROI",
    category: "Layer 01 - Business Acumen",
    icon: TrendingUp,
    description: "Framing technical investments into quantified operational margin, payback models, and strategic process mining.",
    skills: USER_DATA.skills.business,
  },
  {
    title: "Frontier AI & Local RAG",
    category: "Layer 02 - Intelligence",
    icon: BrainCircuit,
    description: "Air-gapped on-prem models, semantic vector search, citation verification, and Pydantic schema guardrails.",
    skills: [
      "Generative AI (LLMs)",
      "RAG Architecture",
      "Ollama & DeepSeek",
      "Vector DBs (Qdrant/Chroma)",
      "LangChain",
      "Python (Pandas, Scikit-learn)",
    ],
  },
  {
    title: "Modern Web & Edge Platforms",
    category: "Layer 03 - Interface & Performance",
    icon: Globe,
    description: "Sub-second, accessible web applications engineered with Next.js App Router, React 19, TypeScript, and Tailwind CSS v4.",
    skills: [
      "Next.js 16 / App Router",
      "React 19",
      "TypeScript",
      "Tailwind CSS v4",
      "Motion Spring Physics",
      "Cloudflare Workers",
    ],
  },
  {
    title: "Enterprise Automation & BI",
    category: "Layer 04 - Operations",
    icon: Workflow,
    description: "End-to-end multi-step automated workflows, server-side attribution containers, and executive Power BI dashboards.",
    skills: [
      "n8n / Make.com Pipelines",
      "Power Automate",
      "Power BI (DAX)",
      "Meta Conversions API (CAPI)",
      "SQL",
      "UiPath RPA",
    ],
  },
];

export default function SkillsGrid() {
  return (
    <section id="skills" className="relative py-20 md:py-28 overflow-hidden">
      <div className="container mx-auto px-5 md:px-8">
        <div className="mb-12 max-w-3xl">
          <h2 className="text-3xl font-black uppercase tracking-tight md:text-5xl">
            Architectural Capabilities Matrix
          </h2>
          <p className="mt-4 text-base text-[var(--muted)] leading-relaxed md:text-lg">
            A full-stack capability profile organized by architectural layer: spanning quantitative MBA strategy down to local private AI models and edge deployment.
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
