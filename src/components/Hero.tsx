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

        <motion.div className="mt-8 flex items-center justify-center gap-4">
          <a
            href="/files/CV Ivan.pdf"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm text-white hover:bg-white/5 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-.274.832-.678 1.608-1.19 2.3" />
            </svg>
            View Resume
          </a>
        </motion.div>
      </div>
    </Section>
  );
}