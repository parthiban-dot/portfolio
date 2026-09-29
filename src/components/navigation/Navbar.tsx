"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Arsenal", href: "#arsenal" },
    { label: "Journey", href: "#journey" },
    { label: "Console", href: "#console" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-night-950/85 backdrop-blur-md border-b border-surface-border py-3 shadow-[0_4px_24px_rgba(0,0,0,0.6)]"
          : "bg-transparent py-5"
      }`}
    >
      <Container size="wide">
        <div className="flex items-center justify-between">
          {/* Brand Monogram */}
          <Link
            href="#"
            className="group flex items-center gap-3 text-starlight-primary transition-colors focus:outline-none focus:ring-1 focus:ring-moon-accent/40 rounded-sm"
          >
            <div className="w-8 h-8 rounded-full border border-surface-border bg-night-850 flex items-center justify-center group-hover:border-moon-border group-hover:shadow-moon-soft transition-all duration-300">
              <span className="text-xs font-mono font-bold tracking-wider text-moon-accent">PV</span>
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-semibold tracking-tight text-starlight-primary group-hover:text-moon-light transition-colors">
                {PORTFOLIO_DATA.personal.name}
              </span>
              <span className="text-[11px] font-mono text-starlight-muted tracking-tight">
                AI &amp; Full-Stack Eng.
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 bg-night-900/70 border border-surface-border rounded-full px-4 py-1.5 backdrop-blur-sm">
            {navLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="px-3 py-1 text-xs font-medium text-starlight-secondary hover:text-starlight-primary hover:bg-night-850 rounded-full transition-all duration-200 focus:outline-none focus:text-moon-light"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Availability Pill & Contact CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-night-900 border border-surface-border text-starlight-secondary text-[11px] font-mono">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
              </span>
              <span>Available for Hire</span>
            </div>

            <Button
              href="#contact"
              variant="primary"
              size="sm"
              rightIcon={<ArrowUpRight className="w-3.5 h-3.5" />}
            >
              Get in touch
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
            <Button href="#contact" variant="primary" size="sm">
              Contact
            </Button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 rounded-md text-starlight-secondary hover:text-starlight-primary hover:bg-night-850 focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </Container>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-night-950/95 backdrop-blur-xl border-b border-surface-border px-5 pt-3 pb-6 animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col space-y-2 mt-2">
            <div className="flex items-center gap-2 px-3 py-2 rounded bg-night-900 border border-surface-border text-xs font-mono text-starlight-secondary mb-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              Available for Freelance &amp; Engineering
            </div>
            {navLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm font-medium text-starlight-secondary hover:text-starlight-primary hover:bg-night-850 rounded-md transition-colors"
              >
                {item.label}
              </a>
            ))}
            <div className="pt-3 border-t border-surface-border flex justify-between items-center text-xs font-mono text-starlight-muted">
              <span>Sri Shakthi Institute of Eng.</span>
              <span>2nd Year CSE</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
