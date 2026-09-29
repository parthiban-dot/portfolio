"use client";

import React from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import {
  GraduationCap,
  Code2,
  Bot,
  Flame,
  Trophy,
  Compass,
  ArrowRight,
  GitBranch,
} from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export function JourneySection() {
  const getMilestoneIcon = (title: string, type: string) => {
    if (title.includes("DRACARYS")) {
      return <Flame className="w-4 h-4 text-moon-accent fill-current opacity-90" />;
    }
    if (title.includes("AI Engineering")) {
      return <Bot className="w-4 h-4 text-moon-light" />;
    }
    if (title.includes("Full-Stack")) {
      return <Code2 className="w-4 h-4 text-starlight-secondary" />;
    }
    if (title.includes("Hackathon")) {
      return <Trophy className="w-4 h-4 text-moon-accent" />;
    }
    return <GraduationCap className="w-4 h-4 text-emerald-400" />;
  };

  return (
    <section id="journey" className="py-24 sm:py-32 relative border-t border-surface-border">
      <Container size="wide">
        {/* Header */}
        <Reveal type="fade-up">
          <SectionHeading
            tag="Chronology"
            tagIcon={<Compass className="w-3.5 h-3.5" />}
            title="The Builder's Journey"
            description="From foundational computer science algorithms at Sri Shakthi Institute of Engineering and Technology to building collaborative student platforms and engineering autonomous AI systems."
          />
        </Reveal>

        {/* Vertical Timeline */}
        <div className="relative border-l border-surface-border ml-3 sm:ml-6 md:ml-8 pl-6 sm:pl-10 md:pl-12 space-y-12 sm:space-y-16 max-w-4xl">
          {PORTFOLIO_DATA.milestones.map((milestone, idx) => (
            <Reveal
              key={`${milestone.period}-${idx}`}
              type="fade-up"
              delay={idx * 0.1}
            >
              <div className="relative group">
                {/* Node Marker on Vertical Spine */}
                <div className="absolute -left-[37px] sm:-left-[53px] md:-left-[61px] top-1.5 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-night-900 border border-surface-border flex items-center justify-center group-hover:border-moon-border group-hover:shadow-moon-soft group-hover:scale-110 transition-all duration-300">
                  {getMilestoneIcon(milestone.title, milestone.type)}
                </div>

                {/* Milestone Card */}
                <div className="p-6 sm:p-7 rounded-2xl bg-night-900/60 border border-surface-border group-hover:border-surface-border-hover group-hover:bg-night-850/60 transition-all duration-300 shadow-surface-card backdrop-blur-sm">
                  {/* Top: Year Badge & Institution */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2.5">
                    <span className="px-2.5 py-0.5 rounded-full bg-night-850 border border-surface-border text-xs font-mono font-semibold text-moon-accent">
                      {milestone.period}
                    </span>
                    <span className="text-xs font-mono text-starlight-muted">
                      {milestone.institution}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg sm:text-xl font-bold tracking-tight text-starlight-primary group-hover:text-moon-light transition-colors duration-200">
                    {milestone.title}
                  </h3>

                  {/* Short Narrative Description */}
                  <p className="mt-2.5 text-xs sm:text-sm text-starlight-secondary font-normal leading-relaxed">
                    {milestone.description}
                  </p>

                  {/* Category Tags */}
                  <div className="mt-4 pt-3.5 border-t border-surface-border/60 flex flex-wrap gap-1.5">
                    {milestone.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] font-mono px-2 py-0.5 rounded bg-night-950/60 border border-surface-border/60 text-starlight-muted"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
