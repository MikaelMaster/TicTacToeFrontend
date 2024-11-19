import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    BACKEND_URL: 'http://localhost:8081',
  }
};

export default nextConfig;