/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    experimental: {
        optimizePackageImports: ["@heroui/react", "@heroui/theme", "@heroui/system"]
    }
};

module.exports = nextConfig;
