/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    reactStrictMode: true,
    images: {
        unoptimized: true,
    },
    experimental: {
        optimizePackageImports: ["@heroui/react", "@heroui/theme", "@heroui/system"]
    }
};

module.exports = nextConfig;
