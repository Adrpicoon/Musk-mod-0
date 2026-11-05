const readLine = require("readline-sync");

const randomNumber = Math.floor(Math.random() * 10) + 1;

console.log("He pensado un número del 1 al 10. ¡Intenta adivinarlo!");

let intentos = 0;
let intento;
do {
  intento = parseInt(readLine.question("Adivina: "));
  intentos++;
  if (intento !== randomNumber) {
    console.log("¡Fallo!");
  }
} while (intento !== randomNumber);

const textoIntentos = intentos === 1 ? "intento" : "intentos";
console.log(`¡Correcto! Has necesitado ${intentos} ${textoIntentos}`);