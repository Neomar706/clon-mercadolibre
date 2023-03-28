import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    'process.env': {
      NODE_ENV: 'production',
      HOST: 'https://clon-mercadolibre.up.railway.app',
      BACKEND_HOST: 'https://clon-mercadolibre-api.up.railway.app'
    }
  }
})
