"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { ProjectDetailModal } from "./ProjectDetailModal";
import { PORTFOLIO_DATA, Project } from "@/data/portfolioData";
import { CollegiateLabVisual } from "./ProjectVisuals";

export function ProjectsSection() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const projects = [
    {
      data: PORTFOLIO_DATA.projects[0], // HostelHub
      tagline: "AI-Powered Hostel Security & Management System with real-time facial recognition.",
      description: "HostelHub is a distributed, production-level college hostel platform combining deep learning facial recognition (RetinaFace + ArcFace) with a centralized management dashboard — automating attendance, detecting intruders, managing grievances, and tracking mess feedback across a 3-node architecture.",
      bullets: [
        <>★ <strong>AI Facial Recognition</strong> — auto-logs student attendance, flags unknown intruders in real-time</>,
        <>★ <strong>Intrusion Detection</strong> — captures snapshots & logs security alerts from live CCTV footage</>,
        <>★ <strong>Role-Based Dashboard</strong> — student lists, live security logs, real-time monitoring</>,
        <>★ <strong>Grievance & Food Feedback</strong> — digital complaint tracking and mess satisfaction system</>,
        <>★ <strong>~2,500+ frames</strong> processed with stable GPU inference on 3-node distributed setup</>,
      ],
      buttonText: "GitHub Repository",
      action: "link",
      url: "https://github.com/shv2312/HostelHub",
      visual: (
        <Image src="/images/hostelhub.jpg" alt="HostelHub" fill className="object-cover object-center" />
      ),
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
      visual: (
        <Image src="/images/dracarys.jpg" alt="DRACARYS" fill className="object-cover object-center" />
      ),
    },
    {
      data: PORTFOLIO_DATA.projects[2], // SIET BGV
      tagline: "Institutional platform for tamper-proof, automated academic credential verification.",
      description: "The SIET BGV Portal enables corporate employers and HR agencies to verify the educational credentials of SIET alumni via a strict digital pipeline — OTP-authenticated ingestion, automated algorithmic DB matching, and async email report dispatch.",
      bullets: [
        <>★ <strong>Live SMTP Email OTP</strong> — multi-factor identity verification for HR/agency access</>,
        <>★ <strong>Automated Verification Engine</strong> — instant DB cross-referencing against institutional records</>,
        <>★ <strong>Async Report Dispatch</strong> — branded credential reports delivered to HR emails automatically</>,
        <>★ <strong>Public Status Tracking</strong> — real-time verification outcomes via unique Request IDs</>,
        <>★ <strong>Admin Dashboard</strong> — role-based oversight of all verification records</>,
      ],
      buttonText: "GitHub Repository",
      action: "link",
      url: "https://github.com/parthiban-dot",
      visual: (
        <Image src="/images/sietbgv.jpg" alt="SIET BGV Portal" fill className="object-contain object-center p-4" />
      ),
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
            <div className="w-full lg:w-[500px] xl:w-[525px] h-[260px] sm:h-[300px] lg:h-[480px] relative bg-[#070911] border-b lg:border-b-0 lg:border-r border-[#3F4454]/60 overflow-hidden">
              <div className="w-full h-full flex justify-center items-center transform group-hover:scale-[1.02] transition-transform duration-500">
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
