"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PageLayout from "@/components/layout/PageLayout";

interface GalleryImage {
  src: string;
  alt: string;
  span?: "tall";
}

const images: GalleryImage[] = [
  { src: "/img-1.jpg", alt: "School event", span: "tall" },
  { src: "/img-2.jpg", alt: "Students activity" },
  { src: "/img-3.jpg", alt: "School life" },
  { src: "/img-4.jpg", alt: "Campus view", span: "tall" },
  { src: "/img-5.jpg", alt: "Classroom session" },
  { src: "/img-6.jpg", alt: "School program" },
  { src: "/img-7.jpg", alt: "Morning assembly" },
  { src: "/img-8.jpg", alt: "Cultural performance", span: "tall" },
  { src: "/img-9.jpg", alt: "Computer lab" },
  { src: "/img-10.jpg", alt: "School building" },
  { src: "/exhibit.jpg", alt: "Science exhibition", span: "tall" },
  { src: "/play.jpg", alt: "Students at play" },
  { src: "/smart.jpg", alt: "Smart class in session" },
  { src: "/study.jpg", alt: "Study session" },
  { src: "/chairman.jpeg", alt: "Chairman's address" },
  { src: "/annual.jpg", alt: "Annual Day celebration", span: "tall" },
  { src: "/culture.jpg", alt: "Cultural activity" },
  { src: "/principal.jpeg", alt: "Principal's message" },
  { src: "/primary.jpg", alt: "Primary school students" },
];

/* ── Lightbox ─────────────────────────────────────────── */
function Lightbox({
  image,
  onClose,
  onPrev,
  onNext,
}: {
  image: GalleryImage;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose, onPrev, onNext]);

  return (
    <motion.div
      className="fixed inset-0 z-[500] flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-[#0d1f3c]/95 backdrop-blur-md" />

      <motion.div
        className="relative z-10 max-w-5xl w-full mx-4"
        initial={{ scale: 0.92, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.92, opacity: 0 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] as const }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top bar */}
        <div className="flex items-center justify-between mb-3 px-1">
          <span className="text-white/60 text-sm font-medium tracking-wide">
            {image.alt}
          </span>
          <button
            onClick={onClose}
            className="text-white/60 hover:text-white transition-colors p-1"
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Image */}
        <div className="relative rounded-2xl overflow-hidden bg-white/5 ring-1 ring-white/10 shadow-2xl">
          <img
            src={image.src}
            alt={image.alt}
            className="w-full max-h-[75vh] object-contain"
          />
        </div>

        {/* Prev / Next */}
        <div className="flex justify-between mt-4 px-1">
          <button
            onClick={onPrev}
            className="flex items-center gap-2 text-white/60 hover:text-white text-sm font-medium transition-colors group"
          >
            <span className="w-8 h-8 rounded-full border border-white/20 group-hover:border-white/50 flex items-center justify-center transition-colors">
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              >
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </span>
            Previous
          </button>
          <button
            onClick={onNext}
            className="flex items-center gap-2 text-white/60 hover:text-white text-sm font-medium transition-colors group"
          >
            Next
            <span className="w-8 h-8 rounded-full border border-white/20 group-hover:border-white/50 flex items-center justify-center transition-colors">
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              >
                <path d="M9 18l6-6-6-6" />
              </svg>
            </span>
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ── Gallery grid item ────────────────────────────────── */
function GalleryItem({
  image,
  index,
  onClick,
}: {
  image: GalleryImage;
  index: number;
  onClick: () => void;
}) {
  return (
    <motion.div
      className={`group relative overflow-hidden rounded-xl cursor-pointer ${image.span === "tall" ? "row-span-2" : "row-span-1"}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{
        duration: 0.45,
        ease: [0.22, 1, 0.36, 1] as const,
        delay: (index % 6) * 0.06,
      }}
      onClick={onClick}
    >
      <img
        src={image.src}
        alt={image.alt}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0d1f3c]/80 via-[#0d1f3c]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="absolute inset-0 flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
        <p className="text-white text-sm font-medium leading-snug line-clamp-2">
          {image.alt}
        </p>
      </div>
      <div className="absolute top-3 right-3 w-8 h-8 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 scale-75 group-hover:scale-100 border border-white/20">
        <svg
          width="13"
          height="13"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
        >
          <path d="M15 3h6m0 0v6m0-6L14 10M9 21H3m0 0v-6m0 6l7-7" />
        </svg>
      </div>
    </motion.div>
  );
}

/* ── Main page ─────────────────────────────────────────── */
export default function GalleryPage() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const prevImage = () =>
    setLightboxIndex((i) =>
      i === null ? null : (i - 1 + images.length) % images.length,
    );
  const nextImage = () =>
    setLightboxIndex((i) => (i === null ? null : (i + 1) % images.length));

  return (
    // eyebrow prop removed — it belongs to PageHero internally, not PageLayout
    <PageLayout title="Our Gallery">
      <section className="bg-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section heading */}
          <div className="text-center mb-12">
            <h2 className="text-[#0d1f3c] text-4xl md:text-5xl font-extrabold tracking-tight">
              Moments That{" "}
              <span
                className="text-[#E8B84B] italic"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Matter
              </span>
            </h2>
            <div className="flex items-center justify-center gap-2 mt-4">
              <div className="h-px w-16 bg-gray-200" />
              <div className="w-2 h-2 rounded-full bg-[#DC2626]" />
              <div className="h-px w-16 bg-gray-200" />
            </div>
            <p className="mt-4 text-gray-500 text-sm max-w-md mx-auto">
              Glimpses of life at NSK High School — celebrations, learning, and
              growth captured in every frame.
            </p>
          </div>

          {/* Grid — all images */}
          <div
            className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4"
            style={{ gridAutoRows: "220px" }}
          >
            {images.map((image, index) => (
              <GalleryItem
                key={image.src}
                image={image}
                index={index}
                onClick={() => setLightboxIndex(index)}
              />
            ))}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {lightboxIndex !== null && (
          <Lightbox
            image={images[lightboxIndex]}
            onClose={() => setLightboxIndex(null)}
            onPrev={prevImage}
            onNext={nextImage}
          />
        )}
      </AnimatePresence>
    </PageLayout>
  );
}
