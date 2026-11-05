const readLine = require("readline-sync");


function calcularFrecuencias(cadena) {
  const frecuencias = new Map();

  for (const caracter of cadena.toLowerCase()) {
    frecuencias.set(caracter, (frecuencias.get(caracter) || 0) + 1);
  }

  return frecuencias;
}

const texto = readLine.question("Introduce un texto: ");

console.log("\nMapa de frecuencias:");
console.log(calcularFrecuencias(texto));