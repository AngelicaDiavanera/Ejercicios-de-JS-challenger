// Escribir una función que tome una cadena (a) como argumento
// Extrae la primera mitad de un
// Devuelve el resultado

function extraerLaPrimeraMitadDeUnString(a) {
  return a.substring(0, a.length / 2);
  // return a.slice(0, a.length / 2);
}
console.log(extraerLaPrimeraMitadDeUnString("abcdefgh"));
console.log(extraerLaPrimeraMitadDeUnString("1234"));
console.log(extraerLaPrimeraMitadDeUnString("gedcba"));
