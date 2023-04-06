// Clase llamada edificio que usaré para crear objetos
class Edificio {
  calle;
  numero;
  codigo;
  nedificio; //metí este atributo a mayores para que salgan los edificios A, B, C
  plantas;
  puertas;
  propietarios;

  /**
   * Constructor de la clase
   * @param {*} nedificio // EdificioA, EdificioB, EdificioC
   * @param {*} calle //calle del edificio
   * @param {*} numero // número del edificio
   * @param {*} codigo // código postal de la dirección
   */
  constructor(nedificio, calle, numero, codigo) {
    this.nedificio = nedificio;
    this.calle = calle;
    this.numero = numero;
    this.codigo = codigo;
    this.propietarios = new Array(); // va a ser un array bidimensional de propietarios
    this.propietarios[0] = [];
    this.plantas = 0; // inicializo número de plantas
    this.puertas = 0; // inicializo número de puertas
    document.write(
      `<ul><li>Construido nuevo edificio en calle: ${calle}, nº: ${numero}, cp: ${codigo}</ul></li>`
    );
  } //fin constructor

  /*********************************** MÉTODOS DE OBJECTOS ********************************/
  /****************************************************************************************/

  /******************************** 1. AGREGAR ******************************/
  /**
   * método para agregar plantas y puertas
   * @param {*} numplantas
   * @param {*} puertas
   */
  agregarPlantasYPuertas(numplantas, puertas) {
    let piso = this.plantas; //creamos la variable para poner las plantas que tenemos
    this.plantas += numplantas; //Añadimos las plantas nuevas a las que ya teníamos
    //Creamos el array bidimensional de los propietarios
    for (let i = piso; i <= this.plantas - 1; i++) {
      // (this.plantas -1) porque la planta 1 es el elemento 0 del array (primera posición)
      this.propietarios[i] = new Array();
      for (let j = 0; j <= puertas - 1; j++) {
        // (puertas-1) porque la puerta 1 va a ser el elemento 0, es decir, la primera posición
        this.propietarios[i][j] = ""; //si queremos que aparezca el propietario en blanco
        //this.propietarios[i][j]="Sin propietario"; // si queremos que aparezca "Sin propietario"
      }
    }
  }

  /**
   * método para agregar propietarios
   * @param {*} nombre
   * @param {*} planta
   * @param {*} puerta
   */
  agregarPropietario(nombre, planta, puerta) {
    this.propietarios[planta - 1][puerta - 1] = nombre;
    document.write(
      "<ul><li>" +
        nombre +
        " es ahora el propietario de la puerta " +
        puerta +
        " de la planta " +
        planta +
        "</li></ul>"
    );
  }

  /******************************** 2. MODIFICAR ******************************/
  /**
   * método para modificar el número de plantas
   * @param {*} numero
   */
  modificarNumero(numero) {
    this.numero = numero;
  }

  /**
   * método para modificar el nombre de la calle, y que lo actualice
   * @param {*} calle
   */
  modificarCalle(calle) {
    this.calle = calle;
  }

  /**
   * método para modificar el número de código postal del edificio
   * @param {*} codigo //código postal
   */
  modificarCodigoPostal(codigo) {
    this.codigo = codigo;
  }

  /******************************** 3. IMPRIMIR ******************************/
  /**
   * método que imprime el nombre de la calle del edificio
   * @returns // si devolvemos sólo la calle
   */
  imprimeCalle() {
    //return this.calle;
    document.write(
      "<ul><li>La calle del " +
        this.nedificio +
        " es: " +
        this.calle +
        ".</li></ul>"
    );
  }

  /**
   * método que imprime el número de la calle
   * @returns // Devuelve el número del edificio.
   */

  imprimeNumero() {
    //return this.numero;
    document.write(
      "<ul><li>El " +
        this.nedificio +
        " está situado en la calle " +
        this.calle +
        " número " +
        this.numero +
        ".</li></ul>"
    );
  }

  /**
   * método que imprime el código postal
   * @returns // Devuelve el código postal del edificio.
   */
  imprimeCodigoPostal() {
    //return this.codigo;
    document.write(
      "<ul><li>El código postal del " +
        this.nedificio +
        " es: " +
        this.codigo +
        ".</li></ul>"
    );
  }

