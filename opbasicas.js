const readline = require('readline-sync');
const entradaInicial = readline.question('Qual operacao deseja realizar? ');

function adicao () {
    let numero1 = readline.question('Selecione o primeiro numero: ');
    let numero2 = readline.question('Selecione o segundo numero: ');
    let resultado = parseInt(numero1) + parseInt(numero2);
    console.log(`${numero1} mais ${numero2} e igual a ${resultado}`);
}

function subtracao () {
    let numero1 = readline.question('Selecione o primeiro numero: ');
    let numero2 = readline.question('Selecione o segundo numero: ');
    let resultado = parseInt(numero1) - parseInt(numero2);
    console.log(`${numero1} menos ${numero2} e igual a ${resultado}`);
}

if (entradaInicial.toLocaleLowerCase() === 'adicao') {
    adicao();
}
if (entradaInicial.toLocaleLowerCase() === 'subtracao') {
    subtracao();
}