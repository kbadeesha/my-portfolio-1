import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";
const nextConfig: NextConfig = {
  basePath: isProd ? "/my-portfolio-1" : "",
  output: "export",
  distDir: "dist",
  images: {
    unoptimized: true,
  },
  /* config options here */
};

export default nextConfig;
