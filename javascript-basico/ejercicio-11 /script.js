// Escribe una función que tome 6 valores (a,b,c,d,e,f) como argumentos
// Suma a y b
// Luego restamos por c
// Luego multiplica por d y divide por e
// Finalmente elevamos a la potencia de f y devolvemos el resultado
// Consejo: cuidado con el orden

function expresionMatematica(a, b, c, d, e, f) {
  const resultado = ((a + b - c) * d) / e;
  return Math.pow(resultado, f);
  //(((a + b - c) * d) / e) ** f;
}
console.log(expresionMatematica(6, 5, 4, 3, 2, 1));
console.log(expresionMatematica(6, 2, 1, 4, 2, 3));
console.log(expresionMatematica(2, 3, 6, 4, 2, 3));
