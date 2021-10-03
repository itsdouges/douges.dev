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

  webpack(config, options) {
    const { isServer } = options;
    config.module.rules.push({
      test: /\.(ogg|mp3|wav|m4a|mpe?g)$/i,
      exclude: config.exclude,
      use: [
        {
          loader: require.resolve('file-loader'),
          options: {
            publicPath: '/_next/static/audio/',
            outputPath: `${isServer ? '../' : ''}static/audio/`,
            name: '[name]-[hash].[ext]',
            esModule: !!config.esModule,
          },
        },
      ],
    });

    return config;
  },
});
