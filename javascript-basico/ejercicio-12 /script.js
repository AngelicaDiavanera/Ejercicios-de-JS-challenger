// Escribir una función que tome un número como argumento
// Si el número es par, devuelve verdadero
// De lo contrario, devuelve falso

function devolverVerdaderoOFalso(number) {
  if (number % 2 == 0) {
    return true;
  } else {
    return false;
  }
  //  return a % 2 === 0
}
console.log(devolverVerdaderoOFalso(10));
console.log(devolverVerdaderoOFalso(-4));
console.log(devolverVerdaderoOFalso(5));
console.log(devolverVerdaderoOFalso(-111));
