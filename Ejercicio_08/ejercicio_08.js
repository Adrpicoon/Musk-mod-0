const readLine = require("readline-sync");

function esPrimo(numero) {
  if (numero < 2) {
    return false;
  }

  
  for (let divisor = 2; divisor * divisor <= numero; divisor++) {
    if (numero % divisor === 0) {
      return false;
    }
  }

  return true;
}

const numero = parseInt(readLine.question("Introduce un número: "));

if (isNaN(numero)) {
  console.log("Introduce un número entero");
} else if (esPrimo(numero)) {
  console.log(`\n${numero} es primo.`);
} else {
  console.log(`\n${numero} no es primo.`);
}