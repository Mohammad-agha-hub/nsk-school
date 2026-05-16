"use client";

import Navbar from "@/components/Navbar";
import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Loader2, AlertCircle } from "lucide-react";

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

const EMPTY_FORM = {
  name: "",
  mobile: "",
  email: "",
  address: "",
  message: "",
};

export default function ContactPage() {
  const [form, setForm] = useState(EMPTY_FORM);
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.error ?? "Something went wrong.");
      }

      setStatus("success");
    } catch (err: unknown) {
      setErrorMsg(err instanceof Error ? err.message : "Unexpected error.");
      setStatus("error");
    }
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

              {status === "success" ? (
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
                      setStatus("idle");
                      setForm(EMPTY_FORM);
                    }}
                    className="mt-4 text-[13px] font-semibold underline underline-offset-2 hover:text-red-600 transition-colors"
                    style={{ color: NAVY }}
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  {/* Error banner */}
                  {status === "error" && (
                    <motion.div
                      initial={{ opacity: 0, y: -6 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-start gap-3 px-4 py-3 rounded-lg text-[13px]"
                      style={{
                        background: "#fef2f2",
                        border: "1px solid #fecaca",
                        color: "#b91c1c",
                      }}
                    >
                      <AlertCircle size={15} className="mt-0.5 flex-shrink-0" />
                      <span>{errorMsg}</span>
                    </motion.div>
                  )}

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
                    whileHover={{ scale: status === "loading" ? 1 : 1.01 }}
                    whileTap={{ scale: status === "loading" ? 1 : 0.98 }}
                    type="submit"
                    disabled={status === "loading"}
                    className="mt-1 w-full bg-red-600 hover:bg-red-700 active:bg-red-800 disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold text-[13.5px] py-3.5 rounded-lg transition-colors duration-150 shadow-sm shadow-red-900/20 flex items-center justify-center gap-2"
                  >
                    {status === "loading" ? (
                      <>
                        <Loader2 size={14} className="animate-spin" />
                        Sending…
                      </>
                    ) : (
                      <>
                        <Send size={14} />
                        Submit Enquiry
                      </>
                    )}
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
