const isProd = process.env.NODE_ENV === 'production';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // Use basePath only for clean deployment
  basePath: isProd ? '/InterviewKit' : '',
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
