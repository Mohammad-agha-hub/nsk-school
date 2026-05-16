"use client";

import Navbar from "@/components/Navbar";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Send,
  ChevronDown,
  Check,
  User,
  Users,
  BookOpen,
  Mail,
  MapPin,
  FileText,
  GraduationCap,
  Loader2,
  AlertCircle,
} from "lucide-react";

const NAVY = "#0D1B38";
const GOLD = "#C9A84C";

const gradeGroups = [
  { label: "Montessori", options: ["Mont-0", "Mont-1", "Mont-2"] },
  { label: "Primary School", options: ["1st", "2nd", "3rd", "4th", "5th"] },
  { label: "Secondary School", options: ["6th", "7th", "8th", "9th"] },
  { label: "Senior Secondary", options: ["11th Commerce", "11th Science"] },
];

/* ── Custom Select ─────────────────────────────────────── */
function CustomSelect({
  value,
  onChange,
  placeholder = "Select an option",
  groups,
  flat,
}: {
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  groups?: { label: string; options: string[] }[];
  flat?: string[];
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

  const renderOption = (opt: string) => {
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
          if (!selected) e.currentTarget.style.background = `${NAVY}06`;
        }}
        onMouseLeave={(e) => {
          if (!selected) e.currentTarget.style.background = "transparent";
        }}
      >
        <span>{opt}</span>
        {selected && (
          <Check size={13} strokeWidth={2.5} style={{ color: GOLD }} />
        )}
      </button>
    );
  };

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-4 py-3 rounded-lg text-[13.5px] text-left transition-all duration-150"
        style={{
          border: open ? `1.5px solid ${NAVY}60` : "1.5px solid #e5e7eb",
          background: open ? `${NAVY}04` : "#fff",
          color: value ? NAVY : "#9ca3af",
          boxShadow: open ? `0 0 0 3px ${NAVY}0A` : "none",
        }}
      >
        <span className={value ? "font-medium" : ""}>
          {value || placeholder}
        </span>
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          style={{ display: "flex", color: open ? NAVY : "#9ca3af" }}
        >
          <ChevronDown size={15} />
        </motion.span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -6, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.98 }}
            transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
            className="absolute z-50 mt-2 w-full rounded-xl border border-stone-200 bg-white overflow-hidden"
            style={{ boxShadow: "0 8px 32px rgba(13,27,56,0.12)" }}
          >
            <div className="max-h-60 overflow-y-auto py-2">
              {flat && flat.map(renderOption)}
              {groups &&
                groups.map((group) => (
                  <div key={group.label}>
                    <div
                      className="px-4 pt-3 pb-1 text-[10px] font-bold tracking-[0.18em] uppercase"
                      style={{ color: `${NAVY}55` }}
                    >
                      {group.label}
                    </div>
                    {group.options.map(renderOption)}
                  </div>
                ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ── Shared field styles ───────────────────────────────── */
const inputCls =
  "w-full rounded-lg px-4 py-3 text-[13.5px] outline-none transition-all duration-150";
const baseStyle = {
  border: "1.5px solid #e5e7eb",
  color: NAVY,
  background: "#fff",
};

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label
        className="text-[11px] font-bold tracking-[0.15em] uppercase"
        style={{ color: `${NAVY}70` }}
      >
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      {children}
    </div>
  );
}

function Input({
  placeholder,
  value,
  onChange,
  type = "text",
  required,
}: {
  placeholder: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  required?: boolean;
}) {
  return (
    <input
      type={type}
      required={required}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className={inputCls}
      style={baseStyle}
      onFocus={(e) => {
        e.currentTarget.style.border = `1.5px solid ${NAVY}60`;
        e.currentTarget.style.boxShadow = `0 0 0 3px ${NAVY}0A`;
      }}
      onBlur={(e) => {
        e.currentTarget.style.border = "1.5px solid #e5e7eb";
        e.currentTarget.style.boxShadow = "none";
      }}
    />
  );
}

function SectionHeader({
  icon: Icon,
  title,
  subtitle,
}: {
  icon: React.ElementType;
  title: string;
  subtitle: string;
}) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <div
        className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
        style={{ background: `${NAVY}08` }}
      >
        <Icon size={16} style={{ color: NAVY }} />
      </div>
      <div>
        <p
          className="font-heading font-bold text-[14px]"
          style={{ color: NAVY }}
        >
          {title}
        </p>
        <p className="text-stone-400 text-[12px]">{subtitle}</p>
      </div>
      <div className="flex-1 h-px ml-2" style={{ background: `${NAVY}10` }} />
    </div>
  );
}

