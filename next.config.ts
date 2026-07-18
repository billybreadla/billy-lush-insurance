import type { NextConfig } from "next";

// Security headers, emitted by Next itself so they actually reach the browser.
// The block in netlify.toml did NOT apply to Next.js responses served by
// @netlify/plugin-nextjs (verified live: only HSTS + nosniff reached the site,
// with no X-Frame-Options / Referrer-Policy / Permissions-Policy). Setting them
// here makes the plugin attach them to every page and route response.
const securityHeaders = [
  // Clickjacking protection. frame-ancestors is the modern equivalent and covers
  // browsers that ignore X-Frame-Options; both only govern who may frame the
  // page, so there's no risk of breaking the site or the booking embed.
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "Content-Security-Policy", value: "frame-ancestors 'self'" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Strict-Transport-Security", value: "max-age=31536000; includeSubDomains" },
  { key: "Permissions-Policy", value: "geolocation=(), microphone=(), camera=()" },
  { key: "X-DNS-Prefetch-Control", value: "on" },
];

const nextConfig: NextConfig = {
  // Drop the "x-powered-by: Next.js" tech-stack disclosure.
  poweredByHeader: false,
  async headers() {
    return [{ source: "/(.*)", headers: securityHeaders }];
  },
};

export default nextConfig;
