// Escribe una función que tome una matriz (a) y un número (n) como argumentos
// Debería devolver los últimos n elementos de un
function devolverLosUltimosElementosN(a, n) {
  return a.splice(-n);
}
console.log(devolverLosUltimosElementosN([1, 2, 3, 4, 5], 2));
console.log(devolverLosUltimosElementosN([1, 2, 3], 3));
console.log(devolverLosUltimosElementosN([1, 2, 3, 4, 5, 6, 7, 8], 5));
