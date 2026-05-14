"use client";

import Navbar from "@/components/Navbar";
import Image from "next/image";
import { motion } from "framer-motion";

const stats = [
  { img: "/open-book.png", label: "CBSE Affiliated", border: true, size: 34 },
  {
    img: "/award-symbol.png",
    label: "25+ Years of Legacy",
    border: false,
    size: 52,
  },
  {
    img: "/graduation.png",
    label: "100% Qualified Faculty",
    border: true,
    size: 38,
  },
];

export function FadeIn({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const, delay }}
    >
      {children}
    </motion.div>
  );
}

const heroContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.45,
    },
  },
};

const heroItem = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const statsContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.9 } },
};

const statItem = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function LandingPage() {
  return (
    <main className="font-body">
      <section className="relative min-h-screen flex flex-col">
        {/* Background — slow, gentle zoom */}
        <motion.div
          className="absolute inset-0 z-0 overflow-hidden"
          initial={{ scale: 1.06, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] as const }}
        >
          <img
            src="/hero-bg.png"
            alt="School building"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-[#0d1f3c]/65" />
          <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#0d1f3c]/60 to-transparent" />
        </motion.div>

        {/* Navbar
            z-[200] here is critical — this motion.div creates the stacking
            context for the Navbar. If this is z-10, the dropdown (even at
            z-[201] inside) can never paint above other z-10 siblings like
            the hero content below. */}
        <motion.div
          className="relative z-[200]"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
        >
          <Navbar />
        </motion.div>

        {/* Hero Content — z-10 keeps it above the background but below the navbar */}
        <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 pt-20">
          <motion.div
            className="max-w-4xl mx-auto flex flex-col items-center"
            variants={heroContainer}
            initial="hidden"
            animate="show"
          >
            {/* Eyebrow badge */}
            <motion.span
              variants={heroItem}
              className="mb-5 inline-flex items-center gap-2 bg-white/10 border border-white/20 backdrop-blur-sm text-white/80 text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full"
            >
              India · CBSE Affiliated
            </motion.span>

            <motion.h1
              variants={heroItem}
              className="font-heading text-white text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.05] tracking-tight"
            >
              A place to Learn, Grow &{" "}
              <span
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontStyle: "italic",
                  color: "#E8B84B",
                  verticalAlign: "baseline",
                  position: "relative",
                  top: "2px",
                }}
              >
                Lead
              </span>
            </motion.h1>
            <motion.p
              variants={heroItem}
              className="mt-5 text-white/60 text-center text-base sm:text-lg max-w-lg mx-auto leading-relaxed font-body font-normal"
            >
              Nurturing minds, building futures, and shaping leaders of tomorrow
              through holistic and quality learning.
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              variants={heroItem}
              className="flex flex-col sm:flex-row gap-3 justify-center mt-9"
            >
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-red-600 hover:bg-red-700 active:bg-red-800 text-white px-10 py-3 font-semibold text-sm rounded-lg transition-colors duration-150 cursor-pointer shadow-lg shadow-red-900/40"
              >
                Enroll Now
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-white/5 hover:bg-white/10 border border-white/25 text-white/90 px-10 py-3 font-semibold text-sm rounded-lg transition-colors duration-150 cursor-pointer"
              >
                Book a Visit
              </motion.button>
            </motion.div>

            {/* Scroll indicator */}
            <motion.div
              variants={heroItem}
              className="mt-14 flex flex-col items-center gap-1.5 text-white/30 animate-bounce"
            >
              <span className="text-[11px] tracking-widest uppercase font-medium">
                Scroll
              </span>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M8 3v10M4 9l4 4 4-4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </motion.div>
          </motion.div>
        </div>

        {/* Stats Bar */}
        <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 pb-0">
          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-t-2xl shadow-2xl overflow-hidden">
              <motion.div
                className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-stone-200"
                variants={statsContainer}
                initial="hidden"
                animate="show"
              >
                {stats.map(({ img, label, border, size }, i) => (
                  <motion.div
                    key={i}
                    variants={statItem}
                    className="flex items-center justify-center gap-4 px-8 py-5"
                  >
                    <div
                      className={`w-[60px] h-[60px] flex-shrink-0 flex items-center justify-center ${
                        border ? "rounded-full border-2 border-[#1a2e5a]" : ""
                      }`}
                    >
                      <Image
                        src={img}
                        alt={label}
                        width={size}
                        height={size}
                        className="object-contain"
                      />
                    </div>
                    <span className="font-heading text-[#1a2e5a] font-semibold text-[15px] tracking-wide leading-snug">
                      {label}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
