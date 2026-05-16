"use client";

import { useEffect, useRef, useState } from "react";

const NAVY = "#0D1B38";
const GOLD = "#C9A84C";
const CRIMSON = "#C8102E";
const SLATE = "#64748B";

/* ── useInView ── */
function useInView(threshold = 0.08) {
  const ref = useRef<HTMLElement>(null);
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

const testimonials = [
  {
    name: "Aarav Sharma",
    stars: 5,
    quote:
      "NSK High School provides a great learning environment for students. The teachers are very supportive and always encourage students to do their best in academics and extracurricular activities.",
  },
  {
    name: "Riya Verma",
    stars: 5,
    quote:
      "My child has improved alot after joining NSK High Schoo. The school focuses not only on studies but also on discipline and personality development.",
  },
  {
    name: "Rahul Gupta",
    stars: 5,
    quote:
      "NSK High School has excellent teachers and modern facilities. The staff is very cooperative and always ready to help students.",
  },
  {
    name: "Priya Singh",
    stars: 5,
    quote:
      "I am very satisfied with the education system of NSK High School. The school maintains good communication with parents and supports every child's growth.",
  },
  {
    name: "Ankit Kumar",
    stars: 5,
    quote:
      "The environment of NSK High School is very positive and motivating. Students get many opportunities to participate in sports and cultural activities.",
  },
  {
    name: "Aditya Mishra",
    stars: 5,
    quote:
      "NSK High School is one of the best schools in the area. The teachers guide students very well and help them build a strong future.",
  },
];

export default function Testimonials() {
  const { ref, inView } = useInView();
  const [active, setActive] = useState(0);
  const [leaving, setLeaving] = useState(false);
  const [dir, setDir] = useState<1 | -1>(1);
  const total = testimonials.length;

  function go(nextIdx: number, direction: 1 | -1) {
    if (leaving) return;
    setLeaving(true);
    setDir(direction);
    setTimeout(() => {
      setActive(nextIdx);
      setLeaving(false);
    }, 280);
  }

  const prev = () => go((active - 1 + total) % total, -1);
  const next = () => go((active + 1) % total, 1);
  const t = testimonials[active];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,600;0,700;1,600&family=Inter:wght@400;500;600&display=swap');

        .ts-section {
          background: #ffffff;
          padding: 96px 24px;
          display: flex;
          flex-direction: column;
          align-items: center;
          position: relative;
          overflow: hidden;
        }

        /* hairlines matching rest of site */
        .ts-hairline-top {
          position: absolute; top: 0; left: 0; right: 0; height: 1px;
          background: linear-gradient(90deg,transparent,rgba(201,168,76,.28) 40%,rgba(13,27,56,.10) 60%,transparent);
        }
        .ts-hairline-bot {
          position: absolute; bottom: 0; left: 0; right: 0; height: 1px;
          background: linear-gradient(90deg,transparent,rgba(13,27,56,.08) 40%,rgba(201,168,76,.22) 60%,transparent);
        }

        /* ── heading animate in ── */
        .ts-head-wrap {
          text-align: center;
          transition: opacity .7s ease, transform .7s ease;
        }

        .ts-eyebrow {
          font-family: 'Inter', sans-serif;
          font-weight: 600;
          font-size: .72rem;
          letter-spacing: .2em;
          text-transform: uppercase;
          color: ${CRIMSON};
          margin-bottom: 10px;
        }

        .ts-heading {
          font-family: 'Playfair Display', Georgia, serif;
          font-weight: 700;
          font-size: clamp(1.9rem, 4vw, 2.9rem);
          color: ${NAVY};
          line-height: 1.2;
          letter-spacing: -.01em;
          margin-bottom: 20px;
        }

        .ts-ornament {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          margin-bottom: 64px;
        }

        /* ── carousel row ── */
        .ts-row {
          display: flex;
          align-items: center;
          gap: 40px;
          width: 100%;
          max-width: 860px;
        }
        @media (max-width: 600px) {
          .ts-row { gap: 16px; }
        }

        /* ── arrow buttons ── */
        .ts-arrow {
          width: 44px; height: 44px;
          border-radius: 50%;
          border: 1px solid rgba(13,27,56,.15);
          background: transparent;
          display: flex; align-items: center; justify-content: center;
          cursor: pointer;
          color: ${NAVY};
          flex-shrink: 0;
          transition: border-color .2s, background .2s, color .2s, transform .15s;
        }
        .ts-arrow:hover {
          border-color: ${CRIMSON};
          background: rgba(200,16,46,.06);
          color: ${CRIMSON};
          transform: scale(1.06);
        }

        /* ── quote content ── */
        .ts-center {
          flex: 1;
          text-align: center;
          position: relative;
        }

        .ts-ghost-open, .ts-ghost-close {
          position: absolute;
          font-family: Georgia, serif;
          font-size: 9rem;
          line-height: 1;
          color: ${NAVY};
          opacity: .05;
          user-select: none;
          pointer-events: none;
        }
        .ts-ghost-open { top: -20px; left: 0; }
        .ts-ghost-close { bottom: -50px; right: 0; }

        .ts-slide {
          transition: opacity .28s ease, transform .28s ease;
        }
        .ts-slide.out-left  { opacity: 0; transform: translateX(-28px); }
        .ts-slide.out-right { opacity: 0; transform: translateX(28px);  }
        .ts-slide.in        { opacity: 1; transform: translateX(0);     }

        .ts-name {
          font-family: 'Inter', sans-serif;
          font-weight: 700;
          font-size: 1rem;
          color: ${NAVY};
          margin-bottom: 8px;
        }

        .ts-stars {
          display: flex;
          justify-content: center;
          gap: 3px;
          margin-bottom: 24px;
        }

        .ts-quote {
          font-family: 'Inter', sans-serif;
          font-size: .93rem;
          line-height: 1.85;
          color: ${SLATE};
          max-width: 560px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }

        /* ── dots ── */
        .ts-dots {
          display: flex;
          gap: 8px;
          justify-content: center;
          margin-top: 44px;
        }
        .ts-dot {
          width: 7px; height: 7px;
          border-radius: 99px;
          background: rgba(13,27,56,.15);
          border: none; cursor: pointer; padding: 0;
          transition: background .25s ease, width .3s ease;
        }
        .ts-dot.active {
          background: ${CRIMSON};
          width: 22px;
        }

        /* ── CTA ── */
        .ts-cta-wrap {
          margin-top: 56px;
          transition: opacity .7s ease .6s, transform .7s ease .6s;
        }
        .ts-cta {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 13px 36px;
          border-radius: 8px;
          border: none;
          cursor: pointer;
          font-family: 'Inter', sans-serif;
          font-weight: 600;
          font-size: .875rem;
          letter-spacing: .02em;
          
          color: #fff;
          box-shadow: 0 4px 24px rgba(200,16,46,.35);
          text-decoration: none;
          transition: background .2s ease, box-shadow .2s ease, transform .15s ease;
        }
        .ts-cta:hover {
          
          box-shadow: 0 8px 32px rgba(200,16,46,.45);
          transform: translateY(-1px);
        }
        .ts-cta:active { transform: translateY(0); }
        .ts-cta .cta-arrow {
          transition: transform .25s ease;
        }
        .ts-cta:hover .cta-arrow {
          transform: translate(2px,-2px);
        }
      `}</style>

      <section className="ts-section" ref={ref as React.RefObject<HTMLElement>}>
        <div className="ts-hairline-top" />
        <div className="ts-hairline-bot" />

        {/* ── Heading ── */}
        <div
          className="ts-head-wrap"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(24px)",
          }}
        >
          <p className="text-red-700 text-sm font-semibold tracking-[0.2em] uppercase font-body ">
            Our Testimonial
          </p>

          <h2 className="ts-heading">
            Student <em style={{ fontStyle: "italic", color: GOLD }}>Say</em>{" "}
            About NSK High School
          </h2>

          <div className="ts-ornament">
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
          </div>
        </div>

        {/* ── Carousel ── */}
        <div
          className="ts-row"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(28px)",
            transition: "opacity .7s ease .2s, transform .7s ease .2s",
          }}
        >
          <button className="ts-arrow" onClick={prev} aria-label="Previous">
            <svg
              width="16"
              height="16"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
            >
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          <div className="ts-center">
            <div className="ts-ghost-open">"</div>
            <div className="ts-ghost-close">"</div>

            <div
              className={`ts-slide ${leaving ? (dir === 1 ? "out-left" : "out-right") : "in"}`}
            >
              <p className="ts-name">{t.name}</p>

              <div className="ts-stars">
                {Array.from({ length: t.stars }).map((_, i) => (
                  <svg
                    key={i}
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="#F5A623"
                    stroke="#F5A623"
                    strokeWidth="0.5"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                ))}
              </div>

              <p className="ts-quote">{t.quote}</p>
            </div>
          </div>

          <button className="ts-arrow" onClick={next} aria-label="Next">
            <svg
              width="16"
              height="16"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
            >
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>

        {/* ── Dots ── */}
        <div
          className="ts-dots"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(16px)",
            transition: "opacity .7s ease .35s, transform .7s ease .35s",
          }}
        >
          {testimonials.map((_, i) => (
            <button
              key={i}
              className={`ts-dot${i === active ? " active" : ""}`}
              onClick={() => go(i, i > active ? 1 : -1)}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
      </section>
    </>
  );
}
