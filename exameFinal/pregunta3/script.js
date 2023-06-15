//declaramos las variables globales necesarias
const botonEnviar = document.getElementById("botonEnviar");
const botonReset = document.getElementById("botonReset");
const parrafo = document.getElementById("parrafo1");
const frase = document.getElementById("entrada1");
const botonCargar = document.getElementById("botonCargar");
const botonGuardar = document.getElementById("botonGuardar");
const resultado = document.getElementById("resultado");
let fraseSinEsp;
let fraseReverse = [];
let puntero = 0;
document.cookie = 0;
let cookie;

//declaramos los eventos de los botones:
botonEnviar.addEventListener("click", validarFrase);
botonReset.addEventListener("click", borrar);
botonCargar.addEventListener("click", cargarCookie);
botonGuardar.addEventListener("click", guardarCookie);

/**
 * Función que valida la frase introducida letras del alfabeto español (max 50)
 * @returns
 */
function validarFrase() {
    //expresión regular que deja introducir letras del alfabeto español, con signos de puntuación y espacios (max 100)
    let expresion = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü \,\;\.]{1,100}$/;
    if (!expresion.test(frase.value)) {
        //no sería necesario pasarlo a mayúsculas pero por si acaso
        //comprobamos que nombre cumple la expresión regular
        error.innerHTML = "<p>ERROR: Frase incorrecta</p>";
    } else {
        fraseReverse = trocearFrase(frase.value); //trocea la espresión
        let fraseV = frase.value; //recogemos el valor de la frase
        fraseSinEsp = fraseV
            .replace(/\s+/g, "")
            .replace(/\,+/g, "")
            .replace(/\;+/g, "")
            .replace(/\.+/g, ""); //reemplazamos los caracteres que no queremos que salgan
        console.log(fraseSinEsp);
        //const numero = Number(frase.value.length);
        let num = 0;
        while (!perimetro(num, fraseReverse)) {
            num++;
        }
        // const numeroMax = Number((((frase.value.length +4))/4)|0) + 1;
        //dibujarCuadrado(frase.value,num); //dibuja el rombo
        dibujarCuadrado(fraseSinEsp, num); //dibujamos cuadrado pasándole la frase y el número de letras
    }
}

/**
 * Función que nos calcula el perímetro del cuadrado
 * @param {*} num
 * @param {*} arr
 * @returns
 */
function perimetro(num, arr) {
    const numero = num;
    let puntero = 0;
    let fila = 1;
    do {
        let columna = 1;
        do {
            if (
                fila == 1 ||
                columna == 1 ||
                fila == numero ||
                columna == numero
            )
                puntero++;
            columna++;
        } while (columna <= numero);
        fila++;
    } while (fila <= numero);
    if (puntero < arr.length) {
        return false;
    }
    return true;
}

/**
 * Función que nos dibuja el cuadrado con una frase dada
 * @param {*} frase
 * @param {*} num
 */
function dibujarCuadrado(frase, num) {
    const numero = num;
    let cont = frase.length;
    let cadena = "";
    cadena += "<table>";
    let fila = 1;
    do {
        let columna = 1;
        cadena += "<tr>";
        do {
            if (
                fila == 1 ||
                columna == 1 ||
                fila == numero ||
                columna == numero
            ) {
                if (cont > 0) cadena += "<td>" + frase[--cont] + "</td>";
            } else cadena += "<td></td>";
            columna++;
        } while (columna <= numero);
        cadena += "</tr>";
        fila++;
    } while (fila <= numero);
    cadena += "</table>";
    parrafo.innerHTML = cadena;
}

/**
 * Función que borra el cuadrado y la frase
 */
function borrar() {
    frase.value = "";
    parrafo.innerHTML = "";
}

/**
 * función que saca los espacios, trocea la frase y nos devuelve un array con los caracteres
 * @param {*} fraseIntro
 * @returns
 */
function trocearFrase(fraseIntro) {
    fraseSinEsp = fraseIntro
        .replace(/\s+/g, "")
        .replace(/\,+/g, "")
        .replace(/\;+/g, "")
        .replace(/\.+/g, "");
    //console.log(fraseSinEsp);
    fraseSinEsp = fraseSinEsp.split(""); //cortamos y guardamos la frase en trozos en un array
    fraseReverse = fraseSinEsp.reverse(); //damos la vuelta al array
    //console.log(fraseIntro);
    return fraseReverse; //devolvemos el array
}

/**
 * Función que nos carga una cookie
 */
function cargarCookie() {
    //validarFrase()
    if (cookie) {
        //si queremos que aparezcan ambos mensajes:
        //resultado.innerHTML += "<p>Cargando...La última frase guardada en cookie es: " + frase.value + "</p>";
        resultado.innerHTML =
            "<p>Cargando...La última frase guardada en cookie es: " +
            frase.value +
            "</p>";
            resultado.style.backgroundColor = "#4FC3F7";
    } else {
        resultado.innerHTML = "No hay ninguna frase guardada en cookie.";
        frase.value = ""; //borramos la frase si no hay ninguna frase guardada
    }
}

/**
 * Función que nos guarda una cookie sin recargar la página
 */
function guardarCookie() {
    if (frase.value) {
        cookie = frase.value;
        //guardamos la última frase
        resultado.innerHTML =
            "<p>Guardando...La última frase guardada en cookie es: " +
            cookie +
            "</p>";
        resultado.style.backgroundColor = "#4FC3F7";
        document.cookie++;
        //console.log(document.cookie);//comprobamos
    }
}
