/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{ protocol: "https", hostname: "api.classbon.com" }],
  },
};

export default nextConfig;
