/**
 * @file lib mode
 */

import {defineConfig} from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';
import copy from 'rollup-plugin-copy';
import eslint from 'vite-plugin-eslint';

export default defineConfig(({mode}) => ({
  base: mode === 'lib' ? '/blue-template/' : '/',
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
    }),
    copy({
      targets: [
        {src: 'lib/index.html', dest: 'dist'}
      ],
      hook: 'writeBundle'
    })
  ],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'lib/index.ts'),
      name: 'blue',
      formats: ['es', 'cjs', 'umd', 'iife'],
      fileName: (format: string) => `blue.${format}.js`
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          'vue': 'Vue'
        }
      }
    }
  },
}));
