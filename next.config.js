const hoistMdxMeta = require('./lib/remark-hoist-mdx-meta');
const readTime = require('./lib/remark-read-time');
const withMDX = require('@next/mdx')({ options: { remarkPlugins: [readTime, hoistMdxMeta] } });

/** @type {import('next').NextConfig} */
module.exports = withMDX({
  reactStrictMode: true,
  pageExtensions: ['ts', 'tsx', 'mdx'],
  images: {
    domains: ['i.pravatar.cc'],
  },
});
