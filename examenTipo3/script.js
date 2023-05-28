const boton = document.getElementById("botonEnviar");
const numero = document.querySelector("input");
const inputURL = document.querySelector("#entrada2");
const parrafo = document.getElementById("error");
const fondo = document.querySelector("#fondo");
const url = document.querySelector("#url");
const json = document.querySelector("#resultadoJson");
//dibujar cuadrado
const canvas = document.querySelector("canvas");
const contexto2D = canvas.getContext("2d");

//declaramos los eventos
boton.addEventListener("click", abrirMsg);
fondo.addEventListener("click", cambiarFondo);
url.addEventListener("click", getURL);

let peticion; //petición json

/**
 * Función que crea un objeto XMLHttpRequest para recibir después el JSON mediante una petición get
 */
const iniciar = (urlJson) => {
    peticion = new XMLHttpRequest(); //para hacer peticiones en xml y json
    //hacemos la petición mediante get a la web que nos va a devolver el xml
    peticion.open("GET", urlJson); //hacemos la petición a la url introducida
    peticion.send(); //enviamos
    peticion.addEventListener("load", cargada); //creamos un evento
};

/**
 * Función que hace la implementación de manipulación de los datos json y los añade al html
 */
const cargada = () => {
    //console.log(peticion);//comprobamos
    //<textarea name="textarea" rows="10" cols="50">Write something here</textarea>
    const textArea = document.createElement("textarea"); //creamos el elemento textarea
    //introducimos atributos
    textArea.setAttribute("rows", "10");
    textArea.setAttribute("cols", "50");
    const h3 = document.createElement("h3");
    h3.innerHTML = "Datos de la url " + url.value;

    //comprobamos que la petición tiene un error y que nos cambie el color del textarea
    if (peticion.status >= 400) {
        textArea.textContent = "ERROOOOOR " + peticion.status;
        textArea.style.backgroundColor = "red";
        //textArea.style.color="red";//si quisiéramos cambiar el texto de color
    } else {
        /***********************DECLARAMOS VARIABLES *********************** */
        let datos = JSON.parse(peticion.responseText);
        //console.log(JSON.stringify(datos));//pasa json a String
        textArea.textContent = JSON.stringify(datos); //añadimos el contenido del json al textarea
    }
    const div = document.querySelector("#resultadoJson");
    div.innerHTML = ""; //para que no repita el textarea
    div.append(h3, textArea);
};

//evento para dibujar cuadrados, para poner el canvas
document.addEventListener("DOMContentLoaded", () => {
    canvas.width = document.documentElement.clientWidth;
    canvas.height = document.documentElement.clientHeight;
});

//envento para cargar la página con los datos introducidos
document.addEventListener("DOMContentLoaded", cargarPag);

/**
 * Función que carga la página con los valores guardados
 */
function cargarPag() {
    if (localStorage.getItem("numero") != null) {
        numero.value = localStorage.getItem("numero");
        dibujar();
        //Mantiene el color del fondo al cargar la página. FUNCIONALIDAD AÑADIDA
        if (localStorage.getItem("color") != null)
            document.body.style.background = localStorage.getItem("color");
    }
}

/**
 * Función que llama a la función iniciar si el valor no está vacío
 * @param {*} e
 */
function getURL(e) {
    e.preventDefault();
    let urlJson = inputURL.value;
    if (urlJson == "") {
        alert("URL no válida");
    } else {
        iniciar(urlJson);
    }
}

/**
 * Función que nos abre el mensaje de si queremos enviar la petición. Nos comprueba que los datos introducidos son correctos
 * y guarda el valor del input en un localStorage
 * @param {*} e
 */
function abrirMsg(e) {
    e.preventDefault();
    let mensaje = confirm("Quieres enviar el número", numero.value); //nos pregunta si queremos enviar el valor
    if (mensaje) {
        //console.log(mensaje);//comprobamos
        if (numero.value > 50 || numero.value < 1 || numero.value == "") {
            parrafo.innerHTML =
                "Entrada no válida: debe estar comprendida entre 1 y 50";
            limpiarCanvas();
        } else {
            parrafo.innerHTML = ""; //para que empiece vacío
            localStorage.setItem("numero", numero.value); //guarda el valor del input
            dibujar(); //para que dibuje
            //cambiarFondo(e);//por si queremos que pinte random el fondo también.
        }
    } else {
        alert("Entrada cancelada");
    }
}

/**
 * Función que cambia el color del fondo de manera aleatoria
 * @param {*} e
 */
function cambiarFondo(e) {
    e.preventDefault(); //al estar en un form hay que hacer un preventDefault sino detecta el botón como un submit

    let simbolos, color;
    simbolos = "0123456789ABCDEF";
    color = "#";

    for (let i = 0; i < 6; i++) {
        color = color + simbolos[Math.floor(Math.random() * 16)];
    }
    localStorage.setItem("color", color);
    document.body.style.background = color;
}

/**
 * Función para limpiar el canvas
 */
function limpiarCanvas() {
    contexto2D.clearRect(0, 0, canvas.width, canvas.height);
}

/**
 * Función que dado un número, nos devuelve un número random entre 0 y número -1, porque hace un floor y random nunca es 1
 * @param {*} numero
 * @returns
 */
function random(numero) {
    return Math.floor(Math.random() * numero);
}

/**
 * Función que dibuja los cuadrados en el canvas
 */
function dibujar() {
    //si queremos los cuadrados todos iguales:
    //let colorCuadrado = `rgba(${random(256)},${random(256)},${random(256)},0.5)`;
    contexto2D.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < numero.value; i++) {
        contexto2D.beginPath();
        //contexto2D.fillStyle=colorCuadrado; --> rellena los cuadrados del mismo color
        //para que salgan los cuadrados de distintos colores:
        contexto2D.fillStyle =
            "rgba(" +
            random(256) +
            "," +
            random(256) +
            "," +
            random(256) +
            "," +
            0.5 +
            ")";
        let x = random(55);

        //contexto2D.arc(random(canvas.width), random(canvas.height), random(50), 0, 2 * Math.PI);
        contexto2D.fillRect(random(canvas.width), random(canvas.height), x, x);
        contexto2D.fill();
    }
}
