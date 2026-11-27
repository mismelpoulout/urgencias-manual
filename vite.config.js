import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  // Todo el texto del manual va en un solo paquete (~210 kB comprimido)
  build: { chunkSizeWarningLimit: 1000 },
})
