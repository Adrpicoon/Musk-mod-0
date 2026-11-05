const readLine = require("readline-sync");

const input = readLine.question("Introduce un número: ");
const num = parseInt(input);

if (isNaN(num) || num < 0) {
  console.log("Introduce un número entero igual o mayor que 0");
} else {
  let factorial = 1;
  for (let i = 2; i <= num; i++) {
    factorial *= i;
  }
  console.log(`El factorial de ${num} es ${factorial}`);
}