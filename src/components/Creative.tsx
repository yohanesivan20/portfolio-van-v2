"use client";
import { useState, useRef } from "react";
import { motion, AnimatePresence, useMotionValue, useTransform, useSpring, stagger, useInView } from "framer-motion";
import Section from "./Section";

// ─── Data ────────────────────────────────────────────────────────────────────

const videos = [
  { id: "qKldSICdNSA", embed: "https://www.youtube.com/embed/qKldSICdNSA", label: "001" },
  { id: "UA-8k-_uPxI",  embed: "https://www.youtube.com/embed/UA-8k-_uPxI",  label: "002" },
  { id: "pXH3aim1Bus", embed: "https://www.youtube.com/embed/pXH3aim1Bus", label: "003" },
];

const magazines = [
  {
    id: 1,
    title: "Majalah Warta Ubaya",
    year: "2020",
    category: "Editorial Design",
    pdf: "/files/MAJALAH_WARTA_UBAYA_JULI_2020.pdf",
    accent: "#4ade80",
    issue: "Vol. 01",
  },
  {
    id: 2,
    title: "Booklet Portofolio Design",
    year: "2021",
    category: "Art Direction",
    pdf: "/files/Portofolio_Ivan.pdf",
    accent: "#4ade80",
    issue: "Vol. 02",
  },
];

// ─── Easing + spring configs ──────────────────────────────────────────────────

const springConfig = { type: "spring", stiffness: 300, damping: 30 };
const softSpring   = { type: "spring", stiffness: 160, damping: 24 };
const premiumEase  = [0.25, 0.46, 0.45, 0.94] as const;

// ─── Grain SVG (shared) ───────────────────────────────────────────────────────

const grainStyle: React.CSSProperties = {
  backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
  backgroundSize: "150px 150px",
};

// ─── Shimmer card (loading state fallback) ────────────────────────────────────

function ShimmerCard() {
  return (
    <div className="relative overflow-hidden rounded-none bg-[#0c0c0c] aspect-[3/4]">
      <motion.div
        className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/5 to-transparent"
        animate={{ translateX: ["−100%", "200%"] }}
        transition={{ duration: 1.6, repeat: Infinity, ease: "linear" }}
      />
      <div className="absolute bottom-0 left-0 right-0 p-6 space-y-2">
        <div className="h-3 w-24 bg-white/10 rounded" />
        <div className="h-5 w-36 bg-white/10 rounded" />
      </div>
    </div>
  );
}

// ─── Magnetic wrapper ─────────────────────────────────────────────────────────

function MagneticCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-60, 60], [4, -4]);
  const rotateY = useTransform(x, [-60, 60], [-4, 4]);
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);
  const springRX = useSpring(rotateX, springConfig);
  const springRY = useSpring(rotateY, springConfig);

  function onMouseMove(e: React.MouseEvent) {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    x.set(e.clientX - rect.left - rect.width / 2);
    y.set(e.clientY - rect.top  - rect.height / 2);
  }
  function onMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      ref={ref}
      style={{ x: springX, y: springY, rotateX: springRX, rotateY: springRY, transformPerspective: 900 }}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ─── Magazine Card ────────────────────────────────────────────────────────────

