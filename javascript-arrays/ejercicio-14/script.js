// Escribir una función que tome argumentos en un número arbitrario de arreglos
// Debería devolver una matriz que contenga los valores de todas las arrays

function devolverLosValoresDeTodosLosArrays(...arrays) {
  return arrays.flat();
}
console.log(devolverLosValoresDeTodosLosArrays([1, 2, 3], [4, 5, 6]));
console.log(devolverLosValoresDeTodosLosArrays(["a", "b", "c"], [4, 5, 6]));
console.log(
  devolverLosValoresDeTodosLosArrays([true, true], [1, 2], ["a", "b"])
);
