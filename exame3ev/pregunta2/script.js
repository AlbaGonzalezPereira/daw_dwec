/*****************************************DECLARAMOS VARIABLES GLOBALES***********************************************/
const formulario = document.getElementById("form");
const frase = document.getElementById("frase");
const jugar = document.getElementById("jugar");
const limpiar = document.getElementById("limpiar");
const compl = document.getElementById("compl");
const intentosFallidos = document.querySelector("#intentos");
const error = document.getElementById("error");
const contador = document.querySelector("#contador");
const zonaDibuj = document.getElementById("zonadibujo");
let fraseSinEsp; //frase sin espacios
let puntero = 0; // posicion de la letra a poner en una celda
let fallidos = 0;
let colorAleatorio;

/*****************************************DECLARAMOS EVENTOS***********************************************/
jugar.addEventListener("click", dibujarTabla);
limpiar.addEventListener("click", limpiarCampos);


/*****************************************DECLARAMOS FUNCIONES***********************************************/
/**
 * Función que dibuja la tabla
 */
function dibujarTabla() {
    if (validarFrase() && validarCompl()) {//si validan los campos     
        puntero = 0; //ponemos el puntero a 0 al iniciar
        fallidos = 0;
        let longitud = trocearFrase(frase.value).length;
        let escoger = escogerTdRandom(compl.value, longitud); //array posiciones
        error.innerHTML = "";
        //console.log(trocearFrase(frase.value));//comprobamos
        let p1 = document.createElement("p");
        p1.setAttribute("id","restantes"); //añadimos el id al elemento p
        p1.innerHTML="Número de letras restantes por descubrir: " + fraseSinEsp.length;
        let p2 = document.createElement("p");
        p2.setAttribute("id","fallidos"); //añadimos el id al elemento p
        p2.innerHTML="Número de intentos fallidos: " + fallidos;
        let tabla = document.createElement("table"); //creamos la tabla
        //le ponemos los atributos a la tabla:
        tabla.setAttribute("border", "1"); //añadimos un borde
        tabla.setAttribute("class", "tablerodibujo"); //añadimos la clase tablerodibujo
        let caption = document.createElement("caption"); //añadimos el caption de la tabla
        caption.textContent = "Haga CLICK en cualquier celda para encontrar la frase";
        tabla.appendChild(caption); //añadimos la caption a la tabla
        let contador = 0;
        //mediante un bucle anidado creamos N tr y N td introducidas por el usuario
        for (let i = 0; i < compl.value; i++) {
            let fila = document.createElement("tr");
            for (let j = 0; j < compl.value; j++) {
                let columna = document.createElement("td");
                contador++;
                if (escoger.includes(contador)) {
                    const letra = siguienteLetra();//escogemos la siguiente letra
                    columna.innerText = letra;//añadimos la letra con color al azar
                }
                fila.appendChild(columna); //metemos las td en las tr
            }
            tabla.appendChild(fila); //metemos las tr en la tabla
        }
        zonaDibuj.innerHTML = ""; //vaciamos la zona de dibujo
        zonaDibuj.appendChild(tabla); //añadimos la tabla al div
        aplicarEfectoEspecial(tabla); //añadimos un efecto especial a la tabla para que nos aparezca el color
        zonaDibuj.appendChild(p1); //añado el párrafo de letras restantes
        zonaDibuj.appendChild(p2); //añado el párrafo de intentos fallidoss
        activarTds();//llamamos a la función de hacer click en una td
    } else {
        zonaDibuj.innerHTML = "";
        alert("Campos no validados"); //salta alerta de envío cancelado
    }
}

/**
 * Función que valida la frase introducida
 * @returns
 */
function validarFrase() {
    let expresion2 = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü ]{1,50}$/; //expresión regular que deja introducir letras del alfabeto español (max 50)
    if (!expresion2.test(frase.value)) {
        //no sería necesario pasarlo a mayúsculas pero por si acaso
        //comprobamos que nombre cumple la expresión regular
        error.innerHTML += "<p>ERROR: Frase incorrecta</p>";
        return false;
    }
    return true;
}

/**
 * Función que borra el contenido de la frase introducida por el usuario (R1) y el número (R2)
 */
