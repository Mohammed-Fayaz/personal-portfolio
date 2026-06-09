/** @type {import('next').NextConfig} */
const nextConfig = {
  cacheComponents: true,
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
