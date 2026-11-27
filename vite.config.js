import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  // El texto del manual y las fichas de fármacos van en paquetes separados que se cargan al inicio,
  // para que todo siga disponible aunque después se corte la conexión.
  build: {
    chunkSizeWarningLimit: 1000,
    rolldownOptions: { output: { codeSplitting: { groups: [{ name: 'farmacologia', test: /content\/pharmacology/ }] } } },
  },
})
