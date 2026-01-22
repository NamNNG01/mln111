// /vite.config.js
import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  root: '.',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        index: resolve(__dirname, 'index.html'),
        'khai-niem': resolve(__dirname, 'khai-niem.html'),
        'cac-cap-do': resolve(__dirname, 'cac-cap-do.html'),
        'nguon-goc': resolve(__dirname, 'nguon-goc.html'),
        'sai-lam': resolve(__dirname, 'sai-lam.html'),
        'vai-tro-thuc-tien': resolve(__dirname, 'vai-tro-thuc-tien.html'),
        'quiz': resolve(__dirname, 'quiz.html'),
      },
    },
  },
});
