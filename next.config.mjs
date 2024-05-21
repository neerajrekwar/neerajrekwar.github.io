/** @type {import('next').NextConfig} */
const nextConfig = {
    Output: 'export',
};
const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  basePath: isProd ? '/neerajrekwar.github.io' : '',
  assetPrefix: isProd ? '/neerajrekwar.github.io/' : '',
};

export default nextConfig;
