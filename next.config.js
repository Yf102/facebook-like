/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    formats: ["image/webp"],
    minimumCacheTTL: 60, // Do not cache nextjs images on nodejs for too long (cloudflare will cache them)
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
