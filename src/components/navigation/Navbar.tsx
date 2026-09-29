"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Container } from "@/components/ui/Container";

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
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Journey", href: "#journey" },
    { label: "Contact", href: "#contact" },
  ];

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
            <span className="w-2 h-2 rounded-full bg-moon-accent opacity-80 group-hover:scale-125 transition-transform" />
            <span className="text-sm font-semibold tracking-wider uppercase text-starlight-primary group-hover:text-moon-light transition-colors font-mono">
              PARTHIBAN V
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-xs font-medium text-starlight-secondary hover:text-moon-light transition-colors duration-200 tracking-wide focus:outline-none"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Trigger */}
          <div className="flex items-center md:hidden">
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

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-night-950/95 backdrop-blur-xl border-b border-surface-border px-6 pt-3 pb-6 animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col space-y-3 mt-2">
            {navLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium text-starlight-secondary hover:text-moon-light py-1.5 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
