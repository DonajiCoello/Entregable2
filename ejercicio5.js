let people = ["Maria", "Dani", "Luis", "Juan", "Camila"];
//Imprime todos los nombres del array
console.log("Los nombres del array son:")
console.log(people);

//Elimina el nombre de "Dani"
//para eliminar utilizamos el splice(indice donde me quier encontrar, los elementos que voy a borrar)
let peopleSinDani=people.splice(1,1);
console.log(people);

//Elimina el nombre de "Juan"
let peopleSinJuan=people.splice(2,1);
console.log(people);

//Mueve el nombre de Luis al frente del arreglo 
//Se me ocurre eliminar el nombre y luego pasarlo al frente
let eliminamosLuis = people.splice(1,1);
console.log(people);
let agregamosaLuis = people.unshift("Luis");
console.log(people);

//Añade tu nombre al final del arreglo
let agregoMiNombre = people.push("Dona");
console.log(people);

//Utilizando un ciclo, haz que se muestren los nombres 
//en la consola y solo despues de que aparzeca el nombre de Maria
//termina el ciclo

for (peopl of people){
    console.log(peopl)
    if (peopl === "Maria"){
        break;
    }
}

//Escribe un comando que te de el indice de el elementp Maria

let indexMaria = people.indexOf("Maria");
console.log(indexMaria);