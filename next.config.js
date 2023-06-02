/** @type {import('next').NextConfig} */

const path = require('path')
const Dotenv = require('dotenv-webpack')

const config = {
  webpack: (config) => {
    // svgr
    const fileLoaderRule = config.module.rules.find((rule) => rule.test?.test?.('.svg'))

    config.module.rules.push(
      {
        ...fileLoaderRule,
        test: /\.svg$/i,
        resourceQuery: /url/,
      },
      {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        resourceQuery: { not: /url/ },
        use: ['@svgr/webpack'],
      }
    )

    fileLoaderRule.exclude = /\.svg$/i

    // Read the .env file
    config.plugins.push(
      new Dotenv({
        path: path.join(__dirname, '.env'),
        systemvars: true,
      })
    )
    return config
  },

  eslint: {
    ignoreDuringBuilds: true,
  },

  compiler: {
    emotion: true,
  },

  pageExtensions: ['page.tsx', 'page.ts'],
}

module.exports = config
