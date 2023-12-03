/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    formats: ["image/webp"],
    minimumCacheTTL: 3600,
    domains: ["picsum.photos"],
  },
  async rewrites() {
    const API = process.env.API;
    console.log(`Proxy created: /api -> : ${API}`);
    return [
      {
        source: "/api/:slug*",
        destination: `${API}/api/:slug*`,
      },
    ];
  },
};

module.exports = nextConfig;
