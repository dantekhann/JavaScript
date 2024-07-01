const leia = require("readline-sync");

let numero,
  resultado,
  contador = 0; // se tirar o igual a zero, vira loop infinito

do {
  numero = leia.questionInt("\nDigite um numero inteiro: ");
  resultado = numero * 5;
  // para parar o loop infinito:
  //for(contador = 0; contador <= 5; contador++)

  console.log("\nO resultado da multiplicação é: " + resultado);
} while (contador <= 5);
