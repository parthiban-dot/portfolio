"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface ContactChannel {
  name: string;
  icon: string;
  url: string;
}

export function ContactOrbit() {
  const [windowWidth, setWindowWidth] = useState<number | null>(null);

  useEffect(() => {
    const update = () => setWindowWidth(window.innerWidth);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const innerChannels: ContactChannel[] = [
    { name: "GitHub", icon: "/icons/github1.svg", url: "https://github.com/parthiban-dot" },
    { name: "LinkedIn", icon: "/icons/linkedin.svg", url: "https://www.linkedin.com/in/parthi-xii-581493376?utm_source=share_via&utm_content=profile&utm_medium=member_android" },
    { name: "Resume", icon: "/icons/resume.svg", url: "/Parthiban_V_Resume.pdf" },
    { name: "Email", icon: "/icons/email.svg", url: "mailto:vinayagamparthiban07@gmail.com" },
  ];

  const outerChannels: ContactChannel[] = [
    { name: "Instagram", icon: "/icons/instagram.svg", url: "https://www.instagram.com/its_.prince._here?stkn=MXBld3RqdGVjZ3pnMw==" },
    { name: "DRACARYS", icon: "/icons/next.svg", url: "https://dracarysweb.vercel.app/" },
    { name: "WhatsApp", icon: "/icons/whatsapp.svg", url: "https://wa.me/?text=Hi%20Parthiban%2C%20I%20came%20across%20your%20portfolio!" },
    { name: "Portfolio", icon: "/icons/github1.svg", url: "https://github.com/parthiban-dot/portfolio" },
  ];

  const handleEmailClick = () => {
    const email = "vinayagamparthiban07@gmail.com";
    const subject = encodeURIComponent("Hello Parthiban!");
    const body = encodeURIComponent("Hi Parthiban,\n\nI came across your portfolio and would love to connect about a project or collaboration.");

    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${subject}&body=${body}`;
    window.open(gmailUrl, "_blank", "noopener,noreferrer");
  };

  if (windowWidth === null) return null;

  const isMedium = windowWidth < 1200;
  const isSmall = windowWidth < 700;

  const innerRadius = isSmall ? 75 : isMedium ? 120 : 210;
  const outerRadius = isSmall ? 145 : isMedium ? 240 : 460;
  const earthSize = isSmall ? 90 : isMedium ? 140 : 280;

  const iconSize = isSmall ? 12 : isMedium ? 18 : 22;
  const innerW = isSmall ? 64 : isMedium ? 90 : 120;
  const innerH = isSmall ? 24 : isMedium ? 36 : 46;

  const outerW = isSmall ? 68 : isMedium ? 96 : 130;
  const outerH = isSmall ? 24 : isMedium ? 36 : 46;
  const textSize = isSmall ? "text-[8px]" : isMedium ? "text-xs" : "text-sm";

  return (
    <section id="contact" className="flex flex-col items-center pt-24 pb-16 w-full relative min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex flex-col items-center"
      >
        <h2 className="text-[#E6E6F1] text-2xl md:text-4xl font-bold text-center">
          Reach Me from Earth
        </h2>
        <p className="mt-4 text-[#FFEDC2] text-sm md:text-lg text-center px-4 max-w-xl">
          No matter where you are, your signal will always find me.
        </p>
      </motion.div>

      <div className="relative w-full flex-1 mt-12 sm:mt-16 xl:mt-20 min-h-[520px] sm:min-h-[700px] md:min-h-[900px]">
        



        {/* Center Rotating Earth */}
        <CenterEarth earthSize={earthSize} />

        {/* Inner Orbit (30s) */}
        <div
          style={{ animation: "innerOrbit 30s linear infinite", transformOrigin: "0 0" }}
          className="absolute left-1/2 top-1/2 pointer-events-auto"
        >
          {innerChannels.map((channel, i) => {
            const angle = (i / innerChannels.length) * 2 * Math.PI - Math.PI / 2;
            const x = Math.cos(angle) * innerRadius;
            const y = Math.sin(angle) * innerRadius;

            const commonStyle = {
              width: `${innerW}px`,
              height: `${innerH}px`,
              left: `calc(50% + ${x}px)`,
              top: `calc(50% + ${y}px)`,
              transform: "translate(-50%, -50%) rotate(-360deg)",
              animation: "counterOrbit 30s linear infinite",
            };

            const commonClass = `absolute flex items-center justify-center gap-1.5 sm:gap-2 bg-[#10121B] border border-[#A18AFF] shadow-[0_0_12px_rgba(161,143,255,0.6)] px-2 ${textSize} cursor-pointer select-none`;

            if (channel.name === "Email") {
              return (
                <button
                  key={channel.name}
                  onClick={handleEmailClick}
                  style={commonStyle}
                  className={commonClass}
                >
                  <Image src={channel.icon} alt={channel.name} width={iconSize} height={iconSize} className="shrink-0" />
                  <span className="text-[#E6E6F1] font-medium truncate">{channel.name}</span>
                </button>
              );
            }

            return (
              <a
                key={channel.name}
                href={channel.url}
                target="_blank"
                rel="noopener noreferrer"
                download={channel.name === "Resume" ? "Parthiban_V_Resume.pdf" : undefined}
                style={commonStyle}
                className={commonClass}
              >
                {channel.name === "Resume" ? (
                  <img src={channel.icon} alt={channel.name} width={iconSize} height={iconSize} className="shrink-0" />
                ) : (
                  <Image src={channel.icon} alt={channel.name} width={iconSize} height={iconSize} className="shrink-0" />
                )}
                <span className="text-[#E6E6F1] font-medium truncate">{channel.name}</span>
              </a>
            );
          })}
        </div>

        {/* Outer Orbit (60s) */}
        <div
          style={{ animation: "outerOrbit 60s linear infinite", transformOrigin: "0 0" }}
          className="absolute left-1/2 top-1/2 pointer-events-auto"
        >
          {outerChannels.map((channel, i) => {
            const angle = (i / outerChannels.length) * 2 * Math.PI - Math.PI / 2;
            const x = Math.cos(angle) * outerRadius;
            const y = Math.sin(angle) * outerRadius;

            return (
              <a
                key={channel.name}
                href={channel.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  width: `${outerW}px`,
                  height: `${outerH}px`,
                  left: `calc(50% + ${x}px)`,
                  top: `calc(50% + ${y}px)`,
                  transform: "translate(-50%, -50%) rotate(-360deg)",
                  animation: "counterOrbit 60s linear infinite",
                }}
                className={`absolute flex items-center justify-center gap-1.5 sm:gap-2 bg-[#10121B] border border-[#A18AFF] shadow-[0_0_12px_rgba(161,143,255,0.6)] px-2 ${textSize} cursor-pointer select-none`}
              >
                <Image src={channel.icon} alt={channel.name} width={iconSize} height={iconSize} className="shrink-0" />
                <span className="text-[#E6E6F1] font-medium truncate">{channel.name}</span>
              </a>
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

function CenterEarth({ earthSize }: { earthSize: number }) {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const [tiltStyle, setTiltStyle] = React.useState({ transform: "perspective(800px) rotateX(0deg) rotateY(0deg) scale(1)" });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    // Calculate rotation (-15 to 15 degrees)
    const rotateX = ((y - centerY) / centerY) * -15;
    const rotateY = ((x - centerX) / centerX) * 15;
    
    setTiltStyle({
      transform: `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`
    });
  };

  const handleMouseLeave = () => {
    setTiltStyle({ transform: "perspective(800px) rotateX(0deg) rotateY(0deg) scale(1)" });
  };

  return (
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-auto flex items-center justify-center">
      <div 
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ ...tiltStyle, transition: "transform 0.1s ease-out", width: `${earthSize}px`, height: `${earthSize}px` }}
        className="rounded-full flex items-center justify-center cursor-pointer"
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            animation: "spinSlow 60s linear infinite",
            transformOrigin: "center center",
          }}
          className="rounded-full overflow-hidden pointer-events-none relative flex items-center justify-center shadow-[0_0_50px_rgba(161,143,255,0.2)]"
        >
          <Image
            src="/images/earth.png"
            alt="Earth"
            width={earthSize}
            height={earthSize}
            className="object-cover w-full h-full select-none pointer-events-none mix-blend-screen brightness-110"
            priority
          />
        </div>
      </div>
    </div>
  );
}
