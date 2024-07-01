// //Exemplo 1:
// let n1 = 4,
//   n2 = 3,
//   n3 = 4;
// if (n1 < 5) {
//   console.log("O número 1 é menor do que 5.");
// }
// if (n1 < n2) {
//   console.log("O número 1 é menor do que o número 2.");
// }
// if (n1 == n3) console.log("O número 1 e o número 3 são iguais.");

// //Exemplo 2:
// ﻿let idade = 18;
// let carteiraM = true;

// if (idade >= 18 && carteiraM == true) {
//   console.log("Você pode dirigir.");
// }

// //Exemplo 3: --------- Exemplo das notas e da MEDIA -------
// ﻿const leia = require("readline-sync");
// let nota1, nota2, media;
// nota1 = leia.questionFloat("Digite a primeira Nota: ");
// nota2 = leia.questionFloat("Digite a segunda Nota: ");
// media = (nota1 + nota2) / 2;
// if (media >= 6) {
//   console.log("Parabéns, você foi aprovade!");
// } else {
//   console.log("Infelizmente você foi reprovade...");
// }

//-------------------ELSE IF----------------
// //Exemplo 4: --------- MEDIA COM ELSE IF-------
// const leia = require("readline-sync");
// let nota1, nota2, media;
// nota1 = leia.questionFloat("Digite a primeira Nota: ");
// nota2 = leia.questionFloat("Digite a segunda Nota: ");
// media = (nota1 + nota2) / 2;
// if (media >= 6) {
//   console.log("Parabéns, você foi aprovade!");
// } else if (media == 5) {
//   console.log("Alune de exame!");
// } else {
//   console.log("Infelizmente você foi reprovade...");
// }

// //Exemplo 5: ---------------VAR ESCOPO GLOBAL
// var escopoGlobal = "mensagem fora do if"; //Variavel de ESCOPO GLOBAL VAR
// if (true) {
//   var escopoLocal = "mensagem dentro do if";
//   console.log(escopoLocal);
// }
// console.log(escopoGlobal);
// console.log(escopoLocal);

// //Exemplo 6: --------- ESCOPO LOCAL ------------ dá erro
// let escopoGlobal = 'mensagem fora do if';
// if (true) {
//     let escopoLocal = 'mensagem dentro do if';
//     console.log(escopoLocal);
// }
// console.log(escopoGlobal);
// console.log(escopoLocal);

// //Exemplo 7:
// ﻿const leia = require("readline-sync");
// let nota1, nota2, media;
// nota1 = leia.questionFloat("Digite a primeira Nota: ");
// nota2 = leia.questionFloat("Digite a segunda Nota: ");
// media = (nota1 + nota2) / 2;
// if (media >= 6) {
//   console.log("Aprovado!");
// } else {
//   console.log("Reprovado!");
// }

// //Exemplo 8:
// ﻿const leia = require("readline-sync");
// let nota1, nota2, media;
// nota1 = leia.questionFloat("Digite a primeira Nota: ");
// nota2 = leia.questionFloat("Digite a segunda Nota: ");
// media = (nota1 + nota2) / 2;
// console.log((media >= 6) ? "Aprovado!" : "Reprovado!");
