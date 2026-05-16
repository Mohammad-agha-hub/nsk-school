"use client";

import { useState } from "react";
import { motion } from "framer-motion";

/* ─── Tokens ─────────────────────────────────────────── */
const NAVY = "#0D1B38";
const GOLD = "#C9A84C";
const GOLD_LT = "#e4c97a";
const CRIMSON = "#C8102E";
const ALICE = "#E6F2F8";
const SLATE = "#64748B";
const WHITE = "#ffffff";

/* ─── Animation variants ─────────────────────────────── */
const sectionContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};
const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] as const },
  },
};
const ctaVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.7 } },
};
const ctaItem = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
  },
};

/* ─── Icons ──────────────────────────────────────────── */
const IconClassroom = ({ size = 22 }: { size?: number }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{ width: size, height: size }}
  >
    <rect x="2" y="3" width="20" height="13" rx="2" />
    <path d="M8 21h8M12 17v4M6 8h8M6 11h5" />
  </svg>
);
const IconTeacher = ({ size = 22 }: { size?: number }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{ width: size, height: size }}
  >
    <circle cx="9" cy="7" r="3" />
    <path d="M3 21v-2a5 5 0 0 1 5-5h2M16 11l2 2 4-4" />
    <circle cx="19" cy="18" r="3" />
  </svg>
);
const IconDevice = ({ size = 22 }: { size?: number }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{ width: size, height: size }}
  >
    <rect x="2" y="4" width="20" height="14" rx="2" />
    <path d="M8 20h8M12 18v2M5 9h8M5 12h6" />
  </svg>
);
const IconLibrary = ({ size = 22 }: { size?: number }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{ width: size, height: size }}
  >
    <path d="M4 19V5a1 1 0 0 1 1-1h4v15H5a1 1 0 0 1-1-1ZM9 4h4l2 15H9V4ZM15 4h.5a1 1 0 0 1 .97.757L19 19h-3l-1-15Z" />
  </svg>
);

/* ─── Data ───────────────────────────────────────────── */
const items = [
  {
    id: "01",
    title: "Smart Classrooms",
    category: "Facility",
    icon: IconClassroom,
    iconColor: NAVY,
    iconBg: `rgba(13,27,56,0.07)`,
    iconBorder: `rgba(13,27,56,0.12)`,
    labelColor: NAVY,
    description:
      "Thoughtfully designed spaces with carefully managed student counts, engineered for deep focus and active participation.",
  },
  {
    id: "02",
    title: "Expert Teachers",
    category: "Faculty",
    icon: IconTeacher,
    iconColor: CRIMSON,
    iconBg: `rgba(200,16,46,0.07)`,
    iconBorder: `rgba(200,16,46,0.14)`,
    labelColor: CRIMSON,
    description:
      "A team of qualified educators committed to building a strong foundation for every child — empowering them to excel.",
  },
  {
    id: "03",
    title: "Educational Tech",
    category: "Facility",
    icon: IconDevice,
    iconColor: NAVY,
    iconBg: `rgba(13,27,56,0.07)`,
    iconBorder: `rgba(13,27,56,0.12)`,
    labelColor: NAVY,
    description:
      "Advanced audio-visual tools across every classroom. Computer education is a compulsory part of every student's curriculum.",
  },
  {
    id: "04",
    title: "Rich Library",
    category: "Library",
    icon: IconLibrary,
    iconColor: CRIMSON,
    iconBg: `rgba(200,16,46,0.07)`,
    iconBorder: `rgba(200,16,46,0.14)`,
    labelColor: CRIMSON,
    description:
      "An excellent collection spanning arts, literature, science, and general knowledge — curated for every age and interest.",
  },
];

