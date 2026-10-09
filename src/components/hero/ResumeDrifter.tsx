
"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ResumeDrifterProps {
  isDayMode?: boolean;
}

export function ResumeDrifter({ isDayMode }: ResumeDrifterProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="absolute z-20 w-full h-full pointer-events-none overflow-hidden"
      style={{ top: 0, left: 0 }}
    >
      <div className={`drifter-container ${isDayMode ? "kite-path" : "rocket-path"} absolute pointer-events-auto`}>
        
        {/* Hover trigger & item wrapper */}
        <a 
          href="/Parthiban_V_Resume.pdf"
          download="Parthiban_V_Resume.pdf"
          className="relative group flex items-center justify-center cursor-pointer"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* SVG for Rocket or Kite */}
          <div className="relative w-16 h-16 sm:w-20 sm:h-20 animate-wiggle">
            {isDayMode ? (
              /* Kite SVG */
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 84" fill="none" className="w-full h-full drop-shadow-[0_4px_12px_rgba(255,255,255,0.4)]">
                <path d="M32 4L48 24L32 52L16 24L32 4Z" fill="#F43F5E" />
                <path d="M32 4L48 24L32 52L32 4Z" fill="#E11D48" />
                <path d="M32 52 Q 40 60, 32 68 T 32 84" stroke="#F1F5F9" strokeWidth="1.5" fill="none" strokeDasharray="3 3"/>
                <path d="M32 60 L 36 62 L 32 64 Z" fill="#3B82F6" />
                <path d="M32 72 L 28 74 L 32 76 Z" fill="#EAB308" />
              </svg>
            ) : (
              /* Rocket SVG */
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="none" className="w-full h-full drop-shadow-[0_0_15px_rgba(0,229,255,0.5)]">
                <path d="M44.5 19.5C44.5 19.5 48.5 25.5 48.5 33.5C48.5 35.5 48 39 48 39L54 45V50L45 48C45 48 42 47 38.5 47C35 47 32 48 32 48L23 50V45L29 39C29 39 28.5 35.5 28.5 33.5C28.5 25.5 32.5 19.5 32.5 19.5L38.5 10L44.5 19.5Z" fill="#E2E8F0"/>
                <path d="M38.5 10L44.5 19.5C44.5 19.5 48.5 25.5 48.5 33.5C48.5 35.5 48 39 48 39L54 45V50L45 48C45 48 42 47 38.5 47V10Z" fill="#CBD5E1"/>
                <circle cx="38.5" cy="30" r="4.5" fill="#03040A" stroke="#00E5FF" strokeWidth="2"/>
                <path d="M34.5 47.5L38.5 56L42.5 47.5" fill="#F59E0B"/>
                <path d="M36 47.5L38.5 53L41 47.5" fill="#FCD34D"/>
              </svg>
            )}
            
            {/* Resume Text Badge */}
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-black/60 backdrop-blur-sm border border-white/20 text-white text-[10px] sm:text-xs font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider shadow-lg">
              Resume
            </div>
          </div>

          {/* Hover Preview Card */}
          <AnimatePresence>
            {isHovered && (
              <motion.div
                initial={{ opacity: 0, y: 15, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 15, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className={`absolute top-full mt-6 left-1/2 -translate-x-1/2 w-[220px] h-[300px] ${isDayMode ? "bg-white/80 border-[#3B82F6]/50 shadow-[0_0_30px_rgba(59,130,246,0.2)] text-[#03040A]" : "bg-[#10121B]/90 border-[#A18AFF]/50 shadow-[0_0_30px_rgba(161,143,255,0.4)] text-[#E6E6F1]"} backdrop-blur-md border rounded-xl overflow-hidden z-50 flex flex-col pointer-events-none`}
              >
                <div className={`py-1.5 px-3 border-b flex items-center justify-between ${isDayMode ? "bg-[#3B82F6]/10 border-[#3B82F6]/30" : "bg-[#A18AFF]/20 border-[#A18AFF]/30"}`}>
                  <span className="text-xs font-medium">Resume Preview</span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3.5 h-3.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                  </svg>
                </div>
                <div className="flex-1 w-full h-full relative bg-white/5 p-2">
                  <iframe 
                    src="/Parthiban_V_Resume.pdf#toolbar=0&navpanes=0&scrollbar=0&view=FitH" 
                    className="w-full h-full rounded bg-white shadow-inner border border-black/10"
                    title="Resume Preview"
                  />
                  {/* Overlay to prevent iframe from intercepting mouse events and ruining hover */}
                  <div className="absolute inset-0 z-10 bg-transparent"></div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

        </a>
      </div>

      <style>{`
        .rocket-path {
          animation: floatRocket 30s ease-in-out infinite alternate;
        }
        .kite-path {
          animation: floatKite 30s ease-in-out infinite alternate;
        }
        /* Keep it floating relatively slow so user can catch it! */
        @keyframes floatRocket {
          0% { transform: translate(15vw, 60vh) rotate(20deg); }
          25% { transform: translate(35vw, 25vh) rotate(45deg); }
          50% { transform: translate(65vw, 50vh) rotate(70deg); }
          75% { transform: translate(80vw, 20vh) rotate(45deg); }
          100% { transform: translate(50vw, 75vh) rotate(0deg); }
        }
        @keyframes floatKite {
          0% { transform: translate(20vw, 15vh) rotate(-10deg); }
          33% { transform: translate(45vw, 35vh) rotate(5deg); }
          66% { transform: translate(75vw, 20vh) rotate(-5deg); }
          100% { transform: translate(60vw, 55vh) rotate(10deg); }
        }
        .animate-wiggle {
          animation: wiggle 3s ease-in-out infinite;
        }
        @keyframes wiggle {
          0%, 100% { transform: rotate(-5deg); }
          50% { transform: rotate(5deg); }
        }
      `}</style>
    </div>
  );
}

