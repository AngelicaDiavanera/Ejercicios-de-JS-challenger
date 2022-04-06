// Escribe una función que tome dos arreglos como argumentos
// Combinar ambas matrices y eliminar valores duplicados
// Ordenar el resultado de la fusión en orden ascendente
// Devuelve la matriz resultante

function matriz(a, b) {
  let array = a.concat(b);
  let unique = [];
  for (let i = 0; i < array.length; i++) {
    if (!unique.includes(array[i])) {
      unique.push(array[i]);
    }
  }
  return unique.sort((a, b) => a - b);
}
//[...new Set([...a, ...b])].sort((x, y) => x - y);
console.log(matriz([1, 2, 3], [3, 4, 5]));
console.log(matriz([-10, 22, 333, 42], [-11, 5, 22, 41, 42]));
