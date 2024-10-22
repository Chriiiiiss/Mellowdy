import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { TanStackRouterVite } from '@tanstack/router-plugin/vite';
import process from 'process';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Workearound for CORS issue, get this out for production
  const env = loadEnv(mode, process.cwd());

  return {
    base: '/',
    plugins: [react(), TanStackRouterVite(), svgr()],
    preview: {
      port: 3001,
      strictPort: true,
    },
    server: {
      port: 3001,
      strictPort: true,
      host: true,
      origin: 'http://localhost:3001',
      proxy: {
        '/v1': {
          target: env.VITE_API_URL,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/v1/, '/v1'),
        },
      },
    },
  };
});
