/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,
  reactStrictMode: true,

  images: {
    localPatterns: [
      {
      pathname: '/**',   // Allows everything under root (including /_next/static/media/**)
    },
    ],
  },
};

export default nextConfig;