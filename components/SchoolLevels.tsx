"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const FONT_URL =
  "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800&family=DM+Sans:wght@400;500;600&display=swap";
const NAVY = "#0D1B38";
const GOLD = "#C9A84C";
const CRIMSON = "#C8102E";

/* ── Animation variants ───────────────────────────────────── */
const sectionContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.13, delayChildren: 0.1 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const cardVariant = (delay: number) => ({
  hidden: { opacity: 0, y: 36 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1] as const,
      delay: delay / 1000,
    },
  },
});

const ctaVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.3 } },
};

const ctaItem = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

/* ── Data ─────────────────────────────────────────────────── */
const levels = [
  {
    id: "pre-primary",
    title: "Pre Primary",
    description: "",
    img: "/pre-primary.jpg",
    size: "large",
  },
  {
    id: "primary",
    title: "Primary School",
    description: "",
    img: "/primary.jpg",
    size: "small",
  },
  {
    id: "secondary",
    title: "Secondary School",
    img: "/secondary.jpg",
    size: "small",
  },
  {
    id: "high",
    title: "High School",
    description: "",
    img: "/high.jpg",
    size: "wide",
  },
];

/* ── Section ──────────────────────────────────────────────── */
export default function SchoolLevelsSection() {
  return (
    <>
      <style>{`@import url('${FONT_URL}');`}</style>

      <section className="bg-[#E6F2F8] py-24 px-4 relative overflow-hidden">
        {/* subtle radial glow */}
        <div className="pointer-events-none absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-white/20 blur-3xl" />

        <div className="max-w-6xl mx-auto">
          {/* ── Heading ── */}
          <motion.div
            className="text-center mb-14"
            variants={sectionContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
          >
            <motion.div
              variants={fadeUp}
            
            >
              <span className="text-red-700 text-sm font-semibold tracking-[0.2em] mb-2 uppercase font-body">
                Academics
              </span>
            </motion.div>

            <motion.h2
              variants={fadeUp}
              className="text-4xl md:text-[3rem] leading-tight mb-5"
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontWeight: 700,
                color: NAVY,
                letterSpacing: "-0.01em",
              }}
            >
              School{" "}
              <em style={{ fontStyle: "italic", color: GOLD }}>Levels</em>
            </motion.h2>
            <motion.div
              variants={fadeUp}
              className="flex items-center justify-center gap-3 mb-5"
            >
              <div
                className="h-px w-16"
                style={{
                  background: `linear-gradient(90deg, transparent, ${NAVY}20)`,
                }}
              />
              <span
                className="w-1.5 h-1.5 rounded-full"
                style={{ background: GOLD, display: "inline-block" }}
              />
              <span
                className="w-2 h-2 rounded-full border"
                style={{ borderColor: `${NAVY}28`, display: "inline-block" }}
              />
              <span
                className="w-1.5 h-1.5 rounded-full"
                style={{ background: GOLD, display: "inline-block" }}
              />
              <div
                className="h-px w-16"
                style={{
                  background: `linear-gradient(90deg, ${NAVY}20, transparent)`,
                }}
              />
            </motion.div>
            <motion.p
              variants={fadeUp}
              className="text-slate-500 text-sm leading-relaxed max-w-lg mx-auto font-body"
            >
              NSK School has four levels of schooling. Here, students are
              groomed and molded at every stage of the schooling journey.
            </motion.p>
          </motion.div>

          {/* ── Grid ── */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {/* Large card — Pre Primary */}
            <motion.div
              className="h-[520px] lg:h-full min-h-[460px]"
              variants={cardVariant(0)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-40px" }}
            >
              <LevelCard level={levels[0]} className="h-full" />
            </motion.div>

            {/* Right panel */}
            <div className="grid grid-cols-2 grid-rows-2 gap-4">
              <motion.div
                className="h-[230px]"
                variants={cardVariant(120)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-40px" }}
              >
                <LevelCard level={levels[1]} className="h-full" />
              </motion.div>

              <motion.div
                className="h-[230px]"
                variants={cardVariant(200)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-40px" }}
              >
                <LevelCard level={levels[2]} className="h-full" />
              </motion.div>

              <motion.div
                className="col-span-2 h-[230px]"
                variants={cardVariant(300)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-40px" }}
              >
                <LevelCard level={levels[3]} className="h-full" />
              </motion.div>
            </div>
          </div>

          {/* ── CTAs ── */}
          <motion.div
            className="flex flex-col sm:flex-row gap-3 justify-center mt-12"
            variants={ctaVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-40px" }}
          >
            <motion.button
              variants={ctaItem}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-red-600 hover:bg-red-700 active:bg-red-800 text-white px-10 py-3 font-semibold text-sm rounded-lg transition-colors duration-150 cursor-pointer shadow-lg shadow-red-900/40 font-body"
            >
              Enroll Now
            </motion.button>

            <motion.button
              variants={ctaItem}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-white/40 hover:bg-white/60 border border-[#0D1B38]/20 text-[#0D1B38]/80 px-10 py-3 font-semibold text-sm rounded-lg transition-colors duration-150 cursor-pointer"
            >
              Book a Visit
            </motion.button>
          </motion.div>
        </div>
      </section>
    </>
  );
}

/* ── LevelCard ────────────────────────────────────────────── */
interface LevelCardProps {
  level: (typeof levels)[number];
  className?: string;
}

function LevelCard({ level, className = "" }: LevelCardProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={`relative rounded-2xl overflow-hidden cursor-pointer ${className}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Background image */}
      <img
        src={level.img}
        alt={level.title}
        className="absolute inset-0 w-full h-full object-cover"
        style={{
          transform: hovered ? "scale(1.05)" : "scale(1)",
          transition: "transform .55s ease",
        }}
      />

      {/* Gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: hovered
            ? "linear-gradient(to top, rgba(13,27,56,.88) 0%, rgba(13,27,56,.35) 55%, transparent 100%)"
            : "linear-gradient(to top, rgba(13,27,56,.75) 0%, rgba(13,27,56,.18) 55%, transparent 100%)",
          transition: "background .4s ease",
        }}
      />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-end p-5">
        <h3
          className="text-white font-bold leading-tight mb-1"
          style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: level.size === "large" ? "1.75rem" : "1.15rem",
          }}
        >
          {level.title}
        </h3>

        {level.description && (
          <p
            className="text-white/75 text-xs leading-relaxed mt-1"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              maxWidth: "22ch",
              opacity: hovered ? 1 : 0.85,
              transition: "opacity .3s ease",
            }}
          >
            {level.description}
          </p>
        )}
      </div>
    </div>
  );
}
