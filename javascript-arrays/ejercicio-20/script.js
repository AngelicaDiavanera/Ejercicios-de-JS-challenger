// Escribe una función que tome una matriz con elementos arbitrarios y un número como argumentos
// Devuelve una nueva matriz, el primer elemento debe ser el mismo número dado
// o cero si el número es menor que 6
// Los otros elementos deben ser los elementos de la matriz original
// Intenta no mutar la matriz original

function devolverLaMatrizDeNumerosEnElRangoMinAMax(arr, num) {
  let array = [];
  for (let i = 0; i < arr.length; i++) {
    array.push(arr[i]);
  }
  if (num < 6) {
    array.unshift(0);
  } else {
    array.unshift(number);
  }
  return array;
}

console.log(devolverLaMatrizDeNumerosEnElRangoMinAMax(2, 10));
console.log(devolverLaMatrizDeNumerosEnElRangoMinAMax(1, 3));
console.log(devolverLaMatrizDeNumerosEnElRangoMinAMax(-5, 5));
console.log(devolverLaMatrizDeNumerosEnElRangoMinAMax(2, 7));
