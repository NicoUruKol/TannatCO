import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  return {
    plugins: [react()],
    // Si el modo es "github", usamos /TannatCO/, sino /
    base: mode === 'github' ? '/TannatCO/' : '/',
    build: {
      chunkSizeWarningLimit: 1000,
      rollupOptions: {
        output: {
          manualChunks: {
            react: ['react', 'react-dom'],
            firebase: ['firebase/app', 'firebase/auth', 'firebase/firestore'],
            sweetalert2: ['sweetalert2'],
          }
        }
      }
    }
  }
});

