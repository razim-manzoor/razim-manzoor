"use client";

import { USER_DATA } from "@/lib/data";
import { Mail, Linkedin, Phone } from "lucide-react";

export default function Footer() {
    return (
        <footer className="py-24 border-t border-black/5 dark:border-white/10 relative overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] -z-10" />

            <div className="container mx-auto px-6 text-center">
                <h2 className="text-4xl font-bold mb-8 text-foreground dark:text-white">Ready to Optimize?</h2>
                <p className="text-gray-600 dark:text-gray-400 max-w-xl mx-auto mb-12">
                    Currently available for full-time opportunities in Dubai.
                    Let's discuss how I can help your team with Business Analysis and AI Strategy.
                </p>

                <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-16">
                    <a
                        href={`mailto:${USER_DATA.contact.email}`}
                        className="px-6 py-4 glass rounded-xl flex items-center gap-3 hover:bg-black/5 dark:hover:bg-white/5 transition-all w-full md:w-auto justify-center border border-black/5 dark:border-white/10 text-gray-700 dark:text-gray-200"
                        aria-label={`Email ${USER_DATA.contact.email}`}
                    >
                        <Mail className="text-primary" />
                        <span>{USER_DATA.contact.email}</span>
                    </a>
                    <a
                        href={`tel:${USER_DATA.contact.phone.replace(/ /g, "")}`}
                        className="px-6 py-4 glass rounded-xl flex items-center gap-3 hover:bg-black/5 dark:hover:bg-white/5 transition-all w-full md:w-auto justify-center border border-black/5 dark:border-white/10 text-gray-700 dark:text-gray-200"
                        aria-label={`Call ${USER_DATA.contact.phone}`}
                    >
                        <Phone className="text-primary" />
                        <span>{USER_DATA.contact.phone}</span>
                    </a>
                    <a
                        href={USER_DATA.contact.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-4 glass rounded-xl flex items-center gap-3 hover:bg-black/5 dark:hover:bg-white/5 transition-all w-full md:w-auto justify-center border border-black/5 dark:border-white/10 text-gray-700 dark:text-gray-200"
                        aria-label="Visit LinkedIn Profile"
                    >
                        <Linkedin className="text-primary" />
                        <span>LinkedIn Profile</span>
                    </a>
                </div>

                <div className="text-gray-500 dark:text-gray-600 text-sm">
                    © {new Date().getFullYear()} Razim Manzoor. All rights reserved. Built with Next.js & Tailwind.
                </div>
            </div>
        </footer>
    );
}
