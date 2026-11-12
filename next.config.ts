import type { NextConfig } from 'next'
import createNextIntlPlugin from 'next-intl/plugin'

const nextConfig: NextConfig = {
  typedRoutes: true,
  devIndicators: false,
  cacheComponents: true,
  partialPrefetching: true,
  reactCompiler: true,
  allowedDevOrigins: ['*.ouicu.app'],
  images: {
    unoptimized: true,
    qualities: [75, 100],
  },
  experimental: {
    typedEnv: true,
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  turbopack: {
    rules: {
      '*.css': {
        loaders: ['@tailwindcss/turbopack'],
        as: '*.css',
      },
    },
  },
  transpilePackages: ['@teispace/next-themes'],
}

const withNextIntl = createNextIntlPlugin()

export default withNextIntl(nextConfig)
