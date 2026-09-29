"use client";

import React, { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Cpu, Terminal, ArrowRight, ShieldCheck, Database, GitBranch, Sparkles } from "lucide-react";

export function EngineeringVisual() {
  const shouldReduceMotion = useReducedMotion();
  const [activeNode, setActiveNode] = useState<number>(1);

  const nodes = [
    {
      id: 0,
      title: "Semantic Context",
      role: "RAG & AST Ingestion",
      detail: "Dense embeddings + SQLite FTS5 hybrid search",
      metric: "P@10: 94.2%",
      icon: <Database className="w-3.5 h-3.5 text-moon-accent" />,
    },
    {
      id: 1,
      title: "Agent Orchestrator",
      role: "Autonomous State Machine",
      detail: "Deterministic planning loop & fallback retries",
      metric: "Latency: 28ms",
      icon: <Cpu className="w-3.5 h-3.5 text-moon-light" />,
    },
    {
      id: 2,
      title: "Tool Execution Sandbox",
      role: "Verified Runtime",
      detail: "Isolated cgroup environment with zero network leaks",
      metric: "Exit: 0 (OK)",
      icon: <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />,
    },
  ];

  return (
    <div className="relative w-full max-w-xl mx-auto lg:max-w-none">
      {/* Background Soft Moonlight Radial Glow behind schematic */}
      <div
        className="absolute -inset-4 rounded-3xl pointer-events-none opacity-25 blur-2xl -z-10"
        style={{
          background:
            "radial-gradient(circle at 60% 40%, rgba(212, 229, 255, 0.22) 0%, rgba(126, 170, 235, 0.06) 50%, transparent 80%)",
        }}
        aria-hidden="true"
      />

      {/* Main Engineering Card */}
      <div className="rounded-2xl bg-night-900/80 border border-surface-border backdrop-blur-md p-5 sm:p-6 shadow-surface-card hover:border-surface-border-hover transition-colors duration-300">
        {/* Top Window Header */}
        <div className="flex items-center justify-between pb-4 mb-5 border-b border-surface-border/70">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500/70" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/70" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/70" />
            <span className="ml-2 text-xs font-mono text-starlight-muted hidden sm:inline">
              arch.telemetry // autonomous-runtime.ts
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-night-850 border border-surface-border text-[10px] font-mono text-starlight-muted">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>STABLE RUNTIME</span>
            </span>
          </div>
        </div>

        {/* Node Pipeline Diagram */}
        <div className="space-y-3">
          {nodes.map((node) => {
            const isActive = activeNode === node.id;
            return (
              <div
                key={node.id}
                onClick={() => setActiveNode(node.id)}
                className={`group cursor-pointer p-3.5 rounded-xl border transition-all duration-300 ${
                  isActive
                    ? "bg-night-850/90 border-moon-border shadow-moon-soft"
                    : "bg-night-950/40 border-surface-border/60 hover:border-surface-border hover:bg-night-850/40"
                }`}
              >
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2.5">
                    <div
                      className={`p-2 rounded-lg border transition-colors ${
                        isActive
                          ? "bg-night-800 border-moon-border text-moon-light"
                          : "bg-night-900 border-surface-border text-starlight-muted"
                      }`}
                    >
                      {node.icon}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs sm:text-sm font-semibold text-starlight-primary">
                          {node.title}
                        </span>
                        <span className="text-[10px] font-mono text-starlight-dim">
                          [node-0{node.id + 1}]
                        </span>
                      </div>
                      <p className="text-[11px] sm:text-xs text-starlight-muted mt-0.5">
                        {node.role}
                      </p>
                    </div>
                  </div>

                  <div className="text-right">
                    <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-night-900 border border-surface-border text-starlight-secondary block">
                      {node.metric}
                    </span>
                  </div>
                </div>

                {/* Expanded Inspection Telemetry */}
                {isActive && (
                  <motion.div
                    initial={shouldReduceMotion ? false : { opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    transition={{ duration: 0.25 }}
                    className="mt-3 pt-2.5 border-t border-surface-border/60 flex items-center justify-between text-[11px] font-mono text-starlight-secondary"
                  >
                    <span className="text-starlight-muted">Detail: {node.detail}</span>
                    <span className="text-moon-accent hidden sm:inline">Active telemetry</span>
                  </motion.div>
                )}
              </div>
            );
          })}
        </div>

        {/* Code / Architecture Snippet Footer */}
        <div className="mt-4 p-3 rounded-lg bg-night-950/90 border border-surface-border/60 font-mono text-[11px] text-starlight-muted leading-relaxed">
          <div className="flex items-center justify-between text-starlight-dim mb-1">
            <span>// Verified Engineering Stack</span>
            <span>Sri Shakthi CSE • 2nd Year</span>
          </div>
          <p className="text-starlight-secondary">
            <span className="text-moon-accent">const</span> parthiban = &#123; role: <span className="text-emerald-300">&quot;AI &amp; Full-Stack Eng&quot;</span>, focus: [<span className="text-starlight-primary">&quot;Agents&quot;</span>, <span className="text-starlight-primary">&quot;Systems&quot;</span>, <span className="text-starlight-primary">&quot;Hackathons&quot;</span>] &#125;;
          </p>
        </div>
      </div>
    </div>
  );
}
