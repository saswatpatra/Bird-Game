/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'export',  // This enables static export
  // Uncomment and modify the following line if you're deploying to a subdirectory
  // basePath: '/bird-game',
}

module.exports = nextConfig

