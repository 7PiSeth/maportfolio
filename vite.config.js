import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/maportfolio/', // Matches the "homepage" field in package.json
  server: {
    port: 3000,
    open: true,
  },
  build: {
    outDir: 'build', // Matches CRA's default build directory
  },
});
