const TAMANO = 100000;

function particionar(array, inicio, fin) {
  const pivote = array[fin];
  let posicionPivote = inicio;

  for (let i = inicio; i < fin; i++) {
    if (array[i] < pivote) {
      const auxiliar = array[i];
      array[i] = array[posicionPivote];
      array[posicionPivote] = auxiliar;
      posicionPivote++;
    }
  }

  array[fin] = array[posicionPivote];
  array[posicionPivote] = pivote;

  return posicionPivote;
}

function quicksort(array, inicio = 0, fin = array.length - 1) {
  if (inicio >= fin) {
    return;
  }

  const posicionPivote = particionar(array, inicio, fin);
  quicksort(array, inicio, posicionPivote - 1);
  quicksort(array, posicionPivote + 1, fin);
}

const numeros = [];
for (let i = 0; i < TAMANO; i++) {
  numeros.push(Math.random());
}

const inicio = Date.now();
quicksort(numeros);
const segundos = (Date.now() - inicio) / 1000;

console.log(`El algoritmo quicksort ha tardado ${segundos} segundos en ordenar ${TAMANO} elementos.`);