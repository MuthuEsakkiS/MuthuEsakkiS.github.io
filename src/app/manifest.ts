import type { MetadataRoute } from "next";
import { personal } from "@/data/resume";

// Statically generated at build time (no request-time data), so this works
// fine with `output: "export"`.
export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${personal.name} — ${personal.role}`,
    short_name: personal.name,
    description: personal.tagline,
    start_url: "/",
    display: "standalone",
    background_color: "#05060a",
    theme_color: "#05060a",
    icons: [
      {
        src: "/icon.svg",
        type: "image/svg+xml",
        sizes: "any",
      },
    ],
  };
}
