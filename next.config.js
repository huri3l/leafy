/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: [{ loader: '@svgr/webpack', options: { icon: true } }],
    });
    return config;
  },
  images: {
    domains: ['images.prismic.io', 'i.imgur.com'],
  },

  async rewrites() {
    return [
      {
        source: '/produto/:slug',
        destination: '/product/:slug',
      },
      {
        source: '/categoria/:slug',
        destination: '/category/:slug',
      },
    ];
  },
};

module.exports = nextConfig;
