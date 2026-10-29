import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: __dirname,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.ytimg.com",
      },
      {
        protocol: "https",
        hostname: "audszsghfitbfogbfjpf.supabase.co",
      },
    ],
  },
  // La URL de Vercel del lanzamiento queda apuntando al dominio oficial para no duplicar contenido en Google
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "genuino-five.vercel.app" }],
        destination: "https://www.genuinofamily.cl/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
