import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  cacheComponents: true,
  partialPrefetching: true,
  async redirects() {
    return [
      // The history page used to live at /about
      { source: "/about", destination: "/history", permanent: true },
    ];
  },
};

export default nextConfig;
