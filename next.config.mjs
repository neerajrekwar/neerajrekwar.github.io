
/** @type {import('next').NextConfig} */
const nextConfig = {
    
    allowedDevOrigins: [
      '0.0.0.0',
      'nee-one.vercel.app',
      'https://fuzzy-waffle-74ppx6696rr2xgpp-3000.app.github.dev/',

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
  
