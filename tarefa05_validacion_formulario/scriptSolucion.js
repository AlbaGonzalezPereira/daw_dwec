document.addEventListener("DOMContentLoaded", function () {
    //como no podemos modificar el html ni añadir defer al script tenemos que hacer que cuando cargue el DOM comience el script
    const formulario = document.querySelector("form");
    const intentos = document.getElementById("intentos");
    const nombre = document.getElementById("nombre");
    const apellidos = document.getElementById("apellidos");
    const error = document.getElementById("errores");
    const edad = document.getElementById("edad");
    const nif = document.getElementById("nif");
    const email = document.getElementById("email");
    const provincia = document.getElementById("provincia");
    const fecha = document.getElementById("fecha");
    const telefono = document.getElementById("telefono");
    const hora = document.getElementById("hora");
    

    document.cookie = 0; //creamos un contador en la cookie

    /**
     * creamos un evento para que cuando se le de a enviar, no envíe el formulario hasta que se
     * lo indiquemos
     */
    formulario.addEventListener("submit", function (evento) {
        error.innerHTML ="";
        evento.preventDefault(); // Para prevenir que la página se envíe por defecto
        document.cookie++; //cuando le demos a enviar suma 1
        intentos.innerHTML = "Intento de Envíos del formulario: " + document.cookie;
        
       if ( 
            validarCampos() && //Validamos los campos al enviar
            confirm("¿Quieres enviar este formulario?") //cuando es correcto pide que confirmes
         ) {
            formulario.submit(); //si los campos validaron, enviará el formulario
        } else {
            alert("Envío cancelado"); //salta alerta de envío cancelado
        }
        
    });
    //formulario.submit(); //para enviar el formulario

    /**Cuando los campos NOMBRE y APELLIDOS pierdan el foco, el contenido escrito en esos campos se convertirá a mayúsculas. */
    nombre.addEventListener("blur", ponerMayusculas); //creamos un evento para poner en mayúsculas el nombre
    apellidos.addEventListener("blur", ponerMayusculas); //creamos un evento para poner en mayúsculas los apellidos

    /**
     * creamos una función para que ponga en mayúsculas cualquier valor
     */
    function ponerMayusculas() {
        this.value = this.value.toUpperCase();
    }
    //si queremos que valide el campo cuando pierda el foco (lo haríamos con todos)
    // nombre.addEventListener('blur',validarNombre);
    // apellidos.addEventListener('blur',validarApellidos);

    /**
     * función que valide los campos de texto NOMBRE en español con espacios, tildes y ñ
     */
    function validarNombre() {
        //definimos la expresión regular
        let expresionReg = /^[A-ZÁÉÍÓÚÜÑ]+(?:['\s][A-ZÁÉÍÓÚÜÑ]+)*$/i; 
        if (!expresionReg.test(nombre.value.toUpperCase())) {//no sería necesario pasarlo a mayúsculas pero por si acaso
            //comprobamos que nombre cumple la expresión regular
            error.innerHTML += "<p>ERROR: Nombre incorrecto</p>";
            nombre.focus(); //ponemos el foco en el nombre
            return false;
        }
        return true;
    }

    /**
     * Función que valida los apellidos en español con espacio, tildes y ñ
     */
    function validarApellidos() {
        //definimos la expresión regular para apellidos en español con espacios, tildes y ñ
        let expresionReg = /^[A-ZÁÉÍÓÚÜÑ]+(?:['\s][A-ZÁÉÍÓÚÜÑ]+)*$/i; 
        if (!expresionReg.test(apellidos.value.toUpperCase())) {//no sería necesario pasarlo a mayúsculas pero por si acaso
            //comprobamos que apellidos cumple la expresión regular
            error.innerHTML += "<p>ERROR: Apellidos incorrectos</p>";
            apellidos.focus(); //ponemos el foco en el campo apellidos
            return false;
        }
        return true;
    }
   
    /**
     * Función que valida la edad para que contenga solamente valores numéricos y que esté en el rango de 0 a 105.
     * Si se produce algún error se mostrará el mensaje en el contenedor "errores" y pone el foco en el campo EDAD. 
     */
    function validarEdad(){
        // Si no es número o es inferior a 0 ó superior a 105
            if (isNaN(edad.value) || edad.value <0 || edad.value >105){
                    error.innerHTML+="<p>ERROR: Introduzca una edad correcta (0 - 105)</p>";
                    edad.focus(); //pone el foco en el campo edad
                    return false;
            }
            return true; //si introduce una edad válida
    }

    /**
     * Función que valida el NIF, utilizando una expresión regular que permita solamente 8 números un guión y una letra.
     * No es necesario validar que la letra sea correcta
     * Si se produce algún error mostrar el mensaje en el contenedor "errores" y poner el foco en el campo NIF
     * @returns true/false
     */
    function validarNif(){
	    let expresionNif = /^\d{8}-[A-Z]$/; //expresión regular que permita solamente 8 números un guión y una letra
        /**SIGNIFICADO DE LA EXPRESIÓN:
         * ^ indica inicio de la cadena
         * \d{8} indica que debe haber 8 números
         * [A-Z] indica que el último carácter debe ser una letra mayúscula (pasaremos antes el nif a mayúsculas)
         * $ indica el final de la cadena
         */

        //Si no se cumple la expresión regular:
	    if (!expresionNif.test(nif.value.toUpperCase())){// Pasamos nif a mayúsculas
		    error.innerHTML+="<p>ERROR: NIF incorrecto. Introduzca uno válido</p>";
		    // Situamos el foco en el campo nif
		    nif.focus();
		    return false;//si no valida
	    }
	    return true;//si es correcto

    }

/**
 * Validar el E-MAIL. Utilizar una expresión regular que nos permita comprobar que el e-mail sigue un formato correcto. 
 * Si se produce algún error mostrar el mensaje en el contenedor "errores" y poner el foco en el campo E-MAIL. 
 * Explicar las partes de la expresión regular mediante comentarios.
 */
function validarEmail(){
    let expresionEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,}$/
    /** SIGNIFICADO DE LA EXPRESIÓN:
     * ^ indica el inicio 
     * [\w-\.]+ indica uno o más caracteres, guiÓN o punto
     * @ indica el caracter de arroba
     * ([\w-]+\.)+ indica uno o más caracteres y guiones seguidos de un punto
     * [\w-]{2,} indica dos o más caracteres o guiones
     * $ indica el final de la cadena
     */
	
	if (!expresionEmail.test(email.value)){// Si no se cumple la expresión
		error.innerHTML+="<p>ERROR: email incorrecto. Introduzca uno válido</p>";
		email.focus();// Situamos el foco en el campo email
		return false;
	}
	return true; //si cumple la expresión
}

/**Validar que se haya seleccionado alguna de las PROVINCIAS. 
 * Si se produce algún error mostrar el mensaje en el contenedor "errores" y poner el foco en el campo PROVINCIA. */
function validarProvincia(){
    //declaramos una variable que nos va a traer el índice de la opción seleccionada en el campo select
    const provinciaSelect = provincia.selectedIndex; 
    if(provinciaSelect===0){//si es 0 significa que no se ha seleccionado ninguna provincia
        error.innerHTML+="<p>ERROR: Debe seleccionar una provincia</p>";
        provincia.focus();
        return false;
    }
    return true; //si cumple la expresión
}

/**
 * función para validar el campo FECHA utilizando una expresión regular (formatos a cumplir: dd/mm/aaaa o dd-mm-aaaa)
 * Si se produce algún error mostrar el mensaje en el contenedor "errores" y poner el foco en el campo FECHA. 
 * @returns 
 */
function validarFecha(){
    let expresionFecha = /^([0-2][0-9]|3[0-1])(\/|-)(0[1-9]|1[0-2])\2(\d{4})$/; //expresión regular para Fecha: dd/mm/yyyy o dd-mm-yyyy
    /**SIGNIFICADO DE LA EXPRESIÓN:
     * ^ indica el inicio 
     * ([0-2][0-9] indica que el número dd es un número del 00 al 29
     * |3[0-1]) indica que o puede ser 30 o 31
     * (\/|-) indica que puede ser una / o un -
     * (0[1-9]|1[0-2]) indica que el mes puede ser un número del 01 al 09 o del 10 al 12
     * \2 indica que se utiliza lo mismo que el segundo grupo de paréntesis de la expresión regular,es decir / o -
     * (\d{4})indica que debe ser un número de cuatro dígitos.
     */

    //comprobamos si la fecha cumple la expresión
    if (!expresionFecha.test(fecha.value)){
		error.innerHTML+="<p>ERROR: Fecha errónea. Ponga una fecha correcta (dd/mm/yyyy o dd-mm-yyyy)</p>";//lanzamos el error
		fecha.focus();//ponemos el foco en fecha
		return false;
	}
	return true; //si cumple la expresión
}


/**
 * función que valida el campo TELEFONO utilizando una expresión regular. Debe permitir 9 dígitos obligatorios. 
 * Si se produce algún error mostrar el mensaje en el contenedor "errores" y poner el foco en el campo TELEFONO. 
 */
function validarTelefono(){
    let expresionTel= /^[689]\d{8}$/; //expresión regular que valida números de teléfono ya sean fijos como móviles, sin espacios ni guiones
    /**SIGNIFICADO DE LA EXPRESIÓN:
     * ^ indica el inicio de la expresión
     * [689] indica que los dígitos pueden ser 6, 8 y 9
     * \d{8} indica que después vienen 8 dígitos
     * $ indica el final
     */
    if(!expresionTel.test(telefono.value)){//uso la que vale tanto para fijo como para móvil
		error.innerHTML+="<p>ERROR: Teléfono erróneo. Inserte uno correcto sin espacios ni guiones</p>";
		telefono.focus();
		return false;
	}
	return true; //si cumple la expresión
}

/**  
Pedir confirmación de envío del formulario. Si se confirma el envío realizará el envío de los datos; en otro caso cancelará el envío. */
/**
 * Función que va a validar el campo HORA utilizando una expresión regular con el patrón de hh:mm.
 * Si se produce algún error mostrará un mensaje en el contenedor "errores" y pondrá el foco en el campo HORA.
 */
function validarHora(){
    let expresionH = /^(0[1-9]|1\d|2[0-3]):([0-5]\d)$/;
    /**SIGNIFICADO DE LA EXPRESIÓN:
     * ^ indica el inicio de la expresión
     * (0[1-9]|1\d|2[0-3]) indica que las horas van del 00-23 con 3 alternativas:
     * 0[1-9] pueden ser horas del 01 a 09 
     * 1\d pueden ser horas del 10 a 19
     * 2[0-3] pueden ser horas del 20 a 23
     * : indica el caracter de ":"
     * ([0-5]\d) indica los minutos del 00-59
     * $ indica el final
     */

    if (!expresionH.test(hora.value)){
		error.innerHTML+="<p>ERROR: Hora errónea. Introduzca una correcta (hh:mm)</p>";
		hora.focus(); //pone el foco en el campo hora
		return false;
	}
	return true; //si cumple la expresión
}

/**
 * Declaro una función que me valide los campos para que al enviar me de todos los errores, si los hay
 * y devuelve si es válido el formulario
 */
function validarCampos(){
    let validarNom = validarNombre();
    let validarApe = validarApellidos();
    let validarEd = validarEdad();
    let validarDNI = validarNif();
    let validarEm = validarEmail();
    let validarProv = validarProvincia();
    let validarFe = validarFecha();
    let validarTel = validarTelefono();
    let validarH = validarHora();
    //devolvemos todas las variables
    return validarNom && validarApe && validarEd && validarDNI && validarEm && validarProv && validarFe && validarTel && validarH;
}
});