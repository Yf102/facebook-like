/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    const API = process.env.NEXT_PUBLIC_API;
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
