Este exercicio nao foi feito 
//Para análise didática usei o chat GPT
const { questionInt } = require("readline-sync");

function lerMatriz() {
  let matriz = [];
  // Lendo a matriz 3x3 (lembrando que matriz comeca na posicao (0,0) e vai ate (2,2)
  for (let i = 0; i < 3; i++) {
    matriz[i] = [];
    for (let j = 0; j < 3; j++) {
      //j < 3 porque a matriz e 3x3 logo termina em (2,2)
      matriz[i][j] = questionInt(`Digite o valor para a posicao [${i}][${j}]:`);
    }
  }
  return matriz;
}

function mostrarDiagonalPrincipal(matriz) {
  let elementos = [];
  for (let i = 0; i < 3; i++) {
    elementos.push(matriz[i][i]);
  }
  console.log("Elementos da Diagonal Principal:", elementos.join(", "));
}

function mostrarDiagonalSecundaria(matriz) {
  let elementos = [];
  for (let i = 0; i < 3; i++) {
    elementos.push(matriz[i][2 - i]);
  }
  console.log("Elementos da Diagonal Secundária:", elementos.join(", "));
}

function calcularSomaDiagonalPrincipal(matriz) {
  let soma = 0;
  for (let i = 0; i < 3; i++) {
    soma += matriz[i][i];
  }
  return soma;
}

function calcularSomaDiagonalSecundaria(matriz) {
  let soma = 0;
  for (let i = 0; i < 3; i++) {
    soma += matriz[i][2 - i];
  }
  return soma;
}

// Exemplo de uso:
let matriz = lerMatriz();
console.log("Matriz informada:", matriz);

mostrarDiagonalPrincipal(matriz);
mostrarDiagonalSecundaria(matriz);

let somaDiagonalPrincipal = calcularSomaDiagonalPrincipal(matriz);
let somaDiagonalSecundaria = calcularSomaDiagonalSecundaria(matriz);

console.log("Soma da Diagonal Principal:", somaDiagonalPrincipal);
console.log("Soma da Diagonal Secundária:", somaDiagonalSecundaria);

//criar matriz para visualiza
console.table(matriz);