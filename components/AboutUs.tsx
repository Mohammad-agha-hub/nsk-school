import React from "react";
const NAVY = "#0D1B38";
const GOLD = "#C9A84C";

const AboutUs = () => {
  return (
    <section className="bg-[#ffffff] py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        
        {/* ── Eyebrow label ── */}
        <div className="flex flex-col items-center mb-14">
          
          <span className="text-red-700  text-sm font-semibold tracking-[0.2em] uppercase font-body">
            About Us
          </span>
          <h2
            className="text-4xl md:text-[3rem] leading-tight mb-5"
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontWeight: 700,
              color: NAVY,
              letterSpacing: "-0.01em",
            }}
          >
            A Legacy Of Excellence In{" "}
            <em style={{ fontStyle: "italic", color: GOLD }}>Education</em>
          </h2>
          <div className="flex items-center justify-center gap-3 mb-5">
            <div
              className="h-px w-16"
              style={{
                background: `linear-gradient(90deg, transparent, ${NAVY}20)`,
              }}
            />
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{ background: GOLD, display: "inline-block" }}
            />
            <span
              className="w-2 h-2 rounded-full border"
              style={{ borderColor: `${NAVY}28`, display: "inline-block" }}
            />
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{ background: GOLD, display: "inline-block" }}
            />
            <div
              className="h-px w-16"
              style={{
                background: `linear-gradient(90deg, ${NAVY}20, transparent)`,
              }}
            />
          </div>
        </div>

        {/* ── Two column layout ── */}
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">
          {/* ── Left: Image with gold offset frame ── */}
          <div className="relative flex-shrink-0 w-full max-w-sm lg:max-w-md mx-auto lg:mx-0">
            {/* Gold decorative frame — offset bottom-right */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border-4 border-[#C9A84C] rounded-sm z-0" />
            {/* Image */}
            <div className="relative z-10">
              <img
                src="https://images.pexels.com/photos/8471939/pexels-photo-8471939.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="NSK High School students"
                className="w-full h-[420px] object-cover object-top rounded-sm shadow-xl"
              />
            </div>
          </div>

          {/* ── Right: Quote + Content ── */}
          <div className="flex flex-col gap-7 flex-1">
            {/* Quote */}
            <div className="border-l-4 border-[#C9A84C] pl-5">
              <p className="font-quote text-[#1a1a1a] text-lg sm:text-xl leading-relaxed italic">
                "NSK High School has transformed my child's life, fostering
                academic excellence and character. It is truly a place where
                leaders are molded."
              </p>
              <p className="mt-3 text-stone-500 text-sm font-medium font-body not-italic">
                — Parent
              </p>
            </div>

            {/* Divider */}
            <div className="w-12 h-px bg-[#C9A84C]" />

            {/* Heading */}
            <div>
              <p className=" text-stone-500 text-[15px] leading-relaxed font-body">
                For over two and a half decades, NSK High School has been a
                beacon of knowledge and integrity. We are committed to providing
                a world-class education that empowers students to reach their
                full potential and contribute meaningfully to society. Our
                holistic approach nurtures intellectual, social, and emotional
                growth.
              </p>
            </div>

            {/* Read Our Story CTA */}
            <div className="flex justify-center">
              <button className="bg-red-600 hover:bg-red-700 w-[40%] active:bg-red-800 text-white px-10 py-3 font-semibold text-sm rounded-lg transition-colors duration-150 cursor-pointer shadow-lg shadow-red-900/40">
                Book An Appointment
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
