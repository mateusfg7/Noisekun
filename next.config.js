const withSvgr = require('@newhighsco/next-plugin-svgr')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true
}

module.exports = withSvgr({
  ...nextConfig,
  svgrOptions: {
    dimensions: false
  }
})
