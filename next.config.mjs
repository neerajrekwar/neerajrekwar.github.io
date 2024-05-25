/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
  swcMinify:true,
  images:{
    remotePatterns:[
      {
        hostname:'plus.unsplash.com'
      },
      {
        hostname:'images.unsplash.com'
      }
    ]
  }
};

export default nextConfig;
