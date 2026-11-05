const readLine = require("readline-sync");

const altura = parseInt(readLine.question("Introduce la altura del rectángulo: "));
const anchura = parseInt(readLine.question("Introduce la anchura del rectángulo: "));

if (isNaN(altura) || isNaN(anchura) || altura < 1 || anchura < 1) {
  console.log("Introduce números enteros mayores que 0");
} else {
  for (let fila = 0; fila < altura; fila++) {
    let linea = "";
    for (let columna = 0; columna < anchura; columna++) {
      const esBorde =
        fila === 0 ||
        fila === altura - 1 ||
        columna === 0 ||
        columna === anchura - 1;
      linea += esBorde ? "*" : " ";
    }
    console.log(linea);
  }
}