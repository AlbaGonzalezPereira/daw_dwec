/*
 * EN ESTA PROPUESTA DE SOLUCIÓN:
 *   Creamos una clase (solución más actual)
 */
class Edificio {
  constructor(calle, numero, codigopostal) {
    // Propiedades
    this.calle = calle;
    this.numero = numero;
    this.codigoPostal = codigopostal;
    this.plantas = new Array();

    // Imprimimos el mensaje por defecto cada vez que se crea un objeto Edificio.
    const parrafo = document.createElement("p");
    parrafo.innerText =
      "Construido nuevo edificio en calle: " +
      calle +
      ", nº: " +
      numero +
      ", CP: " +
      codigopostal;
    document.body.appendChild(parrafo);
  }

  agregarPlantasYPuertas(numplantas, puertas) {
    let totalplantas = this.plantas.length;
    let inicio = totalplantas <= 0 ? 0 : totalplantas;

    for (let i = inicio; i < totalplantas + numplantas; i++) {
      this.plantas[i] = new Array(puertas);
      for (let j = 0; j < puertas; j++) this.plantas[i][j] = ""; // Propietario de esa puerta en blanco.
    }
  }

  modificarNumero(numero) {
    this.numero = numero;
  }

  modificarCalle(calle) {
    this.calle = calle;
  }

  modificarCodigoPostal(codigo) {
    this.codigoPostal = codigo;
  }

  imprimeCalle() {
    return this.calle;
  }

  imprimeNumero() {
    return this.numero;
  }

  imprimeCodigoPostal() {
    return this.codigoPostal;
  }

  agregarPropietario(nombre, planta, puerta) {
    this.plantas[planta - 1][puerta - 1] = nombre;
    const parrafo = document.createElement("p");
    parrafo.innerText =
      nombre +
      " es ahora el propietario de la puerta " +
      puerta +
      " de la planta " +
      planta;
    document.body.appendChild(parrafo);
  }

  imprimePlantas() {
    // Imprimirá las plantas y nombres de propietarios de cada puerta de un edificio.
    const cabecera = document.createElement("h2");
    cabecera.innerText =
      "Listado de propietarios del edificio calle " +
      this.calle +
      " número " +
      this.numero;
    document.body.appendChild(cabecera);

    for (let i = 0; i < this.plantas.length; i++)
      for (let j = 0; j <= this.plantas[i].length - 1; j++) {
        const parrafo = document.createElement("p");
        parrafo.innerText =
          "Propietario del piso " +
          (j + 1) +
          " de la planta " +
          (i + 1) +
          ": " +
          this.plantas[i][j];
        document.body.appendChild(parrafo);
      }
  }
}

/**
 * Creamos la clase Constructora
 */
class Constructora {
  constructor() {
    //añadimos el constructor vacío para crear edificios
    // Propiedades
    this.edificios = new Array();
    this.cont = 0; //creamos una variable contador para que nos sume los edificios que hay

    //creamos un párrafo para que nos aparezca cuando se crea una nueva constructora:
    const parrafo = document.createElement("p");
    parrafo.innerText = "Se ha creado una nueva constructora";
    document.body.appendChild(parrafo);
  }

  /**
   * método que agrega edificios a la constructora
   * @param {*} edificio
   */
  agregarEdificio(edificio) {
    this.edificios[this.cont] = edificio; //añadimos el edificio en la posición deseada
    this.cont++;
    const parrafo = document.createElement("p");
    parrafo.innerText = "Se ha añadido un nuevo edificio a la constructora"; //cuando añadimos un edificio sale este mensaje
    document.body.appendChild(parrafo);
  }

  /**
   * método que va a listar los edificios de la constructora con el formato:
   * Edificio 1: <calle>, <número>, <Código postal>
   * Edificio 2: <calle>, <número>, <Código postal>
   */
  listarEdificios() {
    // primero comprobamos que tenga edificios el array
    if (this.edificios.length > 0) {
        const titulo = document.createElement("h4");
        titulo.innerText = "Listado de Edificios en la constructora: ";
        document.body.appendChild(titulo);
      for (let i = 0; i < this.edificios.length; i++) {
        const parrafo = document.createElement("p");
        parrafo.innerText = "Edificio " + (i + 1) 
        + ": <" + this.edificios[i].imprimeCalle() + ">, <" 
        + this.edificios[i].imprimeNumero() + ">, <" 
        + this.edificios[i].imprimeCodigoPostal() + ">";
        document.body.appendChild(parrafo);
      }//fin for
    } else { // en caso de que no haya edificios
      const parrafo = document.createElement("p");
      parrafo.innerText = "No hay edificios en la constructora"; //cuando añadimos un edificio sale este mensaje
      document.body.appendChild(parrafo);
    }
  }

