"use client";

import { ArrowUp, ArrowUpRight, Linkedin, Mail, MessageCircle, Phone } from "lucide-react";
import { USER_DATA } from "@/lib/data";
import { WHATSAPP_URL } from "@/lib/contact";

export default function Footer() {
  return (
    <footer id="contact" tabIndex={-1} className="border-t border-[var(--border)] bg-[var(--surface)] py-14 md:py-20">
      <div className="container mx-auto px-5 md:px-8">
        <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr]">
          <div>
            <h2 className="max-w-xl text-3xl font-bold tracking-tight md:text-4xl">Have a project or role in mind?</h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-[var(--muted)]">Tell me what you are working on, what needs to change, or where I could help your team.</p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="action-primary"><MessageCircle size={18} aria-hidden="true" /> Message me on WhatsApp <ArrowUpRight size={15} aria-hidden="true" /></a>
              <a href={`mailto:${USER_DATA.contact.email}`} className="action-secondary"><Mail size={17} aria-hidden="true" /> Send an email</a>
            </div>
          </div>
          <div className="space-y-1 md:justify-self-end">
            <a href={`mailto:${USER_DATA.contact.email}`} className="flex min-h-11 items-center gap-2 break-all text-sm text-[var(--muted)] hover:text-[var(--foreground)]">{USER_DATA.contact.email}</a>
            <a href={`tel:${USER_DATA.contact.phone.replace(/[^0-9+]/g, "")}`} className="flex min-h-11 items-center gap-2 text-sm text-[var(--muted)] hover:text-[var(--foreground)]"><Phone size={15} aria-hidden="true" />{USER_DATA.contact.phone}</a>
            <a href={USER_DATA.contact.linkedin} target="_blank" rel="noopener noreferrer" className="flex min-h-11 items-center gap-2 text-sm text-[var(--muted)] hover:text-[var(--foreground)]"><Linkedin size={15} aria-hidden="true" /> LinkedIn profile</a>
            <nav aria-label="Footer navigation" className="mt-3 flex flex-wrap gap-x-5">
              {[["Services", "#services"], ["Background", "#dossier"], ["Skills", "#skills"]].map(([label, href]) => <a key={href} href={href} className="inline-flex min-h-11 items-center text-sm font-medium hover:underline">{label}</a>)}
            </nav>
          </div>
        </div>
        <div className="mt-10 flex flex-col justify-between gap-4 border-t border-[var(--border)] pt-6 text-sm text-[var(--muted)] sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} Razim Manzoor · Dubai, UAE</p>
          <a href="#home" className="inline-flex min-h-11 items-center gap-2 font-medium hover:text-[var(--foreground)]">Back to top <ArrowUp size={15} aria-hidden="true" /></a>
        </div>
      </div>
    </footer>
  );
}
