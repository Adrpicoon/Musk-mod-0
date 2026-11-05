const readLine = require("readline-sync");

const num1 = parseInt(readLine.question("Introduce un número: "));
const num2 = parseInt(readLine.question("Introduce otro número: "));
const num3 = parseInt(readLine.question("Introduce otro número: "));

if (num1 % 2 === 0 || num2 % 2 === 0 || num3 % 2 === 0) {
  console.log("Hay al menos un número par");
} else {
  console.log("No hay números pares");
}
