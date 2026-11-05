const readLine = require("readline-sync");

function CalcularCircunferencia(radio) { 
    return 2 * Math.PI * radio;
}

function CalcularArea(radio) {
    return Math.PI * radio * radio;
}

function describirCirculo(radio) {
    console.log(`La circunferencia es ${CalcularCircunferencia(radio)}`);
    console.log(`El area del circulo es ${CalcularArea(radio)}`);
}

const radio = parseFloat(readLine.question("Introduce el radio: "));

if (isNaN(radio) || radio < 0) {
    console.log("Introduce un radio valido (numero igual o mayor que 0)");
} else {
    describirCirculo(radio);
}   
