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
**RECOMENDACIONES**:

Se recomienda realizar una función para cada una de las validaciones de tal forma que se pueda llamar a cada una de forma independiente. Las funciones deberían devolver true si la validación ha sido correcta o false (y los mensajes de error solicitados) si la validación ha sido incorrecta.


