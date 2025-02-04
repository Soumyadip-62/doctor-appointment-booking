import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  images: {
    domains: ['randomuser.me'],  // Allow images from randomuser.me
  },
};

export default nextConfig;
