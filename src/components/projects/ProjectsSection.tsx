"use client";

import React, { useState } from "react";
import { motion, type Variants } from "framer-motion";
import { ProjectDetailModal } from "./ProjectDetailModal";
import { PORTFOLIO_DATA, Project } from "@/data/portfolioData";
import { VirtualTeacherVisual, DracarysVisual, CollegiateLabVisual } from "./ProjectVisuals";

export function ProjectsSection() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const projects = [
    {
      data: PORTFOLIO_DATA.projects[0], // AI Virtual Teacher
      tagline: "An intelligent pedagogical system built with Python, FastAPI, and Next.js.",
      description: "AI Virtual Teacher understands educational material, personalizes lessons, explains concepts with Socratic analogies, generates diagnostic questions, and adapts teaching based on learner comprehension.",
      bullets: [
        <>★ Dynamic concept deconstruction and <strong>Socratic explanation</strong> generation</>,
        <>★ Automated contextual question synthesis from <strong>syllabus material</strong></>,
        <>★ Adaptive learner evaluation measuring <strong>comprehension depth</strong> vs surface recall</>,
        <>★ Real-time pedagogy adjustment that <strong>re-routes learning pathways</strong> upon knowledge gaps</>,
        <>★ High-performance async backend with <strong>FastAPI and Next.js</strong> frontend</>,
      ],
      buttonText: "Case Study & Architecture",
      action: "modal",
      visual: <VirtualTeacherVisual />,
    },
    {
      data: PORTFOLIO_DATA.projects[1], // DRACARYS
      tagline: "Collegiate technology platform and student team founded by Parthiban.",
      description: "Founded by Parthiban, DRACARYS brings driven engineering students together for competitive hackathons, collaborative project repositories, peer code reviews, and real-world problem solving.",
      bullets: [
        <>★ Official collegiate initiative <strong>founded and led by Parthiban</strong></>,
        <>★ Agile squad formation and sprint delivery for <strong>24–48 hour hackathons</strong></>,
        <>★ Shared Git repositories, <strong>API contract modeling</strong>, and peer code reviews</>,
        <>★ Active development of student productivity tools and <strong>community web apps</strong></>,
        <>★ Deployed live in production on <strong>Vercel</strong> at dracarysweb.vercel.app</>,
      ],
      buttonText: "Live Demo",
      action: "link",
      url: "https://dracarysweb.vercel.app/",
      visual: <DracarysVisual />,
    },
    {
      data: PORTFOLIO_DATA.projects[2], // Exploratory Lab Builds
      tagline: "Experimental prototypes, C++ algorithms, and autonomous agent workflows.",
      description: "A continuous development sandbox exploring autonomous agent architectures, local LLM evaluation benchmarks, C++ algorithmic systems, and rapid MVPs being readied for upcoming collegiate hackathons.",
      bullets: [
        <>★ Algorithmic optimization benchmarks in <strong>C++ and Python</strong></>,
        <>★ Multi-agent tool execution workflows and <strong>deterministic routing</strong></>,
        <>★ Sprint templates configured for <strong>rapid hackathon velocity</strong></>,
        <>★ Structured relational database schemas and <strong>API interfaces</strong></>,
        <>★ Continuous codebase updates on <strong>GitHub</strong></>,
      ],
      buttonText: "GitHub Profile",
      action: "link",
      url: "https://github.com/parthiban-dot",
      visual: <CollegiateLabVisual />,
    },
  ];

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <div id="projects" className="relative w-full px-5 sm:px-6 md:px-12 xl:px-24 mt-[120px] mb-24">
      {/* Header */}
      <motion.div
        className="text-center"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={cardVariants}
      >
        <h2 className="text-[28px] sm:text-[32px] md:text-[36px] font-semibold leading-[38px] sm:leading-[40px] md:leading-[45px] tracking-[-0.02em] text-[#E6E6F1]">
          <span>Crafted in the Moonlight</span>
        </h2>
        <p className="mt-4 text-[14px] sm:text-[15px] md:text-[16px] leading-[22px] sm:leading-[24px] text-[#FFDFAF] mx-auto px-2 max-w-2xl">
          <span>Three projects that showcase my dedication, creativity, and late-night focus — built to be both functional and beautiful.</span>
        </p>
      </motion.div>

      {/* Project Cards */}
      <div className="space-y-[80px]">
        {projects.map((proj, idx) => (
          <motion.div
            key={proj.data.title}
            className="group mt-[80px] w-full max-w-[1300px] mx-auto bg-[#10121B] border border-[#3F4454] shadow-[0px_4px_12px_rgba(255,255,255,0.06)] flex flex-col lg:flex-row overflow-hidden transition-all duration-300 hover:ring-2 hover:ring-[#A18AFF] hover:shadow-[0px_0px_12px_rgba(161,138,255,0.6)]"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={cardVariants}
          >
            {/* Left: Visual / Illustration Container */}
            <div className="w-full lg:w-[500px] xl:w-[525px] h-[260px] sm:h-[300px] lg:h-[480px] relative p-4 lg:p-6 flex justify-center items-center bg-[#070911] border-b lg:border-b-0 lg:border-r border-[#3F4454]/60">
              <div className="w-full max-w-md transform group-hover:scale-[1.02] transition-transform duration-300">
                {proj.visual}
              </div>
            </div>

            {/* Right: Content Area */}
            <div className="flex-1 px-5 sm:px-8 md:px-10 py-6 flex flex-col justify-between">
              <div>
                <div className="flex flex-col items-center">
                  <h3 className="text-[22px] sm:text-[24px] md:text-[26px] lg:text-[28px] font-bold text-[#E6E6F1] leading-[30px] sm:leading-[32px] md:leading-[34px] lg:leading-[36px] text-center">
                    {proj.data.title}
                  </h3>
                  <p className="italic text-[#FFDFAF] mt-2 sm:mt-3 text-[14px] sm:text-[15px] md:text-[16px] leading-[22px] sm:leading-[24px] text-center max-w-lg">
                    {proj.tagline}
                  </p>
                </div>

                <div className="mt-5">
                  <p className="text-[#B0B3C5] text-[14px] sm:text-[15px] md:text-[16px] leading-[22px] sm:leading-[24px]">
                    {proj.description}
                  </p>

                  <ul className="mt-4 pl-5 space-y-2 lg:space-y-3 text-[#B0B3C5] text-[14px] sm:text-[15px] md:text-[16px] leading-[22px] sm:leading-[24px] list-none">
                    {proj.bullets.map((b, i) => (
                      <li key={i}>{b}</li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Button */}
              <div className="flex justify-center mt-6 pt-4 border-t border-[#3F4454]/40">
                {proj.action === "modal" ? (
                  <button
                    onClick={() => setActiveProject(proj.data)}
                    className="px-8 py-2.5 bg-[#FFDFAF] text-[#03040A] font-medium text-[14px] sm:text-[15px] md:text-[16px] tracking-[0.05em] hover:bg-[#FFEDC2] transition-colors duration-300 cursor-pointer shadow-sm active:scale-95"
                  >
                    {proj.buttonText}
                  </button>
                ) : (
                  <a
                    href={proj.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="px-8 py-2.5 bg-[#FFDFAF] text-[#03040A] font-medium text-[14px] sm:text-[15px] md:text-[16px] tracking-[0.05em] hover:bg-[#FFEDC2] transition-colors duration-300 cursor-pointer shadow-sm active:scale-95">
                      {proj.buttonText}
                    </button>
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Case Study Modal */}
      <ProjectDetailModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />
    </div>
  );
}
