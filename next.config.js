/** @type {import('next').NextConfig} */
const nextConfig = {
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
