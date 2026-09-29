"use client";

import React, { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";

export function CursorGlow() {
  const shouldReduceMotion = useReducedMotion();
  const [mounted, setMounted] = useState(false);
  const [pos, setPos] = useState({ x: -1000, y: -1000 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Only run on fine-pointer devices (desktop mice/trackpads)
    const isFinePointer = window.matchMedia("(pointer: fine)").matches;
    if (!isFinePointer || shouldReduceMotion) {
      return;
    }

    setMounted(true);

    let rafId: number;
    let targetX = -1000;
    let targetY = -1000;
    let currentX = -1000;
    let currentY = -1000;

    const handleMouseMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
      if (!visible) setVisible(true);
    };

    const handleMouseLeave = () => {
      setVisible(false);
    };

    const loop = () => {
      // Gentle damping interpolation (lerp)
      currentX += (targetX - currentX) * 0.12;
      currentY += (targetY - currentY) * 0.12;

      setPos({ x: currentX, y: currentY });
      rafId = requestAnimationFrame(loop);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);
    rafId = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(rafId);
    };
  }, [shouldReduceMotion, visible]);

  if (!mounted || shouldReduceMotion) return null;

  return (
    <div
      aria-hidden="true"
      className="fixed pointer-events-none z-[1] transition-opacity duration-500 ease-out"
      style={{
        left: `${pos.x}px`,
        top: `${pos.y}px`,
        transform: "translate(-50%, -50%)",
        opacity: visible ? 1 : 0,
      }}
    >
      <div 
        className="w-[420px] h-[420px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(212, 229, 255, 0.035) 0%, rgba(212, 229, 255, 0.008) 45%, transparent 70%)",
        }}
      />
    </div>
  );
}
