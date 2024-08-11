/** @type {import('next').NextConfig} */


const nextConfig = {
  images: {
    domains: ['images.unsplash.com'],
  },
  webpack: (config) => {
    config.cache = false;
    return config;
  },
  
};

export default nextConfig;
