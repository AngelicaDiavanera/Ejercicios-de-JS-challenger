// Escribir una función que tome un número (a) como argumento
// Si a es un número entero (no tiene lugar decimal), devuelve verdadero
// De lo contrario, devuelve falso

function esEntero(a) {
  return Number.esEntero(a) ? true : false;
}
console.log(esEntero(1.123));
console.log(esEntero(4));
console.log(esEntero(1048));
