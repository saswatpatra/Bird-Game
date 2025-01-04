/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // Ensure images from GitHub are allowed
  images: {
    domains: ['github.githubassets.com'],
  },
}

module.exports = nextConfig

