"use client";

import React, { useState } from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { SkillBadge } from "@/components/ui/SkillBadge";
import { ProjectDetailModal } from "./ProjectDetailModal";
import { VirtualTeacherVisual, DracarysVisual, CollegiateLabVisual } from "./ProjectVisuals";
import { PORTFOLIO_DATA, Project } from "@/data/portfolioData";
import { ArrowUpRight, ExternalLink, Code, Sparkles, BookOpen, Layers } from "lucide-react";
import { GithubIcon } from "@/components/icons/SocialIcons";

export function ProjectsSection() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const projects = PORTFOLIO_DATA.projects;
  const featuredProject = projects[0]; // AI Virtual Teacher
  const secondaryProjects = projects.slice(1); // DRACARYS & Collegiate Lab

  return (
    <section id="projects" className="py-24 sm:py-32 relative border-t border-surface-border">
      <Container size="wide">
        {/* Header */}
        <Reveal type="fade-up">
          <SectionHeading
            tag="Selected Works"
            tagIcon={<Code className="w-3.5 h-3.5" />}
            title="Projects &amp; Architectures"
            description="Real software, pedagogical AI concepts, and collaborative platforms built for actual learners and student teams. Honest specifications with zero invented metrics."
          />
        </Reveal>

        {/* ================================================== */}
        {/* 1. LARGE FEATURED PROJECT CARD (Desktop: Full Width Banner) */}
        {/* ================================================== */}
        <div className="mb-8">
          <Reveal type="scale-in" delay={0.1}>
            <article className="group rounded-2xl bg-night-900/70 border border-surface-border hover:border-moon-border transition-all duration-400 ease-out-expo p-6 sm:p-9 shadow-surface-card hover:shadow-surface-hover hover:scale-[1.008] backdrop-blur-md relative overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Left: Project Details & Copy */}
                <div className="lg:col-span-7 flex flex-col justify-between h-full">
                  <div>
                    {/* Category & Status */}
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-night-850 border border-surface-border text-moon-accent">
                        {featuredProject.category}
                      </span>
                      <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-sky-950/20 text-moon-accent border border-moon-border">
                        Featured • {featuredProject.status}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-starlight-primary group-hover:text-moon-light transition-colors duration-200">
                      {featuredProject.title}
                    </h3>

                    {/* Tagline */}
                    <p className="mt-1.5 text-xs sm:text-sm font-medium text-moon-accent">
                      {featuredProject.tagline}
                    </p>

                    {/* Description */}
                    <p className="mt-3.5 text-sm sm:text-base text-starlight-secondary font-normal leading-relaxed">
                      {featuredProject.description}
                    </p>

                    {/* Key Technical Highlights */}
                    <div className="mt-5 space-y-2 border-t border-surface-border/60 pt-4">
                      {featuredProject.highlights.slice(0, 3).map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-starlight-secondary">
                          <span className="text-moon-accent font-mono text-xs">›</span>
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Bottom: Tech Stack Chips & Action Triggers */}
                  <div className="mt-6 pt-5 border-t border-surface-border/60 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex flex-wrap gap-1.5">
                      {featuredProject.techStack.map((tech) => (
                        <SkillBadge key={tech} name={tech} size="sm" variant="default" />
                      ))}
                    </div>

                    <div className="flex items-center gap-3">
                      {featuredProject.githubUrl && (
                        <a
                          href={featuredProject.githubUrl}
                          target="_blank"
                          rel="noreferrer noopener"
                          className="inline-flex items-center gap-1.5 text-xs font-mono text-starlight-muted hover:text-starlight-primary transition-colors p-1.5"
                          aria-label={`View ${featuredProject.title} source code on GitHub`}
                        >
                          <GithubIcon className="w-4 h-4" />
                          <span className="hidden sm:inline">Source</span>
                        </a>
                      )}

                      {/* No fake live link: Shows Case Study button */}
                      <button
                        onClick={() => setActiveProject(featuredProject)}
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-night-850 hover:bg-night-800 border border-surface-border hover:border-moon-border text-moon-light text-xs font-mono font-medium transition-all group-hover:shadow-moon-soft active:scale-95"
                      >
                        <span>Case Study &amp; Architecture</span>
                        <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Right: Dedicated Visual Illustration */}
                <div className="lg:col-span-5 w-full">
                  <div className="transform group-hover:scale-[1.02] transition-transform duration-400 ease-out-expo">
                    <VirtualTeacherVisual />
                  </div>
                </div>
              </div>
            </article>
          </Reveal>
        </div>

        {/* ================================================== */}
        {/* 2. SECONDARY PROJECTS (Sophisticated Asymmetric Grid) */}
        {/* ================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {/* DRACARYS Card */}
          <Reveal type="fade-up" delay={0.15}>
            <article className="group rounded-2xl bg-night-900/60 border border-surface-border hover:border-moon-border transition-all duration-400 ease-out-expo p-6 sm:p-7 shadow-surface-card hover:shadow-surface-hover hover:scale-[1.01] backdrop-blur-sm flex flex-col justify-between h-full overflow-hidden">
              <div>
                {/* Visual Preview */}
                <div className="mb-5 transform group-hover:scale-[1.02] transition-transform duration-400 ease-out-expo">
                  <DracarysVisual />
                </div>

                {/* Header */}
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="text-xs font-mono px-2 py-0.5 rounded-full bg-night-850 border border-surface-border text-moon-accent">
                    {secondaryProjects[0].category}
                  </span>
                  <span className="text-[11px] font-mono text-starlight-muted">
                    {secondaryProjects[0].status}
                  </span>
                </div>

                <h3 className="text-xl font-bold tracking-tight text-starlight-primary group-hover:text-moon-light transition-colors">
                  {secondaryProjects[0].title}
                </h3>

                <p className="mt-1 text-xs sm:text-sm font-medium text-moon-accent">
                  {secondaryProjects[0].tagline}
                </p>

                <p className="mt-3 text-xs sm:text-sm text-starlight-secondary font-normal leading-relaxed line-clamp-3">
                  {secondaryProjects[0].description}
                </p>
              </div>

              {/* Bottom Actions */}
              <div className="mt-6 pt-4 border-t border-surface-border/60">
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {secondaryProjects[0].techStack.slice(0, 4).map((tech) => (
                    <SkillBadge key={tech} name={tech} size="sm" variant="default" />
                  ))}
                  {secondaryProjects[0].techStack.length > 4 && (
                    <span className="text-[11px] font-mono text-starlight-muted self-center px-1">
                      +{secondaryProjects[0].techStack.length - 4}
                    </span>
                  )}
                </div>

                <div className="flex items-center justify-between">
                  <button
                    onClick={() => setActiveProject(secondaryProjects[0])}
                    className="inline-flex items-center gap-1.5 text-xs font-mono text-moon-accent hover:text-moon-light font-medium focus:outline-none"
                  >
                    <span>Case Study</span>
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </button>

                  {secondaryProjects[0].githubUrl && (
                    <a
                      href={secondaryProjects[0].githubUrl}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="p-1.5 rounded-md text-starlight-muted hover:text-starlight-primary hover:bg-night-850 transition-colors"
                      aria-label="View DRACARYS on GitHub"
                    >
                      <GithubIcon className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </article>
          </Reveal>

          {/* Collegiate Lab Builds Card */}
          <Reveal type="fade-up" delay={0.2}>
            <article className="group rounded-2xl bg-night-900/60 border border-surface-border hover:border-moon-border transition-all duration-400 ease-out-expo p-6 sm:p-7 shadow-surface-card hover:shadow-surface-hover hover:scale-[1.01] backdrop-blur-sm flex flex-col justify-between h-full overflow-hidden">
              <div>
                {/* Visual Preview */}
                <div className="mb-5 transform group-hover:scale-[1.02] transition-transform duration-400 ease-out-expo">
                  <CollegiateLabVisual />
                </div>

                {/* Header */}
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="text-xs font-mono px-2 py-0.5 rounded-full bg-night-850 border border-surface-border text-starlight-secondary">
                    {secondaryProjects[1].category}
                  </span>
                  <span className="text-[11px] font-mono text-starlight-muted">
                    {secondaryProjects[1].status}
                  </span>
                </div>

                <h3 className="text-xl font-bold tracking-tight text-starlight-primary group-hover:text-moon-light transition-colors">
                  {secondaryProjects[1].title}
                </h3>

                <p className="mt-1 text-xs sm:text-sm font-medium text-starlight-secondary">
                  {secondaryProjects[1].tagline}
                </p>

                <p className="mt-3 text-xs sm:text-sm text-starlight-secondary font-normal leading-relaxed line-clamp-3">
                  {secondaryProjects[1].description}
                </p>
              </div>

              {/* Bottom Actions */}
              <div className="mt-6 pt-4 border-t border-surface-border/60">
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {secondaryProjects[1].techStack.slice(0, 4).map((tech) => (
                    <SkillBadge key={tech} name={tech} size="sm" variant="default" />
                  ))}
                  {secondaryProjects[1].techStack.length > 4 && (
                    <span className="text-[11px] font-mono text-starlight-muted self-center px-1">
                      +{secondaryProjects[1].techStack.length - 4}
                    </span>
                  )}
                </div>

                <div className="flex items-center justify-between">
                  <button
                    onClick={() => setActiveProject(secondaryProjects[1])}
                    className="inline-flex items-center gap-1.5 text-xs font-mono text-starlight-secondary hover:text-moon-light font-medium focus:outline-none"
                  >
                    <span>Lab Notes</span>
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </button>

                  {secondaryProjects[1].githubUrl && (
                    <a
                      href={secondaryProjects[1].githubUrl}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="p-1.5 rounded-md text-starlight-muted hover:text-starlight-primary hover:bg-night-850 transition-colors"
                      aria-label="View Lab builds on GitHub"
                    >
                      <GithubIcon className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </article>
          </Reveal>
        </div>

        {/* View All Projects Path */}
        <Reveal type="fade-up" delay={0.25}>
          <div className="mt-12 pt-8 border-t border-surface-border/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-starlight-muted">
            <span>More collegiate &amp; open-source projects in active development.</span>
            <a
              href="https://github.com/parthiban-dot?tab=repositories"
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-night-900 border border-surface-border hover:border-moon-border text-moon-light hover:text-white transition-colors group shadow-sm"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>View All Repositories on GitHub</span>
              <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </Reveal>

        {/* Deep Dive Case Study Modal */}
        <ProjectDetailModal
          project={activeProject}
          onClose={() => setActiveProject(null)}
        />
      </Container>
    </section>
  );
}
