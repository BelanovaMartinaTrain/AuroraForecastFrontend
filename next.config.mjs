/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "services.swpc.noaa.gov",
                pathname: '/images/**',
            }
        ],
    }
};

export default nextConfig;
