"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Section from "./Section";

const projects = [
  {
    title: "B2B Way Finder",
    desc: "A complete B2B platform combining a public website and admin dashboard for seamless registration and real-time attendance tracking.",
    details: {
      objective:
        "To build a unified platform that simplifies event registration and attendance tracking for both users and administrators.",
      challenge:
        "Ensuring real-time data synchronization between public-facing pages and the admin dashboard while maintaining high performance.",
      conclusion:
        "Successfully delivered a scalable and intuitive system that streamlines registration and provides full visibility for event organizers.",
    },
    links: [
      { label: "View Web App", href: "https://b2b-wayfinder-mmjkt.vercel.app/" },
      { label: "View Dashboard", href: "https://dashboard-b2b-wayfinder-mmjkt.vercel.app/" },
    ],
  },
  {
    title: "AI Document Processor",
    desc: "An intelligent invoice processing system using OCR and LLM to automatically extract structured data from documents.",
    details: {
      objective:
        "To automate invoice data extraction and reduce manual processing time for finance and operations teams.",
      challenge:
        "Handling diverse document formats while maintaining high accuracy and minimizing extraction errors.",
      conclusion:
        "Significantly improved processing efficiency and reduced manual workload through reliable AI-powered automation.",
    },
    links: [
      { label: "View on GitHub", href: "https://github.com/yohanesivan20/ai-doc-processor" },
    ],
  },
  {
    title: "Faith Game B2B Registration",
    desc: "A modern B2B event registration platform designed to simplify participant onboarding and management.",
    details: {
      objective:
        "To provide a fast, user-friendly registration experience tailored for large-scale event participation.",
      challenge:
        "Balancing speed, simplicity, and data accuracy without compromising the user experience.",
      conclusion:
        "Delivered a clean and efficient registration system that helps organizers manage participants effortlessly.",
    },
    links: [
      { label: "View Website", href: "https://faith-game-b2b-regist.vercel.app/" },
    ],
  },
];

export default function Projects() {
  const [activeProject, setActiveProject] = useState<number | null>(null);

  useEffect(() => {
    document.body.style.overflow = activeProject !== null ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [activeProject]);

  return (
    <Section id="projects">
      <div className="text-center w-full">

        {/* HEADER */}
        <p className="text-green-400 text-sm tracking-[5px] mb-4">
          PROJECTS
        </p>

        <h2 className="text-4xl md:text-5xl font-bold mb-12">
          Selected Projects
        </h2>

        {/* GRID */}
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="group p-6 bg-[#0d0d0d] border border-[#222] rounded-2xl transition hover:border-green-400/40"
            >
              <h3 className="text-lg font-semibold mb-2">{p.title}</h3>

              <p className="text-neutral-400 text-sm mb-4 leading-6">
                {p.desc}
              </p>

              <button
                onClick={() => setActiveProject(i)}
                className="inline-flex items-center rounded-full border border-green-400 px-4 py-2 text-sm text-green-400 transition hover:bg-green-400/10"
              >
                View Details
              </button>
            </motion.div>
          ))}
        </div>

      </div>

      {/* MODAL */}
      <AnimatePresence>
        {activeProject !== null && (
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
                        {projects[activeProject].title}
                        </h3>
                    </div>

                  {/* Desktop Close */}
                    <button
                    onClick={() => setActiveProject(null)}
                    className="hidden md:inline-flex rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm text-white hover:bg-white/10"
                    >
                    Close
                    </button>
                </div>

                {/* CONTENT */}
                <div className="space-y-8 text-left">

                  <div>
                    <h4 className="text-xl font-semibold mb-3">Objective</h4>
                    <p className="text-neutral-300 leading-7">
                      {projects[activeProject].details.objective}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold mb-3">Challenge</h4>
                    <p className="text-neutral-300 leading-7">
                      {projects[activeProject].details.challenge}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold mb-3">Conclusion</h4>
                    <p className="text-neutral-300 leading-7">
                      {projects[activeProject].details.conclusion}
                    </p>
                  </div>

                  {/* SCREENSHOT */}
                  {/* <div className="rounded-3xl border border-white/10 bg-[#111] p-6">
                    <h4 className="text-xl font-semibold mb-3">Screenshots</h4>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      {Array.from({ length: 6 }).map((_, index) => (
                        <div
                          key={index}
                          className="h-32 rounded-2xl border border-dashed border-white/10 bg-[#0c0c0c] flex items-center justify-center text-neutral-500 text-sm"
                        >
                          Img {index + 1}
                        </div>
                      ))}
                    </div>
                  </div> */}
                </div>

                {/* ACTION */}
                <div className="flex flex-wrap gap-3 pt-4">
                  {projects[activeProject].links.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-full border border-green-400 bg-green-400/10 px-5 py-3 text-sm text-green-100 hover:bg-green-400"
                    >
                      {link.label}
                    </a>
                  ))}

                  {/* Mobile Close */}
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