// let x = true;
// let y = false;
// if (x == true) {
//   console.log("X é verdadeiro");
// }
// if (y) {
//   ("Y é verdadeiro");
// }
// // y não aparece ao rodar o código pois foi dado como falso

////EXEMPLO IF COM UMA CONDIÇÃO
// let n1 = 4;
// n2 = 3;
// n3 = 4;
// if (n1 < 5) {
//   console.log("\nO número 1 é menor do que 5. ");
// }
// if (n1 < n2) {
//   console.log("\nO número 1 é menor do que o número 2. ");
// }
// if (n1 == n3) {
//   console.log("\nO número 1 é igual ao número 3. ");
// }

// //EXEMPLO IF COM DUAS OU MAIS CONDIÇÕES ----- IF-ELSE
let idade = 18;
let carteiraM = true;

if (idade >= 18 && carteiraM == true) { //Utilizou a única situação verdadeira para excluir as demais sem ir caso a caso
  console.log("Você pode dirigir. ");
} else { //Exclui todas as outras possibilidades que não atendam a condição verdadeira
  console.log("Você não pode dirigir. ");
}
