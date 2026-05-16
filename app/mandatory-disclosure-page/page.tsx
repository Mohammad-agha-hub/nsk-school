"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import { ExternalLink, FileText, Shield } from "lucide-react";

const NAVY = "#0D1B38";
const GOLD = "#C9A84C";

/* ── Disclosure data ───────────────────────────────────── */
const disclosureItems = [
  { sl: "01", label: "Copy of Valid Building Safety Certificate", href: "#" },
  { sl: "02", label: "Copies of Valid Water Health and Sanitation Certificates", href: "#" },
  { sl: "03", label: "List of PTA Members", href: "#" },
  { sl: "04", label: "Fee Structure", href: "#" },
  { sl: "05", label: "Copy of Valid Fire Safety Certificate Issued by the Competent Authority", href: "#" },
  { sl: "06", label: "Copies of Societies Trust Company Registration Renewal Certificate as Applicable", href: "#" },
  { sl: "07", label: "Annual Academic Calendar", href: "#" },
  { sl: "08", label: "Copies of Recognition Certificate", href: "#" },
];

/* ── Animations ────────────────────────────────────────── */
const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07, delayChildren: 0.35 } },
};

const rowItem = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] as const } },
};

/* ── Page ──────────────────────────────────────────────── */
export default function MandatoryPublicDisclosure() {
  return (
    <main className="font-body min-h-screen flex flex-col" style={{ background: "#F7F9FC" }}>

      {/* ── Hero ── */}
      <div className="relative overflow-hidden" style={{ background: NAVY, marginBottom: 72, paddingBottom: 50 }}>
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
          <Navbar solid />
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
            <Shield size={10} />
            CBSE Compliance
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="font-heading text-white text-4xl sm:text-5xl font-bold tracking-tight mb-4"
          >
            Mandatory{" "}
            <em style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", color: GOLD }}>
              Public
            </em>{" "}
            Disclosure
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
            className="text-white/50 text-[14px] max-w-md mx-auto leading-relaxed mb-10"
          >
            All documents published in accordance with CBSE affiliation norms
            for transparency and public accountability.
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
      <div className="relative z-10 flex-1 px-4 sm:px-6 lg:px-8 -mt-10 pb-20">
        <div className="max-w-4xl mx-auto">

          {/* Card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="bg-white rounded-2xl shadow-2xl border border-stone-100 overflow-hidden"
          >
            {/* Table header */}
            <div
              className="grid px-6 py-4"
              style={{ gridTemplateColumns: "60px 1fr 120px", background: NAVY }}
            >
              <span className="text-white/40 text-[11px] font-bold tracking-[0.2em] uppercase">No.</span>
              <span className="text-white/40 text-[11px] font-bold tracking-[0.2em] uppercase">Document / Information</span>
              <span className="text-white/40 text-[11px] font-bold tracking-[0.2em] uppercase text-center">Access</span>
            </div>

            {/* Rows */}
            <motion.div variants={container} initial="hidden" animate="show">
              {disclosureItems.map((item, i) => (
                <motion.div
                  key={i}
                  variants={rowItem}
                  className="group grid items-center px-6 py-5 border-b border-stone-100 last:border-0 hover:bg-stone-50 transition-colors duration-150"
                  style={{ gridTemplateColumns: "60px 1fr 120px" }}
                >
                  {/* Serial */}
                  <span className="font-heading font-bold text-sm tabular-nums" style={{ color: GOLD }}>
                    {item.sl}
                  </span>

                  {/* Label */}
                  <div className="flex items-center gap-3 pr-6">
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors duration-150 group-hover:bg-[#0d1f3c]/10"
                      style={{ background: `${NAVY}09`, border: `1px solid ${NAVY}12` }}
                    >
                      <FileText size={14} style={{ color: `${NAVY}60` }} />
                    </div>
                    <span className="text-[13.5px] font-medium leading-snug" style={{ color: NAVY }}>
                      {item.label}
                    </span>
                  </div>

                  {/* Link button */}
                  <div className="flex justify-center">
                    <a
                      href={item.href}
                      className="inline-flex items-center gap-1.5 bg-red-600 hover:bg-red-700 active:bg-red-800 text-white px-4 py-2 rounded-lg text-[12px] font-semibold transition-colors duration-150 shadow-sm shadow-red-900/20"
                    >
                      View
                      <ExternalLink size={10} />
                    </a>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Footer */}
            <div className="px-6 py-4 bg-stone-50 border-t border-stone-100 flex items-center justify-between">
              <p className="text-stone-400 text-[12px] flex items-center gap-2">
                <Shield size={12} style={{ color: GOLD }} />
                Documents maintained per CBSE affiliation norms.
              </p>
              <span className="text-stone-300 text-[11px]">
                {disclosureItems.length} documents
              </span>
            </div>
          </motion.div>

        </div>
      </div>
              <Footer/>
    </main>
  );
}