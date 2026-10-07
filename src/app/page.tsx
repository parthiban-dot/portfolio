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
          {/* Base Twilight Gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#2b1836] via-[#101223] to-[#03040A]" />
          
          {/* Sun / Dawn Glow */}
          <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[80vw] h-[80vw] max-w-[1000px] max-h-[1000px] rounded-full blur-[120px] opacity-60 bg-[radial-gradient(circle,rgba(255,140,100,0.4)_0%,rgba(255,80,120,0.1)_40%,transparent_70%)]" />
          
          {/* Drifting Clouds Texture */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40 animate-clouds-drift mix-blend-screen" 
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1534081333815-b56cfcd8450c?q=80&w=3000&auto=format&fit=crop')" }}
          />
          
          {/* Bottom Dark Vignette so text is always readable */}
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#03040A] to-transparent opacity-90" />
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
