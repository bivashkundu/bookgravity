import { NextConfig } from 'next';
import path from 'path';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  transpilePackages: ['@repo/mui-theme', '@repo/shared-ui'],
  trailingSlash: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  // images: {
  //   remotePatterns:[]
  // },
  compress: true,
  devIndicators: {
    position: 'bottom-right',
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  productionBrowserSourceMaps: false,
  env: {
    NEXT_APP_BASE_URL: process.env.NEXT_APP_BASE_URL?.trim() || 'http://localhost:5000',
    NEXT_APP_TOKEN_NAME: process.env.NEXT_APP_TOKEN_NAME || 'bookgravity_admin_token',
  },
};
export default nextConfig;
