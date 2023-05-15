let peticion;

//declaramos las variables que hacen referencia a cada div
const enlace1 = document.querySelector("#enlace1");
const enlace2 = document.querySelector("#enlace2");
const enlace3 = document.querySelector("#enlace3");
const enlace4 = document.querySelector("#enlace4");

/**
 * Función que crea un objeto XMLHttpRequest para recibir después el XML mediante una petición get 
 */
const iniciar1 = () => {
    peticion = new XMLHttpRequest(); //para hacer peticiones en xml y json
    //hacemos la petición mediante get a la web que nos va a devolver el xml
    peticion.open("GET", "https://api.geekdo.com/xmlapi/geeklist/315535");
    peticion.send(); //enviamos
    peticion.addEventListener("load", cargada1); //creamos un evento
};

/**
 * Función que crea un objeto XMLHttpRequest para recibir después el JSON mediante una petición get 
 */
const iniciar2 = () => {
    peticion = new XMLHttpRequest(); //para hacer peticiones en xml y json
    //hacemos la petición mediante get a la web que nos va a devolver el xml
    peticion.open("GET", "https://date.nager.at/api/v3/publicholidays/2023/ES");
    peticion.send(); //enviamos
    peticion.addEventListener("load", cargada2); //creamos un evento
};

/****************************************************************************************** */
/******************************************PETICIÓN XML************************************ */
/**
 * Función que hace la implementación de manipulación de los datos xml y los añade al html
 */
const cargada1 = () => {
    let cabecera = document.querySelector(".im");//seleccionamos el div con la clase="im", que es donde está la imagen
    cabecera.innerHTML = "";//para limpiar la cabecera
    let img = document.createElement("img"); //crea el elemento img
    //con img.setAttribute, modificamos los atributos src y alt de img
    img.setAttribute(//modificamos src
        "src",
        "https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/media/image/2015/01/83339-aficion-auge-barata-ideal-practicar-amigos.jpg?tf=1200x"
    );
    img.setAttribute("alt", "juegos de mesa");//modificamos alt
    cabecera.appendChild(img);//añade el elemento img a cabecera
    const heading = document.querySelector(".titulo");//declaramos constante título
    heading.innerHTML = "<h1>Petición XML mediante AJAX</h1> <p> <span>URL API: </span> <a href=\"https://api.geekdo.com/xmlapi2\" target=\"_blank\"> https://api.geekdo.com/xmlapi2</a></p>";

    /***********************DECLARAMOS VARIABLES *********************** */
    let resultados = peticion.responseXML; //cogemos el xml
    const titulo = resultados.querySelector("title");
    const div = document.querySelector("#resultados");
    const desc = resultados.querySelector("description");
    const items = resultados.querySelectorAll("item"); //seleccionamos todas las tag item
    //console.log(items); //comprobamos

    /***********************CREAMOS ELEMENTOS DEL DIV********************* */
    div.innerHTML = "";//para limpiar el resultado anterior

    let juegos = document.createElement("dl");

    //recorremos los items
    for (let i = 0; i < items.length; i++) {
        const element = items[i];

        let nombreJuego = document.createElement("dt");//creamos las dt
        nombreJuego.textContent =
            i + 1 + ". " + items[i].getAttribute("objectname");
        juegos.appendChild(nombreJuego);

        let descJuego = document.createElement("dd");//creamos las dd
        descJuego.textContent = items[i].querySelector("body").textContent;
        juegos.appendChild(descJuego);
        juegos.appendChild(document.createElement("br"));
    }
    
    div.appendChild(juegos);//agregamos todo el contenido
};

/****************************************************************************************** */
/*****************************************PETICIÓN JSON************************************ */
/**
 * Función que hace la implementación de manipulación de los datos json y los añade al html
 */
