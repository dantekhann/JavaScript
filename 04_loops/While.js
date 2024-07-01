// const leia = require("readline-sync");

// let continua = true;
// let numero1, numero2, resultado;

// while (continua) {
//   numero1 = leia.questionInt("Digite primeiro valor: ");
//   numero2 = leia.questionInt("Digite segundo valor: ");

//   resultado = numero1 + numero2;

//   console.log("\nO resultado da soma é: " + resultado);
//   console.log("\n++++++++++++++MENU+++++++++++++++");
//   continua = leia.keyInYNStrict("\nDeseja continuar? ");
//   console.log("\nFim do Programa");
// }

// ﻿const leia = require("readline-sync");

// let resultado, numero, contador = 1;

// while (contador < 4) {

//     numero = leia.questionInt("Digite um numero: ");

//     resultado = numero * 3;
//     console.log(numero + " x 3 = " + resultado);
//     console.log("\n++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++\n");
//     contador++;
// }

// console.log("\t\t_________Fim do programa_________");

﻿const leia = require("readline-sync");

let numero, resultado, contador = 3;

while (contador <= 2) {
    
    numero = leia.questionInt("\nDigite um numero inteiro: ");

    resultado = numero * 5;

    console.log("\nO resultado da multiplicação é: " + resultado);
}