/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.jimphicdesigns.com',
      },
      {
        protocol: 'https',
        hostname: 'images6.alphacoders.com',
      },
      {
        protocol: 'https',
        hostname: 'cdn.dribbble.com',
      },
    ],
  },
};

export default nextConfig;
