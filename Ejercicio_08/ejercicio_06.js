const TAMANO = 100000;

function bubbleSort(array) {
  for (let i = 0; i < array.length - 1; i++) {
    let huboIntercambio = false;

    
    for (let j = 0; j < array.length - 1 - i; j++) {
      if (array[j] > array[j + 1]) {
        const auxiliar = array[j];
        array[j] = array[j + 1];
        array[j + 1] = auxiliar;
        huboIntercambio = true;
      }
    }

    
    if (!huboIntercambio) {
      break;
    }
  }
}

const numeros = [];
for (let i = 0; i < TAMANO; i++) {
  numeros.push(Math.random());
}

const inicio = Date.now();
bubbleSort(numeros);
const segundos = (Date.now() - inicio) / 1000;

console.log(`El algoritmo bubble sort ha tardado ${segundos} segundos en ordenar ${TAMANO} elementos.`);