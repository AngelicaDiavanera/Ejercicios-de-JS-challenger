// Este desafío es un poco más complejo
// Escribir una función que tome un número (a) como argumento
// Si a es primo, devuelve a
// Si no, devuelve el siguiente número primo más alto

function myFunction(a) {
  if (a / a === a) {
    return a;
  } else {
    return a++;
  }
}

console.log(myFunction(1));
