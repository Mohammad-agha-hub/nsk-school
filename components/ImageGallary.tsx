"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";

/* ── fonts ─────────────────────────────────────────────────── */
const FONT_URL =
  "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,800;1,700&family=DM+Sans:wght@400;500;600&display=swap";

const NAVY = "#0D1B38";
const GOLD = "#C9A84C";
const CRIMSON = "#C8102E";

/* ── gallery data ───────────────────────────────────────────── */
const photos = [
  { id: 1, src: "/img-1.jpg", area: "1 / 1 / 3 / 3" }, // 2×2 — large feature
  { id: 2, src: "/img-2.jpg", area: "1 / 3 / 2 / 4" }, // top-right small
  { id: 3, src: "/img-3.jpg", area: "1 / 4 / 2 / 5" }, // top-far-right small
  { id: 4, src: "/img-4.jpg", area: "2 / 3 / 3 / 5" }, // right wide
  { id: 5, src: "/img-5.jpg", area: "3 / 1 / 4 / 2" }, // bottom-left small
  { id: 6, src: "/img-6.jpg", area: "3 / 2 / 4 / 4" }, // bottom middle-wide
  { id: 7, src: "/img-7.jpg", area: "3 / 4 / 4 / 5" }, // bottom-right small
  { id: 8, src: "/img-8.jpg", area: "4 / 1 / 5 / 3" }, // bottom-left wide
  { id: 9, src: "/img-9.jpg", area: "4 / 3 / 5 / 5" }, // bottom-right wide
];

/* ── useInView ──────────────────────────────────────────────── */
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

