import { MapPin, Mail, Phone } from "lucide-react";

interface FacilitySidebarProps {
  contact?: {
    address?: string;
    email?: string;
    phones?: string[];
  };
  faqHref?: string;
}

export default function FacilitySidebar({
  contact = {
    address: "Chandu, opp. Petrol Pump, Budhera, Gurugram, Haryana 122505",
    email: "nsksecschool@gmail.com",
    phones: ["+91 8851099409", "+91 9728838850"],
  },
  faqHref = "/faq",
}: FacilitySidebarProps) {
  return (
    <aside className="w-full lg:w-[300px] xl:w-[320px] flex-shrink-0 flex flex-col gap-4">
      {/* Contact Card */}
      <div className="bg-[#4a3219] text-white rounded-xl p-6 shadow-lg">
        <h3 className="text-lg font-bold mb-4 text-white">Contact Us</h3>
        <div className="flex flex-col gap-3.5">
          {contact.address && (
            <div className="flex items-start gap-3">
              <MapPin
                size={16}
                className="text-[#E8B84B] mt-0.5 flex-shrink-0"
              />
              <span className="text-sm text-white/80 leading-snug">
                {contact.address}
              </span>
            </div>
          )}
          {contact.email && (
            <div className="flex items-center gap-3">
              <Mail size={16} className="text-[#E8B84B] flex-shrink-0" />
              <a
                href={`mailto:${contact.email}`}
                className="text-sm text-white/80 hover:text-white transition-colors break-all"
              >
                {contact.email}
              </a>
            </div>
          )}
          {contact.phones?.map((phone) => (
            <div key={phone} className="flex items-center gap-3">
              <Phone size={16} className="text-[#E8B84B] flex-shrink-0" />
              <a
                href={`tel:${phone.replace(/\s/g, "")}`}
                className="text-sm text-white/80 hover:text-white transition-colors"
              >
                {phone}
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Request Info Button */}
      <a
        href="/contact"
        className="block w-full text-center bg-[#4a3219] hover:bg-[#5c3f20] text-white font-semibold text-sm py-3.5 rounded-xl transition-colors duration-200 shadow"
      >
        Request information
      </a>

      {/* FAQ Card */}
      <div className="border border-gray-200 rounded-xl p-5 bg-white shadow-sm">
        <h4 className="font-bold text-[#0d1f3c] text-base mb-1">
          Do you have more questions?
        </h4>
        <p className="text-sm text-gray-500">
          Read our{" "}
          <a
            href={faqHref}
            className="text-red-600 font-semibold hover:underline"
          >
            FAQ
          </a>
        </p>
        {/* Decorative illustration */}
        <div className="mt-4 flex justify-end opacity-60">
          <svg width="80" height="60" viewBox="0 0 80 60" fill="none">
            <ellipse cx="40" cy="54" rx="28" ry="5" fill="#e5e7eb" />
            <rect x="18" y="10" width="44" height="36" rx="6" fill="#dbeafe" />
            <rect x="24" y="16" width="32" height="4" rx="2" fill="#93c5fd" />
            <rect x="24" y="23" width="24" height="3" rx="1.5" fill="#bfdbfe" />
            <rect x="24" y="29" width="28" height="3" rx="1.5" fill="#bfdbfe" />
            <circle cx="58" cy="38" r="10" fill="#fef3c7" />
            <text x="54" y="43" fontSize="12" fill="#92400e" fontWeight="bold">
              ?
            </text>
          </svg>
        </div>
      </div>
    </aside>
  );
}
