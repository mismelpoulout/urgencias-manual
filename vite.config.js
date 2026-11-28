import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  // React, los datos y las fichas de fármacos van en paquetes separados que se cargan al inicio,
  // para que todo siga disponible aunque después se corte la conexión.
  build: {
    chunkSizeWarningLimit: 1000,
    rolldownOptions: {
      output: {
        codeSplitting: {
          groups: [
            { name: 'react', test: /node_modules/ },
            { name: 'farmacologia', test: /content\/pharmacology/ },
            // Solo datos sin componentes: no importan nada de los capítulos.
            { name: 'datos', test: /src\/content\/(algorithms\/|scores\/|drugs|interactions|combos|infusions|ecgClinical|ecgGuide)/ },
          ],
        },
      },
    },
  },
})
