const leia = require("readline-sync");

let n1;
let n2;
let opcao;

console.log(
  "# ## ### #### #########   OPERACOES MATEMATICAS   ########## #### ### ## #"
);
console.log("\n 1 -- Soma ");
console.log("\n 2 -- Subtracao ");
console.log("\n 3 -- Multiplicacao ");
console.log("\n 4 -- Divisao ");

opcao = leia.questionInt("\nDigite o Coodigo da Operacao: ");
n1 = leia.questionFloat("\nInsira um Primeiro Numero Real: ");
n2 = leia.questionFloat("\nInsira um segundo numero Real: ");

switch (opcao) {
  case 1:
    console.log(n1 + n2);
    break;
  case 2:
    console.log(n1 - n2);
    break;
  case 3:
    console.log(n1 * n2);
    break;
  case 4:
    console.log(n1 / n2);
    break;
  default:
    console.log("Opção inválida!");
}
