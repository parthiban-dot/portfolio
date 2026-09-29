"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, Mail, ArrowUpRight, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { GithubIcon, LinkedinIcon } from "@/components/icons/SocialIcons";
import { EngineeringVisual } from "./EngineeringVisual";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export function HeroSection() {
  const shouldReduceMotion = useReducedMotion();

  // Animation delay sequencing (Fast, crisp, total sequence under 700ms)
  const anim = (delay: number) => {
    if (shouldReduceMotion) return {};
    return {
      initial: { opacity: 0, y: 16 },
      animate: { opacity: 1, y: 0 },
      transition: {
        duration: 0.45,
        delay,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
      },
    };
  };

  const socialLinks = [
    {
      label: "LinkedIn",
      href: PORTFOLIO_DATA.personal.socialLinks.linkedin,
      icon: <LinkedinIcon className="w-3.5 h-3.5" />,
    },
    {
      label: "GitHub",
      href: PORTFOLIO_DATA.personal.socialLinks.github,
      icon: <GithubIcon className="w-3.5 h-3.5" />,
    },
    {
      label: "Email",
      href: `mailto:${PORTFOLIO_DATA.personal.socialLinks.email}`,
      icon: <Mail className="w-3.5 h-3.5" />,
    },
  ];

  return (
    <section className="relative min-h-[90vh] flex items-center pt-28 sm:pt-32 pb-16 sm:pb-24 overflow-hidden">
      <Container size="wide">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* ================================================== */}
          {/* LEFT: TEXT, POSITIONING, CTAs & SOCIALS */}
          {/* ================================================== */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Step 2: Small label fades in */}
            <motion.div {...anim(0.1)} className="max-w-full">
              <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 py-1.5 rounded-xl sm:rounded-full bg-night-900 border border-surface-border text-[11px] sm:text-xs font-mono text-starlight-secondary mb-6 backdrop-blur-sm shadow-sm max-w-full">
                <span className="w-1.5 h-1.5 rounded-full bg-moon-accent animate-pulse shrink-0" />
                <span className="truncate max-w-[200px] sm:max-w-none">Sri Shakthi Inst. of Engg &amp; Tech</span>
                <span className="text-starlight-dim hidden xs:inline">•</span>
                <span className="text-moon-accent font-medium">2nd Year CSE</span>
              </div>
            </motion.div>

            {/* Step 3: Main message heading reveals */}
            <motion.h1
              {...anim(0.2)}
              className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-starlight-primary leading-[1.15] mb-4 break-words"
            >
              Hey, I&apos;m{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-starlight-primary via-moon-light to-moon-accent">
                Parthiban.
              </span>
            </motion.h1>

            {/* Step 4: Supporting positioning */}
            <motion.div {...anim(0.3)}>
              <p className="text-xs sm:text-base md:text-lg font-mono text-moon-accent tracking-tight mb-4">
                AI Engineering • Full-Stack Development • Hackathon Enthusiast
              </p>
            </motion.div>

            {/* Step 4 (cont): Strong short introduction */}
            <motion.p
              {...anim(0.38)}
              className="text-sm sm:text-base md:text-lg text-starlight-secondary font-normal leading-relaxed max-w-2xl mb-8"
            >
              I&apos;m a Computer Science and Engineering student focused on building intelligent systems, useful products, and real-world solutions.
            </motion.p>

            {/* Step 5: CTA buttons */}
            <motion.div
              {...anim(0.48)}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mb-8 w-full sm:w-auto"
            >
              <Button
                href="#projects"
                variant="primary"
                size="md"
                rightIcon={<ArrowDown className="w-4 h-4" />}
                className="w-full sm:w-auto min-h-[44px] justify-center"
              >
                View My Work
              </Button>

              <Button
                href="#contact"
                variant="secondary"
                size="md"
                rightIcon={<ArrowUpRight className="w-4 h-4 text-starlight-muted" />}
                className="w-full sm:w-auto min-h-[44px] justify-center"
              >
                Let&apos;s Connect
              </Button>
            </motion.div>

            {/* Step 5 (cont): Actual Social Links */}
            <motion.div
              {...anim(0.55)}
              className="pt-6 border-t border-surface-border/60 w-full flex flex-wrap items-center gap-4 text-xs font-mono text-starlight-muted"
            >
              <span className="text-starlight-dim">Channels:</span>
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="group inline-flex items-center gap-1.5 text-starlight-secondary hover:text-moon-light transition-colors duration-200"
                >
                  <span className="group-hover:text-moon-accent transition-colors">
                    {social.icon}
                  </span>
                  <span>{social.label}</span>
                </a>
              ))}
            </motion.div>
          </div>

          {/* ================================================== */}
          {/* RIGHT: HERO VISUAL (Step 6 subtly animates) */}
          {/* ================================================== */}
          <div className="lg:col-span-5 w-full">
            <motion.div
              {...anim(0.5)}
              className="w-full flex items-center justify-center lg:justify-end"
            >
              <EngineeringVisual />
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
}
