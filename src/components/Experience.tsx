"use client";
import { motion } from "framer-motion";
import Section from "./Section";

const experiences = [
  {
    year: "2022 - Present",
    title: "Junior Manager Software Developer — Indomarco Prismatama",
    desc: "Developed web applications, built REST APIs, reduced latency by 15%, and improved integration efficiency by 20%.",
  },
  {
    year: "Mar 2024 - Jun 2024",
    title: "Part Time Backend Developer — OMNI IT Consultor",
    desc: "Built scalable backend systems and improved performance across client projects using PHP & JavaScript.",
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

              <p className="text-neutral-400 leading-relaxed">
                {exp.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </Section>
  );
}