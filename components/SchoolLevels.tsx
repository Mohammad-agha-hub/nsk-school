"use client";

import { useEffect, useRef, useState } from "react";

/* ── font import via next/head or just a global style tag ── */
const FONT_URL =
  "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800&family=DM+Sans:wght@400;500;600&display=swap";
const NAVY = "#0D1B38";
const GOLD = "#C9A84C";

/* ── data ─────────────────────────────────────────────────── */
const levels = [
  {
    id: "pre-primary",
    
    title: "Pre Primary",
    description: "",
    img: "/pre-primary.jpg", // ← replace with your asset
    size: "large", // occupies left column
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
    size: "wide", // spans both right sub-columns
  },
];

/* ── useInView ────────────────────────────────────────────── */
function useInView(threshold = 0.08) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setInView(true);
      },
      { threshold },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);
  return { ref, inView };
}

/* ── Section ──────────────────────────────────────────────── */
export default function SchoolLevelsSection() {
  const { ref, inView } = useInView();

  return (
    <>
      <style>{`@import url('${FONT_URL}');`}</style>

      <section
        ref={ref}
        className="bg-[#E6F2F8] py-24 px-4 relative overflow-hidden"
      >
        {/* subtle radial glow top-right */}
        <div className="pointer-events-none absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-white/20 blur-3xl" />

        <div className="max-w-6xl mx-auto">
          {/* ── Heading ─────────────────────────────────────── */}
          <div
            className="text-center mb-14 transition-all duration-700"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              opacity: inView ? 1 : 0,
              transform: inView ? "translateY(0)" : "translateY(24px)",
            }}
          >
            {/* eyebrow */}
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="block w-6 h-px bg-[#C8102E]" />
              <span
                className="text-[#C8102E] text-xs font-semibold tracking-[.22em] uppercase"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                Academics
              </span>
            </div>

            <h2
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
            </h2>

            <p
              className="text-slate-500 text-sm leading-relaxed max-w-lg mx-auto"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              NSK School has four levels of schooling. Here, students are
              groomed and molded at every stage of the schooling journey.
            </p>
          </div>

          {/* ── Grid ────────────────────────────────────────── */}
          {/*
            Outer: 2 cols  [large-card | right-panel]
            Right: 2x2     [small small]
                           [wide  wide ]
          */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {/* ── Large card — Pre Primary ── */}
            <LevelCard
              level={levels[0]}
              className="h-[520px] lg:h-full min-h-[460px]"
              inView={inView}
              delay={0}
            />

            {/* ── Right panel ── */}
            <div className="grid grid-cols-2 grid-rows-2 gap-4">
              {/* Primary */}
              <LevelCard
                level={levels[1]}
                className="h-[230px]"
                inView={inView}
                delay={120}
              />

              {/* Secondary */}
              <LevelCard
                level={levels[2]}
                className="h-[230px]"
                inView={inView}
                delay={200}
              />

              {/* High School — spans both columns */}
              <LevelCard
                level={levels[3]}
                className="col-span-2 h-[230px]"
                inView={inView}
                delay={300}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

/* ── LevelCard ────────────────────────────────────────────── */
interface LevelCardProps {
  level: (typeof levels)[number];
  className?: string;
  inView: boolean;
  delay: number;
}

function LevelCard({ level, className = "", inView, delay }: LevelCardProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={`relative rounded-2xl overflow-hidden cursor-pointer ${className}`}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(36px)",
        transition: `opacity .6s ease ${delay}ms, transform .6s ease ${delay}ms`,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* ── Background image ── */}
      <img
        src={level.img}
        alt={level.title}
        className="absolute inset-0 w-full h-full object-cover"
        style={{
          transform: hovered ? "scale(1.05)" : "scale(1)",
          transition: "transform .55s ease",
        }}
      />

      {/* ── Gradient overlay ── */}
      <div
        className="absolute inset-0"
        style={{
          background: hovered
            ? "linear-gradient(to top, rgba(13,27,56,.88) 0%, rgba(13,27,56,.35) 55%, transparent 100%)"
            : "linear-gradient(to top, rgba(13,27,56,.75) 0%, rgba(13,27,56,.18) 55%, transparent 100%)",
          transition: "background .4s ease",
        }}
      />

      {/* ── Content ── */}
      <div className="absolute inset-0 flex flex-col justify-end p-5">
        

        {/* Title */}
        <h3
          className="text-white font-bold leading-tight mb-1"
          style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: level.size === "large" ? "1.75rem" : "1.15rem",
          }}
        >
          {level.title}
        </h3>

        {/* Description — only some cards */}
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
