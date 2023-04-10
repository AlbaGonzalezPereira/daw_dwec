## PREGUNTA 2, problema de Web APIs
Desarrolla una aplicación en JavaScript disponga de los controles y especificaciones siguientes:

* R1) Un elemento (etiqueta + caja texto) que permita solicitar e introducir al usuario un número entero comprendido entre 1 y 20.

* R2) Un botón (B1) "Enviar" que, cada vez que se hace clic en él, permita indicar al usuario que quiere enviar la entrada anterior.

* R3) Si la entrada no es válida se sacará un mensaje: "Entrada no válida: debe estar comprendida entre 1 y 20".

* R4) Al hacer clic en el botón B1 se validará la entrada ( número ***N*** ) y, si cumple con los requisitos indicados, se imprimirá la serie de Fibonacci hasta el término ***N*** introducido por el usuario.

* R5) Un botón (B2) "Color términos" que al realizar clic en el cambie el color, al azar de entre un grupo de 10 colores HTML previamente introducidos en un array, de cada uno de los términos de la sucesión de Fibonacci, de forma independiente. (Por ejemplo: si introducen el número 4, la salida sería <font color="red"> 1 </font><font color="green"> 1 </font><font color="violet"> 2 </font><font color="blue"> 3 </font> y si le dan al botón (B2) de nuevo sería algo como:  <font color="blue"> 1 </font><font color="yellow"> 1 </font><font color="pink"> 2 </font><font color="green"> 3 </font> ).


---
La serie de Fibonacci es una serie de números enteros positivos: 0, 1, 1, 2, 3, 5, 8, 13, 21, ... que comienza por los términos 0 y 1 (consideramos el primer término a el primer 1) y tiene la propiedad de que cada término posterior es la suma de sus 2 predecesores en la sucesión ( 2 = 1 + 1, 3 = 2 + 1, ...).

