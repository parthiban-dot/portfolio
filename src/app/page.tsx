"use client";

import React from "react";
import { Navbar } from "@/components/navigation/Navbar";
import { HeroSection } from "@/components/hero/HeroSection";
import { AboutSection } from "@/components/about/AboutSection";
import { TechStackOrbit } from "@/components/skills/TechStackOrbit";
import { ProjectsSection } from "@/components/projects/ProjectsSection";
import { ContactOrbit } from "@/components/contact/ContactOrbit";
import { Footer } from "@/components/footer/Footer";

export default function Home() {
  return (
    <div className="w-full bg-[#03040A] text-[#E6E6F1] overflow-x-hidden min-h-screen">
      {/* 1. Header / Navbar with Moon Logo */}
      <Navbar />

      {/* 2. Main Page Content */}
      <main className="w-full">
        {/* Hero Section */}
        <HeroSection />

        {/* About Me Section */}
        <AboutSection />

        {/* My Tech Stack in Orbit */}
        <TechStackOrbit />

        {/* Crafted in the Moonlight Projects */}
        <ProjectsSection />

        {/* Reach Me from Earth Contact Orbit */}
        <ContactOrbit />
      </main>

      {/* 3. Footer */}
      <Footer />
    </div>
  );
}
