"use client";

import React, { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";

interface AtmosphereProps {
  showGrid?: boolean;
}

export function Atmosphere({ showGrid = false }: AtmosphereProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const onResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      populate();
    };

    window.addEventListener("resize", onResize);

    interface TinyStar {
      x: number;
      y: number;
      radius: number;
      alpha: number;
      speed: number;
      phase: number;
    }

    let stars: TinyStar[] = [];

    const populate = () => {
      stars = [];
      // Restrained, sparse density: 1 star per 12,000 sq px
      const count = Math.floor((width * height) / 12000);
      for (let i = 0; i < count; i++) {
        stars.push({
          x: Math.random() * width,
          y: Math.random() * height,
          radius: Math.random() * 0.9 + 0.3,
          alpha: Math.random() * 0.5 + 0.1,
          speed: Math.random() * 0.004 + 0.001,
          phase: Math.random() * Math.PI * 2,
        });
      }
    };

    populate();

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < stars.length; i++) {
        const star = stars[i];

        let currentAlpha = star.alpha;
        if (!shouldReduceMotion) {
          star.phase += star.speed;
          currentAlpha = star.alpha + Math.sin(star.phase) * 0.15;
        }

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(230, 235, 250, ${Math.max(0.05, Math.min(0.7, currentAlpha)).toFixed(3)})`;
        ctx.fill();
      }

      if (!shouldReduceMotion) {
        animId = requestAnimationFrame(draw);
      }
    };

    draw();

    return () => {
      window.removeEventListener("resize", onResize);
      if (animId) cancelAnimationFrame(animId);
    };
  }, [shouldReduceMotion]);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {/* Tiny celestial stars canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 block w-full h-full opacity-50" />

      {/* Very subtle moonlight radial glow from top zenith */}
      <div
        className="absolute -top-[150px] left-1/2 -translate-x-1/2 w-[700px] sm:w-[900px] h-[450px] rounded-full blur-[140px] pointer-events-none opacity-20"
        style={{
          background: "radial-gradient(ellipse at center, rgba(212, 229, 255, 0.22) 0%, rgba(126, 170, 235, 0.05) 50%, transparent 75%)",
        }}
      />

      {/* Subtle night grid overlay if enabled */}
      {showGrid && (
        <div className="absolute inset-0 bg-night-grid opacity-60 pointer-events-none" />
      )}
    </div>
  );
}
