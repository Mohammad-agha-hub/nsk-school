import { MetadataRoute } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL!;

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const routes: MetadataRoute.Sitemap = [
    // ── Home ──────────────────────────────────────────────
    {
      url: BASE_URL,
      lastModified,
      changeFrequency: "weekly",
      priority: 1.0,
    },

    // ── About ─────────────────────────────────────────────
    {
      url: `${BASE_URL}/about/introduction`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/about/principal-desk`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/about/chairman-desk`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },

    // ── Admissions ────────────────────────────────────────
    {
      url: `${BASE_URL}/admission-form`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },

    // ── Contact ───────────────────────────────────────────
    {
      url: `${BASE_URL}/contact-us`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },

    // ── Events ────────────────────────────────────────────
    {
      url: `${BASE_URL}/events`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/events/annual-day`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/events/cultural-activity`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/events/exhibition`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/events/rules-regulations`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/events/sports-activity`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.7,
    },

    // ── Facilities ────────────────────────────────────────
    {
      url: `${BASE_URL}/facilities/biology-lab`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/facilities/chemistry-lab`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/facilities/computer-lab`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/facilities/library`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/facilities/physics-lab`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/facilities/playground`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/facilities/smart-class`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/facilities/surveillance-security`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/facilities/transport-facility`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.6,
    },

    // ── FAQ & Fee ─────────────────────────────────────────
    {
      url: `${BASE_URL}/faq`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/fee-structure`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },

    // ── Gallery ───────────────────────────────────────────
    {
      url: `${BASE_URL}/gallery`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.7,
    },

    // ── Infrastructure ────────────────────────────────────
    {
      url: `${BASE_URL}/infrastructure/building-infrastructure`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/infrastructure/discipline`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/infrastructure/fire-safety`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/infrastructure/infirmary`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/infrastructure/morning-assembly`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/infrastructure/music-class`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/infrastructure/reception`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/infrastructure/safety-security`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.6,
    },

    // ── Kids ──────────────────────────────────────────────
    {
      url: `${BASE_URL}/Kids/kids-class`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/Kids/kids-fun`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/Kids/kids-play`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/Kids/kids-study`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },

    // ── Mandatory Disclosure ──────────────────────────────
    {
      url: `${BASE_URL}/mandatory-disclosure-page`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.5,
    },
  ];

  return routes;
}