function MagazineCard({
  mag,
  index,
  onOpen,
}: {
  mag: (typeof magazines)[number];
  index: number;
  onOpen: () => void;
}) {
  const [imgLoaded, setImgLoaded] = useState(false);
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, delay: index * 0.18, ease: premiumEase }}
    >
      <MagneticCard>
        <motion.div
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 4 + index * 0.8, repeat: Infinity, ease: "easeInOut" }}
          className="relative cursor-pointer group"
          onClick={onOpen}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          {/* ambient glow behind card */}
          <motion.div
            className="absolute -inset-8 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none blur-3xl"
            style={{ background: "radial-gradient(circle, rgba(74,222,128,0.08) 0%, transparent 70%)" }}
          />

          {/* cover image */}
          <div className="relative aspect-[3/4] overflow-hidden bg-[#0c0c0c] border border-white/8">
            {!imgLoaded && <ShimmerCard />}
            <motion.img
              src={mag.cover}
              alt={mag.title}
              onLoad={() => setImgLoaded(true)}
              className={`w-full h-full object-cover transition-opacity duration-500 ${imgLoaded ? "opacity-80" : "opacity-0"} group-hover:opacity-100`}
              animate={{ scale: hovered ? 1.04 : 1 }}
              transition={{ duration: 0.6, ease: premiumEase }}
            />

            {/* grain overlay */}
            <div className="absolute inset-0 opacity-25 mix-blend-overlay pointer-events-none" style={grainStyle} />

            {/* vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />

            {/* cinematic scan line on hover */}
            <motion.div
              className="absolute inset-x-0 h-[1px] bg-green-400/40 pointer-events-none"
              initial={{ top: "0%" }}
              animate={hovered ? { top: ["0%", "100%"] } : { top: "0%" }}
              transition={{ duration: 1.2, ease: "linear", repeat: hovered ? Infinity : 0 }}
            />

            {/* bottom metadata */}
            <div className="absolute bottom-0 left-0 right-0 p-5">
              <motion.p
                className="text-green-400 text-[10px] tracking-[5px] mb-1"
                animate={{ opacity: hovered ? 1 : 0.5 }}
              >
                {mag.category.toUpperCase()} — {mag.issue}
              </motion.p>
              <motion.h3
                className="text-white text-xl font-bold tracking-tight leading-none"
                animate={{ y: hovered ? -2 : 0 }}
                transition={softSpring}
              >
                {mag.title}
              </motion.h3>
              <motion.p
                className="text-white/30 text-xs tracking-[3px] mt-1 font-mono"
                animate={{ opacity: hovered ? 0.6 : 0.3 }}
              >
                {mag.year}
              </motion.p>
            </div>

            {/* open cue */}
            <motion.div
              className="absolute top-4 right-4 w-10 h-10 border border-green-400/50 rounded-full flex items-center justify-center backdrop-blur-sm bg-black/40"
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: hovered ? 1 : 0, scale: hovered ? 1 : 0.6 }}
              transition={springConfig}
            >
              <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
              </svg>
            </motion.div>
          </div>

          {/* frame label below */}
          <div className="flex items-center justify-between mt-3 px-1">
            <span className="text-white/20 text-[10px] tracking-[4px] font-mono">FRAME {String(index + 1).padStart(3, "0")}</span>
            <span className="text-white/20 text-[10px] tracking-[2px] font-mono">PDF</span>
          </div>
        </motion.div>
      </MagneticCard>
    </motion.div>
  );
}

// ─── PDF Modal ────────────────────────────────────────────────────────────────

