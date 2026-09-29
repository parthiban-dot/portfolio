import React from "react";
import { ArrowUpRight, Bot, Database, TerminalSquare, Info } from "lucide-react";
import { GithubIcon } from "@/components/icons/SocialIcons";
import { SkillBadge } from "./SkillBadge";
import { Project } from "@/data/portfolioData";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  project: Project;
  onInspect?: (project: Project) => void;
  className?: string;
}

export function ProjectCard({ project, onInspect, className }: ProjectCardProps) {
  const getCategoryIcon = () => {
    switch (project.category) {
      case "AI Engineering":
        return <Bot className="w-3.5 h-3.5 text-moon-accent" />;
      case "Full-Stack":
        return <Database className="w-3.5 h-3.5 text-moon-light" />;
      default:
        return <TerminalSquare className="w-3.5 h-3.5 text-starlight-secondary" />;
    }
  };

  return (
    <article
      className={cn(
        "group relative rounded-xl bg-night-900/60 border border-surface-border hover:border-surface-border-hover transition-all duration-400 ease-out-expo flex flex-col justify-between overflow-hidden shadow-surface-card hover:shadow-surface-hover hover:-translate-y-1 p-6 sm:p-7 backdrop-blur-sm",
        className
      )}
    >
      <div>
        {/* Top Metadata Row */}
        <div className="flex items-center justify-between gap-2 mb-4">
          <div className="flex items-center gap-2">
            <span className="p-1.5 rounded-md bg-night-850 border border-surface-border">
              {getCategoryIcon()}
            </span>
            <span className="text-xs font-mono text-starlight-muted">
              {project.category}
            </span>
          </div>

          <span
            className={cn(
              "text-[11px] font-mono px-2 py-0.5 rounded-full border",
              project.status === "Completed"
                ? "bg-emerald-950/20 text-emerald-300 border-emerald-500/20"
                : project.status === "Active Development"
                ? "bg-sky-950/20 text-moon-accent border-moon-border"
                : "bg-night-850 text-starlight-muted border-surface-border"
            )}
          >
            {project.status}
          </span>
        </div>

        {/* Project Title */}
        <h3 className="text-lg sm:text-xl font-bold tracking-tight text-starlight-primary group-hover:text-moon-light transition-colors duration-200">
          {project.title}
        </h3>

        {/* Tagline */}
        <p className="mt-1.5 text-xs sm:text-sm font-medium text-moon-accent/90">
          {project.tagline}
        </p>

        {/* Description */}
        <p className="mt-3 text-xs sm:text-sm text-starlight-secondary font-normal leading-relaxed line-clamp-3">
          {project.description}
        </p>

        {/* Engineering Highlights */}
        <div className="mt-5 pt-4 border-t border-surface-border/60 space-y-1.5">
          {project.highlights.slice(0, 3).map((item, idx) => (
            <div key={idx} className="flex items-start gap-2 text-xs text-starlight-secondary">
              <span className="text-moon-accent font-mono text-[11px]">›</span>
              <span className="truncate">{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Card Bottom Area */}
      <div className="mt-6 pt-4 border-t border-surface-border/60">
        {/* Skill Badges */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.techStack.slice(0, 5).map((tech) => (
            <SkillBadge key={tech} name={tech} size="sm" variant="default" />
          ))}
          {project.techStack.length > 5 && (
            <span className="text-[11px] font-mono text-starlight-muted self-center px-1">
              +{project.techStack.length - 5}
            </span>
          )}
        </div>

        {/* Card Actions */}
        <div className="flex items-center justify-between pt-1">
          {onInspect ? (
            <button
              onClick={() => onInspect(project)}
              className="inline-flex items-center gap-1.5 text-xs font-mono text-moon-accent hover:text-moon-light transition-colors font-medium focus:outline-none"
            >
              <Info className="w-3.5 h-3.5" />
              <span>Specs &amp; Architecture</span>
            </button>
          ) : (
            <span />
          )}

          <div className="flex items-center gap-2">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={`View ${project.title} on GitHub`}
                className="p-1.5 rounded-md text-starlight-muted hover:text-starlight-primary hover:bg-night-850 transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={`Open demo for ${project.title}`}
                className="p-1.5 rounded-md text-starlight-muted hover:text-starlight-primary hover:bg-night-850 transition-colors"
              >
                <ArrowUpRight className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
