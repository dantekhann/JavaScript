let salariobruto = 2000.00;
let adicionalnoturno = 500.00;
let horasextras = 100.00;
let horas = 5.00;
// variável adicional customizavel com horas e minutos
let descontos = 200.00;

console.log('\nO salário líquido será $: ' + (salariobruto + adicionalnoturno + (horasextras * horas) - descontos).toFixed(2))
//adicionei o $ para indicar valor monetário e restringi a 2 casas decimais por se tratar de moeda