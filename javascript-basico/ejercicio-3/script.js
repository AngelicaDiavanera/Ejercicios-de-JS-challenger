// Escribir una función que tome un valor como argumento
// Devuelve el tipo del valor

function devolverElTipoDeValor(a) {
  return typeof a;
}
console.log(devolverElTipoDeValor(1));
console.log(devolverElTipoDeValor(false));
console.log(devolverElTipoDeValor({}));
console.log(devolverElTipoDeValor(null));
console.log(devolverElTipoDeValor("string"));
console.log(devolverElTipoDeValor(["array"]));
