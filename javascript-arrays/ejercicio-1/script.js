// Escribir una función que tome una matriz (a) y un valor (n) como argumento
// Devuelve el n-ésimo elemento de 'a'
function obtenerElementoNDeLaMatriz(arr, n) {
  return arr[n - 1];
}
console.log(obtenerElementoNDeLaMatriz([1, 2, 3, 4, 5], 3));
console.log(obtenerElementoNDeLaMatriz([10, 9, 8, 7, 6], 5));
console.log(obtenerElementoNDeLaMatriz([7, 2, 1, 6, 3], 1));
