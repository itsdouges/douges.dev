const hoistMdxMeta = require('./lib/hoist-mdx-meta');
const withMDX = require('@next/mdx')({ options: { remarkPlugins: [hoistMdxMeta] } });

/** @type {import('next').NextConfig} */
module.exports = withMDX({
  reactStrictMode: true,
  pageExtensions: ['ts', 'tsx', 'mdx'],
});
