"use client";

import React from "react";
import Image from "next/image";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { ArrowUp } from "lucide-react";

interface FooterProps {
  isDayMode?: boolean;
}

export function Footer({ isDayMode }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    { label: "GitHub", href: PORTFOLIO_DATA.personal.socialLinks.github },
    { label: "LinkedIn", href: PORTFOLIO_DATA.personal.socialLinks.linkedin },
    { label: "Instagram", href: PORTFOLIO_DATA.personal.socialLinks.instagram },
  ];

  return (
    <footer className="relative border-t border-[#3F4454]/40 py-10 z-10">
      <div className="max-w-[1300px] mx-auto px-5 sm:px-8 md:px-12 xl:px-24">
        
        {/* Top Row: Brand & Links */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          
          {/* Left: Brand */}
          <div className="flex items-center gap-4">
            <div className="relative w-[52px] h-[52px] flex items-center justify-center">
              {isDayMode ? (
                <div className="absolute inset-[0%] pointer-events-none mix-blend-screen flex items-center justify-center">
                  <Image
                    src="/images/sun.jpg"
                    alt="Sun"
                    fill
                    className="object-cover"
                    style={{
                      WebkitMaskImage: "radial-gradient(circle at center, black 46%, transparent 49%)",
                      maskImage: "radial-gradient(circle at center, black 46%, transparent 49%)",
                      transform: "scale(1.5)"
                    }}
                  />
                </div>
              ) : (
                <Image
                  src="/images/moon1.png"
                  alt="Moon"
                  fill
                  className="object-contain"
                />
              )}
            </div>
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
              <h2 className="text-[#E6E6F1] text-xl md:text-2xl font-bold tracking-wide">
                PARTHIBAN V
              </h2>
              <p className="text-[#81859C] text-xs font-semibold tracking-wider uppercase mt-1">
                AI Engineering • Full-Stack
              </p>
            </div>
          </div>

          {/* Right: Navigation & Socials */}
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10">
            {/* Nav */}
            <nav className="flex flex-wrap justify-center gap-6 text-sm font-medium">
              {navLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-[#B0B3C5] hover:text-[#FFEDC2] transition-colors duration-200"
                >
                  {item.label}
                </a>
              ))}
            </nav>
            
            {/* Divider (Hidden on mobile) */}
            <div className="hidden md:block w-px h-5 bg-[#3F4454]/60"></div>

            {/* Socials */}
            <div className="flex justify-center gap-6 text-sm font-medium">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#B0B3C5] hover:text-[#FFEDC2] transition-colors duration-200"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-10 border-t border-[#3F4454]/30" />

        {/* Bottom Row */}
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[13px] text-[#4B5066] font-medium tracking-wide">
          <p>© {currentYear} Parthiban V. All rights reserved.</p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 hover:text-[#B0B3C5] transition-colors duration-200 cursor-pointer"
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
