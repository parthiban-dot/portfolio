"use client";

import React, { useState, ChangeEvent, FormEvent } from "react";
import { 
  Mail, 
  Copy, 
  Check, 
  Send, 
  ArrowUpRight, 
  Sparkles, 
  Clock, 
  MapPin, 
  AlertCircle, 
  MessageSquare,
  CheckCircle2
} from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { GithubIcon, LinkedinIcon, InstagramIcon } from "@/components/icons/SocialIcons";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export function ContactSection() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [copiedMessage, setCopiedMessage] = useState(false);

  const targetEmail = PORTFOLIO_DATA.personal.socialLinks.email;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(targetEmail);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Please enter your name.";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Please write a brief message or project brief.";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear field-specific error as user types
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    /* 
      AUTHENTIC SUBMISSION DISPATCH:
      No fake simulated API responses.
      Directly launches the client's preferred mail program populated with structured details,
      and provides immediate fallback copy options for webmail users (Gmail / Outlook Web).
      
      INTEGRATION POINT FOR BACKEND:
      If you connect Resend, Formspree, or a Next.js Server Action in the future,
      replace the mailto trigger below with:
      await fetch('/api/contact', { method: 'POST', body: JSON.stringify(formData) })
    */
    const subject = encodeURIComponent(`Portfolio Inquiry from ${formData.name}`);
    const bodyContent = `Hi Parthiban,\n\n${formData.message}\n\n---\nSender: ${formData.name}\nEmail: ${formData.email}\nSent via Portfolio Contact Portal`;
    const mailtoUrl = `mailto:${targetEmail}?subject=${subject}&body=${encodeURIComponent(bodyContent)}`;

    window.location.href = mailtoUrl;
    setFormSubmitted(true);
  };

  const handleCopyFormattedMessage = () => {
    const textToCopy = `To: ${targetEmail}\nSubject: Portfolio Inquiry from ${formData.name}\n\nHi Parthiban,\n\n${formData.message}\n\nFrom: ${formData.name} (${formData.email})`;
    navigator.clipboard.writeText(textToCopy);
    setCopiedMessage(true);
    setTimeout(() => setCopiedMessage(false), 3000);
  };

  return (
    <section id="contact" className="py-28 px-4 sm:px-6 lg:px-8 relative border-t border-night-800/80 bg-night-950 overflow-hidden">
      {/* Subtle Moonlight Aura Backdrop */}
      <div 
        aria-hidden="true" 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-tr from-moon-accent/10 via-night-900/40 to-transparent rounded-full blur-[140px] pointer-events-none" 
      />

      <Container size="default" className="relative z-10">
        <Reveal>
          {/* Main Headline & Supporting Copy */}
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-night-900 border border-surface-border text-moon-accent text-xs font-mono mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Get In Touch</span>
            </div>

            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-starlight-primary">
              Let&apos;s build something meaningful.
            </h2>

            <p className="mt-4 text-base sm:text-lg text-starlight-secondary leading-relaxed">
              Have an idea, project, or problem worth solving? Let&apos;s talk.
            </p>
          </div>
        </Reveal>

        {/* Content Layout: Form & Telemetry Channels */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <Reveal delay={100}>
              <div className="rounded-2xl border border-white/[0.08] bg-surface-1/90 backdrop-blur-xl p-6 sm:p-8 shadow-2xl relative">
                <div className="flex items-center justify-between pb-5 mb-6 border-b border-white/[0.06]">
                  <div className="flex items-center gap-2.5">
                    <MessageSquare className="w-4 h-4 text-moon-accent" />
                    <span className="text-sm font-semibold text-white">Send Direct Message</span>
                  </div>
                  <span className="text-xs font-mono text-starlight-muted">
                    Direct Email Gateway
                  </span>
                </div>

                {formSubmitted ? (
                  <div className="py-8 text-center space-y-4 animate-in fade-in zoom-in-95 duration-300">
                    <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mx-auto text-emerald-400">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-lg font-semibold text-white">Email Client Triggered</h3>
                      <p className="text-xs text-starlight-muted max-w-md mx-auto leading-relaxed">
                        Your default mail application has been prompted with your message pre-filled for <strong className="text-starlight-primary">{targetEmail}</strong>.
                      </p>
                    </div>

                    <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                      <button
                        type="button"
                        onClick={handleCopyFormattedMessage}
                        className="w-full sm:w-auto px-4 py-2.5 rounded-lg text-xs font-mono font-medium bg-surface-2 hover:bg-surface-3 border border-white/10 text-starlight-primary transition-colors flex items-center justify-center gap-2"
                      >
                        {copiedMessage ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-emerald-400" />
                            <span>Message Copied to Clipboard</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5 text-moon-accent" />
                            <span>Copy Composed Message</span>
                          </>
                        )}
                      </button>

                      <button
                        type="button"
                        onClick={() => {
                          setFormSubmitted(false);
                          setFormData({ name: "", email: "", message: "" });
                        }}
                        className="w-full sm:w-auto px-4 py-2.5 rounded-lg text-xs font-mono text-starlight-muted hover:text-white transition-colors"
                      >
                        Send Another Note
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate className="space-y-5">
                    {/* Name Field */}
                    <div>
                      <label htmlFor="name" className="block text-xs font-mono text-starlight-secondary mb-1.5">
                        Your Name <span className="text-moon-accent">*</span>
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Alex Rivera"
                        className={`w-full px-4 py-3 rounded-lg text-sm bg-surface-2 text-white placeholder-starlight-muted/50 border transition-all focus:outline-none focus:ring-1 ${
                          errors.name 
                            ? "border-red-500/80 focus:ring-red-400" 
                            : "border-white/[0.08] focus:border-moon-accent/60 focus:ring-moon-accent/40"
                        }`}
                        aria-invalid={!!errors.name}
                        aria-describedby={errors.name ? "name-error" : undefined}
                      />
                      {errors.name && (
                        <p id="name-error" className="mt-1 text-xs text-red-400 flex items-center gap-1 font-mono">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.name}</span>
                        </p>
                      )}
                    </div>

                    {/* Email Field */}
                    <div>
                      <label htmlFor="email" className="block text-xs font-mono text-starlight-secondary mb-1.5">
                        Your Email <span className="text-moon-accent">*</span>
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="e.g. alex@company.com"
                        className={`w-full px-4 py-3 rounded-lg text-sm bg-surface-2 text-white placeholder-starlight-muted/50 border transition-all focus:outline-none focus:ring-1 ${
                          errors.email 
                            ? "border-red-500/80 focus:ring-red-400" 
                            : "border-white/[0.08] focus:border-moon-accent/60 focus:ring-moon-accent/40"
                        }`}
                        aria-invalid={!!errors.email}
                        aria-describedby={errors.email ? "email-error" : undefined}
                      />
                      {errors.email && (
                        <p id="email-error" className="mt-1 text-xs text-red-400 flex items-center gap-1 font-mono">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.email}</span>
                        </p>
                      )}
                    </div>

                    {/* Message Field */}
                    <div>
                      <label htmlFor="message" className="block text-xs font-mono text-starlight-secondary mb-1.5">
                        Message or Project Scope <span className="text-moon-accent">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell me about the problem you want to solve, tech requirements, or hackathon collaboration..."
                        className={`w-full px-4 py-3 rounded-lg text-sm bg-surface-2 text-white placeholder-starlight-muted/50 border transition-all focus:outline-none focus:ring-1 resize-none ${
                          errors.message 
                            ? "border-red-500/80 focus:ring-red-400" 
                            : "border-white/[0.08] focus:border-moon-accent/60 focus:ring-moon-accent/40"
                        }`}
                        aria-invalid={!!errors.message}
                        aria-describedby={errors.message ? "message-error" : undefined}
                      />
                      {errors.message && (
                        <p id="message-error" className="mt-1 text-xs text-red-400 flex items-center gap-1 font-mono">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.message}</span>
                        </p>
                      )}
                    </div>

                    {/* Submit Button */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        className="w-full py-3.5 px-6 rounded-lg font-medium text-sm font-mono text-night-950 bg-moon-accent hover:bg-white transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(212,229,255,0.15)] hover:shadow-[0_0_30px_rgba(212,229,255,0.25)] active:scale-[0.99]"
                      >
                        <Send className="w-4 h-4" />
                        <span>Send Message</span>
                      </button>
                    </div>

                    <p className="text-[11px] text-center text-starlight-muted font-mono">
                      Submitting triggers direct mailto client or provides one-click copy fallback. Zero spam.
                    </p>
                  </form>
                )}
              </div>
            </Reveal>
          </div>

          {/* Right Column: Channels, Quick Copy & Status Telemetry */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Quick Email Copy Card */}
            <Reveal delay={150}>
              <div className="rounded-2xl border border-white/[0.08] bg-surface-1/90 backdrop-blur-xl p-6 sm:p-7 shadow-xl">
                <div className="flex items-center gap-2 text-xs font-mono text-moon-accent mb-2">
                  <Mail className="w-3.5 h-3.5" />
                  <span>DIRECT INBOX</span>
                </div>
                
                <h3 className="text-base font-semibold text-white mb-1">
                  vinayagamparthiban07@gmail.com
                </h3>
                <p className="text-xs text-starlight-muted mb-4 leading-relaxed">
                  Fastest way to get in touch for projects, hackathons, or engineering inquiries.
                </p>

                <div className="flex flex-col sm:flex-row items-center gap-2.5">
                  <a
                    href={`mailto:${targetEmail}`}
                    className="w-full sm:w-auto flex-1 px-4 py-2.5 rounded-lg bg-surface-2 hover:bg-surface-3 border border-white/10 text-white text-xs font-mono flex items-center justify-center gap-2 transition-colors"
                  >
                    <Mail className="w-3.5 h-3.5 text-moon-accent" />
                    <span>Open Email App</span>
                  </a>

                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="w-full sm:w-auto px-4 py-2.5 rounded-lg bg-surface-2 hover:bg-surface-3 border border-white/10 text-xs font-mono text-starlight-primary transition-colors flex items-center justify-center gap-2"
                  >
                    {copiedEmail ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-starlight-muted" />
                        <span>Copy Address</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </Reveal>

            {/* Verified Social Channels */}
            <Reveal delay={200}>
              <div className="rounded-2xl border border-white/[0.08] bg-surface-1/90 backdrop-blur-xl p-6 shadow-xl">
                <div className="text-xs font-mono uppercase text-starlight-muted tracking-wider mb-4 pb-3 border-b border-white/[0.06]">
                  Verified Profiles &amp; Networks
                </div>

                <div className="space-y-2.5">
                  {/* LinkedIn */}
                  <a
                    href={PORTFOLIO_DATA.personal.socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between p-3 rounded-lg bg-surface-2/60 hover:bg-surface-2 border border-white/[0.06] hover:border-white/15 transition-all"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-white/[0.04] flex items-center justify-center text-starlight-secondary group-hover:text-moon-accent transition-colors">
                        <LinkedinIcon className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-medium text-white group-hover:text-moon-accent transition-colors">
                          LinkedIn
                        </div>
                        <div className="text-[11px] font-mono text-starlight-muted">
                          parthi-xii-581493376
                        </div>
                      </div>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-starlight-muted group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>

                  {/* GitHub */}
                  <a
                    href={PORTFOLIO_DATA.personal.socialLinks.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between p-3 rounded-lg bg-surface-2/60 hover:bg-surface-2 border border-white/[0.06] hover:border-white/15 transition-all"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-white/[0.04] flex items-center justify-center text-starlight-secondary group-hover:text-moon-accent transition-colors">
                        <GithubIcon className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-medium text-white group-hover:text-moon-accent transition-colors">
                          GitHub
                        </div>
                        <div className="text-[11px] font-mono text-starlight-muted">
                          parthiban-dot
                        </div>
                      </div>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-starlight-muted group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>

                  {/* Instagram */}
                  <a
                    href={PORTFOLIO_DATA.personal.socialLinks.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between p-3 rounded-lg bg-surface-2/60 hover:bg-surface-2 border border-white/[0.06] hover:border-white/15 transition-all"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-white/[0.04] flex items-center justify-center text-starlight-secondary group-hover:text-moon-accent transition-colors">
                        <InstagramIcon className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-medium text-white group-hover:text-moon-accent transition-colors">
                          Instagram
                        </div>
                        <div className="text-[11px] font-mono text-starlight-muted">
                          its_.prince._here
                        </div>
                      </div>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-starlight-muted group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                </div>
              </div>
            </Reveal>

            {/* Quick Context & Location */}
            <Reveal delay={250}>
              <div className="p-4 rounded-xl border border-white/[0.06] bg-surface-2/30 flex items-center justify-between text-xs font-mono text-starlight-muted">
                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-moon-accent" />
                  <span>Coimbatore, India</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5 text-emerald-400" />
                  <span>IST (UTC+5:30)</span>
                </div>
              </div>
            </Reveal>

          </div>
        </div>

        {/* ================================================== */}
        {/* FINAL CTA — Natural, Commanding Ending to Portfolio */}
        {/* ================================================== */}
        <div className="mt-20">
          <Reveal delay={300}>
            <div className="relative rounded-2xl border border-moon-accent/20 bg-gradient-to-b from-surface-2/80 via-surface-1/90 to-night-950 p-8 sm:p-12 text-center overflow-hidden shadow-2xl">
              {/* Subtle Ambient Radial Light Ray */}
              <div 
                aria-hidden="true" 
                className="absolute top-0 left-1/2 -translate-x-1/2 w-80 h-32 bg-moon-accent/15 rounded-full blur-3xl pointer-events-none" 
              />

              <div className="relative z-10 max-w-xl mx-auto space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 text-xs font-mono">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Open for AI Engineering, Full-Stack &amp; Hackathon Collaborations</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  Ready to start a conversation?
                </h3>

                <p className="text-xs sm:text-sm text-starlight-muted leading-relaxed">
                  Whether you have an upcoming hackathon, an innovative AI agent challenge, or a full-stack product to ship — let&apos;s build with precision.
                </p>

                <div className="pt-3 flex flex-wrap items-center justify-center gap-3">
                  <a
                    href={`mailto:${targetEmail}?subject=Collaboration%20Inquiry`}
                    className="px-6 py-3 rounded-lg text-xs font-mono font-medium text-night-950 bg-moon-accent hover:bg-white transition-all shadow-[0_0_20px_rgba(212,229,255,0.15)] hover:shadow-[0_0_30px_rgba(212,229,255,0.3)] active:scale-[0.98] inline-flex items-center gap-2"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    <span>Drop a Line Directly</span>
                  </a>

                  <a
                    href={PORTFOLIO_DATA.personal.socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-3 rounded-lg text-xs font-mono text-starlight-primary bg-surface-2 hover:bg-surface-3 border border-white/10 transition-colors inline-flex items-center gap-2"
                  >
                    <LinkedinIcon className="w-3.5 h-3.5" />
                    <span>Connect on LinkedIn</span>
                    <ArrowUpRight className="w-3 h-3 text-starlight-muted" />
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

      </Container>
    </section>
  );
}
