/* Ejercicio 1 */

const arreglo1 = [1, 2, 4, 5];
console.log(`Tu arreglo 1 es ${arreglo1}`);
const arreglo1Nuevo = arreglo1.map(function(numerosSimples){
    return numerosSimples*2;
});
console.log(`Tu nuevo arreglo es ${arreglo1Nuevo}`);
console.log(arreglo1Nuevo);


console.log("Con un arrow function");
const arreglo2 = [4,7,8,9];
console.log(`Tu arreglo 2 es ${arreglo2}`);
const arreglo2Nuevo = arreglo2.map(x => x*2);
console.log(arreglo2Nuevo);
console.log(`Tu nuevo arreglo es ${arreglo2Nuevo}`);