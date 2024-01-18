import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'

import { resolve } from 'path'
const pathResolve = dir => resolve(__dirname, dir) // 指定解析路径

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      imports: ['vue', 'vue-router'],
    }),
    Components(),
  ],
  resolve: {
    alias: {
      '@': pathResolve('./src'),
    },
  },
})
