import React from "react";
import {
  
  MessageCircle,
  MapPin,
  Mail,
  Phone,
  Navigation,
} from "lucide-react";

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
    // { icon: Facebook, href: "#", label: "Facebook" },
    // { icon: Instagram, href: "#", label: "Instagram" },
    // { icon: Youtube, href: "#", label: "YouTube" },
    { icon: MessageCircle, href: "#", label: "Chat" },
  ];

  return (
    <footer className="bg-[#0d1b3e] text-white font-sans">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Section */}
          <div className="flex flex-col gap-5">
            {/* Logo */}
            <div>
              <span className="text-2xl font-extrabold tracking-tight text-white">
                NSK{" "}
              </span>
              <span className="text-2xl font-extrabold tracking-tight text-[#e5a020]">
                High School
              </span>
            </div>

            {/* Tagline */}
            <p className="text-sm text-gray-300 leading-relaxed max-w-xs">
              Quality Education for a Brighter Tomorrow. Nurturing young minds
              with academic excellence and character building since 2000.
            </p>

            {/* Social Icons */}
            <div className="flex gap-3 mt-1">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-10 h-10 rounded-md border border-white/20 flex items-center justify-center text-gray-300 hover:text-white hover:border-white/50 hover:bg-white/10 transition-all duration-200"
                >
                  <Icon size={17} />
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
              {/* Address */}
              <li className="flex items-start gap-3">
                <MapPin size={17} className="text-[#e5a020] mt-0.5 shrink-0" />
                <span className="text-sm text-gray-300 leading-snug">
                  Chandu, opp. Petrol Pump, Bahadurgarh, Haryana - 124505
                </span>
              </li>

              {/* Email */}
              <li className="flex items-center gap-3">
                <Mail size={17} className="text-[#e5a020] shrink-0" />
                <a
                  href="mailto:nskhschool@gmail.com"
                  className="text-sm text-gray-300 hover:text-white transition-colors duration-200"
                >
                  nskhschool@gmail.com
                </a>
              </li>

              {/* Phone */}
              <li className="flex items-center gap-3">
                <Phone size={17} className="text-[#e5a020] shrink-0" />
                <a
                  href="tel:+918813009409"
                  className="text-sm text-gray-300 hover:text-white transition-colors duration-200"
                >
                  +91 88130 09409
                </a>
              </li>

              {/* Get Directions Button */}
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
