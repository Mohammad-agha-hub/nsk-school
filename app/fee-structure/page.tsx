"use client";

import Navbar from "@/components/Navbar";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, IndianRupee } from "lucide-react";

/* ── Fee data ──────────────────────────────────────────── */
const feeData = [
  {
    grade: "Mont-0",
    admission: 5000,
    composite: 10000,
    tuition: 3000,
    exam: 400,
    transport: 1200,
  },
  {
    grade: "Mont-1",
    admission: 5000,
    composite: 10000,
    tuition: 3000,
    exam: 400,
    transport: 1200,
  },
  {
    grade: "Mont-2",
    admission: 5000,
    composite: 10000,
    tuition: 3000,
    exam: 400,
    transport: 1200,
  },
  {
    grade: "1st",
    admission: 6000,
    composite: 11000,
    tuition: 3500,
    exam: 500,
    transport: 1200,
  },
  {
    grade: "2nd",
    admission: 6000,
    composite: 11000,
    tuition: 3500,
    exam: 500,
    transport: 1200,
  },
  {
    grade: "3rd",
    admission: 6000,
    composite: 11000,
    tuition: 3500,
    exam: 500,
    transport: 1200,
  },
  {
    grade: "4th",
    admission: 6000,
    composite: 11000,
    tuition: 3500,
    exam: 500,
    transport: 1200,
  },
  {
    grade: "5th",
    admission: 6000,
    composite: 12000,
    tuition: 4000,
    exam: 500,
    transport: 1200,
  },
  {
    grade: "6th",
    admission: 7000,
    composite: 12000,
    tuition: 4000,
    exam: 600,
    transport: 1200,
  },
  {
    grade: "7th",
    admission: 7000,
    composite: 12000,
    tuition: 4000,
    exam: 600,
    transport: 1200,
  },
  {
    grade: "8th",
    admission: 7000,
    composite: 12000,
    tuition: 4000,
    exam: 600,
    transport: 1200,
  },
  {
    grade: "9th",
    admission: 8000,
    composite: 13000,
    tuition: 4500,
    exam: 700,
    transport: 1200,
  },
  {
    grade: "11th Commerce",
    admission: 9000,
    composite: 14000,
    tuition: 5000,
    exam: 800,
    transport: 1200,
  },
  {
    grade: "11th Science",
    admission: 10000,
    composite: 15000,
    tuition: 5500,
    exam: 800,
    transport: 1200,
  },
];

const cols = [
  { key: "admission", label: "Admission Fee" },
  { key: "composite", label: "Composite Fee" },
  { key: "tuition", label: "Tuition Fee" },
  { key: "exam", label: "Exam Fee" },
  { key: "transport", label: "Transport Fee / Month" },
];

const fmt = (n: number) => `₹${n.toLocaleString("en-IN")}`;

