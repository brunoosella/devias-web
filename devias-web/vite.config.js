import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      Assets: path.resolve(__dirname, 'src/Assets'),
      Components: path.resolve(__dirname, 'src/Components'),
      Router: path.resolve(__dirname, 'src/Router'),
      Screens: path.resolve(__dirname, 'src/Screens')
    }
  },
  build: {
    assetsDir: 'assets'
  }
})
