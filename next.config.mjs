
/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'standalone',
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'images.unsplash.com',
          pathname: '**',
        },
        {
          protocol: 'https',
          hostname: 'plus.unsplash.com',
          pathname: '**',
        },
        {
          protocol: 'https',
          hostname: '3000-firebase-neerajrekwar-1765735531609.cluster-htdgsbmflbdmov5xrjithceibm.cloudworkstations.dev',
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
  