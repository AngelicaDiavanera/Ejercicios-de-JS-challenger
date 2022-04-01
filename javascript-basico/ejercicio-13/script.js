// Escribe una función que tome dos cadenas (a y b) como argumentos
// Devuelve el numero de veces que a ocurre en b

function myFunction(a, b) {
  b.split("").filter((text) => text.match(new RegExp(a))).length;
}
console.log(myFunction("hola Andres, hola mundo"));
