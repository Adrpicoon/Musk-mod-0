
function trasponer(matriz) {
  const traspuesta = [];

  for (let columna = 0; columna < matriz[0].length; columna++) {
    const nuevaFila = [];
    for (let fila = 0; fila < matriz.length; fila++) {
      nuevaFila.push(matriz[fila][columna]);
    }
    traspuesta.push(nuevaFila);
  }

  return traspuesta;
}

function imprimirMatriz(matriz) {
  const filas = [];
  for (let i = 0; i < matriz.length; i++) {
    filas.push(`[ ${matriz[i].join(", ")} ]`);
  }
  console.log(`[${filas.join(",\n ")}]`);
}

const matriz = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
];

console.log("Matriz de entrada");
imprimirMatriz(matriz);

console.log("\nMatriz traspuesta");
imprimirMatriz(trasponer(matriz));