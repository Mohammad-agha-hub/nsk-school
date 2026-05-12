"use client";

import { useEffect, useRef, useState } from "react";

/* ─── Tokens ─────────────────────────────────────────── */
const NAVY = "#0D1B38";
const NAVY_MID = "#152344";
const NAVY_LIFT = "#1C2F56";
const GOLD = "#C9A84C";
const GOLD_LT = "#e4c97a";
const CRIMSON = "#C8102E";
const SLATE = "#64748B";

/* ─── Icons ─────────────────────────────────────────────── */
const IconClassroom = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{ width: 20, height: 20 }}
  >
    <rect x="2" y="3" width="20" height="13" rx="2" />
    <path d="M8 21h8M12 17v4" />
    <path d="M6 8h8M6 11h5" />
  </svg>
);

const IconTeacher = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{ width: 20, height: 20 }}
  >
    <circle cx="9" cy="7" r="3" />
    <path d="M3 21v-2a5 5 0 0 1 5-5h2" />
    <path d="M16 11l2 2 4-4" />
    <circle cx="19" cy="18" r="3" />
  </svg>
);

const IconDevice = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{ width: 20, height: 20 }}
  >
    <rect x="2" y="4" width="20" height="14" rx="2" />
    <path d="M8 20h8M12 18v2" />
    <path d="M5 9h8M5 12h6" />
  </svg>
);

const IconLibrary = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{ width: 20, height: 20 }}
  >
    <path d="M4 19V5a1 1 0 0 1 1-1h4v15H5a1 1 0 0 1-1-1Z" />
    <path d="M9 4h4l2 15H9V4Z" />
    <path d="M15 4h.5a1 1 0 0 1 .97.757L19 19h-3l-1-15Z" />
  </svg>
);

/* ─── Data ────────────────────────────────────────────── */
const cards = [
  {
    id: "01",
    title: "Smart Classrooms",
    description:
      "Thoughtfully designed spaces with carefully managed student counts, engineered for deep focus and active participation.",
    accent: GOLD,
    icon: <IconClassroom />,
  },
  {
    id: "02",
    title: "Expert Teachers",
    description:
      "A team of qualified educators committed to building a strong foundation for every child — empowering them to excel.",
    accent: CRIMSON,
    icon: <IconTeacher />,
  },
  {
    id: "03",
    title: "Educational Tech",
    description:
      "Advanced audio-visual tools across every classroom. Computer education is a compulsory part of every student's curriculum.",
    accent: GOLD,
    icon: <IconDevice />,
  },
  {
    id: "04",
    title: "Rich Library",
    description:
      "An excellent collection spanning arts, literature, science, and general knowledge — curated for every age and interest.",
    accent: CRIMSON,
    icon: <IconLibrary />,
  },
];

/* ─── Hook ─────────────────────────────────────────────── */
function useInView(threshold = 0.08) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setInView(true);
      },
      { threshold },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

