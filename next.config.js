/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    reactStrictMode: true,
    styledComponents: true,
  },
  images: {
    domains: ['*'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'oaidalleapiprodscus.blob.core.windows.net',
        port: '',
        pathname: '/private/org-uq9DTCD21oHszeo5Vo4PCiCC/user-sHeLdfm7fa3rDfHCMzg1mWSj/**',
      },
    ],
  },
};

module.exports = nextConfig;
