
/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'standalone',
    allowedDevOrigins: [
      '3000-firebase-neerajrekwar-1779358485057.cluster-cz5nqyh5nreq6ua6gaqd7okl7o.cloudworkstations.dev',
      'https://nee-one.vercel.app'
    ],
    images: {
      unoptimized: true,
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'images.unsplash.com',
          pathname: '**',
        },
        {
          protocol: 'https',
          hostname: 'res.cloudinary.com',
          pathname: '**',
        },
        {
          protocol: 'https',
          hostname: 'plus.unsplash.com',
          pathname: '**',
        },
        {
          protocol: 'https',
          hostname: '3000-firebase-neerajrekwar-1778441261450.cluster-m7dwy2bmizezqukxkuxd55k5ka.cloudworkstations.dev',
          pathname: '**',
        },
        {
          protocol: 'https',
          hostname: 'api.dicebear.com',
          pathname: '**',
        },
        {
          protocol: 'https',
          hostname: 'miro.medium.com',
          pathname: '**',
        },
      ],
    },
    webpack: (config) => {
      config.cache = false;
      return config;
    },
    turbopack: {},
  };
  
  export default nextConfig;
  
