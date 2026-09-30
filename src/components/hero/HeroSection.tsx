"use client";

import React from "react";
import { motion, type Variants } from "framer-motion";

export function HeroSection() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        when: "beforeChildren",
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const scrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative w-full min-h-[calc(100vh-100px)] flex items-center justify-center">
      <motion.div
        className="flex flex-col items-center justify-center text-center px-4 max-w-5xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        <motion.h1
          variants={itemVariants}
          className="text-[#E6E6F1] text-3xl sm:text-5xl md:text-5xl font-bold"
        >
          Hey, I'm Parthiban
        </motion.h1>

        <motion.h2
          variants={itemVariants}
          className="mt-9 text-[#FFEDC2] text-lg sm:text-2xl md:text-4xl font-semibold px-2 sm:px-0"
        >
          The developer who brings ideas to life while the world sleeps.
        </motion.h2>

        <motion.p
          variants={itemVariants}
          className="mt-9 text-[#B0B3C5] text-xs sm:text-base md:text-lg italic px-2 sm:px-0 max-w-[95%] md:max-w-[70%]"
        >
          Fueled by passion, I'm a full-stack web developer, designer and also aspiring AI engineer who turns ideas into intuitive, high-performance web experiences — day or night.
        </motion.p>

        <motion.button
          variants={itemVariants}
          onClick={scrollToContact}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-12 px-7 py-3 bg-[#FFDFAF] text-[#03040A] font-medium text-base leading-6 tracking-[0.05em] hover:bg-[#FFEDC2] transition duration-300 cursor-pointer"
        >
          Contact me
        </motion.button>
      </motion.div>
    </div>
  );
}
