import { fileURLToPath } from 'node:url';
const nextConfig = {
  agentRules: false,
  distDir: process.env.NODE_ENV === 'production' ? '.next-build' : '.next-dev',
  outputFileTracingRoot: fileURLToPath(new URL('../../../', import.meta.url)),
  devIndicators: false,
};
export default nextConfig;
