/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ["article-website-images.s3.amazonaws.com","img.youtube.com"],
        formats: ["image/avif","image/webp"],
    },
}

module.exports = nextConfig
