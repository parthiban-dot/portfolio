"use client";

import React from "react";
import { motion, type Variants } from "framer-motion";
import { Terminal, Sparkles, MapPin, GraduationCap } from "lucide-react";

export function AboutSection() {
  const containerVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="min-h-screen flex items-center justify-center py-20 px-4">
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="flex flex-col-reverse items-center text-center gap-8 lg:flex-row lg:items-center lg:text-left lg:gap-[100px] xl:gap-[137px]">
          
          {/* Left: Custom Developer Visual Portrait Card */}
          <motion.div
            className="w-[260px] h-[300px] sm:w-[280px] sm:h-[320px] md:w-[320px] md:h-[370px] relative rounded-md overflow-hidden bg-[#10121B] border border-[#3F4454] shadow-2xl flex flex-col justify-between p-6 group hover:border-[#A18AFF] transition-colors duration-300"
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            {/* Top Bar */}
            <div className="flex items-center justify-between text-xs font-mono text-[#81859C]">
              <span className="flex items-center gap-1.5 text-[#FFEDC2]">
                <Terminal className="w-3.5 h-3.5" />
                <span>parthiban.profile</span>
              </span>
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
            </div>

            {/* Central Artistic Element: Minimalist Monogram / Moon Silhouette */}
            <div className="flex flex-col items-center justify-center my-auto">
              <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-[#FFDFAF]/20 via-[#10121B] to-[#A18AFF]/30 border border-[#3F4454] flex items-center justify-center shadow-[0_0_20px_rgba(255,223,175,0.15)] group-hover:scale-105 transition-transform duration-300">
                <span className="text-3xl font-extrabold text-[#E6E6F1] font-mono tracking-tighter">
                  PV
                </span>
              </div>
              <span className="mt-3 text-xs font-mono text-[#FFDFAF] tracking-wider uppercase">
                AI &amp; Full-Stack
              </span>
            </div>

            {/* Bottom Meta */}
            <div className="pt-3 border-t border-[#3F4454]/60 space-y-1 text-[11px] font-mono text-[#B0B3C5]">
              <div className="flex items-center justify-between">
                <span className="text-[#81859C]">College:</span>
                <span className="text-[#E6E6F1]">Sri Shakthi Inst.</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[#81859C]">Status:</span>
                <span className="text-emerald-400">2nd Year CSE</span>
              </div>
            </div>
          </motion.div>

          {/* Right: Narrative Description */}
          <motion.div
            className="max-w-xl"
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2 className="text-[#E6E6F1] text-3xl sm:text-4xl md:text-4xl lg:text-4xl font-semibold mb-6">
              About Me
            </h2>

            <p className="text-[#B0B3C5] text-left text-sm sm:text-base md:text-[15px] lg:text-base leading-6 mb-6">
              I’m Parthiban — a 2nd year Computer Science and Engineering student at Sri Shakthi Institute of Engineering and Technology, dedicated to building intelligent systems and intuitive web experiences.
            </p>

            <p className="text-[#B0B3C5] text-left text-sm sm:text-base md:text-[15px] lg:text-base leading-6 mb-6">
              I approach every project with clarity and care, transforming concepts into high-performance, robust software. By focusing on clean architecture, practical problem-solving, and seamless user experience, I ensure every detail works together to create something impactful and memorable.
            </p>

            <p className="text-[#FFEDC2] italic text-left text-sm sm:text-base md:text-[15px] lg:text-base leading-6">
              I am also the founder of the DRACARYS technology team, created to bring ambitious students together for competitive hackathons, collaborative codebases, and real-world engineering.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
