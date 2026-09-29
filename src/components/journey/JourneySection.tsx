"use client";

import React from "react";
import { Milestone, Flag, Trophy, Briefcase, GraduationCap, Code } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export function JourneySection() {
  const getTypeIcon = (type: string) => {
    switch (type) {
      case "Education":
        return <GraduationCap className="w-4 h-4 text-moon-amber" />;
      case "Hackathon":
        return <Trophy className="w-4 h-4 text-violet-glow" />;
      case "Freelance":
        return <Briefcase className="w-4 h-4 text-emerald-400" />;
      default:
        return <Code className="w-4 h-4 text-cyanic-accent" />;
    }
  };

  return (
    <section id="journey" className="py-24 px-4 sm:px-6 lg:px-8 relative border-t border-night-800/80">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col items-start max-w-2xl mb-16">
          <div className="flex items-center gap-2 text-moon-amber text-xs font-mono tracking-wider uppercase mb-2">
            <Flag className="w-3.5 h-3.5" />
            <span>Path &amp; Milestones</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-starlight-primary">
            The Builder&apos;s Trajectory
          </h2>
          <p className="mt-2 text-sm sm:text-base text-starlight-secondary">
            From university algorithms at Sri Shakthi Institute of Engineering and Technology to late-night hackathon war rooms and freelance deployments.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative border-l border-night-750 ml-3 md:ml-6 space-y-12">
          {PORTFOLIO_DATA.milestones.map((item, idx) => (
            <div key={idx} className="relative pl-6 md:pl-10 group">
              {/* Timeline Marker Dot */}
              <div className="absolute -left-[17px] top-1 w-8 h-8 rounded-full bg-night-900 border border-night-700 flex items-center justify-center group-hover:border-moon-amber/50 group-hover:shadow-[0_0_12px_rgba(255,237,194,0.15)] transition-all">
                {getTypeIcon(item.type)}
              </div>

              {/* Card Container */}
              <div className="p-6 rounded-xl bg-night-900/40 border border-night-800 hover:border-night-700 transition-all">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <span className="text-xs font-mono text-moon-amber">
                    {item.period}
                  </span>
                  <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-night-800 border border-night-700 text-starlight-muted">
                    {item.type}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-starlight-primary">
                  {item.title}
                </h3>
                <h4 className="text-xs sm:text-sm font-medium text-starlight-secondary mt-0.5 mb-3">
                  {item.institution}
                </h4>

                <p className="text-xs sm:text-sm text-starlight-secondary leading-relaxed">
                  {item.description}
                </p>

                {/* Tags */}
                <div className="mt-4 flex flex-wrap gap-1.5 pt-3 border-t border-night-800/80">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] font-mono px-2 py-0.5 rounded bg-night-850 text-starlight-muted"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
