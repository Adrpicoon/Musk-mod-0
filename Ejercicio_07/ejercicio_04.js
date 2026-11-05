const readLine = require("readline-sync");

function imprimirSumaYMedia(numeros) {
    let suma = 0;
    for (let i = 0; i < numeros.length; i++) {
        suma += numeros[i];
    }
    const media = suma / numeros.length;

    console.log(`La suma es: ${suma}`);
    console.log(`La media es: ${media}`);
}

const entrada = readLine.question ("Introduce una lista de numeros: ");
const numeros = entrada.split(",").map(Numero);

if (numeros.incluides(NaN)) {
    console.log("Introduce una lista de numeros validos (separados por comas)");
} else {
    imprimirSumaYMedia(numeros);
}
