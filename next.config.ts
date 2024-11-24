// next.config.ts

/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    BACKEND_URL: 'http://localhost:8081',
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
      {
        protocol: 'http',
        hostname: '**',
      },
    ],
  },
  i18n: {
    locales: ['en', 'pt'],
    defaultLocale: 'en',
    localeDetection: true
  },
  reactStrictMode: true,
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

module.exports = nextConfig;