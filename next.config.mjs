
/** @type {import('next').NextConfig} */
const nextConfig = {
    allowedDevOrigins: [
      '3000-firebase-neerajrekwar-1778786240989.cluster-bqwaigqtxbeautecnatk4o6ynk.cloudworkstations.dev'
    ],
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
    async headers() {
      return [
        {
          // Matches all API routes
          source: "/api/:path*",
          headers: [
            { key: "Access-Control-Allow-Credentials", value: "true" },
            { key: "Access-Control-Allow-Origin", value: "*" }, // Change * to your specific domain (e.g., 'https://neerajrekwar.github.io') for better security
            { key: "Access-Control-Allow-Methods", value: "GET,DELETE,PATCH,POST,PUT,OPTIONS" },
            { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" },
          ]
        }
      ]
    },
    async rewrites() {
      return [
        {
          source: "/api/external-posts",
          destination: "https://nee-one.vercel.app/api",
        },
        {
          source: "/api/external-articles",
          destination: "https://nee-one.vercel.app/api/articles",
        },
      ];
    },
    webpack: (config) => {
      config.cache = false;
      return config;
    },
    turbopack: {},
  };
  
  export default nextConfig;
  