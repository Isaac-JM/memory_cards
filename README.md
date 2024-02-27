# Juego de Memorizar Cartas

----------------------
# Iniciar proyecto local
----------------------

**Descargar el progecto:** git clone https://github.com/Isaac-JM/memory_cards.git 

**Actualizar Proyecto:** npm install

**Iniciar Proyecto:** npm run dev

-**Solo en el caso que necesites generar un services worker para el PWA**

**Generar Services Worker (sw.js):** workbox generateSW workbox-config.cjs

- Se generará en la carpeta public, luego al realizar un **npm run build** se añadirá a la carpeta dist.

----------------------
# Ejecutar tests
----------------------

**Debes ejecutarlo desde la raiz del proyecto**

**Test de todos los componentes**

- npx wdio run ./wdio.conf.js

**Test de un componente específico**

- npx wdio run ./wdio.conf.js --spec "ruta_componente"

----------------------
# ¿Cómo Jugar?
----------------------
**1-** Elegir Nombre del Jugador

**2-** Elegir el nivel de dificultad.
    Una vez elegido el nivel, empezará la partida automáticamente.
    Según el nivel seleccionado tendrás más o menos tiempo para memorizar las cartas. 
    También habrá cambios en la cantidad de puntos obtenidos.

**Facil (Easy)-** 10 segundos y 10 puntos por cada acierto.

**Normal (Medium)-** 5 segundos y 20 puntos por cada acierto.

**Dificil (Hard)-** 2 segundos y 30 puntos por cada acierto.

**3-** Memorizar los números acorde el tiempo proporcionado y elegir la carta adecuada cuando desaparezca el número.
Si aciertas, el juego seguirá, si fallas tendras la opción o de repetir la partida o seleccionar un nuevo nivel.