function limpiarCampos() {
    frase.value = "";
    compl.value = "";
    zonaDibuj.innerHTML = "";
}

/**
 * Función que valida los valores de complejidad
 * @returns
 */
function validarCompl() {
    if (compl.value > 50 || compl.value < 10) {
        error.innerHTML += "<p>ERROR: Complejidad incorrecta</p>";
        return false;
    }
    return true;
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
 * función que escoge las td en las que va a poner una letra
 * @param {*} dificultad - complejidad
 * @param {*} longitudF - longitud de la cadena sin espacios
 */
function escogerTdRandom(dificultad, longitudF) {
    let totalTd = dificultad * dificultad; //alto*ancho de la tabla
    let tds = []; //creamos array con todas las td
    for (let i = 0; i < totalTd; i++) {
        tds.push(i); //añado el elemento al array
    }
    //ordenamos el array de manera aleatoria
    tds.sort(function () {
        return Math.random() - 0.5;
    }); 
    //console.log(tds);//comprobamos

    tds = tds.slice(0, longitudF); //cogemos sólo las tds necesarias
    //console.log(tds);//comprobamos
    return tds;
}

/**
 * Función que nos devuelve una letra de la frase
 * @returns
 */
function siguienteLetra() {
    if (puntero < fraseSinEsp.length) {
        return fraseSinEsp[puntero++];
    }
}

/**
 * función que crea los eventos en las tds
 */
function activarTds() {
    let tdDibujo = document.querySelectorAll("#zonadibujo td"); //cogemos los td del div con id=zonadibujo --> es un conjunto de nodos (900)
    //const tdDibujo = zonaDibuj.getElementsByTagName('td'); //valdría una u otra
    console.log(tdDibujo);
    for (let i = 0; i < tdDibujo.length; i++) {
        tdDibujo[i].addEventListener("click", comprobarLetra); //hacemos un addEventListener por cada td
    }
}

/**
 * Función que comprueba si la td no está vacía, descubre la letra y saca el número de letras por descubrir
 */
function comprobarLetra() {
    let parrafoRest = document.querySelector('#restantes');
    let parrafoFall = document.querySelector('#fallidos');
    
    if(this.innerHTML !=""){
        aplicarEfectoEspecial(this); //aplicamos el efecto a la td
        this.style.color = generarColorAleatorio();//ponemos el color aleatorio a la letra
        let elementoAEliminar = this.innerHTML; //letra a eliminar del array

        // Obtiene el índice del elemento a eliminar
        let indice = fraseSinEsp.indexOf(elementoAEliminar);

        if (indice !== -1) {
            fraseSinEsp.splice(indice, 1); // Utiliza el método splice para eliminar el elemento del array
            parrafoRest.innerHTML = "Número de letras restantes por descubrir: " + fraseSinEsp.length; //para que actualice las letras restantes
        }    
        //console.log(fraseSinEsp);//comprobamos
    }else{
        fallidos++; 
        parrafoRest.innerHTML = "Número de letras restantes por descubrir: " + fraseSinEsp.length; //para que actualice las letras restantes
        parrafoFall.innerHTML = "Número de intentos fallidos: " + fallidos;
    }
    if(fraseSinEsp.length==0) {//si ya no hay letras para buscar, es decir, ya encontró todas
        alert("¡Encontraste todas las letras!");
        limpiarCampos();
    }
}

/**
 * Función que me genera un color aleatorio rgba con opacidad al 100%
 * @returns 
 */
function generarColorAleatorio() {
    // Generar componentes de color aleatorios (valores entre 0 y 255)
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
  
    // Crear el color en formato RGB
    colorAleatorio = "rgba(" + r + ", " + g + ", " + b + ", 1.0)";
    console.log(colorAleatorio);
    return colorAleatorio;
  }

  /**
     * Función que aplica un efecto especial a la td cuando se descubre una letra
     * @param {*} td - La td en la que se hizo clic
     */
  function aplicarEfectoEspecial(elemento) {
    elemento.animate([
        { backgroundColor: generarColorAleatorio(), color: 'white' },
        { backgroundColor: 'white', color: 'black' }
    ], {
        duration: 1000,
        iterations: 1
    });
}
