/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // Ensures static export
  images: {
    domains: ['images.unsplash.com'],
  },
  webpack: (config) => {
    config.cache = false;
    return config;
  },
};

export default nextConfig;
