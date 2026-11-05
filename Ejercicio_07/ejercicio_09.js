const readLine = require("readline-sync");

function crearMatrizDeProductos(n) {
  const matriz = [];

  for (let fila = 0; fila < n; fila++) {
    const nuevaFila = [];
    for (let columna = 0; columna < n; columna++) {
      nuevaFila.push(fila * columna);
    }
    matriz.push(nuevaFila);
  }

  return matriz;
}

function imprimirMatriz(matriz) {
  const filas = [];
  for (let i = 0; i < matriz.length; i++) {
    filas.push(`[ ${matriz[i].join(", ")} ]`);
  }
  console.log(`[${filas.join(",\n ")}]`);
}

const n = parseInt(readLine.question("Introduce el tamaño de la matriz cuadrada: "));

if (isNaN(n) || n < 1) {
  console.log("Introduce un número entero mayor que 0");
} else {
  imprimirMatriz(crearMatrizDeProductos(n));
}