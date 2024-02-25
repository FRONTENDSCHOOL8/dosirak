import path from 'node:path';
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from '@svgr/rollup';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  server: {
    open: true,
  },
  resolve: {
    alias: { '@': path.resolve(__dirname, './src') },
  },
})
