// Escribir una función que tome una cadena (a) como argumento
// Eliminar los últimos 3 caracteres de un
// Devuelve el resultado

function eliminarLosTresUltimoscaracteresDeUnString(a) {
  return a.slice(0, a.length - 3);
}
console.log(eliminarLosTresUltimoscaracteresDeUnString("abcdefg"));
console.log(eliminarLosTresUltimoscaracteresDeUnString("1234"));
console.log(eliminarLosTresUltimoscaracteresDeUnString("fgedcba"));
