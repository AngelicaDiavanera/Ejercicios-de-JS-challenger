// Escribe una función que tome dos cadenas (a y b) como argumentos
// Comenzando al final de 'a', inserte 'b' después de cada tercer carácter de 'a'
// Devuelve la cadena resultante

function insertarDespuesdecadaTercerCaracter(a, b) {
  let text = "";
  let counter = 1;

  for (let i = a.length - 1; i >= 0; i--) {
    if (counter === 3) {
      text += `${a[i]}${b}`;
      counter = 0;
    } else {
      text += `${a[i]}`;
    }
    counter++;
  }

  return text.split("").reverse().join("");
}

console.log(myFuninsertarDespuesdecadaTercerCaracterction("pedro", "x")); // pexdro
console.log(myFuinsertarDespuesdecadaTercerCaracternction("julianita", "x")); // xjulxianxita
console.log(myFuinsertarDespuesdecadaTercerCaracternction("Mayra", "x")); // Maxyra
console.log(myFuninsertarDespuesdecadaTercerCaracterction("Angélica", "x")); // Anxgélxica
