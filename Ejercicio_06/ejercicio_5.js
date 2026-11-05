const readLine = require("readline-sync");

const frase = readLine.question("Introduce una frase: ");

const fraseLimpia = frase
  .toLowerCase()
  .normalize("NFD")
  .replace(/[\u0300-\u036f]/g, "");

const vocales = "aeiou";
let contador = 0;

for (const letra of fraseLimpia) {
  if (vocales.includes(letra)) {
    contador++;
  }
}

console.log(`El número de vocales es ${contador}`);   