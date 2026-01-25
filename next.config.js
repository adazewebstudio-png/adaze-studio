/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,


    // Optimize images
    images: {
        formats: ['image/avif', 'image/webp'],
        minimumCacheTTL: 60 * 60 * 24 * 30, // 30 days cache
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '**.supabase.co',
                pathname: '/storage/**',
            },
            {
                protocol: 'https',
                hostname: 'cdn.sanity.io',
                pathname: '/images/**',
            },
        ],
    },

    // Experimental performance features
    experimental: {
        optimizeCss: process.env.NODE_ENV === 'production',
    },
};

module.exports = nextConfig;
