"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Section from "./Section";

const videos = [
  {
    id: "qKldSICdNSA",
    embed: "https://www.youtube.com/embed/qKldSICdNSA",
    label: "001",
  },
  {
    id: "UA-8k-_uPxI",
    embed: "https://www.youtube.com/embed/UA-8k-_uPxI",
    label: "002",
  },
  {
    id: "pXH3aim1Bus",
    embed: "https://www.youtube.com/embed/pXH3aim1Bus",
    label: "003",
  },
];

export default function Creative() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <Section id="creative">
      <div className="w-full overflow-hidden">

        {/* HEADER */}
        <div className="text-center mb-16 relative">
          <p className="text-green-400 text-sm tracking-[5px] mb-4">
            CREATIVE WORK
          </p>
          <h2 className="text-4xl md:text-5xl font-bold">
            Video Editing
          </h2>

          {/* decorative horizontal film perforations */}
          <div className="flex justify-center gap-2 mt-8 opacity-20">
            {Array.from({ length: 16 }).map((_, i) => (
              <div key={i} className="w-3 h-4 rounded-sm border border-white/60" />
            ))}
          </div>
        </div>

        {/* FILM STRIP TRACK */}
        <div className="relative">

          {/* top perforations */}
          <div className="flex gap-[6px] mb-2 px-1">
            {Array.from({ length: 40 }).map((_, i) => (
              <div key={i} className="w-4 h-3 rounded-[2px] bg-white/8 shrink-0" />
            ))}
          </div>

          {/* frames */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-white/10 bg-[#080808]">
            {videos.map((v, i) => (
              <motion.div
                key={v.id}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
                onClick={() => setActive(i)}
                className="relative group cursor-pointer border-r border-white/10 last:border-r-0 overflow-hidden"
              >
                {/* YouTube thumbnail */}
                <div className="relative aspect-video bg-[#0c0c0c]">
                  <img
                    src={`https://img.youtube.com/vi/${v.id}/hqdefault.jpg`}
                    alt={`Video ${v.label}`}
                    className="w-full h-full object-cover opacity-70 group-hover:opacity-90 transition-opacity duration-300"
                  />

                  {/* grain overlay */}
                  <div
                    className="absolute inset-0 opacity-30 pointer-events-none"
                    style={{
                      backgroundImage:
                        "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E\")",
                      backgroundSize: "150px 150px",
                    }}
                  />

                  {/* vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20" />

                  {/* play button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      whileHover={{ scale: 1.15 }}
                      className="w-14 h-14 rounded-full border border-green-400/70 bg-black/50 flex items-center justify-center backdrop-blur-sm group-hover:bg-green-400/20 transition-colors duration-300"
                    >
                      <svg className="w-5 h-5 text-green-400 ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </motion.div>
                  </div>

                  {/* frame number */}
                  <div className="absolute bottom-3 left-3">
                    <span className="text-white/40 text-xs tracking-[4px] font-mono">
                      FRAME {v.label}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* bottom perforations */}
          <div className="flex gap-[6px] mt-2 px-1">
            {Array.from({ length: 40 }).map((_, i) => (
              <div key={i} className="w-4 h-3 rounded-[2px] bg-white/8 shrink-0" />
            ))}
          </div>
        </div>

        {/* click hint */}
        <p className="text-center text-neutral-600 text-xs tracking-[3px] mt-8">
          CLICK A FRAME TO PLAY
        </p>

      </div>

      {/* LIGHTBOX MODAL */}
      <AnimatePresence>
        {active !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 px-4"
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-4xl"
            >
              {/* film perforations top */}
              <div className="flex gap-[5px] mb-1">
                {Array.from({ length: 36 }).map((_, i) => (
                  <div key={i} className="w-4 h-3 rounded-[2px] bg-white/10 shrink-0" />
                ))}
              </div>

              {/* video frame */}
              <div className="border border-white/10 bg-black aspect-video">
                <iframe
                  src={`${videos[active].embed}?autoplay=1`}
                  title={`Video ${videos[active].label}`}
                  allow="autoplay; fullscreen"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>

              {/* film perforations bottom */}
              <div className="flex gap-[5px] mt-1">
                {Array.from({ length: 36 }).map((_, i) => (
                  <div key={i} className="w-4 h-3 rounded-[2px] bg-white/10 shrink-0" />
                ))}
              </div>

              <div className="flex items-center justify-between mt-4 px-1">
                <span className="text-white/30 text-xs tracking-[4px] font-mono">
                  FRAME {videos[active].label} / 003
                </span>
                <button
                  onClick={() => setActive(null)}
                  className="text-xs tracking-[3px] text-white/40 hover:text-white transition-colors border border-white/20 px-4 py-2 rounded-full"
                >
                  CLOSE
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  );
}