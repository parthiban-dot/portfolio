"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Container } from "@/components/ui/Container";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Journey", href: "#journey" },
    { label: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Scrollspy active section detection
      const sections = ["about", "skills", "projects", "dracarys", "journey", "contact"];
      const scrollPosition = window.scrollY + 160;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            // Map dracarys to projects in the navbar highlight
            setActiveSection(sectionId === "dracarys" ? "projects" : sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-night-950/85 backdrop-blur-md border-b border-surface-border py-3 shadow-[0_4px_20px_rgba(0,0,0,0.6)]"
          : "bg-transparent py-4 sm:py-5"
      }`}
    >
      <Container size="wide">
        <div className="flex items-center justify-between">
          {/* Brand Left: PARTHIBAN V */}
          <Link
            href="#"
            className="group flex items-center gap-2.5 text-starlight-primary transition-colors focus:outline-none focus:ring-1 focus:ring-moon-accent/40 rounded-sm"
          >
            <span className="w-2 h-2 rounded-full bg-moon-accent opacity-80 group-hover:scale-125 transition-transform duration-200" />
            <span className="text-sm font-semibold tracking-wider uppercase text-starlight-primary group-hover:text-moon-light transition-colors font-mono">
              PARTHIBAN V
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((item) => {
              const isActive = activeSection === item.href.slice(1);
              return (
                <a
                  key={item.label}
                  href={item.href}
                  className={`relative px-3.5 py-1.5 rounded-full text-xs font-mono font-medium transition-all duration-200 tracking-wide focus:outline-none ${
                    isActive
                      ? "text-white bg-white/[0.06] border border-white/[0.08]"
                      : "text-starlight-secondary hover:text-moon-light hover:bg-white/[0.02]"
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span 
                      aria-hidden="true"
                      className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-3 h-0.5 bg-moon-accent rounded-full shadow-[0_0_8px_rgba(212,229,255,0.8)]"
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Mobile Menu Trigger */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 rounded-md text-starlight-secondary hover:text-starlight-primary hover:bg-night-850 focus:outline-none transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </Container>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-night-950/95 backdrop-blur-xl border-b border-surface-border px-6 pt-3 pb-6 animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col space-y-2 mt-2">
            {navLinks.map((item) => {
              const isActive = activeSection === item.href.slice(1);
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-sm font-medium py-2 px-3 rounded-lg font-mono transition-colors flex items-center justify-between ${
                    isActive
                      ? "text-white bg-white/[0.06]"
                      : "text-starlight-secondary hover:text-moon-light hover:bg-white/[0.02]"
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-moon-accent" />}
                </a>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
}
