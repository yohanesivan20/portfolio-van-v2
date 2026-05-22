"use client";

import { motion, AnimatePresence } from "framer-motion";
import Lenis from "lenis";
import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";

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
  const [isOpen, setIsOpen] = useState(false);

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
      setIsOpen(false);
    }
  };

  return (
    <div className="fixed top-0 left-0 w-full z-50 flex justify-center px-4 pt-4">
      <div className="w-full max-w-5xl">
        {/* Desktop Navbar */}
        <div className="hidden md:flex justify-center">
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

        {/* Mobile Navbar */}
        <div className="md:hidden">
          <div className="flex items-center justify-between backdrop-blur-xl bg-black/40 border border-white/10 rounded-2xl px-5 py-3 shadow-lg">
            <h1 className="text-white font-semibold text-lg">
              Portfolio
            </h1>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white"
            >
              {isOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>

          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, y: -12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.2 }}
                className="mt-3 backdrop-blur-xl bg-black/50 border border-white/10 rounded-2xl p-4 flex flex-col gap-3"
              >
                {links.map((link) => (
                  <motion.button
                    key={link.target}
                    onClick={() => scrollTo(link.target)}
                    whileTap={{ scale: 0.95 }}
                    className="text-white text-left hover:text-green-400 transition py-2 border-b border-white/5 last:border-none"
                  >
                    {link.label}
                  </motion.button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}