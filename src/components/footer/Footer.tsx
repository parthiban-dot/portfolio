"use client";

import React from "react";
import { ArrowUp } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { GithubIcon } from "@/components/icons/SocialIcons";
import { Container } from "@/components/ui/Container";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-surface-border bg-night-950 py-12 relative z-10 text-xs text-starlight-muted font-mono">
      <Container size="wide">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand & Academic Note */}
          <div className="flex flex-col items-center md:items-start gap-1">
            <div className="flex items-center gap-2">
              <span className="font-semibold text-starlight-primary">
                {PORTFOLIO_DATA.personal.name}
              </span>
              <span className="text-starlight-dim">•</span>
              <span className="text-moon-accent">CSE Undergrad (2nd Year)</span>
            </div>
            <p className="text-starlight-muted text-center md:text-left">
              Sri Shakthi Institute of Engineering and Technology
            </p>
          </div>

          {/* Philosophy / Tech stack note & Repo link */}
          <div className="flex flex-col sm:flex-row items-center gap-3 text-center">
            <span>Engineered with Next.js 16 &amp; TypeScript</span>
            <span className="hidden sm:inline text-starlight-dim">•</span>
            <a
              href={PORTFOLIO_DATA.personal.socialLinks.repo}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-1.5 text-moon-accent hover:text-moon-light transition-colors"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>parthiban-dot/portfolio</span>
            </a>
          </div>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-night-900 border border-surface-border hover:border-surface-border-hover hover:text-starlight-primary transition-colors focus:outline-none"
            aria-label="Scroll back to top"
          >
            <span>Return to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="mt-8 pt-6 border-t border-surface-border flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] text-starlight-dim">
          <span>© {new Date().getFullYear()} Parthiban V. Built with nocturnal focus.</span>
          <span>Tamil Nadu, India • IST (UTC+5:30)</span>
        </div>
      </Container>
    </footer>
  );
}