  /**
   * método que imprime las plantas
   */
  imprimePlantas() {
    document.write(
      "<h4> Listado de propietarios del edificio de la calle " +
        this.calle +
        " número " +
        this.numero +
        ":</h4>"
    );
    for (let i = 0; i <= this.propietarios.length - 1; i++) {
      //bucle plantas
      //document.write("probando numplantas");
      for (let j = 0; j <= this.propietarios[i].length - 1; j++) {
        //bucle propietarios
        //document.write("probando propietarios");
        document.write(
          "<ul><li>El propietario del piso " +
            (j + 1) +
            " de la planta " +
            (i + 1) +
            " es: " +
            this.propietarios[i][j] +
            "</li></ul>"
        );
      } // fin for propietarios
    } //fin for numplantas
  }

  /* 
  Debería de salir esto:
  Propietario del piso 1 de la planta 1: Jose Antonio Lopez
  Propietario del piso 2 de la planta 1: Luisa Martinez
  Propietario del piso 3 de la planta 1: Marta Castellón
  Propietario del piso 1 de la planta 2:
  Propietario del piso 2 de la planta 2: Antonio Pereira
  Propietario del piso 3 de la planta 2:
  Propietario del piso 1 de la planta 3:
  Propietario del piso 2 de la planta 3: Pedro Meijide
  */
} //fin class Edificio

/*********************************** CREANDO OBJECTOS ***********************************/
/****************************************************************************************/
// Creamos nuevos edificios:
let edificio1 = new Edificio("Edificio A", "Garcia Prieto", "58", 15706); // Construido nuevo edificio en calle: Garcia Prieto, nº: 58, CP: 15706.
let edificio2 = new Edificio("Edificio B", "Camino Caneiro", "29", 32004); // Construido nuevo edificio en calle: Camino Caneiro, nº: 29, CP: 32004.
let edificio3 = new Edificio("Edificio C", "San Clemente", "s/n", 15705); // Construido nuevo edificio en calle: San Clemente, nº: s/n, CP: 15705.
document.write("<br>");

/****************************************************************************************/
/**************************** SALIDA DE OBJECTOS EN PANTALLA ***************************/
// Imprimimos textos (cuando usemos la función con el return):
//document.write("<br>El código postal del " + edificio1.nedificio + " es: " + edificio1.codigo + "."); // El código postal del edificio A es: 15706.
//document.write("<br>La calle del " + edificio3.nedificio + " es: " + edificio3.calle +"."); //La calle del edificio C es: San Clemente.
//document.write("<br>El " + edificio2.nedificio + " está situado en la calle " + edificio2.calle + " número " + edificio2.numero + "."); //El edificio B está situado en la calle Camino Caneiro número 29.

edificio1.imprimeCodigoPostal(); // El código postal del Edificio A es: 15706.
edificio3.imprimeCalle(); //La calle del Edificio C es: San Clemente.
edificio2.imprimeNumero(); //El Edificio B está situado en la calle Camino Caneiro número 29.
document.write("<br>");

// Agregamos plantas e imprimimos listados:
edificio1.agregarPlantasYPuertas(2, 3);

// Agregamos 4 propietarios:
document.write(
  "<h4>Agregamos 4 propietarios al " + edificio1.nedificio + ": </h4>"
);
edificio1.agregarPropietario("Jose Antonio Lopez", 1, 1); //Jose Antonio Lopez es ahora el propietario de la puerta 1 de la planta 1
edificio1.agregarPropietario("Luisa Martinez", 1, 2); //Luisa Martinez es ahora el propietario de la puerta 2 de la planta 1
edificio1.agregarPropietario("Marta Castellón", 1, 3); //Luisa Martinez es ahora el propietario de la puerta 2 de la planta 1
edificio1.agregarPropietario("Antonio Pereira", 2, 2); //Antonio Pereira es ahora el propietario de la puerta 2 de la planta 2
document.write("<br>");

// Imprimimos listados:
edificio1.imprimePlantas();
document.write("<br>");

// Agregamos plantas y 1 propietario:
document.write(
  "<h4>Agregamos 1 propietario al " + edificio1.nedificio + ": </h4>"
);
edificio1.agregarPlantasYPuertas(1, 3);
edificio1.agregarPropietario("Pedro Mejide", 3, 2);
document.write("<br>");

// Imprimimos listados:
edificio1.imprimePlantas();
