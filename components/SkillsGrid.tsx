"use client";

const groups = [
  { title: "Web & application development", tools: ["React / Next.js", "TypeScript", "Python / FastAPI", "SQL & PostgreSQL", "REST APIs", "Git & Docker"], detail: "Interfaces, backend logic, data models, and integrations." },
  { title: "AI & automation", tools: ["n8n / Make", "Power Automate", "Local models / Ollama", "Document search (RAG)", "Webhooks", "Browser automation"], detail: "Assistants, connected workflows, document tools, and repetitive task automation." },
  { title: "Data & reporting", tools: ["Power BI", "DAX / Power Query", "Python / Pandas", "SQL", "Tableau", "Data validation"], detail: "Data preparation, reporting models, and useful operational metrics." },
  { title: "Business analysis", tools: ["Requirements gathering", "Process mapping", "KPI definition", "Stakeholder communication", "ROI analysis", "Project scoping"], detail: "Understanding the need, defining the work, and checking that the result is useful." },
];

export default function SkillsGrid() {
  return (
    <section id="skills" tabIndex={-1} className="py-16 md:py-20">
      <div className="container mx-auto px-5 md:px-8">
        <div className="mb-9 max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">The toolkit behind the work.</h2>
          <p className="mt-4 text-base leading-relaxed text-[var(--muted)]">Business analysis and implementation belong together. These are the tools and methods I work with; the combination depends on the job.</p>
        </div>
        <div className="grid gap-x-12 gap-y-8 md:grid-cols-2">
          {groups.map((group) => <div key={group.title} className="border-t border-[var(--border)] pt-5"><h3 className="text-xl font-semibold">{group.title}</h3><p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">{group.detail}</p><ul className="mt-4 flex flex-wrap gap-2">{group.tools.map((tool) => <li key={tool} className="rounded-lg bg-[var(--surface-hover)] px-3 py-2 text-sm">{tool}</li>)}</ul></div>)}
        </div>
      </div>
    </section>
  );
}
