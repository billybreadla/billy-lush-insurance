import type { MetadataRoute } from "next";
import { SITE_URL, TOWNS } from "./lib/site";
import { ARTICLES } from "./lib/articles";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    {
      url: SITE_URL,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/texas-life-insurance`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/learn`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    ...TOWNS.map((t) => ({
      url: `${SITE_URL}/life-insurance/${t.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...ARTICLES.map((a) => ({
      url: `${SITE_URL}/learn/${a.slug}`,
      lastModified: new Date(a.updated + "T00:00:00"),
      changeFrequency: "yearly" as const,
      priority: 0.6,
    })),
  ];
}
