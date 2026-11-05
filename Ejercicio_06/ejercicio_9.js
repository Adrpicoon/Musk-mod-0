const readLine = require("readline-sync");

const palabras = ["Cero","Uno","Dos","Tres","Cuatro","Cinco","Seis","Siete","Ocho","Nueve","Diez", ];

let num;
do {
  num = parseInt(readLine.question("Introduce un número del 0 al 10: "));
} while (isNaN(num) || num < 0 || num > 10);

console.log(palabras[num]);