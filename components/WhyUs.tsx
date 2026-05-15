"use client";

import { motion } from "framer-motion";

/* ─── Tokens ─────────────────────────────────────────────── */
const NAVY = "#0D1B38";
const GOLD = "#C9A84C";
const CRIMSON = "#C8102E";
const SLATE = "#64748B";

/* ─── Animation variants ─────────────────────────────────── */
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

const cardVariant = (i: number) => ({
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1] as const,
      delay: 0.15 + i * 0.15,
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

/* ─── Data ────────────────────────────────────────────────── */
const items = [
  {
    num: "01",
    title: "Activity Based Learning",
    description:
      "We encourage our students to experiment and go beyond normal learning methodologies, promoting a personal learning experience through practical activities and real-time problem-solving drills.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ width: 20, height: 20 }}
      >
        <path d="M12 20h9" />
        <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
      </svg>
    ),
  },
  {
    num: "02",
    title: "Varying Teaching Modalities",
    description:
      "We have practically shifted from blackboard to digital board, staying up to date with ever-changing teaching styles to give every student the very best of all learning worlds.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ width: 20, height: 20 }}
      >
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4M6 8h8M6 11h5" />
      </svg>
    ),
  },
  {
    num: "03",
    title: "All Round Development",
    description:
      "Student development goes beyond academics — it embraces physical and psychological growth. We offer a wide horizon of opportunities to help every child unfurl their true potential.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ width: 20, height: 20 }}
      >
        <circle cx="12" cy="8" r="4" />
        <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
        <path d="M16 11l2 2 4-4" />
      </svg>
    ),
  },
];

