   /** @type {import('next').NextConfig} */
   const nextConfig = {
     output: 'standalone',
     images: {
       unoptimized: true
     },
     typescript: {
       ignoreBuildErrors: true
     },
     eslint: {
       ignoreDuringBuilds: true
     },
     experimental: {
       optimizeCss: true
     },
     webpack: (config) => {
       config.resolve.fallback = { fs: false, path: false };
       return config;
     }
   }

   module.exports = nextConfig