/* ─── Section ───────────────────────────────────────────── */
export default function FeaturesSection() {
  const { ref, inView } = useInView();

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,600;0,700;1,600&family=Inter:wght@400;500;600&display=swap');
      `}</style>

      <section
        ref={ref}
        style={{
          background: "#ffffff",
          padding: "112px 16px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Hairline rules */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 1,
            background:
              "linear-gradient(90deg, transparent, rgba(201,168,76,0.28) 40%, rgba(13,27,56,0.10) 60%, transparent)",
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
              "linear-gradient(90deg, transparent, rgba(13,27,56,0.08) 40%, rgba(201,168,76,0.22) 60%, transparent)",
          }}
        />

        <div style={{ maxWidth: 1152, margin: "0 auto", position: "relative" }}>
          {/* ── Heading ── */}
          <div
            style={{
              textAlign: "center",
              marginBottom: 88,
              opacity: inView ? 1 : 0,
              transform: inView ? "translateY(0)" : "translateY(24px)",
              transition: "opacity 0.7s ease, transform 0.7s ease",
            }}
          >
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 600,
                fontSize: "0.7rem",
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                color: GOLD,
                marginBottom: 16,
              }}
            >
              Why Choose Us
            </p>

            <h2
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontWeight: 700,
                fontSize: "clamp(2rem, 4vw, 3rem)",
                lineHeight: 1.2,
                color: NAVY,
                letterSpacing: "-0.01em",
                marginBottom: 20,
              }}
            >
              World-Class Learning{" "}
              <em style={{ fontStyle: "italic", color: GOLD }}>
                Infrastructure
              </em>
            </h2>

            {/* Ornament */}
            <div
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
                  background: `linear-gradient(90deg, transparent, ${NAVY}18)`,
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
                  background: `linear-gradient(90deg, ${NAVY}18, transparent)`,
                }}
              />
            </div>

            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.875rem",
                lineHeight: 1.7,
                color: SLATE,
                maxWidth: 420,
                margin: "0 auto",
              }}
            >
              Every element of our institution is crafted to nurture curiosity,
              excellence, and a lifelong love of learning.
            </p>
          </div>

          {/* ── Cards: desktop staggered ── */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: 24,
              alignItems: "start",
            }}
            className="features-grid"
          >
            {cards.map((card, i) => (
              <div
                key={card.id}
                style={{
                  marginTop: i % 2 === 1 ? 52 : 0,
                  opacity: inView ? 1 : 0,
                  transform: inView ? "translateY(0)" : "translateY(48px)",
                  transition: `opacity 0.65s ease ${0.13 + i * 0.13}s, transform 0.65s ease ${0.13 + i * 0.13}s`,
                }}
              >
                <FeatureCard card={card} />
              </div>
            ))}
          </div>

          {/* ── CTA ── */}
          <div
            style={{
              marginTop: 80,
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "center",
              gap: 16,
              opacity: inView ? 1 : 0,
              transform: inView ? "translateY(0)" : "translateY(16px)",
              transition: "opacity 0.7s ease 0.75s, transform 0.7s ease 0.75s",
            }}
          >
            <CtaPrimary />
            <CtaSecondary />
          </div>
        </div>
      </section>

      {/* Responsive: collapse stagger on small screens */}
      <style>{`
        @media (max-width: 1023px) {
          .features-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .features-grid > div {
            margin-top: 0 !important;
          }
        }
        @media (max-width: 639px) {
          .features-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </>
  );
}

/* ─── CTAs ───────────────────────────────────────────────── */
function CtaPrimary() {
  const [h, setH] = useState(false);
  return (
    <a
      href="#"
      onMouseEnter={() => setH(true)}
      onMouseLeave={() => setH(false)}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 8,
        padding: "14px 32px",
        borderRadius: 9999,
        background: CRIMSON,
        color: "#fff",
        fontFamily: "'Inter', sans-serif",
        fontWeight: 600,
        fontSize: "0.875rem",
        textDecoration: "none",
        boxShadow: "0 4px 20px rgba(200,16,46,0.22)",
        transform: h ? "translateY(-2px)" : "none",
        transition: "transform 0.25s ease, box-shadow 0.25s ease",
      }}
    >
      Apply Now
      <svg
        style={{
          width: 16,
          height: 16,
          transform: h ? "translateX(3px)" : "none",
          transition: "transform 0.2s ease",
        }}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17 8l4 4m0 0l-4 4m4-4H3"
        />
      </svg>
    </a>
  );
}

function CtaSecondary() {
  const [h, setH] = useState(false);
  return (
    <a
      href="tel:9728352281"
      onMouseEnter={() => setH(true)}
      onMouseLeave={() => setH(false)}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 8,
        padding: "14px 32px",
        borderRadius: 9999,
        border: `1px solid rgba(13,27,56,0.18)`,
        color: NAVY,
        fontFamily: "'Inter', sans-serif",
        fontWeight: 500,
        fontSize: "0.875rem",
        textDecoration: "none",
        transform: h ? "translateY(-2px)" : "none",
        transition: "transform 0.25s ease",
      }}
    >
      <svg
        style={{ width: 16, height: 16 }}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
        />
      </svg>
      9728352281
    </a>
  );
}

/* ─── Card ──────────────────────────────────────────────── */
type CardData = (typeof cards)[number];

