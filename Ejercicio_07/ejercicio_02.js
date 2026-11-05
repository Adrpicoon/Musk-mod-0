const readLine = require("readline-sync");

function calcularArea(radio) {
    return Math.PI * radio * radio;
}

const radio = parseFloat(readLine.question("Introduce el radio: "));

if (isNaN(radio) || radio < 0) {
    console.log("Introduce un radio valido (numero igual o mayor que 0)");
} else {
    console.log(`El area es: ${calcularArea(radio)}`);
}