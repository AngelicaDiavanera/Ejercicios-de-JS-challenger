// Escribe una función que tome dos números, digamos x e y, como argumentos
// Comprobar si x es divisible por y
// Si es así, devuelve x
// Si no, devuelve el siguiente número natural más alto que sea divisible por y

function comprobarSiEsDivisible(x, y) {
  if (x % y === 0) {
    return x;
  } else {
    for (let i = a; i > y; i++) {
      if (y % i === 0) {
        a++;
        return y;
      }
    }
  }
}
console.log(comprobarSiEsDivisible(4, 6));
