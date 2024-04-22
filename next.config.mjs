/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    async redirects() {
        return [
          {
            source: "/",
            destination: "/dashboard",
            permanent: true,
          },
        ];
      },
      images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'services.swpc.noaa.gov',
            port: '',
            pathname: '/images/animations/ovation/**',
          },
        ],
      },
    
};

export default nextConfig;
