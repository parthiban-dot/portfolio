"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { ResumeDrifter } from "./ResumeDrifter";

interface HeroSectionProps {
  isDayMode?: boolean;
}

export function HeroSection({ isDayMode = false }: HeroSectionProps) {
  const [wordIndex, setWordIndex] = useState(0);
  const words = ["ideas", "systems", "designs", "visions"];

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % words.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [words.length]);

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

  const handleContactClick = () => {
    const email = "vinayagamparthiban07@gmail.com";
    const subject = encodeURIComponent("Hello Parthiban!");
    const body = encodeURIComponent("Hi Parthiban,\n\nI came across your portfolio and would love to connect.");
    
    // Direct Gmail web compose link
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${subject}&body=${body}`;
    window.open(gmailUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="relative w-full min-h-[calc(100vh-100px)] flex items-center justify-center">
      {/* Positioned between Hero and About Me on the right side */}
      <div className="absolute bottom-[-40px] sm:bottom-0 right-[5%] sm:right-[10%] md:right-[15%] z-50">
        <ResumeDrifter isDayMode={isDayMode} />
      </div>

      <motion.div
        className="relative flex flex-col items-center justify-center text-center px-4 max-w-5xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        <motion.h1
          variants={itemVariants}
          className={`${isDayMode ? "text-[#03040A]" : "text-[#E6E6F1]"} text-3xl sm:text-5xl md:text-5xl font-bold transition-colors duration-500`}
        >
          Hey, I'm Parthiban
        </motion.h1>

        <motion.h2
          variants={itemVariants}
          className={`mt-9 ${isDayMode ? "text-[#475569]" : "text-[#FFEDC2]"} text-lg sm:text-2xl md:text-4xl font-semibold px-2 sm:px-0 leading-normal transition-colors duration-500`}
        >
          The developer who brings{" "}
          <span className={`relative inline-flex justify-center items-center min-w-[90px] sm:min-w-[120px] md:min-w-[150px] overflow-hidden h-[1.2em] align-bottom -mb-[0.1em] ${isDayMode ? "text-[#2563EB] drop-shadow-none" : "text-[#00E5FF] drop-shadow-[0_0_12px_rgba(0,229,255,0.8)]"} transition-colors duration-500`}>
            <AnimatePresence>
              <motion.span
                key={words[wordIndex]}
                initial={{ y: "100%", opacity: 0, rotateX: -90 }}
                animate={{ y: 0, opacity: 1, rotateX: 0 }}
                exit={{ y: "-100%", opacity: 0, rotateX: 90 }}
                transition={{ duration: 0.6, type: "spring", stiffness: 100, damping: 15 }}
                className="absolute"
              >
                {words[wordIndex]}
              </motion.span>
            </AnimatePresence>
          </span>{" "}
          to life while the world sleeps.
        </motion.h2>

        <motion.p
          variants={itemVariants}
          className={`mt-9 ${isDayMode ? "text-[#475569]" : "text-[#B0B3C5]"} text-xs sm:text-base md:text-lg italic px-2 sm:px-0 max-w-[95%] md:max-w-[70%] transition-colors duration-500`}
        >
          Fueled by passion, I'm a full-stack web developer, designer and also aspiring AI engineer who turns ideas into intuitive, high-performance web experiences — day or night.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="mt-12 flex flex-col sm:flex-row items-center gap-5"
        >
          <motion.button
            onClick={handleContactClick}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-7 py-3 ${isDayMode ? "bg-[#2563EB] text-white hover:bg-[#1D4ED8]" : "bg-[#FFDFAF] text-[#03040A] hover:bg-[#FFEDC2]"} font-medium text-base leading-6 tracking-[0.05em] transition duration-300 cursor-pointer`}
          >
            Contact me
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  );
}
