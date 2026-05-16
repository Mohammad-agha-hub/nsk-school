"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const FONT_URL =
  "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,800;1,700&family=DM+Sans:wght@400;500;600&display=swap";

const NAVY = "#0D1B38";
const GOLD = "#C9A84C";
const RED = "#C8102E";

const activities = [
  {
    id: 1,
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.6}
        strokeLinecap="round"
        strokeLinejoin="round"
        width={22}
        height={22}
      >
        <circle cx="12" cy="12" r="3" />
        <path d="M3 12h3M18 12h3M12 3v3M12 18v3" />
        <path d="M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M5.6 18.4l2.1-2.1M16.3 7.7l2.1-2.1" />
      </svg>
    ),
    title: "Drawing And Coloring",
    tag: "Creative Arts",
    description:
      "Coloring is not only a favorite pastime, but it is also a great way to introduce new ideas, develop fine motor skills, and recognize colors. Our preschool worksheets help children learn numbers, letters, sight words, and rhymes.",
  },
  {
    id: 2,
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.6}
        strokeLinecap="round"
        strokeLinejoin="round"
        width={22}
        height={22}
      >
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="M8 10h4M8 14h8" />
        <circle cx="16" cy="10" r="1.5" fill="currentColor" stroke="none" />
      </svg>
    ),
    title: "Language Development",
    tag: "Communication",
    description:
      "Students and working professionals benefit from our industry-endorsed programs on communication, personality, skill development, and employability. Our experts ensure every student undergoes a transformative journey.",
  },
  {
    id: 3,
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.6}
        strokeLinecap="round"
        strokeLinejoin="round"
        width={22}
        height={22}
      >
        <path d="M9 18V5l12-2v13" />
        <circle cx="6" cy="18" r="3" />
        <circle cx="18" cy="16" r="3" />
      </svg>
    ),
    title: "Dance And Music",
    tag: "Performing Arts",
    description:
      "Dance music encompasses a vast range of genres and traditions. Our programs blend classical forms like Bharatanatyam with contemporary movement, helping students discover rhythm, expression, and artistic confidence.",
  },
  {
    id: 4,
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.6}
        strokeLinecap="round"
        strokeLinejoin="round"
        width={22}
        height={22}
      >
        <path d="M12 20h9" />
        <path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z" />
      </svg>
    ),
    title: "Creative Writing",
    tag: "Literary Arts",
    description:
      "Writing that deviates from conventional forms is creative writing. Identified by an emphasis on narrative craft, literary tropes, and poetics, our program nurtures young storytellers and future voices in modern literary expression.",
  },
];

