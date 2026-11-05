const readLine = require("readline-sync");

function calcularCircunferencia(radio) {
    return 2 * Math.PI * radio;
}
const radio = parseFloat(readLine.question("Introduce el radio: "));

if (isNaN(radio) || radio < 0) {
    console.log("Introduce un radio valido (numero igual o mayor que 0)");
} else {
    console.log(`La circunferencia es: ${calcularCircunferencia(radio)}`);
}
