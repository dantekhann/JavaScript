// //Exemplo 1 ------ Maneira tradicional e longa
// const leia = require("readline-sync");
// let nome1, nome2, nome3;
// nome1 = leia.question("Insira o primeiro nome: ");
// console.log("\n\nO primeiro nome é: " + nome1);
// nome2 = leia.question("Insira o segundo nome: ");
// console.log("\n\nO segundo nome é: " + nome2);
// nome3 = leia.question("Insira o terceiro nome: ");
// console.log("\n\nO terceiro nome é: " + nome3);
// console.log("Os nomes escolhidos foram: " ,  nome1  , nome2  ,o nome3)

// //Exemplo 2 ------- Mesmo exemplo mas usando FOR
// const leia = require("readline-sync");
// let nome;
// let contador;

// // for (let index = 0; index < array.length; index++) {
// //     const element = array[index];
// // }
// for (contador = 1; contador < 4; contador++) {
//   nome = leia.question("\nDigite um nome: ");
//   console.log("O " + contador + " nome digitado foi: " + nome);
// }

//Exemplo 3 ----- FOR Tabuada
const leia = require("readline-sync");
let numero, contador;

numero = leia.question("Calcule a tabuada: ");
for (contador = 1; contador <= 10; contador++) {
  console.log(numero + " x " + contador + " = " + numero * contador);
}
