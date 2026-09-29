import { MoonlightCanvas } from "@/components/ambient/MoonlightCanvas";
import { Navbar } from "@/components/navigation/Navbar";
import { HeroSection } from "@/components/hero/HeroSection";
import { AboutSection } from "@/components/about/AboutSection";
import { ProjectsSection } from "@/components/projects/ProjectsSection";
import { SkillsSection } from "@/components/skills/SkillsSection";
import { JourneySection } from "@/components/journey/JourneySection";
import { AgentConsole } from "@/components/interactive/AgentConsole";
import { ContactSection } from "@/components/contact/ContactSection";
import { Footer } from "@/components/footer/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-night-950 text-starlight-primary selection:bg-moon-amber/20 selection:text-moon-light overflow-x-hidden">
      {/* Background Starfield & Moonlight Atmosphere Canvas */}
      <MoonlightCanvas />

      {/* Persistent Navigation Bar */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <JourneySection />
        <AgentConsole />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
