import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

// Statically generated at build time (no request-time data), so this works
// fine with `output: "export"`.
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
