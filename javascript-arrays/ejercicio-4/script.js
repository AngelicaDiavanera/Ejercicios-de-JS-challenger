// Escribir una función que tome una matriz (a) como argumento
// Extrae los primeros 3 elementos de un
// Devuelve la matriz resultante

function extraerLosTresPrimerosElementosDeUnaMatriz(a) {
  return a.slice(0, 3);
}
console.log(extraerLosTresPrimerosElementosDeUnaMatriz([1, 2, 3, 4]));
console.log(extraerLosTresPrimerosElementosDeUnaMatriz([5, 4, 3, 2, 1, 0]));
console.log(extraerLosTresPrimerosElementosDeUnaMatriz([99, 1, 1]));
