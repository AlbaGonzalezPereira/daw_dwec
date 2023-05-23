let peticion;
const iniciar = () => {
    $(() => {
        $.ajax({
            url: "https://dadosabertos.camara.leg.br/api/v2/deputados?ordem=ASC&ordenarPor=nome",
            type: "GET",
            headers:{//es para enviar una cabecera http con la petición. NO PONER
                'Accept':'application/xml'
            },
            async: true,
            success: (respuesta) => {
                console.log(respuesta);
                //creamos la otra tabla con el nombre de los diputados y su partido
                let $table = $("<table>");
                let $caption = $("<caption>").text("Diputados");
                let $tr = $("<tr>").append($("<th>").text("Nombre"));
                $tr.append($("<th>").text("Partido"));
                $table.append($caption,$tr);

                $(respuesta)
                        .find("deputado_")
                        .each(function (index) {//por cada etiqueta, nos busca la etiqueta nome y la etiqueta siglaPartido
                            let $tr = $("<tr>");
                            console.log($(this));                         
                            let $td1 = $("<td>").text($(this).find("nome").text());
                            let $td2 = $("<td>").text($(this).find("siglaPartido").text());
                            $table.append($tr,$td1,$td2);    
                    });

                $("#resultados").append($table);
            },
        });
    });
} 
window.addEventListener("load", iniciar, false);

