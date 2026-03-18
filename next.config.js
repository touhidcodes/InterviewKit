const isProd = process.env.NODE_ENV === 'production';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // Change 'interviewkit' to match your GitHub repo name
  basePath: isProd ? '/interviewkit' : '',
  assetPrefix: isProd ? '/interviewkit' : '',
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
