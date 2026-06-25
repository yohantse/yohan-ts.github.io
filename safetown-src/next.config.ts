import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/safetown",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
