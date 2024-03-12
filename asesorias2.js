/* 

function sumaConReturn(a,b){
    const resultado= a+ b;
    return resultado;
}
//otra manera de hacerlo con funcion flecha
let sumaConReturn = (a,b) => {
    const resultado = a+b;
    return resultado;
}

//HOISTING hace que las funciones suban al inicio del programa
//no aplica a las variables


function sumaSinReturn(a,b){
    console.log(a+b);
}

//Lo guardo y despues imprimo
const sumaReturn = sumaConReturn(5,6);
console.log(sumaReturn);

//lo imprimo directamente
console.log(sumaConReturn(10,20));

//funcio anidada
console.log(sumaConReturn(sumaConReturn(10,20),10)); //40
sumaSinReturn(5,4); */

/* parametros => proceso;
parametro => proceso;
(parametros) => {
    codigo
    este si lleva return, si o si cada que lleva un bloque de codigo
} 
*/

/* let sumaSinReturn = function (a,b){
    console.log(a+b);
} */

//como ligar html con css
//paso 1: agregar el script de js con la etiqueta script va antes de la etqoueta de cierre de body


//conectar funciones de js con html
/* paso 1: agregar id a lo que quiera modificar
paso 2: seleccionar el objeto a usar con api dom */

document.getElementById("saludo").innerHTML = "Nuevo texto";

//Tarea ir a la documentacion




//const array1 = [1, 2, 3, 4];
function tuArregloSuma(array1){const valorInicial = 0;
const sumaArray = array1.reduce(
  (a, b) => a + b,
  valorInicial);
console.log(sumaArray);
}

function tuArregloMulti(array2){const valorInicial = 1;
    const multiArray = array2.reduce(
      (a, b) => a * b,
      valorInicial);
    console.log(multiArray);
    }
/* function tuArregloMulti(array1){
const valorInicialMulti=1;
const multiArray = array1.reduce(
    (c, d) => c*d,
    valorInicialMulti,

);
} */

tuArregloSuma([2,3,7]);
tuArregloMulti([2,3,7]);

