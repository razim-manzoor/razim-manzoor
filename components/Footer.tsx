"use client";

import { USER_DATA } from "@/lib/data";
import { ArrowUpRight, Download, Linkedin, Mail, MessageSquare, Phone } from "lucide-react";

export default function Footer() {
    const cleanPhone = USER_DATA.contact.phone.replace(/[^0-9]/g, "");
    const whatsAppLink = `https://wa.me/${cleanPhone}`;

    return (
        <footer id="contact" className="border-t border-[var(--card-border)] bg-foreground py-20 text-background md:py-28">
            <div className="container mx-auto px-5 md:px-8">
                <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
                    <div>
                        <h2 className="max-w-3xl text-4xl font-black uppercase leading-[0.92] md:text-7xl">
                            Let&apos;s build useful systems into your business.
                        </h2>
                        <p className="mt-6 max-w-xl text-base leading-relaxed text-background/75 md:text-lg">
                            Available in Dubai for strategic full-time roles (AI Solutions Architect / Business Analyst) and select turnkey client engagements across AI assistants, web platforms, and automated workflow pipelines.
                        </p>
                        <div className="mt-8 flex flex-wrap gap-3">
                            <a
                                href="#scope-builder"
                                className="inline-flex items-center gap-2 bg-[var(--accent)] px-5 py-3 text-xs font-bold uppercase tracking-[0.16em] text-white transition-transform hover:-translate-y-0.5"
                            >
                                Configure Project Scope <ArrowUpRight size={14} />
                            </a>
                            <a
                                href="/Razim_Manzoor_MBA_AI_Analytics.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 border border-background/20 bg-background/10 px-5 py-3 text-xs font-bold uppercase tracking-[0.16em] text-background transition-transform hover:-translate-y-0.5"
                            >
                                Resume (PDF) <Download size={14} />
                            </a>
                        </div>
                    </div>

                    <div className="flex flex-col justify-end gap-3">
                        <a
                            href={`mailto:${USER_DATA.contact.email}`}
                            className="group flex items-center justify-between gap-4 border border-background/15 px-5 py-4 transition-colors hover:bg-background hover:text-foreground"
                            aria-label={`Email ${USER_DATA.contact.email}`}
                        >
                            <span className="flex items-center gap-3"><Mail size={18} /> {USER_DATA.contact.email}</span>
                            <span className="text-xs font-black uppercase tracking-[0.16em]">Email</span>
                        </a>
                        <a
                            href={whatsAppLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-center justify-between gap-4 border border-background/15 px-5 py-4 transition-colors hover:bg-background hover:text-foreground"
                            aria-label="Chat on WhatsApp"
                        >
                            <span className="flex items-center gap-3"><MessageSquare size={18} className="text-[#25D366]" /> Chat on WhatsApp</span>
                            <span className="text-xs font-black uppercase tracking-[0.16em]">Direct</span>
                        </a>
                        <a
                            href={`tel:${USER_DATA.contact.phone.replace(/ /g, "")}`}
                            className="group flex items-center justify-between gap-4 border border-background/15 px-5 py-4 transition-colors hover:bg-background hover:text-foreground"
                            aria-label={`Call ${USER_DATA.contact.phone}`}
                        >
                            <span className="flex items-center gap-3"><Phone size={18} /> {USER_DATA.contact.phone}</span>
                            <span className="text-xs font-black uppercase tracking-[0.16em]">Call</span>
                        </a>
                        <a
                            href={USER_DATA.contact.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-center justify-between gap-4 border border-background/15 px-5 py-4 transition-colors hover:bg-background hover:text-foreground"
                            aria-label="Visit LinkedIn Profile"
                        >
                            <span className="flex items-center gap-3"><Linkedin size={18} /> LinkedIn Profile</span>
                            <span className="text-xs font-black uppercase tracking-[0.16em]">Connect</span>
                        </a>
                    </div>
                </div>

                <div className="mt-16 flex flex-col justify-between gap-4 border-t border-background/15 pt-5 text-xs font-semibold uppercase tracking-[0.18em] text-background/60 md:flex-row">
                    <span>{USER_DATA.availability}</span>
                    <span>© {new Date().getFullYear()} Razim Manzoor · All rights reserved</span>
                </div>
            </div>
        </footer>
    );
}
