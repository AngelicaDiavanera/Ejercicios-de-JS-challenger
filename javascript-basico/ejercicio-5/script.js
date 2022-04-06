// Escribir una función que tome una cadena (a) como argumento
// Eliminar los primeros 3 caracteres de un
// Devuelve el resultado

function eliminarLosPrimerosTresCaractresDeUnString(a) {
  return a.slice(3);
}
console.log(eliminarLosPrimerosTresCaractresDeUnString("abcdefg"));
console.log(eliminarLosPrimerosTresCaractresDeUnString("1234"));
console.log(eliminarLosPrimerosTresCaractresDeUnString("fgedcba"));
