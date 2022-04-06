// Escribir una función que tome una matriz de números como argumento
// Devuelve el número de valores negativos en la matriz
function devolverNumerosDeValoresNegativosEnLaMatriz(a) {
  let count = 0;
  a.forEach((num) => {
    if (num < 0) {
      count += 1;
    }
  });
  return count;
}
console.log(devolverNumerosDeValoresNegativosEnLaMatriz([1, -2, 2, -4]));
console.log(devolverNumerosDeValoresNegativosEnLaMatriz([0, 9, 1]));
console.log(devolverNumerosDeValoresNegativosEnLaMatriz([4, -3, 2, 1, 0]));
