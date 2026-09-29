"use client";

import React, { useState, useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

export type AnimationType = "fade-up" | "fade-down" | "fade-in" | "slide-in" | "scale-in";

interface RevealProps {
  children: React.ReactNode;
  type?: AnimationType;
  delay?: number;
  duration?: number;
  className?: string;
  viewportMargin?: string;
}

export function Reveal({
  children,
  type = "fade-up",
  delay = 0,
  duration = 0.5,
  className,
  viewportMargin = "-50px",
}: RevealProps) {
  const shouldReduceMotion = useReducedMotion();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted || shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  const variants = {
    "fade-up": {
      hidden: { opacity: 0, y: 16 },
      visible: { opacity: 1, y: 0 },
    },
    "fade-down": {
      hidden: { opacity: 0, y: -16 },
      visible: { opacity: 1, y: 0 },
    },
    "fade-in": {
      hidden: { opacity: 0 },
      visible: { opacity: 1 },
    },
    "slide-in": {
      hidden: { opacity: 0, x: -16 },
      visible: { opacity: 1, x: 0 },
    },
    "scale-in": {
      hidden: { opacity: 0, scale: 0.97 },
      visible: { opacity: 1, scale: 1 },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: viewportMargin }}
      variants={variants[type]}
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
      }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
