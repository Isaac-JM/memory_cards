# Juego de Memorizar Cartas

----------------------
# Iniciar proyecto local
----------------------

**Descargar el progecto:** git clone https://github.com/Isaac-JM/memory_cards.git 

**Actualizar Proyecto:** npm install

**Iniciar Proyecto:** npm run dev

# Solo en el caso que necesites generar un services worker para el PWA

**Generar Services Worker (sw.js):** workbox generateSW workbox-config.cjs

----------------------
# Ejecutar los test de todos los componentes
----------------------

**Debes ejecutarlo desde la raiz del proyecto**

-npx wdio run ./wdio.conf.js

**Si quieres ejecutar el test de un solo componente**

- npx wdio run ./wdio.conf.js --spec "ruta_componente"

----------------------
# ¿Cómo Jugar?
----------------------
1- Elegir Nombre del Jugador

2- Elegir el nivel de dificultad.
    Una vez elegido el nivel, empezará la partida automáticamente.
    Según el nivel seleccionado tendrás más o menos tiempo para memorizar las cartas. 
    También habrá cambios en la cantidad de puntos obtenidos.

**Facil (Easy)-** 10 segundos y 10 puntos por cada acierto.

**Normal (Medium)-** 5 segundos y 20 puntos por cada acierto.

**Dificil (Hard)-** 2 segundos y 30 puntos por cada acierto.

3- Memorizar los números acorde el tiempo proporcionado y elegir la carta adecuada cuando desaparezca el número.
Si aciertas, el juego seguirá, si fallas tendras la opción o de repetir la partida o seleccionar un nuevo nivel.