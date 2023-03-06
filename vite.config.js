import react from '@vitejs/plugin-react';
import path from 'path';

const ROOT_DIR = path.resolve(__dirname, './');
const SRC_DIR = path.resolve(__dirname, './src');
const BUILD_DIR = path.resolve(__dirname, './build');
const PUBLIC_DIR = path.resolve(__dirname, './public');

export default {
  plugins: [
    react(),
  ],
  root: ROOT_DIR,
  base: '',
  publicDir: PUBLIC_DIR,
  build: {
    minify: 'terser',
    outDir: BUILD_DIR,
    assetsInlineLimit: 0,
    emptyOutDir: true,
    rollupOptions: {
      treeshake: false,
    },
  },
  resolve: {
    alias: {
      '@': SRC_DIR,
    },
  },
  server: {
    host: true,
    open: true,
  },
}

