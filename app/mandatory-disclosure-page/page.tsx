"use client";

import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import { ExternalLink, FileText, Shield } from "lucide-react";

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

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as const } },
};

/* ── Page ──────────────────────────────────────────────── */
export default function MandatoryPublicDisclosure() {
  return (
    <main className="font-body min-h-screen flex flex-col bg-white">

      {/* ── Navbar ── */}
      <div className="relative z-[200]">
        <Navbar solid />
      </div>

      {/* ── Content ── */}
      <div className="relative z-10 flex-1 px-4 sm:px-6 lg:px-8 py-16">

        {/* Page heading */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-4xl mx-auto text-center mb-12"
        >
          <motion.span
            variants={fadeUp}
            className="inline-flex items-center gap-2 bg-[#0d1f3c]/6 border border-[#0d1f3c]/12 text-[#0d1f3c]/60 text-[11px] font-bold tracking-[0.22em] uppercase px-4 py-1.5 rounded-full mb-5"
          >
            <Shield size={10} />
            CBSE Compliance
          </motion.span>

          <motion.h1
            variants={fadeUp}
            className="font-heading text-[#0d1f3c] text-4xl sm:text-5xl font-bold leading-tight tracking-tight"
          >
            Mandatory{" "}
            <span
              style={{
                fontFamily: "'Playfair Display', serif",
                fontStyle: "italic",
                color: "#C9A84C",
              }}
            >
              Public
            </span>{" "}
            Disclosure
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-4 text-stone-500 text-base max-w-lg mx-auto leading-relaxed"
          >
            All documents published in accordance with CBSE affiliation norms
            for transparency and public accountability.
          </motion.p>
        </motion.div>

        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
            {/* Card */}
            <div className="bg-white rounded-2xl shadow-2xl border border-stone-100 overflow-hidden">

              {/* Table header */}
              <div
                className="grid px-6 py-4 bg-[#0d1f3c]"
                style={{ gridTemplateColumns: "60px 1fr 120px" }}
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
                    <span className="text-[#C9A84C] font-heading font-bold text-sm tabular-nums">
                      {item.sl}
                    </span>

                    {/* Label */}
                    <div className="flex items-center gap-3 pr-6">
                      <div className="w-8 h-8 rounded-lg bg-[#0d1f3c]/6 border border-[#0d1f3c]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#0d1f3c]/10 transition-colors duration-150">
                        <FileText size={14} className="text-[#0d1f3c]/40" />
                      </div>
                      <span className="text-[#0d1f3c] text-[13.5px] font-medium leading-snug">
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
                  <Shield size={12} className="text-[#C9A84C]" />
                  Documents maintained per CBSE affiliation norms.
                </p>
                <span className="text-stone-300 text-[11px]">
                  {disclosureItems.length} documents
                </span>
              </div>
            </div>

          </motion.div>
        </div>
    </main>
  );
}