import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import eslintPlugin from 'vite-plugin-eslint'
import vueJsx from '@vitejs/plugin-vue-jsx'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    eslintPlugin({
      cache: false
    }),
    vueJsx({})
  ],

  extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json'],

  resolve: {
    alias: {
      '@': path.join(__dirname, 'src')
    }
  },

  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "@/styles/variables.scss";'
      }
    }
  }

  // server: {
  //   proxy: {
  //     // 选项写法
  //     '/admin': {
  //       target: 'https://shop.fed.lagou.com/api',
  //       changeOrigin: true
  //     },
  //     '/api': {
  //       target: 'https://collectionapi.metmuseum.org/public/collection/v1/',
  //       changeOrigin: true,
  //       rewrite: (path: string) => path.replace(/^\/api/, '')
  //     }
  //   }
  // }
})
