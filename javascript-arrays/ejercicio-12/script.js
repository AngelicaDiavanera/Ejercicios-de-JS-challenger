// Escribir una función que tome una matriz de cadenas como argumento
// Devuelve la cadena más larga

function devolverLaCadenaMasLarga(arr) {
  return arr.reduce((a, b) => (a.length <= b.length ? b : a));
}
console.log(devolverLaCadenaMasLarga(["help", "me"]));
console.log(devolverLaCadenaMasLarga(["I", "need", "candy"]));
