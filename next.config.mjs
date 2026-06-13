/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      // Autorise les images hébergées sur Turo (utile si vous collez des URLs de photos Turo)
      { protocol: "https", hostname: "**.turo.com" },
      { protocol: "https", hostname: "images.unsplash.com" },
    ],
  },
};

export default nextConfig;
