"use client";
import { motion } from "framer-motion";
import Section from "./Section";

const experiences = [
  {
    year: "Jan 2022 - Present",
    title: "Junior Manager Software Developer — Indomarco Prismatama",
    desc: "Developed and maintained web applications using PHP and JavaScript.",
    bullets: [
      "Built a web-based platform to support Indogrosir's Surveyor Team operations.",
      "Designed and implemented RESTful APIs, reducing data exchange latency by 15%.",
      "Authored clear API documentation, reducing frontend integration time by 20%.",
      "Collaborated across teams to deliver software solutions from development to production.",
    ],
  },
  {
    year: "Mar 2024 - Jun 2024",
    title: "Part Time Backend Developer — OMNI IT Consultor",
    desc: "Built scalable backend systems and improved performance across client projects using PHP & JavaScript.",
    bullets: [],
  },
];

export default function Experience() {
  return (
    <Section id="experience">
      <div className="max-w-4xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-16">
          <p className="text-green-400 text-sm tracking-[5px] mb-4">
            EXPERIENCE
          </p>

          <h2 className="text-3xl md:text-5xl font-bold">
            Career Journey
          </h2>
        </div>

        {/* TIMELINE */}
        <div className="relative border-l border-white/10 space-y-12">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              className="relative pl-8"
            >
              {/* DOT */}
              <div className="absolute -left-[6px] top-2 w-3 h-3 bg-green-400 rounded-full shadow-[0_0_10px_rgba(236,72,153,0.8)]" />

              {/* CONTENT */}
              <p className="text-green-400 text-sm mb-1">
                {exp.year}
              </p>

              <h3 className="text-lg md:text-xl font-semibold mb-2">
                {exp.title}
              </h3>

              <p className="text-neutral-400 leading-relaxed mb-3">
                {exp.desc}
              </p>

              {exp.bullets.length > 0 && (
                <ul className="space-y-2">
                  {exp.bullets.map((point, j) => (
                    <li key={j} className="flex items-start gap-2 text-neutral-400 text-sm leading-relaxed">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-green-400/60 shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>
              )}
            </motion.div>
          ))}
        </div>

      </div>
    </Section>
  );
}