import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ command }) => {
  return {
    plugins: [react()],
    base: command === 'build' ? '/TannatCO/' : '/',
    build: {
      chunkSizeWarningLimit: 1000,  // Cambiar el límite del warning (opcional)
      rollupOptions: {
        output: {
          manualChunks: {
            react: ['react', 'react-dom'],
            firebase: ['firebase/app', 'firebase/auth', 'firebase/firestore'],
            sweetalert2: ['sweetalert2'],
            // Otras librerías grandes si las usas
          }
        }
      }
    }
  }
});

