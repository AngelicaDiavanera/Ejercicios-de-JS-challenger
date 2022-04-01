// Escribir una función que tome una cadena (a) como argumento
// Extrae la primera mitad de un
// Devuelve el resultado

function myFunction(a) {
  if (a.length % 2 == 0) {
    return a.slice(0, a.length / 2);
  }
}
console.log(myFunction("hola mundo"));