/* ─── Section ───────────────────────────────────────── */
export default function Facilities() {
  const [openId, setOpenId] = useState<string>("01");

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,600;0,700;1,600&family=Inter:wght@400;500;600&display=swap');

        /* ── Accordion shell ── */
        .h-accordion {
          display: flex;
          gap: 10px;
          height: 340px;
        }

        /* ── Panel base ── */
        .h-panel {
          flex-shrink: 0;
          width: 64px;
          border-radius: 20px;
          cursor: pointer;
          position: relative;
          overflow: hidden;
          background: ${WHITE};

          box-shadow:
            0 2px 6px rgba(13,27,56,.06),
            0 8px 24px rgba(13,27,56,.08);

          transition:
            width 0.55s cubic-bezier(0.22,1,0.36,1),
            box-shadow 0.3s ease;
        }

        /* ── Open panel ── */
        .h-panel.open {
          width: 100%;
          flex-shrink: 1;
          cursor: default;
          box-shadow:
            0 4px 12px rgba(13,27,56,.08),
            0 16px 48px rgba(13,27,56,.13);
        }

        .h-panel:not(.open):hover {
          box-shadow:
            0 4px 12px rgba(13,27,56,.10),
            0 12px 32px rgba(13,27,56,.12);
        }

        /* ── Gold top bar ── */
        .panel-gold-bar {
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 3px;
          background: linear-gradient(90deg, ${GOLD}, ${GOLD_LT});
          border-radius: 20px 20px 0 0;
          transition: opacity 0.4s ease;
        }

        /* ── Collapsed label ── */
        .collapsed-label {
          position: absolute;
          inset: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 14px;
          opacity: 1;
          transition: opacity 0.15s ease;
          pointer-events: none;
        }

        .h-panel.open .collapsed-label {
          opacity: 0;
          pointer-events: none;
        }

        .rotated-title {
          writing-mode: vertical-rl;
          text-orientation: mixed;
          transform: rotate(180deg);
          font-family: 'Inter', sans-serif;
          font-weight: 600;
          font-size: 0.68rem;
          letter-spacing: 0.13em;
          text-transform: uppercase;
          color: ${SLATE};
          white-space: nowrap;
        }

        /* ── Open content ── */
        .open-content {
          position: absolute;
          inset: 0;
          padding: 32px 32px 28px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          opacity: 0;
          /* Fast fade-out when closing — disappears before the panel finishes shrinking */
          transition: opacity 0.1s ease;
          pointer-events: none;
        }

        .h-panel.open .open-content {
          opacity: 1;
          pointer-events: auto;
          /* Delayed fade-in when opening — waits for the panel to expand first */
          transition: opacity 0.3s ease 0.3s;
        }

        /* ── Decorative corner dot ── */
        .deco-dot {
          position: absolute;
          bottom: -32px;
          right: -32px;
          width: 120px;
          height: 120px;
          border-radius: 50%;
          pointer-events: none;
          transition: opacity 0.4s ease;
        }

        /* ── Responsive ── */
        @media (max-width: 700px) {
          .h-accordion {
            flex-direction: column;
            height: auto;
          }
          .h-panel { width: 100% !important; height: 56px; border-radius: 14px; }
          .h-panel.open { height: 260px; }
          .collapsed-label { flex-direction: row; }
          .rotated-title {
            writing-mode: horizontal-tb;
            transform: none;
          }
        }
      `}</style>

      <section
      id="facilities"
        style={{
          background: ALICE,
          padding: "88px 20px",
          position: "relative",
          overflow: "hidden",
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

        <div style={{ maxWidth: 1100, margin: "0 auto", position: "relative" }}>
          {/* ── Heading ── */}
          <motion.div
            style={{ textAlign: "center", marginBottom: 60 }}
            variants={sectionContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
          >
            <motion.p
              variants={fadeUp}
              className={`text-red-700 text-sm font-semibold tracking-[0.2em] uppercase font-body mb-1`}
            >
              Why Choose Us
            </motion.p>

            <motion.h2
              variants={fadeUp}
              style={{
                fontFamily: "'Playfair Display',Georgia,serif",
                fontWeight: 700,
                fontSize: "clamp(1.9rem,4vw,2.9rem)",
                lineHeight: 1.2,
                color: NAVY,
                letterSpacing: "-.01em",
                marginBottom: 20,
              }}
            >
              World-Class Learning{" "}
              <em style={{ fontStyle: "italic", color: GOLD }}>
                Infrastructure
              </em>
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
                fontFamily: "'Inter',sans-serif",
                fontSize: ".875rem",
                lineHeight: 1.75,
                color: SLATE,
                maxWidth: 420,
                margin: "0 auto",
              }}
            >
              Every element of our institution is crafted to nurture curiosity,
              excellence, and a lifelong love of learning.
            </motion.p>
          </motion.div>

          {/* ── Horizontal Accordion ── */}
          <motion.div
            className="h-accordion"
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
              delay: 0.15,
            }}
          >
            {items.map((item) => {
              const isOpen = openId === item.id;
              const Icon = item.icon;

              return (
                <div
                  key={item.id}
                  className={`h-panel${isOpen ? " open" : ""}`}
                  onClick={() => !isOpen && setOpenId(item.id)}
                  role="button"
                  tabIndex={isOpen ? -1 : 0}
                  aria-expanded={isOpen}
                  onKeyDown={(e) =>
                    e.key === "Enter" && !isOpen && setOpenId(item.id)
                  }
                >
                  {/* Gold top bar */}
                  <div
                    className="panel-gold-bar"
                    style={{ opacity: isOpen ? 1 : 0.45 }}
                  />

                  {/* Decorative dot */}
                  <div
                    className="deco-dot"
                    style={{
                      background: isOpen
                        ? `radial-gradient(circle, ${item.iconColor}08, transparent 70%)`
                        : `rgba(13,27,56,0.03)`,
                    }}
                  />

                  {/* ── Collapsed: icon + rotated label ── */}
                  <div className="collapsed-label">
                    <div
                      style={{
                        width: 34,
                        height: 34,
                        borderRadius: 10,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        background: item.iconBg,
                        border: `1px solid ${item.iconBorder}`,
                        color: item.iconColor,
                        flexShrink: 0,
                      }}
                    >
                      <Icon size={16} />
                    </div>
                    <span className="rotated-title">{item.title}</span>
                  </div>

                  {/* ── Open: full content ── */}
                  <div className="open-content">
                    {/* Top row: icon + id */}
                    <div
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        justifyContent: "space-between",
                      }}
                    >
                      <div
                        style={{
                          width: 50,
                          height: 50,
                          borderRadius: 14,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          background: item.iconBg,
                          border: `1px solid ${item.iconBorder}`,
                          color: item.iconColor,
                        }}
                      >
                        <Icon size={23} />
                      </div>
                      <span
                        style={{
                          fontFamily: "'Inter',sans-serif",
                          fontWeight: 600,
                          fontSize: ".62rem",
                          letterSpacing: ".22em",
                          color: "rgba(13,27,56,0.22)",
                          textTransform: "uppercase",
                        }}
                      >
                        {item.id}
                      </span>
                    </div>

                    {/* Body text */}
                    <div>
                      <p
                        style={{
                          fontFamily: "'Inter',sans-serif",
                          fontWeight: 600,
                          fontSize: ".62rem",
                          letterSpacing: ".2em",
                          textTransform: "uppercase",
                          color: item.labelColor,
                          marginBottom: 10,
                        }}
                      >
                        {item.category}
                      </p>
                      <h3
                        style={{
                          fontFamily: "'Playfair Display',Georgia,serif",
                          fontWeight: 700,
                          fontSize: "1.3rem",
                          lineHeight: 1.25,
                          color: NAVY,
                          marginBottom: 12,
                        }}
                      >
                        {item.title}
                      </h3>
                      <p
                        style={{
                          fontFamily: "'Inter',sans-serif",
                          fontSize: ".82rem",
                          lineHeight: 1.8,
                          color: SLATE,
                          maxWidth: 320,
                        }}
                      >
                        {item.description}
                      </p>
                    </div>

                    {/* Bottom ornament */}
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 8,
                        paddingTop: 16,
                        borderTop: `1px solid rgba(13,27,56,0.08)`,
                      }}
                    >
                      <div
                        style={{
                          width: 5,
                          height: 5,
                          borderRadius: "50%",
                          background: GOLD,
                          opacity: 0.8,
                        }}
                      />
                      <div
                        style={{
                          height: 1,
                          width: 32,
                          background: `linear-gradient(90deg,${GOLD}80,transparent)`,
                        }}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </motion.div>

          
        </div>
      </section>
    </>
  );
}
