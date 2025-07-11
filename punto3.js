// Ejercicio 1: Mayor de edad 
const prompt=  require("prompt-sync")(); 
let edad = prompt("Hola! cuantos años : ")
if(edad >= 18 ){
    console.log("Adelante,puedes entrar")
} else {
    console.log("No puedes entrar")
}

// Ejercicio 2: positivo,negativo o cero 
let numero = prompt("Ingresa un numero: ")
if (numero == 0){
    console.log("el numero es 0")
} else if (numero < 0){
    console.log("numero negativo")
} else {
    console.log("Numero positivo")
}