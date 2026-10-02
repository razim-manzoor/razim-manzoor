"use client";

import { USER_DATA } from "@/lib/data";
import { Briefcase, MapPin, CheckCircle2, Award, Download, ArrowRight, GraduationCap } from "lucide-react";
import { Card } from "@/components/ui/card";

export default function RecruiterSnapshot() {
  return (
    <section id="dossier" className="relative py-20 md:py-28 overflow-hidden blueprint-grid">
      <div className="container mx-auto px-5 md:px-8">
        <div className="mb-12 max-w-3xl">
          <h2 className="text-3xl font-black uppercase tracking-tight md:text-5xl">
            Profile Overview & Experience
          </h2>
          <p className="mt-4 text-base text-[var(--muted)] leading-relaxed md:text-lg">
            Quick facts, work history, and qualifications for hiring managers, engineering leads, and teams looking to collaborate in Dubai.
          </p>
        </div>

        {/* Open Roles & Seniority Flexibility Banner */}
        <div className="mb-8 rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-5 md:p-6">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 mb-1.5">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                Immediate Joining in Dubai &bull; Visit Visa &bull; Zero Notice Period
              </div>
              <h3 className="text-lg md:text-xl font-bold tracking-tight text-[var(--foreground)]">
                Open to Full-Time, Contract, or Hybrid Roles Across All Related Disciplines
              </h3>
              <p className="mt-1 text-xs md:text-sm text-[var(--muted)] max-w-2xl leading-relaxed">
                Flexible on title, scope, and seniority (Junior, Mid-Level, or Senior). Available immediately for on-site or hybrid teams in Dubai and across the UAE.
              </p>
            </div>
            <div className="flex flex-wrap gap-1.5 max-w-md">
              {[
                "Business Analyst",
                "Full-Stack Developer",
                "AI & Automation Engineer",
                "Software Engineer",
                "Data & BI Analyst",
                "Systems Analyst",
              ].map((role) => (
                <span
                  key={role}
                  className="rounded-md border border-emerald-500/30 bg-[var(--surface)] px-2.5 py-1 text-[11px] font-bold text-emerald-600 dark:text-emerald-400"
                >
                  {role}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Left Column: Quick Snapshot Facts */}
          <div className="space-y-6">
            <div className="grid gap-4 sm:grid-cols-2">
              {USER_DATA.recruiterSnapshot.map((fact) => (
                <Card key={fact.label} className="p-5">
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[var(--primary)] block">
                    {fact.label}
                  </span>
                  <p className="mt-2 text-sm font-bold text-[var(--foreground)] leading-snug">
                    {fact.value}
                  </p>
                </Card>
              ))}
            </div>

            {/* Hiring Signals */}
            <Card className="p-6">
              <h3 className="text-base font-bold text-[var(--foreground)] mb-4 flex items-center gap-2">
                <CheckCircle2 size={18} className="text-emerald-500" />
                Core Strengths
              </h3>
              <div className="space-y-3">
                {USER_DATA.hiringSignals.map((signal) => (
                  <div key={signal} className="flex items-start gap-2.5 text-xs text-[var(--muted)] leading-relaxed">
                    <span className="h-1.5 w-1.5 rounded-full bg-[var(--primary)] shrink-0 mt-1.5" />
                    <span>{signal}</span>
                  </div>
                ))}
              </div>
            </Card>

            {/* Direct Resume Download Callout */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 rounded-xl border border-[var(--border)] bg-[var(--surface-hover)] p-5">
              <div>
                <h4 className="text-sm font-bold text-[var(--foreground)]">
                  Resume & Qualifications
                </h4>
                <p className="text-xs text-[var(--muted)] mt-0.5">
                  Updated resume with detailed work history, projects, and education.
                </p>
              </div>
              <a
                href="/Razim_Manzoor_MBA_AI_Analytics.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-[var(--primary)] hover:bg-[var(--primary)]/90 px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-white shadow-sm shrink-0"
              >
                Download Resume <Download size={14} />
              </a>
            </div>
          </div>

          {/* Right Column: Experience & Education Timeline */}
          <div className="space-y-6">
            <Card className="p-6 md:p-8">
              <h3 className="text-base font-bold text-[var(--foreground)] mb-6 flex items-center gap-2">
                <Briefcase size={18} className="text-[var(--primary)]" />
                Industry Experience
              </h3>

              <div className="space-y-6">
                {USER_DATA.experience.map((exp) => (
                  <div key={exp.id} className="relative pl-6 border-l-2 border-[var(--border)]">
                    <span className="absolute -left-[5px] top-1.5 h-2 w-2 rounded-full bg-[var(--primary)]" />
                    <div className="flex items-baseline justify-between gap-2">
                      <h4 className="text-sm font-bold text-[var(--foreground)]">
                        {exp.role}
                      </h4>
                    </div>
                    <p className="text-xs font-semibold text-[var(--primary)] mt-0.5">
                      {exp.company} &bull; <span className="font-mono text-[11px] text-[var(--muted)]">{exp.period}</span>
                    </p>
                    <ul className="mt-2.5 space-y-1.5 text-xs text-[var(--muted)]">
                      {exp.achievements.map((ach, i) => (
                        <li key={i} className="leading-relaxed">
                          &bull; {ach}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {/* Education Section */}
              <div className="mt-8 pt-6 border-t border-[var(--border)]">
                <h3 className="text-base font-bold text-[var(--foreground)] mb-4 flex items-center gap-2">
                  <GraduationCap size={18} className="text-[var(--primary)]" />
                  Education Credentials
                </h3>
                <div className="space-y-4">
                  {USER_DATA.education.map((edu) => (
                    <div key={edu.degree} className="text-xs">
                      <h4 className="font-bold text-[var(--foreground)]">
                        {edu.degree} in {edu.field}
                      </h4>
                      <p className="text-[var(--muted)] mt-0.5">
                        {edu.institution} &bull; <span className="font-mono">{edu.year}</span>
                      </p>
                      {edu.details && (
                        <p className="mt-1 text-[var(--muted)] text-[11px] italic">
                          {edu.details}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
