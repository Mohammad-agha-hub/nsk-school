"use client";

import Navbar from "@/components/Navbar";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, IndianRupee, Mail } from "lucide-react";

const NAVY = "#0D1B38";
const GOLD = "#C9A84C";

/* ── Fee data ──────────────────────────────────────────── */
const feeGroups = [
  {
    label: "Montessori",
    grades: [
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
        tuition: 3300,
        exam: 400,
        transport: 1200,
      },
    ],
  },
  {
    label: "Primary School",
    grades: [
      {
        grade: "1st",
        admission: 5000,
        composite: 10000,
        tuition: 3300,
        exam: 400,
        transport: 1200,
      },
      {
        grade: "2nd",
        admission: 5000,
        composite: 10000,
        tuition: 3500,
        exam: 400,
        transport: 1200,
      },
      {
        grade: "3rd",
        admission: 5000,
        composite: 10000,
        tuition: 3500,
        exam: 400,
        transport: 1200,
      },
      {
        grade: "4th",
        admission: 5000,
        composite: 13000,
        tuition: 3500,
        exam: 400,
        transport: 1200,
      },
      {
        grade: "5th",
        admission: 5000,
        composite: 13000,
        tuition: 3700,
        exam: 400,
        transport: 1200,
      },
    ],
  },
  {
    label: "Secondary School",
    grades: [
      {
        grade: "6th",
        admission: 5000,
        composite: 13000,
        tuition: 4000,
        exam: 400,
        transport: 1200,
      },
      {
        grade: "7th",
        admission: 5000,
        composite: 13000,
        tuition: 4100,
        exam: 400,
        transport: 1200,
      },
      {
        grade: "8th",
        admission: 5000,
        composite: 13000,
        tuition: 4300,
        exam: 400,
        transport: 1200,
      },
      {
        grade: "9th",
        admission: 5000,
        composite: 15000,
        tuition: 5300,
        exam: 400,
        transport: 1200,
      },
    ],
  },
  {
    label: "Senior Secondary",
    grades: [
      {
        grade: "11th Commerce",
        admission: 5000,
        composite: 15000,
        tuition: 6300,
        exam: 400,
        transport: 1200,
      },
      {
        grade: "11th Science",
        admission: 5000,
        composite: 15000,
        tuition: 6300,
        exam: 400,
        transport: 1200,
      },
    ],
  },
];

const cols = [
  { key: "admission",  label: "Admission Fee" },
  { key: "composite",  label: "Composite Fee" },
  { key: "tuition",    label: "Tuition Fee" },
  { key: "exam",       label: "Exam Fee" },
  { key: "transport",  label: "Transport / Month" },
];

const fmt = (n: number) => `₹${n.toLocaleString("en-IN")}`;

type FeeItem = {
  grade: string;
  admission: number;
  composite: number;
  tuition: number;
  exam: number;
  transport: number;
};

