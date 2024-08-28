/** @type {import('next').NextConfig} */

const nextConfig = {
  
  images: {
    domains: ['images.unsplash.com'],  // Allow images from specific domains
  },
  webpack: (config) => {
    config.cache = false;  // Disable cache for webpack builds
    return config;
  },
};

export default nextConfig;
