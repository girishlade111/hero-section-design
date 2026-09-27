/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/hero-section-design',
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig