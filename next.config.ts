import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.australiansiptv.com" }],
        destination: "https://australiansiptv.com/:path*",
        permanent: true,
      },
      // Legacy hash-style discovery → real crawlable paths
      { source: "/index.html", destination: "/", permanent: true },
      { source: "/home", destination: "/", permanent: true },
      { source: "/home/", destination: "/", permanent: true },
      { source: "/pricing", destination: "/plans/", permanent: true },
      { source: "/pricing/", destination: "/plans/", permanent: true },
      { source: "/reseller", destination: "/reseller-panel/", permanent: true },
      { source: "/reseller/", destination: "/reseller-panel/", permanent: true },
      { source: "/support", destination: "/contact/", permanent: true },
      { source: "/support/", destination: "/contact/", permanent: true },
      { source: "/faqs", destination: "/faq/", permanent: true },
      { source: "/faqs/", destination: "/faq/", permanent: true },
      { source: "/speed", destination: "/internet-speed/", permanent: true },
      { source: "/speed/", destination: "/internet-speed/", permanent: true },
      { source: "/start", destination: "/getting-started/", permanent: true },
      { source: "/start/", destination: "/getting-started/", permanent: true },
    ];
  },
};

export default nextConfig;
