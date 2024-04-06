/** @type {import('next').NextConfig} */
const nextConfig = {
  headers: async () => [
    {
      basePath: "/",
      headers: [
        {
          key: "Cache-Control",
          value: "no-store",
        },
      ],
    },
  ],
};

export default nextConfig;
