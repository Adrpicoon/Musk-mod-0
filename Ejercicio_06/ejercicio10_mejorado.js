const readLine = require("readline-sync");

const NIVELES = {
  1: { nombre: "Fácil", maximo: 10, intentosMaximos: 5 },
  2: { nombre: "Medio", maximo: 50, intentosMaximos: 7 },
  3: { nombre: "Difícil", maximo: 100, intentosMaximos: 7 },
};

function elegirNivel() {
  let opcion;
  do {
    opcion = parseInt(readLine.question("Elige nivel (1 = Fácil, 2 = Medio, 3 = Difícil): "));
  } while (isNaN(opcion) || opcion < 1 || opcion > 3);

  return NIVELES[opcion];
}

function jugarPartida(nivel) {
  const secreto = Math.floor(Math.random() * nivel.maximo) + 1;
  console.log(`\nNivel ${nivel.nombre}: adivina un número del 1 al ${nivel.maximo}. Tienes ${nivel.intentosMaximos} intentos.`);

  for (let intentos = 1; intentos <= nivel.intentosMaximos; intentos++) {
    const intento = parseInt(readLine.question(`Intento ${intentos}/${nivel.intentosMaximos}: `));

    if (intento === secreto) {
      console.log(`¡Correcto! Lo has adivinado en ${intentos} ${intentos === 1 ? "intento" : "intentos"}.`);
      return;
    }

    if (isNaN(intento)) {
      console.log("Eso no es un número.");
    } else if (intento < secreto) {
      console.log("Más alto ⬆️");
    } else {
      console.log("Más bajo ⬇️");
    }
  }

  console.log(`Has perdido. El número era ${secreto}.`);
}

let jugarOtraVez;
do {
  jugarPartida(elegirNivel());
  jugarOtraVez = readLine.question("\n¿Quieres jugar otra vez? (s/n): ").toLowerCase();
} while (jugarOtraVez === "s");

console.log("¡Gracias por jugar!");