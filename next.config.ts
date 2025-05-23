/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
    output: 'export',
    basePath: isProd ? '/portfolio-2.0-main' : '',
    assetPrefix: isProd ? '/portfolio-2.0-main/' : '',
    images: {
        unoptimized: true,
    },
};

module.exports = nextConfig;
