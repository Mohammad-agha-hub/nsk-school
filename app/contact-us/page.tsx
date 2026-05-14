"use client";

import Navbar from "@/components/Navbar";
import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";

/* ── Animations ────────────────────────────────────────── */
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] as const },
});

/* ── Contact info ──────────────────────────────────────── */
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
    <main className="font-body min-h-screen bg-white flex flex-col">
      {/* Navbar */}
      <div className="relative z-[200]">
        <Navbar solid />
      </div>

      <div className="flex-1">
        {/* ── Hero strip ── */}
        <div className="text-center pt-16 pb-12 px-4">
          <motion.span
            {...fadeUp(0)}
            className="inline-flex items-center gap-2 bg-[#0d1f3c]/6 border border-[#0d1f3c]/12 text-[#0d1f3c]/60 text-[11px] font-bold tracking-[0.22em] uppercase px-4 py-1.5 rounded-full mb-5"
          >
            <Mail size={10} />
            Get in Touch
          </motion.span>

          <motion.h1
            {...fadeUp(0.08)}
            className="font-heading text-[#0d1f3c] text-4xl sm:text-5xl font-bold tracking-tight"
          >
            We'd love to{" "}
            <span
              style={{
                fontFamily: "'Playfair Display', serif",
                fontStyle: "italic",
                color: "#C9A84C",
              }}
            >
              hear
            </span>{" "}
            from you
          </motion.h1>

          <motion.p
            {...fadeUp(0.15)}
            className="mt-3 text-stone-400 text-[14px] max-w-md mx-auto leading-relaxed"
          >
            Whether it's an admission enquiry, a general question, or just a
            hello — reach out and we'll get back to you.
          </motion.p>
        </div>

        {/* ── Main grid: form + info ── */}
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
                  <div className="w-14 h-14 rounded-full bg-[#0d1f3c]/8 flex items-center justify-center mb-2">
                    <Send size={22} className="text-[#0d1f3c]" />
                  </div>
                  <h3 className="font-heading text-[#0d1f3c] font-bold text-lg">
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
                    className="mt-4 text-[13px] font-semibold text-[#0d1f3c] underline underline-offset-2 hover:text-red-600 transition-colors"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  {/* Name + Mobile */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[11px] font-bold tracking-[0.15em] uppercase text-stone-400">
                        Name
                      </label>
                      <input
                        required
                        value={form.name}
                        onChange={(e) =>
                          setForm({ ...form, name: e.target.value })
                        }
                        placeholder="Your full name"
                        className="w-full border border-stone-200 rounded-lg px-4 py-3 text-[13.5px] text-[#0d1f3c] placeholder-stone-300 focus:outline-none focus:border-[#0d1f3c]/40 focus:ring-2 focus:ring-[#0d1f3c]/8 transition-all duration-150"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[11px] font-bold tracking-[0.15em] uppercase text-stone-400">
                        Mobile No.
                      </label>
                      <input
                        value={form.mobile}
                        onChange={(e) =>
                          setForm({ ...form, mobile: e.target.value })
                        }
                        placeholder="+91 00000 00000"
                        className="w-full border border-stone-200 rounded-lg px-4 py-3 text-[13.5px] text-[#0d1f3c] placeholder-stone-300 focus:outline-none focus:border-[#0d1f3c]/40 focus:ring-2 focus:ring-[#0d1f3c]/8 transition-all duration-150"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[11px] font-bold tracking-[0.15em] uppercase text-stone-400">
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) =>
                        setForm({ ...form, email: e.target.value })
                      }
                      placeholder="you@example.com"
                      className="w-full border border-stone-200 rounded-lg px-4 py-3 text-[13.5px] text-[#0d1f3c] placeholder-stone-300 focus:outline-none focus:border-[#0d1f3c]/40 focus:ring-2 focus:ring-[#0d1f3c]/8 transition-all duration-150"
                    />
                  </div>

                  {/* Apply For */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[11px] font-bold tracking-[0.15em] uppercase text-stone-400">
                      Apply For
                    </label>
                    <select
                      value={form.applyFor}
                      onChange={(e) =>
                        setForm({ ...form, applyFor: e.target.value })
                      }
                      className="w-full border border-stone-200 rounded-lg px-4 py-3 text-[13.5px] text-[#0d1f3c] focus:outline-none focus:border-[#0d1f3c]/40 focus:ring-2 focus:ring-[#0d1f3c]/8 transition-all duration-150 bg-white"
                    >
                      <option value="" disabled>
                        Select class
                      </option>
                      {[
                        "Mont-0",
                        "Mont-1",
                        "Mont-2",
                        "1st",
                        "2nd",
                        "3rd",
                        "4th",
                        "5th",
                        "6th",
                        "7th",
                        "8th",
                        "9th",
                        "11th Commerce",
                        "11th Science",
                      ].map((g) => (
                        <option key={g} value={g}>
                          {g}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Address */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[11px] font-bold tracking-[0.15em] uppercase text-stone-400">
                      Address
                    </label>
                    <input
                      value={form.address}
                      onChange={(e) =>
                        setForm({ ...form, address: e.target.value })
                      }
                      placeholder="Your address"
                      className="w-full border border-stone-200 rounded-lg px-4 py-3 text-[13.5px] text-[#0d1f3c] placeholder-stone-300 focus:outline-none focus:border-[#0d1f3c]/40 focus:ring-2 focus:ring-[#0d1f3c]/8 transition-all duration-150"
                    />
                  </div>

                  {/* Message */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[11px] font-bold tracking-[0.15em] uppercase text-stone-400">
                      Message
                    </label>
                    <textarea
                      rows={4}
                      value={form.message}
                      onChange={(e) =>
                        setForm({ ...form, message: e.target.value })
                      }
                      placeholder="How can we help you?"
                      className="w-full border border-stone-200 rounded-lg px-4 py-3 text-[13.5px] text-[#0d1f3c] placeholder-stone-300 focus:outline-none focus:border-[#0d1f3c]/40 focus:ring-2 focus:ring-[#0d1f3c]/8 transition-all duration-150 resize-none"
                    />
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="mt-1 w-full bg-red-600 hover:bg-red-700 active:bg-red-800 text-white font-semibold text-[13.5px] py-3.5 rounded-lg transition-colors duration-150 shadow-sm shadow-red-900/20 flex items-center justify-center gap-2"
                  >
                    <Send size={14} />
                    Submit
                  </motion.button>
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
                  className="group flex items-start gap-4 bg-white border border-stone-200 rounded-xl p-5 shadow-sm hover:shadow-md hover:border-[#0d1f3c]/20 transition-all duration-200"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#0d1f3c]/6 flex items-center justify-center flex-shrink-0 group-hover:bg-[#0d1f3c]/10 transition-colors duration-150">
                    <card.icon size={17} className="text-[#0d1f3c]/60" />
                  </div>
                  <div>
                    <p className="text-[#0d1f3c] font-semibold text-[13.5px] mb-0.5">
                      {card.title}
                    </p>
                    <p className="text-stone-400 text-[12px] mb-2">
                      {card.subtitle}
                    </p>
                    <p className="text-[#0d1f3c]/80 text-[13px] font-medium leading-snug">
                      {card.value}
                    </p>
                  </div>
                </motion.a>
              ))}

              {/* Hours card */}
              <motion.div
                {...fadeUp(0.5)}
                className="bg-[#0d1f3c] rounded-xl p-5"
              >
                <p className="text-white font-semibold text-[13.5px] mb-3">
                  School Hours
                </p>
                <div className="flex flex-col gap-2">
                  {[
                    { day: "Mon – Fri", time: "8:00 AM – 2:30 PM" },
                    { day: "Saturday", time: "8:00 AM – 12:30 PM" },
                    { day: "Sunday", time: "Closed" },
                  ].map((row, i) => (
                    <div key={i} className="flex items-center justify-between">
                      <span className="text-white/50 text-[12.5px]">
                        {row.day}
                      </span>
                      <span
                        className={`text-[12.5px] font-medium ${row.time === "Closed" ? "text-red-400" : "text-[#C9A84C]"}`}
                      >
                        {row.time}
                      </span>
                    </div>
                  ))}
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
