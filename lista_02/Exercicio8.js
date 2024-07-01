const leia = require("readline-sync");

let saldoinicial = 1000;
let opcao;

console.log("# ## ### #### #########   SERVICOS   ########## #### ### ## #");
console.log("\n 1 -- Consultar Saldo");
console.log("\n 2 -- Saque ");
console.log("\n 3 -- Fazer Depósito ");

opcao = leia.questionInt("Digite o Codigo do Servico: ");

switch (opcao) {
  case 1: //saldo
    console.log("Saldo $" + saldoinicial);
    break;
  case 2: //saque
    saque = leia.questionInt("Digite o valor que deseja sacar $: ");
    if (saque > saldoinicial) {
      //saque maior que o saldo
      console.log("Saldo Indisponível");
      break;
    }
    if (saque < 0) {
      //saque negativo
      console.log("Valor inválido!");
      break;
    } else {
      //saque realizado
      console.log("Novo Saldo $" + (saldoinicial - saque));
      break;
    }
  case 3: //deposito
    deposito = leia.questionInt("Digite o valor que deseja depositar $: ");
    if (deposito >= 0) {
      console.log("Novo Saldo $:" + (saldoinicial + deposito));
      break;
    } else {
      //deposito negativo
      console.log("Valor Inválido!");
      break;
    }
  default: //opcao invalida
    console.log("Opção inválida!");
}
