"use client";

import React, { useEffect } from "react";
import { X, CheckCircle2, Layers, Cpu, Server, Shield } from "lucide-react";
import { Project } from "@/data/portfolioData";
import { GithubIcon } from "@/components/icons/SocialIcons";
import { SkillBadge } from "@/components/ui/SkillBadge";

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectDetailModal({ project, onClose }: ProjectDetailModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-night-950/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl bg-night-900 border border-surface-border shadow-[0_20px_50px_rgba(0,0,0,0.9)] p-6 sm:p-8 text-starlight-primary"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-lg text-starlight-muted hover:text-starlight-primary hover:bg-night-850 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-2 mb-2">
          <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-night-850 border border-surface-border text-moon-accent">
            {project.category}
          </span>
          <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-night-850 text-starlight-muted border border-surface-border">
            Status: {project.status}
          </span>
        </div>

        <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-starlight-primary mt-1">
          {project.title}
        </h3>
        <p className="text-sm font-medium text-moon-accent mt-1">
          {project.tagline}
        </p>

        {/* Long Narrative / Case Study Breakdown */}
        <div className="mt-5 text-sm sm:text-base text-starlight-secondary leading-relaxed border-t border-surface-border/60 pt-4">
          <h4 className="text-xs font-mono uppercase tracking-wider text-starlight-muted mb-2">
            Engineering Overview &amp; Problem Solved
          </h4>
          <p>{project.longDescription}</p>
        </div>

        {/* Technical Highlights */}
        <div className="mt-6">
          <h4 className="text-xs font-mono uppercase tracking-wider text-starlight-muted mb-3 flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>Key Engineering Highlights</span>
          </h4>
          <ul className="space-y-2">
            {project.highlights.map((highlight, idx) => (
              <li key={idx} className="text-xs sm:text-sm text-starlight-secondary flex items-start gap-2.5">
                <span className="text-moon-accent mt-0.5 font-mono">›</span>
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* System Architecture Layers */}
        <div className="mt-6">
          <h4 className="text-xs font-mono uppercase tracking-wider text-starlight-muted mb-3 flex items-center gap-2">
            <Layers className="w-4 h-4 text-moon-accent" />
            <span>Architectural Layers</span>
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {project.architecture.map((layer, idx) => (
              <div
                key={idx}
                className="p-3 rounded-xl bg-night-850/80 border border-surface-border text-xs font-mono text-starlight-secondary"
              >
                {layer}
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack Chips */}
        <div className="mt-6 pt-5 border-t border-surface-border/60">
          <h4 className="text-xs font-mono uppercase tracking-wider text-starlight-muted mb-3">
            Technologies &amp; Libraries
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <SkillBadge key={tech} name={tech} size="sm" variant="default" />
            ))}
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div className="mt-8 pt-4 border-t border-surface-border/60 flex items-center justify-between">
          <span className="text-xs text-starlight-muted font-mono">
            Designed &amp; built by Parthiban V
          </span>

          <div className="flex items-center gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-night-850 hover:bg-night-800 border border-surface-border text-starlight-primary text-xs font-mono transition-colors"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>Source</span>
              </a>
            )}
            <button
              onClick={onClose}
              className="px-4 py-1.5 rounded-lg bg-night-850 hover:bg-night-800 border border-surface-border text-starlight-secondary hover:text-starlight-primary text-xs font-mono transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
