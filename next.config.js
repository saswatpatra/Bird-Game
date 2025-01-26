/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: "standalone",
  images: {
    domains: ["hebbkx1anhila5yf.public.blob.vercel-storage.com", "github.githubassets.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "hebbkx1anhila5yf.public.blob.vercel-storage.com",
      },
      {
        protocol: "https",
        hostname: "github.githubassets.com",
        pathname: "/images/**",
      },
    ],
  },
}

module.exports = nextConfig

