/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  swcMinify: true,
  /**
   * Ref: https://lucide.dev/guide/packages/lucide-react
   * ...dynamic import, be careful to integrate this into the app...
   * ...it makes the speed of compiling extremely slow...
   * ...so try to avoid this while the app is still being developed...
   */
  // transpilePackages: ['lucide-react']
};

module.exports = nextConfig;
