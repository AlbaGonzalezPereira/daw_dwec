## PREGUNTA 2, problema de Web APIs:

Desarrolla una aplicación en JavaScript **"Busca letras"** disponga, como mínimo, de los controles e especificaciones siguientes: (**NOTA**: se validarán todas las entradas convenientemente)

* **R1)** Un elemento que permita solicitar e introducir al usuario una **FRASE** consistente únicamente de letras del alfabeto castellano. La longitud máxima de la frase será 50 caracteres.

* **R2)** Un elemento que permita solicitar la **complejidad** del juego, que será un número comprendido entre 10 y 50.

* **R3)** Un botón B1 ``"Jugar"``

* **R4)** Un botón B2 ``"Limpiar"``, que borrará el contenido de la frase introducida por el usuario (R1) y el número (R2).

* **R5)** Un elemento ``"Contador"`` que indique cuántas letras quedan por descubrir, de la frase introducida por el usuario.

* **R6)** Un elemento ``"Intentos fallidos"`` que indique cuántas veces el usuario ha hecho clic sobre una de las casillas, sin acertar una letra.

* **R7)** Cuando el usuario haga clic en ``"Jugar"`` (B1) se mostrará una **cuadrícula con celdas vacías**, similar al gráfico que aparece más abajo en este apartado. La cuadrícula tendrá un tamaño de NxN celdas, donde N es el número introducido en R2.
    * las celdas tendrán (o no) **oculta una de las letras** de la frase. Cada letra de la frase introducida se encontrará en una de las casillas. Habrá una única letra por casilla (o ninguna).
    * cuando el usuario haga **clic en una celda** con una letra oculta, la letra se mostrará en un color escogido al azar y el "Contador" (R5) se actualizará para indicar cuantas letras quedan por descubrir.
    * si, por el contrario, la **celda no contiene una letra** de la frase, se incrementará el contador ``"Intentos fallidos"`` (R6), para reflejar dicho suceso.

    <div align = center><img src="https://github.com/AlbaGonzalezPereira/daw_dwec/blob/main/exame3ev/img/tabla.png" alt="Cuadrícula celdas" style = "width: 60%"></div>

* **R8)** El juego **terminará** cuando el jugador encuentre todas las letras o cuando haga clic en ``"Limpiar"`` (R4).

* **R9)** Para darle una **apariencia más atractiva** al juego, se aplicarán los efectos siguientes:
    * cada vez que aparezca la cuadrícula, se le aplicará un **efecto especial** (por ejemplo, aumentar y disminuir su intensidad varias veces, cambiar colores; usa tu imaginación)
    * cada vez que el usuario **encuentre una letra**, se aplicará un efecto efecto especial (puede ser igual que el del anterior párrafo)

