"use client";

import { motion } from "framer-motion";

interface PageHeroProps {
  title: string;
  /** Optional eyebrow badge text. Defaults to "NSK High School". */
  eyebrow?: string;
  /** Path to a background image in /public. Defaults to hero-bg.png. */
  backgroundImage?: string;
}

export default function PageHero({
  title,
  eyebrow = "NSK High School",
  backgroundImage = "/hero-bg.webp",
}: PageHeroProps) {
  return (
    <section className="relative h-[52vh] min-h-[340px] max-h-[480px] flex flex-col items-center justify-center overflow-hidden">
      {/* Background — same slow zoom as landing page */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ scale: 1.06, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] as const }}
      >
        <img
          src={backgroundImage}
          alt={title}
          className="w-full h-full object-cover object-center"
        />
        {/* Same dark overlay as landing page */}
        <div className="absolute inset-0 bg-[#0d1f3c]/65" />
        {/* Bottom fade — blends into white page content below */}
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#0d1f3c]/60 to-transparent" />
      </motion.div>

      {/* Content */}
      <motion.div
        className="relative z-10 flex flex-col items-center text-center px-4"
        initial="hidden"
        animate="show"
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.12, delayChildren: 0.45 } },
        }}
      >
        {/* Eyebrow badge — same pill style as landing */}
        <motion.span
          variants={{
            hidden: { opacity: 0, y: 28 },
            show: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] as const },
            },
          }}
          className="mb-4 inline-flex items-center gap-2 bg-white/10 border border-white/20 backdrop-blur-sm text-white/80 text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full"
        >
          {eyebrow}
        </motion.span>

        {/* Title — Playfair italic, large, same weight as landing headline */}
        <motion.h1
          variants={{
            hidden: { opacity: 0, y: 28 },
            show: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] as const },
            },
          }}
          className="text-white text-4xl sm:text-5xl md:text-6xl font-bold italic tracking-tight leading-tight drop-shadow-lg"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          {title}
        </motion.h1>

        {/* Breadcrumb with gold accent — matches landing gold */}
        <motion.p
          variants={{
            hidden: { opacity: 0, y: 28 },
            show: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] as const },
            },
          }}
          className="mt-4 text-white/50 text-xs tracking-[0.25em] uppercase font-medium"
        >
          Home &nbsp;/&nbsp;
          <span className="text-[#E8B84B]">{title}</span>
        </motion.p>
      </motion.div>
    </section>
  );
}
