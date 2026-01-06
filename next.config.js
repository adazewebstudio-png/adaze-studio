/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,

    // Optimize images
    images: {
        formats: ['image/avif', 'image/webp'],
        minimumCacheTTL: 60 * 60 * 24 * 30, // 30 days cache
    },

    // Experimental performance features
    experimental: {
        optimizeCss: true,
    },
};

module.exports = nextConfig;
