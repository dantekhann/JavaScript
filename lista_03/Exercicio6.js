const leia = require("readline-sync");

let numero;
let media = 0; //atribuí o valor zero nesta variável para defini-la como número
let contador = 0; //criei a variável contador que será o denominador da divisão, se não indicar que é número dá erro NaN

do {
  numero = leia.questionInt("\nDigite um numero inteiro: ");
  if (numero % 3 == 0 && numero != 0) {
    contador++;
    media = numero + media; //forma que eu encontrei para executar um determinado somatório
  } else media = 0 + media;
} while (numero != 0);

console.log("\n\nA Média dos Múltiplos de 3 é: " + media / contador);

// media = (3+3)/n
// n = 2
// (3+3+3)/n
// n =3
