## TAREA 05 - DWEC
Realizar la **validación del formulario** facilitado en el enunciado, cumpliendo los siguientes requisitos:
1.	Programar el **código de JavaScript** en un fichero independiente. La única modificación que se permite realizar en el fichero ``.html`` es la de escribir la referencia al fichero de JavaScript.
2.	**Almacenar en una cookie** el **número de intentos** de envío del formulario que se van produciendo y mostrar un mensaje en el contenedor "intentos" similar a: "*Intento de Envíos del formulario: X*". Es decir cada vez que le demos al botón de enviar tendrá que incrementar el valor de la cookie en 1 y mostrar su contenido en el ``div`` antes mencionado. Nota: para poder actualizar el contenido de un contenedor o ``div`` la propiedad que tenemos que modificar para ese objeto es ``innerHTML``.
3.	Cada vez que los campos **NOMBRE** y **APELLIDOS** pierdan el foco, el contenido que se haya escrito en esos campos se convertirá a mayúsculas.
4.	Realizar una **función que valide** los campos de texto NOMBRE y APELLIDOS. Si se produce algún error mostrar el mensaje en el contenedor "``errores``" y poner el foco en los campos correspondientes.
5.	**Validar la EDAD** que contenga solamente valores numéricos y que esté en el rango de 0 a 105. Si se produce algún error mostrar el mensaje en el contenedor "``errores``" y poner el foco en el campo EDAD.
6.	**Validar el NIF**. Utilizar una expresión regular que permita solamente 8 números un guión y una letra. Si se produce algún error mostrar el mensaje en el contenedor "``errores``" y poner el foco en el campo NIF. No es necesario validar que la letra sea correcta. Explicar las partes de la expresión regular mediante comentarios.
7.	**Validar el E-MAIL**. Utilizar una expresión regular que nos permita comprobar que el e-mail sigue un formato correcto. Si se produce algún error mostrar el mensaje en el contenedor "``errores``" y poner el foco en el campo E-MAIL. Explicar las partes de la expresión regular mediante comentarios.
8.	**Validar** que se haya seleccionado alguna de las **PROVINCIAS**. Si se produce algún error mostrar el mensaje en el contenedor "``errores``" y poner el foco en el campo PROVINCIA.
9.	**Validar el campo FECHA** utilizando una expresión regular. Debe cumplir alguno de los siguientes formatos: dd/mm/aaaa o dd-mm-aaaa. No se pide validar que sea una fecha de calendario correcta. Si se produce algún error mostrar el mensaje en el contenedor "``errores``" y poner el foco en el campo FECHA. Explicar las partes de la expresión regular mediante comentarios.
10.	**Validar el campo TELEFONO** utilizando una expresión regular. Debe permitir 9 dígitos obligatorios. Si se produce algún error mostrar el mensaje en el contenedor "``errores``" y poner el foco en el campo TELEFONO. Explicar las partes de la expresión regular mediante comentarios.
11.	**Validar el campo HORA** utilizando una expresión regular. Debe seguir el patrón de hh:mm. No es necesario validar que sea una hora correcta. Si se produce algún error mostrar el mensaje en el contenedor "``errores``" y poner el foco en el campo HORA. Explicar las partes de la expresión regular mediante comentarios.
12.	**Pedir confirmación de envío** del formulario. Si se confirma el envío realizará el envío de los datos; en otro caso cancelará el envío.
---

