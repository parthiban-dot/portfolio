"use client";

import React from "react";
import { ArrowUpRight, Info, Bot, TerminalSquare, Database } from "lucide-react";
import { Project } from "@/data/portfolioData";
import { GithubIcon } from "@/components/icons/SocialIcons";

interface ProjectCardProps {
  project: Project;
  onSelect: (project: Project) => void;
}

export function ProjectCard({ project, onSelect }: ProjectCardProps) {
  // Category-specific iconography
  const getIcon = () => {
    switch (project.category) {
      case "AI Engineering":
        return <Bot className="w-4 h-4 text-moon-amber" />;
      case "Full-Stack":
        return <Database className="w-4 h-4 text-cyanic-accent" />;
      default:
        return <TerminalSquare className="w-4 h-4 text-violet-glow" />;
    }
  };

  return (
    <article className="group relative rounded-xl bg-night-900/60 border border-night-700/70 hover:border-night-600 transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-moon-card hover:shadow-violet-card hover:-translate-y-1">
      {/* Top Banner & Status */}
      <div className="p-6 pb-4">
        <div className="flex items-center justify-between gap-2 mb-3">
          <div className="flex items-center gap-2">
            <span className="p-1.5 rounded-md bg-night-800 border border-night-750">
              {getIcon()}
            </span>
            <span className="text-xs font-mono tracking-tight text-starlight-secondary">
              {project.category}
            </span>
          </div>

          <span
            className={`text-[11px] font-mono px-2 py-0.5 rounded-full border ${
              project.status === "Completed"
                ? "bg-emerald-950/30 text-emerald-300 border-emerald-500/20"
                : project.status === "Active Development"
                ? "bg-amber-950/30 text-moon-amber border-moon-amber/20"
                : "bg-night-800 text-starlight-muted border-night-700"
            }`}
          >
            {project.status}
          </span>
        </div>

        {/* Project Title */}
        <h3 className="text-xl font-bold tracking-tight text-starlight-primary group-hover:text-moon-light transition-colors">
          {project.title}
        </h3>

        {/* Tagline */}
        <p className="mt-1 text-xs sm:text-sm font-medium text-moon-light/90">
          {project.tagline}
        </p>

        {/* Description */}
        <p className="mt-3 text-xs sm:text-sm text-starlight-secondary leading-relaxed line-clamp-3">
          {project.description}
        </p>

        {/* Realistic Engineering Features */}
        <div className="mt-4 pt-4 border-t border-night-800 space-y-1.5">
          {project.highlights.slice(0, 3).map((item, idx) => (
            <div key={idx} className="flex items-start gap-2 text-xs text-starlight-secondary">
              <span className="text-moon-amber font-mono text-[11px]">›</span>
              <span className="truncate">{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Area: Stack chips & Interactive triggers */}
      <div className="p-6 pt-0 mt-2">
        {/* Tech Badges */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="text-[11px] font-mono px-2 py-0.5 rounded bg-night-850 border border-night-750 text-starlight-muted"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center justify-between pt-3 border-t border-night-800/80">
          <button
            onClick={() => onSelect(project)}
            className="inline-flex items-center gap-1.5 text-xs font-mono text-moon-light hover:text-moon-glow font-medium focus:outline-none"
          >
            <Info className="w-3.5 h-3.5" />
            <span>Architecture &amp; Specs</span>
          </button>

          <div className="flex items-center gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="text-starlight-secondary hover:text-starlight-primary p-1.5 rounded hover:bg-night-800 transition-colors"
                aria-label={`View ${project.title} on GitHub`}
              >
                <GithubIcon className="w-4 h-4" />
              </a>
            )}
            {project.liveUrl && (
              <button
                onClick={() => onSelect(project)}
                className="inline-flex items-center gap-1 text-xs text-starlight-secondary hover:text-starlight-primary p-1.5 rounded hover:bg-night-800 transition-colors"
                aria-label={`Deep dive into ${project.title}`}
              >
                <ArrowUpRight className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
