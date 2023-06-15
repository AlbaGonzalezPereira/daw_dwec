const botonEnviar=document.getElementById('botonEnviar');
const entero = document.getElementById("entero");
const parrafo = document.getElementById('error');
const botonColor = document.getElementById('botonColor');
const fibos = document.getElementById("fibos");
let elementos =[];
let numero;

//declaramos las variables
botonEnviar.addEventListener('click',abrirMsg);
botonColor.addEventListener('click',cambiar);
// document.addEventListener("click",aplicarEfectoEspecial);


//fondo.addEventListener('click',cambiarColor);
/**
 * Función que nos calcula la serie Fibonacci de un número
 * @param {*} entero - elemento del que va a calcular la serie Fibonacci 
 * @returns 
 */
function calcularFibo (entero) {
    if ( entero < 2 ) {
        return entero;
    } else {
        return  calcularFibo(entero - 1) + calcularFibo(entero - 2);
    }
}

//declaramos un array de colores
let colores =["green","blue", "red", "yellow", "pink", "black", "grey", "violet", "orange", "maroon"];

/**
 * Función que nos va a abrir un mensaje para preguntarnos si queremos enviar la entrada
 */
function abrirMsg() {
    let mensaje = prompt("¿Quieres enviar la entrada?", entero.value);
    console.log(mensaje);
    if(entero.value >20 || entero.value <1 || entero.value==""){//comprobamos el número
        parrafo.innerHTML="Entrada no válida: debe estar comprendida entre 1 y 20";
    }
    else{
        numero = Number(entero.value); //valor del número que se introdujo en el input
        fibos.innerText =""; //para que borre la serie anterior
        entero.value=""; //para que en el input no salga el valor del número 
        for (let i = 1; i <= numero; i++) {
            elementos[i] = document.createElement('span');//creamos la etiqueta span para darle un color a cada elemento
            fibos.appendChild(elementos[i]);
            elementos[i].innerText = calcularFibo(i) + ( i === numero ? "" : " "); //para que muestre la serie Fibonacci con espacio
            elementos[i].style.color = colores[Math.round(Math.random() * colores.length)];   //cambia el color de la serie Fibonacci         
            elementos[i].addEventListener("click",aplicarEfectoEspecial);//aplicamos el efecto especial a cada elemento
        }
    }
}

/**
 * Función que nos cambia los colores de la serie Fibonacci cuando pulsamos el botón
 */
function cambiar() {
    for (let i = 1; i <= numero; i++) {
        elementos[i].innerText = calcularFibo(i) + ( i === numero ? "" : " ");
        elementos[i].style.color = colores[Math.round(Math.random() * colores.length)];            
    }
}

/**
 * función que crea los eventos en las etiquetas span
 */
function activarSpan() {
    let spanDibujo = document.querySelectorAll("#fibos span"); //cogemos los span del p con id=fibos --> es un conjunto de nodos (900)
    console.log(spanDibujo);
    for (let i = 0; i < spanDibujo.length; i++) {
        spanDibujo[i].addEventListener("click", aplicarEfectoEspecial); //hacemos un addEventListener por cada td
    }
}
    
/**
 * Función que comprueba si la etiqueta span no está vacía, aplica el efecto especial y cambia de color
 */
function comprobarSpan() {
    if(this.innerHTML !=""){
        aplicarEfectoEspecial(this); //aplicamos el efecto a la span
        //this.style.color = generarColorAleatorio();//ponemos el color aleatorio al número
        
    }
}

/**
     * Función que aplica un efecto especial de parpadeo a la etiqueta span que se le de click
     * @param {*} - donde se hizo se hizo clic
     */
function aplicarEfectoEspecial() { 
    $(this).fadeTo("slow", 0.25).fadeTo("slow", 1).fadeTo("slow", 0.1).fadeTo("slow", 1); 
    
}
