const readLine = require("readline-sync");

const ANCHO = 5;

function crearMatrizDePalabras(texto) {
  const palabras = texto.trim().split(/\s+/);
  const matriz = [];

  for (let i = 0; i < palabras.length; i += ANCHO) {
    matriz.push(palabras.slice(i, i + ANCHO));
  }

  return matriz;
}

function imprimirMatriz(matriz) {
  const filas = [];
  for (let i = 0; i < matriz.length; i++) {
    const palabras = matriz[i].map((palabra) => `"${palabra}"`);
    filas.push(`[ ${palabras.join(", ")} ]`);
  }
  console.log(`[${filas.join(",\n ")}]`);
}

const texto = readLine.question("Introduce un texto: ");

if (texto.trim() === "") {
  console.log("Introduce un texto");
} else {
  imprimirMatriz(crearMatrizDePalabras(texto));
}