  //incluimos un método a mayores, que eliminará edificios de la constructora al pasarle una posición:
  eliminarEdificio(posicion){
    if (this.edificios.length > 0) {
        const parrafo = document.createElement("p");
        //usamos el método splice() porque así elimina y reduce el array
        const edificioEliminado = this.edificios.splice(posicion - 1, posicion-1);
        //this.edificios.slice(posicion,1); --> elimina pero no reduce el array
        console.log(edificioEliminado);
        parrafo.innerText = "Se ha eliminado el edificio " + posicion
        + "de la calle " + edificioEliminado[0].imprimeCalle() + ", número " 
        + edificioEliminado[0].imprimeNumero() + " y código postal " 
        + edificioEliminado[0].imprimeCodigoPostal();
        document.body.appendChild(parrafo);
    }
    
  }



} //fin Constructora



/* *******************************************
 *
 *
 */
const cabecera = document.createElement("h1");
cabecera.innerText = "TRABAJANDO CON OBJETOS EN JAVASCRIPT";
document.body.appendChild(cabecera);

//-------------------------------------------------------
let parrafo = document.createElement("p");
parrafo.innerText =
  "Instanciamos 3 objetos edificioA, edificioB y edificioC con estos datos:";
document.body.appendChild(parrafo);

var edificioA = new Edificio("Garcia Prieto", "58", 15706);
var edificioB = new Edificio("Camino Caneiro", "29", 32004);
var edificioC = new Edificio("San Clemente", "s/n", 15705);

parrafo = document.createElement("p");
parrafo.innerText = `El código postal del edificio A es: ${edificioA.imprimeCodigoPostal()}
                     La calle del edificio C es: ${edificioC.imprimeCalle()}
                     El edificio B está situado en la calle ${edificioB.imprimeCalle()}  número ${edificioB.imprimeNumero()}
                     Agregamos 2 plantas y 3 puertas por planta al edificio A...`;
document.body.appendChild(parrafo);

// --------------------------------------------------------------------------
document.body.appendChild(document.createElement("br"));
edificioA.agregarPlantasYPuertas(2, 3);

parrafo = document.createElement("p");
parrafo.innerText = "Agregamos 4 propietarios al edificio A...";
document.body.appendChild(parrafo);

edificioA.agregarPropietario("Jose Antonio Lopez", 1, 1);
edificioA.agregarPropietario("Luisa Martinez", 1, 2);
edificioA.agregarPropietario("Marta Castellón", 1, 3);
edificioA.agregarPropietario("Antonio Pereira", 2, 2);
document.body.appendChild(document.createElement("br"));
edificioA.imprimePlantas();

// --------------------------------------------------------------------------
document.body.appendChild(document.createElement("br"));
document.body.appendChild(document.createElement("br"));
parrafo = document.createElement("p");
parrafo.innerText = "Agregamos 1 planta más al edificio A...";
document.body.appendChild(parrafo);
edificioA.agregarPlantasYPuertas(1, 2);

// --------------------------------------------------------------------------
document.body.appendChild(document.createElement("br"));
document.body.appendChild(document.createElement("br"));
parrafo = document.createElement("p");
parrafo.innerText =
  "Agregamos 1 propietario más al edificio A planta 3, puerta 2...";
document.body.appendChild(parrafo);
edificioA.agregarPropietario("Pedro Meijide", 3, 2);

// --------------------------------------------------------------------------
document.body.appendChild(document.createElement("br"));
edificioA.imprimePlantas();

//----------------------------PARTE DOS -------------------------------
document.body.appendChild(document.createElement("br"));
const titulo = document.createElement("h3");
titulo.innerText = "Ejercicio parte 2";
document.body.appendChild(titulo);
//Creamos una clase constructora
let constructoraA = new Constructora();
document.body.appendChild(document.createElement("br"));
//Agregamos los edificios a la constructora:
constructoraA.agregarEdificio(edificioA);
constructoraA.agregarEdificio(edificioB);
constructoraA.agregarEdificio(edificioC);
constructoraA.listarEdificios();
document.body.appendChild(document.createElement("br"));
//eliminamos edificios de la constructora:
constructoraA.eliminarEdificio(2);
constructoraA.listarEdificios();

