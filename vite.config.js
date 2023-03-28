import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    'process.env': {
      NODE_ENV: 'development',
      HOST: 'https://clon-mercadolibre-production.up.railway.app/',
      BACKEND_HOST: 'https://clon-mercadolibre-api-production.up.railway.app'
    }
  }
})
