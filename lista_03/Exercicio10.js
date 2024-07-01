const leia = require("readline-sync");

let matriz = new Array(10);
let matrizmedia = [];
let soma = 0;

for (let i = 0; i < matriz.length; i++) {
  matriz[i] = new Array(4);
}

for (let j = 0; j < matriz.length; j++) {
  for (let j = 0; j < matriz.length; j++) {
    matriz[i][j] = entrada.questionFloat;(`Digite uma nota [$(i)][$(j)]:`);
  }
}

//------------------------------------------Para análise didática usei o chat GPT
// const { questionFloat } = require("readline-sync");

// // Definir uma função para calcular as médias das notas dos participantes
// function calcularMedias() {
//     // Matriz para armazenar as notas dos participantes
//     let notas = [];
//     // Vetor para armazenar as médias dos participantes
//     let medias = [];

//     // Loop para ler as notas de cada participante
//     for (let i = 0; i < 10; i++) {
//         // Array temporário para armazenar as notas de um participante
//         let notasParticipante = [];

//         // Ler as 4 notas dos 4 bimestres
//         for (let j = 0; j < 4; j++) {
//             let nota = questionFloat((`Digite a nota do ${j+1}º bimestre para o participante ${i+1}:`));
//             notasParticipante.push(nota);
//         }

//         // Adicionar as notas do participante na matriz
//         notas.push(notasParticipante);

//         // Calcular a média das notas do participante
//         let soma = 0;
//         for (let k = 0; k < 4; k++) {
//             soma += notasParticipante[k];
//         }
//         let media = soma / 4;

//         // Adicionar a média no vetor de médias
//         medias.push(media);
//     }

//     // Exibir as médias dos participantes
//     console.log("Médias dos participantes:");
//     for (let i = 0; i < 10; i++) {
//         console.log(`Participante ${i+1}: ${medias[i]}`);
//     }
// }

// // Chamada da função para iniciar o processo
// calcularMedias();
