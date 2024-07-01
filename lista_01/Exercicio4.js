const leia = require('readline-sync');

let n1;
let n2;
let n3;
let n4;

n1 = leia.questionFloat('\nDigite um valor do tipo Flutuante: ', { limitMessage: 'Digite um numero flutuante' });
console.log('O valor flutuante digitado foi: ' + n1);
n2 = leia.questionFloat('\nDigite um valor do tipo Flutuante: ', { limitMessage: 'Digite um numero flutuante' });
console.log('O valor flutuante digitado foi: ' + n2);
n3 = leia.questionFloat('\nDigite um valor do tipo Flutuante: ', { limitMessage: 'Digite um numero flutuante' });
console.log('O valor flutuante digitado foi: ' + n3);
n4 = leia.questionFloat('\nDigite um valor do tipo Flutuante: ', { limitMessage: 'Digite um numero flutuante' });
console.log('O valor flutuante digitado foi: ' + n4);

//variáveis customizáveis e com retornos para o usuário, também pode-se utilizar números não inteiros

console.log('\nA diferença é: ' + ((n1 * n2) - (n3 * n4)).toFixed(1))

//optei por fixar em uma casa decimal seguindo o exemplo da questão, mas é possível alterar conforme a necessidade