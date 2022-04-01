// Escribe una función que tome dos números (a y b) como argumentos
// Si a es menor que b, dividimos a por b
// De lo contrario, multiplica ambos números
// Devuelve el valor resultante

function myFunction(a, b) {
  if (a < b) {
    return a / b;
  } else {
    return a * b;
  }
}
console.log(myFunction(10, 3));
//a < b ? a / b : a * b