function PdfModal({
  mag,
  index,
  total,
  onClose,
}: {
  mag: (typeof magazines)[number];
  index: number;
  total: number;
  onClose: () => void;
}) {
  return (
    <motion.div
      key="pdf-backdrop"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="fixed inset-0 z-50 flex items-center justify-center"
      onClick={onClose}
    >
      {/* blurred dark backdrop */}
      <div className="absolute inset-0 bg-black/96 backdrop-blur-2xl" />

      {/* animated grain overlay on modal */}
      <motion.div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={grainStyle}
        animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      />

      {/* ambient green glow */}
      <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 60% 40% at 50% 50%, rgba(74,222,128,0.04) 0%, transparent 70%)" }} />

      <motion.div
        key="pdf-panel"
        initial={{ scale: 0.88, opacity: 0, y: 30 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.88, opacity: 0, y: 30 }}
        transition={{ duration: 0.5, ease: premiumEase }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-7xl mx-4 flex flex-col" style={{ height: "94vh" }}
      >
        {/* top perforations */}
        <div className="flex gap-[5px] mb-1 overflow-hidden">
          {Array.from({ length: 40 }).map((_, i) => (
            <div key={i} className="w-4 h-3 rounded-[2px] bg-white/8 shrink-0" />
          ))}
        </div>

        {/* header bar */}
        <div className="flex items-center justify-between bg-[#080808] border-x border-t border-white/10 px-6 py-4">
          <div>
            <p className="text-green-400 text-[10px] tracking-[5px] mb-0.5">{mag.category.toUpperCase()}</p>
            <h2 className="text-white text-xl font-bold tracking-tight">{mag.title}</h2>
          </div>
          <div className="flex items-center gap-6">
            <span className="text-white/30 text-xs tracking-[3px] font-mono hidden sm:block">
              {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
            </span>
            <button
              onClick={onClose}
              className="text-[10px] tracking-[3px] text-white/40 hover:text-green-400 transition-colors border border-white/20 hover:border-green-400/50 px-4 py-2 rounded-full"
            >
              CLOSE ✕
            </button>
          </div>
        </div>

        {/* PDF embed */}
        <div className=" border border-white/10 bg-[#050505] flex-1 overflow-hidden rounded-[6px] shadow-[0_0_80px_rgba(0,0,0,0.6)] " style={{ height: "82vh" }} >
          <iframe
            src={`${mag.pdf}#toolbar=0&view=FitH&zoom=60`}
            title={mag.title}
            className="w-full h-full"
          />
        </div>

        {/* bottom perforations */}
        <div className="flex gap-[5px] mt-1 overflow-hidden">
          {Array.from({ length: 40 }).map((_, i) => (
            <div key={i} className="w-4 h-3 rounded-[2px] bg-white/8 shrink-0" />
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}

// ─── Divider ──────────────────────────────────────────────────────────────────

function LuxuryDivider({ label }: { label: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: premiumEase }}
      className="flex items-center gap-6 my-20"
    >
      <div className="flex-1 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-white/5" />
      <div className="flex items-center gap-3 shrink-0">
        <div className="w-1 h-1 rounded-full bg-green-400" />
        <span className="text-white/30 text-[11px] tracking-[6px] font-mono">{label}</span>
        <div className="w-1 h-1 rounded-full bg-green-400" />
      </div>
      <div className="flex-1 h-[1px] bg-gradient-to-l from-transparent via-white/20 to-white/5" />
    </motion.div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function Creative() {
  const [activeVideo, setActiveVideo]     = useState<number | null>(null);
  const [activeMagazine, setActiveMagazine] = useState<number | null>(null);

  return (
    <Section id="creative">
      <div className="w-full overflow-hidden">

        {/* ── VIDEO SECTION HEADER ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: premiumEase }}
          className="text-center mb-16 relative"
        >
          <p className="text-green-400 text-sm tracking-[5px] mb-4">CREATIVE WORK</p>
          <h2 className="text-4xl md:text-5xl font-bold">Video Editing</h2>
          <div className="flex justify-center gap-2 mt-8 opacity-20">
            {Array.from({ length: 16 }).map((_, i) => (
              <div key={i} className="w-3 h-4 rounded-sm border border-white/60" />
            ))}
          </div>
        </motion.div>

        {/* ── FILM STRIP: VIDEOS ── */}
        <div className="relative">
          <div className="flex gap-[6px] mb-2 px-1">
            {Array.from({ length: 40 }).map((_, i) => (
              <div key={i} className="w-4 h-3 rounded-[2px] bg-white/8 shrink-0" />
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-white/10 bg-[#080808]">
            {videos.map((v, i) => (
              <motion.div
                key={v.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.12, ease: premiumEase }}
                whileHover={{ scale: 1.02 }}
                onClick={() => setActiveVideo(i)}
                className="relative group cursor-pointer border-r border-white/10 last:border-r-0 overflow-hidden"
              >
                <div className="relative aspect-video bg-[#0c0c0c]">
                  <img
                    src={`https://img.youtube.com/vi/${v.id}/hqdefault.jpg`}
                    alt={`Video ${v.label}`}
                    className="w-full h-full object-cover opacity-70 group-hover:opacity-90 transition-opacity duration-300"
                  />
                  <div className="absolute inset-0 opacity-30 pointer-events-none" style={grainStyle} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20" />
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
                  <div className="absolute bottom-3 left-3">
                    <span className="text-white/40 text-xs tracking-[4px] font-mono">FRAME {v.label}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="flex gap-[6px] mt-2 px-1">
            {Array.from({ length: 40 }).map((_, i) => (
              <div key={i} className="w-4 h-3 rounded-[2px] bg-white/8 shrink-0" />
            ))}
          </div>
        </div>

        <p className="text-center text-neutral-600 text-xs tracking-[3px] mt-8">CLICK A FRAME TO PLAY</p>

        {/* ── LUXURY DIVIDER ── */}
        <LuxuryDivider label="EDITORIAL DESIGN" />

        {/* ── EDITORIAL SECTION HEADER ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: premiumEase }}
          className="text-center mb-16 relative"
        >
          <p className="text-green-400 text-sm tracking-[5px] mb-4">DESIGN PORTFOLIO</p>
          <h2 className="text-4xl md:text-5xl font-bold">Magazine Design</h2>
          <p className="text-white/25 text-sm tracking-[2px] mt-4 max-w-sm mx-auto">
            Art direction, editorial layout & visual identity
          </p>
          <div className="flex justify-center gap-2 mt-8 opacity-20">
            {Array.from({ length: 16 }).map((_, i) => (
              <div key={i} className="w-3 h-4 rounded-sm border border-white/60" />
            ))}
          </div>
        </motion.div>

        {/* ── AMBIENT GRADIENT LAYER ── */}
        <div className="relative">
          {/* animated ambient background */}
          <motion.div
            className="absolute inset-0 pointer-events-none"
            style={{ zIndex: 0 }}
            animate={{
              background: [
                "radial-gradient(ellipse 80% 60% at 20% 50%, rgba(74,222,128,0.04) 0%, transparent 60%)",
                "radial-gradient(ellipse 80% 60% at 80% 50%, rgba(74,222,128,0.04) 0%, transparent 60%)",
                "radial-gradient(ellipse 80% 60% at 20% 50%, rgba(74,222,128,0.04) 0%, transparent 60%)",
              ],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* film strip top */}
          <div className="flex gap-[6px] mb-2 px-1 relative z-10">
            {Array.from({ length: 40 }).map((_, i) => (
              <div key={i} className="w-4 h-3 rounded-[2px] bg-white/8 shrink-0" />
            ))}
          </div>

          {/* magazine cards */}
          <div className="relative z-10 border border-white/10 bg-[#080808] grid grid-cols-1 md:grid-cols-2 gap-0">
            {/* left structural line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-white/10 pointer-events-none" />

            {magazines.map((mag, i) => (
              <div key={mag.id} className="p-8 md:p-12 flex items-center justify-center">
                <MagazineCard
                  mag={mag}
                  index={i}
                  onOpen={() => setActiveMagazine(i)}
                />
              </div>
            ))}
          </div>

          {/* film strip bottom */}
          <div className="flex gap-[6px] mt-2 px-1 relative z-10">
            {Array.from({ length: 40 }).map((_, i) => (
              <div key={i} className="w-4 h-3 rounded-[2px] bg-white/8 shrink-0" />
            ))}
          </div>
        </div>

        <p className="text-center text-neutral-600 text-xs tracking-[3px] mt-8">CLICK A COVER TO VIEW PDF</p>

      </div>

      {/* ── VIDEO LIGHTBOX ── */}
      <AnimatePresence>
        {activeVideo !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveVideo(null)}
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
              <div className="flex gap-[5px] mb-1">
                {Array.from({ length: 36 }).map((_, i) => (
                  <div key={i} className="w-4 h-3 rounded-[2px] bg-white/10 shrink-0" />
                ))}
              </div>
              <div className="border border-white/10 bg-black aspect-video">
                <iframe
                  src={`${videos[activeVideo].embed}?autoplay=1`}
                  title={`Video ${videos[activeVideo].label}`}
                  allow="autoplay; fullscreen"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
              <div className="flex gap-[5px] mt-1">
                {Array.from({ length: 36 }).map((_, i) => (
                  <div key={i} className="w-4 h-3 rounded-[2px] bg-white/10 shrink-0" />
                ))}
              </div>
              <div className="flex items-center justify-between mt-4 px-1">
                <span className="text-white/30 text-xs tracking-[4px] font-mono">
                  FRAME {videos[activeVideo].label} / 003
                </span>
                <button
                  onClick={() => setActiveVideo(null)}
                  className="text-xs tracking-[3px] text-white/40 hover:text-white transition-colors border border-white/20 px-4 py-2 rounded-full"
                >
                  CLOSE
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── PDF MODAL ── */}
      <AnimatePresence>
        {activeMagazine !== null && (
          <PdfModal
            mag={magazines[activeMagazine]}
            index={activeMagazine}
            total={magazines.length}
            onClose={() => setActiveMagazine(null)}
          />
        )}
      </AnimatePresence>

    </Section>
  );
}