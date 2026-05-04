
import NavBar from "@/components/NavBar";
import HeroSection from "@/components/HeroSection";
import RecruiterSnapshot from "@/components/RecruiterSnapshot";
import RoiCalculator from "@/components/RoiCalculator";
import SkillsGrid from "@/components/SkillsGrid";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import ProjectShowcase from "@/components/ProjectShowcase";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <NavBar />
      <HeroSection />
      <RecruiterSnapshot />
      <ProjectShowcase />
      <RoiCalculator />
      <SkillsGrid />
      <ExperienceTimeline />
      <Footer />
    </main>
  );
}
