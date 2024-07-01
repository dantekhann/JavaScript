const leia = require("readline-sync");

let numero;
let contador;
let contadorpar = 0;
let contadorimpar = 0;

for (contador = 1; contador <= 10; contador++) {
  numero = leia.questionInt("Digite o " + contador + " numero: ");
  //console.log("O Numero Digitado Foi: " + numero);
  if (numero % 2 == 0) {
    contadorpar++;
  } else {
    contadorimpar++;
  }
}
console.log("O TOTAL DE PARES FOI DE: ", contadorpar);
console.log("O TOTAL DE IMPARES FOI DE: ", contadorimpar);
console.log("Fim do Programa");
