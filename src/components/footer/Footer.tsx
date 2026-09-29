"use client";

import React from "react";
import { ArrowUp, Heart, Terminal, Sparkles } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-night-800 bg-night-950 py-12 px-4 sm:px-6 lg:px-8 relative z-10 text-xs text-starlight-muted font-mono">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand & Academic Note */}
        <div className="flex flex-col items-center md:items-start gap-1">
          <div className="flex items-center gap-2">
            <span className="font-bold text-starlight-primary">
              {PORTFOLIO_DATA.personal.name}
            </span>
            <span>•</span>
            <span className="text-moon-light">CSE Undergrad (2nd Year)</span>
          </div>
          <p className="text-starlight-dim text-center md:text-left">
            Sri Shakthi Institute of Engineering and Technology
          </p>
        </div>

        {/* Philosophy / Tech stack note */}
        <div className="flex items-center gap-2 text-center">
          <span>Engineered with Next.js 15, TypeScript &amp; Tailwind CSS</span>
        </div>

        {/* Back to Top */}
        <button
          onClick={scrollToTop}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-night-900 border border-night-800 hover:border-night-700 hover:text-starlight-primary transition-colors focus:outline-none"
          aria-label="Scroll back to top"
        >
          <span>Return to orbit</span>
          <ArrowUp className="w-3.5 h-3.5" />
        </button>
      </div>

      <div className="max-w-7xl mx-auto mt-6 pt-6 border-t border-night-900 flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] text-starlight-dim">
        <span>© {new Date().getFullYear()} Parthiban V. All rights reserved.</span>
        <span>Designed with a nocturnal focus.</span>
      </div>
    </footer>
  );
}
