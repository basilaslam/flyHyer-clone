const { hostname } = require('os')

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: 'images.unsplash.com'
            },
            {
                hostname: 'www.datocms-assets.com'
            }
        ]
    }
}

module.exports = nextConfig
