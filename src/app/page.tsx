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
          
          {/* Gradient Overlay for Text Readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#03040A]/70 via-[#03040A]/30 to-[#03040A]/80" />
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
