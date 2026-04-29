"use client";
import { motion } from "framer-motion";
import Section from "./Section";

const socials = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/yohanes_van/",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/ivandanasuta/",
  },
  {
    label: "GitHub",
    href: "https://github.com/yohanesivan20",
  },
];

export default function Contact() {
  return (
    <Section id="contact">
      <div className="max-w-3xl mx-auto text-center">

        {/* HEADER */}
        <div className="mb-10">
          <p className="text-green-400 tracking-[5px] text-sm mb-4">
            CONTACT
          </p>

          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Let’s Build Something Together
          </h2>

          <p className="text-neutral-400 leading-relaxed">
            I'm open for freelance, collaboration, or full-time opportunities.
            If you have an idea or project in mind, let's make it happen.
          </p>
        </div>

        {/* SOCIAL BUTTONS */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {socials.map((social) => (
            <motion.a
              key={social.href}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.96 }}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-white transition hover:border-green-400 hover:text-green-400 hover:bg-green-400/10"
            >
              {social.label}
            </motion.a>
          ))}
        </div>

        {/* CTA */}
        <div className="flex gap-4 justify-center flex-wrap">
            <motion.a
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            href="https://wa.me/6282244034216"
            target="_blank"
            className="inline-flex items-center rounded-full bg-green-500 px-8 py-4 text-sm font-semibold text-black transition hover:bg-green-400 shadow-[0_0_25px_rgba(34,197,94,0.4)]"
            >
            💬 Chat via WhatsApp
            </motion.a>
        </div>

      </div>
    </Section>
  );
}