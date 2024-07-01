const leia = require("readline-sync");

let opcao;
let quantidade;

console.log("# ## ### #### #########   Menu   ########## #### ### ## #");
console.log("\n Produtos e seus valores: ");
console.log("\n 1 -- Cachorro Quente -- Preço R$10,00");
console.log("\n 2 -- X-Salada -- Preço R$15,00 ");
console.log("\n 3 -- X-Bacon -- Preço R$18,00 ");
console.log("\n 4 -- Bauru -- Preço R$12,00");
console.log("\n 5 -- Refrigerante -- Preço R$8,00 ");
console.log("\n 6 -- Suco de Laranja -- Preço R$13,00 ");

opcao = leia.questionInt("Digite o Codigo do Produto: ");
quantidade = leia.questionInt("Digite a quantidade de Produto(s) desejada: ");

switch (opcao) {
  case 1:
    console.log(
      "O valor total do/s Cachorro Quente foi de $" + 10 * quantidade
    );
    break;
  case 2:
    console.log("O valor total do/s X-Salada foi de $" + 15 * quantidade);
    break;
  case 3:
    console.log("O valor total do/s X-Bacon foi de $" + 18 * quantidade);
    break;
  case 4:
    console.log("O valor total do/s Bauru foi de $" + 12 * quantidade);
    break;
  case 5:
    console.log("O valor total do/s Refrigerante foi de $" + 8 * quantidade);
    break;
  case 6:
    console.log(
      "O valor total do/s Suco de Laranja foi de $" + 13 * quantidade
    );
    break;
  default:
    console.log("Opção inválida!");
}
