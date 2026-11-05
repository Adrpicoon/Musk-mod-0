const readLine = require("readline-sync");

function invertirPalabra(palabra) {
  const pila = [];

  
  for (const letra of palabra) {
    pila.push(letra);
  }

  
  let invertida = "";
  while (pila.length > 0) {
    invertida += pila.pop();
  }

  return invertida;
}

const palabra = readLine.question("Introduce una palabra: ");
console.log(`\nLa palabra invertida es “${invertirPalabra(palabra)}”.`);