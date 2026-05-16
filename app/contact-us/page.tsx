"use client";

import Navbar from "@/components/Navbar";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, MapPin, Send, ChevronDown, Check } from "lucide-react";

const NAVY = "#0D1B38";
const GOLD = "#C9A84C";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] as const },
});

const contactCards = [
  {
    icon: Mail,
    title: "Email Us",
    subtitle: "We'll respond within 24 hours",
    value: "nsksecschool@gmail.com",
    href: "mailto:nsksecschool@gmail.com",
  },
  {
    icon: Phone,
    title: "Call Us",
    subtitle: "Mon–Sat, 8am to 5pm",
    value: "+91 88510 99409",
    href: "tel:+918851099409",
  },
  {
    icon: MapPin,
    title: "Visit Us",
    subtitle: "Come meet our team",
    value: "Chandu, opp. Petrol Pump, Budhera, Gurugram, Haryana 122505",
    href: "https://maps.google.com",
  },
];

const gradeGroups = [
  {
    label: "Montessori",
    options: ["Mont-0", "Mont-1", "Mont-2"],
  },
  {
    label: "Primary School",
    options: ["1st", "2nd", "3rd", "4th", "5th"],
  },
  {
    label: "Secondary School",
    options: ["6th", "7th", "8th", "9th"],
  },
  {
    label: "Senior Secondary",
    options: ["11th Commerce", "11th Science"],
  },
];

