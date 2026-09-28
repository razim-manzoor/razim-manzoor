import NavBar from "@/components/NavBar";
import HeroSection from "@/components/HeroSection";
import ServicesHub from "@/components/ServicesHub";
import ProjectShowcase from "@/components/ProjectShowcase";
import ServiceScopeBuilder from "@/components/ServiceScopeBuilder";
import RoiCalculator from "@/components/RoiCalculator";
import RecruiterSnapshot from "@/components/RecruiterSnapshot";
import SkillsGrid from "@/components/SkillsGrid";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <a href="#main-content" className="sr-only fixed left-4 top-4 z-[60] bg-foreground px-4 py-3 text-sm font-bold text-background focus:not-sr-only">
        Skip to content
      </a>
      <NavBar />
      <div id="main-content" tabIndex={-1}>
        <HeroSection />
        <ServicesHub />
        <ProjectShowcase />
        <ServiceScopeBuilder />
        <RoiCalculator />
        <RecruiterSnapshot />
        <SkillsGrid />
        <ExperienceTimeline />
      </div>
      <Footer />
    </main>
  );
}
