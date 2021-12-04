import {defineConfig} from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? '/blue-template/' : '/',
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
        math: 'always'
      }
    },
  },
  plugins: [vue()]
});
