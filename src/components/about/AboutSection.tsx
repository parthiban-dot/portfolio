"use client";

import React from "react";
import Image from "next/image";
import { motion, type Variants } from "framer-motion";

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
    <section id="about" className="min-h-screen flex items-center justify-center py-20 px-4">
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="flex flex-col-reverse items-center text-center gap-8 lg:flex-row lg:items-center lg:text-left lg:gap-[100px] xl:gap-[137px]">
          
          {/* Left: Portrait Photo */}
          <motion.div
            className="w-[260px] h-[300px] sm:w-[260px] sm:h-[300px] md:w-[300px] md:h-[350px] relative shrink-0"
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            <Image
              src="/images/parthiban.jpg"
              alt="Parthiban"
              fill
              className="rounded-md object-cover object-top"
              priority
            />
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
              I approach every project with clarity and care, transforming concepts into high-performance, robust software. Learning from What I Seek | A Growing AI Engineer | Computer Science Student | Building & Founder @ Dracarys | Certified Full Stack developer | Avg Chess player Nxt door !!
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