/* ── Custom Select ─────────────────────────────────────── */
function CustomSelect({
  value,
  onChange,
}: {
  value: string;
  onChange: (v: string) => void;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node))
        setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div ref={ref} className="relative">
      {/* Trigger */}
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-4 py-3 rounded-lg border text-[13.5px] transition-all duration-150 text-left"
        style={{
          border: open ? `1.5px solid ${NAVY}60` : "1.5px solid #e5e7eb",
          background: open ? `${NAVY}04` : "#fff",
          color: value ? NAVY : "#9ca3af",
          boxShadow: open ? `0 0 0 3px ${NAVY}0A` : "none",
        }}
      >
        <span className={value ? "font-medium" : ""}>
          {value || "Select a class"}
        </span>
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          style={{ display: "flex", color: open ? NAVY : "#9ca3af" }}
        >
          <ChevronDown size={15} />
        </motion.span>
      </button>

      {/* Dropdown */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -6, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.98 }}
            transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
            className="absolute z-50 mt-2 w-full rounded-xl border border-stone-200 bg-white shadow-xl overflow-hidden"
            style={{ boxShadow: "0 8px 32px rgba(13,27,56,0.12)" }}
          >
            <div className="max-h-64 overflow-y-auto py-2">
              {gradeGroups.map((group) => (
                <div key={group.label}>
                  {/* Group label */}
                  <div
                    className="px-4 pt-3 pb-1 text-[10px] font-bold tracking-[0.18em] uppercase"
                    style={{ color: `${NAVY}55` }}
                  >
                    {group.label}
                  </div>
                  {group.options.map((opt) => {
                    const selected = value === opt;
                    return (
                      <button
                        key={opt}
                        type="button"
                        onClick={() => {
                          onChange(opt);
                          setOpen(false);
                        }}
                        className="w-full flex items-center justify-between px-4 py-2.5 text-[13.5px] text-left transition-colors duration-100"
                        style={{
                          background: selected ? `${GOLD}15` : "transparent",
                          color: selected ? NAVY : "#374151",
                          fontWeight: selected ? 600 : 400,
                        }}
                        onMouseEnter={(e) => {
                          if (!selected)
                            e.currentTarget.style.background = `${NAVY}06`;
                        }}
                        onMouseLeave={(e) => {
                          if (!selected)
                            e.currentTarget.style.background = "transparent";
                        }}
                      >
                        <span>{opt}</span>
                        {selected && (
                          <span style={{ color: GOLD }}>
                            <Check size={13} strokeWidth={2.5} />
                          </span>
                        )}
                      </button>
                    );
                  })}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ── Shared input class ─────────────────────────────────── */
const inputCls =
  "w-full rounded-lg px-4 py-3 text-[13.5px] transition-all duration-150 outline-none";

const inputStyle = {
  border: "1.5px solid #e5e7eb",
  color: NAVY,
  background: "#fff",
};

const inputFocusHandlers = {
  onFocus: (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    e.currentTarget.style.border = `1.5px solid ${NAVY}60`;
    e.currentTarget.style.boxShadow = `0 0 0 3px ${NAVY}0A`;
  },
  onBlur: (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    e.currentTarget.style.border = "1.5px solid #e5e7eb";
    e.currentTarget.style.boxShadow = "none";
  },
};

/* ── Page ──────────────────────────────────────────────── */
export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    mobile: "",
    email: "",
    applyFor: "",
    address: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main
      className="font-body min-h-screen flex flex-col"
      style={{ background: "#F7F9FC" }}
    >
      {/* ── Hero ── */}
      <div
        className="relative overflow-hidden"
        style={{ background: NAVY, marginBottom: 72, paddingBottom: 50 }}
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
            background: `${GOLD}12`,
            filter: "blur(60px)",
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
            <Mail size={10} />
            Get in Touch
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
            We'd love to{" "}
            <em
              style={{
                fontFamily: "'Playfair Display', serif",
                fontStyle: "italic",
                color: GOLD,
              }}
            >
              hear
            </em>{" "}
            from you
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.55,
              delay: 0.16,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="text-white/50 text-[14px] max-w-md mx-auto leading-relaxed mb-10"
          >
            Whether it's an admission enquiry, a general question, or just a
            hello — reach out and we'll get back to you.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex items-center justify-center gap-3"
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
        </div>
      </div>

      {/* ── Main content ── */}
      <div className="flex-1 -mt-10 relative z-10">
        <div className="px-4 sm:px-6 lg:px-8 pb-16">
          <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
            {/* ── Contact form ── */}
            <motion.div
              {...fadeUp(0.2)}
              className="lg:col-span-3 bg-white rounded-2xl border border-stone-200 shadow-sm p-8"
            >
              <h2 className="font-heading text-[#0d1f3c] text-xl font-bold mb-1">
                Send a Message
              </h2>
              <p className="text-stone-400 text-[13px] mb-7">
                Fill in the form and our team will be in touch shortly.
              </p>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-12 text-center gap-3"
                >
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center mb-2"
                    style={{ background: `${GOLD}18` }}
                  >
                    <Send size={22} style={{ color: GOLD }} />
                  </div>
                  <h3
                    className="font-heading font-bold text-lg"
                    style={{ color: NAVY }}
                  >
                    Message Sent!
                  </h3>
                  <p className="text-stone-400 text-[13.5px] max-w-xs">
                    Thank you for reaching out. We'll get back to you within 24
                    hours.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setForm({
                        name: "",
                        mobile: "",
                        email: "",
                        applyFor: "",
                        address: "",
                        message: "",
                      });
                    }}
                    className="mt-4 text-[13px] font-semibold underline underline-offset-2 hover:text-red-600 transition-colors"
                    style={{ color: NAVY }}
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  {/* Name + Mobile */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-2">
                      <label
                        className="text-[11px] font-bold tracking-[0.15em] uppercase"
                        style={{ color: `${NAVY}70` }}
                      >
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        required
                        value={form.name}
                        onChange={(e) =>
                          setForm({ ...form, name: e.target.value })
                        }
                        placeholder="e.g. Rahul Sharma"
                        className={inputCls}
                        style={inputStyle}
                        {...inputFocusHandlers}
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label
                        className="text-[11px] font-bold tracking-[0.15em] uppercase"
                        style={{ color: `${NAVY}70` }}
                      >
                        Mobile No.
                      </label>
                      <input
                        value={form.mobile}
                        onChange={(e) =>
                          setForm({ ...form, mobile: e.target.value })
                        }
                        placeholder="e.g. +91 98765 43210"
                        className={inputCls}
                        style={inputStyle}
                        {...inputFocusHandlers}
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex flex-col gap-2">
                    <label
                      className="text-[11px] font-bold tracking-[0.15em] uppercase"
                      style={{ color: `${NAVY}70` }}
                    >
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) =>
                        setForm({ ...form, email: e.target.value })
                      }
                      placeholder="e.g. you@example.com"
                      className={inputCls}
                      style={inputStyle}
                      {...inputFocusHandlers}
                    />
                  </div>

                  {/* Apply For — custom dropdown */}
                  <div className="flex flex-col gap-2">
                    <label
                      className="text-[11px] font-bold tracking-[0.15em] uppercase"
                      style={{ color: `${NAVY}70` }}
                    >
                      Applying For
                    </label>
                    <CustomSelect
                      value={form.applyFor}
                      onChange={(v) => setForm({ ...form, applyFor: v })}
                    />
                  </div>

                  {/* Address */}
                  <div className="flex flex-col gap-2">
                    <label
                      className="text-[11px] font-bold tracking-[0.15em] uppercase"
                      style={{ color: `${NAVY}70` }}
                    >
                      Address
                    </label>
                    <input
                      value={form.address}
                      onChange={(e) =>
                        setForm({ ...form, address: e.target.value })
                      }
                      placeholder="e.g. 12 Green Park, New Delhi"
                      className={inputCls}
                      style={inputStyle}
                      {...inputFocusHandlers}
                    />
                  </div>

                  {/* Message */}
                  <div className="flex flex-col gap-2">
                    <label
                      className="text-[11px] font-bold tracking-[0.15em] uppercase"
                      style={{ color: `${NAVY}70` }}
                    >
                      Message
                    </label>
                    <textarea
                      rows={4}
                      value={form.message}
                      onChange={(e) =>
                        setForm({ ...form, message: e.target.value })
                      }
                      placeholder="How can we help you?"
                      className={inputCls + " resize-none"}
                      style={inputStyle}
                      onFocus={(e) => {
                        e.currentTarget.style.border = `1.5px solid ${NAVY}60`;
                        e.currentTarget.style.boxShadow = `0 0 0 3px ${NAVY}0A`;
                      }}
                      onBlur={(e) => {
                        e.currentTarget.style.border = "1.5px solid #e5e7eb";
                        e.currentTarget.style.boxShadow = "none";
                      }}
                    />
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="mt-1 w-full bg-red-600 hover:bg-red-700 active:bg-red-800 text-white font-semibold text-[13.5px] py-3.5 rounded-lg transition-colors duration-150 shadow-sm shadow-red-900/20 flex items-center justify-center gap-2"
                  >
                    <Send size={14} />
                    Submit Enquiry
                  </motion.button>

                  <p className="text-center text-stone-400 text-[11.5px]">
                    Fields marked <span className="text-red-500">*</span> are
                    required
                  </p>
                </form>
              )}
            </motion.div>

            {/* ── Info cards ── */}
            <div className="lg:col-span-2 flex flex-col gap-4">
              {contactCards.map((card, i) => (
                <motion.a
                  key={i}
                  href={card.href}
                  target={card.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  {...fadeUp(0.25 + i * 0.08)}
                  className="group flex items-start gap-4 bg-white border border-stone-200 rounded-xl p-5 shadow-sm hover:shadow-md transition-all duration-200"
                  style={{ borderLeft: "3px solid transparent" }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.borderLeftColor = GOLD)
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.borderLeftColor = "transparent")
                  }
                >
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: `${NAVY}08` }}
                  >
                    <card.icon size={17} style={{ color: `${NAVY}90` }} />
                  </div>
                  <div>
                    <p
                      className="font-semibold text-[13.5px] mb-0.5"
                      style={{ color: NAVY }}
                    >
                      {card.title}
                    </p>
                    <p className="text-stone-400 text-[12px] mb-2">
                      {card.subtitle}
                    </p>
                    <p
                      className="text-[13px] font-medium leading-snug"
                      style={{ color: `${NAVY}CC` }}
                    >
                      {card.value}
                    </p>
                  </div>
                </motion.a>
              ))}

              {/* Hours card */}
              <motion.div
                {...fadeUp(0.5)}
                className="rounded-xl p-5 relative overflow-hidden"
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
                  <p className="text-white font-semibold text-[13.5px] mb-3">
                    School Hours
                  </p>
                  <div className="flex flex-col gap-2.5">
                    {[
                      { day: "Mon – Fri", time: "8:00 AM – 2:30 PM" },
                      { day: "Saturday", time: "8:00 AM – 12:30 PM" },
                      { day: "Sunday", time: "Closed" },
                    ].map((row, i) => (
                      <div
                        key={i}
                        className="flex items-center justify-between"
                      >
                        <span className="text-white/50 text-[12.5px]">
                          {row.day}
                        </span>
                        <span
                          className="text-[12.5px] font-semibold"
                          style={{
                            color: row.time === "Closed" ? "#f87171" : GOLD,
                          }}
                        >
                          {row.time}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* ── Map ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="w-full h-72 sm:h-96 border-t border-stone-100"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3510.4!2d76.95!3d28.35!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDIxJzAwLjAiTiA3NsKwNTcnMDAuMCJF!5e0!3m2!1sen!2sin!4v1"
            width="100%"
            height="100%"
            style={{ border: 0, display: "block" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>
      </div>
    </main>
  );
}
