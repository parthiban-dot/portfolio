"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/navigation/Navbar";
import { HeroSection } from "@/components/hero/HeroSection";
import { AboutSection } from "@/components/about/AboutSection";
import { TechStackOrbit } from "@/components/skills/TechStackOrbit";
import { ProjectsSection } from "@/components/projects/ProjectsSection";
import { ContactOrbit } from "@/components/contact/ContactOrbit";
import { Footer } from "@/components/footer/Footer";
import { MoonlightCanvas } from "@/components/ambient/MoonlightCanvas";

export default function Home() {
  const [isDayMode, setIsDayMode] = useState(false);

  const toggleDayMode = () => setIsDayMode(!isDayMode);

  return (
    <div className={`w-full text-[#E6E6F1] overflow-x-hidden min-h-screen relative transition-colors duration-1000 bg-[#03040A]`}>
      
      {/* Background Layer */}
      {isDayMode ? (
        <div className="fixed inset-0 z-0 pointer-events-none transition-opacity duration-1000 opacity-100 bg-gradient-to-b from-[#87CEEB] via-[#B0E0E6] to-[#E0F6FF]">
          {/* Light animated CSS clouds could go here, but a clean bright gradient works best for text contrast */}
          <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.8),transparent_70%)]" />
        </div>
      ) : (
        <MoonlightCanvas />
      )}

      {/* 1. Header / Navbar with Toggle */}
      <Navbar isDayMode={isDayMode} toggleDayMode={toggleDayMode} />

      {/* 2. Main Page Content */}
      <main className="w-full relative z-10">
        <HeroSection isDayMode={isDayMode} />
        <AboutSection />
        <TechStackOrbit isDayMode={isDayMode} />
        <ProjectsSection isDayMode={isDayMode} />
        <ContactOrbit />
      </main>

      {/* 3. Footer */}
      <Footer isDayMode={isDayMode} />
    </div>
  );
}
