/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "utfs.io",
        },
        {
          protocol: "https",
          hostname: "lh3.googleusercontent.com",
        },
        {
          protocol: "https",
          hostname: "tse3.mm.bing.net",
        },
        {
            protocol:"https",
            hostname:"img.clerk.com"
        }
      ],
    },
    eslint: {
      ignoreDuringBuilds: true,
    },
  };
  
  export default nextConfig;