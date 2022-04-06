// Escribir una función que tome una cadena (a) y un número (n) como argumento
// Devuelve el carácter enésimo de 'a'

function devolverElEnesimoCaracter(a, n) {
  return a[n - 1];
}
console.log(devolverElEnesimoCaracter("abcd", 1));
console.log(devolverElEnesimoCaracter("zyxbwpl", 5));
console.log(devolverElEnesimoCaracter("gfedcba", 3));
