// Escribir una función que tome una matriz (a) como argumento
// Extraer los últimos 3 elementos de un
// Devuelve la matriz resultante

function extraerLosTresUltimosElementos(a) {
  return a.slice(-3);
}
console.log(extraerLosTresUltimosElementos([1, 2, 3, 4]));
console.log(extraerLosTresUltimosElementos([5, 4, 3, 2, 1, 0]));
console.log(extraerLosTresUltimosElementos([99, 1, 1]));
