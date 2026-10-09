
"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ResumeDrifterProps {
  isDayMode?: boolean;
}

export function ResumeDrifter({ isDayMode }: ResumeDrifterProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <div className={`absolute z-20 pointer-events-auto flex items-center justify-center ${isDayMode ? "kite-hover" : "rocket-hover"}`}>
        {/* Hover trigger & item wrapper */}
        <a 
          href="/Parthiban_V_Resume.pdf"
          download="Parthiban_V_Resume.pdf"
          className="relative group flex items-center justify-center cursor-pointer"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* SVG for Rocket or Kite */}
          <div className={`relative w-16 h-16 sm:w-20 sm:h-20 ${isDayMode ? "rotate-[-10deg]" : "rotate-[45deg]"}`}>
            {isDayMode ? (
              <img src="/images/kite.png" alt="Kite" className="w-full h-full object-contain drop-shadow-[0_4px_12px_rgba(255,255,255,0.4)]" />
            ) : (
              <img src="/images/rocket.png" alt="Rocket" className="w-full h-full object-contain drop-shadow-[0_0_15px_rgba(0,229,255,0.3)]" />
            )}
            
            {/* Resume Text Badge */}
            <div className={`absolute ${isDayMode ? "bottom-[-20px] left-[50%] -translate-x-1/2" : "bottom-[-20px] left-[-20px] -rotate-[45deg]"} bg-[#10121B] border border-white/20 text-white text-[10px] sm:text-xs font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider shadow-[0_0_10px_rgba(255,255,255,0.2)]`}>
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
                className={`absolute top-full mt-8 left-1/2 -translate-x-1/2 w-[220px] h-[300px] ${isDayMode ? "bg-white/80 border-[#3B82F6]/50 shadow-[0_0_30px_rgba(59,130,246,0.2)] text-[#03040A]" : "bg-[#10121B]/90 border-[#A18AFF]/50 shadow-[0_0_30px_rgba(161,143,255,0.4)] text-[#E6E6F1]"} backdrop-blur-md border rounded-xl overflow-hidden z-50 flex flex-col pointer-events-none`}
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
        .rocket-hover {
          animation: hoverInPlace 4s ease-in-out infinite alternate;
        }
        .kite-hover {
          animation: hoverInPlace 3s ease-in-out infinite alternate;
        }
        @keyframes hoverInPlace {
          0% { transform: translateY(-10px); }
          100% { transform: translateY(10px); }
        }
      `}</style>
    </>
  );
}

