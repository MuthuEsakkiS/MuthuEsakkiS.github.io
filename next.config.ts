import type { NextConfig } from "next";

// PAGES_BASE_PATH is provided automatically by the `actions/configure-pages`
// GitHub Action during CI builds, so the site works whether it's deployed as
// a GitHub Pages user site (root) or a project site (served from /repo-name).
const nextConfig: NextConfig = {
  output: "export",
  basePath: process.env.PAGES_BASE_PATH,
  images: {
    unoptimized: true,
  },
  // Hides the Next.js dev-mode route indicator badge during `next dev`.
  // Has no effect on the production build/export.
  devIndicators: false,
};

export default nextConfig;
