// client/next.config.ts

import type { NextConfig } from "next";
import path from "path";


// Next.js configuration
const nextConfig: NextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  turbopack: {
    // 👇 Explicitly tell Turbopack that the root of this app
    // is the `client` directory (where this file lives)
    root: path.join(__dirname),
  },
};

export default nextConfig;
