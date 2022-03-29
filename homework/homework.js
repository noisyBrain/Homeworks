"use strict";

function BinarioADecimal(num) {
  // tu codigo aca
  let sum = 0;
  for (let i = 0; i < num.length; i++) {
    sum += num[i] * 2 ** (num.length - 1 - i);
  }
  return sum;
}
// '10100'
// 0 -> 1 * 2**(4 - 0) -> 2**4 = 16;
// 1 -> 0 * 2**(4 - 1) -> 2**3 = 8; pero no cuenta porque num[i] vale 0;
// 2 -> 1 * 2**(4 - 2) -> 2**2 = 4;

// ------------- //

function DecimalABinario(num) {
  // tu codigo aca
  // los que están entre * * son las cosas diferentes que hizo el profesor.
  let binarios = [];
  // * let binarios = ""; *

  while (num !== 0) {
    binarios.push(num % 2) // pushea en el array el resto de dividir por 2 de cada número
  // * binarios = num % 2 + binarios porque concatena el resto del num con el string que ya tengo en binarios*
    num = Math.floor(num / 2); // Math.floor redondea el resultado de los impares.
  }
  return binarios.reverse().join("") // reversea y lo une todo junto en un str

  // * return binarios -> devuelve el string tal y como viene de concatenarse en binarios.*
}



module.exports = {
  BinarioADecimal,
  DecimalABinario,
};

