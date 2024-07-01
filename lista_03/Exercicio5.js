const leia = require("readline-sync");

let numero;
let positivo = 0; //atribuí o valor zero nesta variável para defini-la como número

do {
  numero = leia.questionInt("\nDigite um numero inteiro: ");
  if (numero > 0) positivo = numero + positivo; //forma que eu encontrei para executar um determinado somatório
} while (numero != 0);

console.log("A soma dos números positivos foi de: " + positivo);
