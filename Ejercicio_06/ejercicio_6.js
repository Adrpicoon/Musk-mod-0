const readLine = require("readline-sync");

const input = readLine.question("Introduce un año: ");
const anio = parseInt(input);

if (isNaN(anio)) {
  console.log("No es un número");
} else if ((anio % 4 === 0 && anio % 100 !== 0) || anio % 400 === 0) {
  console.log("El año es bisiesto");
} else {
  console.log("El año no es bisiesto");
}