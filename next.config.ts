/** @type {import('next').NextConfig} */
//const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
    output: 'export',
    basePath: '/portfolio-2.0-main',
    assetPrefix: '/portfolio-2.0-main/',
    images: {
        unoptimized: true,
    },
};

module.exports = nextConfig;
