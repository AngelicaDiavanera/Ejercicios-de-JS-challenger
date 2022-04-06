// Escribir una función que tome una matriz de números como argumento
// Debería devolver una matriz con los números ordenados en orden descendente
function devolverMatrizDeNumerosDeFormadescendente(numeros) {
  return numeros.sort().reverse();
  //  return arr.sort((a, b) => b - a)
}
console.log(devolverMatrizDeNumerosDeFormadescendente([1, 3, 2]));
console.log(devolverMatrizDeNumerosDeFormadescendente([4, 2, 3, 1]));
