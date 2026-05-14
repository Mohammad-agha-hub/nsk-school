"use client";

import Image from "next/image";
import { useState } from "react";
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react";
import { motion, AnimatePresence, Variants } from "framer-motion";

/* ── Dropdown data ─────────────────────────────────────── */
const aboutItems = [
  { label: "Introduction", href: "#introduction" },
  { label: "Chairman's Desk", href: "#chairman" },
  { label: "Principal's Desk", href: "#principal" },
];

const facilitiesGroups = [
  {
    label: "Facilities",
    href: "#facilities",
    children: [
      { label: "Transport Facility", href: "#transport" },
      { label: "Surveillance Security", href: "#surveillance" },
      { label: "Library", href: "#library" },
      { label: "Smart Class", href: "#smart-class" },
      { label: "Biology Lab", href: "#biology-lab" },
      { label: "Computer Lab", href: "#computer-lab" },
      { label: "Chemistry Lab", href: "#chemistry-lab" },
      { label: "Play Ground", href: "#playground" },
      { label: "Physics Lab", href: "#physics-lab" },
    ],
  },
  {
    label: "Sports",
    href: "#sports",
    children: [
      { label: "Kids Class", href: "#kids-class" },
      { label: "Kids Study", href: "#kids-study" },
      { label: "Kids Play", href: "#kids-play" },
      { label: "Kids Fun", href: "#kids-fun" },
    ],
  },
  {
    label: "Events",
    href: "#events",
    children: [
      { label: "Annual Day", href: "#annual-day" },
      { label: "Sports Activity", href: "#sports-activity" },
      { label: "Cultural Activity", href: "#cultural-activity" },
      { label: "Rules and Regulations", href: "#rules-regulations" },
      { label: "Exhibition", href: "#exhibition" },
    ],
  },
  {
    label: "Infrastructure",
    href: "#infrastructure",
    children: [
      { label: "Our Reception", href: "#our-reception" },
      { label: "Morning Assembly", href: "#morning-assembly" },
      { label: "Discipline", href: "#discipline" },
      { label: "Music Class", href: "#music-class" },
      { label: "Safety & Security", href: "#safety-security" },
      { label: "Fire Safety", href: "#fire-safety" },
      { label: "Infirmary", href: "#infirmary" },
      { label: "Building Infrastructure", href: "#building-infrastructure" },
    ],
  },
  { label: "Our Gallery", href: "#gallery", children: [] },
];

/* ── Animation presets ─────────────────────────────────── */
const dropIn: Variants = {
  hidden: { opacity: 0, y: -6, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.22,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  },
  exit: {
    opacity: 0,
    y: -6,
    scale: 0.98,
    transition: { duration: 0.15, ease: "easeIn" },
  },
};

const subSlide: Variants = {
  hidden: { opacity: 0, x: -6 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.18,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  },
  exit: { opacity: 0, x: -6, transition: { duration: 0.12, ease: "easeIn" } },
};

/* ── Shared glass style ────────────────────────────────── */
const glass =
  "bg-[#0b1a35]/90 backdrop-blur-xl border border-white/20 shadow-2xl rounded-xl overflow-hidden";

