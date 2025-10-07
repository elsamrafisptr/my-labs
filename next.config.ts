import type { NextConfig } from 'next'

import withBundleAnalyzer from '@next/bundle-analyzer'

const baseConfig: NextConfig = {
  output: 'export',
  reactStrictMode: true,
  poweredByHeader: false,
  transpilePackages: ['next-mdx-remote'],
  serverExternalPackages: [],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ik.imagekit.io',
        port: ''
      },
      {
        protocol: 'https',
        hostname: 'skillicons.dev',
        port: ''
      }
    ],
    unoptimized: true
  },
  turbopack: {
    resolveAlias: {
      underscore: 'lodash'
    },
    resolveExtensions: ['.mdx', '.tsx', '.ts', '.jsx', '.js', '.json']
  },
  experimental: {
    optimizeCss: false,
    turbopackMinify: true,
    turbopackTreeShaking: false,
    optimisticClientCache: false,
    optimizeServerReact: false,
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
