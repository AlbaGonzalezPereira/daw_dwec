## PREGUNTA 3, problema de programación en JavaScript:

Crea una página web con un script en Javascript que permita al usuario introducir 1 frase, de 50 caracteres como máximo, compuesta de letras del alfabeto castellano.

*	**R1)** Al hacer clic en "Enviar", la página web mostrará las letras de la frase, eliminando los espacios, formando un rombo, posiblemente parcial (en función de la longitud de la frase), tal y como se muestra en los ejemplos más abajo.

*	**R2)** Dado el siguiente enlace, que se corresponde con una API REST que devuelve en un JSON,
    * recoger el JSON que devuelve la API, "parsearlo", obtener el valor del elemento "description": , y mostrar un mensaje La temperatura en el exterior es de: MUY NUBOSO donde "MUY NUBOSO" (deberá aparecer en mayúsculas) será el valor que devuelva dicho elemento del JSON, que reflejará el estado del tiempo en ese momento.
    * cada vez que el usuario haga clic en "Actualizar Temperatura", se actualizará dicho mensaje sin recargar el resto de la página (usar Ajax).
    * en la actualización del mensaje, se le aplicará un efecto especial usando jQuery para mostrar al usuario que se está actualizando.

    **Enlace:**

    https://api.openweathermap.org/data/2.5/weather?&lat=42.264799151433&lon=-8.765128490705925&units=metric&lang=es&appid=8a2423b28d69b2f14a25bca771904482


**Por ejemplo:** 

(Las entradas aparecen en **fondo gris**, las salidas calculadas en **fondo azul**)
(Enviar y Reset representan **botones html**)

<div align = center><img src="https://github.com/AlbaGonzalezPereira/daw_dwec/blob/main/exame3ev/img/img1.PNG" alt="Rombo temperatura" style = "width: 60%"></div>

<div align = center><img src="https://github.com/AlbaGonzalezPereira/daw_dwec/blob/main/exame3ev/img/img2.PNG" alt="Rombo temperatura" style = "width: 60%"></div>

