/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    i18n: {
        locales: ["en"],
        defaultLocale: "en",
    },
    images: {
        domains: ["images.pexels.com", "cdn-images.farfetch-contents.com", "https://burst.shopifycdn.com/"],
    },
};

module.exports = nextConfig;