const cargada2 = () => {
    //console.log(peticion);//comprobamos
    let cabecera = document.querySelector(".im");//seleccionamos el div con la clase="im", que es donde está la imagen
    cabecera.innerHTML = "";//para limpiar la cabecera
    let img = document.createElement("img");//crea el elemento img
    //con img.setAttribute, modificamos los atributos src y alt de img
    img.setAttribute(//modificamos src
        "src",
        "https://img.ayuntamiento-espana.es/dias-festivos-espana-2022.jpg"
    );
    img.setAttribute("alt", "Madrid");//modificamos alt
    cabecera.appendChild(img);//añadimos img
    const heading = document.querySelector(".titulo");//declaramos constante título
    heading.innerHTML = "<h1>Petición JSON mediante AJAX</h1> <p> <span>URL API: </span> <a href=\"https://date.nager.at/api/v3/publicholidays/2023/ES\" target=\"_blank\"> https://date.nager.at/api/v3/publicholidays/2023/ES</a></p>";

    /***********************DECLARAMOS VARIABLES *********************** */
    let festivos = JSON.parse(peticion.responseText);
    const div = document.querySelector("#resultados");
    //console.log(festivos);//comprobamos

    /**************************CREAMOS LAS TABLAS**************************** */
    let tabla1 = crearTabla("Festividades nacionales");//festivos nacionales
    let tabla2 = crearTabla("Otras festividades"); //Para los festivos de cada comunidad

    for (let i = 0; i < festivos.length; i++) {
        if (festivos[i].global == true) {//selecciona los festivos nacionales, que son cuando global = true
            let fila = document.createElement("tr");
            let columna1 = document.createElement("td");
            let columna2 = document.createElement("td");
            const fecha = festivos[i].date;
            const festivo = festivos[i].localName;
            columna1.textContent = fecha;
            columna2.textContent = festivo;
            fila.appendChild(columna1);
            fila.appendChild(columna2);
            tabla1.appendChild(fila);
        } else {//selecciona los otros festivos, por comunidades, que son cuando global = false
            let fila = document.createElement("tr");
            let columna1 = document.createElement("td");
            let columna2 = document.createElement("td");
            const fecha = festivos[i].date;
            const festivo = festivos[i].localName;
            columna1.textContent = fecha;
            columna2.textContent = festivo;
            fila.appendChild(columna1);
            fila.appendChild(columna2);
            tabla2.appendChild(fila);
        }
    }

    div.innerHTML = "";
    div.appendChild(tabla1);
    div.appendChild(tabla2);
};

/**
 * Función que nos crea una tabla con todos sus elementos
 * @param {*} texto - caption de la tabla
 * @returns - tabla
 */
const crearTabla= (texto)=>{
    let tabla = document.createElement("table");
    let capt = document.createElement("caption");
    capt.textContent = texto;//lo que se pasa por parámetro
    tabla.appendChild(capt);
    let encabezadoFil = document.createElement("tr");
    let encabezadoColA = document.createElement("th");
    encabezadoColA.textContent = "Fecha";
    encabezadoFil.appendChild(encabezadoColA);
    let encabezadoColB = document.createElement("th");
    encabezadoColB.textContent = "Festividad";
    encabezadoFil.appendChild(encabezadoColB);
    tabla.appendChild(encabezadoFil);
    return tabla;
}

/****************************************************************************************** */
/***************************************PETICIÓN XML-JQUERY******************************** */
/**
 * Función que hace la implementación de manipulación de los datos xml y los añade al html mediante JQuery
 */
const iniciar3 = () => {
    $(() => {
        $.ajax({
            url: "https://api.geekdo.com/xmlapi/geeklist/315535",
            type: "GET",
            async: true,
            success: (respuesta) => {//respuesta va a tener el xml
                $(".im").html("");//limpiamos la imagen
                let $imagen = $("<img>");//creamos el elemento img
                //añadimos los atributos src y alt
                $imagen.attr("src","https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/media/image/2015/01/83339-aficion-auge-barata-ideal-practicar-amigos.jpg?tf=1200x");
                $imagen.attr("alt","juegos de mesa");
                $(".im").append($imagen);//añadimos la imagen al div de clase ="im"
                $(".titulo").html("<h1>Petición JSON mediante JQUERY</h1> <p> <span>URL API: </span> <a href=\"https://api.geekdo.com/xmlapi2\" target=\"_blank\"> https://api.geekdo.com/xmlapi2</a></p>");
                //console.log("entra");//comprobamos
                let $lista = $("<dl>");

                $(respuesta)
                    .find("item")//buscamos todos los tag item
                    .each(function (index) {//los recorremos. index es como el i del for
                        //por cada uno crea un dt que tiene el valor del atributo objectname de los items
                        let $dt = $("<dt>").text(
                            index + 1 + ". " + $(this).attr("objectname")
                        );
                        $lista.append($dt);//añade los dt al dl
                        //crea los dd y su contenido va a ser el texto que tiene la tag body
                        let $dd = $("<dd>").text($(this).find("body").text());
                        $lista.append($dd);//añade a las dl
                        //console.log(index); //comprobamos
                    });
                $("#resultados").html("");
                $("#resultados").append($lista);
            },
        });
    });
};

