let raton = document.getElementById("raton");
let teclado = document.getElementById("teclado");
let derecho = document.getElementById("derecho");
let resultado = document.getElementById("resultado");
let colorInicial = raton.style.backgroundColor;//si quiero coger el color inicial

//declaramos los eventos
document.addEventListener("keypress",obtenerLetra);
document.addEventListener("mousemove",obtenerPos);
document.addEventListener("click",cambiarColor);
raton.addEventListener("mouseover", colorOriginal);
teclado.addEventListener("mouseover", colorOriginal);
derecho.addEventListener("keyup", escribirReves);

/**
 * función que nos da la posición con respecto a la pantalla al pasarle el mouseover
 * @param {*} e 
 */
function obtenerPos(e){
    //posición pantalla:
    let x = e.screenX;
    let y = e.screenY;
    //posición ventana:
    //console.log(x);
    // console.log(y);
    // console.log(e);

    raton.innerHTML = "posición (x,y): (" +x + "," +y+")";
}

/**
 * Función que nos devuelve una letra y el código que ha sido presionada
 * @param {*} e 
 */
function obtenerLetra(e){
    console.log(e);
    let tecla = e.key;
    let codigo = e.keyCode;

    teclado.innerHTML = "tecla: " + tecla + ", código: " + codigo;
    teclado.style.backgroundColor = "green";

}

/**
 * Función que cambia el color de fondo de las coordenadas del ratón
 */
function cambiarColor(){
    raton.style.backgroundColor = "yellow";
   // console.log(raton);
}

/**
 * Función que nos devuelve el color inicial
 */
function colorOriginal(){
    //raton.style.backgroundColor = "white";
    //teclado.style.backgroundColor = "white";
    raton.style.backgroundColor = colorInicial;
    teclado.style.backgroundColor = colorInicial;
}

/**
 * Función que nos invierte una cadena de texto
 * @param {*} cad 
 * @returns 
 */
function invertirCadena(cad) {
    return cad.split("").reverse().join("");
}

/**
 * función que nos invierte la cadena de texto y la escribe en resultado
 */
function escribirReves(){
    resultado.innerHTML=invertirCadena(derecho.value);
}