"use client";

import React from "react";
import { Terminal } from "lucide-react";

export function EngineeringVisual() {
  return (
    <div className="relative w-full max-w-xl mx-auto lg:max-w-none">
      {/* Subtle hairline glow backdrop */}
      <div
        className="absolute -inset-2 rounded-2xl pointer-events-none opacity-20 blur-xl -z-10"
        style={{
          background: "radial-gradient(circle at 50% 50%, rgba(212, 229, 255, 0.15) 0%, transparent 75%)",
        }}
        aria-hidden="true"
      />

      {/* Clean Authentic Developer Window */}
      <div className="rounded-xl bg-night-900/90 border border-surface-border backdrop-blur-sm shadow-surface-card overflow-hidden">
        {/* Window Chrome */}
        <div className="px-4 py-3 bg-night-850/80 border-b border-surface-border flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
            <span className="ml-2 text-xs font-mono text-starlight-muted">
              parthiban.ts
            </span>
          </div>

          <div className="flex items-center gap-1.5 text-[11px] font-mono text-starlight-muted">
            <Terminal className="w-3.5 h-3.5 text-moon-accent" />
            <span>CSE Undergrad</span>
          </div>
        </div>

        {/* Code Content */}
        <div className="p-4 sm:p-5 font-mono text-xs sm:text-[13px] leading-relaxed overflow-x-auto text-starlight-secondary">
          <div className="space-y-1">
            <p>
              <span className="text-moon-accent">interface</span>{" "}
              <span className="text-white font-semibold">Engineer</span> &#123;
            </p>
            <p className="pl-4">
              <span className="text-starlight-muted">name:</span>{" "}
              <span className="text-emerald-300">&quot;Parthiban V&quot;</span>;
            </p>
            <p className="pl-4">
              <span className="text-starlight-muted">college:</span>{" "}
              <span className="text-emerald-300">&quot;Sri Shakthi Inst. of Engg &amp; Tech&quot;</span>;
            </p>
            <p className="pl-4">
              <span className="text-starlight-muted">year:</span>{" "}
              <span className="text-amber-300">&quot;2nd Year B.E. Computer Science&quot;</span>;
            </p>
            <p className="pl-4">
              <span className="text-starlight-muted">focus:</span>{" "}
              <span className="text-moon-accent">&quot;AI Engineering &amp; Full-Stack Systems&quot;</span>;
            </p>
            <p className="pl-4">
              <span className="text-starlight-muted">initiative:</span> &#123;
            </p>
            <p className="pl-8">
              <span className="text-starlight-muted">team:</span>{" "}
              <span className="text-emerald-300">&quot;DRACARYS&quot;</span>,
            </p>
            <p className="pl-8">
              <span className="text-starlight-muted">role:</span>{" "}
              <span className="text-moon-accent">&quot;Founder&quot;</span>,
            </p>
            <p className="pl-8">
              <span className="text-starlight-muted">mission:</span>{" "}
              <span className="text-starlight-secondary">&quot;Build, Solve &amp; Innovate&quot;</span>
            </p>
            <p className="pl-4">&#125;;</p>
            <p className="pl-4">
              <span className="text-starlight-muted">activeProjects:</span> [
            </p>
            <p className="pl-8 text-starlight-primary">
              &quot;AI Virtual Teacher&quot;,
            </p>
            <p className="pl-8 text-starlight-primary">
              &quot;DRACARYS Collaborative Platform&quot;
            </p>
            <p className="pl-4">];</p>
            <p className="pl-4">
              <span className="text-starlight-muted">interests:</span> [
            </p>
            <p className="pl-8 text-starlight-muted">
              &quot;Hackathons&quot;, &quot;Applied ML&quot;, &quot;Systems Engineering&quot;
            </p>
            <p className="pl-4">];</p>
            <p>&#125;</p>
          </div>
        </div>

        {/* Footer Bar */}
        <div className="px-4 py-2.5 bg-night-950/70 border-t border-surface-border flex items-center justify-between text-[11px] font-mono text-starlight-muted">
          <span>// Coimbatore, India</span>
          <span className="text-emerald-400 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            Active Builder
          </span>
        </div>
      </div>
    </div>
  );
}
