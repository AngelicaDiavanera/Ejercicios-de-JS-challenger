// Escribir una función que tome una matriz (a) y un valor (n) como argumentos
// Guardar cada n-ésimo elemento en una nueva matriz
// Devuelve la nueva matriz

function guardarElemtoEnMatrizNueva(a, n) {
  let array = [];
  let count = 0;
  for (let i = 0; i <= a.length; i++) {
    if (count === n) {
      array.push(a[i - 1]);
      count = 1;
    } else {
      count++;
    }
  }
  return array;
}
console.log(guardarElemtoEnMatrizNueva([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3));
console.log(guardarElemtoEnMatrizNueva([10, 9, 8, 7, 6, 5, 4, 3, 2, 1], 5));
console.log(guardarElemtoEnMatrizNueva([7, 2, 1, 6, 3, 4, 5, 8, 9, 10], 2));
