// Escribe una función que tome dos cadenas (a y b) como argumentos
// Si a contiene b, agrega b al comienzo de a
// Si no, añádelo al final
// Devuelve la concatenación

function contenedorDeStrings(a, b) {
  return a.includes(b) ? b + a : a + b;
}
console.log(contenedorDeStrings(10, 3));
