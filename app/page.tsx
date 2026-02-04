
import NavBar from "@/components/NavBar";
import HeroSection from "@/components/HeroSection";
import RoiCalculator from "@/components/RoiCalculator"; // [NEW]
import SkillsGrid from "@/components/SkillsGrid";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import ProjectShowcase from "@/components/ProjectShowcase";
import Footer from "@/components/Footer";
import { USER_DATA } from "@/lib/data";
import { Mail, Linkedin, Phone } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <NavBar />
      <HeroSection />
      <RoiCalculator /> {/* [NEW] Placement: High Impact, immediately after Hero */}
      <SkillsGrid />
      <ExperienceTimeline />
      <ProjectShowcase />
      <Footer />
    </main>
  );
}
