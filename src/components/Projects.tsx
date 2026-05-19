"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Section from "./Section";

const projectGroups = [
  {
    label: "Featured Projects",
    projects: [
      {
        title: "B2B Way Finder",
        desc: "A complete B2B platform combining a public website and admin dashboard for seamless registration and real-time attendance tracking.",
        techStack: ["HTML", "CSS", "JavaScript"],
        details: {
          objective:
            "To build a unified platform that simplifies event registration and attendance tracking for both users and administrators.",
          conclusion:
            "Successfully delivered a scalable and intuitive system that streamlines registration and provides full visibility for event organizers.",
        },
        links: [
          {
            label: "View Web App",
            href: "https://b2b-wayfinder-mmjkt.vercel.app/",
          },
          {
            label: "View Dashboard",
            href: "https://dashboard-b2b-wayfinder-mmjkt.vercel.app/",
          },
        ],
      },
      {
        title: "AI Document Processor",
        desc: "An intelligent invoice processing system using OCR and LLM to automatically extract structured data from documents.",
        techStack: ["Laravel", "Tesseract OCR", "Ollama LLM"],
        details: {
          objective:
            "To automate invoice data extraction and reduce manual processing time for finance and operations teams.",
          conclusion:
            "Significantly improved processing efficiency and reduced manual workload through reliable AI-powered automation.",
        },
        links: [
          {
            label: "View on GitHub",
            href: "https://github.com/yohanesivan20/ai-doc-processor",
          },
        ],
      },
      {
        title: "Faith Game B2B Registration",
        desc: "A modern B2B event registration platform designed to simplify participant onboarding and management.",
        techStack: ["Next.js", "Google App Script"],
        details: {
          objective:
            "To provide a fast, user-friendly registration experience tailored for large-scale event participation.",
          conclusion:
            "Delivered a clean and efficient registration system that helps organizers manage participants effortlessly.",
        },
        links: [
          {
            label: "View Website",
            href: "https://faith-game-b2b-regist.vercel.app/",
          },
        ],
      },
      {
        title: "Beelio Furniture Web App",
        desc: "A sleek and modern e-commerce web app for a furniture brand, delivering a smooth browsing and shopping experience.",
        techStack: ["Next.js"],
        details: {
          objective:
            "To create an elegant and performant web presence for a furniture brand that highlights products and drives customer engagement.",
          conclusion:
            "Delivered a polished storefront that reflects the brand's aesthetic and provides an intuitive shopping journey for customers.",
        },
        links: [
          {
            label: "View Website",
            href: "https://blfurni-web-app.vercel.app/",
          },
          {
            label: "View on GitHub",
            href: "https://github.com/yohanesivan20/blfurni-web-app",
          },
        ],
      },
    ],
  },
  {
    label: "Other Projects",
    projects: [
      {
        title: "E Voting System",
        desc: "A secure and user-friendly electronic voting system designed for organizational elections and decision-making processes.",
        techStack: ["Laravel", "MySQL"],
        details: {
          objective:
            "To develop a reliable and accessible e-voting platform that ensures the integrity of the voting process while providing a seamless user experience.",
          conclusion:
            "Successfully implemented a secure and efficient e-voting system that meets the needs of organizations seeking to modernize their voting processes.",
        },
        links: [
          {
            label: "View on GitHub",
            href: "https://github.com/yohanesivan20/e-voting-mmj",
          },
        ],
      },
      {
        title: "Personal Portfolio Website",
        desc: "A personal portfolio website built with Next.js and Tailwind CSS to showcase projects, skills, and experience.",
        techStack: ["Next.js", "Tailwind CSS"],
        details: {
          objective:
            "To create a visually appealing and responsive portfolio website that effectively highlights my work and skills as a web developer.",
          conclusion:
            "Successfully launched a modern and engaging portfolio that serves as a central hub for showcasing my projects and professional background.",
        },
        links: [
          {
            label: "View Website",
            href: "https://portfolio-van-v2.vercel.app/",
          },
          {
            label: "View on GitHub",
            href: "https://github.com/yohanesivan20/portfolio-van-v2",
          },
        ],
      },
      {
        title: "Movie Recommendation System",
        desc: "A movie recommendation system that uses collaborative filtering to suggest movies based on user preferences and viewing history.",
        techStack: ["React", "TMDb API"],
        details: {
          objective:
            "To develop a movie recommendation system that provides personalized movie suggestions to users based on their preferences and viewing history.",
          conclusion:
            "Successfully implemented a movie recommendation system that enhances user engagement by providing relevant and personalized movie suggestions.",
        },
        links: [
          {
            label: "View Website",
            href: "https://yohanesivan20.github.io/porto-movies-van/",
          },
          {
            label: "View on GitHub",
            href: "https://github.com/yohanesivan20/porto-movies-van",
          },
        ],
      },
    ],
  },
];