function useInView(threshold = 0.06) {
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

export default function AfterSchoolActivities() {
  const { ref, inView } = useInView();

  return (
    <>
      <style>{`
        @import url('${FONT_URL}');

        .asa-card {
          background: #fff;
          border-radius: 0 14px 14px 0;
          border-left: 3.5px solid ${NAVY};
          border-top: 1px solid rgba(13,27,56,0.10);
          border-right: 1px solid rgba(13,27,56,0.10);
          border-bottom: 1px solid rgba(13,27,56,0.10);
          box-shadow: 0 2px 12px rgba(13,27,56,.07), 0 1px 4px rgba(13,27,56,.04);
          overflow: hidden;
          cursor: default;
          transition: border-color .3s ease, box-shadow .32s ease, transform .32s ease;
        }
        .asa-card:hover {
          border-left-color: ${RED};
          border-top-color: rgba(200,16,46,.18);
          border-right-color: rgba(200,16,46,.18);
          border-bottom-color: rgba(200,16,46,.18);
          box-shadow: 0 20px 48px rgba(13,27,56,.12), 0 4px 16px rgba(13,27,56,.06);
          transform: translateY(-5px);
        }

        .asa-num-ghost {
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
        .asa-card:hover .asa-num-ghost { color: ${RED}; opacity: .055; }

        .asa-icon-wrap {
          width: 40px; height: 40px;
          border-radius: 10px;
          display: flex; align-items: center; justify-content: center;
          background: rgba(13,27,56,.06);
          border: 1px solid rgba(13,27,56,.14);
          color: ${NAVY};
          transition: background .3s ease, border-color .3s ease, color .3s ease;
        }
        .asa-card:hover .asa-icon-wrap {
          background: rgba(200,16,46,.08);
          border-color: rgba(200,16,46,.22);
          color: ${RED};
        }

        .asa-tag {
          display: inline-block;
          font-family: 'DM Sans', sans-serif;
          font-size: 10px;
          font-weight: 600;
          letter-spacing: .16em;
          text-transform: uppercase;
          padding: 3px 10px;
          border-radius: 999px;
          background: rgba(13,27,56,.06);
          border: 1px solid rgba(13,27,56,.12);
          color: ${NAVY};
          transition: background .3s ease, border-color .3s ease, color .3s ease;
        }
        .asa-card:hover .asa-tag {
          background: rgba(200,16,46,.08);
          border-color: rgba(200,16,46,.22);
          color: ${RED};
        }

        .asa-title {
          font-family: 'Playfair Display', Georgia, serif;
          font-weight: 700;
          font-size: 1.05rem;
          line-height: 1.3;
          color: ${NAVY};
          margin-bottom: 10px;
          transition: color .3s ease;
        }
        .asa-card:hover .asa-title { color: ${RED}; }

        .asa-footer-bar {
          padding-top: 16px;
          border-top: 1px solid rgba(13,27,56,.08);
          transition: border-color .3s ease;
        }
        .asa-card:hover .asa-footer-bar { border-top-color: rgba(200,16,46,.18); }

        .asa-footer-dot {
          width: 5px; height: 5px;
          border-radius: 50%;
          background: ${NAVY};
          opacity: .35;
          transition: opacity .3s ease, background .3s ease;
        }
        .asa-card:hover .asa-footer-dot { background: ${RED}; opacity: 1; }

        .asa-footer-line {
          height: 1px; width: 28px;
          background: linear-gradient(90deg, rgba(13,27,56,.6), transparent);
          opacity: .25;
          transition: opacity .3s ease, width .3s ease, background .3s ease;
        }
        .asa-card:hover .asa-footer-line {
          background: linear-gradient(90deg, rgba(200,16,46,.7), transparent);
          opacity: 1;
          width: 40px;
        }
      `}</style>

      <section
        ref={ref}
        className="relative overflow-hidden py-28 px-4"
        style={{ background: "white" }}
      >
        <div className="max-w-6xl mx-auto relative">
          {/* ── Heading ── */}
          <div
            className="text-center mb-16 transition-all duration-700"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              opacity: inView ? 1 : 0,
              transform: inView ? "translateY(0)" : "translateY(24px)",
            }}
          >
            
              <span
                className="text-red-700 text-sm font-semibold tracking-[0.2em] uppercase font-body "
              >
                Beyond the Classroom
              </span>
             

            <h2
              className="text-4xl md:text-[3rem] leading-tight mb-5"
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontWeight: 700,
                color: NAVY,
                letterSpacing: "-0.01em",
              }}
            >
              After School{" "}
              <em style={{ fontStyle: "italic", color: GOLD }}>Activities</em>
            </h2>

            <div className="flex items-center justify-center gap-3 mb-5">
              <div
                className="h-px w-16"
                style={{
                  background: `linear-gradient(90deg, transparent, ${NAVY}20)`,
                }}
              />
              <span
                className="w-1.5 h-1.5 rounded-full inline-block"
                style={{ background: GOLD }}
              />
              <span
                className="w-2 h-2 rounded-full border inline-block"
                style={{ borderColor: `${NAVY}28` }}
              />
              <span
                className="w-1.5 h-1.5 rounded-full inline-block"
                style={{ background: GOLD }}
              />
              <div
                className="h-px w-16"
                style={{
                  background: `linear-gradient(90deg, ${NAVY}20, transparent)`,
                }}
              />
            </div>

            <p
              className="text-slate-500 text-sm leading-relaxed max-w-xl mx-auto"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Story Telling · Dance &amp; Music · Drawing &amp; Coloring · Yoga
              · Art &amp; Craft · Phonics · Language Development · Tutorials ·
              Slokas · Creative Writing · Bharatanatyam
            </p>
          </div>

          {/* ── Cards Grid ── */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {activities.map((act, i) => (
              <div
                key={act.id}
                className="asa-card relative flex flex-col gap-5 p-7"
                style={{
                  opacity: inView ? 1 : 0,
                  transform: inView ? "translateY(0)" : "translateY(32px)",
                  transition: `opacity 0.6s ease ${i * 110}ms, transform 0.6s ease ${i * 110}ms, border-color .3s ease, box-shadow .32s ease`,
                }}
              >
                <div className="asa-num-ghost">0{act.id}</div>
                <div className="relative z-10">
                  <div className="asa-icon-wrap">{act.icon}</div>
                </div>
                <div className="relative z-10">
                  <span className="asa-tag">{act.tag}</span>
                </div>
                <div className="relative z-10 flex flex-col gap-2 flex-1">
                  <h3 className="asa-title">{act.title}</h3>
                  <p
                    className="text-[0.8rem] leading-relaxed"
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      color: "rgba(13,27,56,0.55)",
                    }}
                  >
                    {act.description}
                  </p>
                </div>
                <div
                  className="asa-footer-bar relative z-10"
                  style={{ display: "flex", alignItems: "center", gap: 6 }}
                >
                  <div className="asa-footer-dot" />
                  <div className="asa-footer-line" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
