/** @type {import('next').NextConfig} */

const nextConfig = {
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