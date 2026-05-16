import Image from "next/image";

export interface PersonSection {
  /** e.g. "INTRODUCTION" or "Director's Message" */
  heading: string;
  /** Optional sub-line below heading, e.g. "Mr. Ajit Singh" */
  subheading?: string;
  paragraphs: string[];
  /** Optional closing signature block */
  signature?: {
    name: string;
    role: string;
    school?: string;
  };
  image: {
    src: string;
    alt: string;
  };
  /** Flip to put image on the left. Defaults to image on the right. */
  imageLeft?: boolean;
}

export default function InnerPageContent({
  heading,
  subheading,
  paragraphs,
  signature,
  image,
  imageLeft = false,
}: PersonSection) {
  const textBlock = (
    <div className="flex-1 min-w-0">
      {/* Section label */}
      <div className="flex items-center gap-3 mb-3">
        <div className="w-1 h-8 bg-red-600 rounded-full" />
        <h2 className="text-[#0d1f3c] text-2xl md:text-3xl font-extrabold tracking-tight uppercase">
          {heading}
        </h2>
      </div>

      {subheading && (
        <p className="text-red-600 font-semibold text-sm mb-5 ml-4">
          {subheading}
        </p>
      )}

      <div className="space-y-4 ml-4">
        {paragraphs.map((para, i) => (
          <p
            key={i}
            className="text-gray-600 text-[15px] leading-relaxed"
            dangerouslySetInnerHTML={{ __html: para }}
          />
        ))}
      </div>

      {signature && (
        <div className="mt-8 ml-4 pl-4 border-l-2 border-red-600/40">
          <p className="font-bold text-[#0d1f3c] text-sm">{signature.name}</p>
          <p className="text-gray-500 text-sm">{signature.role}</p>
          {signature.school && (
            <p className="text-gray-500 text-sm">{signature.school}</p>
          )}
        </div>
      )}
    </div>
  );

  const imageBlock = (
    <div className="flex-shrink-0 w-full md:w-[320px] lg:w-[380px]">
      <div className="relative w-full h-[260px] md:h-[320px] rounded-2xl overflow-hidden shadow-xl ring-1 ring-black/5">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          className="object-cover object-top"
        />
        {/* Subtle red corner accent */}
        <div className="absolute bottom-0 left-0 w-16 h-1 bg-red-600" />
      </div>
    </div>
  );

  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div
          className={`flex flex-col ${imageLeft ? "md:flex-row-reverse" : "md:flex-row"} gap-10 md:gap-14 items-start`}
        >
          {textBlock}
          {imageBlock}
        </div>
      </div>
    </section>
  );
}
