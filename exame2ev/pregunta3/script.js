const frase = document.getElementById("frase");
const valor = document.querySelector("input");
const error = document.getElementById("error");
const correcta = document.getElementById("correcta");
const botonEnviar = document.getElementById("botonEnviar");
const botonReset = document.getElementById("botonReset");

//declaramos los eventos para cuando clickemos los botones
botonEnviar.addEventListener("click", palindromo);
botonReset.addEventListener("click", limpiar);

/**
 * función que nos invierte una cadena
 * @param {*} cad - texto a invertir
 * @returns
 */
function invertirCadena(cad) {
  return cad === "" ? "" : invertirCadena(cad.substr(1)) + cad.charAt(0);
}

/**
 * Función que nos valida la frase que se introduce
 * @param {*} frase - texto a validar
 * @returns
 */
function validar(frase) {
  let patron = /^[a-z ]+$/; //expresión regular que valida minúsculas de la a-z y espacios
  error.innerHTML = ""; //inicializamos error para que sólo lo muestre cuando haya un error (false)
  if (!patron.test(frase)) {
    error.innerHTML =
      "la frase no cumple los criterios. Introduzca una frase correcta";
    correcta.innerHTML = ""; //para que nos saque las frases de la función palindromo()
    return false;
  } else {
    return true;
  }
}

/**
 * Función que dice si es palíndromo y da la vuelta a la cadena
 */
function palindromo() {
  if (validar(frase.value)) {
    let texto = String(frase.value);
    let nospace = texto.replaceAll(" ", "");
    let invertidaSE = invertirCadena(nospace); //invertida sin espacios
    let invertidaFrase = invertirCadena(texto);
    //comprobamos con console.log --> habría que eliminar
    //console.log("La cadena invertida es: "+invertidaFrase);
    //console.log(nospace);
    if (nospace != invertidaSE) {
      correcta.innerHTML = "Escrita al revés: " + invertidaFrase + "<br>";
      correcta.innerHTML += "No es un palíndromo";
    } else {
      correcta.innerHTML = "Escrita al revés: " + invertidaFrase + "<br>";
      correcta.innerHTML += "Es un palíndromo ";
    }
  }
}

/**
 * función que nos limpia al darle a reset
 */
function limpiar() {
  frase.value = "";
  correcta.innerHTML = "";
  error.innerHTML = "";
}
