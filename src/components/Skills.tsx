"use client";

import { motion } from "framer-motion";
import Section from "./Section";

const skillGroups = [
  {
    title: "Backend",
    skills: ["Node.js", "Laravel", "REST API", "MySQL"],
  },
  {
    title: "Frontend",
    skills: ["Next.js", "React", "Tailwind CSS"],
  },
  {
    title: "Tools & Others",
    skills: ["AWS S3", "Git", "Sequelize", "Docker"],
  },
];

export default function Skills() {
  return (
    <Section id="skills">
      <div className="text-center">

        {/* HEADER */}
        <div className="mb-16">
          <p className="text-green-400 tracking-[5px] text-sm mb-4">
            TECH STACK
          </p>

          <h2 className="text-3xl md:text-5xl font-bold">
            Skills & Tools
          </h2>
        </div>

        {/* SKILL GROUPS */}
        <div className="grid md:grid-cols-3 gap-8">
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-[#0d0d0d] border border-[#222] rounded-2xl p-6"
            >
              <h3 className="text-lg font-semibold mb-4 text-green-400">
                {group.title}
              </h3>

              <div className="flex flex-wrap justify-center gap-3">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-white transition hover:border-green-400 hover:text-green-400"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </Section>
  );
}