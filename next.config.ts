import type { NextConfig } from 'next'

import withBundleAnalyzer from '@next/bundle-analyzer'

const baseConfig: NextConfig = {
  output: 'export',
  reactStrictMode: true,
  poweredByHeader: false,
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
    optimisticClientCache: true,
    webpackMemoryOptimizations: true,
    turbopackRemoveUnusedExports: true,
    optimizePackageImports: ['motion', 'lucide-react', 'react', 'react-dom'],
    serverMinification: false
  }
}

const withAnalyzers = withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true'
})

const nextConfig = withAnalyzers(baseConfig)

export default nextConfig
