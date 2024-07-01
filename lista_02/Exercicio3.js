const leia = require("readline-sync");

let idade;
let doacao;
let nome;

nome = leia.question("Digite seu Nome ");
idade = leia.questionInt("Digite uma Idade: ");
doacao = leia.questionInt("Digite Quantas Doacoes Voce Ja Fez: ");

if (idade >= 18 && idade <= 59) {
  console.log(nome, "está apto para doar");
} else {
  console.log(nome, "nao está apto para doar");
}
if (idade >= 60 && idade <= 69) {
  if (doacao >= 1) {
    console.log(nome, "está apto para doar");
  } else {
    console.log(nome, "nao está apto para doar");
  }
}
