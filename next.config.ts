import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    BACKEND_URL: 'http://localhost:8081',
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/join',
        permanent: true
      },
    ];
  },
};

export default nextConfig;