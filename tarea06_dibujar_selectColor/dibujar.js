//Para que cuando termine de cargar el DOM haga lo siguiente (al no tener defer)
document.addEventListener("DOMContentLoaded", function () {
    //declaramos variables:
    const zonaDibuj = document.getElementById("zonadibujo");
    const pincel = document.getElementById("pincel");
    const tabla = document.createElement("table"); //creamos la tabla
    let paleta = document.getElementById("paleta");
    let colorSelect = "color1"; //inicializamos al color en el html seleccionado
    let pintarActivo = false;
    
    //llamamos a la funciones
    dibujarTabla();
    eventoColor();
    activarPincel();

    /*****************************************DECLARAMOS FUNCIONES***********************************************/
    /**
     * Función que dibuja la tabla
     */
    function dibujarTabla() {
        //le ponemos los atributos a la tabla:
        tabla.setAttribute("border", "1"); //añadimos un borde
        tabla.setAttribute("class", "tablerodibujo"); //añadimos la clase tablerodibujo
        let caption = document.createElement("caption"); //añadimos el caption de la tabla
        caption.textContent = "Haga CLICK en cualquier celda para activar/desactivar el Pincel";
        tabla.appendChild(caption);

        //mediante un bucle anidado creamos 30 tr y 30 td
        for (let i = 0; i < 30; i++) {
            let fila = document.createElement("tr");
            for (let j = 0; j < 30; j++) {
                let columna = document.createElement("td");
                fila.appendChild(columna); //metemos las td en las tr
            }
            tabla.appendChild(fila); //metemos las tr en la tabla
        }
        zonaDibuj.appendChild(tabla); //añadimos la tabla al div
    }

    /**
     * función que al hacer click en alguno de los 5 colores de la paleta, le asignará la clase "seleccionado".
     */
    function seleccionarColor() {
        const nodos = document.querySelectorAll("#paleta tr:first-child td"); //cogemos los td del primer tr de la tabla de id=paleta
        for (let i = 0; i < nodos.length; i++) {
            nodos[i].classList.remove("seleccionado"); //eliminamos la clase seleccionado de todos los td
            //console.log(nodos[i]);//comprobamos lo que hay en nodos[i]
        }
        colorSelect = this.classList[0]; //para que me seleccione color1, color2, color3, es decir, la primera clase
        this.classList.add("seleccionado"); //añadimos la clase seleccionado al color activo
    }

    /**
     * Función que cuando se haga "click" encima de cada un color llama a "seleccionarColor"
     */
    function eventoColor() {
        let colores = paleta.getElementsByTagName("td");
        for (let i = 0; i < colores.length - 1; i++) {
            colores[i].addEventListener("click", seleccionarColor); //cada vez que hacemos un click llama a la función seleccionarColor()
        }
    }

    /**
     * función que nos pone el pincel en estado Activado o en estado Desactivado
     */
    function activarPincel() {
        const tdDibujo = document.querySelectorAll("#zonadibujo td"); //cogemos los td del div con id=zonadibujo --> es un conjunto de nodos (900)
        //const tdDibujo = zonaDibuj.getElementsByTagName('td'); //valdría una u otra
        console.log(tdDibujo);
        for (let i = 0; i < tdDibujo.length; i++) {
            tdDibujo[i].addEventListener("click", activarPintar); //hacemos un addEventListener por cada td
            tdDibujo[i].addEventListener("mouseover", pintar); //para que al pasar el ratón empiece a pintar
        }
    }

    /**
     * función que al hacer un click en una celda nos activará para que empiece a pintar del color activo seleccionado
     */
    function activarPintar() {
        if (pintarActivo) {
            pincel.innerHTML = "PINCEL DESACTIVADO";
            pintarActivo = false; //para que cambie en cada click
        } else {
            pincel.innerHTML = "PINCEL ACTIVADO";
            pintarActivo = true;
            //console.log(this); //this hace referencia a la td clickeada por primera vez
            this.classList.add(colorSelect); //añade a la td clickeada el color seleccionado
        }
    }

    /**
     * función que, al mover el ratón por el tablero, pinta del color activo todas las celdas por las que se vaya pasando el ratón.
     */
    function pintar() {
        if (pintarActivo) {
            //si pintarActivo = true;
            for (let i = 0; i < this.classList.length; i++) {
                this.classList.remove(this.classList[i]); //elimina las otras clases/colores antes de asignarle un color
            }
            this.classList.add(colorSelect); //añade el color activo
        }
    }
});
