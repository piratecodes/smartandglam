const runtimeCaching = require("next-pwa/cache");

const withPWA = require('next-pwa')({
    dest: 'public',
    disable: process.env.NODE_ENV === 'development',
    register: true,
    skipWaiting: true,
    runtimeCaching,
    buildExcludes: [/middleware-manifest.webmanifest$/],
    scope: '/',
    sw: 'service-worker.js',
})


const securityHeaders = [
    {
        key: 'X-DNS-Prefetch-Control',
        value: 'on'
    },
    {
        key: 'Strict-Transport-Security',
        value: 'max-age=63072000; includeSubDomains; preload'
    },
    {
        key: 'X-XSS-Protection',
        value: '1; mode=block'
    },
    {
        key: 'X-Frame-Options',
        value: 'SAMEORIGIN'
    },
    {
        key: 'Permissions-Policy',
        value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()'
    },
    {
        key: 'X-Content-Type-Options',
        value: 'nosniff'
    },
    { "key": "Access-Control-Allow-Credentials", "value": "true" }, { "key": "Access-Control-Allow-Origin", "value": "*" },  { "key": "Access-Control-Allow-Methods", "value": "GET,OPTIONS,PATCH,DELETE,POST,PUT" },
    {
        "key": "Access-Control-Allow-Headers",
        "value": "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version"
    }
]


/** @type {import('next').NextConfig} */
module.exports = withPWA(
        {
            async headers() {
                return [
                    {
                        source: '/(.*)',
                        headers: securityHeaders,
                    },
                ]
            },
            reactStrictMode: true,
            swcMinify: true,
            productionBrowserSourceMaps: true,
            useFileSystemPublicRoutes: true,
            poweredByHeader: false,
            images: {
                remotePatterns: [{hostname: "localhost" }, {hostname: "cdn-icons-png.flaticon.com"}, {hostname: "www.facebook.com"}],
            },
        })
