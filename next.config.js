const isProd = process.env.NODE_ENV === 'production';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // Match the casing of your GitHub repo name 'InterviewKit'
  basePath: isProd ? '/InterviewKit' : '',
  assetPrefix: isProd ? '/InterviewKit' : '',
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
