"use client";

import React from "react";
import Image from "next/image";
import { motion, type Variants } from "framer-motion";

interface NavbarProps {
  isDayMode?: boolean;
  toggleDayMode?: () => void;
}

export function Navbar({ isDayMode, toggleDayMode }: NavbarProps) {
  const navVariants: Variants = {
    hidden: { opacity: 0, y: -30 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <motion.nav
      className="w-full relative py-4 md:py-6 h-[100px] z-50"
      variants={navVariants}
      initial="hidden"
      animate="show"
    >
      <h3 className="text-[#E6E6F1] text-[20px] sm:text-[24px] md:text-[28px] font-semibold leading-[28px] sm:leading-[32px] md:leading-[36px] tracking-[0em] uppercase absolute top-4 left-0 md:top-5 md:left-0 pl-4 md:pl-6">
        PARTHIBAN
      </h3>

      <div 
        onClick={toggleDayMode}
        className="absolute top-2 right-4 p-2 sm:p-3 md:p-4 w-[60px] h-[60px] sm:w-[80px] sm:h-[80px] md:w-[90px] md:h-[90px] cursor-pointer group"
        title="Toggle Day/Night Mode"
      >
        {isDayMode ? (
          <div className="absolute inset-[-15%] pointer-events-none mix-blend-screen flex items-center justify-center transition-transform duration-700 group-hover:scale-110">
            <Image
              src="/images/sun.jpg"
              alt="Sun Logo"
              fill
              priority
              sizes="120px"
              className="object-cover"
              style={{
                WebkitMaskImage: "radial-gradient(circle at center, black 35%, transparent 60%)",
                maskImage: "radial-gradient(circle at center, black 35%, transparent 60%)"
              }}
            />
          </div>
        ) : (
          <Image
            src="/images/moon1.png"
            alt="Moon Logo"
            fill
            priority
            sizes="(max-width: 768px) 80px, 90px"
            className="object-contain transition-all duration-700 group-hover:scale-110 group-hover:brightness-125 group-hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]"
          />
        )}
      </div>
    </motion.nav>
  );
}
