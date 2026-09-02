import { withPayload } from "@payloadcms/next/withPayload";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Redirects for legacy URLs
  async redirects() {
    return [
      {
        source: "/donate",
        destination: "/spenden",
        permanent: true,
      },
    ];
  },
  // Note: Do not use Turbopack (--turbo flag) as it has compatibility issues 
  // with Payload CMS's esbuild and drizzle-kit modules
  // Exclude problematic packages from server bundling
  serverExternalPackages: [
    "esbuild",
    "@esbuild/darwin-arm64",
    "drizzle-kit",
    "esbuild-register",
  ],
  // Webpack configuration for non-Turbopack builds
  webpack: (config, { isServer }) => {
    if (isServer) {
      config.externals = config.externals || [];
      config.externals.push({
        esbuild: "commonjs esbuild",
        "drizzle-kit": "commonjs drizzle-kit",
      });
    }
    return config;
  },
};

export default withPayload(nextConfig);
