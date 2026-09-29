"use client";

import React from "react";
import { ArrowDown, ArrowUpRight, Cpu, Layers, Sparkles, Terminal, ShieldCheck, Zap } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export function HeroSection() {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Subtle Moon Crescent Aura Motif */}
      <div 
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] h-[340px] sm:w-[460px] sm:h-[460px] rounded-full pointer-events-none opacity-20 -z-10"
        style={{
          boxShadow: "inset -18px 0px 40px rgba(255, 237, 194, 0.4), 0 0 80px rgba(161, 138, 255, 0.08)",
          border: "1px solid rgba(255, 237, 194, 0.08)"
        }}
        aria-hidden="true"
      />

      <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
        {/* Academic & Builder Tag */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-night-900/90 border border-night-700/80 text-xs font-mono text-starlight-secondary mb-6 backdrop-blur-md shadow-sm hover:border-moon-amber/40 transition-colors">
          <span className="w-1.5 h-1.5 rounded-full bg-moon-amber animate-pulse"></span>
          <span>{PORTFOLIO_DATA.personal.education.institution}</span>
          <span className="text-night-600">•</span>
          <span className="text-moon-light font-medium">CSE 2nd Year</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-starlight-primary leading-[1.15] max-w-3xl">
          Architecting{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-moon-light via-moon-amber to-starlight-primary">
            Autonomous AI Agents
          </span>{" "}
          &amp; Resilient Web Systems.
        </h1>

        {/* Core Subtitle & Storytelling */}
        <p className="mt-6 text-base sm:text-lg md:text-xl text-starlight-secondary max-w-2xl font-normal leading-relaxed">
          I’m <span className="text-starlight-primary font-semibold">{PORTFOLIO_DATA.personal.name}</span> — an AI Engineering-focused student, full-stack developer, and freelance builder. Turning complex problem domains into verifiable software, from autonomous agent runtimes to high-velocity hackathon MVPs.
        </p>

        {/* CTAs */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          <a
            href="#projects"
            className="px-6 py-3 rounded-lg bg-moon-light text-night-950 font-medium text-sm tracking-wide hover:bg-moon-glow transition-all duration-200 shadow-[0_0_20px_rgba(255,237,194,0.15)] flex items-center gap-2 active:scale-95"
          >
            <span>Explore Engineering Work</span>
            <ArrowDown className="w-4 h-4" />
          </a>

          <a
            href="#console"
            className="px-6 py-3 rounded-lg bg-night-850 hover:bg-night-800 text-starlight-primary border border-night-700 hover:border-night-600 font-medium text-sm tracking-wide transition-all duration-200 flex items-center gap-2 active:scale-95 group"
          >
            <Terminal className="w-4 h-4 text-moon-amber group-hover:rotate-6 transition-transform" />
            <span>Launch Agent Console</span>
          </a>

          <a
            href="#contact"
            className="px-4 py-3 text-sm text-starlight-secondary hover:text-moon-light font-medium transition-colors flex items-center gap-1.5"
          >
            <span>Hire / Collaborate</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Key Signals / Spec Badges */}
        <div className="mt-14 w-full grid grid-cols-2 md:grid-cols-4 gap-3 text-left">
          <div className="p-3.5 rounded-lg bg-night-900/60 border border-night-750/70 backdrop-blur-sm">
            <div className="flex items-center gap-2 text-moon-amber mb-1">
              <Cpu className="w-4 h-4" />
              <span className="text-[11px] font-mono uppercase tracking-wider text-starlight-muted">Core Focus</span>
            </div>
            <p className="text-xs font-semibold text-starlight-primary">AI Agents &amp; LLM Runtimes</p>
          </div>

          <div className="p-3.5 rounded-lg bg-night-900/60 border border-night-750/70 backdrop-blur-sm">
            <div className="flex items-center gap-2 text-violet-glow mb-1">
              <Layers className="w-4 h-4" />
              <span className="text-[11px] font-mono uppercase tracking-wider text-starlight-muted">Full-Stack</span>
            </div>
            <p className="text-xs font-semibold text-starlight-primary">Next.js 15, TypeScript, Python</p>
          </div>

          <div className="p-3.5 rounded-lg bg-night-900/60 border border-night-750/70 backdrop-blur-sm">
            <div className="flex items-center gap-2 text-cyanic-accent mb-1">
              <Zap className="w-4 h-4" />
              <span className="text-[11px] font-mono uppercase tracking-wider text-starlight-muted">Velocity</span>
            </div>
            <p className="text-xs font-semibold text-starlight-primary">Hackathons &amp; Rapid Sprints</p>
          </div>

          <div className="p-3.5 rounded-lg bg-night-900/60 border border-night-750/70 backdrop-blur-sm">
            <div className="flex items-center gap-2 text-emerald-400 mb-1">
              <ShieldCheck className="w-4 h-4" />
              <span className="text-[11px] font-mono uppercase tracking-wider text-starlight-muted">Engagement</span>
            </div>
            <p className="text-xs font-semibold text-starlight-primary">Freelance &amp; Engineering</p>
          </div>
        </div>
      </div>
    </section>
  );
}
