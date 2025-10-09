import type { NextConfig } from 'next'

import withBundleAnalyzer from '@next/bundle-analyzer'

const baseConfig: NextConfig = {
  output: 'export',
  reactStrictMode: true,
  poweredByHeader: false,
  transpilePackages: ['next-mdx-remote'],
  serverExternalPackages: [],
  images: {
    unoptimized: true
  },
  turbopack: {
    resolveAlias: {
      underscore: 'lodash'
    },
    resolveExtensions: ['.mdx', '.tsx', '.ts', '.jsx', '.js', '.json']
  },
  experimental: {
    turbopackMinify: true,
    optimizePackageImports: [
      'framer-motion',
      'next-mdx-remote',
      'lucide-react',
      'react',
      'react-dom'
    ],
    serverMinification: false
  }
}

const withAnalyzers = withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true'
})

const nextConfig = withAnalyzers(baseConfig)

export default nextConfig
