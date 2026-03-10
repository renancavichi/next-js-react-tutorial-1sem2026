/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  images: {
    remotePatterns: [new URL("https://github.com/renancavichi.png")],
  },
};

export default nextConfig;
