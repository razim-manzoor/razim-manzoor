"use client";

import { USER_DATA } from "@/lib/data";
import { Linkedin, Mail, Phone } from "lucide-react";

export default function Footer() {
    return (
        <footer id="contact" className="border-t border-[var(--card-border)] bg-foreground py-20 text-background md:py-28">
            <div className="container mx-auto px-5 md:px-8">
                <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
                    <div>
                        <p className="mb-5 text-xs font-black uppercase tracking-[0.28em] text-[var(--warm)]">Open to opportunities</p>
                        <h2 className="max-w-4xl text-5xl font-black uppercase leading-[0.9] md:text-8xl">
                            Let&apos;s build useful AI into the business.
                        </h2>
                    </div>

                    <div className="flex flex-col justify-end gap-3">
                        <a
                            href={`mailto:${USER_DATA.contact.email}`}
                            className="group flex items-center justify-between gap-4 border border-background/15 px-5 py-4 transition-colors hover:bg-background hover:text-foreground"
                            aria-label={`Email ${USER_DATA.contact.email}`}
                        >
                            <span className="flex items-center gap-3"><Mail size={20} /> {USER_DATA.contact.email}</span>
                            <span className="text-xs font-black uppercase tracking-[0.16em]">Email</span>
                        </a>
                        <a
                            href={`tel:${USER_DATA.contact.phone.replace(/ /g, "")}`}
                            className="group flex items-center justify-between gap-4 border border-background/15 px-5 py-4 transition-colors hover:bg-background hover:text-foreground"
                            aria-label={`Call ${USER_DATA.contact.phone}`}
                        >
                            <span className="flex items-center gap-3"><Phone size={20} /> {USER_DATA.contact.phone}</span>
                            <span className="text-xs font-black uppercase tracking-[0.16em]">Call</span>
                        </a>
                        <a
                            href={USER_DATA.contact.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-center justify-between gap-4 border border-background/15 px-5 py-4 transition-colors hover:bg-background hover:text-foreground"
                            aria-label="Visit LinkedIn Profile"
                        >
                            <span className="flex items-center gap-3"><Linkedin size={20} /> LinkedIn Profile</span>
                            <span className="text-xs font-black uppercase tracking-[0.16em]">Connect</span>
                        </a>
                    </div>
                </div>

                <div className="mt-16 flex flex-col justify-between gap-4 border-t border-background/15 pt-5 text-xs font-semibold uppercase tracking-[0.18em] text-background/60 md:flex-row">
                    <span>{USER_DATA.availability}</span>
                    <span>© {new Date().getFullYear()} Razim Manzoor</span>
                </div>
            </div>
        </footer>
    );
}
