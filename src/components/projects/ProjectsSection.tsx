"use client";

import React, { useState } from "react";
import { Code, Sparkles, Terminal, SlidersHorizontal } from "lucide-react";
import { PORTFOLIO_DATA, Project } from "@/data/portfolioData";
import { ProjectCard } from "./ProjectCard";
import { ProjectDetailModal } from "./ProjectDetailModal";

export function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const categories = ["All", "AI Engineering", "Full-Stack", "Tools"];

  const filteredProjects =
    selectedCategory === "All"
      ? PORTFOLIO_DATA.projects
      : PORTFOLIO_DATA.projects.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 relative border-t border-night-800/80">
      <div className="max-w-7xl mx-auto">
        {/* Section Header with Category Filters */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 text-moon-amber text-xs font-mono tracking-wider uppercase mb-2">
              <Code className="w-3.5 h-3.5" />
              <span>Selected Works &amp; Engineering Systems</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-starlight-primary">
              Crafted in the Quiet Hours
            </h2>
            <p className="mt-2 text-sm sm:text-base text-starlight-secondary max-w-xl">
              Production architectures, autonomous agents, and hackathon prototypes built with rigorous code standards and real-world utility.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 bg-night-900/60 p-1.5 rounded-lg border border-night-700/80 backdrop-blur-sm self-start md:self-auto">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-3 py-1.5 text-xs font-mono rounded-md transition-all ${
                  selectedCategory === category
                    ? "bg-night-800 text-moon-light shadow-sm border border-night-600"
                    : "text-starlight-secondary hover:text-starlight-primary hover:bg-night-850/60"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onSelect={(p) => setActiveProject(p)}
            />
          ))}
        </div>

        {/* Architecture Deep-Dive Modal */}
        <ProjectDetailModal
          project={activeProject}
          onClose={() => setActiveProject(null)}
        />
      </div>
    </section>
  );
}
