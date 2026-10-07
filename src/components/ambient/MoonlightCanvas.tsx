"use client";

import React, { useEffect, useRef } from "react";

export function MoonlightCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Removed prefers-reduced-motion check to guarantee animation plays

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initStars();
    };

    const mouse = { x: -1000, y: -1000 };
    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseout", handleMouseLeave);

    interface Star {
      x: number;
      y: number;
      radius: number;
      alpha: number;
      targetAlpha: number;
      twinkleSpeed: number;
      vy: number; // Vertical velocity
      vx: number; // Horizontal velocity (for magnetic pull recovery)
      baseX: number; // Initial X
    }

    let stars: Star[] = [];

    const initStars = () => {
      stars = [];
      const starCount = Math.floor((width * height) / 4000); // Higher density
      for (let i = 0; i < starCount; i++) {
        const alpha = Math.random() * 0.8 + 0.2;
        const x = Math.random() * width;
        stars.push({
          x,
          baseX: x,
          y: Math.random() * height,
          radius: Math.random() * 1.5 + 0.5,
          alpha,
          targetAlpha: alpha,
          twinkleSpeed: Math.random() * 0.01 + 0.005,
          vy: Math.random() * 0.8 + 0.3, // Faster drift upwards
          vx: 0,
        });
      }
    };

    initStars();

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < stars.length; i++) {
        const star = stars[i];

        // Twinkle logic
        star.alpha += (star.targetAlpha - star.alpha) * star.twinkleSpeed;
        if (Math.abs(star.targetAlpha - star.alpha) < 0.05) {
          star.targetAlpha = Math.random() * 0.8 + 0.2;
        }

        // Magnetic Pull Logic
        const dx = mouse.x - star.x;
        const dy = mouse.y - star.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 140) {
          // Slight pull towards mouse
          star.vx += dx * 0.0001;
          star.vy -= dy * 0.0001; // counteract normal upwards velocity slightly
          
          // Draw Constellation Line
          ctx.beginPath();
          ctx.moveTo(star.x, star.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.strokeStyle = `rgba(161, 138, 255, ${0.4 - distance / 350})`; // subtle purple glow
          ctx.lineWidth = 0.6;
          ctx.stroke();
        } else {
          // Return to normal vertical flow
          star.vx *= 0.95; // dampen horizontal velocity
        }

        // Move stars
        star.x += star.vx;
        star.y -= Math.max(0.1, star.vy); // ensure it always moves up
        
        if (star.y < 0) {
          star.y = height;
          star.x = Math.random() * width;
          star.vx = 0;
        }

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${star.alpha.toFixed(3)})`;
        // Add a subtle glow to larger stars
        if (star.radius > 1.2) {
          ctx.shadowBlur = 4;
          ctx.shadowColor = "rgba(255, 255, 255, 0.8)";
        } else {
          ctx.shadowBlur = 0;
        }
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseout", handleMouseLeave);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {/* Dynamic Starfield Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 block w-full h-full opacity-100" />

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
