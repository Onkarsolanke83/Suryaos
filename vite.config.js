import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  loadEnv(mode, process.cwd(), '');
  const apiProxyTarget = 'http://localhost:4000';

  return {
    plugins: [react()],
    server: {
      port: 3000,
      strictPort: true,
      host: 'localhost',
      open: true,
      proxy: {
        '/api': {
          target: apiProxyTarget,
          changeOrigin: true
        }
      }
    }
  };
});
