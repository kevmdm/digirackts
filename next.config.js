/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Important: return the modified config
    config.experiments.asyncWebAssembly = true;
    config.module.exprContextCritical = false;
    return config;
  },
  images: {
    domains: ['ipfs.io', 'ipfs.blockfrost.dev'],
  },
}

module.exports = nextConfig
