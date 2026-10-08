import Image from "next/image";
import { ArrowRight, ArrowUpRight, Download, MessageCircle } from "lucide-react";
import { RESUME_URL, WHATSAPP_URL } from "@/lib/contact";
import { HeroFragments } from "@/components/HeroFragments";

export default function HeroSection() {
  return (
    <section id="home" tabIndex={-1} className="site-wrap portfolio-hero">
      <div className="hero-identity">
        <h1>Razim<br /><span>Manzoor</span></h1>
        <p className="hero-location">Dubai, UAE <span aria-hidden="true">·</span> Available for roles &amp; projects</p>
      </div>
      <div className="portrait-stage">
      <figure className="hero-portrait">
        <div className="relative aspect-[3/4] overflow-hidden rounded-xl bg-[var(--surface-hover)]">
          <Image src="/profilepic.jpeg" alt="Razim Manzoor" fill priority sizes="(min-width: 1184px) 376px, (min-width: 761px) 30vw, (min-width: 351px) 94px, 70px" className="object-cover object-center" />
        </div>
        <figcaption>Business analysis.<br />Hands-on development.</figcaption>
      </figure>
      <HeroFragments />
      </div>
      <div className="hero-copy">
        <h2>From business problem<br className="hidden sm:block" /> to working system.</h2>
        <p>I build websites, applications, AI tools, automations, and dashboards around what your business needs. My MBA in Data Science &amp; Analytics connects the technical work to the business behind it.</p>
        <div className="hero-actions">
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="action-primary"><MessageCircle size={18} aria-hidden="true" /> Let’s talk on WhatsApp</a>
          <a href="#services" className="text-action">Explore services <ArrowRight size={17} aria-hidden="true" /></a>
        </div>
        <div className="hero-secondary">
          <a href="#dossier">Hiring? View my background <ArrowUpRight size={15} aria-hidden="true" /></a>
          <a href={RESUME_URL} target="_blank" rel="noopener noreferrer"><Download size={15} aria-hidden="true" /> Résumé PDF</a>
        </div>
      </div>
    </section>
  );
}
