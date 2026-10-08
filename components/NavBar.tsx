"use client";

import { useEffect, useRef, useState } from "react";
import { Menu, X, FileText, MessageCircle } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { RESUME_URL, WHATSAPP_URL } from "@/lib/contact";

const navLinks = [
  { name: "Services", href: "#services" },
  { name: "Approach", href: "#pipeline" },
  { name: "Background", href: "#dossier" },
  { name: "Contact", href: "#contact" },
];

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;
    const dismiss = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
        triggerRef.current?.focus();
      }
    };
    const outside = (event: PointerEvent) => {
      if (event.target instanceof Node && !menuRef.current?.contains(event.target) && !triggerRef.current?.contains(event.target)) setIsOpen(false);
    };
    const media = window.matchMedia("(min-width: 1024px)");
    const closeOnDesktop = () => { if (media.matches) setIsOpen(false); };
    document.addEventListener("keydown", dismiss);
    document.addEventListener("pointerdown", outside);
    media.addEventListener("change", closeOnDesktop);
    return () => {
      document.removeEventListener("keydown", dismiss);
      document.removeEventListener("pointerdown", outside);
      media.removeEventListener("change", closeOnDesktop);
    };
  }, [isOpen]);

  return (
    <header className="site-header">
      <div className="site-wrap">
        <nav aria-label="Primary navigation" className="site-nav">
          <a href="#home" className="inline-flex min-h-11 items-center text-lg font-black tracking-tight">
            RAZIM<span className="text-[var(--accent)]">.</span>
          </a>
          <div className="hidden items-center gap-5 lg:flex">
            {navLinks.map((link) => <a key={link.href} href={link.href} className="inline-flex min-h-11 items-center text-sm font-medium text-[var(--muted)] hover:text-[var(--foreground)]">{link.name}</a>)}
          </div>
          <div className="flex items-center gap-2">
            <a href={RESUME_URL} target="_blank" rel="noopener noreferrer" className="hidden min-h-11 items-center gap-1.5 px-2 text-sm text-[var(--muted)] hover:text-[var(--foreground)] lg:inline-flex">
              <FileText size={16} aria-hidden="true" /> Résumé
            </a>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" aria-label="Contact Razim on WhatsApp" className="grid h-11 w-11 place-items-center rounded-xl text-[var(--accent)] hover:bg-[var(--surface-hover)]">
              <MessageCircle size={20} aria-hidden="true" />
            </a>
            <ThemeToggle />
            <button ref={triggerRef} type="button" onClick={() => setIsOpen((prev) => !prev)} aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"} aria-expanded={isOpen} aria-controls="mobile-navigation" className="grid h-11 w-11 place-items-center rounded-lg text-[var(--foreground)] hover:bg-[var(--surface-hover)] lg:hidden">
              {isOpen ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
            </button>
          </div>
        </nav>
      </div>
      {isOpen && (
        <div ref={menuRef} id="mobile-navigation" className="mobile-navigation max-h-[calc(100dvh-6rem)] overflow-y-auto overscroll-contain border-b border-[var(--border)] bg-[var(--surface)] px-5 pb-5 lg:hidden">
          <nav aria-label="Mobile navigation" className="flex flex-col gap-1">
            {navLinks.map((link) => <a key={link.href} href={link.href} onClick={() => setIsOpen(false)} className="flex min-h-12 items-center rounded-lg px-3 text-base font-semibold hover:bg-[var(--surface-hover)]">{link.name}</a>)}
            <a href="#studio" onClick={() => setIsOpen(false)} className="action-primary mt-3">Plan a project</a>
            <a href={RESUME_URL} target="_blank" rel="noopener noreferrer" onClick={() => setIsOpen(false)} className="action-secondary mt-2">Download résumé PDF</a>
          </nav>
        </div>
      )}
    </header>
  );
}
