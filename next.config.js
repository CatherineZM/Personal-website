/** @type {import('next').NextConfig} */

const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true'
});

// const i18nConfig = {
//     locales: ['en', 'zh'],
//     defaultLocale: 'en',
// };

const nextConfig = withBundleAnalyzer({
    output: process.env.EXPORT_MODE === 'true' ? 'export' : undefined,
    experimental: {
        optimizePackageImports: [
            'framer-motion',
        ]
    },
    images: {
        remotePatterns: [
            {
                hostname: 'res.cloudinary.com'
            }
        ]
    },
    async rewrites() {
        const rewrites = [
            { source: '/', destination: '/en' },
            { source: '/en/:path*', destination: '/en/:path*' },
            { source: '/zh/:path*', destination: '/zh/:path*' }
        ]
        return rewrites;
    },
});

module.exports = nextConfig;