function FeatureCard({ card }: { card: CardData }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: "relative",
        borderRadius: 20,
        overflow: "hidden",
        cursor: "default",
        /* Premium dark navy gradient */
        background: hovered
          ? `linear-gradient(160deg, ${NAVY_LIFT} 0%, ${NAVY_MID} 45%, ${NAVY} 100%)`
          : `linear-gradient(160deg, ${NAVY_MID} 0%, ${NAVY} 55%, #0a1628 100%)`,
        /* Layered elevated shadow — the key to premium depth */
        boxShadow: hovered
          ? `0 32px 64px rgba(13,27,56,0.38), 0 12px 24px rgba(13,27,56,0.22), 0 4px 8px rgba(13,27,56,0.14), 0 0 0 1px rgba(255,255,255,0.06)`
          : `0 8px 32px rgba(13,27,56,0.22), 0 2px 8px rgba(13,27,56,0.12), 0 0 0 1px rgba(255,255,255,0.04)`,
        transform: hovered ? "translateY(-6px)" : "translateY(0)",
        transition:
          "background 0.35s ease, box-shadow 0.35s ease, transform 0.32s ease",
      }}
    >
      {/* Subtle noise-like inner highlight — top edge shimmer */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 1,
          background: `linear-gradient(90deg, transparent 0%, rgba(255,255,255,${hovered ? "0.12" : "0.07"}) 50%, transparent 100%)`,
          transition: "all 0.35s ease",
        }}
      />

      {/* Accent top bar */}
      <div
        style={{
          height: 2,
          background: `linear-gradient(90deg, ${card.accent}, ${card.accent === GOLD ? GOLD_LT : "#e8395a"})`,
          opacity: hovered ? 1 : 0.55,
          transition: "opacity 0.3s ease",
        }}
      />

      {/* Ambient glow behind top bar */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 80,
          background: `linear-gradient(180deg, ${card.accent}14 0%, transparent 100%)`,
          opacity: hovered ? 1 : 0,
          transition: "opacity 0.4s ease",
          pointerEvents: "none",
        }}
      />

      {/* Body */}
      <div
        style={{
          padding: "28px 28px 32px",
          display: "flex",
          flexDirection: "column",
          gap: 20,
        }}
      >
        {/* Icon row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* Icon container */}
          <div
            style={{
              width: 44,
              height: 44,
              borderRadius: 12,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: hovered
                ? `${card.accent}22`
                : "rgba(255,255,255,0.07)",
              border: `1px solid ${hovered ? card.accent + "40" : "rgba(255,255,255,0.1)"}`,
              color: hovered ? card.accent : "rgba(255,255,255,0.7)",
              transition: "all 0.3s ease",
            }}
          >
            {card.icon}
          </div>

          {/* Card number */}
          <span
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 600,
              fontSize: "0.68rem",
              letterSpacing: "0.2em",
              color: "rgba(255,255,255,0.14)",
            }}
          >
            {card.id}
          </span>
        </div>

        {/* Text */}
        <div>
          <h3
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontWeight: 600,
              fontSize: "1.1rem",
              lineHeight: 1.3,
              color: "#ffffff",
              marginBottom: 10,
            }}
          >
            {card.title}
          </h3>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.8rem",
              lineHeight: 1.75,
              color: "rgba(255,255,255,0.45)",
            }}
          >
            {card.description}
          </p>
        </div>

        {/* Footer arrow */}
        <div
          style={{
            paddingTop: 16,
            borderTop: `1px solid rgba(255,255,255,${hovered ? "0.1" : "0.06"})`,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            transition: "border-color 0.3s ease",
          }}
        >
          {/* Accent dot-line */}
          <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
            <div
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                background: card.accent,
                opacity: hovered ? 1 : 0.4,
                transition: "opacity 0.3s ease",
              }}
            />
            <div
              style={{
                height: 1,
                width: 24,
                background: `linear-gradient(90deg, ${card.accent}80, transparent)`,
                opacity: hovered ? 1 : 0.3,
                transition: "opacity 0.3s ease",
              }}
            />
          </div>

          {/* Arrow button */}
          <div
            style={{
              width: 30,
              height: 30,
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: hovered
                ? `${card.accent}20`
                : "rgba(255,255,255,0.06)",
              border: `1px solid ${hovered ? card.accent + "50" : "rgba(255,255,255,0.1)"}`,
              color: hovered ? card.accent : "rgba(255,255,255,0.3)",
              transition: "all 0.3s ease",
            }}
          >
            <svg
              style={{
                width: 13,
                height: 13,
                transform: hovered ? "translate(1px,-1px)" : "none",
                transition: "transform 0.2s ease",
              }}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M7 17L17 7M7 7h10v10"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
