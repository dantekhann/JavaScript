const leia = require("readline-sync");

let opcao;
let nome;
let salario;

console.log("# ## ### #### #########   CARGOS   ########## #### ### ## #");
console.log("\n Produtos e seus valores: ");
console.log("\n 1 -- Gerente -- Reajuste de 10% ");
console.log("\n 2 -- Vendedor -- Reajuste de 7% ");
console.log("\n 3 -- Supervisor -- Reajuste de 9% ");
console.log("\n 4 -- Motorista -- Reajuste de 6% ");
console.log("\n 5 -- Estoquista -- Reajuste de 5% ");
console.log("\n 6 -- Técnico de TI -- Reajuste de 8% ");

nome = leia.question("Digite o Nome do Colaborador: ");
opcao = leia.questionInt("Digite o Codigo do Cargo: ");
salario = leia.questionFloat("Insira seu Salario: ");
if (salario <= 0) {
  //situacao de valor negativo ou nulo
  console.log("Salario Negativo ou Nulo");
  return;
}

switch (opcao) {
  case 1: //Gerente
    console.log("Nome do Colaborador:" + nome);
    console.log("Cargo: Gerente");
    console.log("Novo Salario: $ " + (1.1 * salario).toFixed(2));
    break;
  case 2: //Vendedor
    console.log("Nome do Colaborador:" + nome);
    console.log("Cargo: Vendedor");
    console.log("Novo Salario: $ " + (1.07 * salario).toFixed(2));
    break;
  case 3: //Supervisor
    console.log("Nome do Colaborador:" + nome);
    console.log("Cargo: Supervisor");
    console.log("Novo Salario: $ " + (1.09 * salario).toFixed(2));
    break;
  case 4: //Motorista
    console.log("Nome do Colaborador:" + nome);
    console.log("Cargo: Motorista");
    console.log("Novo Salario: $ " + (1.06 * salario).toFixed(2));
    break;
  case 5: //Estoquista
    console.log("Nome do Colaborador:" + nome);
    console.log("Cargo: Estoquista");
    console.log("Novo Salario: $ " + (1.05 * salario).toFixed(2));
    break;
  case 6: //Colaborador
    console.log("Nome do Colaborador:" + nome);
    console.log("Cargo: Técnico de TI");
    console.log("Novo Salario: $ " + (1.08 * salario).toFixed(2));
    break;
  default: //Cargo inexistente
    console.log("Cargo Inexistente!");
}
