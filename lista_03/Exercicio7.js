const leia = require("readline-sync");

// SE O ELEMENTO NÃO ESTÁ NO VETOR ELE RETORNA -1

let vetorInteiros = [3, 2, 1, 6, 5, 10, 7, 4, 9, 8];
let numero;
let pergunta = true;

while (pergunta) {
  numero = leia.questionInt("\nInsira um numero para ser localizado: ");

  if (vetorInteiros.indexOf(numero) == -1) {
    console.log("\nO numero não foi encontrado");
  } else {
    console.log("\nA posição do numero é: " + vetorInteiros.indexOf(numero));
  }
   pergunta = leia.keyInYNStrict("\nDeseja tentar novamente?");
}
