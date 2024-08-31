/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
      remotePatterns: [
          {
              protocol: 'https',
              hostname: 'images.unsplash.com',
              pathname: '**',
          },
      ],
  },
  webpack: (config) => {
    config.cache = false;
    return config;
},
};

export default nextConfig;

