"use client";

import React from "react";
import { GraduationCap, MapPin, Code2, Bot, Trophy, Sparkles, BookOpen, Compass } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export function AboutSection() {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 relative border-t border-night-800/80">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-start max-w-2xl mb-16">
          <div className="flex items-center gap-2 text-moon-amber text-xs font-mono tracking-wider uppercase mb-2">
            <Compass className="w-3.5 h-3.5" />
            <span>Profile &amp; Engineering Philosophy</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-starlight-primary">
            The Engineer Behind the Code
          </h2>
          <p className="mt-3 text-sm sm:text-base text-starlight-secondary">
            Grounding theoretical computer science principles in functional, user-facing AI architectures and full-stack software.
          </p>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Personal Narrative & Education Card */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-6 sm:p-8 rounded-xl bg-night-900/70 border border-night-700/80 backdrop-blur-sm">
              <h3 className="text-lg font-semibold text-starlight-primary mb-4 flex items-center gap-2">
                <span>Problem Solving Driven by Nighttime Focus</span>
              </h3>
              
              <div className="space-y-4 text-sm sm:text-base text-starlight-secondary leading-relaxed">
                {PORTFOLIO_DATA.personal.bio.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>

              {/* Verified Education Capsule */}
              <div className="mt-8 pt-6 border-t border-night-800 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-md bg-night-800 border border-night-700 text-moon-amber">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-mono uppercase text-starlight-muted">Education</h4>
                    <p className="text-sm font-semibold text-starlight-primary">
                      {PORTFOLIO_DATA.personal.education.institution}
                    </p>
                    <p className="text-xs text-starlight-secondary mt-0.5">
                      {PORTFOLIO_DATA.personal.education.degree} ({PORTFOLIO_DATA.personal.education.year})
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-md bg-night-800 border border-night-700 text-violet-glow">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-mono uppercase text-starlight-muted">Location &amp; Work</h4>
                    <p className="text-sm font-semibold text-starlight-primary">
                      {PORTFOLIO_DATA.personal.location}
                    </p>
                    <p className="text-xs text-starlight-secondary mt-0.5">
                      Freelance &amp; Remote Available
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Domain Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="p-4 rounded-lg bg-night-900/50 border border-night-800 flex items-center gap-3">
                <Bot className="w-5 h-5 text-moon-amber" />
                <div>
                  <p className="text-xs font-semibold text-starlight-primary">AI Engineering</p>
                  <p className="text-[11px] text-starlight-muted">Autonomous Agents &amp; RAG</p>
                </div>
              </div>

              <div className="p-4 rounded-lg bg-night-900/50 border border-night-800 flex items-center gap-3">
                <Code2 className="w-5 h-5 text-cyanic-accent" />
                <div>
                  <p className="text-xs font-semibold text-starlight-primary">Full-Stack</p>
                  <p className="text-[11px] text-starlight-muted">Next.js, TS, Node, DBs</p>
                </div>
              </div>

              <div className="p-4 rounded-lg bg-night-900/50 border border-night-800 flex items-center gap-3">
                <Trophy className="w-5 h-5 text-violet-glow" />
                <div>
                  <p className="text-xs font-semibold text-starlight-primary">Hackathons</p>
                  <p className="text-[11px] text-starlight-muted">24-48h Rapid Execution</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Engineering Principles */}
          <div className="lg:col-span-5 space-y-4">
            <div className="text-xs font-mono uppercase tracking-wider text-starlight-muted mb-2 px-1">
              Core Principles
            </div>

            {PORTFOLIO_DATA.engineeringPrinciples.map((principle) => (
              <div
                key={principle.number}
                className="group p-5 rounded-lg bg-night-900/40 border border-night-800 hover:border-night-700 hover:bg-night-850/60 transition-all duration-200"
              >
                <div className="flex items-baseline justify-between mb-1.5">
                  <h4 className="text-sm font-semibold text-starlight-primary group-hover:text-moon-light transition-colors">
                    {principle.title}
                  </h4>
                  <span className="font-mono text-xs text-moon-amber/70">{principle.number}</span>
                </div>
                <p className="text-xs sm:text-sm text-starlight-secondary leading-relaxed">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
