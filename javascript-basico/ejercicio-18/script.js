// Escribir una función que tome un número (a) como argumento
// Dividir a en sus dígitos individuales y devolverlos en una matriz
// Consejo: es posible que desee cambiar el tipo de número para la división

function myFunction(a) {
  return String(a)
    .split("")
    .map((a) => {
      return Number(a);
    });
}
console.log(myFunction(1365478));