/* ── NavItem with dropdown ─────────────────────────────── */
function NavItem({
  label,
  href,
  children,
}: {
  label: string;
  href: string;
  children?: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <a
        href={href}
        className="flex items-center gap-1 text-white/80 hover:text-white text-[13.5px] font-medium whitespace-nowrap transition-colors duration-150"
      >
        {label}
        {children && (
          <motion.span
            animate={{ rotate: open ? 180 : 0 }}
            transition={{
              duration: 0.22,
              ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
            }}
            style={{ display: "flex", alignItems: "center" }}
          >
            <ChevronDown size={13} className="opacity-60 mt-px" />
          </motion.span>
        )}
      </a>

      <AnimatePresence>
        {open && children && (
          <div
            style={{
              position: "absolute",
              top: "100%",
              left: 0,
              paddingTop: 12,
              zIndex: 201,
            }}
          >
            <motion.div
              variants={dropIn}
              initial="hidden"
              animate="show"
              exit="exit"
              className={glass}
              style={{ minWidth: 200 }}
            >
              {/* Triangle pointer */}
              <div
                style={{
                  position: "absolute",
                  top: -6,
                  left: 20,
                  width: 12,
                  height: 12,
                  background: "rgba(11,26,53,0.90)",
                  border: "1px solid rgba(255,255,255,0.20)",
                  borderRight: "none",
                  borderBottom: "none",
                  transform: "rotate(45deg)",
                  borderRadius: 2,
                }}
              />
              {children}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ── About dropdown ────────────────────────────────────── */
function AboutDropdown() {
  return (
    <div className="py-2">
      {aboutItems.map((item, i) => (
        <a
          key={i}
          href={item.href}
          className="flex items-center gap-2.5 px-5 py-2.5 text-white/90 hover:text-white hover:bg-white/10 text-[13px] font-medium whitespace-nowrap transition-colors duration-150 group"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#C9A84C] opacity-0 group-hover:opacity-100 transition-opacity duration-150 flex-shrink-0" />
          {item.label}
        </a>
      ))}
    </div>
  );
}

/* ── Facilities dropdown (two-level) ───────────────────── */
function FacilitiesDropdown() {
  const [activeGroup, setActiveGroup] = useState<string | null>("Facilities");

  const current = facilitiesGroups.find((g) => g.label === activeGroup);

  return (
    <div className="flex" style={{ minWidth: 420 }}>
      {/* Left column — group labels */}
      <div className="py-2 border-r border-white/15" style={{ minWidth: 175 }}>
        {facilitiesGroups.map((group, i) => {
          const isActive = activeGroup === group.label;
          return (
            <div
              key={i}
              onMouseEnter={() => setActiveGroup(group.label)}
              className={`flex items-center justify-between gap-2 px-5 py-2.5 cursor-pointer text-[13px] font-medium whitespace-nowrap transition-colors duration-150 ${
                isActive
                  ? "text-white bg-white/12"
                  : "text-white/85 hover:text-white hover:bg-white/8"
              }`}
            >
              <span className="flex items-center gap-2.5">
                <span
                  className={`w-1.5 h-1.5 rounded-full bg-[#C9A84C] flex-shrink-0 transition-opacity duration-150 ${
                    isActive ? "opacity-100" : "opacity-0"
                  }`}
                />
                {group.label}
              </span>
              {group.children.length > 0 && (
                <ChevronRight size={12} className="opacity-60" />
              )}
            </div>
          );
        })}
      </div>

      {/* Right column — sub-items */}
      <div className="py-2 relative" style={{ minWidth: 200 }}>
        <AnimatePresence mode="wait">
          {current && current.children.length > 0 && (
            <motion.div
              key={current.label}
              variants={subSlide}
              initial="hidden"
              animate="show"
              exit="exit"
            >
              <p className="px-5 pt-1.5 pb-2 text-[10px] font-bold tracking-[0.2em] uppercase text-[#C9A84C]">
                {current.label}
              </p>
              {current.children.map((sub, j) => (
                <a
                  key={j}
                  href={sub.href}
                  className="flex items-center gap-2.5 px-5 py-2 text-white/85 hover:text-white hover:bg-white/10 text-[13px] font-medium whitespace-nowrap transition-colors duration-150 group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C9A84C] opacity-0 group-hover:opacity-100 transition-opacity duration-150 flex-shrink-0" />
                  {sub.label}
                </a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

/* ── Mobile accordion item ─────────────────────────────── */
function MobileAccordion({
  label,
  href,
  children,
  onClose,
}: {
  label: string;
  href: string;
  children?: React.ReactNode;
  onClose: () => void;
}) {
  const [open, setOpen] = useState(false);

  if (!children) {
    return (
      <a
        href={href}
        onClick={onClose}
        className="flex items-center justify-between text-white/80 hover:text-white text-sm font-medium py-3 border-b border-white/10 last:border-0 transition-colors duration-150"
      >
        {label}
      </a>
    );
  }

  return (
    <div className="border-b border-white/10 last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between text-white/80 hover:text-white text-sm font-medium py-3 transition-colors duration-150"
      >
        {label}
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{
            duration: 0.22,
            ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
          }}
          style={{ display: "flex" }}
        >
          <ChevronDown size={14} className="opacity-60" />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{
              duration: 0.28,
              ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
            }}
            style={{ overflow: "hidden" }}
          >
            <div className="pb-2 pl-3">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ── Navbar ────────────────────────────────────────────── */
const Navbar = ({ solid = false }: { solid?: boolean }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileFacilitiesGroup, setMobileFacilitiesGroup] = useState<
    string | null
  >(null);

  /* Bar style switches between glass (hero) and solid navy (inner pages) */
  const barStyle = solid
    ? "bg-[#0d1f3c] border-white/10"
    : "bg-white/10 backdrop-blur-md border-white/20";

  /* Mobile drawer style matches */
  const drawerStyle = solid
    ? "bg-[#0d1f3c] border-white/10"
    : "bg-white/10 backdrop-blur-md border-white/20";

  return (
    <div className="relative z-[200] w-full flex justify-center flex-col items-center">
      {/* ── Main Bar ── */}
      <div
        className={`justify-between items-center flex w-[95%] h-[72px] mt-3 px-6 rounded-xl border shadow-lg ${barStyle}`}
      >
        {/* Logo */}
        <div className="flex-shrink-0">
          <Image
            className="rounded-full"
            width={52}
            height={52}
            src="/logo.jpeg"
            alt="NSK High School"
          />
        </div>

        {/* Desktop Links */}
        <div className="hidden lg:flex gap-8 items-center">
          <a
            href="#"
            className="text-white/80 hover:text-white text-[13.5px] font-medium whitespace-nowrap transition-colors duration-150"
          >
            Home
          </a>

          <NavItem label="About" href="#about">
            <AboutDropdown />
          </NavItem>

          <NavItem label="Our Facilities" href="#facilities">
            <FacilitiesDropdown />
          </NavItem>

          <a
            href="#fees"
            className="text-white/80 hover:text-white text-[13.5px] font-medium whitespace-nowrap transition-colors duration-150"
          >
            Fee Structure
          </a>

          <a
            href="#disclosure"
            className="text-white/80 hover:text-white text-[13.5px] font-medium whitespace-nowrap transition-colors duration-150"
          >
            Mandatory Public Disclosure
          </a>
        </div>

        {/* CTA + Hamburger */}
        <div className="flex items-center gap-3">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="hidden lg:inline-flex bg-red-600 hover:bg-red-700 active:bg-red-800 px-6 py-2.5 text-white font-semibold text-[13.5px] rounded-lg transition-colors duration-150 cursor-pointer shadow-md shadow-red-900/30"
          >
            Contact Us
          </motion.button>
          <button
            className="lg:hidden text-white p-1.5 rounded-md hover:bg-white/10 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* ── Mobile Drawer ── */}
      <AnimatePresence initial={false}>
        {menuOpen && (
          <motion.div
            className="lg:hidden w-[95%]"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{
              duration: 0.3,
              ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
            }}
            style={{ overflow: "hidden" }}
          >
            <div
              className={`border border-t-0 rounded-b-xl px-6 py-4 flex flex-col shadow-lg ${drawerStyle}`}
            >
              <a
                href="#"
                onClick={() => setMenuOpen(false)}
                className="flex items-center justify-between text-white/80 hover:text-white text-sm font-medium py-3 border-b border-white/10 transition-colors duration-150"
              >
                Home
              </a>

              <MobileAccordion
                label="About"
                href="#about"
                onClose={() => setMenuOpen(false)}
              >
                {aboutItems.map((item, i) => (
                  <a
                    key={i}
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="flex items-center gap-2 text-white/80 hover:text-white text-[13px] py-2 transition-colors duration-150"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C9A84C] opacity-70 flex-shrink-0" />
                    {item.label}
                  </a>
                ))}
              </MobileAccordion>

              <MobileAccordion
                label="Our Facilities"
                href="#facilities"
                onClose={() => setMenuOpen(false)}
              >
                {facilitiesGroups.map((group, i) => (
                  <div key={i}>
                    <button
                      onClick={() =>
                        setMobileFacilitiesGroup(
                          mobileFacilitiesGroup === group.label
                            ? null
                            : group.label,
                        )
                      }
                      className="w-full flex items-center justify-between text-white/80 hover:text-white text-[13px] py-2 transition-colors duration-150"
                    >
                      <span className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#C9A84C] opacity-70 flex-shrink-0" />
                        {group.label}
                      </span>
                      {group.children.length > 0 && (
                        <motion.span
                          animate={{
                            rotate:
                              mobileFacilitiesGroup === group.label ? 90 : 0,
                          }}
                          transition={{ duration: 0.18 }}
                          style={{ display: "flex" }}
                        >
                          <ChevronRight size={12} className="opacity-60" />
                        </motion.span>
                      )}
                    </button>

                    <AnimatePresence initial={false}>
                      {mobileFacilitiesGroup === group.label &&
                        group.children.length > 0 && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{
                              duration: 0.22,
                              ease: [0.22, 1, 0.36, 1] as [
                                number,
                                number,
                                number,
                                number,
                              ],
                            }}
                            style={{ overflow: "hidden" }}
                          >
                            <div className="pl-5 pb-1">
                              {group.children.map((sub, j) => (
                                <a
                                  key={j}
                                  href={sub.href}
                                  onClick={() => setMenuOpen(false)}
                                  className="block text-white/75 hover:text-white text-[12.5px] py-1.5 transition-colors duration-150"
                                >
                                  {sub.label}
                                </a>
                              ))}
                            </div>
                          </motion.div>
                        )}
                    </AnimatePresence>
                  </div>
                ))}
              </MobileAccordion>

              <a
                href="#fees"
                onClick={() => setMenuOpen(false)}
                className="flex items-center justify-between text-white/80 hover:text-white text-sm font-medium py-3 border-b border-white/10 transition-colors duration-150"
              >
                Fee Structure
              </a>

              <a
                href="#disclosure"
                onClick={() => setMenuOpen(false)}
                className="flex items-center justify-between text-white/80 hover:text-white text-sm font-medium py-3 border-b border-white/10 transition-colors duration-150"
              >
                Mandatory Public Disclosure
              </a>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="mt-4 bg-red-600 hover:bg-red-700 text-white py-2.5 font-semibold text-sm rounded-lg transition-colors duration-150 cursor-pointer"
              >
                Contact Us
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
