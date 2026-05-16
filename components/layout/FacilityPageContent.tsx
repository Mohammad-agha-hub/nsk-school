import FacilitySidebar from "@/components/layout/FacilitySidebar";

/* ── Types ─────────────────────────────────────────────── */

export interface FeatureItem {
  label: string;
  description: string;
}

export interface FacilitySection {
  /** Section heading, e.g. "Key Features" */
  heading: string;
  /** Optional intro paragraph before the feature list */
  intro?: string;
  /** Either plain paragraphs OR a list of bold-label features */
  content:
    | { type: "paragraphs"; items: string[] }
    | { type: "features"; items: FeatureItem[] };
}

export interface FacilityPageContentProps {
  /** Page title repeated inside the content area */
  title: string;
  /** One or two intro paragraphs before the sections */
  intro: string[];
  /** Structured sections (Key Features, Impact, Conclusion, etc.) */
  sections: FacilitySection[];
  /** Show the right sidebar. Defaults to true. Pass false for full-width pages. */
  showSidebar?: boolean;
  /** Override sidebar contact details if needed */
  sidebarContact?: {
    address?: string;
    email?: string;
    phones?: string[];
  };
}

/* ── Components ─────────────────────────────────────────── */

function SectionBlock({ section }: { section: FacilitySection }) {
  return (
    <div className="mt-8">
      <h2 className="text-xl md:text-2xl font-bold text-[#0d1f3c] mb-3">
        {section.heading}
      </h2>

      {section.intro && (
        <p
          className="text-gray-600 text-[15px] leading-relaxed mb-3"
          dangerouslySetInnerHTML={{ __html: section.intro }}
        />
      )}

      {section.content.type === "paragraphs" &&
        section.content.items.map((para, i) => (
          <p
            key={i}
            className="text-gray-600 text-[15px] leading-relaxed mb-3"
            dangerouslySetInnerHTML={{ __html: para }}
          />
        ))}

      {section.content.type === "features" && (
        <div className="flex flex-col gap-3">
          {section.content.items.map((feature, i) => (
            <div key={i}>
              <span className="font-semibold text-[#0d1f3c] text-[15px]">
                {feature.label}:{" "}
              </span>
              <span
                className="text-gray-600 text-[15px] leading-relaxed"
                dangerouslySetInnerHTML={{ __html: feature.description }}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

/* ── Main export ─────────────────────────────────────────── */

export default function FacilityPageContent({
  title,
  intro,
  sections,
  showSidebar = true,
  sidebarContact,
}: FacilityPageContentProps) {
  return (
    <section className="bg-white py-14 px-4">
      <div className="max-w-6xl mx-auto">
        <div
          className={`flex flex-col ${showSidebar ? "lg:flex-row gap-10 xl:gap-14" : ""} items-start`}
        >
          {/* ── Main content ── */}
          <div className="flex-1 min-w-0">
            {/* Page title */}
            <div className="flex items-center gap-3 mb-4">
              <div className="w-1 h-7 bg-red-600 rounded-full flex-shrink-0" />
              <h1 className="text-2xl md:text-3xl font-extrabold text-[#0d1f3c] tracking-tight">
                {title}
              </h1>
            </div>

            {/* Intro paragraphs */}
            <div className="ml-4 space-y-3">
              {intro.map((para, i) => (
                <p
                  key={i}
                  className="text-gray-600 text-[15px] leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: para }}
                />
              ))}
            </div>

            {/* Sections */}
            <div className="ml-4">
              {sections.map((section, i) => (
                <SectionBlock key={i} section={section} />
              ))}
            </div>
          </div>

          {/* ── Sidebar ── */}
          {showSidebar && <FacilitySidebar contact={sidebarContact} />}
        </div>
      </div>
    </section>
  );
}
