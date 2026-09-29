"use client";

import React, { useState } from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import {
  Terminal,
  Cpu,
  Layers,
  Sparkles,
  ShieldCheck,
  Code2,
  Workflow,
  Radio,
  ArrowRight,
} from "lucide-react";
import { ARSENAL_TECHNOLOGIES, TechnologyItem } from "@/data/arsenalData";

export function SkillsSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activeTech, setActiveTech] = useState<TechnologyItem>(ARSENAL_TECHNOLOGIES[0]);

  const categories = [
    "All",
    "Languages",
    "Frontend",
    "Backend",
    "Database",
    "Tools",
    "AI / Emerging",
  ];

  const filteredTechnologies =
    selectedCategory === "All"
      ? ARSENAL_TECHNOLOGIES
      : ARSENAL_TECHNOLOGIES.filter((t) => t.category === selectedCategory);

  return (
    <section id="skills" className="py-24 sm:py-32 relative border-t border-surface-border">
      <Container size="wide">
        {/* Header */}
        <Reveal type="fade-up">
          <SectionHeading
            tag="Technical Stack"
            tagIcon={<Terminal className="w-3.5 h-3.5" />}
            title="The Technology Arsenal"
            description="Technologies and tools I work with across computer science fundamentals, full-stack web development, and AI engineering."
          />
        </Reveal>

        {/* Unified Command-Center Container */}
        <Reveal type="scale-in" delay={0.1}>
          <div className="rounded-2xl bg-night-900/70 border border-surface-border backdrop-blur-md shadow-surface-card overflow-hidden">
            {/* Top Command Bar: Filter Tabs & Live Status */}
            <div className="px-5 py-4 bg-night-850/80 border-b border-surface-border flex flex-col md:flex-row md:items-center justify-between gap-4">
              {/* Category Pills (Touch-scrollable on mobile, wrapped on desktop) */}
              <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 scrollbar-none max-w-full -mx-2 px-2 sm:mx-0 sm:px-0 sm:flex-wrap">
                {categories.map((cat) => {
                  const count =
                    cat === "All"
                      ? ARSENAL_TECHNOLOGIES.length
                      : ARSENAL_TECHNOLOGIES.filter((t) => t.category === cat).length;
                  const isActive = selectedCategory === cat;

                  return (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all duration-200 flex items-center gap-1.5 focus:outline-none shrink-0 min-h-[36px] ${
                        isActive
                          ? "bg-night-800 text-moon-light border border-moon-border shadow-moon-soft font-semibold"
                          : "text-starlight-secondary hover:text-starlight-primary hover:bg-night-800/50 border border-transparent"
                      }`}
                    >
                      <span>{cat}</span>
                      <span className={`text-[10px] ${isActive ? "text-moon-accent" : "text-starlight-dim"}`}>
                        ({count})
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Status Hint */}
              <div className="flex items-center gap-2 text-xs font-mono text-starlight-muted self-end md:self-auto shrink-0">
                <span className="w-1.5 h-1.5 rounded-full bg-moon-accent" />
                <span className="hidden sm:inline">SELECT ANY ITEM FOR DETAILS</span>
              </div>
            </div>

            {/* Main Content: Constellation Matrix + Interactive HUD Inspector */}
            <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-surface-border">
              {/* Left / Central: Interconnected Technology Nodes */}
              <div className="lg:col-span-7 p-6 sm:p-8">
                <div className="mb-4 flex items-center justify-between">
                  <span className="text-xs font-mono text-starlight-muted uppercase tracking-wider">
                    Integrated Constellation ({filteredTechnologies.length} Technologies)
                  </span>
                  <span className="text-[11px] font-mono text-starlight-dim hidden sm:inline">
                    Hover / Tap to update inspector
                  </span>
                </div>

                {/* Technology Node Chips Cluster */}
                <div className="flex flex-wrap gap-2.5">
                  {filteredTechnologies.map((tech) => {
                    const isSelected = activeTech.id === tech.id;

                    return (
                      <button
                        key={tech.id}
                        onMouseEnter={() => setActiveTech(tech)}
                        onClick={() => setActiveTech(tech)}
                        className={`group relative text-left px-3.5 py-2.5 rounded-xl border transition-all duration-200 focus:outline-none ${
                          isSelected
                            ? "bg-night-800 border-moon-border shadow-moon-soft text-moon-light ring-1 ring-moon-border"
                            : "bg-night-950/50 border-surface-border hover:border-surface-border-hover hover:bg-night-850/60 text-starlight-secondary hover:text-starlight-primary"
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <span
                            className={`w-1.5 h-1.5 rounded-full transition-colors ${
                              isSelected ? "bg-moon-accent" : "bg-starlight-dim group-hover:bg-starlight-secondary"
                            }`}
                          />
                          <span className="text-xs sm:text-sm font-semibold tracking-tight font-mono">
                            {tech.name}
                          </span>
                        </div>
                        <span className="text-[10px] font-mono text-starlight-muted block mt-0.5 ml-3.5">
                          {tech.category}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Right: Technology Overview Panel */}
              <div className="lg:col-span-5 p-6 sm:p-8 bg-night-950/50 flex flex-col justify-between">
                <div>
                  {/* Panel Header */}
                  <div className="flex items-center justify-between pb-3 mb-5 border-b border-surface-border/70">
                    <span className="text-xs font-mono text-starlight-muted uppercase tracking-wider flex items-center gap-1.5">
                      <Radio className="w-3.5 h-3.5 text-moon-accent" />
                      <span>Overview</span>
                    </span>

                    <span
                      className={`text-[10px] font-mono px-2 py-0.5 rounded-full border ${
                        activeTech.status === "Core Stack"
                          ? "bg-emerald-950/20 text-emerald-300 border-emerald-500/20"
                          : activeTech.status === "Active Tool"
                          ? "bg-sky-950/20 text-moon-accent border-moon-border"
                          : "bg-night-850 text-starlight-muted border-surface-border"
                      }`}
                    >
                      {activeTech.status}
                    </span>
                  </div>

                  {/* Active Technology Title & Category */}
                  <div className="mb-4">
                    <span className="text-xs font-mono text-moon-accent uppercase tracking-wider">
                      {activeTech.category}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-starlight-primary mt-0.5">
                      {activeTech.name}
                    </h3>
                  </div>

                  {/* Description */}
                  <div className="space-y-4 text-xs sm:text-sm text-starlight-secondary leading-relaxed">
                    <div className="p-3.5 rounded-xl bg-night-900 border border-surface-border">
                      <span className="text-[11px] font-mono text-starlight-muted uppercase block mb-1">
                        What I use it for:
                      </span>
                      <p>{activeTech.description}</p>
                    </div>

                    <div className="p-3.5 rounded-xl bg-night-900 border border-surface-border">
                      <span className="text-[11px] font-mono text-starlight-muted uppercase block mb-1">
                        Where it is used:
                      </span>
                      <p>{activeTech.application}</p>
                    </div>
                  </div>
                </div>

                {/* Honest Note */}
                <div className="mt-8 pt-4 border-t border-surface-border/60 flex items-center justify-between text-[11px] font-mono text-starlight-dim">
                  <span>Applied In Real Projects</span>
                  <span>Practical Competency</span>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
