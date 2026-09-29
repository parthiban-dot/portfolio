"use client";

import React, { useState, useEffect } from "react";
import { Terminal, Play, RotateCcw, Check, Sparkles, Cpu, ShieldAlert, Layers } from "lucide-react";

interface Step {
  stage: string;
  message: string;
  tool?: string;
  status: "pending" | "executing" | "complete";
  durationMs: number;
}

const PRESET_PROMPTS = [
  {
    title: "Orchestrate RAG Pipeline",
    query: "Build an evaluation harness comparing dense embeddings vs BM25 keyword matching for technical documentation.",
    steps: [
      { stage: "Planner", message: "Parsing query context & identifying retrieval constraints...", status: "complete", durationMs: 140 },
      { stage: "Router", message: "Selected Dual-Engine Strategy: HuggingFace MiniLM + SQLite FTS5", tool: "route_strategy", status: "complete", durationMs: 220 },
      { stage: "Chunker", message: "AST-aware semantic token chunking executed (512 tokens / 64 overlap)", tool: "ast_tree_sitter", status: "complete", durationMs: 310 },
      { stage: "Benchmarker", message: "Measured MRR@10: Hybrid Search yielded 0.89 vs 0.71 baseline.", tool: "eval_metric", status: "complete", durationMs: 190 },
      { stage: "Telemetry", message: "Latency: 28ms | Memory footprint: 14.2MB | Precision Score: 94.2%", status: "complete", durationMs: 80 },
    ],
  },
  {
    title: "Hackathon MVP Scaffold",
    query: "Generate full-stack contract for time-slot booking engine with Next.js Server Actions & Prisma.",
    steps: [
      { stage: "Architect", message: "Deriving deterministic database schema with ACID guarantees...", status: "complete", durationMs: 110 },
      { stage: "Contract", message: "Generating TypeScript strict interface definitions & Zod validators", tool: "zod_schema_gen", status: "complete", durationMs: 260 },
      { stage: "Safety Check", message: "Verified double-booking race condition prevention via row-level locks", tool: "postgres_tx_guard", status: "complete", durationMs: 340 },
      { stage: "Artifact", message: "Production-ready Server Action emitted with optimistic UI states.", status: "complete", durationMs: 150 },
    ],
  },
  {
    title: "Autonomous Tool Sandbox",
    query: "Safely execute shell script in isolated container and verify memory bounds.",
    steps: [
      { stage: "Inspector", message: "Inspecting abstract command syntax tree for malicious escape sequences...", tool: "ast_static_scan", status: "complete", durationMs: 180 },
      { stage: "Sandbox", message: "Spawning isolated cgroup with 128MB RAM limit & read-only root", tool: "sandbox_cgroup", status: "complete", durationMs: 420 },
      { stage: "Execution", message: "Subprocess completed with Exit Code 0 in 46ms. Zero network leaks.", status: "complete", durationMs: 160 },
    ],
  },
];

