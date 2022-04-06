// Escribir una función que tome una cadena como argumento
// Extrae los últimos 3 caracteres de la cadena
// Devuelve el resultado

function extraerLosTresUltimosCaracteresDeUnString(a) {
  return a.substr(0, 3);
}
console.log(extraerLosTresUltimosCaracteresDeUnString("abcdefg"));
console.log(extraerLosTresUltimosCaracteresDeUnString("1234"));
console.log(extraerLosTresUltimosCaracteresDeUnString("fgedcba"));
