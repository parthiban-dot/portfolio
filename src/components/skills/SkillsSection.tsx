"use client";

import React, { useState } from "react";
import { Cpu, Terminal, Layers, ShieldCheck, Check, Sparkles } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export function SkillsSection() {
  const [activeTab, setActiveTab] = useState(0);

  const icons = [
    <Cpu key="ai" className="w-4 h-4 text-moon-amber" />,
    <Layers key="fullstack" className="w-4 h-4 text-cyanic-accent" />,
    <ShieldCheck key="practices" className="w-4 h-4 text-violet-glow" />,
  ];

  const currentCategory = PORTFOLIO_DATA.skillCategories[activeTab];

  return (
    <section id="arsenal" className="py-24 px-4 sm:px-6 lg:px-8 relative border-t border-night-800/80">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col items-start max-w-2xl mb-12">
          <div className="flex items-center gap-2 text-moon-amber text-xs font-mono tracking-wider uppercase mb-2">
            <Terminal className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-starlight-primary">
            The Engineering Arsenal
          </h2>
          <p className="mt-2 text-sm sm:text-base text-starlight-secondary">
            Disciplined competencies spanning autonomous intelligence runtimes, full-stack systems, and rapid hackathon engineering.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {PORTFOLIO_DATA.skillCategories.map((cat, idx) => (
            <button
              key={cat.title}
              onClick={() => setActiveTab(idx)}
              className={`flex items-center gap-2.5 px-4 py-2.5 rounded-lg text-xs sm:text-sm font-medium transition-all ${
                activeTab === idx
                  ? "bg-night-850 text-starlight-primary border border-night-600 shadow-[0_0_15px_rgba(255,237,194,0.06)]"
                  : "bg-night-900/50 text-starlight-secondary border border-night-800 hover:border-night-700 hover:text-starlight-primary"
              }`}
            >
              {icons[idx]}
              <span>{cat.title}</span>
            </button>
          ))}
        </div>

        {/* Selected Category Skill Matrix */}
        <div className="p-6 sm:p-8 rounded-xl bg-night-900/50 border border-night-750 backdrop-blur-sm">
          <div className="mb-6 pb-4 border-b border-night-800">
            <h3 className="text-lg font-bold text-starlight-primary flex items-center gap-2">
              <span>{currentCategory.title}</span>
            </h3>
            <p className="text-xs sm:text-sm text-starlight-secondary mt-1">
              {currentCategory.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {currentCategory.skills.map((skill) => (
              <div
                key={skill.name}
                className="p-4 rounded-lg bg-night-850/80 border border-night-750/90 hover:border-night-600 transition-colors"
              >
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-sm font-semibold text-starlight-primary">
                    {skill.name}
                  </h4>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-night-800 border border-night-700 text-moon-amber">
                    {skill.level}
                  </span>
                </div>
                <p className="text-xs text-starlight-secondary leading-relaxed">
                  {skill.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Tech Tag Cloud */}
        <div className="mt-8 flex flex-wrap items-center gap-2 text-xs font-mono text-starlight-muted">
          <span className="text-starlight-secondary mr-2">Core Tooling:</span>
          {["Next.js 15", "TypeScript", "Python", "Tailwind CSS", "React", "LangGraph", "FastAPI", "PostgreSQL", "Prisma", "Docker", "Git", "ChromaDB"].map((tool) => (
            <span
              key={tool}
              className="px-2.5 py-1 rounded bg-night-900 border border-night-800 text-starlight-secondary"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
