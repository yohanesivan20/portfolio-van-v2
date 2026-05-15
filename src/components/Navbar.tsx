"use client";

import { motion } from "framer-motion";
import Lenis from "lenis";
import { useEffect, useRef } from "react";
import { getLenis } from "./SmoothScroll";

const scrollTo = (id: string) => {
  const el = document.getElementById(id);
  const lenis = getLenis();

  if (el && lenis) {
    lenis.scrollTo(el);
  }
};

const links = [
  { label: "Home", target: "home" },
  { label: "About", target: "about" },
  { label: "Skills", target: "skills" },
  { label: "Projects", target: "projects" },
  { label: "Creative", target: "creative" },
  { label: "Experience", target: "experience" },
  { label: "Contact", target: "contact" },
];

export default function Navbar() {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    lenisRef.current = new Lenis({ lerp: 0.08 });

    function raf(time: number) {
      lenisRef.current?.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el && lenisRef.current) {
      lenisRef.current.scrollTo(el);
    }
  };

  return (
    <div className="fixed top-0 left-0 w-full z-50 flex justify-center pt-4">
      <div className="flex gap-3 backdrop-blur-xl bg-white/5 border border-white/10 rounded-full px-6 py-3 shadow-lg">
        {links.map((link) => (
          <motion.button
            key={link.target}
            onClick={() => scrollTo(link.target)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="text-sm text-white hover:text-green-400 transition"
          >
            {link.label}
          </motion.button>
        ))}
      </div>
    </div>
  );
}