import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Keep SSR enabled for better SEO and performance
  // Remove output: 'export' to enable server-side rendering
  
  // SEO and performance optimizations
  experimental: {
    optimizePackageImports: ['@/components', '@/lib'],
  },
  
  // Compiler options for better optimization
  compiler: {
    // Remove console.log statements in production
    removeConsole: process.env.NODE_ENV === 'production',
  },
  
  // Image optimization (keep enabled for SSR)
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  
  // Enable modern features
  poweredByHeader: false,
};

export default nextConfig;
