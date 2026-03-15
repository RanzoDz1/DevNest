/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            { protocol: "https", hostname: "**.githubusercontent.com" },
            { protocol: "https", hostname: "**.googleusercontent.com" },
            { protocol: "https", hostname: "logo.clearbit.com" },
            { protocol: "https", hostname: "www.google.com" },
            { protocol: "https", hostname: "api.dicebear.com" },
        ],
    },
}

module.exports = nextConfig
