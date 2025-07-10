// Ingreso de datos por teclado 
const prompt=  require("prompt-sync")(); 

// ! edad 
let año; 
let añoactual = 2025; 
año = prompt("¿En que año nació?: ")
let edad = añoactual - año; 
console.log("Usted tiene: ",edad, "años") 

