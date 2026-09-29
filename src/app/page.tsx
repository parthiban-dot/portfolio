"use client";

import React from "react";
import { Atmosphere } from "@/components/ui/Atmosphere";
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/footer/Footer";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { SkillBadge } from "@/components/ui/SkillBadge";
import { SocialLinks } from "@/components/ui/SocialLinks";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { Reveal } from "@/components/ui/Reveal";
import { AnimatedText } from "@/components/ui/AnimatedText";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import {
  Sparkles,
  ArrowRight,
  Terminal,
  Layers,
  Cpu,
  Shield,
  Palette,
  Eye,
  Zap,
} from "lucide-react";

export default function Phase1DesignSystemPage() {
  const sampleProject = PORTFOLIO_DATA.projects[0];

  const socialItems = [
    { platform: "github" as const, href: PORTFOLIO_DATA.personal.socialLinks.github, label: "GitHub" },
    { platform: "linkedin" as const, href: PORTFOLIO_DATA.personal.socialLinks.linkedin, label: "LinkedIn" },
    { platform: "instagram" as const, href: PORTFOLIO_DATA.personal.socialLinks.instagram, label: "Instagram" },
    { platform: "email" as const, href: `mailto:${PORTFOLIO_DATA.personal.socialLinks.email}`, label: "Email" },
  ];

  return (
    <div className="relative min-h-screen bg-night-950 text-starlight-primary selection:bg-moon-accent/20 selection:text-white">
      {/* Background Atmosphere: Subtle Starlight & Zenith Moonlight Mist */}
      <Atmosphere showGrid={true} />

      {/* Reusable Navbar */}
      <Navbar />

      <main className="relative z-10 pt-32 pb-24 space-y-28">
        {/* ================================================== */}
        {/* HERO / SPECIFICATION OVERVIEW */}
        {/* ================================================== */}
        <Container size="default">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
            <Reveal type="fade-down" delay={0.1}>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-night-900 border border-surface-border text-xs font-mono text-moon-accent mb-6 shadow-sm">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Phase 1 — Design System &amp; Visual Identity</span>
              </div>
            </Reveal>

            {/* Typography: Hero Scale */}
            <div className="mb-4">
              <AnimatedText
                text="Architecting the Visual Language for Parthiban V"
                as="h1"
                className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-starlight-primary justify-center text-center"
              />
            </div>

            <Reveal type="fade-up" delay={0.2}>
              <p className="mt-4 text-base sm:text-lg text-starlight-secondary font-normal leading-relaxed max-w-2xl">
                A cinematic dark foundation inspired by the calm clarity of the moonlight night. Built on disciplined contrast, generous spacing, restrained cool accents, and reusable atomic components.
              </p>
            </Reveal>

            <Reveal type="fade-up" delay={0.3}>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                <Button href="#colors" variant="primary" rightIcon={<ArrowRight className="w-4 h-4" />}>
                  Explore Tokens
                </Button>
                <Button href="#components" variant="secondary" leftIcon={<Layers className="w-4 h-4 text-moon-accent" />}>
                  View Components
                </Button>
              </div>
            </Reveal>
          </div>
        </Container>

        {/* ================================================== */}
        {/* 1. COLOR & SURFACE SYSTEM */}
        {/* ================================================== */}
        <Container id="colors" size="default">
          <Reveal type="fade-up">
            <SectionHeading
              tag="Color Tokens"
              tagIcon={<Palette className="w-3.5 h-3.5" />}
              title="Restrained Moonlight Palette"
              description="Deep midnight backgrounds, stepped dark surfaces, high-contrast off-white text, and cool silver-moonlight accents. No neon purple or oversaturated glows."
            />
          </Reveal>

          <Reveal type="scale-in" delay={0.1}>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3.5">
              {/* Primary Background */}
              <div className="p-4 rounded-xl bg-night-950 border border-surface-border flex flex-col justify-between h-32 shadow-surface-card">
                <div>
                  <span className="text-xs font-mono text-starlight-muted block">Canvas</span>
                  <span className="text-sm font-semibold text-starlight-primary">night-950</span>
                </div>
                <span className="text-xs font-mono text-starlight-dim">#030508</span>
              </div>

              {/* Surface 1 */}
              <div className="p-4 rounded-xl bg-night-900 border border-surface-border flex flex-col justify-between h-32 shadow-surface-card">
                <div>
                  <span className="text-xs font-mono text-starlight-muted block">Surface 1</span>
                  <span className="text-sm font-semibold text-starlight-primary">night-900</span>
                </div>
                <span className="text-xs font-mono text-starlight-dim">#080B11</span>
              </div>

              {/* Surface 2 */}
              <div className="p-4 rounded-xl bg-night-850 border border-surface-border flex flex-col justify-between h-32 shadow-surface-card">
                <div>
                  <span className="text-xs font-mono text-starlight-muted block">Surface 2 / Card</span>
                  <span className="text-sm font-semibold text-starlight-primary">night-850</span>
                </div>
                <span className="text-xs font-mono text-starlight-dim">#0E121A</span>
              </div>

              {/* Surface 3 */}
              <div className="p-4 rounded-xl bg-night-800 border border-surface-border flex flex-col justify-between h-32 shadow-surface-card">
                <div>
                  <span className="text-xs font-mono text-starlight-muted block">Surface 3 / Elevated</span>
                  <span className="text-sm font-semibold text-starlight-primary">night-800</span>
                </div>
                <span className="text-xs font-mono text-starlight-dim">#141824</span>
              </div>

              {/* Cool Moonlight Accent */}
              <div className="p-4 rounded-xl bg-night-900 border border-moon-border flex flex-col justify-between h-32 shadow-moon-soft">
                <div>
                  <span className="text-xs font-mono text-moon-accent block">Cool Accent</span>
                  <span className="text-sm font-semibold text-moon-light">moon-accent</span>
                </div>
                <span className="text-xs font-mono text-moon-accent">#D4E5FF</span>
              </div>
            </div>
          </Reveal>
        </Container>

        {/* ================================================== */}
        {/* 2. TYPOGRAPHY SCALE & HIERARCHY */}
        {/* ================================================== */}
        <Container size="default">
          <Reveal type="fade-up">
            <SectionHeading
              tag="Typography"
              tagIcon={<Terminal className="w-3.5 h-3.5" />}
              title="Clean Typographic Hierarchy"
              description="Modern sans-serif typography engineered for legibility across devices. Avoids excessive uppercase text and arbitrary font sizes."
            />
          </Reveal>

          <Reveal type="fade-up" delay={0.1}>
            <div className="p-6 sm:p-8 rounded-xl bg-night-900/60 border border-surface-border space-y-8 backdrop-blur-sm">
              <div className="pb-6 border-b border-surface-border/60">
                <span className="text-xs font-mono text-starlight-muted block mb-2">Display / Hero (36px - 60px)</span>
                <p className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-starlight-primary">
                  Engineering Autonomous Intelligence.
                </p>
              </div>

              <div className="pb-6 border-b border-surface-border/60">
                <span className="text-xs font-mono text-starlight-muted block mb-2">Section Heading (24px - 36px)</span>
                <p className="text-2xl sm:text-3xl font-bold tracking-tight text-starlight-primary">
                  Selected Engineering Systems &amp; RAG Architecture
                </p>
              </div>

              <div className="pb-6 border-b border-surface-border/60">
                <span className="text-xs font-mono text-starlight-muted block mb-2">Body Text (15px - 16px)</span>
                <p className="text-sm sm:text-base text-starlight-secondary font-normal leading-relaxed max-w-3xl">
                  Computer Science undergraduate at Sri Shakthi Institute of Engineering and Technology. Grounding theoretical AI foundations in deterministically observable agents and robust web systems.
                </p>
              </div>

              <div>
                <span className="text-xs font-mono text-starlight-muted block mb-2">Metadata &amp; Monospace (11px - 13px)</span>
                <p className="text-xs font-mono text-starlight-muted">
                  AUTH_TYPE: ED25519 • RUNTIME: NEXTJS_TURBOPACK • STATUS: VERIFIED
                </p>
              </div>
            </div>
          </Reveal>
        </Container>

        {/* ================================================== */}
        {/* 3. BUTTON SYSTEM & INTERACTIONS */}
        {/* ================================================== */}
        <Container id="components" size="default">
          <Reveal type="fade-up">
            <SectionHeading
              tag="Interactive Elements"
              tagIcon={<Zap className="w-3.5 h-3.5" />}
              title="Button &amp; Control Variants"
              description="Purpose-built interaction states with 200ms-300ms transitions, subtle scale feedback, and accessible focus rings."
            />
          </Reveal>

          <Reveal type="fade-up" delay={0.1}>
            <div className="p-6 sm:p-8 rounded-xl bg-night-900/60 border border-surface-border space-y-6 backdrop-blur-sm">
              <div className="flex flex-wrap items-center gap-3">
                <Button variant="primary" size="md">
                  Primary Button
                </Button>
                <Button variant="secondary" size="md">
                  Secondary Surface
                </Button>
                <Button variant="outline" size="md">
                  Outline Subtle
                </Button>
                <Button variant="ghost" size="md">
                  Ghost Minimal
                </Button>
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-surface-border/60">
                <span className="text-xs font-mono text-starlight-muted mr-2">Sizes:</span>
                <Button variant="secondary" size="sm">Small (sm)</Button>
                <Button variant="secondary" size="md">Medium (md)</Button>
                <Button variant="secondary" size="lg">Large (lg)</Button>
              </div>
            </div>
          </Reveal>
        </Container>

        {/* ================================================== */}
        {/* 4. REUSABLE PROJECT CARD & SURFACE SYSTEM */}
        {/* ================================================== */}
        <Container size="default">
          <Reveal type="fade-up">
            <SectionHeading
              tag="Surfaces"
              tagIcon={<Shield className="w-3.5 h-3.5" />}
              title="Refined Card Surfaces"
              description="Cards avoid generic dashboard aesthetics through stepped dark tones, hairline borders, soft shadow depths, and subtle hover elevation."
            />
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Reveal type="slide-in" delay={0.1}>
              <ProjectCard project={sampleProject} />
            </Reveal>

            <Reveal type="slide-in" delay={0.2}>
              <ProjectCard
                project={{
                  ...sampleProject,
                  id: "neuro-flow-sample",
                  title: "NeuroFlow Visual Canvas",
                  category: "AI Engineering",
                  tagline: "Visual DAG evaluation canvas for RAG embedding benchmarks.",
                  description: "Allows engineers to visually compose document loaders, chunking thresholds, and compare dense vs sparse similarity metrics in real time.",
                  status: "Completed",
                  techStack: ["Next.js", "React Flow", "TypeScript", "Tailwind CSS", "ChromaDB"],
                }}
              />
            </Reveal>
          </div>
        </Container>

        {/* ================================================== */}
        {/* 5. SKILL BADGES & SOCIAL LINKS */}
        {/* ================================================== */}
        <Container size="default">
          <Reveal type="fade-up">
            <SectionHeading
              tag="Atomic Components"
              tagIcon={<Eye className="w-3.5 h-3.5" />}
              title="Skill Badges &amp; Social Links"
              description="Consistent chips and channel links designed with restrained moonlight highlights."
            />
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Skill Badges Matrix */}
            <div className="p-6 rounded-xl bg-night-900/60 border border-surface-border space-y-4">
              <span className="text-xs font-mono text-starlight-muted block">SkillBadge Variants</span>
              <div className="flex flex-wrap gap-2">
                <SkillBadge name="Autonomous Agents" variant="accent" dot={true} />
                <SkillBadge name="Next.js 16" variant="default" />
                <SkillBadge name="TypeScript" variant="default" />
                <SkillBadge name="LangGraph" variant="default" />
                <SkillBadge name="Python" variant="subtle" />
                <SkillBadge name="Tailwind CSS" variant="default" />
              </div>
            </div>

            {/* Social Links Matrix */}
            <div className="p-6 rounded-xl bg-night-900/60 border border-surface-border space-y-4">
              <span className="text-xs font-mono text-starlight-muted block">SocialLinks (Pill Variant)</span>
              <SocialLinks items={socialItems} variant="pill" />

              <span className="text-xs font-mono text-starlight-muted block pt-3">SocialLinks (Icon Variant)</span>
              <SocialLinks items={socialItems} variant="icon" />
            </div>
          </div>
        </Container>

        {/* ================================================== */}
        {/* 6. ANIMATION SYSTEM DEMO */}
        {/* ================================================== */}
        <Container size="default">
          <Reveal type="fade-up">
            <SectionHeading
              tag="Motion Patterns"
              tagIcon={<Zap className="w-3.5 h-3.5" />}
              title="Predictable Easing &amp; Reveals"
              description="Four reusable animation primitives that execute between 300ms-600ms without perpetual distracting movement."
            />
          </Reveal>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <Reveal type="fade-up" delay={0.05}>
              <div className="p-5 rounded-lg bg-night-900/70 border border-surface-border text-center">
                <span className="text-xs font-mono text-moon-accent block mb-1">01</span>
                <span className="text-sm font-semibold text-starlight-primary">fade-up</span>
              </div>
            </Reveal>

            <Reveal type="fade-in" delay={0.1}>
              <div className="p-5 rounded-lg bg-night-900/70 border border-surface-border text-center">
                <span className="text-xs font-mono text-moon-accent block mb-1">02</span>
                <span className="text-sm font-semibold text-starlight-primary">fade-in</span>
              </div>
            </Reveal>

            <Reveal type="slide-in" delay={0.15}>
              <div className="p-5 rounded-lg bg-night-900/70 border border-surface-border text-center">
                <span className="text-xs font-mono text-moon-accent block mb-1">03</span>
                <span className="text-sm font-semibold text-starlight-primary">slide-in</span>
              </div>
            </Reveal>

            <Reveal type="scale-in" delay={0.2}>
              <div className="p-5 rounded-lg bg-night-900/70 border border-surface-border text-center">
                <span className="text-xs font-mono text-moon-accent block mb-1">04</span>
                <span className="text-sm font-semibold text-starlight-primary">scale-in</span>
              </div>
            </Reveal>
          </div>
        </Container>
      </main>

      {/* Reusable Footer */}
      <Footer />
    </div>
  );
}
