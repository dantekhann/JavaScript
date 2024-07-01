// Exemplo 1:
// ﻿let x = 4;
// let y = 2;
// let z = 3;
// let w = -5;
// console.log("Soma (4+2): " + (x + y));
// console.log("\nSoma com numero negativo (4 + (-5)): " + (x + w));
// console.log("\nSubtração (4-2): " + (x - y));
// console.log("\nMultiplicação (4*2): " + x * y);
// console.log("\nDivisão (4/2): " + x / y);
// console.log("\nMódulo (resto da divisão): " + (x % 2)); //numero par
// console.log("\nMódulo (resto da divisão): " + (z % 2)); //numero impar
// console.log("\nResultado da operação x + y * z: " + (x + y * z));
// console.log("\nResultado da operação (x + y) * z: " + (x + y) * z);
//Executa as operacoes e as insere na ordem em que aparecem

// Exemplo 2:
// ﻿let texto01 = "Generation";
// let texto02 = "Brasil";
// let texto03 = " ";
// console.log("Concatenar texto01 e texto02: " + texto01 + texto02); //junta o texto sem espacamento
// console.log("\nConcatenar texto02 e texto01: " + texto02 + texto01); //junta o texto sem espacamento
// console.log(
//   "\nConcatenar texto01, texto03 e texto02: " + texto01 + texto03 + texto02); //junta o texto COM espacamento inserindo uma variavel vazia

//Exemplo 3:-----------------TIRAR DUVIDA - USO DA SINTAXE COM ${}------------------------
// ﻿let atividades = 90.5, presenca = 100.0;
// console.log(`O participante possui ${atividades}% de atividades entregues.`);
// //console.log('O participante possui: ' + atividades + '% de atividades entregues.');
// console.log(`O participante possui ${presenca}% de presença nas sessões.`);
// //console.log('O participante possui: ' + presenca + '% de atividades entregues.');

//Exemplo 4: 
// let x = 10;
// let y = 8;
// let z = 6;
// let w = 4;
// let i = 40;
// let j = 30;
// let k = 20;
// let l = 10;
// let m = 5;
// console.log("\nTransformar em Número negativo: " + -m);
// console.log("\nPré Incrementar: x = ++ y");
// x = ++y;
// console.log("\nValor de X: " + x);
// console.log("\nValor de Y: " + y);
// console.log("\nPré Decrementar: z = -- w");
// z = --w;
// console.log("\nValor de Z: " + z);
// console.log("\nValor de W: " + w);
// console.log("\nPós Incrementar: i = j ++");
// i = j++;
// console.log("\nValor de I: " + i);
// console.log("\nValor de J: " + j);
// console.log("\nPós Decrementar: k = l --");
// k = l--;
// console.log("\nValor de K: " + k);
// console.log("\nValor de L: " + l);

// //Exemplo 5:
// ﻿let x = 4;
// let y = 2;
// let z = 1;
// z = y;
// console.log("Atribuição simples (z = y): " + z);
// x += y;
// console.log("\nAtribuição com soma (x = x + y): " + x);
// x -= z;
// console.log("\nAtribuição com subtração (x = x - z): " + x);
// x *= y;
// console.log("\nAtribuição com multiplicação (x = x * y): " + x);
// x /= y;
// console.log("\nAtribuição com divisão (x = x / y): " + x);
// x %= y;
// console.log("\nAtribuição com o Módulo (x = x % y): " + x);

// //Exemplo 6:
// let x = 10;
// let y = 5;
// let z = 20;
// let w = 5;
// let resposta; //dado boleano
// resposta = x > y;
// console.log("O valor de x é maior do que o valor de y? " + resposta);
// resposta = z >= y;
// console.log("\nO valor de z é maior ou igual ao valor de y? " + resposta);
// resposta = x < z;
// console.log("\nO valor de x é menor do que o valor de z? " + resposta);
// resposta = z <= w;
// console.log("\nO valor de z é menor ou igual ao valor de w? " + resposta);

// //Exemplo 7:
// let x = 10;
// let y = "10";
// let z = 10;
// let resposta;
// resposta = x == y;
// console.log("\nO valor de x é igual ao valor de y? " + resposta); //idependente das aspas ele considera x igual a y - true
// resposta = x === y;
// console.log("\nO valor de x é estritamente igual ao valor de y? " + resposta);
// resposta = x == z;
// console.log("\nO valor de x é igual ao valor de z? " + resposta);
// resposta = x === z;
// console.log("\nO valor de x é estritamente igual ao valor de z? " + resposta);
// resposta = x != y;
// console.log("\nO valor de x é diferente do valor de y? " + resposta); //mesmo com as aspas ele considera os numeros iguais - false
// resposta = x !== y;
// console.log("\nO valor de x é estritamente diferente o valor de y? " + resposta);
// resposta = x != z;
// console.log("\nO valor de x é diferente do valor de z? " + resposta);
// resposta = x !== z;
// console.log("\nO valor de x é estritamente diferente do valor de z? " + resposta);

