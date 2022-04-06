// Escribir una función que tome una matriz (a) como argumento
// Elimina los primeros 3 elementos de 'a'
// Devuelve el resultado

function eliminarLosTresPrimerosElementos(a) {
  return a.splice(3, 3);
  // return a.slice(3);
}
console.log(eliminarLosTresPrimerosElementos([1, 2, 3, 4]));
console.log(eliminarLosTresPrimerosElementos([5, 4, 3, 2, 1, 0]));
console.log(eliminarLosTresPrimerosElementos([99, 1, 1]));
