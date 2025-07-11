// Ejercicio 1: Contar hasta n 
const prompt=  require("prompt-sync")(); 
numero = prompt("Hasta donde quieres contar? ")
let contador = 1;
while (contador <= numero){
    console.log("numero ", contador); 
    contador = contador + 1;
} 

// Ejercicio 2: 
 let contraseña = prompt("Contraseña de cuatro digitos") 
while (contraseña !== "1234") {
    console.log("Contraseña incorrecta");
    contraseña = prompt("Intenta nuevamente:");
}
console.log("Contraseña correcta");