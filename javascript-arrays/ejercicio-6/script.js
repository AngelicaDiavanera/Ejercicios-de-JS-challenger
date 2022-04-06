// Escribir una función que tome una matriz (a) y un valor (b) como argumento
// La función debe limpiar a de todas las apariciones de b
// Devuelve la matriz filtrada
function limpiarAparicionesDeAEnB(a, b) {
  return a.filter((num) => num != b);
}

console.log(limpiarAparicionesDeAEnB([1, 2, 3], 2));
console.log(limpiarAparicionesDeAEnB([1, 2, "2"], "2"));
console.log(limpiarAparicionesDeAEnB([false, "2", 1], false));
console.log(limpiarAparicionesDeAEnB([1, 2, "2", 1], 1));
