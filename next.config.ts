/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['example.com', 'another-example.com'], // Add your allowed image domains here
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://api.yourservice.com/:path*', // Proxy to Backend
      },
    ];
  },
};

module.exports = nextConfig;