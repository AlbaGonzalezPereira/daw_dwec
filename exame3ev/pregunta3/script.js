const botonEnviar = document.getElementById("botonEnviar");
const botonReset = document.getElementById("botonReset");
const botonTemp = document.getElementById("botonTemp");
const frase = document.getElementById("frase");
const resultado = document.getElementById("resultado");
const rombo = document.getElementById("rombo");
const error = document.getElementById("error");
let fraseSinEsp;
let puntero = 0;
let peticion;

//declaramos eventos de los botones
botonEnviar.addEventListener("click", validarFrase);
botonReset.addEventListener("click", borrarRombo);

/**
 * Función que valida la frase introducida letras del alfabeto español (max 50)
 * @returns
 */
function validarFrase() {
    let expresion2 = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü ]{1,50}$/; //expresión regular que deja introducir letras del alfabeto español (max 50)
    if (!expresion2.test(frase.value)) {
        //no sería necesario pasarlo a mayúsculas pero por si acaso
        //comprobamos que nombre cumple la expresión regular
        error.innerHTML = "<p>ERROR: Frase incorrecta</p>";
    } else {
        fraseSinEsp = trocearFrase(frase.value); //trocea la espresión
        dibujarRombo(); //dibuja el rombo
    }
}

/**
 * Función que dibuja un rombo con un número de filas y columnas
 */
function dibujarRombo() {
    puntero = 0;
    //const numero = Number(10);//si queremos que el rombo siempre tenga el mismo tamaño
    const numero = Number(fraseSinEsp.length / 1.5); //si queremos que el rombo tenga el tamaño suficiente para que entre la frase
    const medio = Math.floor(numero / 2 + 1);
    rombo.innerText = "";
    let encontro = true;

    // Dibujar parte superior rombo:
    for (let fila = 1; fila <= medio; fila++) {
        for (let columna = 1; columna <= medio + fila - 2; columna++) {
            if (columna > medio - fila && columna < medio + fila) {
                if (encontro) {
                    rombo.innerText += siguienteLetra();
                    encontro = false;
                } else {
                    rombo.innerText += "\u00a0";
                }
            } else {
                rombo.innerText += "\u00a0";
            }
        }
        encontro = true;
        rombo.innerText += siguienteLetra() + "\n";
    }

    // Dibujar parte inferior rombo:
    for (let fila = medio - 1; fila >= 1; fila--) {
        for (let columna = 1; columna <= medio + fila - 2; columna++) {
            if (columna > medio - fila && columna < medio + fila) {
                if (encontro) {
                    rombo.innerText += siguienteLetra();
                    encontro = false;
                } else {
                    rombo.innerText += "\u00a0";
                }
            } else {
                rombo.innerText += "\u00a0";
            }
        }
        encontro = true;
        rombo.innerText += siguienteLetra() + "\n";
    }
}

/**
 * función para que me borre el rombo
 */
function borrarRombo() {
    parrafo.innerText = "";
}

/**
 * función que saca los espacios, trocea la frase y nos devuelve un array con los caracteres
 * @param {*} fraseIntro
 * @returns
 */
function trocearFrase(fraseIntro) {
    fraseSinEsp = fraseIntro.replace(/\s+/g, "");
    fraseSinEsp = fraseSinEsp.split(""); //cortamos y guardamos la frase en trozos en un array
    return fraseSinEsp; //devolvemos el array
}

/**
 * Función que nos devuelve una letra de la frase
 * @returns
 */
function siguienteLetra() {
    if (puntero < fraseSinEsp.length) {
        return fraseSinEsp[puntero++];
    } else {
        return "\u00a0";
    }
}

//se carga cuando se inicia la página
const iniciar = () => {
    peticion = new XMLHttpRequest(); //para hacer peticiones en xml y json
    //hacemos la petición mediante get a la web que nos va a devolver el xml
    peticion.open(
        "GET",
        "https://api.openweathermap.org/data/2.5/weather?&lat=42.264799151433&lon=-8.765128490705925&units=metric&lang=es&appid=8a2423b28d69b2f14a25bca771904482"
    );
    peticion.send(); //enviamos
    peticion.addEventListener("load", cargada); //creamos un evento
};

const cargada = () => {
    console.log(peticion);
    let descripcion = JSON.parse(peticion.responseText);
    let tiempo = descripcion.weather[0].description;
    tiempo = tiempo.toUpperCase();
    //comprobamos
    // console.log(tiempo);
    // console.log(descripcion);
    // console.log(descripcion.weather[0].description);
    resultado.innerHTML = "La temperatura en el exterior es de: " + tiempo;
    $("#resultado").hide("slow"); //oculta lentamente
    $("#resultado").show(500); //muestra contenido
    //$("#resultado").slideUp(1000);//desliza hacia arriba
};

//en caso de funciones flecha, los eventos tienen que ir después:
botonTemp.addEventListener("click", iniciar); //cuando le da click en el botón llama a la función
window.addEventListener("load", iniciar, false); //cuando carga la página llama a la función
