"use client";

import React from "react";

interface AtmosphereProps {
  showGrid?: boolean;
}

export function Atmosphere({ showGrid = true }: AtmosphereProps) {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {/* Deep Zenith Moonlight Gradient — Subtle, static, zero CPU overhead */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] sm:w-[1200px] h-[500px] pointer-events-none opacity-40"
        style={{
          background: "radial-gradient(ellipse at 50% 0%, rgba(212, 229, 255, 0.08) 0%, rgba(126, 170, 235, 0.02) 40%, transparent 70%)",
        }}
      />

      {/* Very subtle architectural hairline grid overlay */}
      {showGrid && (
        <div className="absolute inset-0 bg-night-grid opacity-40 pointer-events-none" />
      )}
    </div>
  );
}
