import type { NextConfig } from "next";
import {randomBytes} from "crypto";

const nextConfig: NextConfig = {
  // Per-build fallback for signing admin sessions when no ADMIN_SESSION_SECRET / GITHUB_TOKEN is set. Server-only use.
  env: {NK_BUILD_SECRET: process.env.NK_BUILD_SECRET || randomBytes(32).toString("hex")},
  async redirects() {
    return [
      {source: "/journal", destination: "/resources#articles", permanent: false},
      {source: "/what-we-do", destination: "/services", permanent: false},
    ];
  },
};

export default nextConfig;
