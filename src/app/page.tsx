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
    <div className={`w-full text-[#E6E6F1] overflow-x-hidden min-h-screen relative transition-colors duration-1000 ${isDayMode ? 'bg-[#0a1128]' : 'bg-[#03040A]'}`}>
      
      {/* Background Layer */}
      {isDayMode ? (
        <div className="fixed inset-0 z-0 pointer-events-none transition-opacity duration-1000 opacity-100">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-80 animate-clouds-drift" 
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1499346030926-9a72daac6c63?q=80&w=3000&auto=format&fit=crop')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a1128]/80 via-[#0a1128]/50 to-[#0a1128]/90" />
        </div>
      ) : (
        <MoonlightCanvas />
      )}

      {/* 1. Header / Navbar with Toggle */}
      <Navbar isDayMode={isDayMode} toggleDayMode={toggleDayMode} />

      {/* 2. Main Page Content */}
      <main className="w-full relative z-10">
        <HeroSection />
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