/* ─── Section ─────────────────────────────────────────────── */
export default function WhyUs() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,600;0,700;1,600&family=Inter:wght@400;500;600&display=swap');

        .whyus-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 28px;
        }
        @media (max-width: 1023px) { .whyus-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 599px)  { .whyus-grid { grid-template-columns: 1fr; } }

        .wu-card {
          position: relative;
          background: #fff;
          border-radius: 0 14px 14px 0;
          border-left: 3.5px solid ${NAVY};
          border-top: 1px solid rgba(0,0,0,0.07);
          border-right: 1px solid rgba(0,0,0,0.07);
          border-bottom: 1px solid rgba(0,0,0,0.07);
          box-shadow: 0 2px 12px rgba(13,27,56,.07), 0 1px 4px rgba(13,27,56,.04);
          overflow: hidden;
          cursor: default;
          transition: border-color .3s ease, box-shadow .32s ease, transform .32s ease;
        }
        .wu-card:hover {
          border-left-color: ${CRIMSON};
          border-top-color: rgba(200,16,46,.18);
          border-right-color: rgba(200,16,46,.18);
          border-bottom-color: rgba(200,16,46,.18);
          box-shadow: 0 20px 48px rgba(13,27,56,.12), 0 4px 16px rgba(13,27,56,.06);
          transform: translateY(-5px);
        }
        .wu-num-ghost {
          position: absolute;
          bottom: -10px; right: 14px;
          font-family: 'Playfair Display', Georgia, serif;
          font-weight: 700;
          font-size: 7rem;
          line-height: 1;
          color: ${NAVY};
          opacity: .038;
          user-select: none;
          pointer-events: none;
          letter-spacing: -0.04em;
          transition: color .3s ease, opacity .3s ease;
        }
        .wu-card:hover .wu-num-ghost { color: ${CRIMSON}; opacity: .055; }

        .wu-icon-wrap {
          width: 40px; height: 40px;
          border-radius: 10px;
          display: flex; align-items: center; justify-content: center;
          background: rgba(13,27,56,.06);
          border: 1px solid rgba(13,27,56,.10);
          color: ${NAVY};
          transition: background .3s ease, border-color .3s ease, color .3s ease;
        }
        .wu-card:hover .wu-icon-wrap {
          background: rgba(200,16,46,.08);
          border-color: rgba(200,16,46,.22);
          color: ${CRIMSON};
        }
        .wu-footer-dot {
          width: 5px; height: 5px;
          border-radius: 50%;
          background: ${CRIMSON};
          opacity: .35;
          transition: opacity .3s ease;
        }
        .wu-card:hover .wu-footer-dot { opacity: 1; }
        .wu-footer-line {
          height: 1px; width: 28px;
          background: linear-gradient(90deg, rgba(200,16,46,.7), transparent);
          opacity: .25;
          transition: opacity .3s ease, width .3s ease;
        }
        .wu-card:hover .wu-footer-line { opacity: 1; width: 40px; }
        .wu-footer-bar {
          padding-top: 16px;
          border-top: 1px solid rgba(0,0,0,.06);
          transition: border-color .3s ease;
        }
        .wu-card:hover .wu-footer-bar { border-top-color: rgba(200,16,46,.18); }
      `}</style>

      <section
        style={{
          position: "relative",
          background: "#fff",
          padding: "112px 16px",
        }}
      >
        {/* Hairlines */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 1,
            background:
              "linear-gradient(90deg,transparent,rgba(201,168,76,.28) 40%,rgba(13,27,56,.10) 60%,transparent)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: 1,
            background:
              "linear-gradient(90deg,transparent,rgba(13,27,56,.08) 40%,rgba(201,168,76,.22) 60%,transparent)",
          }}
        />

        <div style={{ maxWidth: 1152, margin: "0 auto" }}>
          {/* ── Heading ── */}
          <motion.div
            style={{ textAlign: "center", marginBottom: 80 }}
            variants={sectionContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
          >
            <motion.p
              variants={fadeUp}
              className="text-red-700 text-sm font-semibold tracking-[0.2em] uppercase font-body mb-2"
            >
              What Makes Us Special
            </motion.p>

            <motion.h2
              variants={fadeUp}
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontWeight: 700,
                fontSize: "clamp(2rem,4vw,3rem)",
                lineHeight: 1.2,
                color: NAVY,
                letterSpacing: "-.01em",
                marginBottom: 20,
              }}
            >
              Building Children Who{" "}
              <em style={{ fontStyle: "italic", color: GOLD }}>Excel</em>
            </motion.h2>

            <motion.div
              variants={fadeUp}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 10,
                marginBottom: 20,
              }}
            >
              <div
                style={{
                  height: 1,
                  width: 60,
                  background: `linear-gradient(90deg,transparent,${NAVY}18)`,
                }}
              />
              <div
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  background: GOLD,
                }}
              />
              <div
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  border: `1px solid ${NAVY}28`,
                }}
              />
              <div
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  background: GOLD,
                }}
              />
              <div
                style={{
                  height: 1,
                  width: 60,
                  background: `linear-gradient(90deg,${NAVY}18,transparent)`,
                }}
              />
            </motion.div>

            <motion.p
              variants={fadeUp}
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: ".875rem",
                lineHeight: 1.7,
                color: SLATE,
                maxWidth: 420,
                margin: "0 auto",
              }}
            >
              Three founding principles that shape every student's journey —
              from their very first day to their brightest future.
            </motion.p>
          </motion.div>

          {/* ── Cards ── */}
          <div className="whyus-grid">
            {items.map((item, i) => (
              <motion.div
                key={item.num}
                className="wu-card"
                variants={cardVariant(i)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-40px" }}
              >
                <div className="wu-num-ghost">{item.num}</div>
                <div
                  style={{
                    padding: "28px 26px 28px 28px",
                    display: "flex",
                    flexDirection: "column",
                    gap: 18,
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      justifyContent: "space-between",
                    }}
                  >
                    <div className="wu-icon-wrap">{item.icon}</div>
                  </div>
                  <div>
                    <h3
                      style={{
                        fontFamily: "'Playfair Display', Georgia, serif",
                        fontWeight: 600,
                        fontSize: "1.05rem",
                        lineHeight: 1.3,
                        color: NAVY,
                        marginBottom: 10,
                      }}
                    >
                      {item.title}
                    </h3>
                    <p
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: ".8rem",
                        lineHeight: 1.75,
                        color: SLATE,
                      }}
                    >
                      {item.description}
                    </p>
                  </div>
                  <div
                    className="wu-footer-bar"
                    style={{ display: "flex", alignItems: "center", gap: 6 }}
                  >
                    <div className="wu-footer-dot" />
                    <div className="wu-footer-line" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}
