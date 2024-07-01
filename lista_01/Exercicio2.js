const leia = require('readline-sync');

let nota1;
let nota2;
let nota3;
let nota4;

nota1 = leia.questionFloat('\nDigite uma primeira nota: ', { limitMessage: 'Digite um numero flutuante' });
console.log('O valor digitado foi: ' + nota1);
nota2 = leia.questionFloat('\nDigite uma segunda nota: ', { limitMessage: 'Digite um numero flutuante' });
console.log('O valor digitado foi: ' + nota2);
nota3 = leia.questionFloat('\nDigite uma terceira nota: ', { limitMessage: 'Digite um numero flutuante' });
console.log('O valor digitado foi: ' + nota3);
nota4 = leia.questionFloat('\nDigite uma quarta nota: ', { limitMessage: 'Digite um numero flutuante' });
console.log('O valor digitado foi: ' + nota4);

//variáveis customizáveis e com retornos para o usuário, também pode-se utilizar números não inteiros

console.log('\nA média final é: ' + ((nota1 + nota2 + nota3 + nota4) / 4).toFixed(1))

//let nota1 = 10.0;
//let nota2 = 8.0;
//let nota3 = 7.0;
//let nota4 = 7.5;
