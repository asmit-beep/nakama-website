import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {source: "/journal", destination: "/resources#articles", permanent: false},
      {source: "/what-we-do", destination: "/services", permanent: false},
    ];
  },
};

export default nextConfig;
