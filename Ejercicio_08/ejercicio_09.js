const readLine = require("readline-sync");

function estanBalanceados(texto) {
  let abiertos = 0;

  for (const caracter of texto) {
    if (caracter === "(") {
      abiertos++;
    } else if (caracter === ")") {
      abiertos--;
    }

    
    if (abiertos < 0) {
      return false;
    }
  }

  
  return abiertos === 0;
}

const texto = readLine.question("Introduce un texto: ");

if (estanBalanceados(texto)) {
  console.log("\nEstán balanceados.");
} else {
  console.log("\nNo están balanceados.");
}