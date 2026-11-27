# Manual de Urgencias

Versión React + Tailwind CSS (Vite) del manual originalmente publicado como un único archivo HTML.

```bash
npm install
npm run dev       # desarrollo en http://localhost:5173
npm run build     # versión de producción en dist/
npm run preview   # sirve dist/ localmente
```

## Estructura

```
src/
  content/
    chapters/        un componente por capítulo (aquí se edita el texto)
    index.js         títulos y secciones: índice, tarjetas, buscador y navegación
  components/
    layout/          barra superior, portada, índice lateral, pie, impresión
    search/          buscador
    content/         secciones, avisos, tablas, flujos, ECG, imágenes
    calculators/     dosis de intubación rápida y sodio
  lib/               trazados ECG, búsqueda y resaltado
  styles/            tema Tailwind, tipografía del libro e impresión
```

Al agregar o renombrar una sección, actualizar también `src/content/index.js`.
Si se agregan tablas, trazados o imágenes, actualizar `bookStats` en el mismo archivo.
## Diseño responsivo

Las tablas usan `<Table>` con `<thead>` y `<tbody>`. Cuando disponen de menos de 640 px,
cada fila se muestra como una ficha con el nombre de la columna sobre cada valor;
las etiquetas se toman del encabezado, no hay que escribirlas.
