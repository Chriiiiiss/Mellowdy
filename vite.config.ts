import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { TanStackRouterVite } from '@tanstack/router-plugin/vite';

import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig(() => {
  // Workearound for CORS issue, get this out for production

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
    },
  };
});
