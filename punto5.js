// Ejercicio 1: numeros hasta el 10
const prompt=  require("prompt-sync")(); 
for(let i=1; i <= 10; i++){
    console.log("numero",i) 
}

// Ejercicio 2: tabla de multiplicar 
let numero = prompt("Qué número quiere multiplicar?");
for (let i = 1; i <= 10; i++) {
    let multiplicacion = i * numero 
    console.log(i, "X", numero, "=", multiplicacion) 
}