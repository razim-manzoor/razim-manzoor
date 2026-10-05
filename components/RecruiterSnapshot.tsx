"use client";

import { USER_DATA } from "@/lib/data";
import { Download, MessageCircle, Mail, ArrowUpRight } from "lucide-react";
import { RESUME_URL, WHATSAPP_URL } from "@/lib/contact";

export default function RecruiterSnapshot() {
  return (
    <section id="dossier" tabIndex={-1} className="py-16 md:py-24">
      <div className="container mx-auto px-5 md:px-8">
        <div className="mb-10 max-w-3xl">
          <h2 className="text-3xl font-bold tracking-tight md:text-5xl">Business understanding.<br />Practical technical work.</h2>
          <p className="mt-4 text-base leading-relaxed text-[var(--muted)] md:text-lg">
            An MBA in Data Science & Analytics, experience in business workflows and reporting, and hands-on development of web applications and automation tools.
          </p>
        </div>
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div>
            <h3 className="text-xl font-semibold">Open to the right opportunity</h3>
            <p className="mt-3 text-base leading-relaxed text-[var(--muted)]">Junior and associate roles are welcome. I am interested in work where I can understand a business problem, build useful tools, and keep developing my skills with a team.</p>
            <ul className="mt-5 flex flex-wrap gap-2" aria-label="Roles of interest">
              {["Business analysis", "Web development", "AI & automation", "Data & BI"].map((role) => <li key={role} className="rounded-lg border border-[var(--border)] bg-[var(--surface)] px-3 py-2 text-sm">{role}</li>)}
            </ul>
            <dl className="mt-7 divide-y divide-[var(--border)]">
              {USER_DATA.recruiterSnapshot.map((fact) => <div key={fact.label} className="py-4"><dt className="text-sm text-[var(--muted)]">{fact.label}</dt><dd className="mt-1 text-sm font-medium leading-relaxed">{fact.value}</dd></div>)}
            </dl>
            <div className="mt-6 flex flex-col gap-3">
              <a href={RESUME_URL} target="_blank" rel="noopener noreferrer" className="action-primary"><Download size={17} aria-hidden="true" /> Download résumé PDF</a>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="action-secondary"><MessageCircle size={17} aria-hidden="true" /> Discuss a role on WhatsApp</a>
              <a href={`mailto:${USER_DATA.contact.email}`} className="inline-flex min-h-11 items-center justify-center gap-2 text-sm text-[var(--muted)] hover:text-[var(--foreground)]"><Mail size={16} aria-hidden="true" /> Email me instead</a>
            </div>
          </div>
          <div>
            <h3 className="mb-6 text-xl font-semibold">Experience</h3>
            <div className="space-y-7">
              {USER_DATA.experience.map((experience) => (
                <article key={experience.id} className="border-b border-[var(--border)] pb-7">
                  <p className="text-sm text-[var(--muted)]">{experience.period} · {experience.location}</p>
                  <h4 className="mt-2 text-lg font-semibold">{experience.role}</h4>
                  <p className="mt-1 text-sm font-medium text-[var(--accent)]">{experience.company}</p>
                  <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-[var(--muted)]">
                    {experience.achievements.map((achievement) => <li key={achievement}>{achievement}</li>)}
                  </ul>
                </article>
              ))}
            </div>
            <h3 className="mb-5 mt-8 text-xl font-semibold">Education</h3>
            <div className="space-y-5">
              {USER_DATA.education.map((education) => <div key={education.degree}><h4 className="font-semibold">{education.degree}</h4><p className="mt-1 text-sm">{education.field}</p><p className="mt-1 text-sm text-[var(--muted)]">{education.institution} · {education.year}</p></div>)}
            </div>
            <details className="mt-7 border-t border-[var(--border)] pt-3">
              <summary className="flex min-h-12 items-center text-base font-semibold">Courses, certificates & recognition</summary>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-[var(--muted)]">{USER_DATA.certifications.map((certificate) => <li key={certificate}>{certificate}</li>)}</ul>
            </details>
            <a href={USER_DATA.contact.linkedin} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex min-h-11 items-center gap-2 text-sm font-medium text-[var(--accent)] hover:underline">View LinkedIn profile <ArrowUpRight size={15} aria-hidden="true" /></a>
          </div>
        </div>
      </div>
    </section>
  );
}
