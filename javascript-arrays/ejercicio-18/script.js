// Escribe una función que tome dos números (mínimo y máximo) como argumentos
// Devuelve una matriz de números en el rango min a max

function devolverLaMatrizDeNumerosEnElRangoMinAMax(min, max) {
  let array = [];
  for (let i = min; i <= max; i++) {
    array.push(i);
  }
  return array;
}
console.log(devolverLaMatrizDeNumerosEnElRangoMinAMax(2, 10));
console.log(devolverLaMatrizDeNumerosEnElRangoMinAMax(1, 3));
console.log(devolverLaMatrizDeNumerosEnElRangoMinAMax(-5, 5));
console.log(devolverLaMatrizDeNumerosEnElRangoMinAMax(2, 7));
