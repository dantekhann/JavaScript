//---------------ENTRADA DE DADOS---------------
const leia = require('readline-sync');
// adiciona todas as funcionalidades da biblioteca nesta variavel

//let mensagem;

//mensagem = leia.question("\nDigite um valor do tipo string: ");
//console.log("O valor string digitado foi: " + mensagem);

//Declaracao de uma variavel SEM atribuicao de valor

const leia = require('readline-sync');

let quantidade;
let altura;
let tipo;
let nome;
let resposta;

quantidade = leia.questionInt('\nDigite um valor do tipo Inteiro: ', { limitMessage: 'Digite um numero inteiro' });
console.log('O valor inteiro digitado foi: ' + quantidade);
// quantidade foi classificado como um valor inteiro, numeros com casas decimais sao arredondados

altura = leia.questionFloat('\nDigite um valor do tipo flutuante: ', { limitMessage: 'Digite um numero flutuante' });
console.log('O valor flutuante digitado foi: ' + altura);
// altura foi classificado como flutuante devido as casas decimais

tipo = leia.keyIn('\nDigite um valor do tipo caracter: ', { limitMessage: 'Digite um caracter' });
console.log('O caracter digitado foi: ' + tipo);
// keyIn recebe apenas um caractere


nome = leia.question('\nDigite um valor do tipo string: ');
console.log('O nome digitado foi: ' + nome);
// variavel do tipo string

resposta = leia.keyInYNStrict('\nDigite o valor do tipo Booleano: ');
console.log('O valor Booleano inserido foi: ' + resposta)
// uma resposta booleana de true or false

