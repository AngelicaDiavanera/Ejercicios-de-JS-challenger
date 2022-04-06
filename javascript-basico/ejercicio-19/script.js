// Parece que algo le pasó a estas cadenas
// ¿Puedes descubrir cómo aclarar el caos?
// Escriba una función que una estas cadenas de modo que formen las siguientes palabras:
// 'Javascript', 'Campo' y 'Centro'
// Es posible que desee aplicar métodos básicos de cadena JS como replace(), split(), slice(), etc.

function formarPalabras(a, b) {
  return a + b.replace("%", "").split("").reverse().join("");
}
console.log(formarPalabras("java", "tpi%rcs"));
