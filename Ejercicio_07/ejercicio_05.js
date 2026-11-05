const readLine = require("readline-sync");

function imprimirRepetidos(elementos) {
  const repetidos = [];

  for (let i = 0; i < elementos.length; i++) {
    const elemento = elementos[i];
    // Está repetido si ya había aparecido antes y todavía no lo hemos guardado
    const apareceAntes = elementos.indexOf(elemento) !== i;
    if (apareceAntes && !repetidos.includes(elemento)) {
      repetidos.push(elemento);
    }
  }

  if (repetidos.length === 0) {
    console.log("Todos los elementos son únicos");
  } else {
    console.log(`Los elementos repetidos son ${repetidos.join(", ")}`);
  }
}

const entrada = readLine.question("Introduce una lista de elementos: ");
imprimirRepetidos(entrada.split(","));