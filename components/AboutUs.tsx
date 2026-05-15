"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const NAVY = "#0D1B38";
const GOLD = "#C9A84C";

/* ── Animation variants (mirrors landing page style) ── */
const sectionContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.13,
      delayChildren: 0.1,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const fadeLeft = {
  hidden: { opacity: 0, x: -32 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const fadeRight = {
  hidden: { opacity: 0, x: 32 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const statsContainer = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.11, delayChildren: 0.2 },
  },
};

const statItem = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as const },
  },
};

/* ── Animated counter ── */
function Counter({
  target,
  duration = 1800,
}: {
  target: number;
  duration?: number;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const tick = (now: number) => {
            const p = Math.min((now - start) / duration, 1);
            const ease = 1 - Math.pow(1 - p, 3);
            setCount(Math.floor(ease * target));
            if (p < 1) requestAnimationFrame(tick);
            else setCount(target);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.3 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [target, duration]);

  return <span ref={ref}>{count.toLocaleString()}</span>;
}

const stats = [
  { value: 1200, suffix: "+", label: "Students" },
  { value: 47, suffix: "+", label: "Teachers" },
  { value: 30, suffix: "+", label: "Classrooms" },
  { value: 100, suffix: "+", label: "Awards" },
];

const AboutUs = () => {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,600;0,700;1,600&family=Inter:wght@400;500;600&display=swap');

        .stats-banner {
          position: relative;
          background: ${NAVY};
          overflow: hidden;
          margin-top: 72px;
          width: 100%;
          margin-left: auto;
          margin-right: auto;
          border-radius: 20px;
        }
        .stats-banner::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image: repeating-linear-gradient(
            -45deg,
            rgba(255,255,255,.025) 0px,
            rgba(255,255,255,.025) 1px,
            transparent 1px,
            transparent 18px
          );
          pointer-events: none;
        }
        .stats-banner::after {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 3px;
          background: linear-gradient(90deg, transparent, ${GOLD}, ${GOLD}88, transparent);
          opacity: .7;
        }
        .stats-banner-inner {
          max-width: 1152px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          padding: 30px 24px 35px;
          position: relative;
          z-index: 1;
        }
        @media (max-width: 640px) {
          .stats-banner-inner { grid-template-columns: repeat(2, 1fr); padding: 48px 16px 44px; }
        }
        .stats-cell {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
          padding: 0 20px;
          cursor: default;
        }
        .stats-cell::before {
          content: '';
          position: absolute;
          left: 0; top: 10%; bottom: 10%;
          width: 1px;
          background: linear-gradient(to bottom, transparent, rgba(201,168,76,.35), transparent);
        }
        .stats-cell:first-child::before { display: none; }
        @media (max-width: 640px) {
          .stats-cell:nth-child(3)::before { display: none; }
        }
        .stats-number {
          font-family: 'Playfair Display', Georgia, serif;
          font-weight: 700;
          font-size: clamp(2.2rem, 4vw, 3rem);
          line-height: 1;
          color: white;
          letter-spacing: -.02em;
          display: flex;
          align-items: baseline;
          gap: 2px;
        }
        .stats-suffix {
          font-size: 1.6rem;
          color: white;
          font-weight: 700;
          opacity: .8;
        }
        .stats-rule {
          width: 28px;
          height: 2px;
          border-radius: 2px;
          background: linear-gradient(90deg, ${GOLD}, rgba(201,168,76,.3));
          transition: width .3s;
        }
        .stats-cell:hover .stats-rule { width: 42px; }
        .stats-label {
          font-family: 'Inter', sans-serif;
          font-size: .72rem;
          font-weight: 600;
          letter-spacing: .18em;
          text-transform: uppercase;
          color: rgba(255,255,255,.5);
          text-align: center;
        }
      `}</style>

      <section className="bg-white py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          {/* ── Eyebrow + heading ── */}
          <motion.div
            className="flex flex-col items-center mb-14"
            variants={sectionContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
          >
            <motion.span
              variants={fadeUp}
              className="text-red-700 text-sm font-semibold tracking-[0.2em] uppercase font-body mb-2"
            >
              About Us
            </motion.span>

            <motion.h2
              variants={fadeUp}
              className="text-4xl md:text-[3rem] leading-tight mb-5 text-center"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontWeight: 700,
                color: NAVY,
                letterSpacing: "-0.01em",
              }}
            >
              A Legacy Of Excellence In{" "}
              <em style={{ fontStyle: "italic", color: GOLD }}>Education</em>
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
          </motion.div>

          {/* ── Two column layout ── */}
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">
            {/* Left: Image */}
            <motion.div
              className="relative flex-shrink-0 w-full max-w-sm lg:max-w-md mx-auto lg:mx-0"
              variants={fadeLeft}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-60px" }}
            >
              <div className="absolute -bottom-4 -right-4 w-full h-full border-4 border-[#C9A84C] rounded-sm z-0" />
              <div className="relative z-10">
                <img
                  src="/img-10.jpg"
                  alt="NSK High School students"
                  className="w-full h-[420px] object-cover object-top rounded-sm shadow-xl"
                />
              </div>
            </motion.div>

            {/* Right: Quote + content */}
            <motion.div
              className="flex flex-col gap-7 flex-1"
              variants={fadeRight}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-60px" }}
            >
              <div className="border-l-4 border-[#C9A84C] pl-5">
                <p className="font-quote text-[#1a1a1a] text-lg sm:text-xl leading-relaxed italic">
                  "NSK High School has transformed my child's life, fostering
                  academic excellence and character. It is truly a place where
                  leaders are molded."
                </p>
                <p className="mt-3 text-stone-500 text-sm font-medium font-body not-italic">
                  — Parent
                </p>
              </div>

              <div className="w-12 h-px bg-[#C9A84C]" />

              <div>
                <p className="text-stone-500 text-[15px] leading-relaxed font-body">
                  For over two and a half decades, NSK High School has been a
                  beacon of knowledge and integrity. We are committed to
                  providing a world-class education that empowers students to
                  reach their full potential and contribute meaningfully to
                  society. Our holistic approach nurtures intellectual, social,
                  and emotional growth.
                </p>
              </div>

             
                <div className="flex justify-center">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="bg-red-600 hover:bg-red-700 w-[80%] sm:w-[40%] active:bg-red-800 text-white px-10 py-3 font-semibold text-sm rounded-lg transition-colors duration-150 cursor-pointer shadow-lg shadow-red-900/40"
                  >
                    Book An Appointment
                  </motion.button>
                </div>
              
            </motion.div>
          </div>

          {/* ── Stats banner ── */}
          <div className="stats-banner">
            <motion.div
              className="stats-banner-inner"
              variants={statsContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-40px" }}
            >
              {stats.map((s) => (
                <motion.div
                  key={s.label}
                  className="stats-cell"
                  variants={statItem}
                >
                  <div className="stats-number">
                    <Counter target={s.value} />
                    <span className="stats-suffix">{s.suffix}</span>
                  </div>
                  <div className="stats-rule" />
                  <p className="stats-label">{s.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
