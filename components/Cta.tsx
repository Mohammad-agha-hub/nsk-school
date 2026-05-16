"use client";

import { useEffect, useRef, useState } from "react";

const NAVY = "#0D1B38";
const GOLD = "#C9A84C";

function useInView(threshold = 0.1) {
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

export default function CTABanner() {
  const { ref, inView } = useInView();

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,600;0,700;1,600&family=Inter:wght@400;500;600&display=swap');

        .cta-section {
          background: linear-gradient(125deg, #d4112f 0%, #C8102E 45%, #a80d25 100%);
          padding: 60px 24px;
          position: relative;
          overflow: hidden;
        }

        .cta-section::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image: radial-gradient(circle, rgba(255,255,255,.08) 1px, transparent 1px);
          background-size: 24px 24px;
          pointer-events: none;
        }

        .cta-line-top {
          position: absolute; top: 0; left: 0; right: 0; height: 1px;
          background: linear-gradient(90deg, transparent, rgba(201,168,76,.55) 40%, rgba(255,255,255,.2) 60%, transparent);
        }
        .cta-line-bot {
          position: absolute; bottom: 0; left: 0; right: 0; height: 1px;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,.12) 40%, rgba(201,168,76,.4) 60%, transparent);
        }

        .cta-ghost {
          position: absolute;
          right: -10px;
          top: 50%;
          transform: translateY(-50%);
          font-family: 'Playfair Display', Georgia, serif;
          font-weight: 700;
          font-size: 14vw;
          line-height: 1;
          color: #fff;
          opacity: .05;
          user-select: none;
          pointer-events: none;
          letter-spacing: -.04em;
          white-space: nowrap;
        }

        .cta-circle-1 {
          position: absolute;
          top: -60px; left: -60px;
          width: 220px; height: 220px;
          border-radius: 50%;
          background: rgba(255,255,255,.05);
          pointer-events: none;
        }
        .cta-circle-2 {
          position: absolute;
          bottom: -80px; right: 200px;
          width: 280px; height: 280px;
          border-radius: 50%;
          background: rgba(255,255,255,.04);
          pointer-events: none;
        }

        .cta-inner {
          max-width: 1152px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 40px;
          position: relative;
          z-index: 1;
        }
        @media (max-width: 768px) {
          .cta-inner { flex-direction: column; text-align: center; align-items: center; }
        }

        .cta-left {
          display: flex;
          align-items: center;
          gap: 28px;
        }
        @media (max-width: 768px) {
          .cta-left { flex-direction: column; align-items: center; gap: 20px; }
        }

        .cta-logo-wrap { position: relative; flex-shrink: 0; }
        .cta-logo-ring {
          position: absolute;
          inset: -6px;
          border-radius: 50%;
          border: 1.5px dashed rgba(201,168,76,.7);
          animation: cta-spin 18s linear infinite;
        }
        @keyframes cta-spin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        .cta-logo {
          width: 80px; height: 80px;
          object-fit: contain;
          border-radius: 16px;
          box-shadow: 0 8px 28px rgba(0,0,0,.25);
          position: relative; z-index: 1;
        }
        .cta-logo-fallback {
          width: 80px; height: 80px;
          border-radius: 16px;
          background: rgba(255,255,255,.12);
          border: 1px solid rgba(255,255,255,.2);
          display: flex; align-items: center; justify-content: center;
          box-shadow: 0 8px 28px rgba(0,0,0,.2);
          position: relative; z-index: 1;
        }

        .cta-eyebrow {
          font-family: 'Inter', sans-serif;
          font-weight: 600;
          font-size: .68rem;
          letter-spacing: .28em;
          text-transform: uppercase;
          color: #E8B84B;
          margin-bottom: 10px;
        }
        .cta-heading {
          font-family: 'Playfair Display', Georgia, serif;
          font-weight: 700;
          font-size: clamp(1.5rem, 3vw, 2.2rem);
          line-height: 1.2;
          color: #fff;
          letter-spacing: -.01em;
        }

        .cta-btn {
          flex-shrink: 0;
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 14px 34px;
          border-radius: 10px;
          background: #fff;
          color: ${NAVY};
          font-family: 'Inter', sans-serif;
          font-weight: 700;
          font-size: .9rem;
          text-decoration: none;
          border: none;
          cursor: pointer;
          white-space: nowrap;
          box-shadow: 0 4px 20px rgba(0,0,0,.2), 0 1px 4px rgba(0,0,0,.1);
          transition: box-shadow .25s ease, transform .2s ease;
        }
        .cta-btn:hover {
          box-shadow: 0 10px 32px rgba(0,0,0,.28);
          transform: scale(1.04);
        }
        .cta-btn:active {
          transform: scale(0.98);
          box-shadow: 0 2px 10px rgba(0,0,0,.15);
        }
        .cta-btn-arrow { transition: transform .2s ease; }
        .cta-btn:hover .cta-btn-arrow { transform: translateX(4px); }
      `}</style>

      <section
        className="cta-section"
        ref={ref as React.RefObject<HTMLElement>}
      >
        <div className="cta-line-top" />
        <div className="cta-line-bot" />
        <div className="cta-ghost">Apply</div>
        <div className="cta-circle-1" />
        <div className="cta-circle-2" />

        <div className="cta-inner">
          {/* ── Left: logo + text ── */}
          <div
            className="cta-left"
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? "translateX(0)" : "translateX(-28px)",
              transition: "opacity .7s ease, transform .7s ease",
            }}
          >
            <div className="cta-logo-wrap">
              <div className="cta-logo-ring" />
              <img
                src="/logo.jpeg"
                alt="NSK High School"
                className="cta-logo"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = "none";
                  (
                    (e.target as HTMLImageElement).nextSibling as HTMLElement
                  ).style.display = "flex";
                }}
              />
              <div className="cta-logo-fallback" style={{ display: "none" }}>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke={GOLD}
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{ width: 36, height: 36 }}
                >
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
              </div>
            </div>

            <div>
              <p className="cta-eyebrow">Courses for free — Register now</p>
              <h2 className="cta-heading">
                Creative in{" "}
                <em style={{ fontStyle: "italic", color: "#E8B84B" }}>
                  Research
                </em>{" "}
                And Teaching.
              </h2>
            </div>
          </div>

          {/* ── Right: button ── */}
          <div
            style={{
              flexShrink: 0,
              opacity: inView ? 1 : 0,
              transform: inView ? "translateX(0)" : "translateX(28px)",
              transition: "opacity .7s ease .18s, transform .7s ease .18s",
            }}
          >
            <a href="/admission-form" className="cta-btn">
              Apply Now
              <svg
                className="cta-btn-arrow"
                width="16"
                height="16"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
              >
                <path d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
