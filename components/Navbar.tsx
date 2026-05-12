"use client";

import Image from "next/image";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#", dropdown: false },
  { label: "About", href: "#about", dropdown: true },
  { label: "Our Facilities", href: "#facilities", dropdown: true },
  { label: "Fee Structure", href: "#fees", dropdown: false },
  {
    label: "Mandatory Public Disclosure",
    href: "#disclosure",
    dropdown: false,
  },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="relative z-50 w-full flex justify-center flex-col items-center">
      {/* ── Main Bar ── */}
      <div className="justify-between items-center flex w-[95%] h-[72px] mt-3 px-6 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 shadow-lg">
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
        <div className="hidden lg:flex gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="flex items-center gap-1 text-white/80 hover:text-white text-[13.5px] font-medium whitespace-nowrap transition-colors duration-150"
            >
              {link.label}
              {link.dropdown && (
                <ChevronDown size={13} className="opacity-60 mt-px" />
              )}
            </a>
          ))}
        </div>

        {/* CTA + Hamburger */}
        <div className="flex items-center gap-3">
          <button className="hidden lg:inline-flex bg-red-600 hover:bg-red-700 active:bg-red-800 px-6 py-2.5 text-white font-semibold text-[13.5px] rounded-lg transition-colors duration-150 cursor-pointer shadow-md shadow-red-900/30">
            Contact Us
          </button>
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
      <div
        className={`lg:hidden w-[95%] overflow-hidden transition-all duration-300 ease-in-out ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-white/10 backdrop-blur-md border border-t-0 border-white/20 rounded-b-xl px-6 py-4 flex flex-col shadow-lg">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="flex items-center justify-between text-white/80 hover:text-white text-sm font-medium py-3 border-b border-white/10 last:border-0 transition-colors duration-150"
            >
              {link.label}
              {link.dropdown && (
                <ChevronDown size={14} className="opacity-60" />
              )}
            </a>
          ))}
          <button className="mt-4 bg-red-600 hover:bg-red-700 text-white py-2.5 font-semibold text-sm rounded-lg transition-colors duration-150 cursor-pointer">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
