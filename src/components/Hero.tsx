"use client";
import { motion } from "framer-motion";
import Section from "./Section";

export default function Hero() {
  return (
    <Section id="home" className="text-center">
      <div>
        <motion.p className="text-sm tracking-[5px] text-green-400 mb-4">
          PORTFOLIO
        </motion.p>

        <motion.h1 className="text-5xl md:text-7xl font-bold">
          Ivan Danasuta
        </motion.h1>

        <motion.p className="mt-4 text-neutral-400 max-w-2xl mx-auto">
          I design and build fast, reliable, and impactful web applications for businesses that want to grow smarter.
        </motion.p>
      </div>
    </Section>
  );
}