"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";

/* ── fonts ─────────────────────────────────────────────────── */
const FONT_URL =
  "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,800;1,700&family=DM+Sans:wght@400;500;600&display=swap";

const NAVY = "#0D1B38";
const GOLD = "#C9A84C";

/* ── gallery data ───────────────────────────────────────────── */
const photos = [
  {
    id: 1,
    src: "/img-1.jpg",
    
    area: "1 / 1 / 3 / 3", // 2×2 — large feature
  },
  {
    id: 2,
    src: "/img-2.jpg",
    
    area: "1 / 3 / 2 / 4", // top-right small
  },
  {
    id: 3,
    src: "/img-3.jpg",
    
    area: "1 / 4 / 2 / 5", // top-far-right small
  },
  {
    id: 4,
    src: "/img-4.jpg",
    
    area: "2 / 3 / 3 / 5", // right wide
  },
  {
    id: 5,
    src: "/img-5.jpg",
    
    area: "3 / 1 / 4 / 2", // bottom-left small
  },
  {
    id: 6,
    src: "/img-6.jpg",
    
    area: "3 / 2 / 4 / 4", // bottom middle-wide
  },
  {
    id: 7,
    src: "/img-7.jpg",
    
    area: "3 / 4 / 4 / 5", // bottom-right small
  },
  {
    id: 8,
    src: "/img-8.jpg",
    
    area: "4 / 1 / 5 / 3", // bottom-left wide
  },
  {
    id: 9,
    src: "/img-9.jpg",
    
    area: "4 / 3 / 5 / 5", // bottom-right wide
  },
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

        .gallery-card-img {
          transition: transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        .gallery-card:hover .gallery-card-img {
          transform: scale(1.07);
        }

        .gallery-overlay {
          background: linear-gradient(
            to top,
            rgba(13,27,56,0.92) 0%,
            rgba(13,27,56,0.3) 45%,
            transparent 100%
          );
          opacity: 0;
          transition: opacity 0.4s ease;
        }
        .gallery-card:hover .gallery-overlay {
          opacity: 1;
        }

        .gallery-content {
          transform: translateY(8px);
          opacity: 0;
          transition: transform 0.4s ease, opacity 0.4s ease;
        }
        .gallery-card:hover .gallery-content {
          transform: translateY(0);
          opacity: 1;
        }

        .gallery-arrow {
          transform: translateY(4px) rotate(-45deg) scale(0.8);
          opacity: 0;
          transition: transform 0.35s ease 0.05s, opacity 0.35s ease 0.05s;
        }
        .gallery-card:hover .gallery-arrow {
          transform: translateY(0) rotate(0deg) scale(1);
          opacity: 1;
        }

        /* always-visible tag */
        .gallery-tag {
          transition: opacity 0.3s ease;
        }
        .gallery-card:hover .gallery-tag {
          opacity: 0;
        }

        /* gold shimmer border on hover */
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
          border-color: rgba(201,168,76,0.55);
        }
      `}</style>

      <section
        ref={ref}
        className="bg-[#E6F2F8] py-24 px-4 relative overflow-hidden"
      >
        {/* background glow */}
        <div className="pointer-events-none absolute -bottom-40 -left-40 w-[600px] h-[600px] rounded-full bg-white/25 blur-3xl" />
        <div className="pointer-events-none absolute -top-20 right-0 w-[400px] h-[400px] rounded-full bg-[#C9A84C]/10 blur-3xl" />

        <div className="max-w-6xl mx-auto relative">
          {/* ── Heading ── */}
          <div
            className="text-center mb-14 transition-all duration-700"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              opacity: inView ? 1 : 0,
              transform: inView ? "translateY(0)" : "translateY(24px)",
            }}
          >
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="block w-6 h-px bg-[#C8102E]" />
              <span
                className="text-[#C8102E] text-xs font-semibold tracking-[.22em] uppercase"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                Image Gallary
              </span>
              <span className="block w-6 h-px bg-[#C8102E]" />
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
              Moments That{" "}
              <em style={{ fontStyle: "italic", color: GOLD }}>Matter</em>
            </h2>

            <p
              className="text-slate-500 text-sm leading-relaxed max-w-lg mx-auto"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              A glimpse into the vibrant life at NSK School — from academic
              achievements to unforgettable memories made together.
            </p>
          </div>

          {/* ── Bento Grid ── */}
          {/*
              4 columns × 4 rows
              Row heights: 220px 220px 220px 220px  → 4 × 220 = 880px total
          */}
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

          {/* ── View All CTA ── */}
          <div
            className="flex justify-center mt-12 transition-all duration-700"
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? "translateY(0)" : "translateY(20px)",
              transitionDelay: "700ms",
            }}
          >
            <button
              className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full font-semibold text-sm tracking-wide transition-all duration-300"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                background: NAVY,
                color: "#fff",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.background = GOLD;
                (e.currentTarget as HTMLButtonElement).style.color = NAVY;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.background = NAVY;
                (e.currentTarget as HTMLButtonElement).style.color = "#fff";
              }}
            >
              View Full Gallery
              <ArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </button>
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
      className="gallery-card relative rounded-2xl overflow-hidden cursor-pointer"
      style={{
        gridArea: photo.area,
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
      
        className="gallery-card-img absolute inset-0 w-full h-full object-cover"
      />

    </div>
  );
}
