"use client";

import Navbar from "@/components/Navbar";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HelpCircle, ChevronDown, GraduationCap, BookOpen, Bus, Shield, Users, Phone } from "lucide-react";

const NAVY = "#0D1B38";
const GOLD = "#C9A84C";

/* ── FAQ Data ──────────────────────────────────────────── */
const faqGroups = [
  {
    icon: GraduationCap,
    label: "Admissions",
    faqs: [
      {
        q: "What is the admission process at NSK High School?",
        a: "The admission process is simple and transparent. Parents can visit our school or fill out the online application form. Following submission, our admissions team will schedule an assessment or interaction session depending on the grade level. We ensure a smooth and welcoming transition for all new students.",
      },
      {
        q: "What age group does NSK High School cater to?",
        a: "NSK High School caters to children from Montessori (Mont-0) through Senior Secondary (Class 11). This covers ages approximately 3 years through 17 years, providing a holistic schooling journey under one roof.",
      },
      {
        q: "What documents are required for admission?",
        a: "Required documents typically include: the child's birth certificate, previous school leaving/transfer certificate, last year's report card, passport-size photographs, Aadhar card of student and parents, and caste certificate (if applicable). Our admissions team will provide a complete checklist upon inquiry.",
      },
      {
        q: "How can I apply for admission?",
        a: "You can apply online through our Admission page, or visit our school directly at Chandu, opp. Petrol Pump, Budhera, Gurugram, Haryana 122505. You can also reach us at +91 88510 99409 or email nsksecschool@gmail.com for guidance.",
      },
    ],
  },
  {
    icon: BookOpen,
    label: "Academics",
    faqs: [
      {
        q: "What curriculum does NSK High School follow?",
        a: "NSK High School is affiliated with the Central Board of Secondary Education (CBSE), one of India's most reputed educational boards. Our curriculum is designed to balance academic rigour with holistic development, preparing students for national-level competitive exams and beyond.",
      },
      {
        q: "What extracurricular activities are available?",
        a: "We offer a wide range of extracurricular activities including sports (cricket, football, athletics), cultural events (Annual Day, debates, drama), science exhibitions, and various clubs. We believe in nurturing every dimension of a student's personality.",
      },
      {
        q: "How are teachers selected at NSK High School?",
        a: "All our faculty members are 100% qualified with relevant B.Ed or M.Ed degrees and subject expertise. Teachers undergo regular training and professional development workshops to stay updated with modern pedagogical practices and CBSE guidelines.",
      },
      {
        q: "How does NSK incorporate technology into learning?",
        a: "Our Smart Classrooms are equipped with interactive digital boards, projectors, and e-learning tools. Our Computer Lab provides students with hands-on experience in digital literacy. We integrate technology seamlessly into everyday teaching to enhance understanding and engagement.",
      },
    ],
  },
  {
    icon: Users,
    label: "Student Welfare",
    faqs: [
      {
        q: "Are there provisions for students with special needs?",
        a: "NSK High School is committed to inclusive education. We work closely with parents of students with special needs to provide appropriate support, accommodations, and a nurturing environment. Please contact our admissions office to discuss specific requirements.",
      },
      {
        q: "How does the school communicate with parents?",
        a: "We maintain regular communication through parent-teacher meetings, school notices, WhatsApp updates, and our school diary system. Parents are always encouraged to visit the school and meet teachers during designated hours.",
      },
      {
        q: "What safety measures are in place?",
        a: "Student safety is our top priority. The campus has CCTV surveillance, trained security personnel at entry points, and strict visitor protocols. Our transport vehicles are also equipped with safety measures and accompanied by supervisors.",
      },
    ],
  },
  {
    icon: Bus,
    label: "Transport & Fees",
    faqs: [
      {
        q: "Does NSK High School offer transportation?",
        a: "Yes, we offer school transport covering key routes around the Gurugram region. Transport is available at a monthly fee of ₹1,200. Our vehicles are maintained regularly and supervised by trained staff to ensure student safety.",
      },
      {
        q: "What are the school fees?",
        a: "Fees vary by grade level. For detailed fee breakdowns, please visit our Fee Structure page where you can view admission fees, composite fees, tuition fees, and exam fees for each class from Montessori through Class 11.",
      },
      {
        q: "Are there any fee concessions or scholarships available?",
        a: "NSK High School periodically offers merit-based and need-based concessions. Please contact our administrative office directly to inquire about current scholarship programmes and eligibility criteria.",
      },
    ],
  },
  {
    icon: Phone,
    label: "General",
    faqs: [
      {
        q: "What are the school hours?",
        a: "School operates Monday to Friday from 8:00 AM to 2:30 PM, and Saturday from 8:00 AM to 12:30 PM. The administrative office is open during the same hours for parent queries and visits.",
      },
      {
        q: "Where is NSK High School located?",
        a: "We are located at Chandu, opposite the Petrol Pump, Budhera, Gurugram, Haryana – 122505. We are well connected by road and our transport routes cover multiple areas around Gurugram.",
      },
    ],
  },
];

