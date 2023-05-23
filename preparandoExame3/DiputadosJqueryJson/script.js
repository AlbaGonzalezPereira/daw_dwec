let peticion;
const iniciar = () => {
    $(() => {
        $.ajax({
            url: "https://dadosabertos.camara.leg.br/api/v2/deputados?ordem=ASC&ordenarPor=nome",
            type: "GET",
            async: true,
            success: (respuesta) => {
                console.log(respuesta);
                console.log(respuesta.dados[0].nome);

                //creamos la otra tabla del otro tipo de festividad (else)
                let $table = $("<table>");
                let $caption = $("<caption>").text("Diputados");
                let $tr = $("<tr>").append($("<th>").text("Nombre"));
                $table.append($caption,$tr);

                $((respuesta).dados).each(function(datos){
                        let $tr = $("<tr>");
                        console.log((respuesta).dados[datos].nome);
                        let $td1 = $("<td>").text($((respuesta).dados)[datos].nome);
                        $table.append($tr,$td1);
            });

                $("#resultados").append($table);
            },
        });
    });
};

window.addEventListener("load", iniciar, false);
