"use client";

import React, { useState } from "react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { 
  Flame, 
  ExternalLink, 
  Users, 
  Trophy, 
  Cpu, 
  Terminal, 
  ArrowUpRight, 
  Sparkles,
  ShieldAlert,
  Code
} from "lucide-react";

const PILLARS = [
  {
    icon: Trophy,
    title: "Hackathons & Rapid Prototyping",
    desc: "Forming agile student squads to engineer high-velocity solutions under intense 24–48 hour competitive hackathon sprints.",
    tag: "Competitions",
  },
  {
    icon: Code,
    title: "Full-Stack Web & Real Systems",
    desc: "Shipping live web applications and community software that solve genuine student and developer friction points.",
    tag: "Production",
  },
  {
    icon: Cpu,
    title: "Applied AI & Emerging Tech",
    desc: "Experimenting hands-on with autonomous agent architectures, local LLM evaluation, and modern software paradigms.",
    tag: "Exploration",
  },
  {
    icon: Users,
    title: "Long-Term Peer Synergy",
    desc: "Building a culture of relentless curiosity, shared technical code reviews, and lifelong collaborative growth.",
    tag: "Community",
  },
];

export const DracarysFeature: React.FC = () => {
  const [hoveredPillar, setHoveredPillar] = useState<number | null>(null);

  return (
    <section id="dracarys" className="relative py-28 overflow-hidden bg-night-950">
      {/* Cinematic Ambient Glow - Subtle ember & moonlight contrast */}
      <div 
        aria-hidden="true" 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[720px] h-[520px] bg-gradient-to-tr from-red-950/15 via-amber-900/10 to-moon-accent/10 rounded-full blur-[140px] pointer-events-none" 
      />

      {/* Subtle Geometric Angular Grid Lines */}
      <div 
        aria-hidden="true" 
        className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:32px_32px] opacity-40 pointer-events-none" 
      />

      <Container className="relative z-10">
        <Reveal>
          {/* Main Initiative Container with Hairline Border and Dark Glass Surface */}
          <div className="relative rounded-2xl border border-white/[0.08] bg-surface-1/90 backdrop-blur-xl p-8 sm:p-12 lg:p-16 overflow-hidden shadow-2xl">
            
            {/* Dragon-Scale Angular Cyber Geometry Watermark */}
            <div 
              aria-hidden="true" 
              className="absolute -top-24 -right-24 w-96 h-96 opacity-10 pointer-events-none select-none"
            >
              <svg viewBox="0 0 200 200" fill="none" className="w-full h-full stroke-moon-accent/60 stroke-[1]">
                <polygon points="100,10 190,60 190,160 100,200 10,160 10,60" />
                <polygon points="100,30 170,70 170,145 100,180 30,145 30,70" />
                <polygon points="100,50 150,80 150,130 100,160 50,130 50,80" />
                <line x1="100" y1="10" x2="100" y2="200" />
                <line x1="10" y1="60" x2="190" y2="160" />
                <line x1="10" y1="160" x2="190" y2="60" />
              </svg>
            </div>

            {/* Top Eyebrow / Badges */}
            <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-6 border-b border-white/[0.06]">
              <div className="flex items-center gap-3">
                <span className="flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium tracking-wide bg-red-950/40 text-red-300 border border-red-800/40">
                  <Flame className="w-3.5 h-3.5 text-red-400 animate-pulse" />
                  INITIATIVE • FOUNDED BY PARTHIBAN
                </span>
                <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono text-moon-accent/80 bg-moon-accent/5 border border-moon-accent/15">
                  <Sparkles className="w-3 h-3 text-moon-accent" />
                  Student Technology Team
                </span>
              </div>

              <div className="flex items-center gap-2 text-xs font-mono text-starlight-muted">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <span>ACTIVE COLLABORATIVE GUILD</span>
              </div>
            </div>

            {/* Core Header Section */}
            <div className="grid lg:grid-cols-12 gap-8 items-start mb-12">
              <div className="lg:col-span-8">
                {/* Large Wordmark with Technical Flare */}
                <div className="flex items-baseline gap-3 mb-3">
                  <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white font-mono">
                    DRACARYS
                  </h2>
                  <span className="text-xs font-mono text-red-400/80 px-2 py-0.5 rounded bg-red-950/60 border border-red-900/40 uppercase">
                    v1.0
                  </span>
                </div>

                {/* Official Tagline */}
                <p className="text-lg sm:text-xl font-medium text-starlight-secondary tracking-tight mb-4">
                  &ldquo;A Team Built to Create, Solve &amp; Innovate.&rdquo;
                </p>

                {/* Purpose & Personal Narrative */}
                <p className="text-sm sm:text-base text-starlight-muted leading-relaxed max-w-2xl">
                  Founded by <strong className="text-white font-semibold">Parthiban</strong>, DRACARYS was created to transcend solo coding and bring driven engineering students together under one collaborative banner. The squad unites to tackle high-stakes hackathons, build production-grade web applications, and experiment with cutting-edge AI technologies in an intense, supportive environment.
                </p>
              </div>

              {/* Founder & Status Telemetry Card */}
              <div className="lg:col-span-4 rounded-xl border border-white/[0.08] bg-surface-2/70 p-5 space-y-3.5 text-xs font-mono">
                <div className="text-[11px] uppercase tracking-wider text-starlight-muted pb-2 border-b border-white/[0.06] flex items-center justify-between">
                  <span>Team Telemetry</span>
                  <Terminal className="w-3.5 h-3.5 text-moon-accent" />
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-starlight-muted">Founder &amp; Lead:</span>
                  <span className="text-white font-medium">Parthiban V</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-starlight-muted">Nature:</span>
                  <span className="text-moon-accent">Student Tech Collective</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-starlight-muted">Established:</span>
                  <span className="text-white">2026</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-starlight-muted">Focus Areas:</span>
                  <span className="text-white">AI • Web • Hackathons</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-starlight-muted">Status:</span>
                  <span className="text-emerald-400 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    Open to Collaboration
                  </span>
                </div>
              </div>
            </div>

            {/* Purpose Matrix - 4 Distinct Functional Pillars */}
            <div className="mb-12">
              <div className="text-xs font-mono tracking-wider text-starlight-muted uppercase mb-4 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-moon-accent rounded-full" />
                What We Build &amp; Pursue
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {PILLARS.map((pillar, idx) => {
                  const Icon = pillar.icon;
                  const isHovered = hoveredPillar === idx;

                  return (
                    <div
                      key={pillar.title}
                      onMouseEnter={() => setHoveredPillar(idx)}
                      onMouseLeave={() => setHoveredPillar(null)}
                      className={`relative p-5 rounded-xl border transition-all duration-300 flex flex-col justify-between ${
                        isHovered 
                          ? "bg-surface-3 border-moon-accent/30 shadow-lg -translate-y-1" 
                          : "bg-surface-2/40 border-white/[0.06] hover:border-white/15"
                      }`}
                    >
                      <div>
                        <div className="flex items-center justify-between mb-3">
                          <div className={`w-9 h-9 rounded-lg flex items-center justify-center transition-colors ${
                            isHovered ? "bg-moon-accent/20 text-moon-accent" : "bg-white/[0.04] text-starlight-secondary"
                          }`}>
                            <Icon className="w-4 h-4" />
                          </div>
                          <span className="text-[10px] font-mono tracking-wider uppercase px-2 py-0.5 rounded bg-white/[0.04] text-starlight-muted border border-white/[0.04]">
                            {pillar.tag}
                          </span>
                        </div>
                        <h4 className="text-sm font-semibold text-white mb-2 leading-snug">
                          {pillar.title}
                        </h4>
                        <p className="text-xs text-starlight-muted leading-relaxed">
                          {pillar.desc}
                        </p>
                      </div>

                      <div className="mt-4 pt-3 border-t border-white/[0.04] flex items-center gap-1.5 text-[11px] font-mono text-moon-accent/80">
                        <span>Pillar 0{idx + 1}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Call To Action / Live Portal Banner */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-8 border-t border-white/[0.08] bg-white/[0.01] -mx-8 -mb-8 sm:-mx-12 sm:-mb-12 lg:-mx-16 lg:-mb-16 p-8 sm:p-10">
              <div className="space-y-1 text-center sm:text-left">
                <div className="text-sm font-semibold text-white">
                  Visit the Official DRACARYS Platform
                </div>
                <div className="text-xs text-starlight-muted">
                  Explore team projects, member showcase, and our open mission.
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="https://dracarysweb.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-6 py-3 rounded-lg text-sm font-medium font-mono text-night-950 bg-moon-accent hover:bg-white transition-all shadow-[0_0_20px_rgba(212,229,255,0.15)] hover:shadow-[0_0_30px_rgba(212,229,255,0.3)] active:scale-[0.98]"
                >
                  <span>Explore DRACARYS</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>

                <a
                  href="https://github.com/parthiban-dot"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-3 rounded-lg text-sm font-medium font-mono text-starlight-secondary bg-surface-2 hover:bg-surface-3 hover:text-white border border-white/[0.08] transition-colors"
                >
                  <ExternalLink className="w-4 h-4 text-starlight-muted" />
                  <span>GitHub</span>
                </a>
              </div>
            </div>

          </div>
        </Reveal>
      </Container>
    </section>
  );
};
