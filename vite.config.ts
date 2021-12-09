import {defineConfig} from 'vite';
import vue from '@vitejs/plugin-vue';
import eslint from 'vite-plugin-eslint';

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
  plugins: [
    vue(),
    eslint({
      cache: false,
      fix: false,
      // eslint范围与ts一致
      include: [
        "src/**/*.ts",
        "src/**/*.d.ts",
        "src/**/*.tsx",
        "src/**/*.vue",
        "lib/**/*.ts",
        "lib/**/*.d.ts",
        "lib/**/*.tsx",
        "lib/**/*.vue"
      ]
    })
  ]
});
