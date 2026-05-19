"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Section from "./Section";

const tabs = [
  {
    label: "Backend",
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2" />
      </svg>
    ),
    skills: [
      { name: "Node.js", desc: "Building scalable server-side applications and real-time systems" },
      { name: "Express.js", desc: "Creating RESTful APIs and web applications" },
      { name: "Laravel", desc: "Developing robust PHP applications with queues and event-driven architecture" },
      { name: "PHP", desc: "Server-side scripting and web development" },
    ],
  },
  {
    label: "Frontend",
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    skills: [
      { name: "React.js", desc: "Building interactive and component-driven user interfaces" },
      { name: "Next.js", desc: "Full-stack React framework with SSR and static generation" },
      { name: "Tailwind CSS", desc: "Utility-first CSS framework for rapid UI development" },
      { name: "HTML / CSS", desc: "Semantic markup and responsive styling fundamentals" },
    ],
  },
  {
    label: "DevOps",
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
    skills: [
      { name: "Git", desc: "Version control and collaborative development workflows" },
      { name: "Vercel", desc: "Deploying and hosting modern web applications" },
      { name: "Railway", desc: "Cloud platform for deploying and managing applications" },
      { name: "cPanel", desc: "Web hosting management and server configuration" },
    ],
  },
  {
    label: "Other",
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
    skills: [
      { name: "RESTful APIs", desc: "Designing and consuming clean, scalable REST interfaces" },
      { name: "JWT Auth", desc: "Implementing secure token-based authentication flows" },
      { name: "Problem Solving", desc: "Breaking down complex challenges into clean solutions" },
      { name: "MySQL", desc: "Database design, querying, and optimization" },
    ],
  },
];

export default function Skills() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <Section id="skills">
      <div className="text-center w-full">

        {/* HEADER */}
        <div className="mb-12">
          <p className="text-green-400 tracking-[5px] text-sm mb-4">
            TECH STACK
          </p>
          <h2 className="text-3xl md:text-5xl font-bold">
            Technical Skills
          </h2>
          <p className="text-neutral-400 mt-4 max-w-xl mx-auto text-sm leading-relaxed">
            My expertise spans across Node.js, Laravel, databases, and various web technologies.
          </p>
        </div>

        {/* TABS */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex bg-[#0d0d0d] border border-[#222] rounded-xl p-1 gap-1 flex-wrap justify-center">
            {tabs.map((tab, i) => (
              <button
                key={tab.label}
                onClick={() => setActiveTab(i)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  activeTab === i
                    ? "bg-white text-black"
                    : "text-neutral-400 hover:text-white"
                }`}
              >
                {tab.icon}
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* SKILL CARDS */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.2 }}
            className="grid sm:grid-cols-2 gap-4 max-w-4xl mx-auto"
          >
            {tabs[activeTab].skills.map((skill) => (
              <div
                key={skill.name}
                className="flex items-start gap-4 bg-[#0d0d0d] border border-[#222] rounded-2xl p-5 text-left hover:border-green-400/30 transition-colors"
              >
                {/* icon placeholder */}
                <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0 text-green-400">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>

                <div>
                  <h4 className="font-semibold text-white mb-1">{skill.name}</h4>
                  <p className="text-neutral-400 text-sm leading-relaxed">{skill.desc}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>

      </div>
    </Section>
  );
}