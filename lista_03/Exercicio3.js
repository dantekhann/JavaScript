const leia = require("readline-sync");

let contadoridade21 = 0;
let contadoridade50 = 0;
let idade = 0;

while (idade >= 0) {
  idade = leia.questionInt("digite uma idade: ");

  if (idade <= 21 && idade >= 0) {
    contadoridade21++;
  }
  if (idade > 50) {
    contadoridade50++;
  }
}
console.log(
  "Total de numeros maiores que 0 e menores que 21: ",
  contadoridade21
);
console.log("Total de numeros maiores de 50: ", contadoridade50);
console.log("Fim do Programa");
