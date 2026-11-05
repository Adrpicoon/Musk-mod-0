const readLine = require("readline-sync");

function sonAnagramas(cadena1, cadena2) {
  const palabra1 = cadena1.toLowerCase();
  const palabra2 = cadena2.toLowerCase();

  if (palabra1.length !== palabra2.length) {
    return false;
  }

  
  const frecuencias = new Map();
  for (const letra of palabra1) {
    frecuencias.set(letra, (frecuencias.get(letra) || 0) + 1);
  }

  
  for (const letra of palabra2) {
    if (!frecuencias.get(letra)) {
      return false;
    }
    frecuencias.set(letra, frecuencias.get(letra) - 1);
  }

  return true;
}

const palabra1 = readLine.question("Introduce una palabra: ");
const palabra2 = readLine.question("Introduce otra palabra: ");

if (sonAnagramas(palabra1, palabra2)) {
  console.log("\nLas palabras son anagramas.");
} else {
  console.log("\nLas palabras no son anagramas.");
}