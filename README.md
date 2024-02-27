#Juego de Memorizar Carta

----------------------
#Iniciar proyecto local
----------------------

**Descargar el progecto:** git clone https://github.com/Isaac-JM/memory_cards.git 

**Actualizar Proyecto:** npm install

**Iniciar Proyecto:** npm run dev

**Generar Services Worker (sw.js):** workbox generateSW workbox-config.cjs

----------------------
#¿Como Jugar?
----------------------
1- Elegir Nombre del Jugador

2- Elegir el nivel de dificultad, una vez elegido el nivel empezará la partida automaticamente.
    Según el nivel seleccionado tendras más o menos tiempo para memorizar las cartas y 
    también habrá cambios en la cantidad de puntos obtenidos.

**Facil (Easy)-** 10 segundos y 10 puntos por cada acierto.

**Normal (Medium)-** 5 segundos y 20 puntos por cada acierto.

**Dificil (Hard)-** 2 segundos y 30 puntos por cada acierto.