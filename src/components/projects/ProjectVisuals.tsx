"use client";

import React from "react";
import { BookOpen, Brain, Sparkles, GraduationCap, Users, GitPullRequest, Flame, Terminal, Code2 } from "lucide-react";

export function VirtualTeacherVisual() {
  return (
    <div className="relative w-full h-48 sm:h-56 rounded-xl bg-night-950/80 border border-surface-border overflow-hidden p-4 flex flex-col justify-between group-hover:border-moon-border transition-colors duration-300">
      {/* Background radial glow */}
      <div
        className="absolute -top-10 -right-10 w-48 h-48 rounded-full pointer-events-none opacity-20 blur-2xl"
        style={{
          background: "radial-gradient(circle, rgba(212, 229, 255, 0.35) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      {/* Top Telemetry Header */}
      <div className="flex items-center justify-between text-[11px] font-mono text-starlight-muted">
        <span className="flex items-center gap-1.5 text-moon-accent">
          <Brain className="w-3.5 h-3.5" />
          <span>pedagogy.engine // v1.2</span>
        </span>
        <span className="px-2 py-0.5 rounded bg-night-900 border border-surface-border text-emerald-300">
          ADAPTIVE LEARNING
        </span>
      </div>

      {/* Schematic Pipeline Nodes */}
      <div className="grid grid-cols-3 gap-2 my-auto">
        <div className="p-2.5 rounded-lg bg-night-900/90 border border-surface-border group-hover:border-surface-border-hover transition-colors">
          <BookOpen className="w-3.5 h-3.5 text-moon-accent mb-1" />
          <span className="text-[10px] font-mono text-starlight-muted block">Input</span>
          <span className="text-xs font-semibold text-starlight-primary truncate block">Syllabus / Notes</span>
        </div>

        <div className="p-2.5 rounded-lg bg-night-850 border border-moon-border/60 shadow-moon-soft">
          <Sparkles className="w-3.5 h-3.5 text-moon-light mb-1" />
          <span className="text-[10px] font-mono text-moon-accent block">Reasoning</span>
          <span className="text-xs font-semibold text-starlight-primary truncate block">Socratic Analogy</span>
        </div>

        <div className="p-2.5 rounded-lg bg-night-900/90 border border-surface-border group-hover:border-surface-border-hover transition-colors">
          <GraduationCap className="w-3.5 h-3.5 text-emerald-400 mb-1" />
          <span className="text-[10px] font-mono text-starlight-muted block">Output</span>
          <span className="text-xs font-semibold text-starlight-primary truncate block">Adaptive Test</span>
        </div>
      </div>

      {/* Real-time Evaluation Trace */}
      <div className="text-[10px] font-mono text-starlight-muted flex items-center justify-between pt-2 border-t border-surface-border/60">
        <span>Evaluates comprehension depth vs memory</span>
        <span className="text-moon-accent">Latency: ~320ms</span>
      </div>
    </div>
  );
}

export function DracarysVisual() {
  return (
    <div className="relative w-full h-40 sm:h-44 rounded-xl bg-night-950/80 border border-surface-border overflow-hidden p-4 flex flex-col justify-between group-hover:border-moon-border transition-colors duration-300">
      {/* Background soft glow */}
      <div
        className="absolute -bottom-8 -left-8 w-36 h-36 rounded-full pointer-events-none opacity-15 blur-xl"
        style={{
          background: "radial-gradient(circle, rgba(212, 229, 255, 0.25) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="flex items-center justify-between text-[11px] font-mono text-starlight-muted">
        <span className="flex items-center gap-1.5 text-starlight-secondary">
          <Flame className="w-3.5 h-3.5 text-moon-accent" />
          <span>team.dracarys // hub</span>
        </span>
        <span className="px-2 py-0.5 rounded bg-night-900 border border-surface-border text-starlight-secondary">
          COLLABORATIVE MVP
        </span>
      </div>

      <div className="flex items-center justify-between gap-2 my-auto px-2">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-night-850 border border-surface-border flex items-center justify-center text-moon-accent">
            <Users className="w-3.5 h-3.5" />
          </div>
          <div>
            <span className="text-xs font-semibold text-starlight-primary block">Team Sprints</span>
            <span className="text-[10px] font-mono text-starlight-muted">24-48h Deadlines</span>
          </div>
        </div>

        <div className="w-8 h-[1px] bg-surface-border" />

        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-night-850 border border-surface-border flex items-center justify-center text-starlight-secondary">
            <GitPullRequest className="w-3.5 h-3.5" />
          </div>
          <div>
            <span className="text-xs font-semibold text-starlight-primary block">Shared Code</span>
            <span className="text-[10px] font-mono text-starlight-muted">Branch Reviews</span>
          </div>
        </div>
      </div>

      <div className="text-[10px] font-mono text-starlight-muted flex items-center justify-between pt-2 border-t border-surface-border/60">
        <span>Collegiate Hackathon Syndicate</span>
        <span className="text-emerald-400">Sri Shakthi CSE</span>
      </div>
    </div>
  );
}

export function CollegiateLabVisual() {
  return (
    <div className="relative w-full h-40 sm:h-44 rounded-xl bg-night-950/80 border border-surface-border overflow-hidden p-4 flex flex-col justify-between group-hover:border-moon-border transition-colors duration-300">
      <div className="flex items-center justify-between text-[11px] font-mono text-starlight-muted">
        <span className="flex items-center gap-1.5 text-starlight-secondary">
          <Terminal className="w-3.5 h-3.5 text-moon-accent" />
          <span>lab.experimental // dev</span>
        </span>
        <span className="px-2 py-0.5 rounded bg-night-900 border border-surface-border text-starlight-muted">
          EXPLORATORY
        </span>
      </div>

      <div className="my-auto p-2.5 rounded-lg bg-night-900/60 border border-surface-border font-mono text-[11px] text-starlight-secondary space-y-1">
        <div className="flex items-center justify-between text-starlight-dim text-[10px]">
          <span>TARGET: C++ / Python Benchmark</span>
          <span>STATUS: PASS</span>
        </div>
        <p className="text-starlight-primary">
          <span className="text-moon-accent">$</span> g++ -O3 agent_router.cpp -o runtime
        </p>
      </div>

      <div className="text-[10px] font-mono text-starlight-muted flex items-center justify-between pt-2 border-t border-surface-border/60">
        <span>Continuous Prototyping</span>
        <span className="text-moon-accent">Ongoing</span>
      </div>
    </div>
  );
}
