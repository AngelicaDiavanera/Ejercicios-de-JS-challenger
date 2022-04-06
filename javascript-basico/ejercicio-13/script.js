// Escribe una función que tome dos cadenas (a y b) como argumentos
// Devuelve el numero de veces que a ocurre en b

function devolverNumeroDeOcurrencias(a, b) {
  return b.match(new RegExp(a)).length;
}
console.log(
  devolverNumeroDeOcurrencias(
    "m",
    "how many times does the character occur in this sentence?"
  )
);
console.log(
  devolverNumeroDeOcurrencias(
    "h",
    "how many times does the character occur in this sentence?"
  )
);
console.log(
  devolverNumeroDeOcurrencias(
    "?",
    "how many times does the character occur in this sentence?"
  )
);
console.log(
  devolverNumeroDeOcurrencias(
    "z",
    "how many times does the character occur in this sentence?"
  )
);