/* ── Accordion row ─────────────────────────────────────── */
function GradeRow({ item, index, globalIndex }: { item: FeeItem; index: number; globalIndex: number }) {
  const [open, setOpen] = useState(false);
  const total = item.admission + item.composite + item.tuition + item.exam;

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: globalIndex * 0.04, ease: [0.22, 1, 0.36, 1] }}
      className="rounded-xl overflow-hidden border border-stone-200 shadow-sm"
      style={{ boxShadow: open ? `0 0 0 2px ${GOLD}55` : undefined }}
    >
      {/* Header */}
      <button
        onClick={() => setOpen(!open)}
        className={`w-full flex items-center justify-between px-5 py-4 text-left transition-all duration-200 ${
          open ? "bg-[#0D1B38]" : "bg-white hover:bg-stone-50"
        }`}
      >
        <div className="flex items-center gap-3">
          {/* Numbered badge */}
          <span
            className="w-7 h-7 rounded-lg flex items-center justify-center text-[11px] font-bold flex-shrink-0 transition-colors"
            style={{
              background: open ? "rgba(201,168,76,0.18)" : `${NAVY}0D`,
              color: open ? GOLD : `${NAVY}88`,
            }}
          >
            {globalIndex + 1}
          </span>
          <span
            className="font-heading font-semibold text-[15px] transition-colors"
            style={{ color: open ? "#fff" : NAVY }}
          >
            {item.grade}
          </span>
        </div>

        <div className="flex items-center gap-4">
          {!open && (
            <span className="hidden sm:flex items-center gap-1.5 text-[12px]">
              <span className="text-stone-400 font-medium">Total</span>
              <span className="font-bold" style={{ color: NAVY }}>{fmt(total)}</span>
            </span>
          )}
          {open && (
            <span
              className="hidden sm:inline-flex items-center gap-1 text-[11px] font-semibold px-2.5 py-1 rounded-full"
              style={{ background: `${GOLD}22`, color: GOLD }}
            >
              {fmt(total)}
            </span>
          )}
          <motion.span
            animate={{ rotate: open ? 180 : 0 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            style={{ display: "flex" }}
          >
            <ChevronDown size={16} className={open ? "text-white/50" : "text-stone-400"} />
          </motion.span>
        </div>
      </button>

      {/* Expanded */}
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            style={{ overflow: "hidden" }}
          >
            {/* Mobile: stacked */}
            <div className="sm:hidden divide-y divide-stone-100 bg-white px-5 py-2">
              {cols.map((col) => (
                <div key={col.key} className="flex items-center justify-between py-3">
                  <span className="text-stone-400 text-[13px]">{col.label}</span>
                  <span className="font-semibold text-[13px]" style={{ color: NAVY }}>
                    {fmt(item[col.key as keyof FeeItem] as number)}
                  </span>
                </div>
              ))}
              {/* Mobile total */}
              <div className="flex items-center justify-between py-3">
                <span className="text-stone-400 text-[13px] font-medium">Annual Total (excl. transport)</span>
                <span className="font-bold text-[13px]" style={{ color: GOLD }}>{fmt(total)}</span>
              </div>
            </div>

            {/* Desktop: table */}
            <div className="hidden sm:block bg-white">
              <div
                className="grid border-b border-stone-100 bg-stone-50/70"
                style={{ gridTemplateColumns: `repeat(${cols.length}, 1fr)` }}
              >
                {cols.map((col) => (
                  <div key={col.key} className="px-5 py-3 text-[10.5px] font-bold tracking-[0.14em] uppercase text-stone-400 text-center">
                    {col.label}
                  </div>
                ))}
              </div>
              <div className="grid" style={{ gridTemplateColumns: `repeat(${cols.length}, 1fr)` }}>
                {cols.map((col) => (
                  <div key={col.key} className="px-5 py-5 text-center">
                    <span className="font-heading font-semibold text-[15px]" style={{ color: NAVY }}>
                      {fmt(item[col.key as keyof FeeItem] as number)}
                    </span>
                  </div>
                ))}
              </div>
              {/* Total footer */}
              <div
                className="px-5 py-3 border-t border-stone-100 flex items-center justify-between"
                style={{ background: `${NAVY}05` }}
              >
                <span className="text-stone-400 text-[11.5px]">* Transport fee is charged separately per month</span>
                <div className="flex items-center gap-2">
                  <span className="text-stone-400 text-[12px] font-medium">Annual Total (excl. transport)</span>
                  <span className="font-bold text-[14px]" style={{ color: GOLD }}>{fmt(total)}</span>
                </div>
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
  let globalIndex = 0;

  return (
    <main className="font-body min-h-screen flex flex-col" style={{ background: "#F7F9FC" }}>
      {/* ── Hero ── */}
      <div className="relative overflow-hidden" style={{ background: NAVY, marginBottom: 72,paddingBottom:50 }}>
        {/* Diagonal pattern */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `repeating-linear-gradient(-45deg, rgba(255,255,255,.025) 0px, rgba(255,255,255,.025) 1px, transparent 1px, transparent 18px)`,
            pointerEvents: "none",
          }}
        />
        {/* Gold top line */}
        <div
          style={{
            position: "absolute",
            top: 0, left: 0, right: 0,
            height: 3,
            background: `linear-gradient(90deg, transparent, ${GOLD}, ${GOLD}88, transparent)`,
            opacity: 0.7,
          }}
        />
        {/* Radial glow */}
        <div
          style={{
            position: "absolute",
            top: "-60px",
            right: "-80px",
            width: 400,
            height: 400,
            borderRadius: "50%",
            background: `${GOLD}12`,
            filter: "blur(60px)",
            pointerEvents: "none",
          }}
        />

        {/* Navbar */}
        <div className="relative z-[200]">
          <Navbar />
        </div>

        {/* Hero content */}
        <div className="relative z-10 text-center px-4 pt-10 pb-0">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 border text-[11px] font-bold tracking-[0.22em] uppercase px-4 py-1.5 rounded-full mb-5"
            style={{
              background: "rgba(201,168,76,0.1)",
              borderColor: `${GOLD}40`,
              color: GOLD,
            }}
          >
            <IndianRupee size={10} />
            Session 2025–26
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="font-heading text-white text-4xl sm:text-5xl font-bold tracking-tight mb-4"
          >
            Fee{" "}
            <em style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", color: GOLD }}>
              Structure
            </em>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
            className="text-white/50 text-[14px] max-w-md mx-auto leading-relaxed mb-10"
          >
            Select a class below to view the complete fee breakdown for the current academic session.
          </motion.p>

          {/* Ornament */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex items-center justify-center gap-3"
          >
            <div className="h-px w-16" style={{ background: `linear-gradient(90deg, transparent, ${GOLD}40)` }} />
            <div className="w-1.5 h-1.5 rounded-full" style={{ background: GOLD }} />
            <div className="w-2 h-2 rounded-full border" style={{ borderColor: `${GOLD}50` }} />
            <div className="w-1.5 h-1.5 rounded-full" style={{ background: GOLD }} />
            <div className="h-px w-16" style={{ background: `linear-gradient(90deg, ${GOLD}40, transparent)` }} />
          </motion.div>
        </div>
      </div>

      {/* ── Content ── */}
      <div className="flex-1 px-4 sm:px-6 lg:px-8 -mt-10 pb-20 relative z-10">
        <div className="max-w-4xl mx-auto">

          {/* Groups */}
          <div className="flex flex-col gap-10">
            {feeGroups.map((group, gi) => (
              <motion.div
                key={group.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: gi * 0.1 }}
              >
                {/* Group label */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-1 h-5 rounded-full" style={{ background: GOLD }} />
                  <span
                    className="text-[11px] font-bold tracking-[0.18em] uppercase"
                    style={{ color: `${NAVY}80` }}
                  >
                    {group.label}
                  </span>
                  <div className="flex-1 h-px" style={{ background: `${NAVY}12` }} />
                </div>

                {/* Accordion rows */}
                <div className="flex flex-col gap-2.5">
                  {group.grades.map((item, i) => {
                    const idx = globalIndex++;
                    return (
                      <GradeRow key={item.grade} item={item} index={i} globalIndex={idx} />
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Footnote box */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="mt-10 rounded-xl px-6 py-4 flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-6"
            style={{
              background: `${NAVY}06`,
              borderLeft: `3px solid ${GOLD}`,
              border: `1px solid ${NAVY}10`,
              borderLeftWidth: 3,
              borderLeftColor: GOLD,
            }}
          >
            <div className="flex-1">
              <p className="text-stone-500 text-[13px] leading-relaxed">
                <span className="font-semibold" style={{ color: NAVY }}>Note:</span>{" "}
                Fees are subject to revision without prior notice. All fees are annual unless stated otherwise.
              </p>
            </div>
            <a
              href="mailto:nsksecschool@gmail.com"
              className="inline-flex items-center gap-2 text-[12.5px] font-semibold whitespace-nowrap transition-opacity hover:opacity-70"
              style={{ color: NAVY }}
            >
              <Mail size={13} />
              nsksecschool@gmail.com
            </a>
          </motion.div>
        </div>
      </div>
    </main>
  );
}