/* ── Accordion row ─────────────────────────────────────── */
function GradeRow({
  item,
  index,
}: {
  item: (typeof feeData)[0];
  index: number;
}) {
  const [open, setOpen] = useState(index === 0);

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.4,
        delay: index * 0.04,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="rounded-xl overflow-hidden border border-stone-200 shadow-sm"
    >
      {/* Header */}
      <button
        onClick={() => setOpen(!open)}
        className={`w-full flex items-center justify-between px-6 py-4 text-left transition-colors duration-150 ${
          open ? "bg-[#0d1f3c]" : "bg-white hover:bg-stone-50"
        }`}
      >
        <div className="flex items-center gap-3">
          <span
            className={`w-7 h-7 rounded-lg flex items-center justify-center text-[11px] font-bold flex-shrink-0 ${
              open
                ? "bg-white/15 text-[#C9A84C]"
                : "bg-[#0d1f3c]/8 text-[#0d1f3c]/50"
            }`}
          >
            {index + 1}
          </span>
          <span
            className={`font-heading font-semibold text-[15px] ${open ? "text-white" : "text-[#0d1f3c]"}`}
          >
            {item.grade}
          </span>
        </div>

        <div className="flex items-center gap-4">
          {/* Total pill — visible when closed */}
          {!open && (
            <span className="hidden sm:inline-flex items-center gap-1 text-[12px] font-medium text-stone-400">
              Total&nbsp;
              <span className="text-[#0d1f3c] font-semibold">
                {fmt(
                  item.admission + item.composite + item.tuition + item.exam,
                )}
              </span>
            </span>
          )}
          <motion.span
            animate={{ rotate: open ? 180 : 0 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            style={{ display: "flex" }}
          >
            <ChevronDown
              size={16}
              className={open ? "text-white/60" : "text-stone-400"}
            />
          </motion.span>
        </div>
      </button>

      {/* Expanded table */}
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            style={{ overflow: "hidden" }}
          >
            {/* Mobile: stacked cards */}
            <div className="sm:hidden divide-y divide-stone-100 bg-white px-6 py-2">
              {cols.map((col) => (
                <div
                  key={col.key}
                  className="flex items-center justify-between py-3"
                >
                  <span className="text-stone-500 text-[13px]">
                    {col.label}
                  </span>
                  <span className="text-[#0d1f3c] font-semibold text-[13px]">
                    {fmt(item[col.key as keyof typeof item] as number)}
                  </span>
                </div>
              ))}
            </div>

            {/* Desktop: table */}
            <div className="hidden sm:block bg-white">
              {/* Col headers */}
              <div
                className="grid border-b border-stone-100 bg-stone-50"
                style={{ gridTemplateColumns: `repeat(${cols.length}, 1fr)` }}
              >
                {cols.map((col) => (
                  <div
                    key={col.key}
                    className="px-5 py-3 text-[11px] font-bold tracking-[0.15em] uppercase text-stone-400 text-center"
                  >
                    {col.label}
                  </div>
                ))}
              </div>
              {/* Values */}
              <div
                className="grid"
                style={{ gridTemplateColumns: `repeat(${cols.length}, 1fr)` }}
              >
                {cols.map((col) => (
                  <div key={col.key} className="px-5 py-5 text-center">
                    <span className="text-[#0d1f3c] font-heading font-semibold text-[15px]">
                      {fmt(item[col.key as keyof typeof item] as number)}
                    </span>
                  </div>
                ))}
              </div>
              {/* Total footer */}
              <div className="px-5 py-3 bg-[#0d1f3c]/4 border-t border-stone-100 flex items-center justify-end gap-2">
                <span className="text-stone-400 text-[12px] font-medium">
                  Annual Total (excl. transport)
                </span>
                <span className="text-[#0d1f3c] font-heading font-bold text-[14px]">
                  {fmt(
                    item.admission + item.composite + item.tuition + item.exam,
                  )}
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

/* ── Page ──────────────────────────────────────────────── */
export default function FeeStructure() {
  return (
    <main className="font-body min-h-screen bg-white flex flex-col">
      {/* Navbar */}
      <div className="relative z-[200]">
        <Navbar solid />
      </div>

      <div className="flex-1 px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-[#0d1f3c]/6 border border-[#0d1f3c]/12 text-[#0d1f3c]/60 text-[11px] font-bold tracking-[0.22em] uppercase px-4 py-1.5 rounded-full mb-5"
            >
              <IndianRupee size={10} />
              Session 2025–26
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="font-heading text-[#0d1f3c] text-4xl sm:text-5xl font-bold tracking-tight"
            >
              Fee{" "}
              <span
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontStyle: "italic",
                  color: "#C9A84C",
                }}
              >
                Structure
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.55,
                delay: 0.16,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mt-3 text-stone-400 text-[14px] max-w-md mx-auto leading-relaxed"
            >
              Select a class below to view the complete fee breakdown for the
              current academic session.
            </motion.p>
          </div>

          {/* Accordions */}
          <div className="flex flex-col gap-3">
            {feeData.map((item, i) => (
              <GradeRow key={item.grade} item={item} index={i} />
            ))}
          </div>

          {/* Footnote */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="mt-8 text-center text-stone-400 text-[12.5px] leading-relaxed"
          >
            * Fees are subject to revision. For queries contact{" "}
            <a
              href="mailto:nsksecschool@gmail.com"
              className="text-[#0d1f3c] font-medium hover:underline"
            >
              nsksecschool@gmail.com
            </a>
          </motion.p>
        </div>
      </div>
    </main>
  );
}
