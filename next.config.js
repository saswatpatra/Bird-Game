/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'standalone',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'v0.blob.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'github.githubassets.com',
        pathname: '/images/**',
      }
    ],
  },
  // Uncomment and modify the following line if you're deploying to a subdirectory
  // basePath: '/bird-game',
}

module.exports = nextConfig

