"use client";

import React, { useState } from "react";
import { Mail, Copy, Check, Sparkles, ArrowUpRight } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { GithubIcon, LinkedinIcon, XTwitterIcon } from "@/components/icons/SocialIcons";

export function ContactSection() {
  const [copied, setCopied] = useState(false);
  const email = PORTFOLIO_DATA.personal.socialLinks.email;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 relative border-t border-night-800/80">
      <div className="max-w-5xl mx-auto">
        {/* Contact Banner Card */}
        <div className="rounded-2xl bg-gradient-to-b from-night-900 via-night-900/90 to-night-950 border border-night-700/80 p-8 sm:p-12 md:p-16 text-center relative overflow-hidden shadow-2xl">
          {/* Subtle Ambient Moon Ray */}
          <div 
            className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full pointer-events-none opacity-20"
            style={{
              background: "radial-gradient(circle, rgba(255, 237, 194, 0.25) 0%, transparent 70%)"
            }}
          />

          <div className="relative z-10 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-night-800 border border-night-700 text-moon-amber text-xs font-mono mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Direct Inquiries &amp; Collaborations</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-starlight-primary">
              Let&apos;s Build Something Intelligent.
            </h2>

            <p className="mt-4 text-sm sm:text-base text-starlight-secondary leading-relaxed">
              Whether you need an autonomous AI workflow, a robust full-stack web application, a hackathon collaborator, or a dedicated freelance developer — my inbox is open.
            </p>

            {/* Email Action Bar */}
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={`mailto:${email}`}
                className="w-full sm:w-auto px-6 py-3.5 rounded-lg bg-moon-light hover:bg-moon-glow text-night-950 font-semibold text-sm transition-all duration-200 flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(255,237,194,0.15)] active:scale-95"
              >
                <Mail className="w-4 h-4" />
                <span>Send Direct Email</span>
              </a>

              <button
                onClick={handleCopyEmail}
                className="w-full sm:w-auto px-5 py-3.5 rounded-lg bg-night-850 hover:bg-night-800 border border-night-700 hover:border-night-600 text-starlight-primary text-sm font-mono transition-all flex items-center justify-center gap-2 active:scale-95"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span className="text-emerald-400">Email Copied to Clipboard</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-moon-amber" />
                    <span>Copy: {email}</span>
                  </>
                )}
              </button>
            </div>

            {/* Response Time & Details */}
            <p className="mt-4 text-xs font-mono text-starlight-muted">
              Average response time: &lt; 24 hours • Location: Tamil Nadu, India (IST / UTC+5:30)
            </p>

            {/* Social Channels */}
            <div className="mt-10 pt-8 border-t border-night-800/80 flex flex-wrap items-center justify-center gap-4">
              <a
                href={PORTFOLIO_DATA.personal.socialLinks.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-night-850/60 border border-night-750 text-starlight-secondary hover:text-starlight-primary hover:border-night-600 transition-colors text-xs font-mono"
              >
                <GithubIcon className="w-4 h-4" />
                <span>GitHub</span>
                <ArrowUpRight className="w-3 h-3 text-starlight-muted" />
              </a>

              <a
                href={PORTFOLIO_DATA.personal.socialLinks.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-night-850/60 border border-night-750 text-starlight-secondary hover:text-starlight-primary hover:border-night-600 transition-colors text-xs font-mono"
              >
                <LinkedinIcon className="w-4 h-4" />
                <span>LinkedIn</span>
                <ArrowUpRight className="w-3 h-3 text-starlight-muted" />
              </a>

              <a
                href={PORTFOLIO_DATA.personal.socialLinks.twitter}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-night-850/60 border border-night-750 text-starlight-secondary hover:text-starlight-primary hover:border-night-600 transition-colors text-xs font-mono"
              >
                <XTwitterIcon className="w-4 h-4" />
                <span>Twitter / X</span>
                <ArrowUpRight className="w-3 h-3 text-starlight-muted" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
