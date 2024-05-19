/** @type {import('next').NextConfig} */
const nextConfig = {
    distDir: './dist',
    reactStrictMode: true,
    typescript: {
        ignoreBuildErrors: true,
    },
    eslint: {
        ignoreDuringBuilds: true,
    },

}

export default nextConfig;