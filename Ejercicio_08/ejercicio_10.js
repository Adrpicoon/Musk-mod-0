const readLine = require("readline-sync");

const PARES = { ")": "(", "]": "[", "}": "{" };
const APERTURAS = ["(", "[", "{"];


function esSecuenciaValida(secuencia) {
  const pila = [];

  for (const caracter of secuencia) {
    if (APERTURAS.includes(caracter)) {
      pila.push(caracter);
    } else if (PARES[caracter] !== undefined) {
      
      if (pila.pop() !== PARES[caracter]) {
        return false;
      }
    }
  }

  
  return pila.length === 0;
}

const secuencia = readLine.question("Introduce una secuencia: ");

if (esSecuenciaValida(secuencia)) {
  console.log("\nSecuencia correcta.");
} else {
  console.log("\nSecuencia incorrecta.");
}