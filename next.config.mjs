import path from "path";

/** @type {import('next').NextConfig} */
const nextConfig = {
    trailingSlash: true,
    images: {
        unoptimized: true
    },
    output: "export",
    turbopack: {
        root: path.resolve(process.cwd()),
    },
};

export default nextConfig;
