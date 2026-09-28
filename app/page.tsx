import NavBar from "@/components/NavBar";
import HeroSection from "@/components/HeroSection";
import { AudienceSectionWrapper } from "@/components/composite/AudienceSectionWrapper";
import ServicesHub from "@/components/ServicesHub";
import { InteractivePipeline } from "@/components/composite/InteractivePipeline";
import ProjectShowcase from "@/components/ProjectShowcase";
import { RoiCalculator } from "@/components/composite/RoiCalculator";
import { ServiceScopeBuilder } from "@/components/composite/ServiceScopeBuilder";
import SkillsGrid from "@/components/SkillsGrid";
import RecruiterSnapshot from "@/components/RecruiterSnapshot";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <a
        href="#main-content"
        className="sr-only fixed left-4 top-4 z-[60] bg-[var(--foreground)] px-4 py-3 text-xs font-bold uppercase tracking-wider text-[var(--background)] focus:not-sr-only focus:outline-none"
      >
        Skip to content
      </a>
      <NavBar />
      <div id="main-content" tabIndex={-1}>
        <HeroSection />
        <AudienceSectionWrapper />
        <ServicesHub />
        <InteractivePipeline />
        <ProjectShowcase />
        <RoiCalculator />
        <ServiceScopeBuilder />
        <SkillsGrid />
        <RecruiterSnapshot />
      </div>
      <Footer />
    </main>
  );
}
