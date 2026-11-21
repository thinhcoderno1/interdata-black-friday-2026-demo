import type { NextConfig } from "next";

const config: NextConfig = {
  poweredByHeader: false,
  devIndicators: false,
  trailingSlash: true,
  outputFileTracingRoot: process.cwd(),
  turbopack: { root: process.cwd() },
};

export default config;