const EMPTY_FORM = {
  studentName: "",
  dob: "",
  gender: "",
  bloodGroup: "",
  nationality: "Indian",
  religion: "",
  category: "",
  classApplying: "",
  previousSchool: "",
  previousClass: "",
  parentName: "",
  parentRelation: "",
  parentOccupation: "",
  parentEmail: "",
  parentPhone: "",
  altPhone: "",
  address: "",
  city: "",
  state: "",
  pincode: "",
  notes: "",
};

/* ── Page ──────────────────────────────────────────────── */
export default function AdmissionPage() {
  const [form, setForm] = useState(EMPTY_FORM);
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const set = (key: keyof typeof form) => (v: string) =>
    setForm((f) => ({ ...f, [key]: v }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/admission", {
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

  const textareaHandlers = {
    onFocus: (e: React.FocusEvent<HTMLTextAreaElement>) => {
      e.currentTarget.style.border = `1.5px solid ${NAVY}60`;
      e.currentTarget.style.boxShadow = `0 0 0 3px ${NAVY}0A`;
    },
    onBlur: (e: React.FocusEvent<HTMLTextAreaElement>) => {
      e.currentTarget.style.border = "1.5px solid #e5e7eb";
      e.currentTarget.style.boxShadow = "none";
    },
  };

  return (
    <main
      className="font-body min-h-screen flex flex-col"
      style={{ background: "#F7F9FC" }}
    >
      {/* ── Hero ── */}
      <div
        className="relative overflow-hidden"
        style={{ background: NAVY, marginBottom: 80, paddingBottom: 50 }}
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
            left: "-80px",
            width: 400,
            height: 400,
            borderRadius: "50%",
            background: `${GOLD}10`,
            filter: "blur(70px)",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-40px",
            right: "-60px",
            width: 300,
            height: 300,
            borderRadius: "50%",
            background: "rgba(255,255,255,0.03)",
            filter: "blur(40px)",
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
            <GraduationCap size={11} />
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
            className="font-heading text-white text-4xl sm:text-5xl font-bold tracking-tight mb-4"
          >
            Admission{" "}
            <em
              style={{
                fontFamily: "'Playfair Display', serif",
                fontStyle: "italic",
                color: GOLD,
              }}
            >
              Application
            </em>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.16 }}
            className="text-white/50 text-[14px] max-w-md mx-auto leading-relaxed mb-10"
          >
            Begin your child's journey at NSK High School. Fill in the form
            below and our admissions team will reach out within 48 hours.
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

      {/* ── Content ── */}
      <div className="flex-1 -mt-10 relative z-10 px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-3xl mx-auto">
          {status === "success" ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white rounded-2xl border border-stone-200 shadow-sm p-12 text-center flex flex-col items-center gap-4"
            >
              <div
                className="w-20 h-20 rounded-full flex items-center justify-center mb-2"
                style={{ background: `${GOLD}15` }}
              >
                <Check size={32} strokeWidth={2} style={{ color: GOLD }} />
              </div>
              <h2
                className="font-heading font-bold text-2xl"
                style={{ color: NAVY }}
              >
                Application Submitted!
              </h2>
              <p className="text-stone-400 text-[14px] max-w-sm leading-relaxed">
                Thank you for applying to NSK High School. Our admissions team
                will review your application and contact you within 48 hours.
              </p>
              <div
                className="mt-2 px-6 py-4 rounded-xl text-left w-full max-w-sm"
                style={{
                  background: `${NAVY}05`,
                  border: `1px solid ${NAVY}10`,
                  borderLeft: `3px solid ${GOLD}`,
                }}
              >
                <p
                  className="text-[12px] font-semibold mb-1"
                  style={{ color: NAVY }}
                >
                  What happens next?
                </p>
                {[
                  "Our team reviews your application",
                  "You'll receive a call within 48 hours",
                  "Schedule a school visit",
                  "Complete admission formalities",
                ].map((s, i) => (
                  <div key={i} className="flex items-center gap-2 mt-1.5">
                    <div
                      className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                      style={{ background: GOLD }}
                    />
                    <p className="text-stone-500 text-[12px]">{s}</p>
                  </div>
                ))}
              </div>
              <button
                onClick={() => {
                  setStatus("idle");
                  setForm(EMPTY_FORM);
                }}
                className="mt-3 text-[13px] font-semibold underline underline-offset-2 hover:text-red-600 transition-colors"
                style={{ color: NAVY }}
              >
                Submit another application
              </button>
            </motion.div>
          ) : (
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              onSubmit={handleSubmit}
              className="bg-white rounded-2xl border border-stone-200 shadow-sm overflow-hidden"
            >
              {/* Form top bar */}
              <div
                className="px-8 py-5 flex items-center justify-between"
                style={{
                  background: NAVY,
                  borderBottom: `1px solid ${NAVY}20`,
                }}
              >
                <div>
                  <p className="text-white font-heading font-bold text-[15px]">
                    School Admission Form
                  </p>
                  <p className="text-white/40 text-[12px] mt-0.5">
                    NSK High School · Academic Year 2025–26
                  </p>
                </div>
                <span
                  className="text-[10px] font-bold tracking-[0.15em] uppercase px-3 py-1 rounded-full"
                  style={{
                    background: `${GOLD}20`,
                    color: GOLD,
                    border: `1px solid ${GOLD}30`,
                  }}
                >
                  CBSE Affiliated
                </span>
              </div>

              <div className="p-6 sm:p-8 flex flex-col gap-8">
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

                {/* ── Section 1: Student Info ── */}
                <div>
                  <SectionHeader
                    icon={User}
                    title="Student Information"
                    subtitle="Basic details about the applicant"
                  />
                  <div className="flex flex-col gap-4">
                    <Field label="Student's Full Name" required>
                      <Input
                        placeholder="e.g. Arjun Kumar Sharma"
                        value={form.studentName}
                        onChange={set("studentName")}
                        required
                      />
                    </Field>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <Field label="Date of Birth" required>
                        <input
                          type="date"
                          required
                          value={form.dob}
                          onChange={(e) => set("dob")(e.target.value)}
                          className={inputCls}
                          style={baseStyle}
                          onFocus={(e) => {
                            e.currentTarget.style.border = `1.5px solid ${NAVY}60`;
                            e.currentTarget.style.boxShadow = `0 0 0 3px ${NAVY}0A`;
                          }}
                          onBlur={(e) => {
                            e.currentTarget.style.border =
                              "1.5px solid #e5e7eb";
                            e.currentTarget.style.boxShadow = "none";
                          }}
                        />
                      </Field>
                      <Field label="Blood Group">
                        <CustomSelect
                          value={form.bloodGroup}
                          onChange={set("bloodGroup")}
                          placeholder="Select blood group"
                          flat={[
                            "A+",
                            "A−",
                            "B+",
                            "B−",
                            "AB+",
                            "AB−",
                            "O+",
                            "O−",
                          ]}
                        />
                      </Field>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <Field label="Gender" required>
                        <CustomSelect
                          value={form.gender}
                          onChange={set("gender")}
                          placeholder="Select gender"
                          flat={["Male", "Female", "Other"]}
                        />
                      </Field>
                      <Field label="Category">
                        <CustomSelect
                          value={form.category}
                          onChange={set("category")}
                          placeholder="Select category"
                          flat={["General", "OBC", "SC", "ST", "EWS"]}
                        />
                      </Field>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <Field label="Nationality">
                        <Input
                          placeholder="e.g. Indian"
                          value={form.nationality}
                          onChange={set("nationality")}
                        />
                      </Field>
                      <Field label="Religion">
                        <Input
                          placeholder="e.g. Hindu"
                          value={form.religion}
                          onChange={set("religion")}
                        />
                      </Field>
                    </div>
                  </div>
                </div>

                <div className="h-px" style={{ background: `${NAVY}08` }} />

                {/* ── Section 2: Academic Info ── */}
                <div>
                  <SectionHeader
                    icon={BookOpen}
                    title="Academic Details"
                    subtitle="Class applying for and previous school"
                  />
                  <div className="flex flex-col gap-4">
                    <Field label="Class Applying For" required>
                      <CustomSelect
                        value={form.classApplying}
                        onChange={set("classApplying")}
                        placeholder="Select a class"
                        groups={gradeGroups}
                      />
                    </Field>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <Field label="Previous School Name">
                        <Input
                          placeholder="e.g. DPS Gurugram"
                          value={form.previousSchool}
                          onChange={set("previousSchool")}
                        />
                      </Field>
                      <Field label="Last Class Attended">
                        <Input
                          placeholder="e.g. 4th"
                          value={form.previousClass}
                          onChange={set("previousClass")}
                        />
                      </Field>
                    </div>
                  </div>
                </div>

                <div className="h-px" style={{ background: `${NAVY}08` }} />

                {/* ── Section 3: Parent Info ── */}
                <div>
                  <SectionHeader
                    icon={Users}
                    title="Parent / Guardian Details"
                    subtitle="Primary contact information"
                  />
                  <div className="flex flex-col gap-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <Field label="Parent / Guardian Name" required>
                        <Input
                          placeholder="e.g. Rajesh Kumar"
                          value={form.parentName}
                          onChange={set("parentName")}
                          required
                        />
                      </Field>
                      <Field label="Relation to Student">
                        <CustomSelect
                          value={form.parentRelation}
                          onChange={set("parentRelation")}
                          placeholder="Select relation"
                          flat={["Father", "Mother", "Guardian", "Other"]}
                        />
                      </Field>
                    </div>
                    <Field label="Occupation">
                      <Input
                        placeholder="e.g. Business Owner"
                        value={form.parentOccupation}
                        onChange={set("parentOccupation")}
                      />
                    </Field>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <Field label="Email Address" required>
                        <Input
                          type="email"
                          placeholder="e.g. rajesh@gmail.com"
                          value={form.parentEmail}
                          onChange={set("parentEmail")}
                          required
                        />
                      </Field>
                      <Field label="Phone Number" required>
                        <Input
                          placeholder="e.g. +91 98765 43210"
                          value={form.parentPhone}
                          onChange={set("parentPhone")}
                          required
                        />
                      </Field>
                    </div>
                    <Field label="Alternate Phone">
                      <Input
                        placeholder="e.g. +91 98765 43210"
                        value={form.altPhone}
                        onChange={set("altPhone")}
                      />
                    </Field>
                  </div>
                </div>

                <div className="h-px" style={{ background: `${NAVY}08` }} />

                {/* ── Section 4: Address ── */}
                <div>
                  <SectionHeader
                    icon={MapPin}
                    title="Address Details"
                    subtitle="Residential address of the student"
                  />
                  <div className="flex flex-col gap-4">
                    <Field label="Full Address" required>
                      <textarea
                        rows={3}
                        required
                        value={form.address}
                        onChange={(e) => set("address")(e.target.value)}
                        placeholder="House No., Street, Area"
                        className={inputCls + " resize-none"}
                        style={baseStyle}
                        {...textareaHandlers}
                      />
                    </Field>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                      <Field label="City">
                        <Input
                          placeholder="e.g. Gurugram"
                          value={form.city}
                          onChange={set("city")}
                        />
                      </Field>
                      <Field label="State">
                        <Input
                          placeholder="e.g. Haryana"
                          value={form.state}
                          onChange={set("state")}
                        />
                      </Field>
                      <Field label="PIN Code">
                        <Input
                          placeholder="e.g. 122505"
                          value={form.pincode}
                          onChange={set("pincode")}
                        />
                      </Field>
                    </div>
                  </div>
                </div>

                <div className="h-px" style={{ background: `${NAVY}08` }} />

                {/* ── Section 5: Additional Notes ── */}
                <div>
                  <SectionHeader
                    icon={FileText}
                    title="Additional Information"
                    subtitle="Any other details you'd like to share"
                  />
                  <Field label="Additional Notes">
                    <textarea
                      rows={4}
                      value={form.notes}
                      onChange={(e) => set("notes")(e.target.value)}
                      placeholder="Any specific requirements, medical conditions, or other information..."
                      className={inputCls + " resize-none"}
                      style={baseStyle}
                      {...textareaHandlers}
                    />
                  </Field>
                </div>

                {/* ── Submit ── */}
                <div className="flex flex-col items-center gap-3">
                  <motion.button
                    whileHover={{ scale: status === "loading" ? 1 : 1.01 }}
                    whileTap={{ scale: status === "loading" ? 1 : 0.98 }}
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full bg-red-600 hover:bg-red-700 active:bg-red-800 disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold text-[14px] py-4 rounded-xl transition-colors duration-150 flex items-center justify-center gap-2"
                    style={{ boxShadow: "0 4px 20px rgba(200,16,46,0.3)" }}
                  >
                    {status === "loading" ? (
                      <>
                        <Loader2 size={15} className="animate-spin" />
                        Submitting…
                      </>
                    ) : (
                      <>
                        <Send size={15} />
                        Submit Application
                      </>
                    )}
                  </motion.button>
                  <p className="text-stone-400 text-[11.5px]">
                    Fields marked{" "}
                    <span className="text-red-500 font-medium">*</span> are
                    required ·{" "}
                    <a
                      href="mailto:nsksecschool@gmail.com"
                      className="underline underline-offset-2 hover:text-red-500 transition-colors"
                    >
                      nsksecschool@gmail.com
                    </a>
                  </p>
                </div>
              </div>
            </motion.form>
          )}
        </div>
      </div>
    </main>
  );
}
