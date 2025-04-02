import type { NextConfig } from "next";

const isGithubPages = process.env.NODE_ENV === "production";
const basePath = isGithubPages ? "/smart-downloader-frontend" : "";

const nextConfig: NextConfig = {
  output: "export",
  distDir: "dist",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
  assetPrefix: basePath,
  basePath: basePath,
};

module.exports.basePath = basePath;
export default nextConfig;
