import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
    include: ['@emotion/react', '@emotion/styled', '@excalidraw/excalidraw', '@mui/material', 'gif.js', 'idb-keyval', 'react', 'react-colorful', 'react-dom', 'zustand'],
  },
  define: {
    // Required for Excalidraw
    "process.env": {
      NODE_ENV: JSON.stringify(process.env.NODE_ENV || "development"),
    },
  },
});
