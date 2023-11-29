const withNextIntl = require('next-intl/plugin')()
const withSvgr = require('@newhighsco/next-plugin-svgr')
const withPWA = require('@ducanh2912/next-pwa').default({
  dest: 'public'
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true
}

const configWithSvgr = withSvgr({
  ...nextConfig,
  svgrOptions: {
    dimensions: false
  }
})

module.exports = withNextIntl(withPWA(configWithSvgr))
