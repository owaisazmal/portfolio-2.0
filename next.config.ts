/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        unoptimized: true, // required for static hosting platforms like GitHub Pages
    },
};

module.exports = nextConfig;
