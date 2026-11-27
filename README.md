# Manual de Urgencias

Versión React + Tailwind CSS (Vite) del manual originalmente publicado como un único archivo HTML.

```bash
npm install
npm run dev       # desarrollo en http://localhost:5173
npm run build     # versión de producción en dist/
npm run preview   # sirve dist/ localmente
npm test          # pruebas de calculadoras, búsqueda y trazados
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
  lib/               cálculo de dosis y sodio, trazados ECG, búsqueda y resaltado
tests/               pruebas (node --test)
  styles/            tema Tailwind, tipografía del libro e impresión
```

Al agregar o renombrar una sección, actualizar también `src/content/index.js`.
Si se agregan tablas, trazados o imágenes, actualizar `bookStats` en el mismo archivo.
## Calculadoras de scores

Cada score del anexo se define como datos en `src/content/scores/` (campos, puntos, tramos, conducta,
capítulos y fármacos relacionados) y se calcula con `src/lib/scores.js`.

## Vademécum y comprobador de mezclas

Fármacos en `src/content/drugs.js`, reglas en `src/content/interactions.js`, combinaciones en
`src/content/combos.js`. El comprobador nunca declara compatible una pareja por falta de datos.
**Este contenido requiere validación médica y farmacéutica.**

## Trazados ECG interactivos

Cada `<EcgTrace>` se puede reproducir y pausar, con bip en cada QRS, tono opcional para la onda P,
velocidad 0,5× y comparación con ritmo sinusal. La señal se define en `src/lib/ecg.js`, el sonido en
`src/lib/beep.js` y los textos "qué mirar / qué escuchar" en `src/content/ecgGuide.js`.
Al agregar un ritmo hay que definirlo en `ecg.js`, `ecgGuide.js` y `ecgClinical.js`.

## Diseño responsivo

Las tablas usan `<Table>` con `<thead>` y `<tbody>`. Cuando disponen de menos de 640 px,
cada fila se muestra como una ficha con el nombre de la columna sobre cada valor;
las etiquetas se toman del encabezado, no hay que escribirlas.
