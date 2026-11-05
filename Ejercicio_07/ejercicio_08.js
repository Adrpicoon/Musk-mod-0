const readLine = require("readline-sync");

function esPalindromo(texto) {

  const limpio = texto
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replaceAll(" ", "");
  const alReves = limpio.split("").reverse().join("");

  return limpio === alReves;
}

const texto = readLine.question("Introduce un texto: ");

if (esPalindromo(texto)) {
  console.log("Sí es palíndromo");
} else {
  console.log("No es palíndromo");
}