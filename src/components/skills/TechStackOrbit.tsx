"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

interface OrbitItem {
  name: string;
  icon: string;
}

interface TechStackOrbitProps {
  isDayMode?: boolean;
}

export function TechStackOrbit({ isDayMode }: TechStackOrbitProps) {
  const [windowWidth, setWindowWidth] = useState<number | null>(null);

  useEffect(() => {
    const update = () => setWindowWidth(window.innerWidth);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const innerStack: OrbitItem[] = [
    { name: "Next.js", icon: "/icons/next.svg" },
    { name: "FastAPI", icon: "/icons/fastapi.svg" },
    { name: "Python", icon: "/icons/python.svg" },
    { name: "React.js", icon: "/icons/react.svg" },
  ];

  const outerStack: OrbitItem[] = [
    { name: "TypeScript", icon: "/icons/typescript.svg" },
    { name: "JavaScript", icon: "/icons/javascript.svg" },
    { name: "C++", icon: "/icons/cpp.svg" },
    { name: "SQL", icon: "/icons/sql.svg" },
    { name: "Tailwind CSS", icon: "/icons/tailwind.svg" },
    { name: "HTML5", icon: "/icons/Html.svg" },
    { name: "CSS3", icon: "/icons/css.svg" },
    { name: "Node.js", icon: "/icons/node.svg" },
  ];

  if (windowWidth === null) return null;

  const isMedium = windowWidth < 1200;
  const isSmall = windowWidth < 700;

  const innerRadius = isSmall ? 75 : isMedium ? 120 : 200;
  const outerRadius = isSmall ? 145 : isMedium ? 280 : 490;
  const centerSize = isSmall ? 90 : isMedium ? 125 : 185;

  const innerPillW = isSmall ? 64 : isMedium ? 96 : 125;
  const innerPillH = isSmall ? 26 : isMedium ? 38 : 46;
  const iconSize = isSmall ? 12 : isMedium ? 20 : 22;
  const fontSize = isSmall ? "text-[8px]" : isMedium ? "text-xs" : "text-sm";

  const outerPillW = isSmall ? 68 : isMedium ? 104 : 128;
  const outerPillH = isSmall ? 28 : isMedium ? 38 : 46;

  return (
    <section id="skills" className="flex flex-col items-center pt-24 w-full relative min-h-screen">
      <h2 className="text-[#E6E6F1] text-2xl sm:text-3xl md:text-4xl font-bold text-center">
        My Tech Stack in Orbit
      </h2>
      <p className="mt-[22px] text-[#FFEDC2] text-sm md:text-lg text-center px-4 max-w-2xl">
        From core programming languages to modern web frameworks, these are the technologies I orbit around every day.
      </p>

      <div className="relative w-full flex-1 mt-12 sm:mt-16 xl:mt-20 min-h-[520px] sm:min-h-[700px] md:min-h-[900px]">
        
        {/* Center Rotating Moon / Sun */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none flex items-center justify-center">
          <div
            style={{
              width: `${centerSize}px`,
              height: `${centerSize}px`,
              animation: "spinSlow 60s linear infinite",
              transformOrigin: "center center",
            }}
            className="rounded-full pointer-events-none relative flex items-center justify-center"
          >
            {isDayMode ? (
              <Image
                src="/images/sun.jpg"
                alt="Sun"
                width={centerSize * 1.5}
                height={centerSize * 1.5}
                className="object-cover max-w-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 mix-blend-screen select-none pointer-events-none"
                style={{ 
                  width: `${centerSize * 1.5}px`, 
                  height: `${centerSize * 1.5}px`,
                  WebkitMaskImage: "radial-gradient(circle at center, black 46%, transparent 49%)",
                  maskImage: "radial-gradient(circle at center, black 46%, transparent 49%)"
                }}
                priority
              />
            ) : (
              <Image
                src="/images/real.png"
                alt="Moon"
                width={centerSize}
                height={centerSize}
                className="object-cover w-full h-full select-none pointer-events-none mix-blend-screen brightness-[1.35] contrast-[1.1]"
                style={{
                  WebkitMaskImage: "radial-gradient(circle at center, black 48%, transparent 50%)",
                  maskImage: "radial-gradient(circle at center, black 48%, transparent 50%)"
                }}
                priority
              />
            )}
          </div>
        </div>

        {/* Inner Orbit (30s) */}
        <div
          style={{ animation: "innerOrbit 30s linear infinite", transformOrigin: "0 0" }}
          className="absolute left-1/2 top-1/2 pointer-events-auto"
        >
          {innerStack.map((tech, i) => {
            const angle = (i / innerStack.length) * 2 * Math.PI - Math.PI / 2;
            const x = Math.cos(angle) * innerRadius;
            const y = Math.sin(angle) * innerRadius;

            return (
              <div
                key={tech.name}
                style={{
                  width: `${innerPillW}px`,
                  height: `${innerPillH}px`,
                  left: `calc(50% + ${x}px)`,
                  top: `calc(50% + ${y}px)`,
                  transform: "translate(-50%, -50%)",
                  animation: "counterOrbit 30s linear infinite",
                }}
                className={`absolute flex items-center justify-center gap-1.5 sm:gap-2 bg-[#10121B] border-[2px] border-[#A18AFF] shadow-[0_0_12px_rgba(161,143,255,0.6)] px-2 ${fontSize} cursor-pointer select-none`}
              >
                <Image
                  src={tech.icon}
                  alt={tech.name}
                  width={iconSize}
                  height={iconSize}
                  className="object-contain shrink-0"
                />
                <span className="text-[#E6E6F1] font-medium truncate">{tech.name}</span>
              </div>
            );
          })}
        </div>

        {/* Outer Orbit (60s) */}
        <div
          style={{ animation: "outerOrbit 60s linear infinite", transformOrigin: "0 0" }}
          className="absolute left-1/2 top-1/2 pointer-events-auto"
        >
          {outerStack.map((tech, i) => {
            const angle = (i / outerStack.length) * 2 * Math.PI - Math.PI / 2;
            const x = Math.cos(angle) * outerRadius;
            const y = Math.sin(angle) * outerRadius;

            return (
              <div
                key={tech.name}
                style={{
                  width: `${outerPillW}px`,
                  height: `${outerPillH}px`,
                  left: `calc(50% + ${x}px)`,
                  top: `calc(50% + ${y}px)`,
                  transform: "translate(-50%, -50%)",
                  animation: "counterOrbit 60s linear infinite",
                }}
                className={`absolute flex items-center justify-center gap-1.5 sm:gap-2 bg-[#10121B] border-[2px] border-[#A18AFF] shadow-[0_0_12px_rgba(161,143,255,0.6)] px-2 ${fontSize} cursor-pointer select-none`}
              >
                <Image
                  src={tech.icon}
                  alt={tech.name}
                  width={iconSize}
                  height={iconSize}
                  className="object-contain shrink-0"
                />
                <span className="text-[#E6E6F1] font-medium truncate">{tech.name}</span>
              </div>
            );
          })}
        </div>

      </div>

      <style>{`
        @keyframes innerOrbit {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes outerOrbit {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes counterOrbit {
          0% { transform: translate(-50%, -50%) rotate(0deg); }
          100% { transform: translate(-50%, -50%) rotate(-360deg); }
        }
        @keyframes spinSlow {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  );
}
