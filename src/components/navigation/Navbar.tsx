"use client";

import React from "react";
import Image from "next/image";
import { motion, type Variants } from "framer-motion";

export function Navbar() {
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

      <div className="absolute top-0 right-0 p-2 sm:p-3 md:p-4 w-[70px] h-[64px] sm:w-[90px] sm:h-[81px] md:w-[120px] md:h-[108px]">
        <Image
          src="/images/moon1.png"
          alt="Moon Logo"
          fill
          priority
          sizes="(max-width: 768px) 90px, 120px"
          className="object-contain"
        />
      </div>
    </motion.nav>
  );
}
