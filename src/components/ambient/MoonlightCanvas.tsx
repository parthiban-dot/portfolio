"use client";

import React, { useEffect, useRef } from "react";

export function MoonlightCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initStars();
    };

    window.addEventListener("resize", handleResize);

    interface Star {
      x: number;
      y: number;
      radius: number;
      alpha: number;
      targetAlpha: number;
      speed: number;
    }

    let stars: Star[] = [];

    const initStars = () => {
      stars = [];
      const starCount = Math.floor((width * height) / 8000); // Gentle density
      for (let i = 0; i < starCount; i++) {
        const alpha = Math.random() * 0.7 + 0.15;
        stars.push({
          x: Math.random() * width,
          y: Math.random() * height,
          radius: Math.random() * 1.1 + 0.4,
          alpha,
          targetAlpha: alpha,
          speed: Math.random() * 0.005 + 0.002,
        });
      }
    };

    initStars();

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Render subtle stars
      for (let i = 0; i < stars.length; i++) {
        const star = stars[i];

        if (!prefersReducedMotion) {
          // Twinkle logic
          star.alpha += (star.targetAlpha - star.alpha) * star.speed;
          if (Math.abs(star.targetAlpha - star.alpha) < 0.03) {
            star.targetAlpha = Math.random() * 0.7 + 0.15;
          }
        }

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(226, 232, 255, ${star.alpha.toFixed(3)})`;
        ctx.fill();
      }

      if (!prefersReducedMotion) {
        animationFrameId = requestAnimationFrame(render);
      }
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {/* Dynamic Starfield Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 block w-full h-full opacity-60" />

      {/* Atmospheric Lunar Glow Gradients */}
      <div 
        className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[900px] h-[500px] rounded-full blur-[140px] pointer-events-none opacity-25"
        style={{
          background: "radial-gradient(ellipse at center, rgba(255, 237, 194, 0.18) 0%, rgba(161, 138, 255, 0.06) 45%, transparent 70%)"
        }}
      />

      {/* Subtle bottom horizon mist */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-[350px] pointer-events-none opacity-20"
        style={{
          background: "linear-gradient(to top, rgba(14, 18, 30, 0.8) 0%, transparent 100%)"
        }}
      />
    </div>
  );
}
