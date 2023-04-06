const botonEnviar = document.getElementById("botonEnviar");
const botonReset  = document.getElementById("botonReset");
const parrafo     = document.getElementById('parrafo1');
const entrada     = document.getElementById('entrada1');   

botonEnviar.addEventListener('click', dibujarCuadrado);
botonReset.addEventListener('click', borrarCuadrado);



function dibujarCuadrado() {
    const numero = Number(entrada.value);
    let cadena="";
    cadena = '';
    let cont=1; 
    let serieFibo=[];  
    let maximo;
    let cifras;   
    let numpunto; 
    if ( numero >= 1 && numero <= 20) {
        cadena += ("<table> ");
        for (let fila = 1; fila <= numero; fila++) {
            
            for (let columna = 1; columna <= numero; columna++) {
                if ( fila    == 1 || fila    == numero ||
                     columna == 1 || columna == numero) {
                        serieFibo.push(calcularFibonacciRecursiva(cont));
                        cont++;
 
                     }
                    }
                }
                //console.log(serieFibo);
                maximo=serieFibo[serieFibo.length-1];
                //console.log(maximo);
                cifras=maximo.toString().length;
                //console.log(cifras);
                for (let p=0; p<serieFibo.length;p++){
                    if(serieFibo[p].toString().length<cifras){
                        numpunto=cifras-serieFibo[p].toString().length;

                        serieFibo[p]=".".repeat(numpunto)+serieFibo[p];

                    }
                    //else
                    //serieFibo[p]+=""; //es igual a serieFibo[p].toString()
                    
                }
                console.log(serieFibo);
        cont=1;
        for (let fila = 1; fila <= numero; fila++) {
            cadena += ("<tr>");
            for (let columna = 1; columna <= numero; columna++) {
                if ( fila    == 1 || fila    == numero ||
                     columna == 1 || columna == numero) {
                          
                        
                       // if(cont <10){
                            cadena += ("<td align='right'>"+ serieFibo[cont-1]+"</td>");
                            // serieFibo.push(calcularFibonacciRecursiva(cont));
                            // maximo = Math.max(serieFibo);
                            
                        //}

                        // else if (cont<100){
                        //     cadena += ('\u00a0' + '\u00a0' + '\u00a0'+ calcularFibonacciRecursiva(cont));
                        // }

                        // else if (cont<1000){
                        //     cadena += ('\u00a0' + '\u00a0'+ calcularFibonacciRecursiva(cont));
                        // }
                         
                        // else if (cont<10000){
                        //     cadena += ('\u00a0' + calcularFibonacciRecursiva(cont));
                        // }
        
                        // else{
                        //     cadena += calcularFibonacciRecursiva(cont);
                        // }
                    
                    cont++;
                } else {
                    //cadena += ('\u00a0' + '\u00a0'+ '\u00a0'+ '\u00a0'+ '\u00a0');
                    cadena += ("<td></td>");
                }
            }
            cadena += ("</tr>");
            //cadena += '\n';
        }
        cadena += ("</table>");
        
                            //console.log(maximo);
        parrafo.innerHTML = cadena;
        entrada.focus();
    } else {
        alert("Por favor, introduce un número comprendido entre 1 y 20, ambos incluidos");
    }
}

function borrarCuadrado() {
    parrafo.innerHTML = '';
}


/*
 *  función que calcula el Fibonacci de manera Recursiva
 *
*/
function calcularFibonacciRecursiva (termino) {
    if ( termino < 2 ) {
        return termino;
    } else {
        return  calcularFibonacciRecursiva(termino - 1) + calcularFibonacciRecursiva(termino - 2);
    }
}

