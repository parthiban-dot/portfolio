"use client";

import React from "react";
import Link from "next/link";
import { ArrowUp } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { GithubIcon, LinkedinIcon, InstagramIcon } from "@/components/icons/SocialIcons";
import { Container } from "@/components/ui/Container";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Journey", href: "#journey" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <footer className="border-t border-surface-border bg-night-950 py-12 relative z-10 text-starlight-muted">
      <Container size="wide">
        {/* Main Footer Row */}
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8 pb-10 border-b border-surface-border">
          
          {/* Identity & Positioning */}
          <div className="space-y-2 text-center md:text-left">
            <Link 
              href="#" 
              className="text-base font-bold tracking-wider uppercase text-starlight-primary hover:text-white transition-colors font-mono inline-block"
            >
              PARTHIBAN V
            </Link>
            <p className="text-xs sm:text-sm text-starlight-secondary font-medium tracking-tight">
              AI Engineering • Full-Stack Development • Building Real-World Solutions
            </p>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-wrap items-center justify-center gap-6 text-xs font-mono">
            {navLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-starlight-secondary hover:text-moon-accent transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href={PORTFOLIO_DATA.personal.socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-lg bg-surface-2 hover:bg-surface-3 border border-surface-border hover:border-white/20 text-starlight-secondary hover:text-white transition-colors flex items-center justify-center"
              aria-label="GitHub Profile"
            >
              <GithubIcon className="w-4 h-4" />
            </a>

            <a
              href={PORTFOLIO_DATA.personal.socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-lg bg-surface-2 hover:bg-surface-3 border border-surface-border hover:border-white/20 text-starlight-secondary hover:text-white transition-colors flex items-center justify-center"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>

            <a
              href={PORTFOLIO_DATA.personal.socialLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-lg bg-surface-2 hover:bg-surface-3 border border-surface-border hover:border-white/20 text-starlight-secondary hover:text-white transition-colors flex items-center justify-center"
              aria-label="Instagram Profile"
            >
              <InstagramIcon className="w-4 h-4" />
            </a>
          </div>

        </div>

        {/* Bottom Minimal Copyright & Return to Top */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-starlight-muted">
          <div>
            © {currentYear} Parthiban V. All rights reserved.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 hover:text-starlight-primary transition-colors focus:outline-none"
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </Container>
    </footer>
  );
}
