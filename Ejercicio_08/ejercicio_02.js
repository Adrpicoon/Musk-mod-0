
function calcularDiferencia(array1, array2) {
  const diferencia = [];

  for (let i = 0; i < array1.length; i++) {
    if (!array2.includes(array1[i])) {
      diferencia.push(array1[i]);
    }
  }

  return diferencia;
}


function crearArrayAleatorio(longitud, maximo) {
  const array = [];

  for (let i = 0; i < longitud; i++) {
    array.push(Math.floor(Math.random() * maximo) + 1);
  }

  return array;
}

const array1 = crearArrayAleatorio(8, 10);
const array2 = crearArrayAleatorio(5, 10);

console.log(`Array 1: [${array1.join(", ")}]`);
console.log(`Array 2: [${array2.join(", ")}]`);
console.log(`\nLa diferencia de ambos conjuntos es [${calcularDiferencia(array1, array2).join(", ")}]`);