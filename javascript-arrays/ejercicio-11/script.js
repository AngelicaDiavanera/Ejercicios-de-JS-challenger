// Escribir una función que tome una matriz de números como argumento
// Debería devolver el promedio de los números

function devolverElPromedioDeLosNumeros(arr) {
  let sum = 0;
  arr.forEach((num) => {
    sum += num;
  });
  return sum / arr.length;
}

console.log(devolverElPromedioDeLosNumeros([10, 100, 40]));
console.log(devolverElPromedioDeLosNumeros([10, 100, 1000]));
console.log(devolverElPromedioDeLosNumeros([-50, 0, 50, 200]));
