"use client";

import React from "react";
import { BookOpen, Brain, Sparkles, GraduationCap, Users, GitPullRequest, Flame, Terminal } from "lucide-react";

export function VirtualTeacherVisual() {
  return (
    <div className="relative w-full h-48 sm:h-56 rounded-xl bg-night-950/80 border border-surface-border overflow-hidden p-4 flex flex-col justify-between group-hover:border-moon-border transition-colors duration-300">
      {/* Header */}
      <div className="flex items-center justify-between text-[11px] font-mono text-starlight-muted">
        <span className="flex items-center gap-1.5 text-moon-accent">
          <Brain className="w-3.5 h-3.5" />
          <span>Architecture Concept</span>
        </span>
        <span className="px-2 py-0.5 rounded bg-night-900 border border-surface-border text-starlight-secondary">
          AI Pedagogy
        </span>
      </div>

      {/* Schematic Pipeline Nodes */}
      <div className="grid grid-cols-3 gap-2 my-auto">
        <div className="p-2.5 rounded-lg bg-night-900/90 border border-surface-border group-hover:border-surface-border-hover transition-colors">
          <BookOpen className="w-3.5 h-3.5 text-moon-accent mb-1" />
          <span className="text-[10px] font-mono text-starlight-muted block">Input</span>
          <span className="text-xs font-semibold text-starlight-primary truncate block">Syllabus Material</span>
        </div>

        <div className="p-2.5 rounded-lg bg-night-850 border border-moon-border/60 shadow-moon-soft">
          <Sparkles className="w-3.5 h-3.5 text-moon-light mb-1" />
          <span className="text-[10px] font-mono text-moon-accent block">Reasoning</span>
          <span className="text-xs font-semibold text-starlight-primary truncate block">Socratic Analogy</span>
        </div>

        <div className="p-2.5 rounded-lg bg-night-900/90 border border-surface-border group-hover:border-surface-border-hover transition-colors">
          <GraduationCap className="w-3.5 h-3.5 text-emerald-400 mb-1" />
          <span className="text-[10px] font-mono text-starlight-muted block">Output</span>
          <span className="text-xs font-semibold text-starlight-primary truncate block">Adaptive Assessment</span>
        </div>
      </div>

      {/* Footer Trace */}
      <div className="text-[10px] font-mono text-starlight-muted flex items-center justify-between pt-2 border-t border-surface-border/60">
        <span>Evaluates comprehension vs recall</span>
        <span className="text-moon-accent">AI Concept</span>
      </div>
    </div>
  );
}

export function DracarysVisual() {
  return (
    <div className="relative w-full h-40 sm:h-44 rounded-xl bg-night-950/80 border border-surface-border overflow-hidden p-4 flex flex-col justify-between group-hover:border-moon-border transition-colors duration-300">
      <div className="flex items-center justify-between text-[11px] font-mono text-starlight-muted">
        <span className="flex items-center gap-1.5 text-starlight-secondary">
          <Flame className="w-3.5 h-3.5 text-moon-accent" />
          <span>dracarysweb.vercel.app</span>
        </span>
        <span className="px-2 py-0.5 rounded bg-night-900 border border-surface-border text-starlight-secondary">
          TEAM PLATFORM
        </span>
      </div>

      <div className="flex items-center justify-between gap-2 my-auto px-2">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-night-850 border border-surface-border flex items-center justify-center text-moon-accent">
            <Users className="w-3.5 h-3.5" />
          </div>
          <div>
            <span className="text-xs font-semibold text-starlight-primary block">Hackathon Squads</span>
            <span className="text-[10px] font-mono text-starlight-muted">24–48h Sprints</span>
          </div>
        </div>

        <div className="w-8 h-[1px] bg-surface-border" />

        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-night-850 border border-surface-border flex items-center justify-center text-starlight-secondary">
            <GitPullRequest className="w-3.5 h-3.5" />
          </div>
          <div>
            <span className="text-xs font-semibold text-starlight-primary block">Shared Codebases</span>
            <span className="text-[10px] font-mono text-starlight-muted">Peer Reviews</span>
          </div>
        </div>
      </div>

      <div className="text-[10px] font-mono text-starlight-muted flex items-center justify-between pt-2 border-t border-surface-border/60">
        <span>Founded by Parthiban</span>
        <span className="text-emerald-400">Live on Vercel</span>
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
          <span>sandbox // lab builds</span>
        </span>
        <span className="px-2 py-0.5 rounded bg-night-900 border border-surface-border text-starlight-muted">
          EXPERIMENTS
        </span>
      </div>

      <div className="my-auto p-2.5 rounded-lg bg-night-900/60 border border-surface-border font-mono text-[11px] text-starlight-secondary space-y-1">
        <div className="flex items-center justify-between text-starlight-dim text-[10px]">
          <span>TARGET: C++ / Python Routine</span>
          <span>STATUS: PASS</span>
        </div>
        <p className="text-starlight-primary">
          <span className="text-moon-accent">$</span> g++ -O3 solver.cpp -o runtime
        </p>
      </div>

      <div className="text-[10px] font-mono text-starlight-muted flex items-center justify-between pt-2 border-t border-surface-border/60">
        <span>Prototyping &amp; Algorithms</span>
        <span className="text-moon-accent">Ongoing</span>
      </div>
    </div>
  );
}
