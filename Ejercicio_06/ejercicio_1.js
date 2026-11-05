const readLine = require("readline-sync");

const input = readLine.question("Ingrese un número: ");
const number = parseInt(input);

if (isNaN(number)) {
  console.log("No es un numero") 
} else {
    const signo = number > 0 ? "positivo" : number < 0 ? "negativo" : "cero";
    const paridad = number % 2 === 0 ? "par" : "impar";
    const conjuncion = paridad === "impar" ? "e" : "y";
    console.log (`El numero es ${signo} ${conjuncion} ${paridad}`);
}    