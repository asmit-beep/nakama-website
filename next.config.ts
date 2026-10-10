import type { NextConfig } from "next";
import {randomBytes} from "crypto";

const nextConfig: NextConfig = {
  // Per-build fallback for signing admin sessions when no ADMIN_SESSION_SECRET / GITHUB_TOKEN is set. Server-only use.
  env: {NK_BUILD_SECRET: process.env.NK_BUILD_SECRET || randomBytes(32).toString("hex")},
  async headers() {
    return [{source: "/:path*", headers: [
      {key: "X-Content-Type-Options", value: "nosniff"},
      {key: "Referrer-Policy", value: "strict-origin-when-cross-origin"},
      {key: "X-Frame-Options", value: "SAMEORIGIN"},
      {key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()"},
    ]}];
  },
  async redirects() {
    return [
      {source: "/feed", destination: "/rss.xml", permanent: true},
      {source: "/feed.xml", destination: "/rss.xml", permanent: true},
      {source: "/atom.xml", destination: "/rss.xml", permanent: true},
      {source: "/.well-known/llms.txt", destination: "/llms.txt", permanent: true},
      {source: "/:path*", has: [{type: "host", value: "nakama-website.vercel.app"}], destination: "https://www.nakama.in/:path*", permanent: true},
      {source: "/journal", destination: "/resources#articles", permanent: false},
      {source: "/what-we-do", destination: "/services", permanent: false},
    ];
  },
};

export default nextConfig;
