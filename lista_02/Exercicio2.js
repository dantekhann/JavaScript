const leia = require("readline-sync");

let numero;

numero = leia.questionInt("Digite um numero: ");

if (numero % 2 == 0 && numero >= 0) {
  console.log("O número é par e positivo");
} else if (numero % 2 == 1 && numero >= 0) {
  console.log("O número é ímpar e positivo");
} else if (numero % 2 == 0 && numero < 0) {
  console.log("O número é par e negativo");
} else {
  console.log("ímpar e negativo");
}
