import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import { defineConfig } from 'vite'

const root = import.meta.dirname

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': resolve(root, 'resources/js'),
    },
  },
  build: {
    rollupOptions: {
      input: resolve(root, 'resources/app.ts'),
    },
  },
})