export function AgentConsole() {
  const [selectedPresetIndex, setSelectedPresetIndex] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [currentStepIndex, setCurrentStepIndex] = useState(PRESET_PROMPTS[0].steps.length);
  const [customInput, setCustomInput] = useState(PRESET_PROMPTS[0].query);

  const activePreset = PRESET_PROMPTS[selectedPresetIndex];

  const handleRunSimulation = (index: number) => {
    setSelectedPresetIndex(index);
    setCustomInput(PRESET_PROMPTS[index].query);
    setIsRunning(true);
    setCurrentStepIndex(0);
  };

  useEffect(() => {
    if (!isRunning) return;

    if (currentStepIndex < activePreset.steps.length) {
      const stepDuration = activePreset.steps[currentStepIndex].durationMs;
      const timer = setTimeout(() => {
        setCurrentStepIndex((prev) => prev + 1);
      }, stepDuration * 2); // Comfortable simulation pace
      return () => clearTimeout(timer);
    } else {
      setIsRunning(false);
    }
  }, [isRunning, currentStepIndex, activePreset]);

  return (
    <section id="console" className="py-24 px-4 sm:px-6 lg:px-8 relative border-t border-night-800/80">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col items-start max-w-2xl mb-12">
          <div className="flex items-center gap-2 text-moon-amber text-xs font-mono tracking-wider uppercase mb-2">
            <Cpu className="w-3.5 h-3.5" />
            <span>Interactive Demo</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-starlight-primary">
            Autonomous Agent Sandbox
          </h2>
          <p className="mt-2 text-sm sm:text-base text-starlight-secondary">
            Experience how my agent runtimes deconstruct ambiguous human instructions into deterministic tool calls, state validation, and telemetry.
          </p>
        </div>

        {/* Console Container */}
        <div className="rounded-xl bg-night-900 border border-night-700 shadow-2xl overflow-hidden">
          {/* Terminal Window Header Bar */}
          <div className="px-4 py-3 bg-night-850 border-b border-night-750 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-rose-500/70"></div>
              <div className="w-3 h-3 rounded-full bg-amber-500/70"></div>
              <div className="w-3 h-3 rounded-full bg-emerald-500/70"></div>
              <span className="ml-2 text-xs font-mono text-starlight-muted hidden sm:inline">
                parthiban@aether-runtime:~
              </span>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-night-800 text-moon-amber border border-night-700">
                DAG Simulator v2.4
              </span>
            </div>
          </div>

          {/* Preset Buttons */}
          <div className="p-4 bg-night-900/90 border-b border-night-800 flex flex-wrap gap-2 items-center">
            <span className="text-xs font-mono text-starlight-muted mr-1">Select Workflow:</span>
            {PRESET_PROMPTS.map((preset, idx) => (
              <button
                key={preset.title}
                onClick={() => handleRunSimulation(idx)}
                disabled={isRunning}
                className={`px-3 py-1.5 rounded text-xs font-mono transition-all ${
                  selectedPresetIndex === idx
                    ? "bg-night-800 text-moon-light border border-night-600 shadow-sm"
                    : "text-starlight-secondary hover:text-starlight-primary hover:bg-night-850"
                }`}
              >
                {preset.title}
              </button>
            ))}

            <button
              onClick={() => handleRunSimulation(selectedPresetIndex)}
              disabled={isRunning}
              className="w-full sm:w-auto sm:ml-auto inline-flex items-center justify-center gap-1.5 px-3.5 py-2 sm:py-1.5 rounded bg-moon-light hover:bg-moon-glow text-night-950 font-medium text-xs transition-all disabled:opacity-50 mt-1 sm:mt-0 min-h-[38px]"
            >
              <Play className="w-3.5 h-3.5 fill-current" />
              <span>{isRunning ? "Executing..." : "Re-run Agent"}</span>
            </button>
          </div>

          {/* Terminal Body */}
          <div className="p-5 sm:p-6 font-mono text-xs sm:text-sm bg-night-950/80 min-h-[320px] flex flex-col justify-between">
            <div>
              {/* User Instruction Prompt */}
              <div className="mb-6 p-3 rounded bg-night-900/60 border border-night-800 flex items-start gap-2.5">
                <span className="text-moon-amber select-none font-bold">›</span>
                <div className="text-starlight-primary leading-relaxed">
                  <span className="text-starlight-muted text-xs block mb-1">Human Directive:</span>
                  &ldquo;{activePreset.query}&rdquo;
                </div>
              </div>

              {/* Step Telemetry Stream */}
              <div className="space-y-3">
                {activePreset.steps.slice(0, currentStepIndex).map((step, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-2.5 rounded bg-night-900/40 border border-night-800/80 animate-in fade-in slide-in-from-left-2 duration-150"
                  >
                    <div className="flex flex-wrap sm:flex-nowrap items-start sm:items-center gap-2">
                      <span className="text-emerald-400 shrink-0 mt-0.5 sm:mt-0">
                        <Check className="w-4 h-4" />
                      </span>
                      <span className="text-moon-light font-semibold shrink-0">
                        [{step.stage}]
                      </span>
                      <span className="text-starlight-secondary break-words">
                        {step.message}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 text-[11px] text-starlight-muted self-end sm:self-auto shrink-0">
                      {step.tool && (
                        <span className="px-1.5 py-0.5 rounded bg-night-800 border border-night-700 text-violet-glow">
                          tool:{step.tool}
                        </span>
                      )}
                      <span>+{step.durationMs}ms</span>
                    </div>
                  </div>
                ))}

                {/* Active processing indicator */}
                {isRunning && (
                  <div className="flex items-center gap-2 p-2.5 text-xs text-moon-amber animate-pulse">
                    <span className="w-2 h-2 rounded-full bg-moon-amber"></span>
                    <span>Decomposing plan graph &amp; evaluating safety policies...</span>
                  </div>
                )}
              </div>
            </div>

            {/* Bottom Status Line */}
            <div className="mt-8 pt-4 border-t border-night-850 flex flex-wrap items-center justify-between text-xs text-starlight-muted gap-2">
              <div className="flex items-center gap-3">
                <span className="flex items-center gap-1.5">
                  <span className={`w-2 h-2 rounded-full ${isRunning ? "bg-amber-400 animate-ping" : "bg-emerald-400"}`}></span>
                  {isRunning ? "Agent State: Running" : "Agent State: Stable & Verified"}
                </span>
                <span>•</span>
                <span>Deterministic Mode</span>
              </div>
              <span>Parthiban V AI Orchestration Architecture</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
