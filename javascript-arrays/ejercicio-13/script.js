// Escribir una función que tome una matriz como argumento
// Debería devolver verdadero si todos los elementos de la matriz son iguales
// Debería devolver falso de lo contrario

function devolverVerdaderoOFalso(arr) {
  return arr.forEach((x) => (x === x.length - 1 ? true : false));
}
console.log(devolverVerdaderoOFalso([true, true, true, true]));
console.log(devolverVerdaderoOFalso(["test", "test", "test"]));
console.log(devolverVerdaderoOFalso([1, 1, 1, 2]));
console.log(devolverVerdaderoOFalso(["10", 10, 10, 10]));
