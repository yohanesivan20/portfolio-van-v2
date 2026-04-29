"use client";
import { motion } from "framer-motion";

export default function Loader() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black z-50">
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="text-2xl tracking-widest text-green-400"
      >
        INITIALIZING SYSTEM...
      </motion.h1>
    </div>
  );
}