/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: {
    // Force the root so Next.js does not pick the upper workspace yarn.lock
    root: __dirname,
  },
  webpack: (config, { isServer }) => {
    // Ignore node_modules binaries and non-JS files in production builds
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        net: false,
        tls: false,
      };
    }
    
    return config;
  },
};

module.exports = nextConfig;