/****************************************************************************************** */
/**************************************PETICIÓN JSON-JQUERY******************************** */
/**
 * Función que hace la implementación de manipulación de los datos json y los añade al html mediante JQuery
 */
const iniciar4 = () => {
    $(() => {
        $.ajax({
            url: "https://date.nager.at/api/v3/publicholidays/2023/ES",//url a la que le haces la petición
            type: "GET",//tipo de petición
            async: true,
            success: (respuesta) => {//respuesta va a tener el json
                $(".im").html("");//limpiamos la imagen
                let $imagen = $("<img>");//creamos el elemento img
                //añadimos los atributos src y alt
                $imagen.attr("src","https://img.ayuntamiento-espana.es/dias-festivos-espana-2022.jpg");
                $imagen.attr("alt","Madrid");
                $(".im").append($imagen);//añadimos la imagen al div de clase ="im"
                $(".titulo").html("<h1>Petición JSON mediante JQUERY</h1> <p> <span>URL API: </span> <a href=\"https://date.nager.at/api/v3/publicholidays/2023/ES\" target=\"_blank\"> https://date.nager.at/api/v3/publicholidays/2023/ES</a></p>");
                //console.log(respuesta); //comprobamos               
                // //console.log("entra");//comprobamos

                //creamos una tabla de un tipo de festividad (if)
                let $table1 = $("<table>");
                let $caption1 = $("<caption>").text("Festividades nacionales");
                let $tr1 = $("<tr>").append($("<th>").text("Fecha"));
                $tr1.append($("<th>").text("Festividad"));
                $table1.append($caption1,$tr1);

                //creamos la otra tabla del otro tipo de festividad (else)
                let $table2 = $("<table>");
                let $caption2 = $("<caption>").text("Otras festividades");
                let $tr2 = $("<tr>").append($("<th>").text("Fecha"));
                $tr2.append($("<th>").text("Festividad"));
                $table2.append($caption2,$tr2);

                //recorremos todos los datos que nos da el json
                $(respuesta).each(function(datos){
                    if($(respuesta)[datos].global==true){//cuando global == true
                        let $tr = $("<tr>");
                        let $td1 = $("<td>").text($(respuesta)[datos].date);
                        let $td2 = $("<td>").text($(respuesta)[datos].localName);
                        $table1.append($tr,$td1,$td2);
                    }
                    else{//cuando global == false
                        let $tr = $("<tr>");
                        let $td1 = $("<td>").text($(respuesta)[datos].date);
                        let $td2 = $("<td>").text($(respuesta)[datos].localName);
                        $table2.append($tr,$td1,$td2);
                    }
                    //console.log($(respuesta)[datos].date);//comprobamos
                });
                
                 $("#resultados").html("");//limpiamos los datos
                 $("#resultados").append($table1,$table2);//añadimos las tablas al div con id ="resultados"
            },
        });
    });
};

//creamos los eventos que se activarán al hacer clic
enlace1.addEventListener("click", iniciar1);
enlace2.addEventListener("click", iniciar2);
enlace3.addEventListener("click", iniciar3);
enlace4.addEventListener("click", iniciar4);


window.addEventListener("load", iniciar1, false);//Cuando carga la página llama a la función iniciar1