**Fichero ``.html`` con el formulario que hay que validar**:
```html
<!DOCTYPE html>
<htm xmlns="http://www.w3.org/1999/xhtml">
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <title>DWEC05 - Solución Tarea</title>
        <script type="text/javascript" src="scriptSolucion.js"></script>
        <style type="text/css">
            label{
                width: 150px;
                float:left;
                margin-bottom:5px;     
            }
            input,select {
                width:150px;
                float:left;
                margin-bottom:5px;
            }
            fieldset{
                background:#66CCCC;
                width:350px;
                border: thick solid #306;
            }
            legend{
                border-top-width: medium;
                border-right-width: medium;
                border-bottom-width: medium;
                border-left-width: medium;
                border-top-style: solid;
                border-right-style: solid;
                border-bottom-style: solid;
                border-left-style: solid;
                background-color: #FFF;     
            }
            #mensajes{
                float: left;
                background:#33FF33;
                width: 325px;
            }
            #errores{
                float: left;
                background:#FF6633;
                width: 325px;
            }
            #intentos{
                float: left;
                background:#CCFF33;
                width: 325px;
            }
            .error{
                border: solid 2px #FF0000;
            }
        </style>
    </head>
    <body>
        <fieldset>
            <legend>DWEC05 - Solución Tarea</legend>
            <form name="formulario" id="formulario" action="http://www.google.es" method="get">
                <label for="nombre">Nombre:</label>
                <input type="text" name="nombre" id="nombre" />
                <label for="apellidos">Apellidos:</label>
                <input type="text" name="apellidos" id="apellidos" />
                <label for="edad">Edad:</label>
                <input name="edad" type="text" id="edad" maxlength="3" />
                <label for="nif">NIF:</label>
                <input name="nif" type="text" id="nif" />
                <label for="email">E-mail:</label>
                <input name="email" type="text" id="email" />
                <label for="provincia">Provincia:</label>
                <select name="provincia" id="provincia">
                    <option value="0" selected="selected">Seleccione Provincia</option>
                    <option value="C">A Coruña</option>
                    <option value="LU">Lugo</option>
                    <option value="OU">Ourense</option>
                    <option value="OU">Pontevedra</option>
                </select>
                <label for="fecha">Fecha Nacimiento:</label>
                <input name="fecha" type="text" id="fecha" />
                <label for="telefono">Teléfono:</label>
                <input name="telefono" type="text" id="telefono" maxlength="9"/>
                <label for="hora">Hora de visita:</label>
                <input name="hora" type="text" id="hora" />
                <input type="reset" name="limpiar" id="button" value="Limpiar" />
                <input type="submit" name="enviar" id="enviar" value="Enviar" />
            </form> 
            <div id="errores"></div>
            <div id="intentos"></div>
        </fieldset>
    </body>
</html>
```
---
### **RECOMENDACIONES**:

Se recomienda **realizar una función** para cada una de las validaciones de tal forma que se pueda llamar a cada una de forma independiente. Las funciones deberían devolver true si la validación ha sido correcta o false (y los mensajes de error solicitados) si la validación ha sido incorrecta.

---
---

## EXPRESIONES REGEX:
Las expresiones regulares (***RegExp*** o ***RegEx***) son un sistema para buscar, capturar o reemplazar texto utilizando **patrones**.

Permiten filtrar textos para encontrar coincidencias, comprobar la validez de fechas, documentos de identidad o contraseñas, se pueden utilizar para reemplazar texto con unas características concretas por otro, y muchos más usos.

Breve lista de los elementos **más utilizados** en las expresión regulares:
*	**^** Indica el principio de una cadena
*	**$** Indica el final de una cadena
*	**()** Un agrupamiento de parte de una expresión
*	**[]** Un conjunto de caracteres de la expresión
*	**{}** Indica un número o intervalo de longitud de la expresión
*	**.** Cualquier caracter salvo el salto de línea
*	**?** 0-1 ocurrencias de la expresión
*	**+** 1-n ocurrencias de la expresión
*	**\*** 0-n ocurrencias de la expresión
*	**\\** Para escribir un caracter especial como los anteriores y que sea tratado como un literal
*	**|** Para indicar una disyunción lógica (para elegir entre dos valores: a|b se tiene que cumplir al menos uno de los dos).

