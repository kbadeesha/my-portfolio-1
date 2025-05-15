import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";
const nextConfig: NextConfig = {
  basePath: isProd ? "/my-portfolio-1" : "",
  output: "export",
  distDir: "out",
  images: {
    unoptimized: true,
    domains: ["postimg.cc", "i.postimg.cc"],
  },
  /* config options here */
  assetPrefix: isProd ? "/my-portfolio-1" : "",
};

export default nextConfig;
