/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  modularizeImports: {
    '@mui/material': {
      transform: '@mui/material/{{member}}'
    }
  },
  experimental: {
    appDir: true,
    esmExternals: 'loose'
  }
};

export default nextConfig;
