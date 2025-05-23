/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    basePath: '/portfolio-2.0-main',
    assetPrefix: '/portfolio-2.0-main/',
    images: {
        unoptimized: true,
    },
};

module.exports = nextConfig;
