"use client";

import React from "react";
import { Atmosphere } from "@/components/ui/Atmosphere";
import { Navbar } from "@/components/navigation/Navbar";
import { HeroSection } from "@/components/hero/HeroSection";
import { AboutSection } from "@/components/about/AboutSection";
import { SkillsSection } from "@/components/skills/SkillsSection";
import { ProjectsSection } from "@/components/projects/ProjectsSection";
import { JourneySection } from "@/components/journey/JourneySection";
import { AgentConsole } from "@/components/interactive/AgentConsole";
import { ContactSection } from "@/components/contact/ContactSection";
import { Footer } from "@/components/footer/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-night-950 text-starlight-primary selection:bg-moon-accent/20 selection:text-white overflow-x-hidden">
      {/* Background Atmosphere: Subtle Starlight & Zenith Moonlight Mist */}
      <Atmosphere showGrid={true} />

      {/* Reusable Minimal Premium Navbar */}
      <Navbar />

      {/* Main Landing Experience */}
      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <JourneySection />
        <AgentConsole />
        <ContactSection />
      </main>

      {/* Reusable Footer */}
      <Footer />
    </div>
  );
}
