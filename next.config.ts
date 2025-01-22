import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: "/dying-to-meet-you",
  output: "export",  // <=== enables static exports
  reactStrictMode: true,
};

export default nextConfig;
