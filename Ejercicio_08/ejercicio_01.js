const readLine = require("readline-sync");


function encontrarPalabrasRepetidas(texto) {

  const textoLimpio = texto.toLowerCase().replace(/[^\p{L}\p{N}\s]/gu, "");
  const palabras = textoLimpio.split(/\s+/);
  const repetidas = [];

  for (let i = 0; i < palabras.length; i++) {
    const palabra = palabras[i];

    const apareceAntes = palabras.indexOf(palabra) !== i;
    if (apareceAntes && !repetidas.includes(palabra)) {
      repetidas.push(palabra);
    }
  }

  return repetidas;
}

const texto = readLine.question("Introduce un texto: ");
const repetidas = encontrarPalabrasRepetidas(texto);

if (repetidas.length === 0) {
  console.log("No se repite ninguna palabra");
} else {
  console.log(`Se repiten las siguientes palabras: ${repetidas.join(", ")}`);
}