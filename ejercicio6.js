console.log("Algoritmo burbuja");

/* Lo que vamos a hacer es ir comparando uno a uno los 
elementos con su elemento anterior, y si es mas pequeño que el elemento
entonces lo va a cambiar de lugar, es hacer un for anidado, en el primero va a hacer 
uno a uno los elementos y en el siguiente es ese cambio
de posición */


array =[3,6,12,5,100,1];
console.log(`El array inicial es: ${array}`);

for (let i = 0; i < array.length; i++) {
   for (let j = 0; j < (array.length)-1; j++) {
    if (array[j] > array[j+1]){
        let cambioIndice = array[j];
        array[j] = array[j+1];
        array[j+1] = cambioIndice;
    }
   }
   console.log(`La iteración ${i} es ${array}`);
}
console.log(`El arreglo final es ${array}`);