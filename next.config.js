/** @type {import('next').NextConfig} */
const nextConfig = {
  cacheComponents: true,
  turbopack: { root: __dirname },
  outputFileTracingRoot: __dirname,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "projecteuler.net",
        port: "",
        pathname: "**",
      },
    ],
  },
};

module.exports = nextConfig;
