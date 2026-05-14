import React from "react";
import { MapPin, Mail, Phone, Navigation } from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { label: "Home", href: "#" },
    { label: "About Us", href: "#" },
    { label: "School Levels", href: "#" },
    { label: "Facilities", href: "#" },
    { label: "Testimonials", href: "#" },
  ];

  const facilities = [
    { label: "Smart Classrooms", href: "#" },
    { label: "Computer Lab", href: "#" },
    { label: "Science Lab", href: "#" },
    { label: "Library", href: "#" },
    { label: "Sports Ground", href: "#" },
  ];

  const socialLinks = [
    {
      label: "Facebook",
      href: "#",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" width="17" height="17">
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
        </svg>
      ),
    },
    {
      label: "Instagram",
      href: "#",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          width="17"
          height="17"
        >
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
        </svg>
      ),
    },
    {
      label: "YouTube",
      href: "#",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" width="17" height="17">
          <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
          <polygon
            points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"
            fill="white"
          />
        </svg>
      ),
    },
    {
      label: "WhatsApp",
      href: "#",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" width="17" height="17">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
          <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.528 5.845L.057 23.215a.75.75 0 0 0 .916.916l5.37-1.471A11.943 11.943 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22a9.944 9.944 0 0 1-5.073-1.384l-.361-.214-3.735 1.023 1.023-3.735-.214-.361A9.944 9.944 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
        </svg>
      ),
    },
  ];

  return (
    <footer className="bg-[#0d1b3e] text-white font-sans">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Section */}
          <div className="flex flex-col gap-5">
            <div>
              <span className="text-2xl font-extrabold tracking-tight text-white">
                NSK{" "}
              </span>
              <span className="text-2xl font-extrabold tracking-tight text-[#e5a020]">
                High School
              </span>
            </div>

            <p className="text-sm text-gray-300 leading-relaxed max-w-xs">
              Quality Education for a Brighter Tomorrow. Nurturing young minds
              with academic excellence and character building since 2000.
            </p>

            <div className="flex gap-3 mt-1">
              {socialLinks.map(({ icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-10 h-10 rounded-md border border-white/20 flex items-center justify-center text-gray-300 hover:text-white hover:border-white/50 hover:bg-white/10 transition-all duration-200"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-base font-semibold text-white mb-5 tracking-wide">
              Quick Links
            </h3>
            <ul className="flex flex-col gap-3">
              {quickLinks.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-sm text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Facilities */}
          <div>
            <h3 className="text-base font-semibold text-white mb-5 tracking-wide">
              Facilities
            </h3>
            <ul className="flex flex-col gap-3">
              {facilities.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-sm text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-base font-semibold text-white mb-5 tracking-wide">
              Contact Us
            </h3>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3">
                <MapPin size={17} className="text-[#e5a020] mt-0.5 shrink-0" />
                <span className="text-sm text-gray-300 leading-snug">
                  Chandu, opp. Petrol Pump, Bahadurgarh, Haryana - 124505
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={17} className="text-[#e5a020] shrink-0" />
                <a
                  href="mailto:nskhschool@gmail.com"
                  className="text-sm text-gray-300 hover:text-white transition-colors duration-200"
                >
                  nskhschool@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={17} className="text-[#e5a020] shrink-0" />
                <a
                  href="tel:+918813009409"
                  className="text-sm text-gray-300 hover:text-white transition-colors duration-200"
                >
                  +91 88130 09409
                </a>
              </li>
              <li className="mt-1">
                <a
                  href="#"
                  className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-colors duration-200"
                >
                  <Navigation size={15} />
                  Get Directions
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-white/10" />

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-xs text-gray-400">
          Copyright 2026 NSK High School. All Rights Reserved.
        </p>
        <div className="flex items-center gap-5">
          {["Privacy Policy", "Terms of Service", "Sitemap"].map((item) => (
            <a
              key={item}
              href="#"
              className="text-xs text-gray-400 hover:text-white transition-colors duration-200"
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