/* ── FAQ Item ──────────────────────────────────────────── */
function FaqItem({ faq, index }: { faq: { q: string; a: string }; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
      className="rounded-xl overflow-hidden border transition-all duration-200"
      style={{
        borderColor: open ? `${GOLD}50` : "#e7e7e7",
        boxShadow: open ? `0 0 0 1px ${GOLD}20, 0 4px 20px rgba(13,27,56,0.07)` : "0 1px 4px rgba(13,27,56,0.05)",
      }}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-5 text-left transition-colors duration-150"
        style={{ background: open ? `${NAVY}` : "#fff" }}
      >
        <div className="flex items-center gap-3 flex-1 min-w-0">
          {/* Index dot */}
          <span
            className="w-6 h-6 rounded-md flex items-center justify-center text-[10px] font-bold flex-shrink-0"
            style={{
              background: open ? `${GOLD}22` : `${NAVY}08`,
              color: open ? GOLD : `${NAVY}60`,
            }}
          >
            {index + 1}
          </span>
          <span
            className="font-heading font-semibold text-[14px] sm:text-[15px] leading-snug pr-4"
            style={{ color: open ? "#fff" : NAVY }}
          >
            {faq.q}
          </span>
        </div>
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
          className="flex-shrink-0"
          style={{ color: open ? `${GOLD}` : "#9ca3af" }}
        >
          <ChevronDown size={17} />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            style={{ overflow: "hidden" }}
          >
            <div
              className="px-6 pb-5 pt-1"
              style={{ background: "#fff", borderTop: `1px solid ${NAVY}08` }}
            >
              {/* Gold accent bar */}
              <div className="flex gap-4">
                <div
                  className="w-0.5 flex-shrink-0 rounded-full mt-1"
                  style={{ background: `linear-gradient(180deg, ${GOLD}, ${GOLD}30)`, minHeight: "100%" }}
                />
                <p className="text-stone-500 text-[13.5px] leading-relaxed pt-3 pb-1">
                  {faq.a}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

/* ── Page ──────────────────────────────────────────────── */
export default function FaqPage() {
  const [activeGroup, setActiveGroup] = useState<string | null>(null);

  const filteredGroups = activeGroup
    ? faqGroups.filter((g) => g.label === activeGroup)
    : faqGroups;

  let globalIndex = 0;

  return (
    <main
      className="font-body min-h-screen flex flex-col"
      style={{ background: "#F7F9FC" }}
    >
      {/* ── Hero ── */}
      <div
        className="relative overflow-hidden"
        style={{ background: NAVY, marginBottom: 80, paddingBottom: 30 }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `repeating-linear-gradient(-45deg, rgba(255,255,255,.025) 0px, rgba(255,255,255,.025) 1px, transparent 1px, transparent 18px)`,
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 3,
            background: `linear-gradient(90deg, transparent, ${GOLD}, ${GOLD}88, transparent)`,
            opacity: 0.7,
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "-60px",
            right: "-80px",
            width: 400,
            height: 400,
            borderRadius: "50%",
            background: `${GOLD}10`,
            filter: "blur(70px)",
            pointerEvents: "none",
          }}
        />

        <div className="relative z-[200]">
          <Navbar />
        </div>

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
            <HelpCircle size={11} />
            Help Centre
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="font-heading text-white text-4xl sm:text-5xl font-bold tracking-tight mb-4"
          >
            Frequently Asked{" "}
            <em
              style={{
                fontFamily: "'Playfair Display', serif",
                fontStyle: "italic",
                color: GOLD,
              }}
            >
              <em
                style={{
                  fontFamily: "serif",
                  fontStyle: "italic",
                  color: GOLD,
                }}
              >
                Q
              </em>
            </em>
            <em
              style={{
                fontFamily: "'Playfair Display', serif",
                fontStyle: "italic",
                color: GOLD,
              }}
            >
              uestions
            </em>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.16 }}
            className="text-white/50 text-[14px] max-w-md mx-auto leading-relaxed mb-10"
          >
            Everything you need to know about NSK High School — admissions,
            academics, transport, and more.
          </motion.p>

          {/* Ornament */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex items-center justify-center gap-3 mb-10"
          >
            <div
              className="h-px w-16"
              style={{
                background: `linear-gradient(90deg, transparent, ${GOLD}40)`,
              }}
            />
            <div
              className="w-1.5 h-1.5 rounded-full"
              style={{ background: GOLD }}
            />
            <div
              className="w-2 h-2 rounded-full border"
              style={{ borderColor: `${GOLD}50` }}
            />
            <div
              className="w-1.5 h-1.5 rounded-full"
              style={{ background: GOLD }}
            />
            <div
              className="h-px w-16"
              style={{
                background: `linear-gradient(90deg, ${GOLD}40, transparent)`,
              }}
            />
          </motion.div>

          {/* ── Filter pills ── */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="flex flex-wrap items-center justify-center gap-2 px-4"
          >
            <button
              onClick={() => setActiveGroup(null)}
              className="px-4 py-1.5 rounded-full text-[12px] font-semibold transition-all duration-150"
              style={{
                background:
                  activeGroup === null ? GOLD : "rgba(255,255,255,0.08)",
                color: activeGroup === null ? NAVY : "rgba(255,255,255,0.6)",
                border:
                  activeGroup === null
                    ? `1px solid ${GOLD}`
                    : "1px solid rgba(255,255,255,0.12)",
              }}
            >
              All
            </button>
            {faqGroups.map((g) => (
              <button
                key={g.label}
                onClick={() =>
                  setActiveGroup(activeGroup === g.label ? null : g.label)
                }
                className="px-4 py-1.5 rounded-full text-[12px] font-semibold transition-all duration-150 flex items-center gap-1.5"
                style={{
                  background:
                    activeGroup === g.label ? GOLD : "rgba(255,255,255,0.08)",
                  color:
                    activeGroup === g.label ? NAVY : "rgba(255,255,255,0.6)",
                  border:
                    activeGroup === g.label
                      ? `1px solid ${GOLD}`
                      : "1px solid rgba(255,255,255,0.12)",
                }}
              >
                <g.icon size={11} />
                {g.label}
              </button>
            ))}
          </motion.div>
        </div>
      </div>

      {/* ── FAQ Content ── */}
      <div className="flex-1 -mt-10 relative z-10 px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-3xl mx-auto flex flex-col gap-10">
          {filteredGroups.map((group) => (
            <motion.div
              key={group.label}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              {/* Group header */}
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: `${NAVY}08` }}
                >
                  <group.icon size={15} style={{ color: NAVY }} />
                </div>
                <span
                  className="text-[11px] font-bold tracking-[0.18em] uppercase"
                  style={{ color: `${NAVY}70` }}
                >
                  {group.label}
                </span>
                <div
                  className="flex-1 h-px"
                  style={{ background: `${NAVY}10` }}
                />
              </div>

              {/* FAQs */}
              <div className="flex flex-col gap-2.5">
                {group.faqs.map((faq) => {
                  const idx = globalIndex++;
                  return <FaqItem key={faq.q} faq={faq} index={idx} />;
                })}
              </div>
            </motion.div>
          ))}

          {/* ── Still have questions CTA ── */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="rounded-2xl p-8 text-center relative overflow-hidden"
            style={{ background: NAVY }}
          >
            <div
              style={{
                position: "absolute",
                inset: 0,
                backgroundImage: `repeating-linear-gradient(-45deg, rgba(255,255,255,.02) 0px, rgba(255,255,255,.02) 1px, transparent 1px, transparent 18px)`,
                pointerEvents: "none",
              }}
            />
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                height: 2,
                background: `linear-gradient(90deg, transparent, ${GOLD}, transparent)`,
                opacity: 0.6,
              }}
            />
            <div className="relative z-10">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4"
                style={{ background: `${GOLD}18` }}
              >
                <HelpCircle size={22} style={{ color: GOLD }} />
              </div>
              <h3 className="font-heading text-white font-bold text-xl mb-2">
                Still have questions?
              </h3>
              <p className="text-white/50 text-[13.5px] max-w-xs mx-auto leading-relaxed mb-6">
                Can't find what you're looking for? Our admissions team is happy
                to help.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href="mailto:nsksecschool@gmail.com"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold text-[13px] transition-all duration-150"
                  style={{ background: GOLD, color: NAVY }}
                >
                  Email Us
                </a>
                <a
                  href="tel:+918851099409"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold text-[13px] border transition-all duration-150"
                  style={{
                    background: "rgba(255,255,255,0.06)",
                    border: "1px solid rgba(255,255,255,0.15)",
                    color: "rgba(255,255,255,0.85)",
                  }}
                >
                  Call Us
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}