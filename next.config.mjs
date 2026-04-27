/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    config.optimization = {
      ...config.optimization,
      moduleIds: 'deterministic',
    };
    return config;
  },
};

export default nextConfig;