Podemos comprobar nuestras expresiones regulares en: [https://regex101.com/](https://regex101.com/).

Podemos descargarnos alguna **cheatsheet** en la siguiente página:
[https://cheatography.com/davechild/cheat-sheets/regular-expressions/pdf/](https://cheatography.com/davechild/cheat-sheets/regular-expressions/pdf/)

### Búsqueda avanzada con banderas:
Las expresiones regulares tienen seis **indicadores opcionales** que permiten funciones como la búsqueda global y que no distinga entre mayúsculas y minúsculas. Estos indicadores se pueden usar por separado o juntos en cualquier orden y se incluyen como parte de la expresión regular.

* **g**	-> Búsqueda global.	
* **i**	-> Búsqueda que no distingue entre mayúsculas y minúsculas.	
* **m**	-> Búsqueda multilínea.	
* **s**	-> Permite que el **.** coincida con caracteres de nueva línea.	
* **u**	()"unicode") -> Trata un patrón como una secuencia de puntos de código Unicode.	
* **y**	-> Realiza una búsqueda "pegajosa" que coincida a partir de la posición actual en la cadena de destino.

### Usar expresiones regulares en JavaScript

Las expresiones regulares se utilizan con los métodos ``RegExp`` ``test()`` y ``exec()`` y con los métodos de ``String``, ``match()``, ``replace()``, ``search()`` y ``split()``.

* ``exec()`` -> Ejecuta una búsqueda por una coincidencia en una cadena. Devuelve un arreglo de información o null en una discrepancia.
* ``test()`` ->	Prueba una coincidencia en una cadena. Devuelve true o false.
* ``match()`` -> Devuelve un arreglo que contiene todas las coincidencias, incluidos los grupos de captura, o null si no se encuentra ninguna coincidencia.
* ``matchAll()`` -> Devuelve un iterador que contiene todas las coincidencias, incluidos los grupos de captura.
* ``search()`` -> Prueba una coincidencia en una cadena. Devuelve el índice de la coincidencia, o -1 si la búsqueda falla.
* ``replace()`` -> Ejecuta una búsqueda por una coincidencia en una cadena y reemplaza la subcadena coincidente con una subcadena de reemplazo.
* ``replaceAll()`` -> Ejecuta una búsqueda de todas las coincidencias en una cadena y reemplaza las subcadenas coincidentes con una subcadena de reemplazo.
* ``split()`` -> Utiliza una expresión regular o una cadena fija para dividir una cadena en un arreglo de subcadenas.

Cuando desees saber si un patrón se encuentra en una cadena, utiliza los métodos ``test()`` o ``search()``; para obtener más información (pero una ejecución más lenta) utiliza los métodos ``exec()`` o ``match()``. Si usas ``exec()`` o ``match()`` y si la búsqueda tiene éxito, estos métodos devuelven un arreglo y actualizan las propiedades del objeto expresión regular asociado y también del objeto de expresión regular predefinido, el objeto RegExp. Si la búsqueda falla, el método ``exec()`` devuelve ``null`` (que coacciona a false).

Las expresiones regulares se pueden utilizar tanto en javascript, como php y java. 

Hay diferentes páginas que nos ayudarán a conocer y usar algunos de los **métodos más utilizados en php**, entre ellas:

* [https://diego.com.es/expresiones-regulares-en-php](https://diego.com.es/expresiones-regulares-en-php), en el apartado **9. Funciones PCRE**
* [https://www.mclibre.org/consultar/php/lecciones/php-expresiones-regulares.html](https://www.mclibre.org/consultar/php/lecciones/php-expresiones-regulares.html)
* [https://code.tutsplus.com/es/tutorials/how-to-work-with-regular-expressions-in-php--cms-36797](https://code.tutsplus.com/es/tutorials/how-to-work-with-regular-expressions-in-php--cms-36797)

### EJEMPLOS DE ALGUNAS EXPRESIONES REGEX:
```js
// Expresión regular para validar un número de teléfono en el formato XXX-XXX-XXXX
let expresionTel = '/^\d{3}-\d{3}-\d{4}$/'; 
```
```js
//Expresión regular que valida números de teléfono ya sean fijos como móviles, sin espacios ni guiones
let expresionTel= /^[689]\d{8}$/; 
```

```js
//Validar un número con o sin signo: 
let expresionNum = '/^[+-]?\d+(\.\d+)?$/';
let expresionNum2 = /^[-+]?[0-9]+(\.[0-9]+)?$/;
```
```js
//Expresión que valida los campos de texto NOMBRE en español con espacios, tildes y ñ
let expresion2 = /^[(A-ZÁÉÍÓÚÜÑ)][(a-záéíóúüñ)]+(?:['\s][A-ZÁÉÍÓÚÜÑ][(a-záéíóúüñ)]+)*$/; 
```
```js
//Expresión regular que permita solamente 8 números un guión y una letra
let expresionNif = /^\d{8}-[A-Z]$/; 
```
```js
//Expresión regular que valida un email
let expresionEmail = /^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$/  
```
```js
//Expresión regular para Fecha: dd/mm/yyyy o dd-mm-yyyy
let expresionFecha = /^([0-2][0-9]|3[0-1])(\/|-)(0[1-9]|1[0-2])\2(\d{4})$/; 
```



