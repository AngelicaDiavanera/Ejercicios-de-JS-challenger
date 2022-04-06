// Escribir una función que tome una matriz de objetos como argumento
// Ordenar la matriz por propiedad b en orden ascendente
// Devuelve la matriz ordenada

function ordenarLaMatrizEnOrdenAscendente(arr) {
  return arr.sort((obj1, obj2) => obj1.b - obj2.b);
}
console.log(
  ordenarLaMatrizEnOrdenAscendente([
    { a: 1, b: 2 },
    { a: 5, b: 4 },
  ])
);
console.log(
  ordenarLaMatrizEnOrdenAscendente([
    { a: 2, b: 10 },
    { a: 5, b: 4 },
  ])
);
console.log(
  ordenarLaMatrizEnOrdenAscendente([
    { a: 1, b: 7 },
    { a: 2, b: 1 },
  ])
);