/* ── Section ────────────────────────────────────────────────── */
export default function GallerySection() {
  const { ref, inView } = useInView();

  return (
    <>
      <style>{`
        @import url('${FONT_URL}');

        /* ── card image zoom ── */
        .gallery-card-img {
          transition: transform 0.65s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        .gallery-card:hover .gallery-card-img {
          transform: scale(1.08);
        }

        /* ── overlay fade ── */
        .gallery-overlay {
          background: linear-gradient(
            to top,
            rgba(13,27,56,0.92) 0%,
            rgba(13,27,56,0.28) 50%,
            transparent 100%
          );
          opacity: 0;
          transition: opacity 0.4s ease;
        }
        .gallery-card:hover .gallery-overlay {
          opacity: 1;
        }

        /* ── bottom content slide up ── */
        .gallery-content {
          transform: translateY(10px);
          opacity: 0;
          transition: transform 0.4s ease, opacity 0.4s ease;
        }
        .gallery-card:hover .gallery-content {
          transform: translateY(0);
          opacity: 1;
        }

        /* ── arrow icon ── */
        .gallery-arrow {
          transform: translateY(4px) scale(0.8);
          opacity: 0;
          transition: transform 0.35s ease 0.06s, opacity 0.35s ease 0.06s;
        }
        .gallery-card:hover .gallery-arrow {
          transform: translateY(0) scale(1);
          opacity: 1;
        }

        /* ── gold shimmer border ── */
        .gallery-card::after {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: inherit;
          border: 2px solid transparent;
          transition: border-color 0.35s ease;
          pointer-events: none;
          z-index: 10;
        }
        .gallery-card:hover::after {
          border-color: rgba(201,168,76,0.6);
        }

        /* ── CTA button ── */
        .gallery-cta {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 13px 36px;
          border-radius: 8px;
          border: none;
          cursor: pointer;
          font-weight: 600;
          font-size: 0.875rem;
          letter-spacing: 0.02em;
          
          color: #fff;
          box-shadow: 0 4px 24px rgba(200,16,46,0.35);
          transition: background 0.2s ease, box-shadow 0.2s ease, transform 0.15s ease;
          font-family: "'DM Sans', sans-serif";
          text-decoration: none;
        }
        .gallery-cta:hover {
          
          box-shadow: 0 8px 32px rgba(200,16,46,0.45);
          transform: translateY(-1px);
        }
        .gallery-cta:active {
          transform: translateY(0);
        }
        .gallery-cta .cta-arrow {
          transition: transform 0.25s ease;
        }
        .gallery-cta:hover .cta-arrow {
          transform: translate(2px, -2px);
        }
      `}</style>

      <section
        ref={ref}
        style={{
          background: "#E6F2F8",
          padding: "96px 16px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Hairlines matching features section */}
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

        <div style={{ maxWidth: 1152, margin: "0 auto", position: "relative" }}>
          {/* ── Heading ── */}
          <div
            style={{
              textAlign: "center",
              marginBottom: 56,
              fontFamily: "'DM Sans', sans-serif",
              opacity: inView ? 1 : 0,
              transform: inView ? "translateY(0)" : "translateY(24px)",
              transition: "opacity 0.7s ease, transform 0.7s ease",
            }}
          >
            <span
              style={{
                color: CRIMSON,
                fontSize: ".72rem",
                fontWeight: 600,
                letterSpacing: ".2em",
                textTransform: "uppercase",
                display: "block",
                marginBottom: 8,
              }}
            >
              Image Gallery
            </span>

            <h2
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontWeight: 700,
                fontSize: "clamp(2rem,4vw,3rem)",
                lineHeight: 1.2,
                color: NAVY,
                letterSpacing: "-0.01em",
                marginBottom: 20,
              }}
            >
              Moments That{" "}
              <em style={{ fontStyle: "italic", color: GOLD }}>Matter</em>
            </h2>

            {/* Ornament */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 10,
                marginBottom: 18,
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
            </div>

            <p
              style={{
                color: "#64748B",
                fontSize: ".875rem",
                lineHeight: 1.75,
                maxWidth: 480,
                margin: "0 auto",
              }}
            >
              A glimpse into the vibrant life at NSK School — from academic
              achievements to unforgettable memories made together.
            </p>
          </div>

          {/* ── Bento Grid ── */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gridTemplateRows: "repeat(4, 210px)",
              gap: "14px",
            }}
          >
            {photos.map((photo, i) => (
              <GalleryCard
                key={photo.id}
                photo={photo}
                inView={inView}
                delay={i * 70}
              />
            ))}
          </div>

          {/* ── CTA ── */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: 52,
              opacity: inView ? 1 : 0,
              transform: inView ? "translateY(0)" : "translateY(20px)",
              transition: "opacity 0.7s ease 700ms, transform 0.7s ease 700ms",
            }}
          >
            <a
              href="#"
              className="gallery-cta  bg-red-600
              hover:bg-red-700
              active:bg-red-800"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              View Full Gallery
              <ArrowUpRight size={16} className="cta-arrow" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

/* ── GalleryCard ────────────────────────────────────────────── */
interface GalleryCardProps {
  photo: (typeof photos)[number];
  inView: boolean;
  delay: number;
}

function GalleryCard({ photo, inView, delay }: GalleryCardProps) {
  return (
    <div
      className="gallery-card"
      style={{
        gridArea: photo.area,
        borderRadius: 18,
        overflow: "hidden",
        position: "relative",
        cursor: "pointer",
        opacity: inView ? 1 : 0,
        transform: inView
          ? "translateY(0) scale(1)"
          : "translateY(28px) scale(0.97)",
        transition: `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`,
        boxShadow: "0 4px 24px rgba(13,27,56,0.10)",
      }}
    >
      {/* Image */}
      <img
        src={photo.src}
        className="gallery-card-img"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />

      {/* Gradient overlay */}
      <div
        className="gallery-overlay"
        style={{ position: "absolute", inset: 0, zIndex: 1 }}
      />

      {/* Bottom content (shown on hover) */}
      <div
        className="gallery-content"
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          padding: "16px 18px",
          zIndex: 2,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Gold accent line */}
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <div
            style={{
              width: 3,
              height: 20,
              borderRadius: 99,
              background: `linear-gradient(180deg, ${GOLD}, rgba(201,168,76,0.4))`,
            }}
          />
          <span
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 600,
              fontSize: ".72rem",
              letterSpacing: ".1em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.85)",
            }}
          >
            NSK School
          </span>
        </div>

        {/* Arrow icon */}
        <div
          className="gallery-arrow"
          style={{
            width: 32,
            height: 32,
            borderRadius: 8,
            background: "rgba(255,255,255,0.12)",
            border: "1px solid rgba(255,255,255,0.2)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#fff",
          }}
        >
          <ArrowUpRight size={15} />
        </div>
      </div>
    </div>
  );
}
