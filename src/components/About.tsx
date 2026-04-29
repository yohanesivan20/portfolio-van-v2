"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Section from "./Section";

export default function About() {
  return (
    <Section id="about">
      <div className="grid md:grid-cols-2 gap-12 items-center">

        {/* FOTO */}
        <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        className="flex justify-center"
        >
            <div className="w-[260px] h-[320px] md:w-full md:h-[420px] overflow-hidden rounded-2xl border border-[#222] bg-[#111]">
                <Image
                src="/images/ivan.png"
                alt="Ivan Danasuta"
                width={700}
                height={700}
                className="w-full h-full object-cover object-center"
                />
            </div>
        </motion.div>

        {/* TEXT */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-green-400 text-sm tracking-[4px] mb-4">
            PROFILE
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            About Me
          </h2>

          <p className="text-neutral-300 leading-7">
            Passionate Backend Developer with 4+ years of experience building
            high-performance web applications. Specialized in Node.js, Laravel,
            and MySQL with strong focus on scalable API development and system optimization.
          </p>

          <p className="text-neutral-400 mt-4 leading-7">
            Experienced in designing RESTful APIs, improving system performance,
            and collaborating across teams to deliver reliable production-ready systems.
          </p>
        </motion.div>

      </div>
    </Section>
  );
}