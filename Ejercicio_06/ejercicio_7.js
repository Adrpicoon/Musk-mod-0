const readLine = require("readline-sync");

const input = readLine.question("Introduce la altura del triángulo: ");
const altura = parseInt(input);

if (isNaN(altura) || altura < 1) {
  console.log("Introduce un número entero mayor que 0");
} else {
  for (let fila = 1; fila <= altura; fila++) {
    const espacios = " ".repeat(altura - fila);
    const asteriscos = "*".repeat(2 * fila - 1);
    console.log(espacios + asteriscos);
  }
}