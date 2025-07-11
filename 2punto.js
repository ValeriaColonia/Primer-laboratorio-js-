// Ejercicio 1: Ingreso de datos por teclado 
const prompt=  require("prompt-sync")(); 

// ! edad 
let año; 
let añoactual = 2025; 
año = prompt("¿En que año nació?: ")
let edad = añoactual - año; 
console.log("Usted tiene: ",edad, "años") 

// Ejercicio 2: suma dos numeros
let num1; 
num1 = prompt("Ingrese un número: ");
let num2; 
num2 = prompt("Ingrese otro número: ")
let suma = parseInt(num1) + parseInt(num2);
console.log("La suma es: " + suma);


