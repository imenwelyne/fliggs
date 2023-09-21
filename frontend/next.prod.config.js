
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      { 
        protocol: 'https',
        hostname: 'images.pexels.com',
      },
      {
        protocol: 'https',
        hostname: 'api.fliggs.com',
      }
    ],
  },
  async rewrites() {
    return [
      {
        source: '/fonts/:path*',
        destination: '/_next/static/fonts/:path*',
      },
    ];
  },
}

module.exports = nextConfig