export default function Projects() {
  const [activeGroup, setActiveGroup] = useState(0);
  const [activeProject, setActiveProject] = useState<any>(null);

  useEffect(() => {
    document.body.style.overflow = activeProject ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [activeProject]);

  return (
    <Section id="projects">
      <div className="text-center w-full">

        {/* HEADER */}
        <div className="mb-12">
          <p className="text-green-400 tracking-[5px] text-sm mb-4">
            PROJECTS
          </p>

          <h2 className="text-3xl md:text-5xl font-bold">
            Selected Projects
          </h2>

          <p className="text-neutral-400 mt-4 max-w-2xl mx-auto text-sm leading-relaxed">
            A collection of backend systems, web platforms, and AI-powered applications
            focused on scalability, user experience, and real-world business solutions.
          </p>
        </div>

        {/* TABS */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex bg-[#0d0d0d] border border-[#222] rounded-xl p-1 gap-1 flex-wrap justify-center">
            {projectGroups.map((group, i) => (
              <button
                key={group.label}
                onClick={() => setActiveGroup(i)}
                className={`px-5 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  activeGroup === i
                    ? "bg-white text-black"
                    : "text-neutral-400 hover:text-white"
                }`}
              >
                {group.label}
              </button>
            ))}
          </div>
        </div>

        {/* PROJECT CARDS */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeGroup}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.2 }}
            className="
              grid
              gap-6
              max-w-7xl
              mx-auto
              [grid-template-columns:repeat(auto-fit,minmax(260px,1fr))]
            "
          >
            {projectGroups[activeGroup].projects.map((p, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.02 }}
                className="group w-full bg-[#0d0d0d] border border-[#222] rounded-2xl p-6 text-left hover:border-green-400/30 transition-colors flex flex-col"
              >
                <div className="flex flex-wrap gap-2 mb-4">
                  {p.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-3 py-1 rounded-full bg-green-400/10 text-green-400 border border-green-400/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-3">
                  {p.title}
                </h3>

                <p className="text-neutral-400 text-sm leading-7 flex-1 mb-6">
                  {p.desc}
                </p>

                <button
                  onClick={() => setActiveProject(p)}
                  className="inline-flex items-center justify-center rounded-full border border-green-400 px-5 py-3 text-sm text-green-400 transition hover:bg-green-400/10"
                >
                  View Details
                </button>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* MODAL */}
      <AnimatePresence>
        {activeProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 px-6 py-10"
          >
            <motion.div
              initial={{ y: 60, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 60, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="w-full max-w-4xl rounded-3xl border border-white/10 bg-[#090909] p-8 shadow-2xl max-h-[85vh] overflow-y-auto"
            >
              <div className="flex flex-col gap-6">

                {/* HEADER */}
                <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                  <div>
                    <p className="text-green-400 text-sm tracking-[4px] uppercase">
                      Project Overview
                    </p>

                    <h3 className="text-3xl font-bold mt-2">
                      {activeProject.title}
                    </h3>
                  </div>

                  <button
                    onClick={() => setActiveProject(null)}
                    className="hidden md:inline-flex rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm text-white hover:bg-white/10"
                  >
                    Close
                  </button>
                </div>

                {/* TECH STACK */}
                <div>
                  <h4 className="text-xl font-semibold mb-3">
                    Tech Stack
                  </h4>

                  <div className="flex flex-wrap gap-2">
                    {activeProject.techStack.map((tech: string) => (
                      <span
                        key={tech}
                        className="text-sm px-4 py-1.5 rounded-full bg-green-400/10 text-green-400 border border-green-400/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CONTENT */}
                <div className="space-y-8 text-left">
                  <div>
                    <h4 className="text-xl font-semibold mb-3">
                      Objective
                    </h4>

                    <p className="text-neutral-300 leading-7">
                      {activeProject.details.objective}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold mb-3">
                      Conclusion
                    </h4>

                    <p className="text-neutral-300 leading-7">
                      {activeProject.details.conclusion}
                    </p>
                  </div>
                </div>

                {/* ACTION */}
                <div className="flex flex-wrap gap-3 pt-4">
                  {activeProject.links.map((link: any) => (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-full border border-green-400 bg-green-400/10 px-5 py-3 text-sm text-green-100 hover:bg-green-400 hover:text-black transition"
                    >
                      {link.label}
                    </a>
                  ))}

                  <button
                    onClick={() => setActiveProject(null)}
                    className="md:hidden w-full rounded-full bg-white text-black py-4 text-sm font-semibold mt-4"
                  >
                    Close
                  </button>
                </div>

              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  );
}