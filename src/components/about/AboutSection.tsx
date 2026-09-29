"use client";

import React from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { SkillBadge } from "@/components/ui/SkillBadge";
import {
  MapPin,
  Cpu,
  GraduationCap,
  Users,
  Flame,
  Code2,
  Bot,
  Trophy,
  Workflow,
  Sparkles,
  Compass,
  ArrowRight,
} from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export function AboutSection() {
  const interests = [
    { label: "AI Engineering", icon: <Bot className="w-3.5 h-3.5 text-moon-accent" /> },
    { label: "AI Agents", icon: <Cpu className="w-3.5 h-3.5 text-moon-light" /> },
    { label: "Full-Stack Development", icon: <Code2 className="w-3.5 h-3.5 text-starlight-secondary" /> },
    { label: "Web Development", icon: <Workflow className="w-3.5 h-3.5 text-starlight-secondary" /> },
    { label: "Hackathons", icon: <Trophy className="w-3.5 h-3.5 text-moon-accent" /> },
    { label: "Real-World Problem Solving", icon: <Sparkles className="w-3.5 h-3.5 text-emerald-400" /> },
  ];

  return (
    <section id="about" className="py-24 sm:py-32 relative border-t border-surface-border">
      <Container size="wide">
        {/* Section Heading with Large Statement */}
        <Reveal type="fade-up">
          <SectionHeading
            tag="About Me"
            tagIcon={<Compass className="w-3.5 h-3.5" />}
            title="Learning by building. Growing by solving."
            description="I am a Computer Science student at Sri Shakthi Institute of Engineering and Technology who believes the deepest comprehension comes from shipping real software rather than memorizing theory."
          />
        </Reveal>

        {/* ================================================== */}
        {/* INFORMATION ROW */}
        {/* ================================================== */}
        <Reveal type="scale-in" delay={0.1}>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 mb-12 sm:mb-16">
            {/* Location */}
            <div className="p-4 sm:p-5 rounded-xl bg-night-900/70 border border-surface-border hover:border-surface-border-hover transition-colors shadow-surface-card flex items-start gap-3.5">
              <div className="p-2.5 rounded-lg bg-night-850 border border-surface-border text-moon-accent shrink-0">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <span className="text-xs font-mono text-starlight-muted block uppercase tracking-wider">
                  Based in
                </span>
                <span className="text-sm font-semibold text-starlight-primary mt-0.5 block">
                  {PORTFOLIO_DATA.personal.location}
                </span>
                <span className="text-[11px] text-starlight-secondary">
                  Tamil Nadu, India
                </span>
              </div>
            </div>

            {/* Focus */}
            <div className="p-4 sm:p-5 rounded-xl bg-night-900/70 border border-surface-border hover:border-surface-border-hover transition-colors shadow-surface-card flex items-start gap-3.5">
              <div className="p-2.5 rounded-lg bg-night-850 border border-surface-border text-moon-light shrink-0">
                <Cpu className="w-4 h-4" />
              </div>
              <div>
                <span className="text-xs font-mono text-starlight-muted block uppercase tracking-wider">
                  Primary Focus
                </span>
                <span className="text-sm font-semibold text-starlight-primary mt-0.5 block">
                  AI Engineering
                </span>
                <span className="text-[11px] text-starlight-secondary">
                  Autonomous Agents &amp; Systems
                </span>
              </div>
            </div>

            {/* Education */}
            <div className="p-4 sm:p-5 rounded-xl bg-night-900/70 border border-surface-border hover:border-surface-border-hover transition-colors shadow-surface-card flex items-start gap-3.5">
              <div className="p-2.5 rounded-lg bg-night-850 border border-surface-border text-emerald-400 shrink-0">
                <GraduationCap className="w-4 h-4" />
              </div>
              <div>
                <span className="text-xs font-mono text-starlight-muted block uppercase tracking-wider">
                  Education
                </span>
                <span className="text-sm font-semibold text-starlight-primary mt-0.5 block">
                  Computer Science &amp; Engineering
                </span>
                <span className="text-[11px] text-starlight-secondary">
                  2nd Year • Sri Shakthi Inst. of Engg &amp; Tech
                </span>
              </div>
            </div>
          </div>
        </Reveal>

        {/* ================================================== */}
        {/* NARRATIVE & TEAM DRACARYS GRID */}
        {/* ================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Personal Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <Reveal type="fade-up" delay={0.15}>
              <div className="p-6 sm:p-8 rounded-2xl bg-night-900/60 border border-surface-border shadow-surface-card backdrop-blur-sm space-y-4">
                <h3 className="text-lg font-bold text-starlight-primary tracking-tight">
                  From Foundational Code to Intelligent Agents
                </h3>

                <div className="space-y-3.5 text-sm sm:text-base text-starlight-secondary leading-relaxed font-normal">
                  <p>
                    I am a 2nd year Computer Science student focusing my efforts on <span className="text-starlight-primary font-medium">AI Engineering and Full-Stack Development</span>. Rather than treating programming as abstract classroom exercises, I learn best by building real software — experimenting with Python, FastAPI, React, Next.js, and integrating intelligent APIs into functional tools.
                  </p>
                  <p>
                    I enjoy taking an idea from an empty repository to a working product, paying close attention to clean code structure, sensible system design, and fast user interfaces.
                  </p>
                  <p>
                    Hackathons have been my favorite proving ground. The intensity of 24 to 48-hour sprints forces quick problem scoping, tight team collaboration, and shipping software that works under pressure.
                  </p>
                </div>

                {/* Core Areas of Interest Chips */}
                <div className="pt-5 border-t border-surface-border/60">
                  <span className="text-xs font-mono text-starlight-muted block mb-3 uppercase tracking-wider">
                    Core Interests &amp; Active Domains
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {interests.map((item) => (
                      <span
                        key={item.label}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-night-850/80 border border-surface-border text-xs font-mono text-starlight-secondary hover:text-starlight-primary hover:border-surface-border-hover transition-colors"
                      >
                        {item.icon}
                        <span>{item.label}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Column: DRACARYS Technology Team Showcase */}
          <div className="lg:col-span-5">
            <Reveal type="slide-in" delay={0.2}>
              <div className="rounded-2xl bg-gradient-to-b from-night-850 via-night-900 to-night-950 border border-surface-border hover:border-moon-border transition-all duration-300 p-6 sm:p-7 shadow-surface-card relative overflow-hidden">
                {/* Subtle Moonlight / Dragon glow in background */}
                <div
                  className="absolute -top-16 -right-16 w-44 h-44 rounded-full pointer-events-none opacity-20 blur-2xl"
                  style={{
                    background: "radial-gradient(circle, rgba(212, 229, 255, 0.3) 0%, transparent 70%)",
                  }}
                  aria-hidden="true"
                />

                {/* Card Header */}
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded-lg bg-night-800 border border-surface-border text-moon-accent">
                      <Flame className="w-4 h-4 fill-current opacity-90" />
                    </div>
                    <div>
                      <span className="text-[11px] font-mono uppercase tracking-wider text-starlight-muted block">
                        Collegiate Initiative
                      </span>
                      <h4 className="text-lg font-bold tracking-tight text-starlight-primary font-mono">
                        DRACARYS
                      </h4>
                    </div>
                  </div>

                  <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-night-800 border border-surface-border text-moon-accent">
                    Founder
                  </span>
                </div>

                {/* Team Purpose */}
                <p className="text-xs sm:text-sm text-starlight-secondary leading-relaxed mb-5">
                  I founded <span className="text-starlight-primary font-semibold">DRACARYS</span> as a dedicated technology team to bring ambitious engineering students together for competitive hackathons, collaborative projects, peer code reviews, and solving real-world challenges through code.
                </p>

                {/* Pillars of DRACARYS */}
                <div className="space-y-2.5 mb-6 text-xs text-starlight-secondary font-mono">
                  <div className="flex items-start gap-2 p-2.5 rounded-lg bg-night-950/60 border border-surface-border/60">
                    <span className="text-moon-accent mt-0.5">›</span>
                    <div>
                      <span className="text-starlight-primary font-semibold">Hackathon Sprints:</span> Rapid MVP ideation, sprint kanbans, and prototype execution under 24–48h deadlines.
                    </div>
                  </div>

                  <div className="flex items-start gap-2 p-2.5 rounded-lg bg-night-950/60 border border-surface-border/60">
                    <span className="text-moon-accent mt-0.5">›</span>
                    <div>
                      <span className="text-starlight-primary font-semibold">Collaborative Building:</span> Shared GitHub repositories, API contract modeling, and cross-functional peer reviews.
                    </div>
                  </div>

                  <div className="flex items-start gap-2 p-2.5 rounded-lg bg-night-950/60 border border-surface-border/60">
                    <span className="text-moon-accent mt-0.5">›</span>
                    <div>
                      <span className="text-starlight-primary font-semibold">Real-World Problem Solving:</span> Moving past textbook toy scripts to build software that actually works.
                    </div>
                  </div>
                </div>

                {/* Team Tags */}
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-surface-border/60">
                  {PORTFOLIO_DATA.personal.team.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] font-mono px-2 py-0.5 rounded bg-night-900 border border-surface-border text-starlight-muted"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
