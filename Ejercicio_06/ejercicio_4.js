const readLine = require ("readline-sync");

const input = readLine.question("Ingrese un número: ");
const number = parseInt(input);

if (isNaN(number)) {
  console.log("No es un numero") 
} else {
  for (let i = 1; i <= 10; i++) {
    console.log(`${number} x ${i} = ${number * i}`);  
  }
}