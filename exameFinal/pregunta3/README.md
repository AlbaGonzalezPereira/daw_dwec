## PREGUNTA 3, problema de programación en JavaScript:
Crea una página web con un script en Javascript que permita al usuario introducir 1 frase, de 100 caracteres como máximo, compuesta solamente de letras del alfabeto castellano (mayúsculas y minúsculas, aceptándo signos de puntuación coma "," , punto y coma ";" y punto "."). 

* R1) Al hacer clic en "Enviar", la página web mostrará las letras de la frase, de atrás hacia delante, eliminando los espacios y demás signos de puntuación, formando el perímetro de un cuadrado, posiblemente parcial (en función de la longitud de la frase), tal y como se muestra en los ejemplos más abajo. 
Cada letra se imprimirá en un color al azar.
      
* R2) Cuando se haga clic en "Enviar", se borrará el cuadrado anterior si lo hubiera
      
* R3) Cuando se haga clic en "Reset" se borrará el campo de introducción de la frase y el cuadrado (pero no el contenido de la cookie).

* R4) Hay 2 botones ``"Cargar cookie"`` y ``"Guardar en cookie"`` que, sin recargar la página:
    * ``"Guardar en cookie"``:  guarda la frase actual en una cookie, y saca un mensaje:  La última frase guardada en cookie es: ``<frase obtenida de la cookie>``
    *  ``"Cargar cookie"``: recoge el valor de la frase anteriormente guardada (si la hay) y la saca un mensaje: La última frase guardada en cookie es: ``<frase obtenida de la cookie>``<br>
    Si no hay ninguna frase, borra la frase si existe.

* R5) Hay 2 botones ``"Cargar cookie"`` y ``"Guardar en cookie"`` que, sin recargar la página:

Por ejemplo: (las entradas aparecen en fondo gris, las salidas calculadas en fondo azul)
(Enviar y Reset representan botones html) 

<div align = center><img src="https://github.com/AlbaGonzalezPereira/daw_dwec/blob/main/exameFinal/img.PNG" alt="Cuadrado letras" style = "width: 30%"></div>