// //Exemplo 8:
// let x = 10;
// let y = 5;
// let proposicao_01;
// let proposicao_02;
// let resposta;
// proposicao_01 = x > y;
// console.log("\nA proposicao_01 é: " + proposicao_01); //true
// proposicao_02 = x < y;
// console.log("\nA proposicao_02 é: " + proposicao_02);//false
// console.log("\n\nNegação\n"); //os \n criam o distanciamento entre as linhas, cada \n e uma linha
// resposta = !proposicao_01; //a exclamacao inverte o dado boleano ou seja inverte true de false e vice versa
// console.log("\nA Negação da proposicao_01 é: " + resposta);//false
// resposta = !proposicao_02;
// console.log("\nA Negação da proposicao_02 é: " + resposta);//true

// //Exemplo 9:--------------USO DO && "E"------------------------
// ﻿let x = 10;
// let y = 5;
// let proposicao_01;
// let proposicao_02;
// let proposicao_03;
// let proposicao_04;
// let resposta;
// proposicao_01 = x > y;
// console.log("\nA proposicao_01 é: " + proposicao_01);
// proposicao_02 = x < y;
// console.log("\nA proposicao_02 é: " + proposicao_02);
// proposicao_03 = x != y;
// console.log("\nA proposicao_03 é: " + proposicao_03);
// proposicao_04 = x == y;
// console.log("\nA proposicao_04 é: " + proposicao_04);
// console.log("\n\nConjunção\n");
// resposta = proposicao_01 && proposicao_03;
// console.log("\nproposicao_01 e proposicao_03: " + resposta);
// resposta = proposicao_02 && proposicao_04;
// console.log("\nproposicao_02 e proposicao_04: " + resposta);
// resposta = proposicao_01 && proposicao_02;
// console.log("\nproposicao_01 e proposicao_02: " + resposta);
// resposta = proposicao_03 && proposicao_04;
// console.log("\nproposicao_03 e proposicao_04: " + resposta);

// //Exemplo 10: -------- USO DO || "OU"-----------------------------
// ﻿let x = 10;
// let y = 5;
// let proposicao_01;
// let proposicao_02;
// let proposicao_03;
// let proposicao_04;
// let resposta;
// proposicao_01 = x > y;
// console.log("\nA proposicao_01 é: " + proposicao_01);
// proposicao_02 = x < y;
// console.log("\nA proposicao_02 é: " + proposicao_02);
// proposicao_03 = x != y;
// console.log("\nA proposicao_03 é: " + proposicao_03);
// proposicao_04 = x == y;
// console.log("\nA proposicao_04 é: " + proposicao_04);
// console.log("\n\nDisjunção\n");
// resposta = proposicao_01 || proposicao_03;
// console.log("\nproposicao_01 ou proposicao_03: " + resposta);
// resposta = proposicao_01 || proposicao_02;
// console.log("\nproposicao_01 ou proposicao_02: " + resposta);
// resposta = proposicao_03 || proposicao_04;
// console.log("\nproposicao_03 ou proposicao_04: " + resposta);
// resposta = proposicao_02 || proposicao_04;
// console.log("\nproposicao_02 ou proposicao_04: " + resposta);

// //Exemplo 11:-------- USO DO ^ OPERADOR DISJUNTOR EXCLUSIVO-----------------------------
// //Disjunção Exclusiva(OU exclusivo) ^ Valida apenas se um dos dois dados apresentados for verdadeiro e o outro dado for falso
// //A resposta desse exemplo teve saida em binario
// ﻿let x = 10;
// let y = 5;
// let proposicao_01;
// let proposicao_02;
// let proposicao_03;
// let proposicao_04;
// let resposta;

// proposicao_01 = x > y;
// console.log("\nA proposicao_01 é: " + proposicao_01);

// proposicao_02 = x < y;
// console.log("\nA proposicao_02 é: " + proposicao_02);

// proposicao_03 = x != y;
// console.log("\nA proposicao_03 é: " + proposicao_03);

// proposicao_04 = x == y;
// console.log("\nA proposicao_04 é: " + proposicao_04);

// console.log("\n\nDisjunção Exclusiva\n");

// resposta = proposicao_01 ^ proposicao_03;
// console.log("\nproposicao_01 ^ proposicao_03: " + resposta);

// resposta = proposicao_01 ^ proposicao_02;
// console.log("\nproposicao_01 ^ proposicao_02: " + resposta);

// resposta = proposicao_03 ^ proposicao_04;
// console.log("\nproposicao_03 ^ proposicao_04: " + resposta);

// resposta = proposicao_02 ^ proposicao_04;
// console.log("\nproposicao_02 ^ proposicao_04: " + resposta);