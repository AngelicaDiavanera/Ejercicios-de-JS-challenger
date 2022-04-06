// Escribir una función que tome una cadena (a) como argumento
// Obtener los primeros 3 caracteres de un
// Devuelve el resultado

function obtenerLosPrimerosTresCaracteresDeUnString(a) {
  if (a.length % 2 == 0) {
    return a.slice(0, a.length / 2);
  }
}
console.log(obtenerLosPrimerosTresCaracteresDeUnString("abcdefg"));
console.log(obtenerLosPrimerosTresCaracteresDeUnString("1234"));
console.log(obtenerLosPrimerosTresCaracteresDeUnString("fgedcba"));
