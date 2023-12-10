/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    reactStrictMode: true,
    styledComponents: true,
  },
  images: {
    // domains: ['*'],
    remotePatterns: [
      {
        protocol: '*',
        hostname: '*',
        port: '',
        pathname: '/private/org-uq9DTCD21oHszeo5Vo4PCiCC/user-sHeLdfm7fa3rDfHCMzg1mWSj/**',
      },
    ],
  },
};

module.exports = nextConfig;
