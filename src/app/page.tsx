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
        <div className="fixed inset-0 z-0 pointer-events-none transition-opacity duration-1000 opacity-100">
          {/* Gorgeous Daytime Blue Sky with Clouds */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-100 animate-clouds-drift" 
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1513002749550-c59d220b8e42?q=80&w=3000&auto=format&fit=crop')" }}
          />
          
          {/* Light Overlay to ensure the dark text remains perfectly readable */}
          <div className="absolute inset-0 bg-white/20 backdrop-blur-[2px]" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#87CEEB]/40 via-transparent to-[#E0F6FF]/60" />
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
