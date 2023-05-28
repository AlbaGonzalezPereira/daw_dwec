const boton=document.getElementById('botonEnviar');
const numero =document.querySelector('input');
const parrafo = document.getElementById('error');
const fondo = document.querySelector('#fondo');

boton.addEventListener('click',abrirMsg);
fondo.addEventListener('click',cambiarFondo);

//dibujar cuadrado
const canvas   = document.querySelector('canvas');
const contexto2D = canvas.getContext('2d');


function abrirMsg() {
    let mensaje = prompt("Quieres enviar el número", numero.value);
    console.log(mensaje);
    if(numero.value >50 || numero.value <1 || numero.value==""){
        parrafo.innerHTML="Entrada no válida: debe estar comprendida entre 1 y 50";
        limpiarCanvas();
    }
    else{
        parrafo.innerHTML="";
        dibujar();
    }

       }

function cambiarFondo(){
    //document.body.style.backgroundColor="green";
    
        let simbolos, color;
        simbolos = "0123456789ABCDEF";
        color = "#";
    
        for(let i = 0; i < 6; i++){
            color = color + simbolos[Math.floor(Math.random() * 16)];
        }
    
        document.body.style.background = color;
}

function limpiarCanvas() {
    contexto2D.clearRect(0, 0, canvas.width, canvas.height);
}

document.addEventListener('DOMContentLoaded', () => {
    canvas.width = document.documentElement.clientWidth;
    canvas.height = document.documentElement.clientHeight;
  });
  
  function random(numero) {
    return Math.floor( Math.random() * numero);
  }
  
  function dibujar() {
    //si queremos los cuadrados todos iguales:
    //let colorCuadrado = `rgba(${random(256)},${random(256)},${random(256)},0.5)`;
    contexto2D.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < numero.value; i++) {
      contexto2D.beginPath();
      //contexto2D.fillStyle=colorCuadrado; --> rellena los cuadrados del mismo color
      //para que salgan los cuadrados de distintos colores:
      contexto2D.fillStyle = 'rgba('+random(256)+','+ random(256)+',' + random(256)+',' + 0.5 +')';
      let x = random(55);
      
      //contexto2D.arc(random(canvas.width), random(canvas.height), random(50), 0, 2 * Math.PI);
      contexto2D.fillRect(random(canvas.width), random(canvas.height), x, x);  
      contexto2D.fill();

      
    }
  }
  
  